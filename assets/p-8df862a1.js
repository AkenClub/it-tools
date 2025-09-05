import{al as v,ak as r,d as C,aq as b,p as l,aR as x,c as a,au as z,s as y}from"./index-bd50fbe2.js";const R=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[r("&:first-child","margin-top: 0;"),r("&:last-child","margin-bottom: 0;")]),T=Object.assign(Object.assign({},l.props),{depth:[String,Number]}),P=C({name:"P",props:T,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=b(e),h=l("Typography","-p",R,x,e,n),i=a(()=>{const{depth:o}=e,c=o||"1",{common:{cubicBezierEaseInOut:d},self:{pFontSize:p,pLineHeight:m,pMargin:g,pTextColor:u,[`pTextColor${c}Depth`]:f}}=h.value;return{"--n-bezier":d,"--n-font-size":p,"--n-line-height":m,"--n-margin":g,"--n-text-color":o===void 0?u:f}}),s=t?z("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:i,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),y("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{P as _};
