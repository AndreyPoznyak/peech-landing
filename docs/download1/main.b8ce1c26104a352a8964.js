(()=>{"use strict";var e={75:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(933),o=n.n(r),i=n(476),a=n.n(i),c=n(678),s=n.n(c),d=new URL(n(263),n.b),l=a()(o()),u=s()(d);l.push([e.id,"@font-face{font-family:'Poppins';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}html{height:100%;background-color:#f7f7f9;font-family:'Poppins', sans-serif}body{height:100vh;display:flex;flex-direction:column;align-items:center;box-sizing:border-box;overflow:hidden}.container{flex-grow:1;display:flex;align-items:center;flex-direction:column;justify-content:center}.container .logo{background-image:url("+u+");background-repeat:no-repeat;background-position:center;background-size:contain;width:100%;height:234px}@media screen and (max-height: 600px){.container .logo{height:200px}}.container .text{text-align:center;font-weight:400;font-size:20px;max-width:70%;margin-top:30px}.container .loading-grid{width:56px;height:8px;display:flex;justify-content:space-around;margin-top:30px}.container .loading-grid div{width:8px;height:8px;border-radius:50%;background:#26272F;animation:lds-grid 1.2s linear infinite}.container .loading-grid div:nth-child(1){animation-delay:0s}.container .loading-grid div:nth-child(2){animation-delay:-0.4s}.container .loading-grid div:nth-child(3){animation-delay:-0.8s}.bottom-text{margin-bottom:40px;margin-top:20px;font-weight:300;font-size:16px}@keyframes lds-grid{0%,100%{opacity:1}50%{opacity:0.3}}\n",""]);const p=l},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},678:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var g=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},311:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},263:(e,t,n)=>{e.exports=n.p+"78cdfdeb978b28a974d8.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(892),t=n.n(e),r=n(760),o=n.n(r),i=n(311),a=n.n(i),c=n(192),s=n.n(c),d=n(60),l=n.n(d),u=n(865),p=n.n(u),f=n(75),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m={en:{title:"You are being redirected to App Store",subtitle:"It takes just a few seconds"},it:{title:"You are being redirected to App Store",subtitle:"It takes just a few seconds"},es:{title:"You are being redirected to App Store",subtitle:"It takes just a few seconds"}},h=e=>document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()||"";document.addEventListener("DOMContentLoaded",(()=>{const e=new URLSearchParams(location.search);document.body.addEventListener("click",(()=>navigator.clipboard.writeText(`peechapp://${location.search}`))),setTimeout((()=>{window.fbq&&fbq("track","StoreRedirect"),window.location.href=(e=>{const t=h("_fbc")||e.get("fbclid")||"",n=h("_fbp")||"",r={pid:e.get("utm_source")||"no_media_source",c:e.get("utm_campaign"),af_c_id:e.get("campaign_id"),af_adset_id:e.get("adset_id"),af_ad_id:e.get("ad_id"),af_channel:e.get("utm_medium"),af_ad:e.get("utm_term"),af_adset:e.get("utm_content"),af_sub1:t,af_sub2:n,af_sub3:e.get("placement"),af_sub4:e.get("gclid")};return`https://peech.onelink.me/mjNH/?${Object.keys(r).filter((e=>!!r[e])).map((e=>`${e}=${r[e]}`)).join("&")}`})(e)}),2500),(e=>{const t=document.querySelector(".text"),n=document.querySelector(".bottom-text");let r="en";switch(e){case"it":r="it";break;case"es":r="es";break;default:r="en"}const o=m[r];o?(t.innerHTML=o.title,n.innerHTML=o.subtitle):console.log("Error: locales not found.")})(e.get("language"))}))})()})();