import{q as c,P as f,k as r}from"./index-bd50fbe2.js";function l(t,u,n=!1){const e=c(t);return f((o,s)=>({get(){return o(),e.value},set:r.debounce(a=>{e.value=a,s()},u,{leading:n})}))}export{l as u};
