import{T as Xo}from"./TextareaCopyable-c541a0c9.js";import{d as pe,z as m,m as Qr,ag as D,k as Ge,al as mt,x as wt,fB as Nr,c as U,dS as Mr,M as zr,bg as mn,bq as ce,ap as Pn,ay as _o,dM as Tt,au as ie,y as ee,p as Or,e1 as $o,fC as ei,cU as Dr,dQ as Hr,fD as On,af as se,ah as $,ai as wn,fE as ti,br as Nt,S as Lt,an as Tn,ao as Pe,bD as Ln,G as Mt,bx as nt,c1 as ni,bj as sn,cm as je,fF as ri,fG as oi,aA as ii,fH as ai,ae as Dn,bM as Un,fI as li,fJ as si,cs as Hn,bt as di,aG as Wr,fK as fi,N as Yr,l as ci,c5 as Wt,bW as Wn,fL as ui,aE as Ve,dH as hi,bU as At,fM as gi,cD as Ai,cy as pi,ct as Yn,eB as vi,b_ as mi,bp as kt,ar as at,aj as wi,ak as bi,cA as Kn,fN as yi,ch as Ci,aH as xi,a9 as Ii,O as Ri,o as Yt,s as Bi,e as xt,w as It,f as He,b as dn,J as qn,K as Vn,Q as fn,v as Ei,aN as Si,ab as ki,ac as Fi}from"./index-8a14065c.js";import"./index-a6f01dde.js";import{_ as Qn,a as Pi}from"./Checkbox-82776e1f.js";import{_ as Kr,a as Ti}from"./RadioGroup-d619ccfb.js";import{_ as bn}from"./Button-47050a60.js";import{A as Li}from"./ArrowDown-d6e4064f.js";import{C as Ui}from"./Suffix-504180bb.js";import{V as qr}from"./VirtualList-828b0aa9.js";import{N as Qi}from"./Empty-bfa3964a.js";import{u as Vr}from"./use-locale-68e3d02c.js";import{s as jn}from"./prop-af0f8139.js";import{_ as Gn}from"./Input-b28c11ba.js";import{c as Ni,a as Mi,m as Zn,N as zi}from"./Select-c71e3e36.js";import{a as Jn,B as Xn,b as _n,F as $n}from"./Forward-b3cb0492.js";import{d as Oi}from"./download-953ccaa2.js";import{_ as Di,a as Hi}from"./Tabs-30bed070.js";import"./base64-11d7ac16.js";import"./downloadBase64-a22fcbde.js";import"./index-0862b35f.js";import"./index-af76eecf.js";import"./Copy-c54f42f9.js";import"./Scrollbar-a18b0812.js";import"./use-form-item-e9bddaa3.js";import"./get-slot-1efb97e5.js";import"./browser-ddb21091.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Tag-6a4193da.js";import"./FocusDetector-88671ec4.js";import"./index-cbfaa337.js";import"./Add-d9c98631.js";import"./debounce-bd4176c9.js";import"./now-a08a9056.js";import"./toNumber-6a0a00f8.js";const Wi=pe({name:"Filter",render(){return m("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},m("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},m("g",{"fill-rule":"nonzero"},m("path",{d:"M17,19 C17.5522847,19 18,19.4477153 18,20 C18,20.5522847 17.5522847,21 17,21 L11,21 C10.4477153,21 10,20.5522847 10,20 C10,19.4477153 10.4477153,19 11,19 L17,19 Z M21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5522847 21.5522847,15 21,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L21,13 Z M24,7 C24.5522847,7 25,7.44771525 25,8 C25,8.55228475 24.5522847,9 24,9 L4,9 C3.44771525,9 3,8.55228475 3,8 C3,7.44771525 3.44771525,7 4,7 L24,7 Z"}))))}}),er=pe({name:"More",render(){return m("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},m("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},m("g",{fill:"currentColor","fill-rule":"nonzero"},m("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}}),jr=Qr("n-popselect"),Yi=D("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),Nn={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},tr=_o(Nn),Ki=pe({name:"PopselectPanel",props:Nn,setup(e){const t=Ge(jr),{mergedClsPrefixRef:n,inlineThemeDisabled:r}=mt(e),o=wt("Popselect","-pop-select",Yi,Nr,t.props,n),i=U(()=>Mr(e.options,Ni("value","children")));function a(g,p){const{onUpdateValue:A,"onUpdate:value":h,onChange:f}=e;A&&ie(A,g,p),h&&ie(h,g,p),f&&ie(f,g,p)}function l(g){s(g.key)}function d(g){!Tt(g,"action")&&!Tt(g,"empty")&&!Tt(g,"header")&&g.preventDefault()}function s(g){const{value:{getNode:p}}=i;if(e.multiple)if(Array.isArray(e.value)){const A=[],h=[];let f=!0;e.value.forEach(v=>{if(v===g){f=!1;return}const b=p(v);b&&(A.push(b.key),h.push(b.rawNode))}),f&&(A.push(g),h.push(p(g).rawNode)),a(A,h)}else{const A=p(g);A&&a([g],[A.rawNode])}else if(e.value===g&&e.cancelable)a(null,null);else{const A=p(g);A&&a(g,A.rawNode);const{"onUpdate:show":h,onUpdateShow:f}=t.props;h&&ie(h,!1),f&&ie(f,!1),t.setShow(!1)}mn(()=>{t.syncPosition()})}zr(ce(e,"options"),()=>{mn(()=>{t.syncPosition()})});const c=U(()=>{const{self:{menuBoxShadow:g}}=o.value;return{"--n-menu-box-shadow":g}}),u=r?Pn("select",void 0,c,t.props):void 0;return{mergedTheme:t.mergedThemeRef,mergedClsPrefix:n,treeMate:i,handleToggle:l,handleMenuMousedown:d,cssVars:r?void 0:c,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),m(Mi,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{header:()=>{var t,n;return((n=(t=this.$slots).header)===null||n===void 0?void 0:n.call(t))||[]},action:()=>{var t,n;return((n=(t=this.$slots).action)===null||n===void 0?void 0:n.call(t))||[]},empty:()=>{var t,n;return((n=(t=this.$slots).empty)===null||n===void 0?void 0:n.call(t))||[]}})}}),qi=Object.assign(Object.assign(Object.assign(Object.assign({},wt.props),Dr(On,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},On.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),Nn),Vi=pe({name:"Popselect",props:qi,slots:Object,inheritAttrs:!1,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=mt(e),n=wt("Popselect","-popselect",void 0,Nr,e,t),r=ee(null);function o(){var l;(l=r.value)===null||l===void 0||l.syncPosition()}function i(l){var d;(d=r.value)===null||d===void 0||d.setShow(l)}return Or(jr,{props:e,mergedThemeRef:n,syncPosition:o,setShow:i}),Object.assign(Object.assign({},{syncPosition:o,setShow:i}),{popoverInstRef:r,mergedTheme:n})},render(){const{mergedTheme:e}=this,t={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(n,r,o,i,a)=>{const{$attrs:l}=this;return m(Ki,Object.assign({},l,{class:[l.class,n],style:[l.style,...o]},$o(this.$props,tr),{ref:ei(r),onMouseenter:Zn([i,l.onMouseenter]),onMouseleave:Zn([a,l.onMouseleave])}),{header:()=>{var d,s;return(s=(d=this.$slots).header)===null||s===void 0?void 0:s.call(d)},action:()=>{var d,s;return(s=(d=this.$slots).action)===null||s===void 0?void 0:s.call(d)},empty:()=>{var d,s;return(s=(d=this.$slots).empty)===null||s===void 0?void 0:s.call(d)}})}};return m(Hr,Object.assign({},Dr(this.$props,tr),t,{internalDeactivateImmediately:!0}),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),nr=`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`,rr=[$("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)],ji=D("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[D("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),D("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),se("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),D("select",`
 width: var(--n-select-width);
 `),se("&.transition-disabled",[D("pagination-item","transition: none!important;")]),D("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[D("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),D("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[$("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[D("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),wn("disabled",[$("hover",nr,rr),se("&:hover",nr,rr),se("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[$("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),$("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[se("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),$("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[$("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),$("disabled",`
 cursor: not-allowed;
 `,[D("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)]),$("simple",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[D("pagination-quick-jumper",[D("input",`
 margin: 0;
 `)])])]);function Gr(e){var t;if(!e)return 10;const{defaultPageSize:n}=e;if(n!==void 0)return n;const r=(t=e.pageSizes)===null||t===void 0?void 0:t[0];return typeof r=="number"?r:r?.value||10}function Gi(e,t,n,r){let o=!1,i=!1,a=1,l=t;if(t===1)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:l,fastBackwardTo:a,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}]};if(t===2)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:l,fastBackwardTo:a,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1},{type:"page",label:2,active:e===2,mayBeFastBackward:!0,mayBeFastForward:!1}]};const d=1,s=t;let c=e,u=e;const g=(n-5)/2;u+=Math.ceil(g),u=Math.min(Math.max(u,d+n-3),s-2),c-=Math.floor(g),c=Math.max(Math.min(c,s-n+3),d+2);let p=!1,A=!1;c>d+2&&(p=!0),u<s-2&&(A=!0);const h=[];h.push({type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}),p?(o=!0,a=c-1,h.push({type:"fast-backward",active:!1,label:void 0,options:r?or(d+1,c-1):null})):s>=d+1&&h.push({type:"page",label:d+1,mayBeFastBackward:!0,mayBeFastForward:!1,active:e===d+1});for(let f=c;f<=u;++f)h.push({type:"page",label:f,mayBeFastBackward:!1,mayBeFastForward:!1,active:e===f});return A?(i=!0,l=u+1,h.push({type:"fast-forward",active:!1,label:void 0,options:r?or(u+1,s-1):null})):u===s-2&&h[h.length-1].label!==s-1&&h.push({type:"page",mayBeFastForward:!0,mayBeFastBackward:!1,label:s-1,active:e===s-1}),h[h.length-1].label!==s&&h.push({type:"page",mayBeFastForward:!1,mayBeFastBackward:!1,label:s,active:e===s}),{hasFastBackward:o,hasFastForward:i,fastBackwardTo:a,fastForwardTo:l,items:h}}function or(e,t){const n=[];for(let r=e;r<=t;++r)n.push({label:`${r}`,value:r});return n}const Zi=Object.assign(Object.assign({},wt.props),{simple:Boolean,page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:Number,pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},selectProps:Object,prev:Function,next:Function,goto:Function,prefix:Function,suffix:Function,label:Function,displayOrder:{type:Array,default:["pages","size-picker","quick-jumper"]},to:ni.propTo,showQuickJumpDropdown:{type:Boolean,default:!0},"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]}),Ji=pe({name:"Pagination",props:Zi,slots:Object,setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:o}=mt(e),i=wt("Pagination","-pagination",ji,ti,e,n),{localeRef:a}=Vr("Pagination"),l=ee(null),d=ee(e.defaultPage),s=ee(Gr(e)),c=Nt(ce(e,"page"),d),u=Nt(ce(e,"pageSize"),s),g=U(()=>{const{itemCount:w}=e;if(w!==void 0)return Math.max(1,Math.ceil(w/u.value));const{pageCount:Y}=e;return Y!==void 0?Math.max(Y,1):1}),p=ee("");Lt(()=>{e.simple,p.value=String(c.value)});const A=ee(!1),h=ee(!1),f=ee(!1),v=ee(!1),b=()=>{e.disabled||(A.value=!0,k())},C=()=>{e.disabled||(A.value=!1,k())},F=()=>{h.value=!0,k()},R=()=>{h.value=!1,k()},x=w=>{O(w)},P=U(()=>Gi(c.value,g.value,e.pageSlot,e.showQuickJumpDropdown));Lt(()=>{P.value.hasFastBackward?P.value.hasFastForward||(A.value=!1,f.value=!1):(h.value=!1,v.value=!1)});const j=U(()=>{const w=a.value.selectionSuffix;return e.pageSizes.map(Y=>typeof Y=="number"?{label:`${Y} / ${w}`,value:Y}:Y)}),B=U(()=>{var w,Y;return((Y=(w=t?.value)===null||w===void 0?void 0:w.Pagination)===null||Y===void 0?void 0:Y.inputSize)||jn(e.size)}),I=U(()=>{var w,Y;return((Y=(w=t?.value)===null||w===void 0?void 0:w.Pagination)===null||Y===void 0?void 0:Y.selectSize)||jn(e.size)}),H=U(()=>(c.value-1)*u.value),E=U(()=>{const w=c.value*u.value-1,{itemCount:Y}=e;return Y!==void 0&&w>Y-1?Y-1:w}),M=U(()=>{const{itemCount:w}=e;return w!==void 0?w:(e.pageCount||1)*u.value}),T=Tn("Pagination",o,n);function k(){mn(()=>{var w;const{value:Y}=l;Y&&(Y.classList.add("transition-disabled"),(w=l.value)===null||w===void 0||w.offsetWidth,Y.classList.remove("transition-disabled"))})}function O(w){if(w===c.value)return;const{"onUpdate:page":Y,onUpdatePage:fe,onChange:le,simple:Re}=e;Y&&ie(Y,w),fe&&ie(fe,w),le&&ie(le,w),d.value=w,Re&&(p.value=String(w))}function te(w){if(w===u.value)return;const{"onUpdate:pageSize":Y,onUpdatePageSize:fe,onPageSizeChange:le}=e;Y&&ie(Y,w),fe&&ie(fe,w),le&&ie(le,w),s.value=w,g.value<c.value&&O(g.value)}function J(){if(e.disabled)return;const w=Math.min(c.value+1,g.value);O(w)}function oe(){if(e.disabled)return;const w=Math.max(c.value-1,1);O(w)}function _(){if(e.disabled)return;const w=Math.min(P.value.fastForwardTo,g.value);O(w)}function S(){if(e.disabled)return;const w=Math.max(P.value.fastBackwardTo,1);O(w)}function Q(w){te(w)}function q(){const w=Number.parseInt(p.value);Number.isNaN(w)||(O(Math.max(1,Math.min(w,g.value))),e.simple||(p.value=""))}function N(){q()}function K(w){if(!e.disabled)switch(w.type){case"page":O(w.label);break;case"fast-backward":S();break;case"fast-forward":_();break}}function de(w){p.value=w.replace(/\D+/g,"")}Lt(()=>{c.value,u.value,k()});const ae=U(()=>{const{size:w}=e,{self:{buttonBorder:Y,buttonBorderHover:fe,buttonBorderPressed:le,buttonIconColor:Re,buttonIconColorHover:Oe,buttonIconColorPressed:Be,itemTextColor:Se,itemTextColorHover:Le,itemTextColorPressed:Ce,itemTextColorActive:V,itemTextColorDisabled:re,itemColor:me,itemColorHover:we,itemColorPressed:We,itemColorActive:Ze,itemColorActiveHover:Ye,itemColorDisabled:Ue,itemBorder:ke,itemBorderHover:dt,itemBorderPressed:ft,itemBorderActive:De,itemBorderDisabled:Te,itemBorderRadius:et,jumperTextColor:Ee,jumperTextColorDisabled:W,buttonColor:X,buttonColorHover:Z,buttonColorPressed:G,[Pe("itemPadding",w)]:ue,[Pe("itemMargin",w)]:he,[Pe("inputWidth",w)]:ve,[Pe("selectWidth",w)]:Qe,[Pe("inputMargin",w)]:Ne,[Pe("selectMargin",w)]:Ke,[Pe("jumperFontSize",w)]:ct,[Pe("prefixMargin",w)]:Me,[Pe("suffixMargin",w)]:ge,[Pe("itemSize",w)]:tt,[Pe("buttonIconSize",w)]:bt,[Pe("itemFontSize",w)]:yt,[`${Pe("itemMargin",w)}Rtl`]:ot,[`${Pe("inputMargin",w)}Rtl`]:it},common:{cubicBezierEaseInOut:Et}}=i.value;return{"--n-prefix-margin":Me,"--n-suffix-margin":ge,"--n-item-font-size":yt,"--n-select-width":Qe,"--n-select-margin":Ke,"--n-input-width":ve,"--n-input-margin":Ne,"--n-input-margin-rtl":it,"--n-item-size":tt,"--n-item-text-color":Se,"--n-item-text-color-disabled":re,"--n-item-text-color-hover":Le,"--n-item-text-color-active":V,"--n-item-text-color-pressed":Ce,"--n-item-color":me,"--n-item-color-hover":we,"--n-item-color-disabled":Ue,"--n-item-color-active":Ze,"--n-item-color-active-hover":Ye,"--n-item-color-pressed":We,"--n-item-border":ke,"--n-item-border-hover":dt,"--n-item-border-disabled":Te,"--n-item-border-active":De,"--n-item-border-pressed":ft,"--n-item-padding":ue,"--n-item-border-radius":et,"--n-bezier":Et,"--n-jumper-font-size":ct,"--n-jumper-text-color":Ee,"--n-jumper-text-color-disabled":W,"--n-item-margin":he,"--n-item-margin-rtl":ot,"--n-button-icon-size":bt,"--n-button-icon-color":Re,"--n-button-icon-color-hover":Oe,"--n-button-icon-color-pressed":Be,"--n-button-color-hover":Z,"--n-button-color":X,"--n-button-color-pressed":G,"--n-button-border":Y,"--n-button-border-hover":fe,"--n-button-border-pressed":le}}),ne=r?Pn("pagination",U(()=>{let w="";const{size:Y}=e;return w+=Y[0],w}),ae,e):void 0;return{rtlEnabled:T,mergedClsPrefix:n,locale:a,selfRef:l,mergedPage:c,pageItems:U(()=>P.value.items),mergedItemCount:M,jumperValue:p,pageSizeOptions:j,mergedPageSize:u,inputSize:B,selectSize:I,mergedTheme:i,mergedPageCount:g,startIndex:H,endIndex:E,showFastForwardMenu:f,showFastBackwardMenu:v,fastForwardActive:A,fastBackwardActive:h,handleMenuSelect:x,handleFastForwardMouseenter:b,handleFastForwardMouseleave:C,handleFastBackwardMouseenter:F,handleFastBackwardMouseleave:R,handleJumperInput:de,handleBackwardClick:oe,handleForwardClick:J,handlePageItemClick:K,handleSizePickerChange:Q,handleQuickJumperChange:N,cssVars:r?void 0:ae,themeClass:ne?.themeClass,onRender:ne?.onRender}},render(){const{$slots:e,mergedClsPrefix:t,disabled:n,cssVars:r,mergedPage:o,mergedPageCount:i,pageItems:a,showSizePicker:l,showQuickJumper:d,mergedTheme:s,locale:c,inputSize:u,selectSize:g,mergedPageSize:p,pageSizeOptions:A,jumperValue:h,simple:f,prev:v,next:b,prefix:C,suffix:F,label:R,goto:x,handleJumperInput:P,handleSizePickerChange:j,handleBackwardClick:B,handlePageItemClick:I,handleForwardClick:H,handleQuickJumperChange:E,onRender:M}=this;M?.();const T=C||e.prefix,k=F||e.suffix,O=v||e.prev,te=b||e.next,J=R||e.label;return m("div",{ref:"selfRef",class:[`${t}-pagination`,this.themeClass,this.rtlEnabled&&`${t}-pagination--rtl`,n&&`${t}-pagination--disabled`,f&&`${t}-pagination--simple`],style:r},T?m("div",{class:`${t}-pagination-prefix`},T({page:o,pageSize:p,pageCount:i,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,this.displayOrder.map(oe=>{switch(oe){case"pages":return m(Mt,null,m("div",{class:[`${t}-pagination-item`,!O&&`${t}-pagination-item--button`,(o<=1||o>i||n)&&`${t}-pagination-item--disabled`],onClick:B},O?O({page:o,pageSize:p,pageCount:i,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):m(nt,{clsPrefix:t},{default:()=>this.rtlEnabled?m(Jn,null):m(Xn,null)})),f?m(Mt,null,m("div",{class:`${t}-pagination-quick-jumper`},m(Gn,{value:h,onUpdateValue:P,size:u,placeholder:"",disabled:n,theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,onChange:E}))," /"," ",i):a.map((_,S)=>{let Q,q,N;const{type:K}=_;switch(K){case"page":const ae=_.label;J?Q=J({type:"page",node:ae,active:_.active}):Q=ae;break;case"fast-forward":const ne=this.fastForwardActive?m(nt,{clsPrefix:t},{default:()=>this.rtlEnabled?m($n,null):m(_n,null)}):m(nt,{clsPrefix:t},{default:()=>m(er,null)});J?Q=J({type:"fast-forward",node:ne,active:this.fastForwardActive||this.showFastForwardMenu}):Q=ne,q=this.handleFastForwardMouseenter,N=this.handleFastForwardMouseleave;break;case"fast-backward":const w=this.fastBackwardActive?m(nt,{clsPrefix:t},{default:()=>this.rtlEnabled?m(_n,null):m($n,null)}):m(nt,{clsPrefix:t},{default:()=>m(er,null)});J?Q=J({type:"fast-backward",node:w,active:this.fastBackwardActive||this.showFastBackwardMenu}):Q=w,q=this.handleFastBackwardMouseenter,N=this.handleFastBackwardMouseleave;break}const de=m("div",{key:S,class:[`${t}-pagination-item`,_.active&&`${t}-pagination-item--active`,K!=="page"&&(K==="fast-backward"&&this.showFastBackwardMenu||K==="fast-forward"&&this.showFastForwardMenu)&&`${t}-pagination-item--hover`,n&&`${t}-pagination-item--disabled`,K==="page"&&`${t}-pagination-item--clickable`],onClick:()=>{I(_)},onMouseenter:q,onMouseleave:N},Q);if(K==="page"&&!_.mayBeFastBackward&&!_.mayBeFastForward)return de;{const ae=_.type==="page"?_.mayBeFastBackward?"fast-backward":"fast-forward":_.type;return _.type!=="page"&&!_.options?de:m(Vi,{to:this.to,key:ae,disabled:n,trigger:"hover",virtualScroll:!0,style:{width:"60px"},theme:s.peers.Popselect,themeOverrides:s.peerOverrides.Popselect,builtinThemeOverrides:{peers:{InternalSelectMenu:{height:"calc(var(--n-option-height) * 4.6)"}}},nodeProps:()=>({style:{justifyContent:"center"}}),show:K==="page"?!1:K==="fast-backward"?this.showFastBackwardMenu:this.showFastForwardMenu,onUpdateShow:ne=>{K!=="page"&&(ne?K==="fast-backward"?this.showFastBackwardMenu=ne:this.showFastForwardMenu=ne:(this.showFastBackwardMenu=!1,this.showFastForwardMenu=!1))},options:_.type!=="page"&&_.options?_.options:[],onUpdateValue:this.handleMenuSelect,scrollable:!0,showCheckmark:!1},{default:()=>de})}}),m("div",{class:[`${t}-pagination-item`,!te&&`${t}-pagination-item--button`,{[`${t}-pagination-item--disabled`]:o<1||o>=i||n}],onClick:H},te?te({page:o,pageSize:p,pageCount:i,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):m(nt,{clsPrefix:t},{default:()=>this.rtlEnabled?m(Xn,null):m(Jn,null)})));case"size-picker":return!f&&l?m(zi,Object.assign({consistentMenuWidth:!1,placeholder:"",showCheckmark:!1,to:this.to},this.selectProps,{size:g,options:A,value:p,disabled:n,theme:s.peers.Select,themeOverrides:s.peerOverrides.Select,onUpdateValue:j})):null;case"quick-jumper":return!f&&d?m("div",{class:`${t}-pagination-quick-jumper`},x?x():Ln(this.$slots.goto,()=>[c.goto]),m(Gn,{value:h,onUpdateValue:P,size:u,placeholder:"",disabled:n,theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,onChange:E})):null;default:return null}}),k?m("div",{class:`${t}-pagination-suffix`},k({page:o,pageSize:p,pageCount:i,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}}),Xi=Object.assign(Object.assign({},wt.props),{onUnstableColumnResize:Function,pagination:{type:[Object,Boolean],default:!1},paginateSinglePage:{type:Boolean,default:!0},minHeight:[Number,String],maxHeight:[Number,String],columns:{type:Array,default:()=>[]},rowClassName:[String,Function],rowProps:Function,rowKey:Function,summary:[Function],data:{type:Array,default:()=>[]},loading:Boolean,bordered:{type:Boolean,default:void 0},bottomBordered:{type:Boolean,default:void 0},striped:Boolean,scrollX:[Number,String],defaultCheckedRowKeys:{type:Array,default:()=>[]},checkedRowKeys:Array,singleLine:{type:Boolean,default:!0},singleColumn:Boolean,size:{type:String,default:"medium"},remote:Boolean,defaultExpandedRowKeys:{type:Array,default:[]},defaultExpandAll:Boolean,expandedRowKeys:Array,stickyExpandedRows:Boolean,virtualScroll:Boolean,virtualScrollX:Boolean,virtualScrollHeader:Boolean,headerHeight:{type:Number,default:28},heightForRow:Function,minRowHeight:{type:Number,default:28},tableLayout:{type:String,default:"auto"},allowCheckingNotLoaded:Boolean,cascade:{type:Boolean,default:!0},childrenKey:{type:String,default:"children"},indent:{type:Number,default:16},flexHeight:Boolean,summaryPlacement:{type:String,default:"bottom"},paginationBehaviorOnFilter:{type:String,default:"current"},filterIconPopoverProps:Object,scrollbarProps:Object,renderCell:Function,renderExpandIcon:Function,spinProps:{type:Object,default:{}},getCsvCell:Function,getCsvHeader:Function,onLoad:Function,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],"onUpdate:sorter":[Function,Array],onUpdateSorter:[Function,Array],"onUpdate:filters":[Function,Array],onUpdateFilters:[Function,Array],"onUpdate:checkedRowKeys":[Function,Array],onUpdateCheckedRowKeys:[Function,Array],"onUpdate:expandedRowKeys":[Function,Array],onUpdateExpandedRowKeys:[Function,Array],onScroll:Function,onPageChange:[Function,Array],onPageSizeChange:[Function,Array],onSorterChange:[Function,Array],onFiltersChange:[Function,Array],onCheckedRowKeysChange:[Function,Array]}),$e=Qr("n-data-table"),Zr=40,Jr=40;function ir(e){if(e.type==="selection")return e.width===void 0?Zr:sn(e.width);if(e.type==="expand")return e.width===void 0?Jr:sn(e.width);if(!("children"in e))return typeof e.width=="string"?sn(e.width):e.width}function _i(e){var t,n;if(e.type==="selection")return je((t=e.width)!==null&&t!==void 0?t:Zr);if(e.type==="expand")return je((n=e.width)!==null&&n!==void 0?n:Jr);if(!("children"in e))return je(e.width)}function Xe(e){return e.type==="selection"?"__n_selection__":e.type==="expand"?"__n_expand__":e.key}function ar(e){return e&&(typeof e=="object"?Object.assign({},e):e)}function $i(e){return e==="ascend"?1:e==="descend"?-1:0}function ea(e,t,n){return n!==void 0&&(e=Math.min(e,typeof n=="number"?n:Number.parseFloat(n))),t!==void 0&&(e=Math.max(e,typeof t=="number"?t:Number.parseFloat(t))),e}function ta(e,t){if(t!==void 0)return{width:t,minWidth:t,maxWidth:t};const n=_i(e),{minWidth:r,maxWidth:o}=e;return{width:n,minWidth:je(r)||n,maxWidth:je(o)}}function na(e,t,n){return typeof n=="function"?n(e,t):n||""}function cn(e){return e.filterOptionValues!==void 0||e.filterOptionValue===void 0&&e.defaultFilterOptionValues!==void 0}function un(e){return"children"in e?!1:!!e.sorter}function Xr(e){return"children"in e&&e.children.length?!1:!!e.resizable}function lr(e){return"children"in e?!1:!!e.filter&&(!!e.filterOptions||!!e.renderFilterMenu)}function sr(e){if(e){if(e==="descend")return"ascend"}else return"descend";return!1}function ra(e,t){return e.sorter===void 0?null:t===null||t.columnKey!==e.key?{columnKey:e.key,sorter:e.sorter,order:sr(!1)}:Object.assign(Object.assign({},t),{order:sr(t.order)})}function _r(e,t){return t.find(n=>n.columnKey===e.key&&n.order)!==void 0}function oa(e){return typeof e=="string"?e.replace(/,/g,"\\,"):e==null?"":`${e}`.replace(/,/g,"\\,")}function ia(e,t,n,r){const o=e.filter(l=>l.type!=="expand"&&l.type!=="selection"&&l.allowExport!==!1),i=o.map(l=>r?r(l):l.title).join(","),a=t.map(l=>o.map(d=>n?n(l[d.key],l,d):oa(l[d.key])).join(","));return[i,...a].join(`
`)}const aa=pe({name:"DataTableBodyCheckbox",props:{rowKey:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!0},onUpdateChecked:{type:Function,required:!0}},setup(e){const{mergedCheckedRowKeySetRef:t,mergedInderminateRowKeySetRef:n}=Ge($e);return()=>{const{rowKey:r}=e;return m(Qn,{privateInsideTable:!0,disabled:e.disabled,indeterminate:n.value.has(r),checked:t.value.has(r),onUpdateChecked:e.onUpdateChecked})}}}),la=pe({name:"DataTableBodyRadio",props:{rowKey:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!0},onUpdateChecked:{type:Function,required:!0}},setup(e){const{mergedCheckedRowKeySetRef:t,componentId:n}=Ge($e);return()=>{const{rowKey:r}=e;return m(Kr,{name:n,disabled:e.disabled,checked:t.value.has(r),onUpdateChecked:e.onUpdateChecked})}}}),sa=pe({name:"PerformantEllipsis",props:ri,inheritAttrs:!1,setup(e,{attrs:t,slots:n}){const r=ee(!1),o=oi();return ii("-ellipsis",ai,o),{mouseEntered:r,renderTrigger:()=>{const{lineClamp:a}=e,l=o.value;return m("span",Object.assign({},Dn(t,{class:[`${l}-ellipsis`,a!==void 0?li(l):void 0,e.expandTrigger==="click"?si(l,"pointer"):void 0],style:a===void 0?{textOverflow:"ellipsis"}:{"-webkit-line-clamp":a}}),{onMouseenter:()=>{r.value=!0}}),a?n:m("span",null,n))}}},render(){return this.mouseEntered?m(Un,Dn({},this.$attrs,this.$props),this.$slots):this.renderTrigger()}}),da=pe({name:"DataTableCell",props:{clsPrefix:{type:String,required:!0},row:{type:Object,required:!0},index:{type:Number,required:!0},column:{type:Object,required:!0},isSummary:Boolean,mergedTheme:{type:Object,required:!0},renderCell:Function},render(){var e;const{isSummary:t,column:n,row:r,renderCell:o}=this;let i;const{render:a,key:l,ellipsis:d}=n;if(a&&!t?i=a(r,this.index):t?i=(e=r[l])===null||e===void 0?void 0:e.value:i=o?o(Hn(r,l),r,n):Hn(r,l),d)if(typeof d=="object"){const{mergedTheme:s}=this;return n.ellipsisComponent==="performant-ellipsis"?m(sa,Object.assign({},d,{theme:s.peers.Ellipsis,themeOverrides:s.peerOverrides.Ellipsis}),{default:()=>i}):m(Un,Object.assign({},d,{theme:s.peers.Ellipsis,themeOverrides:s.peerOverrides.Ellipsis}),{default:()=>i})}else return m("span",{class:`${this.clsPrefix}-data-table-td__ellipsis`},i);return i}}),dr=pe({name:"DataTableExpandTrigger",props:{clsPrefix:{type:String,required:!0},expanded:Boolean,loading:Boolean,onClick:{type:Function,required:!0},renderExpandIcon:{type:Function},rowData:{type:Object,required:!0}},render(){const{clsPrefix:e}=this;return m("div",{class:[`${e}-data-table-expand-trigger`,this.expanded&&`${e}-data-table-expand-trigger--expanded`],onClick:this.onClick,onMousedown:t=>{t.preventDefault()}},m(di,null,{default:()=>this.loading?m(Wr,{key:"loading",clsPrefix:this.clsPrefix,radius:85,strokeWidth:15,scale:.88}):this.renderExpandIcon?this.renderExpandIcon({expanded:this.expanded,rowData:this.rowData}):m(nt,{clsPrefix:e,key:"base-icon"},{default:()=>m(fi,null)})}))}}),fa=pe({name:"DataTableFilterMenu",props:{column:{type:Object,required:!0},radioGroupName:{type:String,required:!0},multiple:{type:Boolean,required:!0},value:{type:[Array,String,Number],default:null},options:{type:Array,required:!0},onConfirm:{type:Function,required:!0},onClear:{type:Function,required:!0},onChange:{type:Function,required:!0}},setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=mt(e),r=Tn("DataTable",n,t),{mergedClsPrefixRef:o,mergedThemeRef:i,localeRef:a}=Ge($e),l=ee(e.value),d=U(()=>{const{value:A}=l;return Array.isArray(A)?A:null}),s=U(()=>{const{value:A}=l;return cn(e.column)?Array.isArray(A)&&A.length&&A[0]||null:Array.isArray(A)?null:A});function c(A){e.onChange(A)}function u(A){e.multiple&&Array.isArray(A)?l.value=A:cn(e.column)&&!Array.isArray(A)?l.value=[A]:l.value=A}function g(){c(l.value),e.onConfirm()}function p(){e.multiple||cn(e.column)?c([]):c(null),e.onClear()}return{mergedClsPrefix:o,rtlEnabled:r,mergedTheme:i,locale:a,checkboxGroupValue:d,radioGroupValue:s,handleChange:u,handleConfirmClick:g,handleClearClick:p}},render(){const{mergedTheme:e,locale:t,mergedClsPrefix:n}=this;return m("div",{class:[`${n}-data-table-filter-menu`,this.rtlEnabled&&`${n}-data-table-filter-menu--rtl`]},m(Yr,null,{default:()=>{const{checkboxGroupValue:r,handleChange:o}=this;return this.multiple?m(Pi,{value:r,class:`${n}-data-table-filter-menu__group`,onUpdateValue:o},{default:()=>this.options.map(i=>m(Qn,{key:i.value,theme:e.peers.Checkbox,themeOverrides:e.peerOverrides.Checkbox,value:i.value},{default:()=>i.label}))}):m(Ti,{name:this.radioGroupName,class:`${n}-data-table-filter-menu__group`,value:this.radioGroupValue,onUpdateValue:this.handleChange},{default:()=>this.options.map(i=>m(Kr,{key:i.value,value:i.value,theme:e.peers.Radio,themeOverrides:e.peerOverrides.Radio},{default:()=>i.label}))})}}),m("div",{class:`${n}-data-table-filter-menu__action`},m(bn,{size:"tiny",theme:e.peers.Button,themeOverrides:e.peerOverrides.Button,onClick:this.handleClearClick},{default:()=>t.clear}),m(bn,{theme:e.peers.Button,themeOverrides:e.peerOverrides.Button,type:"primary",size:"tiny",onClick:this.handleConfirmClick},{default:()=>t.confirm})))}}),ca=pe({name:"DataTableRenderFilter",props:{render:{type:Function,required:!0},active:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},render(){const{render:e,active:t,show:n}=this;return e({active:t,show:n})}});function ua(e,t,n){const r=Object.assign({},e);return r[t]=n,r}const ha=pe({name:"DataTableFilterButton",props:{column:{type:Object,required:!0},options:{type:Array,default:()=>[]}},setup(e){const{mergedComponentPropsRef:t}=mt(),{mergedThemeRef:n,mergedClsPrefixRef:r,mergedFilterStateRef:o,filterMenuCssVarsRef:i,paginationBehaviorOnFilterRef:a,doUpdatePage:l,doUpdateFilters:d,filterIconPopoverPropsRef:s}=Ge($e),c=ee(!1),u=o,g=U(()=>e.column.filterMultiple!==!1),p=U(()=>{const C=u.value[e.column.key];if(C===void 0){const{value:F}=g;return F?[]:null}return C}),A=U(()=>{const{value:C}=p;return Array.isArray(C)?C.length>0:C!==null}),h=U(()=>{var C,F;return((F=(C=t?.value)===null||C===void 0?void 0:C.DataTable)===null||F===void 0?void 0:F.renderFilter)||e.column.renderFilter});function f(C){const F=ua(u.value,e.column.key,C);d(F,e.column),a.value==="first"&&l(1)}function v(){c.value=!1}function b(){c.value=!1}return{mergedTheme:n,mergedClsPrefix:r,active:A,showPopover:c,mergedRenderFilter:h,filterIconPopoverProps:s,filterMultiple:g,mergedFilterValue:p,filterMenuCssVars:i,handleFilterChange:f,handleFilterMenuConfirm:b,handleFilterMenuCancel:v}},render(){const{mergedTheme:e,mergedClsPrefix:t,handleFilterMenuCancel:n,filterIconPopoverProps:r}=this;return m(Hr,Object.assign({show:this.showPopover,onUpdateShow:o=>this.showPopover=o,trigger:"click",theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,placement:"bottom"},r,{style:{padding:0}}),{trigger:()=>{const{mergedRenderFilter:o}=this;if(o)return m(ca,{"data-data-table-filter":!0,render:o,active:this.active,show:this.showPopover});const{renderFilterIcon:i}=this.column;return m("div",{"data-data-table-filter":!0,class:[`${t}-data-table-filter`,{[`${t}-data-table-filter--active`]:this.active,[`${t}-data-table-filter--show`]:this.showPopover}]},i?i({active:this.active,show:this.showPopover}):m(nt,{clsPrefix:t},{default:()=>m(Wi,null)}))},default:()=>{const{renderFilterMenu:o}=this.column;return o?o({hide:n}):m(fa,{style:this.filterMenuCssVars,radioGroupName:String(this.column.key),multiple:this.filterMultiple,value:this.mergedFilterValue,options:this.options,column:this.column,onChange:this.handleFilterChange,onClear:this.handleFilterMenuCancel,onConfirm:this.handleFilterMenuConfirm})}})}}),ga=pe({name:"ColumnResizeButton",props:{onResizeStart:Function,onResize:Function,onResizeEnd:Function},setup(e){const{mergedClsPrefixRef:t}=Ge($e),n=ee(!1);let r=0;function o(d){return d.clientX}function i(d){var s;d.preventDefault();const c=n.value;r=o(d),n.value=!0,c||(Wn("mousemove",window,a),Wn("mouseup",window,l),(s=e.onResizeStart)===null||s===void 0||s.call(e))}function a(d){var s;(s=e.onResize)===null||s===void 0||s.call(e,o(d)-r)}function l(){var d;n.value=!1,(d=e.onResizeEnd)===null||d===void 0||d.call(e),Wt("mousemove",window,a),Wt("mouseup",window,l)}return ci(()=>{Wt("mousemove",window,a),Wt("mouseup",window,l)}),{mergedClsPrefix:t,active:n,handleMousedown:i}},render(){const{mergedClsPrefix:e}=this;return m("span",{"data-data-table-resizable":!0,class:[`${e}-data-table-resize-button`,this.active&&`${e}-data-table-resize-button--active`],onMousedown:this.handleMousedown})}}),Aa=pe({name:"DataTableRenderSorter",props:{render:{type:Function,required:!0},order:{type:[String,Boolean],default:!1}},render(){const{render:e,order:t}=this;return e({order:t})}}),pa=pe({name:"SortIcon",props:{column:{type:Object,required:!0}},setup(e){const{mergedComponentPropsRef:t}=mt(),{mergedSortStateRef:n,mergedClsPrefixRef:r}=Ge($e),o=U(()=>n.value.find(d=>d.columnKey===e.column.key)),i=U(()=>o.value!==void 0),a=U(()=>{const{value:d}=o;return d&&i.value?d.order:!1}),l=U(()=>{var d,s;return((s=(d=t?.value)===null||d===void 0?void 0:d.DataTable)===null||s===void 0?void 0:s.renderSorter)||e.column.renderSorter});return{mergedClsPrefix:r,active:i,mergedSortOrder:a,mergedRenderSorter:l}},render(){const{mergedRenderSorter:e,mergedSortOrder:t,mergedClsPrefix:n}=this,{renderSorterIcon:r}=this.column;return e?m(Aa,{render:e,order:t}):m("span",{class:[`${n}-data-table-sorter`,t==="ascend"&&`${n}-data-table-sorter--asc`,t==="descend"&&`${n}-data-table-sorter--desc`]},r?r({order:t}):m(nt,{clsPrefix:n},{default:()=>m(Li,null)}))}}),$r="_n_all__",eo="_n_none__";function va(e,t,n,r){return e?o=>{for(const i of e)switch(o){case $r:n(!0);return;case eo:r(!0);return;default:if(typeof i=="object"&&i.key===o){i.onSelect(t.value);return}}}:()=>{}}function ma(e,t){return e?e.map(n=>{switch(n){case"all":return{label:t.checkTableAll,key:$r};case"none":return{label:t.uncheckTableAll,key:eo};default:return n}}):[]}const wa=pe({name:"DataTableSelectionMenu",props:{clsPrefix:{type:String,required:!0}},setup(e){const{props:t,localeRef:n,checkOptionsRef:r,rawPaginatedDataRef:o,doCheckAll:i,doUncheckAll:a}=Ge($e),l=U(()=>va(r.value,o,i,a)),d=U(()=>ma(r.value,n.value));return()=>{var s,c,u,g;const{clsPrefix:p}=e;return m(ui,{theme:(c=(s=t.theme)===null||s===void 0?void 0:s.peers)===null||c===void 0?void 0:c.Dropdown,themeOverrides:(g=(u=t.themeOverrides)===null||u===void 0?void 0:u.peers)===null||g===void 0?void 0:g.Dropdown,options:d.value,onSelect:l.value},{default:()=>m(nt,{clsPrefix:p,class:`${p}-data-table-check-extra`},{default:()=>m(Ui,null)})})}}});function hn(e){return typeof e.title=="function"?e.title(e):e.title}const ba=pe({props:{clsPrefix:{type:String,required:!0},id:{type:String,required:!0},cols:{type:Array,required:!0},width:String},render(){const{clsPrefix:e,id:t,cols:n,width:r}=this;return m("table",{style:{tableLayout:"fixed",width:r},class:`${e}-data-table-table`},m("colgroup",null,n.map(o=>m("col",{key:o.key,style:o.style}))),m("thead",{"data-n-id":t,class:`${e}-data-table-thead`},this.$slots))}}),to=pe({name:"DataTableHeader",props:{discrete:{type:Boolean,default:!0}},setup(){const{mergedClsPrefixRef:e,scrollXRef:t,fixedColumnLeftMapRef:n,fixedColumnRightMapRef:r,mergedCurrentPageRef:o,allRowsCheckedRef:i,someRowsCheckedRef:a,rowsRef:l,colsRef:d,mergedThemeRef:s,checkOptionsRef:c,mergedSortStateRef:u,componentId:g,mergedTableLayoutRef:p,headerCheckboxDisabledRef:A,virtualScrollHeaderRef:h,headerHeightRef:f,onUnstableColumnResize:v,doUpdateResizableWidth:b,handleTableHeaderScroll:C,deriveNextSorter:F,doUncheckAll:R,doCheckAll:x}=Ge($e),P=ee(),j=ee({});function B(k){const O=j.value[k];return O?.getBoundingClientRect().width}function I(){i.value?R():x()}function H(k,O){if(Tt(k,"dataTableFilter")||Tt(k,"dataTableResizable")||!un(O))return;const te=u.value.find(oe=>oe.columnKey===O.key)||null,J=ra(O,te);F(J)}const E=new Map;function M(k){E.set(k.key,B(k.key))}function T(k,O){const te=E.get(k.key);if(te===void 0)return;const J=te+O,oe=ea(J,k.minWidth,k.maxWidth);v(J,oe,k,B),b(k,oe)}return{cellElsRef:j,componentId:g,mergedSortState:u,mergedClsPrefix:e,scrollX:t,fixedColumnLeftMap:n,fixedColumnRightMap:r,currentPage:o,allRowsChecked:i,someRowsChecked:a,rows:l,cols:d,mergedTheme:s,checkOptions:c,mergedTableLayout:p,headerCheckboxDisabled:A,headerHeight:f,virtualScrollHeader:h,virtualListRef:P,handleCheckboxUpdateChecked:I,handleColHeaderClick:H,handleTableHeaderScroll:C,handleColumnResizeStart:M,handleColumnResize:T}},render(){const{cellElsRef:e,mergedClsPrefix:t,fixedColumnLeftMap:n,fixedColumnRightMap:r,currentPage:o,allRowsChecked:i,someRowsChecked:a,rows:l,cols:d,mergedTheme:s,checkOptions:c,componentId:u,discrete:g,mergedTableLayout:p,headerCheckboxDisabled:A,mergedSortState:h,virtualScrollHeader:f,handleColHeaderClick:v,handleCheckboxUpdateChecked:b,handleColumnResizeStart:C,handleColumnResize:F}=this,R=(B,I,H)=>B.map(({column:E,colIndex:M,colSpan:T,rowSpan:k,isLast:O})=>{var te,J;const oe=Xe(E),{ellipsis:_}=E,S=()=>E.type==="selection"?E.multiple!==!1?m(Mt,null,m(Qn,{key:o,privateInsideTable:!0,checked:i,indeterminate:a,disabled:A,onUpdateChecked:b}),c?m(wa,{clsPrefix:t}):null):null:m(Mt,null,m("div",{class:`${t}-data-table-th__title-wrapper`},m("div",{class:`${t}-data-table-th__title`},_===!0||_&&!_.tooltip?m("div",{class:`${t}-data-table-th__ellipsis`},hn(E)):_&&typeof _=="object"?m(Un,Object.assign({},_,{theme:s.peers.Ellipsis,themeOverrides:s.peerOverrides.Ellipsis}),{default:()=>hn(E)}):hn(E)),un(E)?m(pa,{column:E}):null),lr(E)?m(ha,{column:E,options:E.filterOptions}):null,Xr(E)?m(ga,{onResizeStart:()=>{C(E)},onResize:K=>{F(E,K)}}):null),Q=oe in n,q=oe in r,N=I&&!E.fixed?"div":"th";return m(N,{ref:K=>e[oe]=K,key:oe,style:[I&&!E.fixed?{position:"absolute",left:Ve(I(M)),top:0,bottom:0}:{left:Ve((te=n[oe])===null||te===void 0?void 0:te.start),right:Ve((J=r[oe])===null||J===void 0?void 0:J.start)},{width:Ve(E.width),textAlign:E.titleAlign||E.align,height:H}],colspan:T,rowspan:k,"data-col-key":oe,class:[`${t}-data-table-th`,(Q||q)&&`${t}-data-table-th--fixed-${Q?"left":"right"}`,{[`${t}-data-table-th--sorting`]:_r(E,h),[`${t}-data-table-th--filterable`]:lr(E),[`${t}-data-table-th--sortable`]:un(E),[`${t}-data-table-th--selection`]:E.type==="selection",[`${t}-data-table-th--last`]:O},E.className],onClick:E.type!=="selection"&&E.type!=="expand"&&!("children"in E)?K=>{v(K,E)}:void 0},S())});if(f){const{headerHeight:B}=this;let I=0,H=0;return d.forEach(E=>{E.column.fixed==="left"?I++:E.column.fixed==="right"&&H++}),m(qr,{ref:"virtualListRef",class:`${t}-data-table-base-table-header`,style:{height:Ve(B)},onScroll:this.handleTableHeaderScroll,columns:d,itemSize:B,showScrollbar:!1,items:[{}],itemResizable:!1,visibleItemsTag:ba,visibleItemsProps:{clsPrefix:t,id:u,cols:d,width:je(this.scrollX)},renderItemWithCols:({startColIndex:E,endColIndex:M,getLeft:T})=>{const k=d.map((te,J)=>({column:te.column,isLast:J===d.length-1,colIndex:te.index,colSpan:1,rowSpan:1})).filter(({column:te},J)=>!!(E<=J&&J<=M||te.fixed)),O=R(k,T,Ve(B));return O.splice(I,0,m("th",{colspan:d.length-I-H,style:{pointerEvents:"none",visibility:"hidden",height:0}})),m("tr",{style:{position:"relative"}},O)}},{default:({renderedItemWithCols:E})=>E})}const x=m("thead",{class:`${t}-data-table-thead`,"data-n-id":u},l.map(B=>m("tr",{class:`${t}-data-table-tr`},R(B,null,void 0))));if(!g)return x;const{handleTableHeaderScroll:P,scrollX:j}=this;return m("div",{class:`${t}-data-table-base-table-header`,onScroll:P},m("table",{class:`${t}-data-table-table`,style:{minWidth:je(j),tableLayout:p}},m("colgroup",null,d.map(B=>m("col",{key:B.key,style:B.style}))),x))}});function ya(e,t){const n=[];function r(o,i){o.forEach(a=>{a.children&&t.has(a.key)?(n.push({tmNode:a,striped:!1,key:a.key,index:i}),r(a.children,i)):n.push({key:a.key,tmNode:a,striped:!1,index:i})})}return e.forEach(o=>{n.push(o);const{children:i}=o.tmNode;i&&t.has(o.key)&&r(i,o.index)}),n}const Ca=pe({props:{clsPrefix:{type:String,required:!0},id:{type:String,required:!0},cols:{type:Array,required:!0},onMouseenter:Function,onMouseleave:Function},render(){const{clsPrefix:e,id:t,cols:n,onMouseenter:r,onMouseleave:o}=this;return m("table",{style:{tableLayout:"fixed"},class:`${e}-data-table-table`,onMouseenter:r,onMouseleave:o},m("colgroup",null,n.map(i=>m("col",{key:i.key,style:i.style}))),m("tbody",{"data-n-id":t,class:`${e}-data-table-tbody`},this.$slots))}}),xa=pe({name:"DataTableBody",props:{onResize:Function,showHeader:Boolean,flexHeight:Boolean,bodyStyle:Object},setup(e){const{slots:t,bodyWidthRef:n,mergedExpandedRowKeysRef:r,mergedClsPrefixRef:o,mergedThemeRef:i,scrollXRef:a,colsRef:l,paginatedDataRef:d,rawPaginatedDataRef:s,fixedColumnLeftMapRef:c,fixedColumnRightMapRef:u,mergedCurrentPageRef:g,rowClassNameRef:p,leftActiveFixedColKeyRef:A,leftActiveFixedChildrenColKeysRef:h,rightActiveFixedColKeyRef:f,rightActiveFixedChildrenColKeysRef:v,renderExpandRef:b,hoverKeyRef:C,summaryRef:F,mergedSortStateRef:R,virtualScrollRef:x,virtualScrollXRef:P,heightForRowRef:j,minRowHeightRef:B,componentId:I,mergedTableLayoutRef:H,childTriggerColIndexRef:E,indentRef:M,rowPropsRef:T,maxHeightRef:k,stripedRef:O,loadingRef:te,onLoadRef:J,loadingKeySetRef:oe,expandableRef:_,stickyExpandedRowsRef:S,renderExpandIconRef:Q,summaryPlacementRef:q,treeMateRef:N,scrollbarPropsRef:K,setHeaderScrollLeft:de,doUpdateExpandedRowKeys:ae,handleTableBodyScroll:ne,doCheck:w,doUncheck:Y,renderCell:fe}=Ge($e),le=Ge(hi),Re=ee(null),Oe=ee(null),Be=ee(null),Se=At(()=>d.value.length===0),Le=At(()=>e.showHeader||!Se.value),Ce=At(()=>e.showHeader||Se.value);let V="";const re=U(()=>new Set(r.value));function me(W){var X;return(X=N.value.getNode(W))===null||X===void 0?void 0:X.rawNode}function we(W,X,Z){const G=me(W.key);if(!G){Yn("data-table",`fail to get row data with key ${W.key}`);return}if(Z){const ue=d.value.findIndex(he=>he.key===V);if(ue!==-1){const he=d.value.findIndex(Ke=>Ke.key===W.key),ve=Math.min(ue,he),Qe=Math.max(ue,he),Ne=[];d.value.slice(ve,Qe+1).forEach(Ke=>{Ke.disabled||Ne.push(Ke.key)}),X?w(Ne,!1,G):Y(Ne,G),V=W.key;return}}X?w(W.key,!1,G):Y(W.key,G),V=W.key}function We(W){const X=me(W.key);if(!X){Yn("data-table",`fail to get row data with key ${W.key}`);return}w(W.key,!0,X)}function Ze(){if(!Le.value){const{value:X}=Be;return X||null}if(x.value)return ke();const{value:W}=Re;return W?W.containerRef:null}function Ye(W,X){var Z;if(oe.value.has(W))return;const{value:G}=r,ue=G.indexOf(W),he=Array.from(G);~ue?(he.splice(ue,1),ae(he)):X&&!X.isLeaf&&!X.shallowLoaded?(oe.value.add(W),(Z=J.value)===null||Z===void 0||Z.call(J,X.rawNode).then(()=>{const{value:ve}=r,Qe=Array.from(ve);~Qe.indexOf(W)||Qe.push(W),ae(Qe)}).finally(()=>{oe.value.delete(W)})):(he.push(W),ae(he))}function Ue(){C.value=null}function ke(){const{value:W}=Oe;return W?.listElRef||null}function dt(){const{value:W}=Oe;return W?.itemsElRef||null}function ft(W){var X;ne(W),(X=Re.value)===null||X===void 0||X.sync()}function De(W){var X;const{onResize:Z}=e;Z&&Z(W),(X=Re.value)===null||X===void 0||X.sync()}const Te={getScrollContainer:Ze,scrollTo(W,X){var Z,G;x.value?(Z=Oe.value)===null||Z===void 0||Z.scrollTo(W,X):(G=Re.value)===null||G===void 0||G.scrollTo(W,X)}},et=se([({props:W})=>{const X=G=>G===null?null:se(`[data-n-id="${W.componentId}"] [data-col-key="${G}"]::after`,{boxShadow:"var(--n-box-shadow-after)"}),Z=G=>G===null?null:se(`[data-n-id="${W.componentId}"] [data-col-key="${G}"]::before`,{boxShadow:"var(--n-box-shadow-before)"});return se([X(W.leftActiveFixedColKey),Z(W.rightActiveFixedColKey),W.leftActiveFixedChildrenColKeys.map(G=>X(G)),W.rightActiveFixedChildrenColKeys.map(G=>Z(G))])}]);let Ee=!1;return Lt(()=>{const{value:W}=A,{value:X}=h,{value:Z}=f,{value:G}=v;if(!Ee&&W===null&&Z===null)return;const ue={leftActiveFixedColKey:W,leftActiveFixedChildrenColKeys:X,rightActiveFixedColKey:Z,rightActiveFixedChildrenColKeys:G,componentId:I};et.mount({id:`n-${I}`,force:!0,props:ue,anchorMetaName:gi,parent:le?.styleMountTarget}),Ee=!0}),Ai(()=>{et.unmount({id:`n-${I}`,parent:le?.styleMountTarget})}),Object.assign({bodyWidth:n,summaryPlacement:q,dataTableSlots:t,componentId:I,scrollbarInstRef:Re,virtualListRef:Oe,emptyElRef:Be,summary:F,mergedClsPrefix:o,mergedTheme:i,scrollX:a,cols:l,loading:te,bodyShowHeaderOnly:Ce,shouldDisplaySomeTablePart:Le,empty:Se,paginatedDataAndInfo:U(()=>{const{value:W}=O;let X=!1;return{data:d.value.map(W?(G,ue)=>(G.isLeaf||(X=!0),{tmNode:G,key:G.key,striped:ue%2===1,index:ue}):(G,ue)=>(G.isLeaf||(X=!0),{tmNode:G,key:G.key,striped:!1,index:ue})),hasChildren:X}}),rawPaginatedData:s,fixedColumnLeftMap:c,fixedColumnRightMap:u,currentPage:g,rowClassName:p,renderExpand:b,mergedExpandedRowKeySet:re,hoverKey:C,mergedSortState:R,virtualScroll:x,virtualScrollX:P,heightForRow:j,minRowHeight:B,mergedTableLayout:H,childTriggerColIndex:E,indent:M,rowProps:T,maxHeight:k,loadingKeySet:oe,expandable:_,stickyExpandedRows:S,renderExpandIcon:Q,scrollbarProps:K,setHeaderScrollLeft:de,handleVirtualListScroll:ft,handleVirtualListResize:De,handleMouseleaveTable:Ue,virtualListContainer:ke,virtualListContent:dt,handleTableBodyScroll:ne,handleCheckboxUpdateChecked:we,handleRadioUpdateChecked:We,handleUpdateExpanded:Ye,renderCell:fe},Te)},render(){const{mergedTheme:e,scrollX:t,mergedClsPrefix:n,virtualScroll:r,maxHeight:o,mergedTableLayout:i,flexHeight:a,loadingKeySet:l,onResize:d,setHeaderScrollLeft:s}=this,c=t!==void 0||o!==void 0||a,u=!c&&i==="auto",g=t!==void 0||u,p={minWidth:je(t)||"100%"};t&&(p.width="100%");const A=m(Yr,Object.assign({},this.scrollbarProps,{ref:"scrollbarInstRef",scrollable:c||u,class:`${n}-data-table-base-table-body`,style:this.empty?void 0:this.bodyStyle,theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,contentStyle:p,container:r?this.virtualListContainer:void 0,content:r?this.virtualListContent:void 0,horizontalRailStyle:{zIndex:3},verticalRailStyle:{zIndex:3},xScrollable:g,onScroll:r?void 0:this.handleTableBodyScroll,internalOnUpdateScrollLeft:s,onResize:d}),{default:()=>{const h={},f={},{cols:v,paginatedDataAndInfo:b,mergedTheme:C,fixedColumnLeftMap:F,fixedColumnRightMap:R,currentPage:x,rowClassName:P,mergedSortState:j,mergedExpandedRowKeySet:B,stickyExpandedRows:I,componentId:H,childTriggerColIndex:E,expandable:M,rowProps:T,handleMouseleaveTable:k,renderExpand:O,summary:te,handleCheckboxUpdateChecked:J,handleRadioUpdateChecked:oe,handleUpdateExpanded:_,heightForRow:S,minRowHeight:Q,virtualScrollX:q}=this,{length:N}=v;let K;const{data:de,hasChildren:ae}=b,ne=ae?ya(de,B):de;if(te){const V=te(this.rawPaginatedData);if(Array.isArray(V)){const re=V.map((me,we)=>({isSummaryRow:!0,key:`__n_summary__${we}`,tmNode:{rawNode:me,disabled:!0},index:-1}));K=this.summaryPlacement==="top"?[...re,...ne]:[...ne,...re]}else{const re={isSummaryRow:!0,key:"__n_summary__",tmNode:{rawNode:V,disabled:!0},index:-1};K=this.summaryPlacement==="top"?[re,...ne]:[...ne,re]}}else K=ne;const w=ae?{width:Ve(this.indent)}:void 0,Y=[];K.forEach(V=>{O&&B.has(V.key)&&(!M||M(V.tmNode.rawNode))?Y.push(V,{isExpandedRow:!0,key:`${V.key}-expand`,tmNode:V.tmNode,index:V.index}):Y.push(V)});const{length:fe}=Y,le={};de.forEach(({tmNode:V},re)=>{le[re]=V.key});const Re=I?this.bodyWidth:null,Oe=Re===null?void 0:`${Re}px`,Be=this.virtualScrollX?"div":"td";let Se=0,Le=0;q&&v.forEach(V=>{V.column.fixed==="left"?Se++:V.column.fixed==="right"&&Le++});const Ce=({rowInfo:V,displayedRowIndex:re,isVirtual:me,isVirtualX:we,startColIndex:We,endColIndex:Ze,getLeft:Ye})=>{const{index:Ue}=V;if("isExpandedRow"in V){const{tmNode:{key:he,rawNode:ve}}=V;return m("tr",{class:`${n}-data-table-tr ${n}-data-table-tr--expanded`,key:`${he}__expand`},m("td",{class:[`${n}-data-table-td`,`${n}-data-table-td--last-col`,re+1===fe&&`${n}-data-table-td--last-row`],colspan:N},I?m("div",{class:`${n}-data-table-expand`,style:{width:Oe}},O(ve,Ue)):O(ve,Ue)))}const ke="isSummaryRow"in V,dt=!ke&&V.striped,{tmNode:ft,key:De}=V,{rawNode:Te}=ft,et=B.has(De),Ee=T?T(Te,Ue):void 0,W=typeof P=="string"?P:na(Te,Ue,P),X=we?v.filter((he,ve)=>!!(We<=ve&&ve<=Ze||he.column.fixed)):v,Z=we?Ve(S?.(Te,Ue)||Q):void 0,G=X.map(he=>{var ve,Qe,Ne,Ke,ct;const Me=he.index;if(re in h){const ze=h[re],qe=ze.indexOf(Me);if(~qe)return ze.splice(qe,1),null}const{column:ge}=he,tt=Xe(he),{rowSpan:bt,colSpan:yt}=ge,ot=ke?((ve=V.tmNode.rawNode[tt])===null||ve===void 0?void 0:ve.colSpan)||1:yt?yt(Te,Ue):1,it=ke?((Qe=V.tmNode.rawNode[tt])===null||Qe===void 0?void 0:Qe.rowSpan)||1:bt?bt(Te,Ue):1,Et=Me+ot===N,an=re+it===fe,Ct=it>1;if(Ct&&(f[re]={[Me]:[]}),ot>1||Ct)for(let ze=re;ze<re+it;++ze){Ct&&f[re][Me].push(le[ze]);for(let qe=Me;qe<Me+ot;++qe)ze===re&&qe===Me||(ze in h?h[ze].push(qe):h[ze]=[qe])}const Dt=Ct?this.hoverKey:null,{cellProps:St}=ge,rt=St?.(Te,Ue),Ht={"--indent-offset":""},ln=ge.fixed?"td":Be;return m(ln,Object.assign({},rt,{key:tt,style:[{textAlign:ge.align||void 0,width:Ve(ge.width)},we&&{height:Z},we&&!ge.fixed?{position:"absolute",left:Ve(Ye(Me)),top:0,bottom:0}:{left:Ve((Ne=F[tt])===null||Ne===void 0?void 0:Ne.start),right:Ve((Ke=R[tt])===null||Ke===void 0?void 0:Ke.start)},Ht,rt?.style||""],colspan:ot,rowspan:me?void 0:it,"data-col-key":tt,class:[`${n}-data-table-td`,ge.className,rt?.class,ke&&`${n}-data-table-td--summary`,Dt!==null&&f[re][Me].includes(Dt)&&`${n}-data-table-td--hover`,_r(ge,j)&&`${n}-data-table-td--sorting`,ge.fixed&&`${n}-data-table-td--fixed-${ge.fixed}`,ge.align&&`${n}-data-table-td--${ge.align}-align`,ge.type==="selection"&&`${n}-data-table-td--selection`,ge.type==="expand"&&`${n}-data-table-td--expand`,Et&&`${n}-data-table-td--last-col`,an&&`${n}-data-table-td--last-row`]}),ae&&Me===E?[vi(Ht["--indent-offset"]=ke?0:V.tmNode.level,m("div",{class:`${n}-data-table-indent`,style:w})),ke||V.tmNode.isLeaf?m("div",{class:`${n}-data-table-expand-placeholder`}):m(dr,{class:`${n}-data-table-expand-trigger`,clsPrefix:n,expanded:et,rowData:Te,renderExpandIcon:this.renderExpandIcon,loading:l.has(V.key),onClick:()=>{_(De,V.tmNode)}})]:null,ge.type==="selection"?ke?null:ge.multiple===!1?m(la,{key:x,rowKey:De,disabled:V.tmNode.disabled,onUpdateChecked:()=>{oe(V.tmNode)}}):m(aa,{key:x,rowKey:De,disabled:V.tmNode.disabled,onUpdateChecked:(ze,qe)=>{J(V.tmNode,ze,qe.shiftKey)}}):ge.type==="expand"?ke?null:!ge.expandable||!((ct=ge.expandable)===null||ct===void 0)&&ct.call(ge,Te)?m(dr,{clsPrefix:n,rowData:Te,expanded:et,renderExpandIcon:this.renderExpandIcon,onClick:()=>{_(De,null)}}):null:m(da,{clsPrefix:n,index:Ue,row:Te,column:ge,isSummary:ke,mergedTheme:C,renderCell:this.renderCell}))});return we&&Se&&Le&&G.splice(Se,0,m("td",{colspan:v.length-Se-Le,style:{pointerEvents:"none",visibility:"hidden",height:0}})),m("tr",Object.assign({},Ee,{onMouseenter:he=>{var ve;this.hoverKey=De,(ve=Ee?.onMouseenter)===null||ve===void 0||ve.call(Ee,he)},key:De,class:[`${n}-data-table-tr`,ke&&`${n}-data-table-tr--summary`,dt&&`${n}-data-table-tr--striped`,et&&`${n}-data-table-tr--expanded`,W,Ee?.class],style:[Ee?.style,we&&{height:Z}]}),G)};return r?m(qr,{ref:"virtualListRef",items:Y,itemSize:this.minRowHeight,visibleItemsTag:Ca,visibleItemsProps:{clsPrefix:n,id:H,cols:v,onMouseleave:k},showScrollbar:!1,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemsStyle:p,itemResizable:!q,columns:v,renderItemWithCols:q?({itemIndex:V,item:re,startColIndex:me,endColIndex:we,getLeft:We})=>Ce({displayedRowIndex:V,isVirtual:!0,isVirtualX:!0,rowInfo:re,startColIndex:me,endColIndex:we,getLeft:We}):void 0},{default:({item:V,index:re,renderedItemWithCols:me})=>me||Ce({rowInfo:V,displayedRowIndex:re,isVirtual:!0,isVirtualX:!1,startColIndex:0,endColIndex:0,getLeft(we){return 0}})}):m("table",{class:`${n}-data-table-table`,onMouseleave:k,style:{tableLayout:this.mergedTableLayout}},m("colgroup",null,v.map(V=>m("col",{key:V.key,style:V.style}))),this.showHeader?m(to,{discrete:!1}):null,this.empty?null:m("tbody",{"data-n-id":H,class:`${n}-data-table-tbody`},Y.map((V,re)=>Ce({rowInfo:V,displayedRowIndex:re,isVirtual:!1,isVirtualX:!1,startColIndex:-1,endColIndex:-1,getLeft(me){return-1}}))))}});if(this.empty){const h=()=>m("div",{class:[`${n}-data-table-empty`,this.loading&&`${n}-data-table-empty--hide`],style:this.bodyStyle,ref:"emptyElRef"},Ln(this.dataTableSlots.empty,()=>[m(Qi,{theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})]));return this.shouldDisplaySomeTablePart?m(Mt,null,A,h()):m(pi,{onResize:this.onResize},{default:h})}return A}}),Ia=pe({name:"MainTable",setup(){const{mergedClsPrefixRef:e,rightFixedColumnsRef:t,leftFixedColumnsRef:n,bodyWidthRef:r,maxHeightRef:o,minHeightRef:i,flexHeightRef:a,virtualScrollHeaderRef:l,syncScrollState:d}=Ge($e),s=ee(null),c=ee(null),u=ee(null),g=ee(!(n.value.length||t.value.length)),p=U(()=>({maxHeight:je(o.value),minHeight:je(i.value)}));function A(b){r.value=b.contentRect.width,d(),g.value||(g.value=!0)}function h(){var b;const{value:C}=s;return C?l.value?((b=C.virtualListRef)===null||b===void 0?void 0:b.listElRef)||null:C.$el:null}function f(){const{value:b}=c;return b?b.getScrollContainer():null}const v={getBodyElement:f,getHeaderElement:h,scrollTo(b,C){var F;(F=c.value)===null||F===void 0||F.scrollTo(b,C)}};return Lt(()=>{const{value:b}=u;if(!b)return;const C=`${e.value}-data-table-base-table--transition-disabled`;g.value?setTimeout(()=>{b.classList.remove(C)},0):b.classList.add(C)}),Object.assign({maxHeight:o,mergedClsPrefix:e,selfElRef:u,headerInstRef:s,bodyInstRef:c,bodyStyle:p,flexHeight:a,handleBodyResize:A},v)},render(){const{mergedClsPrefix:e,maxHeight:t,flexHeight:n}=this,r=t===void 0&&!n;return m("div",{class:`${e}-data-table-base-table`,ref:"selfElRef"},r?null:m(to,{ref:"headerInstRef"}),m(xa,{ref:"bodyInstRef",bodyStyle:this.bodyStyle,showHeader:r,flexHeight:n,onResize:this.handleBodyResize}))}}),fr=Ba(),Ra=se([D("data-table",`
 width: 100%;
 font-size: var(--n-font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 --n-merged-th-color-sorting: var(--n-th-color-sorting);
 --n-merged-td-color-hover: var(--n-td-color-hover);
 --n-merged-td-color-sorting: var(--n-td-color-sorting);
 --n-merged-td-color-striped: var(--n-td-color-striped);
 `,[D("data-table-wrapper",`
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `),$("flex-height",[se(">",[D("data-table-wrapper",[se(">",[D("data-table-base-table",`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `,[se(">",[D("data-table-base-table-body","flex-basis: 0;",[se("&:last-child","flex-grow: 1;")])])])])])])]),se(">",[D("data-table-loading-wrapper",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[mi({originalTransform:"translateX(-50%) translateY(-50%)"})])]),D("data-table-expand-placeholder",`
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `),D("data-table-indent",`
 display: inline-block;
 height: 1px;
 `),D("data-table-expand-trigger",`
 display: inline-flex;
 margin-right: 8px;
 cursor: pointer;
 font-size: 16px;
 vertical-align: -0.2em;
 position: relative;
 width: 16px;
 height: 16px;
 color: var(--n-td-text-color);
 transition: color .3s var(--n-bezier);
 `,[$("expanded",[D("icon","transform: rotate(90deg);",[kt({originalTransform:"rotate(90deg)"})]),D("base-icon","transform: rotate(90deg);",[kt({originalTransform:"rotate(90deg)"})])]),D("base-loading",`
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[kt()]),D("icon",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[kt()]),D("base-icon",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[kt()])]),D("data-table-thead",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `),D("data-table-tr",`
 position: relative;
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `,[D("data-table-expand",`
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `),$("striped","background-color: var(--n-merged-td-color-striped);",[D("data-table-td","background-color: var(--n-merged-td-color-striped);")]),wn("summary",[se("&:hover","background-color: var(--n-merged-td-color-hover);",[se(">",[D("data-table-td","background-color: var(--n-merged-td-color-hover);")])])])]),D("data-table-th",`
 padding: var(--n-th-padding);
 position: relative;
 text-align: start;
 box-sizing: border-box;
 background-color: var(--n-merged-th-color);
 border-color: var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 color: var(--n-th-text-color);
 transition:
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 font-weight: var(--n-th-font-weight);
 `,[$("filterable",`
 padding-right: 36px;
 `,[$("sortable",`
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]),fr,$("selection",`
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `),at("title-wrapper",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `,[at("title",`
 flex: 1;
 min-width: 0;
 `)]),at("ellipsis",`
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `),$("hover",`
 background-color: var(--n-merged-th-color-hover);
 `),$("sorting",`
 background-color: var(--n-merged-th-color-sorting);
 `),$("sortable",`
 cursor: pointer;
 `,[at("ellipsis",`
 max-width: calc(100% - 18px);
 `),se("&:hover",`
 background-color: var(--n-merged-th-color-hover);
 `)]),D("data-table-sorter",`
 height: var(--n-sorter-size);
 width: var(--n-sorter-size);
 margin-left: 4px;
 position: relative;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 vertical-align: -0.2em;
 color: var(--n-th-icon-color);
 transition: color .3s var(--n-bezier);
 `,[D("base-icon","transition: transform .3s var(--n-bezier)"),$("desc",[D("base-icon",`
 transform: rotate(0deg);
 `)]),$("asc",[D("base-icon",`
 transform: rotate(-180deg);
 `)]),$("asc, desc",`
 color: var(--n-th-icon-color-active);
 `)]),D("data-table-resize-button",`
 width: var(--n-resizable-container-size);
 position: absolute;
 top: 0;
 right: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 cursor: col-resize;
 user-select: none;
 `,[se("&::after",`
 width: var(--n-resizable-size);
 height: 50%;
 position: absolute;
 top: 50%;
 left: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 background-color: var(--n-merged-border-color);
 transform: translateY(-50%);
 transition: background-color .3s var(--n-bezier);
 z-index: 1;
 content: '';
 `),$("active",[se("&::after",` 
 background-color: var(--n-th-icon-color-active);
 `)]),se("&:hover::after",`
 background-color: var(--n-th-icon-color-active);
 `)]),D("data-table-filter",`
 position: absolute;
 z-index: auto;
 right: 0;
 width: 36px;
 top: 0;
 bottom: 0;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: var(--n-filter-size);
 color: var(--n-th-icon-color);
 `,[se("&:hover",`
 background-color: var(--n-th-button-color-hover);
 `),$("show",`
 background-color: var(--n-th-button-color-hover);
 `),$("active",`
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]),D("data-table-td",`
 padding: var(--n-td-padding);
 text-align: start;
 box-sizing: border-box;
 border: none;
 background-color: var(--n-merged-td-color);
 color: var(--n-td-text-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[$("expand",[D("data-table-expand-trigger",`
 margin-right: 0;
 `)]),$("last-row",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `,[se("&::after",`
 bottom: 0 !important;
 `),se("&::before",`
 bottom: 0 !important;
 `)]),$("summary",`
 background-color: var(--n-merged-th-color);
 `),$("hover",`
 background-color: var(--n-merged-td-color-hover);
 `),$("sorting",`
 background-color: var(--n-merged-td-color-sorting);
 `),at("ellipsis",`
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `),$("selection, expand",`
 text-align: center;
 padding: 0;
 line-height: 0;
 `),fr]),D("data-table-empty",`
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `,[$("hide",`
 opacity: 0;
 `)]),at("pagination",`
 margin: var(--n-pagination-margin);
 display: flex;
 justify-content: flex-end;
 `),D("data-table-wrapper",`
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `),$("loading",[D("data-table-wrapper",`
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]),$("single-column",[D("data-table-td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `,[se("&::after, &::before",`
 bottom: 0 !important;
 `)])]),wn("single-line",[D("data-table-th",`
 border-right: 1px solid var(--n-merged-border-color);
 `,[$("last",`
 border-right: 0 solid var(--n-merged-border-color);
 `)]),D("data-table-td",`
 border-right: 1px solid var(--n-merged-border-color);
 `,[$("last-col",`
 border-right: 0 solid var(--n-merged-border-color);
 `)])]),$("bordered",[D("data-table-wrapper",`
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]),D("data-table-base-table",[$("transition-disabled",[D("data-table-th",[se("&::after, &::before","transition: none;")]),D("data-table-td",[se("&::after, &::before","transition: none;")])])]),$("bottom-bordered",[D("data-table-td",[$("last-row",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),D("data-table-table",`
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `),D("data-table-base-table-header",`
 border-top-left-radius: calc(var(--n-border-radius) - 1px);
 border-top-right-radius: calc(var(--n-border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--n-bezier);
 scrollbar-width: none;
 `,[se("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 display: none;
 width: 0;
 height: 0;
 `)]),D("data-table-check-extra",`
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]),D("data-table-filter-menu",[D("scrollbar",`
 max-height: 240px;
 `),at("group",`
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `,[D("checkbox",`
 margin-bottom: 12px;
 margin-right: 0;
 `),D("radio",`
 margin-bottom: 12px;
 margin-right: 0;
 `)]),at("action",`
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `,[D("button",[se("&:not(:last-child)",`
 margin: var(--n-action-button-margin);
 `),se("&:last-child",`
 margin-right: 0;
 `)])]),D("divider",`
 margin: 0 !important;
 `)]),wi(D("data-table",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)),bi(D("data-table",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);function Ba(){return[$("fixed-left",`
 left: 0;
 position: sticky;
 z-index: 2;
 `,[se("&::after",`
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 right: -36px;
 `)]),$("fixed-right",`
 right: 0;
 position: sticky;
 z-index: 1;
 `,[se("&::before",`
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 left: -36px;
 `)])]}function Ea(e,t){const{paginatedDataRef:n,treeMateRef:r,selectionColumnRef:o}=t,i=ee(e.defaultCheckedRowKeys),a=U(()=>{var R;const{checkedRowKeys:x}=e,P=x===void 0?i.value:x;return((R=o.value)===null||R===void 0?void 0:R.multiple)===!1?{checkedKeys:P.slice(0,1),indeterminateKeys:[]}:r.value.getCheckedKeys(P,{cascade:e.cascade,allowNotLoaded:e.allowCheckingNotLoaded})}),l=U(()=>a.value.checkedKeys),d=U(()=>a.value.indeterminateKeys),s=U(()=>new Set(l.value)),c=U(()=>new Set(d.value)),u=U(()=>{const{value:R}=s;return n.value.reduce((x,P)=>{const{key:j,disabled:B}=P;return x+(!B&&R.has(j)?1:0)},0)}),g=U(()=>n.value.filter(R=>R.disabled).length),p=U(()=>{const{length:R}=n.value,{value:x}=c;return u.value>0&&u.value<R-g.value||n.value.some(P=>x.has(P.key))}),A=U(()=>{const{length:R}=n.value;return u.value!==0&&u.value===R-g.value}),h=U(()=>n.value.length===0);function f(R,x,P){const{"onUpdate:checkedRowKeys":j,onUpdateCheckedRowKeys:B,onCheckedRowKeysChange:I}=e,H=[],{value:{getNode:E}}=r;R.forEach(M=>{var T;const k=(T=E(M))===null||T===void 0?void 0:T.rawNode;H.push(k)}),j&&ie(j,R,H,{row:x,action:P}),B&&ie(B,R,H,{row:x,action:P}),I&&ie(I,R,H,{row:x,action:P}),i.value=R}function v(R,x=!1,P){if(!e.loading){if(x){f(Array.isArray(R)?R.slice(0,1):[R],P,"check");return}f(r.value.check(R,l.value,{cascade:e.cascade,allowNotLoaded:e.allowCheckingNotLoaded}).checkedKeys,P,"check")}}function b(R,x){e.loading||f(r.value.uncheck(R,l.value,{cascade:e.cascade,allowNotLoaded:e.allowCheckingNotLoaded}).checkedKeys,x,"uncheck")}function C(R=!1){const{value:x}=o;if(!x||e.loading)return;const P=[];(R?r.value.treeNodes:n.value).forEach(j=>{j.disabled||P.push(j.key)}),f(r.value.check(P,l.value,{cascade:!0,allowNotLoaded:e.allowCheckingNotLoaded}).checkedKeys,void 0,"checkAll")}function F(R=!1){const{value:x}=o;if(!x||e.loading)return;const P=[];(R?r.value.treeNodes:n.value).forEach(j=>{j.disabled||P.push(j.key)}),f(r.value.uncheck(P,l.value,{cascade:!0,allowNotLoaded:e.allowCheckingNotLoaded}).checkedKeys,void 0,"uncheckAll")}return{mergedCheckedRowKeySetRef:s,mergedCheckedRowKeysRef:l,mergedInderminateRowKeySetRef:c,someRowsCheckedRef:p,allRowsCheckedRef:A,headerCheckboxDisabledRef:h,doUpdateCheckedRowKeys:f,doCheckAll:C,doUncheckAll:F,doCheck:v,doUncheck:b}}function Sa(e,t){const n=At(()=>{for(const s of e.columns)if(s.type==="expand")return s.renderExpand}),r=At(()=>{let s;for(const c of e.columns)if(c.type==="expand"){s=c.expandable;break}return s}),o=ee(e.defaultExpandAll?n?.value?(()=>{const s=[];return t.value.treeNodes.forEach(c=>{var u;!((u=r.value)===null||u===void 0)&&u.call(r,c.rawNode)&&s.push(c.key)}),s})():t.value.getNonLeafKeys():e.defaultExpandedRowKeys),i=ce(e,"expandedRowKeys"),a=ce(e,"stickyExpandedRows"),l=Nt(i,o);function d(s){const{onUpdateExpandedRowKeys:c,"onUpdate:expandedRowKeys":u}=e;c&&ie(c,s),u&&ie(u,s),o.value=s}return{stickyExpandedRowsRef:a,mergedExpandedRowKeysRef:l,renderExpandRef:n,expandableRef:r,doUpdateExpandedRowKeys:d}}function ka(e,t){const n=[],r=[],o=[],i=new WeakMap;let a=-1,l=0,d=!1,s=0;function c(g,p){p>a&&(n[p]=[],a=p),g.forEach(A=>{if("children"in A)c(A.children,p+1);else{const h="key"in A?A.key:void 0;r.push({key:Xe(A),style:ta(A,h!==void 0?je(t(h)):void 0),column:A,index:s++,width:A.width===void 0?128:Number(A.width)}),l+=1,d||(d=!!A.ellipsis),o.push(A)}})}c(e,0),s=0;function u(g,p){let A=0;g.forEach(h=>{var f;if("children"in h){const v=s,b={column:h,colIndex:s,colSpan:0,rowSpan:1,isLast:!1};u(h.children,p+1),h.children.forEach(C=>{var F,R;b.colSpan+=(R=(F=i.get(C))===null||F===void 0?void 0:F.colSpan)!==null&&R!==void 0?R:0}),v+b.colSpan===l&&(b.isLast=!0),i.set(h,b),n[p].push(b)}else{if(s<A){s+=1;return}let v=1;"titleColSpan"in h&&(v=(f=h.titleColSpan)!==null&&f!==void 0?f:1),v>1&&(A=s+v);const b=s+v===l,C={column:h,colSpan:v,colIndex:s,rowSpan:a-p+1,isLast:b};i.set(h,C),n[p].push(C),s+=1}})}return u(e,0),{hasEllipsis:d,rows:n,cols:r,dataRelatedCols:o}}function Fa(e,t){const n=U(()=>ka(e.columns,t));return{rowsRef:U(()=>n.value.rows),colsRef:U(()=>n.value.cols),hasEllipsisRef:U(()=>n.value.hasEllipsis),dataRelatedColsRef:U(()=>n.value.dataRelatedCols)}}function Pa(){const e=ee({});function t(o){return e.value[o]}function n(o,i){Xr(o)&&"key"in o&&(e.value[o.key]=i)}function r(){e.value={}}return{getResizableWidth:t,doUpdateResizableWidth:n,clearResizableWidth:r}}function Ta(e,{mainTableInstRef:t,mergedCurrentPageRef:n,bodyWidthRef:r}){let o=0;const i=ee(),a=ee(null),l=ee([]),d=ee(null),s=ee([]),c=U(()=>je(e.scrollX)),u=U(()=>e.columns.filter(B=>B.fixed==="left")),g=U(()=>e.columns.filter(B=>B.fixed==="right")),p=U(()=>{const B={};let I=0;function H(E){E.forEach(M=>{const T={start:I,end:0};B[Xe(M)]=T,"children"in M?(H(M.children),T.end=I):(I+=ir(M)||0,T.end=I)})}return H(u.value),B}),A=U(()=>{const B={};let I=0;function H(E){for(let M=E.length-1;M>=0;--M){const T=E[M],k={start:I,end:0};B[Xe(T)]=k,"children"in T?(H(T.children),k.end=I):(I+=ir(T)||0,k.end=I)}}return H(g.value),B});function h(){var B,I;const{value:H}=u;let E=0;const{value:M}=p;let T=null;for(let k=0;k<H.length;++k){const O=Xe(H[k]);if(o>(((B=M[O])===null||B===void 0?void 0:B.start)||0)-E)T=O,E=((I=M[O])===null||I===void 0?void 0:I.end)||0;else break}a.value=T}function f(){l.value=[];let B=e.columns.find(I=>Xe(I)===a.value);for(;B&&"children"in B;){const I=B.children.length;if(I===0)break;const H=B.children[I-1];l.value.push(Xe(H)),B=H}}function v(){var B,I;const{value:H}=g,E=Number(e.scrollX),{value:M}=r;if(M===null)return;let T=0,k=null;const{value:O}=A;for(let te=H.length-1;te>=0;--te){const J=Xe(H[te]);if(Math.round(o+(((B=O[J])===null||B===void 0?void 0:B.start)||0)+M-T)<E)k=J,T=((I=O[J])===null||I===void 0?void 0:I.end)||0;else break}d.value=k}function b(){s.value=[];let B=e.columns.find(I=>Xe(I)===d.value);for(;B&&"children"in B&&B.children.length;){const I=B.children[0];s.value.push(Xe(I)),B=I}}function C(){const B=t.value?t.value.getHeaderElement():null,I=t.value?t.value.getBodyElement():null;return{header:B,body:I}}function F(){const{body:B}=C();B&&(B.scrollTop=0)}function R(){i.value!=="body"?Kn(P):i.value=void 0}function x(B){var I;(I=e.onScroll)===null||I===void 0||I.call(e,B),i.value!=="head"?Kn(P):i.value=void 0}function P(){const{header:B,body:I}=C();if(!I)return;const{value:H}=r;if(H!==null){if(e.maxHeight||e.flexHeight){if(!B)return;const E=o-B.scrollLeft;i.value=E!==0?"head":"body",i.value==="head"?(o=B.scrollLeft,I.scrollLeft=o):(o=I.scrollLeft,B.scrollLeft=o)}else o=I.scrollLeft;h(),f(),v(),b()}}function j(B){const{header:I}=C();I&&(I.scrollLeft=B,P())}return zr(n,()=>{F()}),{styleScrollXRef:c,fixedColumnLeftMapRef:p,fixedColumnRightMapRef:A,leftFixedColumnsRef:u,rightFixedColumnsRef:g,leftActiveFixedColKeyRef:a,leftActiveFixedChildrenColKeysRef:l,rightActiveFixedColKeyRef:d,rightActiveFixedChildrenColKeysRef:s,syncScrollState:P,handleTableBodyScroll:x,handleTableHeaderScroll:R,setHeaderScrollLeft:j}}function Kt(e){return typeof e=="object"&&typeof e.multiple=="number"?e.multiple:!1}function La(e,t){return t&&(e===void 0||e==="default"||typeof e=="object"&&e.compare==="default")?Ua(t):typeof e=="function"?e:e&&typeof e=="object"&&e.compare&&e.compare!=="default"?e.compare:!1}function Ua(e){return(t,n)=>{const r=t[e],o=n[e];return r==null?o==null?0:-1:o==null?1:typeof r=="number"&&typeof o=="number"?r-o:typeof r=="string"&&typeof o=="string"?r.localeCompare(o):0}}function Qa(e,{dataRelatedColsRef:t,filteredDataRef:n}){const r=[];t.value.forEach(p=>{var A;p.sorter!==void 0&&g(r,{columnKey:p.key,sorter:p.sorter,order:(A=p.defaultSortOrder)!==null&&A!==void 0?A:!1})});const o=ee(r),i=U(()=>{const p=t.value.filter(f=>f.type!=="selection"&&f.sorter!==void 0&&(f.sortOrder==="ascend"||f.sortOrder==="descend"||f.sortOrder===!1)),A=p.filter(f=>f.sortOrder!==!1);if(A.length)return A.map(f=>({columnKey:f.key,order:f.sortOrder,sorter:f.sorter}));if(p.length)return[];const{value:h}=o;return Array.isArray(h)?h:h?[h]:[]}),a=U(()=>{const p=i.value.slice().sort((A,h)=>{const f=Kt(A.sorter)||0;return(Kt(h.sorter)||0)-f});return p.length?n.value.slice().sort((h,f)=>{let v=0;return p.some(b=>{const{columnKey:C,sorter:F,order:R}=b,x=La(F,C);return x&&R&&(v=x(h.rawNode,f.rawNode),v!==0)?(v=v*$i(R),!0):!1}),v}):n.value});function l(p){let A=i.value.slice();return p&&Kt(p.sorter)!==!1?(A=A.filter(h=>Kt(h.sorter)!==!1),g(A,p),A):p||null}function d(p){const A=l(p);s(A)}function s(p){const{"onUpdate:sorter":A,onUpdateSorter:h,onSorterChange:f}=e;A&&ie(A,p),h&&ie(h,p),f&&ie(f,p),o.value=p}function c(p,A="ascend"){if(!p)u();else{const h=t.value.find(v=>v.type!=="selection"&&v.type!=="expand"&&v.key===p);if(!h?.sorter)return;const f=h.sorter;d({columnKey:p,sorter:f,order:A})}}function u(){s(null)}function g(p,A){const h=p.findIndex(f=>A?.columnKey&&f.columnKey===A.columnKey);h!==void 0&&h>=0?p[h]=A:p.push(A)}return{clearSorter:u,sort:c,sortedDataRef:a,mergedSortStateRef:i,deriveNextSorter:d}}function Na(e,{dataRelatedColsRef:t}){const n=U(()=>{const S=Q=>{for(let q=0;q<Q.length;++q){const N=Q[q];if("children"in N)return S(N.children);if(N.type==="selection")return N}return null};return S(e.columns)}),r=U(()=>{const{childrenKey:S}=e;return Mr(e.data,{ignoreEmptyChildren:!0,getKey:e.rowKey,getChildren:Q=>Q[S],getDisabled:Q=>{var q,N;return!!(!((N=(q=n.value)===null||q===void 0?void 0:q.disabled)===null||N===void 0)&&N.call(q,Q))}})}),o=At(()=>{const{columns:S}=e,{length:Q}=S;let q=null;for(let N=0;N<Q;++N){const K=S[N];if(!K.type&&q===null&&(q=N),"tree"in K&&K.tree)return N}return q||0}),i=ee({}),{pagination:a}=e,l=ee(a&&a.defaultPage||1),d=ee(Gr(a)),s=U(()=>{const S=t.value.filter(N=>N.filterOptionValues!==void 0||N.filterOptionValue!==void 0),Q={};return S.forEach(N=>{var K;N.type==="selection"||N.type==="expand"||(N.filterOptionValues===void 0?Q[N.key]=(K=N.filterOptionValue)!==null&&K!==void 0?K:null:Q[N.key]=N.filterOptionValues)}),Object.assign(ar(i.value),Q)}),c=U(()=>{const S=s.value,{columns:Q}=e;function q(de){return(ae,ne)=>!!~String(ne[de]).indexOf(String(ae))}const{value:{treeNodes:N}}=r,K=[];return Q.forEach(de=>{de.type==="selection"||de.type==="expand"||"children"in de||K.push([de.key,de])}),N?N.filter(de=>{const{rawNode:ae}=de;for(const[ne,w]of K){let Y=S[ne];if(Y==null||(Array.isArray(Y)||(Y=[Y]),!Y.length))continue;const fe=w.filter==="default"?q(ne):w.filter;if(w&&typeof fe=="function")if(w.filterMode==="and"){if(Y.some(le=>!fe(le,ae)))return!1}else{if(Y.some(le=>fe(le,ae)))continue;return!1}}return!0}):[]}),{sortedDataRef:u,deriveNextSorter:g,mergedSortStateRef:p,sort:A,clearSorter:h}=Qa(e,{dataRelatedColsRef:t,filteredDataRef:c});t.value.forEach(S=>{var Q;if(S.filter){const q=S.defaultFilterOptionValues;S.filterMultiple?i.value[S.key]=q||[]:q!==void 0?i.value[S.key]=q===null?[]:q:i.value[S.key]=(Q=S.defaultFilterOptionValue)!==null&&Q!==void 0?Q:null}});const f=U(()=>{const{pagination:S}=e;if(S!==!1)return S.page}),v=U(()=>{const{pagination:S}=e;if(S!==!1)return S.pageSize}),b=Nt(f,l),C=Nt(v,d),F=At(()=>{const S=b.value;return e.remote?S:Math.max(1,Math.min(Math.ceil(c.value.length/C.value),S))}),R=U(()=>{const{pagination:S}=e;if(S){const{pageCount:Q}=S;if(Q!==void 0)return Q}}),x=U(()=>{if(e.remote)return r.value.treeNodes;if(!e.pagination)return u.value;const S=C.value,Q=(F.value-1)*S;return u.value.slice(Q,Q+S)}),P=U(()=>x.value.map(S=>S.rawNode));function j(S){const{pagination:Q}=e;if(Q){const{onChange:q,"onUpdate:page":N,onUpdatePage:K}=Q;q&&ie(q,S),K&&ie(K,S),N&&ie(N,S),E(S)}}function B(S){const{pagination:Q}=e;if(Q){const{onPageSizeChange:q,"onUpdate:pageSize":N,onUpdatePageSize:K}=Q;q&&ie(q,S),K&&ie(K,S),N&&ie(N,S),M(S)}}const I=U(()=>{if(e.remote){const{pagination:S}=e;if(S){const{itemCount:Q}=S;if(Q!==void 0)return Q}return}return c.value.length}),H=U(()=>Object.assign(Object.assign({},e.pagination),{onChange:void 0,onUpdatePage:void 0,onUpdatePageSize:void 0,onPageSizeChange:void 0,"onUpdate:page":j,"onUpdate:pageSize":B,page:F.value,pageSize:C.value,pageCount:I.value===void 0?R.value:void 0,itemCount:I.value}));function E(S){const{"onUpdate:page":Q,onPageChange:q,onUpdatePage:N}=e;N&&ie(N,S),Q&&ie(Q,S),q&&ie(q,S),l.value=S}function M(S){const{"onUpdate:pageSize":Q,onPageSizeChange:q,onUpdatePageSize:N}=e;q&&ie(q,S),N&&ie(N,S),Q&&ie(Q,S),d.value=S}function T(S,Q){const{onUpdateFilters:q,"onUpdate:filters":N,onFiltersChange:K}=e;q&&ie(q,S,Q),N&&ie(N,S,Q),K&&ie(K,S,Q),i.value=S}function k(S,Q,q,N){var K;(K=e.onUnstableColumnResize)===null||K===void 0||K.call(e,S,Q,q,N)}function O(S){E(S)}function te(){J()}function J(){oe({})}function oe(S){_(S)}function _(S){S?S&&(i.value=ar(S)):i.value={}}return{treeMateRef:r,mergedCurrentPageRef:F,mergedPaginationRef:H,paginatedDataRef:x,rawPaginatedDataRef:P,mergedFilterStateRef:s,mergedSortStateRef:p,hoverKeyRef:ee(null),selectionColumnRef:n,childTriggerColIndexRef:o,doUpdateFilters:T,deriveNextSorter:g,doUpdatePageSize:M,doUpdatePage:E,onUnstableColumnResize:k,filter:_,filters:oe,clearFilter:te,clearFilters:J,clearSorter:h,page:O,sort:A}}const Ma=pe({name:"DataTable",alias:["AdvancedTable"],props:Xi,slots:Object,setup(e,{slots:t}){const{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i}=mt(e),a=Tn("DataTable",i,r),l=U(()=>{const{bottomBordered:Z}=e;return n.value?!1:Z!==void 0?Z:!0}),d=wt("DataTable","-data-table",Ra,yi,e,r),s=ee(null),c=ee(null),{getResizableWidth:u,clearResizableWidth:g,doUpdateResizableWidth:p}=Pa(),{rowsRef:A,colsRef:h,dataRelatedColsRef:f,hasEllipsisRef:v}=Fa(e,u),{treeMateRef:b,mergedCurrentPageRef:C,paginatedDataRef:F,rawPaginatedDataRef:R,selectionColumnRef:x,hoverKeyRef:P,mergedPaginationRef:j,mergedFilterStateRef:B,mergedSortStateRef:I,childTriggerColIndexRef:H,doUpdatePage:E,doUpdateFilters:M,onUnstableColumnResize:T,deriveNextSorter:k,filter:O,filters:te,clearFilter:J,clearFilters:oe,clearSorter:_,page:S,sort:Q}=Na(e,{dataRelatedColsRef:f}),q=Z=>{const{fileName:G="data.csv",keepOriginalData:ue=!1}=Z||{},he=ue?e.data:R.value,ve=ia(e.columns,he,e.getCsvCell,e.getCsvHeader),Qe=new Blob([ve],{type:"text/csv;charset=utf-8"}),Ne=URL.createObjectURL(Qe);Oi(Ne,G.endsWith(".csv")?G:`${G}.csv`),URL.revokeObjectURL(Ne)},{doCheckAll:N,doUncheckAll:K,doCheck:de,doUncheck:ae,headerCheckboxDisabledRef:ne,someRowsCheckedRef:w,allRowsCheckedRef:Y,mergedCheckedRowKeySetRef:fe,mergedInderminateRowKeySetRef:le}=Ea(e,{selectionColumnRef:x,treeMateRef:b,paginatedDataRef:F}),{stickyExpandedRowsRef:Re,mergedExpandedRowKeysRef:Oe,renderExpandRef:Be,expandableRef:Se,doUpdateExpandedRowKeys:Le}=Sa(e,b),{handleTableBodyScroll:Ce,handleTableHeaderScroll:V,syncScrollState:re,setHeaderScrollLeft:me,leftActiveFixedColKeyRef:we,leftActiveFixedChildrenColKeysRef:We,rightActiveFixedColKeyRef:Ze,rightActiveFixedChildrenColKeysRef:Ye,leftFixedColumnsRef:Ue,rightFixedColumnsRef:ke,fixedColumnLeftMapRef:dt,fixedColumnRightMapRef:ft}=Ta(e,{bodyWidthRef:s,mainTableInstRef:c,mergedCurrentPageRef:C}),{localeRef:De}=Vr("DataTable"),Te=U(()=>e.virtualScroll||e.flexHeight||e.maxHeight!==void 0||v.value?"fixed":e.tableLayout);Or($e,{props:e,treeMateRef:b,renderExpandIconRef:ce(e,"renderExpandIcon"),loadingKeySetRef:ee(new Set),slots:t,indentRef:ce(e,"indent"),childTriggerColIndexRef:H,bodyWidthRef:s,componentId:Ci(),hoverKeyRef:P,mergedClsPrefixRef:r,mergedThemeRef:d,scrollXRef:U(()=>e.scrollX),rowsRef:A,colsRef:h,paginatedDataRef:F,leftActiveFixedColKeyRef:we,leftActiveFixedChildrenColKeysRef:We,rightActiveFixedColKeyRef:Ze,rightActiveFixedChildrenColKeysRef:Ye,leftFixedColumnsRef:Ue,rightFixedColumnsRef:ke,fixedColumnLeftMapRef:dt,fixedColumnRightMapRef:ft,mergedCurrentPageRef:C,someRowsCheckedRef:w,allRowsCheckedRef:Y,mergedSortStateRef:I,mergedFilterStateRef:B,loadingRef:ce(e,"loading"),rowClassNameRef:ce(e,"rowClassName"),mergedCheckedRowKeySetRef:fe,mergedExpandedRowKeysRef:Oe,mergedInderminateRowKeySetRef:le,localeRef:De,expandableRef:Se,stickyExpandedRowsRef:Re,rowKeyRef:ce(e,"rowKey"),renderExpandRef:Be,summaryRef:ce(e,"summary"),virtualScrollRef:ce(e,"virtualScroll"),virtualScrollXRef:ce(e,"virtualScrollX"),heightForRowRef:ce(e,"heightForRow"),minRowHeightRef:ce(e,"minRowHeight"),virtualScrollHeaderRef:ce(e,"virtualScrollHeader"),headerHeightRef:ce(e,"headerHeight"),rowPropsRef:ce(e,"rowProps"),stripedRef:ce(e,"striped"),checkOptionsRef:U(()=>{const{value:Z}=x;return Z?.options}),rawPaginatedDataRef:R,filterMenuCssVarsRef:U(()=>{const{self:{actionDividerColor:Z,actionPadding:G,actionButtonMargin:ue}}=d.value;return{"--n-action-padding":G,"--n-action-button-margin":ue,"--n-action-divider-color":Z}}),onLoadRef:ce(e,"onLoad"),mergedTableLayoutRef:Te,maxHeightRef:ce(e,"maxHeight"),minHeightRef:ce(e,"minHeight"),flexHeightRef:ce(e,"flexHeight"),headerCheckboxDisabledRef:ne,paginationBehaviorOnFilterRef:ce(e,"paginationBehaviorOnFilter"),summaryPlacementRef:ce(e,"summaryPlacement"),filterIconPopoverPropsRef:ce(e,"filterIconPopoverProps"),scrollbarPropsRef:ce(e,"scrollbarProps"),syncScrollState:re,doUpdatePage:E,doUpdateFilters:M,getResizableWidth:u,onUnstableColumnResize:T,clearResizableWidth:g,doUpdateResizableWidth:p,deriveNextSorter:k,doCheck:de,doUncheck:ae,doCheckAll:N,doUncheckAll:K,doUpdateExpandedRowKeys:Le,handleTableHeaderScroll:V,handleTableBodyScroll:Ce,setHeaderScrollLeft:me,renderCell:ce(e,"renderCell")});const et={filter:O,filters:te,clearFilters:oe,clearSorter:_,page:S,sort:Q,clearFilter:J,downloadCsv:q,scrollTo:(Z,G)=>{var ue;(ue=c.value)===null||ue===void 0||ue.scrollTo(Z,G)}},Ee=U(()=>{const{size:Z}=e,{common:{cubicBezierEaseInOut:G},self:{borderColor:ue,tdColorHover:he,tdColorSorting:ve,tdColorSortingModal:Qe,tdColorSortingPopover:Ne,thColorSorting:Ke,thColorSortingModal:ct,thColorSortingPopover:Me,thColor:ge,thColorHover:tt,tdColor:bt,tdTextColor:yt,thTextColor:ot,thFontWeight:it,thButtonColorHover:Et,thIconColor:an,thIconColorActive:Ct,filterSize:Dt,borderRadius:St,lineHeight:rt,tdColorModal:Ht,thColorModal:ln,borderColorModal:ze,thColorHoverModal:qe,tdColorHoverModal:ko,borderColorPopover:Fo,thColorPopover:Po,tdColorPopover:To,tdColorHoverPopover:Lo,thColorHoverPopover:Uo,paginationMargin:Qo,emptyPadding:No,boxShadowAfter:Mo,boxShadowBefore:zo,sorterSize:Oo,resizableContainerSize:Do,resizableSize:Ho,loadingColor:Wo,loadingSize:Yo,opacityLoading:Ko,tdColorStriped:qo,tdColorStripedModal:Vo,tdColorStripedPopover:jo,[Pe("fontSize",Z)]:Go,[Pe("thPadding",Z)]:Zo,[Pe("tdPadding",Z)]:Jo}}=d.value;return{"--n-font-size":Go,"--n-th-padding":Zo,"--n-td-padding":Jo,"--n-bezier":G,"--n-border-radius":St,"--n-line-height":rt,"--n-border-color":ue,"--n-border-color-modal":ze,"--n-border-color-popover":Fo,"--n-th-color":ge,"--n-th-color-hover":tt,"--n-th-color-modal":ln,"--n-th-color-hover-modal":qe,"--n-th-color-popover":Po,"--n-th-color-hover-popover":Uo,"--n-td-color":bt,"--n-td-color-hover":he,"--n-td-color-modal":Ht,"--n-td-color-hover-modal":ko,"--n-td-color-popover":To,"--n-td-color-hover-popover":Lo,"--n-th-text-color":ot,"--n-td-text-color":yt,"--n-th-font-weight":it,"--n-th-button-color-hover":Et,"--n-th-icon-color":an,"--n-th-icon-color-active":Ct,"--n-filter-size":Dt,"--n-pagination-margin":Qo,"--n-empty-padding":No,"--n-box-shadow-before":zo,"--n-box-shadow-after":Mo,"--n-sorter-size":Oo,"--n-resizable-container-size":Do,"--n-resizable-size":Ho,"--n-loading-size":Yo,"--n-loading-color":Wo,"--n-opacity-loading":Ko,"--n-td-color-striped":qo,"--n-td-color-striped-modal":Vo,"--n-td-color-striped-popover":jo,"n-td-color-sorting":ve,"n-td-color-sorting-modal":Qe,"n-td-color-sorting-popover":Ne,"n-th-color-sorting":Ke,"n-th-color-sorting-modal":ct,"n-th-color-sorting-popover":Me}}),W=o?Pn("data-table",U(()=>e.size[0]),Ee,e):void 0,X=U(()=>{if(!e.pagination)return!1;if(e.paginateSinglePage)return!0;const Z=j.value,{pageCount:G}=Z;return G!==void 0?G>1:Z.itemCount&&Z.pageSize&&Z.itemCount>Z.pageSize});return Object.assign({mainTableInstRef:c,mergedClsPrefix:r,rtlEnabled:a,mergedTheme:d,paginatedData:F,mergedBordered:n,mergedBottomBordered:l,mergedPagination:j,mergedShowPagination:X,cssVars:o?void 0:Ee,themeClass:W?.themeClass,onRender:W?.onRender},et)},render(){const{mergedClsPrefix:e,themeClass:t,onRender:n,$slots:r,spinProps:o}=this;return n?.(),m("div",{class:[`${e}-data-table`,this.rtlEnabled&&`${e}-data-table--rtl`,t,{[`${e}-data-table--bordered`]:this.mergedBordered,[`${e}-data-table--bottom-bordered`]:this.mergedBottomBordered,[`${e}-data-table--single-line`]:this.singleLine,[`${e}-data-table--single-column`]:this.singleColumn,[`${e}-data-table--loading`]:this.loading,[`${e}-data-table--flex-height`]:this.flexHeight}],style:this.cssVars},m("div",{class:`${e}-data-table-wrapper`},m(Ia,{ref:"mainTableInstRef"})),this.mergedShowPagination?m("div",{class:`${e}-data-table__pagination`},m(Ji,Object.assign({theme:this.mergedTheme.peers.Pagination,themeOverrides:this.mergedTheme.peerOverrides.Pagination,disabled:this.loading},this.mergedPagination))):null,m(xi,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?m("div",{class:`${e}-data-table-loading-wrapper`},Ln(r.loading,()=>[m(Wr,Object.assign({clsPrefix:e,strokeWidth:20},o))])):null}))}}),cr=["BOOLEAN","INT32","INT64","INT96","FLOAT","DOUBLE","BYTE_ARRAY","FIXED_LEN_BYTE_ARRAY"],ht=["PLAIN",void 0,"PLAIN_DICTIONARY","RLE","BIT_PACKED","DELTA_BINARY_PACKED","DELTA_LENGTH_BYTE_ARRAY","DELTA_BYTE_ARRAY","RLE_DICTIONARY","BYTE_STREAM_SPLIT"],za=["REQUIRED","OPTIONAL","REPEATED"],Oa=["UTF8","MAP","MAP_KEY_VALUE","LIST","ENUM","DECIMAL","DATE","TIME_MILLIS","TIME_MICROS","TIMESTAMP_MILLIS","TIMESTAMP_MICROS","UINT_8","UINT_16","UINT_32","UINT_64","INT_8","INT_16","INT_32","INT_64","JSON","BSON","INTERVAL"],Da=["UNCOMPRESSED","SNAPPY","GZIP","LZO","BROTLI","LZ4","ZSTD","LZ4_RAW"],no=["DATA_PAGE","INDEX_PAGE","DICTIONARY_PAGE","DATA_PAGE_V2"],ro=864e5;function ur(e,t,n,r,o=!0){if(t&&r.endsWith("_DICTIONARY")){t=hr(t,n,o);let i=e;e instanceof Uint8Array&&!(t instanceof Uint8Array)&&(i=new t.constructor(e.length));for(let a=0;a<e.length;a++)i[a]=t[e[a]];return i}else return hr(e,n,o)}function hr(e,t,n=!0){const r=t.converted_type;if(r==="DECIMAL"){const i=10**-(t.scale||0),a=new Array(e.length);for(let l=0;l<a.length;l++)e[0]instanceof Uint8Array?a[l]=oo(e[l])*i:a[l]=Number(e[l])*i;return a}if(r===void 0&&t.type==="INT96")return Array.from(e).map(Ha);if(r==="DATE"){const o=new Array(e.length);for(let i=0;i<o.length;i++)o[i]=new Date(e[i]*ro);return o}if(r==="TIMESTAMP_MILLIS"){const o=new Array(e.length);for(let i=0;i<o.length;i++)o[i]=new Date(Number(e[i]));return o}if(r==="TIMESTAMP_MICROS"){const o=new Array(e.length);for(let i=0;i<o.length;i++)o[i]=new Date(Number(e[i]/1000n));return o}if(r==="JSON"){const o=new TextDecoder;return e.map(i=>JSON.parse(o.decode(i)))}if(r==="BSON")throw new Error("parquet bson not supported");if(r==="INTERVAL")throw new Error("parquet interval not supported");if(r==="UTF8"||n&&t.type==="BYTE_ARRAY"){const o=new TextDecoder,i=new Array(e.length);for(let a=0;a<i.length;a++)i[a]=e[a]&&o.decode(e[a]);return i}if(r==="UINT_64"){const o=new BigUint64Array(e.length);for(let i=0;i<o.length;i++)o[i]=BigInt(e[i]);return o}if(t.logical_type?.type==="FLOAT16")return Array.from(e).map(io);if(t.logical_type?.type==="TIMESTAMP"){const{unit:o}=t.logical_type;let i=1n;o==="MICROS"&&(i=1000n),o==="NANOS"&&(i=1000000n);const a=new Array(e.length);for(let l=0;l<a.length;l++)a[l]=new Date(Number(e[l]/i));return a}return e}function oo(e){let t=0;for(const r of e)t=t*256+r;const n=e.length*8;return t>=2**(n-1)&&(t-=2**n),t}function Ha(e){const t=Number((e>>64n)-2440588n),n=Number((e&0xffffffffffffffffn)/1000000n),r=t*ro+n;return new Date(r)}function io(e){if(!e)return;const t=e[1]<<8|e[0],n=t>>15?-1:1,r=t>>10&31,o=t&1023;return r===0?n*2**-14*(o/1024):r===31?o?NaN:n*(1/0):n*2**(r-15)*(1+o/1024)}function ao(e,t,n){const r=e[t],o=[];let i=1;if(r.num_children)for(;o.length<r.num_children;){const a=e[t+i],l=ao(e,t+i,[...n,a.name]);i+=l.count,o.push(l)}return{count:i,element:r,children:o,path:n}}function gr(e,t){let n=ao(e,0,[]);const r=[n];for(const o of t){const i=n.children.find(a=>a.element.name===o);if(!i)throw new Error(`parquet schema element not found: ${t}`);r.push(i),n=i}return r}function lo(e){let t=0;for(const{element:n}of e)n.repetition_type==="REPEATED"&&t++;return t}function _t(e){let t=0;for(const{element:n}of e.slice(1))n.repetition_type!=="REQUIRED"&&t++;return t}function Wa(e){if(!e||e.element.converted_type!=="LIST"||e.children.length>1)return!1;const t=e.children[0];return!(t.children.length>1||t.element.repetition_type!=="REPEATED")}function Ya(e){if(!e||e.element.converted_type!=="MAP"||e.children.length>1)return!1;const t=e.children[0];return!(t.children.length!==2||t.element.repetition_type!=="REPEATED"||t.children.find(o=>o.element.name==="key")?.element.repetition_type==="REPEATED"||t.children.find(o=>o.element.name==="value")?.element.repetition_type==="REPEATED")}const Fe={STOP:0,TRUE:1,FALSE:2,BYTE:3,I16:4,I32:5,I64:6,DOUBLE:7,BINARY:8,LIST:9,SET:10,MAP:11,STRUCT:12,UUID:13};function so(e){let t=0;const n={};for(;e.offset<e.view.byteLength;){const[r,o,i]=co(e,t);if(t=i,r===Fe.STOP)break;n[`field_${o}`]=Zt(e,r)}return n}function Zt(e,t){switch(t){case Fe.TRUE:return!0;case Fe.FALSE:return!1;case Fe.BYTE:return e.view.getInt8(e.offset++);case Fe.I16:case Fe.I32:return qa(e);case Fe.I64:return yn(e);case Fe.DOUBLE:{const n=e.view.getFloat64(e.offset,!0);return e.offset+=8,n}case Fe.BINARY:{const n=pt(e),r=new Uint8Array(e.view.buffer,e.view.byteOffset+e.offset,n);return e.offset+=n,r}case Fe.LIST:{const[n,r]=Va(e),o=n===Fe.TRUE||n===Fe.FALSE,i=new Array(r);for(let a=0;a<r;a++)i[a]=o?Zt(e,Fe.BYTE)===1:Zt(e,n);return i}case Fe.STRUCT:{const n={};let r=0;for(;;){let o,i;if([o,i,r]=co(e,r),o===Fe.STOP)break;n[`field_${i}`]=Zt(e,o)}return n}case Fe.UUID:{let n="";for(let r=0;r<16;r++)n+=e.view.getUint8(e.offset++).toString(16).padStart(2,"0");return n}default:throw new Error(`thrift unhandled type: ${t}`)}}function pt(e){let t=0,n=0;for(;;){const r=e.view.getUint8(e.offset++);if(t|=(r&127)<<n,!(r&128))return t;n+=7}}function Ka(e){let t=0n,n=0n;for(;;){const r=e.view.getUint8(e.offset++);if(t|=BigInt(r&127)<<n,!(r&128))return t;n+=7n}}function qa(e){const t=pt(e);return t>>>1^-(t&1)}function yn(e){const t=Ka(e);return t>>BigInt(1)^-(t&BigInt(1))}function fo(e){return e&15}function co(e,t){const n=e.view.getUint8(e.offset++);if((n&15)===Fe.STOP)return[0,0,t];const r=n>>4;let o;if(r)o=t+r;else throw new Error("non-delta field id not supported");return[fo(n),o,o]}function Va(e){const t=e.view.getUint8(e.offset++),n=t>>4,r=fo(t);if(n===15){const o=pt(e);return[r,o]}return[r,n]}async function ja(e,t=1<<19){if(!e||!(e.byteLength>=0))throw new Error("parquetMetadataAsync expected AsyncBuffer");const n=Math.max(0,e.byteLength-t),r=await e.slice(n,e.byteLength),o=new DataView(r);if(o.getUint32(r.byteLength-4,!0)!==827474256)throw new Error("parquet file invalid (footer != PAR1)");const i=o.getUint32(r.byteLength-8,!0);if(i>e.byteLength-8)throw new Error(`parquet metadata length ${i} exceeds available buffer ${e.byteLength-8}`);if(i+8>t){const a=e.byteLength-i-8,l=await e.slice(a,n),d=new ArrayBuffer(i+8),s=new Uint8Array(d);return s.set(new Uint8Array(l)),s.set(new Uint8Array(r),n-a),Ar(d)}else return Ar(r)}function Ar(e){if(!(e instanceof ArrayBuffer))throw new Error("parquetMetadata expected ArrayBuffer");const t=new DataView(e);if(t.byteLength<8)throw new Error("parquet file is too short");if(t.getUint32(t.byteLength-4,!0)!==827474256)throw new Error("parquet file invalid (footer != PAR1)");const n=t.byteLength-8,r=t.getUint32(n,!0);if(r>t.byteLength-8)throw new Error(`parquet metadata length ${r} exceeds available buffer ${t.byteLength-8}`);const o=n-r,a=so({view:t,offset:o}),l=new TextDecoder;function d(f){return f&&l.decode(f)}const s=a.field_1,c=a.field_2.map(f=>({type:cr[f.field_1],type_length:f.field_2,repetition_type:za[f.field_3],name:d(f.field_4),num_children:f.field_5,converted_type:Oa[f.field_6],scale:f.field_7,precision:f.field_8,field_id:f.field_9,logical_type:Ga(f.field_10)})),u=c.filter(f=>f.type),g=a.field_3,p=a.field_4.map(f=>({columns:f.field_1.map((v,b)=>({file_path:d(v.field_1),file_offset:v.field_2,meta_data:v.field_3&&{type:cr[v.field_3.field_1],encodings:v.field_3.field_2?.map(C=>ht[C]),path_in_schema:v.field_3.field_3.map(d),codec:Da[v.field_3.field_4],num_values:v.field_3.field_5,total_uncompressed_size:v.field_3.field_6,total_compressed_size:v.field_3.field_7,key_value_metadata:v.field_3.field_8,data_page_offset:v.field_3.field_9,index_page_offset:v.field_3.field_10,dictionary_page_offset:v.field_3.field_11,statistics:Za(v.field_3.field_12,u[b]),encoding_stats:v.field_3.field_13?.map(C=>({page_type:no[C.field_1],encoding:ht[C.field_2],count:C.field_3})),bloom_filter_offset:v.field_3.field_14,bloom_filter_length:v.field_3.field_15,size_statistics:v.field_3.field_16&&{unencoded_byte_array_data_bytes:v.field_3.field_16.field_1,repetition_level_histogram:v.field_3.field_16.field_2,definition_level_histogram:v.field_3.field_16.field_3}},offset_index_offset:v.field_4,offset_index_length:v.field_5,column_index_offset:v.field_6,column_index_length:v.field_7,crypto_metadata:v.field_7,encrypted_column_metadata:v.field_8})),total_byte_size:f.field_2,num_rows:f.field_3,sorting_columns:f.field_4?.map(v=>({column_idx:v.field_1,descending:v.field_2,nulls_first:v.field_3})),file_offset:f.field_5,total_compressed_size:f.field_6,ordinal:f.field_7})),A=a.field_5?.map(f=>({key:d(f.field_1),value:d(f.field_2)})),h=d(a.field_6);return{version:s,schema:c,num_rows:g,row_groups:p,key_value_metadata:A,created_by:h,metadata_length:r}}function Ga(e){return e?.field_1?{type:"STRING"}:e?.field_2?{type:"MAP"}:e?.field_3?{type:"LIST"}:e?.field_4?{type:"ENUM"}:e?.field_5?{type:"DECIMAL",scale:e.field_5.field_1,precision:e.field_5.field_2}:e?.field_6?{type:"DATE"}:e?.field_7?{type:"TIME",isAdjustedToUTC:e.field_7.field_1,unit:pr(e.field_7.field_2)}:e?.field_8?{type:"TIMESTAMP",isAdjustedToUTC:e.field_8.field_1,unit:pr(e.field_8.field_2)}:e?.field_10?{type:"INTEGER",bitWidth:e.field_10.field_1,isSigned:e.field_10.field_2}:e?.field_11?{type:"NULL"}:e?.field_12?{type:"JSON"}:e?.field_13?{type:"BSON"}:e?.field_14?{type:"UUID"}:e?.field_15?{type:"FLOAT16"}:e}function pr(e){if(e.field_1)return"MILLIS";if(e.field_2)return"MICROS";if(e.field_3)return"NANOS";throw new Error("parquet time unit required")}function Za(e,t){return e&&{max:qt(e.field_1,t),min:qt(e.field_2,t),null_count:e.field_3,distinct_count:e.field_4,max_value:qt(e.field_5,t),min_value:qt(e.field_6,t),is_max_value_exact:e.field_7,is_min_value_exact:e.field_8}}function qt(e,t){const{type:n,converted_type:r,logical_type:o}=t;if(e===void 0)return e;if(n==="BOOLEAN")return e[0]===1;if(n==="BYTE_ARRAY")return new TextDecoder().decode(e);const i=new DataView(e.buffer,e.byteOffset,e.byteLength);return n==="FLOAT"&&i.byteLength===4?i.getFloat32(0,!0):n==="DOUBLE"&&i.byteLength===8?i.getFloat64(0,!0):n==="INT32"&&r==="DATE"?new Date(i.getInt32(0,!0)*864e5):n==="INT64"&&r==="TIMESTAMP_MICROS"?new Date(Number(i.getBigInt64(0,!0)/1000n)):n==="INT64"&&r==="TIMESTAMP_MILLIS"?new Date(Number(i.getBigInt64(0,!0))):n==="INT64"&&o?.type==="TIMESTAMP"&&o?.unit==="NANOS"?new Date(Number(i.getBigInt64(0,!0)/1000000n)):n==="INT64"&&o?.type==="TIMESTAMP"&&o?.unit==="MICROS"?new Date(Number(i.getBigInt64(0,!0)/1000n)):n==="INT64"&&o?.type==="TIMESTAMP"?new Date(Number(i.getBigInt64(0,!0))):n==="INT32"&&i.byteLength===4?i.getInt32(0,!0):n==="INT64"&&i.byteLength===8?i.getBigInt64(0,!0):r==="DECIMAL"?oo(e)*10**-(t.scale||0):o?.type==="FLOAT16"?io(e):e}function vr(e,t,n,r,o,i){const a=t?.length||n.length;let l=0;const d=[e];let s=e,c=0,u=0,g=0;if(n[0])for(;c<o.length-2&&g<n[0];)s=s.at(-1),d.push(s),c++,o[c]!=="REQUIRED"&&u++,o[c]==="REPEATED"&&g++;for(let p=0;p<a;p++){const A=t?.length?t[p]:i,h=n[p];for(;c&&(h<g||o[c]!=="REPEATED");)o[c]!=="REQUIRED"&&(d.pop(),u--),o[c]==="REPEATED"&&g--,c--;for(s=d.at(-1);(c<o.length-2||o[c+1]==="REPEATED")&&(u<A||o[c+1]==="REQUIRED");){if(c++,o[c]!=="REQUIRED"){const f=[];s.push(f),s=f,d.push(f),u++}o[c]==="REPEATED"&&g++}A===i?s.push(r[l++]):c===o.length-2?s.push(null):s.push([])}if(!e.length)for(let p=0;p<i;p++){const A=[];s.push(A),s=A}return e}function Ft(e,t,n=0){const r=t.path.join("."),o=t.element.repetition_type==="OPTIONAL",i=o?n+1:n;if(Wa(t)){let a=t.children[0],l=i;a.children.length===1&&(a=a.children[0],l++),Ft(e,a,l);const d=a.path.join("."),s=e.get(d);if(!s)throw new Error("parquet list column missing values");o&&Jt(s,n),e.set(r,s),e.delete(d);return}if(Ya(t)){const a=t.children[0].element.name;Ft(e,t.children[0].children[0],i+1),Ft(e,t.children[0].children[1],i+1);const l=e.get(`${r}.${a}.key`),d=e.get(`${r}.${a}.value`);if(!l)throw new Error("parquet map column missing keys");if(!d)throw new Error("parquet map column missing values");if(l.length!==d.length)throw new Error("parquet map column key/value length mismatch");const s=uo(l,d,i);o&&Jt(s,n),e.delete(`${r}.${a}.key`),e.delete(`${r}.${a}.value`),e.set(r,s);return}if(t.children.length){const a=t.element.repetition_type==="REQUIRED"?n:n+1,l={};for(const s of t.children){Ft(e,s,a);const c=e.get(s.path.join("."));if(!c)throw new Error("parquet struct missing child data");l[s.element.name]=c}for(const s of t.children)e.delete(s.path.join("."));const d=ho(l,a);o&&Jt(d,n),e.set(r,d)}}function Jt(e,t){for(let n=0;n<e.length;n++)t?Jt(e[n],t-1):e[n]=e[n][0]}function uo(e,t,n){const r=[];for(let o=0;o<e.length;o++)if(n)r.push(uo(e[o],t[o],n-1));else if(e[o]){const i={};for(let a=0;a<e[o].length;a++){const l=t[o][a];i[e[o][a]]=l===void 0?null:l}r.push(i)}else r.push(void 0);return r}function ho(e,t){const n=Object.keys(e),r=e[n[0]]?.length,o=[];for(let i=0;i<r;i++){const a={};for(const l of n){if(e[l].length!==r)throw new Error("parquet struct parsing error");a[l]=e[l][i]}t?o.push(ho(a,t-1)):o.push(a)}return o}function $t(e,t,n){const r=n instanceof Int32Array,o=pt(e),i=pt(e);pt(e);let a=yn(e),l=0;n[l++]=r?Number(a):a;const d=o/i;for(;l<t;){const s=yn(e),c=new Uint8Array(i);for(let u=0;u<i;u++)c[u]=e.view.getUint8(e.offset++);for(let u=0;u<i&&l<t;u++){const g=BigInt(c[u]);if(g){let p=0n,A=d;const h=(1n<<g)-1n;for(;A&&l<t;){let f=BigInt(e.view.getUint8(e.offset))>>p&h;for(p+=g;p>=8;)p-=8n,e.offset++,p&&(f|=BigInt(e.view.getUint8(e.offset))<<g-p&h);const v=s+f;a+=v,n[l++]=r?Number(a):a,A--}A&&(e.offset+=Math.ceil((A*Number(g)+Number(p))/8))}else for(let p=0;p<d&&l<t;p++)a+=s,n[l++]=r?Number(a):a}}}function Ja(e,t,n){const r=new Int32Array(t);$t(e,t,r);for(let o=0;o<t;o++)n[o]=new Uint8Array(e.view.buffer,e.view.byteOffset+e.offset,r[o]),e.offset+=r[o]}function Xa(e,t,n){const r=new Int32Array(t);$t(e,t,r);const o=new Int32Array(t);$t(e,t,o);for(let i=0;i<t;i++){const a=new Uint8Array(e.view.buffer,e.view.byteOffset+e.offset,o[i]);r[i]?(n[i]=new Uint8Array(r[i]+o[i]),n[i].set(n[i-1].subarray(0,r[i])),n[i].set(a,r[i])):n[i]=a,e.offset+=o[i]}}function nn(e){return 32-Math.clz32(e)}function st(e,t,n,r){n||(e.offset+=4);let o=0;for(;o<r.length;){const i=pt(e);if(i&1)o=$a(e,i,t,r,o);else{const a=i>>>1;_a(e,a,t,r,o),o+=a}}}function _a(e,t,n,r,o){const i=n+7>>3;let a=0;for(let l=0;l<i;l++)a|=e.view.getUint8(e.offset++)<<(l<<3);for(let l=0;l<t;l++)r[o+l]=a}function $a(e,t,n,r,o){let i=t>>1<<3;const a=(1<<n)-1;let l=0;if(e.offset<e.view.byteLength)l=e.view.getUint8(e.offset++);else if(a)throw new Error(`parquet bitpack offset ${e.offset} out of range`);let d=8,s=0;for(;i;)s>8?(s-=8,d-=8,l>>>=8):d-s<n?(l|=e.view.getUint8(e.offset)<<d,e.offset++,d+=8):(o<r.length&&(r[o++]=l>>s&a),i--,s+=n);return o}function go(e,t,n,r){const o=el(n,r),i=new Uint8Array(t*o);for(let a=0;a<o;a++)for(let l=0;l<t;l++)i[l*o+a]=e.view.getUint8(e.offset++);if(n==="FLOAT")return new Float32Array(i.buffer);if(n==="DOUBLE")return new Float64Array(i.buffer);if(n==="INT32")return new Int32Array(i.buffer);if(n==="INT64")return new BigInt64Array(i.buffer);if(n==="FIXED_LEN_BYTE_ARRAY"){const a=new Array(t);for(let l=0;l<t;l++)a[l]=i.subarray(l*o,(l+1)*o);return a}throw new Error(`parquet byte_stream_split unsupported type: ${n}`)}function el(e,t){switch(e){case"INT32":case"FLOAT":return 4;case"INT64":case"DOUBLE":return 8;case"FIXED_LEN_BYTE_ARRAY":if(!t)throw new Error("parquet byteWidth missing type_length");return t;default:throw new Error(`parquet unsupported type: ${e}`)}}function Mn(e,t,n,r){if(n===0)return[];if(t==="BOOLEAN")return tl(e,n);if(t==="INT32")return nl(e,n);if(t==="INT64")return rl(e,n);if(t==="INT96")return ol(e,n);if(t==="FLOAT")return il(e,n);if(t==="DOUBLE")return al(e,n);if(t==="BYTE_ARRAY")return ll(e,n);if(t==="FIXED_LEN_BYTE_ARRAY"){if(!r)throw new Error("parquet missing fixed length");return sl(e,n,r)}else throw new Error(`parquet unhandled type: ${t}`)}function tl(e,t){const n=new Array(t);for(let r=0;r<t;r++){const o=e.offset+(r/8|0),i=r%8,a=e.view.getUint8(o);n[r]=(a&1<<i)!==0}return e.offset+=Math.ceil(t/8),n}function nl(e,t){const n=(e.view.byteOffset+e.offset)%4?new Int32Array(rn(e.view.buffer,e.view.byteOffset+e.offset,t*4)):new Int32Array(e.view.buffer,e.view.byteOffset+e.offset,t);return e.offset+=t*4,n}function rl(e,t){const n=(e.view.byteOffset+e.offset)%8?new BigInt64Array(rn(e.view.buffer,e.view.byteOffset+e.offset,t*8)):new BigInt64Array(e.view.buffer,e.view.byteOffset+e.offset,t);return e.offset+=t*8,n}function ol(e,t){const n=new Array(t);for(let r=0;r<t;r++){const o=e.view.getBigInt64(e.offset+r*12,!0),i=e.view.getInt32(e.offset+r*12+8,!0);n[r]=BigInt(i)<<64n|o}return e.offset+=t*12,n}function il(e,t){const n=(e.view.byteOffset+e.offset)%4?new Float32Array(rn(e.view.buffer,e.view.byteOffset+e.offset,t*4)):new Float32Array(e.view.buffer,e.view.byteOffset+e.offset,t);return e.offset+=t*4,n}function al(e,t){const n=(e.view.byteOffset+e.offset)%8?new Float64Array(rn(e.view.buffer,e.view.byteOffset+e.offset,t*8)):new Float64Array(e.view.buffer,e.view.byteOffset+e.offset,t);return e.offset+=t*8,n}function ll(e,t){const n=new Array(t);for(let r=0;r<t;r++){const o=e.view.getInt32(e.offset,!0);e.offset+=4,n[r]=new Uint8Array(e.view.buffer,e.view.byteOffset+e.offset,o),e.offset+=o}return n}function sl(e,t,n){const r=new Array(t);for(let o=0;o<t;o++)r[o]=new Uint8Array(e.view.buffer,e.view.byteOffset+e.offset,n),e.offset+=n;return r}function rn(e,t,n){const r=new ArrayBuffer(n);return new Uint8Array(r).set(new Uint8Array(e,t,n)),r}const dl=[0,255,65535,16777215,4294967295];function mr(e,t,n,r,o){for(let i=0;i<o;i++)n[r+i]=e[t+i]}function fl(e,t){const n=e.byteLength,r=t.byteLength;let o=0,i=0;for(;o<n;){const a=e[o];if(o++,a<128)break}if(r&&o>=n)throw new Error("invalid snappy length header");for(;o<n;){const a=e[o];let l=0;if(o++,o>=n)throw new Error("missing eof marker");if(a&3){let d=0;switch(a&3){case 1:l=(a>>>2&7)+4,d=e[o]+(a>>>5<<8),o++;break;case 2:if(n<=o+1)throw new Error("snappy error end of input");l=(a>>>2)+1,d=e[o]+(e[o+1]<<8),o+=2;break;case 3:if(n<=o+3)throw new Error("snappy error end of input");l=(a>>>2)+1,d=e[o]+(e[o+1]<<8)+(e[o+2]<<16)+(e[o+3]<<24),o+=4;break}if(d===0||isNaN(d))throw new Error(`invalid offset ${d} pos ${o} inputLength ${n}`);if(d>i)throw new Error("cannot copy from before start of buffer");mr(t,i-d,t,i,l),i+=l}else{let d=(a>>>2)+1;if(d>60){if(o+3>=n)throw new Error("snappy error literal pos + 3 >= inputLength");const s=d-60;d=e[o]+(e[o+1]<<8)+(e[o+2]<<16)+(e[o+3]<<24),d=(d&dl[s])+1,o+=s}if(o+d>n)throw new Error("snappy error literal exceeds input length");mr(e,o,t,i,d),o+=d,i+=d}}if(i!==r)throw new Error("premature end of input")}function cl(e,t,n,{type:r}){const o=new DataView(e.buffer,e.byteOffset,e.byteLength),i={view:o,offset:0};let a;const l=hl(i,t,n),{definitionLevels:d,numNulls:s}=gl(i,t,n),c=t.num_values-s;if(t.encoding==="PLAIN"){const{type_length:u}=n[n.length-1].element;a=Mn(i,r,c,u)}else if(t.encoding==="PLAIN_DICTIONARY"||t.encoding==="RLE_DICTIONARY"||t.encoding==="RLE"){const u=r==="BOOLEAN"?1:o.getUint8(i.offset++);u?(a=new Array(c),r==="BOOLEAN"?(st(i,u,0,a),a=a.map(g=>!!g)):st(i,u,o.byteLength-i.offset,a)):a=new Uint8Array(c)}else if(t.encoding==="BYTE_STREAM_SPLIT"){const{type_length:u}=n[n.length-1].element;a=go(i,c,r,u)}else throw new Error(`parquet unsupported encoding: ${t.encoding}`);return{definitionLevels:d,repetitionLevels:l,dataPage:a}}function ul(e,t,n,r){const i={view:new DataView(e.buffer,e.byteOffset,e.byteLength),offset:0};return Mn(i,n.type,t.num_values,r)}function hl(e,t,n){if(n.length>1){const r=lo(n);if(r){const o=new Array(t.num_values);return st(e,nn(r),0,o),o}}return[]}function gl(e,t,n){const r=_t(n);if(!r)return{definitionLevels:[],numNulls:0};const o=new Array(t.num_values);st(e,nn(r),0,o);let i=t.num_values;for(const a of o)a===r&&i--;return i===0&&(o.length=0),{definitionLevels:o,numNulls:i}}function Cn(e,t,n,r){let o;const i=r?.[n];if(n==="UNCOMPRESSED")o=e;else if(i)o=i(e,t);else if(n==="SNAPPY")o=new Uint8Array(t),fl(e,o);else throw new Error(`parquet unsupported compression codec: ${n}`);if(o?.length!==t)throw new Error(`parquet decompressed page length ${o?.length} does not match header ${t}`);return o}function Al(e,t,n,r,o){const a={view:new DataView(e.buffer,e.byteOffset,e.byteLength),offset:0},{codec:l,type:d}=r,s=t.data_page_header_v2;if(!s)throw new Error("parquet data page header v2 is undefined");const c=pl(a,s,n);a.offset=s.repetition_levels_byte_length;const u=vl(a,s,n),g=t.uncompressed_page_size-s.definition_levels_byte_length-s.repetition_levels_byte_length;let p=e.subarray(a.offset);s.is_compressed!==!1&&(p=Cn(p,g,l,o));const A=new DataView(p.buffer,p.byteOffset,p.byteLength),h={view:A,offset:0};let f;const v=s.num_values-s.num_nulls;if(s.encoding==="PLAIN"){const{type_length:b}=n[n.length-1].element;f=Mn(h,d,v,b)}else if(s.encoding==="RLE")f=new Array(v),st(h,1,0,f),f=f.map(b=>!!b);else if(s.encoding==="PLAIN_DICTIONARY"||s.encoding==="RLE_DICTIONARY"){const b=A.getUint8(h.offset++);f=new Array(v),st(h,b,g-1,f)}else if(s.encoding==="DELTA_BINARY_PACKED")f=d==="INT32"?new Int32Array(v):new BigInt64Array(v),$t(h,v,f);else if(s.encoding==="DELTA_LENGTH_BYTE_ARRAY")f=new Array(v),Ja(h,v,f);else if(s.encoding==="DELTA_BYTE_ARRAY")f=new Array(v),Xa(h,v,f);else if(s.encoding==="BYTE_STREAM_SPLIT"){const{type_length:b}=n[n.length-1].element;f=go(a,v,d,b)}else throw new Error(`parquet unsupported encoding: ${s.encoding}`);return{definitionLevels:u,repetitionLevels:c,dataPage:f}}function pl(e,t,n){const r=lo(n);if(!r)return[];const o=new Array(t.num_values);return st(e,nn(r),t.repetition_levels_byte_length,o),o}function vl(e,t,n){const r=_t(n);if(r){const o=new Array(t.num_values);return st(e,nn(r),t.definition_levels_byte_length,o),o}}function ml(e,t,n,r,{compressors:o,utf8:i}){const{element:a}=r[r.length-1],l=[];let d;const s=t!==void 0&&t>=0&&isFinite(t);let c=0;for(;(!s||c<t)&&!(e.offset>=e.view.byteLength-1);){const u=wl(e),g=new Uint8Array(e.view.buffer,e.view.byteOffset+e.offset,u.compressed_page_size);if(u.type==="DATA_PAGE"){const p=u.data_page_header;if(!p)throw new Error("parquet data page header is undefined");const A=Cn(g,Number(u.uncompressed_page_size),n.codec,o),{definitionLevels:h,repetitionLevels:f,dataPage:v}=cl(A,p,r,n);let b=ur(v,d,a,p.encoding,i);if(f.length||h?.length){const C=_t(r),F=r.map(({element:x})=>x.repetition_type),R=vr([],h,f,b,F,C);l.push(R),c+=R.length}else{for(let C=2;C<r.length;C++)r[C].element.repetition_type!=="REQUIRED"&&(b=Array.from(b,F=>[F]));l.push(b),c+=b.length}}else if(u.type==="DATA_PAGE_V2"){const p=u.data_page_header_v2;if(!p)throw new Error("parquet data page header v2 is undefined");const{definitionLevels:A,repetitionLevels:h,dataPage:f}=Al(g,u,r,n,o),v=ur(f,d,a,p.encoding,i);if(h.length||A?.length){const b=_t(r),C=r.map(({element:R})=>R.repetition_type),F=vr([],A,h,v,C,b);l.push(F),c+=F.length}else l.push(v),c+=v.length}else if(u.type==="DICTIONARY_PAGE"){const p=u.dictionary_page_header;if(!p)throw new Error("parquet dictionary page header is undefined");const A=Cn(g,Number(u.uncompressed_page_size),n.codec,o);d=ul(A,p,n,a.type_length)}else throw new Error(`parquet unsupported page type: ${u.type}`);e.offset+=u.compressed_page_size}if(s){if(c<t)throw new Error(`parquet row data length ${c} does not match row group limit ${t}}`);if(c>t){const u=l[l.length-1];l[l.length-1]=u.slice(0,t-(c-u.length))}}return l}function wr({dictionary_page_offset:e,data_page_offset:t,total_compressed_size:n}){let r=e;return(!r||t<r)&&(r=t),[r,r+n]}function wl(e){const t=so(e),n=no[t.field_1],r=t.field_2,o=t.field_3,i=t.field_4,a=t.field_5&&{num_values:t.field_5.field_1,encoding:ht[t.field_5.field_2],definition_level_encoding:ht[t.field_5.field_3],repetition_level_encoding:ht[t.field_5.field_4],statistics:t.field_5.field_5&&{max:t.field_5.field_5.field_1,min:t.field_5.field_5.field_2,null_count:t.field_5.field_5.field_3,distinct_count:t.field_5.field_5.field_4,max_value:t.field_5.field_5.field_5,min_value:t.field_5.field_5.field_6}},l=t.field_6,d=t.field_7&&{num_values:t.field_7.field_1,encoding:ht[t.field_7.field_2],is_sorted:t.field_7.field_3},s=t.field_8&&{num_values:t.field_8.field_1,num_nulls:t.field_8.field_2,num_rows:t.field_8.field_3,encoding:ht[t.field_8.field_4],definition_levels_byte_length:t.field_8.field_5,repetition_levels_byte_length:t.field_8.field_6,is_compressed:t.field_8.field_7===void 0?!0:t.field_8.field_7,statistics:t.field_8.field_8};return{type:n,uncompressed_page_size:r,compressed_page_size:o,crc:i,data_page_header:a,index_page_header:l,dictionary_page_header:d,data_page_header_v2:s}}function Ao(e,t){for(let r=0;r<t.length;r+=1e4)e.push(...t.slice(r,r+1e4))}async function bl(e){if(!e.file||!(e.file.byteLength>=0))throw new Error("parquetRead expected file AsyncBuffer");if(e.metadata||=await ja(e.file),!e.metadata)throw new Error("parquet metadata not found");const{metadata:t,onComplete:n,rowEnd:r}=e,o=e.rowStart||0,i=[];let a=0;for(const l of t.row_groups){const d=Number(l.num_rows);if(a+d>=o&&(r===void 0||a<r)){const s=r&&r-a,c=await yl(e,l,a,s);if(n){const u=Math.max(o-a,0),g=r===void 0?void 0:r-a;Ao(i,c.slice(u,g))}}a+=d}n&&n(i)}async function yl(e,t,n,r){const{file:o,metadata:i,columns:a}=e;if(!i)throw new Error("parquet metadata not found");(r===void 0||r>t.num_rows)&&(r=Number(t.num_rows));let[l,d]=[o.byteLength,0];if(t.columns.forEach(({meta_data:A})=>{if(!A)throw new Error("parquet column metadata is undefined");if(a&&!a.includes(A.path_in_schema[0]))return;const[h,f]=wr(A).map(Number);l=Math.min(l,h),d=Math.max(d,f)}),l>=d&&a?.length)throw new Error(`parquet columns not found: ${a.join(", ")}`);let s;d-l<=1<<25&&(s=await o.slice(l,d));const c=[],{children:u}=gr(i.schema,[])[0],g=new Map(u.map(A=>[A.element.name,po(A)])),p=new Map;for(let A=0;A<t.columns.length;A++){const h=t.columns[A].meta_data;if(!h)throw new Error("parquet column metadata is undefined");const f=h.path_in_schema[0];if(a&&!a.includes(f))continue;const[v,b]=wr(h).map(Number),C=b-v;if(C>1<<30){console.warn(`parquet skipping huge column "${h.path_in_schema}" ${C.toLocaleString()} bytes`);continue}let F,R=0;s?(F=Promise.resolve(s),R=v-l):F=Promise.resolve(o.slice(v,b)),c.push(F.then(x=>{const P=gr(i.schema,h.path_in_schema),j={view:new DataView(x),offset:R};let I=ml(j,r,h,P,e);const H=h.path_in_schema.join(".");p.set(H,I),I=void 0;const E=g.get(f);if(E?.every(M=>p.has(M))){const M=new Map(E.map(k=>[k,br(p.get(k))]));Ft(M,P[1]);const T=M.get(f);if(T)I=[T],E.forEach(k=>p.delete(k)),p.set(f,I);else throw new Error(`parquet column data not assembled: ${f}`)}if(I)for(const M of I)e.onChunk?.({columnName:f,columnData:M,rowStart:n,rowEnd:n+r})}))}if(await Promise.all(c),e.onComplete){const A=new Array(r),h=u.map(b=>b.element.name).filter(b=>!a||a.includes(b)),f=a||h,v=f.map(b=>h.includes(b)?br(p.get(b)):void 0);for(let b=0;b<r;b++)if(e.rowFormat==="object"){const C={};f.forEach((F,R)=>{C[F]=v[R]?.[b]}),A[b]=C}else A[b]=v.map(C=>C?.[b]);return A}return[]}function br(e){if(!e)return[];if(e.length===1)return e[0];const t=[];for(const n of e)Ao(t,n);return t}function po(e,t=[]){if(e.children.length)for(const n of e.children)po(n,t);else t.push(e.path.join("."));return t}function Cl(e){return new Promise((t,n)=>{bl({rowFormat:"object",...e,onComplete:t}).catch(n)})}var xl=ArrayBuffer,ye=Uint8Array,en=Uint16Array,Il=Int16Array,on=Int32Array,gn=function(e,t,n){if(ye.prototype.slice)return ye.prototype.slice.call(e,t,n);(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new ye(n-t);return r.set(e.subarray(t,n)),r},Ut=function(e,t,n,r){if(ye.prototype.fill)return ye.prototype.fill.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;++n)e[n]=t;return e},Rl=function(e,t,n,r){if(ye.prototype.copyWithin)return ye.prototype.copyWithin.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;)e[t++]=e[n++]},Bl=["invalid zstd data","window size too large (>2046MB)","invalid block type","FSE accuracy too high","match distance too far back","unexpected EOF"],Ie=function(e,t,n){var r=new Error(t||Bl[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Ie),!n)throw r;return r},yr=function(e,t,n){for(var r=0,o=0;r<n;++r)o|=e[t++]<<(r<<3);return o},El=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Sl=function(e,t){var n=e[0]|e[1]<<8|e[2]<<16;if(n==3126568&&e[3]==253){var r=e[4],o=r>>5&1,i=r>>2&1,a=r&3,l=r>>6;r&8&&Ie(0);var d=6-o,s=a==3?4:a,c=yr(e,d,s);d+=s;var u=l?1<<l:o,g=yr(e,d,u)+(l==1&&256),p=g;if(!o){var A=1<<10+(e[5]>>3);p=A+(A>>3)*(e[5]&7)}p>2145386496&&Ie(1);var h=new ye((t==1?g||p:t?0:p)+12);return h[0]=1,h[4]=4,h[8]=8,{b:d+u,y:0,l:0,d:c,w:t&&t!=1?t:h.subarray(12),e:p,o:new on(h.buffer,0,3),u:g,c:i,m:Math.min(131072,p)}}else if((n>>4|e[3]<<20)==25481893)return El(e,4)+8;Ie(0)},vt=function(e){for(var t=0;1<<t<=e;++t);return t-1},zt=function(e,t,n){var r=(t<<3)+4,o=(e[t]&15)+5;o>n&&Ie(3);for(var i=1<<o,a=i,l=-1,d=-1,s=-1,c=i,u=new xl(512+(i<<2)),g=new Il(u,0,256),p=new en(u,0,256),A=new en(u,512,i),h=512+(i<<1),f=new ye(u,h,i),v=new ye(u,h+i);l<255&&a>0;){var b=vt(a+1),C=r>>3,F=(1<<b+1)-1,R=(e[C]|e[C+1]<<8|e[C+2]<<16)>>(r&7)&F,x=(1<<b)-1,P=F-a-1,j=R&x;if(j<P?(r+=b,R=j):(r+=b+1,R>x&&(R-=P)),g[++l]=--R,R==-1?(a+=R,f[--c]=l):a-=R,!R)do{var B=r>>3;d=(e[B]|e[B+1]<<8)>>(r&7)&3,r+=2,l+=d}while(d==3)}(l>255||a)&&Ie(0);for(var I=0,H=(i>>1)+(i>>3)+3,E=i-1,M=0;M<=l;++M){var T=g[M];if(T<1){p[M]=-T;continue}for(s=0;s<T;++s){f[I]=M;do I=I+H&E;while(I>=c)}}for(I&&Ie(0),s=0;s<i;++s){var k=p[f[s]]++,O=v[s]=o-vt(k);A[s]=(k<<O)-i}return[r+7>>3,{b:o,s:f,n:v,t:A}]},kl=function(e,t){var n=0,r=-1,o=new ye(292),i=e[t],a=o.subarray(0,256),l=o.subarray(256,268),d=new en(o.buffer,268);if(i<128){var s=zt(e,t+1,6),c=s[0],u=s[1];t+=i;var g=c<<3,p=e[t];p||Ie(0);for(var A=0,h=0,f=u.b,v=f,b=(++t<<3)-8+vt(p);b-=f,!(b<g);){var C=b>>3;if(A+=(e[C]|e[C+1]<<8)>>(b&7)&(1<<f)-1,a[++r]=u.s[A],b-=v,b<g)break;C=b>>3,h+=(e[C]|e[C+1]<<8)>>(b&7)&(1<<v)-1,a[++r]=u.s[h],f=u.n[A],A=u.t[A],v=u.n[h],h=u.t[h]}++r>255&&Ie(0)}else{for(r=i-127;n<r;n+=2){var F=e[++t];a[n]=F>>4,a[n+1]=F&15}++t}var R=0;for(n=0;n<r;++n){var x=a[n];x>11&&Ie(0),R+=x&&1<<x-1}var P=vt(R)+1,j=1<<P,B=j-R;for(B&B-1&&Ie(0),a[r++]=vt(B)+1,n=0;n<r;++n){var x=a[n];++l[a[n]=x&&P+1-x]}var I=new ye(j<<1),H=I.subarray(0,j),E=I.subarray(j);for(d[P]=0,n=P;n>0;--n){var M=d[n];Ut(E,n,M,d[n-1]=M+l[n]*(1<<P-n))}for(d[0]!=j&&Ie(0),n=0;n<r;++n){var T=a[n];if(T){var k=d[T];Ut(H,n,k,d[T]=k+(1<<P-T))}}return[t,{n:E,b:P,s:H}]},Fl=zt(new ye([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],Pl=zt(new ye([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],Tl=zt(new ye([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],vo=function(e,t){for(var n=e.length,r=new on(n),o=0;o<n;++o)r[o]=t,t+=1<<e[o];return r},xn=new ye(new on([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),Ll=vo(xn,0),In=new ye(new on([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),Ul=vo(In,3),Pt=function(e,t,n){var r=e.length,o=t.length,i=e[r-1],a=(1<<n.b)-1,l=-n.b;i||Ie(0);for(var d=0,s=n.b,c=(r<<3)-8+vt(i)-s,u=-1;c>l&&u<o;){var g=c>>3,p=(e[g]|e[g+1]<<8|e[g+2]<<16)>>(c&7);d=(d<<s|p)&a,t[++u]=n.s[d],c-=s=n.n[d]}(c!=l||u+1!=o)&&Ie(0)},Ql=function(e,t,n){var r=6,o=t.length,i=o+3>>2,a=i<<1,l=i+a;Pt(e.subarray(r,r+=e[0]|e[1]<<8),t.subarray(0,i),n),Pt(e.subarray(r,r+=e[2]|e[3]<<8),t.subarray(i,a),n),Pt(e.subarray(r,r+=e[4]|e[5]<<8),t.subarray(a,l),n),Pt(e.subarray(r),t.subarray(l),n)},Nl=function(e,t,n){var r,o=t.b,i=e[o],a=i>>1&3;t.l=i&1;var l=i>>3|e[o+1]<<5|e[o+2]<<13,d=(o+=3)+l;if(a==1)return o>=e.length?void 0:(t.b=o+1,n?(Ut(n,e[o],t.y,t.y+=l),n):Ut(new ye(l),e[o]));if(!(d>e.length)){if(a==0)return t.b=d,n?(n.set(e.subarray(o,d),t.y),t.y+=l,n):gn(e,o,d);if(a==2){var s=e[o],c=s&3,u=s>>2&3,g=s>>4,p=0,A=0;c<2?u&1?g|=e[++o]<<4|(u&2&&e[++o]<<12):g=s>>3:(A=u,u<2?(g|=(e[++o]&63)<<4,p=e[o]>>6|e[++o]<<2):u==2?(g|=e[++o]<<4|(e[++o]&3)<<12,p=e[o]>>2|e[++o]<<6):(g|=e[++o]<<4|(e[++o]&63)<<12,p=e[o]>>6|e[++o]<<2|e[++o]<<10)),++o;var h=n?n.subarray(t.y,t.y+t.m):new ye(t.m),f=h.length-g;if(c==0)h.set(e.subarray(o,o+=g),f);else if(c==1)Ut(h,e[o++],f);else{var v=t.h;if(c==2){var b=kl(e,o);p+=o-(o=b[0]),t.h=v=b[1]}else v||Ie(0);(A?Ql:Pt)(e.subarray(o,o+=p),h.subarray(f),v)}var C=e[o++];if(C){C==255?C=(e[o++]|e[o++]<<8)+32512:C>127&&(C=C-128<<8|e[o++]);var F=e[o++];F&3&&Ie(0);for(var R=[Pl,Tl,Fl],x=2;x>-1;--x){var P=F>>(x<<1)+2&3;if(P==1){var j=new ye([0,0,e[o++]]);R[x]={s:j.subarray(2,3),n:j.subarray(0,1),t:new en(j.buffer,0,1),b:0}}else P==2?(r=zt(e,o,9-(x&1)),o=r[0],R[x]=r[1]):P==3&&(t.t||Ie(0),R[x]=t.t[x])}var B=t.t=R,I=B[0],H=B[1],E=B[2],M=e[d-1];M||Ie(0);var T=(d<<3)-8+vt(M)-E.b,k=T>>3,O=0,te=(e[k]|e[k+1]<<8)>>(T&7)&(1<<E.b)-1;k=(T-=H.b)>>3;var J=(e[k]|e[k+1]<<8)>>(T&7)&(1<<H.b)-1;k=(T-=I.b)>>3;var oe=(e[k]|e[k+1]<<8)>>(T&7)&(1<<I.b)-1;for(++C;--C;){var _=E.s[te],S=E.n[te],Q=I.s[oe],q=I.n[oe],N=H.s[J],K=H.n[J];k=(T-=N)>>3;var de=1<<N,ae=de+((e[k]|e[k+1]<<8|e[k+2]<<16|e[k+3]<<24)>>>(T&7)&de-1);k=(T-=In[Q])>>3;var ne=Ul[Q]+((e[k]|e[k+1]<<8|e[k+2]<<16)>>(T&7)&(1<<In[Q])-1);k=(T-=xn[_])>>3;var w=Ll[_]+((e[k]|e[k+1]<<8|e[k+2]<<16)>>(T&7)&(1<<xn[_])-1);if(k=(T-=S)>>3,te=E.t[te]+((e[k]|e[k+1]<<8)>>(T&7)&(1<<S)-1),k=(T-=q)>>3,oe=I.t[oe]+((e[k]|e[k+1]<<8)>>(T&7)&(1<<q)-1),k=(T-=K)>>3,J=H.t[J]+((e[k]|e[k+1]<<8)>>(T&7)&(1<<K)-1),ae>3)t.o[2]=t.o[1],t.o[1]=t.o[0],t.o[0]=ae-=3;else{var Y=ae-(w!=0);Y?(ae=Y==3?t.o[0]-1:t.o[Y],Y>1&&(t.o[2]=t.o[1]),t.o[1]=t.o[0],t.o[0]=ae):ae=t.o[0]}for(var x=0;x<w;++x)h[O+x]=h[f+x];O+=w,f+=w;var fe=O-ae;if(fe<0){var le=-fe,Re=t.e+fe;le>ne&&(le=ne);for(var x=0;x<le;++x)h[O+x]=t.w[Re+x];O+=le,ne-=le,fe=0}for(var x=0;x<ne;++x)h[O+x]=h[fe+x];O+=ne}if(O!=f)for(;f<h.length;)h[O++]=h[f++];else O=h.length;n?t.y+=O:h=gn(h,0,O)}else if(n){if(t.y+=g,f)for(var x=0;x<g;++x)h[x]=h[f+x]}else f&&(h=gn(h,f));return t.b=d,h}Ie(2)}},Ml=function(e,t){if(e.length==1)return e[0];for(var n=new ye(t),r=0,o=0;r<e.length;++r){var i=e[r];n.set(i,o),o+=i.length}return n};function zl(e,t){for(var n=[],r=+!t,o=0,i=0;e.length;){var a=Sl(e,r||t);if(typeof a=="object"){for(r?(t=null,a.w.length==a.u&&(n.push(t=a.w),i+=a.u)):(n.push(t),a.e=0);!a.l;){var l=Nl(e,a,t);l||Ie(5),t?a.e=a.y:(n.push(l),i+=l.length,Rl(a.w,0,l.length),a.w.set(l,a.w.length-l.length))}o=a.b+a.c*4}else o=a;e=e.subarray(o)}return Ml(n,i)}function Ol(){const e=Dl();return(t,n)=>{const{memory:r,uncompress:o}=e.exports,i=68e3,a=i+t.byteLength,l=i+t.byteLength+n;if(r.buffer.byteLength<l){const u=r.buffer.byteLength/65536,p=Math.ceil(l/65536)-u;r.grow(p)}const d=new Uint8Array(r.buffer);d.set(t,i);const s=o(i,t.byteLength,a);if(s===-1)throw new Error("invalid snappy length header");if(s===-2)throw new Error("missing eof marker");if(s===-3)throw new Error("premature end of input");if(s)throw new Error(`failed to uncompress data ${s}`);return d.slice(a,a+n)}}function Dl(){const e=atob(Hl),t=new Uint8Array(e.length);for(let r=0;r<e.length;r+=1)t[r]=e.charCodeAt(r);const n=new WebAssembly.Module(t);return new WebAssembly.Instance(n)}const Hl="AGFzbQEAAAABEANgAABgA39/fwF/YAF/AX8DBgUAAQEBAgUDAQACBj8KfwFBoIwEC38AQYAIC38AQaAMC38AQaAMC38AQaCMBAt/AEGACAt/AEGgjAQLfwBBgIAIC38AQQALfwBBAQsHwQEOBm1lbW9yeQIAEV9fd2FzbV9jYWxsX2N0b3JzAAAGbWVtY3B5AAEHbWVtbW92ZQACCnVuY29tcHJlc3MAAwxfX2Rzb19oYW5kbGUDAQpfX2RhdGFfZW5kAwILX19zdGFja19sb3cDAwxfX3N0YWNrX2hpZ2gDBA1fX2dsb2JhbF9iYXNlAwULX19oZWFwX2Jhc2UDBgpfX2hlYXBfZW5kAwcNX19tZW1vcnlfYmFzZQMIDF9fdGFibGVfYmFzZQMJCuASBQIAC8sBAQN/AkAgAkUNAAJAAkAgAkEHcSIDDQAgACEEIAIhBQwBCyAAIQQgAiEFA0AgBCABLQAAOgAAIARBAWohBCABQQFqIQEgBUF/aiEFIANBf2oiAw0ACwsgAkEISQ0AA0AgBCABLQAAOgAAIAQgAS0AAToAASAEIAEtAAI6AAIgBCABLQADOgADIAQgAS0ABDoABCAEIAEtAAU6AAUgBCABLQAGOgAGIAQgAS0ABzoAByAEQQhqIQQgAUEIaiEBIAVBeGoiBQ0ACwsgAAugAwEEfwJAIAAgAUYNAAJAAkAgACABSQ0AIAEgAmoiAyAASw0BCyACRQ0BAkACQCACQQdxIgMNACAAIQQgAiEFDAELIAAhBCACIQUDQCAEIAEtAAA6AAAgBEEBaiEEIAFBAWohASAFQX9qIQUgA0F/aiIDDQALCyACQQhJDQEDQCAEIAEtAAA6AAAgBCABLQABOgABIAQgAS0AAjoAAiAEIAEtAAM6AAMgBCABLQAEOgAEIAQgAS0ABToABSAEIAEtAAY6AAYgBCABLQAHOgAHIARBCGohBCABQQhqIQEgBUF4aiIFDQAMAgsLIAJFDQACQAJAIAJBA3EiBA0AIAAgAmohBiACIQUMAQsgAiEFA0AgBUF/aiIFIABqIgYgBSABaiIDLQAAOgAAIARBf2oiBA0ACwsgAkEESQ0AIAZBfGohASADQXxqIQQDQCABQQNqIARBA2otAAA6AAAgAUECaiAEQQJqLQAAOgAAIAFBAWogBEEBai0AADoAACABIAQtAAA6AAAgAUF8aiEBIARBfGohBCAFQXxqIgUNAAsLIAALswoBCX8jgICAgABBIGsiAySAgICAACADQQlqQgA3AAAgA0IANwIEIAMgA0EYajYCAEF/IQQCQCABRQ0AIAMgAUF/aiIFNgIcIAMgAEEBajYCGCAALAAAIgZB/wBxIQcCQCAGQX9KDQAgBUUNASADIAFBfmoiBTYCHCADIABBAmo2AhggACwAASIGQf8AcUEHdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfWoiBTYCHCADIABBA2o2AhggACwAAiIGQf8AcUEOdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfGoiBTYCHCADIABBBGo2AhggACwAAyIGQf8AcUEVdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBe2o2AhwgAyAAQQVqNgIYIAAsAAQiAUEASA0BIAFBHHQgB3IhBwsgAiAHaiEIAkACQCADEISAgIAADQAgAiEADAELIAMoAgQhASACIQADQAJAIAMoAgggAWtBBEoNACADIAE2AgQgAxCEgICAAEUNAiADKAIEIQELIAFBAWohBQJAAkAgAS0AACIGQQNxDQAgCCAAayEJIAMoAggiCiAFayEEIAZBAnYiC0EBaiEHAkAgBkE/Sw0AIARBEEkNACAJQRBIDQAgACABKAIBNgIAIAAgASgCBTYCBCAAIAEoAgk2AgggACABKAINNgIMIAAgB2ohACADKAIIIAUgB2oiAWtBBEoNAyADIAE2AgQgAxCEgICAAEUNBAwCCwJAAkAgBkHwAU8NACAFIQYMAQsgCiAFIAtBRWoiAWoiBmshBCABQQJ0QYCIgIAAaigCACAFKAIAcUEBaiEHCwJAIAcgBE0NAANAIAggAGsgBEkNBSAAIAYgBBCBgICAACEAIAMoAgAiASABKAIAIgkgAygCDCIFaiIGNgIAIAFBBGoiASABKAIAIgogBWsiATYCACADIAE2AgwgACAEaiEAIAFFDQUgAyAJIApqNgIIIAcgBGshByABIQQgByABSw0ACyAIIABrIQkLIAkgB0kNAyAAIAYgBxCBgICAACAHaiEAIAMoAgggBiAHaiIBa0EESg0CIAMgATYCBCADEISAgIAADQEMAwsgACACayAGQQF0QaCIgIAAai8BACIBQQt2IgpBAnRBgIiAgABq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",gt=4096,Wl=2*gt+32,mo=2*gt-1,Yl=new Uint32Array([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215]);function _e(e){this.buf_=new Uint8Array(Wl),this.input_=e,this.buf_ptr_=0,this.val_=0,this.pos_=0,this.reset()}_e.READ_SIZE=gt;_e.IBUF_MASK=mo;_e.prototype.reset=function(){this.buf_ptr_=0,this.val_=0,this.pos_=0,this.bit_pos_=0,this.bit_end_pos_=0,this.eos_=0,this.readMoreInput();for(let e=0;e<4;e++)this.val_|=this.buf_[this.pos_]<<8*e,this.pos_++;return this.bit_end_pos_>0};_e.prototype.readMoreInput=function(){if(!(this.bit_end_pos_>256))if(this.eos_){if(this.bit_pos_>this.bit_end_pos_)throw new Error("Unexpected end of input "+this.bit_pos_+" "+this.bit_end_pos_)}else{const e=this.buf_ptr_,t=this.input_.read(this.buf_,e,gt);if(t<0)throw new Error("Unexpected end of input");if(t<gt){this.eos_=1;for(let n=0;n<32;n++)this.buf_[e+t+n]=0}if(e===0){for(let n=0;n<32;n++)this.buf_[(gt<<1)+n]=this.buf_[n];this.buf_ptr_=gt}else this.buf_ptr_=0;this.bit_end_pos_+=t<<3}};_e.prototype.fillBitWindow=function(){for(;this.bit_pos_>=8;)this.val_>>>=8,this.val_|=this.buf_[this.pos_&mo]<<24,this.pos_++,this.bit_pos_=this.bit_pos_-8>>>0,this.bit_end_pos_=this.bit_end_pos_-8>>>0};_e.prototype.readBits=function(e){32-this.bit_pos_<e&&this.fillBitWindow();const t=this.val_>>>this.bit_pos_&Yl[e];return this.bit_pos_+=e,t};const Cr=new Uint8Array([0,0,0,0,0,0,0,0,0,4,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,12,16,12,12,20,12,16,24,28,12,12,32,12,36,12,44,44,44,44,44,44,44,44,44,44,32,32,24,40,28,12,12,48,52,52,52,48,52,52,52,48,52,52,52,52,52,48,52,52,52,52,52,48,52,52,52,52,52,24,12,28,12,12,12,56,60,60,60,56,60,60,60,56,60,60,60,60,60,56,60,60,60,60,60,56,60,60,60,60,60,24,12,28,12,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,56,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Vt=new Uint16Array([1024,1536,1280,1536,0,256,768,512]),Kl=8,Rn=8,ql=255,Bn=18,Vl=new Uint8Array([1,2,3,4,0,5,17,6,16,7,8,9,10,11,12,13,14,15]);function Ae(e,t){this.bits=e,this.value=t}const xr=16,Rt=15;function Ir(e,t){let n=1<<t-1;for(;e&n;)n>>=1;return(e&n-1)+n}function Rr(e,t,n,r,o){do r-=n,e[t+r]=new Ae(o.bits,o.value);while(r>0)}function jl(e,t,n){let r=1<<t-n;for(;t<Rt&&(r-=e[t],!(r<=0));)++t,r<<=1;return t-n}function wo(e,t,n,r,o){const i=t,a=new Int32Array(Rt+1),l=new Int32Array(Rt+1),d=new Int32Array(o);for(let f=0;f<o;f++)a[r[f]]++;l[1]=0;for(let f=1;f<Rt;f++)l[f+1]=l[f]+a[f];for(let f=0;f<o;f++)r[f]!==0&&(d[l[r[f]]++]=f);let s=n,c=1<<s,u=c;if(l[Rt]===1){for(let f=0;f<u;++f)e[t+f]=new Ae(0,d[0]&65535);return u}let g=0,p=0;for(let f=1,v=2;f<=n;++f,v<<=1)for(;a[f]>0;--a[f]){const b=new Ae(f&255,d[p++]&65535);Rr(e,t+g,v,c,b),g=Ir(g,f)}const A=u-1;let h=-1;for(let f=n+1,v=2;f<=Rt;++f,v<<=1)for(;a[f]>0;--a[f]){(g&A)!==h&&(t+=c,s=jl(a,f,n),c=1<<s,u+=c,h=g&A,e[i+h]=new Ae(s+n&255,t-i-h&65535));const b=new Ae(f-n&255,d[p++]&65535);Rr(e,t+(g>>n),v,c,b),g=Ir(g,f)}return u}function tn(e,t,n,r){const o=new Uint8Array(e);r.readMoreInput();const i=r.readBits(2);if(i===1){let l=e-1,d=0;const s=new Int32Array(4),c=r.readBits(2)+1;for(;l;)l>>=1,d++;for(let u=0;u<c;u++)s[u]=r.readBits(d)%e,o[s[u]]=2;switch(o[s[0]]=1,c){case 1:break;case 3:if(s[0]===s[1]||s[0]===s[2]||s[1]===s[2])throw new Error("[ReadHuffmanCode] invalid symbols");break;case 2:if(s[0]===s[1])throw new Error("[ReadHuffmanCode] invalid symbols");o[s[1]]=1;break;case 4:if(s[0]===s[1]||s[0]===s[2]||s[0]===s[3]||s[1]===s[2]||s[1]===s[3]||s[2]===s[3])throw new Error("[ReadHuffmanCode] invalid symbols");r.readBits(1)?(o[s[2]]=3,o[s[3]]=3):o[s[0]]=2;break}}else{const l=new Uint8Array(Bn);let d=32,s=0;const c=[new Ae(2,0),new Ae(2,4),new Ae(2,3),new Ae(3,2),new Ae(2,0),new Ae(2,4),new Ae(2,3),new Ae(4,1),new Ae(2,0),new Ae(2,4),new Ae(2,3),new Ae(3,2),new Ae(2,0),new Ae(2,4),new Ae(2,3),new Ae(4,5)];for(let u=i;u<Bn&&d>0;u++){const g=Vl[u];let p=0;r.fillBitWindow(),p+=r.val_>>>r.bit_pos_&15,r.bit_pos_+=c[p].bits;const A=c[p].value;l[g]=A,A!==0&&(d-=32>>A,s++)}if(!(s===1||d===0))throw new Error("[ReadHuffmanCode] invalid num_codes or space");Gl(l,e,o,r)}const a=wo(t,n,Rn,o,e);if(!a)throw new Error("brotli BuildHuffmanTable failed");return a}function Bt(e,t,n){n.fillBitWindow(),t+=n.val_>>>n.bit_pos_&ql;const r=e[t].bits-Rn;return r>0&&(n.bit_pos_+=Rn,t+=e[t].value,t+=n.val_>>>n.bit_pos_&(1<<r)-1),n.bit_pos_+=e[t].bits,e[t].value}function Gl(e,t,n,r){let o=0,i=Kl,a=0,l=0,d=32768;const s=[];for(let c=0;c<32;c++)s.push(new Ae(0,0));for(wo(s,0,5,e,Bn);o<t&&d>0;){let c=0;r.readMoreInput(),r.fillBitWindow(),c+=r.val_>>>r.bit_pos_&31,r.bit_pos_+=s[c].bits;const u=s[c].value&255;if(u<xr)a=0,n[o++]=u,u!==0&&(i=u,d-=32768>>u);else{const g=u-14;let p=0;u===xr&&(p=i),l!==p&&(a=0,l=p);const A=a;a>0&&(a-=2,a<<=g),a+=r.readBits(g)+3;const h=a-A;if(o+h>t)throw new Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols");for(let f=0;f<h;f++)n[o+f]=l;o+=h,l!==0&&(d-=h<<15-l)}}if(d!==0)throw new Error("[ReadHuffmanCodeLengths] space = "+d);for(;o<t;o++)n[o]=0}function L(e,t){this.offset=e,this.nbits=t}const Br=[new L(1,2),new L(5,2),new L(9,2),new L(13,2),new L(17,3),new L(25,3),new L(33,3),new L(41,3),new L(49,4),new L(65,4),new L(81,4),new L(97,4),new L(113,5),new L(145,5),new L(177,5),new L(209,5),new L(241,6),new L(305,6),new L(369,7),new L(497,8),new L(753,9),new L(1265,10),new L(2289,11),new L(4337,12),new L(8433,13),new L(16625,24)],Er=[new L(0,0),new L(1,0),new L(2,0),new L(3,0),new L(4,0),new L(5,0),new L(6,1),new L(8,1),new L(10,2),new L(14,2),new L(18,3),new L(26,3),new L(34,4),new L(50,4),new L(66,5),new L(98,5),new L(130,6),new L(194,7),new L(322,8),new L(578,9),new L(1090,10),new L(2114,12),new L(6210,14),new L(22594,24)],Sr=[new L(2,0),new L(3,0),new L(4,0),new L(5,0),new L(6,0),new L(7,0),new L(8,0),new L(9,0),new L(10,1),new L(12,1),new L(14,2),new L(18,2),new L(22,3),new L(30,3),new L(38,4),new L(54,4),new L(70,5),new L(102,5),new L(134,6),new L(198,7),new L(326,8),new L(582,9),new L(1094,10),new L(2118,24)],Zl=[0,0,8,8,0,16,8,16,16],Jl=[0,8,0,8,16,0,16,8,16];function bo(e){this.buffer=e,this.pos=0}bo.prototype.read=function(e,t,n){this.pos+n>this.buffer.length&&(n=this.buffer.length-this.pos);for(let r=0;r<n;r++)e[t+r]=this.buffer[this.pos+r];return this.pos+=n,n};function yo(e){this.buffer=e,this.pos=0}yo.prototype.write=function(e,t){if(this.pos+t>this.buffer.length)throw new Error("brotli output buffer is not large enough");return this.buffer.set(e.subarray(0,t),this.pos),this.pos+=t,t};const Co=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xo=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Xl=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);function Io(e,t){const n=new Uint16Array(31);for(let o=0;o<31;o++)n[o]=t+=1<<e[o-1];const r=new Int32Array(n[30]);for(let o=1;o<30;o++)for(let i=n[o];i<n[o+1];++i)r[i]=i-n[o]<<5|o;return{base:n,rev:r}}const{base:Ro,rev:_l}=Io(Co,2);Ro[28]=258;_l[258]=28;const{base:$l}=Io(xo,0),En=new Uint16Array(32768);for(let e=0;e<32768;e++){let t=(e&43690)>>1|(e&21845)<<1;t=(t&52428)>>2|(t&13107)<<2,t=(t&61680)>>4|(t&3855)<<4,En[e]=((t&65280)>>8|(t&255)<<8)>>1}function Qt(e,t,n){const r=new Uint16Array(t);for(let a=0;a<e.length;a++)e[a]&&++r[e[a]-1];const o=new Uint16Array(t);for(let a=1;a<t;a++)o[a]=o[a-1]+r[a-1]<<1;let i;if(n){i=new Uint16Array(1<<t);const a=15-t;for(let l=0;l<e.length;l++)if(e[l]){const d=l<<4|e[l],s=t-e[l];let c=o[e[l]-1]++<<s;for(const u=c|(1<<s)-1;c<=u;c++)i[En[c]>>a]=d}}else{i=new Uint16Array(e.length);for(let a=0;a<e.length;a++)e[a]&&(i[a]=En[o[e[a]-1]++]>>15-e[a])}return i}const Ot=new Uint8Array(288);for(let e=0;e<144;e++)Ot[e]=8;for(let e=144;e<256;e++)Ot[e]=9;for(let e=256;e<280;e++)Ot[e]=7;for(let e=280;e<288;e++)Ot[e]=8;const Bo=new Uint8Array(32);for(let e=0;e<32;e++)Bo[e]=5;const es=Qt(Ot,9,1),ts=Qt(Bo,5,1);function An(e){let t=e[0];for(let n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t}function Je(e,t,n){const r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n}function pn(e,t){const n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)}function ns(e){return(e+7)/8|0}function rs(e,t){if(e[t++]!==31||e[t++]!==139||e[t++]!==8)throw new Error("invalid gzip data");const n=e[t++];t+=6,n&4&&(t+=(e[t+10]|e[t+11]<<8)+2);for(let r=(n>>3&1)+(n>>4&1);r>0;r-=+!e[t++]);return t+(n&2)}function zn(e,t,n=0,r=0){if(!(e.length-n))return;const o=rs(e,n);if(o===e.length-8)return;if(o>e.length-8)throw new Error("unexpected EOF");let i=o*8,a=0,l=0,d=0,s,c;const u=e.length*8;do{if(!s){a=Je(e,i,1);const h=Je(e,i+1,3);if(i+=3,h)if(h===1)s=es,c=ts,l=9,d=5;else if(h===2){const f=Je(e,i,31)+257,v=Je(e,i+10,15)+4,b=f+Je(e,i+5,31)+1;i+=14;const C=new Uint8Array(b),F=new Uint8Array(19);for(let I=0;I<v;++I)F[Xl[I]]=Je(e,i+I*3,7);i+=v*3;const R=An(F),x=(1<<R)-1,P=Qt(F,R,1);for(let I=0;I<b;){const H=P[Je(e,i,x)];i+=H&15;const E=H>>4;if(E<16)C[I++]=E;else{let M=0,T=0;for(E===16?(T=3+Je(e,i,3),i+=2,M=C[I-1]):E===17?(T=3+Je(e,i,7),i+=3):E===18&&(T=11+Je(e,i,127),i+=7);T--;)C[I++]=M}}const j=C.subarray(0,f),B=C.subarray(f);l=An(j),d=An(B),s=Qt(j,l,1),c=Qt(B,d,1)}else throw new Error("invalid block type");else{const f=ns(i)+4,v=e[f-4]|e[f-3]<<8,b=f+v;if(b>e.length)throw new Error("unexpected EOF");t.set(e.subarray(f,b),r),r+=v,i=b*8;continue}if(i>u)throw new Error("unexpected EOF")}const g=(1<<l)-1,p=(1<<d)-1;let A=i;for(;;A=i){const h=s[pn(e,i)&g],f=h>>4;if(i+=h&15,i>u)throw new Error("unexpected EOF");if(!h)throw new Error("invalid length/literal");if(f<256)t[r++]=f;else if(f===256){A=i,s=void 0;break}else{let v=f-254;if(f>264){const x=f-257,P=Co[x];v=Je(e,i,(1<<P)-1)+Ro[x],i+=P}if(!c)throw new Error("invalid distance map");const b=c[pn(e,i)&p],C=b>>4;if(!b)throw new Error("invalid distance");i+=b&15;let F=$l[C];if(C>3){const x=xo[C];F+=pn(e,i)&(1<<x)-1,i+=x}if(i>u)throw new Error("unexpected EOF");const R=r+v;if(r<F)throw new Error("unexpected dictionary case");for(;r<R;r++)t[r]=t[r-F]}}i=A,s&&(a=1)}while(!a);if(r<t.length){const g=Math.ceil(i/8)+8;zn(e,t,g,r)}}const os=`
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
XH/9kw/e+uTa937x6JlPn7j+86ee/PnpG7e/+yefvfzM7ddetBc/+977t3/83mcf/PknV4/fPvfq7e+/
+cm7P/z0/F/84uwzn7154uc/PvHp69//9I9/+Ml7P7r9/IXbz57/9Pqf3r7y5GdvX/vs+KlPn/7LT0+9
8en505+dP/PZ+eufPnP99jtvffripU+vnrz9J+duf/+GtefTZ37wyfU37JVPT7/+6bnXfv79lz678vTt
v3jV/v25Pc73HsfFP3j59ok3rc0BJ2xs7t08Zz7DAKYbJnK5UgK2jQzJmCC4augYsG4CCZp91RPMCbYW
8rY2w92psSU9JsJr5eZ15HTJPhdaiJXaqRIg7wbBWKEHHX5adwdhvA2PhJOVkIQAXgHUR5kUgqH6MGbJ
Tde53MIZEy6yqT3ANRAzmtC71THhd+I63zxX1ps3X4Z9ESjZchjwqiFzLkBagm7Pm5oZd/Ona2Dpo0SW
Y7IEIhOZVrcgTg4z9eUeatU7/9w2XQdQNR4xq0vb/pGqKBvnbA8aB2VF1VrreWvMzZdXR+KVEBjpfVg7
ksxeQS+zV7Fw2NR4Ckd5E65GGF/Zc94LlRfsBWghULUSXnoJFac+6hn2H7HmV49EANm8/B5nSxkwvsbN
MkyBIZCVfSDxXmYmA5BcYsTQZk6SrdK/FWjBJmCS0fODJopqn2RJ7A+85DaKjp9kYWwVBb/Kf1/lu5f5
1gV+7ImoRK4i5Sf+9vSf+1v4/Bv89zVW7L4W11FV8mv88HNxneNshm76GptxJr5+ultDqWKw2ngJcDTp
wt++epL1y8/wM+f5+2n+/jN+/QKLo1/li6ejSRejbLnu/njc4kJUDb8Sb1lLXuArF3k7Nen5uJeKlL/B
eurHvan45Ud8imd4R/XYxahQ/gILnD8Vdcpf4/9Oq846r6BOuBL1zk/xuz/gTc/FXX4Q5d7Vkxeyeu0a
uKeiSDwHzvvZOuqElznHWy95b+MBv8NC7M9HJ5yKe/0gCrefZm+kausvRUed5IfVnu/FTc9Hj6nlN2LQ
7c+no0r9j+Je34su0gVVEv4Dvqjevsi+0nx4IwZaj6O5eiN69Tg74Q027wxbq68/EQ17HK97XXnNZ81V
jc5TbO25KGN/IZ7iRZ8q3s/n/bnw7ln++2I84Ktxr+Ns/7Woaq9G/jj+1IdP8JG1gk7zxTRbTkfzXmOb
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
+y++LtIcOB5PrcLur8W9XuSTnkS9eG//1agFf7V95DRv/Qrsf3z+xayvLscKusrLnon+POMF7ts2q69+
GCXUL7bP5b16nO15Ij7P5uHKp9nmC+zJk+yli+3Y+Tq6EaXkH8/2jcvx+pl2DqvfMMfeiK9ci8/rM1dj
nV5j807zk5pvmv8vRZ+cjkG5EnNAbb7iDda4t3M19eETsd6f5NWuRJ+8lu0Px7NnzPYcf6LoUtw3tecC
q9WnfYb3xdXOZ/Mnzc/jMUsv8y0WsvfxeiGbY6dizrzKm6a1prXwwvT+eZzf0lo7z2f/IK6j+a9N/vnp
Pf9afOa1bM5oYl/M9oGfRZ+8ETv5ad+j8JXz0bAf8InS9S/ECnqv7Qe89Xi8dTZG/EyMAluibmnX+wtT
e0U7uLHWfJ5f9odN+4P/qbHQ3HuG1+e08V36QnvG+fOmfj7FP6/yM29EI5/zZ/TPXI0Bupg94xPx7wu8
wmW+/k52Vl7w72Lf0Hn3ahp3qkVDF/tpKiS/TT3pR5Pq86Vb74Ri88cnoC798Sm+foWKyK1Ws5SUT926
SDXvpAOeFJZfzzSW37QrvAldcOhphzI4Xp3SEH9Myti438cn/V7hAVNVmrrXev0NtMnVpi+46jh+P4fP
+jXPfXySV1J73qLudVzzdXvvFBSp7TpX/fNQ6H6cn4K+9ROhUU4V6VeSNvlbt37Cp4DW+Jnsvk9Sn5tt
c4VzKVJfomq3FL+hzX0Kz88+DWXst6hv/rj0xqVdTR3xS9Sf1uuPUsX8rPfb43zKM1KsvnUWz4/r8NUr
1Et/mq9Dxfws+iB9lxrdrtd9ht94068v3XK1B9d+x5/xvM2Dp29d4hXfSnrdP8v+vUwFbe/zVuvcZkbb
J+ehh+7j/oara7fa8U/E62lMoe99DXMvxiKe8dZraI36wa7qiuPWX49TuTzUvWNcMPPe8vnzpv32JK+M
+X/d/oJO+mW2IObGGSq+n/W2XcXrjCsi8ge3vS0nisj/3gxmJm1wx55SUmN9PPToZb99h3LTEVam+DDY
eIPN2R1MhkivZQIUDyJ7KqK1Wg9Xx5secZzPscE5Jr9Z+hwSs81tZ2JWwHlAB8Fztq2eUu1y1p1U5D20
NMlAP4KSuvP2TyeERIdKtYd8IsJh9yO/s7oxhuyJyBae+d3L5F9kZhhkjzDs1hBlrT2hkWEgvrgWIHQy
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`;let jt;function is(){if(!jt){jt=new Uint8Array(122784);const e=atob(os),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);zn(t,jt)}return jt}const z=0,kr=1,as=2,ls=3,ss=4,ds=5,fs=6,cs=7,us=8,Eo=9,be=10,xe=11,Sn=12,hs=13,gs=14,As=15,ps=16,vs=17,ms=18,ws=20;function y(e,t,n){this.prefix=new Uint8Array(e.length),this.transform=t,this.suffix=new Uint8Array(n.length);for(let r=0;r<e.length;r++)this.prefix[r]=e.charCodeAt(r);for(let r=0;r<n.length;r++)this.suffix[r]=n.charCodeAt(r)}const Xt=[new y("",z,""),new y("",z," "),new y(" ",z," "),new y("",Sn,""),new y("",be," "),new y("",z," the "),new y(" ",z,""),new y("s ",z," "),new y("",z," of "),new y("",be,""),new y("",z," and "),new y("",hs,""),new y("",kr,""),new y(", ",z," "),new y("",z,", "),new y(" ",be," "),new y("",z," in "),new y("",z," to "),new y("e ",z," "),new y("",z,'"'),new y("",z,"."),new y("",z,'">'),new y("",z,`
`),new y("",ls,""),new y("",z,"]"),new y("",z," for "),new y("",gs,""),new y("",as,""),new y("",z," a "),new y("",z," that "),new y(" ",be,""),new y("",z,". "),new y(".",z,""),new y(" ",z,", "),new y("",As,""),new y("",z," with "),new y("",z,"'"),new y("",z," from "),new y("",z," by "),new y("",ps,""),new y("",vs,""),new y(" the ",z,""),new y("",ss,""),new y("",z,". The "),new y("",xe,""),new y("",z," on "),new y("",z," as "),new y("",z," is "),new y("",cs,""),new y("",kr,"ing "),new y("",z,`
	`),new y("",z,":"),new y(" ",z,". "),new y("",z,"ed "),new y("",ws,""),new y("",ms,""),new y("",fs,""),new y("",z,"("),new y("",be,", "),new y("",us,""),new y("",z," at "),new y("",z,"ly "),new y(" the ",z," of "),new y("",ds,""),new y("",Eo,""),new y(" ",be,", "),new y("",be,'"'),new y(".",z,"("),new y("",xe," "),new y("",be,'">'),new y("",z,'="'),new y(" ",z,"."),new y(".com/",z,""),new y(" the ",z," of the "),new y("",be,"'"),new y("",z,". This "),new y("",z,","),new y(".",z," "),new y("",be,"("),new y("",be,"."),new y("",z," not "),new y(" ",z,'="'),new y("",z,"er "),new y(" ",xe," "),new y("",z,"al "),new y(" ",xe,""),new y("",z,"='"),new y("",xe,'"'),new y("",be,". "),new y(" ",z,"("),new y("",z,"ful "),new y(" ",be,". "),new y("",z,"ive "),new y("",z,"less "),new y("",xe,"'"),new y("",z,"est "),new y(" ",be,"."),new y("",xe,'">'),new y(" ",z,"='"),new y("",be,","),new y("",z,"ize "),new y("",xe,"."),new y("Â ",z,""),new y(" ",z,","),new y("",be,'="'),new y("",xe,'="'),new y("",z,"ous "),new y("",xe,", "),new y("",be,"='"),new y(" ",be,","),new y(" ",xe,'="'),new y(" ",xe,", "),new y("",xe,","),new y("",xe,"("),new y("",xe,". "),new y(" ",xe,"."),new y("",xe,"='"),new y(" ",xe,". "),new y(" ",be,'="'),new y(" ",xe,"='"),new y(" ",be,"='")],bs=Xt.length;function Fr(e,t){return e[t]<192?(e[t]>=97&&e[t]<=122&&(e[t]^=32),1):e[t]<224?(e[t+1]^=32,2):(e[t+2]^=5,3)}function ys(e,t,n,r,o){const i=is(),{prefix:a}=Xt[o],{suffix:l}=Xt[o],d=Xt[o].transform;let s=d<Sn?0:d-(Sn-1);const c=t;s>r&&(s=r);let u=0;for(;u<a.length;)e[t++]=a[u++];n+=s,r-=s,d<=Eo&&(r-=d);for(let A=0;A<r;A++)e[t++]=i[n+A];let g=t-r;if(d===be)Fr(e,g);else if(d===xe)for(;r>0;){const A=Fr(e,g);g+=A,r-=A}let p=0;for(;p<l.length;)e[t++]=l[p++];return t-c}const Cs=256,xs=704,Is=26,Pr=6,Tr=2,lt=1080,kn=16,Rs=new Uint8Array([3,2,1,0,3,3,3,3,3,3,2,2,2,2,2,2]),Bs=new Int8Array([0,0,0,0,-1,1,-2,2,-3,3,-1,1,-2,2,-3,3]),Es=new Uint16Array([256,402,436,468,500,534,566,598,630,662,694,726,758,790,822,854,886,920,952,984,1016,1048,1080]),Ss=new Uint32Array([0,0,0,0,0,4096,9216,21504,35840,44032,53248,63488,74752,87040,93696,100864,104704,106752,108928,113536,115968,118528,119872,121280,122016]),ks=new Uint8Array([0,0,0,0,10,10,11,11,10,10,10,10,10,9,9,8,7,7,8,7,7,6,6,5,5]),Fs=4,Lr=24;function Ps(e,t){const n=new Uint8Array(t),r=new bo(e),o=new yo(n);return Ts(r,o),n}function Ts(e,t){let n=0,r=0,o=0,i=0;const a=[16,15,11,4];let l=0,d=0,s=0;const c=[new ut(0,0),new ut(0,0),new ut(0,0)],u=128+_e.READ_SIZE,g=new _e(e);o=Ls(g);const p=(1<<o)-16,A=1<<o,h=A-1,f=new Uint8Array(A+u+Lr),v=A,b=[],C=[];for(let F=0;F<3*lt;F++)b[F]=new Ae(0,0),C[F]=new Ae(0,0);for(;!r;){let F=0;const R=[1<<28,1<<28,1<<28],x=[0],P=[1,1,1],j=[0,1,0,1,0,1],B=[0];let I=0;for(let w=0;w<3;w++)c[w].codes=[],c[w].htrees=new Uint32Array;g.readMoreInput();const H=Ms(g);if(F=H.meta_block_length,n+F>t.buffer.length){const w=new Uint8Array(n+F);w.set(t.buffer),t.buffer=w}if(r=H.input_end,H.is_metadata){for(Ds(g);F>0;--F)g.readMoreInput(),g.readBits(8);continue}if(F===0)continue;if(H.is_uncompressed){g.bit_pos_=g.bit_pos_+7&-8,Qs(t,F,n,f,h,g),n+=F;continue}for(let w=0;w<3;w++)P[w]=So(g)+1,P[w]>=2&&(tn(P[w]+2,b,w*lt,g),tn(Is,C,w*lt,g),R[w]=Gt(C,w*lt,g),B[w]=1);g.readMoreInput();const E=g.readBits(2),M=kn+(g.readBits(4)<<E),T=(1<<E)-1,k=M+(48<<E),O=new Uint8Array(P[0]);for(let w=0;w<P[0];w++)g.readMoreInput(),O[w]=g.readBits(2)<<1;const te=Ur(P[0]<<Pr,g),J=te.num_htrees,{context_map:oe}=te,_=Ur(P[2]<<Tr,g),S=_.num_htrees,Q=_.context_map;c[0]=new ut(Cs,J),c[1]=new ut(xs,P[1]),c[2]=new ut(k,S);for(let w=0;w<3;++w)c[w].decode(g);let q=0,N=0,K=O[x[0]],de=Vt[K],ae=Vt[K+1],ne=c[1].htrees[0];for(;F>0;){let w;g.readMoreInput(),R[1]===0&&(vn(P[1],b,1,x,j,B,g),R[1]=Gt(C,lt,g),ne=c[1].htrees[x[1]]),R[1]--;const Y=Bt(c[1].codes,ne,g);let fe=Y>>6;fe>=2?(fe-=2,w=-1):w=0;const le=Zl[fe]+(Y>>3&7),Re=Jl[fe]+(Y&7),Oe=Er[le].offset+g.readBits(Er[le].nbits),Be=Sr[Re].offset+g.readBits(Sr[Re].nbits);d=f[n-1&h],s=f[n-2&h];for(let Ce=0;Ce<Oe;Ce++){g.readMoreInput(),R[0]===0&&(vn(P[0],b,0,x,j,B,g),R[0]=Gt(C,0,g),I=x[0]<<Pr,q=I,K=O[x[0]],de=Vt[K],ae=Vt[K+1]);const V=Cr[de+d]|Cr[ae+s],re=oe[q+V];R[0]--,s=d,d=Bt(c[0].codes,c[0].htrees[re],g),f[n&h]=d,(n&h)===h&&t.write(f,A),n++}if(F-=Oe,F<=0)break;if(w<0){g.readMoreInput(),R[2]===0&&(vn(P[2],b,2,x,j,B,g),R[2]=Gt(C,2*lt,g),N=x[2]<<Tr),R[2]--;const Ce=(Be>4?3:Be-2)&255,V=Q[N+Ce];if(w=Bt(c[2].codes,c[2].htrees[V],g),w>=M){w-=M;const re=w&T;w>>=E;const me=(w>>1)+1,we=(2+(w&1)<<me)-4;w=M+(we+g.readBits(me)<<E)+re}}const Se=Us(w,a,l);if(Se<0)throw new Error("[BrotliDecompress] invalid distance");n<p&&i!==p?i=n:i=p;let Le=n&h;if(Se>i)if(Be>=Fs&&Be<=Lr){let Ce=Ss[Be];const V=Se-i-1,re=ks[Be],me=(1<<re)-1,we=V&me,We=V>>re;if(Ce+=we*Be,We<bs){const Ze=ys(f,Le,Ce,Be,We);if(Le+=Ze,n+=Ze,F-=Ze,Le>=v){t.write(f,A);for(let Ye=0;Ye<Le-v;Ye++)f[Ye]=f[v+Ye]}}else throw new Error("Invalid backward reference")}else throw new Error("Invalid backward reference");else{if(w>0&&(a[l&3]=Se,l++),Be>F)throw new Error("Invalid backward reference");for(let Ce=0;Ce<Be;Ce++)f[n&h]=f[n-Se&h],(n&h)===h&&t.write(f,A),n++,F--}d=f[n-1&h],s=f[n-2&h]}n&=1073741823}t.write(f,n&h)}function Ls(e){if(e.readBits(1)===0)return 16;let t=e.readBits(3);return t>0?17+t:(t=e.readBits(3),t>0?8+t:17)}function vn(e,t,n,r,o,i,a){const l=n*2,d=n,s=Bt(t,n*lt,a);let c;s===0?c=o[l+(i[d]&1)]:s===1?c=o[l+(i[d]-1&1)]+1:c=s-2,c>=e&&(c-=e),r[n]=c,o[l+(i[d]&1)]=c,++i[d]}function ut(e,t){this.alphabet_size=e,this.num_htrees=t,this.codes=new Array(t+t*Es[e+31>>>5]),this.htrees=new Uint32Array(t)}ut.prototype.decode=function(e){let t=0;for(let n=0;n<this.num_htrees;n++)this.htrees[n]=t,t+=tn(this.alphabet_size,this.codes,t,e)};function Gt(e,t,n){const r=Bt(e,t,n),{nbits:o}=Br[r];return Br[r].offset+n.readBits(o)}function Us(e,t,n){return e<kn?(n+=Rs[e],n&=3,t[n]+Bs[e]):e-kn+1}function Qs(e,t,n,r,o,i){const a=o+1;let l=n&o,d=i.pos_&_e.IBUF_MASK;if(t<8||i.bit_pos_+(t<<3)<i.bit_end_pos_){for(;t-- >0;)i.readMoreInput(),r[l++]=i.readBits(8),l===a&&(e.write(r,a),l=0);return}if(i.bit_end_pos_<32)throw new Error("[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32");for(;i.bit_pos_<32;)r[l]=i.val_>>>i.bit_pos_,i.bit_pos_+=8,l++,t--;let s=i.bit_end_pos_-i.bit_pos_>>3;if(d+s>_e.IBUF_MASK){const c=_e.IBUF_MASK+1-d;for(let u=0;u<c;u++)r[l+u]=i.buf_[d+u];s-=c,l+=c,t-=c,d=0}for(let c=0;c<s;c++)r[l+c]=i.buf_[d+c];if(l+=s,t-=s,l>=a){e.write(r,a),l-=a;for(let c=0;c<l;c++)r[c]=r[a+c]}for(;l+t>=a;){if(s=a-l,i.input_.read(r,l,s)<s)throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");e.write(r,a),t-=s,l=0}if(i.input_.read(r,l,t)<t)throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");i.reset()}function So(e){if(e.readBits(1)){const t=e.readBits(3);return t===0?1:e.readBits(t)+(1<<t)}return 0}function Ns(){this.meta_block_length=0,this.input_end=0,this.is_uncompressed=0,this.is_metadata=!1}function Ms(e){const t=new Ns;if(t.input_end=e.readBits(1),t.input_end&&e.readBits(1))return t;const n=e.readBits(2)+4;if(n===7){if(t.is_metadata=!0,e.readBits(1)!==0)throw new Error("Invalid reserved bit");const r=e.readBits(2);if(r===0)return t;for(let o=0;o<r;o++){const i=e.readBits(8);if(o+1===r&&r>1&&i===0)throw new Error("Invalid size byte");t.meta_block_length|=i<<o*8}}else for(let r=0;r<n;r++){const o=e.readBits(4);if(r+1===n&&n>4&&o===0)throw new Error("Invalid size nibble");t.meta_block_length|=o<<r*4}return t.meta_block_length++,!t.input_end&&!t.is_metadata&&(t.is_uncompressed=e.readBits(1)),t}function Ur(e,t){let n=0;t.readMoreInput();const r=So(t)+1,o=new Uint8Array(e);if(r<=1)return{num_htrees:r,context_map:o};t.readBits(1)&&(n=t.readBits(4)+1);const a=[];for(let l=0;l<lt;l++)a[l]=new Ae(0,0);tn(r+n,a,0,t);for(let l=0;l<e;){t.readMoreInput();const d=Bt(a,0,t);if(d===0)o[l]=0,l++;else if(d<=n){let s=1+(1<<d)+t.readBits(d);for(;--s;){if(l>=e)throw new Error("[DecodeContextMap] i >= context_map_size");o[l]=0,l++}}else o[l]=d-n,l++}return t.readBits(1)&&Os(o,e),{num_htrees:r,context_map:o}}function zs(e,t){const n=e[t];for(let r=t;r;r--)e[r]=e[r-1];e[0]=n}function Os(e,t){const n=new Uint8Array(256);for(let r=0;r<256;r++)n[r]=r;for(let r=0;r<t;r++){const o=e[r];e[r]=n[o],o&&zs(n,o)}}function Ds(e){const t=e.bit_pos_+7&-8;return!e.readBits(t-e.bit_pos_)}function Hs(e,t){const n=new Uint8Array(t);try{let r=0,o=0;for(;r<e.length-8;){const i=e[r++]<<24|e[r++]<<16|e[r++]<<8|e[r++],a=e[r++]<<24|e[r++]<<16|e[r++]<<8|e[r++];if(e.length-r<a)throw new Error("lz4 not hadoop");if(n.length<i)throw new Error("lz4 not hadoop");if(Fn(e.subarray(r,r+a),n,o)!==i)throw new Error("lz4 not hadoop");if(r+=a,o+=i,r===e.length)return n}if(r<e.length)throw new Error("lz4 not hadoop")}catch(r){if(r instanceof Error&&r.message!=="lz4 not hadoop")throw r;Fn(e,n,0)}return n}function Ws(e,t){const n=new Uint8Array(t);return Fn(e,n,0),n}function Fn(e,t,n){let r=n;for(let o=0;o<e.length;){const i=e[o++];let a=i>>4;if(a){let g=a+240;for(;g===255;)a+=g=e[o++];if(t.set(e.subarray(o,o+a),r),r+=a,o+=a,o>=e.length)return r-n}const l=e[o++]|e[o++]<<8;if(!l||l>r)throw new Error(`lz4 offset out of range ${l}`);let d=(i&15)+4,s=d+240;for(;s===255;)d+=s=e[o++];let c=r-l;const u=r+d;for(;r<u;)t[r++]=t[c++]}return r-n}const Ys={SNAPPY:Ol(),GZIP:(e,t)=>{const n=new Uint8Array(t);return zn(e,n),n},BROTLI:Ps,ZSTD:e=>zl(e),LZ4:Hs,LZ4_RAW:Ws},Ks={"mb-1":"",flex:"","justify-center":""},Bd=pe({__name:"parquets-reader",setup(e){const{t}=Ii(),n=ee(),r=ee(""),o=Ri(async()=>{const c=n.value;if(r.value="",c==null)return null;try{return await Cl({file:await c.arrayBuffer(),compressors:Ys})}catch(u){return r.value=u.toString(),[]}}),i=U(()=>JSON.stringify(o.value||[],(c,u)=>typeof u=="bigint"?u.toString():u,2)),a=U(()=>Object.keys((o.value||[])[0]||{}).map(c=>({key:c.replace(/\./g,"\\."),title:c})));function l(c){c&&(n.value=c)}const d=ee();function s(){d.value?.downloadCsv({fileName:n.value?.name||"data"})}return(c,u)=>{const g=Si,p=ki,A=Fi,h=Xo,f=Di,v=bn,b=Ma,C=Hi;return Yt(),Bi("div",null,[xt(p,{title:He(t)("tools.parquets-reader.texts.title-input"),"mb-2":""},{default:It(()=>[xt(g,{title:He(t)("tools.parquets-reader.texts.title-drag-and-drop-parquet-file-here-or-click-to-select-a-file"),onFileUpload:l},null,8,["title"])]),_:1},8,["title"]),He(r)?(Yt(),dn(A,{key:0},{default:It(()=>[qn(Vn(He(r)),1)]),_:1})):fn("",!0),He(r)?fn("",!0):(Yt(),dn(C,{key:1,type:"line",animated:""},{default:It(()=>[xt(f,{name:"jsonData",tab:He(t)("tools.parquets-reader.text.json-content")},{default:It(()=>[xt(h,{value:He(i),language:"json","download-file-name":`${He(n)?.name}.json`},null,8,["value","download-file-name"])]),_:1},8,["tab"]),He(a).length?(Yt(),dn(f,{key:0,name:"tabData",tab:He(t)("tools.parquets-reader.text.table-view")},{default:It(()=>[Ei("div",Ks,[xt(v,{onClick:s},{default:It(()=>[qn(Vn(He(t)("tools.parquets-reader.texts.tag-export-as-csv")),1)]),_:1})]),xt(b,{ref_key:"tableRef",ref:d,size:"small",columns:He(a),data:He(o),bordered:"",striped:"",pagination:""},null,8,["columns","data"])]),_:1},8,["tab"])):fn("",!0)]),_:1}))])}}});export{Bd as default};
