(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da592926"],{1355:function(t,e,s){},"1c8e":function(t,e,s){"use strict";s("99af"),s("e9c4"),s("d3b7");var n=s("cee4"),a=s("d445"),i=s("3136"),r=s("5cc6"),o={props:{options:{type:Object,default:{}}},data:function(){return{progress:new a["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(r["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(i["e"])(t,e),this.options.ignoreErrors||this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,s,a){var i=this,r=s||"GET",o=this.useProxy?this.proxyReqEndpoint:t,u=JSON.stringify(a||{}),c=e||null,l=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(c)}:c,d=this.options.timeout||this.defaultTimeout,f={method:r,url:o,headers:l,data:u,timeout:d};return new Promise((function(t,e){n["a"].request(f).then((function(e){!1===e.data.success&&i.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){i.error("Unable to fetch data",t),e(t)})).finally((function(){i.finishLoading()}))}))}}};e["a"]=o},6750:function(t,e,s){"use strict";s.r(e);s("b0c0");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ad-guard-filter-status-wrapper"},[null!==t.status&&t.showOnOffStatusOnly?e("div",{staticClass:"status"},[e("span",{staticClass:"status-lbl"},[t._v(t._s(t.$t("widgets.pi-hole.status-heading"))+":")]),e("span",{class:"status-val ".concat(t.getStatusColor(t.status))},[t._v(" "+t._s(t.status?"Enabled":"Disabled")+" ")])]):t._e(),t.filters&&!t.showOnOffStatusOnly?e("div",{staticClass:"filters-list"},t._l(t.filters,(function(s){return e("div",{key:s.id,staticClass:"filter"},[e("div",{staticClass:"row-1"},[e("span",{class:"on-off ".concat(s.enabled?"green":"red")},[t._v(" "+t._s(s.enabled?"✔":"✘")+" ")]),e("span",{staticClass:"filter-name"},[t._v(t._s(s.name))]),e("span",{staticClass:"filter-rules-count"},[t._v(t._s(s.rules_count))])]),e("div",{staticClass:"row-2"},[e("span",{staticClass:"updated"},[t._v("Updated "+t._s(t._f("formatDate")(s.last_updated)))]),s.url?e("a",{staticClass:"filter-link",attrs:{href:s.url}},[t._v("View List")]):t._e()])])})),0):t._e()])},a=[],i=(s("99af"),s("313d"),s("0eb6"),s("b7ef"),s("8bd4"),s("1c8e")),r=s("b96f"),o={mixins:[i["a"]],computed:{hostname:function(){return this.options.hostname||this.error("You must specify the path to your AdGuard server"),this.options.hostname},showOnOffStatusOnly:function(){return this.options.showOnOffStatusOnly},endpoint:function(){return"".concat(this.hostname,"/control/filtering/status")},authHeaders:function(){if(this.options.username&&this.options.password){var t=window.btoa("".concat(this.options.username,":").concat(this.options.password));return{Authorization:"Basic ".concat(t)}}return{}}},data:function(){return{status:null,filters:null}},filters:{formatDate:function(t){return t?Object(r["l"])(t):"Never"}},methods:{fetchData:function(){this.makeRequest(this.endpoint,this.authHeaders).then(this.processData)},processData:function(t){this.status=t.enabled,this.filters=t.filters},getStatusColor:function(t){return t?"green":"red"}}},u=o,c=(s("b7a4"),s("2877")),l=Object(c["a"])(u,n,a,!1,null,null,null);e["default"]=l.exports},b7a4:function(t,e,s){"use strict";s("1355")}}]);
//# sourceMappingURL=chunk-da592926.ffde3fa2.js.map