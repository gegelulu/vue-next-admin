(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{2536:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"news"},[i("img",{staticClass:"news-banner",attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3625784734,2853530461&fm=26&gp=0.jpg"}}),i("div",{staticClass:"news-content"},[i("div",{staticClass:"news-content-gps"},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-location-information"}),t._v(" 您所在位置： "),i("span",[t._v("首页")])]),i("el-breadcrumb-item",[t._v(t._s(t.routerSelData.label))]),t.$route.query.details?i("el-breadcrumb-item",[t._v("新闻资讯详情")]):t._e()],1)],1),i("div",{staticClass:"news-content-warp"},[i("div",{staticClass:"news-content-warp-left"},[i("div",{staticClass:"news-nav m-b-20"},t._l(t.routerLink,(function(s,e){return i("a",{key:e,class:{"news-nav-active":t.$route.query.key===s.key},on:{click:function(i){return t.onRouterLinkNavClick(s,e)}}},[i("div",{staticClass:"nav-a"},[i("div",{staticClass:"font-16"},[t._v(t._s(s.label))]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.isShow,expression:"v.isShow"}],staticClass:"font-12 m-t-5"},[t._v(t._s(s.desc))])])])})),0),i("div",{staticClass:"news-list m-b-20"},[i("div",{staticClass:"news-list-title font-13"},[t._v("相关推荐")]),i("div",{staticClass:"news-list-box"},t._l(t.newsList,(function(s,e){return i("div",{key:e,staticClass:"news-list-item"},[i("div",{staticClass:"list-box-left"},[i("img",{attrs:{src:s.url}})]),i("div",{staticClass:"list-box-right font-13"},[i("span",{staticClass:"ellipsis-3"},[t._v(t._s(s.title))])])])})),0)]),t._m(0)]),i("router-view")],1)])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"news-list"},[i("div",{staticClass:"news-list-title font-13"},[t._v("推荐阅读")]),i("div",{staticClass:"news-list-box font-13"},[i("div",{staticClass:"img-box"},[i("div",{staticClass:"img-box-scale"},[i("img",{attrs:{src:"http://p2.cri.cn/M00/4D/52/wKgACl7xy2yAXUTJAAAAAAAAAAA542.550x367.jpg"}}),i("div",{staticClass:"img-box-first-desc ellipsis-1"},[t._v("俄媒：中俄科技创新合作潜力巨大")])])]),i("div",{staticClass:"img-box"},[i("div",{staticClass:"img-box-desc ellipsis-1"},[t._v("中央广电总台“品牌强国工程”捐赠湖北广告资源启动")])]),i("div",{staticClass:"img-box"},[i("div",{staticClass:"img-box-desc ellipsis-1"},[t._v("伊朗反对美延长对伊武器禁运企图")])]),i("div",{staticClass:"img-box"},[i("div",{staticClass:"img-box-desc ellipsis-1"},[t._v("外媒：中非特别峰会推动构建更加紧密的中非命运共同体")])]),i("div",{staticClass:"img-box"},[i("div",{staticClass:"img-box-desc ellipsis-1"},[t._v("法国专家：中国现阶段未发生新冠疫情二次大流行")])]),i("div",{staticClass:"img-box"},[i("div",{staticClass:"img-box-desc ellipsis-1"},[t._v("外媒：中国积极帮助其他国家抗疫 获国际社会肯定")])])])])}],n=(i("d81d"),i("a9e3"),i("25eb"),i("d4ec")),r=i("bee2"),l=i("262e"),c=i("2caf"),o=i("9ab4"),u=i("60a3"),v=function(t){Object(l["a"])(i,t);var s=Object(c["a"])(i);function i(){return Object(n["a"])(this,i),s.apply(this,arguments)}return Object(r["a"])(i,[{key:"data",value:function(){return{routerSelData:{},routerLink:[{path:"/news/viewWeb",label:"新闻中心",desc:"NEWS CENTER",isShow:!0,key:"0"},{path:"/news/viewWeb",label:"景区新闻",desc:"SCENIC NEWS",isShow:!1,key:"1"},{path:"/news/viewWeb",label:"行业动态",desc:"INDUSTRY TRENDS",isShow:!1,key:"2"}],newsList:[{url:"http://p2.cri.cn/M00/50/78/wKgACl77H5eAfNg6AAAAAAAAAAA920.560x315.gif",title:"索斯亚拉：中国共产党领导下的中国为世界点亮希望"},{url:"http://p2.cri.cn/M00/50/79/wKgACl77IKWAP-DWAAAAAAAAAAA552.560x315.gif",title:"柬埔寨学者：中国人民有中国共产党的领导很幸运"},{url:"http://p2.cri.cn/M00/50/72/wKgACl77F3qAMINCAAAAAAAAAAA885.500x281.gif",title:"蒙古国汉学家：中国共产党带领人民为世界抗疫做出贡献"},{url:"http://p2.cri.cn/M00/50/70/wKgACl77EsaARzALAAAAAAAAAAA969.500x281.gif",title:"老挝媒体人：脱贫攻坚 凸显中国共产党执政为民理念"}]}}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){this.routerSelData=this.routerLink[Number.parseInt(this.$route.query.key)],this.initShowDesc(this.$route.query.key)}},{key:"initShowDesc",value:function(t){this.routerLink.map((function(t){return t.isShow=!1})),this.routerLink[t].isShow=!0}},{key:"onRouterLinkNavClick",value:function(t,s){this.initShowDesc(s),this.routerSelData=t,this.$router.push({path:t.path,query:{t:(new Date).getTime(),key:t.key}})}}]),i}(u["b"]);v=Object(o["a"])([u["a"]],v);var A=v,d=A,b=(i("8a3d"),i("2877")),w=Object(b["a"])(d,e,a,!1,null,"0316b1d2",null);s["default"]=w.exports},"8a3d":function(t,s,i){"use strict";var e=i("f136"),a=i.n(e);a.a},ae40:function(t,s,i){var e=i("83ab"),a=i("d039"),n=i("5135"),r=Object.defineProperty,l={},c=function(t){throw t};t.exports=function(t,s){if(n(l,t))return l[t];s||(s={});var i=[][t],o=!!n(s,"ACCESSORS")&&s.ACCESSORS,u=n(s,0)?s[0]:c,v=n(s,1)?s[1]:void 0;return l[t]=!!i&&!a((function(){if(o&&!e)return!0;var t={length:-1};o?r(t,1,{enumerable:!0,get:c}):t[1]=1,i.call(t,u,v)}))}},d81d:function(t,s,i){"use strict";var e=i("23e7"),a=i("b727").map,n=i("1dde"),r=i("ae40"),l=n("map"),c=r("map");e({target:"Array",proto:!0,forced:!l||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},f136:function(t,s,i){}}]);