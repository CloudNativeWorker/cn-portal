(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75cc9f4d"],{"679e":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"crypto-price-chart",attrs:{id:t.chartId}})},e=[],c=(r("99af"),r("14d9"),r("b680"),r("d3b7"),r("159b"),r("4215")),i=r("cee4"),o=r("1c8e"),s=r("e599"),u=r("5cc6"),h={mixins:[o["a"],s["a"]],components:{},data:function(){return{chartData:null,chartDom:null}},computed:{asset:function(){var t=this.options.asset;return"string"===typeof t?t:"bitcoin"},numDays:function(){var t=this.options.numDays;return"number"===typeof usersChoice&&t<30&&t>.15?t:7},currency:function(){var t=this.options.currency;return"string"===typeof t?t:"USD"},dataPoints:function(){var t=this.options.dataPoints;return"number"===typeof usersChoice&&t<100&&t>5?t:30},endpoint:function(){return"".concat(u["widgetApiEndpoints"].cryptoPrices).concat(this.asset,"/")+"market_chart?vs_currency=".concat(this.currency,"&days=").concat(this.numDays)},chartId:function(){return"crypto-price-chart-".concat(Math.round(1e4*Math.random()))}},methods:{generateChart:function(){var t=this;return new c["a"]("#".concat(this.chartId),{title:"".concat(this.asset," Price Chart"),data:this.chartData,type:"axis-mixed",height:this.chartHeight,colors:this.chartColors,truncateLegends:!0,lineOptions:{regionFill:1,hideDots:1},axisOptions:{xIsSeries:!0,xAxisMode:"tick"},tooltipOptions:{formatTooltipY:function(n){return"".concat(n," ").concat(t.currency)}}})},fetchData:function(){var t=this;i["a"].get(this.endpoint).then((function(n){try{t.processData(n.data)}catch(r){t.error("Unable to plot results on chart",r)}})).catch((function(n){t.error("Unable to fetch crypto data",n)})).finally((function(){t.finishLoading()}))},processData:function(t){var n=this,r=[],a=[],e=Math.round(t.prices.length/this.dataPoints),c=this.numDays<5,i=0,o=0,s=function(t){i+=1,o+=t,null===t&&(i=0,o=0)};t.prices.forEach((function(t,u){if(s(t[1]),u%e===0){var h=n.formatPrice(o/i);a.push(n.formatDate(t[0],c)),r.push(h),s(null)}})),this.chartData={labels:a,datasets:[{name:"Price",type:"bar",values:r}]},this.renderChart()},renderChart:function(){this.chartDom=this.generateChart()},formatDate:function(t,n){var r=navigator.language,a={weekday:"short",day:"numeric",month:"short"},e={hour:"numeric",minute:"numeric",second:"numeric"},c=new Date(t).toLocaleDateString(r,a),i=Intl.DateTimeFormat(r,e).format(t);return"".concat(c," ").concat(n?i:"")},formatPrice:function(t){var n=0;return t<10&&(n=1),t<1&&(n=2),t<.1&&(n=3),t<.01&&(n=4),t<.001&&(n=5),t.toFixed(n)}}},f=h,d=(r("b8e1"),r("2877")),p=Object(d["a"])(f,a,e,!1,null,null,null);n["default"]=p.exports},"971f":function(t,n,r){},b8e1:function(t,n,r){"use strict";r("971f")}}]);
//# sourceMappingURL=chunk-75cc9f4d.8f429d2d.js.map