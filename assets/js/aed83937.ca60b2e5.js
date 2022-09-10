"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40132],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Creating a Huawei CCE Cluster",shortTitle:"Huawei Cloud Kubernetes Service",weight:2130},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",title:"Creating a Huawei CCE Cluster",description:"You can use Rancher to create a cluster hosted in Huawei Cloud Container Engine (CCE). Rancher has already implemented and packaged the cluster driver for CCE, but by default, this cluster driver is inactive. In order to launch CCE clusters, you will need to enable the CCE cluster driver. After enabling the cluster driver, you can start provisioning CCE clusters.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Creating a Huawei CCE Cluster",shortTitle:"Huawei Cloud Kubernetes Service",weight:2130},sidebar:"tutorialSidebar",previous:{title:"Creating a Tencent TKE Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent"},next:{title:"Launching Kubernetes with Rancher",permalink:"/pages-for-subheaders/launch-kubernetes-with-rancher"}},d={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use Rancher to create a cluster hosted in Huawei Cloud Container Engine (CCE). Rancher has already implemented and packaged the ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},"cluster driver")," for CCE, but by default, this cluster driver is ",(0,i.kt)("inlineCode",{parentName:"p"},"inactive"),". In order to launch CCE clusters, you will need to ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers#activating-deactivating-cluster-drivers"},"enable the CCE cluster driver"),". After enabling the cluster driver, you can start provisioning CCE clusters."),(0,i.kt)("h1",{id:"prerequisites-in-huawei"},"Prerequisites in Huawei"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deploying to CCE will incur charges."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find your project ID in Huawei CCE portal. See the CCE documentation on how to ",(0,i.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/en-us/usermanual-iam/en-us_topic_0066738518.html"},"manage your projects"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an ",(0,i.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/en-us/usermanual-iam/en-us_topic_0079477318.html"},"Access Key ID and Secret Access Key"),"."))),(0,i.kt)("h1",{id:"prerequisite-in-rancher"},"Prerequisite in Rancher"),(0,i.kt)("p",null,"You will need to enable the Huawei CCE cluster driver:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Drivers"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Drivers")," tab, go to the ",(0,i.kt)("strong",{parentName:"li"},"Huawei CCE")," cluster driver and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Activate"),".")),(0,i.kt)("p",null,"When the cluster driver is finished downloading, you will be able to create Huawei CCE clusters in Rancher."),(0,i.kt)("h1",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Huawei CCE service doesn't support the ability to create clusters with public access through their API. You are required to run Rancher in the same VPC as the CCE clusters that you want to provision."),(0,i.kt)("h1",{id:"create-the-cce-cluster"},"Create the CCE Cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Huawei CCE"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,i.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,i.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,i.kt)("li",{parentName:"ol"},"Enter ",(0,i.kt)("strong",{parentName:"li"},"Project Id"),", Access Key ID as ",(0,i.kt)("strong",{parentName:"li"},"Access Key")," and Secret Access Key ",(0,i.kt)("strong",{parentName:"li"},"Secret Key"),". Then Click ",(0,i.kt)("strong",{parentName:"li"},"Next: Configure cluster"),". Fill in the cluster configuration. For help filling out the form, refer to ",(0,i.kt)("a",{parentName:"li",href:"#huawei-cce-configuration"},"Huawei CCE Configuration.")),(0,i.kt)("li",{parentName:"ol"},"Fill the following node configuration of the cluster. For help filling out the form, refer to ",(0,i.kt)("a",{parentName:"li",href:"#node-configuration"},"Node Configuration.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create")," to create the CCE cluster.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("p",null,"Your cluster is created and assigned a state of ",(0,i.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,i.kt)("p",null,"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"p"},"Active"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,i.kt)("h1",{id:"huawei-cce-configuration"},"Huawei CCE Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Settings"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cluster Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Which type or node you want to include into the cluster, ",(0,i.kt)("inlineCode",{parentName:"td"},"VirtualMachine")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"BareMetal"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The description of the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Master Version"),(0,i.kt)("td",{parentName:"tr",align:null},"The Kubernetes version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Management Scale Count"),(0,i.kt)("td",{parentName:"tr",align:null},"The max node count of the cluster. The options are 50, 200 and 1000. The larger of the scale count, the more the cost.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High Availability"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable master node high availability. The cluster with high availability enabled will have more cost.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Container Network Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"The network mode used in the cluster. ",(0,i.kt)("inlineCode",{parentName:"td"},"overlay_l2")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"vpc-router")," is supported in ",(0,i.kt)("inlineCode",{parentName:"td"},"VirtualMachine")," type and ",(0,i.kt)("inlineCode",{parentName:"td"},"underlay_ipvlan")," is supported in ",(0,i.kt)("inlineCode",{parentName:"td"},"BareMetal")," type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Container Network CIDR"),(0,i.kt)("td",{parentName:"tr",align:null},"Network CIDR for the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VPC Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The VPC name which the cluster is going to deploy into. Rancher will create one if it is blank.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Subnet Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The Subnet name which the cluster is going to deploy into. Rancher will create one if it is blank.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"External Server"),(0,i.kt)("td",{parentName:"tr",align:null},"This option is reserved for the future we can enable CCE cluster public access via API. For now, it is always disabled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cluster Label"),(0,i.kt)("td",{parentName:"tr",align:null},"The labels for the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Highway Subnet"),(0,i.kt)("td",{parentName:"tr",align:null},"This option is only supported in ",(0,i.kt)("inlineCode",{parentName:"td"},"BareMetal")," type. It requires you to select a VPC with high network speed for the bare metal machines.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are editing the cluster in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," instead of the Rancher UI, note that cluster configuration directives must be nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". For more information, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#config-file-structure-in-rancher"},"the config file structure.")))),(0,i.kt)("h1",{id:"node-configuration"},"Node Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Settings"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Zone"),(0,i.kt)("td",{parentName:"tr",align:null},"The available zone at where the node(s) of the cluster is deployed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Billing Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"The bill mode for the cluster node(s). In ",(0,i.kt)("inlineCode",{parentName:"td"},"VirtualMachine")," type, only ",(0,i.kt)("inlineCode",{parentName:"td"},"Pay-per-use")," is supported. in ",(0,i.kt)("inlineCode",{parentName:"td"},"BareMetal"),", you can choose ",(0,i.kt)("inlineCode",{parentName:"td"},"Pay-per-use")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Validity Period"),(0,i.kt)("td",{parentName:"tr",align:null},"This option only shows in ",(0,i.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly")," bill mode. It means how long you want to pay for the cluster node(s).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Auto Renew"),(0,i.kt)("td",{parentName:"tr",align:null},"This option only shows in ",(0,i.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly")," bill mode. It means that the cluster node(s) will renew the ",(0,i.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly")," payment automatically or not.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Volume Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Data volume type for the cluster node(s). ",(0,i.kt)("inlineCode",{parentName:"td"},"SATA"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SSD")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"SAS")," for this option.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Volume Size"),(0,i.kt)("td",{parentName:"tr",align:null},"Data volume size for the cluster node(s)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Root Volume Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Root volume type for the cluster node(s). ",(0,i.kt)("inlineCode",{parentName:"td"},"SATA"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SSD")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"SAS")," for this option.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Root Volume Size"),(0,i.kt)("td",{parentName:"tr",align:null},"Root volume size for the cluster node(s)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node Flavor"),(0,i.kt)("td",{parentName:"tr",align:null},"The node flavor of the cluster node(s). The flavor list in Rancher UI is fetched from Huawei Cloud. It includes all the supported node flavors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node Count"),(0,i.kt)("td",{parentName:"tr",align:null},"The node count of the cluster")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node Operating System"),(0,i.kt)("td",{parentName:"tr",align:null},"The operating system for the cluster node(s). Only ",(0,i.kt)("inlineCode",{parentName:"td"},"EulerOS 2.2")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"CentOS 7.4")," are supported right now.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSH Key Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The ssh key for the cluster node(s)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EIP"),(0,i.kt)("td",{parentName:"tr",align:null},"The public IP options for the cluster node(s). ",(0,i.kt)("inlineCode",{parentName:"td"},"Disabled")," means that the cluster node(s) are not going to bind a public IP. ",(0,i.kt)("inlineCode",{parentName:"td"},"Create EIP")," means that the cluster node(s) will bind one or many newly created Eips after provisioned and more options will be shown in the UI to set the to-create EIP parameters. And ",(0,i.kt)("inlineCode",{parentName:"td"},"Select Existed EIP")," means that the node(s) will bind to the EIPs you select.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EIP Count"),(0,i.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,i.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. It means how many EIPs you want to create for the node(s).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EIP Type"),(0,i.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,i.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The options are ",(0,i.kt)("inlineCode",{parentName:"td"},"5_bgp")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"5_sbgp"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EIP Share Type"),(0,i.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,i.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The only option is ",(0,i.kt)("inlineCode",{parentName:"td"},"PER"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EIP Charge Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,i.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The options are pay by ",(0,i.kt)("inlineCode",{parentName:"td"},"BandWidth")," and pay by ",(0,i.kt)("inlineCode",{parentName:"td"},"Traffic"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EIP Bandwidth Size"),(0,i.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,i.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The BandWidth of the EIPs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authentication Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"It means enabling ",(0,i.kt)("inlineCode",{parentName:"td"},"RBAC")," or also enabling ",(0,i.kt)("inlineCode",{parentName:"td"},"Authenticating Proxy"),". If you select ",(0,i.kt)("inlineCode",{parentName:"td"},"Authenticating Proxy"),", the certificate which is used for authenticating proxy will be also required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node Label"),(0,i.kt)("td",{parentName:"tr",align:null},"The labels for the cluster node(s). Invalid labels can prevent upgrades or can prevent Rancher from starting. For details on label syntax requirements, see the ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes documentation."))))))}m.isMDXComponent=!0}}]);