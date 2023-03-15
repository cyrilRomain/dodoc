<template>
  <div>
    <TitleField
      :field_name="'title'"
      :label="$t('name')"
      :content="space.title"
      :path="space.$path"
      :required="true"
      :maxlength="40"
      :tag="'h1'"
      :can_edit="can_edit"
      :instructions="$t('project_title_instructions')"
    />

    <TitleField
      :field_name="'description'"
      class="_description"
      :label="$t('description')"
      :content="space.description"
      :path="space.$path"
      :maxlength="280"
      :can_edit="can_edit"
      :instructions="$t('project_desc_instructions')"
    />
  </div>
</template>
<script>
export default {
  props: {},
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
<style lang="scss" scoped></style>
