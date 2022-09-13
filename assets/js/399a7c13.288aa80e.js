"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[48617],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"EKS Cluster Configuration Reference",shortTitle:"EKS Cluster Configuration",weight:2},s=void 0,c={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",id:"reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",title:"EKS Cluster Configuration Reference",description:"Account Access",source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"EKS Cluster Configuration Reference",shortTitle:"EKS Cluster Configuration",weight:2},sidebar:"tutorialSidebar",previous:{title:"K3s Cluster Configuration Reference",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration"},next:{title:"AKS Cluster Configuration Reference",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"}},u={},d=[{value:"Account Access",id:"account-access",level:3},{value:"Service Role",id:"service-role",level:3},{value:"Secrets Encryption",id:"secrets-encryption",level:3},{value:"API Server Endpoint Access",id:"api-server-endpoint-access",level:3},{value:"Private-only API Endpoints",id:"private-only-api-endpoints",level:3},{value:"Public Access Endpoints",id:"public-access-endpoints",level:3},{value:"Subnet",id:"subnet",level:3},{value:"Security Group",id:"security-group",level:3},{value:"Logging",id:"logging",level:3},{value:"Managed Node Groups",id:"managed-node-groups",level:3},{value:"Bring your own launch template",id:"bring-your-own-launch-template",level:4},{value:"Rancher-managed launch templates",id:"rancher-managed-launch-templates",level:4},{value:"Custom AMIs",id:"custom-amis",level:4},{value:"Spot instances",id:"spot-instances",level:4},{value:"Node Group Settings",id:"node-group-settings",level:4},{value:"Configuring the Refresh Interval",id:"configuring-the-refresh-interval",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"account-access"},"Account Access"),(0,o.kt)("p",null,"Complete each drop-down and field using the information obtained for your IAM policy."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Region"),(0,o.kt)("td",{parentName:"tr",align:null},"From the drop-down choose the geographical region in which to build your cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cloud Credentials"),(0,o.kt)("td",{parentName:"tr",align:null},"Select the cloud credentials that you created for your IAM policy. For more information on creating cloud credentials in Rancher, refer to ",(0,o.kt)("a",{parentName:"td",href:"/reference-guides/user-settings/manage-cloud-credentials"},"this page."))))),(0,o.kt)("h3",{id:"service-role"},"Service Role"),(0,o.kt)("p",null,"Choose a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html"},"service role"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Service Role"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standard: Rancher generated service role"),(0,o.kt)("td",{parentName:"tr",align:null},"If you choose this role, Rancher automatically adds a service role for use with the cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom: Choose from your existing service roles"),(0,o.kt)("td",{parentName:"tr",align:null},"If you choose this role, Rancher lets you choose from service roles that you're already created within AWS. For more information on creating a custom service role in AWS, see the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#create-service-linked-role"},"Amazon documentation"),".")))),(0,o.kt)("h3",{id:"secrets-encryption"},"Secrets Encryption"),(0,o.kt)("p",null,"Optional: To encrypt secrets, select or enter a key created in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/kms/latest/developerguide/overview.html"},"AWS Key Management Service (KMS)")),(0,o.kt)("h3",{id:"api-server-endpoint-access"},"API Server Endpoint Access"),(0,o.kt)("p",null,"Configuring Public/Private API access is an advanced use case. For details, refer to the EKS cluster endpoint access control ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html"},"documentation.")),(0,o.kt)("h3",{id:"private-only-api-endpoints"},"Private-only API Endpoints"),(0,o.kt)("p",null,"If you enable private and disable public API endpoint access when creating a cluster, then there is an extra step you must take in order for Rancher to connect to the cluster successfully. In this case, a pop-up will be displayed with a command that you will run on the cluster to register it with Rancher. Once the cluster is provisioned, you can run the displayed command anywhere you can connect to the cluster's Kubernetes API."),(0,o.kt)("p",null,"There are two ways to avoid this extra manual step:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can create the cluster with both private and public API endpoint access on cluster creation. You can disable public access after the cluster is created and in an active state and Rancher will continue to communicate with the EKS cluster."),(0,o.kt)("li",{parentName:"ul"},"You can ensure that Rancher shares a subnet with the EKS cluster. Then security groups can be used to enable Rancher to communicate with the cluster's API endpoint. In this case, the command to register the cluster is not needed, and Rancher will be able to communicate with your cluster. For more information on configuring security groups, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"security groups documentation"),".")),(0,o.kt)("h3",{id:"public-access-endpoints"},"Public Access Endpoints"),(0,o.kt)("p",null,"Optionally limit access to the public endpoint via explicit CIDR blocks."),(0,o.kt)("p",null,"If you limit access to specific CIDR blocks, then it is recommended that you also enable the private access to avoid losing network communication to the cluster."),(0,o.kt)("p",null,"One of the following is required to enable private access:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rancher's IP must be part of an allowed CIDR block"),(0,o.kt)("li",{parentName:"ul"},"Private access should be enabled, and Rancher must share a subnet with the cluster and have network access to the cluster, which can be configured with a security group")),(0,o.kt)("p",null,"For more information about public and private access to the cluster endpoint, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html"},"Amazon EKS documentation.")),(0,o.kt)("h3",{id:"subnet"},"Subnet"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standard: Rancher generated VPC and Subnet"),(0,o.kt)("td",{parentName:"tr",align:null},"While provisioning your cluster, Rancher generates a new VPC with 3 public subnets.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom: Choose from your existing VPC and Subnets"),(0,o.kt)("td",{parentName:"tr",align:null},"While provisioning your cluster, Rancher configures your Control Plane and nodes to use a VPC and Subnet that you've already ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"created in AWS"),".")))),(0,o.kt)("p",null," For more information, refer to the AWS documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html"},"Cluster VPC Considerations"),". Follow one of the sets of instructions below based on your selection from the previous step."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"What Is Amazon VPC?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html"},"VPCs and Subnets"))),(0,o.kt)("h3",{id:"security-group"},"Security Group"),(0,o.kt)("p",null,"Amazon Documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html"},"Cluster Security Group Considerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"Security Groups for Your VPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/getting-started-ipv4.html#getting-started-create-security-group"},"Create a Security Group"))),(0,o.kt)("h3",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Configure control plane logs to send to Amazon CloudWatch. You are charged the standard CloudWatch Logs data ingestion and storage costs for any logs sent to CloudWatch Logs from your clusters."),(0,o.kt)("p",null,"Each log type corresponds to a component of the Kubernetes control plane. To learn more about these components, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/"},"Kubernetes Components")," in the Kubernetes documentation."),(0,o.kt)("p",null,"For more information on EKS control plane logging, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html"},"documentation.")),(0,o.kt)("h3",{id:"managed-node-groups"},"Managed Node Groups"),(0,o.kt)("p",null,"Amazon EKS managed node groups automate the provisioning and lifecycle management of nodes (Amazon EC2 instances) for Amazon EKS Kubernetes clusters. "),(0,o.kt)("p",null,"For more information about how node groups work and how they are configured, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html"},"EKS documentation.")),(0,o.kt)("h4",{id:"bring-your-own-launch-template"},"Bring your own launch template"),(0,o.kt)("p",null,"A launch template ID and version can be provided in order to easily configure the EC2 instances in a node group. If a launch template is provided, then none of the settings below will be configurable in Rancher. Therefore, using a launch template would require that all the necessary and desired settings from the list below would need to be specified in the launch template. Also note that if a launch template ID and version is provided, then only the template version can be updated. Using a new template ID would require creating a new managed node group."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Instance Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose the ",(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/"},"hardware specs")," for the instance you're provisioning."),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Image ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify a custom AMI for the nodes. Custom AMIs used with EKS must be ",(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-custom-linux-ami/"},"configured properly")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node Volume Size"),(0,o.kt)("td",{parentName:"tr",align:null},"The launch template must specify an EBS volume with the desired size"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SSH Key"),(0,o.kt)("td",{parentName:"tr",align:null},"A key to be added to the instances to provide SSH access to the nodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Data"),(0,o.kt)("td",{parentName:"tr",align:null},"Cloud init script in ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html#launch-template-user-data"},"MIME multi-part format")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Instance Resource Tags"),(0,o.kt)("td",{parentName:"tr",align:null},"Tag each EC2 instance in the node group"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,o.kt)("h4",{id:"rancher-managed-launch-templates"},"Rancher-managed launch templates"),(0,o.kt)("p",null,'If you do not specify a launch template, then you will be able to configure the above options in the Rancher UI and all of them can be updated after creation. In order to take advantage of all of these options, Rancher will create and manage a launch template for you. Each cluster in Rancher will have one Rancher-managed launch template and each managed node group that does not have a specified launch template will have one version of the managed launch template. The name of this launch template will have the prefix "rancher-managed-lt-" followed by the display name of the cluster. In addition, the Rancher-managed launch template will be tagged with the key "rancher-managed-template" and value "do-not-modify-or-delete" to help identify it as Rancher-managed. It is important that this launch template and its versions not be modified, deleted, or used with any other clusters or managed node groups. Doing so could result in your node groups being "degraded" and needing to be destroyed and recreated.'),(0,o.kt)("h4",{id:"custom-amis"},"Custom AMIs"),(0,o.kt)("p",null,"If you specify a custom AMI, whether in a launch template or in Rancher, then the image must be ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-custom-linux-ami/"},"configured properly")," and you must provide user data to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html#launch-template-custom-ami"},"bootstrap the node"),". This is considered an advanced use case and understanding the requirements is imperative."),(0,o.kt)("p",null,"If you specify a launch template that does not contain a custom AMI, then Amazon will use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html"},"EKS-optimized AMI")," for the Kubernetes version and selected region. You can also select a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html#gpu-ami"},"GPU enabled instance")," for workloads that would benefit from it."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The GPU enabled instance setting in Rancher is ignored if a custom AMI is provided, either in the dropdown or in a launch template."))),(0,o.kt)("h4",{id:"spot-instances"},"Spot instances"),(0,o.kt)("p",null,"Spot instances are now ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types-spot"},"supported by EKS"),'. If a launch template is specified, Amazon recommends that the template not provide an instance type. Instead, Amazon recommends providing multiple instance types. If the "Request Spot Instances" checkbox is enabled for a node group, then you will have the opportunity to provide multiple instance types.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Any selection you made in the instance type dropdown will be ignored in this situation and you must specify at least one instance type to the "Spot Instance Types" section. Furthermore, a launch template used with EKS cannot request spot instances. Requesting spot instances must be part of the EKS configuration.'))),(0,o.kt)("h4",{id:"node-group-settings"},"Node Group Settings"),(0,o.kt)("p",null,'The following settings are also configurable. All of these except for the "Node Group Name" are editable after the node group is created.'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node Group Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the node group.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Desired ASG Size"),(0,o.kt)("td",{parentName:"tr",align:null},"The desired number of instances.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Maximum ASG Size"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of instances. This setting won't take effect until the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-autoscaler.html"},"Cluster Autoscaler")," is installed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Minimum ASG Size"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum number of instances. This setting won't take effect until the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-autoscaler.html"},"Cluster Autoscaler")," is installed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes labels applied to the nodes in the managed node group.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tags"),(0,o.kt)("td",{parentName:"tr",align:null},"These are tags for the managed node group and do not propagate to any of the associated resources.")))),(0,o.kt)("h3",{id:"configuring-the-refresh-interval"},"Configuring the Refresh Interval"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"eks-refresh-cron")," setting is deprecated. It has been migrated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"eks-refresh")," setting, which is an integer representing seconds."),(0,o.kt)("p",null,"The default value is 300 seconds."),(0,o.kt)("p",null,"The syncing interval can be changed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl edit setting eks-refresh"),"."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"eks-refresh-cron")," setting was previously set, the migration will happen automatically."),(0,o.kt)("p",null,"The shorter the refresh window, the less likely any race conditions will occur, but it does increase the likelihood of encountering request limits that may be in place for AWS APIs."))}m.isMDXComponent=!0}}]);