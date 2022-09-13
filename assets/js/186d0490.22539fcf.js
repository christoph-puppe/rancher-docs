"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61389],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80618:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Disabling Istio",weight:4,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/disabling-istio","/rancher/v2.0-v2.4/en/istio/legacy/disabling-istio","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/disabling-istio","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/disabling-istio/"]},l=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/disable-istio",id:"version-2.0-2.4/explanations/integrations-in-rancher/istio/disable-istio",title:"Disabling Istio",description:"This section describes how to disable Istio in a cluster, namespace, or workload.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/disable-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/disable-istio",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/disable-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/disable-istio.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Disabling Istio",weight:4,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/disabling-istio","/rancher/v2.0-v2.4/en/istio/legacy/disabling-istio","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/disabling-istio","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/disabling-istio/"]},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/rbac-for-istio"},next:{title:"Release Notes",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/release-notes"}},p={},d=[],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to disable Istio in a cluster, namespace, or workload."),(0,o.kt)("h1",{id:"disable-istio-in-a-cluster"},"Disable Istio in a Cluster"),(0,o.kt)("p",null,"To disable Istio,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, navigate to the cluster that you want to disable Istio for."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Disable,")," then click the red button again to confirm the disable action.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-istio")," application in the cluster's ",(0,o.kt)("inlineCode",{parentName:"p"},"system")," project gets removed. The Istio sidecar cannot be deployed on any workloads in the cluster."),(0,o.kt)("h1",{id:"disable-istio-in-a-namespace"},"Disable Istio in a Namespace"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the project that has the namespace where you want to disable Istio."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Workloads")," tab, you will see a list of namespaces and the workloads deployed in them. Go to the namespace where you want to disable and click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Disable Istio Auto Injection."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," When workloads are deployed in this namespace, they will not have the Istio sidecar."),(0,o.kt)("h1",{id:"remove-the-istio-sidecar-from-a-workload"},"Remove the Istio Sidecar from a Workload"),(0,o.kt)("p",null,"Disable Istio in the namespace, then redeploy the workloads with in it. They will be deployed without the Istio sidecar."))}h.isMDXComponent=!0}}]);