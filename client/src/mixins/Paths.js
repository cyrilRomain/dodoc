export default {
  computed: {},
  methods: {
    createURLFromPath(path) {
      // const path_without_space = path.replace("spaces", "");
      // return path_without_space;
      return "/" + path;
    },
    getParent(path) {
      return path.substring(0, path.lastIndexOf("/"));
    },
    createURLToSpace(path) {
      return path.split("/").splice(0, 3).join("/");
    },
  },
};
