import{y as c,R as f,n as r}from"./index-8a14065c.js";function b(n,t,u=!1){const e=c(n);return f((o,s)=>({get(){return o(),e.value},set:r.debounce(a=>{e.value=a,s()},t,{leading:u})}))}export{b as u};
