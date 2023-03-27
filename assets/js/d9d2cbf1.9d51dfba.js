"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[44474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"6. Generate and View Traffic"},o=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",id:"version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",title:"6. Generate and View Traffic",description:"This section describes how to view the traffic that is being managed by Istio.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"6. Generate and View Traffic"},sidebar:"tutorialSidebar",previous:{title:"5. Set up Istio's Components for Traffic Management",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},next:{title:"CIS Scan Guides",permalink:"/v2.5/pages-for-subheaders/cis-scan-guides"}},c={},l=[{value:"The Kiali Traffic Graph",id:"the-kiali-traffic-graph",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to view the traffic that is being managed by Istio."),(0,a.kt)("h2",{id:"the-kiali-traffic-graph"},"The Kiali Traffic Graph"),(0,a.kt)("p",null,"The Istio overview page provides a link to the Kiali dashboard. From the Kiali dashboard, you are able to view graphs for each namespace. The Kiali graph provides a powerful way to visualize the topology of your Istio service mesh. It shows you which services communicate with each other."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," To enable traffic to show up in the graph, ensure you have prometheus installed in the cluster. Rancher-istio installs Kiali configured by default to work with the rancher-monitoring chart. You can use rancher-monitoring or install your own monitoring solution. Optional: you can change configuration on how data scraping occurs by setting the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"Selectors & Scrape Configs")," options.")),(0,a.kt)("p",null,"To see the traffic graph,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer"),", select ",(0,a.kt)("strong",{parentName:"li"},"Istio")," from the nav dropdown."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Kiali")," link on the Istio ",(0,a.kt)("strong",{parentName:"li"},"Overview")," page."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Graph")," in the side nav."),(0,a.kt)("li",{parentName:"ol"},"Change the namespace in the ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," dropdown to view the traffic for each namespace.")),(0,a.kt)("p",null,"If you refresh the URL to the BookInfo app several times, you should be able to see green arrows on the Kiali graph showing traffic to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"v3")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," service. The control panel on the right side of the graph lets you configure details including how many minutes of the most recent traffic should be shown on the graph."),(0,a.kt)("p",null,"For additional tools and visualizations, you can go to Grafana, and Prometheus dashboards from the ",(0,a.kt)("strong",{parentName:"p"},"Monitoring")," ",(0,a.kt)("strong",{parentName:"p"},"Overview")," page"))}p.isMDXComponent=!0}}]);