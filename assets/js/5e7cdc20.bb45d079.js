"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64792],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>l});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),l=a,m=f["".concat(s,".").concat(l)]||f[l]||h[l]||o;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function l(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21218:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"Architecture"},c=void 0,i={unversionedId:"pages-for-subheaders/rancher-manager-architecture",id:"version-2.0-2.4/pages-for-subheaders/rancher-manager-architecture",title:"Architecture",description:"This section focuses on the Rancher server and its components and how Rancher communicates with downstream Kubernetes clusters.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-manager-architecture.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-manager-architecture",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-manager-architecture.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Tips for Scaling, Security and Reliability",permalink:"/v2.0-v2.4/reference-guides/best-practices/management"},next:{title:"Rancher Server and Components",permalink:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/rancher-server-and-components"}},s={},u=[],p={toc:u};function h(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section focuses on the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/rancher-server-and-components"},"Rancher server and its components")," and how ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"},"Rancher communicates with downstream Kubernetes clusters"),"."),(0,a.kt)("p",null,"For information on the different ways that Rancher can be installed, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade#overview-of-installation-options"},"overview of installation options.")),(0,a.kt)("p",null,"For a list of main features of the Rancher API server, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/introduction/overview#features-of-the-rancher-api-server"},"overview section.")),(0,a.kt)("p",null,"For guidance about setting up the underlying infrastructure for the Rancher server, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations"},"architecture recommendations.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This section assumes a basic familiarity with Docker and Kubernetes. For a brief explanation of how Kubernetes components work together, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/kubernetes-concepts"},"concepts")," page.")))}h.isMDXComponent=!0}}]);