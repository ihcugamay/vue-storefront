(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{133:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This module contains all the logic, components and store related to the user account")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("A component to handle redirects to user account page and user logout. Usually used in header.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("User Store is designed to handle all actions related to the user account.\nAll user related data is stored in the original eCommerce CMS/Magento and the modifying actions are executed directly against the platform API.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),a("p",[t._v("The user state data:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("token")]),t._v(" - this is the current user token got from the "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L64",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("user/login")]),a("OutboundLink")],1),t._v(". It's used to authorize all subsequent calls with the current user identity. If this token is not empty it does mean that the user is authorized.")]),t._v(" "),a("li",[a("code",[t._v("current")]),t._v(" - this is the current user object received from "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L105",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("user/me")]),a("OutboundLink")],1),t._v(" - immediately called after the login action.")])]),t._v(" "),a("p",[t._v("The user data format:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),a("ul",[a("li",[a("code",[t._v("EventBus.$emit('session-after-started')")]),t._v(" - executed just "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L22",target:"_blank",rel:"noopener noreferrer"}},[t._v("after the application has been loaded"),a("OutboundLink")],1),t._v(" and the User UI session has started")]),t._v(" "),a("li",[a("code",[t._v("EventBus.$emit('user-after-loggedin', res)")]),t._v(" - executed after the successful "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L123",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("user/me")]),t._v(" action call"),a("OutboundLink")],1),t._v(" - so the user has been authorized and the profile loaded")])]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("The user store provides the following public actions:")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("Registers the user account in the eCommerce platform / Magento.")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("This action is used to update various user profile data. Please check the "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/master/core/store/modules/user/userProfile.schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("user schema"),a("OutboundLink")],1),t._v(" for the data format details.")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),a("p",[t._v("This is used to log out the user, close the session and clear the user token. Please notice - the current shopping cart is closed after this call.")]),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("All state members should have been accessed only by getters. Please take a look at the state reference for data formats")]),t._v(" "),t._m(34)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"user-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-module","aria-hidden":"true"}},[this._v("#")]),this._v(" User Module")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[this._v("#")]),this._v(" Components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"accountbutton"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accountbutton","aria-hidden":"true"}},[this._v("#")]),this._v(" AccountButton")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Computed")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("isLoggedIn")]),this._v(" - represents if user is logged in;")]),this._v(" "),s("li",[s("code",[this._v("user")]),this._v(" - current user.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Methods")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("goToAccount")]),this._v(" - is user is logged in, redirects user to account page. Otherwise shows sign-up modal")]),this._v(" "),s("li",[s("code",[this._v("logout")]),this._v(" - emits "),s("code",[this._v("user-before-logout")]),this._v(" event and redirects user to home page")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"login"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login","aria-hidden":"true"}},[this._v("#")]),this._v(" Login")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Methods")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("close")]),t._v(" - closes signup modal")]),t._v(" "),a("li",[a("code",[t._v("callLogin")]),t._v(" - starts authentication process with emitting "),a("code",[t._v("notification-progress-start")]),t._v(", calls "),a("code",[t._v("user/login")]),t._v(" action with user's email and password.")]),t._v(" "),a("li",[a("code",[t._v("switchElem")]),t._v(" - triggers "),a("code",[t._v("setAuthElem")]),t._v(" mutation with "),a("code",[t._v("register")]),t._v(" parameter")]),t._v(" "),a("li",[a("code",[t._v("callForgotPassword")]),t._v(" - triggers "),a("code",[t._v("setAuthElem")]),t._v(" mutation with "),a("code",[t._v("forgot-pass")]),t._v(" parameter")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"register"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register","aria-hidden":"true"}},[this._v("#")]),this._v(" Register")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"useraccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useraccount","aria-hidden":"true"}},[this._v("#")]),this._v(" UserAccount")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"usershippingdetails"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usershippingdetails","aria-hidden":"true"}},[this._v("#")]),this._v(" UserShippingDetails")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" Store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[this._v("#")]),this._v(" State")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    current"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"result"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("58")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"group_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"default_billing"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"62"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"default_shipping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"48"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-01-23 15:30:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-03-04 06:39:28"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"created_in"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Default Store View"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"email"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"pkarwatka28@example.pl"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"firstname"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Piotr"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"lastname"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Karwatka"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"store_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"website_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"addresses"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("48")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"customer_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("58")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"region"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"region_code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"region"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"region_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"region_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"country_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PL"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"street"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"Street"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"12"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"telephone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"postcode"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"51-169"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"city"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"City"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"firstname"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Piotr"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"lastname"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Karwatka"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"default_shipping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("62")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"customer_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("58")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"region"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"region_code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"region"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"region_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"region_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"country_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PL"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"street"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"Street"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"12"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"company"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"example"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"telephone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"postcode"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"51-169"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"city"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"City"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"firstname"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Piotr"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"lastname"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Karwatka"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"vat_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PL8951930748"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"default_billing"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"disable_auto_group_change"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The following events are published from "),s("code",[this._v("user")]),this._v(" store:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"startsession-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startsession-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("startSession (context)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Just to mark that the session is started and loading the current user token from the "),s("code",[this._v("localForage")]),this._v(" - for the further usage.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"resetpassword-context-email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resetpassword-context-email","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("resetPassword (context, { email })")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Calls the "),s("code",[this._v("vue-storefront-api")]),this._v(" endpoint to send the password reset link to specified "),s("code",[this._v("email")]),this._v(" address")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"login-context-username-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-context-username-password","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("login (context, { username, password })")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Called to login the user and receive the current token that can be used to authorize subsequent API calls. After user is successfully authorized the "),s("code",[this._v("user/me")]),this._v(" action is dispatched to load the user profile data.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"register-context-email-firstname-lastname-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-context-email-firstname-lastname-password","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("register (context, { email, firstname, lastname, password })")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"me-context-refresh-true-usecache-true"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#me-context-refresh-true-usecache-true","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("me (context, { refresh = true, useCache = true })")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Loads the user profile from eCommerce CMS; when "),a("code",[t._v("userCache")]),t._v(" is set to true the result will be stored in the "),a("code",[t._v("localForage")]),t._v(" and if it's stored before - returned from cache using the "),a("code",[t._v("fastest")]),t._v(" strategy (network vs cache). If "),a("code",[t._v("refresh")]),t._v(" is set to true - the user data will be pulled from the server despite the cached copy is available.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"update-context-userdata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-context-userdata","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("update (context, userData)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"changepassword-context-passworddata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changepassword-context-passworddata","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("changePassword (context, passwordData)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Tries to change the user password to "),s("code",[this._v("passwordData.newPassword")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"logout-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logout-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("logout (context)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"getters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[this._v("#")]),this._v(" Getters")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getters "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("isLoggedIn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="user.md";s.default=n.exports}}]);