!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");var a=document.getElementsByName("delay"),l=document.getElementsByName("step"),u=document.getElementsByName("amount");document.querySelector("button").addEventListener("click",(function(n){var t,o,r,c,d;n.preventDefault(),o=u[0].value,r=l[0].value,c=a[0].value,d=0,setTimeout((function(){t=setInterval((function(){var n=+c+ +r*((d+=1)-1);console.log(n),new Promise((function(t,o){Math.random()>.3?t(e(i).Notify.warning("✅ Fulfilled promise ".concat(d," in ").concat(n,"ms"),{width:"300px",useFontAwesome:!0,warning:{background:"green",textColor:"white"}})):o(e(i).Notify.warning("❌ Rejected promise ".concat(d," in ").concat(n,"ms"),{width:"300px",useFontAwesome:!0,warning:{background:"red",textColor:"white"}}))})),d>=o&&clearInterval(t)}),r)}),c)}))}();
//# sourceMappingURL=03-promises.f94a3f4f.js.map