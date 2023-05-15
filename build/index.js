!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WindowReferenceStore=t():e.WindowReferenceStore=t()}(self,(function(){return(()=>{"use strict";var e={154:(e,t,o)=>{var r=function(){function e(e,t,r){void 0===e&&(e=""),void 0===t&&(t=""),void 0===r&&(r=null),this.storeNamespace="windowReferenceStore",this.storeName="",this.root="undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof document?document:{},t?this.storeNamespace=t:console.info("It's recommended to assign a namespace for your stores"),e?(this.storeName=e,null!==r&&(this.root=r),this.registerGlobalReferences()):console.error("A store name needs to be specified. Initiation aborted in WindowReferenceStore")}return e.prototype.registerGlobalReferences=function(){void 0===this.root[this.storeNamespace]&&(this.root[this.storeNamespace]={}),void 0===this.root[this.storeNamespace][this.storeName]&&(this.root[this.storeNamespace][this.storeName]={})},e.prototype.has=function(e){return e?void 0!==this.root[this.storeNamespace][this.storeName][e]:(console.log("Attempted to fetch an empty key. Reference store namespace: ".concat(this.storeNamespace,". Reference store name: ").concat(this.storeName)),!1)},e.prototype.get=function(e){return this.has(e)?this.root[this.storeNamespace][this.storeName][e]:(console.log("Could not find reference ".concat(e," in store ").concat(this.storeNamespace," ").concat(this.storeName)),!1)},e.prototype.set=function(e,t,o){if(void 0===o&&(o=!1),this.has(e)&&!o)return console.warn("Reference '".concat(e,"' already exists in store '").concat(this.storeName,"' and override wasn't enabled")),!1;if(void 0===t)return console.error("Can't register a undefined object to store ".concat(this.storeName)),!1;try{return this.root[this.storeNamespace][this.storeName][e]=t,!0}catch(e){return!1}},e.prototype.remove=function(e){return!!this.has(e)&&delete this.root[this.storeNamespace][this.storeName][e]},e}();t.Z=r},138:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o(154).Z}},t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}return o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(138)})()}));
//# sourceMappingURL=index.js.map