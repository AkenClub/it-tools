import{d as g,a9 as j,y as p,c as f,V as v,aO as b,o as x,s as h,e as a,w as i,f as e,i as m,v as q,J as N,K as k,j as w,ab as V}from"./index-8a14065c.js";import{d as S}from"./jsonquery-52693bba.js";import{T as B}from"./TextareaCopyable-c541a0c9.js";import{_ as C}from"./a-3bb7a72d.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-a22fcbde.js";import"./index-0862b35f.js";import"./index-af76eecf.js";import"./Copy-c54f42f9.js";import"./Scrollbar-a18b0812.js";const J={"mb-2":"",flex:"","justify-center":""},Y=2,$=g({__name:"json-query",setup(A){const{t}=j(),s=p(`
  .friends 
    | filter(.city == "New York") 
    | sort(.age) 
    | pick(.name, .age)
`),n=p(`{
  "friends": [
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
    { "name": "Kevin", "age": 19, "city": "Atlanta" },
    { "name": "Michelle", "age": 27, "city": "Los Angeles" },
    { "name": "Robert", "age": 45, "city": "Manhattan" },
    { "name": "Sarah", "age": 31, "city": "New York" }
  ]
}`),d=f(()=>{try{const o=JSON.parseBigInt(n.value);return JSON.stringify(S(o,s.value),null,Y)}catch(o){return o.toString()}}),_=v({source:n,rules:[{validator:o=>b.parse(o),message:t("tools.json-query.texts.message-provided-json-is-not-valid")}]});return(o,l)=>{const u=w,y=C,c=V;return x(),h("div",null,[a(c,{title:e(t)("tools.json-query.texts.title-input"),"mb-2":""},{default:i(()=>[a(u,{value:e(s),"onUpdate:value":l[0]||(l[0]=r=>m(s)?s.value=r:null),label:e(t)("tools.json-query.texts.label-json-query"),placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-query-string-here"),"mb-2":""},null,8,["value","label","placeholder"]),q("div",J,[a(y,{target:"_blank",href:"https://jsonquerylang.org/docs/"},{default:i(()=>[N(k(e(t)("tools.json-query.texts.tag-see-json-query-lang-documentation")),1)]),_:1})]),a(u,{value:e(n),"onUpdate:value":l[1]||(l[1]=r=>m(n)?n.value=r:null),label:e(t)("tools.json-query.texts.label-json"),multiline:"",placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-here"),rows:"5",validation:e(_),"mb-2":""},null,8,["value","label","placeholder","validation"])]),_:1},8,["title"]),a(c,{title:e(t)("tools.json-query.texts.title-result")},{default:i(()=>[a(B,{value:e(d),language:"json"},null,8,["value"])]),_:1},8,["title"])])}}});export{$ as default};
