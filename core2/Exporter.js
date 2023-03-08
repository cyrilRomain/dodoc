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
      throw new Error(`aborted`);
    }

    const meta_filename = await file.addFileToFolder({
      full_path_to_file,
      desired_filename,
      path_to_folder: this.path_to_parent_folder,
    });

    this._notify({
      event: "ffmpeg_compilation_in_progress",
      progress_percent: 100,
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

      this._notify({
        event: "ffmpeg_compilation_in_progress",
        progress_percent: 0,
      });

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

      this._notify({
        event: "ffmpeg_compilation_in_progress",
        progress_percent: 10,
      });

      const frame_rate = this.instructions.frame_rate || 4;

      this.ffmpeg_cmd = new ffmpeg(global.settings.ffmpeg_options)
        .input(path.join(full_path_to_folder_in_cache, "img-%04d.jpeg"))
        .inputFPS(frame_rate)
        .withVideoCodec("libx264")
        .withVideoBitrate("4000k")
        .input("anullsrc")
        .inputFormat("lavfi")
        .duration(images.length / frame_rate)
        .size(`${width}x${height}`)
        .outputFPS(30)
        .autopad()
        .addOptions(["-preset slow", "-tune animation"])
        .toFormat("mp4")
        .on("start", (commandLine) => {
          dev.logverbose("Spawned Ffmpeg with command: \n" + commandLine);
        })
        .on("progress", (progress) => {
          // value from 0 to 100
          const adv =
            (progress.frames / ((images.length / frame_rate) * 30)) * 100;
          const progress_percent = Math.round(10 + adv * 0.85);

          this._notify({
            event: "ffmpeg_compilation_in_progress",
            progress_percent,
          });
        })
        .on("end", async () => {
          dev.logverbose("Video ended");

          this._notify({
            event: "ffmpeg_compilation_in_progress",
            progress_percent: 95,
          });

          await _removeAllImages();
          return resolve(full_path_to_new_video);
        })
        .on("error", async (err, stdout, stderr) => {
          dev.error("An error happened: " + err.message);
          dev.error("ffmpeg standard output:\n" + stdout);
          dev.error("ffmpeg standard error:\n" + stderr);
          await _removeAllImages();
          this._notify({
            event: "ffmpeg_compilation_failed",
            info: err.message,
          });

          return reject(err);
        })
        .save(full_path_to_new_video);
    });
  }
  _notify(message) {
    const task_id = "task_" + this.id;
    notifier.emit("taskStatus", task_id, {
      task_id,
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

  async _loadPageAndPrint() {
    const url = global.appInfos.homeURL + "/" + this.path_to_folder;

    const puppeteer = require("puppeteer");

    const document_size = {
      width: this.instructions.page_width * 10 || 210,
      height: this.instructions.page_height * 10 || 297,
    };

    // let page_timeout = setTimeout(() => {
    //   clearTimeout(page_timeout);
    //   dev.error(`page timeout for ${url}`);
    //   win.close();
    //   return reject(new Error(`page-timeout`));
    // }, 10_000);

    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
      args: ["--no-sandbox", "--font-render-hinting=none"],
    });
    const page = await browser.newPage();
    await page.goto(url);

    // Set screen size
    await page.setViewport({
      width: Math.floor(document_size.width * 3.7795),
      height: Math.floor(document_size.height * 3.7795), // totally arbitrary value… will have to find better
      deviceScaleFactor: 2,
    });

    page.emulateMediaType("print");

    await new Promise((r) => setTimeout(r, 1000));

    const full_path_to_folder_in_cache = await utils.createFolderInCache("pdf");
    const full_path_to_pdf = path.join(
      full_path_to_folder_in_cache,
      "temp.pdf"
    );

    await page.pdf({
      path: full_path_to_pdf,
      printBackground: true,
      width: `${document_size.width}mm`,
      height: `${document_size.height}mm`,
    });
    await browser.close();

    return full_path_to_pdf;
    // print to pdf
  }
}

module.exports = Exporter;
