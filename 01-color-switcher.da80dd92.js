const e=document.getElementsByTagName("button");let t;console.log(e);const a=e[0],d=e[1];a.addEventListener("click",(e=>{t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.target.disabled=!0,d.disabled=!1})),d.addEventListener("click",(e=>{clearInterval(t),e.target.disabled=!0,a.disabled=!1}));
//# sourceMappingURL=01-color-switcher.da80dd92.js.map
