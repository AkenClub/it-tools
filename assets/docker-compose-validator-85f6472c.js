import{d as N,aa as O,q as C,c as _,o,m as r,e as l,w as c,n as v,f as e,i as b,F as w,D as T,G as i,H as m,aX as B,b as D,O as L}from"./index-bd50fbe2.js";import{_ as S}from"./c-monaco-editor.vue_vue_type_script_setup_true_lang-0056517b.js";import{c as V}from"./composeverter-fde42cea.js";import{N as E}from"./Alert-8c9210e3.js";import{_ as I}from"./a-0c901f84.js";import"./toggleHighContrast-9bc0fc8d.js";import"./index-a6f01dde.js";import"./index-694fd6b5.js";import"./index-41dcede5.js";import"./public-api-9ecb9c72.js";import"./ajv-53acda87.js";const R={relative:"","w-full":""},A={key:0},F={key:1},Q=N({__name:"docker-compose-validator",setup(P){const{t}=O(),s=C(`version: '3.3'
services:
    nginx:
        ports:
            - '80:80'
        volumes:
            - '/var/run/docker.sock:/tmp/docker.sock:ro'
        restart: always
        logging:
            options:
                max-size: 1g
        image: nginx`),f=_(()=>{try{return V.validateDockerComposeToCommonSpec(s.value)}catch(u){return u.toString().split(`
`).map(a=>({line:-1,message:a,helpLink:""}))}}),p=_(()=>f.value),k={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(u,a)=>{const g=S,x=B,y=I,d=E;return o(),r("div",null,[l(x,{label:e(t)("tools.docker-compose-validator.texts.label-paste-your-docker-compose-file-content")},{default:c(()=>[v("div",R,[l(g,{value:e(s),"onUpdate:value":a[0]||(a[0]=n=>b(s)?s.value=n:null),theme:"vs-dark",language:"yaml",height:"250px",options:k},null,8,["value"])])]),_:1},8,["label"]),e(p).length>0?(o(),r("div",A,[l(d,{title:e(t)("tools.docker-compose-validator.texts.title-the-following-errors-occured"),type:"error","mt-5":""},{default:c(()=>[v("ul",null,[(o(!0),r(w,null,T(e(p),(n,h)=>(o(),r("li",{key:h},[i(m(n.message)+" (",1),n.helpLink?(o(),D(y,{key:0,target:"_blank",rel:"noreferer noopener"},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-see-docker-compose-help")),1)]),_:1})):L("",!0),i(m(e(t)("tools.docker-compose-validator.texts.tag-")),1)]))),128))])]),_:1},8,["title"])])):(o(),r("div",F,[l(d,{type:"success","mt-5":""},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-validation-successful")),1)]),_:1})]))])}}});export{Q as default};
