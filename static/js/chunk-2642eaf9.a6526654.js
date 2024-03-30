(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2642eaf9"],{"1c8e":function(t,e,s){"use strict";s("99af"),s("e9c4"),s("d3b7");var a=s("cee4"),i=s("d445"),o=s("3136"),n=s("5cc6"),r={props:{options:{type:Object,default:{}}},data:function(){return{progress:new i["a"]({color:"var(--progress-bar)"}),overrideProxyChoice:!1,overrideUpdateInterval:null,disableLoader:!1,updater:null,defaultTimeout:5e4}},mounted:function(){this.fetchData(),this.updateInterval&&(this.continuousUpdates(),this.disableLoader=!0)},beforeDestroy:function(){this.updater&&clearInterval(this.updater)},computed:{proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(n["serviceEndpoints"].corsProxy)},useProxy:function(){return this.options.useProxy||this.overrideProxyChoice},updateInterval:function(){var t=this.options.updateInterval;return null===t&&this.overrideUpdateInterval?1e3*this.overrideUpdateInterval:t?"boolean"===typeof t?3e4:"number"===typeof t&&t>=2&&t<=7200?1e3*t:0:0}},methods:{update:function(){this.startLoading(),this.fetchData()},continuousUpdates:function(){var t=this;this.updater=setInterval((function(){t.update()}),this.updateInterval)},error:function(t,e){Object(o["e"])(t,e),this.options.ignoreErrors||this.$emit("error",t)},startLoading:function(){this.disableLoader||(this.$emit("loading",!0),this.progress.start())},finishLoading:function(){var t=this;this.$emit("loading",!1),setTimeout((function(){t.progress.end()}),500)},fetchData:function(){this.finishLoading()},tooltip:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{content:t,html:e,trigger:"hover focus",delay:250}},makeRequest:function(t,e,s,i){var o=this,n=s||"GET",r=this.useProxy?this.proxyReqEndpoint:t,l=JSON.stringify(i||{}),c=e||null,u=this.useProxy?{"Target-URL":t,CustomHeaders:JSON.stringify(c)}:c,d=this.options.timeout||this.defaultTimeout,h={method:n,url:r,headers:u,data:l,timeout:d};return new Promise((function(t,e){a["a"].request(h).then((function(e){!1===e.data.success&&o.error("Proxy returned error from target server",e.data.message),t(e.data)})).catch((function(t){o.error("Unable to fetch data",t),e(t)})).finally((function(){o.finishLoading()}))}))}}};e["a"]=r},"2c3a":function(t,e,s){"use strict";var a=s("3835"),i=(s("99af"),s("caad"),s("d81d"),s("b680"),s("d3b7"),s("ac1f"),s("00b4"),s("25f0"),s("2532"),s("466d"),s("498a"),s("313d"),s("0eb6"),s("b7ef"),s("8bd4"),s("5cc6")),o=s("b96f");e["a"]={data:function(){return{validCredentials:null,capabilities:{notifications:{enabled:null,features:[]},userStatus:null},capabilitiesLastUpdated:0,branding:{name:null,logo:null,url:null,slogan:null},version:{string:null,edition:null}}},computed:{hostname:function(){return this.options.hostname||this.error("A hostname is required"),this.options.hostname},username:function(){return this.options.username||this.error("A username is required"),this.options.username},password:function(){return this.options.password||this.error("An app-password is required"),/^([a-z0-9]{5}-){4}[a-z0-9]{5}$/i.test(this.options.password)?this.options.password:(this.error("Please use a Nextcloud app-password, not your login password."),"")},headers:function(){var t="".concat(this.username,":").concat(this.password);return{"OCS-APIREQUEST":!0,Accept:"application/json",Authorization:"Basic ".concat(window.btoa(t))}},capabilitiesTtl:function(){return 1e3*(parseInt(this.options.capabilitiesTtl,10)||3600)},proxyReqEndpoint:function(){var t=Object({NODE_ENV:"production",VUE_APP_VERSION:"2.1.2",BASE_URL:"/"}).VUE_APP_DOMAIN||window.location.origin;return"".concat(t).concat(i["serviceEndpoints"].corsProxy)}},methods:{endpoint:function(t){switch(t){case"user":return"".concat(this.hostname,"/ocs/v1.php/cloud/users/").concat(this.username);case"userstatus":return"".concat(this.hostname,"/ocs/v2.php/apps/user_status/api/v1/statuses");case"serverinfo":return"".concat(this.hostname,"/ocs/v2.php/apps/serverinfo/api/v1/info");case"notifications":return"".concat(this.hostname,"/ocs/v2.php/apps/notifications/api/v2/notifications");case"capabilities":default:return"".concat(this.hostname,"/ocs/v1.php/cloud/capabilities")}},hasValidCredentials:function(){return!1!==this.validCredentials&&this.username.length>0&&this.password.length>0},validateResponse:function(t){var e,s,a=null===t||void 0===t||null===(e=t.ocs)||void 0===e?void 0:e.data,i=null===t||void 0===t||null===(s=t.ocs)||void 0===s?void 0:s.meta,o=null===t||void 0===t?void 0:t.error;switch(o&&o.status&&(i={statuscode:o.status}),i&&i.statuscode&&a||this.error("Invalid response"),i.statuscode){case 401:this.validCredentials=!1,this.error("Access denied for user ".concat(this.username,".")+" Note that some Nextcloud widgets only work with an admin user.");break;case 429:this.validCredentials=!1,this.error("The server indicated 'rate-limit reached' error (HTTP 429). The server-info API may return this error for incorrect user/password.");break;case 993:case 997:case 998:this.validCredentials=!1,this.error("The provided app-password is not permitted to access the requested resource or it has been revoked, or the username/password combination is incorrect");break;default:this.validCredentials=!0,this.allowedStatuscodes().includes(i.statuscode)||this.error("Unexpected response");break}return a},loadCapabilities:function(){return(new Date).getTime()-this.capabilitiesLastUpdated>this.capabilitiesTtl?this.makeRequest(this.endpoint("capabilities"),this.headers).then(this.processCapabilities):Promise.resolve()},processCapabilities:function(t){var e,s,a,i,o,n=this.validateResponse(t),r=null===(e=n.capabilities)||void 0===e||null===(e=e.notifications)||void 0===e?void 0:e["ocs-endpoints"];this.branding=null===(s=n.capabilities)||void 0===s?void 0:s.theming,this.capabilities.notifications.enabled=!(null===r||void 0===r||!r.length),this.capabilities.notifications.features=r||[],this.capabilities.userStatus=!(null===(a=n.capabilities)||void 0===a||null===(a=a.user_status)||void 0===a||!a.enabled),this.version.string=null===(i=n.version)||void 0===i?void 0:i.string,this.version.edition=null===(o=n.version)||void 0===o?void 0:o.edition,this.capabilitiesLastUpdated=(new Date).getTime()},getTimeAgo:function(t){return Object(o["l"])(t)},formatDateTime:function(t){return Object(o["s"])(t)},convertBytes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object(o["d"])(t,e).toString();if(!s)return a;var i=a.match(/(-?\d+)((\.\d+)?\s(([KMGTPEZY]B|Bytes)))/);return"".concat(i[1],'<span class="decimals">').concat(i[2],"</span>")},formatNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object(o["g"])(t,e).toString();if(!s)return a;var i=a.match(/(\d+)((\.\d+)?([KMBT]?))/);return"".concat(i[1],'<span class="decimals">').concat(i[2],"</span>")},formatPercent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=parseFloat(t).toFixed(e).split("."),a=s.length>1?".".concat(s[1]):"";return"".concat(s[0],'<span class="decimals">').concat(a,"%</span>")},getValueFromCss:function(t){var e=getComputedStyle(this.$el||document.documentElement);return e.getPropertyValue("--".concat(t)).trim()},getColorRgba:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this.getValueFromCss(t).match(/\w\w/g).map((function(t){return parseInt(t,16)})),i=Object(a["a"])(s,3),o=i[0],n=i[1],r=i[2];return"rgba(".concat(o,",").concat(n,",").concat(r,",").concat(e,")")},tt:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.$t("widgets.nextcloud.".concat(t),e)}}}},"31a4":function(t,e,s){},"5f5d":function(t,e,s){"use strict";s("31a4")},6152:function(t,e,s){"use strict";s("99af");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-chart-wrapper"},[t.title?e("div",{staticClass:"title"},[e("p",[t._v(t._s(t.title))])]):t._e(),e("div",{staticClass:"percentage-chart",style:t.makeWrapperStyles(t.height)},t._l(t.blocks,(function(s,a){return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"".concat(s.label," - ").concat(s.width,"%"),expression:"`${block.label} - ${block.width}%`"}],key:a,staticClass:"inner",style:t.makeDimens(s)})})),0),t.showLegend?e("div",{staticClass:"legend"},t._l(t.blocks,(function(s,a){return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"".concat(Math.round(s.width),"% (").concat(s.value,")"),expression:"`${Math.round(block.width)}% (${block.value})`"}],key:a,staticClass:"legend-item"},[s.label?e("div",{staticClass:"dot",style:t.makeDotColor(s)}):t._e(),s.label?e("div",{staticClass:"txt"},[t._v(t._s(s.label))]):t._e()])})),0):t._e()])},i=[],o=(s("14d9"),s("13d5"),s("d3b7"),s("159b"),s("ddb0"),{props:{showAsPercent:{type:Boolean,default:!0},showLegend:{type:Boolean,default:!0},height:{number:Boolean,default:1},values:Array,title:String},data:function(){return{defaultColors:["#eb5cad","#985ceb","#5346f3","#5c90eb","#5cdfeb","#00CCB4","#5ceb8d","#afeb5c","#eff961"]}},computed:{blocks:function(){var t=this,e=0,s=[],a=this.values.reduce((function(t,e){return(t.size||t)+e.size})),i=this.showAsPercent?100/a:1;return this.values.forEach((function(a,o){var n=t.defaultColors[o%t.defaultColors.length];s.push({start:e,width:Math.round(a.size*i),color:a.color||n,label:a.label,value:a.size}),e+=a.size*i})),s}},methods:{makeDimens:function(t){return"margin-left: ".concat(t.start,"%; width: ").concat(t.width,"%; background: ").concat(t.color)},makeDotColor:function(t){return"background: ".concat(t.color,";")},makeWrapperStyles:function(t){return"height: ".concat(t,"rem")}}}),n=o,r=(s("5f5d"),s("2877")),l=Object(r["a"])(n,a,i,!1,null,"b3e246fa",null);e["a"]=l.exports},"8bb5":function(t,e,s){},f083f:function(t,e,s){"use strict";s("8bb5")},f298:function(t,e,s){"use strict";s.r(e);s("b0c0");var a=function(){var t=this,e=t._self._c;return t.didLoadData?e("div",{staticClass:"nextcloud-widget nextcloud-info-wrapper"},[e("div",[e("div",{staticClass:"logo"},[e("a",{attrs:{href:t.branding.url,target:"_blank"}},[e("img",{attrs:{src:t.branding.logo}})]),e("p",[t._v(t._s(t.branding.slogan))])]),e("div",{staticClass:"info"},[e("p",{staticClass:"brand"},[t._v(t._s(t.branding.name))]),t.version.string?e("p",{staticClass:"version"},[e("small",[t._v("Nextcloud "+t._s(t.tt("version"))+" "+t._s(t.version.string))])]):t._e(),e("p",{staticClass:"username"},[t._v(t._s(t.user.displayName)+" "),e("em",[t._v("("+t._s(t.user.id)+")")])]),e("p",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.lastLoginTooltip(),expression:"lastLoginTooltip()"}],staticClass:"login"},[e("span",[t._v(t._s(t.tt("last-login")))]),t._v("  "),e("small",[t._v(t._s(t.getTimeAgo(t.user.lastLogin)))])])])]),e("div",[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.quotaTooltip(),expression:"quotaTooltip()"}]},[e("hr"),e("p",[e("i",{staticClass:"fal fa-disc-drive"}),t.user.quota.quota>0?e("strong",[t._v(t._s(t.tt("disk-quota")))]):e("strong",[t._v(t._s(t.tt("disk-space")))]),e("em",{domProps:{innerHTML:t._s(t.formatPercent(t.user.quota.relative))}}),e("small",[t._v(t._s(t.tt("of")))]),e("strong",{domProps:{innerHTML:t._s(t.convertBytes(t.user.quota.total))}}),t.quotaChart.dataLoaded?e("span",[e("PercentageChart",{attrs:{values:t.quotaChart.data,showLegend:!1}})],1):t._e()]),e("hr")])])]):t._e()},i=[],o=(s("99af"),s("d3b7"),s("1c8e")),n=s("2c3a"),r=s("6152"),l={mixins:[o["a"],n["a"]],components:{PercentageChart:r["a"]},data:function(){return{user:{id:null,displayName:null,email:null,quota:{relative:null,total:null,used:null,free:null,quota:null}},quotaChart:{dataLoaded:!1,data:[{label:null,size:null,color:null},{label:null,size:null,color:null}]}}},computed:{didLoadData:function(){return!!this.user.id}},methods:{allowedStatuscodes:function(){return[100,200]},fetchData:function(){this.hasValidCredentials()&&this.loadCapabilities().then(this.loadUser).finally(this.finishLoading)},loadUser:function(){return this.makeRequest(this.endpoint("user"),this.headers).then(this.processUser)},processUser:function(t){var e=this.validateResponse(t);this.user.id=e.id,this.user.email=e.email,this.user.quota=e.quota,this.user.displayName=e.displayname,this.user.lastLogin=e.lastLogin},getQuotaChartColorUsed:function(t){return t<.75?this.getValueFromCss("widget-text-color"):t<.85?this.getValueFromCss("warning"):t<.95?this.getValueFromCss("error"):this.getValueFromCss("danger")},updateQuotaChart:function(){var t=parseFloat(this.user.quota.used/this.user.quota.total),e=parseFloat(this.user.quota.free/this.user.quota.total),s=this.quotaChart.data;s[0]={label:this.tt("used"),size:t,color:this.getQuotaChartColorUsed(t)},s[1]={label:this.tt("available"),size:e,color:this.getValueFromCss("success")},this.quotaChart.dataLoaded=!0},quotaTooltip:function(){var t=this.user.quota.quota>0,e="".concat(this.tt("quota-enabled",{not:t?"":"not "}))+"<br><br>".concat(this.convertBytes(this.user.quota.used)," ").concat(this.tt("used"),"<br>")+"".concat(this.convertBytes(this.user.quota.free)," ").concat(this.tt("free"),"<br>")+"".concat(this.convertBytes(this.user.quota.total)," ").concat(this.tt("total"));return{content:e,html:!0,trigger:"hover focus",delay:250,classes:"nc-tooltip"}},lastLoginTooltip:function(){var t=new Date(this.user.lastLogin).toLocaleString();return{content:t,html:!0,trigger:"hover focus",delay:250,classes:"nc-tooltip"}}},created:function(){this.overrideUpdateInterval=120},updated:function(){this.updateQuotaChart()}},c=l,u=(s("f083f"),s("2877")),d=Object(u["a"])(c,a,i,!1,null,"bb4eef48",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2642eaf9.a6526654.js.map