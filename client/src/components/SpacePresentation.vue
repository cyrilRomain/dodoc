<template>
  <div class="_spacePresentation">
    {{ space.title }}
    <router-link :to="{ path: createURLFromPath(space.$path) }">
      {{ $t("open") }}
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    space: Object,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
._spacePresentation {
  width: 300px;
  height: 300px;
}
</style>
