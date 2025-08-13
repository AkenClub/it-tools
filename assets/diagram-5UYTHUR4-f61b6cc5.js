import{p as y}from"./chunk-353BL4L5-f1d26a2d.js";import{F as B,s as S,g as F,o as z,p as P,b as E,c as W,_ as l,l as v,G as w,H as T,v as D,L as _,k as A}from"./mermaid-exporter-34a18fc4.js";import{p as L}from"./mermaid-parser.core-212e0b01.js";import"./index-8a14065c.js";import"./isEmpty-264b62a9.js";import"./Button-47050a60.js";import"./browser-ddb21091.js";import"./is-browser-fc34c9a6.js";import"./use-form-item-e9bddaa3.js";import"./color-to-class-8578b472.js";import"./_basePickBy-3402c407.js";import"./_baseExtremum-f35ee66f.js";import"./_castFunction-2aacf35b.js";import"./reduce-d4e6e4be.js";import"./_arrayReduce-865b0d3f.js";import"./toInteger-9174f2c2.js";import"./toNumber-6a0a00f8.js";import"./_baseUniq-de318355.js";import"./_baseFlatten-542e4edd.js";import"./uniq-4ce2d301.js";import"./find-0ee1f4c4.js";import"./groupBy-369523cf.js";import"./clone-9e71e0c4.js";var x={packet:[]},u=structuredClone(x),N=B.packet,Y=l(()=>{const t=w({...N,...T().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),G=l(()=>u.packet,"getPacket"),H=l(t=>{t.length>0&&u.packet.push(t)},"pushWord"),I=l(()=>{D(),u=structuredClone(x)},"clear"),h={pushWord:H,getPacket:G,getConfig:Y,clear:I,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:E,setAccDescription:W},M=1e4,O=l(t=>{y(t,h);let e=-1,o=[],i=1;const{bitsPerRow:s}=h.getConfig();for(let{start:a,end:r,bits:c,label:f}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??=e+1,a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??=a+(c??1)-1,c??=r-a+1,e=r,v.debug(`Packet block ${a} - ${e} with label ${f}`);o.length<=s+1&&h.getPacket().length<M;){const[d,p]=K({start:a,end:r,bits:c,label:f},i,s);if(o.push(d),d.end+1===i*s&&(h.pushWord(o),o=[],i++),!p)break;({start:a,end:r,bits:c,label:f}=p)}}h.pushWord(o)},"populate"),K=l((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const i=e*o-1,s=e*o;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),R={parse:l(async t=>{const e=await L("packet",t);v.debug(e),O(e)},"parse")},U=l((t,e,o,i)=>{const s=i.db,a=s.getConfig(),{rowHeight:r,paddingY:c,bitWidth:f,bitsPerRow:d}=a,p=s.getPacket(),n=s.getDiagramTitle(),k=r+c,g=k*(p.length+1)-(n?0:r),m=f*d+2,b=_(e);b.attr("viewbox",`0 0 ${m} ${g}`),A(b,g,m,a.useMaxWidth);for(const[C,$]of p.entries())X(b,$,C,a);b.append("text").text(n).attr("x",m/2).attr("y",g-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=l((t,e,o,{rowHeight:i,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:c,showBits:f})=>{const d=t.append("g"),p=o*(i+a)+a;for(const n of e){const k=n.start%c*r+1,g=(n.end-n.start+1)*r-s;if(d.append("rect").attr("x",k).attr("y",p).attr("width",g).attr("height",i).attr("class","packetBlock"),d.append("text").attr("x",k+g/2).attr("y",p+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(n.label),!f)continue;const m=n.end===n.start,b=p-2;d.append("text").attr("x",k+(m?g/2:0)).attr("y",b).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",m?"middle":"start").text(n.start),m||d.append("text").attr("x",k+g).attr("y",b).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(n.end)}},"drawWord"),j={draw:U},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=w(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),wt={parser:R,db:h,renderer:j,styles:J};export{wt as diagram};
