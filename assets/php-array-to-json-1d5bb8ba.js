import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-e72c8d61.js";import{j as a}from"./index-06887f40.js";import{w as l}from"./defaults-4d6daddf.js";import{d as u,a9 as i,o as m,b as c,f as o}from"./index-8a14065c.js";import"./TextareaCopyable-c541a0c9.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-a22fcbde.js";import"./index-0862b35f.js";import"./index-af76eecf.js";import"./Copy-c54f42f9.js";import"./Scrollbar-a18b0812.js";const f=`array(
  "a" => "b",
  "arr" => array(
    1,
    "2"
  ),
  "nested" => array(
    "c" => 12,
    "d" => "az"
  )
);`,C=u({__name:"php-array-to-json",setup(d){const{t}=i();function e(r){return l(()=>JSON.stringify(a.parse(r),null,2),"")}const p=[{validator:r=>r===""||a.parse(r),message:t("tools.php-array-to-json.texts.message-provided-php-array-is-not-valid")}];return(r,h)=>{const s=n;return m(),c(s,{"input-label":o(t)("tools.php-array-to-json.texts.input-label-your-php-array"),"input-default":f,"input-placeholder":o(t)("tools.php-array-to-json.texts.input-placeholder-paste-your-php-array-here"),"output-label":o(t)("tools.php-array-to-json.texts.output-label-json-version"),"output-language":"json","input-validation-rules":p,transformer:e},null,8,["input-label","input-placeholder","output-label"])}}});export{C as default};
