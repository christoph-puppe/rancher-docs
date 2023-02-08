"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(n),k=i,d=h["".concat(c,".").concat(k)]||h[k]||s[k]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"kubectl Utility"},l=void 0,o={unversionedId:"reference-guides/cli-with-rancher/kubectl-utility",id:"version-2.0-2.4/reference-guides/cli-with-rancher/kubectl-utility",title:"kubectl Utility",description:"kubectl",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cli-with-rancher/kubectl-utility.md",sourceDirName:"reference-guides/cli-with-rancher",slug:"/reference-guides/cli-with-rancher/kubectl-utility",permalink:"/zh/v2.0-v2.4/reference-guides/cli-with-rancher/kubectl-utility",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cli-with-rancher/kubectl-utility.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"2022\u5e7410\u670829\u65e5",frontMatter:{title:"kubectl Utility"},sidebar:"tutorialSidebar",previous:{title:"Rancher CLI",permalink:"/zh/v2.0-v2.4/reference-guides/cli-with-rancher/rancher-cli"},next:{title:"API",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/about-the-api"}},c={},u=[{value:"kubectl",id:"kubectl",level:2},{value:"kubectl Utility",id:"kubectl-utility",level:3},{value:"Authentication with kubectl and kubeconfig Tokens with TTL",id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kubectl"},"kubectl"),(0,i.kt)("p",null,"Interact with Rancher using kubectl."),(0,i.kt)("h3",{id:"kubectl-utility"},"kubectl Utility"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," utility. See ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"install kubectl"),"."),(0,i.kt)("p",null,"Configure kubectl by visiting your cluster in the Rancher Web UI, clicking on ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubeconfig"),", copying contents, and putting them into your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," file."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," successfully."),(0,i.kt)("h3",{id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl"},"Authentication with kubectl and kubeconfig Tokens with TTL"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Requirements")),(0,i.kt)("p",null,"If admins have ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/about-the-api/api-tokens#setting-ttl-on-kubeconfig-tokens"},"enforced TTL on kubeconfig tokens"),", the kubeconfig file requires the ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/cli-with-rancher/rancher-cli"},"Rancher CLI")," to be present in your PATH when you run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),". Otherwise, you\u2019ll see an error like:\n",(0,i.kt)("inlineCode",{parentName:"p"},'Unable to connect to the server: getting credentials: exec: exec: "rancher": executable file not found in $PATH'),"."),(0,i.kt)("p",null,"This feature enables kubectl to authenticate with the Rancher server and get a new kubeconfig token when required. The following auth providers are currently supported:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Local"),(0,i.kt)("li",{parentName:"ol"},"Active Directory (LDAP only)"),(0,i.kt)("li",{parentName:"ol"},"FreeIPA"),(0,i.kt)("li",{parentName:"ol"},"OpenLDAP"),(0,i.kt)("li",{parentName:"ol"},"SAML providers: Ping, Okta, ADFS, Keycloak, Shibboleth")),(0,i.kt)("p",null,"When you first run kubectl, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),", it will ask you to pick an auth provider and log in with the Rancher server. The kubeconfig token is cached in the path where you run kubectl under ",(0,i.kt)("inlineCode",{parentName:"p"},"./.cache/token"),". This token is valid until ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/about-the-api/api-tokens#setting-ttl-on-kubeconfig-tokens-period"},"it expires"),", or ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/about-the-api/api-tokens#deleting-tokens"},"gets deleted from the Rancher server"),". Upon expiration, the next ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," will ask you to log in with the Rancher server again."))}s.isMDXComponent=!0}}]);