import{T as _}from"./TextareaCopyable-307e7842.js";import{d as h,aa as N,q as S,c as $,o as v,b,w as p,e as r,f as e,O as y,ai as U,af as w}from"./index-bd50fbe2.js";import{_ as H}from"./FormItem-aa64989f.js";import{_ as P}from"./Switch-d248bab6.js";import{_ as B}from"./Space-f47a7ce8.js";import{_ as E}from"./Card-e6725c49.js";import{_ as D}from"./Form-7cfca94e.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-2afed79b.js";import"./index-59cddc9a.js";import"./index-dbbd6507.js";import"./Copy-e5e09d26.js";import"./Scrollbar-bc5b5dc5.js";import"./context-206942e2.js";import"./get-slot-1efb97e5.js";function R(a){return a.proxiedServiceName===""||a.proxiedServiceImage===""||a.proxiedServiceHostName===""?"":`
version: "3.3"
services:
  traefik:
    image: "traefik:v2.11"
    container_name: "traefik"
    command:
      ${a.logDebug?'- "--log.level=DEBUG"':""}
      - "--api=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.${a.certResolverName}.acme.httpchallenge=true"
      - "--certificatesresolvers.${a.certResolverName}.acme.httpchallenge.entrypoint=web"
      ${a.letEncryptTest?`- "--certificatesresolvers.${a.certResolverName}.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"`:""}
      - "--certificatesresolvers.${a.certResolverName}.acme.email=${a.postmasterEmail}"
      - "--certificatesresolvers.${a.certResolverName}.acme.storage=/letsencrypt/acme.json"
    labels:
      ${a.dashboard?`
      - "traefik.http.routers.dashboard.rule=Host(\`${a.traefikDashboardHostName}\`) && (PathPrefix('/api') || PathPrefix('/dashboard'))"
      - "traefik.http.routers.dashboard.service=api@internal"
      - "traefik.http.routers.dashboard.middlewares=auth"
      - "traefik.http.middlewares.auth.basicauth.users=${a.dashboardUserAndPass}"
      `:""}
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

  ${a.proxiedServiceName}:
    image: ${a.proxiedServiceImage}
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.${a.proxiedServiceName}-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.${a.proxiedServiceName}-redirect.redirectscheme.permanent=true"
      ${a.loadBalance?`- "traefik.http.services.${a.proxiedServiceName}.loadbalancer.server.port=${a.proxiedServiceLoadBalancePort}"`:""}
      - "traefik.http.routers.${a.proxiedServiceName}.rule=Host(\`${a.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${a.proxiedServiceName}.entrypoints=web"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.rule=Host(\`${a.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.entrypoints=websecure"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.tls=true"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.tls.certresolver=${a.certResolverName}"
      `}const W=h({__name:"traefik-compose-maker",setup(a){const{t:s}=N(),t=S({logDebug:!1,certResolverName:"",postmasterEmail:"",letEncryptTest:!1,dashboard:!1,traefikDashboardHostName:"",dashboardUserAndPass:"",proxiedServiceName:"",proxiedServiceImage:"",proxiedServiceLoadBalancePort:80,proxiedServiceHostName:"",loadBalance:!1}),n=$(()=>R(t.value));return(g,l)=>{const d=U,m=H,k=w,i=P,u=B,f=_,c=E,x=D;return v(),b(c,{title:e(s)("tools.traefik-compose-maker.texts.title-traefik-docker-compose-generator")},{default:p(()=>[r(x,{model:e(t),"label-placement":"left"},{default:p(()=>[r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-name")},{default:p(()=>[r(d,{value:e(t).proxiedServiceName,"onUpdate:value":l[0]||(l[0]=o=>e(t).proxiedServiceName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-service-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-image")},{default:p(()=>[r(d,{value:e(t).proxiedServiceImage,"onUpdate:value":l[1]||(l[1]=o=>e(t).proxiedServiceImage=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-image-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-host-name")},{default:p(()=>[r(d,{value:e(t).proxiedServiceHostName,"onUpdate:value":l[2]||(l[2]=o=>e(t).proxiedServiceHostName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-service-hostname")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(u,null,{default:p(()=>[r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-load-balancer-port")},{default:p(()=>[r(k,{value:e(t).proxiedServiceLoadBalancePort,"onUpdate:value":l[3]||(l[3]=o=>e(t).proxiedServiceLoadBalancePort=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-port")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-enable-load-balancer")},{default:p(()=>[r(i,{value:e(t).loadBalance,"onUpdate:value":l[4]||(l[4]=o=>e(t).loadBalance=o)},null,8,["value"])]),_:1},8,["label"])]),_:1}),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-cert-resolver-name")},{default:p(()=>[r(d,{value:e(t).certResolverName,"onUpdate:value":l[5]||(l[5]=o=>e(t).certResolverName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-cert-resolver-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-postmaster-email")},{default:p(()=>[r(d,{value:e(t).postmasterEmail,"onUpdate:value":l[6]||(l[6]=o=>e(t).postmasterEmail=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-email")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(u,null,{default:p(()=>[r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-let-s-encrypt-test-mode")},{default:p(()=>[r(i,{value:e(t).letEncryptTest,"onUpdate:value":l[7]||(l[7]=o=>e(t).letEncryptTest=o)},null,8,["value"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-enable-dashboard")},{default:p(()=>[r(i,{value:e(t).dashboard,"onUpdate:value":l[8]||(l[8]=o=>e(t).dashboard=o)},null,8,["value"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-log-level-debug")},{default:p(()=>[r(i,{value:e(t).logDebug,"onUpdate:value":l[9]||(l[9]=o=>e(t).logDebug=o)},null,8,["value"])]),_:1},8,["label"])]),_:1}),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-traefik-dashboard-host-name")},{default:p(()=>[r(d,{value:e(t).traefikDashboardHostName,"onUpdate:value":l[10]||(l[10]=o=>e(t).traefikDashboardHostName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-dashboard-host-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-dashboard-user-and-password")},{default:p(()=>[r(d,{value:e(t).dashboardUserAndPass,"onUpdate:value":l[11]||(l[11]=o=>e(t).dashboardUserAndPass=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-user-password")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(n)?(v(),b(c,{key:0,title:e(s)("tools.traefik-compose-maker.texts.title-generated-compose-entry")},{default:p(()=>[r(f,{value:e(n),language:"yaml"},null,8,["value"])]),_:1},8,["title"])):y("",!0)]),_:1},8,["model"])]),_:1},8,["title"])}}});export{W as default};
