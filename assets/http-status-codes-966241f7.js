import{cB as a,d as B,a9 as E,y as S,b4 as T,d8 as k,c as L,o,s as r,e as v,f as s,i as F,G as x,H as _,j as N,v as l,J as y,K as c,b as R,w as U,d9 as V,aT as z,ab as H}from"./index-8a14065c.js";/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $=a("outline","circle-arrow-up-right","IconCircleArrowUpRight",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M15 9l-6 6",key:"svg-1"}],["path",{d:"M15 15v-6h-6",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j=a("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var A=a("outline","database-exclamation","IconDatabaseExclamation",[["path",{d:"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3",key:"svg-0"}],["path",{d:"M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.182 -.086 3.148 -.241m4.852 -2.759v-6",key:"svg-1"}],["path",{d:"M4 12v6c0 1.657 3.582 3 8 3c1.064 0 2.079 -.078 3.007 -.22",key:"svg-2"}],["path",{d:"M19 16v3",key:"svg-3"}],["path",{d:"M19 22v.01",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var P=a("outline","device-desktop-exclamation","IconDeviceDesktopExclamation",[["path",{d:"M15 16h-11a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7",key:"svg-0"}],["path",{d:"M7 20h8",key:"svg-1"}],["path",{d:"M9 16v4",key:"svg-2"}],["path",{d:"M15 16v4",key:"svg-3"}],["path",{d:"M19 16v3",key:"svg-4"}],["path",{d:"M19 22v.01",key:"svg-5"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var G=a("outline","external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var J=a("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);const K={"mb-2":"",flex:"","items-center":"","gap-2":"","text-xl":"","font-bold":""},W={flex:"","items-center":"","gap-2":"","text-lg":"","font-bold":""},q=["title","onClick"],O={"op-70":""},Z=B({__name:"http-status-codes",setup(Q){const{t:h}=E(),n=S(""),{searchResult:f}=T({search:n,data:k.flatMap(({codes:t,category:e})=>t.map(i=>({...i,category:e}))),options:{keys:[{name:"code",weight:3},{name:"name",weight:2},"description","category"]}}),M=L(()=>n.value?[{category:"Search results",codes:f.value}]:k);function I(t){const e=t.toLowerCase();return e.includes("1xx")?V:e.includes("2xx")?j:e.includes("3xx")?$:e.includes("4xx")?P:e.includes("5xx")?A:J}function C(t){window.open(`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${t}`,"_blank","noopener,noreferrer")}return(t,e)=>{const i=N,m=z,b=H;return o(),r("div",null,[v(i,{value:s(n),"onUpdate:value":e[0]||(e[0]=d=>F(n)?n.value=d:null),placeholder:s(h)("tools.http-status-codes.texts.placeholder-search-http-status"),autofocus:"","raw-text":"","mb-10":""},null,8,["value","placeholder"]),(o(!0),r(x,null,_(s(M),({codes:d,category:p})=>(o(),r("div",{key:p,"mb-8":""},[l("div",K,[v(m,{component:I(p),size:"26"},null,8,["component"]),y(" "+c(p),1)]),(o(!0),r(x,null,_(d,({code:u,description:w,name:D,type:g})=>(o(),R(b,{key:u,"mb-2":""},{default:U(()=>[l("div",W,[y(c(u)+" "+c(D)+" ",1),l("div",{class:"flex cursor-pointer items-center justify-center rounded text-gray-500 transition-colors hover:text-blue-600",title:s(h)("tools.http-status-codes.texts.title-view-mdn-documentation"),onClick:X=>C(u)},[v(m,{component:s(G),size:"18"},null,8,["component"])],8,q)]),l("div",O,c(w)+" "+c(g!=="HTTP"?`For ${g}.`:""),1)]),_:2},1024))),128))]))),128))])}}});export{Z as default};
