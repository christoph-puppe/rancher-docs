"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Azure Node Template Configuration"},i=void 0,c={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",id:"version-2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",title:"Azure Node Template Configuration",description:"For more information about Azure, refer to the official Azure documentation.",source:"@site/versioned_docs/version-2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",permalink:"/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Azure Node Template Configuration"},sidebar:"tutorialSidebar",previous:{title:"DigitalOcean Node Template Configuration",permalink:"/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"},next:{title:"VSphere Node Template Configuration",permalink:"/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"}},u={},l=[],s={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For more information about Azure, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/?product=featured"},"Azure documentation.")),(0,o.kt)("p",null,"Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Placement")," sets the geographical region where your cluster is hosted and other location metadata."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network")," configures the networking used in your cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Instance")," customizes your VM configuration.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference"))))}d.isMDXComponent=!0}}]);