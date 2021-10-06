(()=>{"use strict";var e,n,t,r,o,a,i,c,s,d,l,p,u,f,m={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(11),t.b),l=i()(o()),p=s()(d);l.push([e.id,"html {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n}\n\nh3 {\n  margin: 0;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  padding: 10px;\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  background: url("+p+");\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-attachment: fixed;\n  background-size: cover;\n  min-height: 100vh;\n}\n\n.header {\n  background-color: rgb(0, 116, 217, 0.75);\n  text-align: center;\n  font-size: 48px;\n  color: #fff;\n  padding: 5px 0;\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  background-color: rgb(0, 116, 217, 0.75);\n  color: #fff;\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.selected-tab {\n  border-bottom: 3px #333 solid;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 1;\n  font-size: 32px;\n  color: #333;\n  padding: 10px;\n}\n\n.card {\n  width: 50%;\n  background-color: rgb(127, 219, 255, 0.5);\n  border: 1px #fff solid;\n  border-radius: 8px;\n  padding: 50px;\n  margin: 20px 0;\n  text-align: center;\n}\n\n.footer {\n  background-color: rgb(0, 116, 217, 0.75);\n  text-align: center;\n  font-size: 32px;\n  color: #fff;\n  padding: 10px 0;\n}\n\n.disclaimer {\n  font-size: 12px;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},11:(e,n,t)=>{e.exports=t.p+"bd6698333203804b1311.jpg"}},h={};function g(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,g),t.exports}g.m=m,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,e=g(379),n=g.n(e),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),d=g.n(s),l=g(589),p=g.n(l),u=g(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("h3");t.innerText="Zenith",n.appendChild(t);const r=document.createElement("div");r.classList.add("navbar");const o=document.createElement("ul"),a=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li"),s=document.createElement("span"),d=document.createElement("span"),l=document.createElement("span");a.classList.add("selected-tab"),s.textContent="Home",d.textContent="Menu",l.textContent="Contact",a.appendChild(s),i.appendChild(d),c.appendChild(l),o.appendChild(a),o.appendChild(i),o.appendChild(c),r.appendChild(o);const p=document.createElement("div");p.classList.add("container");const u=document.createElement("div");u.classList.add("card"),u.textContent="Welcome to Zenith, a towering restaurant floating above the heavens! Eat at one of the world's finest establishments while taking a look at the most beautiful sights from above!",p.appendChild(u);const f=document.createElement("div");f.classList.add("footer"),f.textContent="Made with the approval of the Gods";const m=document.createElement("div");m.classList.add("disclaimer"),m.textContent="*Zenith does not take responsibility for any painful injuries or deaths resulting from falling from a high place*",f.appendChild(m),e.appendChild(n),e.appendChild(r),e.appendChild(p),e.appendChild(f)}()})();