const path = require("path"),
  fs = require("fs-extra"),
  ffmpeg = require("fluent-ffmpeg"),
  pad = require("pad-left"),
  writeFileAtomic = require("write-file-atomic"),
  { v4: uuidv4 } = require("uuid");

const utils = require("./utils"),
  folder = require("./folder"),
  file = require("./file"),
  notifier = require("./notifier");

const ffmpegPath = require("ffmpeg-static").replace(
  "app.asar",
  "app.asar.unpacked"
);
const ffprobePath = require("ffprobe-static").path.replace(
  "app.asar",
  "app.asar.unpacked"
);

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

class Exporter {
  constructor({ path_to_folder, path_to_parent_folder, instructions }) {
    this.id = uuidv4();
    this.path_to_folder = path_to_folder;
    this.path_to_parent_folder = path_to_parent_folder;

    this.instructions = instructions;
    this.status = "ready";
  }

  async start() {
    this.status = "started";

    let full_path_to_file;
    let desired_filename;

    if (this.instructions.recipe === "stopmotion") {
      full_path_to_file = await this._createStopmotionFromImages();
      desired_filename = "stopmotion.mp4";
    } else if (this.instructions.recipe === "pdf") {
      full_path_to_file = await this._loadPageAndPrint();
      desired_filename = "publication.pdf";
    } else {
      throw new Error(`recipe_handling_missing`);
    }

    if (this.status === "aborted") {
      // todo remove full_path_to_file
      this._notifyEnded({
        event: "aborted",
      });
      throw new Error(`aborted`);
    }

    const meta_filename = await file.addFileToFolder({
      full_path_to_file,
      desired_filename,
      path_to_folder: this.path_to_parent_folder,
    });

    this._notifyEnded({
      event: "finished",
      path: path.join(this.path_to_parent_folder, meta_filename),
    });

    return meta_filename;
  }
  abort() {
    if (this.ffmpeg_cmd) this.ffmpeg_cmd.kill();
    this.status = "aborted";
  }

  async _loadFilesInOrder() {
    const folder_meta = await folder.getFolder({
      path_to_folder: this.path_to_folder,
    });
    const files = await file.getFiles({ path_to_folder: this.path_to_folder });

    const list_of_metas_in_order = folder_meta[this.instructions.field];
    const selected_files = list_of_metas_in_order.map((lf) =>
      files.find((f) => f.$path.endsWith("/" + lf))
    );
    return selected_files;
  }

  _createStopmotionFromImages() {
    return new Promise(async (resolve, reject) => {
      // we need to copy all images to a temp folder with the right naming
      const images = await this._loadFilesInOrder();

      this._notifyProgress(5);

      const width = images[0].$infos.width || 1280;
      const height = images[0].$infos.height || 720;
      const resolution = { width, height };

      const full_path_to_folder_in_cache =
        await this._copyToCacheAndRenameImages({
          images,
          resolution,
        });

      const new_video_name =
        "stopmotion_" +
        +new Date() +
        (Math.random().toString(36) + "00000000000000000").slice(2, 3 + 2) +
        ".mp4";
      const full_path_to_new_video = path.join(
        full_path_to_folder_in_cache,
        new_video_name
      );

      const _removeAllImages = async () => {
        // todo implement this
        // await fs.remove(path.join(full_path_to_folder_in_cache, "*.jpeg"));
      };

      this._notifyProgress(10);

      const frame_rate = this.instructions.frame_rate || 4;
      const output_frame_rate = 30;

      this.ffmpeg_cmd = new ffmpeg(global.settings.ffmpeg_options)
        .input(path.join(full_path_to_folder_in_cache, "img-%04d.jpeg"))
        .inputFPS(frame_rate)
        .withVideoCodec("libx264")
        .withVideoBitrate("4000k")
        .input("anullsrc")
        .inputFormat("lavfi")
        .duration(images.length / frame_rate)
        .size(`${width}x${height}`)
        .outputFPS(output_frame_rate)
        .autopad()
        .addOptions(["-preset slow", "-tune animation"])
        .toFormat("mp4")
        .on("start", (commandLine) => {
          dev.logverbose("Spawned Ffmpeg with command: \n" + commandLine);
        })
        .on("progress", (progress) => {
          // value from 0 to 100
          const adv =
            (progress.frames /
              ((images.length / frame_rate) * output_frame_rate)) *
            100;

          const remap = function (val, in_min, in_max, out_min, out_max) {
            return (
              ((val - in_min) * (out_max - out_min)) / (in_max - in_min) +
              out_min
            );
          };

          const progress_percent = Math.round(remap(adv, 0, 100, 15, 90));

          this._notifyProgress(progress_percent);
        })
        .on("end", async () => {
          dev.logverbose("Video ended");

          this._notifyProgress(95);

          await _removeAllImages();
          return resolve(full_path_to_new_video);
        })
        .on("error", async (err, stdout, stderr) => {
          dev.error("An error happened: " + err.message);
          dev.error("ffmpeg standard output:\n" + stdout);
          dev.error("ffmpeg standard error:\n" + stderr);
          await _removeAllImages();
          this._notifyEnded({
            event: "failed",
            info: err.message,
          });

          return reject(err);
        })
        .save(full_path_to_new_video);
    });
  }
  _notifyProgress(progress) {
    notifier.emit("taskStatus", "task_" + this.id, {
      task_id: this.id,
      progress,
    });
  }
  _notifyEnded(message) {
    notifier.emit("taskEnded", "task_" + this.id, {
      task_id: this.id,
      message,
    });
  }

  async _copyToCacheAndRenameImages({ images, resolution }) {
    let full_path_to_folder_in_cache = await utils.createFolderInCache(
      "stopmotion"
    );

    let index = 0;

    for (const image of images) {
      const path_to_image =
        image.$path.substring(0, image.$path.lastIndexOf("/") + 1) +
        image.$media_filename;
      const source = utils.getPathToUserContent(path_to_image);
      const destination = path.join(
        full_path_to_folder_in_cache,
        "img-" + pad(index, 4, "0") + ".jpeg"
      );

      await utils.convertAndCopyImage({ source, destination, resolution });
      // await fs.copy(source, destination);
      index++;
    }

    return full_path_to_folder_in_cache;
  }

  _loadPageAndPrint() {
    return new Promise(async (resolve, reject) => {
      // convert path_to_folder to URL (see createURLFromPath)
      const path_without_space = this.path_to_folder
        .replace("spaces/", "/+")
        .replace("projects/", "");

      const url = global.appInfos.homeURL + path_without_space;

      // open page https://localhost:8080/projects/hehe/publications/test-pages/
      const { BrowserWindow } = require("electron");

      const document_size = {
        width: this.instructions.page_width * 10 || 210,
        height: this.instructions.page_height * 10 || 297,
      };

      let win = new BrowserWindow({
        // width: 800,
        // height: 800,
        width: Math.floor(document_size.width * 3.78),
        height: Math.floor(document_size.height * 3.78) + 25,
        show: false,
        webPreferences: {
          contextIsolation: true,
          allowRunningInsecureContent: true,
        },
      });
      win.loadURL(url);
      win.webContents.setAudioMuted(true);

      this._notifyProgress(5);

      let page_timeout = setTimeout(() => {
        clearTimeout(page_timeout);
        dev.error(`page timeout for ${url}`);
        if (win) win.close();
        return reject(new Error(`page-timeout`));
      }, 20_000);

      win.webContents.once("did-finish-load", async () => {
        dev.logverbose("did-finish-load " + url);
        this._notifyProgress(40);

        await new Promise((r) => setTimeout(r, 1000));

        this._notifyProgress(45);
        win.webContents
          .printToPDF({
            // electron < 21
            marginsType: 1,
            // electron >= 21
            margins: { marginType: "none" },
            pageSize: {
              width: document_size.width * 1000,
              height: document_size.height * 1000,
            },
            printBackground: true,
            printSelectionOnly: false,
          })
          .then(async (data) => {
            this._notifyProgress(80);
            dev.logverbose("printed-to-pdf " + url);

            if (win) win.close();

            clearTimeout(page_timeout);

            const full_path_to_folder_in_cache =
              await utils.createFolderInCache("pdf");

            const full_path_to_pdf = path.join(
              full_path_to_folder_in_cache,
              "temp.pdf"
            );

            await writeFileAtomic(full_path_to_pdf, data);

            this._notifyProgress(95);

            return resolve(full_path_to_pdf);
          })
          .catch((error) => {
            dev.logverbose("printed-to-pdf " + url);
            if (win) win.close();

            this._notifyEnded({
              event: "failed",
            });
            return reject(error);
          });
      });

      win.webContents.once(
        "did-fail-load",
        (event, code, desc, url, isMainFrame) => {
          dev.error(`Failed to load print pdf page ${url}`);
          clearTimeout(page_timeout);
          dev.error("did-fail-load: ", event, code, desc, url, isMainFrame);
          if (win) win.close();

          this._notifyEnded({
            event: "failed",
          });
          return reject(new Error(`did-fail-load`));
        }
      );
    });
    // print to pdf
  }
}

module.exports = Exporter;
