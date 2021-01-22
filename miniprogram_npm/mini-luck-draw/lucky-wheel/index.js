module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};function e(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function n(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{h(n.next(t))}catch(t){o(t)}}function a(t){try{h(n.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}h((n=n.apply(t,e||[])).next())}))}function r(t,e){var i,n,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function o(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<i;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n}var s=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.some((function(e){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()===e}))},a=function(t){return[].filter.call(t,(function(t){return"\n"!==t})).join("")},h=function(){function t(t){this.htmlFontSize=16,this.subs={},this.rAF=function(){},this.setTimeout=function(){},this.setInterval=function(){},this.clearInterval=function(){},this.setHTMLFontSize(),"string"==typeof t?t={el:t}:1===t.nodeType&&(t={el:"",divElement:t}),t=t,this.config=t,t.flag||(t.flag="WEB"),t.el&&(t.divElement=document.querySelector(t.el));var e=0,i=0;t.divElement&&(e=t.divElement.offsetWidth,i=t.divElement.offsetHeight,t.canvasElement=document.createElement("canvas"),t.divElement.appendChild(t.canvasElement)),t.width=this.getLength(t.width)||e,t.height=this.getLength(t.height)||i,t.divElement&&(t.divElement.style.overflow="hidden",t.divElement.style.width=t.width+"px",t.divElement.style.height=t.height+"px"),t.canvasElement&&(t.canvasElement.setAttribute("package","lucky-canvas@1.2.6"),t.ctx=t.canvasElement.getContext("2d")),this.ctx=t.ctx,t.ctx&&t.width&&t.height?(this.setDpr(),this.resetArrayProto(),this.initWindowFunction()):console.error("无法获取到 CanvasContext2D 或宽高")}return t.prototype.setDpr=function(){var t=this.config;t.dpr||(window?window.dpr=t.dpr=window.devicePixelRatio||1:t.dpr||console.error(t,"未传入 dpr 可能会导致绘制异常"))},t.prototype.setHTMLFontSize=function(){window&&(this.htmlFontSize=+window.getComputedStyle(document.documentElement).fontSize.slice(0,-2))},t.prototype.initWindowFunction=function(){if(window)return this.rAF=window.requestAnimationFrame,this.setInterval=window.setInterval,void(this.clearInterval=window.clearInterval);if(this.config.rAF)this.rAF=this.config.rAF;else if(this.config.setTimeout){var t=this.config.setTimeout;this.rAF=function(e){return t(e,16)}}else this.rAF=function(t){return setTimeout(t,16)}},t.prototype.zoomCanvas=function(){var t=this.config,e=this.ctx,i=t.canvasElement,n=t.dpr,r=function(t){return(t*n-t)/(t*n)*(n/2)*100};i&&(i.width=t.width*n,i.height=t.height*n,i.style.width=i.width+"px",i.style.height=i.height+"px",i.style.transform="scale("+1/n+") translate(\n      "+-r(i.width)+"%, "+-r(i.height)+"%\n    )",e.scale(n,n))},t.prototype.loadImg=function(t,e){var i=this;return new Promise((function(n){if("WEB"===i.config.flag){var r=new Image;r.src=t,r.onload=function(){return n(r)}}else e.$resolve=n}))},t.prototype.getLength=function(t){return s(t,"number")?t:s(t,"string")?this.changeUnits(t):0},t.prototype.changeUnits=function(t,e){var i=this;return void 0===e&&(e=1),Number(t.replace(/^(\-*[0-9.]*)([a-z%]*)$/,(function(t,n,r){var o={"%":function(t){return t*(e/100)},px:function(t){return 1*t},rem:function(t){return t*i.htmlFontSize}}[r];if(o)return o(n);var s=i.config.unitFunc;return s?s(n,r):n})))},t.prototype.draw=function(){},t.prototype.observer=function(t){var e=this;t&&"object"==typeof t&&Object.keys(t).forEach((function(i){e.defineReactive(t,i,t[i])}))},t.prototype.defineReactive=function(t,e,i){var n=this;this.observer(i),Object.defineProperty(t,e,{get:function(){return i},set:function(t){var r=i;t!==i&&(i=t,n.observer(i),n.subs[e]&&n.subs[e].call(n,i,r),n.draw())}})},t.prototype.$set=function(t,e,i){t&&"object"==typeof t&&this.defineReactive(t,e,i)},t.prototype.$computed=function(t,e,i){var n=this;Object.defineProperty(t,e,{get:function(){return i.call(n)}})},t.prototype.$watch=function(t,e){this.subs[t]=e},t.prototype.resetArrayProto=function(){var t=this,e=Array.prototype,i=Object.create(e);["push","pop","shift","unshift","sort","splice","reverse"].forEach((function(n){i[n]=function(){var i;t.draw(),(i=e[n]).call.apply(i,o([this],Array.from(arguments)))}}))},t}(),l=function(t){return Math.PI/180*t},c=function(t,e){return[+(Math.cos(t)*e).toFixed(8),+(Math.sin(t)*e).toFixed(8)]},u=function(t,e){var i=-t/e;return[i,-i*t+e]},f=function(t,e,i,n,r,o){var s;if(void 0===o&&(o=!0),Math.abs(r-n).toFixed(8)>=l(180).toFixed(8)){var a=(r+n)/2;return o?(f(t,e,i,n,a,o),f(t,e,i,a,r,o)):(f(t,e,i,a,r,o),f(t,e,i,n,a,o)),!1}o||(n=(s=[r,n])[0],r=s[1]);var h=c(n,i),d=h[0],g=h[1],p=c(r,i),m=p[0],v=p[1],y=u(d,g),w=y[0],b=y[1],z=u(m,v),I=z[0],S=z[1],x=(S-b)/(w-I),T=(I*b-w*S)/(I-w);isNaN(x)&&(Math.abs(d)===+i.toFixed(8)&&(x=d),Math.abs(m)===+i.toFixed(8)&&(x=m)),w===1/0||w===-1/0?T=I*x+S:I!==1/0&&I!==-1/0||(T=w*x+b),e.lineTo(d,g),["WEB","UNI-H5"].includes(t)?e.arcTo(x,T,m,v,i):e.quadraticCurveTo(x,T,m,v)},d=function(t,e,i,n,r,o,s,a){i||(i=s);var h=l(90/Math.PI/n*s),u=l(90/Math.PI/i*s),d=r+h,g=o-h,p=r+u,m=o-u;e.beginPath(),e.fillStyle=a,e.moveTo.apply(e,c(d,n)),f(t,e,n,d,g,!0),m>p?f(t,e,i,p,m,!1):e.lineTo.apply(e,c((r+o)/2,s/2/Math.abs(Math.sin((r-o)/2)))),e.closePath(),e.fill()},g=function(t,e,i,n,r,o,s){var a=Math.min(n,r);o>a/2&&(o=a/2),t.beginPath(),t.fillStyle=s,t.moveTo(e+o,i),t.lineTo(e+o,i),t.lineTo(e+n-o,i),t.quadraticCurveTo(e+n,i,e+n,i+o),t.lineTo(e+n,i+r-o),t.quadraticCurveTo(e+n,i+r,e+n-o,i+r),t.lineTo(e+o,i+r),t.quadraticCurveTo(e,i+r,e,i+r-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath(),t.fill()},p=function(t,e,i,n){return t>=n&&(t=n),i*(t/=n)*t+e},m=function(t,e,i,n){return t>=n&&(t=n),-i*(t/=n)*(t-2)+e},v=function(t){function h(e,i){void 0===i&&(i={});var n=t.call(this,e)||this;n.blocks=[],n.prizes=[],n.buttons=[],n.defaultConfig={},n._defaultConfig={gutter:"0px",offsetDegree:0,speed:20,accelerationTime:2500,decelerationTime:2500},n.defaultStyle={},n._defaultStyle={fontSize:"18px",fontColor:"#000",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",lineHeight:"",background:"#fff",wordWrap:!0,lengthLimit:"90%"},n.Radius=0,n.prizeRadius=0,n.prizeDeg=0,n.prizeRadian=0,n.rotateDeg=0,n.maxBtnRadius=0,n.startTime=0,n.endTime=0,n.stopDeg=0,n.endDeg=0,n.animationId=0,n.FPS=16.6,n.prizeImgs=[[]],n.btnImgs=[[]],n.initData(i),n.initComputed(),n.initWatch();var r=[[]];return n.prizes&&(r=n.prizes.map((function(t){return t.imgs}))),n.buttons&&r.push.apply(r,n.buttons.map((function(t){return t.imgs}))),n.init(r),n}return e(h,t),h.prototype.initData=function(t){this.$set(this,"blocks",t.blocks||[]),this.$set(this,"prizes",t.prizes||[]),this.$set(this,"buttons",t.buttons||[]),this.$set(this,"defaultConfig",t.defaultConfig||{}),this.$set(this,"defaultStyle",t.defaultStyle||{}),this.$set(this,"startCallback",t.start),this.$set(this,"endCallback",t.end)},h.prototype.initComputed=function(){var t=this;this.$computed(this,"_defaultConfig",(function(){return i({gutter:"0px",offsetDegree:0,speed:20,accelerationTime:2500,decelerationTime:2500},t.defaultConfig)})),this.$computed(this,"_defaultStyle",(function(){return i({fontSize:"18px",fontColor:"#000",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",background:"#fff",wordWrap:!0,lengthLimit:"90%"},t.defaultStyle)}))},h.prototype.initWatch=function(){var t=this;this.$watch("prizes",(function(e,i){var n=[];return i?e&&e.forEach((function(e,r){var o=[],s=i[r];s?e.imgs&&e.imgs.forEach((function(e,i){if(!s.imgs)return o[i]=e;var n=s.imgs[i];n&&t.prizeImgs[r]&&t.prizeImgs[r][i]?e.src!==n.src&&(o[i]=e):o[i]=e})):o=e.imgs||[],n[r]=o})):n=e.map((function(t){return t.imgs})),t.init(n)})),this.$watch("buttons",(function(e,i){var n=[];return i?e&&e.forEach((function(e,r){var o=[],s=i[r];s&&s.imgs?e.imgs&&e.imgs.forEach((function(e,i){if(!s.imgs)return o[i]=e;var n=s.imgs[i];n&&t.btnImgs[r]&&t.btnImgs[r][i]?e.src!==n.src&&(o[i]=e):o[i]=e})):o=e.imgs||[],n[r]=o})):n=e.map((function(t){return t.imgs})),t.init(o(new Array(t.prizes.length).fill(void 0),n))}))},h.prototype.init=function(t){var e,i,n=this,r=this.config,o=this.ctx;this.setDpr(),this.setHTMLFontSize(),this.zoomCanvas(),null===(e=r.beforeInit)||void 0===e||e.call(this),this.Radius=Math.min(r.width,r.height)/2,o.translate(this.Radius,this.Radius);var a=function(){n.draw(),r.canvasElement&&(r.canvasElement.onclick=function(t){var e;o.beginPath(),o.arc(0,0,n.maxBtnRadius,0,2*Math.PI,!1),o.isPointInPath(t.offsetX,t.offsetY)&&(n.startTime||null===(e=n.startCallback)||void 0===e||e.call(n,t))})},h=0,l=0;s(t,"array")&&(this.draw(),t.forEach((function(t,e){if(!t)return!1;t.forEach((function(t,i){l++,n.loadAndCacheImg(e,i,(function(){h++,l===h&&a.call(n)}))}))}))),l||a.call(this),null===(i=r.afterInit)||void 0===i||i.call(this)},h.prototype.loadAndCacheImg=function(t,e,i){return n(this,void 0,void 0,(function(){var n,o,s,a,h,l,c;return r(this,(function(r){switch(r.label){case 0:return n=t<this.prizes.length,o=n?"prizes":"buttons",s=n?"prizeImgs":"btnImgs",t=n?t:t-this.prizes.length,(a=this[o][t])&&a.imgs?(h=a.imgs[e])?(this[s][t]||(this[s][t]=[]),l=this[s][t],c=e,[4,this.loadImg(h.src,h)]):[2]:[2];case 1:return l[c]=r.sent(),i.call(this),[2]}}))}))},h.prototype.computedWidthAndHeight=function(t,e,i,n){if(!e.width&&!e.height)return[t.width,t.height];if(e.width&&!e.height){var r=this.getWidth(e.width,i);return[r,t.height*(r/t.width)]}if(!e.width&&e.height){var o=this.getHeight(e.height,n);return[t.width*(o/t.height),o]}return[this.getWidth(e.width,i),this.getHeight(e.height,n)]},h.prototype.draw=function(){var t,e,i=this,n=this,r=n.config,o=n.ctx,s=n._defaultConfig,h=n._defaultStyle;null===(t=r.beforeDraw)||void 0===t||t.call(this,o),o.clearRect(-this.Radius,-this.Radius,2*this.Radius,2*this.Radius),this.prizeRadius=this.blocks.reduce((function(t,e){return o.beginPath(),o.fillStyle=e.background,o.arc(0,0,t,0,2*Math.PI,!1),o.fill(),t-i.getLength(e.padding.split(" ")[0])}),this.Radius),this.prizeDeg=360/this.prizes.length,this.prizeRadian=l(this.prizeDeg);var c=l(-90+this.rotateDeg+s.offsetDegree),u=function(t){return i.getOffsetX(o.measureText(t).width)},f=function(t,e,n){var r=t.lineHeight||h.lineHeight||t.fontSize||h.fontSize;return i.getHeight(t.top,e)+(n+1)*i.getLength(r)};o.save(),this.prizes.forEach((function(t,e){var n=c+e*i.prizeRadian,g=i.prizeRadius-i.maxBtnRadius;!function(t,e,i,n,r,o,s,a){s?d(t,e,i,n,r,o,s,a):(e.beginPath(),e.fillStyle=a,e.moveTo(0,0),e.arc(0,0,n,r,o,!1),e.closePath(),e.fill())}(r.flag,o,i.maxBtnRadius,i.prizeRadius,n-i.prizeRadian/2,n+i.prizeRadian/2,i.getLength(s.gutter),t.background||h.background);var p=Math.cos(n)*i.prizeRadius,m=Math.sin(n)*i.prizeRadius;o.translate(p,m),o.rotate(n+l(90)),t.imgs&&t.imgs.forEach((function(t,n){if(i.prizeImgs[e]){var r=i.prizeImgs[e][n];if(r){var s,a=i.computedWidthAndHeight(r,t,i.prizeRadian*i.prizeRadius,g),h=a[0],l=a[1],c=[i.getOffsetX(h),i.getHeight(t.top,g)],u=c[0],f=c[1];["WEB","MINI-WX"].includes(i.config.flag)?s=r:["UNI-H5","UNI-MINI-WX"].includes(i.config.flag)&&(s=r.path),o.drawImage(s,u,f,h,l)}}})),t.fonts&&t.fonts.forEach((function(t){var e=t.fontColor||h.fontColor,n=t.fontWeight||h.fontWeight,r=i.getLength(t.fontSize||h.fontSize),l=t.fontStyle||h.fontStyle;o.fillStyle=e,o.font=n+" "+r+"px "+l;var c=[],d=String(t.text);if(t.hasOwnProperty("wordWrap")?t.wordWrap:h.wordWrap){d=a(d);for(var p="",m=0;m<d.length;m++){p+=d[m];var v=o.measureText(p).width,y=(i.prizeRadius-f(t,g,c.length))*Math.tan(i.prizeRadian/2)*2-i.getLength(s.gutter);v>i.getWidth(t.lengthLimit||h.lengthLimit,y)&&(c.push(p.slice(0,-1)),p=d[m])}p&&c.push(p),c.length||c.push(d)}else c=d.split("\n");c.filter((function(t){return!!t})).forEach((function(e,i){o.fillText(e,u(e),f(t,g,i))}))})),o.rotate(l(360)-n-l(90)),o.translate(-p,-m)})),o.restore(),this.buttons.forEach((function(t,e){var n=i.getHeight(t.radius);i.maxBtnRadius=Math.max(i.maxBtnRadius,n),o.beginPath(),o.fillStyle=t.background||"#fff",o.arc(0,0,n,0,2*Math.PI,!1),o.fill(),t.pointer&&(o.beginPath(),o.fillStyle=t.background||"#fff",o.moveTo(-n,0),o.lineTo(n,0),o.lineTo(0,2*-n),o.closePath(),o.fill()),t.imgs&&t.imgs.forEach((function(r,s){if(i.btnImgs[e]){var a=i.btnImgs[e][s];if(a){var h,l=i.computedWidthAndHeight(a,r,2*i.getHeight(t.radius),2*i.getHeight(t.radius)),c=l[0],u=l[1],f=[i.getOffsetX(c),i.getHeight(r.top,n)],d=f[0],g=f[1];["WEB","MINI-WX"].includes(i.config.flag)?h=a:["UNI-H5","UNI-MINI-WX"].includes(i.config.flag)&&(h=a.path),o.drawImage(h,d,g,c,u)}}})),t.fonts&&t.fonts.forEach((function(t){var e=t.fontColor||h.fontColor,r=t.fontWeight||h.fontWeight,s=i.getLength(t.fontSize||h.fontSize),a=t.fontStyle||h.fontStyle;o.fillStyle=e,o.font=r+" "+s+"px "+a,String(t.text).split("\n").forEach((function(e,i){o.fillText(e,u(e),f(t,n,i))}))}))})),null===(e=r.afterDraw)||void 0===e||e.call(this,o)},h.prototype.play=function(){this.startTime||(this.startTime=Date.now(),this.prizeFlag=void 0,this.run())},h.prototype.stop=function(t){this.prizeFlag=Number(t)%this.prizes.length},h.prototype.run=function(t){void 0===t&&(t=0);var e=this,i=e.rAF,n=e.prizeFlag,r=e.prizeDeg,o=e.rotateDeg,s=e._defaultConfig,a=Date.now()-this.startTime;if(a>=s.accelerationTime&&void 0!==n){this.FPS=a/t,this.endTime=Date.now(),this.stopDeg=o;for(var h=0;++h;){var l=360*h-n*r-o-s.offsetDegree;if(m(this.FPS,this.stopDeg,l,s.decelerationTime)-this.stopDeg>s.speed){this.endDeg=l;break}}return this.slowDown()}this.rotateDeg=(o+p(a,0,s.speed,s.accelerationTime))%360,this.draw(),i(this.run.bind(this,t+1))},h.prototype.slowDown=function(){var t,e=this,n=e.rAF,r=e.prizes,o=e.prizeFlag,s=e.stopDeg,a=e.endDeg,h=e._defaultConfig,l=Date.now()-this.endTime;if(l>=h.decelerationTime)return this.startTime=0,void(null===(t=this.endCallback)||void 0===t||t.call(this,i({},r.find((function(t,e){return e===o})))));this.rotateDeg=m(l,s,a,h.decelerationTime)%360,this.draw(),n(this.slowDown.bind(this))},h.prototype.getWidth=function(t,e){return void 0===e&&(e=this.prizeRadian*this.prizeRadius),s(t,"number")?t:s(t,"string")?this.changeUnits(t,e):0},h.prototype.getHeight=function(t,e){return void 0===e&&(e=this.prizeRadius),s(t,"number")?t:s(t,"string")?this.changeUnits(t,e):0},h.prototype.getOffsetX=function(t){return-t/2},h}(h),y=function(t){function h(e,i){void 0===i&&(i={});var n=t.call(this,e)||this;n.rows=3,n.cols=3,n.blocks=[],n.prizes=[],n.defaultConfig={},n._defaultConfig={gutter:5,speed:20,accelerationTime:2500,decelerationTime:2500},n.defaultStyle={},n._defaultStyle={borderRadius:20,fontColor:"#000",fontSize:"18px",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",lineHeight:"",background:"#fff",shadow:"",wordWrap:!0,lengthLimit:"90%"},n.activeStyle={},n._activeStyle={background:"#ffce98",shadow:"",fontStyle:"",fontWeight:"",fontSize:"",lineHeight:"",fontColor:""},n.cellWidth=0,n.cellHeight=0,n.startTime=0,n.endTime=0,n.currIndex=0,n.stopIndex=0,n.endIndex=0,n.demo=!1,n.timer=0,n.animationId=0,n.FPS=16.6,n.cells=[],n.cellImgs=[],n.initData(i),n.initComputed(),n.initWatch();var r=[[]];return n.prizes&&(r=n.prizes.map((function(t){return t.imgs}))),n.button&&(r[n.cols*n.rows-1]=n.button.imgs),n.init(r),n}return e(h,t),h.prototype.initData=function(t){this.$set(this,"rows",Number(t.rows)||3),this.$set(this,"cols",Number(t.cols)||3),this.$set(this,"blocks",t.blocks||[]),this.$set(this,"prizes",t.prizes||[]),this.$set(this,"button",t.button),this.$set(this,"defaultConfig",t.defaultConfig||{}),this.$set(this,"defaultStyle",t.defaultStyle||{}),this.$set(this,"activeStyle",t.activeStyle||{}),this.$set(this,"startCallback",t.start),this.$set(this,"endCallback",t.end)},h.prototype.initComputed=function(){var t=this;this.$computed(this,"_defaultConfig",(function(){var e=i({gutter:5,speed:20,accelerationTime:2500,decelerationTime:2500},t.defaultConfig);return e.gutter=t.getLength(e.gutter),e.speed=e.speed/40,e})),this.$computed(this,"_defaultStyle",(function(){return i({borderRadius:20,fontColor:"#000",fontSize:"18px",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",background:"#fff",shadow:"",wordWrap:!0,lengthLimit:"90%"},t.defaultStyle)})),this.$computed(this,"_activeStyle",(function(){return i({background:"#ffce98",shadow:""},t.activeStyle)}))},h.prototype.initWatch=function(){var t=this;this.$watch("prizes",(function(e,i){var n=[];return i?e&&e.forEach((function(e,r){var o=[],s=i[r];s?e.imgs&&e.imgs.forEach((function(e,i){if(!s.imgs)return o[i]=e;var n=s.imgs[i];n&&t.cellImgs[r][i]?e.src!==n.src&&(o[i]=e):o[i]=e})):o=e.imgs||[],n[r]=o})):n=e.map((function(t){return t.imgs})),t.init(n)})),this.$watch("button",(function(e,i){var n=[],r=t.cols*t.rows-1;if(i&&i.imgs){if(e.imgs){var o=[];e.imgs.forEach((function(e,n){if(!i.imgs)return o[n]=e;var s=i.imgs[n];s&&t.cellImgs[r][n]?e.src!==s.src&&(o[n]=e):o[n]=e})),n[r]=o}}else n[r]=e.imgs;return t.init(n)}))},h.prototype.init=function(t){var e,i,n=this,r=this,o=r.config,a=r.ctx,h=r.button;this.setHTMLFontSize(),this.setDpr(),this.zoomCanvas(),null===(e=o.beforeInit)||void 0===e||e.call(this);var l=function(){n.draw(),n.demo&&n.walk(),h&&o.canvasElement&&(o.canvasElement.onclick=function(t){var e,i=n.getGeometricProperty([h.x,h.y,h.col||1,h.row||1]),r=i[0],o=i[1],s=i[2],l=i[3];a.beginPath(),a.rect(r,o,s,l),a.isPointInPath(t.offsetX,t.offsetY)&&(n.startTime||null===(e=n.startCallback)||void 0===e||e.call(n,t))})},c=0,u=0;s(t,"array")&&(this.draw(),t.forEach((function(t,e){if(!t)return!1;t.forEach((function(t,i){u++,n.loadAndCacheImg(e,i,(function(){c++,u===c&&l.call(n)}))}))}))),u||l.call(this),null===(i=o.afterInit)||void 0===i||i.call(this)},h.prototype.loadAndCacheImg=function(t,e,i){return n(this,void 0,void 0,(function(){var n,o,s,a,h,l;return r(this,(function(r){switch(r.label){case 0:return(n=this.cells[t])&&n.imgs?(o=n.imgs[e],this.cellImgs[t]||(this.cellImgs[t]=[]),s=this.cellImgs[t],a=e,l={},[4,this.loadImg(o.src,o)]):[2];case 1:return s[a]=(l.defaultImg=r.sent(),l),o.hasOwnProperty("activeSrc")?[4,this.loadImg(o.activeSrc,o)]:[3,3];case 2:h=r.sent(),this.cellImgs[t][e].activeImg=h,r.label=3;case 3:return i.call(this),[2]}}))}))},h.prototype.computedWidthAndHeight=function(t,e,i){if(!e.width&&!e.height)return[t.width,t.height];if(e.width&&!e.height){var n=this.getWidth(e.width,i.col);return[n,t.height*(n/t.width)]}if(!e.width&&e.height){var r=this.getHeight(e.height,i.row);return[t.width*(r/t.height),r]}return[this.getWidth(e.width,i.col),this.getHeight(e.height,i.row)]},h.prototype.draw=function(){var t,e,i=this,n=this,r=n.config,h=n.ctx,l=n._defaultConfig,c=n._defaultStyle,u=n._activeStyle;null===(t=r.beforeDraw)||void 0===t||t.call(this,h),h.clearRect(0,0,r.width,r.height),this.cells=o(this.prizes),this.button&&(this.cells[this.cols*this.rows-1]=this.button),this.cells.forEach((function(t){t.col=t.col||1,t.row=t.row||1})),this.prizeArea=this.blocks.reduce((function(t,e){var n=t.x,r=t.y,o=t.w,a=t.h,l=function(t){var e=t.padding.replace(/px/g,"").split(" ").map((function(t){return~~t}))||[0],i=0,n=0,r=0,o=0;switch(e.length){case 1:i=n=r=o=e[0];break;case 2:i=n=e[0],r=o=e[1];break;case 3:i=e[0],r=o=e[1],n=e[2];break;default:i=e[0],n=e[1],r=e[2],o=e[3]}var a={paddingTop:i,paddingBottom:n,paddingLeft:r,paddingRight:o};for(var h in a)a[h]=t.hasOwnProperty(h)&&s(t[h],"string","number")?~~String(t[h]).replace(/px/g,""):a[h];return[i,n,r,o]}(e).map((function(t){return~~t})),c=l[0],u=l[1],f=l[2],d=l[3],p=e.borderRadius?i.getLength(e.borderRadius):0;return g(h,n,r,o,a,p,i.handleBackground(n,r,o,a,e.background)),{x:n+f,y:r+c,w:o-f-d,h:a-c-u}}),{x:0,y:0,w:r.width,h:r.height}),this.cellWidth=(this.prizeArea.w-l.gutter*(this.cols-1))/this.cols,this.cellHeight=(this.prizeArea.h-l.gutter*(this.rows-1))/this.rows,this.cells.forEach((function(t,e){var n=i.getGeometricProperty([t.x,t.y,t.col,t.row]),o=n[0],s=n[1],l=n[2],f=n[3],d=e===i.currIndex%i.prizes.length>>0,p=(d?u.shadow:t.shadow||c.shadow).replace(/px/g,"").split(",")[0].split(" ").map((function(t,e){return e<3?Number(t):t}));4===p.length&&(h.shadowColor=p[3],h.shadowOffsetX=p[0]*r.dpr,h.shadowOffsetY=p[1]*r.dpr,h.shadowBlur=p[2],p[0]>0?l-=p[0]:(l+=p[0],o-=p[0]),p[1]>0?f-=p[1]:(f+=p[1],s-=p[1])),g(h,o,s,l,f,i.getLength(t.borderRadius?t.borderRadius:c.borderRadius),i.handleBackground(o,s,l,f,t.background,d)),h.shadowColor="rgba(0, 0, 0, 0)",h.shadowOffsetX=0,h.shadowOffsetY=0,h.shadowBlur=0,t.imgs&&t.imgs.forEach((function(n,r){if(!i.cellImgs[e])return!1;var a=i.cellImgs[e][r];if(!a)return!1;var l,c=d&&a.activeImg||a.defaultImg,u=i.computedWidthAndHeight(c,n,t),f=u[0],g=u[1],p=[o+i.getOffsetX(f,t.col),s+i.getHeight(n.top,t.row)],m=p[0],v=p[1];["WEB","MINI-WX"].includes(i.config.flag)?l=c:["UNI-H5","UNI-MINI-WX"].includes(i.config.flag)&&(l=c.path),h.drawImage(l,m,v,f,g)})),t.fonts&&t.fonts.forEach((function(e){var n=d&&u.fontStyle?u.fontStyle:e.fontStyle||c.fontStyle,r=d&&u.fontWeight?u.fontWeight:e.fontWeight||c.fontWeight,l=d&&u.fontSize?i.getLength(u.fontSize):i.getLength(e.fontSize||c.fontSize),f=d&&u.lineHeight?u.lineHeight:e.lineHeight||c.lineHeight||e.fontSize||c.fontSize;h.font=r+" "+l+"px "+n,h.fillStyle=d&&u.fontColor?u.fontColor:e.fontColor||c.fontColor;var g=[],p=String(e.text);if(e.hasOwnProperty("wordWrap")?e.wordWrap:c.wordWrap){p=a(p);for(var m="",v=0;v<p.length;v++){m+=p[v],h.measureText(m).width>i.getWidth(e.lengthLimit||c.lengthLimit,t.col)&&(g.push(m.slice(0,-1)),m=p[v])}m&&g.push(m),g.length||g.push(p)}else g=p.split("\n");g.forEach((function(n,r){h.fillText(n,o+i.getOffsetX(h.measureText(n).width,t.col),s+i.getHeight(e.top,t.row)+(r+1)*i.getLength(f))}))}))})),null===(e=r.afterDraw)||void 0===e||e.call(this,h)},h.prototype.handleBackground=function(t,e,i,n,r,o){void 0===o&&(o=!1);var s=this,a=s.ctx,h=s._defaultStyle,l=s._activeStyle;return(r=o?l.background:r||h.background).includes("linear-gradient")&&(r=function(t,e,i,n,r,o){var s=/linear-gradient\((.+)\)/.exec(o)[1].split(",").map((function(t){return t.trim()})),a=s.shift(),h=[0,0,0,0];if(a.includes("deg")){var l=function(t){return Math.tan(t/180*Math.PI)};(a=a.slice(0,-3)%360)>=0&&a<45?h=[e,i+r,e+n,i+r-n*l(a-0)]:a>=45&&a<90?h=[e,i+r,e+n-r*l(a-45),i]:a>=90&&a<135?h=[e+n,i+r,e+n-r*l(a-90),i]:a>=135&&a<180?h=[e+n,i+r,e,i+n*l(a-135)]:a>=180&&a<225?h=[e+n,i,e,i+n*l(a-180)]:a>=225&&a<270?h=[e+n,i,e+r*l(a-225),i+r]:a>=270&&a<315?h=[e,i,e+r*l(a-270),i+r]:a>=315&&a<360&&(h=[e,i,e+n,i+r-n*l(a-315)])}else a.includes("top")?h=[e,i+r,e,i]:a.includes("bottom")?h=[e,i,e,i+r]:a.includes("left")?h=[e+n,i,e,i]:a.includes("right")&&(h=[e,i,e+n,i]);var c=t.createLinearGradient.apply(t,h.map((function(t){return t>>0})));return s.reduce((function(t,e,i){var n=e.split(" ");return 1===n.length?t.addColorStop(i,n[0]):2===n.length&&t.addColorStop.apply(t,n),t}),c)}(a,t,e,i,n,r)),r},h.prototype.play=function(){var t=this.clearInterval;this.startTime||(t(this.timer),this.startTime=Date.now(),this.prizeFlag=void 0,this.run())},h.prototype.stop=function(t){this.prizeFlag=t%this.prizes.length},h.prototype.run=function(t){void 0===t&&(t=0);var e=this,i=e.rAF,n=e.currIndex,r=e.prizes,o=e.prizeFlag,s=e.startTime,a=e._defaultConfig,h=Date.now()-s;if(h>=a.accelerationTime&&void 0!==o){this.FPS=h/t,this.endTime=Date.now(),this.stopIndex=n;for(var l=0;++l;){var c=r.length*l+o-(n>>0);if(m(this.FPS,this.stopIndex,c,a.decelerationTime)-this.stopIndex>a.speed){this.endIndex=c;break}}return this.slowDown()}this.currIndex=(n+p(h,.1,a.speed,a.accelerationTime))%r.length,this.draw(),i(this.run.bind(this,t+1))},h.prototype.slowDown=function(){var t,e=this,n=e.rAF,r=e.prizes,o=e.prizeFlag,s=e.stopIndex,a=e.endIndex,h=e._defaultConfig,l=Date.now()-this.endTime;if(l>h.decelerationTime)return this.startTime=0,void(null===(t=this.endCallback)||void 0===t||t.call(this,i({},r.find((function(t,e){return e===o})))));this.currIndex=m(l,s,a,h.decelerationTime)%r.length,this.draw(),n(this.slowDown.bind(this))},h.prototype.walk=function(){var t=this,e=this.setInterval;(0,this.clearInterval)(this.timer),this.timer=e((function(){t.currIndex+=1,t.draw()}),1300)},h.prototype.getGeometricProperty=function(t){var e=t[0],i=t[1],n=t[2],r=t[3],o=this.cellWidth,s=this.cellHeight,a=this._defaultConfig.gutter,h=[this.prizeArea.x+(o+a)*e,this.prizeArea.y+(s+a)*i];return n&&r&&h.push(o*n+a*(n-1),s*r+a*(r-1)),h},h.prototype.getWidth=function(t,e){return void 0===e&&(e=1),s(t,"number")?t:s(t,"string")?this.changeUnits(t,this.cellWidth*e+this._defaultConfig.gutter*(e-1)):0},h.prototype.getHeight=function(t,e){return void 0===e&&(e=1),s(t,"number")?t:s(t,"string")?this.changeUnits(t,this.cellHeight*e+this._defaultConfig.gutter*(e-1)):0},h.prototype.getOffsetX=function(t,e){return void 0===e&&(e=1),(this.cellWidth*e+this._defaultConfig.gutter*(e-1)-t)/2},h}(h);exports.LuckyGrid=y,exports.LuckyWheel=v;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var rpx2px = exports.rpx2px = function rpx2px(value) {
  if (typeof value === 'string') value = Number(value.replace(/[a-z]*/g, ''));
  return wx.getSystemInfoSync().windowWidth / 750 * value;
};

var changeUnits = exports.changeUnits = function changeUnits(value) {
  return Number(value.replace(/^(\-*[0-9.]*)([a-z%]*)$/, function (value, num, unit) {
    switch (unit) {
      case 'px':
        num *= 1;
        break;
      case 'rpx':
        num = rpx2px(num);
        break;
      default:
        num *= 1;
        break;
    }
    return num;
  }));
};

var resolveImage = exports.resolveImage = function resolveImage(e, img, canvas) {
  var imgObj = canvas.createImage();
  imgObj.onload = function () {
    img.$resolve(imgObj);
  };
  imgObj.src = img.src;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _luckyCanvasCjs = __webpack_require__(0);

var _utils = __webpack_require__(1);

Component({
  properties: {
    width: { type: String, value: '600rpx' },
    height: { type: String, value: '600rpx' },
    blocks: { type: Array, value: [] },
    prizes: { type: Array, value: [] },
    buttons: { type: Array, value: [] },
    defaultConfig: { type: Object, value: {} },
    defaultStyle: { type: Object, value: {} },
    start: { type: Function, value: function value() {} },
    end: { type: Function, value: function value() {} }
  },
  data: {
    isShow: false
  },
  observers: {
    'prizes.**': function prizes(newData, oldData) {
      if (this.$lucky) {
        this.$lucky.prizes = [];
        this.$lucky.prizes = newData;
      }
    },
    'buttons.**': function buttons(newData, oldData) {
      if (this.$lucky) {
        this.$lucky.buttons = [];
        this.$lucky.buttons = newData;
      }
    }
  },
  ready: function ready() {
    var _this = this;

    wx.createSelectorQuery().in(this).select('#lucky-wheel').fields({
      node: true, size: true
    }).exec(function (res) {
      if (!res[0] || !res[0].node) {
        return console.error('lucky-canvas 获取不到 canvas 标签');
      }
      var canvas = _this.canvas = res[0].node;
      var dpr = _this.dpr = wx.getSystemInfoSync().pixelRatio;
      var ctx = _this.ctx = canvas.getContext('2d');
      var data = _this.data;
      canvas.width = res[0].width * dpr;
      canvas.height = res[0].height * dpr;
      ctx.scale(dpr, dpr);
      _this.$lucky = new _luckyCanvasCjs.LuckyWheel({
        flag: 'MINI-WX',
        ctx: ctx,
        dpr: dpr,
        width: res[0].width,
        height: res[0].height,
        // rAF: canvas.requestAnimationFrame, // 帧动画真机调试会报错!
        setTimeout: setTimeout,
        clearTimeout: clearTimeout,
        setInterval: setInterval,
        clearInterval: clearInterval,
        beforeInit: function beforeInit() {
          ctx.translate(-this.Radius, -this.Radius);
        },
        unitFunc: function unitFunc(num, unit) {
          return (0, _utils.changeUnits)(num + unit);
        }
      }, {
        blocks: data.blocks,
        prizes: data.prizes,
        buttons: data.buttons,
        defaultConfig: data.defaultConfig,
        defaultStyle: data.defaultStyle,
        start: function start() {
          for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          _this.triggerEvent.apply(_this, ['start'].concat(rest));
        },
        end: function end() {
          for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            rest[_key2] = arguments[_key2];
          }

          _this.triggerEvent.apply(_this, ['end'].concat(rest));
        }
      });
      // 为了保证 onload 回调准确
      _this.setData({ isShow: true });
    });
  },

  methods: {
    imgBindload: function imgBindload(e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          name = _e$currentTarget$data.name,
          index = _e$currentTarget$data.index,
          i = _e$currentTarget$data.i;

      var img = this.data[name][index].imgs[i];
      (0, _utils.resolveImage)(e, img, this.canvas);
    },
    toPlay: function toPlay(e) {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(0, 0, this.$lucky.maxBtnRadius, 0, Math.PI * 2, false);
      if (!ctx.isPointInPath(e.changedTouches[0].x * this.dpr, e.changedTouches[0].y * this.dpr)) {
        return;
      }
      // 触发 lucky-canvas 的抽奖逻辑
      this.$lucky.startCallback();
    },
    play: function play() {
      var _$lucky;

      (_$lucky = this.$lucky).play.apply(_$lucky, arguments);
    },
    stop: function stop() {
      var _$lucky2;

      (_$lucky2 = this.$lucky).stop.apply(_$lucky2, arguments);
    }
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map