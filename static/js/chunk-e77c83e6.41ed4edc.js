(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e77c83e6"],{"1c8e":function(t,s,e){"use strict";e("99af"),e("e9c4"),e("d3b7");var i=e("cee4"),a=e("d445"),n=e("3136"),o=e("5cc6"),r={props:{options:{type:Object,default:{}}},data:function(){return{progress:new a["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(o["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,s){Object(n["e"])(t,s),this.options.ignoreErrors||this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:s,trigger:"hover focus",delay:250}},makeRequest:function(t,s,e,a){var n=this,o=e||"GET",r=this.useProxy?this.proxyReqEndpoint:t,c=JSON.stringify(a||{}),u=s||null,l=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(u)}:u,d=this.options.timeout||this.defaultTimeout,h={method:o,url:r,headers:l,data:c,timeout:d};return new Promise((function(t,s){i["a"].request(h).then((function(s){!1===s.data.success&&n.error("Proxy returned error from target server",s.data.message),t(s.data)})).catch((function(t){n.error("Unable to fetch data",t),s(t)})).finally((function(){n.finishLoading()}))}))}}};s["a"]=r},"7db8":function(t,s,e){},aa4d:function(t,s,e){"use strict";e("7db8")},d71a:function(t,s,e){"use strict";e.r(s);e("b0c0");var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"stat-ping-wrapper"},t._l(t.services,(function(e,i){return s("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.makeTooltip(e),expression:"makeTooltip(service)"}],key:i,staticClass:"service-row"},[s("p",{staticClass:"service-name"},[t._v(" "+t._s(e.name)+": "),e.online?s("span",{staticClass:"status-online"},[t._v(" "+t._s(t.$t("widgets.stat-ping.up"))+" ")]):s("span",{staticClass:"status-offline"},[t._v(" "+t._s(t.$t("widgets.stat-ping.down"))+" ")]),s("Button",{staticClass:"far fa-info",on:{click:function(t){e.infoHidden=!e.infoHidden}}}),s("Button",{staticClass:"far fa-chart-line",on:{click:function(t){e.chartHidden=!e.chartHidden}}})],1),e.chartHidden?t._e():s("div",{staticClass:"charts"},[s("img",{staticClass:"uptime-pie-chart",attrs:{alt:"24 Hour Uptime Chart",src:t.makeChartUrl(e.uptime24,"24 Hours")}}),s("img",{staticClass:"uptime-pie-chart",attrs:{alt:"7 Day Uptime Chart",src:t.makeChartUrl(e.uptime7,"7 Days")}})]),e.infoHidden?t._e():s("div",{staticClass:"info"},[s("div",{staticClass:"info-row"},[s("span",{staticClass:"lbl"},[t._v("Failed Pings")]),s("span",{staticClass:"val"},[t._v(t._s(e.totalFailure)+"/"+t._s(e.totalSuccess))])]),s("div",{staticClass:"info-row"},[s("span",{staticClass:"lbl"},[t._v("Last Success")]),s("span",{staticClass:"val"},[t._v(t._s(e.lastSuccess))])]),s("div",{staticClass:"info-row"},[s("span",{staticClass:"lbl"},[t._v("Last Failure")]),s("span",{staticClass:"val"},[t._v(t._s(e.lastFailure))])]),s("div",{staticClass:"info-row"},[s("span",{staticClass:"lbl"},[t._v("Avg Response Time")]),s("span",{staticClass:"val"},[t._v(t._s(e.responseTime)+" ms")])])])])})),0)},a=[],n=(e("99af"),e("14d9"),e("fb6a"),e("d3b7"),e("159b"),e("5cc6")),o=e("b96f"),r=e("1c8e"),c={mixins:[r["a"]],components:{},data:function(){return{services:null}},computed:{hostname:function(){return this.options.hostname||this.error("A hostname is required"),this.options.hostname},limit:function(){return this.options.limit},proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(n["serviceEndpoints"].corsProxy)},endpoint:function(){return"".concat(this.hostname,"/api/services")},groupId:function(){return this.options.groupId||0},showChart:function(){return"boolean"!==typeof this.options.showChart||this.options.showChart},showInfo:function(){return"boolean"!==typeof this.options.showInfo||this.options.showInfo}},methods:{fetchData:function(){this.overrideProxyChoice=!0,this.makeRequest(this.endpoint).then(this.processData)},makeChartUrl:function(t,s){var e="https://quickchart.io",i="zm-d3d5134f-5920-49d1-92ab-303aaaf8cb0b";return"".concat(e,"/chart/render/").concat(i,"?data1=").concat(t,",").concat(100-t,"&title=").concat(s)},makeTooltip:function(t){var s=t.responseTime,e=t.totalFailure,i=t.totalSuccess,a=t.lastSuccess,n=t.lastFailure,o="<b>Failed Pings:</b> ".concat(e,"/").concat(i,"<br>")+"<b>Response Time:</b> ".concat(s,"ms<br>")+"<b>Last Success:</b> ".concat(a,"<br>")+"<b>Last Failure:</b> ".concat(n);return{content:o,html:!0,trigger:"hover focus",delay:250,classes:"ping-times-tt"}},processData:function(t){var s=this,e=[];t.forEach((function(t){s.groupId&&s.groupId!==t.group_id||e.push({name:t.name,online:t.online,uptime7:t.online_7_days,uptime24:t.online_24_hours,responseTime:Math.round(t.avg_response/1e3),totalSuccess:Object(o["q"])(t.stats.hits),totalFailure:Object(o["q"])(t.stats.failures),lastSuccess:Object(o["l"])(t.last_success),lastFailure:Object(o["l"])(t.last_error),chartHidden:s.showChart?0:1,infoHidden:s.showInfo?0:1})})),this.limit&&(e=e.slice(0,this.limit)),this.services=e}}},u=c,l=(e("aa4d"),e("2877")),d=Object(l["a"])(u,i,a,!1,null,"47041317",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-e77c83e6.41ed4edc.js.map