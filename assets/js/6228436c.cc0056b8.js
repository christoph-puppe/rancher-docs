"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23791],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return h}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(67294),a=r(86010),o="tabItem_Ymn6";function s(e){var n=e.children,r=e.hidden,s=e.className;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:r},n)}},65488:function(e,n,r){r.d(n,{Z:function(){return h}});var t=r(87462),a=r(67294),o=r(86010),s=r(72389),i=r(67392),u=r(7094),l=r(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,r,s=e.lazy,p=e.block,h=e.defaultValue,m=e.values,f=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(n=null!=h?h:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?n:g[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),x=y.tabGroupChoices,N=y.setTabGroupChoices,q=(0,a.useState)(w),R=q[0],C=q[1],O=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=x[f];null!=T&&T!==R&&b.some((function(e){return e.value===T}))&&C(T)}var _=function(e){var n=e.currentTarget,r=O.indexOf(n),t=b[r].value;t!==R&&(E(n),C(t),null!=f&&N(f,String(t)))},S=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t,a=O.indexOf(e.currentTarget)+1;r=null!=(t=O[a])?t:O[0];break;case"ArrowLeft":var o,s=O.indexOf(e.currentTarget)-1;r=null!=(o=O[s])?o:O[O.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var n=e.value,r=e.label,s=e.attributes;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:R===n?0:-1,"aria-selected":R===n,key:n,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:_,onClick:_},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":R===n})}),null!=r?r:n)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==R})}))))}function h(e){var n=(0,s.Z)();return a.createElement(p,(0,t.Z)({key:String(n)},e))}},91170:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(65488),i=r(85162),u=["components"],l={title:"Node Requirements for Rancher Managed Clusters",weight:1},c=void 0,d={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",title:"Node Requirements for Rancher Managed Clusters",description:"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Node Requirements for Rancher Managed Clusters",weight:1},sidebar:"tutorialSidebar",previous:{title:"Setting up Kubernetes Clusters in Rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},next:{title:"Checklist for Production-Ready Clusters",permalink:"/v2.0-v2.4/pages-for-subheaders/checklist-for-production-ready-clusters"}},p={},h=[{value:"Operating Systems and Container Runtime Requirements",id:"operating-systems-and-container-runtime-requirements",level:2},{value:"Oracle Linux and RHEL Derived Linux Nodes",id:"oracle-linux-and-rhel-derived-linux-nodes",level:3},{value:"SUSE Linux Nodes",id:"suse-linux-nodes",level:3},{value:"Flatcar Container Linux Nodes",id:"flatcar-container-linux-nodes",level:3},{value:"Windows Nodes",id:"windows-nodes",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Networking Requirements",id:"networking-requirements",level:2},{value:"Optional: Security Considerations",id:"optional-security-considerations",level:2}],m={toc:h};function f(e){var n=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If Rancher is installed on a high-availability Kubernetes cluster, the Rancher server three-node cluster and downstream clusters have different requirements. For Rancher installation requirements, refer to the node requirements in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"installation section."))),(0,o.kt)("h2",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,o.kt)("p",null,"Rancher should work with any modern Linux distribution and any modern Docker version. Linux is required for the etcd and controlplane nodes of all downstream clusters. Worker nodes may run Linux or ",(0,o.kt)("a",{parentName:"p",href:"#windows-nodes"},"Windows Server.")," The capability to use Windows worker nodes in downstream clusters was added in Rancher v2.3.0."),(0,o.kt)("p",null,"For details on which OS and Docker versions were tested with each Rancher version, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,o.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,o.kt)("p",null,"If you plan to use ARM64, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,o.kt)("p",null,"For information on how to install Docker, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")),(0,o.kt)("h3",{id:"oracle-linux-and-rhel-derived-linux-nodes"},"Oracle Linux and RHEL Derived Linux Nodes"),(0,o.kt)("p",null,"Some distributions of Linux derived from RHEL, including Oracle Linux, may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19, firewalld must be turned off."),(0,o.kt)("h3",{id:"suse-linux-nodes"},"SUSE Linux Nodes"),(0,o.kt)("p",null,"SUSE Linux may have a firewall that blocks all ports by default. In that situation, follow ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#opening-suse-linux-ports"},"these steps")," to open the ports needed for adding a host to a custom cluster."),(0,o.kt)("h3",{id:"flatcar-container-linux-nodes"},"Flatcar Container Linux Nodes"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Launching Kubernetes with Rancher")," using Flatcar Container Linux nodes, it is required to use the following configuration in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#cluster-config-file"},"Cluster Config File")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Canal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: canal\n    options:\n      canal_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n"))),(0,o.kt)(i.Z,{value:"Calico",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: calico\n    options:\n      calico_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n")))),(0,o.kt)("p",null,"It is also required to enable the Docker service, you can enable the Docker service using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"systemctl enable docker.service\n")),(0,o.kt)("p",null,"The Docker service is enabled automatically when using ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/about-provisioning-drivers#node-drivers"},"Node Drivers"),"."),(0,o.kt)("h3",{id:"windows-nodes"},"Windows Nodes"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Windows worker nodes can be used as of Rancher v2.3.0")),(0,o.kt)("p",null,"Nodes with Windows Server must run Docker Enterprise Edition."),(0,o.kt)("p",null,"Windows nodes can be used for worker nodes only. See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"Configuring Custom Clusters for Windows")),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("p",null,"The hardware requirements for nodes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," role mostly depend on your workloads. The minimum to run the Kubernetes node components is 1 CPU (core) and 1GB of memory."),(0,o.kt)("p",null,"Regarding CPU and memory, it is recommended that the different planes of Kubernetes clusters (etcd, controlplane, and workers) should be hosted on different nodes so that they can scale separately from each other."),(0,o.kt)("p",null,"For hardware recommendations for large Kubernetes clusters, refer to the official Kubernetes documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"building large clusters.")),(0,o.kt)("p",null,"For hardware recommendations for etcd clusters in production, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/hardware/"},"etcd documentation.")),(0,o.kt)("h2",{id:"networking-requirements"},"Networking Requirements"),(0,o.kt)("p",null,"For a production cluster, we recommend that you restrict traffic by opening only the ports defined in the port requirements below."),(0,o.kt)("p",null,"The ports required to be open are different depending on how the user cluster is launched. Each of the sections below list the ports that need to be opened for different ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"cluster creation options"),"."),(0,o.kt)("p",null,"For a breakdown of the port requirements for etcd nodes, controlplane nodes, and worker nodes in a Kubernetes cluster, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"port requirements for the Rancher Kubernetes Engine.")),(0,o.kt)("p",null,"Details on which ports are used in each situation are found under ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#downstream-kubernetes-cluster-nodes"},"Downstream Cluster Port Requirements"),"."),(0,o.kt)("h2",{id:"optional-security-considerations"},"Optional: Security Considerations"),(0,o.kt)("p",null,"If you want to provision a Kubernetes cluster that is compliant with the CIS (Center for Internet Security) Kubernetes Benchmark, we recommend to following our hardening guide to configure your nodes before installing Kubernetes."),(0,o.kt)("p",null,"For more information on the hardening guide and details on which version of the guide corresponds to your Rancher and Kubernetes versions, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-security#rancher-hardening-guide"},"security section.")))}f.isMDXComponent=!0}}]);