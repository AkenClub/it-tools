import{d as y,aa as g,ah as j,q as f,c as v,T as q,aV as b,o as h,m as x,e as a,w as i,f as e,i as m,n as N,G as k,H as w,j as V,ad as S}from"./index-bd50fbe2.js";import{d as B}from"./jsonquery-52693bba.js";import{T as C}from"./TextareaCopyable-307e7842.js";import{_ as T}from"./a-0c901f84.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-2afed79b.js";import"./index-59cddc9a.js";import"./index-dbbd6507.js";import"./Copy-e5e09d26.js";import"./Scrollbar-bc5b5dc5.js";const Y={"mb-2":"",flex:"","justify-center":""},A=2,L=y({__name:"json-query",setup(J){const{t}=g(),s=j({tool:"json-query",name:"q",defaultValue:`
  .friends 
    | filter(.city == "New York") 
    | sort(.age) 
    | pick(.name, .age)
`}),n=f(`{
  "friends": [
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
    { "name": "Kevin", "age": 19, "city": "Atlanta" },
    { "name": "Michelle", "age": 27, "city": "Los Angeles" },
    { "name": "Robert", "age": 45, "city": "Manhattan" },
    { "name": "Sarah", "age": 31, "city": "New York" }
  ]
}`),p=v(()=>{try{const o=JSON.parseBigInt(n.value);return JSON.stringify(B(o,s.value),null,A)}catch(o){return o.toString()}}),d=q({source:n,rules:[{validator:o=>b.parse(o),message:t("tools.json-query.texts.message-provided-json-is-not-valid")}]});return(o,l)=>{const u=V,_=T,c=S;return h(),x("div",null,[a(c,{title:e(t)("tools.json-query.texts.title-input"),"mb-2":""},{default:i(()=>[a(u,{value:e(s),"onUpdate:value":l[0]||(l[0]=r=>m(s)?s.value=r:null),label:e(t)("tools.json-query.texts.label-json-query"),placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-query-string-here"),"mb-2":""},null,8,["value","label","placeholder"]),N("div",Y,[a(_,{target:"_blank",href:"https://jsonquerylang.org/docs/"},{default:i(()=>[k(w(e(t)("tools.json-query.texts.tag-see-json-query-lang-documentation")),1)]),_:1})]),a(u,{value:e(n),"onUpdate:value":l[1]||(l[1]=r=>m(n)?n.value=r:null),label:e(t)("tools.json-query.texts.label-json"),multiline:"",placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-here"),rows:"5",validation:e(d),"mb-2":""},null,8,["value","label","placeholder","validation"])]),_:1},8,["title"]),a(c,{title:e(t)("tools.json-query.texts.title-result")},{default:i(()=>[a(C,{value:e(p),language:"json"},null,8,["value"])]),_:1},8,["title"])])}}});export{L as default};
