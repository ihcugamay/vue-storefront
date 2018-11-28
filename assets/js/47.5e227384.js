(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{132:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Attribute Store is designed to handle all actions related to the attributes management")]),t._v(" "),t._m(1),t._v(" "),t._m(2),a("p",[t._v("As we're using the attributes dictionary for the product management in a very similar way Magento does ("),a("a",{attrs:{href:"http://www.xpertdeveloper.com/2010/10/what-is-eav-model-in-magento/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EAV model"),a("OutboundLink")],1),t._v(") we're operating on the attributes, attribute types and dictionaries.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),a("p",[t._v("This is example from "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c954b96f6633a201e10bed1d2e4c0def1aeb3071/core/pages/Compare.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("product compare feature"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The attribute state data:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The attribute store provides following public actions:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Attribute module exports one, very popular helper method:")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("All state members should have been accessed only by getters. Please take a look at the state reference for data formats")]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"attribute-vuex-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attribute-vuex-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Attribute Vuex Store")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[this._v("#")]),this._v(" State")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list_by_code"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    list_by_id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    labels"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Attributes are "),e("strong",[this._v("explicitly")]),this._v(" loaded by the user by calling the "),e("code",[this._v("attribute/list")]),this._v(" method. For example, when you're going to work with customizable attributes of the product or to work on variants you need to prefetch the attributes metadata:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'attribute/list'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  filterValues"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filterField"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'is_user_defined'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("list_by_code")]),t._v(" - this is a dictionary where you can get the specific attribute by just accessing the "),a("code",[t._v("list_by_code['color']")]),t._v(" etc.")]),t._v(" "),a("li",[a("code",[t._v("list_by_id")]),t._v(" - this is a dictionary where you can get the specific attribute by just accessing the "),a("code",[t._v("list_by_id[123]")]),t._v(" etc.")]),t._v(" "),a("li",[a("code",[t._v("labels")]),t._v(" - the preloaded labels of attribute values (the V in EAV)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"list-context-filtervalues-null-filterfield-attribute-code-size-150-start-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-context-filtervalues-null-filterfield-attribute-code-size-150-start-0","aria-hidden":"true"}},[this._v("#")]),this._v(" `list (context, { filterValues = null, filterField = 'attribute_code', size = 150, start = 0 })``")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("This method is used to load the attributes metadata. "),a("code",[t._v("filterValues")]),t._v(" is an array of multiple values like: "),a("code",[t._v("['color', 'size']")]),t._v(" and the "),a("code",[t._v("filterField")]),t._v(" is the attribute field to compare the "),a("code",[t._v("filterValues")]),t._v(" against. Usually is a "),a("code",[t._v("attribute_code")]),t._v(" or "),a("code",[t._v("attribute_id")]),t._v(". The "),a("code",[t._v("size")]),t._v(" and "),a("code",[t._v("start")]),t._v(" are just used to limit the list.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"helpers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helpers","aria-hidden":"true"}},[this._v("#")]),this._v(" Helpers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"export-function-optionlabel-state-attributekey-searchby-code-optionid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export-function-optionlabel-state-attributekey-searchby-code-optionid","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("export function optionLabel (state, { attributeKey, searchBy = 'code', optionId })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is used to get the Label for specific "),e("code",[this._v("optionId")]),this._v(". For example, when the user filters products and uses the 165 attribute_value we can call "),e("code",[this._v("optionLabel( { attributeKey: 'color', optionId: 165 })")]),this._v(" to get back 'Red' label.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[this._v("#")]),this._v(" Getters")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  attributeListByCode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list_by_code"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attributeListById"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list_by_id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="attribute-store.md";e.default=n.exports}}]);