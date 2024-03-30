(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-370ed78e"],{"048f":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"weather"},[e("div",{staticClass:"intro"},[e("p",{staticClass:"temp"},[t._v(t._s(t.temp))]),e("i",{class:"owi owi-".concat(t.icon)})]),e("p",{staticClass:"description"},[t._v(t._s(t.description))]),t.showDetails&&t.weatherDetails.length>0?e("div",{staticClass:"details"},t._l(t.weatherDetails,(function(i,s){return e("div",{key:s,staticClass:"info-wrap"},t._l(i,(function(i){return e("p",{key:i.label,staticClass:"info-line"},[e("span",{staticClass:"lbl"},[t._v(t._s(i.label))]),e("span",{staticClass:"val"},[t._v(t._s(i.value))])])})),0)})),0):t._e(),t.weatherDetails.length>0?e("p",{staticClass:"more-details-btn",on:{click:t.toggleDetails}},[t._v(" "+t._s(t.showDetails?t.$t("widgets.general.show-less"):t.$t("widgets.general.show-more"))+" ")]):t._e()])},n=[],a=(i("99af"),i("1c8e")),o=i("5cc6"),r={mixins:[a["a"]],data:function(){return{loading:!0,icon:null,description:null,temp:null,showDetails:!1,weatherDetails:[]}},mounted:function(){this.checkProps()},computed:{units:function(){return this.options.units||"metric"},endpoint:function(){var t=this.options,e=t.apiKey,i=t.city,s=t.lat,n=t.lon;return s&&n?"".concat(o["widgetApiEndpoints"].weather,"?lat=").concat(s,"&lon=").concat(n,"&appid=").concat(e,"&units=").concat(this.units):"".concat(o["widgetApiEndpoints"].weather,"?q=").concat(i,"&appid=").concat(e,"&units=").concat(this.units)},tempDisplayUnits:function(){switch(this.units){case"metric":return"°C";case"imperial":return"°F";default:return""}},speedDisplayUnits:function(){switch(this.units){case"metric":return"m/s";case"imperial":return"mph";default:return""}}},methods:{processTemp:function(t){return"".concat(Math.round(t)).concat(this.tempDisplayUnits)},fetchData:function(){this.makeRequest(this.endpoint).then(this.processData)},processData:function(t){this.icon=t.weather[0].icon,this.description=t.weather[0].description,this.temp=this.processTemp(t.main.temp),this.options.hideDetails||this.makeWeatherData(t)},makeWeatherData:function(t){this.weatherDetails=[[{label:"Min Temp",value:this.processTemp(t.main.temp_min)},{label:"Max Temp",value:this.processTemp(t.main.temp_max)},{label:"Feels Like",value:this.processTemp(t.main.feels_like)}],[{label:"Pressure",value:"".concat(t.main.pressure,"hPa")},{label:"Humidity",value:"".concat(t.main.humidity,"%")},{label:"visibility",value:t.visibility},{label:"wind",value:"".concat(t.wind.speed).concat(this.speedDisplayUnits)},{label:"clouds",value:"".concat(t.clouds.all,"%")}]]},toggleDetails:function(){this.showDetails=!this.showDetails},checkProps:function(){var t=this.options;t.apiKey||this.error("Missing API key for OpenWeatherMap"),t.lat&&t.lon||t.city||this.error("A city name or lat + lon is required to fetch weather"),t.units&&"metric"!==t.units&&"imperial"!==t.units&&this.error("Invalid units specified, must be either 'metric' or 'imperial'")}}},c=r,l=(i("66fc"),i("2877")),u=Object(l["a"])(c,s,n,!1,null,"04b72d06",null);e["default"]=u.exports},"1c8e":function(t,e,i){"use strict";i("99af"),i("e9c4"),i("d3b7");var s=i("cee4"),n=i("d445"),a=i("3136"),o=i("5cc6"),r={props:{options:{type:Object,default:{}}},data:function(){return{progress:new n["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(o["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(a["e"])(t,e),this.options.ignoreErrors||this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,i,n){var a=this,o=i||"GET",r=this.useProxy?this.proxyReqEndpoint:t,c=JSON.stringify(n||{}),l=e||null,u=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(l)}:l,h=this.options.timeout||this.defaultTimeout,p={method:o,url:r,headers:u,data:c,timeout:h};return new Promise((function(t,e){s["a"].request(p).then((function(e){!1===e.data.success&&a.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){a.error("Unable to fetch data",t),e(t)})).finally((function(){a.finishLoading()}))}))}}};e["a"]=r},"66fc":function(t,e,i){"use strict";i("96e5")},"96e5":function(t,e,i){}}]);
//# sourceMappingURL=chunk-370ed78e.1e37f5f2.js.map