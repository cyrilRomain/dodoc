"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateapp"]("LumaView",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-37[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MyChutier.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-37[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MyChutier.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ChutierItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ChutierItem.vue */ \"./src/components/ChutierItem.vue\");\n/* harmony import */ var _components_MediaStack_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MediaStack.vue */ \"./src/components/MediaStack.vue\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    shared_space_path: String\n  },\n  components: {\n    ChutierItem: _components_ChutierItem_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    MediaStack: _components_MediaStack_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data() {\n    return {\n      chutier: undefined,\n      selected_files: [],\n      id: `image_select_${(Math.random().toString(36) + \"00000000000000000\").slice(2, 3 + 2)}`,\n      last_clicked: undefined,\n      selected_items_slugs: [],\n      focused_items_slugs: [],\n      max_items_selected: 15,\n      show_confirm_remove_menu: false\n    };\n  },\n  created() {},\n  mounted() {\n    this.listChutier();\n    this.$api.join({\n      room: this.path\n    });\n  },\n  beforeDestroy() {\n    this.$api.leave({\n      room: this.path\n    });\n  },\n  watch: {\n    // chutier_items() {\n    //   this.selected_items_slugs = this.selected_items_slugs.filter(\n    //     (item_path) => this.chutier_items.find((ci) => ci.$path === item_path)\n    //   );\n    // },\n    selected_items_slugs() {\n      if (\n      // this.selected_items_slugs.length === 0 &&\n      this.show_confirm_remove_menu) this.show_confirm_remove_menu = false;\n      if (this.selected_items_slugs.length > this.max_items_selected) {\n        this.selected_items_slugs = this.selected_items_slugs.slice(0, this.max_items_selected);\n        this.$alertify.delay(4000).error(this.$t(\"notifications.too_many_items_selected\"));\n        setTimeout(() => {\n          this.$alertify.delay(4000).error(this.$t(\"notifications.max_items_is\") + \" \" + this.max_items_selected);\n        }, 500);\n      }\n    },\n    chutier_items() {\n      // check if all items still exist, remove them if that's not the case\n      const cleaned_up_items = this.selected_items_slugs.filter(fis => this.chutier_items.some(ci => ci.$path === fis));\n      if (JSON.stringify(this.selected_items_slugs) !== JSON.stringify(cleaned_up_items)) this.selected_items_slugs = cleaned_up_items;\n    }\n  },\n  computed: {\n    path() {\n      return this.connected_as.$path;\n    },\n    focused_items() {\n      return this.focused_items_slugs.map(fis => this.chutier_items.find(ci => ci.$path === fis));\n    },\n    selected_items() {\n      return this.selected_items_slugs.map(fis => this.chutier_items.find(ci => ci.$path === fis) || false);\n    },\n    all_items_selected() {\n      return this.selected_items.length === this.chutier_items.length;\n    },\n    chutier_items() {\n      if (!this.chutier || !this.chutier.$files) return [];\n      const _medias = JSON.parse(JSON.stringify(this.chutier.$files));\n      _medias.sort((a, b) => +new Date(b.$date_uploaded) - +new Date(a.$date_uploaded));\n      return _medias;\n    },\n    chutier_items_grouped() {\n      const grouped = this.chutier_items.reduce((group, file) => {\n        // var key = file.$date_uploaded;\n\n        var dateObj = new Date(file.$date_created);\n        var month = dateObj.getUTCMonth() + 1; //months from 1-12\n        var day = dateObj.getUTCDate();\n        var year = dateObj.getUTCFullYear();\n        const key = year + \"/\" + month + \"/\" + day;\n        if (!Object.prototype.hasOwnProperty.call(group, key)) group[key] = [];\n        group[key].push(file);\n        return group;\n      }, {});\n      let ordered = [];\n      for (const k in grouped) if (!Object.prototype.hasOwnProperty.call(ordered, k)) ordered.push(k);\n      ordered.sort();\n      ordered.reverse();\n      return ordered.map(o => {\n        return {\n          label: o,\n          files: grouped[o]\n        };\n      });\n    }\n  },\n  methods: {\n    async listChutier() {\n      this.chutier = await this.$api.getFolder({\n        path: this.path\n      }).catch(err => {\n        this.fetch_project_error = err.response;\n        this.is_loading = false;\n      });\n    },\n    toggleSelect(path) {\n      if (this.selected_items_slugs.includes(path)) this.selected_items_slugs = this.selected_items_slugs.filter(i => i !== path);else this.selected_items_slugs.push(path);\n    },\n    setSelectionAsFocus() {\n      this.focused_items_slugs = JSON.parse(JSON.stringify(this.selected_items_slugs));\n    },\n    updateInputFiles($event) {\n      this.selected_files = Array.from($event.target.files);\n      $event.target.value = \"\";\n    },\n    async importedMedias($event) {\n      $event;\n      // console.log(\"selected_items_slugs = \" + $event);\n      // this.selected_items_slugs = $event.map(\n      //   (i) => this.connected_as.$path + \"/\" + i\n      // );\n    },\n\n    selectAll() {\n      this.selected_items_slugs = this.chutier_items.map(i => i.$path);\n    },\n    deselectAll() {\n      this.selected_items_slugs = [];\n    },\n    selectRange(range) {\n      this.selected_items_slugs = this.selected_items_slugs.concat(range);\n      this.selected_items_slugs = [...new Set(this.selected_items_slugs)];\n    },\n    deselectRange(range) {\n      this.selected_items_slugs = this.selected_items_slugs.filter(si => !range.includes(si));\n    },\n    rangeIsSelected(range) {\n      if (this.selected_items_slugs.length === 0) return false;\n      // for each item in range, make sure it is included in selected_items_slugs\n      return !range.find(p => {\n        if (this.selected_items_slugs.includes(p) === false) return true;\n        return false;\n      });\n    },\n    async removeItemsInSelection() {\n      for (const item_path of this.selected_items_slugs) {\n        await this.$api.deleteItem({\n          path: item_path\n        });\n      }\n      this.show_confirm_remove_menu = false;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zN1swXS5ydWxlc1swXS51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL015Q2h1dGllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxTEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwL3NyYy9jb21wb25lbnRzL015Q2h1dGllci52dWU/MmVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJfbXlDaHV0aWVyXCIgdi1pZj1cImNodXRpZXJcIiBAY2xpY2s9XCJsYXN0X2NsaWNrZWQgPSBmYWxzZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJfdG9wQ29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIl9zdWJzY3JpYmVCdG5cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwidS1idXR0b24gdS1idXR0b25fYmxldW1hcmluZSBfYXV0aG9yQnRuXCJcbiAgICAgICAgICBAY2xpY2s9XCIkZXZlbnRIdWIuJGVtaXQoJ3Nob3dBdXRob3JNb2RhbCcpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY29ubmVjdGVkX2FzXCI+XG4gICAgICAgICAgICB7eyBjb25uZWN0ZWRfYXMubmFtZSB9fVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyAkdChcImxvZ2luXCIpIH19PC90ZW1wbGF0ZT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cIl9pbXBvcnRCdG5cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgIDppZD1cImlkICsgJy1hZGRfZmlsZSdcIlxuICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICBhY2NlcHQ9XCJcIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRmaWxlLTJcIlxuICAgICAgICAgIEBjaGFuZ2U9XCJ1cGRhdGVJbnB1dEZpbGVzKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgOmZvcj1cImlkICsgJy1hZGRfZmlsZSdcIj5cbiAgICAgICAgICA8IS0tIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAyMCAxN1wiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0xMCAwbC01LjIgNC45aDMuM3Y1LjFoMy44di01LjFoMy4zbC01LjItNC45em05LjMgMTEuNWwtMy4yLTIuMWgtMmwzLjQgMi42aC0zLjVjLS4xIDAtLjIuMS0uMi4xbC0uOCAyLjNoLTZsLS44LTIuMmMtLjEtLjEtLjEtLjItLjItLjJoLTMuNmwzLjQtMi42aC0ybC0zLjIgMi4xYy0uNC4zLS43IDEtLjYgMS41bC42IDMuMWMuMS41LjcuOSAxLjIuOWgxNi4zYy42IDAgMS4xLS40IDEuMy0uOWwuNi0zLjFjLjEtLjUtLjItMS4yLS43LTEuNXpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz4gLS0+XG4gICAgICAgICAge3sgJHQoXCJpbXBvcnRcIikgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxVcGxvYWRGaWxlc1xuICAgICAgdi1pZj1cInNlbGVjdGVkX2ZpbGVzLmxlbmd0aCA+IDBcIlxuICAgICAgY2xhc3M9XCJfdXBsb2FkRmlsZXNMaXN0XCJcbiAgICAgIDpzZWxlY3RlZF9maWxlcz1cInNlbGVjdGVkX2ZpbGVzXCJcbiAgICAgIDpwYXRoPVwicGF0aFwiXG4gICAgICBAY2xvc2U9XCJzZWxlY3RlZF9maWxlcyA9IFtdXCJcbiAgICAgIEBpbXBvcnRlZE1lZGlhcz1cImltcG9ydGVkTWVkaWFzXCJcbiAgICAvPlxuXG4gICAgPGRpdiBjbGFzcz1cIl9taWRkbGVDb250ZW50XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiXCIgQGNsaWNrPVwiIWFsbF9pdGVtc19zZWxlY3RlZCA/IHNlbGVjdEFsbCgpIDogZGVzZWxlY3RBbGwoKVwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvbkxpbmsgdS1zZWxlY3RCdG5cIlxuICAgICAgICAgIHYtaWY9XCJjaHV0aWVyX2l0ZW1zLmxlbmd0aCA+IDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNsLWljb25cbiAgICAgICAgICAgIDpuYW1lPVwiXG4gICAgICAgICAgICAgICFhbGxfaXRlbXNfc2VsZWN0ZWQgPyAncGx1cy1zcXVhcmUtZG90dGVkJyA6ICdkYXNoLXNxdWFyZS1kb3R0ZWQnXG4gICAgICAgICAgICBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICDDiWzDqW1lbnRzIMOgIHRyYWl0ZXIgOiB7eyBjaHV0aWVyX2l0ZW1zLmxlbmd0aCB9fVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIl9pdGVtc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIl9pdGVtXCIgdi1mb3I9XCJjaSBpbiBjaHV0aWVyX2l0ZW1zX2dyb3VwZWRcIiA6a2V5PVwiY2kubGFiZWxcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiX2l0ZW0tLWxhYmVsXCJcbiAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgIHJhbmdlSXNTZWxlY3RlZChjaS5maWxlcy5tYXAoKGYpID0+IGYuJHBhdGgpKVxuICAgICAgICAgICAgICA/IGRlc2VsZWN0UmFuZ2UoY2kuZmlsZXMubWFwKChmKSA9PiBmLiRwYXRoKSlcbiAgICAgICAgICAgICAgOiBzZWxlY3RSYW5nZShjaS5maWxlcy5tYXAoKGYpID0+IGYuJHBhdGgpKVxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB2LWlmPVwiIXJhbmdlSXNTZWxlY3RlZChjaS5maWxlcy5tYXAoKGYpID0+IGYuJHBhdGgpKVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwidS1idXR0b25MaW5rIHUtc2VsZWN0QnRuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c2wtaWNvbiBuYW1lPVwicGx1cy1zcXVhcmUtZG90dGVkXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHYtZWxzZSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ1LWJ1dHRvbkxpbmsgdS1zZWxlY3RCdG5cIj5cbiAgICAgICAgICAgIDxzbC1pY29uIG5hbWU9XCJkYXNoLXNxdWFyZS1kb3R0ZWRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHt7IGZvcm1hdERhdGVUb0h1bWFuKGNpLmxhYmVsKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRyYW5zaXRpb24tZ3JvdXAgdGFnPVwiZGl2XCIgbmFtZT1cImxpc3RDb21wbGV0ZVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHYtZm9yPVwiZmlsZSBpbiBjaS5maWxlc1wiXG4gICAgICAgICAgICA6a2V5PVwiZmlsZS4kcGF0aFwiXG4gICAgICAgICAgICBAY2xpY2suc3RvcD1cImxhc3RfY2xpY2tlZCA9IGZpbGUuJHBhdGhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaHV0aWVySXRlbVxuICAgICAgICAgICAgICA6ZmlsZT1cImZpbGVcIlxuICAgICAgICAgICAgICA6aXNfY2xpY2tlZD1cImxhc3RfY2xpY2tlZCA9PT0gZmlsZS4kcGF0aFwiXG4gICAgICAgICAgICAgIDppc19zZWxlY3RlZD1cInNlbGVjdGVkX2l0ZW1zX3NsdWdzLmluY2x1ZGVzKGZpbGUuJHBhdGgpXCJcbiAgICAgICAgICAgICAgOnNoYXJlZF9zcGFjZV9wYXRoPVwic2hhcmVkX3NwYWNlX3BhdGhcIlxuICAgICAgICAgICAgICBAdG9nZ2xlU2VsZWN0PVwidG9nZ2xlU2VsZWN0KGZpbGUuJHBhdGgpXCJcbiAgICAgICAgICAgICAgQHVuY2xpY2tlZD1cImxhc3RfY2xpY2tlZCA9IGZhbHNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdHJhbnNpdGlvbi1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZXVwXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cIl9zZWxlY3Rpb25CYXJcIlxuICAgICAgICB2LWlmPVwic2VsZWN0ZWRfaXRlbXMubGVuZ3RoID4gMFwiXG4gICAgICAgIGtleT1cInNlbGVjdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJfc2VsZWN0aW9uQmFyLS1wcmV2aWV3c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImZpbGUgaW4gc2VsZWN0ZWRfaXRlbXNcIj5cbiAgICAgICAgICAgIDxNZWRpYUNvbnRlbnRcbiAgICAgICAgICAgICAgdi1pZj1cImZpbGUuJHBhdGhcIlxuICAgICAgICAgICAgICA6a2V5PVwiZmlsZS4kcGF0aFwiXG4gICAgICAgICAgICAgIDpmaWxlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiX3NlbGVjdGlvbkJhci0tcHJldmlld3MtLXByZXZpZXdcIlxuICAgICAgICAgICAgICA6Y29udGV4dD1cIidwcmV2aWV3J1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvbiB1LWJ1dHRvbl9ibGV1dmVydFwiXG4gICAgICAgICAgQGNsaWNrPVwic2V0U2VsZWN0aW9uQXNGb2N1c1wiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAkdChcImNyZWF0ZV9zdGFja1wiKSB9fSAoe3sgc2VsZWN0ZWRfaXRlbXMubGVuZ3RoIH19KVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidS1zYW1lUm93XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ1LWJ1dHRvbkxpbmtcIiBAY2xpY2s9XCJkZXNlbGVjdEFsbFwiPlxuICAgICAgICAgICAgPHNsLWljb24gbmFtZT1cImRhc2gtc3F1YXJlLWRvdHRlZFwiIC8+XG4gICAgICAgICAgICBEw6lzZWxlY3Rpb25uZXIgdG91dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvbkxpbmtcIlxuICAgICAgICAgICAgQGNsaWNrPVwic2hvd19jb25maXJtX3JlbW92ZV9tZW51ID0gdHJ1ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNsLWljb24gbmFtZT1cInRyYXNoM1wiIC8+XG4gICAgICAgICAgICBTdXBwcmltZXIgbGVzIMOpbMOpbWVudHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj48L3RyYW5zaXRpb25cbiAgICA+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRldXBcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiX3JlbW92ZU1lbnVcIiB2LWlmPVwic2hvd19jb25maXJtX3JlbW92ZV9tZW51XCIga2V5PVwicmVtb3ZlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cInUtYnV0dG9uTGlua1wiXG4gICAgICAgICAgQGNsaWNrPVwic2hvd19jb25maXJtX3JlbW92ZV9tZW51ID0gZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJHQoXCJjYW5jZWxcIikgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInUtYnV0dG9uIHUtYnV0dG9uX3JlZFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgQGNsaWNrPVwicmVtb3ZlSXRlbXNJblNlbGVjdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAkdChcImNvbmZpcm1fcmVtb3ZhbFwiKSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cblxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZXVwXCI+XG4gICAgICA8TWVkaWFTdGFja1xuICAgICAgICB2LWlmPVwiZm9jdXNlZF9pdGVtcy5sZW5ndGggPiAwXCJcbiAgICAgICAgY2xhc3M9XCJfbWVkaWFTdGFja1wiXG4gICAgICAgIDpmaWxlcz1cImZvY3VzZWRfaXRlbXNcIlxuICAgICAgICA6c2hhcmVkX3NwYWNlX3BhdGg9XCJzaGFyZWRfc3BhY2VfcGF0aFwiXG4gICAgICAgIEB1cGRhdGVGb2N1c2VkTWVkaWE9XCJmb2N1c2VkX2l0ZW1zX3NsdWdzID0gJGV2ZW50XCJcbiAgICAgICAgQGNsb3NlPVwiZm9jdXNlZF9pdGVtc19zbHVncyA9IFtdXCJcbiAgICAgICAgQHN0YWNrQ3JlYXRlZD1cIlxuICAgICAgICAgIGZvY3VzZWRfaXRlbXNfc2x1Z3MgPSBbXTtcbiAgICAgICAgICBzZWxlY3RlZF9pdGVtc19zbHVncyA9IFtdO1xuICAgICAgICBcIlxuICAgICAgLz5cbiAgICA8L3RyYW5zaXRpb24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2h1dGllckl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9DaHV0aWVySXRlbS52dWVcIjtcbmltcG9ydCBNZWRpYVN0YWNrIGZyb20gXCJAL2NvbXBvbmVudHMvTWVkaWFTdGFjay52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNoYXJlZF9zcGFjZV9wYXRoOiBTdHJpbmcsXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDaHV0aWVySXRlbSxcbiAgICBNZWRpYVN0YWNrLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaHV0aWVyOiB1bmRlZmluZWQsXG4gICAgICBzZWxlY3RlZF9maWxlczogW10sXG4gICAgICBpZDogYGltYWdlX3NlbGVjdF8keyhcbiAgICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikgKyBcIjAwMDAwMDAwMDAwMDAwMDAwXCJcbiAgICAgICkuc2xpY2UoMiwgMyArIDIpfWAsXG5cbiAgICAgIGxhc3RfY2xpY2tlZDogdW5kZWZpbmVkLFxuICAgICAgc2VsZWN0ZWRfaXRlbXNfc2x1Z3M6IFtdLFxuICAgICAgZm9jdXNlZF9pdGVtc19zbHVnczogW10sXG5cbiAgICAgIG1heF9pdGVtc19zZWxlY3RlZDogMTUsXG5cbiAgICAgIHNob3dfY29uZmlybV9yZW1vdmVfbWVudTogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHt9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubGlzdENodXRpZXIoKTtcbiAgICB0aGlzLiRhcGkuam9pbih7IHJvb206IHRoaXMucGF0aCB9KTtcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLiRhcGkubGVhdmUoeyByb29tOiB0aGlzLnBhdGggfSk7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgLy8gY2h1dGllcl9pdGVtcygpIHtcbiAgICAvLyAgIHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MgPSB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLmZpbHRlcihcbiAgICAvLyAgICAgKGl0ZW1fcGF0aCkgPT4gdGhpcy5jaHV0aWVyX2l0ZW1zLmZpbmQoKGNpKSA9PiBjaS4kcGF0aCA9PT0gaXRlbV9wYXRoKVxuICAgIC8vICAgKTtcbiAgICAvLyB9LFxuICAgIHNlbGVjdGVkX2l0ZW1zX3NsdWdzKCkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICB0aGlzLnNob3dfY29uZmlybV9yZW1vdmVfbWVudVxuICAgICAgKVxuICAgICAgICB0aGlzLnNob3dfY29uZmlybV9yZW1vdmVfbWVudSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZF9pdGVtc19zbHVncy5sZW5ndGggPiB0aGlzLm1heF9pdGVtc19zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzID0gdGhpcy5zZWxlY3RlZF9pdGVtc19zbHVncy5zbGljZShcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMubWF4X2l0ZW1zX3NlbGVjdGVkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuJGFsZXJ0aWZ5XG4gICAgICAgICAgLmRlbGF5KDQwMDApXG4gICAgICAgICAgLmVycm9yKHRoaXMuJHQoXCJub3RpZmljYXRpb25zLnRvb19tYW55X2l0ZW1zX3NlbGVjdGVkXCIpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kYWxlcnRpZnlcbiAgICAgICAgICAgIC5kZWxheSg0MDAwKVxuICAgICAgICAgICAgLmVycm9yKFxuICAgICAgICAgICAgICB0aGlzLiR0KFwibm90aWZpY2F0aW9ucy5tYXhfaXRlbXNfaXNcIikgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICB0aGlzLm1heF9pdGVtc19zZWxlY3RlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNodXRpZXJfaXRlbXMoKSB7XG4gICAgICAvLyBjaGVjayBpZiBhbGwgaXRlbXMgc3RpbGwgZXhpc3QsIHJlbW92ZSB0aGVtIGlmIHRoYXQncyBub3QgdGhlIGNhc2VcbiAgICAgIGNvbnN0IGNsZWFuZWRfdXBfaXRlbXMgPSB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLmZpbHRlcigoZmlzKSA9PlxuICAgICAgICB0aGlzLmNodXRpZXJfaXRlbXMuc29tZSgoY2kpID0+IGNpLiRwYXRoID09PSBmaXMpXG4gICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzKSAhPT1cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoY2xlYW5lZF91cF9pdGVtcylcbiAgICAgIClcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9pdGVtc19zbHVncyA9IGNsZWFuZWRfdXBfaXRlbXM7XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGVkX2FzLiRwYXRoO1xuICAgIH0sXG4gICAgZm9jdXNlZF9pdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvY3VzZWRfaXRlbXNfc2x1Z3MubWFwKChmaXMpID0+XG4gICAgICAgIHRoaXMuY2h1dGllcl9pdGVtcy5maW5kKChjaSkgPT4gY2kuJHBhdGggPT09IGZpcylcbiAgICAgICk7XG4gICAgfSxcbiAgICBzZWxlY3RlZF9pdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLm1hcChcbiAgICAgICAgKGZpcykgPT4gdGhpcy5jaHV0aWVyX2l0ZW1zLmZpbmQoKGNpKSA9PiBjaS4kcGF0aCA9PT0gZmlzKSB8fCBmYWxzZVxuICAgICAgKTtcbiAgICB9LFxuICAgIGFsbF9pdGVtc19zZWxlY3RlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX2l0ZW1zLmxlbmd0aCA9PT0gdGhpcy5jaHV0aWVyX2l0ZW1zLmxlbmd0aDtcbiAgICB9LFxuICAgIGNodXRpZXJfaXRlbXMoKSB7XG4gICAgICBpZiAoIXRoaXMuY2h1dGllciB8fCAhdGhpcy5jaHV0aWVyLiRmaWxlcykgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgX21lZGlhcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jaHV0aWVyLiRmaWxlcykpO1xuICAgICAgX21lZGlhcy5zb3J0KFxuICAgICAgICAoYSwgYikgPT4gK25ldyBEYXRlKGIuJGRhdGVfdXBsb2FkZWQpIC0gK25ldyBEYXRlKGEuJGRhdGVfdXBsb2FkZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIF9tZWRpYXM7XG4gICAgfSxcbiAgICBjaHV0aWVyX2l0ZW1zX2dyb3VwZWQoKSB7XG4gICAgICBjb25zdCBncm91cGVkID0gdGhpcy5jaHV0aWVyX2l0ZW1zLnJlZHVjZSgoZ3JvdXAsIGZpbGUpID0+IHtcbiAgICAgICAgLy8gdmFyIGtleSA9IGZpbGUuJGRhdGVfdXBsb2FkZWQ7XG5cbiAgICAgICAgdmFyIGRhdGVPYmogPSBuZXcgRGF0ZShmaWxlLiRkYXRlX2NyZWF0ZWQpO1xuICAgICAgICB2YXIgbW9udGggPSBkYXRlT2JqLmdldFVUQ01vbnRoKCkgKyAxOyAvL21vbnRocyBmcm9tIDEtMTJcbiAgICAgICAgdmFyIGRheSA9IGRhdGVPYmouZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB2YXIgeWVhciA9IGRhdGVPYmouZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgY29uc3Qga2V5ID0geWVhciArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIGRheTtcblxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChncm91cCwga2V5KSkgZ3JvdXBba2V5XSA9IFtdO1xuICAgICAgICBncm91cFtrZXldLnB1c2goZmlsZSk7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgbGV0IG9yZGVyZWQgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgayBpbiBncm91cGVkKVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcmRlcmVkLCBrKSkgb3JkZXJlZC5wdXNoKGspO1xuICAgICAgb3JkZXJlZC5zb3J0KCk7XG4gICAgICBvcmRlcmVkLnJldmVyc2UoKTtcblxuICAgICAgcmV0dXJuIG9yZGVyZWQubWFwKChvKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IG8sXG4gICAgICAgICAgZmlsZXM6IGdyb3VwZWRbb10sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgbGlzdENodXRpZXIoKSB7XG4gICAgICB0aGlzLmNodXRpZXIgPSBhd2FpdCB0aGlzLiRhcGlcbiAgICAgICAgLmdldEZvbGRlcih7XG4gICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuZmV0Y2hfcHJvamVjdF9lcnJvciA9IGVyci5yZXNwb25zZTtcbiAgICAgICAgICB0aGlzLmlzX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB0b2dnbGVTZWxlY3QocGF0aCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MuaW5jbHVkZXMocGF0aCkpXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MgPSB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLmZpbHRlcihcbiAgICAgICAgICAoaSkgPT4gaSAhPT0gcGF0aFxuICAgICAgICApO1xuICAgICAgZWxzZSB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLnB1c2gocGF0aCk7XG4gICAgfSxcbiAgICBzZXRTZWxlY3Rpb25Bc0ZvY3VzKCkge1xuICAgICAgdGhpcy5mb2N1c2VkX2l0ZW1zX3NsdWdzID0gSlNPTi5wYXJzZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZF9pdGVtc19zbHVncylcbiAgICAgICk7XG4gICAgfSxcbiAgICB1cGRhdGVJbnB1dEZpbGVzKCRldmVudCkge1xuICAgICAgdGhpcy5zZWxlY3RlZF9maWxlcyA9IEFycmF5LmZyb20oJGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICB9LFxuICAgIGFzeW5jIGltcG9ydGVkTWVkaWFzKCRldmVudCkge1xuICAgICAgJGV2ZW50O1xuICAgICAgLy8gY29uc29sZS5sb2coXCJzZWxlY3RlZF9pdGVtc19zbHVncyA9IFwiICsgJGV2ZW50KTtcbiAgICAgIC8vIHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MgPSAkZXZlbnQubWFwKFxuICAgICAgLy8gICAoaSkgPT4gdGhpcy5jb25uZWN0ZWRfYXMuJHBhdGggKyBcIi9cIiArIGlcbiAgICAgIC8vICk7XG4gICAgfSxcbiAgICBzZWxlY3RBbGwoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzID0gdGhpcy5jaHV0aWVyX2l0ZW1zLm1hcCgoaSkgPT4gaS4kcGF0aCk7XG4gICAgfSxcbiAgICBkZXNlbGVjdEFsbCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MgPSBbXTtcbiAgICB9LFxuICAgIHNlbGVjdFJhbmdlKHJhbmdlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzID0gdGhpcy5zZWxlY3RlZF9pdGVtc19zbHVncy5jb25jYXQocmFuZ2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZF9pdGVtc19zbHVncyA9IFsuLi5uZXcgU2V0KHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MpXTtcbiAgICB9LFxuICAgIGRlc2VsZWN0UmFuZ2UocmFuZ2UpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MgPSB0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLmZpbHRlcihcbiAgICAgICAgKHNpKSA9PiAhcmFuZ2UuaW5jbHVkZXMoc2kpXG4gICAgICApO1xuICAgIH0sXG4gICAgcmFuZ2VJc1NlbGVjdGVkKHJhbmdlKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZF9pdGVtc19zbHVncy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIGZvciBlYWNoIGl0ZW0gaW4gcmFuZ2UsIG1ha2Ugc3VyZSBpdCBpcyBpbmNsdWRlZCBpbiBzZWxlY3RlZF9pdGVtc19zbHVnc1xuICAgICAgcmV0dXJuICFyYW5nZS5maW5kKChwKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX2l0ZW1zX3NsdWdzLmluY2x1ZGVzKHApID09PSBmYWxzZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgcmVtb3ZlSXRlbXNJblNlbGVjdGlvbigpIHtcbiAgICAgIGZvciAoY29uc3QgaXRlbV9wYXRoIG9mIHRoaXMuc2VsZWN0ZWRfaXRlbXNfc2x1Z3MpIHtcbiAgICAgICAgYXdhaXQgdGhpcy4kYXBpLmRlbGV0ZUl0ZW0oeyBwYXRoOiBpdGVtX3BhdGggfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3dfY29uZmlybV9yZW1vdmVfbWVudSA9IGZhbHNlO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uX215Q2h1dGllciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNodXRpZXItYmcpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAvLyBwYWRkaW5nOiAwIGNhbGModmFyKC0tc3BhY2luZykgLyAxKTtcbn1cbi5fdG9wQ29udGVudCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAvIDIpO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZykgLyAxKTtcblxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgbWFzazogbGluZWFyLWdyYWRpZW50KGJsYWNrIDc1JSwgdHJhbnNwYXJlbnQgMTAwJSk7XG59XG4uX21pZGRsZUNvbnRlbnQge1xuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tc3BhY2luZykgLyAxKTtcbn1cbi5faW1wb3J0QnRuIHtcbiAgLy8gcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nKSAvIDEpIDA7XG59XG5cbi5faXRlbXMge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIpIGNhbGModmFyKC0tc3BhY2luZykgLyAxKTtcbn1cbi5faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbn1cblxuLl9pdGVtLS1sYWJlbCB7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGdhcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAvIDQpO1xuICAvLyBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbn1cblxuLl9zZWxlY3Rpb25CYXIsXG4uX3JlbW92ZU1lbnUge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IGNhbGModmFyKC0tc3BhY2luZykgLyAyKTtcblxuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCBibGFjaztcbiAgYmFja2dyb3VuZDogdmFyKC0tY2h1dGllci1iZyk7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbiAgLy8gYmFja2dyb3VuZDogYmxhY2s7XG5cbiAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nKSAvIDQpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIpO1xufVxuLl9yZW1vdmVNZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIpO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbn1cblxuLl9zZWxlY3Rpb25CYXItLXByZXZpZXdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZykgLyAyKTtcbiAgZ2FwOiBjYWxjKHZhcigtLXNwYWNpbmcpIC8gNCk7XG5cbiAgOjp2LWRlZXAgLl9tZWRpYUNvbnRlbnQtLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbn1cbi5fc2VsZWN0aW9uQmFyLS1wcmV2aWV3cy0tcHJldmlldyB7XG4gIGZsZXg6IDAgMSAyMHB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5fbWVkaWFTdGFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uX3VwbG9hZEZpbGVzTGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2h1dGllci1iZyk7XG4gIHotaW5kZXg6IDE7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-37[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MyChutier.vue?vue&type=script&lang=js&\n");

/***/ })

});