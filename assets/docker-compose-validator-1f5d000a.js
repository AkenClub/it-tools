import{d as C,a9 as O,y as b,c as d,o,s,e as l,w as c,v,f as e,i as N,G as w,H as T,J as i,K as m,aQ as B,b as L,Q as S}from"./index-8a14065c.js";import{_ as V}from"./c-monaco-editor.vue_vue_type_script_setup_true_lang-47dd9613.js";import{c as D}from"./composeverter-0319a89c.js";import{_ as E}from"./Alert-90c2ad59.js";import{_ as I}from"./a-3bb7a72d.js";import"./toggleHighContrast-777b26b0.js";import"./index-a6f01dde.js";import"./index-509629e9.js";import"./index-41dcede5.js";import"./public-api-9ecb9c72.js";import"./ajv-53acda87.js";const R={relative:"","w-full":""},P={key:0},Q={key:1},W=C({__name:"docker-compose-validator",setup($){const{t}=O(),r=b(`version: '3.3'
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
        image: nginx`),f=d(()=>{try{return D.validateDockerComposeToCommonSpec(r.value)}catch(u){return u.toString().split(`
`).map(a=>({line:-1,message:a,helpLink:""}))}}),p=d(()=>f.value),k={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(u,a)=>{const g=V,x=B,y=I,_=E;return o(),s("div",null,[l(x,{label:e(t)("tools.docker-compose-validator.texts.label-paste-your-docker-compose-file-content")},{default:c(()=>[v("div",R,[l(g,{value:e(r),"onUpdate:value":a[0]||(a[0]=n=>N(r)?r.value=n:null),theme:"vs-dark",language:"yaml",height:"250px",options:k},null,8,["value"])])]),_:1},8,["label"]),e(p).length>0?(o(),s("div",P,[l(_,{title:e(t)("tools.docker-compose-validator.texts.title-the-following-errors-occured"),type:"error","mt-5":""},{default:c(()=>[v("ul",null,[(o(!0),s(w,null,T(e(p),(n,h)=>(o(),s("li",{key:h},[i(m(n.message)+" (",1),n.helpLink?(o(),L(y,{key:0,target:"_blank",rel:"noreferer noopener"},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-see-docker-compose-help")),1)]),_:1})):S("",!0),i(m(e(t)("tools.docker-compose-validator.texts.tag-")),1)]))),128))])]),_:1},8,["title"])])):(o(),s("div",Q,[l(_,{type:"success","mt-5":""},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-validation-successful")),1)]),_:1})]))])}}});export{W as default};
