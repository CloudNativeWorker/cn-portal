(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-832ca55a"],{"1bba":function(t,e,n){},"1c8e":function(t,e,n){"use strict";n("99af"),n("e9c4"),n("d3b7");var i=n("cee4"),o=n("d445"),s=n("3136"),r=n("5cc6"),a={props:{options:{type:Object,default:{}}},data:function(){return{progress:new o["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(r["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(s["e"])(t,e),this.options.ignoreErrors||this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,n,o){var s=this,r=n||"GET",a=this.useProxy?this.proxyReqEndpoint:t,c=JSON.stringify(o||{}),u=e||null,p=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(u)}:u,d=this.options.timeout||this.defaultTimeout,h={method:r,url:a,headers:p,data:c,timeout:d};return new Promise((function(t,e){i["a"].request(h).then((function(e){!1===e.data.success&&s.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){s.error("Unable to fetch data",t),e(t)})).finally((function(){s.finishLoading()}))}))}}};e["a"]=a},"247b":function(t,e,n){},"54c5":function(t,e,n){"use strict";n("1bba")},6256:function(t,e,n){"use strict";n("247b")},dac2:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=function(){var t=this,e=t._self._c;return t.crons?e("div",{staticClass:"health-checks-wrapper"},[t._l(t.crons,(function(n){return[e("div",{key:n.id+"status",staticClass:"status"},[e("p",{class:n.status},[t._v(t._s(t._f("formatStatus")(n.status)))])]),e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.pingTimeTooltip(n),expression:"pingTimeTooltip(cron)"}],key:n.id+"info",staticClass:"info"},[e("p",{staticClass:"cron-name"},[t._v(t._s(n.name))]),e("p",{staticClass:"cron-desc"},[t._v(t._s(n.desc))])])]}))],2):t._e()},o=[],s=(n("99af"),n("14d9"),n("4e82"),n("d3b7"),n("159b"),n("1c8e")),r=n("5cc6"),a=n("b96f"),c={mixins:[s["a"]],components:{},data:function(){return{crons:null}},filters:{formatStatus:function(t){var e="";return"up"===t&&(e="✔"),"down"===t&&(e="✘"),"new"===t&&(e="❖"),"paused"===t&&(e="⏸"),"running"===t&&(e="▶"),"".concat(e," ").concat(Object(a["b"])(t))},formatDate:function(t){return Object(a["s"])(t)}},computed:{endpoint:function(){return this.options.host?"".concat(this.options.host,"/api/v1/checks"):"".concat(r["widgetApiEndpoints"].healthChecks)},apiKey:function(){return this.options.apiKey||this.error("An API key is required, please see the docs for more info"),"string"===typeof this.options.apiKey?[this.options.apiKey]:this.options.apiKey}},methods:{fetchData:function(){var t=this;this.overrideProxyChoice=!0;var e=[];this.apiKey.forEach((function(n){var i={"X-Api-Key":n};t.makeRequest(t.endpoint,i).then((function(n){t.processData(n,e)}))})),e.sort((function(t,e){return t.name>e.name?1:-1})),this.crons=e},processData:function(t,e){var n=this;return t.checks.forEach((function(t){e.push({id:t.slug,name:t.name,desc:t.desc,status:t.status,pingCount:t.n_pings,lastPing:t.last_ping,nextPing:t.next_ping,url:n.makeUrl(t.unique_key)})})),e},makeUrl:function(t){var e=this.options.host||"https://healthchecks.io";return"".concat(e,"/checks/").concat(t,"/details")},pingTimeTooltip:function(t){var e=t.lastPing,n=t.nextPing,i=t.pingCount,o="<b>Total number of Pings:</b> ".concat(i,"<br>")+"<b>Last Ping:</b> ".concat(Object(a["s"])(e),"<br>")+"<b>Next Ping:</b>".concat(Object(a["s"])(n));return{content:o,html:!0,trigger:"hover focus",delay:250,classes:"ping-times-tt"}}}},u=c,p=(n("6256"),n("54c5"),n("2877")),d=Object(p["a"])(u,i,o,!1,null,"3d024849",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-832ca55a.4b0dd5ac.js.map