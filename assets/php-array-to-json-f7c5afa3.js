import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-7d14631a.js";import{j as a}from"./index-b9ec8734.js";import{w as l}from"./defaults-4d6daddf.js";import{d as u,aa as i,o as m,b as c,f as r}from"./index-bd50fbe2.js";import"./TextareaCopyable-307e7842.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-2afed79b.js";import"./index-59cddc9a.js";import"./index-dbbd6507.js";import"./Copy-e5e09d26.js";import"./Scrollbar-bc5b5dc5.js";const f=`array(
  "a" => "b",
  "arr" => array(
    1,
    "2"
  ),
  "nested" => array(
    "c" => 12,
    "d" => "az"
  )
);`,C=u({__name:"php-array-to-json",setup(h){const{t:o}=i();function e(t){return l(()=>JSON.stringify(a.parse(t),null,2),"")}const p=[{validator:t=>t===""||a.parse(t),message:o("tools.php-array-to-json.texts.message-provided-php-array-is-not-valid")}];return(t,d)=>{const s=n;return m(),c(s,{"input-:label":r(o)("tools.php-array-to-json.texts.label-t-tools-php-array-to-json-texts-input-label-your-php-array"),"input-default":f,"input-:placeholder":r(o)("tools.php-array-to-json.texts.placeholder-t-tools-php-array-to-json-texts-input-placeholder-paste-your-php-array-here"),"output-:label":r(o)("tools.php-array-to-json.texts.label-t-tools-php-array-to-json-texts-output-label-json-version"),"output-language":"json","input-validation-rules":p,transformer:e},null,8,["input-:label","input-:placeholder","output-:label"])}}});export{C as default};
