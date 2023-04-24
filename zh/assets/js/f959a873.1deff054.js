"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24027],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u5b89\u88c5 Rancher CIS Benchmark"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",id:"version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",title:"\u5b89\u88c5 Rancher CIS Benchmark",description:"1. \u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb \u2630 > \u96c6\u7fa4\u7ba1\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark.md",tags:[],version:"2.6",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u5b89\u88c5 Rancher CIS Benchmark"},sidebar:"tutorialSidebar",previous:{title:"CIS \u626b\u63cf\u6307\u5357",permalink:"/zh/v2.6/pages-for-subheaders/cis-scan-guides"},next:{title:"\u5378\u8f7d Rancher CIS Benchmark",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark"}},c={},l=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=u("Tabs"),d=u("TabItem"),m={toc:l};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u5b89\u88c5 CIS Benchmark \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Apps > Charts"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"CIS Benchmark"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"))),(0,a.kt)(d,{value:"Rancher \u7248\u672c\u4f4e\u4e8e v2.6.5",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u5b89\u88c5 CIS Benchmark \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Charts"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"CIS Benchmark"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aCIS \u626b\u63cf\u5e94\u7528\u5df2\u7ecf\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u3002"))}g.isMDXComponent=!0}}]);