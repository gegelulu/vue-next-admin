(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"093a":function(t,e,i){"use strict";i.r(e);var s=i("2759"),a=i.n(s);for(var l in s)"default"!==l&&function(t){i.d(e,t,function(){return s[t]})}(l);e["default"]=a.a},"235c":function(t,e,i){},2759:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=l(i("9a43")),a=l(i("de17"));function l(t){return t&&t.__esModule?t:{default:t}}var n={components:{selectList:s.default,pickerType:a.default},data:function(){return{picker:{date:"date"},shipSel:[{title:"所属分类",isClick:!1},{title:"排列方式",isClick:!1},{title:"装载日期",isClick:!1}],shipSelIndex:null,selDataList:[],selData1:[{title:"不限"},{title:"黄金"},{title:"木材"},{title:"碳钎维"},{title:"石头"},{title:"重金属"}],selData2:[{title:"综合排序"},{title:"好评优先"},{title:"配送最快"},{title:"配送费最低"},{title:"人均从低到高"},{title:"人均从高到低"},{title:"通用排序"}],isShow:!1,shipSelClickData:null,list:[{name:"木材",tonnage:"10000吨",startTime:"广西 南宁",endTime:"广东 深圳",surplusTime:"2019-01-01",type:"2天"},{name:"石头",tonnage:"2000吨",startTime:"江苏 南京",endTime:"广东 广州",surplusTime:"2019-02-01",type:"20天"}]}},methods:{navigateGoTo:function(e){t.navigateTo({url:e})},shipSelClick:function(t,e){var i=!0,s=!1,a=void 0;try{for(var l,n=this.shipSel[Symbol.iterator]();!(i=(l=n.next()).done);i=!0){var o=l.value;o.isClick=!1}}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}t.isClick=!0,this.shipSelIndex=e,this.shipSelClickData=t.title,0==e?(this.isShow=!0,this.selDataList=this.selData1):1==e?(this.isShow=!0,this.selDataList=this.selData2):this.isShow=!1},modelClick:function(){this.isShow=!1},selclick:function(e){this.shipSel[this.shipSelIndex].title=e.title,this.isShow=!this.isShow,t.showToast({icon:"none",title:"数据刷新成功！",duration:2e3})},goToDetails:function(t){this.navigateGoTo("/pages/ship/details?data="+JSON.stringify(t))},getTime:function(t){console.log(t)}},onNavigationBarButtonTap:function(t){this.navigateGoTo("/components/search/search")}};e.default=n}).call(this,i("649d")["default"])},"6e60":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"model",attrs:{eventid:"fa618294-0"},on:{click:t.modelClick,touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.moveHandle(e)}}}),i("view",{staticClass:"ship"},t._l(t.shipSel,function(e,s){return i("view",{key:s,staticClass:"flex",attrs:{eventid:"fa618294-2-"+s},on:{click:function(i){t.shipSelClick(e,s)}}},[i("view",{staticClass:"title-icon",class:{"font-color":t.shipSelIndex==s}},[2!=s?i("view",[i("text",{staticClass:"title"},[t._v(t._s(e.title))])]):i("view",[i("pickerType",{attrs:{sel:t.picker,eventid:"fa618294-1-"+s,mpcomid:"fa618294-0-"+s},on:{gettime:t.getTime}})],1),i("i",{staticClass:"iconfont icon",class:e.isClick?"rotate":""},[t._v("")])],1)])})),i("view",{staticClass:"list-margin-top"},t._l(t.list,function(e,s){return i("view",{key:s,staticClass:"list",attrs:{eventid:"fa618294-3-"+s},on:{click:function(i){t.goToDetails(e)}}},[i("view",{staticClass:"list-warp"},[i("view",{staticClass:"top"},[i("view",{staticClass:"top-left"},[i("text",{staticClass:"msg"},[t._v("货物："+t._s(e.name))])]),i("view",{staticClass:"top-left"},[i("text",{staticClass:"msg"},[t._v("重量："+t._s(e.tonnage))])])]),i("view",{staticClass:"bottom"},[i("view",{staticClass:"time"},[i("view",{staticClass:"time-flex color"},[t._v(t._s(e.startTime))]),t._m(0,!0),i("view",{staticClass:"time-flex color"},[t._v(t._s(e.endTime))])]),i("view",{staticClass:"content"},[i("view",{staticClass:"content-left"},[i("text",{staticClass:"msg"},[t._v("装载日期："+t._s(e.surplusTime))])]),i("view",{staticClass:"content-left right"},[i("text",{staticClass:"msg"},[t._v("有效天数："+t._s(e.type))])])])])])])})),i("select-list",{attrs:{"sel-data":t.selDataList,"is-show":t.isShow,"ship-sel-click-data":t.shipSelClickData,eventid:"fa618294-4",mpcomid:"fa618294-1"},on:{selclick:t.selclick}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"time-flex"},[i("text",{staticClass:"border"})])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},b63c:function(t,e,i){"use strict";var s=i("235c"),a=i.n(s);a.a},d6c1:function(t,e,i){"use strict";i("d005");var s=l(i("b0ce")),a=l(i("de75"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},de75:function(t,e,i){"use strict";i.r(e);var s=i("6e60"),a=i("093a");for(var l in a)"default"!==l&&function(t){i.d(e,t,function(){return a[t]})}(l);i("b63c");var n=i("2877"),o=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports}},[["d6c1","common/runtime","common/vendor"]]]);