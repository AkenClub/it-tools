import{_ as i}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-e72c8d61.js";import{d as c,a9 as p,aO as m,o as f,b as d,f as a}from"./index-8a14065c.js";import{f as l}from"./index-64473eba.js";import{w as y}from"./defaults-4d6daddf.js";import"./TextareaCopyable-c541a0c9.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-a22fcbde.js";import"./index-0862b35f.js";import"./index-af76eecf.js";import"./Copy-c54f42f9.js";import"./Scrollbar-a18b0812.js";import"./isPlainObject-1c699aec.js";function g({array:r}){const n=new Set;return r.forEach(t=>Object.keys(l(t)).forEach(o=>n.add(o))),Array.from(n)}function _(r){if(r===null)return"null";if(r===void 0)return"";const n=String(r).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,'\\"');return n.includes(",")?`"${n}"`:n}function h({arrayOrObject:r}){const n=Array.isArray(r)?r:[r],t=g({array:n}),o=n.map(e=>t.map(s=>_(l(e)[s])));return[t.join(","),...o].join(`
`)}const v=`[
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
]`,P=c({__name:"json-to-csv",setup(r){const{t:n}=p();function t(e){return y(()=>e===""?"":h({arrayOrObject:JSON.parseBigInt(e)}),"")}const o=[{validator:e=>e===""||m.parse(e),message:n("tools.json-to-csv.texts.message-provided-json-is-not-valid")}];return(e,s)=>{const u=i;return f(),d(u,{"input-label":a(n)("tools.json-to-csv.texts.input-label-your-raw-json"),"input-default":v,"input-placeholder":a(n)("tools.json-to-csv.texts.input-placeholder-paste-your-raw-json-here"),"output-label":a(n)("tools.json-to-csv.texts.output-label-csv-version-of-your-json"),"input-validation-rules":o,transformer:t,"download-file-name":"output.csv"},null,8,["input-label","input-placeholder","output-label"])}}});export{P as default};
