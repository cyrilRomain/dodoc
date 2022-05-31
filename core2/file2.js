const path = require("path"),
  fs = require("fs-extra");

const utils = require("./utils"),
  thumbs = require("./thumbs");

// all items (projects, medias, etc.) must have those props :
// date_created
// date_modified
// file_meta

// cache structure :
/* 
[{
  path: 'projects/',

}]

*/

module.exports = (function () {
  const API = {
    getFolders: async ({ folder_type }) => {
      dev.logfunction({ folder_type });
      // TODO cache get all folders

      const folders_slugs = await _getFolderSlugs({ folder_type });

      const all_folders_with_meta = [];
      for (let folder_slug of folders_slugs) {
        const folder_meta = await API.getFolder({
          folder_type,
          folder_slug,
        }).catch((err) => {
          dev.error(`Error with folder`, folder_slug, err);
        });
        if (folder_meta) all_folders_with_meta.push(folder_meta);
      }

      return all_folders_with_meta;
    },

    getFolder: async ({ folder_type, folder_slug }) => {
      dev.logfunction({ folder_type, folder_slug });

      // TODO cache unique folder
      let folder_meta = await _readMetaFile({
        folder_type,
        folder_slug,
        file_slug: "meta.txt",
      });
      folder_meta.slug = folder_slug;

      let folder_preview = await _getFolderPreview({
        folder_type,
        folder_slug,
      });
      if (folder_preview) folder_meta.preview = folder_preview;

      // get number of files if files in schema

      // add to cache

      return folder_meta;
    },

    createFolder: async ({ folder_type, new_meta }) => {
      dev.logfunction({ folder_type, new_meta });

      // generate unique slug from time, or use meta.requested_folder_name
      let folder_slug = new_meta.requested_folder_name
        ? new_meta.requested_folder_name
        : `untitled-${folder_type}`;

      folder_slug = utils.slug(folder_slug);

      folder_slug = await _preventFolderOverride({ folder_type, folder_slug });

      const path_to_folder = utils.getPathToUserContent(
        global.settings.schema[folder_type].path,
        folder_slug
      );

      await fs.ensureDir(path_to_folder);

      const clean_meta = _makeNewMeta({
        folder_type,
        new_meta,
      });

      await _saveMetaAtPath({
        folder_type,
        folder_slug,
        file_slug: "meta.txt",
        meta: clean_meta,
      });

      // store preview if it exists

      // return folder_slug
      return folder_slug;
    },

    updateFolderMeta: async ({ folder_type, folder_slug, new_meta }) => {
      dev.logfunction({ folder_type, folder_slug, new_meta });

      // get folder meta
      let folder_meta = await _readMetaFile({
        folder_type,
        folder_slug,
        file_slug: "meta.txt",
      });

      // filter new_meta with schema – only keep props listed in schema, not read_only, and respecing the typ
      const clean_meta = _cleanNewMeta({
        folder_type,
        new_meta,
      });

      const meta = Object.assign(folder_meta, clean_meta);

      // TODO update date_modified in meta
      // folder_meta.infos.date_modified

      await _saveMetaAtPath({
        folder_type,
        folder_slug,
        file_slug: "meta.txt",
        meta,
      });

      // update cache with meta

      return meta;
    },
    removeFolder: async ({ folder_type, folder_slug }) => {
      dev.logfunction({ folder_type, folder_slug });

      try {
        if (global.settings.removePermanently === true)
          await _removeFolderForGood({ folder_type, folder_slug });
        else await _moveFolderToBin({ folder_type, folder_slug });

        await thumbs.removeFolderThumbs({ folder_type, folder_slug });

        // TODO remove from cache
        // cache.del({ type, slugFolderName });

        return;
      } catch (err) {
        throw err;
      }
    },
  };

  async function _getFolderSlugs({ folder_type }) {
    dev.logfunction({ folder_type });

    const folder_path = utils.getPathToUserContent(
      global.settings.schema[folder_type].path
    );

    try {
      let folders = (await fs.readdir(folder_path, { withFileTypes: true }))
        .filter(
          (dirent) =>
            dirent.isDirectory() &&
            !["_", "."].some((char) => dirent.name.startsWith(char))
        )
        .map((dirent) => dirent.name);

      dev.logfunction({ folders });
      return folders;
    } catch (err) {
      dev.logfunction("No dir or folder found");
      return [];
    }
  }

  function _makeNewMeta({ folder_type, new_meta }) {
    let meta = {};
    const fields = global.settings.schema[folder_type].fields;

    Object.entries(fields).map(([field_name, opt]) => {
      if (new_meta.hasOwnProperty(field_name)) {
        meta[field_name] = new_meta[field_name];
        // Todo Validator
      }
    });

    meta.date_created = meta.date_modified = utils.getCurrentDate();
    return meta;
  }

  function _cleanNewMeta({ folder_type, new_meta }) {
    dev.logfunction({ folder_type, new_meta });

    global.settings.schema[folder_type];

    // check fields that exist in schema
    // TODO

    return new_meta;
  }

  async function _readMetaFile({ folder_type, folder_slug, file_slug }) {
    dev.logfunction({ folder_type, folder_slug });

    const meta_path = utils.getPathToUserContent(
      global.settings.schema[folder_type].path,
      folder_slug,
      file_slug
    );

    const meta_file_content = await fs.readFile(meta_path, "UTF-8");
    let meta = utils.parseMeta(meta_file_content);

    return meta;
  }

  async function _saveMetaAtPath({
    folder_type,
    folder_slug,
    file_slug,
    meta,
  }) {
    dev.logfunction({ folder_type, folder_slug, file_slug, meta });

    const meta_path = utils.getPathToUserContent(
      global.settings.schema[folder_type].path,
      folder_slug,
      file_slug
    );

    await utils.storeMeta({ path: meta_path, meta });
    return;
  }

  async function _getFolderPreview({ folder_type, folder_slug }) {
    dev.logfunction({ folder_type, folder_slug });

    const preview = global.settings.schema[folder_type].preview;
    if (!preview) return false;

    const preview_name = "meta_preview.jpeg";
    const preview_path = utils.getPathToUserContent(
      global.settings.schema[folder_type].path,
      folder_slug,
      preview_name
    );

    if (!(await fs.pathExists(preview_path))) return false;

    // TODO
    // const thumb_meta = await thumbs.makeMediaThumbs(
    //   folder_slug,
    //   preview_name,
    //   "image",
    //   type,
    //   "preview"
    // );

    dev.logverbose(`Folder has preview`);
    const thumb_meta = await thumbs.makeFolderPreview({
      folder_type,
      folder_slug,
    });

    return thumb_meta;
  }

  async function _preventFolderOverride({ folder_type, folder_slug }) {
    dev.logfunction({ folder_type, folder_slug });

    const folders_slugs = await _getFolderSlugs({ folder_type });
    dev.logfunction({ folders_slugs });

    if (folders_slugs.length === 0) return folder_slug;

    let index = 0,
      new_folder_slug = folder_slug;

    while (folders_slugs.includes(new_folder_slug)) {
      index++;
      new_folder_slug = `${folder_slug}-${index}`;
    }
    return new_folder_slug;
  }

  async function _removeFolderForGood({ folder_type, folder_slug }) {
    const full_folder_path = utils.getPathToUserContent(
      global.settings.schema[folder_type].path,
      folder_slug
    );

    try {
      await fs.remove(full_folder_path);
      return;
    } catch (err) {
      throw err;
    }
  }
  async function _moveFolderToBin({ folder_type, folder_slug }) {
    const full_folder_path = utils.getPathToUserContent(
      global.settings.schema[folder_type].path,
      folder_slug
    );
    const bin_folder_path = utils.getPathToUserContent(
      global.settings.schema[folder_type].path,
      global.settings.deletedFolderName,
      folder_slug
    );

    try {
      await fs.move(full_folder_path, bin_folder_path, { overwrite: true });
      return;
    } catch (err) {
      throw err;
    }
  }

  return API;
})();
