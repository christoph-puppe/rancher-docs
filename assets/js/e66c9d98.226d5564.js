"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"DigitalOcean Node Template Configuration"},i=void 0,c={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",id:"version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",title:"DigitalOcean Node Template Configuration",description:"Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",permalink:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"DigitalOcean Node Template Configuration"},sidebar:"tutorialSidebar",previous:{title:"EC2 Node Template Configuration",permalink:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2"},next:{title:"Azure Node Template Configuration",permalink:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"}},l={},s=[{value:"Droplet Options",id:"droplet-options",level:3},{value:"Docker Daemon",id:"docker-daemon",level:3},{value:"Access Token",id:"access-token",level:3},{value:"Droplet Options",id:"droplet-options-1",level:3},{value:"Docker Daemon",id:"docker-daemon-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=d("Tabs"),p=d("TabItem"),m={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(p,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,o.kt)("p",null,"Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one."),(0,o.kt)("h3",{id:"droplet-options"},"Droplet Options"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Droplet Options")," provision your cluster's geographical region and specifications."),(0,o.kt)("h3",{id:"docker-daemon"},"Docker Daemon"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference")))),(0,o.kt)(p,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,o.kt)("h3",{id:"access-token"},"Access Token"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Access Token")," stores your DigitalOcean Personal Access Token. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2#how-to-generate-a-personal-access-token"},"DigitalOcean Instructions: How To Generate a Personal Access Token"),"."),(0,o.kt)("h3",{id:"droplet-options-1"},"Droplet Options"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Droplet Options")," provision your cluster's geographical region and specifications."),(0,o.kt)("h3",{id:"docker-daemon-1"},"Docker Daemon"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference"))))))}f.isMDXComponent=!0}}]);