export default {
  computed: {
    connected_as() {
      if (this.$api.tokenpath.token_path)
        return this.$api.store[this.$api.tokenpath.token_path];
      return false;
    },
    is_admin() {
      if (this.connected_as) return this.connected_as.role === "admin";
      return false;
    },
  },
  methods: {
    getAuthor(author_path) {
      const folder_path = author_path.substring(
        0,
        author_path.lastIndexOf("/")
      );
      if (!folder_path || !this.$api.store[folder_path]) return false;
      return this.$api.store[folder_path].find((f) => f.$path === author_path);
    },
    canLoggedinEditFolder({ folder }) {
      if (this.is_admin) return true;
      if (folder.$admins === "all") return true;
      if (!this.connected_as) return false;
      if (
        Array.isArray(folder.$admins) &&
        folder.$admins.includes(this.connected_as.$path)
      )
        return true;
      return false;
    },
    canLoggedinContributeToFolder({ folder }) {
      if (this.canLoggedinEditFolder({ folder })) return true;

      if (folder.$contributors === "all") return true;
      if (!this.connected_as) return false;
      if (
        Array.isArray(folder.$contributors) &&
        folder.$contributors.includes(this.connected_as.$path)
      )
        return true;

      return false;
    },
    canLoggedinSeeFolder({ folder }) {
      // todo do this API side
      // invisible is the old name for private
      if (folder.$status !== "invisible" && folder.$status !== "private")
        return true;
      if (!this.connected_as) return false;
      if (this.is_admin) return true;
      if (
        Array.isArray(folder.$admins) &&
        folder.$admins.includes(this.connected_as.$path)
      )
        return true;
      if (
        Array.isArray(folder.$contributors) &&
        folder.$contributors.includes(this.connected_as.$path)
      )
        return true;
      return false;
    },
  },
};
