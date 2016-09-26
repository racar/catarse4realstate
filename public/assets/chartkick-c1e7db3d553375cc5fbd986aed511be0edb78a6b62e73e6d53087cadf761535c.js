!function(t){"use strict";function e(t){return"[object Array]"===Object.prototype.toString.call(t)}function i(t){return t instanceof Function}function n(t){return!i(t)&&t instanceof Object}function o(t,i){var s;for(s in i)n(i[s])||e(i[s])?(n(i[s])&&!n(t[s])&&(t[s]={}),e(i[s])&&!e(t[s])&&(t[s]=[]),o(t[s],i[s])):void 0!==i[s]&&(t[s]=i[s])}function s(t,e){var i={};return o(i,t),o(i,e),i}function r(t){var e,i,n,o,s,r,a,l,c,u,h;return u=Object.prototype.toString.call(t),"[object Date]"===u?t:"[object String]"===u?(n=t.match(G),n?(h=parseInt(n[1],10),r=parseInt(n[3],10)-1,e=parseInt(n[5],10),i=parseInt(n[7],10),s=n[9]?parseInt(n[9],10):0,c=n[11]?parseInt(n[11],10):0,o=n[12]?1e3*parseFloat(Y+n[12].slice(1)):0,l=Date.UTC(h,r,e,i,s,c,o),n[13]&&n[14]&&(a=60*n[15],n[17]&&(a+=parseInt(n[17],10)),a*="-"===n[14]?-1:1,l-=60*a*1e3),new Date(l)):void 0):void 0}function a(t){var e,i,n;for(e=0;e<t.length;e++)for(n=t[e].data,i=0;i<n.length;i++)if(n[i][1]<0)return!0;return!1}function l(t,e,i,n,o,r,l){return function(c,u,h){var d=s({},t);return d=s(d,h||{}),u.hideLegend&&e(d),"min"in u?i(d,u.min):a(c)||i(d,0),u.max&&n(d,u.max),"stacked"in u&&o(d,u.stacked),u.colors&&(d.colors=u.colors),u.xtitle&&r(d,u.xtitle),u.ytitle&&l(d,u.ytitle),d=s(d,u.library||{})}}function c(t,e){document.body.innerText?t.innerText=e:t.textContent=e}function u(t,e){c(t,"Error Loading Chart: "+e),t.style.color="#ff0000"}function h(t,e,i){d(e,i,function(e,i,n){var o="string"==typeof n?n:n.message;u(t,o)})}function d(e,i,n){var o=t.jQuery||t.Zepto||t.$;if(o)o.ajax({dataType:"json",url:e,success:i,error:n});else{var s=new XMLHttpRequest;s.open("GET",e,!0),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){200===s.status?i(JSON.parse(s.responseText),s.statusText,s):n(s,"error",s.statusText)},s.send()}}function f(t,e){try{e(t)}catch(e){throw u(t.element,e.message),e}}function p(t,e){"string"==typeof t.dataSource?h(t.element,t.dataSource,function(i){t.data=i,f(t,e)}):(t.data=t.dataSource,f(t,e))}function m(t){return""+t}function g(t){return parseFloat(t)}function v(t){var e,i,n,o;if("object"!=typeof t)if("number"==typeof t)t=new Date(1e3*t);else{if(e=t.match(X))return i=parseInt(e[1],10),n=parseInt(e[3],10)-1,o=parseInt(e[5],10),new Date(i,n,o);var s=t.replace(/ /,"T").replace(" ","").replace("UTC","Z");t=r(s)||new Date(t)}return t}function b(t){if(!e(t)){var i,n=[];for(i in t)t.hasOwnProperty(i)&&n.push([i,t[i]]);t=n}return t}function y(t,e){return t[0].getTime()-e[0].getTime()}function w(t,e){return t-e}function q(){!K&&"Highcharts"in t&&(K=new function(){var e=t.Highcharts;this.name="highcharts";var i={chart:{},xAxis:{title:{text:null},labels:{style:{fontSize:"12px"}}},yAxis:{title:{text:null},labels:{style:{fontSize:"12px"}}},title:{text:null},credits:{enabled:!1},legend:{borderWidth:0},tooltip:{style:{fontSize:"12px"}},plotOptions:{areaspline:{},series:{marker:{}}}},n=function(t){t.legend.enabled=!1},o=function(t,e){t.yAxis.min=e},r=function(t,e){t.yAxis.max=e},a=function(t,e){t.plotOptions.series.stacking=e?"normal":null},c=function(t,e){t.xAxis.title.text=e},u=function(t,e){t.yAxis.title.text=e},h=l(i,n,o,r,a,c,u);this.renderLineChart=function(t,i){i=i||"spline";var n={};"areaspline"===i&&(n={plotOptions:{areaspline:{stacking:"normal"},series:{marker:{enabled:!1}}}});var o,s,r,a=h(t.data,t.options,n);a.xAxis.type=t.options.discrete?"category":"datetime",a.chart.type||(a.chart.type=i),a.chart.renderTo=t.element.id;var l=t.data;for(s=0;s<l.length;s++){if(o=l[s].data,!t.options.discrete)for(r=0;r<o.length;r++)o[r][0]=o[r][0].getTime();l[s].marker={symbol:"circle"}}a.series=l,new e.Chart(a)},this.renderScatterChart=function(t){var i={},n=h(t.data,t.options,i);n.chart.type="scatter",n.chart.renderTo=t.element.id,n.series=t.data,new e.Chart(n)},this.renderPieChart=function(t){var n={};t.options.colors&&(n.colors=t.options.colors);var o=s(s(i,n),t.options.library||{});o.chart.renderTo=t.element.id,o.series=[{type:"pie",name:t.options.label||"Value",data:t.data}],new e.Chart(o)},this.renderColumnChart=function(t,i){i=i||"column";var n,o,s,r,a=t.data,l=h(a,t.options),c=[];for(l.chart.type=i,l.chart.renderTo=t.element.id,n=0;n<a.length;n++)for(s=a[n],o=0;o<s.data.length;o++)r=s.data[o],c[r[0]]||(c[r[0]]=new Array(a.length)),c[r[0]][n]=r[1];var u=[];for(n in c)c.hasOwnProperty(n)&&u.push(n);l.xAxis.categories=u;var d=[];for(n=0;n<a.length;n++){for(r=[],o=0;o<u.length;o++)r.push(c[u[o]][n]||0);d.push({name:a[n].name,data:r})}l.series=d,new e.Chart(l)};var d=this;this.renderBarChart=function(t){d.renderColumnChart(t,"bar")},this.renderAreaChart=function(t){d.renderLineChart(t,"areaspline")}},U.push(K)),!V&&t.google&&(t.google.setOnLoadCallback||t.google.charts)&&(V=new function(){var e=t.google;this.name="google";var i={},n=[],o=function(){for(var t,i,o=0;o<n.length;o++)t=n[o],i=e.visualization&&("corechart"===t.pack&&e.visualization.LineChart||"timeline"===t.pack&&e.visualization.Timeline),i&&(t.callback(),n.splice(o,1),o--)},r=function(s,r){if(r||(r=s,s="corechart"),n.push({pack:s,callback:r}),i[s])o();else{i[s]=!0;var a={packages:[s],callback:o};Q.language&&(a.language=Q.language),t.google.setOnLoadCallback?e.load("visualization","1",a):e.charts.load("current",a)}},a={chartArea:{},fontName:"'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",pointSize:6,legend:{textStyle:{fontSize:12,color:"#444"},alignment:"center",position:"right"},curveType:"function",hAxis:{textStyle:{color:"#666",fontSize:12},titleTextStyle:{},gridlines:{color:"transparent"},baselineColor:"#ccc",viewWindow:{}},vAxis:{textStyle:{color:"#666",fontSize:12},titleTextStyle:{},baselineColor:"#ccc",viewWindow:{}},tooltip:{textStyle:{color:"#666",fontSize:12}}},c=function(t){t.legend.position="none"},u=function(t,e){t.vAxis.viewWindow.min=e},h=function(t,e){t.vAxis.viewWindow.max=e},d=function(t,e){t.hAxis.viewWindow.min=e},f=function(t,e){t.hAxis.viewWindow.max=e},p=function(t,e){t.isStacked=!!e},m=function(t,e){t.hAxis.title=e,t.hAxis.titleTextStyle.italic=!1},v=function(t,e){t.vAxis.title=e,t.vAxis.titleTextStyle.italic=!1},b=l(a,c,u,h,p,m,v),w=function(t,i){var n,o,s,r,a,l=[];for(n=0;n<t.length;n++)for(s=t[n],o=0;o<s.data.length;o++)r=s.data[o],a="datetime"===i?r[0].getTime():r[0],l[a]||(l[a]=new Array(t.length)),l[a][n]=g(r[1]);var c,u=[],h=!0;for(n in l)l.hasOwnProperty(n)&&("datetime"===i?(c=new Date(g(n)),h=h&&k(c)):c="number"===i?g(n):n,u.push([c].concat(l[n])));"datetime"===i&&u.sort(y);var d=new e.visualization.DataTable;for(i="datetime"===i&&h?"date":i,d.addColumn(i,""),n=0;n<t.length;n++)d.addColumn("number",t[n].name);return d.addRows(u),d},q=function(e){t.attachEvent?t.attachEvent("onresize",e):t.addEventListener&&t.addEventListener("resize",e,!0),e()};this.renderLineChart=function(t){r(function(){var i=b(t.data,t.options),n=w(t.data,t.options.discrete?"string":"datetime");t.chart=new e.visualization.LineChart(t.element),q(function(){t.chart.draw(n,i)})})},this.renderPieChart=function(t){r(function(){var i={chartArea:{top:"10%",height:"80%"}};t.options.colors&&(i.colors=t.options.colors);var n=s(s(a,i),t.options.library||{}),o=new e.visualization.DataTable;o.addColumn("string",""),o.addColumn("number","Value"),o.addRows(t.data),t.chart=new e.visualization.PieChart(t.element),q(function(){t.chart.draw(o,n)})})},this.renderColumnChart=function(t){r(function(){var i=b(t.data,t.options),n=w(t.data,"string");t.chart=new e.visualization.ColumnChart(t.element),q(function(){t.chart.draw(n,i)})})},this.renderBarChart=function(t){r(function(){var i={hAxis:{gridlines:{color:"#ccc"}}},n=l(a,c,d,f,p,m,v)(t.data,t.options,i),o=w(t.data,"string");t.chart=new e.visualization.BarChart(t.element),q(function(){t.chart.draw(o,n)})})},this.renderAreaChart=function(t){r(function(){var i={isStacked:!0,pointSize:0,areaOpacity:.5},n=b(t.data,t.options,i),o=w(t.data,t.options.discrete?"string":"datetime");t.chart=new e.visualization.AreaChart(t.element),q(function(){t.chart.draw(o,n)})})},this.renderGeoChart=function(t){r(function(){var i={legend:"none",colorAxis:{colors:t.options.colors||["#f6c7b6","#ce502d"]}},n=s(s(a,i),t.options.library||{}),o=new e.visualization.DataTable;o.addColumn("string",""),o.addColumn("number",t.options.label||"Value"),o.addRows(t.data),t.chart=new e.visualization.GeoChart(t.element),q(function(){t.chart.draw(o,n)})})},this.renderScatterChart=function(t){r(function(){var i={},n=b(t.data,t.options,i),o=w(t.data,"number");t.chart=new e.visualization.ScatterChart(t.element),q(function(){t.chart.draw(o,n)})})},this.renderTimeline=function(t){r("timeline",function(){var i={legend:"none"};t.options.colors&&(i.colors=t.options.colors);var n=s(s(a,i),t.options.library||{}),o=new e.visualization.DataTable;o.addColumn({type:"string",id:"Name"}),o.addColumn({type:"date",id:"Start"}),o.addColumn({type:"date",id:"End"}),o.addRows(t.data),t.element.style.lineHeight="normal",t.chart=new e.visualization.Timeline(t.element),q(function(){t.chart.draw(o,n)})})}},U.push(V)),!J&&"Chart"in t&&(J=new function(){var e=t.Chart;this.name="chartjs";var i={maintainAspectRatio:!1,animation:!1},n={scales:{yAxes:[{ticks:{maxTicksLimit:4},scaleLabel:{fontSize:16,fontColor:"#333"}}],xAxes:[{gridLines:{drawOnChartArea:!1},scaleLabel:{fontSize:16,fontColor:"#333"},time:{},ticks:{}}]},legend:{}},o=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],r=function(t){t.legend.display=!1},a=function(t,e){null!==e&&(t.scales.yAxes[0].ticks.min=e)},c=function(t,e){t.scales.yAxes[0].ticks.max=e},u=function(t,e){null!==e&&(t.scales.xAxes[0].ticks.min=e)},h=function(t,e){t.scales.xAxes[0].ticks.max=e},d=function(t,e){t.scales.xAxes[0].stacked=!!e,t.scales.yAxes[0].stacked=!!e},f=function(t,e){t.scales.xAxes[0].scaleLabel.display=!0,t.scales.xAxes[0].scaleLabel.labelString=e},p=function(t,e){t.scales.yAxes[0].scaleLabel.display=!0,t.scales.yAxes[0].scaleLabel.labelString=e},v=function(t,i,n,o){t.element.innerHTML="<canvas></canvas>";var s=t.element.getElementsByTagName("CANVAS")[0];t.chart=new e(s,{type:i,data:n,options:o})},b=function(t,e){var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?"rgba("+parseInt(i[1],16)+", "+parseInt(i[2],16)+", "+parseInt(i[3],16)+", "+e+")":t},y=function(t,e,i){var n=Math.ceil(t.element.offsetWidth/4/e.labels.length);n>25&&(n=25),i.scales.xAxes[0].ticks.callback=function(t){return t=m(t),t.length>n?t.substring(0,n-2)+"...":t}},q=l(s(i,n),r,a,c,d,f,p),_=function(t,e,i){var n,r,a,l,c,u,h=[],d=[],f=t.options.colors||o,p=!0,m=!0,v=!0,y=!0,q=!0,_=!0,S=("line"===i||"area"===i)&&!t.options.discrete,F=t.data,D=[],B=[];for(r=0;r<F.length;r++)for(l=F[r],a=0;a<l.data.length;a++)c=l.data[a],u=S?c[0].getTime():c[0],B[u]||(B[u]=new Array(F.length)),B[u][r]=g(c[1]),D.indexOf(u)===-1&&D.push(u);S&&D.sort(w);var I=[];for(a=0;a<F.length;a++)I.push([]);var M,A;for(A=0;A<D.length;A++)for(r=D[A],S?(M=new Date(g(r)),p=p&&k(M),n||(n=M.getDay()),m=m&&$(M,n),v=v&&E(M),y=y&&T(M),q=q&&x(M),_=_&&C(M)):M=r,d.push(M),a=0;a<F.length;a++)I[a].push(B[r][a]);for(r=0;r<F.length;r++){l=F[r];var P="line"!==i?b(f[r],.5):f[r],O={label:l.name,data:I[r],fill:"area"===i,borderColor:f[r],backgroundColor:P,pointBackgroundColor:f[r],borderWidth:2};h.push(s(O,l.library||{}))}if(S&&d.length>0){var j=d[0].getTime(),N=d[0].getTime();for(r=1;r<d.length;r++)M=d[r].getTime(),M<j&&(j=M),M>N&&(N=M);var L=(N-j)/864e5;if(!e.scales.xAxes[0].time.unit){var R;if(y||L>3650?(e.scales.xAxes[0].time.unit="year",R=365):v||L>300?(e.scales.xAxes[0].time.unit="month",R=30):p||L>10?(e.scales.xAxes[0].time.unit="day",R=1):q?(e.scales.xAxes[0].time.unit="hour",R=1/24):_&&(e.scales.xAxes[0].time.displayFormats={minute:"h:mm a"},e.scales.xAxes[0].time.unit="minute",R=1/24/60),R&&L>0){var z=Math.ceil(L/R/(t.element.offsetWidth/100));m&&1===R&&(z=7*Math.ceil(z/7)),e.scales.xAxes[0].time.unitStepSize=z}}e.scales.xAxes[0].time.tooltipFormat||(p?e.scales.xAxes[0].time.tooltipFormat="ll":q?e.scales.xAxes[0].time.tooltipFormat="MMM D, h a":_&&(e.scales.xAxes[0].time.tooltipFormat="h:mm a"))}var H={labels:d,datasets:h};return H};this.renderLineChart=function(t,e){var i={};!t.options.max&&F(t.data)&&(t.options.max=1);var n=q(t.data,s(i,t.options)),o=_(t,n,e||"line");n.scales.xAxes[0].type=t.options.discrete?"category":"time",v(t,"line",o,n)},this.renderPieChart=function(t){for(var e=s(i,t.options.library||{}),n=[],r=[],a=0;a<t.data.length;a++){var l=t.data[a];n.push(l[0]),r.push(l[1])}var c={labels:n,datasets:[{data:r,backgroundColor:t.options.colors||o}]};v(t,"pie",c,e)},this.renderColumnChart=function(t,e){var o;o="bar"===e?l(s(i,n),r,u,h,d,f,p)(t.data,t.options):q(t.data,t.options);var a=_(t,o,"column");y(t,a,o),v(t,"bar"===e?"horizontalBar":"bar",a,o)};var S=this;this.renderAreaChart=function(t){S.renderLineChart(t,"area")},this.renderBarChart=function(t){S.renderColumnChart(t,"bar")},this.renderScatterChart=function(t){for(var e=q(t.data,t.options),i=t.options.colors||o,n=[],s=t.data,r=0;r<s.length;r++){for(var a=s[r],l=[],c=0;c<a.data.length;c++)l.push({x:g(a.data[c][0]),y:g(a.data[c][1])});n.push({label:a.name,showLine:!1,data:l,borderColor:i[r],backgroundColor:i[r],pointBackgroundColor:i[r]})}var u={datasets:n};e.scales.xAxes[0].type="linear",e.scales.xAxes[0].position="bottom",v(t,"line",u,e)}},U.unshift(J))}function _(t,e){var n,o,s,r;for(s="render"+t,r=e.options.adapter,q(),n=0;n<U.length;n++)if(o=U[n],(!r||r===o.name)&&i(o[s]))return o[s](e);throw new Error("No adapter found")}function C(t){return 0===t.getMilliseconds()&&0===t.getSeconds()}function x(t){return C(t)&&0===t.getMinutes()}function k(t){return x(t)&&0===t.getHours()}function $(t,e){return k(t)&&t.getDay()===e}function E(t){return k(t)&&1===t.getDate()}function T(t){return E(t)&&0===t.getMonth()}function S(t){return!isNaN(v(t))&&m(t).length>=6}function F(t){var e,i,n;for(e=0;e<t.length;e++)for(n=t[e].data,i=0;i<n.length;i++)if(0!=n[i][1])return!1;return!0}function D(t){var e,i,n;for(e=0;e<t.length;e++)for(n=b(t[e].data),i=0;i<n.length;i++)if(!S(n[i][0]))return!0;return!1}function B(t,i,n){var o;for(!e(t)||"object"!=typeof t[0]||e(t[0])?(t=[{name:i.label||"Value",data:t}],i.hideLegend=!0):i.hideLegend=!1,null!==i.discrete&&void 0!==i.discrete||(i.discrete=D(t)),i.discrete&&(n="string"),o=0;o<t.length;o++)t[o].data=tt(b(t[o].data),n);return t}function I(t){var e,i=b(t);for(e=0;e<i.length;e++)i[e]=[m(i[e][0]),g(i[e][1])];return i}function M(t){var e;for(e=0;e<t.length;e++)t[e][1]=v(t[e][1]),t[e][2]=v(t[e][2]);return t}function A(t){t.data=B(t.data,t.options,"datetime"),_("LineChart",t)}function P(t){t.data=B(t.data,t.options,"string"),_("ColumnChart",t)}function O(t){t.data=I(t.data),_("PieChart",t)}function j(t){t.data=B(t.data,t.options,"string"),_("BarChart",t)}function N(t){t.data=B(t.data,t.options,"datetime"),_("AreaChart",t)}function L(t){t.data=I(t.data),_("GeoChart",t)}function R(t){t.data=B(t.data,t.options,"number"),_("ScatterChart",t)}function z(t){t.data=M(t.data),_("Timeline",t)}function H(t,e,i,n,o){var s;if("string"==typeof e&&(s=e,e=document.getElementById(e),!e))throw new Error("No element with id "+s);t.element=e,t.options=n||{},t.dataSource=i,t.getElement=function(){return e},t.getData=function(){return t.data},t.getOptions=function(){return n||{}},t.getChartObject=function(){return t.chart},W.charts[e.id]=t,p(t,o)}var W,G,Y,V,K,J,Q=t.Chartkick||{},U=[],X=/^(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)$/i;G=/(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([\.,]\d+)?($|Z|([\+\-])(\d\d)(:)?(\d\d)?)/i,Y=String(1.5).charAt(1);var Z=function(t,e){return t="number"===e?g(t):"datetime"===e?v(t):m(t)},tt=function(t,e){var i,n,o=[];for(n=0;n<t.length;n++)i=Z(t[n][0],e),o.push([i,g(t[n][1])]);return"datetime"===e&&o.sort(y),o};W={LineChart:function(t,e,i){H(this,t,e,i,A)},PieChart:function(t,e,i){H(this,t,e,i,O)},ColumnChart:function(t,e,i){H(this,t,e,i,P)},BarChart:function(t,e,i){H(this,t,e,i,j)},AreaChart:function(t,e,i){H(this,t,e,i,N)},GeoChart:function(t,e,i){H(this,t,e,i,L)},ScatterChart:function(t,e,i){H(this,t,e,i,R)},Timeline:function(t,e,i){H(this,t,e,i,z)},charts:{},configure:function(t){for(var e in t)t.hasOwnProperty(e)&&(Q[e]=t[e])}},"object"==typeof module&&"object"==typeof module.exports?module.exports=W:t.Chartkick=W}(window);