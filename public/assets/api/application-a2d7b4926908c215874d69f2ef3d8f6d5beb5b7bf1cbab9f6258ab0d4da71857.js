/*
Mithril v0.2.5
http://mithril.js.org
(c) 2014-2016 Leo Horie
License: MIT
*/

!function(a,b){"use strict";var c=b(a);"object"==typeof module&&null!=module&&module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):a.m=c}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a){return"function"==typeof a}function d(a){return"[object Object]"===Ca.call(a)}function e(a){return"[object String]"===Ca.call(a)}function f(){}function g(a){xa=a.document,ya=a.location,Aa=a.cancelAnimationFrame||a.clearTimeout,za=a.requestAnimationFrame||a.setTimeout}function h(a,b){for(var c,d=[],e=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;c=e.exec(b);)if(""===c[1]&&c[2])a.tag=c[2];else if("#"===c[1])a.attrs.id=c[2];else if("."===c[1])d.push(c[2]);else if("["===c[3][0]){var f=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(c[3]);a.attrs[f[1]]=f[3]||""}return d}function i(a,b){var c=b?a.slice(1):a;return 1===c.length&&Da(c[0])?c[0]:c}function j(a,b,c){var d="class"in b?"class":"className";for(var e in b)Ba.call(b,e)&&(e===d&&null!=b[e]&&""!==b[e]?(c.push(b[e]),a[e]=""):a[e]=b[e]);c.length&&(a[d]=c.join(" "))}function k(a,b){for(var c=[],f=1,g=arguments.length;g>f;f++)c[f-1]=arguments[f];if(d(a))return da(a,c);if(!e(a))throw new Error("selector in m(selector, attrs, children) should be a string");var k=null!=b&&d(b)&&!("tag"in b||"view"in b||"subtree"in b),l=k?b:{},m={tag:"div",attrs:{},children:i(c,k)};return j(m.attrs,l,h(m,a)),m}function l(a,b){for(var c=0;c<a.length&&!b(a[c],c++););}function m(a,b){l(a,function(a,c){return(a=a&&a.attrs)&&null!=a.key&&b(a,c)})}function n(a){try{if(null!=a&&null!=a.toString())return a}catch(b){}return""}function o(a,b,c,d){try{q(a,b,c),b.nodeValue=d}catch(e){}}function p(a){for(var b=0;b<a.length;b++)Da(a[b])&&(a=a.concat.apply([],a),b--);return a}function q(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}function r(a,b,c,d){m(a,function(a,d){b[a=a.key]=b[a]?{action:Ha,index:d,from:b[a].index,element:c.nodes[b[a].index]||xa.createElement("div")}:{action:Ga,index:d}});var e=[];for(var f in b)Ba.call(b,f)&&e.push(b[f]);var g=e.sort(R),h=new Array(c.length);return h.nodes=c.nodes.slice(),l(g,function(b){var e=b.index;if(b.action===Fa&&(W(c[e].nodes,c[e]),h.splice(e,1)),b.action===Ga){var f=xa.createElement("div");f.key=a[e].attrs.key,q(d,f,e),h.splice(e,0,{attrs:{key:a[e].attrs.key},nodes:[f]}),h.nodes[e]=f}if(b.action===Ha){var g=b.element,i=d.childNodes[e];i!==g&&null!==g&&d.insertBefore(g,i||null),h[e]=c[b.from],h.nodes[e]=g}}),h}function s(a,b,c,d){var e=a.length!==b.length;return e||m(a,function(a,c){var d=b[c];return e=d&&d.attrs&&d.attrs.key!==a.key}),e?r(a,c,b,d):b}function t(a,b,c){l(a,function(a,d){null!=b[d]&&c.push.apply(c,b[d].nodes)}),l(b.nodes,function(a,d){null!=a.parentNode&&c.indexOf(a)<0&&W([a],[b[d]])}),a.length<b.length&&(b.length=a.length),b.nodes=c}function u(a){var b=0;m(a,function(){return l(a,function(a){(a=a&&a.attrs)&&null==a.key&&(a.key="__mithril__"+b++)}),1})}function v(a,b,c){return a.tag!==b.tag?!0:c.sort().join()!==Object.keys(b.attrs).sort().join()?!0:a.attrs.id!==b.attrs.id?!0:a.attrs.key!==b.attrs.key?!0:"all"===k.redraw.strategy()?!b.configContext||b.configContext.retain!==!0:"diff"===k.redraw.strategy()?b.configContext&&b.configContext.retain===!1:!1}function w(a,b,d){v(a,b,d)&&(b.nodes.length&&W(b.nodes),b.configContext&&c(b.configContext.onunload)&&b.configContext.onunload(),b.controllers&&l(b.controllers,function(a){a.onunload&&a.onunload({preventDefault:f})}))}function x(a,b){return a.attrs.xmlns?a.attrs.xmlns:"svg"===a.tag?"http://www.w3.org/2000/svg":"math"===a.tag?"http://www.w3.org/1998/Math/MathML":b}function y(a,b,c){c.length&&(a.views=b,a.controllers=c,l(c,function(a){if(a.onunload&&a.onunload.$old&&(a.onunload=a.onunload.$old),Ia&&a.onunload){var b=a.onunload;a.onunload=f,a.onunload.$old=b}}))}function z(a,b,d,e,f){if(c(b.attrs.config)){var g=f.configContext=f.configContext||{};a.push(function(){return b.attrs.config.call(b,d,!e,g,f)})}}function A(a,c,d,e,f,g,h,i){var j=a.nodes[0];return e&&V(j,c.tag,c.attrs,a.attrs,f),a.children=Q(j,c.tag,b,b,c.children,a.children,!1,0,c.attrs.contenteditable?j:d,f,h),a.nodes.intact=!0,i.length&&(a.views=g,a.controllers=i),j}function B(a,b,c){var d;a.$trusted?d=_(b,c,a):(d=[xa.createTextNode(a)],b.nodeName in Ea||q(b,d[0],c));var e;return e="string"==typeof a||"number"==typeof a||"boolean"==typeof a?new a.constructor(a):a,e.nodes=d,e}function C(a,b,c,d,e,f){var g=b.nodes;return d&&d===xa.activeElement||(a.$trusted?(W(g,b),g=_(c,e,a)):"textarea"===f?c.value=a:d?d.innerHTML=a:((1===g[0].nodeType||g.length>1||g[0].nodeValue.trim&&!g[0].nodeValue.trim())&&(W(b.nodes,b),g=[xa.createTextNode(a)]),o(c,g[0],e,a))),b=new a.constructor(a),b.nodes=g,b}function D(a,b,c,d,e,f,g){return a.nodes.length?a.valueOf()!==b.valueOf()||e?C(b,a,d,f,c,g):(a.nodes.intact=!0,a):B(b,d,c)}function E(a){if(a.$trusted){var b=a.match(/<[^\/]|\>\s*[^<]/g);if(null!=b)return b.length}else if(Da(a))return a.length;return 1}function F(a,c,d,e,f,g,h,i,j){a=p(a);var k=[],l=c.length===a.length,n=0,o={},q=!1;m(c,function(a,b){q=!0,o[c[b].attrs.key]={action:Fa,index:b}}),u(a),q&&(c=s(a,c,o,d));for(var r=0,v=0,w=a.length;w>v;v++){var x=Q(d,f,c,e,a[v],c[r],g,e+n||n,h,i,j);x!==b&&(l=l&&x.nodes.intact,n+=E(x),c[r++]=x)}return l||t(a,c,k),c}function G(a,b,c,d,e){if(null!=b){if(Ca.call(b)===Ca.call(a))return b;if(e&&e.nodes){var f=c-d,g=f+(Da(a)?a:b.nodes).length;W(e.nodes.slice(f,g),e.slice(f,g))}else b.nodes&&W(b.nodes,b)}return b=new a.constructor,b.tag&&(b={}),b.nodes=[],b}function H(a,b){return a.attrs.is?null==b?xa.createElement(a.tag,a.attrs.is):xa.createElementNS(b,a.tag,a.attrs.is):null==b?xa.createElement(a.tag):xa.createElementNS(b,a.tag)}function I(a,b,c,d){return d?V(b,a.tag,a.attrs,{},c):a.attrs}function J(a,c,d,e,f,g){return null!=a.children&&a.children.length>0?Q(c,a.tag,b,b,a.children,d.children,!0,0,a.attrs.contenteditable?c:e,f,g):a.children}function K(a,b,c,d,e,f,g){var h={tag:a.tag,attrs:b,children:c,nodes:[d]};return y(h,f,g),h.children&&!h.children.nodes&&(h.children.nodes=[]),"select"===a.tag&&"value"in a.attrs&&V(d,a.tag,{value:a.attrs.value},{},e),h}function L(a,b,d,e){var f;return f="diff"===k.redraw.strategy()&&a?a.indexOf(b):-1,f>-1?d[f]:c(e)?new e:{}}function M(a,b,c,d){null!=d.onunload&&Ka.map(function(a){return a.handler}).indexOf(d.onunload)<0&&Ka.push({controller:d,handler:d.onunload}),a.push(c),b.push(d)}function N(a,b,c,d,e,f){var g=L(c.views,b,d,a.controller),h=a&&a.attrs&&a.attrs.key;return a=0===Ia||La||d&&d.indexOf(g)>-1?a.view(g):{tag:"placeholder"},"retain"===a.subtree?a:(a.attrs=a.attrs||{},a.attrs.key=h,M(f,e,b,g),a)}function O(a,b,c,d){for(var e=b&&b.controllers;null!=a.view;)a=N(a,a.view.$original||a.view,b,e,d,c);return a}function P(a,b,c,d,f,g,h,i){var j=[],k=[];if(a=O(a,b,j,k),"retain"===a.subtree)return b;if(!a.tag&&k.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");a.attrs=a.attrs||{},b.attrs=b.attrs||{};var l=Object.keys(a.attrs),m=l.length>("key"in a.attrs?1:0);if(w(a,b,l),e(a.tag)){var n=0===b.nodes.length;h=x(a,h);var o;if(n){o=H(a,h);var p=I(a,o,h,m);q(d,o,f);var r=J(a,o,b,c,h,i);b=K(a,p,r,o,h,j,k)}else o=A(b,a,c,m,h,j,i,k);return n||g!==!0||null==o||q(d,o,f),z(i,a,o,n,b),b}}function Q(a,b,e,f,g,h,i,j,k,l,m){return g=n(g),"retain"===g.subtree?h:(h=G(g,h,j,f,e),Da(g)?F(g,h,a,j,b,i,k,l,m):null!=g&&d(g)?P(g,h,k,a,j,i,l,m):c(g)?h:D(h,g,j,a,i,k,b))}function R(a,b){return a.action-b.action||a.index-b.index}function S(a,b,c){for(var d in b)Ba.call(b,d)&&(null!=c&&c[d]===b[d]||(a.style[d]=b[d]));for(d in c)Ba.call(c,d)&&(Ba.call(b,d)||(a.style[d]=""))}function T(a,b,e,f,g,h){if("config"===b||"key"===b)return!0;if(c(e)&&"on"===b.slice(0,2))a[b]=aa(e,a);else if("style"===b&&null!=e&&d(e))S(a,e,f);else if(null!=h)"href"===b?a.setAttributeNS("http://www.w3.org/1999/xlink","href",e):a.setAttribute("className"===b?"class":b,e);else if(b in a&&!Ma[b])try{"input"===g&&a[b]===e||(a[b]=e)}catch(i){a.setAttribute(b,e)}else a.setAttribute(b,e)}function U(a,b,c,d,e,f,g){if(b in e&&d===c&&xa.activeElement!==a)"value"===b&&"input"===f&&a.value!==c&&(a.value=c);else{e[b]=c;try{return T(a,b,c,d,f,g)}catch(h){if(h.message.indexOf("Invalid argument")<0)throw h}}}function V(a,b,c,d,e){for(var f in c)!Ba.call(c,f)||!U(a,f,c[f],d[f],d,b,e);return d}function W(a,b){for(var c=a.length-1;c>-1;c--)if(a[c]&&a[c].parentNode){try{a[c].parentNode.removeChild(a[c])}catch(d){}b=[].concat(b),b[c]&&X(b[c])}a.length&&(a.length=0)}function X(a){a.configContext&&c(a.configContext.onunload)&&(a.configContext.onunload(),a.configContext.onunload=null),a.controllers&&l(a.controllers,function(a){c(a.onunload)&&a.onunload({preventDefault:f})}),a.children&&(Da(a.children)?l(a.children,X):a.children.tag&&X(a.children))}function Y(a,b){try{a.appendChild(xa.createRange().createContextualFragment(b))}catch(c){a.insertAdjacentHTML("beforeend",b),Z(a)}}function Z(a){if("SCRIPT"===a.tagName)a.parentNode.replaceChild($(a),a);else{var b=a.childNodes;if(b&&b.length)for(var c=0;c<b.length;c++)Z(b[c])}return a}function $(a){for(var b=document.createElement("script"),c=a.attributes,d=0;d<c.length;d++)b.setAttribute(c[d].name,c[d].value);return b.text=a.innerHTML,b}function _(a,b,c){var d=a.childNodes[b];if(d){var e=1!==d.nodeType,f=xa.createElement("span");e?(a.insertBefore(f,d||null),f.insertAdjacentHTML("beforebegin",c),a.removeChild(f)):d.insertAdjacentHTML("beforebegin",c)}else Y(a,c);for(var g=[];a.childNodes[b]!==d;)g.push(a.childNodes[b]),b++;return g}function aa(a,b){return function(c){c=c||event,k.redraw.strategy("diff"),k.startComputation();try{return a.call(b,c)}finally{ha()}}}function ba(a){var b=Oa.indexOf(a);return 0>b?Oa.push(a)-1:b}function ca(a){function b(){return arguments.length&&(a=arguments[0]),a}return b.toJSON=function(){return a},b}function da(a,b){function c(){return(a.controller||f).apply(this,b)||this}function d(c){for(var d=[c].concat(b),e=1;e<arguments.length;e++)d.push(arguments[e]);return a.view.apply(a,d)}a.controller&&(c.prototype=a.controller.prototype),d.$original=a.view;var e={controller:c,view:d};return b[0]&&null!=b[0].key&&(e.attrs={key:b[0].key}),e}function ea(a,b,c,d){if(!d){k.redraw.strategy("all"),k.startComputation(),Ra[c]=b;var e;e=Qa=a?a:a={controller:f};var g=new(a.controller||f);return e===Qa&&(Ta[c]=g,Sa[c]=a),ha(),null===a&&fa(b,c),Ta[c]}null==a&&fa(b,c)}function fa(a,b){Ra.splice(b,1),Ta.splice(b,1),Sa.splice(b,1),oa(a),Oa.splice(ba(a),1)}function ga(){Wa&&(Wa(),Wa=null),l(Ra,function(a,b){var c=Sa[b];if(Ta[b]){var d=[Ta[b]];k.render(a,c.view?c.view(Ta[b],d):"")}}),Xa&&(Xa(),Xa=null),Ua=null,Va=new Date,k.redraw.strategy("diff")}function ha(){"none"===k.redraw.strategy()?(Ia--,k.redraw.strategy("diff")):k.endComputation()}function ia(a){return a.slice(ab[k.route.mode].length)}function ja(a,b,c){$a={};var d=c.indexOf("?");-1!==d&&($a=na(c.substr(d+1,c.length)),c=c.substr(0,d));var e=Object.keys(b),f=e.indexOf(c);if(-1!==f)return k.mount(a,b[e[f]]),!0;for(var g in b)if(Ba.call(b,g)){if(g===c)return k.mount(a,b[g]),!0;var h=new RegExp("^"+g.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(h.test(c))return c.replace(h,function(){var c=g.match(/:[^\/]+/g)||[],d=[].slice.call(arguments,1,-2);l(c,function(a,b){$a[a.replace(/:|\./g,"")]=decodeURIComponent(d[b])}),k.mount(a,b[g])}),!0}}function ka(a){if(a=a||event,!(a.ctrlKey||a.metaKey||a.shiftKey||2===a.which)){a.preventDefault?a.preventDefault():a.returnValue=!1;var b,c=a.currentTarget||a.srcElement;for(b="pathname"===k.route.mode&&c.search?na(c.search.slice(1)):{};c&&!/a/i.test(c.nodeName);)c=c.parentNode;Ia=0,k.route(c[k.route.mode].slice(ab[k.route.mode].length),b)}}function la(){"hash"!==k.route.mode&&ya.hash?ya.hash=ya.hash:a.scrollTo(0,0)}function ma(a,c){var e={},f=[];for(var g in a)if(Ba.call(a,g)){var h=c?c+"["+g+"]":g,i=a[g];if(null===i)f.push(encodeURIComponent(h));else if(d(i))f.push(ma(i,h));else if(Da(i)){var j=[];e[h]=e[h]||{},l(i,function(a){e[h][a]||(e[h][a]=!0,j.push(encodeURIComponent(h)+"="+encodeURIComponent(a)))}),f.push(j.join("&"))}else i!==b&&f.push(encodeURIComponent(h)+"="+encodeURIComponent(i))}return f.join("&")}function na(a){if(""===a||null==a)return{};"?"===a.charAt(0)&&(a=a.slice(1));var b=a.split("&"),c={};return l(b,function(a){var b=a.split("="),d=decodeURIComponent(b[0]),e=2===b.length?decodeURIComponent(b[1]):null;null!=c[d]?(Da(c[d])||(c[d]=[c[d]]),c[d].push(e)):c[d]=e}),c}function oa(a){var c=ba(a);W(a.childNodes,Pa[c]),Pa[c]=b}function pa(a,b){var c=k.prop(b);return a.then(c),c.then=function(c,d){return pa(a.then(c,d),b)},c["catch"]=c.then.bind(null,null),c}function qa(a,b){function e(a){i=a||gb,l.map(function(a){i===fb?a.resolve(j):a.reject(j)})}function f(a,b,e,f){if((null!=j&&d(j)||c(j))&&c(a))try{var g=0;a.call(j,function(a){g++||(j=a,b())},function(a){g++||(j=a,e())})}catch(h){k.deferred.onerror(h),j=h,e()}else f()}function g(){var d;try{d=j&&j.then}catch(l){return k.deferred.onerror(l),j=l,i=eb,g()}i===eb&&k.deferred.onerror(j),f(d,function(){i=db,g()},function(){i=eb,g()},function(){try{i===db&&c(a)?j=a(j):i===eb&&c(b)&&(j=b(j),i=db)}catch(g){return k.deferred.onerror(g),j=g,e()}j===h?(j=TypeError(),e()):f(d,function(){e(fb)},e,function(){e(i===db&&fb)})})}var h=this,i=0,j=0,l=[];h.promise={},h.resolve=function(a){return i||(j=a,i=db,g()),h},h.reject=function(a){return i||(j=a,i=eb,g()),h},h.promise.then=function(a,b){var c=new qa(a,b);return i===fb?c.resolve(j):i===gb?c.reject(j):l.push(c),c.promise}}function ra(a){return a}function sa(c){var d=c.callbackName||"mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),e=xa.createElement("script");a[d]=function(f){e.parentNode.removeChild(e),c.onload({type:"load",target:{responseText:f}}),a[d]=b},e.onerror=function(){return e.parentNode.removeChild(e),c.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),a[d]=b,!1},e.onload=function(){return!1},e.src=c.url+(c.url.indexOf("?")>0?"&":"?")+(c.callbackKey?c.callbackKey:"callback")+"="+d+"&"+ma(c.data||{}),xa.body.appendChild(e)}function ta(b){var d=new a.XMLHttpRequest;if(d.open(b.method,b.url,!0,b.user,b.password),d.onreadystatechange=function(){4===d.readyState&&(d.status>=200&&d.status<300?b.onload({type:"load",target:d}):b.onerror({type:"error",target:d}))},b.serialize===JSON.stringify&&b.data&&"GET"!==b.method&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),b.deserialize===JSON.parse&&d.setRequestHeader("Accept","application/json, text/*"),c(b.config)){var f=b.config(d,b);null!=f&&(d=f)}var g="GET"!==b.method&&b.data?b.data:"";if(g&&!e(g)&&g.constructor!==a.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");return d.send(g),d}function ua(a){return a.dataType&&"jsonp"===a.dataType.toLowerCase()?sa(a):ta(a)}function va(a,b,c){if("GET"===a.method&&"jsonp"!==a.dataType){var d=a.url.indexOf("?")<0?"?":"&",e=ma(b);a.url+=e?d+e:""}else a.data=c(b)}function wa(a,b){return b&&(a=a.replace(/:[a-z]\w+/gi,function(a){var c=a.slice(1),d=b[c]||a;return delete b[c],d})),a}k.version=function(){return"v0.2.5"};var xa,ya,za,Aa,Ba={}.hasOwnProperty,Ca={}.toString,Da=Array.isArray||function(a){return"[object Array]"===Ca.call(a)},Ea={AREA:1,BASE:1,BR:1,COL:1,COMMAND:1,EMBED:1,HR:1,IMG:1,INPUT:1,KEYGEN:1,LINK:1,META:1,PARAM:1,SOURCE:1,TRACK:1,WBR:1};k.deps=function(b){return g(a=b||window),a},k.deps(a);var Fa=1,Ga=2,Ha=3,Ia=0;k.startComputation=function(){Ia++},k.endComputation=function(){Ia>1?Ia--:(Ia=0,k.redraw())};var Ja,Ka=[],La=!1,Ma={list:1,style:1,form:1,type:1,width:1,height:1},Na={appendChild:function(a){Ja===b&&(Ja=xa.createElement("html")),xa.documentElement&&xa.documentElement!==a?xa.replaceChild(a,xa.documentElement):xa.appendChild(a),this.childNodes=xa.childNodes},insertBefore:function(a){this.appendChild(a)},childNodes:[]},Oa=[],Pa={};k.render=function(a,c,d){if(!a)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var e,f=[],g=ba(a),h=a===xa;e=h||a===xa.documentElement?Na:a,h&&"html"!==c.tag&&(c={tag:"html",attrs:{},children:c}),Pa[g]===b&&W(e.childNodes),d===!0&&oa(a),Pa[g]=Q(e,null,b,b,c,Pa[g],!1,0,null,b,f),l(f,function(a){a()})},k.trust=function(a){return a=new String(a),a.$trusted=!0,a},k.prop=function(a){return(null!=a&&(d(a)||c(a))||"undefined"!=typeof Promise&&a instanceof Promise)&&c(a.then)?pa(a):ca(a)};var Qa,Ra=[],Sa=[],Ta=[],Ua=null,Va=0,Wa=null,Xa=null,Ya=16;k.component=function(a){for(var b=new Array(arguments.length-1),c=1;c<arguments.length;c++)b[c-1]=arguments[c];return da(a,b)},k.mount=k.module=function(a,b){if(!a)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var d=Ra.indexOf(a);0>d&&(d=Ra.length);var e=!1,f={preventDefault:function(){e=!0,Wa=Xa=null}};return l(Ka,function(a){a.handler.call(a.controller,f),a.controller.onunload=null}),e?l(Ka,function(a){a.controller.onunload=a.handler}):Ka=[],Ta[d]&&c(Ta[d].onunload)&&Ta[d].onunload(f),ea(b,a,d,e)};var Za=!1;k.redraw=function(b){if(!Za){Za=!0,b&&(La=!0);try{Ua&&!b?(za===a.requestAnimationFrame||new Date-Va>Ya)&&(Ua>0&&Aa(Ua),Ua=za(ga,Ya)):(ga(),Ua=za(function(){Ua=null},Ya))}finally{Za=La=!1}}},k.redraw.strategy=k.prop(),k.withAttr=function(a,b,c){return function(d){d=d||window.event;var e=d.currentTarget||this,f=c||this,g=a in e?e[a]:e.getAttribute(a);b.call(f,g)}};var $a,_a,ab={pathname:"",hash:"#",search:"?"},bb=f,cb=!1;k.route=function(b,c,d,f){if(0===arguments.length)return _a;if(3===arguments.length&&e(c)){bb=function(a){var e=_a=ia(a);if(!ja(b,d,e)){if(cb)throw new Error("Ensure the default route matches one of the routes defined in m.route");cb=!0,k.route(c,!0),cb=!1}};var g="hash"===k.route.mode?"onhashchange":"onpopstate";return a[g]=function(){var a=ya[k.route.mode];"pathname"===k.route.mode&&(a+=ya.search),_a!==ia(a)&&bb(a)},Wa=la,void a[g]()}if(b.addEventListener||b.attachEvent){var h="pathname"!==k.route.mode?ya.pathname:"";return b.href=h+ab[k.route.mode]+f.attrs.href,void(b.addEventListener?(b.removeEventListener("click",ka),b.addEventListener("click",ka)):(b.detachEvent("onclick",ka),b.attachEvent("onclick",ka)))}if(e(b)){var i=_a;_a=b;var j,l=c||{},m=_a.indexOf("?");j=m>-1?na(_a.slice(m+1)):{};for(var n in l)Ba.call(l,n)&&(j[n]=l[n]);var o,p=ma(j);o=m>-1?_a.slice(0,m):_a,p&&(_a=o+(-1===o.indexOf("?")?"?":"&")+p);var q=(3===arguments.length?d:c)===!0||i===b;if(a.history.pushState){var r=q?"replaceState":"pushState";Wa=la,Xa=function(){try{a.history[r](null,xa.title,ab[k.route.mode]+_a)}catch(b){ya[k.route.mode]=_a}},bb(ab[k.route.mode]+_a)}else ya[k.route.mode]=_a,bb(ab[k.route.mode]+_a)}},k.route.param=function(a){if(!$a)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return a?$a[a]:$a},k.route.mode="search",k.route.buildQueryString=ma,k.route.parseQueryString=na,k.deferred=function(){var a=new qa;return a.promise=pa(a.promise),a};var db=1,eb=2,fb=3,gb=4;return k.deferred.onerror=function(a){if("[object Error]"===Ca.call(a)&&!/ Error/.test(a.constructor.toString()))throw Ia=0,a},k.sync=function(a){function b(a,b){return function(g){return e[a]=g,b||(f="reject"),0===--d&&(c.promise(e),c[f](e)),g}}var c=k.deferred(),d=a.length,e=[],f="resolve";return a.length>0?l(a,function(a,c){a.then(b(c,!0),b(c,!1))}):c.resolve([]),c.promise},k.request=function(a){a.background!==!0&&k.startComputation();var b,c,d,e=new qa,f=a.dataType&&"jsonp"===a.dataType.toLowerCase();return f?(b=a.serialize=c=a.deserialize=ra,d=function(a){return a.responseText}):(b=a.serialize=a.serialize||JSON.stringify,c=a.deserialize=a.deserialize||JSON.parse,d=a.extract||function(a){return a.responseText.length||c!==JSON.parse?a.responseText:null}),a.method=(a.method||"GET").toUpperCase(),a.url=wa(a.url,a.data),va(a,a.data,b),a.onload=a.onerror=function(b){try{b=b||event;var f=c(d(b.target,a));"load"===b.type?(a.unwrapSuccess&&(f=a.unwrapSuccess(f,b.target)),Da(f)&&a.type?l(f,function(b,c){f[c]=new a.type(b)}):a.type&&(f=new a.type(f)),e.resolve(f)):(a.unwrapError&&(f=a.unwrapError(f,b.target)),e.reject(f))}catch(g){e.reject(g),k.deferred.onerror(g)}finally{a.background!==!0&&k.endComputation()}},ua(a),e.promise=pa(e.promise,a.initialValue),e.promise},k});
//# sourceMappingURL=mithril.min.js.map
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));
(function(factory) {
  if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('mithril'), require('underscore'));
  } else {
    // Browser globals
    factory(window.m, window._);
  }
}(function(m, _) {
  var postgrest = {},

  token = m.prop(),

  mergeConfig = function(config, options){
    return options && _.isFunction(options.config) ? _.compose(options.config, config) : config;
  },

  addHeaders = function(headers){
    return function(xhr){
      _.each(headers, function(value, key){
        xhr.setRequestHeader(key, value);
      });
      return xhr;
    };
  },

  addRepresentationHeader = addHeaders({'Prefer': 'return=representation'});

  postgrest.token = token;

  postgrest.loader = function(options, requestFunction, defaultState){
    var defaultState = defaultState || false;
    var loader = m.prop(defaultState), d = m.deferred();
    loader.load = function(){
      loader(true);
      m.redraw();
      m.startComputation();
      requestFunction(_.extend({}, options, {background: true})).then(function(data){
        loader(false);
        d.resolve(data);
        m.endComputation();
      }, function(error){
        loader(false);
        d.reject(error);
        m.endComputation();
      });
      return d.promise;
    };
    return loader;
  };

  postgrest.loaderWithToken = function(options, defaultState){
    return postgrest.loader(options, postgrest.requestWithToken, defaultState);
  };

  postgrest.init = function(apiPrefix, authenticationOptions){
    postgrest.request = function(options){
      return m.request(_.extend({}, options, {url: apiPrefix + options.url}));
    };

    postgrest.authenticate = function(){
      var deferred = m.deferred();
      if (token()){
        deferred.resolve({token: token()});
      }
      else {
        m.request(authenticationOptions).then(function(data){
          token(data.token);
          deferred.resolve({token: token()});
        }, function(data){ deferred.reject(data); });
      }
      return deferred.promise;
    };

    postgrest.requestWithToken = function(options){
      var addAuthorizationHeader = function(){
        return mergeConfig(addHeaders({'Authorization': 'Bearer ' + token()}), options);
      };
      return m.postgrest.authenticate().then(
        function(){
          return m.postgrest.request(_.extend({}, options, {config: addAuthorizationHeader()}));
        },
        function(){
          return m.postgrest.request(_.extend({}, options));
        }
      );
    };

    postgrest.model = function(name){
      var addPaginationHeaders = function(page, pageSize){
        var toRange = function(){
          var from = (page - 1) * pageSize,
            to = from + pageSize - 1;
          return from + '-' + to;
        };

        return addHeaders({'Range-unit': 'items', 'Range': toRange()});
      },

      pageSize = m.prop(10),

        nameOptions = {url: '/' + name},

        getOptions = function(data, page, pageSize, options){
        return _.extend({}, options, nameOptions, {method: 'GET', data: data, config: mergeConfig(addPaginationHeaders(page, pageSize), options)});
      },

      querystring = function(filters, options){
        options.url += '?' + m.route.buildQueryString(filters);
        return options;
      },

      options = function(options){
        return m.postgrest.request(_.extend({}, options, nameOptions, {method: 'OPTIONS'}));
      },

      postOptions = function(attributes, options){
        return _.extend(
          {},
          options,
          nameOptions,
          {method: 'POST', data: attributes, config: mergeConfig(addRepresentationHeader, options)}
        );
      },

      deleteOptions = function(filters, options){
        return querystring(filters, _.extend({}, options, nameOptions, {method: 'DELETE'}));
      },

      patchOptions = function(filters, attributes, options){
        return querystring(
          filters,
          _.extend(
            {},
            options,
            nameOptions,
            {method: 'PATCH', data: attributes, config: mergeConfig(addRepresentationHeader, options)})
        );
      },

      getPageOptions = function(data, page, options){
        return getOptions(data, (page || 1), pageSize(), options);
      },

      getRowOptions = function(data, options){
        return getOptions(data, 1, 1, options);
      };

      return {
        pageSize: pageSize,
        getPageOptions:   getPageOptions,
        getRowOptions:    getRowOptions,
        patchOptions:     patchOptions,
        postOptions:      postOptions,
        deleteOptions:    deleteOptions,
        getPage:          _.compose(postgrest.request, getPageOptions),
        getRow:           _.compose(postgrest.request, getRowOptions),
        patch:            _.compose(postgrest.request, patchOptions),
        post:             _.compose(postgrest.request, postOptions),
        deleteRequest:    _.compose(postgrest.request, deleteOptions),
        getPageWithToken: _.compose(postgrest.requestWithToken, getPageOptions),
        getRowWithToken:  _.compose(postgrest.requestWithToken, getRowOptions),
        patchWithToken:   _.compose(postgrest.requestWithToken, patchOptions),
        postWithToken:    _.compose(postgrest.requestWithToken, postOptions),
        deleteWithToken:  _.compose(postgrest.requestWithToken, deleteOptions),
        options: options
      };
    };

    return postgrest;
  };

  m.postgrest = postgrest;
}));

(function(factory) {
  if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('mithril'), require('underscore'));
  }
  else {
    // Browser globals
    factory(window.m, window._);
  }
}(function(m, _) {
  m.postgrest.filtersVM = function(attributes){
    var newVM = {},
    filter = function(){
      var prop = m.prop(''),
      filterProp = function(value){
        if (arguments.length > 0){
          prop(value);
          return newVM;
        }
        return prop();
      };
      // Just so we can have a default to_filter and avoid if _.isFunction calls
      filterProp.toFilter = function(){ return (filterProp() || '').toString().trim(); };
      return filterProp;
    },

    getters = _.reduce(
      attributes,
      function(memo, operator, attr){
        // The operator between is implemented with two properties, one for greater than value and another for lesser than value.
        // Both properties are sent in the queurystring with the same name,
        // that's why we need the special case here, so we can use a simple map as argument to filtersVM.
        if (operator === 'between'){
          memo[attr] = {lte: filter(), gte: filter()};
        }
        else {
          memo[attr] = filter();
        }
        return memo;
      },
      {order: m.prop()}
    ),

    parametersWithoutOrder = function(){
      return _.reduce(
        getters,
        function(memo, getter, attr){
          if (attr !== 'order'){
            var operator = attributes[attr];

            if (_.isFunction(getter.toFilter) && !getter.toFilter()){ return memo; }

            // Bellow we use different formatting rules for the value depending on the operator
            // These rules are used regardless of the toFilter function,
            // so the user can use a custom toFilter without having to worry with basic filter syntax
            if (operator === 'ilike' || operator === 'like'){
              memo[attr] = operator + '.*' + getter.toFilter() + '*';
            }
            else if (operator === '@@') {
              memo[attr] = operator + '.' + getter.toFilter().replace(/\s+/g, '&');
            }
            else if (operator === 'between') {
              if (!getter.lte.toFilter() && !getter.gte.toFilter()){ return memo; }
              memo[attr] = [];
              if (getter.gte()){
                memo[attr].push('gte.' + getter.gte.toFilter());
              }
              if (getter.lte()){
                memo[attr].push('lte.' + getter.lte.toFilter());
              }
            }
            else {
              memo[attr] = operator + '.' + getter.toFilter();
            }
          }
          return memo;
        },
        {}
      );
    },

    parameters = function(){
      // The order parameters have a special syntax (just like an order by SQL clause)
      // https://github.com/begriffs/postgrest/wiki/Routing#filtering-and-ordering
      var order = function(){
        return getters.order() && _.reduce(
          getters.order(),
          function(memo, direction, attr){
            memo.push(attr + '.' + direction);
            return memo;
          },
          []
        ).join(',');
      },

      orderParameter = order() ? {order: order()} : {};

      return _.extend({}, orderParameter, parametersWithoutOrder());

    };

    return _.extend(newVM, getters, {parameters: parameters, parametersWithoutOrder: parametersWithoutOrder});
  };
}));

(function(factory) {
  if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('mithril'), require('underscore'));
  } else {
    // Browser globals
    factory(window.m, window._);
  }
}(function(m, _) {
  m.postgrest.paginationVM = function(pageRequest, order){
    var collection = m.prop([]),
      defaultOrder = order || 'id.desc',
      filters = m.prop({order: defaultOrder}),
      isLoading = m.prop(false),
      page = m.prop(1),
      total = m.prop(),

      fetch = function(){
      var d = m.deferred(),
        getTotal = function(xhr) {
        if (!xhr || xhr.status === 0){
          return JSON.stringify({hint: null, details: null, code: 0, message: 'Connection error'});
        }
        var rangeHeader = xhr.getResponseHeader('Content-Range');
        if (_.isString(rangeHeader) && rangeHeader.split('/').length > 1){
          total(parseInt(rangeHeader.split('/')[1]));
        }
        try {
          JSON.parse(xhr.responseText);
          return xhr.responseText;
        }
        catch (ex){
          return JSON.stringify({hint: null, details: null, code: 0, message: xhr.responseText});
        }
      };
      isLoading(true);
      pageRequest(filters(), page(), {background: true, extract: getTotal}).then(function(data){
        collection(_.union(collection(), data));
        isLoading(false);
        d.resolve(collection());
        m.redraw();
      }, function(error){
        isLoading(false);
        total(0);
        d.reject(error);
        m.redraw();
      });
      return d.promise;
    },

    firstPage = function(parameters){
      filters(_.extend({order: defaultOrder}, parameters));
      collection([]);
      page(1);
      return fetch();
    },

    nextPage = function(){
      page(page() + 1);
      return fetch();
    };

    return {
      collection: collection,
      firstPage: firstPage,
      isLoading: isLoading,
      nextPage: nextPage,
      total: total
    };
  };

}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pdGhyaWwucG9zdGdyZXN0LmpzIiwidm1zL2ZpbHRlcnNWTS5qcyIsInZtcy9wYWdpbmF0aW9uVk0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1pdGhyaWwucG9zdGdyZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICBmYWN0b3J5KHJlcXVpcmUoJ21pdGhyaWwnKSwgcmVxdWlyZSgndW5kZXJzY29yZScpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KHdpbmRvdy5tLCB3aW5kb3cuXyk7XG4gIH1cbn0oZnVuY3Rpb24obSwgXykge1xuICB2YXIgcG9zdGdyZXN0ID0ge30sXG5cbiAgdG9rZW4gPSBtLnByb3AoKSxcblxuICBtZXJnZUNvbmZpZyA9IGZ1bmN0aW9uKGNvbmZpZywgb3B0aW9ucyl7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgXy5pc0Z1bmN0aW9uKG9wdGlvbnMuY29uZmlnKSA/IF8uY29tcG9zZShvcHRpb25zLmNvbmZpZywgY29uZmlnKSA6IGNvbmZpZztcbiAgfSxcblxuICBhZGRIZWFkZXJzID0gZnVuY3Rpb24oaGVhZGVycyl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHhocil7XG4gICAgICBfLmVhY2goaGVhZGVycywgZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geGhyO1xuICAgIH07XG4gIH0sXG5cbiAgYWRkUmVwcmVzZW50YXRpb25IZWFkZXIgPSBhZGRIZWFkZXJzKHsnUHJlZmVyJzogJ3JldHVybj1yZXByZXNlbnRhdGlvbid9KTtcblxuICBwb3N0Z3Jlc3QudG9rZW4gPSB0b2tlbjtcblxuICBwb3N0Z3Jlc3QubG9hZGVyID0gZnVuY3Rpb24ob3B0aW9ucywgcmVxdWVzdEZ1bmN0aW9uLCBkZWZhdWx0U3RhdGUpe1xuICAgIHZhciBkZWZhdWx0U3RhdGUgPSBkZWZhdWx0U3RhdGUgfHwgZmFsc2U7XG4gICAgdmFyIGxvYWRlciA9IG0ucHJvcChkZWZhdWx0U3RhdGUpLCBkID0gbS5kZWZlcnJlZCgpO1xuICAgIGxvYWRlci5sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgIGxvYWRlcih0cnVlKTtcbiAgICAgIG0ucmVkcmF3KCk7XG4gICAgICBtLnN0YXJ0Q29tcHV0YXRpb24oKTtcbiAgICAgIHJlcXVlc3RGdW5jdGlvbihfLmV4dGVuZCh7fSwgb3B0aW9ucywge2JhY2tncm91bmQ6IHRydWV9KSkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgbG9hZGVyKGZhbHNlKTtcbiAgICAgICAgZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICBtLmVuZENvbXB1dGF0aW9uKCk7XG4gICAgICB9LCBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGxvYWRlcihmYWxzZSk7XG4gICAgICAgIGQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgbS5lbmRDb21wdXRhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZC5wcm9taXNlO1xuICAgIH07XG4gICAgcmV0dXJuIGxvYWRlcjtcbiAgfTtcblxuICBwb3N0Z3Jlc3QubG9hZGVyV2l0aFRva2VuID0gZnVuY3Rpb24ob3B0aW9ucywgZGVmYXVsdFN0YXRlKXtcbiAgICByZXR1cm4gcG9zdGdyZXN0LmxvYWRlcihvcHRpb25zLCBwb3N0Z3Jlc3QucmVxdWVzdFdpdGhUb2tlbiwgZGVmYXVsdFN0YXRlKTtcbiAgfTtcblxuICBwb3N0Z3Jlc3QuaW5pdCA9IGZ1bmN0aW9uKGFwaVByZWZpeCwgYXV0aGVudGljYXRpb25PcHRpb25zKXtcbiAgICBwb3N0Z3Jlc3QucmVxdWVzdCA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgICAgcmV0dXJuIG0ucmVxdWVzdChfLmV4dGVuZCh7fSwgb3B0aW9ucywge3VybDogYXBpUHJlZml4ICsgb3B0aW9ucy51cmx9KSk7XG4gICAgfTtcblxuICAgIHBvc3RncmVzdC5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgdmFyIGRlZmVycmVkID0gbS5kZWZlcnJlZCgpO1xuICAgICAgaWYgKHRva2VuKCkpe1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHt0b2tlbjogdG9rZW4oKX0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG0ucmVxdWVzdChhdXRoZW50aWNhdGlvbk9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgdG9rZW4oZGF0YS50b2tlbik7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7dG9rZW46IHRva2VuKCl9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZGF0YSl7IGRlZmVycmVkLnJlamVjdChkYXRhKTsgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgcG9zdGdyZXN0LnJlcXVlc3RXaXRoVG9rZW4gPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgIHZhciBhZGRBdXRob3JpemF0aW9uSGVhZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG1lcmdlQ29uZmlnKGFkZEhlYWRlcnMoeydBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4oKX0pLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbS5wb3N0Z3Jlc3QuYXV0aGVudGljYXRlKCkudGhlbihcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICByZXR1cm4gbS5wb3N0Z3Jlc3QucmVxdWVzdChfLmV4dGVuZCh7fSwgb3B0aW9ucywge2NvbmZpZzogYWRkQXV0aG9yaXphdGlvbkhlYWRlcigpfSkpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgIHJldHVybiBtLnBvc3RncmVzdC5yZXF1ZXN0KF8uZXh0ZW5kKHt9LCBvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHBvc3RncmVzdC5tb2RlbCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgdmFyIGFkZFBhZ2luYXRpb25IZWFkZXJzID0gZnVuY3Rpb24ocGFnZSwgcGFnZVNpemUpe1xuICAgICAgICB2YXIgdG9SYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgdmFyIGZyb20gPSAocGFnZSAtIDEpICogcGFnZVNpemUsXG4gICAgICAgICAgICB0byA9IGZyb20gKyBwYWdlU2l6ZSAtIDE7XG4gICAgICAgICAgcmV0dXJuIGZyb20gKyAnLScgKyB0bztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYWRkSGVhZGVycyh7J1JhbmdlLXVuaXQnOiAnaXRlbXMnLCAnUmFuZ2UnOiB0b1JhbmdlKCl9KTtcbiAgICAgIH0sXG5cbiAgICAgIHBhZ2VTaXplID0gbS5wcm9wKDEwKSxcblxuICAgICAgICBuYW1lT3B0aW9ucyA9IHt1cmw6ICcvJyArIG5hbWV9LFxuXG4gICAgICAgIGdldE9wdGlvbnMgPSBmdW5jdGlvbihkYXRhLCBwYWdlLCBwYWdlU2l6ZSwgb3B0aW9ucyl7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZCh7fSwgb3B0aW9ucywgbmFtZU9wdGlvbnMsIHttZXRob2Q6ICdHRVQnLCBkYXRhOiBkYXRhLCBjb25maWc6IG1lcmdlQ29uZmlnKGFkZFBhZ2luYXRpb25IZWFkZXJzKHBhZ2UsIHBhZ2VTaXplKSwgb3B0aW9ucyl9KTtcbiAgICAgIH0sXG5cbiAgICAgIHF1ZXJ5c3RyaW5nID0gZnVuY3Rpb24oZmlsdGVycywgb3B0aW9ucyl7XG4gICAgICAgIG9wdGlvbnMudXJsICs9ICc/JyArIG0ucm91dGUuYnVpbGRRdWVyeVN0cmluZyhmaWx0ZXJzKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9LFxuXG4gICAgICBvcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgICAgIHJldHVybiBtLnBvc3RncmVzdC5yZXF1ZXN0KF8uZXh0ZW5kKHt9LCBvcHRpb25zLCBuYW1lT3B0aW9ucywge21ldGhvZDogJ09QVElPTlMnfSkpO1xuICAgICAgfSxcblxuICAgICAgcG9zdE9wdGlvbnMgPSBmdW5jdGlvbihhdHRyaWJ1dGVzLCBvcHRpb25zKXtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgbmFtZU9wdGlvbnMsXG4gICAgICAgICAge21ldGhvZDogJ1BPU1QnLCBkYXRhOiBhdHRyaWJ1dGVzLCBjb25maWc6IG1lcmdlQ29uZmlnKGFkZFJlcHJlc2VudGF0aW9uSGVhZGVyLCBvcHRpb25zKX1cbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIGRlbGV0ZU9wdGlvbnMgPSBmdW5jdGlvbihmaWx0ZXJzLCBvcHRpb25zKXtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5c3RyaW5nKGZpbHRlcnMsIF8uZXh0ZW5kKHt9LCBvcHRpb25zLCBuYW1lT3B0aW9ucywge21ldGhvZDogJ0RFTEVURSd9KSk7XG4gICAgICB9LFxuXG4gICAgICBwYXRjaE9wdGlvbnMgPSBmdW5jdGlvbihmaWx0ZXJzLCBhdHRyaWJ1dGVzLCBvcHRpb25zKXtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5c3RyaW5nKFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgXy5leHRlbmQoXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBuYW1lT3B0aW9ucyxcbiAgICAgICAgICAgIHttZXRob2Q6ICdQQVRDSCcsIGRhdGE6IGF0dHJpYnV0ZXMsIGNvbmZpZzogbWVyZ2VDb25maWcoYWRkUmVwcmVzZW50YXRpb25IZWFkZXIsIG9wdGlvbnMpfSlcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldFBhZ2VPcHRpb25zID0gZnVuY3Rpb24oZGF0YSwgcGFnZSwgb3B0aW9ucyl7XG4gICAgICAgIHJldHVybiBnZXRPcHRpb25zKGRhdGEsIChwYWdlIHx8IDEpLCBwYWdlU2l6ZSgpLCBvcHRpb25zKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldFJvd09wdGlvbnMgPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKXtcbiAgICAgICAgcmV0dXJuIGdldE9wdGlvbnMoZGF0YSwgMSwgMSwgb3B0aW9ucyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgIGdldFBhZ2VPcHRpb25zOiAgIGdldFBhZ2VPcHRpb25zLFxuICAgICAgICBnZXRSb3dPcHRpb25zOiAgICBnZXRSb3dPcHRpb25zLFxuICAgICAgICBwYXRjaE9wdGlvbnM6ICAgICBwYXRjaE9wdGlvbnMsXG4gICAgICAgIHBvc3RPcHRpb25zOiAgICAgIHBvc3RPcHRpb25zLFxuICAgICAgICBkZWxldGVPcHRpb25zOiAgICBkZWxldGVPcHRpb25zLFxuICAgICAgICBnZXRQYWdlOiAgICAgICAgICBfLmNvbXBvc2UocG9zdGdyZXN0LnJlcXVlc3QsIGdldFBhZ2VPcHRpb25zKSxcbiAgICAgICAgZ2V0Um93OiAgICAgICAgICAgXy5jb21wb3NlKHBvc3RncmVzdC5yZXF1ZXN0LCBnZXRSb3dPcHRpb25zKSxcbiAgICAgICAgcGF0Y2g6ICAgICAgICAgICAgXy5jb21wb3NlKHBvc3RncmVzdC5yZXF1ZXN0LCBwYXRjaE9wdGlvbnMpLFxuICAgICAgICBwb3N0OiAgICAgICAgICAgICBfLmNvbXBvc2UocG9zdGdyZXN0LnJlcXVlc3QsIHBvc3RPcHRpb25zKSxcbiAgICAgICAgZGVsZXRlUmVxdWVzdDogICAgXy5jb21wb3NlKHBvc3RncmVzdC5yZXF1ZXN0LCBkZWxldGVPcHRpb25zKSxcbiAgICAgICAgZ2V0UGFnZVdpdGhUb2tlbjogXy5jb21wb3NlKHBvc3RncmVzdC5yZXF1ZXN0V2l0aFRva2VuLCBnZXRQYWdlT3B0aW9ucyksXG4gICAgICAgIGdldFJvd1dpdGhUb2tlbjogIF8uY29tcG9zZShwb3N0Z3Jlc3QucmVxdWVzdFdpdGhUb2tlbiwgZ2V0Um93T3B0aW9ucyksXG4gICAgICAgIHBhdGNoV2l0aFRva2VuOiAgIF8uY29tcG9zZShwb3N0Z3Jlc3QucmVxdWVzdFdpdGhUb2tlbiwgcGF0Y2hPcHRpb25zKSxcbiAgICAgICAgcG9zdFdpdGhUb2tlbjogICAgXy5jb21wb3NlKHBvc3RncmVzdC5yZXF1ZXN0V2l0aFRva2VuLCBwb3N0T3B0aW9ucyksXG4gICAgICAgIGRlbGV0ZVdpdGhUb2tlbjogIF8uY29tcG9zZShwb3N0Z3Jlc3QucmVxdWVzdFdpdGhUb2tlbiwgZGVsZXRlT3B0aW9ucyksXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBwb3N0Z3Jlc3Q7XG4gIH07XG5cbiAgbS5wb3N0Z3Jlc3QgPSBwb3N0Z3Jlc3Q7XG59KSk7XG4iLCIoZnVuY3Rpb24oZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS9Db21tb25KU1xuICAgIGZhY3RvcnkocmVxdWlyZSgnbWl0aHJpbCcpLCByZXF1aXJlKCd1bmRlcnNjb3JlJykpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGZhY3Rvcnkod2luZG93Lm0sIHdpbmRvdy5fKTtcbiAgfVxufShmdW5jdGlvbihtLCBfKSB7XG4gIG0ucG9zdGdyZXN0LmZpbHRlcnNWTSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZXMpe1xuICAgIHZhciBuZXdWTSA9IHt9LFxuICAgIGZpbHRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcHJvcCA9IG0ucHJvcCgnJyksXG4gICAgICBmaWx0ZXJQcm9wID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHByb3AodmFsdWUpO1xuICAgICAgICAgIHJldHVybiBuZXdWTTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCgpO1xuICAgICAgfTtcbiAgICAgIC8vIEp1c3Qgc28gd2UgY2FuIGhhdmUgYSBkZWZhdWx0IHRvX2ZpbHRlciBhbmQgYXZvaWQgaWYgXy5pc0Z1bmN0aW9uIGNhbGxzXG4gICAgICBmaWx0ZXJQcm9wLnRvRmlsdGVyID0gZnVuY3Rpb24oKXsgcmV0dXJuIChmaWx0ZXJQcm9wKCkgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpOyB9O1xuICAgICAgcmV0dXJuIGZpbHRlclByb3A7XG4gICAgfSxcblxuICAgIGdldHRlcnMgPSBfLnJlZHVjZShcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICBmdW5jdGlvbihtZW1vLCBvcGVyYXRvciwgYXR0cil7XG4gICAgICAgIC8vIFRoZSBvcGVyYXRvciBiZXR3ZWVuIGlzIGltcGxlbWVudGVkIHdpdGggdHdvIHByb3BlcnRpZXMsIG9uZSBmb3IgZ3JlYXRlciB0aGFuIHZhbHVlIGFuZCBhbm90aGVyIGZvciBsZXNzZXIgdGhhbiB2YWx1ZS5cbiAgICAgICAgLy8gQm90aCBwcm9wZXJ0aWVzIGFyZSBzZW50IGluIHRoZSBxdWV1cnlzdHJpbmcgd2l0aCB0aGUgc2FtZSBuYW1lLFxuICAgICAgICAvLyB0aGF0J3Mgd2h5IHdlIG5lZWQgdGhlIHNwZWNpYWwgY2FzZSBoZXJlLCBzbyB3ZSBjYW4gdXNlIGEgc2ltcGxlIG1hcCBhcyBhcmd1bWVudCB0byBmaWx0ZXJzVk0uXG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2JldHdlZW4nKXtcbiAgICAgICAgICBtZW1vW2F0dHJdID0ge2x0ZTogZmlsdGVyKCksIGd0ZTogZmlsdGVyKCl9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG1lbW9bYXR0cl0gPSBmaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sXG4gICAgICB7b3JkZXI6IG0ucHJvcCgpfVxuICAgICksXG5cbiAgICBwYXJhbWV0ZXJzV2l0aG91dE9yZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBfLnJlZHVjZShcbiAgICAgICAgZ2V0dGVycyxcbiAgICAgICAgZnVuY3Rpb24obWVtbywgZ2V0dGVyLCBhdHRyKXtcbiAgICAgICAgICBpZiAoYXR0ciAhPT0gJ29yZGVyJyl7XG4gICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBhdHRyaWJ1dGVzW2F0dHJdO1xuXG4gICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGdldHRlci50b0ZpbHRlcikgJiYgIWdldHRlci50b0ZpbHRlcigpKXsgcmV0dXJuIG1lbW87IH1cblxuICAgICAgICAgICAgLy8gQmVsbG93IHdlIHVzZSBkaWZmZXJlbnQgZm9ybWF0dGluZyBydWxlcyBmb3IgdGhlIHZhbHVlIGRlcGVuZGluZyBvbiB0aGUgb3BlcmF0b3JcbiAgICAgICAgICAgIC8vIFRoZXNlIHJ1bGVzIGFyZSB1c2VkIHJlZ2FyZGxlc3Mgb2YgdGhlIHRvRmlsdGVyIGZ1bmN0aW9uLFxuICAgICAgICAgICAgLy8gc28gdGhlIHVzZXIgY2FuIHVzZSBhIGN1c3RvbSB0b0ZpbHRlciB3aXRob3V0IGhhdmluZyB0byB3b3JyeSB3aXRoIGJhc2ljIGZpbHRlciBzeW50YXhcbiAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2lsaWtlJyB8fCBvcGVyYXRvciA9PT0gJ2xpa2UnKXtcbiAgICAgICAgICAgICAgbWVtb1thdHRyXSA9IG9wZXJhdG9yICsgJy4qJyArIGdldHRlci50b0ZpbHRlcigpICsgJyonO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3BlcmF0b3IgPT09ICdAQCcpIHtcbiAgICAgICAgICAgICAgbWVtb1thdHRyXSA9IG9wZXJhdG9yICsgJy4nICsgZ2V0dGVyLnRvRmlsdGVyKCkucmVwbGFjZSgvXFxzKy9nLCAnJicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3BlcmF0b3IgPT09ICdiZXR3ZWVuJykge1xuICAgICAgICAgICAgICBpZiAoIWdldHRlci5sdGUudG9GaWx0ZXIoKSAmJiAhZ2V0dGVyLmd0ZS50b0ZpbHRlcigpKXsgcmV0dXJuIG1lbW87IH1cbiAgICAgICAgICAgICAgbWVtb1thdHRyXSA9IFtdO1xuICAgICAgICAgICAgICBpZiAoZ2V0dGVyLmd0ZSgpKXtcbiAgICAgICAgICAgICAgICBtZW1vW2F0dHJdLnB1c2goJ2d0ZS4nICsgZ2V0dGVyLmd0ZS50b0ZpbHRlcigpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZ2V0dGVyLmx0ZSgpKXtcbiAgICAgICAgICAgICAgICBtZW1vW2F0dHJdLnB1c2goJ2x0ZS4nICsgZ2V0dGVyLmx0ZS50b0ZpbHRlcigpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1lbW9bYXR0cl0gPSBvcGVyYXRvciArICcuJyArIGdldHRlci50b0ZpbHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgfSxcblxuICAgIHBhcmFtZXRlcnMgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gVGhlIG9yZGVyIHBhcmFtZXRlcnMgaGF2ZSBhIHNwZWNpYWwgc3ludGF4IChqdXN0IGxpa2UgYW4gb3JkZXIgYnkgU1FMIGNsYXVzZSlcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZWdyaWZmcy9wb3N0Z3Jlc3Qvd2lraS9Sb3V0aW5nI2ZpbHRlcmluZy1hbmQtb3JkZXJpbmdcbiAgICAgIHZhciBvcmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBnZXR0ZXJzLm9yZGVyKCkgJiYgXy5yZWR1Y2UoXG4gICAgICAgICAgZ2V0dGVycy5vcmRlcigpLFxuICAgICAgICAgIGZ1bmN0aW9uKG1lbW8sIGRpcmVjdGlvbiwgYXR0cil7XG4gICAgICAgICAgICBtZW1vLnB1c2goYXR0ciArICcuJyArIGRpcmVjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtdXG4gICAgICAgICkuam9pbignLCcpO1xuICAgICAgfSxcblxuICAgICAgb3JkZXJQYXJhbWV0ZXIgPSBvcmRlcigpID8ge29yZGVyOiBvcmRlcigpfSA6IHt9O1xuXG4gICAgICByZXR1cm4gXy5leHRlbmQoe30sIG9yZGVyUGFyYW1ldGVyLCBwYXJhbWV0ZXJzV2l0aG91dE9yZGVyKCkpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiBfLmV4dGVuZChuZXdWTSwgZ2V0dGVycywge3BhcmFtZXRlcnM6IHBhcmFtZXRlcnMsIHBhcmFtZXRlcnNXaXRob3V0T3JkZXI6IHBhcmFtZXRlcnNXaXRob3V0T3JkZXJ9KTtcbiAgfTtcbn0pKTtcbiIsIihmdW5jdGlvbihmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgZmFjdG9yeShyZXF1aXJlKCdtaXRocmlsJyksIHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeSh3aW5kb3cubSwgd2luZG93Ll8pO1xuICB9XG59KGZ1bmN0aW9uKG0sIF8pIHtcbiAgbS5wb3N0Z3Jlc3QucGFnaW5hdGlvblZNID0gZnVuY3Rpb24ocGFnZVJlcXVlc3QsIG9yZGVyKXtcbiAgICB2YXIgY29sbGVjdGlvbiA9IG0ucHJvcChbXSksXG4gICAgICBkZWZhdWx0T3JkZXIgPSBvcmRlciB8fCAnaWQuZGVzYycsXG4gICAgICBmaWx0ZXJzID0gbS5wcm9wKHtvcmRlcjogZGVmYXVsdE9yZGVyfSksXG4gICAgICBpc0xvYWRpbmcgPSBtLnByb3AoZmFsc2UpLFxuICAgICAgcGFnZSA9IG0ucHJvcCgxKSxcbiAgICAgIHRvdGFsID0gbS5wcm9wKCksXG5cbiAgICAgIGZldGNoID0gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBkID0gbS5kZWZlcnJlZCgpLFxuICAgICAgICBnZXRUb3RhbCA9IGZ1bmN0aW9uKHhocikge1xuICAgICAgICBpZiAoIXhociB8fCB4aHIuc3RhdHVzID09PSAwKXtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe2hpbnQ6IG51bGwsIGRldGFpbHM6IG51bGwsIGNvZGU6IDAsIG1lc3NhZ2U6ICdDb25uZWN0aW9uIGVycm9yJ30pO1xuICAgICAgICB9XG4gICAgICAgIHZhciByYW5nZUhlYWRlciA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1SYW5nZScpO1xuICAgICAgICBpZiAoXy5pc1N0cmluZyhyYW5nZUhlYWRlcikgJiYgcmFuZ2VIZWFkZXIuc3BsaXQoJy8nKS5sZW5ndGggPiAxKXtcbiAgICAgICAgICB0b3RhbChwYXJzZUludChyYW5nZUhlYWRlci5zcGxpdCgnLycpWzFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCl7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtoaW50OiBudWxsLCBkZXRhaWxzOiBudWxsLCBjb2RlOiAwLCBtZXNzYWdlOiB4aHIucmVzcG9uc2VUZXh0fSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBwYWdlUmVxdWVzdChmaWx0ZXJzKCksIHBhZ2UoKSwge2JhY2tncm91bmQ6IHRydWUsIGV4dHJhY3Q6IGdldFRvdGFsfSkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgY29sbGVjdGlvbihfLnVuaW9uKGNvbGxlY3Rpb24oKSwgZGF0YSkpO1xuICAgICAgICBpc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBkLnJlc29sdmUoY29sbGVjdGlvbigpKTtcbiAgICAgICAgbS5yZWRyYXcoKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgaXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdG90YWwoMCk7XG4gICAgICAgIGQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgbS5yZWRyYXcoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgICB9LFxuXG4gICAgZmlyc3RQYWdlID0gZnVuY3Rpb24ocGFyYW1ldGVycyl7XG4gICAgICBmaWx0ZXJzKF8uZXh0ZW5kKHtvcmRlcjogZGVmYXVsdE9yZGVyfSwgcGFyYW1ldGVycykpO1xuICAgICAgY29sbGVjdGlvbihbXSk7XG4gICAgICBwYWdlKDEpO1xuICAgICAgcmV0dXJuIGZldGNoKCk7XG4gICAgfSxcblxuICAgIG5leHRQYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgIHBhZ2UocGFnZSgpICsgMSk7XG4gICAgICByZXR1cm4gZmV0Y2goKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgICBmaXJzdFBhZ2U6IGZpcnN0UGFnZSxcbiAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgbmV4dFBhZ2U6IG5leHRQYWdlLFxuICAgICAgdG90YWw6IHRvdGFsXG4gICAgfTtcbiAgfTtcblxufSkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = getParsingFlags(from);
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && typeof module !== 'undefined' &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (typeof values === 'undefined') {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function get_set__set (mom, unit, value) {
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    var regexes = {};

    function isFunction (sth) {
        // https://github.com/moment/moment/issues/2325
        return typeof sth === 'function' &&
            Object.prototype.toString.call(sth) === '[object Function]';
    }


    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  matchWord);
    addRegexToken('MMMM', matchWord);

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m) {
        return this._months[m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m) {
        return this._monthsShort[m.month()];
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
        ['YYYY-DDD', /\d{4}-\d{3}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
        ['HH:mm', /(T| )\d\d:\d\d/],
        ['HH', /(T| )\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = from_string__isoRegex.exec(string);

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0];
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    // match[6] should be 'T' or space
                    config._f += (match[6] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (string.match(matchOffset)) {
                config._f += 'Z';
            }
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear, janX = createUTCDate(year, 0, 1 + week1Jan), d = janX.getUTCDay(), dayOfYear;
        if (d < firstDayOfWeek) {
            d += 7;
        }

        weekday = weekday != null ? 1 * weekday : firstDayOfWeek;

        dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
        }
        return [now.getFullYear(), now.getMonth(), now.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             return other < this ? this : other;
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other;
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchOffset);
    addRegexToken('ZZ', matchOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(string) {
        var matches = ((string || '').match(matchOffset) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(input);
            }
            if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (typeof this._isDSTShifted !== 'undefined') {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return !this._isUTC;
    }

    function isUtcOffset () {
        return this._isUTC;
    }

    function isUtc () {
        return this._isUTC && this._offset === 0;
    }

    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = create__isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
        return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this > +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return inputMs < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this < +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return +this.clone().endOf(units) < inputMs;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var inputMs;
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this === +input;
        } else {
            inputMs = +local__createLocal(input);
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function diff (input, units, asFloat) {
        var that = cloneWithOffset(input, this),
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
            delta, output;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if ('function' === typeof Date.prototype.toISOString) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    // MOMENTS

    function getSetWeekYear (input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getSetISOWeekYear (input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    addFormatToken('Q', 0, 0, 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m) {
        return this._weekdays[m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName) {
        var i, mom, regex;

        this._weekdaysParse = this._weekdaysParse || [];

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            if (!this._weekdaysParse[i]) {
                mom = local__createLocal([2000, 1]).day(i);
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, function () {
        return this.hours() % 12 || 12;
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add          = add_subtract__add;
    momentPrototype__proto.calendar     = moment_calendar__calendar;
    momentPrototype__proto.clone        = clone;
    momentPrototype__proto.diff         = diff;
    momentPrototype__proto.endOf        = endOf;
    momentPrototype__proto.format       = format;
    momentPrototype__proto.from         = from;
    momentPrototype__proto.fromNow      = fromNow;
    momentPrototype__proto.to           = to;
    momentPrototype__proto.toNow        = toNow;
    momentPrototype__proto.get          = getSet;
    momentPrototype__proto.invalidAt    = invalidAt;
    momentPrototype__proto.isAfter      = isAfter;
    momentPrototype__proto.isBefore     = isBefore;
    momentPrototype__proto.isBetween    = isBetween;
    momentPrototype__proto.isSame       = isSame;
    momentPrototype__proto.isValid      = moment_valid__isValid;
    momentPrototype__proto.lang         = lang;
    momentPrototype__proto.locale       = locale;
    momentPrototype__proto.localeData   = localeData;
    momentPrototype__proto.max          = prototypeMax;
    momentPrototype__proto.min          = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set          = getSet;
    momentPrototype__proto.startOf      = startOf;
    momentPrototype__proto.subtract     = add_subtract__subtract;
    momentPrototype__proto.toArray      = toArray;
    momentPrototype__proto.toObject     = toObject;
    momentPrototype__proto.toDate       = toDate;
    momentPrototype__proto.toISOString  = moment_format__toISOString;
    momentPrototype__proto.toJSON       = moment_format__toISOString;
    momentPrototype__proto.toString     = toString;
    momentPrototype__proto.unix         = unix;
    momentPrototype__proto.valueOf      = to_type__valueOf;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return typeof output === 'function' ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (typeof output === 'function') ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (typeof prop === 'function') {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months       =        localeMonths;
    prototype__proto._months      = defaultLocaleMonths;
    prototype__proto.monthsShort  =        localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse  =        localeMonthsParse;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes === 1          && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   === 1          && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    === 1          && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  === 1          && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   === 1          && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.10.6';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details. */

/* Original work by "lehelk" http://lehelk.com/2011/05/06/script-to-remove-diacritics/
   depending of the usecase you may want to add the uppercase letters from this website to the alphabet and change the regex flags */


(function(){
  var alphabet = { a:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/ig,
    aa:/[\uA733]/ig,
    ae:/[\u00E6\u01FD\u01E3]/ig,
    ao:/[\uA735]/ig,
    au:/[\uA737]/ig,
    av:/[\uA739\uA73B]/ig,
    ay:/[\uA73D]/ig,
    b:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/ig,
    c:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/ig,
    d:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/ig,
    dz:/[\u01F3\u01C6]/ig,
    e:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/ig,
    f:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/ig,
    g:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/ig,
    h:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/ig,
    hv:/[\u0195]/ig,
    i:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/ig,
    j:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/ig,
    k:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/ig,
    l:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/ig,
    lj:/[\u01C9]/ig,
    m:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/ig,
    n:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/ig,
    nj:/[\u01CC]/ig,
    o:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/ig,
    oi:/[\u01A3]/ig,
    ou:/[\u0223]/ig,
    oo:/[\uA74F]/ig,
    oe:/[\u0153]/ig,
    p:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/ig,
    q:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/ig,
    r:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/ig,
    s:/[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/ig,
    ss:/[\u00DF\u1E9E]/ig,
    t:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/ig,
    tz:/[\uA729]/ig,
    u:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/ig,
    v:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/ig,
    vy:/[\uA761]/ig,
    w:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/ig,
    x:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/ig,
    y:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/ig,
    z:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/ig,
    '':/[\u0300\u0301\u0302\u0303\u0308]/ig
  };
  replaceDiacritics = function(str) {
    for (var letter in alphabet) {
      str = str.replace(alphabet[letter], letter);
    }
    return str;
  };
}());
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */



(function(){

	"use strict";

	//Declare root variable - window in the browser, global on the server
	var root = this,
		previous = root.Chart;

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context){
		var chart = this;
		this.canvas = context.canvas;

		this.ctx = context;

		//Variables global to the chart
		var computeDimension = function(element,dimension)
		{
			if (element['offset'+dimension])
			{
				return element['offset'+dimension];
			}
			else
			{
				return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
			}
		}

		var width = this.width = computeDimension(context.canvas,'Width');
		var height = this.height = computeDimension(context.canvas,'Height');

		// Firefox requires this to work correctly
		context.canvas.width  = width;
		context.canvas.height = height;

		var width = this.width = context.canvas.width;
		var height = this.height = context.canvas.height;
		this.aspectRatio = this.width / this.height;
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(this);

		return this;
	};
	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			// Boolean - Whether to animate the chart
			animation: true,

			// Number - Number of animation steps
			animationSteps: 60,

			// String - Animation easing effect
			animationEasing: "easeOutQuart",

			// Boolean - If we should show the scale at all
			showScale: true,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: false,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: null,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: null,
			// Number - The scale starting value
			scaleStartValue: null,

			// String - Colour of the scale line
			scaleLineColor: "rgba(0,0,0,.1)",

			// Number - Pixel width of the scale line
			scaleLineWidth: 1,

			// Boolean - Whether to show labels on the scale
			scaleShowLabels: true,

			// Interpolated JS string - can access value
			scaleLabel: "<%=value%>",

			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
			scaleIntegersOnly: true,

			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero: false,

			// String - Scale label font declaration for the scale label
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Scale label font size in pixels
			scaleFontSize: 12,

			// String - Scale label font weight style
			scaleFontStyle: "normal",

			// String - Scale label font colour
			scaleFontColor: "#666",

			// Boolean - whether or not the chart should be responsive and resize when the browser does.
			responsive: false,

			// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			maintainAspectRatio: true,

			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
			showTooltips: true,

			// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
			customTooltips: false,

			// Array - Array of string names to attach tooltip events
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

			// String - Tooltip background colour
			tooltipFillColor: "rgba(0,0,0,0.8)",

			// String - Tooltip label font declaration for the scale label
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip label font size in pixels
			tooltipFontSize: 14,

			// String - Tooltip font weight style
			tooltipFontStyle: "normal",

			// String - Tooltip label font colour
			tooltipFontColor: "#fff",

			// String - Tooltip title font declaration for the scale label
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip title font size in pixels
			tooltipTitleFontSize: 14,

			// String - Tooltip title font weight style
			tooltipTitleFontStyle: "bold",

			// String - Tooltip title font colour
			tooltipTitleFontColor: "#fff",

			// Number - pixel width of padding around tooltip text
			tooltipYPadding: 6,

			// Number - pixel width of padding around tooltip text
			tooltipXPadding: 6,

			// Number - Size of the caret on the tooltip
			tooltipCaretSize: 8,

			// Number - Pixel radius of the tooltip border
			tooltipCornerRadius: 6,

			// Number - Pixel offset from point x to tooltip edge
			tooltipXOffset: 10,

			// String - Template string for single tooltips
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			// String - Template string for single tooltips
			multiTooltipTemplate: "<%= value %>",

			// String - Colour behind the legend colour block
			multiTooltipKeyBackground: '#fff',

			// Function - Will fire on animation progression.
			onAnimationProgress: function(){},

			// Function - Will fire on animation completion.
			onAnimationComplete: function(){}

		}
	};

	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

		//-- Basic js utility methods
	var each = helpers.each = function(loopable,callback,self){
			var additionalArgs = Array.prototype.slice.call(arguments, 3);
			// Check to see if null or undefined firstly.
			if (loopable){
				if (loopable.length === +loopable.length){
					var i;
					for (i=0; i<loopable.length; i++){
						callback.apply(self,[loopable[i], i].concat(additionalArgs));
					}
				}
				else{
					for (var item in loopable){
						callback.apply(self,[loopable[item],item].concat(additionalArgs));
					}
				}
			}
		},
		clone = helpers.clone = function(obj){
			var objClone = {};
			each(obj,function(value,key){
				if (obj.hasOwnProperty(key)) objClone[key] = value;
			});
			return objClone;
		},
		extend = helpers.extend = function(base){
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
				each(extensionObject,function(value,key){
					if (extensionObject.hasOwnProperty(key)) base[key] = value;
				});
			});
			return base;
		},
		merge = helpers.merge = function(base,master){
			//Merge properties in left object over to a shallow clone of object right.
			var args = Array.prototype.slice.call(arguments,0);
			args.unshift({});
			return extend.apply(null, args);
		},
		indexOf = helpers.indexOf = function(arrayToSearch, item){
			if (Array.prototype.indexOf) {
				return arrayToSearch.indexOf(item);
			}
			else{
				for (var i = 0; i < arrayToSearch.length; i++) {
					if (arrayToSearch[i] === item) return i;
				}
				return -1;
			}
		},
		where = helpers.where = function(collection, filterCallback){
			var filtered = [];

			helpers.each(collection, function(item){
				if (filterCallback(item)){
					filtered.push(item);
				}
			});

			return filtered;
		},
		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to start of the array
			if (!startIndex){
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to end of the array
			if (!startIndex){
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		inherits = helpers.inherits = function(extensions){
			//Basic javascript inheritance based on the model created in Backbone.js
			var parent = this;
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

			var Surrogate = function(){ this.constructor = ChartElement;};
			Surrogate.prototype = parent.prototype;
			ChartElement.prototype = new Surrogate();

			ChartElement.extend = inherits;

			if (extensions) extend(ChartElement.prototype, extensions);

			ChartElement.__super__ = parent.prototype;

			return ChartElement;
		},
		noop = helpers.noop = function(){},
		uid = helpers.uid = (function(){
			var id=0;
			return function(){
				return "chart-" + id++;
			};
		})(),
		warn = helpers.warn = function(str){
			//Method for warning of errors
			if (window.console && typeof window.console.warn == "function") console.warn(str);
		},
		amd = helpers.amd = (typeof define == 'function' && define.amd),
		//-- Math methods
		isNumber = helpers.isNumber = function(n){
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		max = helpers.max = function(array){
			return Math.max.apply( Math, array );
		},
		min = helpers.min = function(array){
			return Math.min.apply( Math, array );
		},
		cap = helpers.cap = function(valueToCap,maxValue,minValue){
			if(isNumber(maxValue)) {
				if( valueToCap > maxValue ) {
					return maxValue;
				}
			}
			else if(isNumber(minValue)){
				if ( valueToCap < minValue ){
					return minValue;
				}
			}
			return valueToCap;
		},
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
			if (num%1!==0 && isNumber(num)){
				return num.toString().split(".")[1].length;
			}
			else {
				return 0;
			}
		},
		toRadians = helpers.radians = function(degrees){
			return degrees * (Math.PI/180);
		},
		// Gets the angle from vertical upright to the point about a centre.
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

			//If the segment is in the top left quadrant, we need to add another rotation to the angle
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
				angle += Math.PI*2;
			}

			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		},
		aliasPixel = helpers.aliasPixel = function(pixelWidth){
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		},
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
			//Props to Rob Spencer at scaled innovation for his post on splining between points
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
				fb=t*d12/(d01+d12);
			return {
				inner : {
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
				},
				outer : {
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
				}
			};
		},
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
			return Math.floor(Math.log(val) / Math.LN10);
		},
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

			//Set a minimum step of two - a point at the top of the graph, and a point at the base
			var minSteps = 2,
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
				skipFitting = (minSteps >= maxSteps);

			var maxValue = max(valuesArray),
				minValue = min(valuesArray);

			// We need some degree of seperation here to calculate the scales if all the values are the same
			// Adding/minusing 0.5 will give us a range of 1.
			if (maxValue === minValue){
				maxValue += 0.5;
				// So we don't end up with a graph with a negative start value if we've said always start from zero
				if (minValue >= 0.5 && !startFromZero){
					minValue -= 0.5;
				}
				else{
					// Make up a whole number above the values
					maxValue += 0.5;
				}
			}

			var	valueRange = Math.abs(maxValue - minValue),
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,
				stepValue = Math.pow(10, rangeOrderOfMagnitude),
				numberOfSteps = Math.round(graphRange / stepValue);

			//If we have more space on the graph we'll use it to give more definition to the data
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
				if(numberOfSteps > maxSteps){
					stepValue *=2;
					numberOfSteps = Math.round(graphRange/stepValue);
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
					if (numberOfSteps % 1 !== 0){
						skipFitting = true;
					}
				}
				//We can fit in double the amount of scale points on the scale
				else{
					//If user has declared ints only, and the step value isn't a decimal
					if (integersOnly && rangeOrderOfMagnitude >= 0){
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}
						//If it would make it a float break out of the loop
						else{
							break;
						}
					}
					//If the scale doesn't have to be an int, make the scale more granular anyway.
					else{
						stepValue /=2;
						numberOfSteps = Math.round(graphRange/stepValue);
					}

				}
			}

			if (skipFitting){
				numberOfSteps = minSteps;
				stepValue = graphRange / numberOfSteps;
			}

			return {
				steps : numberOfSteps,
				stepValue : stepValue,
				min : graphMin,
				max	: graphMin + (numberOfSteps * stepValue)
			};

		},
		/* jshint ignore:start */
		// Blows up jshint errors based on the new Function constructor
		//Templating methods
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
		template = helpers.template = function(templateString, valuesObject){

			// If templateString is function rather than string-template - call the function for valuesObject

			if(templateString instanceof Function){
			 	return templateString(valuesObject);
		 	}

			var cache = {};
			function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
				cache[str] = cache[str] :

				// Generate a reusable function that will serve as a template
				// generator (and which will be cached).
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +

					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +

					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'") +
					"');}return p.join('');"
				);

				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
			return tmpl(templateString,valuesObject);
		},
		/* jshint ignore:end */
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
			var labelsArray = new Array(numberOfSteps);
			if (labelTemplateString){
				each(labelsArray,function(val,index){
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
				});
			}
			return labelsArray;
		},
		//--Animation methods
		//Easing functions adapted from Robert Penner's easing equations
		//http://www.robertpenner.com/easing/
		easingEffects = helpers.easingEffects = {
			linear: function (t) {
				return t;
			},
			easeInQuad: function (t) {
				return t * t;
			},
			easeOutQuad: function (t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function (t) {
				return t * t * t;
			},
			easeOutCubic: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function (t) {
				return t * t * t * t;
			},
			easeOutQuart: function (t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function (t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function (t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function (t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function (t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function (t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function (t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function (t) {
				if (t === 0) return 0;
				if (t === 1) return 1;
				if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function (t) {
				if (t >= 1) return t;
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function (t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function (t) {
				if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1 / 2) == 2) return 1;
				if (!p) p = 1 * (0.3 * 1.5);
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function (t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function (t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function (t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function (t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function (t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				} else {
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
				}
			},
			easeInOutBounce: function (t) {
				if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		},
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestAnimFrame = helpers.requestAnimFrame = (function(){
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})(),
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function(callback) {
					return window.clearTimeout(callback, 1000 / 60);
				};
		})(),
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

			var currentStep = 0,
				easingFunction = easingEffects[easingString] || easingEffects.linear;

			var animationFrame = function(){
				currentStep++;
				var stepDecimal = currentStep/totalSteps;
				var easeDecimal = easingFunction(stepDecimal);

				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
				onProgress.call(chartInstance,easeDecimal,stepDecimal);
				if (currentStep < totalSteps){
					chartInstance.animationFrame = requestAnimFrame(animationFrame);
				} else{
					onComplete.apply(chartInstance);
				}
			};
			requestAnimFrame(animationFrame);
		},
		//-- DOM methods
		getRelativePosition = helpers.getRelativePosition = function(evt){
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();

			if (e.touches){
				mouseX = e.touches[0].clientX - boundingRect.left;
				mouseY = e.touches[0].clientY - boundingRect.top;

			}
			else{
				mouseX = e.clientX - boundingRect.left;
				mouseY = e.clientY - boundingRect.top;
			}

			return {
				x : mouseX,
				y : mouseY
			};

		},
		addEvent = helpers.addEvent = function(node,eventType,method){
			if (node.addEventListener){
				node.addEventListener(eventType,method);
			} else if (node.attachEvent){
				node.attachEvent("on"+eventType, method);
			} else {
				node["on"+eventType] = method;
			}
		},
		removeEvent = helpers.removeEvent = function(node, eventType, handler){
			if (node.removeEventListener){
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent){
				node.detachEvent("on"+eventType,handler);
			} else{
				node["on" + eventType] = noop;
			}
		},
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
			// Create the events object if it's not already present
			if (!chartInstance.events) chartInstance.events = {};

			each(arrayOfEvents,function(eventName){
				chartInstance.events[eventName] = function(){
					handler.apply(chartInstance, arguments);
				};
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
			});
		},
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
			each(arrayOfEvents, function(handler,eventName){
				removeEvent(chartInstance.chart.canvas, eventName, handler);
			});
		},
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientWidth;
		},
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientHeight;
		},
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
		retinaScale = helpers.retinaScale = function(chart){
			var ctx = chart.ctx,
				width = chart.canvas.width,
				height = chart.canvas.height;

			if (window.devicePixelRatio) {
				ctx.canvas.style.width = width + "px";
				ctx.canvas.style.height = height + "px";
				ctx.canvas.height = height * window.devicePixelRatio;
				ctx.canvas.width = width * window.devicePixelRatio;
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		},
		//-- Canvas methods
		clear = helpers.clear = function(chart){
			chart.ctx.clearRect(0,0,chart.width,chart.height);
		},
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
			return fontStyle + " " + pixelSize+"px " + fontFamily;
		},
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
			ctx.font = font;
			var longest = 0;
			each(arrayOfStrings,function(string){
				var textWidth = ctx.measureText(string).width;
				longest = (textWidth > longest) ? textWidth : longest;
			});
			return longest;
		},
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};


	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	Chart.Type = function(data,options,chart){
		this.options = options;
		this.chart = chart;
		this.id = uid();
		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		// Initialize is always called when a chart type is created
		// By default it is a no op, but it should be extended
		if (options.responsive){
			this.resize();
		}
		this.initialize.call(this,data);
	};

	//Core methods that'll be a part of every chart type
	extend(Chart.Type.prototype,{
		initialize : function(){return this;},
		clear : function(){
			clear(this.chart);
			return this;
		},
		stop : function(){
			// Stops any current animation loop occuring
			cancelAnimFrame(this.animationFrame);
			return this;
		},
		resize : function(callback){
			this.stop();
			var canvas = this.chart.canvas,
				newWidth = getMaximumWidth(this.chart.canvas),
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

			canvas.width = this.chart.width = newWidth;
			canvas.height = this.chart.height = newHeight;

			retinaScale(this.chart);

			if (typeof callback === "function"){
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return this;
		},
		reflow : noop,
		render : function(reflow){
			if (reflow){
				this.reflow();
			}
			if (this.options.animation && !reflow){
				helpers.animationLoop(
					this.draw,
					this.options.animationSteps,
					this.options.animationEasing,
					this.options.onAnimationProgress,
					this.options.onAnimationComplete,
					this
				);
			}
			else{
				this.draw();
				this.options.onAnimationComplete.call(this);
			}
			return this;
		},
		generateLegend : function(){
			return template(this.options.legendTemplate,this);
		},
		destroy : function(){
			this.clear();
			unbindEvents(this, this.events);
			var canvas = this.chart.canvas;

			// Reset canvas height/width attributes starts a fresh with the canvas context
			canvas.width = this.chart.width;
			canvas.height = this.chart.height;

			// < IE9 doesn't support removeProperty
			if (canvas.style.removeProperty) {
				canvas.style.removeProperty('width');
				canvas.style.removeProperty('height');
			} else {
				canvas.style.removeAttribute('width');
				canvas.style.removeAttribute('height');
			}

			delete Chart.instances[this.id];
		},
		showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if(this.options.customTooltips){
				this.options.customTooltips(false);
			}
			if (ChartElements.length > 0){
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
				if (this.datasets && this.datasets.length > 1) {
					var dataArray,
						dataIndex;

					for (var i = this.datasets.length - 1; i >= 0; i--) {
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
						dataIndex = indexOf(dataArray, ChartElements[0]);
						if (dataIndex !== -1){
							break;
						}
					}
					var tooltipLabels = [],
						tooltipColors = [],
						medianPosition = (function(index) {

							// Get all the points at that particular index
							var Elements = [],
								dataCollection,
								xPositions = [],
								yPositions = [],
								xMax,
								yMax,
								xMin,
								yMin;
							helpers.each(this.datasets, function(dataset){
								dataCollection = dataset.points || dataset.bars || dataset.segments;
								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
									Elements.push(dataCollection[dataIndex]);
								}
							});

							helpers.each(Elements, function(element) {
								xPositions.push(element.x);
								yPositions.push(element.y);


								//Include any colour information about the element
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
								tooltipColors.push({
									fill: element._saved.fillColor || element.fillColor,
									stroke: element._saved.strokeColor || element.strokeColor
								});

							}, this);

							yMin = min(yPositions);
							yMax = max(yPositions);

							xMin = min(xPositions);
							xMax = max(xPositions);

							return {
								x: (xMin > this.chart.width/2) ? xMin : xMax,
								y: (yMin + yMax)/2
							};
						}).call(this, dataIndex);

					new Chart.MultiTooltip({
						x: medianPosition.x,
						y: medianPosition.y,
						xPadding: this.options.tooltipXPadding,
						yPadding: this.options.tooltipYPadding,
						xOffset: this.options.tooltipXOffset,
						fillColor: this.options.tooltipFillColor,
						textColor: this.options.tooltipFontColor,
						fontFamily: this.options.tooltipFontFamily,
						fontStyle: this.options.tooltipFontStyle,
						fontSize: this.options.tooltipFontSize,
						titleTextColor: this.options.tooltipTitleFontColor,
						titleFontFamily: this.options.tooltipTitleFontFamily,
						titleFontStyle: this.options.tooltipTitleFontStyle,
						titleFontSize: this.options.tooltipTitleFontSize,
						cornerRadius: this.options.tooltipCornerRadius,
						labels: tooltipLabels,
						legendColors: tooltipColors,
						legendColorBackground : this.options.multiTooltipKeyBackground,
						title: ChartElements[0].label,
						chart: this.chart,
						ctx: this.chart.ctx,
						custom: this.options.customTooltips
					}).draw();

				} else {
					each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: template(this.options.tooltipTemplate, Element),
							chart: this.chart,
							custom: this.options.customTooltips
						}).draw();
					}, this);
				}
			}
			return this;
		},
		toBase64Image : function(){
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		}
	});

	Chart.Type.extend = function(extensions){

		var parent = this;

		var ChartType = function(){
			return parent.apply(this,arguments);
		};

		//Copy the prototype object of the this class
		ChartType.prototype = clone(parent.prototype);
		//Now overwrite some of the properties in the base class with the new extensions
		extend(ChartType.prototype, extensions);

		ChartType.extend = Chart.Type.extend;

		if (extensions.name || parent.prototype.name){

			var chartName = extensions.name || parent.prototype.name;
			//Assign any potential default values of the new chart type

			//If none are defined, we'll use a clone of the chart type this is being extended from.
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
			//doesn't define some defaults of their own.

			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

			Chart.types[chartName] = ChartType;

			//Register this new chart type in the Chart prototype
			Chart.prototype[chartName] = function(data,options){
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
				return new ChartType(data,config,this);
			};
		} else{
			warn("Name not provided for this chart, so it hasn't been registered");
		}
		return parent;
	};

	Chart.Element = function(configuration){
		extend(this,configuration);
		this.initialize.apply(this,arguments);
		this.save();
	};
	extend(Chart.Element.prototype,{
		initialize : function(){},
		restore : function(props){
			if (!props){
				extend(this,this._saved);
			} else {
				each(props,function(key){
					this[key] = this._saved[key];
				},this);
			}
			return this;
		},
		save : function(){
			this._saved = clone(this);
			delete this._saved._saved;
			return this;
		},
		update : function(newProps){
			each(newProps,function(value,key){
				this._saved[key] = this[key];
				this[key] = value;
			},this);
			return this;
		},
		transition : function(props,ease){
			each(props,function(value,key){
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
			},this);
			return this;
		},
		tooltipPosition : function(){
			return {
				x : this.x,
				y : this.y
			};
		},
		hasValue: function(){
			return isNumber(this.value);
		}
	});

	Chart.Element.extend = inherits;


	Chart.Point = Chart.Element.extend({
		display: true,
		inRange: function(chartX,chartY){
			var hitDetectionRange = this.hitDetectionRadius + this.radius;
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
		},
		draw : function(){
			if (this.display){
				var ctx = this.ctx;
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				ctx.closePath();

				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.stroke();
			}


			//Quick debug for bezier curve splining
			//Highlights control points and the line between them.
			//Handy for dev - stripped in the min version.

			// ctx.save();
			// ctx.fillStyle = "black";
			// ctx.strokeStyle = "black"
			// ctx.beginPath();
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.beginPath();
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
			// ctx.lineTo(this.x, this.y);
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
			// ctx.stroke();

			// ctx.restore();



		}
	});

	Chart.Arc = Chart.Element.extend({
		inRange : function(chartX,chartY){

			var pointRelativePosition = helpers.getAngleFromPoint(this, {
				x: chartX,
				y: chartY
			});

			//Check if within the range of the open/close angle
			var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
				withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

			return (betweenAngles && withinRadius);
			//Ensure within the outside of the arc centre, but inside arc outer
		},
		tooltipPosition : function(){
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw : function(animationPercent){

			var easingDecimal = animationPercent || 1;

			var ctx = this.ctx;

			ctx.beginPath();

			ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

			ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

			ctx.closePath();
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			ctx.fillStyle = this.fillColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (this.showStroke){
				ctx.stroke();
			}
		}
	});

	Chart.Rectangle = Chart.Element.extend({
		draw : function(){
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.y),
				halfStroke = this.strokeWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (this.showStroke){
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			// It'd be nice to keep this class totally generic to any rectangle
			// and simply specify which border to miss out.
			ctx.moveTo(leftX, this.base);
			ctx.lineTo(leftX, top);
			ctx.lineTo(rightX, top);
			ctx.lineTo(rightX, this.base);
			ctx.fill();
			if (this.showStroke){
				ctx.stroke();
			}
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}
	});

	Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = this.caretPadding = 2;

			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
				tooltipRectHeight = this.fontSize + 2*this.yPadding,
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				switch(this.yAlign)
				{
				case "above":
					//Draw a caret above the x/y
					ctx.beginPath();
					ctx.moveTo(this.x,this.y - caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.closePath();
					ctx.fill();
					break;
				case "below":
					tooltipY = this.y + caretPadding + this.caretHeight;
					//Draw a caret below the x/y
					ctx.beginPath();
					ctx.moveTo(this.x, this.y + caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.closePath();
					ctx.fill();
					break;
				}

				switch(this.xAlign)
				{
				case "left":
					tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
					break;
				case "right":
					tooltipX = this.x - (this.cornerRadius + this.caretHeight);
					break;
				}

				drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

				ctx.fill();

				ctx.fillStyle = this.textColor;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
			}
		}
	});

	Chart.MultiTooltip = Chart.Element.extend({
		initialize : function(){
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

			this.ctx.font = this.titleFont;

			var titleWidth = this.ctx.measureText(this.title).width,
				//Label has a legend square as well so account for this.
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
				longestTextWidth = max([labelWidth,titleWidth]);

			this.width = longestTextWidth + (this.xPadding*2);


			var halfHeight = this.height/2;

			//Check to ensure the height will fit on the canvas
			if (this.y - halfHeight < 0 ){
				this.y = halfHeight;
			} else if (this.y + halfHeight > this.chart.height){
				this.y = this.chart.height - halfHeight;
			}

			//Decide whether to align left or right based on position on canvas
			if (this.x > this.chart.width/2){
				this.x -= this.xOffset + this.width;
			} else {
				this.x += this.xOffset;
			}


		},
		getLineHeight : function(index){
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
				afterTitleIndex = index-1;

			//If the index is zero, we're getting the title
			if (index === 0){
				return baseLineHeight + this.titleFontSize/2;
			} else{
				return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
			}

		},
		draw : function(){
			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
				var ctx = this.ctx;
				ctx.fillStyle = this.fillColor;
				ctx.fill();
				ctx.closePath();

				ctx.textAlign = "left";
				ctx.textBaseline = "middle";
				ctx.fillStyle = this.titleTextColor;
				ctx.font = this.titleFont;

				ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

				ctx.font = this.font;
				helpers.each(this.labels,function(label,index){
					ctx.fillStyle = this.textColor;
					ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

					//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
					//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
					//Instead we'll make a white filled block to put the legendColour palette over.

					ctx.fillStyle = this.legendColorBackground;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

					ctx.fillStyle = this.legendColors[index].fill;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


				},this);
			}
		}
	});

	Chart.Scale = Chart.Element.extend({
		initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
		},
		addXLabel : function(label){
			this.xLabels.push(label);
			this.valuesCount++;
			this.fit();
		},
		removeXLabel : function(){
			this.xLabels.shift();
			this.valuesCount--;
			this.fit();
		},
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;

			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
			this.calculateYRange(cachedHeight);

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();

			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.calculateXLabelRotation();
				}
			}

		},
		calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;

			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;


			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: noop,
		drawingArea: function(){
			return this.startPoint - this.endPoint;
		},
		calculateY : function(value){
			var scalingFactor = this.drawingArea() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
		calculateX : function(index){
			var isRotated = (this.xLabelRotation > 0),
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
				valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

			if (this.offsetGridLines){
				valueOffset += (valueWidth/2);
			}

			return Math.round(valueOffset);
		},
		update : function(newProps){
			helpers.extend(this, newProps);
			this.fit();
		},
		draw : function(){
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
				xStart = Math.round(this.xScalePaddingLeft);
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				each(this.yLabels,function(labelString,index){
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter),
						drawHorizontalLine = this.showHorizontalLines;

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}

					// This is X axis, so draw it
					if (index === 0 && !drawHorizontalLine){
						drawHorizontalLine = true;
					}

					if (drawHorizontalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					if(drawHorizontalLine){
						ctx.moveTo(xStart, linePositionY);
						ctx.lineTo(this.width, linePositionY);
						ctx.stroke();
						ctx.closePath();
					}

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				each(this.xLabels,function(label,index){
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
						// Check to see if line/bar here and decide where to place the line
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
						isRotated = (this.xLabelRotation > 0),
						drawVerticalLine = this.showVerticalLines;

					// This is Y axis, so draw it
					if (index === 0 && !drawVerticalLine){
						drawVerticalLine = true;
					}

					if (drawVerticalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					if (drawVerticalLine){
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.startPoint - 3);
						ctx.stroke();
						ctx.closePath();
					}


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(toRadians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);

			}
		}

	});

	Chart.RadialScale = Chart.Element.extend({
		initialize: function(){
			this.size = min([this.height, this.width]);
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
		},
		calculateCenterOffset: function(value){
			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);

			return (value - this.min) * scalingFactor;
		},
		update : function(){
			if (!this.lineArc){
				this.setScaleSize();
			} else {
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			}
			this.buildYLabels();
		},
		buildYLabels: function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
		},
		getCircumference : function(){
			return ((Math.PI*2) / this.valuesCount);
		},
		setScaleSize: function(){
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */


			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
			for (i=0;i<this.valuesCount;i++){
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
				if (i === 0 || i === this.valuesCount/2){
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth/2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				}
				else if (i < this.valuesCount/2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				}
				else if (i > this.valuesCount/2){
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;

			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

		},
		setCenterPoint: function(leftMovement, rightMovement){

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = (maxLeft + maxRight)/2;
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = (this.height/2);
		},

		getIndexAngle : function(index){
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI/2);
		},
		getPointPosition : function(index, distanceFromCenter){
			var thisAngle = this.getIndexAngle(index);
			return {
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		draw: function(){
			if (this.display){
				var ctx = this.ctx;
				each(this.yLabels, function(label, index){
					// Don't draw a centre value
					if (index > 0){
						var yCenterOffset = index * (this.drawingArea/this.steps),
							yHeight = this.yCenter - yCenterOffset,
							pointPosition;

						// Draw circular lines around the scale
						if (this.lineWidth > 0){
							ctx.strokeStyle = this.lineColor;
							ctx.lineWidth = this.lineWidth;

							if(this.lineArc){
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
								ctx.closePath();
								ctx.stroke();
							} else{
								ctx.beginPath();
								for (var i=0;i<this.valuesCount;i++)
								{
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
									if (i === 0){
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}
						if(this.showLabels){
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
							if (this.showLabelBackdrop){
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth/2 - this.backdropPaddingX,
									yHeight - this.fontSize/2 - this.backdropPaddingY,
									labelWidth + this.backdropPaddingX*2,
									this.fontSize + this.backdropPaddingY*2
								);
							}
							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = this.fontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.lineArc){
					ctx.lineWidth = this.angleLineWidth;
					ctx.strokeStyle = this.angleLineColor;
					for (var i = this.valuesCount - 1; i >= 0; i--) {
						if (this.angleLineWidth > 0){
							var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
						ctx.fillStyle = this.pointLabelFontColor;

						var labelsCount = this.labels.length,
							halfLabelsCount = this.labels.length/2,
							quarterLabelsCount = halfLabelsCount/2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0){
							ctx.textAlign = 'center';
						} else if(i === halfLabelsCount){
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount){
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter){
							ctx.textBaseline = 'middle';
						} else if (upperHalf){
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});

	// Attach global event to resize each chart instance when the browser resizes
	helpers.addEvent(window, "resize", (function(){
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				each(Chart.instances,function(instance){
					// If the responsive flag is set in the chart instance config
					// Cascade the resize event down to the chart.
					if (instance.options.responsive){
						instance.resize(instance.render, true);
					}
				});
			}, 50);
		};
	})());


	if (amd) {
		define(function(){
			return Chart;
		});
	} else if (typeof module === 'object' && module.exports) {
		module.exports = Chart;
	}

	root.Chart = Chart;

	Chart.noConflict = function(){
		root.Chart = previous;
		return Chart;
	};

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - If there is a stroke on each bar
		barShowStroke : true,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Bar",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true,
				calculateBarX : function(datasetCount, datasetIndex, barIndex){
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
					var xWidth = this.calculateBaseWidth(),
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
						barWidth = this.calculateBarWidth(datasetCount);

					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
				},
				calculateBaseWidth : function(){
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
				},
				calculateBarWidth : function(datasetCount){
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

					return (baseWidth / datasetCount);
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachBars(function(bar){
						bar.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						activeBar.fillColor = activeBar.highlightFill;
						activeBar.strokeColor = activeBar.highlightStroke;
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.BarClass = Chart.Rectangle.extend({
				strokeWidth : this.options.barStrokeWidth,
				showStroke : this.options.barShowStroke,
				ctx : this.chart.ctx
			});

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					bars : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.bars.push(new this.BarClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.strokeColor,
						fillColor : dataset.fillColor,
						highlightFill : dataset.highlightFill || dataset.fillColor,
						highlightStroke : dataset.highlightStroke || dataset.strokeColor
					}));
				},this);

			},this);

			this.buildScale(data.labels);

			this.BarClass.prototype.base = this.scale.endPoint;

			this.eachBars(function(bar, index, datasetIndex){
				helpers.extend(bar, {
					width : this.scale.calculateBarWidth(this.datasets.length),
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
					y: this.scale.endPoint
				});
				bar.save();
			}, this);

			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});

			this.eachBars(function(bar){
				bar.save();
			});
			this.render();
		},
		eachBars : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.bars, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var barsArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					barsArray.push(dataset.bars[barIndex]);
				},
				barIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						return barsArray;
					}
				}
			}

			return barsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachBars(function(bar){
					values.push(bar.value);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}

			this.scale = new this.ScaleClass(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].bars.push(new this.BarClass({
					value : value,
					label : label,
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
					y: this.scale.endPoint,
					width : this.scale.calculateBarWidth(this.datasets.length),
					base : this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].strokeColor,
					fillColor : this.datasets[datasetIndex].fillColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.bars.shift();
			},this);
			this.update();
		},
		reflow : function(){
			helpers.extend(this.BarClass.prototype,{
				y: this.scale.endPoint,
				base : this.scale.endPoint
			});
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);

			//Draw all the bars for each dataset
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.bars,function(bar,index){
					if (bar.hasValue()){
						bar.base = this.scale.endPoint;
						//Transition then draw
						bar.transition({
							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
							y : this.scale.calculateY(bar.value),
							width : this.scale.calculateBarWidth(this.datasets.length)
						}, easingDecimal).draw();
					}
				},this);

			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value){
			return (Math.PI*2)*(Math.abs(value) / this.total);
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += Math.abs(segment.value);
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - Whether the line is curved between points
		bezierCurve : true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension : 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot : true,

		//Number - Radius of each point dot in pixels
		pointDotRadius : 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius : 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Line",
		defaults : defaultConfig,
		initialize:  function(data){
			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx,
				inRange : function(mouseX){
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePoints, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});
					this.showTooltip(activePoints);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);


				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

				this.buildScale(data.labels);


				this.eachPoints(function(point, index){
					helpers.extend(point, {
						x: this.scale.calculateX(index),
						y: this.scale.endPoint
					});
					point.save();
				}, this);

			},this);


			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPoints(function(point){
				point.save();
			});
			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},
		getPointsAtEvent : function(e){
			var pointsArray = [],
				eventPosition = helpers.getRelativePosition(e);
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,function(point){
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
				});
			},this);
			return pointsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachPoints(function(point){
					values.push(point.value);
				});

				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange : function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}


			this.scale = new Chart.Scale(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets

			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					x: this.scale.calculateX(this.scale.valuesCount+1),
					y: this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.update();
		},
		reflow : function(){
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			// Some helper methods for getting the next/prev points
			var hasValue = function(item){
				return item.value !== null;
			},
			nextPoint = function(point, collection, index){
				return helpers.findNextWhere(collection, hasValue, index) || point;
			},
			previousPoint = function(point, collection, index){
				return helpers.findPreviousWhere(collection, hasValue, index) || point;
			};

			this.scale.draw(easingDecimal);


			helpers.each(this.datasets,function(dataset){
				var pointsWithValues = helpers.where(dataset.points, hasValue);

				//Transition each point first so that the line and point drawing isn't out of sync
				//We can use this extra loop to calculate the control points of this dataset also in this loop

				helpers.each(dataset.points, function(point, index){
					if (point.hasValue()){
						point.transition({
							y : this.scale.calculateY(point.value),
							x : this.scale.calculateX(index)
						}, easingDecimal);
					}
				},this);


				// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){
					helpers.each(pointsWithValues, function(point, index){
						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
						point.controlPoints = helpers.splineCurve(
							previousPoint(point, pointsWithValues, index),
							point,
							nextPoint(point, pointsWithValues, index),
							tension
						);

						// Prevent the bezier going outside of the bounds of the graph

						// Cap puter bezier handles to the upper/lower scale bounds
						if (point.controlPoints.outer.y > this.scale.endPoint){
							point.controlPoints.outer.y = this.scale.endPoint;
						}
						else if (point.controlPoints.outer.y < this.scale.startPoint){
							point.controlPoints.outer.y = this.scale.startPoint;
						}

						// Cap inner bezier handles to the upper/lower scale bounds
						if (point.controlPoints.inner.y > this.scale.endPoint){
							point.controlPoints.inner.y = this.scale.endPoint;
						}
						else if (point.controlPoints.inner.y < this.scale.startPoint){
							point.controlPoints.inner.y = this.scale.startPoint;
						}
					},this);
				}


				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();

				helpers.each(pointsWithValues, function(point, index){
					if (index === 0){
						ctx.moveTo(point.x, point.y);
					}
					else{
						if(this.options.bezierCurve){
							var previous = previousPoint(point, pointsWithValues, index);

							ctx.bezierCurveTo(
								previous.controlPoints.outer.x,
								previous.controlPoints.outer.y,
								point.controlPoints.inner.x,
								point.controlPoints.inner.y,
								point.x,
								point.y
							);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					}
				}, this);

				ctx.stroke();

				if (this.options.datasetFill && pointsWithValues.length > 0){
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
					ctx.fillStyle = dataset.fillColor;
					ctx.closePath();
					ctx.fill();
				}

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(pointsWithValues,function(point){
					point.draw();
				});
			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Show a backdrop to the scale label
		scaleShowLabelBackdrop : true,

		//String - The colour of the label backdrop
		scaleBackdropColor : "rgba(255,255,255,0.75)",

		// Boolean - Whether the scale should begin at zero
		scaleBeginAtZero : true,

		//Number - The backdrop padding above & below the label in pixels
		scaleBackdropPaddingY : 2,

		//Number - The backdrop padding to the side of the label in pixels
		scaleBackdropPaddingX : 2,

		//Boolean - Show line for each value in the scale
		scaleShowLine : true,

		//Boolean - Stroke a line around each segment in the chart
		segmentShowStroke : true,

		//String - The colour of the stroke on each segement.
		segmentStrokeColor : "#fff",

		//Number - The width of the stroke value in pixels
		segmentStrokeWidth : 2,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect.
		animationEasing : "easeOutBounce",

		//Boolean - Whether to animate the rotation of the chart
		animateRotate : true,

		//Boolean - Whether to animate scaling the chart from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "PolarArea",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){
			this.segments = [];
			//Declare segment class as a chart instance specific class, so it can share props for this instance
			this.SegmentArc = Chart.Arc.extend({
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				ctx : this.chart.ctx,
				innerRadius : 0,
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				lineArc: true,
				width: this.chart.width,
				height: this.chart.height,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				valuesCount: data.length
			});

			this.updateScaleRange(data);

			this.scale.update();

			helpers.each(data,function(segment,index){
				this.addData(segment,index,true);
			},this);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;

			this.segments.splice(index, 0, new this.SegmentArc({
				fillColor: segment.color,
				highlightColor: segment.highlight || segment.color,
				label: segment.label,
				value: segment.value,
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
				startAngle: Math.PI * 1.5
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},
		calculateTotal: function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
			this.scale.valuesCount = this.segments.length;
		},
		updateScaleRange: function(datapoints){
			var valuesArray = [];
			helpers.each(datapoints,function(segment){
				valuesArray.push(segment.value);
			});

			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes,
				{
					size: helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				}
			);

		},
		update : function(){
			this.calculateTotal(this.segments);

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			
			this.reflow();
			this.render();
		},
		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.updateScaleRange(this.segments);
			this.scale.update();

			helpers.extend(this.scale,{
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});

			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				});
			}, this);

		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			//Clear & draw the canvas
			this.clear();
			helpers.each(this.segments,function(segment, index){
				segment.transition({
					circumference : this.scale.getCircumference(),
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				},easingDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				// If we've removed the first segment we need to set the first one to
				// start at the top.
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}

				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length - 1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
				segment.draw();
			}, this);
			this.scale.draw();
		}
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;



	Chart.Type.extend({
		name: "Radar",
		defaults:{
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 10,

			//String - Point label font colour
			pointLabelFontColor : "#666",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		},

		initialize: function(data){
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx
			});

			this.datasets = [];

			this.buildScale(data);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePointsCollection, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});

					this.showTooltip(activePointsCollection);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label: dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					var pointPosition;
					if (!this.scale.animation){
						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
					}
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

			},this);

			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},

		getPointsAtEvent : function(evt){
			var mousePosition = helpers.getRelativePosition(evt),
				fromCenter = helpers.getAngleFromPoint({
					x: this.scale.xCenter,
					y: this.scale.yCenter
				}, mousePosition);

			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
				activePointsCollection = [];

			// If we're at the top, make the pointIndex 0 to get the first of the array.
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
				pointIndex = 0;
			}

			if (fromCenter.distance <= this.scale.drawingArea){
				helpers.each(this.datasets, function(dataset){
					activePointsCollection.push(dataset.points[pointIndex]);
				});
			}

			return activePointsCollection;
		},

		buildScale : function(data){
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				angleLineColor : this.options.angleLineColor,
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
				// Point labels at the edge of each line
				pointLabelFontColor : this.options.pointLabelFontColor,
				pointLabelFontSize : this.options.pointLabelFontSize,
				pointLabelFontFamily : this.options.pointLabelFontFamily,
				pointLabelFontStyle : this.options.pointLabelFontStyle,
				height : this.chart.height,
				width: this.chart.width,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				labels: data.labels,
				valuesCount: data.datasets[0].data.length
			});

			this.scale.setScaleSize();
			this.updateScaleRange(data.datasets);
			this.scale.buildYLabels();
		},
		updateScaleRange: function(datasets){
			var valuesArray = (function(){
				var totalDataArray = [];
				helpers.each(datasets,function(dataset){
					if (dataset.data){
						totalDataArray = totalDataArray.concat(dataset.data);
					}
					else {
						helpers.each(dataset.points, function(point){
							totalDataArray.push(point.value);
						});
					}
				});
				return totalDataArray;
			})();


			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes
			);

		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			this.scale.valuesCount++;
			helpers.each(valuesArray,function(value,datasetIndex){
				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					x: pointPosition.x,
					y: pointPosition.y,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.labels.push(label);

			this.reflow();

			this.update();
		},
		removeData : function(){
			this.scale.valuesCount--;
			this.scale.labels.shift();
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.reflow();
			this.update();
		},
		update : function(){
			this.eachPoints(function(point){
				point.save();
			});
			this.reflow();
			this.render();
		},
		reflow: function(){
			helpers.extend(this.scale, {
				width : this.chart.width,
				height: this.chart.height,
				size : helpers.min([this.chart.width, this.chart.height]),
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});
			this.updateScaleRange(this.datasets);
			this.scale.setScaleSize();
			this.scale.buildYLabels();
		},
		draw : function(ease){
			var easeDecimal = ease || 1,
				ctx = this.chart.ctx;
			this.clear();
			this.scale.draw();

			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				helpers.each(dataset.points,function(point,index){
					if (point.hasValue()){
						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
					}
				},this);



				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index === 0){
						ctx.moveTo(point.x,point.y);
					}
					else{
						ctx.lineTo(point.x,point.y);
					}
				},this);
				ctx.closePath();
				ctx.stroke();

				ctx.fillStyle = dataset.fillColor;
				ctx.fill();

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					if (point.hasValue()){
						point.draw();
					}
				});

			},this);

		}

	});





}).call(this);
var apiMeta = document.getElementById("api-host");
m.postgrest.init(apiMeta.getAttribute('content'), {method: "GET", url: "/api_token"});

window.c = (function(){
  return {
    models: {},
    pages: {},
    contribution: {},
    admin: {},
    project: {},
    h: {}
  };
}());

window.c.h = (function(m, moment){
  //Date Helpers
  var momentify = function(date, format){
    format = format || 'DD/MM/YYYY';
    return date ? moment(date).format(format) : 'no date';
  },

  momentFromString = function(date, format){
    var european = moment(date, format || 'DD/MM/YYYY');
    return european.isValid() ? european : moment(date);
  },

  //Number formatting helpers
  generateFormatNumber = function(s, c){
    return function(number, n, x) {
      if (number === null || number === undefined) {
        return null;
      }

      var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
          num = number.toFixed(Math.max(0, ~~n));
      return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    };
  },
  formatNumber = generateFormatNumber('.', ','),

  //Object manipulation helpers
  generateRemaingTime = function(project) {
    var remainingTextObj = m.prop({}),
        translatedTime = {
          days: 'dias',
          minutes: 'minutos',
          hours: 'horas',
          seconds: 'segundos'
        };

    remainingTextObj({
      unit: translatedTime[project.remaining_time.unit || 'seconds'],
      total: project.remaining_time.total
    });

    return remainingTextObj;
  },

  toggleProp = function(defaultState, alternateState){
    var p = m.prop(defaultState);
    p.toggle = function(){
      p(((p() === alternateState) ? defaultState : alternateState));
    };

    return p;
  },

  idVM = m.postgrest.filtersVM({id: 'eq'}),

  //Templates
  loader = function(){
    return m('.u-text-center.u-margintop-30[style="margin-bottom:-110px;"]', [
      m('img[alt="Loader"][src="https://s3.amazonaws.com/catarse.files/loader.gif"]')
    ]);
  };

  return {
    momentify: momentify,
    momentFromString: momentFromString,
    formatNumber: formatNumber,
    idVM: idVM,
    toggleProp: toggleProp,
    generateRemaingTime: generateRemaingTime,
    loader: loader
  };
}(window.m, window.moment));

window.c.models = (function(m){
  var contributionDetail = m.postgrest.model('contribution_details'),

  projectDetail = m.postgrest.model('project_details'),
  contributions = m.postgrest.model('contributions'),
  teamTotal = m.postgrest.model('team_totals'),
  projectContributionsPerDay = m.postgrest.model('project_contributions_per_day'),
  projectContributionsPerLocation = m.postgrest.model('project_contributions_per_location'),
  project = m.postgrest.model('projects'),
  teamMember = m.postgrest.model('team_members');
  teamMember.pageSize(40);
  project.pageSize(3);

  return {
    contributionDetail: contributionDetail,
    projectDetail: projectDetail,
    contributions: contributions,
    teamTotal: teamTotal,
    teamMember: teamMember,
    project: project,
    projectContributionsPerDay: projectContributionsPerDay,
    projectContributionsPerLocation: projectContributionsPerLocation
  };
}(window.m));

window.c.AdminContribution = (function(m, h){
  return {
    view: function(ctrl, args) {
      var contribution = args.item;
      return m('.w-row.admin-contribution', [
        m('.fontweight-semibold.lineheight-tighter.u-marginbottom-10.fontsize-small', '$' + contribution.value),
          m('.fontsize-smallest.fontcolor-secondary', h.momentify(contribution.created_at, 'DD/MM/YYYY HH:mm[h]')),
          m('.fontsize-smallest', [
            'ID do Gateway: ',
            m('a.alt-link[target="_blank"][href="https://dashboard.pagar.me/#/transactions/' + contribution.gateway_id + '"]', contribution.gateway_id)
          ])
      ]);
    }
  };
}(window.m, window.c.h));

window.c.AdminDetail = (function(m, _, c){
  return {
    controller: function(){
    },
    view: function(ctrl, args){
      var actions = args.actions,
          item = args.item;
      return m('#admin-contribution-detail-box', [
        m('.divider.u-margintop-20.u-marginbottom-20'),
        m('.w-row.u-marginbottom-30',
          _.map(actions, function(action){
            return m.component(c[action.component], {data: action.data, item: args.item});
          })
        ),
        m('.w-row.card.card-terciary.u-radius',[
          m.component(c.AdminTransaction, {contribution: item}),
          m.component(c.AdminTransactionHistory, {contribution: item}),
          m.component(c.AdminReward, {contribution: item, key: item.key})
        ])
      ]);
    }
  };
}(window.m, window._, window.c));

window.c.AdminFilter = (function(c, m, _, h){
  return {
    controller: function(){
      return {
        toggler: h.toggleProp(false, true)
      };
    },
    view: function(ctrl, args){
      var filterBuilder = args.filterBuilder,
          main = _.findWhere(filterBuilder, {component: 'FilterMain'});

      return m('#admin-contributions-filter.w-section.page-header', [
        m('.w-container', [
          m('.fontsize-larger.u-text-center.u-marginbottom-30', 'Apoios'),
          m('.w-form', [
            m('form', {
              onsubmit: args.submit
            }, [
              (_.findWhere(filterBuilder, {component: 'FilterMain'})) ? m.component(c[main.component], main.data) : '',
              m('.u-marginbottom-20.w-row',
                m('button.w-col.w-col-12.fontsize-smallest.link-hidden-light[style="background: none; border: none; outline: none; text-align: left;"][type="button"]', {
                  onclick: ctrl.toggler.toggle
                }, 'Filtros avançados  >')), (ctrl.toggler() ?
                m('#advanced-search.w-row.admin-filters', [
                  _.map(filterBuilder, function(f){
                    return (f.component !== 'FilterMain') ? m.component(c[f.component], f.data) : '';
                  })
                ]) : ''
              )
            ])
          ])
        ])
      ]);
    }
  };
}(window.c, window.m, window._, window.c.h));

window.c.AdminInputAction = (function(m, h, c){
  return {
    controller: function(args){
      var builder = args.data,
          complete = m.prop(false),
          error = m.prop(false),
          fail = m.prop(false),
          data = {},
          item = args.item,
          key = builder.property,
          newValue = m.prop(builder.forceValue || '');

      h.idVM.id(item[builder.updateKey]);

      var l = m.postgrest.loaderWithToken(builder.model.patchOptions(h.idVM.parameters(), data));

      var updateItem = function(res){
        _.extend(item, res[0]);
        complete(true);
        error(false);
      };

      var submit = function(){
        data[key] = newValue();
        l.load().then(updateItem, error);
        return false;
      };

      var unload = function(el, isinit, context){
        context.onunload = function(){
          complete(false);
          error(false);
          newValue(builder.forceValue || '');
        };
      };

      return {
        complete: complete,
        error: error,
        l: l,
        newValue: newValue,
        submit: submit,
        toggler: h.toggleProp(false, true),
        unload: unload
      };
    },
    view: function(ctrl, args){
      var data = args.data,
          btnValue = (ctrl.l()) ? 'por favor, aguarde...' : data.callToAction;

      return m('.w-col.w-col-2',[
        m('button.btn.btn-small.btn-terciary', {
          onclick: ctrl.toggler.toggle
        }, data.outerLabel),
        (ctrl.toggler()) ?
          m('.dropdown-list.card.u-radius.dropdown-list-medium.zindex-10', {config: ctrl.unload},[
            m('form.w-form', {
              onsubmit: ctrl.submit
            }, (!ctrl.complete()) ? [
                  m('label', data.innerLabel),
                  (!data.forceValue) ?
                  m('input.w-input.text-field[type="text"][placeholder="' + data.placeholder + '"]', {onchange: m.withAttr('value', ctrl.newValue), value: ctrl.newValue()}) : '',
                  m('input.w-button.btn.btn-small[type="submit"][value="' + btnValue + '"]')
                ] : (!ctrl.error()) ? [
                    m('.w-form-done[style="display:block;"]', [
                      m('p', 'Apoio transferido com sucesso!')
                    ])
                  ] : [
                    m('.w-form-error[style="display:block;"]', [
                      m('p', 'Houve um problema na requisição. O apoio não foi transferido!')
                    ])
                  ]
            )
          ])
        : ''
      ]);
    }
  };
}(window.m, window.c.h, window.c));

window.c.AdminItem = (function(m, _, h, c){
  return {
    controller: function(args){

      var displayDetailBox = h.toggleProp(false, true);

      return {
        displayDetailBox: displayDetailBox
      };
    },

    view: function(ctrl, args) {
      var item = args.item;

      return m('.w-clearfix.card.u-radius.u-marginbottom-20.results-admin-items',[
        m('.w-row',[
          _.map(args.builder, function(desc){
            return m(desc.wrapperClass, [
              m.component(c[desc.component], {item: item, key: item.key})
            ]);
          })
        ]),
        m('button.w-inline-block.arrow-admin.fa.fa-chevron-down.fontcolor-secondary', {onclick: ctrl.displayDetailBox.toggle}),
        ctrl.displayDetailBox() ? m.component(c.AdminDetail, {item: item, actions: args.actions, key: item.key}) : ''
      ]);
    }
  };
}(window.m, window._, window.c.h, window.c));

window.c.AdminList = (function(m, h, c){
  var admin = c.admin;
  return {
    controller: function(args) {
      var list = args.vm.list;
      if (!list.collection().length && list.firstPage) {
        list.firstPage().then(null, function(serverError) {
          args.vm.error(serverError.message);
        });
      }
    },

    view: function(ctrl, args) {
      var list = args.vm.list,
          error = args.vm.error;
      return m('.w-section.section', [
        m('.w-container',
          error() ?
            m('.card.card-error.u-radius.fontweight-bold', error()) :
            [
              m('.w-row.u-marginbottom-20', [
                m('.w-col.w-col-9', [
                  m('.fontsize-base',
                    list.isLoading() ?
                      'Buscando apoios...' :
                      [m('span.fontweight-semibold', list.total()), ' apoios encontrados']
                   )
                ])
              ]),
              m('#admin-contributions-list.w-container',[
                list.collection().map(function(item) {
                  return m.component(c.AdminItem, {builder: args.itemBuilder, actions: args.itemActions, item: item, key: item.key});
                }),
                m('.w-section.section',[
                  m('.w-container',[
                    m('.w-row',[
                      m('.w-col.w-col-2.w-col-push-5',[
                        !list.isLoading() ?
                          m('button#load-more.btn.btn-medium.btn-terciary', {onclick: list.nextPage}, 'Carregar mais') :
                          h.loader(),
                      ])
                    ])
                  ])
                ])
              ])
            ]
         )
      ]);
    }
  };
}(window.m, window.c.h, window.c));

window.c.AdminProjectDetailsCard = (function(m, h){
  return {
    controller: function(args) {
      var project = args.resource,
          generateStatusText = function() {
            var statusTextObj = m.prop({}),
                statusText = {
                  online: {cssClass: 'text-success', text: 'NO AR'},
                  successful: {cssClass: 'text-success', text: 'FINANCIADO'},
                  failed: {cssClass: 'text-error', text: 'NÃO FINANCIADO'},
                  waiting_funds: {cssClass: 'text-waiting', text: 'AGUARDANDO'},
                  rejected: {cssClass: 'text-error', text: 'RECUSADO'},
                  draft: {cssClass: '', text: 'RASCUNHO'},
                  in_analysis: {cssClass: '', text: 'EM ANÁLISE'},
                  approved: {cssClass: 'text-success', text: 'APROVADO'}
                };

            statusTextObj(statusText[project.state]);

            return statusTextObj;
          };

      return {
        project: project,
        statusTextObj: generateStatusText(),
        remainingTextObj: h.generateRemaingTime(project)
      };
    },

    view: function(ctrl) {
      var project = ctrl.project,
          progress = project.progress.toFixed(2),
          statusTextObj = ctrl.statusTextObj(),
          remainingTextObj = ctrl.remainingTextObj();

      return m('.project-details-card.card.u-radius.card-terciary.u-marginbottom-20', [
        m('div', [
          m('.fontsize-small.fontweight-semibold', [
            m('span.fontcolor-secondary', 'Status:'),' ',m('span', {class: statusTextObj.cssClass}, statusTextObj.text),' '
          ]),
          (function(){
            if (project.is_published) {
              return [
                m('.meter.u-margintop-20.u-marginbottom-10', [
                  m('.meter-fill', {style: {width: (progress > 100 ? 100 : progress) + '%'}})
                ]),
                m('.w-row', [
                  m('.w-col.w-col-3.w-col-small-3.w-col-tiny-6', [
                    m('.fontweight-semibold.fontsize-large.lineheight-tight', progress + '%'),
                    m('.fontcolor-secondary.lineheight-tighter.fontsize-small.u-marginbottom-10', 'financiado')
                  ]),
                  m('.w-col.w-col-3.w-col-small-3.w-col-tiny-6', [
                    m('.fontweight-semibold.fontsize-large.lineheight-tight', [
                      '$ ' + h.formatNumber(project.pledged, 2),
                    ]),
                    m('.fontcolor-secondary.lineheight-tighter.fontsize-small.u-marginbottom-10', 'levantados')
                  ]),
                  m('.w-col.w-col-3.w-col-small-3.w-col-tiny-6', [
                    m('.fontweight-semibold.fontsize-large.lineheight-tight', project.total_contributions),
                    m('.fontcolor-secondary.lineheight-tighter.fontsize-small', 'apoios')
                  ]),
                  m('.w-col.w-col-3.w-col-small-3.w-col-tiny-6', [
                    m('.fontweight-semibold.fontsize-large.lineheight-tight', remainingTextObj.total),
                    m('.fontcolor-secondary.lineheight-tighter.fontsize-small', remainingTextObj.unit + ' restantes')
                  ])
                ])
              ];
            }
          }())
        ])
      ]);
    }
  };
}(window.m, window.c.h));


window.c.AdminProjectDetailsExplanation = (function(m, h){
  return {
    controller: function(args) {
      var explanation = function(resource) {
        var stateText = {
          online: [
            m('span', 'Você pode receber apoios até 23hs59min59s do dia ' + h.momentify(resource.zone_expires_at) + '. Lembre-se, é tudo-ou-nada e você só levará os recursos captados se bater a meta dentro desse prazo.')
          ],
          successful: [
            m('span.fontweight-semibold', resource.user.name + ', comemore que você merece!'),
            ' Seu projeto foi bem sucedido e agora é a hora de iniciar o trabalho de relacionamento com seus apoiadores! ',
            'Atenção especial à entrega de recompensas. Prometeu? Entregue! Não deixe de olhar a seção de pós-projeto do ',
            m('a.alt-link[href="/guides"]', 'Guia dos Realizadores'),
            ' e de informar-se sobre ',m('a.alt-link[href="http://suporte.catarse.me/hc/pt-br/articles/202037493-FINANCIADO-Como-ser%C3%A1-feito-o-repasse-do-dinheiro-"][target="_blank"]', 'como o repasse do dinheiro será feito.')
          ],
          waiting_funds: [
            m('span.fontweight-semibold', resource.user.name + ', estamos processando os últimos pagamentos!'),
            ' Seu projeto foi finalizado em ' + h.momentify(resource.zone_expires_at) + ' e está aguardando confirmação de boletos e pagamentos. ',
            'Devido à data de vencimento de boletos, projetos que tiveram apoios de última hora ficam por até 4 dias úteis nesse status, contados a partir da data de finalização do projeto. ',
            m('a.alt-link[href="http://suporte.catarse.me/hc/pt-br/articles/202037493-FINANCIADO-Como-ser%C3%A1-feito-o-repasse-do-dinheiro-"][target="_blank"]', 'Entenda como o repasse de dinheiro é feito para projetos bem sucedidos.')
          ],
          failed: [
            m('span.fontweight-semibold', resource.user.name + ', não desanime!'),
            ' Seu projeto não bateu a meta e sabemos que isso não é a melhor das sensações. Mas não desanime. ',
            'Encare o processo como um aprendizado e não deixe de cogitar uma segunda tentativa. Não se preocupe, todos os seus apoiadores receberão o dinheiro de volta. ',
            m('a.alt-link[href="http://suporte.catarse.me/hc/pt-br/articles/202365507-Regras-e-funcionamento-dos-reembolsos-estornos"][target="_blank"]', 'Entenda como fazemos estornos e reembolsos.')
          ],
          rejected: [
            m('span.fontweight-semibold', resource.user.name + ', infelizmente não foi desta vez.'),
            ' Você enviou seu projeto para análise do Catarse e entendemos que ele não está de acordo com o perfil do site. ',
            'Ter um projeto recusado não impede que você envie novos projetos para avaliação ou reformule seu projeto atual. ',
            'Converse com nosso atendimento! Recomendamos que você dê uma boa olhada nos ',
            m('a.alt-link[href="http://suporte.catarse.me/hc/pt-br/articles/202387638-Diretrizes-para-cria%C3%A7%C3%A3o-de-projetos"][target="_blank"]', 'critérios da plataforma'),
            ' e no ',
            m('a.alt-link[href="/guides"]', 'guia dos realizadores'),'.'
          ],
          draft: [
            m('span.fontweight-semibold', resource.user.name + ', construa o seu projeto!'),
            ' Quanto mais cuidadoso e bem formatado for um projeto, maiores as chances de ele ser bem sucedido na sua campanha de captação. ',
            'Antes de enviar seu projeto para a nossa análise, preencha todas as abas ao lado com carinho. Você pode salvar as alterações e voltar ao rascunho de projeto quantas vezes quiser. ',
            'Quando tudo estiver pronto, clique no botão ENVIAR e entraremos em contato para avaliar o seu projeto.'
          ],
          in_analysis: [
            m('span.fontweight-semibold', resource.user.name + ', você enviou seu projeto para análise em ' + h.momentify(resource.sent_to_analysis_at) + ' e receberá nossa avaliação em até 4 dias úteis após o envio!'),
            ' Enquanto espera a sua resposta, você pode continuar editando o seu projeto. ',
            'Recomendamos também que você vá coletando feedback com as pessoas próximas e planejando como será a sua campanha.'
          ],
          approved: [
            m('span.fontweight-semibold', resource.user.name + ', seu projeto foi aprovado!'),
            ' Para colocar o seu projeto no ar é preciso apenas que você preencha os dados necessários na aba ',
            m('a.alt-link[href="#user_settings"]', 'Conta'),
            '. É importante saber que cobramos a taxa de 13% do valor total arrecadado apenas por projetos bem sucedidos. Entenda ',
            m('a.alt-link[href="http://suporte.catarse.me/hc/pt-br/articles/202037493-FINANCIADO-Como-ser%C3%A1-feito-o-repasse-do-dinheiro-"][target="_blank"]', 'como fazemos o repasse do dinheiro.')
          ],
        };

        return stateText[resource.state];
      };

      return {
        explanation: explanation(args.resource)
      };
    },
    view: function(ctrl, args) {
      return m('p.' + args.resource.state + '-project-text.fontsize-small.lineheight-loose', ctrl.explanation);
    }
  };
}(window.m, window.c.h));

window.c.AdminProject = (function(m, h){
  return {
    view: function(ctrl, args) {
      var project = args.item;
      return m('.w-row.admin-project',[
        m('.w-col.w-col-3.w-col-small-3.u-marginbottom-10',[
          m('img.thumb-project.u-radius[src=' + project.project_img + '][width=50]')
        ]),
        m('.w-col.w-col-9.w-col-small-9',[
          m('.fontweight-semibold.fontsize-smaller.lineheight-tighter.u-marginbottom-10', [
            m('a.alt-link[target="_blank"][href="/' + project.permalink + '"]', project.project_name)
          ]),
          m('.fontsize-smallest.fontweight-semibold', project.project_state),
          m('.fontsize-smallest.fontcolor-secondary', h.momentify(project.project_online_date) + ' a ' + h.momentify(project.project_expires_at))
        ])
      ]);
    }
  };
}(window.m, window.c.h));

window.c.AdminRadioAction = (function(m, h, c){
  return {
    controller: function(args){
      var builder = args.data,
          complete = m.prop(false),
          data = {},
          //TODO: Implement a descriptor to abstract the initial description
          description = m.prop(args.item.reward.description || ''),
          error = m.prop(false),
          fail = m.prop(false),
          item = args.item,
          key = builder.getKey,
          newValue = m.prop(''),
          getFilter = {},
          setFilter = {},
          radios = m.prop(),
          getKey = builder.getKey,
          getAttr = builder.radios,
          updateKey = builder.updateKey;

      setFilter[updateKey] = 'eq';
      var setVM = m.postgrest.filtersVM(setFilter);
      setVM[updateKey](item[updateKey]);

      getFilter[getKey] = 'eq';
      var getVM = m.postgrest.filtersVM(getFilter);
      getVM[getKey](item[getKey]);

      var getLoader = m.postgrest.loaderWithToken(builder.getModel.getRowOptions(getVM.parameters()));

      var setLoader = m.postgrest.loaderWithToken(builder.updateModel.patchOptions(setVM.parameters(), data));

      var updateItem = function(data){
        _.extend(item, data[0]);
        complete(true);
      };

      var fetch = function(){
        getLoader.load().then(function(item){
          radios(item[0][getAttr]);
        }, error);
      };

      var submit = function(){
        if (newValue()) {
          data[builder.property] = newValue();
          setLoader.load().then(updateItem, error);
        }
        return false;
      };

      var unload = function(el, isinit, context){
        context.onunload = function(){
          complete(false);
          error(false);
          newValue('');
        };
      };

      var setDescription = function(text){
        description(text);
        m.redraw();
      };

      fetch();

      return {
        complete: complete,
        description: description,
        setDescription: setDescription,
        error: error,
        setLoader: setLoader,
        getLoader: getLoader,
        newValue: newValue,
        submit: submit,
        toggler: h.toggleProp(false, true),
        unload: unload,
        radios: radios
      };
    },
    view: function(ctrl, args){
      var data = args.data,
          btnValue = (ctrl.setLoader() || ctrl.getLoader()) ? 'por favor, aguarde...' : data.callToAction;

      return m('.w-col.w-col-2',[
        m('button.btn.btn-small.btn-terciary', {
          onclick: ctrl.toggler.toggle
        }, data.outerLabel),
        (ctrl.toggler()) ?
          m('.dropdown-list.card.u-radius.dropdown-list-medium.zindex-10', {config: ctrl.unload},[
            m('form.w-form', {
              onsubmit: ctrl.submit
            }, (!ctrl.complete()) ? [
                  (ctrl.radios()) ?
                    _.map(ctrl.radios(), function(radio, index){
                      var set = function(){
                        ctrl.newValue(radio.id);
                        ctrl.setDescription(radio.description);
                      };
                      var selected = (radio.id === args.item.reward.id) ? true : false;

                      return m('.w-radio', [
                        m('input#r-' + index + '.w-radio-input[type=radio][name="admin-radio"][value="' + radio.id + '"]' + ((selected) ? '[checked]' : ''),{
                          onclick: set
                        }),
                        m('label.w-form-label[for="r-' + index + '"]', '$' + radio.minimum_value)
                      ]);
                    }) : h.loader(),
                  m('strong', 'Descrição'),
                  m('p', ctrl.description()),
                  m('input.w-button.btn.btn-small[type="submit"][value="' + btnValue + '"]')
                ] : (!ctrl.error()) ? [
                    m('.w-form-done[style="display:block;"]', [
                      m('p', 'Recompensa alterada com sucesso!')
                    ])
                  ] : [
                    m('.w-form-error[style="display:block;"]', [
                      m('p', 'Houve um problema na requisição. O apoio não foi transferido!')
                    ])
                  ]
            )
          ])
        : ''
      ]);
    }
  };
}(window.m, window.c.h, window.c));

window.c.AdminReward = (function(m, h, _){
  return {
    view: function(ctrl, args) {
      var reward = args.contribution.reward || {},
          available = parseInt(reward.paid_count) + parseInt(reward.waiting_payment_count);

      return m('.w-col.w-col-4',[
        m('.fontweight-semibold.fontsize-smaller.lineheight-tighter.u-marginbottom-20', 'Recompensa'),
        m('.fontsize-smallest.lineheight-looser', (_.isEmpty(reward)) ? 'Apoio sem recompensa.' : [
            'ID: ' + reward.id,
            m('br'),
            'Valor mínimo: $' + h.formatNumber(reward.minimum_value, 2, 3),
            m('br'),
            m.trust('Disponíveis: ' + available + ' / ' + (reward.maximum_contributions || '&infin;')),
            m('br'),
            'Aguardando confirmação: ' + reward.waiting_payment_count,
            m('br'),
            'Descrição: ' + reward.description
          ]
        )
      ]);
    }
  };
}(window.m, window.c.h, window._));

window.c.AdminTransactionHistory = (function(m, h, _){
  return {
    controller: function(args) {
      var contribution = args.contribution,
          mapEvents = _.reduce([
        {date: contribution.paid_at, name: 'Apoio confirmado'},
        {date: contribution.pending_refund_at, name: 'Reembolso solicitado'},
        {date: contribution.refunded_at, name: 'Estorno realizado'},
        {date: contribution.created_at, name: 'Apoio criado'},
        {date: contribution.refused_at, name: 'Apoio cancelado'},
        {date: contribution.deleted_at, name: 'Apoio excluído'},
        {date: contribution.chargeback_at, name: 'Chargeback'},
      ], function(memo, item){
        if (item.date !== null && item.date !== undefined) {
          item.originalDate = item.date;
          item.date = h.momentify(item.date, 'DD/MM/YYYY, HH:mm');
          return memo.concat(item);
        }

        return memo;
      }, []);

      return {
        orderedEvents: _.sortBy(mapEvents, 'originalDate')
      };
    },

    view: function(ctrl) {
      return m('.w-col.w-col-4',[
        m('.fontweight-semibold.fontsize-smaller.lineheight-tighter.u-marginbottom-20', 'Histórico da transação'),
        ctrl.orderedEvents.map(function(cEvent) {
          return m('.w-row.fontsize-smallest.lineheight-looser.date-event',[
            m('.w-col.w-col-6',[
              m('.fontcolor-secondary', cEvent.date)
            ]),
            m('.w-col.w-col-6',[
              m('div', cEvent.name)
            ])
          ]);
        })
      ]);
    }
  };
}(window.m, window.c.h, window._));

window.c.AdminTransaction = (function(m, h){
  return {
    view: function(ctrl, args) {
      var contribution = args.contribution;
      return m('.w-col.w-col-4',[
        m('.fontweight-semibold.fontsize-smaller.lineheight-tighter.u-marginbottom-20', 'Detalhes do apoio'),
        m('.fontsize-smallest.lineheight-looser',[
          'Valor: $' + h.formatNumber(contribution.value, 2, 3),
          m('br'),
          'Taxa: $' + h.formatNumber(contribution.gateway_fee, 2, 3),
          m('br'),
          'Aguardando Confirmação: ' + (contribution.waiting_payment ? 'Sim' : 'Não'),
          m('br'),
          'Anônimo: ' + (contribution.anonymous ? 'Sim' : 'Não'),
          m('br'),
          'Id pagamento: ' + contribution.gateway_id,
          m('br'),
          'Apoio: ' + contribution.contribution_id,
          m('br'),
          'Chave: \n',
          m('br'),
          contribution.key,
          m('br'),
          'Meio: ' + contribution.gateway,
          m('br'),
          'Operadora: ' + (contribution.gateway_data && contribution.gateway_data.acquirer_name),
          m('br'),
          (function(){
            if (contribution.is_second_slip) {
              return [m('a.link-hidden[href="#"]', 'Boleto bancário'), ' ', m('span.badge', '2a via')];
            }
          }()),
        ])
      ]);
    }
  };
}(window.m, window.c.h));

window.c.AdminUser = (function(m){
  return {
    view: function(ctrl, args) {
      var user = args.item;
      var userProfile = function(){
        return user.user_profile_img || '/assets/catarse_bootstrap/user.jpg';
      };
      return m('.w-row.admin-user',[
        m('.w-col.w-col-3.w-col-small-3.u-marginbottom-10',[
          m('img.user-avatar[src="' + userProfile() + '"]')
        ]),
        m('.w-col.w-col-9.w-col-small-9',[
          m('.fontweight-semibold.fontsize-smaller.lineheight-tighter.u-marginbottom-10', [
            m('a.alt-link[target="_blank"][href="/users/' + user.user_id + '/edit"]', user.user_name)
          ]),
          m('.fontsize-smallest', 'Usuário: ' + user.user_id),
          m('.fontsize-smallest.fontcolor-secondary', 'Catarse: ' + user.email),
          m('.fontsize-smallest.fontcolor-secondary', 'Gateway: ' + user.payer_email)
        ])
      ]);
    }
  };
}(window.m));

window.c.FilterDateRange = (function(m){
  return {
    view: function(ctrl, args){
      return m('.w-col.w-col-3.w-col-small-6', [
        m('label.fontsize-smaller[for="' + args.index + '"]', args.label),
        m('.w-row', [
          m('.w-col.w-col-5.w-col-small-5.w-col-tiny-5', [
            m('input.w-input.text-field.positive[id="' + args.index + '"][type="text"]', {
              onchange: m.withAttr('value', args.first),
              value: args.first()
            })
          ]),
          m('.w-col.w-col-2.w-col-small-2.w-col-tiny-2', [
            m('.fontsize-smaller.u-text-center.lineheight-looser', 'e')
          ]),
          m('.w-col.w-col-5.w-col-small-5.w-col-tiny-5', [
            m('input.w-input.text-field.positive[type="text"]', {
              onchange: m.withAttr('value', args.last),
              value: args.last()
            })
          ])
        ])
      ]);
    }
  };
}(window.m));

window.c.FilterDropdown = (function(m, _){
  return {
    view: function(ctrl, args){
      return m('.w-col.w-col-3.w-col-small-6', [
        m('label.fontsize-smaller[for="' + args.index + '"]', args.label),
        m('select.w-select.text-field.positive[id="' + args.index + '"]', {
          onchange: m.withAttr('value', args.vm),
          value: args.vm()
        },[
          _.map(args.options, function(data){
            return m('option[value="' + data.value + '"]', data.option);
          })
        ])
      ]);
    }
  };
}(window.m, window._));

window.c.FilterMain = (function(m){
  return {
    view: function(ctrl, args){
      return m('.w-row', [
        m('.w-col.w-col-10', [
          m('input.w-input.text-field.positive.medium[placeholder="' + args.placeholder + '"][type="text"]', {onchange: m.withAttr('value', args.vm), value: args.vm()})
        ]),
        m('.w-col.w-col-2', [
          m('input#filter-btn.btn.btn-large.u-marginbottom-10[type="submit"][value="Buscar"]')
        ])
      ]);
    }
  };
}(window.m));

window.c.FilterNumberRange = (function(m){
  return {
    view: function(ctrl, args){
      return m('.w-col.w-col-3.w-col-small-6', [
        m('label.fontsize-smaller[for="' + args.index + '"]', args.label),
        m('.w-row', [
          m('.w-col.w-col-5.w-col-small-5.w-col-tiny-5', [
            m('input.w-input.text-field.positive[id="' + args.index + '"][type="text"]', {
              onchange: m.withAttr('value', args.first),
              value: args.first()
            })
          ]),
          m('.w-col.w-col-2.w-col-small-2.w-col-tiny-2', [
            m('.fontsize-smaller.u-text-center.lineheight-looser', 'e')
          ]),
          m('.w-col.w-col-5.w-col-small-5.w-col-tiny-5', [
            m('input.w-input.text-field.positive[type="text"]', {
              onchange: m.withAttr('value', args.last),
              value: args.last()
            })
          ])
        ])
      ]);
    }
  };
}(window.m));

window.c.PaymentStatus = (function(m){
  return {
    controller: function(args){
      var payment = args.item, card = null,
          displayPaymentMethod, paymentMethodClass, stateClass;

      card = function(){
        if (payment.gateway_data){
          switch (payment.gateway.toLowerCase()){
            case 'moip':
              return {
                first_digits:  payment.gateway_data.cartao_bin,
                last_digits: payment.gateway_data.cartao_final,
                brand: payment.gateway_data.cartao_bandeira
              };
            case 'pagarme':
              return {
                first_digits: payment.gateway_data.card_first_digits,
                last_digits: payment.gateway_data.card_last_digits,
                brand: payment.gateway_data.card_brand
              };
          }
        }
      };

      displayPaymentMethod = function(){
        switch (payment.payment_method.toLowerCase()){
          case 'boletobancario':
            return m('span#boleto-detail', '');
          case 'cartaodecredito':
            var cardData = card();
            if (cardData){
              return m('#creditcard-detail.fontsize-smallest.fontcolor-secondary.lineheight-tight', [
                cardData.first_digits + '******' + cardData.last_digits,
                m('br'),
                cardData.brand + ' ' + payment.installments + 'x'
              ]);
            }
            return '';
        }
      };

      paymentMethodClass = function(){
        switch (payment.payment_method.toLowerCase()){
          case 'boletobancario':
            return '.fa-barcode';
          case 'cartaodecredito':
            return '.fa-credit-card';
          default:
            return '.fa-question';
        }
      };

      stateClass = function(){
        switch (payment.state){
          case 'paid':
            return '.text-success';
          case 'refunded':
            return '.text-refunded';
          case 'pending':
          case 'pending_refund':
            return '.text-waiting';
          default:
            return '.text-error';
        }
      };

      return {
        displayPaymentMethod: displayPaymentMethod,
        paymentMethodClass: paymentMethodClass,
        stateClass: stateClass
      };
    },

    view: function(ctrl, args){
      var payment = args.item;
      return m('.w-row.payment-status', [
        m('.fontsize-smallest.lineheight-looser.fontweight-semibold',[
          m('span.fa.fa-circle' + ctrl.stateClass()), ' ' + payment.state
        ]),
        m('.fontsize-smallest.fontweight-semibold',[
          m('span.fa' + ctrl.paymentMethodClass()), ' ', m('a.link-hidden[href="#"]', payment.payment_method)
        ]),
        m('.fontsize-smallest.fontcolor-secondary.lineheight-tight', [
          ctrl.displayPaymentMethod()
        ])
      ]);
    }
  };
}(window.m));

window.c.ProjectCard = (function(m, h, models){
  return {

    view: function(ctrl, args) {
      var project = args.project,
          progress = project.progress.toFixed(2),
          remainingTextObj = h.generateRemaingTime(project)();

      return m('.w-col.w-col-4', [
        m('.card-project.card.u-radius', [
          m('a.card-project-thumb[href="' +  project.permalink + '"]', {style: {'background-image': 'url(' + project.project_img + ')', 'display': 'block'}}),
          m('.card-project-description.alt', [
            m('.fontweight-semibold.u-text-center-small-only.lineheight-tight.u-marginbottom-10.fontsize-base', [
              m('a.link-hidden[href="/' + project.permalink + '"]', project.project_name)
            ]
          ),
            m('.w-hidden-small.w-hidden-tiny.fontsize-smallest.fontcolor-secondary.u-marginbottom-20', 'por ' + project.owner_name),
            m('.w-hidden-small.w-hidden-tiny.fontcolor-secondary.fontsize-smaller', [
              m('a.link-hidden[href="/' + project.permalink + '"]', project.headline)
            ])
          ]),
          m('.w-hidden-small.w-hidden-tiny.card-project-author.altt', [
            m('.fontsize-smallest.fontcolor-secondary', [m('span.fa.fa-map-marker.fa-1', ' '), ' ' +  project.city_name + ', ' + project.state_acronym])
          ]),
          m('.card-project-meter', [
            m('.meter', [
              m('.meter-fill', {style: {width: (progress > 100 ? 100 : progress) + '%'}})
            ])
          ]),
          m('.card-project-stats', [
            m('.w-row', [
              m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4', [
                m('.fontsize-base.fontweight-semibold', Math.ceil(project.progress) +  '%')
              ]),
              m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.u-text-center-small-only', [
                m('.fontsize-smaller.fontweight-semibold', '$ ' + project.pledged),
                m('.fontsize-smallest.lineheight-tightest', 'Levantados')
              ]),
              m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.u-text-right', [
                m('.fontsize-smaller.fontweight-semibold', remainingTextObj.total + ' ' + remainingTextObj.unit),
                m('.fontsize-smallest.lineheight-tightest', 'Restantes')
              ])
            ])
          ])
        ])
      ]);
    }
  };
}(window.m, window.c.h, window.c.models));


window.c.ProjectChartContributionAmountPerDay = (function(m, Chart, _, h){
  return {
    controller: function(args) {
      var resource = args.collection()[0],
          mountDataset = function() {
            return [{
              label: '$ arrecadados por dia',
              fillColor: 'rgba(126,194,69,0.2)',
              strokeColor: 'rgba(126,194,69,1)',
              pointColor: 'rgba(126,194,69,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: _.map(resource.source, function(item) {return item.total_amount;})
            }];
          },
          renderChart = function(element, isInitialized){
            if (isInitialized){return;}

            Object.defineProperty(element, 'offsetHeight', {
              get: function() { return element.height; },
            });
            Object.defineProperty(element, 'offsetWidth', {
              get: function() { return element.width; },
            });
            var ctx = element.getContext('2d');

            new Chart(ctx).Line({
              labels: _.map(resource.source, function(item) {return h.momentify(item.paid_at);}),
              datasets: mountDataset()
            });
          };

      return {
        renderChart: renderChart
      };
    },
    view: function(ctrl) {
      return m('.card.u-radius.medium.u-marginbottom-30', [
        m('.fontweight-semibold.u-marginbottom-10.fontsize-large.u-text-center', '$ arrecadados por dia'),
        m('.w-row',[
          m('.w-col.w-col-12', [
            m('canvas[id="chart"][width="860"][height="300"]', {config: ctrl.renderChart})
          ]),
        ])
      ]);
    }
  };
}(window.m, window.Chart, window._, window.c.h));


window.c.ProjectChartContributionTotalPerDay = (function(m, Chart, _, h){
  return {
    controller: function(args) {
      var resource = args.collection()[0],
          mountDataset = function() {
            return [{
              label: 'Apoios confirmados por dia',
              fillColor: 'rgba(126,194,69,0.2)',
              strokeColor: 'rgba(126,194,69,1)',
              pointColor: 'rgba(126,194,69,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: _.map(resource.source, function(item) {return item.total;})
            }];
          },
          renderChart = function(element, isInitialized){
            if (isInitialized){return;}

            Object.defineProperty(element, 'offsetHeight', {
              get: function() { return element.height; },
            });
            Object.defineProperty(element, 'offsetWidth', {
              get: function() { return element.width; },
            });
            var ctx = element.getContext('2d');

            new Chart(ctx).Line({
              labels: _.map(resource.source, function(item) {return h.momentify(item.paid_at);}),
              datasets: mountDataset()
            });
          };

      return {
        renderChart: renderChart
      };
    },
    view: function(ctrl) {
      return m('.card.u-radius.medium.u-marginbottom-30', [
        m('.fontweight-semibold.u-marginbottom-10.fontsize-large.u-text-center', 'Apoios confirmados por dia'),
        m('.w-row',[
          m('.w-col.w-col-12', [
            m('canvas[id="chart"][width="860"][height="300"]', {config: ctrl.renderChart})
          ]),
        ])
      ]);
    }
  };
}(window.m, window.Chart, window._, window.c.h));

window.c.ProjectContributionsPerLocationTable = (function(m, models, h, _) {
  return {
    controller: function(args) {
      var	vm = m.postgrest.filtersVM({project_id: 'eq'}),
          contributionsPerLocation = m.prop([]),
          generateSort = function(field) {
            return function(){
              var collection = contributionsPerLocation(),
                  resource = collection[0],
                  orderedSource = _.sortBy(resource.source, field);

              if (resource.orderFilter === undefined) {
                resource.orderFilter = 'DESC';
              }

              if (resource.orderFilter === 'DESC') {
                orderedSource = orderedSource.reverse();
              }

              resource.source = orderedSource;
              resource.orderFilter = (resource.orderFilter === 'DESC' ? 'ASC' : 'DESC');
              contributionsPerLocation(collection);
            };
          };

      vm.project_id(args.resourceId);

      models.projectContributionsPerLocation.getRow(vm.parameters()).then(function(data){
        contributionsPerLocation(data);
        generateSort('total_contributed')();
      });

      return {
        contributionsPerLocation: contributionsPerLocation,
        generateSort: generateSort
      };
    },
    view: function(ctrl) {
      return m('.project-contributions-per-location', [
        m('.fontweight-semibold.u-marginbottom-10.fontsize-large.u-text-center', 'Localização geográfica dos apoios'),
        ctrl.contributionsPerLocation().map(function(contributionLocation){
          return m('.table-outer.u-marginbottom-60', [
            m('.w-row.table-row.fontweight-semibold.fontsize-smaller.header', [
              m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.table-col', [
                m('div', 'Estado')
              ]),
              m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.table-col[data-ix="sort-arrows"]', [
                m('a.link-hidden[href="javascript:void(0);"]', {onclick: ctrl.generateSort('total_contributions')}, [
                  'Apoios  ',m('span.fa.fa-sort')
                ])
              ]),
              m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.table-col[data-ix="sort-arrows"]', [
                m('a.link-hidden[href="javascript:void(0);"]', {onclick: ctrl.generateSort('total_contributed')}, [
                  '$ apoiados ',
                  m('span.w-hidden-small.w-hidden-tiny','(% do total) '),
                  ' ',m('span.fa.fa-sort')
                ])
              ])
            ]),
            m('.table-inner.fontsize-small', [
              _.map(contributionLocation.source, function(source) {
                return m('.w-row.table-row', [
                  m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.table-col', [
                    m('div', source.state_acronym)
                  ]),
                  m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.table-col', [
                    m('div', source.total_contributions)
                  ]),
                  m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.table-col', [
                    m('div', [
                      '$ ',
                      h.formatNumber(source.total_contributed, 2, 3),
                      m('span.w-hidden-small.w-hidden-tiny', '  (' + source.total_on_percentage.toFixed(2) + '%)')
                    ])
                  ])
                ]);
              })
            ])
          ]);
        })
      ]);
    }
  };
}(window.m, window.c.models, window.c.h, window._));

window.c.ProjectReminderCount = (function(m){
  return {
    view: function(ctrl, args) {
      var project = args.resource;
      return m('#project-reminder-count.card.u-radius.u-text-center.medium.u-marginbottom-80', [
        m('.fontsize-large.fontweight-semibold', 'Total de pessoas que clicaram no botão Lembrar-me'),
        m('.fontsize-smaller.u-marginbottom-30', 'Um lembrete por email é enviado 48 horas antes do término da sua campanha'),
        m('.fontsize-jumbo', project.reminder_count)
      ]);
    }
  };
}(window.m));

window.c.ProjectRow = (function(m){
  return {

    view: function(ctrl, args) {
      var collection = args.collection;
      return collection.collection().length > 0 ? m('.w-section.section.u-marginbottom-40', [
        m('.w-container', [
          m('.w-row.u-marginbottom-30', [
            m('.w-col.w-col-10.w-col-small-6.w-col-tiny-6', [
              m('.fontsize-large.lineheight-looser', collection.title)
            ]),
            m('.w-col.w-col-2.w-col-small-6.w-col-tiny-6', [
              m('a.btn.btn-small.btn-terciary[href="/pt/explore?ref=home_' + collection.hash + '#' + collection.hash + '"]', 'Ver todos')
            ])
          ]),
          m('.w-row', _.map(collection.collection(), function(project){
            return m.component(c.ProjectCard, {project: project});
          }))
        ])
      ]) : m('');
    }};
}(window.m));


window.c.TeamMembers = (function(_, m, models){
  return {
    controller: function() {
      var vm = {collection: m.prop([])},

        groupCollection = function(collection, groupTotal) {
        return _.map(_.range(Math.ceil(collection.length / groupTotal)), function(i){
          return collection.slice(i * groupTotal, (i + 1) * groupTotal);
        });
      };

      models.teamMember.getPage().then(function(data){
        vm.collection(groupCollection(data, 4));
      });

      return {
        vm: vm
      };
    },

    view: function(ctrl) {
      return m('#team-members-static.w-section.section', [
        m('.w-container',[
          _.map(ctrl.vm.collection(), function(group) {
            return m('.w-row.u-text-center',[
              _.map(group, function(member) {
                return m('.team-member.w-col.w-col-3.w-col-small-3.w-col-tiny-6.u-marginbottom-40', [
                  m('a.alt-link[href="/users/' + member.id + '"]', [
                    m('img.thumb.big.u-round.u-marginbottom-10[src="' + member.img + '"]'),
                    m('.fontweight-semibold.fontsize-base', member.name)
                  ]),
                  m('.fontsize-smallest.fontcolor-secondary', 'Apoiou ' + member.total_contributed_projects + ' projetos')
                ]);
              })
            ]);
          })
        ])
      ]);
    }
  };
}(window._, window.m, window.c.models));

window.c.TeamTotal = (function(m, h, models){
  return {
    controller: function() {
      var vm = {collection: m.prop([])};

      models.teamTotal.getRow().then(function(data){
        vm.collection(data);
      });

      return {
        vm: vm
      };
    },

    view: function(ctrl) {
      return m('#team-total-static.w-section.section-one-column.u-margintop-40.u-text-center.u-marginbottom-20', [
        ctrl.vm.collection().map(function(teamTotal){
          return m('.w-container', [
            m('.w-row', [
              m('.w-col.w-col-2'),
              m('.w-col.w-col-8', [
                m('.fontsize-base.u-marginbottom-30',
                  'Hoje somos ' + teamTotal.member_count + ' pessoas espalhadas por ' + teamTotal.total_cities + ' cidades em ' + teamTotal.countries.length +
                    ' países (' + teamTotal.countries.toString() + ')! O Catarse é independente, sem investidores, de código aberto e construído com amor. Nossa paixão é construir um ambiente onde cada vez mais projetos possam ganhar vida.'),
                  m('.fontsize-larger.lineheight-tight.text-success',
                    'Nossa equipe, junta, já apoiou $' + h.formatNumber(teamTotal.total_amount) + ' para ' + teamTotal.total_contributed_projects + ' projetos!')]),
                    m('.w-col.w-col-2')
            ])
          ]);
        })
      ]);
    }
  };
}(window.m, window.c.h, window.c.models));

window.c.admin.Contributions = (function(m, c, h){
  var admin = c.admin;
  return {
    controller: function(){
      var listVM = admin.contributionListVM,
          filterVM = admin.contributionFilterVM,
          error = m.prop(''),
          itemBuilder = [
            {
              component: 'AdminUser',
              wrapperClass: '.w-col.w-col-4'
            },
            {
              component: 'AdminProject',
              wrapperClass: '.w-col.w-col-4'
            },
            {
              component: 'AdminContribution',
              wrapperClass: '.w-col.w-col-2'
            },
            {
              component: 'PaymentStatus',
              wrapperClass: '.w-col.w-col-2'
            }
          ],
          itemActions = [
            {
              component: 'AdminInputAction',
              data: {
                property: 'user_id',
                updateKey: 'id',
                property: 'contribution_id',
                callToAction: 'Transferir',
                innerLabel: 'Id do novo apoiador:',
                outerLabel: 'Transferir Apoio',
                placeholder: 'ex: 129908',
                model: c.models.contributionDetail
              }
            },
            {
              component: 'AdminRadioAction',
              data: {
                getKey: 'project_id',
                updateKey: 'contribution_id',
                property: 'reward_id',
                radios: 'rewards',
                callToAction: 'Alterar Recompensa',
                outerLabel: 'Recompensa',
                getModel: c.models.projectDetail,
                updateModel: c.models.contributionDetail
              }
            },
            {
              component: 'AdminInputAction',
              data: {
                property: 'state',
                updateKey: 'id',
                callToAction: 'Apagar',
                innerLabel: 'Tem certeza que deseja apagar esse apoio?',
                outerLabel: 'Apagar Apoio',
                forceValue: 'deleted',
                model: c.models.contributionDetail
              }
            }
          ],
          filterBuilder = [
            { //full_text_index
              component: 'FilterMain',
              data: {
                vm: filterVM.full_text_index,
                placeholder: 'Busque por projeto, email, Ids do usuário e do apoio...'
              }
            },
            { //state
              component: 'FilterDropdown',
              data: {
                label: 'Com o estado',
                name: 'state',
                vm: filterVM.state,
                options: [
                  {value: '', option: 'Qualquer um'},
                  {value: 'paid', option: 'paid'},
                  {value: 'refused', option: 'refused'},
                  {value: 'pending', option: 'pending'},
                  {value: 'pending_refund', option: 'pending_refund'},
                  {value: 'refunded', option: 'refunded'},
                  {value: 'chargeback', option: 'chargeback'},
                  {value: 'deleted', option: 'deleted'}
                ]
              }
            },
            { //gateway
              component: 'FilterDropdown',
              data: {
                label: 'gateway',
                name: 'gateway',
                vm: filterVM.gateway,
                options: [
                  {value: '', option: 'Qualquer um'},
                  {value: 'Pagarme', option: 'Pagarme'},
                  {value: 'MoIP', option: 'MoIP'},
                  {value: 'PayPal', option: 'PayPal'},
                  {value: 'Credits', option: 'Créditos'}
                ]
              }
            },
            { //value
              component: 'FilterNumberRange',
              data: {
                label: 'Valores entre',
                first: filterVM.value.gte,
                last: filterVM.value.lte
              }
            },
            { //created_at
              component: 'FilterDateRange',
              data: {
                label: 'Período do apoio',
                first: filterVM.created_at.gte,
                last: filterVM.created_at.lte
              }
            }
          ],
          submit = function(){
            listVM.firstPage(filterVM.parameters()).then(null, function(serverError){
              error(serverError.message);
            });
            return false;
          };

      return {
        filterVM: filterVM,
        filterBuilder: filterBuilder,
        itemActions: itemActions,
        itemBuilder: itemBuilder,
        listVM: {list: listVM, error: error},
        submit: submit
      };
    },

    view: function(ctrl){
      return [
        m.component(c.AdminFilter,{form: ctrl.filterVM.formDescriber, filterBuilder: ctrl.filterBuilder, submit: ctrl.submit}),
        m.component(c.AdminList, {vm: ctrl.listVM, itemBuilder: ctrl.itemBuilder, itemActions: ctrl.itemActions})
      ];
    }
  };
}(window.m, window.c, window.c.h));

window.c.contribution.projectsHome = (function(m, c){
  return {
    controller: function() {
      var vm = {
        recommendedCollection: m.prop([]),
        recentCollection: m.prop([]),
        nearMeCollection: m.prop([]),
        expiringCollection: m.prop([])
      },
      project = c.models.project,

      expiring = m.postgrest.filtersVM({expires_at: 'lte', state: 'eq'}),
      nearMe = m.postgrest.filtersVM({near_me: 'eq', state: 'eq'}),
      recents = m.postgrest.filtersVM({online_date: 'gte', state: 'eq'}),
      recommended = m.postgrest.filtersVM({recommended: 'eq', state: 'eq'});

      expiring.expires_at(moment().add(14, 'days').format('YYYY-MM-DD'));
      expiring.state('online');

      nearMe.near_me('true').state('online');

      recents.online_date(moment().subtract(5, 'days').format('YYYY-MM-DD'));
      recents.state('online');

      recommended.recommended('true').state('online');

      project.getPage(nearMe.parameters()).then(vm.nearMeCollection);
      project.getPage(recommended.parameters()).then(vm.recommendedCollection);
      project.getPage(recents.parameters()).then(vm.recentCollection);
      project.getPage(expiring.parameters()).then(vm.expiringCollection);

      var collections = [
        {
          title: 'Próximos a você',
          hash: 'near_of',
          collection: vm.nearMeCollection
        },
        {
          title: 'Recomendados',
          hash: 'recommended',
          collection: vm.recommendedCollection
        },
        {
          title: 'Na reta final',
          hash: 'expiring',
          collection: vm.expiringCollection
        },
        {
          title: 'Recentes',
          hash: 'recent',
          collection: vm.recentCollection
        }
      ];

      return {
        collections: collections
      };
    },

    view: function(ctrl) {
      return _.map(ctrl.collections, function(collection){
        return m.component(c.ProjectRow, {collection: collection});
      });
    }
  };
}(window.m, window.c));

window.c.pages.Team = (function(m, c){
  return {
    view: function() {
      return m('#static-team-app',[
        m.component(c.TeamTotal),
        m.component(c.TeamMembers)
      ]);
    }
  };
}(window.m, window.c));

window.c.project.Insights = (function(m, c, models, _){
  return {
    controller: function(args) {
      var vm = m.postgrest.filtersVM({project_id: 'eq'}),
          projectDetails = m.prop([]),
          contributionsPerDay = m.prop([]);

      vm.project_id(args.root.getAttribute('data-id'));

      models.projectDetail.getRow(vm.parameters()).then(projectDetails);
      models.projectContributionsPerDay.getRow(vm.parameters()).then(contributionsPerDay);

      return {
        vm: vm,
        projectDetails: projectDetails,
        contributionsPerDay: contributionsPerDay
      };
    },
    view: function(ctrl) {
      return _.map(ctrl.projectDetails(), function(project){
        return m('.project-insights',[
          m('.w-container', [
            m('.w-row.u-marginbottom-40', [
              m('.w-col.w-col-2'),
              m('.w-col.w-col-8.dashboard-header.u-text-center', [
                m('.fontweight-semibold.fontsize-larger.lineheight-looser.u-marginbottom-10', 'Minha campanha'),
                m.component(c.AdminProjectDetailsCard, {resource: project}),
                m.component(c.AdminProjectDetailsExplanation, {resource: project})
              ]),
              m('.w-col.w-col-2')
            ])
          ]),
          (function(project){
            if (project.is_published) {
              return [
                m('.divider'),
                m('.w-section.section-one-column.bg-gray.before-footer', [
                  m('.w-container', [
                    m('.w-row', [
                      m('.w-col.w-col-12.u-text-center', {style: {'min-height': '300px'}}, [
                        m.component(c.ProjectChartContributionTotalPerDay, {collection: ctrl.contributionsPerDay})
                      ]),
                    ]),
                    m('.w-row', [
                      m('.w-col.w-col-12.u-text-center', {style: {'min-height': '300px'}}, [
                        m.component(c.ProjectChartContributionAmountPerDay, {collection: ctrl.contributionsPerDay})
                      ]),
                    ]),
                    m('.w-row', [
                      m('.w-col.w-col-12.u-text-center', [
                        m.component(c.ProjectContributionsPerLocationTable, {resourceId: ctrl.vm.project_id()})
                      ]),
                    ]),
                    m('.w-row', [
                      m('.w-col.w-col-12.u-text-center', [
                        m.component(c.ProjectReminderCount, {resource: project})
                      ]),
                    ])
                  ])
                ])
              ];
            }
          }(project))
        ]);
      });
    }
  };
}(window.m, window.c, window.c.models, window._));

window.c.admin.contributionFilterVM = (function(m, h, replaceDiacritics){
  var vm = m.postgrest.filtersVM({
    full_text_index: '@@',
    state: 'eq',
    gateway: 'eq',
    value: 'between',
    created_at: 'between'
  }),

  paramToString = function(p){
    return (p || '').toString().trim();
  };

  // Set default values
  vm.state('');
  vm.gateway('');
  vm.order({id: 'desc'});

  vm.created_at.lte.toFilter = function(){
    var filter = paramToString(vm.created_at.lte());
    return filter && h.momentFromString(filter).endOf('day').format('');
  };

  vm.created_at.gte.toFilter = function(){
    var filter = paramToString(vm.created_at.gte());
    return filter && h.momentFromString(filter).format();
  };

  vm.full_text_index.toFilter = function(){
    var filter = paramToString(vm.full_text_index());
    return filter && replaceDiacritics(filter) || undefined;
  };

  return vm;
}(window.m, window.c.h, window.replaceDiacritics));

window.c.admin.contributionListVM = (function(m, models) {
  return m.postgrest.paginationVM(models.contributionDetail.getPageWithToken);
}(window.m, window.c.models));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImMuanMiLCJoLmpzIiwibW9kZWxzLmpzIiwiYWRtaW4tY29udHJpYnV0aW9uLmpzIiwiYWRtaW4tZGV0YWlsLmpzIiwiYWRtaW4tZmlsdGVyLmpzIiwiYWRtaW4taW5wdXQtYWN0aW9uLmpzIiwiYWRtaW4taXRlbS5qcyIsImFkbWluLWxpc3QuanMiLCJhZG1pbi1wcm9qZWN0LWRldGFpbHMtY2FyZC5qcyIsImFkbWluLXByb2plY3QtZGV0YWlscy1leHBsYW5hdGlvbi5qcyIsImFkbWluLXByb2plY3QuanMiLCJhZG1pbi1yYWRpby1hY3Rpb24uanMiLCJhZG1pbi1yZXdhcmQuanMiLCJhZG1pbi10cmFuc2FjdGlvbi1oaXN0b3J5LmpzIiwiYWRtaW4tdHJhbnNhY3Rpb24uanMiLCJhZG1pbi11c2VyLmpzIiwiZmlsdGVyLWRhdGUtcmFuZ2UuanMiLCJmaWx0ZXItZHJvcGRvd24uanMiLCJmaWx0ZXItbWFpbi5qcyIsImZpbHRlci1udW1iZXItcmFuZ2UuanMiLCJwYXltZW50LXN0YXR1cy5qcyIsInByb2plY3QtY2FyZC5qcyIsInByb2plY3QtY2hhcnQtY29udHJpYnV0aW9uLWFtb3VudC1wZXItZGF5LmpzIiwicHJvamVjdC1jaGFydC1jb250cmlidXRpb24tdG90YWwtcGVyLWRheS5qcyIsInByb2plY3QtY29udHJpYnV0aW9ucy1wZXItbG9jYXRpb24tdGFibGUuanMiLCJwcm9qZWN0LXJlbWluZGVyLWNvdW50LmpzIiwicHJvamVjdC1yb3cuanMiLCJ0ZWFtLW1lbWJlcnMuanMiLCJ0ZWFtLXRvdGFsLmpzIiwiYWRtaW4vY29udHJpYnV0aW9ucy5qcyIsImNvbnRyaWJ1dGlvbi9wcm9qZWN0c0hvbWUuanMiLCJwYWdlcy90ZWFtLmpzIiwicHJvamVjdC9pbnNpZ2h0cy5qcyIsImFkbWluL2NvbnRyaWJ1dGlvbnMvY29udHJpYnV0aW9uLWZpbHRlci12bS5qcyIsImFkbWluL2NvbnRyaWJ1dGlvbnMvY29udHJpYnV0aW9uLWxpc3Qtdm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjYXRhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmMgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHtcbiAgICBtb2RlbHM6IHt9LFxuICAgIHBhZ2VzOiB7fSxcbiAgICBjb250cmlidXRpb246IHt9LFxuICAgIGFkbWluOiB7fSxcbiAgICBwcm9qZWN0OiB7fSxcbiAgICBoOiB7fVxuICB9O1xufSgpKTtcbiIsIndpbmRvdy5jLmggPSAoZnVuY3Rpb24obSwgbW9tZW50KXtcbiAgLy9EYXRlIEhlbHBlcnNcbiAgdmFyIG1vbWVudGlmeSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCl7XG4gICAgZm9ybWF0ID0gZm9ybWF0IHx8ICdERC9NTS9ZWVlZJztcbiAgICByZXR1cm4gZGF0ZSA/IG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KSA6ICdubyBkYXRlJztcbiAgfSxcblxuICBtb21lbnRGcm9tU3RyaW5nID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0KXtcbiAgICB2YXIgZXVyb3BlYW4gPSBtb21lbnQoZGF0ZSwgZm9ybWF0IHx8ICdERC9NTS9ZWVlZJyk7XG4gICAgcmV0dXJuIGV1cm9wZWFuLmlzVmFsaWQoKSA/IGV1cm9wZWFuIDogbW9tZW50KGRhdGUpO1xuICB9LFxuXG4gIC8vTnVtYmVyIGZvcm1hdHRpbmcgaGVscGVyc1xuICBnZW5lcmF0ZUZvcm1hdE51bWJlciA9IGZ1bmN0aW9uKHMsIGMpe1xuICAgIHJldHVybiBmdW5jdGlvbihudW1iZXIsIG4sIHgpIHtcbiAgICAgIGlmIChudW1iZXIgPT09IG51bGwgfHwgbnVtYmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZSA9ICdcXFxcZCg/PShcXFxcZHsnICsgKHggfHwgMykgKyAnfSkrJyArIChuID4gMCA/ICdcXFxcRCcgOiAnJCcpICsgJyknLFxuICAgICAgICAgIG51bSA9IG51bWJlci50b0ZpeGVkKE1hdGgubWF4KDAsIH5+bikpO1xuICAgICAgcmV0dXJuIChjID8gbnVtLnJlcGxhY2UoJy4nLCBjKSA6IG51bSkucmVwbGFjZShuZXcgUmVnRXhwKHJlLCAnZycpLCAnJCYnICsgKHMgfHwgJywnKSk7XG4gICAgfTtcbiAgfSxcbiAgZm9ybWF0TnVtYmVyID0gZ2VuZXJhdGVGb3JtYXROdW1iZXIoJy4nLCAnLCcpLFxuXG4gIC8vT2JqZWN0IG1hbmlwdWxhdGlvbiBoZWxwZXJzXG4gIGdlbmVyYXRlUmVtYWluZ1RpbWUgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgdmFyIHJlbWFpbmluZ1RleHRPYmogPSBtLnByb3Aoe30pLFxuICAgICAgICB0cmFuc2xhdGVkVGltZSA9IHtcbiAgICAgICAgICBkYXlzOiAnZGlhcycsXG4gICAgICAgICAgbWludXRlczogJ21pbnV0b3MnLFxuICAgICAgICAgIGhvdXJzOiAnaG9yYXMnLFxuICAgICAgICAgIHNlY29uZHM6ICdzZWd1bmRvcydcbiAgICAgICAgfTtcblxuICAgIHJlbWFpbmluZ1RleHRPYmooe1xuICAgICAgdW5pdDogdHJhbnNsYXRlZFRpbWVbcHJvamVjdC5yZW1haW5pbmdfdGltZS51bml0IHx8ICdzZWNvbmRzJ10sXG4gICAgICB0b3RhbDogcHJvamVjdC5yZW1haW5pbmdfdGltZS50b3RhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbWFpbmluZ1RleHRPYmo7XG4gIH0sXG5cbiAgdG9nZ2xlUHJvcCA9IGZ1bmN0aW9uKGRlZmF1bHRTdGF0ZSwgYWx0ZXJuYXRlU3RhdGUpe1xuICAgIHZhciBwID0gbS5wcm9wKGRlZmF1bHRTdGF0ZSk7XG4gICAgcC50b2dnbGUgPSBmdW5jdGlvbigpe1xuICAgICAgcCgoKHAoKSA9PT0gYWx0ZXJuYXRlU3RhdGUpID8gZGVmYXVsdFN0YXRlIDogYWx0ZXJuYXRlU3RhdGUpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHA7XG4gIH0sXG5cbiAgaWRWTSA9IG0ucG9zdGdyZXN0LmZpbHRlcnNWTSh7aWQ6ICdlcSd9KSxcblxuICAvL1RlbXBsYXRlc1xuICBsb2FkZXIgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBtKCcudS10ZXh0LWNlbnRlci51LW1hcmdpbnRvcC0zMFtzdHlsZT1cIm1hcmdpbi1ib3R0b206LTExMHB4O1wiXScsIFtcbiAgICAgIG0oJ2ltZ1thbHQ9XCJMb2FkZXJcIl1bc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2NhdGFyc2UuZmlsZXMvbG9hZGVyLmdpZlwiXScpXG4gICAgXSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb21lbnRpZnk6IG1vbWVudGlmeSxcbiAgICBtb21lbnRGcm9tU3RyaW5nOiBtb21lbnRGcm9tU3RyaW5nLFxuICAgIGZvcm1hdE51bWJlcjogZm9ybWF0TnVtYmVyLFxuICAgIGlkVk06IGlkVk0sXG4gICAgdG9nZ2xlUHJvcDogdG9nZ2xlUHJvcCxcbiAgICBnZW5lcmF0ZVJlbWFpbmdUaW1lOiBnZW5lcmF0ZVJlbWFpbmdUaW1lLFxuICAgIGxvYWRlcjogbG9hZGVyXG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cubW9tZW50KSk7XG4iLCJ3aW5kb3cuYy5tb2RlbHMgPSAoZnVuY3Rpb24obSl7XG4gIHZhciBjb250cmlidXRpb25EZXRhaWwgPSBtLnBvc3RncmVzdC5tb2RlbCgnY29udHJpYnV0aW9uX2RldGFpbHMnKSxcblxuICBwcm9qZWN0RGV0YWlsID0gbS5wb3N0Z3Jlc3QubW9kZWwoJ3Byb2plY3RfZGV0YWlscycpLFxuICBjb250cmlidXRpb25zID0gbS5wb3N0Z3Jlc3QubW9kZWwoJ2NvbnRyaWJ1dGlvbnMnKSxcbiAgdGVhbVRvdGFsID0gbS5wb3N0Z3Jlc3QubW9kZWwoJ3RlYW1fdG90YWxzJyksXG4gIHByb2plY3RDb250cmlidXRpb25zUGVyRGF5ID0gbS5wb3N0Z3Jlc3QubW9kZWwoJ3Byb2plY3RfY29udHJpYnV0aW9uc19wZXJfZGF5JyksXG4gIHByb2plY3RDb250cmlidXRpb25zUGVyTG9jYXRpb24gPSBtLnBvc3RncmVzdC5tb2RlbCgncHJvamVjdF9jb250cmlidXRpb25zX3Blcl9sb2NhdGlvbicpLFxuICBwcm9qZWN0ID0gbS5wb3N0Z3Jlc3QubW9kZWwoJ3Byb2plY3RzJyksXG4gIHRlYW1NZW1iZXIgPSBtLnBvc3RncmVzdC5tb2RlbCgndGVhbV9tZW1iZXJzJyk7XG4gIHRlYW1NZW1iZXIucGFnZVNpemUoNDApO1xuICBwcm9qZWN0LnBhZ2VTaXplKDMpO1xuXG4gIHJldHVybiB7XG4gICAgY29udHJpYnV0aW9uRGV0YWlsOiBjb250cmlidXRpb25EZXRhaWwsXG4gICAgcHJvamVjdERldGFpbDogcHJvamVjdERldGFpbCxcbiAgICBjb250cmlidXRpb25zOiBjb250cmlidXRpb25zLFxuICAgIHRlYW1Ub3RhbDogdGVhbVRvdGFsLFxuICAgIHRlYW1NZW1iZXI6IHRlYW1NZW1iZXIsXG4gICAgcHJvamVjdDogcHJvamVjdCxcbiAgICBwcm9qZWN0Q29udHJpYnV0aW9uc1BlckRheTogcHJvamVjdENvbnRyaWJ1dGlvbnNQZXJEYXksXG4gICAgcHJvamVjdENvbnRyaWJ1dGlvbnNQZXJMb2NhdGlvbjogcHJvamVjdENvbnRyaWJ1dGlvbnNQZXJMb2NhdGlvblxuICB9O1xufSh3aW5kb3cubSkpO1xuIiwid2luZG93LmMuQWRtaW5Db250cmlidXRpb24gPSAoZnVuY3Rpb24obSwgaCl7XG4gIHJldHVybiB7XG4gICAgdmlldzogZnVuY3Rpb24oY3RybCwgYXJncykge1xuICAgICAgdmFyIGNvbnRyaWJ1dGlvbiA9IGFyZ3MuaXRlbTtcbiAgICAgIHJldHVybiBtKCcudy1yb3cuYWRtaW4tY29udHJpYnV0aW9uJywgW1xuICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5saW5laGVpZ2h0LXRpZ2h0ZXIudS1tYXJnaW5ib3R0b20tMTAuZm9udHNpemUtc21hbGwnLCAnUiQnICsgY29udHJpYnV0aW9uLnZhbHVlKSxcbiAgICAgICAgICBtKCcuZm9udHNpemUtc21hbGxlc3QuZm9udGNvbG9yLXNlY29uZGFyeScsIGgubW9tZW50aWZ5KGNvbnRyaWJ1dGlvbi5jcmVhdGVkX2F0LCAnREQvTU0vWVlZWSBISDptbVtoXScpKSxcbiAgICAgICAgICBtKCcuZm9udHNpemUtc21hbGxlc3QnLCBbXG4gICAgICAgICAgICAnSUQgZG8gR2F0ZXdheTogJyxcbiAgICAgICAgICAgIG0oJ2EuYWx0LWxpbmtbdGFyZ2V0PVwiX2JsYW5rXCJdW2hyZWY9XCJodHRwczovL2Rhc2hib2FyZC5wYWdhci5tZS8jL3RyYW5zYWN0aW9ucy8nICsgY29udHJpYnV0aW9uLmdhdGV3YXlfaWQgKyAnXCJdJywgY29udHJpYnV0aW9uLmdhdGV3YXlfaWQpXG4gICAgICAgICAgXSlcbiAgICAgIF0pO1xuICAgIH1cbiAgfTtcbn0od2luZG93Lm0sIHdpbmRvdy5jLmgpKTtcbiIsIndpbmRvdy5jLkFkbWluRGV0YWlsID0gKGZ1bmN0aW9uKG0sIF8sIGMpe1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCl7XG4gICAgfSxcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsLCBhcmdzKXtcbiAgICAgIHZhciBhY3Rpb25zID0gYXJncy5hY3Rpb25zLFxuICAgICAgICAgIGl0ZW0gPSBhcmdzLml0ZW07XG4gICAgICByZXR1cm4gbSgnI2FkbWluLWNvbnRyaWJ1dGlvbi1kZXRhaWwtYm94JywgW1xuICAgICAgICBtKCcuZGl2aWRlci51LW1hcmdpbnRvcC0yMC51LW1hcmdpbmJvdHRvbS0yMCcpLFxuICAgICAgICBtKCcudy1yb3cudS1tYXJnaW5ib3R0b20tMzAnLFxuICAgICAgICAgIF8ubWFwKGFjdGlvbnMsIGZ1bmN0aW9uKGFjdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gbS5jb21wb25lbnQoY1thY3Rpb24uY29tcG9uZW50XSwge2RhdGE6IGFjdGlvbi5kYXRhLCBpdGVtOiBhcmdzLml0ZW19KTtcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBtKCcudy1yb3cuY2FyZC5jYXJkLXRlcmNpYXJ5LnUtcmFkaXVzJyxbXG4gICAgICAgICAgbS5jb21wb25lbnQoYy5BZG1pblRyYW5zYWN0aW9uLCB7Y29udHJpYnV0aW9uOiBpdGVtfSksXG4gICAgICAgICAgbS5jb21wb25lbnQoYy5BZG1pblRyYW5zYWN0aW9uSGlzdG9yeSwge2NvbnRyaWJ1dGlvbjogaXRlbX0pLFxuICAgICAgICAgIG0uY29tcG9uZW50KGMuQWRtaW5SZXdhcmQsIHtjb250cmlidXRpb246IGl0ZW0sIGtleTogaXRlbS5rZXl9KVxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93Ll8sIHdpbmRvdy5jKSk7XG4iLCJ3aW5kb3cuYy5BZG1pbkZpbHRlciA9IChmdW5jdGlvbihjLCBtLCBfLCBoKXtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlcjogaC50b2dnbGVQcm9wKGZhbHNlLCB0cnVlKVxuICAgICAgfTtcbiAgICB9LFxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwsIGFyZ3Mpe1xuICAgICAgdmFyIGZpbHRlckJ1aWxkZXIgPSBhcmdzLmZpbHRlckJ1aWxkZXIsXG4gICAgICAgICAgbWFpbiA9IF8uZmluZFdoZXJlKGZpbHRlckJ1aWxkZXIsIHtjb21wb25lbnQ6ICdGaWx0ZXJNYWluJ30pO1xuXG4gICAgICByZXR1cm4gbSgnI2FkbWluLWNvbnRyaWJ1dGlvbnMtZmlsdGVyLnctc2VjdGlvbi5wYWdlLWhlYWRlcicsIFtcbiAgICAgICAgbSgnLnctY29udGFpbmVyJywgW1xuICAgICAgICAgIG0oJy5mb250c2l6ZS1sYXJnZXIudS10ZXh0LWNlbnRlci51LW1hcmdpbmJvdHRvbS0zMCcsICdBcG9pb3MnKSxcbiAgICAgICAgICBtKCcudy1mb3JtJywgW1xuICAgICAgICAgICAgbSgnZm9ybScsIHtcbiAgICAgICAgICAgICAgb25zdWJtaXQ6IGFyZ3Muc3VibWl0XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIChfLmZpbmRXaGVyZShmaWx0ZXJCdWlsZGVyLCB7Y29tcG9uZW50OiAnRmlsdGVyTWFpbid9KSkgPyBtLmNvbXBvbmVudChjW21haW4uY29tcG9uZW50XSwgbWFpbi5kYXRhKSA6ICcnLFxuICAgICAgICAgICAgICBtKCcudS1tYXJnaW5ib3R0b20tMjAudy1yb3cnLFxuICAgICAgICAgICAgICAgIG0oJ2J1dHRvbi53LWNvbC53LWNvbC0xMi5mb250c2l6ZS1zbWFsbGVzdC5saW5rLWhpZGRlbi1saWdodFtzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgb3V0bGluZTogbm9uZTsgdGV4dC1hbGlnbjogbGVmdDtcIl1bdHlwZT1cImJ1dHRvblwiXScsIHtcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2s6IGN0cmwudG9nZ2xlci50b2dnbGVcbiAgICAgICAgICAgICAgICB9LCAnRmlsdHJvcyBhdmFuw6dhZG9zIMKgPicpKSwgKGN0cmwudG9nZ2xlcigpID9cbiAgICAgICAgICAgICAgICBtKCcjYWR2YW5jZWQtc2VhcmNoLnctcm93LmFkbWluLWZpbHRlcnMnLCBbXG4gICAgICAgICAgICAgICAgICBfLm1hcChmaWx0ZXJCdWlsZGVyLCBmdW5jdGlvbihmKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChmLmNvbXBvbmVudCAhPT0gJ0ZpbHRlck1haW4nKSA/IG0uY29tcG9uZW50KGNbZi5jb21wb25lbnRdLCBmLmRhdGEpIDogJyc7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pIDogJydcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cuYywgd2luZG93Lm0sIHdpbmRvdy5fLCB3aW5kb3cuYy5oKSk7XG4iLCJ3aW5kb3cuYy5BZG1pbklucHV0QWN0aW9uID0gKGZ1bmN0aW9uKG0sIGgsIGMpe1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgdmFyIGJ1aWxkZXIgPSBhcmdzLmRhdGEsXG4gICAgICAgICAgY29tcGxldGUgPSBtLnByb3AoZmFsc2UpLFxuICAgICAgICAgIGVycm9yID0gbS5wcm9wKGZhbHNlKSxcbiAgICAgICAgICBmYWlsID0gbS5wcm9wKGZhbHNlKSxcbiAgICAgICAgICBkYXRhID0ge30sXG4gICAgICAgICAgaXRlbSA9IGFyZ3MuaXRlbSxcbiAgICAgICAgICBrZXkgPSBidWlsZGVyLnByb3BlcnR5LFxuICAgICAgICAgIG5ld1ZhbHVlID0gbS5wcm9wKGJ1aWxkZXIuZm9yY2VWYWx1ZSB8fCAnJyk7XG5cbiAgICAgIGguaWRWTS5pZChpdGVtW2J1aWxkZXIudXBkYXRlS2V5XSk7XG5cbiAgICAgIHZhciBsID0gbS5wb3N0Z3Jlc3QubG9hZGVyV2l0aFRva2VuKGJ1aWxkZXIubW9kZWwucGF0Y2hPcHRpb25zKGguaWRWTS5wYXJhbWV0ZXJzKCksIGRhdGEpKTtcblxuICAgICAgdmFyIHVwZGF0ZUl0ZW0gPSBmdW5jdGlvbihyZXMpe1xuICAgICAgICBfLmV4dGVuZChpdGVtLCByZXNbMF0pO1xuICAgICAgICBjb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgZXJyb3IoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgdmFyIHN1Ym1pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRhdGFba2V5XSA9IG5ld1ZhbHVlKCk7XG4gICAgICAgIGwubG9hZCgpLnRoZW4odXBkYXRlSXRlbSwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICB2YXIgdW5sb2FkID0gZnVuY3Rpb24oZWwsIGlzaW5pdCwgY29udGV4dCl7XG4gICAgICAgIGNvbnRleHQub251bmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIGNvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICBlcnJvcihmYWxzZSk7XG4gICAgICAgICAgbmV3VmFsdWUoYnVpbGRlci5mb3JjZVZhbHVlIHx8ICcnKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICBsOiBsLFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgIHN1Ym1pdDogc3VibWl0LFxuICAgICAgICB0b2dnbGVyOiBoLnRvZ2dsZVByb3AoZmFsc2UsIHRydWUpLFxuICAgICAgICB1bmxvYWQ6IHVubG9hZFxuICAgICAgfTtcbiAgICB9LFxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwsIGFyZ3Mpe1xuICAgICAgdmFyIGRhdGEgPSBhcmdzLmRhdGEsXG4gICAgICAgICAgYnRuVmFsdWUgPSAoY3RybC5sKCkpID8gJ3BvciBmYXZvciwgYWd1YXJkZS4uLicgOiBkYXRhLmNhbGxUb0FjdGlvbjtcblxuICAgICAgcmV0dXJuIG0oJy53LWNvbC53LWNvbC0yJyxbXG4gICAgICAgIG0oJ2J1dHRvbi5idG4uYnRuLXNtYWxsLmJ0bi10ZXJjaWFyeScsIHtcbiAgICAgICAgICBvbmNsaWNrOiBjdHJsLnRvZ2dsZXIudG9nZ2xlXG4gICAgICAgIH0sIGRhdGEub3V0ZXJMYWJlbCksXG4gICAgICAgIChjdHJsLnRvZ2dsZXIoKSkgP1xuICAgICAgICAgIG0oJy5kcm9wZG93bi1saXN0LmNhcmQudS1yYWRpdXMuZHJvcGRvd24tbGlzdC1tZWRpdW0uemluZGV4LTEwJywge2NvbmZpZzogY3RybC51bmxvYWR9LFtcbiAgICAgICAgICAgIG0oJ2Zvcm0udy1mb3JtJywge1xuICAgICAgICAgICAgICBvbnN1Ym1pdDogY3RybC5zdWJtaXRcbiAgICAgICAgICAgIH0sICghY3RybC5jb21wbGV0ZSgpKSA/IFtcbiAgICAgICAgICAgICAgICAgIG0oJ2xhYmVsJywgZGF0YS5pbm5lckxhYmVsKSxcbiAgICAgICAgICAgICAgICAgICghZGF0YS5mb3JjZVZhbHVlKSA/XG4gICAgICAgICAgICAgICAgICBtKCdpbnB1dC53LWlucHV0LnRleHQtZmllbGRbdHlwZT1cInRleHRcIl1bcGxhY2Vob2xkZXI9XCInICsgZGF0YS5wbGFjZWhvbGRlciArICdcIl0nLCB7b25jaGFuZ2U6IG0ud2l0aEF0dHIoJ3ZhbHVlJywgY3RybC5uZXdWYWx1ZSksIHZhbHVlOiBjdHJsLm5ld1ZhbHVlKCl9KSA6ICcnLFxuICAgICAgICAgICAgICAgICAgbSgnaW5wdXQudy1idXR0b24uYnRuLmJ0bi1zbWFsbFt0eXBlPVwic3VibWl0XCJdW3ZhbHVlPVwiJyArIGJ0blZhbHVlICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgXSA6ICghY3RybC5lcnJvcigpKSA/IFtcbiAgICAgICAgICAgICAgICAgICAgbSgnLnctZm9ybS1kb25lW3N0eWxlPVwiZGlzcGxheTpibG9jaztcIl0nLCBbXG4gICAgICAgICAgICAgICAgICAgICAgbSgncCcsICdBcG9pbyB0cmFuc2ZlcmlkbyBjb20gc3VjZXNzbyEnKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSA6IFtcbiAgICAgICAgICAgICAgICAgICAgbSgnLnctZm9ybS1lcnJvcltzdHlsZT1cImRpc3BsYXk6YmxvY2s7XCJdJywgW1xuICAgICAgICAgICAgICAgICAgICAgIG0oJ3AnLCAnSG91dmUgdW0gcHJvYmxlbWEgbmEgcmVxdWlzacOnw6NvLiBPIGFwb2lvIG7Do28gZm9pIHRyYW5zZmVyaWRvIScpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiAnJ1xuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93LmMuaCwgd2luZG93LmMpKTtcbiIsIndpbmRvdy5jLkFkbWluSXRlbSA9IChmdW5jdGlvbihtLCBfLCBoLCBjKXtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbihhcmdzKXtcblxuICAgICAgdmFyIGRpc3BsYXlEZXRhaWxCb3ggPSBoLnRvZ2dsZVByb3AoZmFsc2UsIHRydWUpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5RGV0YWlsQm94OiBkaXNwbGF5RGV0YWlsQm94XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsLCBhcmdzKSB7XG4gICAgICB2YXIgaXRlbSA9IGFyZ3MuaXRlbTtcblxuICAgICAgcmV0dXJuIG0oJy53LWNsZWFyZml4LmNhcmQudS1yYWRpdXMudS1tYXJnaW5ib3R0b20tMjAucmVzdWx0cy1hZG1pbi1pdGVtcycsW1xuICAgICAgICBtKCcudy1yb3cnLFtcbiAgICAgICAgICBfLm1hcChhcmdzLmJ1aWxkZXIsIGZ1bmN0aW9uKGRlc2Mpe1xuICAgICAgICAgICAgcmV0dXJuIG0oZGVzYy53cmFwcGVyQ2xhc3MsIFtcbiAgICAgICAgICAgICAgbS5jb21wb25lbnQoY1tkZXNjLmNvbXBvbmVudF0sIHtpdGVtOiBpdGVtLCBrZXk6IGl0ZW0ua2V5fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBtKCdidXR0b24udy1pbmxpbmUtYmxvY2suYXJyb3ctYWRtaW4uZmEuZmEtY2hldnJvbi1kb3duLmZvbnRjb2xvci1zZWNvbmRhcnknLCB7b25jbGljazogY3RybC5kaXNwbGF5RGV0YWlsQm94LnRvZ2dsZX0pLFxuICAgICAgICBjdHJsLmRpc3BsYXlEZXRhaWxCb3goKSA/IG0uY29tcG9uZW50KGMuQWRtaW5EZXRhaWwsIHtpdGVtOiBpdGVtLCBhY3Rpb25zOiBhcmdzLmFjdGlvbnMsIGtleTogaXRlbS5rZXl9KSA6ICcnXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuXywgd2luZG93LmMuaCwgd2luZG93LmMpKTtcbiIsIndpbmRvdy5jLkFkbWluTGlzdCA9IChmdW5jdGlvbihtLCBoLCBjKXtcbiAgdmFyIGFkbWluID0gYy5hZG1pbjtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICB2YXIgbGlzdCA9IGFyZ3Mudm0ubGlzdDtcbiAgICAgIGlmICghbGlzdC5jb2xsZWN0aW9uKCkubGVuZ3RoICYmIGxpc3QuZmlyc3RQYWdlKSB7XG4gICAgICAgIGxpc3QuZmlyc3RQYWdlKCkudGhlbihudWxsLCBmdW5jdGlvbihzZXJ2ZXJFcnJvcikge1xuICAgICAgICAgIGFyZ3Mudm0uZXJyb3Ioc2VydmVyRXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsLCBhcmdzKSB7XG4gICAgICB2YXIgbGlzdCA9IGFyZ3Mudm0ubGlzdCxcbiAgICAgICAgICBlcnJvciA9IGFyZ3Mudm0uZXJyb3I7XG4gICAgICByZXR1cm4gbSgnLnctc2VjdGlvbi5zZWN0aW9uJywgW1xuICAgICAgICBtKCcudy1jb250YWluZXInLFxuICAgICAgICAgIGVycm9yKCkgP1xuICAgICAgICAgICAgbSgnLmNhcmQuY2FyZC1lcnJvci51LXJhZGl1cy5mb250d2VpZ2h0LWJvbGQnLCBlcnJvcigpKSA6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIG0oJy53LXJvdy51LW1hcmdpbmJvdHRvbS0yMCcsIFtcbiAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtOScsIFtcbiAgICAgICAgICAgICAgICAgIG0oJy5mb250c2l6ZS1iYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5pc0xvYWRpbmcoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgJ0J1c2NhbmRvIGFwb2lvcy4uLicgOlxuICAgICAgICAgICAgICAgICAgICAgIFttKCdzcGFuLmZvbnR3ZWlnaHQtc2VtaWJvbGQnLCBsaXN0LnRvdGFsKCkpLCAnIGFwb2lvcyBlbmNvbnRyYWRvcyddXG4gICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtKCcjYWRtaW4tY29udHJpYnV0aW9ucy1saXN0LnctY29udGFpbmVyJyxbXG4gICAgICAgICAgICAgICAgbGlzdC5jb2xsZWN0aW9uKCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtLmNvbXBvbmVudChjLkFkbWluSXRlbSwge2J1aWxkZXI6IGFyZ3MuaXRlbUJ1aWxkZXIsIGFjdGlvbnM6IGFyZ3MuaXRlbUFjdGlvbnMsIGl0ZW06IGl0ZW0sIGtleTogaXRlbS5rZXl9KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKCcudy1zZWN0aW9uLnNlY3Rpb24nLFtcbiAgICAgICAgICAgICAgICAgIG0oJy53LWNvbnRhaW5lcicsW1xuICAgICAgICAgICAgICAgICAgICBtKCcudy1yb3cnLFtcbiAgICAgICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMi53LWNvbC1wdXNoLTUnLFtcbiAgICAgICAgICAgICAgICAgICAgICAgICFsaXN0LmlzTG9hZGluZygpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbSgnYnV0dG9uI2xvYWQtbW9yZS5idG4uYnRuLW1lZGl1bS5idG4tdGVyY2lhcnknLCB7b25jbGljazogbGlzdC5uZXh0UGFnZX0sICdDYXJyZWdhciBtYWlzJykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoLmxvYWRlcigpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICApXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYy5oLCB3aW5kb3cuYykpO1xuIiwid2luZG93LmMuQWRtaW5Qcm9qZWN0RGV0YWlsc0NhcmQgPSAoZnVuY3Rpb24obSwgaCl7XG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oYXJncykge1xuICAgICAgdmFyIHByb2plY3QgPSBhcmdzLnJlc291cmNlLFxuICAgICAgICAgIGdlbmVyYXRlU3RhdHVzVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHN0YXR1c1RleHRPYmogPSBtLnByb3Aoe30pLFxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSB7XG4gICAgICAgICAgICAgICAgICBvbmxpbmU6IHtjc3NDbGFzczogJ3RleHQtc3VjY2VzcycsIHRleHQ6ICdOTyBBUid9LFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bDoge2Nzc0NsYXNzOiAndGV4dC1zdWNjZXNzJywgdGV4dDogJ0ZJTkFOQ0lBRE8nfSxcbiAgICAgICAgICAgICAgICAgIGZhaWxlZDoge2Nzc0NsYXNzOiAndGV4dC1lcnJvcicsIHRleHQ6ICdOw4NPIEZJTkFOQ0lBRE8nfSxcbiAgICAgICAgICAgICAgICAgIHdhaXRpbmdfZnVuZHM6IHtjc3NDbGFzczogJ3RleHQtd2FpdGluZycsIHRleHQ6ICdBR1VBUkRBTkRPJ30sXG4gICAgICAgICAgICAgICAgICByZWplY3RlZDoge2Nzc0NsYXNzOiAndGV4dC1lcnJvcicsIHRleHQ6ICdSRUNVU0FETyd9LFxuICAgICAgICAgICAgICAgICAgZHJhZnQ6IHtjc3NDbGFzczogJycsIHRleHQ6ICdSQVNDVU5ITyd9LFxuICAgICAgICAgICAgICAgICAgaW5fYW5hbHlzaXM6IHtjc3NDbGFzczogJycsIHRleHQ6ICdFTSBBTsOBTElTRSd9LFxuICAgICAgICAgICAgICAgICAgYXBwcm92ZWQ6IHtjc3NDbGFzczogJ3RleHQtc3VjY2VzcycsIHRleHQ6ICdBUFJPVkFETyd9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3RhdHVzVGV4dE9iaihzdGF0dXNUZXh0W3Byb2plY3Quc3RhdGVdKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1c1RleHRPYmo7XG4gICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdDogcHJvamVjdCxcbiAgICAgICAgc3RhdHVzVGV4dE9iajogZ2VuZXJhdGVTdGF0dXNUZXh0KCksXG4gICAgICAgIHJlbWFpbmluZ1RleHRPYmo6IGguZ2VuZXJhdGVSZW1haW5nVGltZShwcm9qZWN0KVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdmlldzogZnVuY3Rpb24oY3RybCkge1xuICAgICAgdmFyIHByb2plY3QgPSBjdHJsLnByb2plY3QsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSBwcm9qZWN0LnByb2dyZXNzLnRvRml4ZWQoMiksXG4gICAgICAgICAgc3RhdHVzVGV4dE9iaiA9IGN0cmwuc3RhdHVzVGV4dE9iaigpLFxuICAgICAgICAgIHJlbWFpbmluZ1RleHRPYmogPSBjdHJsLnJlbWFpbmluZ1RleHRPYmooKTtcblxuICAgICAgcmV0dXJuIG0oJy5wcm9qZWN0LWRldGFpbHMtY2FyZC5jYXJkLnUtcmFkaXVzLmNhcmQtdGVyY2lhcnkudS1tYXJnaW5ib3R0b20tMjAnLCBbXG4gICAgICAgIG0oJ2RpdicsIFtcbiAgICAgICAgICBtKCcuZm9udHNpemUtc21hbGwuZm9udHdlaWdodC1zZW1pYm9sZCcsIFtcbiAgICAgICAgICAgIG0oJ3NwYW4uZm9udGNvbG9yLXNlY29uZGFyeScsICdTdGF0dXM6JyksJ8KgJyxtKCdzcGFuJywge2NsYXNzOiBzdGF0dXNUZXh0T2JqLmNzc0NsYXNzfSwgc3RhdHVzVGV4dE9iai50ZXh0KSwnwqAnXG4gICAgICAgICAgXSksXG4gICAgICAgICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pc19wdWJsaXNoZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBtKCcubWV0ZXIudS1tYXJnaW50b3AtMjAudS1tYXJnaW5ib3R0b20tMTAnLCBbXG4gICAgICAgICAgICAgICAgICBtKCcubWV0ZXItZmlsbCcsIHtzdHlsZToge3dpZHRoOiAocHJvZ3Jlc3MgPiAxMDAgPyAxMDAgOiBwcm9ncmVzcykgKyAnJSd9fSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBtKCcudy1yb3cnLCBbXG4gICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMy53LWNvbC1zbWFsbC0zLnctY29sLXRpbnktNicsIFtcbiAgICAgICAgICAgICAgICAgICAgbSgnLmZvbnR3ZWlnaHQtc2VtaWJvbGQuZm9udHNpemUtbGFyZ2UubGluZWhlaWdodC10aWdodCcsIHByb2dyZXNzICsgJyUnKSxcbiAgICAgICAgICAgICAgICAgICAgbSgnLmZvbnRjb2xvci1zZWNvbmRhcnkubGluZWhlaWdodC10aWdodGVyLmZvbnRzaXplLXNtYWxsLnUtbWFyZ2luYm90dG9tLTEwJywgJ2ZpbmFuY2lhZG8nKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMy53LWNvbC1zbWFsbC0zLnctY29sLXRpbnktNicsIFtcbiAgICAgICAgICAgICAgICAgICAgbSgnLmZvbnR3ZWlnaHQtc2VtaWJvbGQuZm9udHNpemUtbGFyZ2UubGluZWhlaWdodC10aWdodCcsIFtcbiAgICAgICAgICAgICAgICAgICAgICAnUiQgJyArIGguZm9ybWF0TnVtYmVyKHByb2plY3QucGxlZGdlZCwgMiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBtKCcuZm9udGNvbG9yLXNlY29uZGFyeS5saW5laGVpZ2h0LXRpZ2h0ZXIuZm9udHNpemUtc21hbGwudS1tYXJnaW5ib3R0b20tMTAnLCAnbGV2YW50YWRvcycpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIG0oJy53LWNvbC53LWNvbC0zLnctY29sLXNtYWxsLTMudy1jb2wtdGlueS02JywgW1xuICAgICAgICAgICAgICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5mb250c2l6ZS1sYXJnZS5saW5laGVpZ2h0LXRpZ2h0JywgcHJvamVjdC50b3RhbF9jb250cmlidXRpb25zKSxcbiAgICAgICAgICAgICAgICAgICAgbSgnLmZvbnRjb2xvci1zZWNvbmRhcnkubGluZWhlaWdodC10aWdodGVyLmZvbnRzaXplLXNtYWxsJywgJ2Fwb2lvcycpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIG0oJy53LWNvbC53LWNvbC0zLnctY29sLXNtYWxsLTMudy1jb2wtdGlueS02JywgW1xuICAgICAgICAgICAgICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5mb250c2l6ZS1sYXJnZS5saW5laGVpZ2h0LXRpZ2h0JywgcmVtYWluaW5nVGV4dE9iai50b3RhbCksXG4gICAgICAgICAgICAgICAgICAgIG0oJy5mb250Y29sb3Itc2Vjb25kYXJ5LmxpbmVoZWlnaHQtdGlnaHRlci5mb250c2l6ZS1zbWFsbCcsIHJlbWFpbmluZ1RleHRPYmoudW5pdCArICcgcmVzdGFudGVzJylcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCkpXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYy5oKSk7XG5cbiIsIndpbmRvdy5jLkFkbWluUHJvamVjdERldGFpbHNFeHBsYW5hdGlvbiA9IChmdW5jdGlvbihtLCBoKXtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICB2YXIgZXhwbGFuYXRpb24gPSBmdW5jdGlvbihyZXNvdXJjZSkge1xuICAgICAgICB2YXIgc3RhdGVUZXh0ID0ge1xuICAgICAgICAgIG9ubGluZTogW1xuICAgICAgICAgICAgbSgnc3BhbicsICdWb2PDqiBwb2RlIHJlY2ViZXIgYXBvaW9zIGF0w6kgMjNoczU5bWluNTlzIGRvIGRpYSAnICsgaC5tb21lbnRpZnkocmVzb3VyY2Uuem9uZV9leHBpcmVzX2F0KSArICcuIExlbWJyZS1zZSwgw6kgdHVkby1vdS1uYWRhIGUgdm9jw6ogc8OzIGxldmFyw6Egb3MgcmVjdXJzb3MgY2FwdGFkb3Mgc2UgYmF0ZXIgYSBtZXRhIGRlbnRybyBkZXNzZSBwcmF6by4nKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3VjY2Vzc2Z1bDogW1xuICAgICAgICAgICAgbSgnc3Bhbi5mb250d2VpZ2h0LXNlbWlib2xkJywgcmVzb3VyY2UudXNlci5uYW1lICsgJywgY29tZW1vcmUgcXVlIHZvY8OqIG1lcmVjZSEnKSxcbiAgICAgICAgICAgICcgU2V1IHByb2pldG8gZm9pIGJlbSBzdWNlZGlkbyBlIGFnb3JhIMOpIGEgaG9yYSBkZSBpbmljaWFyIG8gdHJhYmFsaG8gZGUgcmVsYWNpb25hbWVudG8gY29tIHNldXMgYXBvaWFkb3JlcyEgJyxcbiAgICAgICAgICAgICdBdGVuw6fDo28gZXNwZWNpYWwgw6AgZW50cmVnYSBkZSByZWNvbXBlbnNhcy4gUHJvbWV0ZXU/IEVudHJlZ3VlISBOw6NvIGRlaXhlIGRlIG9saGFyIGEgc2XDp8OjbyBkZSBww7NzLXByb2pldG8gZG8gJyxcbiAgICAgICAgICAgIG0oJ2EuYWx0LWxpbmtbaHJlZj1cIi9ndWlkZXNcIl0nLCAnR3VpYSBkb3MgUmVhbGl6YWRvcmVzJyksXG4gICAgICAgICAgICAnwqBlIGRlIGluZm9ybWFyLXNlIHNvYnJlwqAnLG0oJ2EuYWx0LWxpbmtbaHJlZj1cImh0dHA6Ly9zdXBvcnRlLmNhdGFyc2UubWUvaGMvcHQtYnIvYXJ0aWNsZXMvMjAyMDM3NDkzLUZJTkFOQ0lBRE8tQ29tby1zZXIlQzMlQTEtZmVpdG8tby1yZXBhc3NlLWRvLWRpbmhlaXJvLVwiXVt0YXJnZXQ9XCJfYmxhbmtcIl0nLCAnY29tbyBvIHJlcGFzc2UgZG8gZGluaGVpcm8gc2Vyw6EgZmVpdG8uJylcbiAgICAgICAgICBdLFxuICAgICAgICAgIHdhaXRpbmdfZnVuZHM6IFtcbiAgICAgICAgICAgIG0oJ3NwYW4uZm9udHdlaWdodC1zZW1pYm9sZCcsIHJlc291cmNlLnVzZXIubmFtZSArICcsIGVzdGFtb3MgcHJvY2Vzc2FuZG8gb3Mgw7psdGltb3MgcGFnYW1lbnRvcyEnKSxcbiAgICAgICAgICAgICcgU2V1IHByb2pldG8gZm9pIGZpbmFsaXphZG8gZW0gJyArIGgubW9tZW50aWZ5KHJlc291cmNlLnpvbmVfZXhwaXJlc19hdCkgKyAnIGUgZXN0w6EgYWd1YXJkYW5kbyBjb25maXJtYcOnw6NvIGRlIGJvbGV0b3MgZSBwYWdhbWVudG9zLiAnLFxuICAgICAgICAgICAgJ0RldmlkbyDDoCBkYXRhIGRlIHZlbmNpbWVudG8gZGUgYm9sZXRvcywgcHJvamV0b3MgcXVlIHRpdmVyYW0gYXBvaW9zIGRlIMO6bHRpbWEgaG9yYSBmaWNhbSBwb3IgYXTDqSA0IGRpYXMgw7p0ZWlzIG5lc3NlIHN0YXR1cywgY29udGFkb3MgYSBwYXJ0aXIgZGEgZGF0YSBkZSBmaW5hbGl6YcOnw6NvIGRvIHByb2pldG8uwqAnLFxuICAgICAgICAgICAgbSgnYS5hbHQtbGlua1tocmVmPVwiaHR0cDovL3N1cG9ydGUuY2F0YXJzZS5tZS9oYy9wdC1ici9hcnRpY2xlcy8yMDIwMzc0OTMtRklOQU5DSUFETy1Db21vLXNlciVDMyVBMS1mZWl0by1vLXJlcGFzc2UtZG8tZGluaGVpcm8tXCJdW3RhcmdldD1cIl9ibGFua1wiXScsICdFbnRlbmRhIGNvbW8gbyByZXBhc3NlIGRlIGRpbmhlaXJvIMOpIGZlaXRvIHBhcmEgcHJvamV0b3MgYmVtIHN1Y2VkaWRvcy4nKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZmFpbGVkOiBbXG4gICAgICAgICAgICBtKCdzcGFuLmZvbnR3ZWlnaHQtc2VtaWJvbGQnLCByZXNvdXJjZS51c2VyLm5hbWUgKyAnLCBuw6NvIGRlc2FuaW1lIScpLFxuICAgICAgICAgICAgJyBTZXUgcHJvamV0byBuw6NvIGJhdGV1IGEgbWV0YSBlIHNhYmVtb3MgcXVlIGlzc28gbsOjbyDDqSBhIG1lbGhvciBkYXMgc2Vuc2HDp8O1ZXMuIE1hcyBuw6NvIGRlc2FuaW1lLiAnLFxuICAgICAgICAgICAgJ0VuY2FyZSBvIHByb2Nlc3NvIGNvbW8gdW0gYXByZW5kaXphZG8gZSBuw6NvIGRlaXhlIGRlIGNvZ2l0YXIgdW1hIHNlZ3VuZGEgdGVudGF0aXZhLiBOw6NvIHNlIHByZW9jdXBlLCB0b2RvcyBvcyBzZXVzIGFwb2lhZG9yZXMgcmVjZWJlcsOjbyBvIGRpbmhlaXJvIGRlIHZvbHRhLsKgJyxcbiAgICAgICAgICAgIG0oJ2EuYWx0LWxpbmtbaHJlZj1cImh0dHA6Ly9zdXBvcnRlLmNhdGFyc2UubWUvaGMvcHQtYnIvYXJ0aWNsZXMvMjAyMzY1NTA3LVJlZ3Jhcy1lLWZ1bmNpb25hbWVudG8tZG9zLXJlZW1ib2xzb3MtZXN0b3Jub3NcIl1bdGFyZ2V0PVwiX2JsYW5rXCJdJywgJ0VudGVuZGEgY29tbyBmYXplbW9zIGVzdG9ybm9zIGUgcmVlbWJvbHNvcy4nKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVqZWN0ZWQ6IFtcbiAgICAgICAgICAgIG0oJ3NwYW4uZm9udHdlaWdodC1zZW1pYm9sZCcsIHJlc291cmNlLnVzZXIubmFtZSArICcsIGluZmVsaXptZW50ZSBuw6NvIGZvaSBkZXN0YSB2ZXouJyksXG4gICAgICAgICAgICAnIFZvY8OqIGVudmlvdSBzZXUgcHJvamV0byBwYXJhIGFuw6FsaXNlIGRvIENhdGFyc2UgZSBlbnRlbmRlbW9zIHF1ZSBlbGUgbsOjbyBlc3TDoSBkZSBhY29yZG8gY29tIG8gcGVyZmlsIGRvIHNpdGUuICcsXG4gICAgICAgICAgICAnVGVyIHVtIHByb2pldG8gcmVjdXNhZG8gbsOjbyBpbXBlZGUgcXVlIHZvY8OqIGVudmllIG5vdm9zIHByb2pldG9zIHBhcmEgYXZhbGlhw6fDo28gb3UgcmVmb3JtdWxlIHNldSBwcm9qZXRvIGF0dWFsLiAnLFxuICAgICAgICAgICAgJ0NvbnZlcnNlIGNvbSBub3NzbyBhdGVuZGltZW50byEgUmVjb21lbmRhbW9zIHF1ZSB2b2PDqiBkw6ogdW1hIGJvYSBvbGhhZGEgbm9zwqAnLFxuICAgICAgICAgICAgbSgnYS5hbHQtbGlua1tocmVmPVwiaHR0cDovL3N1cG9ydGUuY2F0YXJzZS5tZS9oYy9wdC1ici9hcnRpY2xlcy8yMDIzODc2MzgtRGlyZXRyaXplcy1wYXJhLWNyaWElQzMlQTclQzMlQTNvLWRlLXByb2pldG9zXCJdW3RhcmdldD1cIl9ibGFua1wiXScsICdjcml0w6lyaW9zIGRhIHBsYXRhZm9ybWEnKSxcbiAgICAgICAgICAgICfCoGUgbm/CoCcsXG4gICAgICAgICAgICBtKCdhLmFsdC1saW5rW2hyZWY9XCIvZ3VpZGVzXCJdJywgJ2d1aWEgZG9zIHJlYWxpemFkb3JlcycpLCcuJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgZHJhZnQ6IFtcbiAgICAgICAgICAgIG0oJ3NwYW4uZm9udHdlaWdodC1zZW1pYm9sZCcsIHJlc291cmNlLnVzZXIubmFtZSArICcsIGNvbnN0cnVhIG8gc2V1IHByb2pldG8hJyksXG4gICAgICAgICAgICAnwqBRdWFudG8gbWFpcyBjdWlkYWRvc28gZSBiZW0gZm9ybWF0YWRvIGZvciB1bSBwcm9qZXRvLCBtYWlvcmVzIGFzIGNoYW5jZXMgZGUgZWxlIHNlciBiZW0gc3VjZWRpZG8gbmEgc3VhIGNhbXBhbmhhIGRlIGNhcHRhw6fDo28uICcsXG4gICAgICAgICAgICAnQW50ZXMgZGUgZW52aWFyIHNldSBwcm9qZXRvIHBhcmEgYSBub3NzYSBhbsOhbGlzZSwgcHJlZW5jaGEgdG9kYXMgYXMgYWJhcyBhbyBsYWRvIGNvbSBjYXJpbmhvLiBWb2PDqiBwb2RlIHNhbHZhciBhcyBhbHRlcmHDp8O1ZXMgZSB2b2x0YXIgYW8gcmFzY3VuaG8gZGUgcHJvamV0byBxdWFudGFzIHZlemVzIHF1aXNlci4gJyxcbiAgICAgICAgICAgICdRdWFuZG8gdHVkbyBlc3RpdmVyIHByb250bywgY2xpcXVlIG5vIGJvdMOjbyBFTlZJQVIgZSBlbnRyYXJlbW9zIGVtIGNvbnRhdG8gcGFyYSBhdmFsaWFyIG8gc2V1IHByb2pldG8uJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgaW5fYW5hbHlzaXM6IFtcbiAgICAgICAgICAgIG0oJ3NwYW4uZm9udHdlaWdodC1zZW1pYm9sZCcsIHJlc291cmNlLnVzZXIubmFtZSArICcsIHZvY8OqIGVudmlvdSBzZXUgcHJvamV0byBwYXJhIGFuw6FsaXNlIGVtICcgKyBoLm1vbWVudGlmeShyZXNvdXJjZS5zZW50X3RvX2FuYWx5c2lzX2F0KSArICcgZSByZWNlYmVyw6Egbm9zc2EgYXZhbGlhw6fDo28gZW0gYXTDqSA0IGRpYXMgw7p0ZWlzIGFww7NzIG8gZW52aW8hJyksXG4gICAgICAgICAgICAnwqBFbnF1YW50byBlc3BlcmEgYSBzdWEgcmVzcG9zdGEsIHZvY8OqIHBvZGUgY29udGludWFyIGVkaXRhbmRvIG8gc2V1IHByb2pldG8uICcsXG4gICAgICAgICAgICAnUmVjb21lbmRhbW9zIHRhbWLDqW0gcXVlIHZvY8OqIHbDoSBjb2xldGFuZG8gZmVlZGJhY2sgY29tIGFzIHBlc3NvYXMgcHLDs3hpbWFzIGUgcGxhbmVqYW5kbyBjb21vIHNlcsOhIGEgc3VhIGNhbXBhbmhhLidcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFwcHJvdmVkOiBbXG4gICAgICAgICAgICBtKCdzcGFuLmZvbnR3ZWlnaHQtc2VtaWJvbGQnLCByZXNvdXJjZS51c2VyLm5hbWUgKyAnLCBzZXUgcHJvamV0byBmb2kgYXByb3ZhZG8hJyksXG4gICAgICAgICAgICAnwqBQYXJhIGNvbG9jYXIgbyBzZXUgcHJvamV0byBubyBhciDDqSBwcmVjaXNvIGFwZW5hcyBxdWUgdm9jw6ogcHJlZW5jaGEgb3MgZGFkb3MgbmVjZXNzw6FyaW9zIG5hIGFiYcKgJyxcbiAgICAgICAgICAgIG0oJ2EuYWx0LWxpbmtbaHJlZj1cIiN1c2VyX3NldHRpbmdzXCJdJywgJ0NvbnRhJyksXG4gICAgICAgICAgICAnLiDDiSBpbXBvcnRhbnRlIHNhYmVyIHF1ZSBjb2JyYW1vcyBhIHRheGEgZGUgMTMlIGRvIHZhbG9yIHRvdGFsIGFycmVjYWRhZG8gYXBlbmFzIHBvciBwcm9qZXRvcyBiZW0gc3VjZWRpZG9zLiBFbnRlbmRhwqAnLFxuICAgICAgICAgICAgbSgnYS5hbHQtbGlua1tocmVmPVwiaHR0cDovL3N1cG9ydGUuY2F0YXJzZS5tZS9oYy9wdC1ici9hcnRpY2xlcy8yMDIwMzc0OTMtRklOQU5DSUFETy1Db21vLXNlciVDMyVBMS1mZWl0by1vLXJlcGFzc2UtZG8tZGluaGVpcm8tXCJdW3RhcmdldD1cIl9ibGFua1wiXScsICdjb21vIGZhemVtb3MgbyByZXBhc3NlIGRvIGRpbmhlaXJvLicpXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc3RhdGVUZXh0W3Jlc291cmNlLnN0YXRlXTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGV4cGxhbmF0aW9uOiBleHBsYW5hdGlvbihhcmdzLnJlc291cmNlKVxuICAgICAgfTtcbiAgICB9LFxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBtKCdwLicgKyBhcmdzLnJlc291cmNlLnN0YXRlICsgJy1wcm9qZWN0LXRleHQuZm9udHNpemUtc21hbGwubGluZWhlaWdodC1sb29zZScsIGN0cmwuZXhwbGFuYXRpb24pO1xuICAgIH1cbiAgfTtcbn0od2luZG93Lm0sIHdpbmRvdy5jLmgpKTtcbiIsIndpbmRvdy5jLkFkbWluUHJvamVjdCA9IChmdW5jdGlvbihtLCBoKXtcbiAgcmV0dXJuIHtcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsLCBhcmdzKSB7XG4gICAgICB2YXIgcHJvamVjdCA9IGFyZ3MuaXRlbTtcbiAgICAgIHJldHVybiBtKCcudy1yb3cuYWRtaW4tcHJvamVjdCcsW1xuICAgICAgICBtKCcudy1jb2wudy1jb2wtMy53LWNvbC1zbWFsbC0zLnUtbWFyZ2luYm90dG9tLTEwJyxbXG4gICAgICAgICAgbSgnaW1nLnRodW1iLXByb2plY3QudS1yYWRpdXNbc3JjPScgKyBwcm9qZWN0LnByb2plY3RfaW1nICsgJ11bd2lkdGg9NTBdJylcbiAgICAgICAgXSksXG4gICAgICAgIG0oJy53LWNvbC53LWNvbC05LnctY29sLXNtYWxsLTknLFtcbiAgICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5mb250c2l6ZS1zbWFsbGVyLmxpbmVoZWlnaHQtdGlnaHRlci51LW1hcmdpbmJvdHRvbS0xMCcsIFtcbiAgICAgICAgICAgIG0oJ2EuYWx0LWxpbmtbdGFyZ2V0PVwiX2JsYW5rXCJdW2hyZWY9XCIvJyArIHByb2plY3QucGVybWFsaW5rICsgJ1wiXScsIHByb2plY3QucHJvamVjdF9uYW1lKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVzdC5mb250d2VpZ2h0LXNlbWlib2xkJywgcHJvamVjdC5wcm9qZWN0X3N0YXRlKSxcbiAgICAgICAgICBtKCcuZm9udHNpemUtc21hbGxlc3QuZm9udGNvbG9yLXNlY29uZGFyeScsIGgubW9tZW50aWZ5KHByb2plY3QucHJvamVjdF9vbmxpbmVfZGF0ZSkgKyAnIGEgJyArIGgubW9tZW50aWZ5KHByb2plY3QucHJvamVjdF9leHBpcmVzX2F0KSlcbiAgICAgICAgXSlcbiAgICAgIF0pO1xuICAgIH1cbiAgfTtcbn0od2luZG93Lm0sIHdpbmRvdy5jLmgpKTtcbiIsIndpbmRvdy5jLkFkbWluUmFkaW9BY3Rpb24gPSAoZnVuY3Rpb24obSwgaCwgYyl7XG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oYXJncyl7XG4gICAgICB2YXIgYnVpbGRlciA9IGFyZ3MuZGF0YSxcbiAgICAgICAgICBjb21wbGV0ZSA9IG0ucHJvcChmYWxzZSksXG4gICAgICAgICAgZGF0YSA9IHt9LFxuICAgICAgICAgIC8vVE9ETzogSW1wbGVtZW50IGEgZGVzY3JpcHRvciB0byBhYnN0cmFjdCB0aGUgaW5pdGlhbCBkZXNjcmlwdGlvblxuICAgICAgICAgIGRlc2NyaXB0aW9uID0gbS5wcm9wKGFyZ3MuaXRlbS5yZXdhcmQuZGVzY3JpcHRpb24gfHwgJycpLFxuICAgICAgICAgIGVycm9yID0gbS5wcm9wKGZhbHNlKSxcbiAgICAgICAgICBmYWlsID0gbS5wcm9wKGZhbHNlKSxcbiAgICAgICAgICBpdGVtID0gYXJncy5pdGVtLFxuICAgICAgICAgIGtleSA9IGJ1aWxkZXIuZ2V0S2V5LFxuICAgICAgICAgIG5ld1ZhbHVlID0gbS5wcm9wKCcnKSxcbiAgICAgICAgICBnZXRGaWx0ZXIgPSB7fSxcbiAgICAgICAgICBzZXRGaWx0ZXIgPSB7fSxcbiAgICAgICAgICByYWRpb3MgPSBtLnByb3AoKSxcbiAgICAgICAgICBnZXRLZXkgPSBidWlsZGVyLmdldEtleSxcbiAgICAgICAgICBnZXRBdHRyID0gYnVpbGRlci5yYWRpb3MsXG4gICAgICAgICAgdXBkYXRlS2V5ID0gYnVpbGRlci51cGRhdGVLZXk7XG5cbiAgICAgIHNldEZpbHRlclt1cGRhdGVLZXldID0gJ2VxJztcbiAgICAgIHZhciBzZXRWTSA9IG0ucG9zdGdyZXN0LmZpbHRlcnNWTShzZXRGaWx0ZXIpO1xuICAgICAgc2V0Vk1bdXBkYXRlS2V5XShpdGVtW3VwZGF0ZUtleV0pO1xuXG4gICAgICBnZXRGaWx0ZXJbZ2V0S2V5XSA9ICdlcSc7XG4gICAgICB2YXIgZ2V0Vk0gPSBtLnBvc3RncmVzdC5maWx0ZXJzVk0oZ2V0RmlsdGVyKTtcbiAgICAgIGdldFZNW2dldEtleV0oaXRlbVtnZXRLZXldKTtcblxuICAgICAgdmFyIGdldExvYWRlciA9IG0ucG9zdGdyZXN0LmxvYWRlcldpdGhUb2tlbihidWlsZGVyLmdldE1vZGVsLmdldFJvd09wdGlvbnMoZ2V0Vk0ucGFyYW1ldGVycygpKSk7XG5cbiAgICAgIHZhciBzZXRMb2FkZXIgPSBtLnBvc3RncmVzdC5sb2FkZXJXaXRoVG9rZW4oYnVpbGRlci51cGRhdGVNb2RlbC5wYXRjaE9wdGlvbnMoc2V0Vk0ucGFyYW1ldGVycygpLCBkYXRhKSk7XG5cbiAgICAgIHZhciB1cGRhdGVJdGVtID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIF8uZXh0ZW5kKGl0ZW0sIGRhdGFbMF0pO1xuICAgICAgICBjb21wbGV0ZSh0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBmZXRjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGdldExvYWRlci5sb2FkKCkudGhlbihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICByYWRpb3MoaXRlbVswXVtnZXRBdHRyXSk7XG4gICAgICAgIH0sIGVycm9yKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBzdWJtaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZiAobmV3VmFsdWUoKSkge1xuICAgICAgICAgIGRhdGFbYnVpbGRlci5wcm9wZXJ0eV0gPSBuZXdWYWx1ZSgpO1xuICAgICAgICAgIHNldExvYWRlci5sb2FkKCkudGhlbih1cGRhdGVJdGVtLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgdmFyIHVubG9hZCA9IGZ1bmN0aW9uKGVsLCBpc2luaXQsIGNvbnRleHQpe1xuICAgICAgICBjb250ZXh0Lm9udW5sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBjb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgZXJyb3IoZmFsc2UpO1xuICAgICAgICAgIG5ld1ZhbHVlKCcnKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBzZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgICBkZXNjcmlwdGlvbih0ZXh0KTtcbiAgICAgICAgbS5yZWRyYXcoKTtcbiAgICAgIH07XG5cbiAgICAgIGZldGNoKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBzZXREZXNjcmlwdGlvbjogc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgc2V0TG9hZGVyOiBzZXRMb2FkZXIsXG4gICAgICAgIGdldExvYWRlcjogZ2V0TG9hZGVyLFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgIHN1Ym1pdDogc3VibWl0LFxuICAgICAgICB0b2dnbGVyOiBoLnRvZ2dsZVByb3AoZmFsc2UsIHRydWUpLFxuICAgICAgICB1bmxvYWQ6IHVubG9hZCxcbiAgICAgICAgcmFkaW9zOiByYWRpb3NcbiAgICAgIH07XG4gICAgfSxcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsLCBhcmdzKXtcbiAgICAgIHZhciBkYXRhID0gYXJncy5kYXRhLFxuICAgICAgICAgIGJ0blZhbHVlID0gKGN0cmwuc2V0TG9hZGVyKCkgfHwgY3RybC5nZXRMb2FkZXIoKSkgPyAncG9yIGZhdm9yLCBhZ3VhcmRlLi4uJyA6IGRhdGEuY2FsbFRvQWN0aW9uO1xuXG4gICAgICByZXR1cm4gbSgnLnctY29sLnctY29sLTInLFtcbiAgICAgICAgbSgnYnV0dG9uLmJ0bi5idG4tc21hbGwuYnRuLXRlcmNpYXJ5Jywge1xuICAgICAgICAgIG9uY2xpY2s6IGN0cmwudG9nZ2xlci50b2dnbGVcbiAgICAgICAgfSwgZGF0YS5vdXRlckxhYmVsKSxcbiAgICAgICAgKGN0cmwudG9nZ2xlcigpKSA/XG4gICAgICAgICAgbSgnLmRyb3Bkb3duLWxpc3QuY2FyZC51LXJhZGl1cy5kcm9wZG93bi1saXN0LW1lZGl1bS56aW5kZXgtMTAnLCB7Y29uZmlnOiBjdHJsLnVubG9hZH0sW1xuICAgICAgICAgICAgbSgnZm9ybS53LWZvcm0nLCB7XG4gICAgICAgICAgICAgIG9uc3VibWl0OiBjdHJsLnN1Ym1pdFxuICAgICAgICAgICAgfSwgKCFjdHJsLmNvbXBsZXRlKCkpID8gW1xuICAgICAgICAgICAgICAgICAgKGN0cmwucmFkaW9zKCkpID9cbiAgICAgICAgICAgICAgICAgICAgXy5tYXAoY3RybC5yYWRpb3MoKSwgZnVuY3Rpb24ocmFkaW8sIGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwubmV3VmFsdWUocmFkaW8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5zZXREZXNjcmlwdGlvbihyYWRpby5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAocmFkaW8uaWQgPT09IGFyZ3MuaXRlbS5yZXdhcmQuaWQpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0oJy53LXJhZGlvJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgbSgnaW5wdXQjci0nICsgaW5kZXggKyAnLnctcmFkaW8taW5wdXRbdHlwZT1yYWRpb11bbmFtZT1cImFkbWluLXJhZGlvXCJdW3ZhbHVlPVwiJyArIHJhZGlvLmlkICsgJ1wiXScgKyAoKHNlbGVjdGVkKSA/ICdbY2hlY2tlZF0nIDogJycpLHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljazogc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG0oJ2xhYmVsLnctZm9ybS1sYWJlbFtmb3I9XCJyLScgKyBpbmRleCArICdcIl0nLCAnUiQnICsgcmFkaW8ubWluaW11bV92YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBoLmxvYWRlcigpLFxuICAgICAgICAgICAgICAgICAgbSgnc3Ryb25nJywgJ0Rlc2NyacOnw6NvJyksXG4gICAgICAgICAgICAgICAgICBtKCdwJywgY3RybC5kZXNjcmlwdGlvbigpKSxcbiAgICAgICAgICAgICAgICAgIG0oJ2lucHV0LnctYnV0dG9uLmJ0bi5idG4tc21hbGxbdHlwZT1cInN1Ym1pdFwiXVt2YWx1ZT1cIicgKyBidG5WYWx1ZSArICdcIl0nKVxuICAgICAgICAgICAgICAgIF0gOiAoIWN0cmwuZXJyb3IoKSkgPyBbXG4gICAgICAgICAgICAgICAgICAgIG0oJy53LWZvcm0tZG9uZVtzdHlsZT1cImRpc3BsYXk6YmxvY2s7XCJdJywgW1xuICAgICAgICAgICAgICAgICAgICAgIG0oJ3AnLCAnUmVjb21wZW5zYSBhbHRlcmFkYSBjb20gc3VjZXNzbyEnKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSA6IFtcbiAgICAgICAgICAgICAgICAgICAgbSgnLnctZm9ybS1lcnJvcltzdHlsZT1cImRpc3BsYXk6YmxvY2s7XCJdJywgW1xuICAgICAgICAgICAgICAgICAgICAgIG0oJ3AnLCAnSG91dmUgdW0gcHJvYmxlbWEgbmEgcmVxdWlzacOnw6NvLiBPIGFwb2lvIG7Do28gZm9pIHRyYW5zZmVyaWRvIScpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiAnJ1xuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93LmMuaCwgd2luZG93LmMpKTtcbiIsIndpbmRvdy5jLkFkbWluUmV3YXJkID0gKGZ1bmN0aW9uKG0sIGgsIF8pe1xuICByZXR1cm4ge1xuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwsIGFyZ3MpIHtcbiAgICAgIHZhciByZXdhcmQgPSBhcmdzLmNvbnRyaWJ1dGlvbi5yZXdhcmQgfHwge30sXG4gICAgICAgICAgYXZhaWxhYmxlID0gcGFyc2VJbnQocmV3YXJkLnBhaWRfY291bnQpICsgcGFyc2VJbnQocmV3YXJkLndhaXRpbmdfcGF5bWVudF9jb3VudCk7XG5cbiAgICAgIHJldHVybiBtKCcudy1jb2wudy1jb2wtNCcsW1xuICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5mb250c2l6ZS1zbWFsbGVyLmxpbmVoZWlnaHQtdGlnaHRlci51LW1hcmdpbmJvdHRvbS0yMCcsICdSZWNvbXBlbnNhJyksXG4gICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVzdC5saW5laGVpZ2h0LWxvb3NlcicsIChfLmlzRW1wdHkocmV3YXJkKSkgPyAnQXBvaW8gc2VtIHJlY29tcGVuc2EuJyA6IFtcbiAgICAgICAgICAgICdJRDogJyArIHJld2FyZC5pZCxcbiAgICAgICAgICAgIG0oJ2JyJyksXG4gICAgICAgICAgICAnVmFsb3IgbcOtbmltbzogUiQnICsgaC5mb3JtYXROdW1iZXIocmV3YXJkLm1pbmltdW1fdmFsdWUsIDIsIDMpLFxuICAgICAgICAgICAgbSgnYnInKSxcbiAgICAgICAgICAgIG0udHJ1c3QoJ0Rpc3BvbsOtdmVpczogJyArIGF2YWlsYWJsZSArICcgLyAnICsgKHJld2FyZC5tYXhpbXVtX2NvbnRyaWJ1dGlvbnMgfHwgJyZpbmZpbjsnKSksXG4gICAgICAgICAgICBtKCdicicpLFxuICAgICAgICAgICAgJ0FndWFyZGFuZG8gY29uZmlybWHDp8OjbzogJyArIHJld2FyZC53YWl0aW5nX3BheW1lbnRfY291bnQsXG4gICAgICAgICAgICBtKCdicicpLFxuICAgICAgICAgICAgJ0Rlc2NyacOnw6NvOiAnICsgcmV3YXJkLmRlc2NyaXB0aW9uXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYy5oLCB3aW5kb3cuXykpO1xuIiwid2luZG93LmMuQWRtaW5UcmFuc2FjdGlvbkhpc3RvcnkgPSAoZnVuY3Rpb24obSwgaCwgXyl7XG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oYXJncykge1xuICAgICAgdmFyIGNvbnRyaWJ1dGlvbiA9IGFyZ3MuY29udHJpYnV0aW9uLFxuICAgICAgICAgIG1hcEV2ZW50cyA9IF8ucmVkdWNlKFtcbiAgICAgICAge2RhdGU6IGNvbnRyaWJ1dGlvbi5wYWlkX2F0LCBuYW1lOiAnQXBvaW8gY29uZmlybWFkbyd9LFxuICAgICAgICB7ZGF0ZTogY29udHJpYnV0aW9uLnBlbmRpbmdfcmVmdW5kX2F0LCBuYW1lOiAnUmVlbWJvbHNvIHNvbGljaXRhZG8nfSxcbiAgICAgICAge2RhdGU6IGNvbnRyaWJ1dGlvbi5yZWZ1bmRlZF9hdCwgbmFtZTogJ0VzdG9ybm8gcmVhbGl6YWRvJ30sXG4gICAgICAgIHtkYXRlOiBjb250cmlidXRpb24uY3JlYXRlZF9hdCwgbmFtZTogJ0Fwb2lvIGNyaWFkbyd9LFxuICAgICAgICB7ZGF0ZTogY29udHJpYnV0aW9uLnJlZnVzZWRfYXQsIG5hbWU6ICdBcG9pbyBjYW5jZWxhZG8nfSxcbiAgICAgICAge2RhdGU6IGNvbnRyaWJ1dGlvbi5kZWxldGVkX2F0LCBuYW1lOiAnQXBvaW8gZXhjbHXDrWRvJ30sXG4gICAgICAgIHtkYXRlOiBjb250cmlidXRpb24uY2hhcmdlYmFja19hdCwgbmFtZTogJ0NoYXJnZWJhY2snfSxcbiAgICAgIF0sIGZ1bmN0aW9uKG1lbW8sIGl0ZW0pe1xuICAgICAgICBpZiAoaXRlbS5kYXRlICE9PSBudWxsICYmIGl0ZW0uZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaXRlbS5vcmlnaW5hbERhdGUgPSBpdGVtLmRhdGU7XG4gICAgICAgICAgaXRlbS5kYXRlID0gaC5tb21lbnRpZnkoaXRlbS5kYXRlLCAnREQvTU0vWVlZWSwgSEg6bW0nKTtcbiAgICAgICAgICByZXR1cm4gbWVtby5jb25jYXQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIFtdKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3JkZXJlZEV2ZW50czogXy5zb3J0QnkobWFwRXZlbnRzLCAnb3JpZ2luYWxEYXRlJylcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwpIHtcbiAgICAgIHJldHVybiBtKCcudy1jb2wudy1jb2wtNCcsW1xuICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5mb250c2l6ZS1zbWFsbGVyLmxpbmVoZWlnaHQtdGlnaHRlci51LW1hcmdpbmJvdHRvbS0yMCcsICdIaXN0w7NyaWNvIGRhIHRyYW5zYcOnw6NvJyksXG4gICAgICAgIGN0cmwub3JkZXJlZEV2ZW50cy5tYXAoZnVuY3Rpb24oY0V2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG0oJy53LXJvdy5mb250c2l6ZS1zbWFsbGVzdC5saW5laGVpZ2h0LWxvb3Nlci5kYXRlLWV2ZW50JyxbXG4gICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNicsW1xuICAgICAgICAgICAgICBtKCcuZm9udGNvbG9yLXNlY29uZGFyeScsIGNFdmVudC5kYXRlKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNicsW1xuICAgICAgICAgICAgICBtKCdkaXYnLCBjRXZlbnQubmFtZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSk7XG4gICAgICAgIH0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYy5oLCB3aW5kb3cuXykpO1xuIiwid2luZG93LmMuQWRtaW5UcmFuc2FjdGlvbiA9IChmdW5jdGlvbihtLCBoKXtcbiAgcmV0dXJuIHtcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsLCBhcmdzKSB7XG4gICAgICB2YXIgY29udHJpYnV0aW9uID0gYXJncy5jb250cmlidXRpb247XG4gICAgICByZXR1cm4gbSgnLnctY29sLnctY29sLTQnLFtcbiAgICAgICAgbSgnLmZvbnR3ZWlnaHQtc2VtaWJvbGQuZm9udHNpemUtc21hbGxlci5saW5laGVpZ2h0LXRpZ2h0ZXIudS1tYXJnaW5ib3R0b20tMjAnLCAnRGV0YWxoZXMgZG8gYXBvaW8nKSxcbiAgICAgICAgbSgnLmZvbnRzaXplLXNtYWxsZXN0LmxpbmVoZWlnaHQtbG9vc2VyJyxbXG4gICAgICAgICAgJ1ZhbG9yOiBSJCcgKyBoLmZvcm1hdE51bWJlcihjb250cmlidXRpb24udmFsdWUsIDIsIDMpLFxuICAgICAgICAgIG0oJ2JyJyksXG4gICAgICAgICAgJ1RheGE6IFIkJyArIGguZm9ybWF0TnVtYmVyKGNvbnRyaWJ1dGlvbi5nYXRld2F5X2ZlZSwgMiwgMyksXG4gICAgICAgICAgbSgnYnInKSxcbiAgICAgICAgICAnQWd1YXJkYW5kbyBDb25maXJtYcOnw6NvOiAnICsgKGNvbnRyaWJ1dGlvbi53YWl0aW5nX3BheW1lbnQgPyAnU2ltJyA6ICdOw6NvJyksXG4gICAgICAgICAgbSgnYnInKSxcbiAgICAgICAgICAnQW7DtG5pbW86ICcgKyAoY29udHJpYnV0aW9uLmFub255bW91cyA/ICdTaW0nIDogJ07Do28nKSxcbiAgICAgICAgICBtKCdicicpLFxuICAgICAgICAgICdJZCBwYWdhbWVudG86ICcgKyBjb250cmlidXRpb24uZ2F0ZXdheV9pZCxcbiAgICAgICAgICBtKCdicicpLFxuICAgICAgICAgICdBcG9pbzogJyArIGNvbnRyaWJ1dGlvbi5jb250cmlidXRpb25faWQsXG4gICAgICAgICAgbSgnYnInKSxcbiAgICAgICAgICAnQ2hhdmU6wqBcXG4nLFxuICAgICAgICAgIG0oJ2JyJyksXG4gICAgICAgICAgY29udHJpYnV0aW9uLmtleSxcbiAgICAgICAgICBtKCdicicpLFxuICAgICAgICAgICdNZWlvOiAnICsgY29udHJpYnV0aW9uLmdhdGV3YXksXG4gICAgICAgICAgbSgnYnInKSxcbiAgICAgICAgICAnT3BlcmFkb3JhOiAnICsgKGNvbnRyaWJ1dGlvbi5nYXRld2F5X2RhdGEgJiYgY29udHJpYnV0aW9uLmdhdGV3YXlfZGF0YS5hY3F1aXJlcl9uYW1lKSxcbiAgICAgICAgICBtKCdicicpLFxuICAgICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGNvbnRyaWJ1dGlvbi5pc19zZWNvbmRfc2xpcCkge1xuICAgICAgICAgICAgICByZXR1cm4gW20oJ2EubGluay1oaWRkZW5baHJlZj1cIiNcIl0nLCAnQm9sZXRvIGJhbmPDoXJpbycpLCAnICcsIG0oJ3NwYW4uYmFkZ2UnLCAnMmEgdmlhJyldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0oKSksXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYy5oKSk7XG4iLCJ3aW5kb3cuYy5BZG1pblVzZXIgPSAoZnVuY3Rpb24obSl7XG4gIHJldHVybiB7XG4gICAgdmlldzogZnVuY3Rpb24oY3RybCwgYXJncykge1xuICAgICAgdmFyIHVzZXIgPSBhcmdzLml0ZW07XG4gICAgICB2YXIgdXNlclByb2ZpbGUgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdXNlci51c2VyX3Byb2ZpbGVfaW1nIHx8ICcvYXNzZXRzL2NhdGFyc2VfYm9vdHN0cmFwL3VzZXIuanBnJztcbiAgICAgIH07XG4gICAgICByZXR1cm4gbSgnLnctcm93LmFkbWluLXVzZXInLFtcbiAgICAgICAgbSgnLnctY29sLnctY29sLTMudy1jb2wtc21hbGwtMy51LW1hcmdpbmJvdHRvbS0xMCcsW1xuICAgICAgICAgIG0oJ2ltZy51c2VyLWF2YXRhcltzcmM9XCInICsgdXNlclByb2ZpbGUoKSArICdcIl0nKVxuICAgICAgICBdKSxcbiAgICAgICAgbSgnLnctY29sLnctY29sLTkudy1jb2wtc21hbGwtOScsW1xuICAgICAgICAgIG0oJy5mb250d2VpZ2h0LXNlbWlib2xkLmZvbnRzaXplLXNtYWxsZXIubGluZWhlaWdodC10aWdodGVyLnUtbWFyZ2luYm90dG9tLTEwJywgW1xuICAgICAgICAgICAgbSgnYS5hbHQtbGlua1t0YXJnZXQ9XCJfYmxhbmtcIl1baHJlZj1cIi91c2Vycy8nICsgdXNlci51c2VyX2lkICsgJy9lZGl0XCJdJywgdXNlci51c2VyX25hbWUpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbSgnLmZvbnRzaXplLXNtYWxsZXN0JywgJ1VzdcOhcmlvOiAnICsgdXNlci51c2VyX2lkKSxcbiAgICAgICAgICBtKCcuZm9udHNpemUtc21hbGxlc3QuZm9udGNvbG9yLXNlY29uZGFyeScsICdDYXRhcnNlOiAnICsgdXNlci5lbWFpbCksXG4gICAgICAgICAgbSgnLmZvbnRzaXplLXNtYWxsZXN0LmZvbnRjb2xvci1zZWNvbmRhcnknLCAnR2F0ZXdheTogJyArIHVzZXIucGF5ZXJfZW1haWwpXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tKSk7XG4iLCJ3aW5kb3cuYy5GaWx0ZXJEYXRlUmFuZ2UgPSAoZnVuY3Rpb24obSl7XG4gIHJldHVybiB7XG4gICAgdmlldzogZnVuY3Rpb24oY3RybCwgYXJncyl7XG4gICAgICByZXR1cm4gbSgnLnctY29sLnctY29sLTMudy1jb2wtc21hbGwtNicsIFtcbiAgICAgICAgbSgnbGFiZWwuZm9udHNpemUtc21hbGxlcltmb3I9XCInICsgYXJncy5pbmRleCArICdcIl0nLCBhcmdzLmxhYmVsKSxcbiAgICAgICAgbSgnLnctcm93JywgW1xuICAgICAgICAgIG0oJy53LWNvbC53LWNvbC01LnctY29sLXNtYWxsLTUudy1jb2wtdGlueS01JywgW1xuICAgICAgICAgICAgbSgnaW5wdXQudy1pbnB1dC50ZXh0LWZpZWxkLnBvc2l0aXZlW2lkPVwiJyArIGFyZ3MuaW5kZXggKyAnXCJdW3R5cGU9XCJ0ZXh0XCJdJywge1xuICAgICAgICAgICAgICBvbmNoYW5nZTogbS53aXRoQXR0cigndmFsdWUnLCBhcmdzLmZpcnN0KSxcbiAgICAgICAgICAgICAgdmFsdWU6IGFyZ3MuZmlyc3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMi53LWNvbC1zbWFsbC0yLnctY29sLXRpbnktMicsIFtcbiAgICAgICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVyLnUtdGV4dC1jZW50ZXIubGluZWhlaWdodC1sb29zZXInLCAnZScpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbSgnLnctY29sLnctY29sLTUudy1jb2wtc21hbGwtNS53LWNvbC10aW55LTUnLCBbXG4gICAgICAgICAgICBtKCdpbnB1dC53LWlucHV0LnRleHQtZmllbGQucG9zaXRpdmVbdHlwZT1cInRleHRcIl0nLCB7XG4gICAgICAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIGFyZ3MubGFzdCksXG4gICAgICAgICAgICAgIHZhbHVlOiBhcmdzLmxhc3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSkpO1xuIiwid2luZG93LmMuRmlsdGVyRHJvcGRvd24gPSAoZnVuY3Rpb24obSwgXyl7XG4gIHJldHVybiB7XG4gICAgdmlldzogZnVuY3Rpb24oY3RybCwgYXJncyl7XG4gICAgICByZXR1cm4gbSgnLnctY29sLnctY29sLTMudy1jb2wtc21hbGwtNicsIFtcbiAgICAgICAgbSgnbGFiZWwuZm9udHNpemUtc21hbGxlcltmb3I9XCInICsgYXJncy5pbmRleCArICdcIl0nLCBhcmdzLmxhYmVsKSxcbiAgICAgICAgbSgnc2VsZWN0Lnctc2VsZWN0LnRleHQtZmllbGQucG9zaXRpdmVbaWQ9XCInICsgYXJncy5pbmRleCArICdcIl0nLCB7XG4gICAgICAgICAgb25jaGFuZ2U6IG0ud2l0aEF0dHIoJ3ZhbHVlJywgYXJncy52bSksXG4gICAgICAgICAgdmFsdWU6IGFyZ3Mudm0oKVxuICAgICAgICB9LFtcbiAgICAgICAgICBfLm1hcChhcmdzLm9wdGlvbnMsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIG0oJ29wdGlvblt2YWx1ZT1cIicgKyBkYXRhLnZhbHVlICsgJ1wiXScsIGRhdGEub3B0aW9uKTtcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93Ll8pKTtcbiIsIndpbmRvdy5jLkZpbHRlck1haW4gPSAoZnVuY3Rpb24obSl7XG4gIHJldHVybiB7XG4gICAgdmlldzogZnVuY3Rpb24oY3RybCwgYXJncyl7XG4gICAgICByZXR1cm4gbSgnLnctcm93JywgW1xuICAgICAgICBtKCcudy1jb2wudy1jb2wtMTAnLCBbXG4gICAgICAgICAgbSgnaW5wdXQudy1pbnB1dC50ZXh0LWZpZWxkLnBvc2l0aXZlLm1lZGl1bVtwbGFjZWhvbGRlcj1cIicgKyBhcmdzLnBsYWNlaG9sZGVyICsgJ1wiXVt0eXBlPVwidGV4dFwiXScsIHtvbmNoYW5nZTogbS53aXRoQXR0cigndmFsdWUnLCBhcmdzLnZtKSwgdmFsdWU6IGFyZ3Mudm0oKX0pXG4gICAgICAgIF0pLFxuICAgICAgICBtKCcudy1jb2wudy1jb2wtMicsIFtcbiAgICAgICAgICBtKCdpbnB1dCNmaWx0ZXItYnRuLmJ0bi5idG4tbGFyZ2UudS1tYXJnaW5ib3R0b20tMTBbdHlwZT1cInN1Ym1pdFwiXVt2YWx1ZT1cIkJ1c2NhclwiXScpXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tKSk7XG4iLCJ3aW5kb3cuYy5GaWx0ZXJOdW1iZXJSYW5nZSA9IChmdW5jdGlvbihtKXtcbiAgcmV0dXJuIHtcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsLCBhcmdzKXtcbiAgICAgIHJldHVybiBtKCcudy1jb2wudy1jb2wtMy53LWNvbC1zbWFsbC02JywgW1xuICAgICAgICBtKCdsYWJlbC5mb250c2l6ZS1zbWFsbGVyW2Zvcj1cIicgKyBhcmdzLmluZGV4ICsgJ1wiXScsIGFyZ3MubGFiZWwpLFxuICAgICAgICBtKCcudy1yb3cnLCBbXG4gICAgICAgICAgbSgnLnctY29sLnctY29sLTUudy1jb2wtc21hbGwtNS53LWNvbC10aW55LTUnLCBbXG4gICAgICAgICAgICBtKCdpbnB1dC53LWlucHV0LnRleHQtZmllbGQucG9zaXRpdmVbaWQ9XCInICsgYXJncy5pbmRleCArICdcIl1bdHlwZT1cInRleHRcIl0nLCB7XG4gICAgICAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIGFyZ3MuZmlyc3QpLFxuICAgICAgICAgICAgICB2YWx1ZTogYXJncy5maXJzdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIG0oJy53LWNvbC53LWNvbC0yLnctY29sLXNtYWxsLTIudy1jb2wtdGlueS0yJywgW1xuICAgICAgICAgICAgbSgnLmZvbnRzaXplLXNtYWxsZXIudS10ZXh0LWNlbnRlci5saW5laGVpZ2h0LWxvb3NlcicsICdlJylcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNS53LWNvbC1zbWFsbC01LnctY29sLXRpbnktNScsIFtcbiAgICAgICAgICAgIG0oJ2lucHV0LnctaW5wdXQudGV4dC1maWVsZC5wb3NpdGl2ZVt0eXBlPVwidGV4dFwiXScsIHtcbiAgICAgICAgICAgICAgb25jaGFuZ2U6IG0ud2l0aEF0dHIoJ3ZhbHVlJywgYXJncy5sYXN0KSxcbiAgICAgICAgICAgICAgdmFsdWU6IGFyZ3MubGFzdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tKSk7XG4iLCJ3aW5kb3cuYy5QYXltZW50U3RhdHVzID0gKGZ1bmN0aW9uKG0pe1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgdmFyIHBheW1lbnQgPSBhcmdzLml0ZW0sIGNhcmQgPSBudWxsLFxuICAgICAgICAgIGRpc3BsYXlQYXltZW50TWV0aG9kLCBwYXltZW50TWV0aG9kQ2xhc3MsIHN0YXRlQ2xhc3M7XG5cbiAgICAgIGNhcmQgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZiAocGF5bWVudC5nYXRld2F5X2RhdGEpe1xuICAgICAgICAgIHN3aXRjaCAocGF5bWVudC5nYXRld2F5LnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgICAgY2FzZSAnbW9pcCc6XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfZGlnaXRzOiAgcGF5bWVudC5nYXRld2F5X2RhdGEuY2FydGFvX2JpbixcbiAgICAgICAgICAgICAgICBsYXN0X2RpZ2l0czogcGF5bWVudC5nYXRld2F5X2RhdGEuY2FydGFvX2ZpbmFsLFxuICAgICAgICAgICAgICAgIGJyYW5kOiBwYXltZW50LmdhdGV3YXlfZGF0YS5jYXJ0YW9fYmFuZGVpcmFcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ3BhZ2FybWUnOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpcnN0X2RpZ2l0czogcGF5bWVudC5nYXRld2F5X2RhdGEuY2FyZF9maXJzdF9kaWdpdHMsXG4gICAgICAgICAgICAgICAgbGFzdF9kaWdpdHM6IHBheW1lbnQuZ2F0ZXdheV9kYXRhLmNhcmRfbGFzdF9kaWdpdHMsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHBheW1lbnQuZ2F0ZXdheV9kYXRhLmNhcmRfYnJhbmRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRpc3BsYXlQYXltZW50TWV0aG9kID0gZnVuY3Rpb24oKXtcbiAgICAgICAgc3dpdGNoIChwYXltZW50LnBheW1lbnRfbWV0aG9kLnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgIGNhc2UgJ2JvbGV0b2JhbmNhcmlvJzpcbiAgICAgICAgICAgIHJldHVybiBtKCdzcGFuI2JvbGV0by1kZXRhaWwnLCAnJyk7XG4gICAgICAgICAgY2FzZSAnY2FydGFvZGVjcmVkaXRvJzpcbiAgICAgICAgICAgIHZhciBjYXJkRGF0YSA9IGNhcmQoKTtcbiAgICAgICAgICAgIGlmIChjYXJkRGF0YSl7XG4gICAgICAgICAgICAgIHJldHVybiBtKCcjY3JlZGl0Y2FyZC1kZXRhaWwuZm9udHNpemUtc21hbGxlc3QuZm9udGNvbG9yLXNlY29uZGFyeS5saW5laGVpZ2h0LXRpZ2h0JywgW1xuICAgICAgICAgICAgICAgIGNhcmREYXRhLmZpcnN0X2RpZ2l0cyArICcqKioqKionICsgY2FyZERhdGEubGFzdF9kaWdpdHMsXG4gICAgICAgICAgICAgICAgbSgnYnInKSxcbiAgICAgICAgICAgICAgICBjYXJkRGF0YS5icmFuZCArICcgJyArIHBheW1lbnQuaW5zdGFsbG1lbnRzICsgJ3gnXG4gICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwYXltZW50TWV0aG9kQ2xhc3MgPSBmdW5jdGlvbigpe1xuICAgICAgICBzd2l0Y2ggKHBheW1lbnQucGF5bWVudF9tZXRob2QudG9Mb3dlckNhc2UoKSl7XG4gICAgICAgICAgY2FzZSAnYm9sZXRvYmFuY2FyaW8nOlxuICAgICAgICAgICAgcmV0dXJuICcuZmEtYmFyY29kZSc7XG4gICAgICAgICAgY2FzZSAnY2FydGFvZGVjcmVkaXRvJzpcbiAgICAgICAgICAgIHJldHVybiAnLmZhLWNyZWRpdC1jYXJkJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICcuZmEtcXVlc3Rpb24nO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzdGF0ZUNsYXNzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgc3dpdGNoIChwYXltZW50LnN0YXRlKXtcbiAgICAgICAgICBjYXNlICdwYWlkJzpcbiAgICAgICAgICAgIHJldHVybiAnLnRleHQtc3VjY2Vzcyc7XG4gICAgICAgICAgY2FzZSAncmVmdW5kZWQnOlxuICAgICAgICAgICAgcmV0dXJuICcudGV4dC1yZWZ1bmRlZCc7XG4gICAgICAgICAgY2FzZSAncGVuZGluZyc6XG4gICAgICAgICAgY2FzZSAncGVuZGluZ19yZWZ1bmQnOlxuICAgICAgICAgICAgcmV0dXJuICcudGV4dC13YWl0aW5nJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICcudGV4dC1lcnJvcic7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlQYXltZW50TWV0aG9kOiBkaXNwbGF5UGF5bWVudE1ldGhvZCxcbiAgICAgICAgcGF5bWVudE1ldGhvZENsYXNzOiBwYXltZW50TWV0aG9kQ2xhc3MsXG4gICAgICAgIHN0YXRlQ2xhc3M6IHN0YXRlQ2xhc3NcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwsIGFyZ3Mpe1xuICAgICAgdmFyIHBheW1lbnQgPSBhcmdzLml0ZW07XG4gICAgICByZXR1cm4gbSgnLnctcm93LnBheW1lbnQtc3RhdHVzJywgW1xuICAgICAgICBtKCcuZm9udHNpemUtc21hbGxlc3QubGluZWhlaWdodC1sb29zZXIuZm9udHdlaWdodC1zZW1pYm9sZCcsW1xuICAgICAgICAgIG0oJ3NwYW4uZmEuZmEtY2lyY2xlJyArIGN0cmwuc3RhdGVDbGFzcygpKSwgJ8KgJyArIHBheW1lbnQuc3RhdGVcbiAgICAgICAgXSksXG4gICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVzdC5mb250d2VpZ2h0LXNlbWlib2xkJyxbXG4gICAgICAgICAgbSgnc3Bhbi5mYScgKyBjdHJsLnBheW1lbnRNZXRob2RDbGFzcygpKSwgJyAnLCBtKCdhLmxpbmstaGlkZGVuW2hyZWY9XCIjXCJdJywgcGF5bWVudC5wYXltZW50X21ldGhvZClcbiAgICAgICAgXSksXG4gICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVzdC5mb250Y29sb3Itc2Vjb25kYXJ5LmxpbmVoZWlnaHQtdGlnaHQnLCBbXG4gICAgICAgICAgY3RybC5kaXNwbGF5UGF5bWVudE1ldGhvZCgpXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tKSk7XG4iLCJ3aW5kb3cuYy5Qcm9qZWN0Q2FyZCA9IChmdW5jdGlvbihtLCBoLCBtb2RlbHMpe1xuICByZXR1cm4ge1xuXG4gICAgdmlldzogZnVuY3Rpb24oY3RybCwgYXJncykge1xuICAgICAgdmFyIHByb2plY3QgPSBhcmdzLnByb2plY3QsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSBwcm9qZWN0LnByb2dyZXNzLnRvRml4ZWQoMiksXG4gICAgICAgICAgcmVtYWluaW5nVGV4dE9iaiA9IGguZ2VuZXJhdGVSZW1haW5nVGltZShwcm9qZWN0KSgpO1xuXG4gICAgICByZXR1cm4gbSgnLnctY29sLnctY29sLTQnLCBbXG4gICAgICAgIG0oJy5jYXJkLXByb2plY3QuY2FyZC51LXJhZGl1cycsIFtcbiAgICAgICAgICBtKCdhLmNhcmQtcHJvamVjdC10aHVtYltocmVmPVwiJyArICBwcm9qZWN0LnBlcm1hbGluayArICdcIl0nLCB7c3R5bGU6IHsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIHByb2plY3QucHJvamVjdF9pbWcgKyAnKScsICdkaXNwbGF5JzogJ2Jsb2NrJ319KSxcbiAgICAgICAgICBtKCcuY2FyZC1wcm9qZWN0LWRlc2NyaXB0aW9uLmFsdCcsIFtcbiAgICAgICAgICAgIG0oJy5mb250d2VpZ2h0LXNlbWlib2xkLnUtdGV4dC1jZW50ZXItc21hbGwtb25seS5saW5laGVpZ2h0LXRpZ2h0LnUtbWFyZ2luYm90dG9tLTEwLmZvbnRzaXplLWJhc2UnLCBbXG4gICAgICAgICAgICAgIG0oJ2EubGluay1oaWRkZW5baHJlZj1cIi8nICsgcHJvamVjdC5wZXJtYWxpbmsgKyAnXCJdJywgcHJvamVjdC5wcm9qZWN0X25hbWUpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICAgIG0oJy53LWhpZGRlbi1zbWFsbC53LWhpZGRlbi10aW55LmZvbnRzaXplLXNtYWxsZXN0LmZvbnRjb2xvci1zZWNvbmRhcnkudS1tYXJnaW5ib3R0b20tMjAnLCAncG9yICcgKyBwcm9qZWN0Lm93bmVyX25hbWUpLFxuICAgICAgICAgICAgbSgnLnctaGlkZGVuLXNtYWxsLnctaGlkZGVuLXRpbnkuZm9udGNvbG9yLXNlY29uZGFyeS5mb250c2l6ZS1zbWFsbGVyJywgW1xuICAgICAgICAgICAgICBtKCdhLmxpbmstaGlkZGVuW2hyZWY9XCIvJyArIHByb2plY3QucGVybWFsaW5rICsgJ1wiXScsIHByb2plY3QuaGVhZGxpbmUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIG0oJy53LWhpZGRlbi1zbWFsbC53LWhpZGRlbi10aW55LmNhcmQtcHJvamVjdC1hdXRob3IuYWx0dCcsIFtcbiAgICAgICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVzdC5mb250Y29sb3Itc2Vjb25kYXJ5JywgW20oJ3NwYW4uZmEuZmEtbWFwLW1hcmtlci5mYS0xJywgJyAnKSwgJyAnICsgIHByb2plY3QuY2l0eV9uYW1lICsgJywgJyArIHByb2plY3Quc3RhdGVfYWNyb255bV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbSgnLmNhcmQtcHJvamVjdC1tZXRlcicsIFtcbiAgICAgICAgICAgIG0oJy5tZXRlcicsIFtcbiAgICAgICAgICAgICAgbSgnLm1ldGVyLWZpbGwnLCB7c3R5bGU6IHt3aWR0aDogKHByb2dyZXNzID4gMTAwID8gMTAwIDogcHJvZ3Jlc3MpICsgJyUnfX0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIG0oJy5jYXJkLXByb2plY3Qtc3RhdHMnLCBbXG4gICAgICAgICAgICBtKCcudy1yb3cnLCBbXG4gICAgICAgICAgICAgIG0oJy53LWNvbC53LWNvbC00LnctY29sLXNtYWxsLTQudy1jb2wtdGlueS00JywgW1xuICAgICAgICAgICAgICAgIG0oJy5mb250c2l6ZS1iYXNlLmZvbnR3ZWlnaHQtc2VtaWJvbGQnLCBNYXRoLmNlaWwocHJvamVjdC5wcm9ncmVzcykgKyAgJyUnKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgbSgnLnctY29sLnctY29sLTQudy1jb2wtc21hbGwtNC53LWNvbC10aW55LTQudS10ZXh0LWNlbnRlci1zbWFsbC1vbmx5JywgW1xuICAgICAgICAgICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVyLmZvbnR3ZWlnaHQtc2VtaWJvbGQnLCAnUiQgJyArIHByb2plY3QucGxlZGdlZCksXG4gICAgICAgICAgICAgICAgbSgnLmZvbnRzaXplLXNtYWxsZXN0LmxpbmVoZWlnaHQtdGlnaHRlc3QnLCAnTGV2YW50YWRvcycpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNC53LWNvbC1zbWFsbC00LnctY29sLXRpbnktNC51LXRleHQtcmlnaHQnLCBbXG4gICAgICAgICAgICAgICAgbSgnLmZvbnRzaXplLXNtYWxsZXIuZm9udHdlaWdodC1zZW1pYm9sZCcsIHJlbWFpbmluZ1RleHRPYmoudG90YWwgKyAnICcgKyByZW1haW5pbmdUZXh0T2JqLnVuaXQpLFxuICAgICAgICAgICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVzdC5saW5laGVpZ2h0LXRpZ2h0ZXN0JywgJ1Jlc3RhbnRlcycpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYy5oLCB3aW5kb3cuYy5tb2RlbHMpKTtcblxuIiwid2luZG93LmMuUHJvamVjdENoYXJ0Q29udHJpYnV0aW9uQW1vdW50UGVyRGF5ID0gKGZ1bmN0aW9uKG0sIENoYXJ0LCBfLCBoKXtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICB2YXIgcmVzb3VyY2UgPSBhcmdzLmNvbGxlY3Rpb24oKVswXSxcbiAgICAgICAgICBtb3VudERhdGFzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICBsYWJlbDogJ1IkIGFycmVjYWRhZG9zIHBvciBkaWEnLFxuICAgICAgICAgICAgICBmaWxsQ29sb3I6ICdyZ2JhKDEyNiwxOTQsNjksMC4yKScsXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSgxMjYsMTk0LDY5LDEpJyxcbiAgICAgICAgICAgICAgcG9pbnRDb2xvcjogJ3JnYmEoMTI2LDE5NCw2OSwxKScsXG4gICAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXG4gICAgICAgICAgICAgIGRhdGE6IF8ubWFwKHJlc291cmNlLnNvdXJjZSwgZnVuY3Rpb24oaXRlbSkge3JldHVybiBpdGVtLnRvdGFsX2Ftb3VudDt9KVxuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJDaGFydCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGlzSW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpe3JldHVybjt9XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnb2Zmc2V0SGVpZ2h0Jywge1xuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZWxlbWVudC5oZWlnaHQ7IH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnb2Zmc2V0V2lkdGgnLCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBlbGVtZW50LndpZHRoOyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY3R4ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICBuZXcgQ2hhcnQoY3R4KS5MaW5lKHtcbiAgICAgICAgICAgICAgbGFiZWxzOiBfLm1hcChyZXNvdXJjZS5zb3VyY2UsIGZ1bmN0aW9uKGl0ZW0pIHtyZXR1cm4gaC5tb21lbnRpZnkoaXRlbS5wYWlkX2F0KTt9KSxcbiAgICAgICAgICAgICAgZGF0YXNldHM6IG1vdW50RGF0YXNldCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJDaGFydDogcmVuZGVyQ2hhcnRcbiAgICAgIH07XG4gICAgfSxcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsKSB7XG4gICAgICByZXR1cm4gbSgnLmNhcmQudS1yYWRpdXMubWVkaXVtLnUtbWFyZ2luYm90dG9tLTMwJywgW1xuICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC51LW1hcmdpbmJvdHRvbS0xMC5mb250c2l6ZS1sYXJnZS51LXRleHQtY2VudGVyJywgJ1IkIGFycmVjYWRhZG9zIHBvciBkaWEnKSxcbiAgICAgICAgbSgnLnctcm93JyxbXG4gICAgICAgICAgbSgnLnctY29sLnctY29sLTEyJywgW1xuICAgICAgICAgICAgbSgnY2FudmFzW2lkPVwiY2hhcnRcIl1bd2lkdGg9XCI4NjBcIl1baGVpZ2h0PVwiMzAwXCJdJywge2NvbmZpZzogY3RybC5yZW5kZXJDaGFydH0pXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuQ2hhcnQsIHdpbmRvdy5fLCB3aW5kb3cuYy5oKSk7XG5cbiIsIndpbmRvdy5jLlByb2plY3RDaGFydENvbnRyaWJ1dGlvblRvdGFsUGVyRGF5ID0gKGZ1bmN0aW9uKG0sIENoYXJ0LCBfLCBoKXtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICB2YXIgcmVzb3VyY2UgPSBhcmdzLmNvbGxlY3Rpb24oKVswXSxcbiAgICAgICAgICBtb3VudERhdGFzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICBsYWJlbDogJ0Fwb2lvcyBjb25maXJtYWRvcyBwb3IgZGlhJyxcbiAgICAgICAgICAgICAgZmlsbENvbG9yOiAncmdiYSgxMjYsMTk0LDY5LDAuMiknLFxuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJ3JnYmEoMTI2LDE5NCw2OSwxKScsXG4gICAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDEyNiwxOTQsNjksMSknLFxuICAgICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0RmlsbDogJyNmZmYnLFxuICAgICAgICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgICAgICBkYXRhOiBfLm1hcChyZXNvdXJjZS5zb3VyY2UsIGZ1bmN0aW9uKGl0ZW0pIHtyZXR1cm4gaXRlbS50b3RhbDt9KVxuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJDaGFydCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGlzSW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpe3JldHVybjt9XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnb2Zmc2V0SGVpZ2h0Jywge1xuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZWxlbWVudC5oZWlnaHQ7IH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnb2Zmc2V0V2lkdGgnLCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBlbGVtZW50LndpZHRoOyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY3R4ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICBuZXcgQ2hhcnQoY3R4KS5MaW5lKHtcbiAgICAgICAgICAgICAgbGFiZWxzOiBfLm1hcChyZXNvdXJjZS5zb3VyY2UsIGZ1bmN0aW9uKGl0ZW0pIHtyZXR1cm4gaC5tb21lbnRpZnkoaXRlbS5wYWlkX2F0KTt9KSxcbiAgICAgICAgICAgICAgZGF0YXNldHM6IG1vdW50RGF0YXNldCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJDaGFydDogcmVuZGVyQ2hhcnRcbiAgICAgIH07XG4gICAgfSxcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsKSB7XG4gICAgICByZXR1cm4gbSgnLmNhcmQudS1yYWRpdXMubWVkaXVtLnUtbWFyZ2luYm90dG9tLTMwJywgW1xuICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC51LW1hcmdpbmJvdHRvbS0xMC5mb250c2l6ZS1sYXJnZS51LXRleHQtY2VudGVyJywgJ0Fwb2lvcyBjb25maXJtYWRvcyBwb3IgZGlhJyksXG4gICAgICAgIG0oJy53LXJvdycsW1xuICAgICAgICAgIG0oJy53LWNvbC53LWNvbC0xMicsIFtcbiAgICAgICAgICAgIG0oJ2NhbnZhc1tpZD1cImNoYXJ0XCJdW3dpZHRoPVwiODYwXCJdW2hlaWdodD1cIjMwMFwiXScsIHtjb25maWc6IGN0cmwucmVuZGVyQ2hhcnR9KVxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93LkNoYXJ0LCB3aW5kb3cuXywgd2luZG93LmMuaCkpO1xuIiwid2luZG93LmMuUHJvamVjdENvbnRyaWJ1dGlvbnNQZXJMb2NhdGlvblRhYmxlID0gKGZ1bmN0aW9uKG0sIG1vZGVscywgaCwgXykge1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIHZhclx0dm0gPSBtLnBvc3RncmVzdC5maWx0ZXJzVk0oe3Byb2plY3RfaWQ6ICdlcSd9KSxcbiAgICAgICAgICBjb250cmlidXRpb25zUGVyTG9jYXRpb24gPSBtLnByb3AoW10pLFxuICAgICAgICAgIGdlbmVyYXRlU29ydCA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBjb250cmlidXRpb25zUGVyTG9jYXRpb24oKSxcbiAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gY29sbGVjdGlvblswXSxcbiAgICAgICAgICAgICAgICAgIG9yZGVyZWRTb3VyY2UgPSBfLnNvcnRCeShyZXNvdXJjZS5zb3VyY2UsIGZpZWxkKTtcblxuICAgICAgICAgICAgICBpZiAocmVzb3VyY2Uub3JkZXJGaWx0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlLm9yZGVyRmlsdGVyID0gJ0RFU0MnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHJlc291cmNlLm9yZGVyRmlsdGVyID09PSAnREVTQycpIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkU291cmNlID0gb3JkZXJlZFNvdXJjZS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXNvdXJjZS5zb3VyY2UgPSBvcmRlcmVkU291cmNlO1xuICAgICAgICAgICAgICByZXNvdXJjZS5vcmRlckZpbHRlciA9IChyZXNvdXJjZS5vcmRlckZpbHRlciA9PT0gJ0RFU0MnID8gJ0FTQycgOiAnREVTQycpO1xuICAgICAgICAgICAgICBjb250cmlidXRpb25zUGVyTG9jYXRpb24oY29sbGVjdGlvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG5cbiAgICAgIHZtLnByb2plY3RfaWQoYXJncy5yZXNvdXJjZUlkKTtcblxuICAgICAgbW9kZWxzLnByb2plY3RDb250cmlidXRpb25zUGVyTG9jYXRpb24uZ2V0Um93KHZtLnBhcmFtZXRlcnMoKSkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgY29udHJpYnV0aW9uc1BlckxvY2F0aW9uKGRhdGEpO1xuICAgICAgICBnZW5lcmF0ZVNvcnQoJ3RvdGFsX2NvbnRyaWJ1dGVkJykoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250cmlidXRpb25zUGVyTG9jYXRpb246IGNvbnRyaWJ1dGlvbnNQZXJMb2NhdGlvbixcbiAgICAgICAgZ2VuZXJhdGVTb3J0OiBnZW5lcmF0ZVNvcnRcbiAgICAgIH07XG4gICAgfSxcbiAgICB2aWV3OiBmdW5jdGlvbihjdHJsKSB7XG4gICAgICByZXR1cm4gbSgnLnByb2plY3QtY29udHJpYnV0aW9ucy1wZXItbG9jYXRpb24nLCBbXG4gICAgICAgIG0oJy5mb250d2VpZ2h0LXNlbWlib2xkLnUtbWFyZ2luYm90dG9tLTEwLmZvbnRzaXplLWxhcmdlLnUtdGV4dC1jZW50ZXInLCAnTG9jYWxpemHDp8OjbyBnZW9ncsOhZmljYSBkb3MgYXBvaW9zJyksXG4gICAgICAgIGN0cmwuY29udHJpYnV0aW9uc1BlckxvY2F0aW9uKCkubWFwKGZ1bmN0aW9uKGNvbnRyaWJ1dGlvbkxvY2F0aW9uKXtcbiAgICAgICAgICByZXR1cm4gbSgnLnRhYmxlLW91dGVyLnUtbWFyZ2luYm90dG9tLTYwJywgW1xuICAgICAgICAgICAgbSgnLnctcm93LnRhYmxlLXJvdy5mb250d2VpZ2h0LXNlbWlib2xkLmZvbnRzaXplLXNtYWxsZXIuaGVhZGVyJywgW1xuICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNC53LWNvbC1zbWFsbC00LnctY29sLXRpbnktNC50YWJsZS1jb2wnLCBbXG4gICAgICAgICAgICAgICAgbSgnZGl2JywgJ0VzdGFkbycpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNC53LWNvbC1zbWFsbC00LnctY29sLXRpbnktNC50YWJsZS1jb2xbZGF0YS1peD1cInNvcnQtYXJyb3dzXCJdJywgW1xuICAgICAgICAgICAgICAgIG0oJ2EubGluay1oaWRkZW5baHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIl0nLCB7b25jbGljazogY3RybC5nZW5lcmF0ZVNvcnQoJ3RvdGFsX2NvbnRyaWJ1dGlvbnMnKX0sIFtcbiAgICAgICAgICAgICAgICAgICdBcG9pb3PCoMKgJyxtKCdzcGFuLmZhLmZhLXNvcnQnKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNC53LWNvbC1zbWFsbC00LnctY29sLXRpbnktNC50YWJsZS1jb2xbZGF0YS1peD1cInNvcnQtYXJyb3dzXCJdJywgW1xuICAgICAgICAgICAgICAgIG0oJ2EubGluay1oaWRkZW5baHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIl0nLCB7b25jbGljazogY3RybC5nZW5lcmF0ZVNvcnQoJ3RvdGFsX2NvbnRyaWJ1dGVkJyl9LCBbXG4gICAgICAgICAgICAgICAgICAnUiQgYXBvaWFkb3MgJyxcbiAgICAgICAgICAgICAgICAgIG0oJ3NwYW4udy1oaWRkZW4tc21hbGwudy1oaWRkZW4tdGlueScsJyglIGRvIHRvdGFsKcKgJyksXG4gICAgICAgICAgICAgICAgICAnICcsbSgnc3Bhbi5mYS5mYS1zb3J0JylcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBtKCcudGFibGUtaW5uZXIuZm9udHNpemUtc21hbGwnLCBbXG4gICAgICAgICAgICAgIF8ubWFwKGNvbnRyaWJ1dGlvbkxvY2F0aW9uLnNvdXJjZSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0oJy53LXJvdy50YWJsZS1yb3cnLCBbXG4gICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNC53LWNvbC1zbWFsbC00LnctY29sLXRpbnktNC50YWJsZS1jb2wnLCBbXG4gICAgICAgICAgICAgICAgICAgIG0oJ2RpdicsIHNvdXJjZS5zdGF0ZV9hY3JvbnltKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNC53LWNvbC1zbWFsbC00LnctY29sLXRpbnktNC50YWJsZS1jb2wnLCBbXG4gICAgICAgICAgICAgICAgICAgIG0oJ2RpdicsIHNvdXJjZS50b3RhbF9jb250cmlidXRpb25zKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtNC53LWNvbC1zbWFsbC00LnctY29sLXRpbnktNC50YWJsZS1jb2wnLCBbXG4gICAgICAgICAgICAgICAgICAgIG0oJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAnUiQgJyxcbiAgICAgICAgICAgICAgICAgICAgICBoLmZvcm1hdE51bWJlcihzb3VyY2UudG90YWxfY29udHJpYnV0ZWQsIDIsIDMpLFxuICAgICAgICAgICAgICAgICAgICAgIG0oJ3NwYW4udy1oaWRkZW4tc21hbGwudy1oaWRkZW4tdGlueScsICfCoMKgKCcgKyBzb3VyY2UudG90YWxfb25fcGVyY2VudGFnZS50b0ZpeGVkKDIpICsgJyUpJylcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pO1xuICAgICAgICB9KVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93LmMubW9kZWxzLCB3aW5kb3cuYy5oLCB3aW5kb3cuXykpO1xuIiwid2luZG93LmMuUHJvamVjdFJlbWluZGVyQ291bnQgPSAoZnVuY3Rpb24obSl7XG4gIHJldHVybiB7XG4gICAgdmlldzogZnVuY3Rpb24oY3RybCwgYXJncykge1xuICAgICAgdmFyIHByb2plY3QgPSBhcmdzLnJlc291cmNlO1xuICAgICAgcmV0dXJuIG0oJyNwcm9qZWN0LXJlbWluZGVyLWNvdW50LmNhcmQudS1yYWRpdXMudS10ZXh0LWNlbnRlci5tZWRpdW0udS1tYXJnaW5ib3R0b20tODAnLCBbXG4gICAgICAgIG0oJy5mb250c2l6ZS1sYXJnZS5mb250d2VpZ2h0LXNlbWlib2xkJywgJ1RvdGFsIGRlIHBlc3NvYXMgcXVlIGNsaWNhcmFtIG5vIGJvdMOjbyBMZW1icmFyLW1lJyksXG4gICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVyLnUtbWFyZ2luYm90dG9tLTMwJywgJ1VtIGxlbWJyZXRlIHBvciBlbWFpbCDDqSBlbnZpYWRvIDQ4IGhvcmFzIGFudGVzIGRvIHTDqXJtaW5vIGRhIHN1YSBjYW1wYW5oYScpLFxuICAgICAgICBtKCcuZm9udHNpemUtanVtYm8nLCBwcm9qZWN0LnJlbWluZGVyX2NvdW50KVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSkpO1xuIiwid2luZG93LmMuUHJvamVjdFJvdyA9IChmdW5jdGlvbihtKXtcbiAgcmV0dXJuIHtcblxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwsIGFyZ3MpIHtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gYXJncy5jb2xsZWN0aW9uO1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29sbGVjdGlvbigpLmxlbmd0aCA+IDAgPyBtKCcudy1zZWN0aW9uLnNlY3Rpb24udS1tYXJnaW5ib3R0b20tNDAnLCBbXG4gICAgICAgIG0oJy53LWNvbnRhaW5lcicsIFtcbiAgICAgICAgICBtKCcudy1yb3cudS1tYXJnaW5ib3R0b20tMzAnLCBbXG4gICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMTAudy1jb2wtc21hbGwtNi53LWNvbC10aW55LTYnLCBbXG4gICAgICAgICAgICAgIG0oJy5mb250c2l6ZS1sYXJnZS5saW5laGVpZ2h0LWxvb3NlcicsIGNvbGxlY3Rpb24udGl0bGUpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIG0oJy53LWNvbC53LWNvbC0yLnctY29sLXNtYWxsLTYudy1jb2wtdGlueS02JywgW1xuICAgICAgICAgICAgICBtKCdhLmJ0bi5idG4tc21hbGwuYnRuLXRlcmNpYXJ5W2hyZWY9XCIvcHQvZXhwbG9yZT9yZWY9aG9tZV8nICsgY29sbGVjdGlvbi5oYXNoICsgJyMnICsgY29sbGVjdGlvbi5oYXNoICsgJ1wiXScsICdWZXIgdG9kb3MnKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBtKCcudy1yb3cnLCBfLm1hcChjb2xsZWN0aW9uLmNvbGxlY3Rpb24oKSwgZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgICAgICByZXR1cm4gbS5jb21wb25lbnQoYy5Qcm9qZWN0Q2FyZCwge3Byb2plY3Q6IHByb2plY3R9KTtcbiAgICAgICAgICB9KSlcbiAgICAgICAgXSlcbiAgICAgIF0pIDogbSgnJyk7XG4gICAgfX07XG59KHdpbmRvdy5tKSk7XG5cbiIsIndpbmRvdy5jLlRlYW1NZW1iZXJzID0gKGZ1bmN0aW9uKF8sIG0sIG1vZGVscyl7XG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdm0gPSB7Y29sbGVjdGlvbjogbS5wcm9wKFtdKX0sXG5cbiAgICAgICAgZ3JvdXBDb2xsZWN0aW9uID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgZ3JvdXBUb3RhbCkge1xuICAgICAgICByZXR1cm4gXy5tYXAoXy5yYW5nZShNYXRoLmNlaWwoY29sbGVjdGlvbi5sZW5ndGggLyBncm91cFRvdGFsKSksIGZ1bmN0aW9uKGkpe1xuICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLnNsaWNlKGkgKiBncm91cFRvdGFsLCAoaSArIDEpICogZ3JvdXBUb3RhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbW9kZWxzLnRlYW1NZW1iZXIuZ2V0UGFnZSgpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIHZtLmNvbGxlY3Rpb24oZ3JvdXBDb2xsZWN0aW9uKGRhdGEsIDQpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2bTogdm1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwpIHtcbiAgICAgIHJldHVybiBtKCcjdGVhbS1tZW1iZXJzLXN0YXRpYy53LXNlY3Rpb24uc2VjdGlvbicsIFtcbiAgICAgICAgbSgnLnctY29udGFpbmVyJyxbXG4gICAgICAgICAgXy5tYXAoY3RybC52bS5jb2xsZWN0aW9uKCksIGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gbSgnLnctcm93LnUtdGV4dC1jZW50ZXInLFtcbiAgICAgICAgICAgICAgXy5tYXAoZ3JvdXAsIGZ1bmN0aW9uKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtKCcudGVhbS1tZW1iZXIudy1jb2wudy1jb2wtMy53LWNvbC1zbWFsbC0zLnctY29sLXRpbnktNi51LW1hcmdpbmJvdHRvbS00MCcsIFtcbiAgICAgICAgICAgICAgICAgIG0oJ2EuYWx0LWxpbmtbaHJlZj1cIi91c2Vycy8nICsgbWVtYmVyLmlkICsgJ1wiXScsIFtcbiAgICAgICAgICAgICAgICAgICAgbSgnaW1nLnRodW1iLmJpZy51LXJvdW5kLnUtbWFyZ2luYm90dG9tLTEwW3NyYz1cIicgKyBtZW1iZXIuaW1nICsgJ1wiXScpLFxuICAgICAgICAgICAgICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5mb250c2l6ZS1iYXNlJywgbWVtYmVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIG0oJy5mb250c2l6ZS1zbWFsbGVzdC5mb250Y29sb3Itc2Vjb25kYXJ5JywgJ0Fwb2lvdSAnICsgbWVtYmVyLnRvdGFsX2NvbnRyaWJ1dGVkX3Byb2plY3RzICsgJyBwcm9qZXRvcycpXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cuXywgd2luZG93Lm0sIHdpbmRvdy5jLm1vZGVscykpO1xuIiwid2luZG93LmMuVGVhbVRvdGFsID0gKGZ1bmN0aW9uKG0sIGgsIG1vZGVscyl7XG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdm0gPSB7Y29sbGVjdGlvbjogbS5wcm9wKFtdKX07XG5cbiAgICAgIG1vZGVscy50ZWFtVG90YWwuZ2V0Um93KCkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgdm0uY29sbGVjdGlvbihkYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2bTogdm1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwpIHtcbiAgICAgIHJldHVybiBtKCcjdGVhbS10b3RhbC1zdGF0aWMudy1zZWN0aW9uLnNlY3Rpb24tb25lLWNvbHVtbi51LW1hcmdpbnRvcC00MC51LXRleHQtY2VudGVyLnUtbWFyZ2luYm90dG9tLTIwJywgW1xuICAgICAgICBjdHJsLnZtLmNvbGxlY3Rpb24oKS5tYXAoZnVuY3Rpb24odGVhbVRvdGFsKXtcbiAgICAgICAgICByZXR1cm4gbSgnLnctY29udGFpbmVyJywgW1xuICAgICAgICAgICAgbSgnLnctcm93JywgW1xuICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMicpLFxuICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtOCcsIFtcbiAgICAgICAgICAgICAgICBtKCcuZm9udHNpemUtYmFzZS51LW1hcmdpbmJvdHRvbS0zMCcsXG4gICAgICAgICAgICAgICAgICAnSG9qZSBzb21vcyAnICsgdGVhbVRvdGFsLm1lbWJlcl9jb3VudCArICcgcGVzc29hcyBlc3BhbGhhZGFzIHBvciAnICsgdGVhbVRvdGFsLnRvdGFsX2NpdGllcyArICcgY2lkYWRlcyBlbSAnICsgdGVhbVRvdGFsLmNvdW50cmllcy5sZW5ndGggK1xuICAgICAgICAgICAgICAgICAgICAnIHBhw61zZXMgKCcgKyB0ZWFtVG90YWwuY291bnRyaWVzLnRvU3RyaW5nKCkgKyAnKSEgTyBDYXRhcnNlIMOpIGluZGVwZW5kZW50ZSwgc2VtIGludmVzdGlkb3JlcywgZGUgY8OzZGlnbyBhYmVydG8gZSBjb25zdHJ1w61kbyBjb20gYW1vci4gTm9zc2EgcGFpeMOjbyDDqSBjb25zdHJ1aXIgdW0gYW1iaWVudGUgb25kZSBjYWRhIHZleiBtYWlzIHByb2pldG9zIHBvc3NhbSBnYW5oYXIgdmlkYS4nKSxcbiAgICAgICAgICAgICAgICAgIG0oJy5mb250c2l6ZS1sYXJnZXIubGluZWhlaWdodC10aWdodC50ZXh0LXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAnTm9zc2EgZXF1aXBlLCBqdW50YSwgasOhIGFwb2lvdSBSJCcgKyBoLmZvcm1hdE51bWJlcih0ZWFtVG90YWwudG90YWxfYW1vdW50KSArICcgcGFyYSAnICsgdGVhbVRvdGFsLnRvdGFsX2NvbnRyaWJ1dGVkX3Byb2plY3RzICsgJyBwcm9qZXRvcyEnKV0pLFxuICAgICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMicpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pO1xuICAgICAgICB9KVxuICAgICAgXSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93LmMuaCwgd2luZG93LmMubW9kZWxzKSk7XG4iLCJ3aW5kb3cuYy5hZG1pbi5Db250cmlidXRpb25zID0gKGZ1bmN0aW9uKG0sIGMsIGgpe1xuICB2YXIgYWRtaW4gPSBjLmFkbWluO1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgbGlzdFZNID0gYWRtaW4uY29udHJpYnV0aW9uTGlzdFZNLFxuICAgICAgICAgIGZpbHRlclZNID0gYWRtaW4uY29udHJpYnV0aW9uRmlsdGVyVk0sXG4gICAgICAgICAgZXJyb3IgPSBtLnByb3AoJycpLFxuICAgICAgICAgIGl0ZW1CdWlsZGVyID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdBZG1pblVzZXInLFxuICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICcudy1jb2wudy1jb2wtNCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJ0FkbWluUHJvamVjdCcsXG4gICAgICAgICAgICAgIHdyYXBwZXJDbGFzczogJy53LWNvbC53LWNvbC00J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnQWRtaW5Db250cmlidXRpb24nLFxuICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICcudy1jb2wudy1jb2wtMidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJ1BheW1lbnRTdGF0dXMnLFxuICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICcudy1jb2wudy1jb2wtMidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGl0ZW1BY3Rpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdBZG1pbklucHV0QWN0aW9uJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAndXNlcl9pZCcsXG4gICAgICAgICAgICAgICAgdXBkYXRlS2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnY29udHJpYnV0aW9uX2lkJyxcbiAgICAgICAgICAgICAgICBjYWxsVG9BY3Rpb246ICdUcmFuc2ZlcmlyJyxcbiAgICAgICAgICAgICAgICBpbm5lckxhYmVsOiAnSWQgZG8gbm92byBhcG9pYWRvcjonLFxuICAgICAgICAgICAgICAgIG91dGVyTGFiZWw6ICdUcmFuc2ZlcmlyIEFwb2lvJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4OiAxMjk5MDgnLFxuICAgICAgICAgICAgICAgIG1vZGVsOiBjLm1vZGVscy5jb250cmlidXRpb25EZXRhaWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnQWRtaW5SYWRpb0FjdGlvbicsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBnZXRLZXk6ICdwcm9qZWN0X2lkJyxcbiAgICAgICAgICAgICAgICB1cGRhdGVLZXk6ICdjb250cmlidXRpb25faWQnLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAncmV3YXJkX2lkJyxcbiAgICAgICAgICAgICAgICByYWRpb3M6ICdyZXdhcmRzJyxcbiAgICAgICAgICAgICAgICBjYWxsVG9BY3Rpb246ICdBbHRlcmFyIFJlY29tcGVuc2EnLFxuICAgICAgICAgICAgICAgIG91dGVyTGFiZWw6ICdSZWNvbXBlbnNhJyxcbiAgICAgICAgICAgICAgICBnZXRNb2RlbDogYy5tb2RlbHMucHJvamVjdERldGFpbCxcbiAgICAgICAgICAgICAgICB1cGRhdGVNb2RlbDogYy5tb2RlbHMuY29udHJpYnV0aW9uRGV0YWlsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJ0FkbWluSW5wdXRBY3Rpb24nLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdzdGF0ZScsXG4gICAgICAgICAgICAgICAgdXBkYXRlS2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgIGNhbGxUb0FjdGlvbjogJ0FwYWdhcicsXG4gICAgICAgICAgICAgICAgaW5uZXJMYWJlbDogJ1RlbSBjZXJ0ZXphIHF1ZSBkZXNlamEgYXBhZ2FyIGVzc2UgYXBvaW8/JyxcbiAgICAgICAgICAgICAgICBvdXRlckxhYmVsOiAnQXBhZ2FyIEFwb2lvJyxcbiAgICAgICAgICAgICAgICBmb3JjZVZhbHVlOiAnZGVsZXRlZCcsXG4gICAgICAgICAgICAgICAgbW9kZWw6IGMubW9kZWxzLmNvbnRyaWJ1dGlvbkRldGFpbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaWx0ZXJCdWlsZGVyID0gW1xuICAgICAgICAgICAgeyAvL2Z1bGxfdGV4dF9pbmRleFxuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdGaWx0ZXJNYWluJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHZtOiBmaWx0ZXJWTS5mdWxsX3RleHRfaW5kZXgsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdCdXNxdWUgcG9yIHByb2pldG8sIGVtYWlsLCBJZHMgZG8gdXN1w6FyaW8gZSBkbyBhcG9pby4uLidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgLy9zdGF0ZVxuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdGaWx0ZXJEcm9wZG93bicsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvbSBvIGVzdGFkbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0YXRlJyxcbiAgICAgICAgICAgICAgICB2bTogZmlsdGVyVk0uc3RhdGUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAge3ZhbHVlOiAnJywgb3B0aW9uOiAnUXVhbHF1ZXIgdW0nfSxcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ3BhaWQnLCBvcHRpb246ICdwYWlkJ30sXG4gICAgICAgICAgICAgICAgICB7dmFsdWU6ICdyZWZ1c2VkJywgb3B0aW9uOiAncmVmdXNlZCd9LFxuICAgICAgICAgICAgICAgICAge3ZhbHVlOiAncGVuZGluZycsIG9wdGlvbjogJ3BlbmRpbmcnfSxcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ3BlbmRpbmdfcmVmdW5kJywgb3B0aW9uOiAncGVuZGluZ19yZWZ1bmQnfSxcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ3JlZnVuZGVkJywgb3B0aW9uOiAncmVmdW5kZWQnfSxcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ2NoYXJnZWJhY2snLCBvcHRpb246ICdjaGFyZ2ViYWNrJ30sXG4gICAgICAgICAgICAgICAgICB7dmFsdWU6ICdkZWxldGVkJywgb3B0aW9uOiAnZGVsZXRlZCd9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAvL2dhdGV3YXlcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnRmlsdGVyRHJvcGRvd24nLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdnYXRld2F5JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2F0ZXdheScsXG4gICAgICAgICAgICAgICAgdm06IGZpbHRlclZNLmdhdGV3YXksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAge3ZhbHVlOiAnJywgb3B0aW9uOiAnUXVhbHF1ZXIgdW0nfSxcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1BhZ2FybWUnLCBvcHRpb246ICdQYWdhcm1lJ30sXG4gICAgICAgICAgICAgICAgICB7dmFsdWU6ICdNb0lQJywgb3B0aW9uOiAnTW9JUCd9LFxuICAgICAgICAgICAgICAgICAge3ZhbHVlOiAnUGF5UGFsJywgb3B0aW9uOiAnUGF5UGFsJ30sXG4gICAgICAgICAgICAgICAgICB7dmFsdWU6ICdDcmVkaXRzJywgb3B0aW9uOiAnQ3LDqWRpdG9zJ31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IC8vdmFsdWVcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnRmlsdGVyTnVtYmVyUmFuZ2UnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdWYWxvcmVzIGVudHJlJyxcbiAgICAgICAgICAgICAgICBmaXJzdDogZmlsdGVyVk0udmFsdWUuZ3RlLFxuICAgICAgICAgICAgICAgIGxhc3Q6IGZpbHRlclZNLnZhbHVlLmx0ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAvL2NyZWF0ZWRfYXRcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnRmlsdGVyRGF0ZVJhbmdlJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUGVyw61vZG8gZG8gYXBvaW8nLFxuICAgICAgICAgICAgICAgIGZpcnN0OiBmaWx0ZXJWTS5jcmVhdGVkX2F0Lmd0ZSxcbiAgICAgICAgICAgICAgICBsYXN0OiBmaWx0ZXJWTS5jcmVhdGVkX2F0Lmx0ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdWJtaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGlzdFZNLmZpcnN0UGFnZShmaWx0ZXJWTS5wYXJhbWV0ZXJzKCkpLnRoZW4obnVsbCwgZnVuY3Rpb24oc2VydmVyRXJyb3Ipe1xuICAgICAgICAgICAgICBlcnJvcihzZXJ2ZXJFcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbHRlclZNOiBmaWx0ZXJWTSxcbiAgICAgICAgZmlsdGVyQnVpbGRlcjogZmlsdGVyQnVpbGRlcixcbiAgICAgICAgaXRlbUFjdGlvbnM6IGl0ZW1BY3Rpb25zLFxuICAgICAgICBpdGVtQnVpbGRlcjogaXRlbUJ1aWxkZXIsXG4gICAgICAgIGxpc3RWTToge2xpc3Q6IGxpc3RWTSwgZXJyb3I6IGVycm9yfSxcbiAgICAgICAgc3VibWl0OiBzdWJtaXRcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwpe1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbS5jb21wb25lbnQoYy5BZG1pbkZpbHRlcix7Zm9ybTogY3RybC5maWx0ZXJWTS5mb3JtRGVzY3JpYmVyLCBmaWx0ZXJCdWlsZGVyOiBjdHJsLmZpbHRlckJ1aWxkZXIsIHN1Ym1pdDogY3RybC5zdWJtaXR9KSxcbiAgICAgICAgbS5jb21wb25lbnQoYy5BZG1pbkxpc3QsIHt2bTogY3RybC5saXN0Vk0sIGl0ZW1CdWlsZGVyOiBjdHJsLml0ZW1CdWlsZGVyLCBpdGVtQWN0aW9uczogY3RybC5pdGVtQWN0aW9uc30pXG4gICAgICBdO1xuICAgIH1cbiAgfTtcbn0od2luZG93Lm0sIHdpbmRvdy5jLCB3aW5kb3cuYy5oKSk7XG4iLCJ3aW5kb3cuYy5jb250cmlidXRpb24ucHJvamVjdHNIb21lID0gKGZ1bmN0aW9uKG0sIGMpe1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZtID0ge1xuICAgICAgICByZWNvbW1lbmRlZENvbGxlY3Rpb246IG0ucHJvcChbXSksXG4gICAgICAgIHJlY2VudENvbGxlY3Rpb246IG0ucHJvcChbXSksXG4gICAgICAgIG5lYXJNZUNvbGxlY3Rpb246IG0ucHJvcChbXSksXG4gICAgICAgIGV4cGlyaW5nQ29sbGVjdGlvbjogbS5wcm9wKFtdKVxuICAgICAgfSxcbiAgICAgIHByb2plY3QgPSBjLm1vZGVscy5wcm9qZWN0LFxuXG4gICAgICBleHBpcmluZyA9IG0ucG9zdGdyZXN0LmZpbHRlcnNWTSh7ZXhwaXJlc19hdDogJ2x0ZScsIHN0YXRlOiAnZXEnfSksXG4gICAgICBuZWFyTWUgPSBtLnBvc3RncmVzdC5maWx0ZXJzVk0oe25lYXJfbWU6ICdlcScsIHN0YXRlOiAnZXEnfSksXG4gICAgICByZWNlbnRzID0gbS5wb3N0Z3Jlc3QuZmlsdGVyc1ZNKHtvbmxpbmVfZGF0ZTogJ2d0ZScsIHN0YXRlOiAnZXEnfSksXG4gICAgICByZWNvbW1lbmRlZCA9IG0ucG9zdGdyZXN0LmZpbHRlcnNWTSh7cmVjb21tZW5kZWQ6ICdlcScsIHN0YXRlOiAnZXEnfSk7XG5cbiAgICAgIGV4cGlyaW5nLmV4cGlyZXNfYXQobW9tZW50KCkuYWRkKDE0LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcbiAgICAgIGV4cGlyaW5nLnN0YXRlKCdvbmxpbmUnKTtcblxuICAgICAgbmVhck1lLm5lYXJfbWUoJ3RydWUnKS5zdGF0ZSgnb25saW5lJyk7XG5cbiAgICAgIHJlY2VudHMub25saW5lX2RhdGUobW9tZW50KCkuc3VidHJhY3QoNSwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XG4gICAgICByZWNlbnRzLnN0YXRlKCdvbmxpbmUnKTtcblxuICAgICAgcmVjb21tZW5kZWQucmVjb21tZW5kZWQoJ3RydWUnKS5zdGF0ZSgnb25saW5lJyk7XG5cbiAgICAgIHByb2plY3QuZ2V0UGFnZShuZWFyTWUucGFyYW1ldGVycygpKS50aGVuKHZtLm5lYXJNZUNvbGxlY3Rpb24pO1xuICAgICAgcHJvamVjdC5nZXRQYWdlKHJlY29tbWVuZGVkLnBhcmFtZXRlcnMoKSkudGhlbih2bS5yZWNvbW1lbmRlZENvbGxlY3Rpb24pO1xuICAgICAgcHJvamVjdC5nZXRQYWdlKHJlY2VudHMucGFyYW1ldGVycygpKS50aGVuKHZtLnJlY2VudENvbGxlY3Rpb24pO1xuICAgICAgcHJvamVjdC5nZXRQYWdlKGV4cGlyaW5nLnBhcmFtZXRlcnMoKSkudGhlbih2bS5leHBpcmluZ0NvbGxlY3Rpb24pO1xuXG4gICAgICB2YXIgY29sbGVjdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1Byw7N4aW1vcyBhIHZvY8OqJyxcbiAgICAgICAgICBoYXNoOiAnbmVhcl9vZicsXG4gICAgICAgICAgY29sbGVjdGlvbjogdm0ubmVhck1lQ29sbGVjdGlvblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdSZWNvbWVuZGFkb3MnLFxuICAgICAgICAgIGhhc2g6ICdyZWNvbW1lbmRlZCcsXG4gICAgICAgICAgY29sbGVjdGlvbjogdm0ucmVjb21tZW5kZWRDb2xsZWN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ05hIHJldGEgZmluYWwnLFxuICAgICAgICAgIGhhc2g6ICdleHBpcmluZycsXG4gICAgICAgICAgY29sbGVjdGlvbjogdm0uZXhwaXJpbmdDb2xsZWN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1JlY2VudGVzJyxcbiAgICAgICAgICBoYXNoOiAncmVjZW50JyxcbiAgICAgICAgICBjb2xsZWN0aW9uOiB2bS5yZWNlbnRDb2xsZWN0aW9uXG4gICAgICAgIH1cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbGxlY3Rpb25zOiBjb2xsZWN0aW9uc1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdmlldzogZnVuY3Rpb24oY3RybCkge1xuICAgICAgcmV0dXJuIF8ubWFwKGN0cmwuY29sbGVjdGlvbnMsIGZ1bmN0aW9uKGNvbGxlY3Rpb24pe1xuICAgICAgICByZXR1cm4gbS5jb21wb25lbnQoYy5Qcm9qZWN0Um93LCB7Y29sbGVjdGlvbjogY29sbGVjdGlvbn0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSh3aW5kb3cubSwgd2luZG93LmMpKTtcbiIsIndpbmRvdy5jLnBhZ2VzLlRlYW0gPSAoZnVuY3Rpb24obSwgYyl7XG4gIHJldHVybiB7XG4gICAgdmlldzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbSgnI3N0YXRpYy10ZWFtLWFwcCcsW1xuICAgICAgICBtLmNvbXBvbmVudChjLlRlYW1Ub3RhbCksXG4gICAgICAgIG0uY29tcG9uZW50KGMuVGVhbU1lbWJlcnMpXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYykpO1xuIiwid2luZG93LmMucHJvamVjdC5JbnNpZ2h0cyA9IChmdW5jdGlvbihtLCBjLCBtb2RlbHMsIF8pe1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIHZhciB2bSA9IG0ucG9zdGdyZXN0LmZpbHRlcnNWTSh7cHJvamVjdF9pZDogJ2VxJ30pLFxuICAgICAgICAgIHByb2plY3REZXRhaWxzID0gbS5wcm9wKFtdKSxcbiAgICAgICAgICBjb250cmlidXRpb25zUGVyRGF5ID0gbS5wcm9wKFtdKTtcblxuICAgICAgdm0ucHJvamVjdF9pZChhcmdzLnJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXG4gICAgICBtb2RlbHMucHJvamVjdERldGFpbC5nZXRSb3codm0ucGFyYW1ldGVycygpKS50aGVuKHByb2plY3REZXRhaWxzKTtcbiAgICAgIG1vZGVscy5wcm9qZWN0Q29udHJpYnV0aW9uc1BlckRheS5nZXRSb3codm0ucGFyYW1ldGVycygpKS50aGVuKGNvbnRyaWJ1dGlvbnNQZXJEYXkpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2bTogdm0sXG4gICAgICAgIHByb2plY3REZXRhaWxzOiBwcm9qZWN0RGV0YWlscyxcbiAgICAgICAgY29udHJpYnV0aW9uc1BlckRheTogY29udHJpYnV0aW9uc1BlckRheVxuICAgICAgfTtcbiAgICB9LFxuICAgIHZpZXc6IGZ1bmN0aW9uKGN0cmwpIHtcbiAgICAgIHJldHVybiBfLm1hcChjdHJsLnByb2plY3REZXRhaWxzKCksIGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICByZXR1cm4gbSgnLnByb2plY3QtaW5zaWdodHMnLFtcbiAgICAgICAgICBtKCcudy1jb250YWluZXInLCBbXG4gICAgICAgICAgICBtKCcudy1yb3cudS1tYXJnaW5ib3R0b20tNDAnLCBbXG4gICAgICAgICAgICAgIG0oJy53LWNvbC53LWNvbC0yJyksXG4gICAgICAgICAgICAgIG0oJy53LWNvbC53LWNvbC04LmRhc2hib2FyZC1oZWFkZXIudS10ZXh0LWNlbnRlcicsIFtcbiAgICAgICAgICAgICAgICBtKCcuZm9udHdlaWdodC1zZW1pYm9sZC5mb250c2l6ZS1sYXJnZXIubGluZWhlaWdodC1sb29zZXIudS1tYXJnaW5ib3R0b20tMTAnLCAnTWluaGEgY2FtcGFuaGEnKSxcbiAgICAgICAgICAgICAgICBtLmNvbXBvbmVudChjLkFkbWluUHJvamVjdERldGFpbHNDYXJkLCB7cmVzb3VyY2U6IHByb2plY3R9KSxcbiAgICAgICAgICAgICAgICBtLmNvbXBvbmVudChjLkFkbWluUHJvamVjdERldGFpbHNFeHBsYW5hdGlvbiwge3Jlc291cmNlOiBwcm9qZWN0fSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIG0oJy53LWNvbC53LWNvbC0yJylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgKGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaXNfcHVibGlzaGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbSgnLmRpdmlkZXInKSxcbiAgICAgICAgICAgICAgICBtKCcudy1zZWN0aW9uLnNlY3Rpb24tb25lLWNvbHVtbi5iZy1ncmF5LmJlZm9yZS1mb290ZXInLCBbXG4gICAgICAgICAgICAgICAgICBtKCcudy1jb250YWluZXInLCBbXG4gICAgICAgICAgICAgICAgICAgIG0oJy53LXJvdycsIFtcbiAgICAgICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMTIudS10ZXh0LWNlbnRlcicsIHtzdHlsZTogeydtaW4taGVpZ2h0JzogJzMwMHB4J319LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmNvbXBvbmVudChjLlByb2plY3RDaGFydENvbnRyaWJ1dGlvblRvdGFsUGVyRGF5LCB7Y29sbGVjdGlvbjogY3RybC5jb250cmlidXRpb25zUGVyRGF5fSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIG0oJy53LXJvdycsIFtcbiAgICAgICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMTIudS10ZXh0LWNlbnRlcicsIHtzdHlsZTogeydtaW4taGVpZ2h0JzogJzMwMHB4J319LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmNvbXBvbmVudChjLlByb2plY3RDaGFydENvbnRyaWJ1dGlvbkFtb3VudFBlckRheSwge2NvbGxlY3Rpb246IGN0cmwuY29udHJpYnV0aW9uc1BlckRheX0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBtKCcudy1yb3cnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgbSgnLnctY29sLnctY29sLTEyLnUtdGV4dC1jZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmNvbXBvbmVudChjLlByb2plY3RDb250cmlidXRpb25zUGVyTG9jYXRpb25UYWJsZSwge3Jlc291cmNlSWQ6IGN0cmwudm0ucHJvamVjdF9pZCgpfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIG0oJy53LXJvdycsIFtcbiAgICAgICAgICAgICAgICAgICAgICBtKCcudy1jb2wudy1jb2wtMTIudS10ZXh0LWNlbnRlcicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uY29tcG9uZW50KGMuUHJvamVjdFJlbWluZGVyQ291bnQsIHtyZXNvdXJjZTogcHJvamVjdH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfShwcm9qZWN0KSlcbiAgICAgICAgXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KHdpbmRvdy5tLCB3aW5kb3cuYywgd2luZG93LmMubW9kZWxzLCB3aW5kb3cuXykpO1xuIiwid2luZG93LmMuYWRtaW4uY29udHJpYnV0aW9uRmlsdGVyVk0gPSAoZnVuY3Rpb24obSwgaCwgcmVwbGFjZURpYWNyaXRpY3Mpe1xuICB2YXIgdm0gPSBtLnBvc3RncmVzdC5maWx0ZXJzVk0oe1xuICAgIGZ1bGxfdGV4dF9pbmRleDogJ0BAJyxcbiAgICBzdGF0ZTogJ2VxJyxcbiAgICBnYXRld2F5OiAnZXEnLFxuICAgIHZhbHVlOiAnYmV0d2VlbicsXG4gICAgY3JlYXRlZF9hdDogJ2JldHdlZW4nXG4gIH0pLFxuXG4gIHBhcmFtVG9TdHJpbmcgPSBmdW5jdGlvbihwKXtcbiAgICByZXR1cm4gKHAgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICB9O1xuXG4gIC8vIFNldCBkZWZhdWx0IHZhbHVlc1xuICB2bS5zdGF0ZSgnJyk7XG4gIHZtLmdhdGV3YXkoJycpO1xuICB2bS5vcmRlcih7aWQ6ICdkZXNjJ30pO1xuXG4gIHZtLmNyZWF0ZWRfYXQubHRlLnRvRmlsdGVyID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgZmlsdGVyID0gcGFyYW1Ub1N0cmluZyh2bS5jcmVhdGVkX2F0Lmx0ZSgpKTtcbiAgICByZXR1cm4gZmlsdGVyICYmIGgubW9tZW50RnJvbVN0cmluZyhmaWx0ZXIpLmVuZE9mKCdkYXknKS5mb3JtYXQoJycpO1xuICB9O1xuXG4gIHZtLmNyZWF0ZWRfYXQuZ3RlLnRvRmlsdGVyID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgZmlsdGVyID0gcGFyYW1Ub1N0cmluZyh2bS5jcmVhdGVkX2F0Lmd0ZSgpKTtcbiAgICByZXR1cm4gZmlsdGVyICYmIGgubW9tZW50RnJvbVN0cmluZyhmaWx0ZXIpLmZvcm1hdCgpO1xuICB9O1xuXG4gIHZtLmZ1bGxfdGV4dF9pbmRleC50b0ZpbHRlciA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGZpbHRlciA9IHBhcmFtVG9TdHJpbmcodm0uZnVsbF90ZXh0X2luZGV4KCkpO1xuICAgIHJldHVybiBmaWx0ZXIgJiYgcmVwbGFjZURpYWNyaXRpY3MoZmlsdGVyKSB8fCB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmV0dXJuIHZtO1xufSh3aW5kb3cubSwgd2luZG93LmMuaCwgd2luZG93LnJlcGxhY2VEaWFjcml0aWNzKSk7XG4iLCJ3aW5kb3cuYy5hZG1pbi5jb250cmlidXRpb25MaXN0Vk0gPSAoZnVuY3Rpb24obSwgbW9kZWxzKSB7XG4gIHJldHVybiBtLnBvc3RncmVzdC5wYWdpbmF0aW9uVk0obW9kZWxzLmNvbnRyaWJ1dGlvbkRldGFpbC5nZXRQYWdlV2l0aFRva2VuKTtcbn0od2luZG93Lm0sIHdpbmRvdy5jLm1vZGVscykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;










(function(m, c, Chart){
  //Chart.defaults.global.responsive = true;
  Chart.defaults.global.responsive = false;
  Chart.defaults.Line.pointHitDetectionRadius = 0;
  Chart.defaults.global.scaleFontFamily = "proxima-nova";

  var adminRoot = document.getElementById('new-admin'),
      teamRoot = document.getElementById('team-root'),
      projectIndexRoot = document.getElementById('project-index-root'),
      projectInsightsRoot = document.getElementById('project-insights-root');

  if(adminRoot){
    m.mount(adminRoot, c.admin.Contributions);
  }

  if(teamRoot){
    m.mount(teamRoot, c.pages.Team);
  }

  if(projectIndexRoot){
    m.mount(projectIndexRoot, c.contribution.projectsHome);
  }

  if(projectInsightsRoot){
    m.mount(projectInsightsRoot, m.component(c.project.Insights, {root: projectInsightsRoot}));
  }
}(window.m, window.c, window.Chart));

window.toggleMenu = function(){
  var userMenu = document.getElementById("user-menu-dropdown");
  userMenu.classList.toggle('w--open');
};

