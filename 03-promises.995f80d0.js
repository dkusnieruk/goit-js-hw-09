function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=l);var r=l("eWCmQ");const i=document.getElementsByName("delay"),a=document.getElementsByName("step"),u=document.getElementsByName("amount");document.querySelector("button").addEventListener("click",(n=>{n.preventDefault();const t=u[0].value,o=a[0].value;i[0].value;let l=0,d=setInterval((function(){!function(n,t){Math.random()>.3?(console.log("fullfill"),e(r).Notify.warning(`✅ Fulfilled promise ${n} in ${t}ms`,{width:"300px",useFontAwesome:!0,warning:{background:"green",textColor:"white"}})):(console.log("reject"),e(r).Notify.warning(`❌ Rejected promise ${n} in ${t}ms`,{width:"300px",useFontAwesome:!0,warning:{background:"red",textColor:"white"}}))}(t,o),l+=1,l>=t&&clearInterval(d)}),o)}));
//# sourceMappingURL=03-promises.995f80d0.js.map
