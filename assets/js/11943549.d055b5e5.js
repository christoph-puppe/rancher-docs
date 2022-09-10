"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[67431],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14871:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={shortTitle:"AKS Cluster Configuration",title:"AKS Cluster Configuration Reference",weight:4},l="Changes in Rancher v2.6",u={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",id:"reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",title:"AKS Cluster Configuration Reference",description:"- Support for adding more than one node pool",source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{shortTitle:"AKS Cluster Configuration",title:"AKS Cluster Configuration Reference",weight:4},sidebar:"tutorialSidebar",previous:{title:"EKS Cluster Configuration Reference",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"},next:{title:"GKE Cluster Configuration Reference",permalink:"/pages-for-subheaders/gke-cluster-configuration"}},c={},p=[{value:"Subscription ID",id:"subscription-id",level:3},{value:"Client ID",id:"client-id",level:3},{value:"Client Secret",id:"client-secret",level:3},{value:"Environment",id:"environment",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Cluster Resource Group",id:"cluster-resource-group",level:3},{value:"Linux Admin Username",id:"linux-admin-username",level:3},{value:"SSH Public Key",id:"ssh-public-key",level:3},{value:"Tags",id:"tags",level:3},{value:"LoadBalancer SKU",id:"loadbalancer-sku",level:3},{value:"Network Policy",id:"network-policy",level:3},{value:"DNS Prefix",id:"dns-prefix",level:3},{value:"Network Plugin",id:"network-plugin",level:3},{value:"HTTP Application Routing",id:"http-application-routing",level:3},{value:"Set Authorized IP Ranges",id:"set-authorized-ip-ranges",level:3},{value:"Container Monitoring",id:"container-monitoring",level:3},{value:"Log Analytics Workspace Resource Group",id:"log-analytics-workspace-resource-group",level:3},{value:"Log Analytics Workspace Name",id:"log-analytics-workspace-name",level:3},{value:"Support Private Kubernetes Service",id:"support-private-kubernetes-service",level:3},{value:"Mode",id:"mode",level:3},{value:"Availability Zones",id:"availability-zones",level:3},{value:"VM Size",id:"vm-size",level:3},{value:"OS Disk Type",id:"os-disk-type",level:3},{value:"OS Disk Size",id:"os-disk-size",level:3},{value:"Node Count",id:"node-count",level:3},{value:"Max Pods Per Node",id:"max-pods-per-node",level:3},{value:"Enable Auto Scaling",id:"enable-auto-scaling",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changes-in-rancher-v26"},"Changes in Rancher v2.6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for adding more than one node pool"),(0,a.kt)("li",{parentName:"ul"},"Support for private clusters"),(0,a.kt)("li",{parentName:"ul"},"Enabled autoscaling node pools"),(0,a.kt)("li",{parentName:"ul"},"The AKS permissions are now configured in cloud credentials")),(0,a.kt)("h1",{id:"role-based-access-control"},"Role-based Access Control"),(0,a.kt)("p",null,"When provisioning an AKS cluster in the Rancher UI, RBAC cannot be disabled. If role-based access control is disabled for the cluster in AKS, the cluster cannot be registered or imported into Rancher."),(0,a.kt)("p",null,"Rancher can configure member roles for AKS clusters in the same way as any other cluster. For more information, see the section on ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/manage-role-based-access-control-rbac"},"role-based access control.")),(0,a.kt)("h1",{id:"cloud-credentials"},"Cloud Credentials"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The configuration information in this section assumes you have already set up a service principal for Rancher. For step-by-step instructions for how to set up the service principal, see ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks#prerequisites-in-microsoft-azure"},"this section.")))),(0,a.kt)("h3",{id:"subscription-id"},"Subscription ID"),(0,a.kt)("p",null,"To get the subscription ID, click ",(0,a.kt)("strong",{parentName:"p"},"All Services")," in the left navigation bar. Then click ",(0,a.kt)("strong",{parentName:"p"},"Subscriptions"),". Go to the name of the subscription that you want to associate with your Kubernetes cluster and copy the ",(0,a.kt)("strong",{parentName:"p"},"Subscription ID"),"."),(0,a.kt)("h3",{id:"client-id"},"Client ID"),(0,a.kt)("p",null,"To get the client ID, go to the Azure Portal, then click ",(0,a.kt)("strong",{parentName:"p"},"Azure Active Directory"),", then click ",(0,a.kt)("strong",{parentName:"p"},"App registrations,")," then click the name of the service principal. The client ID is listed on the app registration detail page as ",(0,a.kt)("strong",{parentName:"p"},"Application (client) ID"),"."),(0,a.kt)("h3",{id:"client-secret"},"Client Secret"),(0,a.kt)("p",null,"You can't retrieve the client secret value after it is created, so if you don't already have a client secret value, you will need to create a new client secret."),(0,a.kt)("p",null,"To get a new client secret, go to the Azure Portal, then click ",(0,a.kt)("strong",{parentName:"p"},"Azure Active Directory"),", then click ",(0,a.kt)("strong",{parentName:"p"},"App registrations,")," then click the name of the service principal."),(0,a.kt)("p",null,"Then click ",(0,a.kt)("strong",{parentName:"p"},"Certificates & secrets")," and click ",(0,a.kt)("strong",{parentName:"p"},"New client secret"),". Click ",(0,a.kt)("strong",{parentName:"p"},"Add"),". Then copy the ",(0,a.kt)("strong",{parentName:"p"},"Value")," of the new client secret."),(0,a.kt)("h3",{id:"environment"},"Environment"),(0,a.kt)("p",null,"Microsoft provides multiple ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/cloud?view=azure-cli-latest"},"clouds")," for compliance with regional laws, which are available for your use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AzurePublicCloud"),(0,a.kt)("li",{parentName:"ul"},"AzureGermanCloud"),(0,a.kt)("li",{parentName:"ul"},"AzureChinaCloud"),(0,a.kt)("li",{parentName:"ul"},"AzureUSGovernmentCloud")),(0,a.kt)("h1",{id:"account-access"},"Account Access"),(0,a.kt)("p",null,"In this section you will need to select an existing Azure cloud credential or create a new one."),(0,a.kt)("p",null,"For help configuring your Azure cloud credential, see ",(0,a.kt)("a",{parentName:"p",href:"#cloud-credentials"},"this section.")),(0,a.kt)("h1",{id:"cluster-location"},"Cluster Location"),(0,a.kt)("p",null,"Configure the cluster and node location. For more information on availability zones for AKS, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/availability-zones"},"AKS documentation.")),(0,a.kt)("p",null,"The high availability locations include multiple availability zones."),(0,a.kt)("h1",{id:"cluster-options"},"Cluster Options"),(0,a.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"The available Kubernetes versions are dynamically fetched from the Azure API."),(0,a.kt)("h3",{id:"cluster-resource-group"},"Cluster Resource Group"),(0,a.kt)("p",null,"A resource group is a container that holds related resources for an Azure solution. The resource group can include all the resources for the solution, or only those resources that you want to manage as a group. You decide how you want to allocate resources to resource groups based on what makes the most sense for your organization. Generally, add resources that share the same lifecycle to the same resource group so you can easily deploy, update, and delete them as a group."),(0,a.kt)("p",null,"Use an existing resource group or enter a resource group name and one will be created for you."),(0,a.kt)("p",null,"Using a resource group containing an existing AKS cluster will create a new resource group. Azure AKS only allows one AKS cluster per resource group."),(0,a.kt)("p",null,"For information on managing resource groups, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"Azure documentation.")),(0,a.kt)("h3",{id:"linux-admin-username"},"Linux Admin Username"),(0,a.kt)("p",null,"The username used to create an SSH connection to the Linux nodes."),(0,a.kt)("p",null,"The default username for AKS nodes is ",(0,a.kt)("inlineCode",{parentName:"p"},"azureuser"),"."),(0,a.kt)("h3",{id:"ssh-public-key"},"SSH Public Key"),(0,a.kt)("p",null,"The key used to create an SSH connection to the Linux nodes."),(0,a.kt)("h3",{id:"tags"},"Tags"),(0,a.kt)("p",null,"Cluster tags can be useful if your organization uses tags as a way to organize resources across multiple Azure services. These tags don't apply to resources within the cluster."),(0,a.kt)("h1",{id:"networking-options"},"Networking Options"),(0,a.kt)("h3",{id:"loadbalancer-sku"},"LoadBalancer SKU"),(0,a.kt)("p",null,"Azure load balancers support both standard and basic SKUs (stock keeping units)."),(0,a.kt)("p",null,"For a comparison of standard and basic load balancers, see the official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/load-balancer/skus#skus"},"Azure documentation.")," Microsoft recommends the Standard load balancer."),(0,a.kt)("p",null,"The Standard load balancer is required if you have selected one or more availability zones, or if you have more than one node pool."),(0,a.kt)("h3",{id:"network-policy"},"Network Policy"),(0,a.kt)("p",null,"All pods in an AKS cluster can send and receive traffic without limitations, by default. To improve security, you can define rules that control the flow of traffic. The Network Policy feature in Kubernetes lets you define rules for ingress and egress traffic between pods in a cluster."),(0,a.kt)("p",null,"Azure provides two ways to implement network policy. You choose a network policy option when you create an AKS cluster. The policy option can't be changed after the cluster is created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Azure's own implementation, called Azure Network Policies. The Azure network policy requires the Azure CNI."),(0,a.kt)("li",{parentName:"ul"},"Calico Network Policies, an open-source network and network security solution founded by ",(0,a.kt)("a",{parentName:"li",href:"https://www.tigera.io/"},"Tigera"),".")),(0,a.kt)("p",null,"You can also choose to have no network policy."),(0,a.kt)("p",null,"For more information about the differences between Azure and Calico network policies and their capabilities, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/use-network-policies#differences-between-azure-and-calico-policies-and-their-capabilities"},"AKS documentation.")),(0,a.kt)("h3",{id:"dns-prefix"},"DNS Prefix"),(0,a.kt)("p",null,"Enter a unique DNS prefix for your cluster's Kubernetes API server FQDN."),(0,a.kt)("h3",{id:"network-plugin"},"Network Plugin"),(0,a.kt)("p",null,"There are two network plugins: kubenet and Azure CNI."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/network-plugins/#kubenet"},"kubenet")," Kubernetes plugin is the default configuration for AKS cluster creation. When kubenet is used, each node in the cluster receives a routable IP address. The pods use NAT to communicate with other resources outside the AKS cluster. This approach reduces the number of IP addresses you need to reserve in your network space for pods to use."),(0,a.kt)("p",null,"With the Azure CNI (advanced) networking plugin, pods get full virtual network connectivity and can be directly reached via their private IP address from connected networks. This plugin requires more IP address space."),(0,a.kt)("p",null,"For more information on the differences between kubenet and Azure CNI, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/concepts-network#compare-network-models"},"AKS documentation.")),(0,a.kt)("h3",{id:"http-application-routing"},"HTTP Application Routing"),(0,a.kt)("p",null,"When enabled, the HTTP application routing add-on makes it easier to access applications deployed to the AKS cluster. It deploys two components: a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress controller")," and an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/external-dns"},"External-DNS")," controller."),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/http-application-routing"},"AKS documentation.")),(0,a.kt)("h3",{id:"set-authorized-ip-ranges"},"Set Authorized IP Ranges"),(0,a.kt)("p",null,"You can secure access to the Kubernetes API server using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/api-server-authorized-ip-ranges#overview-of-api-server-authorized-ip-ranges"},"authorized IP address ranges.")),(0,a.kt)("p",null,"The Kubernetes API server exposes the Kubernetes API. This component provides the interaction for management tools, such as kubectl. AKS provides a single-tenant cluster control plane with a dedicated API server. By default, the API server is assigned a public IP address, and you should control access to it using Kubernetes-based or Azure-based RBAC."),(0,a.kt)("p",null,"To secure access to the otherwise publicly accessible AKS control plane and API server, you can enable and use authorized IP ranges. These authorized IP ranges only allow defined IP address ranges to communicate with the API server."),(0,a.kt)("p",null,"However, even if you use authorized IP address ranges, you should still use Kubernetes RBAC or Azure RBAC to authorize users and the actions they request."),(0,a.kt)("h3",{id:"container-monitoring"},"Container Monitoring"),(0,a.kt)("p",null,"Container monitoring gives you performance visibility by collecting memory and processor metrics from controllers, nodes, and containers that are available in Kubernetes through the Metrics API. Container logs are also collected. After you enable monitoring, metrics and logs are automatically collected for you through a containerized version of the Log Analytics agent for Linux. Metrics are written to the metrics store and log data is written to the logs store associated with your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-query-overview"},"Log Analytics")," workspace."),(0,a.kt)("h3",{id:"log-analytics-workspace-resource-group"},"Log Analytics Workspace Resource Group"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups"},"resource group")," containing the Log Analytics Workspace. You must create at least one workspace to use Azure Monitor Logs. "),(0,a.kt)("h3",{id:"log-analytics-workspace-name"},"Log Analytics Workspace Name"),(0,a.kt)("p",null,"Data collected by Azure Monitor Logs is stored in one or more ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/logs/design-logs-deployment"},"Log Analytics workspaces.")," The workspace defines the geographic location of the data, access rights defining which users can access data, and configuration settings such as the pricing tier and data retention."),(0,a.kt)("p",null,"You must create at least one workspace to use Azure Monitor Logs. A single workspace may be suffxicient for all of your monitoring data, or may choose to create multiple workspaces depending on your requirements. For example, you might have one workspace for your production data and another for testing."),(0,a.kt)("p",null,"For more information about Azure Monitor Logs, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs"},"Azure documentation.")),(0,a.kt)("h3",{id:"support-private-kubernetes-service"},"Support Private Kubernetes Service"),(0,a.kt)("p",null,"Typically, AKS worker nodes do not get public IPs, regardless of whether the cluster is private. In a private cluster, the control plane does not have a public endpoint."),(0,a.kt)("p",null,"Rancher can connect to a private AKS cluster in one of two ways."),(0,a.kt)("p",null,"The first way to ensure that Rancher is running on the same ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-network/nat-overview"},"NAT")," as the AKS nodes."),(0,a.kt)("p",null,"The second way is to run a command to register the cluster with Rancher. Once the cluster is provisioned, you can run the displayed command anywhere you can connect to the cluster\u2019s Kubernetes API. This command is displayed in a pop-up when you provision an AKS cluster with a private API endpoint enabled."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please be aware that when registering an existing AKS cluster, the cluster might take some time, possibly hours, to appear in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster To register")," dropdown list. This outcome will be based on region."))),(0,a.kt)("p",null,"For more information about connecting to an AKS private cluster, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/private-clusters#options-for-connecting-to-the-private-cluster"},"AKS documentation.")),(0,a.kt)("h1",{id:"node-pools"},"Node Pools"),(0,a.kt)("h3",{id:"mode"},"Mode"),(0,a.kt)("p",null,"The Azure interface allows users to specify whether a Primary Node Pool relies on either ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," (normally used for control planes) or ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," (what is most typically needed for Rancher)."),(0,a.kt)("p",null,"For Primary Node Pools, you can specify Mode, OS, Count and Size."),(0,a.kt)("p",null,"System node pools always require running nodes, so they cannot be scaled below one node. At least one system node pool is required."),(0,a.kt)("p",null,"For subsequent node pools, the Rancher UI forces the default of User. User node pools allow you to scale to zero nodes. User node pools don't run any part of the Kubernetes controlplane."),(0,a.kt)("p",null,"AKS doesn't expose the nodes that run the Kubernetes controlplane components."),(0,a.kt)("h3",{id:"availability-zones"},"Availability Zones"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/availability-zones/az-overview"},"Availability zones")," are unique physical locations within a region. Each zone is made up of one or more data centers equipped with independent power, cooling, and networking."),(0,a.kt)("p",null,"Not all regions have support for availability zones. For a list of Azure regions with availability zones, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/availability-zones/az-region#azure-regions-with-availability-zones"},"Azure documentation.")),(0,a.kt)("h3",{id:"vm-size"},"VM Size"),(0,a.kt)("p",null,"Choose a size for each VM in the node pool. For details about each VM size, see ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/"},"this page.")),(0,a.kt)("h3",{id:"os-disk-type"},"OS Disk Type"),(0,a.kt)("p",null,"The nodes in the node pool can have either managed or ephemeral disks."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks"},"Ephemeral OS disks")," are created on the local virtual machine storage and not saved to the remote Azure Storage. Ephemeral OS disks work well for stateless workloads, where applications are tolerant of individual VM failures, but are more affected by VM deployment time or reimaging the individual VM instances. With Ephemeral OS disk, you get lower read/write latency to the OS disk and faster VM reimage."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview"},"Azure managed disks")," are block-level storage volumes that are managed by Azure and used with Azure Virtual Machines. Managed disks are designed for 99.999% availability. Managed disks achieve this by providing you with three replicas of your data, allowing for high durability."),(0,a.kt)("h3",{id:"os-disk-size"},"OS Disk Size"),(0,a.kt)("p",null,"The size in GB for the disk for each node."),(0,a.kt)("h3",{id:"node-count"},"Node Count"),(0,a.kt)("p",null,"The number of nodes in the node pool. The maximum number of nodes may be limited by your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits"},"Azure subscription.")),(0,a.kt)("h3",{id:"max-pods-per-node"},"Max Pods Per Node"),(0,a.kt)("p",null,"The maximum number of pods per node defaults to 110 with a maximum of 250."),(0,a.kt)("h3",{id:"enable-auto-scaling"},"Enable Auto Scaling"),(0,a.kt)("p",null,"When auto scaling is enabled, you will need to enter a minimum and maximum node count."),(0,a.kt)("p",null,"When Auto Scaling is enabled, you can't manually scale the node pool. The scale is controlled by the AKS autoscaler."))}h.isMDXComponent=!0}}]);