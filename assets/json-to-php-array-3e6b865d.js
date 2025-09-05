import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-7d14631a.js";import{j as l}from"./index-b9ec8734.js";import{d as i,aa as u,aV as a,o as m,b as c,f as r}from"./index-bd50fbe2.js";import{w as f}from"./defaults-4d6daddf.js";import"./TextareaCopyable-307e7842.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-2afed79b.js";import"./index-59cddc9a.js";import"./index-dbbd6507.js";import"./Copy-e5e09d26.js";import"./Scrollbar-bc5b5dc5.js";const d=`{
  a:"b", 
  arr: [1, "2"], 
  nested: {
    c:12, 
    d: "az"
  }
}`,D=i({__name:"json-to-php-array",setup(h){const{t}=u();function e(o){return f(()=>l.arrify(a.parse(o),{prettify:!0}),"")}const s=[{validator:o=>a.parse(o),message:t("tools.json-to-php-array.texts.message-provided-json-is-not-valid")}];return(o,_)=>{const p=n;return m(),c(p,{"input-:label":r(t)("tools.json-to-php-array.texts.label-t-tools-json-to-php-array-texts-input-label-your-json"),"input-default":d,"input-:placeholder":r(t)("tools.json-to-php-array.texts.placeholder-t-tools-json-to-php-array-texts-input-placeholder-paste-your-json-here"),"output-:label":r(t)("tools.json-to-php-array.texts.label-t-tools-json-to-php-array-texts-output-label-php-array-version"),"input-validation-rules":s,transformer:e},null,8,["input-:label","input-:placeholder","output-:label"])}}});export{D as default};
