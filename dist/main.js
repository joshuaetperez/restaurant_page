(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(81),o=n.n(a),r=n(645),d=n.n(r),c=n(667),i=n.n(c),s=new URL(n(11),n.b),l=d()(o()),p=i()(s);l.push([e.id,"html {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n}\n\nh3,\nh4 {\n  margin: 0;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  padding: 10px;\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  background: url("+p+');\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-attachment: fixed;\n  background-size: cover;\n  min-height: 100vh;\n}\n\n.header {\n  background-color: rgb(0, 116, 217, 0.75);\n  text-align: center;\n  font-size: 48px;\n  color: #fff;\n  padding: 5px 0;\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  background-color: rgb(0, 116, 217, 0.75);\n  color: #fff;\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.selected-tab {\n  border-bottom: 3px #333 solid;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 1;\n  font-size: 32px;\n  color: #333;\n  padding: 10px;\n}\n\n.card {\n  width: 50%;\n  background-color: rgb(127, 219, 255, 0.5);\n  border: 1px #fff solid;\n  border-radius: 8px;\n  padding: 50px;\n  margin: 30px 0;\n  text-align: center;\n}\n\n.card h3 {\n  font-size: 96px;\n  font-family: Brush Script MT, Ariel, sans-serif;\n}\n\n.footer {\n  background-color: rgb(0, 116, 217, 0.75);\n  text-align: center;\n  font-size: 32px;\n  color: #fff;\n  padding: 10px 0;\n}\n\n.disclaimer {\n  font-size: 12px;\n}\n\n.menu-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(300, 110, 110, 0.85);\n  border: 1px #333 solid;\n  border-radius: 8px;\n  padding: 20px;\n  margin: 30px;\n  /* padding: 50px;\n  margin: 20px 0;\n  text-align: center; */\n}\n\n.menu-card h4 {\n  font-size: 24px;\n}\n\n.menu-card p {\n  font-size: 20px;\n  margin: 10px 0;\n  color: #111;\n}\n\n.menu-image {\n  width: 400px;\n  height: 400px;\n  object-fit: cover;\n  border: 1px green solid;\n  border-radius: 5px;\n  margin: 10px 0 50px 0;\n}\n\n/* Only used for "Entrées" and "Desert" */\n.menu-heading-margin {\n  margin-top: 80px;\n}',""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(d[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&d[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},d=[],c=0;c<e.length;c++){var i=e[c],s=a.base?i[0]+a.base:i[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var c=n(r[d]);t[c].references--}for(var i=a(e,o),s=0;s<r.length;s++){var l=n(r[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},597:(e,t,n)=>{e.exports=n.p+"36ce0c4f7cec725209f2.jpg"},213:(e,t,n)=>{e.exports=n.p+"5ede246acbd7e5fd2690.jpg"},335:(e,t,n)=>{e.exports=n.p+"c1c713c26178700975de.jpg"},529:(e,t,n)=>{e.exports=n.p+"d304f4bdb9a8621d1d11.jpg"},228:(e,t,n)=>{e.exports=n.p+"59f81abfd0aa40e3e068.jpg"},11:(e,t,n)=>{e.exports=n.p+"bd6698333203804b1311.jpg"},246:(e,t,n)=>{e.exports=n.p+"c1a584f7aaec604bab94.jpg"},294:(e,t,n)=>{e.exports=n.p+"99eb46814a944936b5aa.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),d=n.n(r),c=n(565),i=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),h={};function f(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("card"),n.textContent="Welcome to Zenith, a towering restaurant floating above the heavens! Eat at one of the world's finest establishments while taking a look at the most beautiful sights from above!",t.appendChild(n);const a=document.createElement("div"),o=document.createElement("div");a.classList.add("footer"),o.classList.add("disclaimer"),a.textContent="Made with the approval of the Gods",o.textContent="*Zenith does not take responsibility for any painful injuries or deaths resulting from falling from a high place*",a.appendChild(o),e.appendChild(t),e.appendChild(a)}h.styleTagTransform=u(),h.setAttributes=i(),h.insert=d().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var g=n(529),b=n(294),v=n(246),x=n(335),C=n(228),y=n(213),E=n(597);!function(){function e(){document.querySelector("#content").innerHTML=""}!function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.querySelector("body"),a=document.createElement("h3");t.classList.add("header"),a.innerText="Zenith",t.appendChild(a);const o=document.createElement("div"),r=document.createElement("ul"),d=document.createElement("li"),c=document.createElement("li"),i=document.createElement("li"),s=document.createElement("span"),l=document.createElement("span"),p=document.createElement("span");d.id="home-tab",c.id="menu-tab",i.id="contact-tab",o.classList.add("navbar"),s.textContent="Home",l.textContent="Menu",p.textContent="Contact",d.appendChild(s),c.appendChild(l),i.appendChild(p),r.appendChild(d),r.appendChild(c),r.appendChild(i),o.appendChild(r),e.appendChild(t),e.appendChild(o),n.prepend(e)}(),document.querySelector("#home-tab").classList.add("selected-tab"),document.querySelector("#home-tab").addEventListener("click",(function(){document.querySelector("#home-tab").classList.contains("selected-tab")||(document.querySelector("#home-tab").classList.add("selected-tab"),document.querySelector("#menu-tab").classList.remove("selected-tab"),document.querySelector("#contact-tab").classList.remove("selected-tab"),e(),f())})),document.querySelector("#menu-tab").addEventListener("click",(function(){document.querySelector("#menu-tab").classList.contains("selected-tab")||(document.querySelector("#menu-tab").classList.add("selected-tab"),document.querySelector("#home-tab").classList.remove("selected-tab"),document.querySelector("#contact-tab").classList.remove("selected-tab"),e(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("card");const a=document.createElement("h3");a.textContent="Beverages";const o=document.createElement("div"),r=document.createElement("h4"),d=document.createElement("p"),c=new Image;o.classList.add("menu-card"),c.classList.add("menu-image"),c.src=g,r.textContent="Ambrosia, the Drink of the Gods",d.textContent="The Drink of the Gods themselves. Definetely not just regular fruit punch. Not at all. Don't be ridiculous.",o.appendChild(r),o.appendChild(d),o.appendChild(c);const i=document.createElement("div"),s=document.createElement("h4"),l=document.createElement("p"),p=new Image;i.classList.add("menu-card"),p.classList.add("menu-image"),p.src=b,s.textContent="A Glass of Water",l.innerHTML=`Imagine going to a luxurious place and ordering water. Just go order the ${"fruit punch".strike()} ambrosia instead.`,i.appendChild(s),i.appendChild(l),i.appendChild(p),n.appendChild(a),n.appendChild(o),n.appendChild(i);const u=document.createElement("h3");u.classList.add("menu-heading-margin"),u.textContent="Entrées";const m=document.createElement("div"),h=document.createElement("h4"),f=document.createElement("p"),L=new Image;m.classList.add("menu-card"),L.classList.add("menu-image"),L.src=v,h.textContent="Salad",f.textContent="Literally just raked leaves off the floor and put them onto a plate. Bon appetite.",m.appendChild(h),m.appendChild(f),m.appendChild(L);const w=document.createElement("div"),S=document.createElement("h4"),k=document.createElement("p"),j=new Image;w.classList.add("menu-card"),j.classList.add("menu-image"),j.src=x,S.textContent="Tortilla Chips",k.textContent="Very crunchy. Nom nom nom. Dipping sauce is not included.",w.appendChild(S),w.appendChild(k),w.appendChild(j);const z=document.createElement("div"),q=document.createElement("h4"),T=document.createElement("p"),I=new Image;z.classList.add("menu-card"),I.classList.add("menu-image"),I.src=C,q.textContent="Vegetable Pizza",T.textContent="We CANNOT guarantee this pizza is bodacious, outrageous, downright amazing, and no doubt the best pizza you've had all day. Well, unless this is the only pizza you've had all day... but I don't think you can call this a pizza anyways.",z.appendChild(q),z.appendChild(T),z.appendChild(I),n.appendChild(u),n.appendChild(m),n.appendChild(w),n.appendChild(z);const M=document.createElement("h3");M.classList.add("menu-heading-margin"),M.textContent="Deserts";const A=document.createElement("div"),N=document.createElement("h4"),Z=document.createElement("p"),O=new Image;A.classList.add("menu-card"),O.classList.add("menu-image"),O.src=y,N.textContent="Celestial Cake",Z.textContent="A cake of the highest caliber. Everything about this cake is absolutely divine. A desert that will make you feel like you are truly above the heavens. CURRENTLY OUT OF STOCK.",A.appendChild(N),A.appendChild(Z),A.appendChild(O);const D=document.createElement("div"),P=document.createElement("h4"),G=document.createElement("p"),R=new Image;D.classList.add("menu-card"),R.classList.add("menu-image"),R.src=E,P.textContent="A Partially Eaten Apple",G.textContent="A partially eaten apple.",D.appendChild(P),D.appendChild(G),D.appendChild(R),n.appendChild(M),n.appendChild(A),n.appendChild(D),t.appendChild(n);const U=document.createElement("div"),H=document.createElement("div");U.classList.add("footer"),H.classList.add("disclaimer"),U.textContent="Made with the approval of the Gods",H.textContent="*Zenith does not take responsibility for any painful injuries or deaths resulting from falling from a high place*",U.appendChild(H),e.appendChild(t),e.appendChild(U)}())})),document.querySelector("#contact-tab").addEventListener("click",(function(){document.querySelector("#contact-tab").classList.contains("selected-tab")||(document.querySelector("#contact-tab").classList.add("selected-tab"),document.querySelector("#home-tab").classList.remove("selected-tab"),document.querySelector("#menu-tab").classList.remove("selected-tab"),e(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");n.classList.add("card"),a.textContent="Phone: 999-999-9999",o.textContent="Email: zenith@skyhigh.com",n.appendChild(a),n.appendChild(o),t.appendChild(n);const r=document.createElement("div"),d=document.createElement("div");r.classList.add("footer"),d.classList.add("disclaimer"),r.textContent="Made with the approval of the Gods",d.textContent="*Zenith does not take responsibility for any painful injuries or deaths resulting from falling from a high place*",r.appendChild(d),e.appendChild(t),e.appendChild(r)}())})),f()}()})()})();