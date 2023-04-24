"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=u(r),d=o,m=k["".concat(l,".").concat(d)]||k[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},93281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u521b\u5efa GKE \u96c6\u7fa4"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",title:"\u521b\u5efa GKE \u96c6\u7fa4",description:"\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",tags:[],version:"2.6",lastUpdatedAt:1676523322,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"\u521b\u5efa GKE \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa EKS \u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks"},next:{title:"\u521b\u5efa AKS \u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"}},l={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"ServiceAccount \u4ee4\u724c",id:"serviceaccount-\u4ee4\u724c",level:3},{value:"Google \u9879\u76ee ID",id:"google-\u9879\u76ee-id",level:3},{value:"\u914d\u7f6e GKE \u96c6\u7fa4",id:"\u914d\u7f6e-gke-\u96c6\u7fa4",level:2},{value:"1. \u521b\u5efa\u4e91\u51ed\u8bc1",id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1",level:3},{value:"2. \u521b\u5efa GKE \u96c6\u7fa4",id:"2-\u521b\u5efa-gke-\u96c6\u7fa4",level:3},{value:"\u79c1\u6709\u96c6\u7fa4",id:"\u79c1\u6709\u96c6\u7fa4",level:2},{value:"\u914d\u7f6e\u53c2\u8003",id:"\u914d\u7f6e\u53c2\u8003",level:2},{value:"\u66f4\u65b0 Kubernetes \u7248\u672c",id:"\u66f4\u65b0-kubernetes-\u7248\u672c",level:2},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:2},{value:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa GKE \u96c6\u7fa4",id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-gke-\u96c6\u7fa4",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u4f60\u9700\u8981\u5728 Google Kubernetes Engine \u4e2d\u8fdb\u884c\u4e00\u4e9b\u8bbe\u7f6e\u3002"),(0,o.kt)("h3",{id:"serviceaccount-\u4ee4\u724c"},"ServiceAccount \u4ee4\u724c"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts"},"Google Kubernetes Engine")," \u521b\u5efa\u670d\u52a1\u5e10\u53f7\u3002GKE \u4f7f\u7528\u8fd9\u4e2a\u8d26\u53f7\u6765\u64cd\u4f5c\u4f60\u7684\u96c6\u7fa4\u3002\u521b\u5efa\u6b64\u8d26\u53f7\u8fd8\u4f1a\u751f\u6210\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u79c1\u94a5\u3002"),(0,o.kt)("p",null,"\u8be5 ServiceAccount \u9700\u8981\u4ee5\u4e0b\u89d2\u8272\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compute Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/compute.viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes Engine Admin:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/container.admin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Account User:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountUser"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"Google \u6587\u6863\uff1a\u521b\u5efa\u548c\u542f\u7528 ServiceAccount")),(0,o.kt)("p",null,"\u6709\u5173\u83b7\u53d6 ServiceAccount \u7684\u79c1\u94a5\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"\u6b64 Google \u4e91\u6587\u6863"),"\u3002\u4f60\u9700\u8981\u5c06\u5bc6\u94a5\u4fdd\u5b58\u4e3a JSON \u683c\u5f0f\u3002"),(0,o.kt)("h3",{id:"google-\u9879\u76ee-id"},"Google \u9879\u76ee ID"),(0,o.kt)("p",null,"\u4f60\u7684\u96c6\u7fa4\u9700\u8981\u5305\u62ec\u5230\u8c37\u6b4c\u9879\u76ee\u4e2d\u3002"),(0,o.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u9879\u76ee\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project"},"\u6b64 Google \u4e91\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u8981\u83b7\u53d6\u73b0\u6709\u9879\u76ee\u7684\u9879\u76ee ID\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects"},"\u6b64 Google \u4e91\u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e-gke-\u96c6\u7fa4"},"\u914d\u7f6e GKE \u96c6\u7fa4"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u90e8\u7f72\u5230 GKE \u4f1a\u4ea7\u751f\u8d39\u7528\u3002")),(0,o.kt)("h3",{id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1"},"1. \u521b\u5efa\u4e91\u51ed\u8bc1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60 Google \u4e91\u51ed\u8bc1\u7684\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"ServiceAccount")," \u6587\u672c\u6846\u4e2d\uff0c\u7c98\u8d34\u4f60\u7684 ServiceAccount \u79c1\u94a5 JSON\uff0c\u6216\u4e0a\u4f20 JSON \u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u521b\u5efa Rancher \u7528\u4e8e\u914d\u7f6e\u65b0 GKE \u96c6\u7fa4\u7684\u51ed\u8bc1\u3002"),(0,o.kt)("h3",{id:"2-\u521b\u5efa-gke-\u96c6\u7fa4"},"2. \u521b\u5efa GKE \u96c6\u7fa4"),(0,o.kt)("p",null,"\u4f7f\u7528 Rancher \u914d\u7f6e\u4f60\u7684 Kubernetes \u96c6\u7fa4\u3002\u8981\u4f7f\u7528 Rancher \u6210\u529f\u521b\u5efa GKE \u96c6\u7fa4\uff0cGKE \u5fc5\u987b\u5904\u4e8e Standard \u6a21\u5f0f\u3002GKE \u5728\u521b\u5efa Kubernetes \u96c6\u7fa4\u65f6\u6709\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f\uff0c\u5206\u522b\u662f Autopilot \u548c Standard \u6a21\u5f0f\u3002Autopilot \u6a21\u5f0f\u7684\u96c6\u7fa4\u914d\u7f6e\u5bf9\u7f16\u8f91 kube-system \u547d\u540d\u7a7a\u95f4\u6709\u9650\u5236\u3002\u4f46\u662f\uff0cRancher \u5728\u5b89\u88c5\u65f6\u9700\u8981\u5728 kube-system \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u4f60\u5c06\u65e0\u6cd5\u521b\u5efa Autopilot \u6a21\u5f0f\u7684 GKE \u96c6\u7fa4\u3002\u5982\u9700\u8be6\u7ec6\u4e86\u89e3 GKE Autopilot \u6a21\u5f0f\u548c Standard \u6a21\u5f0f\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u8bf7\u8bbf\u95ee",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/resources/autopilot-standard-feature-comparison"},"\u6bd4\u8f83 GKE Autopilot \u548c Standard "),"\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Google GKE"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u4f7f\u7528",(0,o.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,o.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5c06 Kubernetes ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"\u6807\u7b7e"),"\u6216",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"\u6ce8\u91ca"),"\u6dfb\u52a0\u5230\u96c6\u7fa4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60\u7684 Google \u9879\u76ee ID \u548c Google \u4e91\u51ed\u8bc1\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u8868\u5355\u7684\u5176\u4f59\u90e8\u5206\u3002\u5982\u9700\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/gke-cluster-configuration"},"GKE \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u6210\u529f\u90e8\u7f72 GKE \u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,o.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,o.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,o.kt)("h2",{id:"\u79c1\u6709\u96c6\u7fa4"},"\u79c1\u6709\u96c6\u7fa4"),(0,o.kt)("p",null,"\u652f\u6301\u79c1\u6709 GKE \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u6b64\u9ad8\u7ea7\u8bbe\u7f6e\u53ef\u80fd\u6d89\u53ca\u66f4\u591a\u6b65\u9aa4\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters"},"\u672c\u8282"),"\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u53c2\u8003"},"\u914d\u7f6e\u53c2\u8003"),(0,o.kt)("p",null,"\u6709\u5173\u5728 Rancher \u4e2d\u914d\u7f6e GKE \u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/gke-cluster-configuration"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("h2",{id:"\u66f4\u65b0-kubernetes-\u7248\u672c"},"\u66f4\u65b0 Kubernetes \u7248\u672c"),(0,o.kt)("p",null,"\u96c6\u7fa4\u7684 Kubernetes \u7248\u672c\u53ef\u4ee5\u5347\u7ea7\u5230 GKE \u96c6\u7fa4\u6240\u5728\u533a\u57df\u6216\u5730\u533a\u4e2d\u53ef\u7528\u7684\u4efb\u4f55\u7248\u672c\u3002\u5347\u7ea7 Kubernetes \u4e3b\u7248\u672c\u4e0d\u4f1a\u81ea\u52a8\u5347\u7ea7 Worker \u8282\u70b9\u3002\u8282\u70b9\u53ef\u4ee5\u72ec\u7acb\u5347\u7ea7\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"GKE \u5728 1.19+ \u4e2d\u53d6\u6d88\u4e86\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u3002\u8981\u5c06\u96c6\u7fa4\u5347\u7ea7\u5230 1.19+\uff0c\u5fc5\u987b\u5728\u8c37\u6b4c\u4e91\u4e2d\u7981\u7528\u57fa\u672c\u8eab\u4efd\u8ba4\u8bc1\u3002\u5426\u5219\uff0c\u5728\u5347\u7ea7\u5230 1.19+ \u65f6\uff0cRancher \u4f1a\u51fa\u73b0\u9519\u8bef\u3002\u4f60\u53ef\u4ee5\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication#disabling_authentication_with_a_static_password"},"Google \u6587\u6863"),"\u8fdb\u884c\u64cd\u4f5c\u3002\u7136\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 Rancher \u5c06 Kubernetes \u7248\u672c\u66f4\u65b0\u5230 1.19+\u3002")),(0,o.kt)("h2",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,o.kt)("p",null,"GKE \u914d\u7f6e\u8005\u53ef\u4ee5\u5728 Rancher \u548c\u63d0\u4f9b\u5546\u4e4b\u95f4\u540c\u6b65 GKE \u96c6\u7fa4\u7684\u72b6\u6001\u3002\u6709\u5173\u5176\u5de5\u4f5c\u539f\u7406\u7684\u6280\u672f\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"\u540c\u6b65"),"\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u914d\u7f6e\u5237\u65b0\u95f4\u9694\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/gke-cluster-configuration#%E9%85%8D%E7%BD%AE%E5%88%B7%E6%96%B0%E9%97%B4%E9%9A%94"},"\u672c\u8282"),"\u3002"),(0,o.kt)("h2",{id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-gke-\u96c6\u7fa4"},"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa GKE \u96c6\u7fa4"),(0,o.kt)("p",null,"\u901a\u8fc7 Rancher \u4ee5\u7f16\u7a0b\u65b9\u5f0f\u90e8\u7f72 GKE \u96c6\u7fa4\u7684\u6700\u5e38\u89c1\u65b9\u6cd5\u662f\u4f7f\u7528 Rancher 2 Terraform Provider\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"\u4f7f\u7528 Terraform \u521b\u5efa\u96c6\u7fa4"),"\u3002"))}p.isMDXComponent=!0}}]);