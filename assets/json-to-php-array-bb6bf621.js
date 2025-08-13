import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-e72c8d61.js";import{j as l}from"./index-06887f40.js";import{d as i,a9 as u,aO as a,o as m,b as c,f as r}from"./index-8a14065c.js";import{w as f}from"./defaults-4d6daddf.js";import"./TextareaCopyable-c541a0c9.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-a22fcbde.js";import"./index-0862b35f.js";import"./index-af76eecf.js";import"./Copy-c54f42f9.js";import"./Scrollbar-a18b0812.js";const d=`{
  a:"b", 
  arr: [1, "2"], 
  nested: {
    c:12, 
    d: "az"
  }
}`,D=i({__name:"json-to-php-array",setup(_){const{t}=u();function e(o){return f(()=>l.arrify(a.parse(o),{prettify:!0}),"")}const s=[{validator:o=>a.parse(o),message:t("tools.json-to-php-array.texts.message-provided-json-is-not-valid")}];return(o,h)=>{const p=n;return m(),c(p,{"input-label":r(t)("tools.json-to-php-array.texts.input-label-your-json"),"input-default":d,"input-placeholder":r(t)("tools.json-to-php-array.texts.input-placeholder-paste-your-json-here"),"output-label":r(t)("tools.json-to-php-array.texts.output-label-php-array-version"),"input-validation-rules":s,transformer:e},null,8,["input-label","input-placeholder","output-label"])}}});export{D as default};
