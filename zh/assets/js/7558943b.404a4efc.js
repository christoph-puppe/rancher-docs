"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50861],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return P}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),P=o,m=d["".concat(u,".").concat(P)]||d[P]||c[P]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function P(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83119:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return P},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Pod \u5b89\u5168\u7b56\u7565"},u=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",title:"Pod \u5b89\u5168\u7b56\u7565",description:"Pod \u5b89\u5168\u7b56\u7565\uff08PSP\uff09 \u662f\u7528\u6765\u63a7\u5236\u5b89\u5168\u654f\u611f\u76f8\u5173 Pod \u89c4\u8303\uff08\u4f8b\u5982 root \u7279\u6743\uff09\u7684\u5bf9\u8c61\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Pod \u5b89\u5168\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u6a21\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates"},next:{title:"\u914d\u7f6e\u5168\u5c40\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"}},s={},c=[{value:"PSP \u5de5\u4f5c\u539f\u7406",id:"psp-\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u9ed8\u8ba4 PSP",id:"\u9ed8\u8ba4-psp",level:2},{value:"\u53d7\u9650-NoRoot",id:"\u53d7\u9650-noroot",level:3},{value:"\u53d7\u9650",id:"\u53d7\u9650",level:3},{value:"\u4e0d\u53d7\u9650",id:"\u4e0d\u53d7\u9650",level:3},{value:"\u521b\u5efa PSP",id:"\u521b\u5efa-psp",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:3},{value:"\u5728 Rancher UI \u4e2d\u521b\u5efa PSP",id:"\u5728-rancher-ui-\u4e2d\u521b\u5efa-psp",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],d={toc:c};function P(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Pod \u5b89\u5168\u7b56\u7565\uff08PSP\uff09")," \u662f\u7528\u6765\u63a7\u5236\u5b89\u5168\u654f\u611f\u76f8\u5173 Pod \u89c4\u8303\uff08\u4f8b\u5982 root \u7279\u6743\uff09\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u67d0\u4e2a Pod \u4e0d\u6ee1\u8db3 PSP \u6307\u5b9a\u7684\u6761\u4ef6\uff0cKubernetes \u5c06\u4e0d\u5141\u8bb8\u5b83\u542f\u52a8\uff0c\u5e76\u5728 Rancher \u4e2d\u663e\u793a\u9519\u8bef\u6d88\u606f ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod <NAME> is forbidden: unable to validate..."),"\u3002"),(0,a.kt)("h2",{id:"psp-\u5de5\u4f5c\u539f\u7406"},"PSP \u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u6216\u9879\u76ee\u7ea7\u522b\u5206\u914d PSP\u3002"),(0,a.kt)("p",null,"PSP \u901a\u8fc7\u7ee7\u627f\u7684\u65b9\u5f0f\u5de5\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5206\u914d\u7ed9\u96c6\u7fa4\u7684 PSP \u7531\u5176\u9879\u76ee\u4ee5\u53ca\u6dfb\u52a0\u5230\u8fd9\u4e9b\u9879\u76ee\u7684\u4efb\u4f55\u547d\u540d\u7a7a\u95f4\u7ee7\u627f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f8b\u5916"),"\uff1a\u65e0\u8bba PSP \u662f\u5206\u914d\u7ed9\u96c6\u7fa4\u8fd8\u662f\u9879\u76ee\uff0c\u672a\u5206\u914d\u7ed9\u9879\u76ee\u7684\u547d\u540d\u7a7a\u95f4\u4e0d\u4f1a\u7ee7\u627f PSP\u3002\u56e0\u4e3a\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u6ca1\u6709 PSP\uff0c\u6240\u4ee5\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u7684\u5de5\u4f5c\u8d1f\u8f7d deployment \u5c06\u5931\u8d25\uff0c\u8fd9\u662f Kubernetes \u7684\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u4e0d\u540c\u7684 PSP \u76f4\u63a5\u5206\u914d\u7ed9\u9879\u76ee\u6765\u8986\u76d6\u9ed8\u8ba4 PSP\u3002")),(0,a.kt)("p",null,"\u5728\u5206\u914d PSP \u4e4b\u524d\u5df2\u7ecf\u5728\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\u8fd0\u884c\u7684\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u5982\u679c\u7b26\u5408 PSP\uff0c\u5219\u4e0d\u4f1a\u88ab\u68c0\u67e5\u3002\u4f60\u9700\u8981\u514b\u9686\u6216\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u4ee5\u67e5\u770b\u5b83\u4eec\u662f\u5426\u901a\u8fc7 PSP\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Kubernetes \u6587\u6863"),"\u4e2d\u9605\u8bfb\u6709\u5173 Pod \u5b89\u5168\u7b56\u7565\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u9ed8\u8ba4-psp"},"\u9ed8\u8ba4 PSP"),(0,a.kt)("p",null,"Rancher \u5185\u7f6e\u4e86\u4e09\u4e2a\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565 (PSP)\uff0c\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted-noroot"),"\uff08\u53d7\u9650 noroot\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"restricted"),"\uff08\u53d7\u9650\uff09\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"unrestricted"),"\uff08\u4e0d\u53d7\u9650\uff09\u7b56\u7565\u3002"),(0,a.kt)("h3",{id:"\u53d7\u9650-noroot"},"\u53d7\u9650-NoRoot"),(0,a.kt)("p",null,"\u6b64\u7b56\u7565\u57fa\u4e8e Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes/website/master/content/en/examples/policy/restricted-psp.yaml"},"\u793a\u4f8b\u53d7\u9650\u7b56\u7565"),"\u3002\u5b83\u6781\u5927\u5730\u9650\u5236\u4e86\u53ef\u4ee5\u5c06\u54ea\u4e9b\u7c7b\u578b\u7684 Pod \u90e8\u7f72\u5230\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\u3002\u8fd9\u9879\u7b56\u7565\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u963b\u6b62 Pod \u4ee5\u7279\u6743\u7528\u6237\u8eab\u4efd\u8fd0\u884c\uff0c\u5e76\u9632\u6b62\u7279\u6743\u5347\u7ea7\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u670d\u52a1\u5668\u6240\u9700\u7684\u5b89\u5168\u673a\u5236\u662f\u5426\u5230\u4f4d\uff0c\u4f8b\u5982\u9650\u5236\u54ea\u4e9b\u5377\u53ea\u80fd\u6302\u8f7d\u5230\u6838\u5fc3\u5377\u7c7b\u578b\uff0c\u5e76\u9632\u6b62\u6dfb\u52a0 root \u8865\u5145\u7ec4\u3002")),(0,a.kt)("h3",{id:"\u53d7\u9650"},"\u53d7\u9650"),(0,a.kt)("p",null,"\u8be5\u7b56\u7565\u662f\u5bbd\u677e\u7248\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted-noroot")," \u7b56\u7565\uff0c\u9664\u4e86\u5141\u8bb8\u4ee5\u7279\u6743\u7528\u6237\u8eab\u4efd\u8fd0\u884c\u5bb9\u5668\u5916\uff0c\u51e0\u4e4e\u6240\u6709\u9650\u5236\u90fd\u5230\u4f4d\u3002"),(0,a.kt)("h3",{id:"\u4e0d\u53d7\u9650"},"\u4e0d\u53d7\u9650"),(0,a.kt)("p",null,"\u8be5\u7b56\u7565\u7b49\u6548\u4e8e\u5728\u7981\u7528 PSP \u63a7\u5236\u5668\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c Kubernetes\u3002\u5bf9\u4e8e\u53ef\u4ee5\u5c06\u54ea\u4e9b Pod \u90e8\u7f72\u5230\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\uff0c\u5b83\u6ca1\u6709\u4efb\u4f55\u9650\u5236\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa-psp"},"\u521b\u5efa PSP"),(0,a.kt)("p",null,"\u4f7f\u7528 Rancher\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u7684 GUI \u521b\u5efa Pod \u5b89\u5168\u7b56\u7565\uff0c\u800c\u4e0d\u662f\u521b\u5efa YAML \u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("p",null,"Rancher \u53ea\u80fd\u4e3a",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u4f7f\u7528 RKE \u542f\u52a8\u7684\u96c6\u7fa4"),"\u5206\u914d PSP\u3002"),(0,a.kt)("p",null,"\u4f60\u5fc5\u987b\u5148\u5728\u96c6\u7fa4\u7ea7\u522b\u542f\u7528 PSP\uff0c\u7136\u540e\u624d\u80fd\u5c06\u5b83\u4eec\u5206\u914d\u7ed9\u9879\u76ee\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cluster-configuration"},"\u7f16\u8f91\u96c6\u7fa4"),"\u6765\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u6700\u597d\u7684\u505a\u6cd5\u662f\u5728\u96c6\u7fa4\u7ea7\u522b\u8bbe\u7f6e PSP\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728\u96c6\u7fa4\u548c\u9879\u76ee\u521b\u5efa\u671f\u95f4\u6dfb\u52a0 PSP\uff0c\u800c\u4e0d\u662f\u5c06\u5176\u6dfb\u52a0\u5230\u73b0\u6709\u7684\u9879\u76ee\u6216\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u5728-rancher-ui-\u4e2d\u521b\u5efa-psp"},"\u5728 Rancher UI \u4e2d\u521b\u5efa PSP"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Pod \u5b89\u5168\u7b56\u7565"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u7b56\u7565"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u7b56\u7565\u547d\u540d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u683c\u7684\u6bcf\u4e2a\u90e8\u5206\u3002\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Kubernetes \u6587\u6863"),"\uff0c\u4e86\u89e3\u6bcf\u4e2a\u7b56\u7565\u7684\u4f5c\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u5173\u4e8e PSP \u7684 Kubernetes \u6587\u6863\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"\u8fd9\u91cc"),"\u3002"))}P.isMDXComponent=!0}}]);