(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"body {\n    background: linear-gradient(135deg, #DAB3FF, #FFB3B3);\n    color: black;\n    text-align: center;\n    font-size: 1rem;\n}\n#nav-container {\n    \n    \n}\n\n#nav-container ul {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 5vw;\n\n}\n#nav-container li {\n    font-size: 1.4rem;\ntext-transform: lowercase;\n    list-style-type: none;\n    padding: 2vw;\n    border-radius: 6px;\n    /* border: 2px solid yellowgreen;     */\n    cursor: pointer;\n}\n#nav-container li:hover {\ncolor: yellowgreen;\n\n}\n#description-container {\n    /* border: 5px solid yellowgreen; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n}\n#img-container {\nwidth: 100%;\nheight: auto;\n}\n#img-container img {\nbackground-size: contain;\n    background-position: center;\n    width: 100%;\n    opacity: 0.7;\n    border-radius: 25px;\n}\n#description-container #text-container {\n    position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n    /* border: 5px solid yellowgreen; */\n    font-size: 1.8rem;\n    \n}\n@media (max-width: 800px) {\n    #description-container #text-container {\nfont-size: 1.2rem;\n    }\n    \n}\n\n#content {\ndisplay: flex;\nflex-direction: column;\nrow-gap: 100px;\nmargin-bottom: 200px;\n\n}\n#baked-selection-container {\n    \n}\n#text-container h1 {\n    color: white;\n    text-transform: lowercase;\nfont-family: 'Courier New', Courier, monospace;\n}\n#text-container p {\n    color: white;\n    text-transform: lowercase;\n/* font-family: 'Courier New', Courier, monospace; */\nopacity: 0.6;\n}\n\n\n\n\n\n\n.title-container {\n    font-size: 1.8rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    column-gap: 20px;\npadding: 0;    \nmargin: 0;\nmargin-bottom: -30px;\n\n}\n.title-container h4 {\n        text-transform: uppercase;\n    /* border: 2px solid yellowgreen; */\n    \n    max-width: 60ch;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n.title-container img {\n    border-radius: 50%;    \n    height: 1.8rem;\n    width: 1.8rem;\n    \n    }\n.menu-item {\n    margin-top: 50px;\n}\n.menu-item p {\n    font-size: 1.3rem;\n    text-transform: lowercase;\n    /* border: 2px solid yellowgreen; */\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    padding: 0 10% 0 10%;\n    \n}\n.menu-item .price {\n    font-size: 2rem;\n    font-weight: 800;\n    /* color: black; */\n\n}\n    #optional-omelette-selection-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        \n    }\n#menu-item-container-1 {\n    width: 80vw;\n    /* border: 3px solid yellowgreen; */\n    \n}\n\n#menu-item-container-1 .menu-item {\ndisplay: flex;\nflex-direction: column;\nflex-wrap: wrap;\nheight: 600px;\ncolumn-gap: 3%;\n}\n@media (max-width: 800px) {\n#menu-item-container-1 .menu-item {\ndisplay: flex;\nflex-direction: column;        \nflex-wrap: nowrap;\ncolumn-gap: 3%;\nheight: 1000px;\n    }\n}\n#menu-item-container-1 .title-container {\n    height: 100px;    \nflex: 0 0 0;\nbox-sizing: border-box;\n}\n.content-wrapper {\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\nheight: 100px;\nwidth: 100%;\n/* border: 3px solid yellowgreen; */\n} \n.content-wrapper p {\n    /* padding: 0; */\n}\n\n\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var l=r(n,o),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"ac0a039e18debc0948fa.png",e=["yoga instructor","nutritionist","spiritual healer"];let r=0;var o=t(72),i=t.n(o),a=t(825),c=t.n(a),l=t(659),s=t.n(l),d=t(56),p=t.n(d),u=t(540),m=t.n(u),f=t(113),h=t.n(f),g=t(208),v={};v.styleTagTransform=h(),v.setAttributes=p(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),i()(g.A,v),g.A&&g.A.locals&&g.A.locals;const x=document.body,y=document.getElementById("content");x.insertBefore(function(){const n=document.createElement("div"),e=document.createElement("h1");return e.innerHTML="Paula Walsh",n.appendChild(e),n}(),y),x.insertBefore(function(){const n=document.createElement("div");n.id="nav-container";const e=document.createElement("ul");e.id="nav-ul";const t=["About Me","Upcoming Events","Contact Me"];for(let n=0;n<t.length;n++){const r=document.createElement("li");r.id=t[n],r.textContent=t[n],e.appendChild(r)}return n.appendChild(e),n}(),y),y.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");e.id="description-container",t.id="img-container";const r=new Image;return r.src=n,r.alt="women holding yoga pose with full moon in background",t.style.backgroundImage="url(img)",e.appendChild(t),t.appendChild(r),e}()),document.getElementById("description-container").appendChild(function(){const n=document.createElement("div");n.id="text-container";const e=document.createElement("h1");e.id="section-1-title";const t=document.createElement("p");return t.id="section-1-paragraph",e.innerHTML="",t.innerHTML="At our establishment, we take pride in ensuring that all of our dishes are freshly prepared. We hold a strong aversion to the use of pesticides and preservatives. To uphold our commitment to quality, we strive to incorporate local, organic, and free-range ingredients whenever possible, depending on their availability. Listed below are some of our most beloved dishes. We encourage you to visit us and experience our ever-evolving menu firsthand.",n.appendChild(e),n.appendChild(t),n}()),setInterval((function(){document.getElementById("section-1-title").textContent=e[r],r=(r+1)%e.length}),2e3)})()})();