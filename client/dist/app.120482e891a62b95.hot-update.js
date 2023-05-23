"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateapp"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-37[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/adc-core/fields/FilesModule.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-37[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/adc-core/fields/FilesModule.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/components/publications/PickMediaFromProjects.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    field_name: String,\n    path: String,\n    project_path: String,\n    content: {\n      type: Array,\n      default: () => []\n    },\n    can_edit: Boolean\n  },\n  components: {\n    PickMediaFromProjects: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/components/publications/PickMediaFromProjects.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n  },\n  data() {\n    return {\n      show_picker: false\n    };\n  },\n  created() {},\n  mounted() {},\n  beforeDestroy() {},\n  watch: {},\n  computed: {\n    listed_files() {\n      return this.content.reduce((acc, meta_filename) => {\n        const m = this.getMediaInFolder({\n          folder_path: this.project_path,\n          meta_filename\n        });\n        if (m) acc.push(m);\n        return acc;\n      }, []);\n    },\n    meta_filenames_already_present() {\n      return this.content;\n    }\n  },\n  methods: {\n    async selectMedia({\n      path_to_source_media_meta\n    }) {\n      const new_file = this.getFilename(path_to_source_media_meta);\n      const files = this.content.slice() || [];\n      files.push(new_file);\n      this.updateFiles(files);\n    },\n    async removeFile(path) {\n      let _files = this.content.slice();\n      _files = _files.filter(f => !path.endsWith(\"/\" + f));\n      this.updateFiles(_files);\n    },\n    async updateFiles(files) {\n      await this.$api.updateMeta({\n        path: this.path,\n        new_meta: {\n          [this.field_name]: files\n        }\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zN1swXS5ydWxlc1swXS51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9hZGMtY29yZS9maWVsZHMvRmlsZXNNb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC9zcmMvYWRjLWNvcmUvZmllbGRzL0ZpbGVzTW9kdWxlLnZ1ZT9kNTE1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIl9maWxlTGlzdFwiPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwibGlzdGVkX2ZpbGVzLmxlbmd0aCA9PT0gMFwiPlxuICAgICAge3sgJHQoXCJub19maWxlc1wiKSB9fVxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJfZmlsZVwiIHYtZm9yPVwiKGZpbGUsIGkpIGluIGxpc3RlZF9maWxlc1wiIDprZXk9XCJpXCI+XG4gICAgICAgIDxEb3dubG9hZEZpbGUgdi1pZj1cImZpbGUgJiYgZmlsZS4kcGF0aFwiIGNsYXNzPVwiX2xpbmtcIiA6ZmlsZT1cImZpbGVcIj5cbiAgICAgICAgICA8TWVkaWFDb250ZW50XG4gICAgICAgICAgICBjbGFzcz1cIl9wcmV2aWV3XCJcbiAgICAgICAgICAgIDpmaWxlPVwiZmlsZVwiXG4gICAgICAgICAgICA6cmVzb2x1dGlvbj1cIjUwXCJcbiAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgWydpbWFnZScsICd2aWRlbycsICdhdWRpbycsICdwZGYnLCAnc3RsJywgJ3VybCddLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIGZpbGUuJHR5cGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzbC1pY29uXG4gICAgICAgICAgICBuYW1lPVwiZmlsZS1lYXJtYXJrLWFycm93LWRvd24tZmlsbFwiXG4gICAgICAgICAgICBjbGFzcz1cIl9wcmV2aWV3XCJcbiAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJfbGluay0tZmlsZW5hbWVcIiB2LXRleHQ9XCJmaWxlLiRtZWRpYV9maWxlbmFtZVwiIC8+XG4gICAgICAgIDwvRG93bmxvYWRGaWxlPlxuXG4gICAgICAgIDxzbC1pY29uLWJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJ4XCJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIHYtaWY9XCJjYW5fZWRpdFwiXG4gICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJyZW1vdmVGaWxlKGZpbGUuJHBhdGgpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiX2FkZEJ0blwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvbiB1LWJ1dHRvbl9zbWFsbCB1LWJ1dHRvbl9ibGV1dmVydCBfYWRkRmlsZVwiXG4gICAgICAgIHYtaWY9XCJjYW5fZWRpdFwiXG4gICAgICAgIEBjbGljaz1cInNob3dfcGlja2VyID0gIXNob3dfcGlja2VyXCJcbiAgICAgID5cbiAgICAgICAge3sgJHQoXCJhZGRcIikgfX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8UGlja01lZGlhRnJvbVByb2plY3RzXG4gICAgICAgIHYtaWY9XCJzaG93X3BpY2tlclwiXG4gICAgICAgIDpwYXRoPVwicHJvamVjdF9wYXRoXCJcbiAgICAgICAgOm1ldGFfZmlsZW5hbWVzX2FscmVhZHlfcHJlc2VudD1cIm1ldGFfZmlsZW5hbWVzX2FscmVhZHlfcHJlc2VudFwiXG4gICAgICAgIEBzZWxlY3RNZWRpYT1cInNlbGVjdE1lZGlhXCJcbiAgICAgICAgQGNsb3NlPVwic2hvd19waWNrZXIgPSBmYWxzZVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFBpY2tNZWRpYUZyb21Qcm9qZWN0cyBmcm9tIFwiQC9jb21wb25lbnRzL3B1YmxpY2F0aW9ucy9QaWNrTWVkaWFGcm9tUHJvamVjdHMudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBmaWVsZF9uYW1lOiBTdHJpbmcsXG4gICAgcGF0aDogU3RyaW5nLFxuICAgIHByb2plY3RfcGF0aDogU3RyaW5nLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSxcbiAgICBjYW5fZWRpdDogQm9vbGVhbixcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFBpY2tNZWRpYUZyb21Qcm9qZWN0cyxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd19waWNrZXI6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7fSxcbiAgbW91bnRlZCgpIHt9LFxuICBiZWZvcmVEZXN0cm95KCkge30sXG4gIHdhdGNoOiB7fSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZWRfZmlsZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50LnJlZHVjZSgoYWNjLCBtZXRhX2ZpbGVuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmdldE1lZGlhSW5Gb2xkZXIoe1xuICAgICAgICAgIGZvbGRlcl9wYXRoOiB0aGlzLnByb2plY3RfcGF0aCxcbiAgICAgICAgICBtZXRhX2ZpbGVuYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG0pIGFjYy5wdXNoKG0pO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgIH0sXG4gICAgbWV0YV9maWxlbmFtZXNfYWxyZWFkeV9wcmVzZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgc2VsZWN0TWVkaWEoeyBwYXRoX3RvX3NvdXJjZV9tZWRpYV9tZXRhIH0pIHtcbiAgICAgIGNvbnN0IG5ld19maWxlID0gdGhpcy5nZXRGaWxlbmFtZShwYXRoX3RvX3NvdXJjZV9tZWRpYV9tZXRhKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5jb250ZW50LnNsaWNlKCkgfHwgW107XG4gICAgICBmaWxlcy5wdXNoKG5ld19maWxlKTtcbiAgICAgIHRoaXMudXBkYXRlRmlsZXMoZmlsZXMpO1xuICAgIH0sXG4gICAgYXN5bmMgcmVtb3ZlRmlsZShwYXRoKSB7XG4gICAgICBsZXQgX2ZpbGVzID0gdGhpcy5jb250ZW50LnNsaWNlKCk7XG4gICAgICBfZmlsZXMgPSBfZmlsZXMuZmlsdGVyKChmKSA9PiAhcGF0aC5lbmRzV2l0aChcIi9cIiArIGYpKTtcbiAgICAgIHRoaXMudXBkYXRlRmlsZXMoX2ZpbGVzKTtcbiAgICB9LFxuICAgIGFzeW5jIHVwZGF0ZUZpbGVzKGZpbGVzKSB7XG4gICAgICBhd2FpdCB0aGlzLiRhcGkudXBkYXRlTWV0YSh7XG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgbmV3X21ldGE6IHtcbiAgICAgICAgICBbdGhpcy5maWVsZF9uYW1lXTogZmlsZXMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLl9maWxlTGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGdhcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAvIDQpO1xuXG4gID4gLl9maWxlIHtcbiAgICAvLyBtYXJnaW46IGNhbGModmFyKC0tc3BhY2luZykgLyA0KSAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDJlbTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jLWdyaXNfZm9uY2UpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIGdhcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAvIDQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1ncmlzKTtcbiAgICB9XG5cbiAgICAuX2xpbmsge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgZm9udC12YXJpYW50OiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1zbC1mb250LXNpemUteC1zbWFsbCk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG5cbiAgICAgIC5fcHJldmlldyB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG5cbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICA6OnYtZGVlcCAuX21lZGlhQ29udGVudC0taW1hZ2Uge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5fbGluay0tZmlsZW5hbWUge1xuICAgICAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLl9hZGRCdG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-37[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/adc-core/fields/FilesModule.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "554f6ee13ca02e10"; }
/******/ }();
/******/ 
/******/ }
);