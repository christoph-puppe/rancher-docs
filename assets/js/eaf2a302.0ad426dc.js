"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45422],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),o=t(86010),r="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),o=t(67294),r=t(86010),i=t(72389),l=t(67392),s=t(7094),u=t(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,i=e.lazy,p=e.block,m=e.defaultValue,f=e.values,g=e.groupId,h=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,x=(0,o.useState)(y),C=x[0],O=x[1],S=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=N[g];null!=j&&j!==C&&k.some((function(e){return e.value===j}))&&O(j)}var L=function(e){var n=e.currentTarget,t=S.indexOf(n),a=k[t].value;a!==C&&(E(n),O(a),null!=g&&T(g,String(a)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,o=S.indexOf(e.currentTarget)+1;t=null!=(a=S[o])?a:S[0];break;case"ArrowLeft":var r,i=S.indexOf(e.currentTarget)-1;t=null!=(r=S[i])?r:S[S.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},h)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:L,onClick:L},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}},71835:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=t(65488),l=t(85162),s=["components"],u={title:"Working with Taints and Tolerations",weight:6},c=void 0,d={unversionedId:"explanations/integrations-in-rancher/logging/taints-and-tolerations",id:"version-2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations",title:"Working with Taints and Tolerations",description:'"Tainting" a Kubernetes node causes pods to repel running on that node.',source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/taints-and-tolerations",permalink:"/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations.md",tags:[],version:"2.5",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Working with Taints and Tolerations",weight:6},sidebar:"tutorialSidebar",previous:{title:"rancher-logging Helm Chart Options",permalink:"/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options"},next:{title:"Custom Resource Configuration",permalink:"/v2.5/pages-for-subheaders/custom-resource-configuration"}},p={},m=[{value:"Default Implementation in Rancher&#39;s Logging Stack",id:"default-implementation-in-ranchers-logging-stack",level:3},{value:"Adding NodeSelector Settings and Tolerations for Custom Taints",id:"adding-nodeselector-settings-and-tolerations-for-custom-taints",level:3}],f={toc:m};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'"Tainting" a Kubernetes node causes pods to repel running on that node.'),(0,r.kt)("p",null,"Unless the pods have a ",(0,r.kt)("inlineCode",{parentName:"p"},"toleration")," for that node's taint, they will run on other nodes in the cluster."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"Taints and tolerations")," can work in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"field")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"PodSpec"),", which enables the ",(0,r.kt)("em",{parentName:"p"},"opposite")," effect of a taint."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," gives pods an affinity towards certain nodes."),(0,r.kt)("p",null,"Both provide choice for the what node(s) the pod will run on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-implementation-in-rancher-s-logging-stack"},"Default Implementation in Rancher's Logging Stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"))),(0,r.kt)("h3",{id:"default-implementation-in-ranchers-logging-stack"},"Default Implementation in Rancher's Logging Stack"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,r.kt)("p",null,"By default, Rancher taints all Linux nodes with ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle.io/os=linux"),", and does not taint Windows nodes.\nThe logging stack pods have ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerations")," for this taint, which enables them to run on Linux nodes.\nMoreover, most logging stack pods run on Linux only and have a ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," added to ensure they run on Linux nodes.")),(0,r.kt)(l.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,r.kt)("p",null,"By default, Rancher taints all Linux nodes with ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle.io/os=linux"),", and does not taint Windows nodes.\nThe logging stack pods have ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerations")," for this taint, which enables them to run on Linux nodes.\nMoreover, we can populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," to ensure that our pods ",(0,r.kt)("em",{parentName:"p"},"only")," run on Linux nodes."))),(0,r.kt)("p",null,"This example Pod YAML file shows a nodeSelector being used with a toleration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n# metadata...\nspec:\n  # containers...\n  tolerations:\n    - key: cattle.io/os\n      operator: "Equal"\n      value: "linux"\n      effect: NoSchedule\n  nodeSelector:\n    kubernetes.io/os: linux\n')),(0,r.kt)("p",null,"In the above example, we ensure that our pod only runs on Linux nodes, and we add a ",(0,r.kt)("inlineCode",{parentName:"p"},"toleration")," for the taint we have on all of our Linux nodes."),(0,r.kt)("p",null,"You can do the same with Rancher's existing taints, or with your own custom ones."),(0,r.kt)("h3",{id:"adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"),(0,r.kt)("p",null,"If you would like to add your own ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," settings, or if you would like to add ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerations")," for additional taints, you can pass the following to the chart's values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n  # insert tolerations...\nnodeSelector:\n  # insert nodeSelector...\n")),(0,r.kt)("p",null,"These values will add both settings to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentbit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"logging-operator")," containers.\nEssentially, these are global settings for all pods in the logging stack."),(0,r.kt)("p",null,"However, if you would like to add tolerations for ",(0,r.kt)("em",{parentName:"p"},"only")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentbit")," container, you can add the following to the chart's values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"fluentbit_tolerations:\n  # insert tolerations list for fluentbit containers only...\n")))}g.isMDXComponent=!0}}]);