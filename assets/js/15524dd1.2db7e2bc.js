"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[94727],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51114:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const o={title:"About rke2-selinux"},a=void 0,s={unversionedId:"reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",id:"version-2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",title:"About rke2-selinux",description:"rke2-selinux provides policies for RKE2. It is installed automatically when the RKE2 installer script detects that it is running on an RPM-based distro.",source:"@site/versioned_docs/version-2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux.md",sourceDirName:"reference-guides/rancher-security/selinux-rpm",slug:"/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",permalink:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux.md",tags:[],version:"2.5",lastUpdatedAt:1662477943,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"About rke2-selinux"},sidebar:"tutorialSidebar",previous:{title:"About rancher-selinux",permalink:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"},next:{title:"Kubernetes Security Best Practices",permalink:"/v2.5/reference-guides/rancher-security/kubernetes-security-best-practices"}},c={},u=[],l={toc:u};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rke2-selinux")," provides policies for RKE2. It is installed automatically when the RKE2 installer script detects that it is running on an RPM-based distro."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-selinux")," GitHub repository is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux"},"here.")),(0,i.kt)("p",null,"For more information about installing RKE2 on SELinux-enabled hosts, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/methods/#rpm"},"RKE2 documentation.")))}p.isMDXComponent=!0}}]);