<template>
  <div class="_spacesList">
    <!-- {{ fetch_spaces_error }} -->

    <div class="_list">
      <form class="_create" @submit.prevent="createSpace">
        <fieldset>
          <legend class="u-label">{{ $t("new_space") }}</legend>

          <TextInput
            :content.sync="new_space_title"
            :maxlength="40"
            :required="true"
          />

          <button
            class="u-button u-button_bleuvert"
            type="submit"
            slot="footer"
          >
            {{ $t("create_and_open") }}
          </button>
        </fieldset>
      </form>
      <SpacePresentation v-for="space in spaces" :key="space.$path" />
    </div>
  </div>
</template>
<script>
import SpacePresentation from "@/components/SpacePresentation.vue";

export default {
  props: {},
  components: {
    SpacePresentation,
  },
  data() {
    return {
      spaces: undefined,
      new_space_title: "",
      path: "spaces",
      fetch_spaces_error: undefined,
    };
  },
  created() {},
  async mounted() {
    this.spaces = await this.$api
      .getFolders({
        path: this.path,
      })
      .catch((err) => {
        this.fetch_spaces_error = err.response;
        // this.is_loading = false;
        return;
      });
    this.$api.join({ room: this.path });
  },
  beforeDestroy() {},
  watch: {},
  computed: {},
  methods: {
    getSlug(path) {
      return path.split("/").at(-1);
    },
    async createSpace() {
      try {
        const new_space_slug = await this.$api.createFolder({
          path: this.path,
          additional_meta: {
            title: this.new_space_title,
            requested_slug: this.new_space_title,
            $authors: [this.$api.tokenpath.token_path],
          },
        });
        new_space_slug;
      } catch (err) {
        // this.error_msg = "Error: " + err.message;
        // setTimeout(() => {
        //   this.error_msg = "";
        // }, 5000);
        // this.is_creating_project = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
._create {
  max-width: 400px;
}
._spacesList {
  width: 100%;
}

._list {
  // display: grid;
  // grid-auto-rows: max-content;
  // grid-gap: calc(var(--spacing) / 1);
  // align-items: stretch;
  // grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: calc(var(--spacing) / 1);
  margin: calc(var(--spacing) / 1);

  > * {
    background: var(--panel-color);
    border: var(--panel-borders);
    box-shadow: var(--panel-shadows);
    // border-radius: var(--panel-radius);
  }
}
</style>
