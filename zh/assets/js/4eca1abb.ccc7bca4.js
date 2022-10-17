"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[56525],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51983:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66"},u=void 0,l={unversionedId:"getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",id:"getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",title:"\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66",description:"\u5982\u679c\u4f60\u5728\u5185\u90e8\u751f\u4ea7\u73af\u5883\u4f7f\u7528 Rancher\uff0c\u4e14\u4e0d\u6253\u7b97\u516c\u5f00\u66b4\u9732\u5e94\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f7f\u7528\u79c1\u6709 CA \u9881\u53d1\u7684\u8bc1\u4e66\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",permalink:"/zh/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66"},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0 TLS \u5bc6\u6587",permalink:"/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets"},next:{title:"\u5347\u7ea7 Cert-Manager",permalink:"/zh/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"}},s={},p=[{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u5b89\u88c5",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66\u5b89\u88c5",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5728\u5185\u90e8\u751f\u4ea7\u73af\u5883\u4f7f\u7528 Rancher\uff0c\u4e14\u4e0d\u6253\u7b97\u516c\u5f00\u66b4\u9732\u5e94\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f7f\u7528\u79c1\u6709 CA \u9881\u53d1\u7684\u8bc1\u4e66\u3002"),(0,o.kt)("p",null,"Rancher \u53ef\u80fd\u4f1a\u8bbf\u95ee\u914d\u7f6e\u4e86\u81ea\u5b9a\u4e49/\u5185\u90e8 CA \u6839\u8bc1\u4e66\uff08\u4e5f\u79f0\u4e3a\u81ea\u7b7e\u540d\u8bc1\u4e66\uff09\u7684\u670d\u52a1\u3002\u5982\u679c Rancher \u65e0\u6cd5\u9a8c\u8bc1\u670d\u52a1\u7684\u8bc1\u4e66\uff0c\u5219\u4f1a\u663e\u793a\u9519\u8bef\u4fe1\u606f ",(0,o.kt)("inlineCode",{parentName:"p"},"x509: certificate signed by unknown authority"),"\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u9a8c\u8bc1\u8bc1\u4e66\uff0c\u4f60\u9700\u8981\u628a CA \u6839\u8bc1\u4e66\u6dfb\u52a0\u5230 Rancher\u3002\u7531\u4e8e Rancher \u662f\u7528 Go \u7f16\u5199\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf ",(0,o.kt)("inlineCode",{parentName:"p"},"SSL_CERT_DIR")," \u6307\u5411\u5bb9\u5668\u4e2d CA \u6839\u8bc1\u4e66\u6240\u5728\u7684\u76ee\u5f55\u3002\u542f\u52a8 Rancher \u5bb9\u5668\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 Docker \u5377\u9009\u9879\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"-v host-source-directory:container-destination-directory"),"\uff09\u6765\u6302\u8f7d CA \u6839\u8bc1\u4e66\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"Rancher \u53ef\u4ee5\u8bbf\u95ee\u7684\u670d\u52a1\u793a\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5546\u5e97"),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Node Driver \u8bbf\u95ee\u6258\u7ba1/\u4e91 API")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66\u5b89\u88c5"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u5b89\u88c5"),(0,o.kt)("p",null,"\u6709\u5173\u542f\u52a8\u6302\u8f7d\u4e86\u79c1\u6709 CA \u8bc1\u4e66\u7684 Rancher \u5bb9\u5668\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1\u5b89\u88c5\u6587\u6863\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh/reference-guides/single-node-rancher-in-docker/advanced-options#%E8%87%AA%E5%AE%9A%E4%B9%89-ca-%E8%AF%81%E4%B9%A6"},"Docker \u5b89\u88c5\u7684\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u9009\u9879"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh/reference-guides/installation-references/helm-chart-options#%E9%A2%9D%E5%A4%96%E7%9A%84%E6%8E%88%E4%BF%A1-ca"},"Kubernetes \u5b89\u88c5\u7684\u5176\u4ed6\u53d7\u4fe1 CA \u9009\u9879")))))}f.isMDXComponent=!0}}]);