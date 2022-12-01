"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<r;g++)i[g]=n[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(87462),a=n(67294),r=n(86010),i=n(72389),l=n(67392),s=n(7094),g=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:d,className:h}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??m.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),f=(0,l.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,y]=(0,a.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,g.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),o=k[n].value;o!==N&&(x(t),y(o),null!=d&&w(d,String(o)))},O=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:T},i,{className:(0,r.Z)("tabs__item",u,i?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(m.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return a.createElement(p,(0,o.Z)({key:String(t)},e))}},23867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>u});var o=n(87462),a=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={title:"Rancher Integration with Logging Services",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster."},s=void 0,g={unversionedId:"pages-for-subheaders/logging",id:"version-2.5/pages-for-subheaders/logging",title:"Rancher Integration with Logging Services",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/logging.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/logging",permalink:"/zh/v2.5/pages-for-subheaders/logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/logging.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Rancher Integration with Logging Services",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster."},sidebar:"tutorialSidebar",previous:{title:"Longhorn - Cloud native distributed block storage for Kubernetes",permalink:"/zh/v2.5/explanations/integrations-in-rancher/longhorn"},next:{title:"Architecture",permalink:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-architecture"}},c={},u=[{value:"Enabling Logging",id:"enabling-logging",level:2},{value:"Uninstall Logging",id:"uninstall-logging",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Role-based Access Control",id:"role-based-access-control",level:2},{value:"Configuring Logging Custom Resources",id:"configuring-logging-custom-resources",level:2},{value:"Flows and ClusterFlows",id:"flows-and-clusterflows",level:3},{value:"Outputs and ClusterOutputs",id:"outputs-and-clusteroutputs",level:3},{value:"Configuring the Logging Helm Chart",id:"configuring-the-logging-helm-chart",level:2},{value:"Windows Support",id:"windows-support",level:3},{value:"Working with a Custom Docker Root Directory",id:"working-with-a-custom-docker-root-directory",level:3},{value:"Working with Taints and Tolerations",id:"working-with-taints-and-tolerations",level:3},{value:"Logging V2 with SELinux",id:"logging-v2-with-selinux",level:3},{value:"Additional Logging Sources",id:"additional-logging-sources",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The <code>cattle-logging</code> Namespace Being Recreated",id:"the-cattle-logging-namespace-being-recreated",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzai Cloud Logging operator")," now powers Rancher's logging solution in place of the former, in-house solution."),(0,a.kt)("p",null,"For an overview of the changes in v2.5, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-architecture#changes-in-rancher-v25"},"this section.")," For information about migrating from Logging V1, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"},"this page.")),(0,a.kt)("h2",{id:"enabling-logging"},"Enabling Logging"),(0,a.kt)("p",null,"You can enable the logging for a Rancher managed cluster by going to the Apps page and installing the logging app."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install logging and click ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging")," app."),(0,a.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,a.kt)("strong",{parentName:"li"},"Install"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The logging app is deployed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace."),(0,a.kt)("h2",{id:"uninstall-logging"},"Uninstall Logging"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer"),", click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")," namespace and check the boxes for ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging-crd"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Delete"),"."),(0,a.kt)("li",{parentName:"ol"},"Confirm ",(0,a.kt)("strong",{parentName:"li"},"Delete"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result")," ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-logging")," is uninstalled."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"For more information about how the logging application works, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-architecture"},"this section.")),(0,a.kt)("h2",{id:"role-based-access-control"},"Role-based Access Control"),(0,a.kt)("p",null,"Rancher logging has two roles, ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-view"),". For more information on how and when to use these roles, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/rbac-for-logging"},"this page.")),(0,a.kt)("h2",{id:"configuring-logging-custom-resources"},"Configuring Logging Custom Resources"),(0,a.kt)("p",null,"To manage ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows,")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", go to the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Explorer")," in the Rancher UI. In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"Cluster Explorer > Logging"),"."),(0,a.kt)("h3",{id:"flows-and-clusterflows"},"Flows and ClusterFlows"),(0,a.kt)("p",null,"For help with configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},"this page.")),(0,a.kt)("h3",{id:"outputs-and-clusteroutputs"},"Outputs and ClusterOutputs"),(0,a.kt)("p",null,"For help with configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"},"this page.")),(0,a.kt)("h2",{id:"configuring-the-logging-helm-chart"},"Configuring the Logging Helm Chart"),(0,a.kt)("p",null,"For a list of options that can be configured when the logging application is installed or upgraded, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options"},"this page.")),(0,a.kt)("h3",{id:"windows-support"},"Windows Support"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,a.kt)("p",null,"As of Rancher v2.5.8, logging support for Windows clusters has been added and logs can be collected from Windows nodes."),(0,a.kt)("p",null,"For details on how to enable or disable Windows node logging, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enabledisable-windows-node-logging"},"this section."))),(0,a.kt)(i.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,a.kt)("p",null,"Clusters with Windows workers support exporting logs from Linux nodes, but Windows node logs are currently unable to be exported.\nOnly Linux node logs are able to be exported."),(0,a.kt)("p",null,"To allow the logging pods to be scheduled on Linux nodes, tolerations must be added to the pods. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"Working with Taints and Tolerations")," section for details and an example."))),(0,a.kt)("h3",{id:"working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory"),(0,a.kt)("p",null,"For details on using a custom Docker root directory, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#working-with-a-custom-docker-root-directory"},"this section.")),(0,a.kt)("h3",{id:"working-with-taints-and-tolerations"},"Working with Taints and Tolerations"),(0,a.kt)("p",null,"For information on how to use taints and tolerations with the logging application, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"this page.")),(0,a.kt)("h3",{id:"logging-v2-with-selinux"},"Logging V2 with SELinux"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,a.kt)("p",null,"For information on enabling the logging application for SELinux-enabled nodes, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enabling-the-logging-application-to-work-with-selinux"},"this section.")),(0,a.kt)("h3",{id:"additional-logging-sources"},"Additional Logging Sources"),(0,a.kt)("p",null,"By default, Rancher collects logs for control plane components and node components for all cluster types. In some cases additional logs can be collected. For details, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#additional-logging-sources"},"this section.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"the-cattle-logging-namespace-being-recreated"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"cattle-logging")," Namespace Being Recreated"),(0,a.kt)("p",null,"If your cluster previously deployed logging from the Cluster Manager UI, you may encounter an issue where its ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace is continually being recreated."),(0,a.kt)("p",null,"The solution is to delete all ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterloggings.management.cattle.io")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"projectloggings.management.cattle.io")," custom resources from the cluster specific namespace in the management cluster.\nThe existence of these custom resources causes Rancher to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace in the downstream cluster if it does not exist."),(0,a.kt)("p",null,"The cluster namespace matches the cluster ID, so we need to find the cluster ID for each cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your web browser, navigate to your cluster(s) in either the Cluster Manager UI or the Cluster Explorer UI."),(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion from one of the URLs below. The ",(0,a.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion is the cluster namespace name.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Cluster Management UI\nhttps://<your-url>/c/<cluster-id>/\n\n# Cluster Explorer UI (Dashboard)\nhttps://<your-url>/dashboard/c/<cluster-id>/\n")),(0,a.kt)("p",null,"Now that we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"<cluster-id>")," namespace, we can delete the CRs that cause ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," to be continually recreated.\n",(0,a.kt)("em",{parentName:"p"},"Warning:")," ensure that logging, the version installed from the Cluster Manager UI, is not currently in use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete clusterloggings.management.cattle.io -n <cluster-id>\nkubectl delete projectloggings.management.cattle.io -n <cluster-id>\n")))}d.isMDXComponent=!0}}]);