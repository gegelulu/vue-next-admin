(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/set/phone"],{"2d4f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[t._m(0),n("view",{staticClass:"text"},[n("text",{staticClass:"txt color"},[t._v("您已绑定手机号")]),n("text",{staticClass:"txt"},[t._v(t._s(t.phone))])]),n("view",{staticClass:"btn"},[n("text",{staticClass:"btn-msg",attrs:{eventid:"afde3eb6-0"},on:{click:t.goToSetPhone}},[t._v("更换手机号")])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"phone"},[n("image",{staticClass:"img",attrs:{src:"../../../static/my/phone.png"}})])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"475c":function(t,e,n){"use strict";var a=n("d5f9"),o=n.n(a);o.a},5733:function(t,e,n){"use strict";n.r(e);var a=n("2d4f"),o=n("b6ea");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("475c");var u=n("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"66cd":function(t,e,n){"use strict";n("d005");var a=s(n("b0ce")),o=s(n("5733"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},7633:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{phone:"12345678910"}},methods:{navigateGoTo:function(e){t.navigateTo({url:e})},goToSetPhone:function(){this.navigateGoTo("/pages/my/set/phone-update")}}};e.default=n}).call(this,n("649d")["default"])},b6ea:function(t,e,n){"use strict";n.r(e);var a=n("7633"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},d5f9:function(t,e,n){}},[["66cd","common/runtime","common/vendor"]]]);