!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.GdprPassword=e():t.GdprPassword=e()}("undefined"!=typeof self?self:this,(function(){return(()=>{var t={859:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var r=n(15),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([t.id,'.account__passwordChecker{display:none}.account__passwordChecker--strong,.account__passwordChecker--weak{display:block;font-size:.775rem;margin-bottom:30px;padding:0 10px;position:relative}.account__passwordChecker--strong:after,.account__passwordChecker--weak:after{bottom:-8px;content:" ";height:2px;left:10px;position:absolute;width:calc(100% - 34px)}.account__passwordChecker--strong{color:#54a000}.account__passwordChecker--strong:after{background-color:#54a000}.account__passwordChecker--weak{color:#ec420ed4}.account__passwordChecker--weak:after{background-color:#ec420ed4}#passwordError{color:red;font-size:12px;margin-top:5px}#passwordCheckerList strong{display:block;margin:10px 0 5px}#passwordCheckerList ul{line-height:1.3;list-style:none;padding-left:0}',"",{version:3,sources:["webpack://./src/scss/styles.scss"],names:[],mappings:"AAAA,0BACI,YAAa,CAChB,kEAIG,aAAc,CAEd,iBAAmB,CAEnB,kBAAe,CADf,cAAe,CAFf,iBAGmB,CANvB,8EAYQ,WAAY,CAJZ,WAAY,CACZ,UAAW,CAIX,SAAM,CAFN,iBAAkB,CADlB,uBAGU,CACb,kCAOD,aAAc,CADlB,wCAGQ,wBAAyB,CAC5B,gCAKD,eAAgB,CADpB,sCAGQ,0BAA2B,CAC9B,eAKD,SAAU,CACV,cAAW,CAFX,cAEe,CAClB,4BAIO,aAAc,CACd,iBACJ,CAJJ,wBAQQ,eAAa,CAFb,eAAgB,CAChB,cACgB",sourcesContent:['.account__passwordChecker {\r\n    display: none;\r\n}\r\n\r\n.account__passwordChecker--strong,\r\n.account__passwordChecker--weak {\r\n    display: block;\r\n    position: relative;\r\n    font-size: 0.775rem;\r\n    padding: 0 10px;\r\n    margin-bottom: 30px;\r\n    &::after {\r\n        content: " ";\r\n        height: 2px;\r\n        width: calc(100% - 34px);\r\n        position: absolute;\r\n        bottom: -8px;\r\n        left: 10px;\r\n    }\r\n}\r\n\r\n\r\n\r\n/* 1.32 PWStrength */\r\n.account__passwordChecker--strong {\r\n    color: #54a000;\r\n    &::after {\r\n        background-color: #54a000;\r\n    }\r\n}\r\n\r\n/* 1.32 PWStrength */\r\n.account__passwordChecker--weak {\r\n    color: #ec420ed4;\r\n    &::after {\r\n        background-color: #ec420ed4;\r\n    }\r\n}\r\n\r\n#passwordError {\r\n    margin-top: 5px;\r\n    color: red;\r\n    font-size: 12px;\r\n}\r\n\r\n#passwordCheckerList {\r\n    strong {\r\n        display: block;\r\n        margin: 10px 0 5px\r\n    }\r\n    ul {\r\n        list-style: none;\r\n        padding-left: 0;\r\n        line-height: 1.3;\r\n    }\r\n}\r\n'],sourceRoot:""}]);const a=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},15:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r,o=(r=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(n,r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],s=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),l="/*# ".concat(c," */"),d=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[i].concat(d).concat([l]).join("\n")}return[i].join("\n")}},453:(t,e,n)=>{var r=n(379),o=n(859);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);r(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:m(p,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function u(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,f=0;function m(t,e){var n,r,o;if(e.singleton){var i=f++;n=h||(h=c(e)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var c=a(t,e),l=0;l<n.length;l++){var d=s(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.d(r,{default:()=>t}),n(453);class t{constructor(t,e){this.options=Object.assign({notification:{id:null,content:"<div id='passwordError'>Mot de passe invalide</div><div id='passwordCheckerList'><strong>Votre mot de passe doit contenir :</strong><ul><li class='numeral'>8 caractères minimum</li><li class='uppercase'>1 majuscule minimum</li><li class='lowercase'>1 minuscule minimum</li><li class='number'>1 chiffre minimum</li><li class='specialchar'>1 caractère spécial minimum (!?@...)</li></ul></div>"},classes:{common:"account__passwordChecker",weak:"account__passwordChecker--weak",strong:"account__passwordChecker--strong"},conditions:{number:!0,lowercase:!0,uppercase:!0,specialchar:!0,length:8}},e),this.checkers={number:{condition:this.options.conditions.number,pattern:/\d+/g},lowercase:{condition:this.options.conditions.lowercase,pattern:/[a-z]/g},uppercase:{condition:this.options.conditions.uppercase,pattern:/[A-Z]/g},specialchar:{condition:this.options.conditions.specialchar,pattern:/[!@#\$§£€%°\^\?~\&*\)\(+=.,;:/_-]+/g}},this.password="string"==typeof t?document.getElementById(t):t,this.form=null,this.options.form&&(this.form="string"==typeof this.options.form?document.getElementById(this.options.form):this.options.form),this.notification=null,this.isStateOk=null,this.updateState(),this.initNotification(),this.listenElement()}updateState(){this.isStateOk=this.password.value.length&&this.matchConditions()||!this.isRequired()&&!this.password.value.length}initNotification(){this.options.notification.id?this.notification=document.getElementById(this.options.notification.id):(this.notification=document.createElement("div"),this.notification.classList.add(this.options.classes.common),this.password.after(this.notification))}listenElement(){this.password.addEventListener("focus",(t=>{this.notification.style.display="block",this.password.value.length||(this.notification.innerHTML=this.options.notification.content),document.getElementById("passwordCheckerList").style.display="block",document.getElementById("passwordError").style.display="none"})),this.password.addEventListener("keyup",(t=>{this.matchConditions()?t.target.classList.remove("inputPasswordError"):t.target.classList.add("inputPasswordError"),this.crossMatchConditions(),this.updateState()})),this.password.addEventListener("blur",(t=>{this.updateState(),document.getElementById("passwordCheckerList").style.display="none",this.isStateOk?document.getElementById("passwordError").style.display="none":document.getElementById("passwordError").style.display="block"})),this.form&&this.form.addEventListener("submit",(t=>{if(!this.isStateOk)return t.preventDefault(),!1}))}matchConditions(){var t=!0;if(this.isRequired()||this.password.value.length){for(let[e,n]of Object.entries(this.checkers))t&=!0===n.condition&&this.count(n.pattern)>0||n.condition&&this.count(n.pattern)>=n.condition;this.options.conditions.length&&(t&=this.password.value.length>=this.options.conditions.length)}return t}crossMatchConditions(){if(this.isRequired()||this.password.value.length)for(let[t,e]of Object.entries(this.checkers)){let n=document.querySelector("#passwordCheckerList ."+t);e.condition&&0!==this.count(e.pattern)?n.style.textDecoration="line-through":n.style.textDecoration="none"}this.password.value.length>=this.options.conditions.length?this.notification.querySelector(".numeral").style.textDecoration="line-through":this.notification.querySelector(".numeral").style.textDecoration="none"}isRequired(){return this.password.hasAttribute("required")&&"required"===this.password.getAttribute("required")}count(t){return((this.password.value||"").match(t)||[]).length}}})(),r.default})()}));
//# sourceMappingURL=gdpr-password.js.map