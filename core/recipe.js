const fs = require("fs-extra"),
  path = require("path"),
  ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(
  path.join(global.appRoot, "./ffmpeg-20190227-85051fe-win32-static/ffmpeg.exe")
);
ffmpeg.setFfmpegPath(
  path.join(
    global.appRoot,
    "./ffmpeg-20190227-85051fe-win32-static/ffprobe.exe"
  )
);

module.exports = (function() {
  return {
    applyRecipe: (
      { type, detail },
      base_media_path,
      slugFolderPath,
      newFileName,
      socket
    ) => {
      return new Promise(function(resolve, reject) {
        if (!type) {
          return reject(`Missing type or detail to make recipe`);
        }

        if (type === "rotate_image") {
          const new_media_path = path.join(slugFolderPath, newFileName);

          Jimp.read(new_media_path, function(err, image) {
            if (err) reject(err);
            image.rotate(90).write(new_media_path, function(err, info) {
              if (err) reject(err);
              dev.logverbose("Image has been saved, resolving its path.");
              resolve(newFileName);
            });
          });

          // sharp(base_media_path)
          //   .rotate(detail.angle)
          //   .withMetadata()
          //   .toBuffer(function(err, buffer) {
          //     if (err) {
          //       return reject(err);
          //     } else {
          //       fs.writeFile(new_media_path, buffer, function(e) {
          //         return resolve(newFileName);
          //       });
          //     }
          //   });
        } else if (type === "optimize_video") {
          const resolution = {
            width: 1280,
            height: 720
          };

          newFileName =
            new RegExp(global.settings.regexpRemoveFileExtension, "i").exec(
              newFileName
            )[1] + ".mp4";

          const new_media_path = path.join(slugFolderPath, newFileName);

          var ffmpeg_task = new ffmpeg();

          fs.unlink(new_media_path, err => {
            ffmpeg_task
              .input(base_media_path)
              .native()
              .outputFPS(30)
              .addOptions(["-af apad"])
              .withVideoCodec("libx264")
              .withVideoBitrate("6000k")
              .withAudioCodec("aac")
              .withAudioBitrate("128k")
              .size(`${resolution.width}x${resolution.height}`)
              .autopad()
              .videoFilter(["setsar=1"])
              .addOptions(["-shortest", "-bsf:v h264_mp4toannexb"])
              .toFormat("mp4")
              .output(new_media_path)
              .on("start", function(commandLine) {
                dev.logverbose("Spawned Ffmpeg with command: " + commandLine);
              })
              .on("progress", progress => {
                require("./sockets").notify({
                  socket,
                  localized_string: `creating_video`,
                  not_localized_string:
                    Number.parseFloat(progress.percent).toFixed(1) + "%"
                });
              })
              .on("end", () => {
                dev.logverbose(`Video conversion has been completed`);
                return resolve(newFileName);
              })
              .on("error", function(err, stdout, stderr) {
                dev.error("An error happened: " + err.message);
                dev.error("ffmpeg standard output:\n" + stdout);
                dev.error("ffmpeg standard error:\n" + stderr);
                return reject(`Couldn't convert video : ${err.message}`);
              })
              .run();
          });
        } else {
          return reject(`Unknow recipe type : ${type}`);
        }
      });
    }
  };
})();
