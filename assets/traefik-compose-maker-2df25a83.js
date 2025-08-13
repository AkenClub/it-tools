import{T as _}from"./TextareaCopyable-c541a0c9.js";import{d as h,a9 as N,y as S,c as $,o as v,b,w as p,e as a,f as e,Q as y}from"./index-8a14065c.js";import{_ as U}from"./Input-b28c11ba.js";import{_ as w}from"./FormItem-18f69a57.js";import{_ as H}from"./InputNumber-a859049b.js";import{_ as P}from"./Switch-4747e63a.js";import{_ as B}from"./Space-24ea167f.js";import{_ as E}from"./Card-f2150519.js";import{_ as g}from"./Form-6f4b8e20.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-a22fcbde.js";import"./index-0862b35f.js";import"./index-af76eecf.js";import"./Copy-c54f42f9.js";import"./Scrollbar-a18b0812.js";import"./browser-ddb21091.js";import"./is-browser-fc34c9a6.js";import"./use-locale-68e3d02c.js";import"./use-form-item-e9bddaa3.js";import"./Suffix-504180bb.js";import"./context-6debdef3.js";import"./Remove-9bae44cb.js";import"./Button-47050a60.js";import"./color-to-class-8578b472.js";import"./Add-d9c98631.js";import"./get-slot-1efb97e5.js";function D(r){return r.proxiedServiceName===""||r.proxiedServiceImage===""||r.proxiedServiceHostName===""?"":`
version: "3.3"
services:
  traefik:
    image: "traefik:v2.11"
    container_name: "traefik"
    command:
      ${r.logDebug?'- "--log.level=DEBUG"':""}
      - "--api=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.${r.certResolverName}.acme.httpchallenge=true"
      - "--certificatesresolvers.${r.certResolverName}.acme.httpchallenge.entrypoint=web"
      ${r.letEncryptTest?`- "--certificatesresolvers.${r.certResolverName}.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"`:""}
      - "--certificatesresolvers.${r.certResolverName}.acme.email=${r.postmasterEmail}"
      - "--certificatesresolvers.${r.certResolverName}.acme.storage=/letsencrypt/acme.json"
    labels:
      ${r.dashboard?`
      - "traefik.http.routers.dashboard.rule=Host(\`${r.traefikDashboardHostName}\`) && (PathPrefix('/api') || PathPrefix('/dashboard'))"
      - "traefik.http.routers.dashboard.service=api@internal"
      - "traefik.http.routers.dashboard.middlewares=auth"
      - "traefik.http.middlewares.auth.basicauth.users=${r.dashboardUserAndPass}"
      `:""}
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

  ${r.proxiedServiceName}:
    image: ${r.proxiedServiceImage}
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.${r.proxiedServiceName}-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.${r.proxiedServiceName}-redirect.redirectscheme.permanent=true"
      ${r.loadBalance?`- "traefik.http.services.${r.proxiedServiceName}.loadbalancer.server.port=${r.proxiedServiceLoadBalancePort}"`:""}
      - "traefik.http.routers.${r.proxiedServiceName}.rule=Host(\`${r.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${r.proxiedServiceName}.entrypoints=web"
      - "traefik.http.routers.${r.proxiedServiceName}-secure.rule=Host(\`${r.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${r.proxiedServiceName}-secure.entrypoints=websecure"
      - "traefik.http.routers.${r.proxiedServiceName}-secure.tls=true"
      - "traefik.http.routers.${r.proxiedServiceName}-secure.tls.certresolver=${r.certResolverName}"
      `}const pe=h({__name:"traefik-compose-maker",setup(r){const{t:s}=N(),t=S({logDebug:!1,certResolverName:"",postmasterEmail:"",letEncryptTest:!1,dashboard:!1,traefikDashboardHostName:"",dashboardUserAndPass:"",proxiedServiceName:"",proxiedServiceImage:"",proxiedServiceLoadBalancePort:80,proxiedServiceHostName:"",loadBalance:!1}),n=$(()=>D(t.value));return(R,o)=>{const i=U,m=w,k=H,d=P,u=B,f=_,c=E,x=g;return v(),b(c,{title:e(s)("tools.traefik-compose-maker.texts.title-traefik-docker-compose-generator")},{default:p(()=>[a(x,{model:e(t),"label-placement":"left"},{default:p(()=>[a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-name")},{default:p(()=>[a(i,{value:e(t).proxiedServiceName,"onUpdate:value":o[0]||(o[0]=l=>e(t).proxiedServiceName=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-service-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-image")},{default:p(()=>[a(i,{value:e(t).proxiedServiceImage,"onUpdate:value":o[1]||(o[1]=l=>e(t).proxiedServiceImage=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-image-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-host-name")},{default:p(()=>[a(i,{value:e(t).proxiedServiceHostName,"onUpdate:value":o[2]||(o[2]=l=>e(t).proxiedServiceHostName=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-service-hostname")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(u,null,{default:p(()=>[a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-load-balancer-port")},{default:p(()=>[a(k,{value:e(t).proxiedServiceLoadBalancePort,"onUpdate:value":o[3]||(o[3]=l=>e(t).proxiedServiceLoadBalancePort=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-port")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-enable-load-balancer")},{default:p(()=>[a(d,{value:e(t).loadBalance,"onUpdate:value":o[4]||(o[4]=l=>e(t).loadBalance=l)},null,8,["value"])]),_:1},8,["label"])]),_:1}),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-cert-resolver-name")},{default:p(()=>[a(i,{value:e(t).certResolverName,"onUpdate:value":o[5]||(o[5]=l=>e(t).certResolverName=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-cert-resolver-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-postmaster-email")},{default:p(()=>[a(i,{value:e(t).postmasterEmail,"onUpdate:value":o[6]||(o[6]=l=>e(t).postmasterEmail=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-email")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(u,null,{default:p(()=>[a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-let-s-encrypt-test-mode")},{default:p(()=>[a(d,{value:e(t).letEncryptTest,"onUpdate:value":o[7]||(o[7]=l=>e(t).letEncryptTest=l)},null,8,["value"])]),_:1},8,["label"]),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-enable-dashboard")},{default:p(()=>[a(d,{value:e(t).dashboard,"onUpdate:value":o[8]||(o[8]=l=>e(t).dashboard=l)},null,8,["value"])]),_:1},8,["label"]),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-log-level-debug")},{default:p(()=>[a(d,{value:e(t).logDebug,"onUpdate:value":o[9]||(o[9]=l=>e(t).logDebug=l)},null,8,["value"])]),_:1},8,["label"])]),_:1}),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-traefik-dashboard-host-name")},{default:p(()=>[a(i,{value:e(t).traefikDashboardHostName,"onUpdate:value":o[10]||(o[10]=l=>e(t).traefikDashboardHostName=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-dashboard-host-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(m,{label:e(s)("tools.traefik-compose-maker.texts.label-dashboard-user-and-password")},{default:p(()=>[a(i,{value:e(t).dashboardUserAndPass,"onUpdate:value":o[11]||(o[11]=l=>e(t).dashboardUserAndPass=l),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-user-password")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(n)?(v(),b(c,{key:0,title:e(s)("tools.traefik-compose-maker.texts.title-generated-compose-entry")},{default:p(()=>[a(f,{value:e(n),language:"yaml"},null,8,["value"])]),_:1},8,["title"])):y("",!0)]),_:1},8,["model"])]),_:1},8,["title"])}}});export{pe as default};
