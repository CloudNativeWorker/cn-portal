(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a235a3f6"],{6627:function(t,e,a){},addc:function(t,e,a){"use strict";a("6627")},d7a5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"code-stats-wrapper"},[t.basicInfo&&!t.hideMeta?e("div",{staticClass:"user-meta"},[e("div",{staticClass:"user-info-wrap"},[e("p",{staticClass:"username"},[t._v(t._s(t.basicInfo.username))]),e("p",{staticClass:"user-level"},[t._v(t._s(t.basicInfo.level))])]),e("div",{staticClass:"total-xp-wrap"},[e("p",{staticClass:"total-xp"},[t._v(t._s(t._f("formatTotalXp")(t.basicInfo.totalXp)))]),e("p",{staticClass:"new-xp"},[t._v(t._s(t._f("formatNewXp")(t.basicInfo.newXp)))])])]):t._e(),e("div",{staticClass:"xp-heat-chart",attrs:{id:"xp-history-".concat(t.chartId)}}),e("div",{staticClass:"language-pie-chart",attrs:{id:"languages-".concat(t.chartId)}}),e("div",{staticClass:"machine-percentage-chart",attrs:{id:"machines-".concat(t.chartId)}})])},s=[],i=(a("99af"),a("14d9"),a("b64b"),a("d3b7"),a("159b"),a("cee4")),o=a("1c8e"),r=a("e599"),c=a("5cc6"),h=a("b96f"),u={mixins:[o["a"],r["a"]],data:function(){return{basicInfo:null}},computed:{username:function(){return this.options.username||this.error("You must specify a username"),this.options.username},hostname:function(){return this.options.hostname?this.options.hostname:c["widgetApiEndpoints"].codeStats},hideMeta:function(){return this.options.hideMeta||!1},hideHistory:function(){return this.options.hideHistory||!1},hideLanguages:function(){return this.options.hideLanguages||!1},hideMachines:function(){return this.options.hideMachines||!1},monthsToShow:function(){return this.options.monthsToShow||5},endpoint:function(){return"".concat(this.hostname,"/api/users/").concat(this.username)},chartStartDate:function(){var t=new Date;return new Date(t.setMonth(t.getMonth()-this.monthsToShow))}},filters:{formatTotalXp:function(t){return Object(h["q"])(t)},formatNewXp:function(t){return"+".concat(Object(h["o"])(t)," XP")}},methods:{fetchData:function(){var t=this;i["a"].get(this.endpoint).then((function(e){t.processData(e.data)})).catch((function(e){t.error("Unable to fetch data from CodeStats.net",e)})).finally((function(){t.finishLoading()}))},processData:function(t){if(this.hideMeta||(this.basicInfo={username:t.user,level:this.makeLevel(t.total_xp),totalXp:t.total_xp,newXp:t.new_xp}),!this.hideLanguages){var e=[],a=[];Object.keys(t.languages).forEach((function(n){e.push(n),a.push(t.languages[n].xps)}));var n={labels:e,datasets:[{values:a}]};this.drawLanguagePieChart(n)}if(!this.hideHistory){var s={};Object.keys(t.dates).forEach((function(e){var a=Math.round(new Date(e).getTime()/1e3);s[a]=t.dates[e]})),this.drawXpHistoryChart(s)}if(!this.hideMachines){var i=[],o=[];Object.keys(t.machines).forEach((function(e){i.push(e),o.push(t.machines[e].xps)}));var r={labels:i,datasets:[{values:o}]};this.drawMachinesPercentageChart(r)}},drawLanguagePieChart:function(t){return new this.Chart("#languages-".concat(this.chartId),{title:"Languages",type:"donut",data:t,height:250,strokeWidth:15,tooltipOptions:{formatTooltipY:function(t){return Object(h["q"])(t)}}})},drawXpHistoryChart:function(t){return new this.Chart("#xp-history-".concat(this.chartId),{title:"Historical XP",type:"heatmap",data:{dataPoints:t,start:this.chartStartDate,end:new Date},discreteDomains:0,radius:2,colors:["#caf0f8","#48cae4","#0077b6","#023e8a","#090a79"]})},drawMachinesPercentageChart:function(t){return new this.Chart("#machines-".concat(this.chartId),{title:"Machines",type:"percentage",data:t,height:180,strokeWidth:15,tooltipOptions:{formatTooltipY:function(t){return Object(h["q"])(t)}},colors:["#f9c80e","#43bccd","#ea3546","#662e9b","#f86624"]})},makeLevel:function(t){return t<100?"New Joiner":t<1e3?"Noob":t<1e4?"Intermediate":t<5e4?"Code ninja in the making":t<1e5?"Expert Developer":t<5e5?"Ultra Expert Developer":t<1e6?"Code Super Hero":t<15e5?"Super Epic Code Hero":t>=15e6?"God Level":t}}},d=u,p=(a("addc"),a("2877")),f=Object(p["a"])(d,n,s,!1,null,"294758a4",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-a235a3f6.e95536c4.js.map