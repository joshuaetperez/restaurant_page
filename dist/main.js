(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),r=t.n(a),o=t(645),d=t.n(o),i=t(667),c=t.n(i),s=new URL(t(11),t.b),l=d()(r()),p=c()(s);l.push([e.id,"html {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n}\n\nh3,\nh4 {\n  margin: 0;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  padding: 10px;\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  background: url("+p+");\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-attachment: fixed;\n  background-size: cover;\n  min-height: 100vh;\n}\n\n.header {\n  background-color: rgb(0, 116, 217, 0.75);\n  text-align: center;\n  font-size: 48px;\n  color: #fff;\n  padding: 5px 0;\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  background-color: rgb(0, 116, 217, 0.75);\n  color: #fff;\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.selected-tab {\n  border-bottom: 3px #333 solid;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 1;\n  font-size: 32px;\n  color: #333;\n  padding: 10px;\n}\n\n.card {\n  width: 50%;\n  background-color: rgb(127, 219, 255, 0.5);\n  border: 1px #fff solid;\n  border-radius: 8px;\n  padding: 50px;\n  margin: 20px 0;\n  text-align: center;\n}\n\n.footer {\n  background-color: rgb(0, 116, 217, 0.75);\n  text-align: center;\n  font-size: 32px;\n  color: #fff;\n  padding: 10px 0;\n}\n\n.disclaimer {\n  font-size: 12px;\n}\n\n.menu-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px #fff solid;\n  border-radius: 8px;\n  padding-top: 20px;\n  padding-bottom: 50px;\n  margin: 30px;\n  /* padding: 50px;\n  margin: 20px 0;\n  text-align: center; */\n}\n\n.menu-card h4 {\n  font-size: 24px;\n}\n\n.menu-card p {\n  font-size: 20px;\n  margin: 10px 0;\n}\n\n.menu-image {\n  width: 400px;\n  height: 400px;\n  object-fit: cover;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&d[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},d=[],i=0;i<e.length;i++){var c=e[i],s=a.base?c[0]+a.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var i=t(o[d]);n[i].references--}for(var c=a(e,r),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},597:(e,n,t)=>{e.exports=t.p+"36ce0c4f7cec725209f2.jpg"},213:(e,n,t)=>{e.exports=t.p+"5ede246acbd7e5fd2690.jpg"},335:(e,n,t)=>{e.exports=t.p+"c1c713c26178700975de.jpg"},529:(e,n,t)=>{e.exports=t.p+"d304f4bdb9a8621d1d11.jpg"},228:(e,n,t)=>{e.exports=t.p+"59f81abfd0aa40e3e068.jpg"},11:(e,n,t)=>{e.exports=t.p+"bd6698333203804b1311.jpg"},246:(e,n,t)=>{e.exports=t.p+"c1a584f7aaec604bab94.jpg"},294:(e,n,t)=>{e.exports=t.p+"99eb46814a944936b5aa.jpg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),d=t.n(o),i=t(565),c=t.n(i),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=d().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(529),g=t(294),x=t(246),C=t(335),b=t(228),v=t(213),y=t(597);!function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("h3");n.classList.add("header"),t.innerText="Zenith",n.appendChild(t);const a=document.createElement("div"),r=document.createElement("ul"),o=document.createElement("li"),d=document.createElement("li"),i=document.createElement("li"),c=document.createElement("span"),s=document.createElement("span"),l=document.createElement("span");a.classList.add("navbar"),d.classList.add("selected-tab"),c.textContent="Home",s.textContent="Menu",l.textContent="Contact",o.appendChild(c),d.appendChild(s),i.appendChild(l),r.appendChild(o),r.appendChild(d),r.appendChild(i),a.appendChild(r);const p=document.createElement("div");p.classList.add("container");const u=document.createElement("div");u.classList.add("card");const m=document.createElement("h3");m.textContent="Beverages";const h=document.createElement("div"),E=document.createElement("h4"),w=document.createElement("p"),L=new Image;h.classList.add("menu-card"),L.classList.add("menu-image"),L.src=f,E.textContent="Ambrosia, the Drink of the Gods",w.textContent="The Drink of the Gods themselves. Definetely not just regular fruit punch. Not at all. Don't be ridiculous.",h.appendChild(E),h.appendChild(w),h.appendChild(L);const j=document.createElement("div"),z=document.createElement("h4"),k=document.createElement("p"),T=new Image;j.classList.add("menu-card"),T.classList.add("menu-image"),T.src=g,z.textContent="A Glass of Water",k.textContent="Imagine coming to such a luxurious place and ordering water. If you order this, I have instructed the waiter/waitress to throw you out the restaurant into the forest where no one will see the body.",j.appendChild(z),j.appendChild(k),j.appendChild(T),u.appendChild(m),u.appendChild(h),u.appendChild(j);const I=document.createElement("h3");I.textContent="Entrées";const A=document.createElement("div"),S=document.createElement("h4"),M=document.createElement("p"),N=new Image;A.classList.add("menu-card"),N.classList.add("menu-image"),N.src=x,S.textContent="Salad",M.textContent="Literally just raked leaves off the floor and put them onto a plate. Bon appetite.",A.appendChild(S),A.appendChild(M),A.appendChild(N);const O=document.createElement("div"),D=document.createElement("h4"),P=document.createElement("p"),Z=new Image;O.classList.add("menu-card"),Z.classList.add("menu-image"),Z.src=C,D.textContent="Tortilla Chips",P.textContent="Very crunchy. Nom nom nom. Dipping sauce is not included.",O.appendChild(D),O.appendChild(P),O.appendChild(Z);const R=document.createElement("div"),U=document.createElement("h4"),F=document.createElement("p"),G=new Image;R.classList.add("menu-card"),G.classList.add("menu-image"),G.src=b,U.textContent="Vegetable Pizza",F.textContent="We CANNOT guarantee this pizza is bodacious, outrageous, downright amazing, and no doubt the best pizza you've had all day. Well, unless this is the only pizza you've had all day... but I don't think you can call this a pizza anyways.",R.appendChild(U),R.appendChild(F),R.appendChild(G),u.appendChild(I),u.appendChild(A),u.appendChild(O),u.appendChild(R);const $=document.createElement("h3");$.textContent="Deserts";const _=document.createElement("div"),B=document.createElement("h4"),H=document.createElement("p"),W=new Image;_.classList.add("menu-card"),W.classList.add("menu-image"),W.src=v,B.textContent="Coffee Cake",H.textContent="A cake of the highest caliber. Everything about this cake is absolutely divine. A desert that will make you feel like you are truly above the heavens. CURRENTLY OUT OF STOCK.",_.appendChild(B),_.appendChild(H),_.appendChild(W);const q=document.createElement("div"),V=document.createElement("h4"),J=document.createElement("p"),K=new Image;q.classList.add("menu-card"),K.classList.add("menu-image"),K.src=y,V.textContent="A Partially Eaten Apple",J.textContent="A partially eaten apple.",q.appendChild(V),q.appendChild(J),q.appendChild(K),u.appendChild($),u.appendChild(_),u.appendChild(q),p.appendChild(u);const Q=document.createElement("div"),Y=document.createElement("div");Q.classList.add("footer"),Y.classList.add("disclaimer"),Q.textContent="Made with the approval of the Gods",Y.textContent="*Zenith does not take responsibility for any painful injuries or deaths resulting from falling from a high place*",Q.appendChild(Y),e.appendChild(n),e.appendChild(a),e.appendChild(p),e.appendChild(Q)}()})()})();