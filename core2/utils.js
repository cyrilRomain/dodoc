const path = require("path"),
  TOML = require("@iarna/toml"),
  slugg = require("slugg"),
  validator = require("validator"),
  fs = require("fs-extra"),
  writeFileAtomic = require("write-file-atomic"),
  { networkInterfaces } = require("os"),
  sharp = require("sharp"),
  { IncomingForm } = require("formidable"),
  md5File = require("md5-file"),
  crypto = require("crypto");

sharp.cache(false);

module.exports = (function () {
  const API = {
    parseMeta(d) {
      return TOML.parse(d);
    },

    getPathToUserContent(...paths) {
      return path.join(global.pathToUserContent, ...paths);
    },

    slug(term) {
      dev.logfunction({ term });
      return slugg(term);
    },

    async storeMeta({ _path, meta }) {
      dev.logfunction({ _path, meta });

      if (typeof meta === "object") meta = TOML.stringify(meta);

      try {
        await writeFileAtomic(_path, meta);
        return;
      } catch (err) {
        throw err;
      }
    },
    getCurrentDate() {
      return new Date();
    },
    parseDate(date) {
      return new Date(date);
    },
    async readMetaFile(...paths) {
      dev.logfunction({ paths });

      const meta_path = API.getPathToUserContent(...paths);

      const meta_file_content = await fs
        .readFile(meta_path, "UTF-8")
        .catch((err) => {
          throw err;
        });
      return API.parseMeta(meta_file_content);
    },

    async readFileContent(...paths) {
      dev.logfunction({ paths });
      const file_path = API.getPathToUserContent(...paths);
      return await fs.readFile(file_path, "UTF-8");
    },

    async saveMetaAtPath({ relative_path, file_slug, meta }) {
      dev.logfunction({ relative_path, file_slug, meta });

      const meta_path = API.getPathToUserContent(relative_path, file_slug);
      await API.storeMeta({ _path: meta_path, meta });
      return;
    },

    makeRatio({ w, h }) {
      return +Number.parseFloat(h / w).toPrecision(4);
    },

    validateMeta({ fields, new_meta }) {
      dev.logfunction({ fields, new_meta });
      let meta = {};

      const predefined_fields = {
        $public: { type: "boolean" },
        $authors: { type: "array" },
        $password: { type: "string" },
      };
      fields = Object.assign({}, fields, predefined_fields);

      if (fields)
        Object.entries(fields).map(([field_name, opt]) => {
          if (
            new_meta.hasOwnProperty(field_name) &&
            opt.type === "string" &&
            new_meta[field_name] !== ""
          ) {
            meta[field_name] = new_meta[field_name];
            // TODO Validator
          } else {
            if (opt.required === true)
              // field is required in schema but not present in user-submitted object
              throw new Error(`Required field *${field_name}* is missing`);
          }
        });
      // see cleanNewMeta

      return meta;
    },
    async cleanNewMeta({ relative_path, new_meta }) {
      dev.logfunction({ relative_path, new_meta });
      // check fields in schema, make sure user added fields are allowed and with the right formatting
      // merge with validateMeta ?

      const { schema } = await API.parseAndCheckSchema({ relative_path });
      schema;

      return new_meta;
    },

    getLocalIP() {
      const nets = networkInterfaces();
      const results = Object.create(null); // Or just '{}', an empty object

      for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
          // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
          // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
          const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
          if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
              results[name] = [];
            }
            results[name].push(net.address);
          }
        }
      }

      return results;
    },

    async handleForm({ req, relative_path }) {
      return new Promise((resolve, reject) => {
        dev.logfunction({ relative_path });
        const folder_path = API.getPathToUserContent(relative_path);

        const form = new IncomingForm({
          uploadDir: folder_path,
          multiples: false,
          maxFileSize: global.settings.maxFileSizeInMoForUpload * 1024 * 1024,
        });

        let socketid = "";
        let file = null;
        let additional_meta = {};

        form.on("field", (name, value) => {
          dev.logverbose(`Field gotten`, name, value);
          additional_meta = JSON.parse(value);

          // if (name === "socketid") socketid = value;
          // try {
          //   field_values[name] = JSON.parse(value);
          // } catch (e) {}
        });

        // every time a file has been uploaded successfully,
        form.on("file", (field, uploadedFile) => {
          dev.logverbose(
            `File uploaded: 
                – field: ${field} 
                – file: ${JSON.stringify(uploadedFile)}.`
          );
          file = uploadedFile;
        });

        form
          .on("error", (err) => {
            return reject(err);
          })
          .on("aborted", (err) => {
            return reject(err);
          });

        form.once("end", async () => {
          dev.logverbose(`File downloaded`);
          dev.logverbose({ file });

          if (!file || !file.filepath)
            return reject(new Error("No file to parse"));

          return resolve({
            folder_path,
            originalFilename: file.originalFilename,
            filepath: file.filepath,
            additional_meta,
          });
        });

        form.parse(req);
      });
    },

    async makeImageFromPath({ full_path, new_path, resolution }) {
      await sharp(full_path)
        .rotate()
        .resize(resolution, resolution, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .flatten({ background: "white" })
        .withMetadata()
        .toFormat("jpeg", {
          quality: global.settings.mediaThumbQuality,
        })
        .toFile(new_path)
        .catch((err) => {
          throw err;
        });
    },

    async getImageMetadata({ full_media_path }) {
      return await sharp(full_media_path).metadata();
    },

    async imageBufferToFile({ image_buffer, full_path_to_thumb }) {
      return await sharp(image_buffer).toFile(full_path_to_thumb);
    },

    async md5FromFile({ full_media_path }) {
      return await md5File(full_media_path);
    },

    // see https://stackoverflow.com/a/67038052
    async hashPassword({ password, salt = global.settings.password_salt }) {
      const buf = crypto.scryptSync(password, salt, 64).toString("hex");
      return `${buf.toString("hex")}.${salt}`;
    },

    checkPassword({ submitted_password, stored_password_with_salt }) {
      // check if password matches stored_password once it is hashed
      const [stored_password, salt] = stored_password_with_salt.split(".");
      const submitted_password_with_salt = API.hashPassword({
        password: submitted_password,
        salt,
      });
      return submitted_password_with_salt === stored_password_with_salt;
    },

    getPathParent(path) {
      return path.substr(0, path.lastIndexOf("/"));
    },
    async parseAndCheckSchema({ relative_path }) {
      dev.logfunction({ relative_path });

      const items_in_path = relative_path.split("/");

      // var [folder_type, folder_slug, subfolder_type, subfolder_slug] =
      //   items_in_path;
      // var [folder_type, folder_slug, subfolder_type, subfolder_slug] =
      //   items_in_path;

      let obj = {};

      if (items_in_path.length > 0) obj.folder_type = items_in_path[0];
      if (items_in_path.length > 1) obj.folder_slug = items_in_path[1];
      if (items_in_path.length > 2)
        if (items_in_path[2].includes(".")) obj.meta_slug = items_in_path[2];
        else obj.subfolder_type = items_in_path[2];
      if (items_in_path.length > 3) obj.subfolder_slug = items_in_path[3];
      if (items_in_path.length > 4) obj.submeta_slug = items_in_path[4];

      if (!global.settings.schema[obj.folder_type])
        throw new Error(`Missing schema for folder_type ${obj.folder_type}`);
      if (
        obj.subfolder_type &&
        !global.settings.schema[obj.folder_type].$folders[obj.subfolder_type]
      )
        throw new Error(
          `Missing schema for subfolder_type ${obj.subfolder_type}`
        );

      obj.schema = obj.subfolder_type
        ? global.settings.schema[obj.folder_type].$folders[obj.subfolder_type]
        : global.settings.schema[obj.folder_type];

      return obj;
    },

    cleanReqPath(path) {
      let p = path.substring(7);
      if (p.endsWith("/")) p = p.slice(0, -1);
      return p;
    },
  };

  return API;
})();
