(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665a1900"],{"1c8e":function(t,e,n){"use strict";n("99af"),n("e9c4"),n("d3b7");var i=n("cee4"),r=n("d445"),o=n("3136"),a=n("5cc6"),s={props:{options:{type:Object,default:{}}},data:function(){return{progress:new r["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(a["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(o["e"])(t,e),this.options.ignoreErrors||this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,n,r){var o=this,a=n||"GET",s=this.useProxy?this.proxyReqEndpoint:t,u=JSON.stringify(r||{}),c=e||null,d=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(c)}:c,f=this.options.timeout||this.defaultTimeout,h={method:a,url:s,headers:d,data:u,timeout:f};return new Promise((function(t,e){i["a"].request(h).then((function(e){!1===e.data.success&&o.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){o.error("Unable to fetch data",t),e(t)})).finally((function(){o.finishLoading()}))}))}}};e["a"]=s},"217f":function(t,e,n){},3694:function(t,e,n){"use strict";n("217f")},c16a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"placeholder-widget"},[e("p",[t._v("Error finding and mounting specified widget")])])}],o=n("1c8e"),a={mixins:[o["a"]],mounted:function(){this.error("Unable to render widget of specified type")}},s=a,u=(n("3694"),n("2877")),c=Object(u["a"])(s,i,r,!1,null,"68ac1298",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-665a1900.2051f904.js.map