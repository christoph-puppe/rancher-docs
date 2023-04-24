"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Creating an Amazon EC2 Cluster",description:"Learn the prerequisites and steps required in order for you to create an Amazon EC2 cluster using Rancher"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",id:"version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",title:"Creating an Amazon EC2 Cluster",description:"Learn the prerequisites and steps required in order for you to create an Amazon EC2 cluster using Rancher",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",permalink:"/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Creating an Amazon EC2 Cluster",description:"Learn the prerequisites and steps required in order for you to create an Amazon EC2 cluster using Rancher"},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",permalink:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},next:{title:"Creating a DigitalOcean Cluster",permalink:"/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating an EC2 Cluster",id:"creating-an-ec2-cluster",level:2},{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials",level:3},{value:"2. Create a node template with your cloud credentials and information from EC2",id:"2-create-a-node-template-with-your-cloud-credentials-and-information-from-ec2",level:3},{value:"3. Create a cluster with node pools using the node template",id:"3-create-a-cluster-with-node-pools-using-the-node-template",level:3},{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials-1",level:3},{value:"2. Create your cluster",id:"2-create-your-cluster",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:3},{value:"IAM Policies",id:"iam-policies",level:2},{value:"Example IAM Policy",id:"example-iam-policy",level:3},{value:"Example IAM Policy with PassRole",id:"example-iam-policy-with-passrole",level:3},{value:"Example IAM Policy to allow encrypted EBS volumes",id:"example-iam-policy-to-allow-encrypted-ebs-volumes",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=u("Tabs"),d=u("TabItem"),m={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, you'll learn how to use Rancher to install an ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in Amazon EC2."),(0,r.kt)("p",null,"First, you will set up your EC2 cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision new nodes in EC2."),(0,r.kt)("p",null,"Then you will create an EC2 cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AWS EC2 Access Key and Secret Key")," that will be used to create the instances. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon Documentation: Creating Access Keys")," how to create an Access Key and Secret Key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IAM Policy created")," to add to the user of the Access Key And Secret Key. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon Documentation: Creating IAM Policies (Console)")," how to create an IAM policy. See our three example JSON policies below:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-iam-policy"},"Example IAM Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-iam-policy-with-passrole"},"Example IAM Policy with PassRole")," (needed if you want to use ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," or want to pass an IAM Profile to an instance)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IAM Policy added as Permission")," to the user. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon Documentation: Adding Permissions to a User (Console)")," how to attach it to an user.")),(0,r.kt)("h2",{id:"creating-an-ec2-cluster"},"Creating an EC2 Cluster"),(0,r.kt)("p",null,"The steps to create a cluster differ based on your Rancher version."),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(d,{value:"RKE",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-create-your-cloud-credentials"},"Create your cloud credentials")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-create-a-node-template-with-your-cloud-credentials-and-information-from-ec2"},"Create a node template with your cloud credentials and information from EC2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,r.kt)("h3",{id:"1-create-your-cloud-credentials"},"1. Create your cloud credentials"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Amazon"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Default Region")," field, select the AWS region where your cluster nodes will be located."),(0,r.kt)("li",{parentName:"ol"},"Enter your AWS EC2 ",(0,r.kt)("strong",{parentName:"li"},"Access Key")," and ",(0,r.kt)("strong",{parentName:"li"},"Secret Key"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters."),(0,r.kt)("h3",{id:"2-create-a-node-template-with-your-cloud-credentials-and-information-from-ec2"},"2. Create a node template with your cloud credentials and information from EC2"),(0,r.kt)("p",null,"Creating a ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template")," for EC2 will allow Rancher to provision new nodes in EC2. Node templates can be reused for other clusters."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"RKE1 Configuration > Node Templates"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Template"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out a node template for EC2. For help filling out the form, refer to ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2"},"EC2 Node Template Configuration."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dual-stack/"},"dual-stack")," feature, there are additional ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke//latest/en/config-options/dual-stack#requirements"},"requirements")," that must be taken into consideration.")))),(0,r.kt)("h3",{id:"3-create-a-cluster-with-node-pools-using-the-node-template"},"3. Create a cluster with node pools using the node template"),(0,r.kt)("p",null,"Add one or more node pools to your cluster. For more information about node pools, see ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Amazon EC2"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a node pool for each Kubernetes role. For each node pool, choose a node template that you created. For more information about node pools, including best practices for assigning Kubernetes roles to them, see ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,r.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("strong",{parentName:"p"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/set-up-cloud-providers"},"Selecting Cloud Providers")," to configure the Kubernetes Cloud Provider. For help configuring the cluster, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dual-stack/"},"dual-stack")," feature, there are additional ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke//latest/en/config-options/dual-stack#requirements"},"requirements")," that must be taken into consideration."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")))),(0,r.kt)(d,{value:"RKE2",mdxType:"TabItem"},(0,r.kt)("h3",{id:"1-create-your-cloud-credentials-1"},"1. Create your cloud credentials"),(0,r.kt)("p",null,"If you already have a set of cloud credentials to use, skip this section."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Amazon"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Default Region")," field, select the AWS region where your cluster nodes will be located."),(0,r.kt)("li",{parentName:"ol"},"Enter your AWS EC2 ",(0,r.kt)("strong",{parentName:"li"},"Access Key")," and ",(0,r.kt)("strong",{parentName:"li"},"Secret Key"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters."),(0,r.kt)("h3",{id:"2-create-your-cluster"},"2. Create your cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Toggle the switch to ",(0,r.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Amazon EC2"),"."),(0,r.kt)("li",{parentName:"ol"},"Select a ",(0,r.kt)("strong",{parentName:"li"},"Cloud Credential"),", if more than one exists. Otherwise, it's preselected."),(0,r.kt)("li",{parentName:"ol"},"Enter a ",(0,r.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a machine pool for each Kubernetes role. Refer to the ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-roles-in-rke2"},"best practices")," for recommendations on role assignments and counts.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"For each machine pool, define the machine configuration. Refer to ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2"},"the EC2 machine configuration reference")," for information on configuration options."))),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Configuration")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. For help configuring the cluster, refer to the ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"},"RKE2 cluster configuration reference.")),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,r.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,r.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("p",null,"Your cluster is created and assigned a state of ",(0,r.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,r.kt)("p",null,"You can access your cluster after its state is updated to ",(0,r.kt)("strong",{parentName:"p"},"Active"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,r.kt)("h3",{id:"optional-next-steps"},"Optional Next Steps"),(0,r.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")),(0,r.kt)("h2",{id:"iam-policies"},"IAM Policies"),(0,r.kt)("h3",{id:"example-iam-policy"},"Example IAM Policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:Describe*",\n                "ec2:ImportKeyPair",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:ModifyInstanceMetadataOptions"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances"\n            ],\n            "Resource": [\n                "arn:aws:ec2:REGION::image/ami-*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:placement-group/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:subnet/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:key-pair/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:network-interface/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:security-group/*"\n            ]\n        },\n        {\n            "Sid": "VisualEditor2",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RebootInstances",\n                "ec2:TerminateInstances",\n                "ec2:StartInstances",\n                "ec2:StopInstances"\n            ],\n            "Resource": "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"example-iam-policy-with-passrole"},"Example IAM Policy with PassRole"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:Describe*",\n                "ec2:ImportKeyPair",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:ModifyInstanceMetadataOptions"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "ec2:RunInstances"\n            ],\n            "Resource": [\n                "arn:aws:ec2:REGION::image/ami-*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:placement-group/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:subnet/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:key-pair/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:network-interface/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:security-group/*",\n                "arn:aws:iam::AWS_ACCOUNT_ID:role/YOUR_ROLE_NAME"\n            ]\n        },\n        {\n            "Sid": "VisualEditor2",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RebootInstances",\n                "ec2:TerminateInstances",\n                "ec2:StartInstances",\n                "ec2:StopInstances"\n            ],\n            "Resource": "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "kms:Decrypt",\n        "kms:GenerateDataKeyWithoutPlaintext",\n        "kms:Encrypt",\n        "kms:DescribeKey",\n        "kms:CreateGrant",\n        "ec2:DetachVolume",\n        "ec2:AttachVolume",\n        "ec2:DeleteSnapshot",\n        "ec2:DeleteTags",\n        "ec2:CreateTags",\n        "ec2:CreateVolume",\n        "ec2:DeleteVolume",\n        "ec2:CreateSnapshot"\n      ],\n      "Resource": [\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:snapshot/*",\n        "arn:aws:kms:REGION:AWS_ACCOUNT_ID:key/KMS_KEY_ID"\n      ]\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "ec2:DescribeInstances",\n        "ec2:DescribeTags",\n        "ec2:DescribeVolumes",\n        "ec2:DescribeSnapshots"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')))}h.isMDXComponent=!0}}]);