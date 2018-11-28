(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{159:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Starting from version 1.4.0 Vue Storefront allows you to switch the html templates and layouts dynamically in the SSR mode.")]),t._v(" "),a("p",[t._v("This feature can be very useful for non-standard rendering scenarios like:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Before 1.4.0 Vue Storefront generated the output by mix of:")]),t._v(" "),a("ul",[t._m(3),t._v(" "),t._m(4),t._v(" "),a("li",[t._v("injecting the Vue SSR output into the template + adding CSS styles, script references etc. "),a("a",{attrs:{href:"https://ssr.vuejs.org/guide/build-config.html#client-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more on Vue SSR Styles and Scripts injection"),a("OutboundLink")],1)])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The changes we've introduced:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("We've added two new HTML templates + two Vue layouts.")]),t._v(" "),a("p",[t._v("Templates:")]),t._v(" "),a("ul",[t._m(9),t._v(" "),a("li",[a("code",[t._v("index.minimal.template.html")]),t._v(" - which contains the standard HTML markup without any additional injects - so when you render a Vue component its output will be pasted into "),a("code",[t._v("<body>")]),t._v(" and that's all. Probably good starting point for "),a("a",{attrs:{href:"https://www.ampstart.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMPHTML implementation"),a("OutboundLink")],1)])]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("Route setup to switch the Vue layout:")]),t._v(" "),t._m(17),a("p",[t._v("Vue component to render the XML:")]),t._v(" "),t._m(18),a("p",[t._v("The key part is:")]),t._v(" "),t._m(19),a("p",[t._v("These two statements:")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("Route setup to switch the Vue layout:")]),t._v(" "),t._m(23),a("p",[t._v("Vue component to render the XML:")]),t._v(" "),t._m(24),a("p",[t._v("The key part is:")]),t._v(" "),t._m(25),a("p",[t._v("These two statements:")]),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("The output will be generated with this logic:")]),t._v(" "),t._m(27),a("p",[t._v("Please note, that the "),a("code",[t._v("context")]),t._v(" contains lot of interesting features you can use to control the CSS, SCRIPT and META injection. "),a("a",{attrs:{href:"https://ssr.vuejs.org/guide/build-config.html#client-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more on Vue SSR Styles and Scripts injection"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Note: "),a("a",{attrs:{href:"https://ssr.vuejs.org/guide/head.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The context object = Vue.prototype.$ssrContext"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"layouts-and-advanced-output-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layouts-and-advanced-output-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" Layouts and advanced output operations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("generating the XML output,")]),this._v(" "),s("li",[this._v("generating the AMPHTML pages,")]),this._v(" "),s("li",[this._v("generating widgets without "),s("code",[this._v("<head>")]),this._v(" section")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-it-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[this._v("#")]),this._v(" How it works")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("taking the base HTML template "),s("code",[this._v("src/index.template.html")]),this._v(",")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("rendering the "),s("code",[this._v("src/themes/default/App.vue")]),this._v(" root component,")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This mode is still in place and it's enabled by default.\nWhat we've changed is "),s("strong",[this._v("you can now select which html template + layout your app is routing in per-route manner")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog","aria-hidden":"true"}},[this._v("#")]),this._v(" Changelog")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("now distinct routes can set "),a("code",[t._v("context.output.template")]),t._v(" in "),a("code",[t._v("asyncData")]),t._v(" method. By doing so you can skip using "),a("code",[t._v("dist/index.html")]),t._v(" (which contains typical HTML5 elements - like "),a("code",[t._v("<head>")]),t._v("). This is important when we're going to generate either AMPHTML pages (that cannot contain any "),a("code",[t._v("<script>")]),t._v(" tags) or xml files - you name it")]),t._v(" "),a("li",[t._v("distinct routes can set "),a("code",[t._v("meta.layout")]),t._v(" and by doing so switch the previously constant "),a("code",[t._v("App.vue")]),t._v(" layout file")]),t._v(" "),a("li",[t._v("you've got access to server "),a("code",[t._v("context")]),t._v(" object in "),a("code",[t._v("asyncData")]),t._v(" and two new features - "),a("code",[t._v("output.prepend")]),t._v(" and "),a("code",[t._v("output.append")]),t._v(" have been created to allow you control the rendering flow of the template")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Templates")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("index.basic.template.html")]),this._v(" - which contains the standard HTML markup + CSS injection")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can add more templates. All you need is to set the proper "),s("code",[this._v("config.ssr.templates")]),this._v(" variable:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v('"ssr"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"templates"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"default"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist/index.html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"minimal"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist/index.minimal.html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"basic"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist/index.basic.html"')]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"executeMixedinAsyncData"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"initialStateFilter"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"config"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"__DEMO_MODE__"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"version"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"storeView"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"useInitialStateFilter"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Templates paths are relative to root folder of "),s("code",[this._v("vue-storefront")]),this._v(". You can also set the template to none ("),s("code",[this._v('""')]),this._v(") to skip it. This option can be useful for XML / JSON / widgets rendering that do not require the whole HTML layout.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can find some examples in the "),s("code",[this._v("src/extensions/raw-output-example")]),this._v(" example.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"generating-the-xml-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-xml-output","aria-hidden":"true"}},[this._v("#")]),this._v(" Generating the XML output")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Example URL: "),s("code",[this._v("http://localhost:3000/raw-output-example.xml")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/raw-output-example.xml'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RawOutputExample"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" layout"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'empty'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("raw"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("content"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    This page is using empty layout "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" routes "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" no html template\n  "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("raw"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("content"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'RawOutputExample'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("asyncData")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    contextserver"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'text/xml'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'exampleData'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Data from base component'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("contextserver"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'text/xml'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("set the HTTP header (by accessing ExpressJS response object - "),a("code",[t._v("contextserver.response")]),t._v(". There is also "),a("code",[t._v("contextserver.request")]),t._v(" and "),a("code",[t._v("context.app")]),t._v(" - the ExpressJS application)- set "),a("code",[t._v("output.template")]),t._v(" to none which will cause to skip the HTML template rendering at all.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"switching-off-layout-injecting-dynamic-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switching-off-layout-injecting-dynamic-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Switching off layout + injecting dynamic content")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Example URL: "),s("code",[this._v("http://localhost:3000/append-prepend.html")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/append-prepend.html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NoLayoutAppendPrependExample"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" layout"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'empty'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("This page is rendered "),a("span",{attrs:{class:"token keyword"}},[t._v("with")]),t._v(" no JavaScripts attached "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" no layout at all"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'NoJSExample'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("asyncData")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("append")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>This content has been dynamically appended</div>'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("prepend")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>this content has been dynamically prepended</div>'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'exampleData'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Data from base component'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("append")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" context "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>This content has been dynamically appended</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("prepend")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" context "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>this content has been dynamically prepended</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("set "),a("code",[t._v("output.template")]),t._v(" to none which will cause to skip the HTML template rendering at all.")]),t._v(" "),a("li",[t._v("add the "),a("code",[t._v("output.append")]),t._v(" and "),a("code",[t._v("output.prepend")]),t._v(" methods to the server context.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contentPrepend "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prepend "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'function'")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("prepend")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contentAppend "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'function'")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noutput "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentPrepend "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" output "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" contentAppend"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="layouts.md";s.default=e.exports}}]);