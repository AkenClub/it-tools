import{dA as F,dB as V,dC as q,dD as ye,dE as j,dF as Se,dG as D,dH as te,dI as Ce,dJ as He,dK as K,dL as H,dM as ge,d as z,q as w,c as $,s as l,ch as re,ci as ne,A as nt,bn as Fe,Q as qe,ai as ot,dN as ie,dO as Ue,dP as $e,dQ as Ae,cH as at,ak as W,al as b,c9 as lt,aw as U,am as ze,bo as it,bH as st,aq as ut,p as Te,aN as ct,bp as we,bq as Pe,K as dt,at as Ie,au as ht,cc as pt,cd as Re,dR as ft,ce as gt,cf as vt,cg as bt,aM as mt,d9 as xt,dS as kt,dT as wt,ay as de,aU as he,b$ as yt}from"./index-bd50fbe2.js";import{_ as St}from"./InputGroup-b1e3b49d.js";function Ct(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function se(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ut(e){return e=Math.round(e),e>=360?359:e<0?0:e}function $t(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const At={rgb:{hex(e){return F(V(e))},hsl(e){const[t,i,n,a]=V(e);return q([...ye(t,i,n),a])},hsv(e){const[t,i,n,a]=V(e);return j([...Se(t,i,n),a])}},hex:{rgb(e){return D(V(e))},hsl(e){const[t,i,n,a]=V(e);return q([...ye(t,i,n),a])},hsv(e){const[t,i,n,a]=V(e);return j([...Se(t,i,n),a])}},hsl:{hex(e){const[t,i,n,a]=te(e);return F([...Ce(t,i,n),a])},rgb(e){const[t,i,n,a]=te(e);return D([...Ce(t,i,n),a])},hsv(e){const[t,i,n,a]=te(e);return j([...He(t,i,n),a])}},hsv:{hex(e){const[t,i,n,a]=K(e);return F([...H(t,i,n),a])},rgb(e){const[t,i,n,a]=K(e);return D([...H(t,i,n),a])},hsl(e){const[t,i,n,a]=K(e);return q([...ge(t,i,n),a])}}};function Be(e,t,i){return i=i||se(e),i?i===t?e:At[i][t](e):null}const le="12px",Rt=12,O="6px",_t=z({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function i(o){!t.value||!e.rgba||(re("mousemove",document,n),re("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:f}=s.getBoundingClientRect(),T=(o.clientX-f)/(u-Rt);e.onUpdateAlpha($t(T))}function a(){var o;ne("mousemove",document,n),ne("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,railBackgroundImage:$(()=>{const{rgba:o}=e;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:i}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:le,borderRadius:O},onMousedown:this.handleMouseDown},l("div",{style:{borderRadius:O,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},l("div",{class:`${e}-color-picker-checkboard`}),l("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&l("div",{style:{position:"absolute",left:O,right:O,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${O})`,borderRadius:O,width:le,height:le}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:D(this.rgba),borderRadius:O,width:le,height:le}}))))}}),_e=nt("n-color-picker");function Vt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Dt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function zt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Pt(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function It(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Mt={paddingSmall:"0 4px"},Me=z({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=w(""),{themeRef:i}=Fe(_e,null);qe(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function o(s){let u,f;switch(e.label){case"HEX":f=Pt(s),f&&e.onUpdateValue(s),t.value=n();break;case"H":u=Dt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"S":case"L":case"V":u=zt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"A":u=It(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Vt(s),u===!1?t.value=n():e.onUpdateValue(u);break}}return{mergedTheme:i,inputValue:t,handleInputChange:o,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return l(ot,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Mt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Ht=z({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,i){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?F:ie)(i));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=i,e.onUpdateValue((n?j:Ae)(a));break;case"rgb":a[t]=i,e.onUpdateValue((n?D:$e)(a));break;case"hsl":a[t]=i,e.onUpdateValue((n?q:Ue)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return l("div",{class:`${e}-color-picker-input`},l("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),l(St,null,{default:()=>{const{mode:i,valueArr:n,showAlpha:a}=this;if(i==="hex"){let o=null;try{o=n===null?null:(a?F:ie)(n)}catch{}return l(Me,{label:"HEX",showAlpha:a,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(i+(a?"a":"")).split("").map((o,s)=>l(Me,{label:o.toUpperCase(),value:n===null?null:n[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}});function Ft(e,t){if(t==="hsv"){const[i,n,a,o]=K(e);return D([...H(i,n,a),o])}return e}function qt(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Tt=z({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=$(()=>e.swatches.map(o=>{const s=se(o);return{value:o,mode:s,legalValue:Ft(o,s)}}));function i(o){const{mode:s}=e;let{value:u,mode:f}=o;return f||(f="hex",/^[a-zA-Z]+$/.test(u)?u=qt(u):(at("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),f===s?u:Be(u,s,f)}function n(o){e.onUpdateColor(i(o))}function a(o,s){o.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>l("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:i=>{this.handleSwatchKeyDown(i,t)}},l("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Bt=z({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:i}=Fe(_e,null);return()=>{const{hsla:n,value:a,clsPrefix:o,onClick:s,disabled:u}=e,f=t.label||i.value;return l("div",{class:[`${o}-color-picker-trigger`,u&&`${o}-color-picker-trigger--disabled`],onClick:u?void 0:s},l("div",{class:`${o}-color-picker-trigger__fill`},l("div",{class:`${o}-color-picker-checkboard`}),l("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?q(n):""}}),a&&n?l("div",{class:`${o}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},f?f(a):a):null))}}}),Et=z({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=se(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(i){var n;const a=i.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Be(a.toUpperCase(),e.mode,"hex")),i.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-preview__preview`},l("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),l("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),ee="12px",Nt=12,L="6px",Ot=6,Lt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",jt=z({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function i(o){t.value&&(re("mousemove",document,n),re("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:f}=s.getBoundingClientRect(),T=Ut((o.clientX-f-Ot)/(u-Nt)*360);e.onUpdateHue(T)}function a(){var o;ne("mousemove",document,n),ne("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,handleMouseDown:i}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,style:{height:ee,borderRadius:L}},l("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Lt,height:ee,borderRadius:L,position:"relative"},onMousedown:this.handleMouseDown},l("div",{style:{position:"absolute",left:L,right:L,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${L})`,borderRadius:L,width:ee,height:ee}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:L,width:ee,height:ee}})))))}}),pe="12px",fe="6px",Kt=z({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function i(o){t.value&&(re("mousemove",document,n),re("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,height:f,left:T,bottom:oe}=s.getBoundingClientRect(),B=(oe-o.clientY)/f,X=(o.clientX-T)/u,ue=100*(X>1?1:X<0?0:X),Z=100*(B>1?1:B<0?0:B);e.onUpdateSV(ue,Z)}function a(){var o;ne("mousemove",document,n),ne("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{palleteRef:t,handleColor:$(()=>{const{rgba:o}=e;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:i}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},l("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),l("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&l("div",{class:`${e}-color-picker-handle`,style:{width:pe,height:pe,borderRadius:fe,left:`calc(${this.displayedSv[0]}% - ${fe})`,bottom:`calc(${this.displayedSv[1]}% - ${fe})`}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:fe,width:pe,height:pe}})))}}),Xt=W([b("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),b("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[lt(),b("input",`
 text-align: center;
 `)]),b("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[W("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[U("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),W("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),b("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[U("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),b("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[U("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ze("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),b("color-picker-preview",`
 display: flex;
 `,[U("sliders",`
 flex: 1 0 auto;
 `),U("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),U("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),U("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),b("color-picker-input",`
 display: flex;
 align-items: center;
 `,[b("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),U("mode",`
 width: 72px;
 text-align: center;
 `)]),b("color-picker-control",`
 padding: 12px;
 `),b("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[b("button","margin-left: 8px;")]),b("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[U("value",`
 white-space: nowrap;
 position: relative;
 `),U("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),ze("disabled","cursor: not-allowed"),b("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[W("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),b("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[b("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[U("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),W("&:focus",`
 outline: none;
 `,[U("fill",[W("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Zt=Object.assign(Object.assign({},Te.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Re.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Jt=z({name:"ColorPicker",props:Zt,slots:Object,setup(e,{slots:t}){const i=w(null);let n=null;const a=it(e),{mergedSizeRef:o,mergedDisabledRef:s}=a,{localeRef:u}=st("global"),{mergedClsPrefixRef:f,namespaceRef:T,inlineThemeDisabled:oe}=ut(e),B=Te("ColorPicker","-color-picker",Xt,wt,e,f);ct(_e,{themeRef:B,renderLabelRef:we(e,"renderLabel"),colorPickerSlots:t});const X=w(e.defaultShow),ue=Pe(we(e,"show"),X);function Z(r){const{onUpdateShow:c,"onUpdate:show":h}=e;c&&de(c,r),h&&de(h,r),X.value=r}const{defaultValue:Ve}=e,De=w(Ve===void 0?Ct(e.modes,e.showAlpha):Ve),x=Pe(we(e,"value"),De),G=w([x.value]),R=w(0),ve=$(()=>se(x.value)),{modes:Ee}=e,A=w(se(x.value)||Ee[0]||"rgb");function Ne(){const{modes:r}=e,{value:c}=A,h=r.findIndex(p=>p===c);~h?A.value=r[(h+1)%r.length]:A.value="rgb"}let y,S,Q,J,P,I,M,C;const ae=$(()=>{const{value:r}=x;if(!r)return null;switch(ve.value){case"hsv":return K(r);case"hsl":return[y,S,Q,C]=te(r),[...He(y,S,Q),C];case"rgb":case"hex":return[P,I,M,C]=V(r),[...Se(P,I,M),C]}}),E=$(()=>{const{value:r}=x;if(!r)return null;switch(ve.value){case"rgb":case"hex":return V(r);case"hsv":return[y,S,J,C]=K(r),[...H(y,S,J),C];case"hsl":return[y,S,Q,C]=te(r),[...Ce(y,S,Q),C]}}),be=$(()=>{const{value:r}=x;if(!r)return null;switch(ve.value){case"hsl":return te(r);case"hsv":return[y,S,J,C]=K(r),[...ge(y,S,J),C];case"rgb":case"hex":return[P,I,M,C]=V(r),[...ye(P,I,M),C]}}),Oe=$(()=>{switch(A.value){case"rgb":case"hex":return E.value;case"hsv":return ae.value;case"hsl":return be.value}}),ce=w(0),me=w(1),xe=w([0,0]);function Le(r,c){const{value:h}=ae,p=ce.value,g=h?h[3]:1;xe.value=[r,c];const{showAlpha:d}=e;switch(A.value){case"hsv":v((d?j:Ae)([p,r,c,g]),"cursor");break;case"hsl":v((d?q:Ue)([...ge(p,r,c),g]),"cursor");break;case"rgb":v((d?D:$e)([...H(p,r,c),g]),"cursor");break;case"hex":v((d?F:ie)([...H(p,r,c),g]),"cursor");break}}function je(r){ce.value=r;const{value:c}=ae;if(!c)return;const[,h,p,g]=c,{showAlpha:d}=e;switch(A.value){case"hsv":v((d?j:Ae)([r,h,p,g]),"cursor");break;case"rgb":v((d?D:$e)([...H(r,h,p),g]),"cursor");break;case"hex":v((d?F:ie)([...H(r,h,p),g]),"cursor");break;case"hsl":v((d?q:Ue)([...ge(r,h,p),g]),"cursor");break}}function Ke(r){switch(A.value){case"hsv":[y,S,J]=ae.value,v(j([y,S,J,r]),"cursor");break;case"rgb":[P,I,M]=E.value,v(D([P,I,M,r]),"cursor");break;case"hex":[P,I,M]=E.value,v(F([P,I,M,r]),"cursor");break;case"hsl":[y,S,Q]=be.value,v(q([y,S,Q,r]),"cursor");break}me.value=r}function v(r,c){c==="cursor"?n=r:n=null;const{nTriggerFormChange:h,nTriggerFormInput:p}=a,{onUpdateValue:g,"onUpdate:value":d}=e;g&&de(g,r),d&&de(d,r),h(),p(),De.value=r}function Xe(r){v(r,"input"),yt(Y)}function Y(r=!0){const{value:c}=x;if(c){const{nTriggerFormChange:h,nTriggerFormInput:p}=a,{onComplete:g}=e;g&&g(c);const{value:d}=G,{value:k}=R;r&&(d.splice(k+1,d.length,c),R.value=k+1),h(),p()}}function Ze(){const{value:r}=R;r-1<0||(v(G.value[r-1],"input"),Y(!1),R.value=r-1)}function Ge(){const{value:r}=R;r<0||r+1>=G.value.length||(v(G.value[r+1],"input"),Y(!1),R.value=r+1)}function Qe(){v(null,"input");const{onClear:r}=e;r&&r(),Z(!1)}function Je(){const{value:r}=x,{onConfirm:c}=e;c&&c(r),Z(!1)}const Ye=$(()=>R.value>=1),We=$(()=>{const{value:r}=G;return r.length>1&&R.value<r.length-1});dt(ue,r=>{r||(G.value=[x.value],R.value=0)}),qe(()=>{if(!(n&&n===x.value)){const{value:r}=ae;r&&(ce.value=r[0],me.value=r[3],xe.value=[r[1],r[2]])}n=null});const ke=$(()=>{const{value:r}=o,{common:{cubicBezierEaseInOut:c},self:{textColor:h,color:p,panelFontSize:g,boxShadow:d,border:k,borderRadius:m,dividerColor:N,[Ie("height",r)]:tt,[Ie("fontSize",r)]:rt}}=B.value;return{"--n-bezier":c,"--n-text-color":h,"--n-color":p,"--n-panel-font-size":g,"--n-font-size":rt,"--n-box-shadow":d,"--n-border":k,"--n-border-radius":m,"--n-height":tt,"--n-divider-color":N}}),_=oe?ht("color-picker",$(()=>o.value[0]),ke,e):void 0;function et(){var r;const{value:c}=E,{value:h}=ce,{internalActions:p,modes:g,actions:d}=e,{value:k}=B,{value:m}=f;return l("div",{class:[`${m}-color-picker-panel`,_?.themeClass.value],onDragstart:N=>{N.preventDefault()},style:oe?void 0:ke.value},l("div",{class:`${m}-color-picker-control`},l(Kt,{clsPrefix:m,rgba:c,displayedHue:h,displayedSv:xe.value,onUpdateSV:Le,onComplete:Y}),l("div",{class:`${m}-color-picker-preview`},l("div",{class:`${m}-color-picker-preview__sliders`},l(jt,{clsPrefix:m,hue:h,onUpdateHue:je,onComplete:Y}),e.showAlpha?l(_t,{clsPrefix:m,rgba:c,alpha:me.value,onUpdateAlpha:Ke,onComplete:Y}):null),e.showPreview?l(Et,{clsPrefix:m,mode:A.value,color:E.value&&ie(E.value),onUpdateColor:N=>{v(N,"input")}}):null),l(Ht,{clsPrefix:m,showAlpha:e.showAlpha,mode:A.value,modes:g,onUpdateMode:Ne,value:x.value,valueArr:Oe.value,onUpdateValue:Xe}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&l(Tt,{clsPrefix:m,mode:A.value,swatches:e.swatches,onUpdateColor:N=>{v(N,"input")}})),d?.length?l("div",{class:`${m}-color-picker-action`},d.includes("confirm")&&l(he,{size:"small",onClick:Je,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.confirm}),d.includes("clear")&&l(he,{size:"small",onClick:Qe,disabled:!x.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?l("div",{class:`${m}-color-picker-action`},{default:t.action}):p?l("div",{class:`${m}-color-picker-action`},p.includes("undo")&&l(he,{size:"small",onClick:Ze,disabled:!Ye.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.undo}),p.includes("redo")&&l(he,{size:"small",onClick:Ge,disabled:!We.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:f,namespace:T,selfRef:i,hsla:be,rgba:E,mergedShow:ue,mergedDisabled:s,isMounted:pt(),adjustedTo:Re(e),mergedValue:x,handleTriggerClick(){Z(!0)},handleClickOutside(r){var c;!((c=i.value)===null||c===void 0)&&c.contains(ft(r))||Z(!1)},renderPanel:et,cssVars:oe?void 0:ke,themeClass:_?.themeClass,onRender:_?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),l("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},l(gt,null,{default:()=>[l(vt,null,{default:()=>l(Bt,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),l(bt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Re.tdkey,to:this.adjustedTo},{default:()=>l(mt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?xt(this.renderPanel(),[[kt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});export{Jt as _};
