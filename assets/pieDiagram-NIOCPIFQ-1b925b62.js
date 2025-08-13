import{p as U}from"./chunk-353BL4L5-f1d26a2d.js";import{Y as y,Q as z,aB as j,F as Q,o as Y,p as Z,s as q,g as H,c as J,b as K,_ as u,l as F,v as X,d as tt,G as et,L as rt,a6 as at,k as nt}from"./mermaid-exporter-34a18fc4.js";import{p as it}from"./mermaid-parser.core-212e0b01.js";import{d as O}from"./arc-341a835c.js";import{o as ot}from"./ordinal-ba9b4969.js";import"./index-8a14065c.js";import"./isEmpty-264b62a9.js";import"./Button-47050a60.js";import"./browser-ddb21091.js";import"./is-browser-fc34c9a6.js";import"./use-form-item-e9bddaa3.js";import"./color-to-class-8578b472.js";import"./_basePickBy-3402c407.js";import"./_baseExtremum-f35ee66f.js";import"./_castFunction-2aacf35b.js";import"./reduce-d4e6e4be.js";import"./_arrayReduce-865b0d3f.js";import"./toInteger-9174f2c2.js";import"./toNumber-6a0a00f8.js";import"./_baseUniq-de318355.js";import"./_baseFlatten-542e4edd.js";import"./uniq-4ce2d301.js";import"./find-0ee1f4c4.js";import"./groupBy-369523cf.js";import"./clone-9e71e0c4.js";import"./init-77b53fdd.js";function st(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=st,f=null,o=y(0),d=y(z),x=y(0);function i(e){var a,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+o.apply(this,arguments),w=Math.min(z,Math.max(-z,d.apply(this,arguments)-v)),m,T=Math.min(Math.abs(w)/l,x.apply(this,arguments)),$=T*(w<0?-1:1),g;for(a=0;a<l;++a)(g=n[p[a]=a]=+t(e[a],a,e))>0&&(h+=g);for(r!=null?p.sort(function(S,C){return r(n[S],n[C])}):f!=null&&p.sort(function(S,C){return f(e[S],e[C])}),a=0,A=h?(w-l*$)/h:0;a<l;++a,v=m)c=p[a],g=n[c],m=v+(g>0?g*A:0)+$,n[c]={data:e[c],index:a,value:g,startAngle:v,endAngle:m,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,f=null,i):r},i.sort=function(e){return arguments.length?(f=e,r=null,i):f},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:y(+e),i):o},i.endAngle=function(e){return arguments.length?(d=typeof e=="function"?e:y(+e),i):d},i.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:y(+e),i):x},i}var P=Q.pie,G={sections:new Map,showData:!1,config:P},b=G.sections,W=G.showData,pt=structuredClone(P),ut=u(()=>structuredClone(pt),"getConfig"),dt=u(()=>{b=new Map,W=G.showData,X()},"clear"),gt=u(({label:t,value:r})=>{b.has(t)||(b.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=u(()=>b,"getSections"),ft=u(t=>{W=t},"setShowData"),ht=u(()=>W,"getShowData"),R={getConfig:ut,clear:dt,setDiagramTitle:Y,getDiagramTitle:Z,setAccTitle:q,getAccTitle:H,setAccDescription:J,getAccDescription:K,addSection:gt,getSections:mt,setShowData:ft,getShowData:ht},vt=u((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:u(async t=>{const r=await it("pie",t);F.debug(r),vt(r,R)},"parse")},yt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),xt=yt,At=u(t=>{const r=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,d)=>d.value-o.value);return ct().value(o=>o.value)(r)},"createPieArcs"),wt=u((t,r,f,o)=>{F.debug(`rendering pie chart
`+t);const d=o.db,x=tt(),i=et(d.getConfig(),x.pie),e=40,a=18,l=4,c=450,A=c,h=rt(r),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=x;let[v]=at(n.pieOuterStrokeWidth);v??=2;const w=i.textPosition,m=Math.min(A,c)/2-e,T=O().innerRadius(0).outerRadius(m),$=O().innerRadius(m*w).outerRadius(m*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const g=d.getSections(),S=At(g),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=ot(C);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",s=>D(s.data.label)).attr("class","pieCircle");let L=0;g.forEach(s=>{L+=s}),p.selectAll("mySlices").data(S).enter().append("text").text(s=>(s.data.value/L*100).toFixed(0)+"%").attr("transform",s=>"translate("+$.centroid(s)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(s,k)=>{const E=a+l,_=E*D.domain().length/2,B=12*a,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(s=>{const{label:k,value:E}=s.data;return d.getShowData()?`${k} [${E}]`:k});const I=Math.max(...M.selectAll("text").nodes().map(s=>s?.getBoundingClientRect().width??0)),N=A+e+a+l+I;h.attr("viewBox",`0 0 ${N} ${c}`),nt(h,c,N,i.useMaxWidth)},"draw"),Ct={draw:wt},Ht={parser:St,db:R,renderer:Ct,styles:xt};export{Ht as diagram};
