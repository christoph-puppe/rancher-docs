"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7703],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69481:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"RKE2 Cluster Configuration Reference",shortTitle:"RKE2 Cluster Configuration",weight:5},s=void 0,c={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",id:"reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",title:"RKE2 Cluster Configuration Reference",description:"This section covers the configuration options that are available in Rancher for a new or existing RKE2 Kubernetes cluster.",source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"RKE2 Cluster Configuration Reference",shortTitle:"RKE2 Cluster Configuration",weight:5},sidebar:"tutorialSidebar",previous:{title:"RKE Cluster Configuration Reference",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},next:{title:"K3s Cluster Configuration Reference",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration"}},u={},d=[{value:"Machine Pool",id:"machine-pool",level:2},{value:"Pool Name",id:"pool-name",level:3},{value:"Machine Count",id:"machine-count",level:3},{value:"Roles",id:"roles",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Auto Replace",id:"auto-replace",level:4},{value:"Drain Before Delete",id:"drain-before-delete",level:4},{value:"Kubernetes Node Labels",id:"kubernetes-node-labels",level:4},{value:"Taints",id:"taints",level:4},{value:"Cluster Configuration",id:"cluster-configuration",level:2},{value:"Basics",id:"basics",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:4},{value:"Container Network Provider",id:"container-network-provider",level:4},{value:"Dual-stack Networking",id:"dual-stack-networking",level:5},{value:"Additional Configuration",id:"dual-stack-additional-config",level:6},{value:"Cloud Provider",id:"cloud-provider",level:4},{value:"Default Pod Security Policy",id:"default-pod-security-policy",level:4},{value:"Worker CIS Profile",id:"worker-cis-profile",level:4},{value:"Project Network Isolation",id:"project-network-isolation",level:4},{value:"CoreDNS",id:"coredns",level:4},{value:"NGINX Ingress",id:"nginx-ingress",level:4},{value:"Metrics Server",id:"metrics-server",level:4},{value:"Add-On Config",id:"add-on-config",level:3},{value:"Agent Environment Vars",id:"agent-environment-vars",level:3},{value:"etcd",id:"etcd",level:3},{value:"Automatic Snapshots",id:"automatic-snapshots",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Networking",id:"networking",level:3},{value:"Cluster CIDR",id:"cluster-cidr",level:4},{value:"Dual-stack Networking",id:"dual-stack-networking-1",level:5},{value:"Service CIDR",id:"service-cidr",level:4},{value:"Dual-stack Networking",id:"dual-stack-networking-2",level:5},{value:"Cluster DNS",id:"cluster-dns",level:4},{value:"Cluster Domain",id:"cluster-domain",level:4},{value:"NodePort Service Port Range",id:"nodeport-service-port-range",level:4},{value:"TLS Alternate Names",id:"tls-alternate-names",level:4},{value:"Authorized Cluster Endpoint",id:"authorized-cluster-endpoint",level:4},{value:"Registries",id:"registries",level:3},{value:"Upgrade Strategy",id:"upgrade-strategy",level:3},{value:"Control Plane Concurrency",id:"control-plane-concurrency",level:4},{value:"Worker Concurrency",id:"worker-concurrency",level:4},{value:"Drain Nodes (Control Plane)",id:"drain-nodes-control-plane",level:4},{value:"Drain Nodes (Worker Nodes)",id:"drain-nodes-worker-nodes",level:4},{value:"Advanced",id:"advanced-1",level:3},{value:"chartValues",id:"chartvalues",level:3},{value:"machineGlobalConfig",id:"machineglobalconfig",level:3},{value:"machineSelectorConfig",id:"machineselectorconfig",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing RKE2 Kubernetes cluster."),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"You can configure the Kubernetes options in one of the two following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuration-options-in-the-rancher-ui"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE2 config file. Using a config file allows you to set many additional ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/install_options/install_options"},"options")," available for an RKE2 installation.")),(0,a.kt)("h1",{id:"editing-clusters-with-a-form-in-the-rancher-ui"},"Editing Clusters with a Form in the Rancher UI"),(0,a.kt)("p",null,"To edit your cluster,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster you want to configure and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),".")),(0,a.kt)("h1",{id:"editing-clusters-with-yaml"},"Editing Clusters with YAML"),(0,a.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE2 config file. Using a config file allows you to set any of the options available in an RKE2 installation by specifying them in YAML."),(0,a.kt)("p",null,"To edit an RKE2 config file directly from the Rancher UI,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster you want to configure and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit as YAML"),"."),(0,a.kt)("li",{parentName:"ol"},"Edit the RKE options under the ",(0,a.kt)("inlineCode",{parentName:"li"},"rkeConfig")," directive.")),(0,a.kt)("h1",{id:"configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the RKE2 cluster configuration file in YAML. For the complete reference of configurable options for RKE2 Kubernetes clusters in YAML, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/install_options/install_options/"},"RKE2 documentation.")))),(0,a.kt)("h2",{id:"machine-pool"},"Machine Pool"),(0,a.kt)("p",null,"This subsection covers the generic machine pool configurations. For infrastructure provider specific, configurations refer to the following pages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure"},"Azure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean"},"DigitalOcean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2"},"EC2"))),(0,a.kt)("h3",{id:"pool-name"},"Pool Name"),(0,a.kt)("p",null,"The name of the machine pool."),(0,a.kt)("h3",{id:"machine-count"},"Machine Count"),(0,a.kt)("p",null,"The number of machines in the pool."),(0,a.kt)("h3",{id:"roles"},"Roles"),(0,a.kt)("p",null,"Option to assign etcd, control plane, and worker roles to nodes."),(0,a.kt)("h3",{id:"advanced"},"Advanced"),(0,a.kt)("h4",{id:"auto-replace"},"Auto Replace"),(0,a.kt)("p",null,"The duration nodes can be unreachable before they are automatically deleted and replaced."),(0,a.kt)("h4",{id:"drain-before-delete"},"Drain Before Delete"),(0,a.kt)("p",null,"Enables draining nodes by evicting all pods before the node is deleted."),(0,a.kt)("h4",{id:"kubernetes-node-labels"},"Kubernetes Node Labels"),(0,a.kt)("p",null,"Add ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," to nodes to help with organization and object selection."),(0,a.kt)("p",null,"For details on label syntax requirements, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes documentation.")),(0,a.kt)("h4",{id:"taints"},"Taints"),(0,a.kt)("p",null,"Add ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," to nodes, which can be used to prevent pods from being scheduled to or executed on nodes, unless the pods have matching tolerations."),(0,a.kt)("h2",{id:"cluster-configuration"},"Cluster Configuration"),(0,a.kt)("h3",{id:"basics"},"Basics"),(0,a.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,a.kt)("p",null,"For more detail, see ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Upgrading Kubernetes"),"."),(0,a.kt)("h4",{id:"container-network-provider"},"Container Network Provider"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Network Provider")," that the cluster uses."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you to tear down the entire cluster and all its applications."))),(0,a.kt)("p",null,"Out of the box, Rancher is compatible with the following network providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/canal"},"Canal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cilium.io/"},"Cilium"),"*"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/v3.11/introduction/"},"Calico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus"))),(0,a.kt)("p",null,"*"," When using ",(0,a.kt)("a",{parentName:"p",href:"#project-network-isolation"},"project network isolation")," in the ",(0,a.kt)("a",{parentName:"p",href:"/faq/container-network-interface-providers#cilium"},"Cilium CNI"),", it is possible to enable cross-node ingress routing. Click the ",(0,a.kt)("a",{parentName:"p",href:"/faq/container-network-interface-providers#ingress-routing-across-nodes-in-cilium"},"CNI provider docs")," to learn more."),(0,a.kt)("p",null,"For more details on the different networking providers and how to configure them, please view our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options/"},"RKE2 documentation"),"."),(0,a.kt)("h5",{id:"dual-stack-networking"},"Dual-stack Networking"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options/#dual-stack-configuration"},"Dual-stack")," networking is supported for all CNI providers. To configure RKE2 in dual-stack mode, set valid IPv4/IPv6 CIDRs for your ",(0,a.kt)("a",{parentName:"p",href:"#cluster-cidr"},"Cluster CIDR")," and/or ",(0,a.kt)("a",{parentName:"p",href:"#service-cidr"},"Service CIDR"),"."),(0,a.kt)("h6",{id:"dual-stack-additional-config"},"Additional Configuration"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"cilium")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"multus,cilium")," as your container network interface provider, ensure the ",(0,a.kt)("strong",{parentName:"p"},"Enable IPv6 Support")," option is also enabled."),(0,a.kt)("h4",{id:"cloud-provider"},"Cloud Provider"),(0,a.kt)("p",null,"You can configure a ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes cloud provider"),". If you want to use dynamically provisioned ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/create-kubernetes-persistent-storage"},"volumes and storage")," in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"aws")," cloud provider."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If the cloud provider you want to use is not listed as an option, you will need to use the ",(0,a.kt)("a",{parentName:"p",href:"#cluster-config-file"},"config file option")," to configure the cloud provider. Please reference ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"this documentation")," on how to configure the cloud provider."))),(0,a.kt)("h4",{id:"default-pod-security-policy"},"Default Pod Security Policy"),(0,a.kt)("p",null,"Choose the default ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod security policy")," for the cluster. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/security/policies/"},"RKE2 documentation")," on the specifications of each available policy."),(0,a.kt)("h4",{id:"worker-cis-profile"},"Worker CIS Profile"),(0,a.kt)("p",null,"Select a ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/cis-scan-guides"},"CIS benchmark")," to validate the system configuration against."),(0,a.kt)("h4",{id:"project-network-isolation"},"Project Network Isolation"),(0,a.kt)("p",null,"If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication."),(0,a.kt)("p",null,"Project network isolation is available if you are using any RKE2 network plugin that supports the enforcement of Kubernetes network policies, such as Canal."),(0,a.kt)("h4",{id:"coredns"},"CoreDNS"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("a",{parentName:"p",href:"https://coredns.io/"},"CoreDNS")," is installed as the default DNS provider. If CoreDNS is not installed, an alternate DNS provider must be installed yourself. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking/#coredns"},"RKE2 documentation")," for additional CoreDNS configurations."),(0,a.kt)("h4",{id:"nginx-ingress"},"NGINX Ingress"),(0,a.kt)("p",null,"If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use NGINX Ingress within the cluster. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking/#nginx-ingress-controller"},"RKE2 documentation")," for additional configuration options."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking/#nginx-ingress-controller"},"RKE2 documentation")," for additional configuration options."),(0,a.kt)("h4",{id:"metrics-server"},"Metrics Server"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/"},"Metrics Server"),"."),(0,a.kt)("p",null,"Each cloud provider capable of launching a cluster using RKE2 can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal."),(0,a.kt)("h3",{id:"add-on-config"},"Add-On Config"),(0,a.kt)("p",null,"Additional Kubernetes manifests, managed as an ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/addons/"},"Add-on"),", to apply to the cluster on startup. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/helm/#automatically-deploying-manifests-and-helm-charts"},"RKE2 documentation")," for details."),(0,a.kt)("h3",{id:"agent-environment-vars"},"Agent Environment Vars"),(0,a.kt)("p",null,"Option to set environment variables for ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/rancher-agents/"},"Rancher agents"),". The environment variables can be set using key value pairs. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/install_options/linux_agent_config/"},"RKE2 documentation")," for more details."),(0,a.kt)("h3",{id:"etcd"},"etcd"),(0,a.kt)("h4",{id:"automatic-snapshots"},"Automatic Snapshots"),(0,a.kt)("p",null,"Option to enable or disable recurring etcd snapshots. If enabled, users have the option to configure the frequency of snapshots. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/backup_restore/#creating-snapshots"},"RKE2 documentation"),". Note that with RKE2, snapshots are stored on each etcd node. This varies from RKE1 which only stores one snapshot per cluster."),(0,a.kt)("h4",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Option to choose whether to expose etcd metrics to the public or only within the cluster."),(0,a.kt)("h3",{id:"networking"},"Networking"),(0,a.kt)("h4",{id:"cluster-cidr"},"Cluster CIDR"),(0,a.kt)("p",null,"IPv4 and/or IPv6 network CIDRs to use for pod IPs (default: 10.42.0.0/16)."),(0,a.kt)("h5",{id:"dual-stack-networking-1"},"Dual-stack Networking"),(0,a.kt)("p",null,"To configure ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options/#dual-stack-configuration"},"dual-stack")," mode, enter a valid IPv4/IPv6 CIDR. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"10.42.0.0/16,2001:cafe:42:0::/56"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#dual-stack-additional-config"},"Additional configuration")," is required when using ",(0,a.kt)("inlineCode",{parentName:"p"},"cilium")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"multus,cilium")," as your ",(0,a.kt)("a",{parentName:"p",href:"#container-network"},"container network")," interface provider."),(0,a.kt)("h4",{id:"service-cidr"},"Service CIDR"),(0,a.kt)("p",null,"IPv4/IPv6 network CIDRs to use for service IPs (default: 10.43.0.0/16)."),(0,a.kt)("h5",{id:"dual-stack-networking-2"},"Dual-stack Networking"),(0,a.kt)("p",null,"To configure ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options/#dual-stack-configuration"},"dual-stack")," mode, enter a valid IPv4/IPv6 CIDR. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"10.42.0.0/16,2001:cafe:42:0::/56"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#dual-stack-additional-config"},"Additional configuration")," is required when using ",(0,a.kt)("inlineCode",{parentName:"p"},"cilium ")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"multus,cilium")," as your ",(0,a.kt)("a",{parentName:"p",href:"#container-network"},"container network")," interface provider."),(0,a.kt)("h4",{id:"cluster-dns"},"Cluster DNS"),(0,a.kt)("p",null,"IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: 10.43.0.10)."),(0,a.kt)("h4",{id:"cluster-domain"},"Cluster Domain"),(0,a.kt)("p",null,"Select the domain for the cluster. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.local"),"."),(0,a.kt)("h4",{id:"nodeport-service-port-range"},"NodePort Service Port Range"),(0,a.kt)("p",null,"Option to change the range of ports that can be used for ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,a.kt)("h4",{id:"tls-alternate-names"},"TLS Alternate Names"),(0,a.kt)("p",null,"Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert."),(0,a.kt)("h4",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,a.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,a.kt)("p",null,"This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role and the default Kubernetes self signed certificates."),(0,a.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"architecture section.")),(0,a.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,a.kt)("h3",{id:"registries"},"Registries"),(0,a.kt)("p",null,"Select the image repository to pull Rancher images from. For more details and configuration options, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/containerd_registry_configuration/"},"RKE2 documentation"),"."),(0,a.kt)("h3",{id:"upgrade-strategy"},"Upgrade Strategy"),(0,a.kt)("h4",{id:"control-plane-concurrency"},"Control Plane Concurrency"),(0,a.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,a.kt)("h4",{id:"worker-concurrency"},"Worker Concurrency"),(0,a.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,a.kt)("h4",{id:"drain-nodes-control-plane"},"Drain Nodes (Control Plane)"),(0,a.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,a.kt)("h4",{id:"drain-nodes-worker-nodes"},"Drain Nodes (Worker Nodes)"),(0,a.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,a.kt)("h3",{id:"advanced-1"},"Advanced"),(0,a.kt)("p",null,"Option to set kubelet options for different nodes. For available options, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes documentation"),"."),(0,a.kt)("h1",{id:"cluster-config-file-reference"},"Cluster Config File Reference"),(0,a.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create a config file. Using a config file allows you to set the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/install_options/server_config/"},"options available")," in an RKE2 installation, including those already listed in ",(0,a.kt)("a",{parentName:"p",href:"#configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),", as well as Rancher-specific parameters."),(0,a.kt)("p",null,'{{% accordion id="rke2-cluster-config-file" label="Example Cluster Config File Snippet" %}}'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  cloudCredentialSecretName: cattle-global-data:cc-s879v\n  kubernetesVersion: v1.23.6+rke2r2\n  localClusterAuthEndpoint: {}\n  rkeConfig:\n    chartValues:\n      rke2-calico: {}\n    etcd:\n      snapshotRetention: 5\n      snapshotScheduleCron: 0 */5 * * *\n    machineGlobalConfig:\n      cni: calico\n      disable-kube-proxy: false\n      etcd-expose-metrics: false\n      profile: null\n    machinePools:\n    - controlPlaneRole: true\n      etcdRole: true\n      machineConfigRef:\n        kind: Amazonec2Config\n        name: nc-test-pool1-pwl5h\n      name: pool1\n      quantity: 1\n      unhealthyNodeTimeout: 0s\n      workerRole: true\n    machineSelectorConfig:\n    - config:\n        protect-kernel-defaults: false\n    registries: {}\n    upgradeStrategy:\n      controlPlaneConcurrency: "1"\n      controlPlaneDrainOptions:\n        deleteEmptyDirData: true\n        enabled: true\n        gracePeriod: -1\n        ignoreDaemonSets: true\n        timeout: 120\n      workerConcurrency: "1"\n      workerDrainOptions:\n        deleteEmptyDirData: true\n        enabled: true\n        gracePeriod: -1\n        ignoreDaemonSets: true\n        timeout: 120\n')),(0,a.kt)("h3",{id:"chartvalues"},"chartValues"),(0,a.kt)("p",null,"Option to specify the values for the system charts installed by RKE2/k3s."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"chartValues:\n    chart-name:\n        key: value\n")),(0,a.kt)("h3",{id:"machineglobalconfig"},"machineGlobalConfig"),(0,a.kt)("p",null,"The RKE2/K3s configurations are nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"machineGlobalConfig")," directive. Any configuration change made here will apply to every node. The configuration options available in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/install_options/server_config/"},"standalone version of RKE2")," can be applied here."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"machineGlobalConfig:\n    etcd-arg:\n        - key1=value1\n        - key2=value2\n")),(0,a.kt)("h3",{id:"machineselectorconfig"},"machineSelectorConfig"),(0,a.kt)("p",null,"This is the same as ",(0,a.kt)("a",{parentName:"p",href:"#machineglobalconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"machineGlobalConfig"))," except that a ",(0,a.kt)("a",{parentName:"p",href:"#kubernetes-node-labels"},"label")," selector can be specified with the configuration. The configuration will only be applied to nodes that match the provided label selector."),(0,a.kt)("p",null,"Multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," entries are allowed, each specifying their own ",(0,a.kt)("inlineCode",{parentName:"p"},"machineLabelSelector"),". A user can specify ",(0,a.kt)("inlineCode",{parentName:"p"},"matchExpressions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"matchLabels"),", both, or neither. Omitting the ",(0,a.kt)("inlineCode",{parentName:"p"},"machineLabelSelector")," section of this has the same effect as putting the config in the ",(0,a.kt)("inlineCode",{parentName:"p"},"machineGlobalConfig")," section."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"machineSelectorConfig\n  - config:\n      config-key: config-value\n    machineLabelSelector:\n      matchExpressions:\n        - key: example-key\n          operator: string # Valid operators are In, NotIn, Exists and DoesNotExist.\n          values:\n            - example-value1\n            - example-value2\n      matchLabels:\n        key1: value1\n        key2: value2\n")))}h.isMDXComponent=!0}}]);