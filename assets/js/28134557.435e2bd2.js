"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8473],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=c(o),g=n,p=l["".concat(s,".").concat(g)]||l[g]||m[g]||i;return o?r.createElement(p,a(a({ref:t},d),{},{components:o})):r.createElement(p,a({ref:t},d))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}l.displayName="MDXCreateElement"},72171:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={title:"Prometheus Configuration"},a=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",id:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",title:"Prometheus Configuration",description:"It is usually not necessary to directly edit the Prometheus custom resource because the monitoring application automatically updates it based on changes to ServiceMonitors and PodMonitors.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",permalink:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Prometheus Configuration"},sidebar:"tutorialSidebar",previous:{title:"Alertmanager Configuration",permalink:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},next:{title:"Configuring PrometheusRules",permalink:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"}},s={},c=[{value:"About the Prometheus Custom Resource",id:"about-the-prometheus-custom-resource",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is usually not necessary to directly edit the Prometheus custom resource because the monitoring application automatically updates it based on changes to ServiceMonitors and PodMonitors."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This section assumes familiarity with how monitoring components work together. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this section."))),(0,n.kt)("h2",{id:"about-the-prometheus-custom-resource"},"About the Prometheus Custom Resource"),(0,n.kt)("p",null,"The Prometheus CR defines a desired Prometheus deployment. The Prometheus Operator observes the Prometheus CR. When the CR changes, the Prometheus Operator creates ",(0,n.kt)("inlineCode",{parentName:"p"},"prometheus-rancher-monitoring-prometheus"),", a Prometheus deployment based on the CR configuration."),(0,n.kt)("p",null,"The Prometheus CR specifies details such as rules and what Alertmanagers are connected to Prometheus. Rancher builds this CR for you."),(0,n.kt)("p",null,"Monitoring V2 only supports one Prometheus per cluster. However, you might want to edit the Prometheus CR if you want to limit monitoring to certain namespaces."))}m.isMDXComponent=!0}}]);