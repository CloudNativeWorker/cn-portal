(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73f090a0"],{"0949":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"glances-cpu-history-wrapper"},[n("div",{staticClass:"gl-history-chart",attrs:{id:t.chartId}})])},s=[],a=(e("14d9"),e("d3b7"),e("ac1f"),e("5319"),e("159b"),e("1c8e")),o=e("c57e"),r=e("e599"),c=e("b96f"),u={mixins:[a["a"],o["a"],r["a"]],components:{},data:function(){return{}},computed:{limit:function(){return this.options.limit||100},endpoint:function(){return this.makeGlancesUrl("cpu/history/".concat(this.limit))}},methods:{processData:function(t){var n=t.system,e=t.user,i=[],s=[],a=[];n.forEach((function(t){i.push(Object(c["t"])(t[0])),s.push(t[1])})),e.forEach((function(t){a.push(t[1])}));var o=this.makeTitle(n),r=[{name:"System",type:"bar",values:s},{name:"User",type:"bar",values:a}];this.generateChart({labels:i,datasets:r},o)},makeTitle:function(t){return"CPU Usage over past ".concat(Object(c["l"])(t[0][0]).replace("ago",""))},generateChart:function(t,n){return new this.Chart("#".concat(this.chartId),{title:n,data:t,type:"axis-mixed",height:this.chartHeight,colors:["#9b5de5","#00f5d4"],truncateLegends:!0,lineOptions:{regionFill:1,hideDots:1},axisOptions:{xIsSeries:!0,xAxisMode:"tick"},tooltipOptions:{formatTooltipY:function(t){return"".concat(Math.round(t),"%")}}})}},created:function(){this.overrideUpdateInterval=20}},h=u,p=(e("f865"),e("2877")),d=Object(p["a"])(h,i,s,!1,null,"6898bb58",null);n["default"]=d.exports},c57e:function(t,n,e){"use strict";e("99af"),e("313d"),e("0eb6"),e("b7ef"),e("8bd4");n["a"]={computed:{hostname:function(){return this.options.hostname||this.error("You must specify a 'hostname' for Glances"),this.options.hostname},apiVersion:function(){return this.options.apiVersion||3},credentials:function(){if(this.options.username&&this.options.password){var t="".concat(this.options.username,":").concat(this.options.password);return{Authorization:"Basic ".concat(window.btoa(t))}}return null}},methods:{fetchData:function(){this.makeRequest(this.endpoint,this.credentials).then(this.processData)},makeGlancesUrl:function(t){return"".concat(this.hostname,"/api/").concat(this.apiVersion,"/").concat(t)}}}},db5d:function(t,n,e){},f865:function(t,n,e){"use strict";e("db5d")}}]);
//# sourceMappingURL=chunk-73f090a0.7cf568e3.js.map