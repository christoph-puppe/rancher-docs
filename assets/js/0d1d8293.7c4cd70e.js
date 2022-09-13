"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63906],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43005:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Kubernetes Introduction",weight:1,aliases:["/rancher/v2.x/en/v1.6-migration/kub-intro/"]},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction",id:"version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction",title:"Kubernetes Introduction",description:"Rancher v2.x is built on the Kubernetes container orchestrator. This shift in underlying technology for v2.x is a large departure from v1.6, which supported several popular container orchestrators. Since Rancher is now based entirely on Kubernetes, it's helpful to learn the Kubernetes basics.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction.md",sourceDirName:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",slug:"/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Kubernetes Introduction",weight:1,aliases:["/rancher/v2.x/en/v1.6-migration/kub-intro/"]},sidebar:"tutorialSidebar",previous:{title:"Migrating from v1.6 to v2.x",permalink:"/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x"},next:{title:"1. Get Started",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher"}},c={},d=[{value:"Migration Cheatsheet",id:"migration-cheatsheet",level:2},{value:"Next: Get Started",id:"next-get-started",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher v2.x is built on the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/home/?path=users&persona=app-developer&level=foundational"},"Kubernetes")," container orchestrator. This shift in underlying technology for v2.x is a large departure from v1.6, which supported several popular container orchestrators. Since Rancher is now based entirely on Kubernetes, it's helpful to learn the Kubernetes basics."),(0,o.kt)("p",null,"The following table introduces and defines some key Kubernetes concepts."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Concept")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Definition")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"A collection of machines that run containerized applications managed by Kubernetes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"A virtual cluster, multiple of which can be supported by a single physical cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node"),(0,o.kt)("td",{parentName:"tr",align:null},"One of the physical or virtual machines that make up a cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pod"),(0,o.kt)("td",{parentName:"tr",align:null},"The smallest and simplest Kubernetes object. A pod represents a set of running ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/#why-containers"},"containers")," on your cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,o.kt)("td",{parentName:"tr",align:null},"An API object that manages a replicated application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Workload"),(0,o.kt)("td",{parentName:"tr",align:null},"Workloads are objects that set deployment rules for pods.")))),(0,o.kt)("h2",{id:"migration-cheatsheet"},"Migration Cheatsheet"),(0,o.kt)("p",null,"Because Rancher v1.6 defaulted to our Cattle container orchestrator, it primarily used terminology related to Cattle. However, because Rancher v2.x uses Kubernetes, it aligns with the Kubernetes naming standard. This shift could be confusing for people unfamiliar with Kubernetes, so we've created a table that maps terms commonly used in Rancher v1.6 to their equivalents in Rancher v2.x."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Rancher v1.6")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Rancher v2.x")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Container"),(0,o.kt)("td",{parentName:"tr",align:null},"Pod")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services"),(0,o.kt)("td",{parentName:"tr",align:null},"Workload")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Load Balancer"),(0,o.kt)("td",{parentName:"tr",align:null},"Ingress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Stack"),(0,o.kt)("td",{parentName:"tr",align:null},"Namespace")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Environment"),(0,o.kt)("td",{parentName:"tr",align:null},"Project (Administration)/Cluster (Compute)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Host"),(0,o.kt)("td",{parentName:"tr",align:null},"Node")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Catalog"),(0,o.kt)("td",{parentName:"tr",align:null},"Helm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Port Mapping"),(0,o.kt)("td",{parentName:"tr",align:null},"HostPort (Single Node)/NodePort (All Nodes)")))),(0,o.kt)("br",null),"More detailed information on Kubernetes concepts can be found in the [Kubernetes Concepts Documentation](https://kubernetes.io/docs/concepts/).",(0,o.kt)("h3",{id:"next-get-started"},(0,o.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher"},"Next: Get Started")))}m.isMDXComponent=!0}}]);