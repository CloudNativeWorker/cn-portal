(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c953a9"],{"12d5":function(t,e,i){},"201a":function(t,e,i){"use strict";i("9ea2")},"20b0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"work-space"},[e("SideBar",{attrs:{sections:t.sections,initUrl:t.getInitialUrl()},on:{"launch-app":t.launchApp,"launch-widget":t.launchWidget}}),t.isMultiTaskingEnabled?e("MultiTaskingWebComtent",{attrs:{url:t.url}}):e("WebContent",{attrs:{url:t.url}}),t.widgets?e("WidgetView",{attrs:{widgets:t.widgets}}):t._e()],1)},s=[],a=i("aaa3"),r=(i("b0c0"),function(){var t=this,e=t._self._c;return e("nav",{staticClass:"side-bar"},[t._l(t.sections,(function(i,n){return e("div",{key:n,staticClass:"side-bar-section"},[e("div",{staticClass:"side-bar-item-container",on:{click:function(e){return t.openSection(n)}}},[e("SideBarItem",{staticClass:"item",attrs:{icon:i.icon,title:i.name}})],1),e("transition",{attrs:{name:"slide"}},[t.isOpen[n]?e("SideBarSection",{attrs:{items:t.filterTiles(i.items)},on:{"launch-app":t.launchApp}}):t._e()],1)],1)})),e("div",{staticClass:"switch-view-buttons"},[e("router-link",{attrs:{to:"/home/"}},[e("IconHome",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("alternate-views.default"),expression:"$t('alternate-views.default')"}],staticClass:"view-icon"})],1),e("router-link",{attrs:{to:"/minimal/"}},[e("IconMinimalView",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("alternate-views.minimal"),expression:"$t('alternate-views.minimal')"}],staticClass:"view-icon"})],1)],1)],2)}),o=[],c=(i("cb29"),i("4de4"),i("c740"),i("d81d"),i("d3b7"),i("ac1f"),i("5319"),i("159b"),function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"tooltip"}],class:"side-bar-item ".concat(t.icon?"w-icon":"text-only"),on:{click:function(e){return t.itemClicked()}}},[t.icon?e("Icon",{attrs:{icon:t.icon,size:"small",url:t.url}}):e("p",{staticClass:"small-title"},[t._v(t._s(t.title))])],1)}),l=[],u=i("d838"),p={name:"SideBarItem",props:{icon:String,title:String,url:String,target:String,click:Function},components:{Icon:u["a"]},methods:{itemClicked:function(){this.url&&this.$emit("launch-app",{url:this.url,target:this.target})}},data:function(){return{tooltip:{disabled:!this.title,content:this.title,trigger:"hover focus",placement:"bottom-end"}}}},d=p,f=(i("83eb"),i("2877")),h=Object(f["a"])(d,c,l,!1,null,"df79d1ee",null),m=h.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sub-side-bar"},t._l(t.items,(function(i,n){return e("div",{key:n},[i.subItems?t._e():e("SideBarItem",{staticClass:"item",attrs:{icon:i.icon,title:i.title,url:i.url,target:i.target},on:{"launch-app":t.launchApp}}),i.subItems?e("div",{staticClass:"sub-item-group"},t._l(i.subItems,(function(i,n){return e("SideBarItem",{key:n,staticClass:"item sub-item",attrs:{icon:i.icon,title:i.title,url:i.url,target:i.target},on:{"launch-app":t.launchApp}})})),1):t._e()],1)})),0)},g=[],w={name:"SideBarSection",props:{items:Array},components:{SideBarItem:m},methods:{launchApp:function(t){this.$emit("launch-app",t)}}},v=w,C=(i("201a"),Object(f["a"])(v,b,g,!1,null,"64f8a6fa",null)),A=C.exports,S=i("5b44"),k=i.n(S),I=i("3168"),_=i.n(I),y=i("ba21"),x={name:"SideBar",props:{sections:Array,initUrl:String},data:function(){return{isOpen:new Array(this.sections.length).fill(!1)}},components:{SideBarItem:m,SideBarSection:A,IconMinimalView:_.a,IconHome:k.a},methods:{openSection:function(t){this.isOpen=this.isOpen.map((function(e,i){return i===t&&!e})),this.sections[t].widgets&&this.$emit("launch-widget",this.sections[t].widgets)},launchApp:function(t){this.$emit("launch-app",t)},openDefaultSection:function(){var t=this;if(this.initUrl){var e=function(t){return t?t.replace(/[^\w\s]/gi,"").toLowerCase():void 0},i=function(i){return e(i.url)===e(t.initUrl)};this.sections.forEach((function(e,n){e.items&&(-1!==e.items.findIndex(i)&&t.openSection(n),e.items.forEach((function(e){e.subItems&&-1!==e.subItems.findIndex(i)&&t.openSection(n)})))}))}},filterTiles:function(t){return t?t.filter((function(t){return Object(y["a"])(t)})):[]}},mounted:function(){1===this.sections.length?this.openSection(0):this.openDefaultSection()}},B=x,$=(i("fdcc"),Object(f["a"])(B,r,o,!1,null,"fb1e975e",null)),W=$.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"web-content",attrs:{id:t.id}},[e("iframe",{attrs:{src:t.url,allow:"fullscreen; clipboard-write"}})])},E=[],T={name:"WebContent",props:{url:String,id:{type:String,default:"web-app-view"}}},U=T,j=(i("3fac"),Object(f["a"])(U,O,E,!1,null,"364206bf",null)),M=j.exports,L=function(){var t=this,e=t._self._c;return t.widgets?e("div",{staticClass:"workspace-widget-view"},t._l(t.widgets,(function(t,i){return e("WidgetBase",{key:i,staticClass:"workspace-widget",attrs:{widget:t,index:i}})})),1):t._e()},N=[],V=i("2955"),q={components:{WidgetBase:V["default"]},props:{widgets:Array}},D=q,F=(i("ba26"),Object(f["a"])(D,L,N,!1,null,"59c1943c",null)),H=F.exports,J=function(){var t=this,e=t._self._c;return e("div",{ref:"container",staticClass:"multi-taking-view"})},K=[],z=(i("a630"),i("caad"),i("14d9"),i("2532"),i("3ca3"),i("313d"),i("0eb6"),i("b7ef"),i("8bd4"),i("2b0e")),G={name:"WebContent",props:{url:String},data:function(){return{openApps:[]}},watch:{url:function(){this.launchApp()}},methods:{launchApp:function(){this.openApps.includes(this.url)?this.openExistingApp():(this.openApps.push(this.url),this.appendNewApp())},appendNewApp:function(){var t=z["a"].extend(M),e=new t({propsData:{url:this.url,id:btoa(this.url)}});e.$mount(),this.$refs.container.appendChild(e.$el)},openExistingApp:function(){Array.from(document.getElementsByClassName("web-content")).forEach((function(t){t.classList.add("hide")})),document.getElementById(btoa(this.url)).classList.remove("hide")}}},R=G,P=(i("97de"),Object(f["a"])(R,J,K,!1,null,"2a7b9297",null)),Q=P.exports,X=i("5cc6"),Y=i.n(X),Z=i("f899"),tt={name:"Workspace",mixins:[a["a"]],data:function(){return{url:"",widgets:null,GetTheme:Z["c"],ApplyLocalTheme:Z["b"],ApplyCustomVariables:Z["a"]}},computed:{sections:function(){return this.$store.getters.sections},appConfig:function(){return this.$store.getters.appConfig},isMultiTaskingEnabled:function(){return this.appConfig.enableMultiTasking||!1}},components:{SideBar:W,WebContent:M,WidgetView:H,MultiTaskingWebComtent:Q},methods:{launchApp:function(t){"newtab"===t.target?window.open(t.url,"_blank"):this.url=t.url,this.widgets=null},launchWidget:function(t){this.url="",this.widgets=t},initiateFontAwesome:function(){var t=document.createElement("script"),e=this.appConfig.fontAwesomeKey||Y.a.fontAwesomeKey;t.setAttribute("src","https://kit.fontawesome.com/".concat(e,".js")),document.head.appendChild(t)},getInitialUrl:function(){var t=this.$route;return t.query&&t.query.url?decodeURI(t.query.url):this.appConfig.workspaceLandingUrl?this.appConfig.workspaceLandingUrl:void 0}},mounted:function(){this.setTheme(),this.initiateFontAwesome(),this.url=this.getInitialUrl()}},et=tt,it=(i("dc51"),Object(f["a"])(et,n,s,!1,null,"6977bc0d",null));e["default"]=it.exports},"340c":function(t,e,i){},"3fac":function(t,e,i){"use strict";i("ae75")},"4a2e":function(t,e,i){},"4bff":function(t,e,i){},"81d5":function(t,e,i){"use strict";var n=i("7b0b"),s=i("23cb"),a=i("07fa");t.exports=function(t){var e=n(this),i=a(e),r=arguments.length,o=s(r>1?arguments[1]:void 0,i),c=r>2?arguments[2]:void 0,l=void 0===c?i:s(c,i);while(l>o)e[o++]=t;return e}},"83eb":function(t,e,i){"use strict";i("a56f")},"97de":function(t,e,i){"use strict";i("340c")},"9ea2":function(t,e,i){},a56f:function(t,e,i){},ae75:function(t,e,i){},ba26:function(t,e,i){"use strict";i("4a2e")},c740:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,a=i("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},cb29:function(t,e,i){"use strict";var n=i("23e7"),s=i("81d5"),a=i("44d2");n({target:"Array",proto:!0},{fill:s}),a("fill")},dc51:function(t,e,i){"use strict";i("4bff")},fdcc:function(t,e,i){"use strict";i("12d5")}}]);
//# sourceMappingURL=chunk-20c953a9.454143e4.js.map