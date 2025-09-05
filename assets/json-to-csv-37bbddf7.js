import{_ as i}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-7d14631a.js";import{d as c,aa as p,aV as m,o as f,b as d,f as s}from"./index-bd50fbe2.js";import{f as l}from"./index-64473eba.js";import{w as v}from"./defaults-4d6daddf.js";import"./TextareaCopyable-307e7842.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-2afed79b.js";import"./index-59cddc9a.js";import"./index-dbbd6507.js";import"./Copy-e5e09d26.js";import"./Scrollbar-bc5b5dc5.js";import"./isPlainObject-1c699aec.js";function y({array:n}){const t=new Set;return n.forEach(o=>Object.keys(l(o)).forEach(r=>t.add(r))),Array.from(t)}function g(n){if(n===null)return"null";if(n===void 0)return"";const t=String(n).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,'\\"');return t.includes(",")?`"${t}"`:t}function h({arrayOrObject:n}){const t=Array.isArray(n)?n:[n],o=y({array:t}),r=t.map(e=>o.map(a=>g(l(e)[a])));return[o.join(","),...r].join(`
`)}const j=`[
   {
      "Age": 18,
      "Country": "Germany",
      "Gender": "Male",
      "Purchased": "N",
      "Salary": 20000
   },
   {
      "Age": 19,
      "Country": "France",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 22000
   },
   {
      "Age": 20,
      "Country": "England",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 24000
   }
]`,P=c({__name:"json-to-csv",setup(n){const{t}=p();function o(e){return v(()=>e===""?"":h({arrayOrObject:JSON.parseBigInt(e)}),"")}const r=[{validator:e=>e===""||m.parse(e),message:t("tools.json-to-csv.texts.message-provided-json-is-not-valid")}];return(e,a)=>{const u=i;return f(),d(u,{"input-:label":s(t)("tools.json-to-csv.texts.label-t-tools-json-to-csv-texts-input-label-your-raw-json"),"input-default":j,"input-:placeholder":s(t)("tools.json-to-csv.texts.placeholder-t-tools-json-to-csv-texts-input-placeholder-paste-your-raw-json-here"),"output-:label":s(t)("tools.json-to-csv.texts.label-t-tools-json-to-csv-texts-output-label-csv-version-of-your-json"),"input-validation-rules":r,transformer:o,"download-file-name":"output.csv"},null,8,["input-:label","input-:placeholder","output-:label"])}}});export{P as default};
