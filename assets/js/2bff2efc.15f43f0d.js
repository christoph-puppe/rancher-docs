"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79457],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return l}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),l=n,g=p["".concat(u,".").concat(l)]||p[l]||m[l]||i;return r?o.createElement(g,a(a({ref:t},d),{},{components:r})):o.createElement(g,a({ref:t},d))}));function l(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8771:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Configuration",weight:5},u=void 0,c={unversionedId:"pages-for-subheaders/monitoring-v2-configuration-guides",id:"pages-for-subheaders/monitoring-v2-configuration-guides",title:"Configuration",description:"This page captures some of the most important options for configuring Monitoring V2 in the Rancher UI.",source:"@site/docs/pages-for-subheaders/monitoring-v2-configuration-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/monitoring-v2-configuration-guides",permalink:"/pages-for-subheaders/monitoring-v2-configuration-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/monitoring-v2-configuration-guides.md",tags:[],version:"current",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Configuration",weight:5},sidebar:"tutorialSidebar",previous:{title:"Installing Project Monitors",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/project-monitors"},next:{title:"Advanced Configuration",permalink:"/pages-for-subheaders/advanced-configuration"}},d={},m=[{value:"ServiceMonitor and PodMonitor Configuration",id:"servicemonitor-and-podmonitor-configuration",level:3},{value:"Advanced Prometheus Configuration",id:"advanced-prometheus-configuration",level:3},{value:"Receivers",id:"receivers",level:3},{value:"Routes",id:"routes",level:3},{value:"Advanced",id:"advanced",level:3}],p={toc:m};function l(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page captures some of the most important options for configuring Monitoring V2 in the Rancher UI."),(0,i.kt)("p",null,"For information on configuring custom scrape targets and rules for Prometheus, please refer to the upstream documentation for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator.")," Some of the most important custom resources are explained in the Prometheus Operator ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/design.md"},"design documentation.")," The Prometheus Operator documentation can help also you set up RBAC, Thanos, or custom configuration. "),(0,i.kt)("h1",{id:"setting-resource-limits-and-requests"},"Setting Resource Limits and Requests"),(0,i.kt)("p",null,"The resource requests and limits for the monitoring application can be configured when installing ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". For more information about the default limits, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"this page.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On an idle cluster, Monitoring V2 has significantly higher CPU usage (up to 70%) as compared to Monitoring V1. To improve performance and achieve similar results as in Monitoring V1, turn off the Prometheus adapter. "))),(0,i.kt)("h1",{id:"prometheus-configuration"},"Prometheus Configuration"),(0,i.kt)("p",null,"It is usually not necessary to directly edit the Prometheus custom resource."),(0,i.kt)("p",null,"Instead, to configure Prometheus to scrape custom metrics, you will only need to create a new ServiceMonitor or PodMonitor to configure Prometheus to scrape additional metrics."),(0,i.kt)("h3",{id:"servicemonitor-and-podmonitor-configuration"},"ServiceMonitor and PodMonitor Configuration"),(0,i.kt)("p",null,"For details, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"},"this page.")),(0,i.kt)("h3",{id:"advanced-prometheus-configuration"},"Advanced Prometheus Configuration"),(0,i.kt)("p",null,"For more information about directly editing the Prometheus custom resource, which may be helpful in advanced use cases, see ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},"this page.")),(0,i.kt)("h1",{id:"alertmanager-configuration"},"Alertmanager Configuration"),(0,i.kt)("p",null,"The Alertmanager custom resource usually doesn't need to be edited directly. For most common use cases, you can manage alerts by updating Routes and Receivers."),(0,i.kt)("p",null,"Routes and receivers are part of the configuration of the alertmanager custom resource. In the Rancher UI, Routes and Receivers are not true custom resources, but pseudo-custom resources that the Prometheus Operator uses to synchronize your configuration with the Alertmanager custom resource. When routes and receivers are updated, the monitoring application will automatically update Alertmanager to reflect those changes."),(0,i.kt)("p",null,"For some advanced use cases, you may want to configure alertmanager directly. For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"this page.")),(0,i.kt)("h3",{id:"receivers"},"Receivers"),(0,i.kt)("p",null,"Receivers are used to set up notifications. For details on how to configure receivers, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/monitoring-v2-configuration/receivers"},"this page.")),(0,i.kt)("h3",{id:"routes"},"Routes"),(0,i.kt)("p",null,"Routes filter notifications before they reach receivers. Each route needs to refer to a receiver that has already been configured. For details on how to configure routes, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/monitoring-v2-configuration/routes"},"this page.")),(0,i.kt)("h3",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"For more information about directly editing the Alertmanager custom resource, which may be helpful in advanced use cases, see ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"this page.")))}l.isMDXComponent=!0}}]);