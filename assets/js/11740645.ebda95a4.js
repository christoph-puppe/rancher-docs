"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89730],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,o=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=c,m=p["".concat(o,".").concat(f)]||p[f]||l[f]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49876:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=r(87462),c=r(63366),i=(r(67294),r(3905)),s=["components"],a={title:"Kubernetes Security Best Practices",weight:5},o=void 0,u={unversionedId:"reference-guides/rancher-security/kubernetes-security-best-practices",id:"reference-guides/rancher-security/kubernetes-security-best-practices",title:"Kubernetes Security Best Practices",description:"Restricting cloud metadata API access",source:"@site/docs/reference-guides/rancher-security/kubernetes-security-best-practices.md",sourceDirName:"reference-guides/rancher-security",slug:"/reference-guides/rancher-security/kubernetes-security-best-practices",permalink:"/reference-guides/rancher-security/kubernetes-security-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-security/kubernetes-security-best-practices.md",tags:[],version:"current",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Kubernetes Security Best Practices",weight:5},sidebar:"tutorialSidebar",previous:{title:"About rke2-selinux",permalink:"/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"},next:{title:"Security Advisories and CVEs",permalink:"/reference-guides/rancher-security/security-advisories-and-cves"}},d={},l=[{value:"Restricting cloud metadata API access",id:"restricting-cloud-metadata-api-access",level:3}],p={toc:l};function f(e){var t=e.components,r=(0,c.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"restricting-cloud-metadata-api-access"},"Restricting cloud metadata API access"),(0,i.kt)("p",null,"Cloud providers such as AWS, Azure, DigitalOcean or GCP often expose metadata services locally to instances. By default, this endpoint is accessible by pods running on a cloud instance, including pods in hosted Kubernetes providers such as EKS, AKS, DigitalOcean Kubernetes or GKE, and can contain cloud credentials for that node, provisioning data such as kubelet credentials, or other sensitive data. To mitigate this risk when running on a cloud platform, follow the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#restricting-cloud-metadata-api-access"},"Kubernetes security recommendations"),": limit permissions given to instance credentials, use network policies to restrict pod access to the metadata API, and avoid using provisioning data to deliver secrets."),(0,i.kt)("p",null,"It is advised to consult your cloud provider's security best practices for further recommendations and specific details on how to restrict access to cloud instance metadata API."),(0,i.kt)("p",null,"Further references: MITRE ATT&CK knowledge base on - ",(0,i.kt)("a",{parentName:"p",href:"https://attack.mitre.org/techniques/T1552/005/"},"Unsecured Credentials: Cloud Instance Metadata API"),"."))}f.isMDXComponent=!0}}]);