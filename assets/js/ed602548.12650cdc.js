"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27557],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,g=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(67294),a=r(86010),i="tabItem_Ymn6";function s(e){var t=e.children,r=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),a=r(67294),i=r(86010),s=r(72389),l=r(67392),o=r(7094),u=r(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,s=e.lazy,p=e.block,h=e.defaultValue,g=e.values,m=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:f[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,R=(0,a.useState)(N),K=R[0],E=R[1],T=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==K&&b.some((function(e){return e.value===S}))&&E(S)}var A=function(e){var t=e.currentTarget,r=T.indexOf(t),n=b[r].value;n!==K&&(x(t),E(n),null!=m&&C(m,String(n)))},I=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=T.indexOf(e.currentTarget)+1;r=null!=(n=T[a])?n:T[0];break;case"ArrowLeft":var i,s=T.indexOf(e.currentTarget)-1;r=null!=(i=T[s])?i:T[T.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var t=e.value,r=e.label,s=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:K===t?0:-1,"aria-selected":K===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:A,onClick:A},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":K===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===K}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==K})}))))}function h(e){var t=(0,s.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},43003:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=r(65488),l=r(85162),o=["components"],u={title:"Registering Existing Clusters",weight:6,aliases:["/rancher/v2.5/en/cluster-provisioning/imported-clusters","/rancher/v2.x/en/cluster-provisioning/imported-clusters/","/rancher/v2.x/en/cluster-provisioning/registered-clusters/"]},c=void 0,d={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",title:"Registering Existing Clusters",description:"The cluster registration feature replaced the feature to import clusters.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Registering Existing Clusters",weight:6,aliases:["/rancher/v2.5/en/cluster-provisioning/imported-clusters","/rancher/v2.x/en/cluster-provisioning/imported-clusters/","/rancher/v2.x/en/cluster-provisioning/registered-clusters/"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Agents",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"},next:{title:"Kubernetes Resources",permalink:"/v2.5/pages-for-subheaders/kubernetes-resources-setup"}},p={},h=[{value:"Kubernetes Node Roles",id:"kubernetes-node-roles",level:3},{value:"Permissions",id:"permissions",level:3},{value:"EKS Clusters",id:"eks-clusters",level:3},{value:"Permissions",id:"permissions-1",level:3},{value:"EKS Clusters",id:"eks-clusters-1",level:3},{value:"Configuring a K3s Cluster to Enable Registration in Rancher",id:"configuring-a-k3s-cluster-to-enable-registration-in-rancher",level:3},{value:"Configuring an Imported EKS Cluster with Terraform",id:"configuring-an-imported-eks-cluster-with-terraform",level:3},{value:"Changes in v2.5.8",id:"changes-in-v258",level:3},{value:"Additional Features for Registered EKS and GKE Clusters",id:"additional-features-for-registered-eks-and-gke-clusters",level:3},{value:"Additional Features for Registered EKS Clusters",id:"additional-features-for-registered-eks-clusters",level:3}],g={toc:h};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The cluster registration feature replaced the feature to import clusters."),(0,i.kt)("p",null,"The control that Rancher has to manage a registered cluster depends on the type of cluster. For details, see ",(0,i.kt)("a",{parentName:"p",href:"#management-capabilities-for-registered-clusters"},"Management Capabilities for Registered Clusters.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#registering-a-cluster"},"Registering a Cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#management-capabilities-for-registered-clusters"},"Management Capabilities for Registered Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-k3s-cluster-upgrades"},"Configuring K3s Cluster Upgrades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#debug-logging-and-troubleshooting-for-registered-k3s-clusters"},"Debug Logging and Troubleshooting for Registered K3s Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#annotating-registered-clusters"},"Annotating Registered Clusters"))),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v2.5.9+",mdxType:"TabItem"},(0,i.kt)("h3",{id:"kubernetes-node-roles"},"Kubernetes Node Roles"),(0,i.kt)("p",null,"Registered RKE Kubernetes clusters must have all three node roles - etcd, controlplane and worker. A cluster with only controlplane components cannot be registered in Rancher."),(0,i.kt)("p",null,"For more information on RKE node roles, see the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/checklist-for-production-ready-clusters#cluster-architecture"},"best practices.")),(0,i.kt)("h3",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"If your existing Kubernetes cluster already has a ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," role defined, you must have this ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," privilege to register the cluster in Rancher."),(0,i.kt)("p",null,"In order to apply the privilege, you need to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user [USER_ACCOUNT]\n")),(0,i.kt)("p",null,"before running the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command to register the cluster."),(0,i.kt)("p",null,"By default, GKE users are not given this privilege, so you will need to run the command before registering GKE clusters. To learn more about role-based access control for GKE, please click ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control"},"here"),"."),(0,i.kt)("p",null,"If you are registering a K3s cluster, make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," is readable. It is protected by default. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"#configuring-a-k3s-cluster-to-enable-registration-in-rancher"},"Configuring a K3s cluster to enable importation to Rancher.")),(0,i.kt)("h3",{id:"eks-clusters"},"EKS Clusters"),(0,i.kt)("p",null,"EKS clusters must have at least one managed node group to be imported into Rancher or provisioned from Rancher successfully.")),(0,i.kt)(l.Z,{value:"Rancher before v2.5.9",mdxType:"TabItem"},(0,i.kt)("h3",{id:"permissions-1"},"Permissions"),(0,i.kt)("p",null,"If your existing Kubernetes cluster already has a ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," role defined, you must have this ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," privilege to register the cluster in Rancher."),(0,i.kt)("p",null,"In order to apply the privilege, you need to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user [USER_ACCOUNT]\n")),(0,i.kt)("p",null,"before running the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command to register the cluster."),(0,i.kt)("p",null,"By default, GKE users are not given this privilege, so you will need to run the command before registering GKE clusters. To learn more about role-based access control for GKE, please click ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control"},"here"),"."),(0,i.kt)("p",null,"If you are registering a K3s cluster, make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," is readable. It is protected by default. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"#configuring-a-k3s-cluster-to-enable-registration-in-rancher"},"Configuring a K3s cluster to enable importation to Rancher.")),(0,i.kt)("h3",{id:"eks-clusters-1"},"EKS Clusters"),(0,i.kt)("p",null,"EKS clusters must have at least one managed node group to be imported into Rancher or provisioned from Rancher successfully."))),(0,i.kt)("h1",{id:"registering-a-cluster"},"Registering a Cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("strong",{parentName:"li"},"Register an existing Kubernetes cluster"),", click the type of Kubernetes cluster you want to register."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,i.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,i.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,i.kt)("li",{parentName:"ol"},"For Rancher v2.5.6+, use ",(0,i.kt)("strong",{parentName:"li"},"Agent Environment Variables")," under ",(0,i.kt)("strong",{parentName:"li"},"Cluster Options")," to set environment variables for ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"},"rancher cluster agent"),". The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," environment variables can be set using agent environment variables."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"The prerequisite for ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-admin")," privileges is shown (see ",(0,i.kt)("strong",{parentName:"li"},"Prerequisites")," above), including an example command to fulfil the prerequisite."),(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," command to your clipboard and run it on a node where kubeconfig is configured to point to the cluster you want to import. If you are unsure it is configured correctly, run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," to verify before running the command shown in Rancher."),(0,i.kt)("li",{parentName:"ol"},"If you are using self signed certificates, you will receive the message ",(0,i.kt)("inlineCode",{parentName:"li"},"certificate signed by unknown authority"),". To work around this validation, copy the command starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")," displayed in Rancher to your clipboard. Then run the command on a node where kubeconfig is configured to point to the cluster you want to import."),(0,i.kt)("li",{parentName:"ol"},"When you finish running the command(s) on your node, click ",(0,i.kt)("strong",{parentName:"li"},"Done"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your cluster is registered and assigned a state of ",(0,i.kt)("strong",{parentName:"li"},"Pending.")," Rancher is deploying resources to manage your cluster."),(0,i.kt)("li",{parentName:"ul"},"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"li"},"Active.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," clusters are assigned two Projects: ",(0,i.kt)("inlineCode",{parentName:"li"},"Default")," (containing the namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),") and ",(0,i.kt)("inlineCode",{parentName:"li"},"System")," (containing the namespaces ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system"),", if present).")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nYou can not re-register a cluster that is currently active in a Rancher setup.")),(0,i.kt)("h3",{id:"configuring-a-k3s-cluster-to-enable-registration-in-rancher"},"Configuring a K3s Cluster to Enable Registration in Rancher"),(0,i.kt)("p",null,"The K3s server needs to be configured to allow writing to the kubeconfig file."),(0,i.kt)("p",null,"This can be accomplished by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--write-kubeconfig-mode 644")," as a flag during installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644\n")),(0,i.kt)("p",null,"The option can also be specified using the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_KUBECONFIG_MODE"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" sh -s -\n')),(0,i.kt)("h3",{id:"configuring-an-imported-eks-cluster-with-terraform"},"Configuring an Imported EKS Cluster with Terraform"),(0,i.kt)("p",null,"You should define ",(0,i.kt)("strong",{parentName:"p"},"only")," the minimum fields that Rancher requires when importing an EKS cluster with Terraform. This is important as Rancher will overwrite what was in the EKS cluster with any config that the user has provided."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," Even a small difference between the current EKS cluster and a user-provided config could have unexpected results.")),(0,i.kt)("p",null,"The minimum config fields required by Rancher to import EKS clusters with Terraform using ",(0,i.kt)("inlineCode",{parentName:"p"},"eks_config_v2")," are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cloud_credential_id"),(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"region"),(0,i.kt)("li",{parentName:"ul"},"imported (this field should always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," for imported clusters)")),(0,i.kt)("p",null,"Example YAML configuration for imported EKS clusters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'resource "rancher2_cluster" "my-eks-to-import" {\n  name        = "my-eks-to-import"\n  description = "Terraform EKS Cluster"\n  eks_config_v2 {\n    cloud_credential_id = rancher2_cloud_credential.aws.id\n    name                = var.aws_eks_name\n    region              = var.aws_region\n    imported            = true\n  }\n}\n')),(0,i.kt)("h1",{id:"management-capabilities-for-registered-clusters"},"Management Capabilities for Registered Clusters"),(0,i.kt)("p",null,"The control that Rancher has to manage a registered cluster depends on the type of cluster."),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#changes-in-v2-5-8"},"Changes in v2.5.8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-5-8-features-for-all-registered-clusters"},"Features for All Registered Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-5-8-additional-features-for-registered-k3s-clusters"},"Additional Features for Registered K3s Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#additional-features-for-registered-eks-and-gke-clusters"},"Additional Features for Registered EKS and GKE Clusters"))),(0,i.kt)("h3",{id:"changes-in-v258"},"Changes in v2.5.8"),(0,i.kt)("p",null,"Greater management capabilities are now available for ",(0,i.kt)("a",{parentName:"p",href:"#additional-features-for-registered-eks-and-gke-clusters"},"registered GKE clusters.")," The same configuration options are available for registered GKE clusters as for the GKE clusters created through the Rancher UI."),(0,i.kt)("a",{id:"2-5-8-features-for-all-registered-clusters"}),"### Features for All Registered Clusters",(0,i.kt)("p",null,"After registering a cluster, the cluster owner can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Manage cluster access")," through role-based access control"),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/monitoring-and-alerting"},"monitoring, alerts and notifiers")),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/logging"},"logging")),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/istio"},"Istio")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"pipelines")),(0,i.kt)("li",{parentName:"ul"},"Manage projects and workloads")),(0,i.kt)("a",{id:"2-5-8-additional-features-for-registered-k3s-clusters"}),"### Additional Features for Registered K3s Clusters",(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s")," is a lightweight, fully compliant Kubernetes distribution."),(0,i.kt)("p",null,"When a K3s cluster is registered in Rancher, Rancher will recognize it as K3s. The Rancher UI will expose the features for ",(0,i.kt)("a",{parentName:"p",href:"#features-for-all-registered-clusters"},"all registered clusters,")," in addition to the following features for editing and upgrading the cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ability to ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"upgrade the K3s version")),(0,i.kt)("li",{parentName:"ul"},"The ability to configure the maximum number of nodes that will be upgraded concurrently"),(0,i.kt)("li",{parentName:"ul"},"The ability to see a read-only version of the K3s cluster's configuration arguments and environment variables used to launch each node in the cluster")),(0,i.kt)("h3",{id:"additional-features-for-registered-eks-and-gke-clusters"},"Additional Features for Registered EKS and GKE Clusters"),(0,i.kt)("p",null,"Registering an Amazon EKS cluster or GKE cluster allows Rancher to treat it as though it were created in Rancher."),(0,i.kt)("p",null,"Amazon EKS clusters and GKE clusters can now be registered in Rancher. For the most part, these registered clusters are treated the same way as clusters created in the Rancher UI, except for deletion."),(0,i.kt)("p",null,"When you delete an EKS cluster or GKE cluster that was created in Rancher, the cluster is destroyed. When you delete a cluster that was registered in Rancher, it is disconnected from the Rancher server, but it still exists and you can still access it in the same way you did before it was registered in Rancher."),(0,i.kt)("p",null,"The capabilities for registered clusters are listed in the table on ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"this page."))),(0,i.kt)(l.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#before-2-5-8-features-for-all-registered-clusters"},"Features for All Registered Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#before-2-5-8-additional-features-for-registered-k3s-clusters"},"Additional Features for Registered K3s Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#additional-features-for-registered-eks-clusters"},"Additional Features for Registered EKS Clusters"))),(0,i.kt)("a",{id:"before-2-5-8-features-for-all-registered-clusters"}),"### Features for All Registered Clusters",(0,i.kt)("p",null,"After registering a cluster, the cluster owner can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Manage cluster access")," through role-based access control"),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/monitoring-and-alerting"},"monitoring, alerts and notifiers")),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/logging"},"logging")),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/istio"},"Istio")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"pipelines")),(0,i.kt)("li",{parentName:"ul"},"Manage projects and workloads")),(0,i.kt)("a",{id:"before-2-5-8-additional-features-for-registered-k3s-clusters"}),"### Additional Features for Registered K3s Clusters",(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s")," is a lightweight, fully compliant Kubernetes distribution."),(0,i.kt)("p",null,"When a K3s cluster is registered in Rancher, Rancher will recognize it as K3s. The Rancher UI will expose the features for ",(0,i.kt)("a",{parentName:"p",href:"#features-for-all-registered-clusters"},"all registered clusters,")," in addition to the following features for editing and upgrading the cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ability to ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"upgrade the K3s version")),(0,i.kt)("li",{parentName:"ul"},"The ability to configure the maximum number of nodes that will be upgraded concurrently"),(0,i.kt)("li",{parentName:"ul"},"The ability to see a read-only version of the K3s cluster's configuration arguments and environment variables used to launch each node in the cluster")),(0,i.kt)("h3",{id:"additional-features-for-registered-eks-clusters"},"Additional Features for Registered EKS Clusters"),(0,i.kt)("p",null,"Registering an Amazon EKS cluster allows Rancher to treat it as though it were created in Rancher."),(0,i.kt)("p",null,"Amazon EKS clusters can now be registered in Rancher. For the most part, registered EKS clusters and EKS clusters created in Rancher are treated the same way in the Rancher UI, except for deletion."),(0,i.kt)("p",null,"When you delete an EKS cluster that was created in Rancher, the cluster is destroyed. When you delete an EKS cluster that was registered in Rancher, it is disconnected from the Rancher server, but it still exists and you can still access it in the same way you did before it was registered in Rancher."),(0,i.kt)("p",null,"The capabilities for registered EKS clusters are listed in the table on ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"this page.")))),(0,i.kt)("h1",{id:"configuring-k3s-cluster-upgrades"},"Configuring K3s Cluster Upgrades"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is a Kubernetes best practice to back up the cluster before upgrading. When upgrading a high-availability K3s cluster with an external database, back up the database in whichever way is recommended by the relational database provider.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"concurrency")," is the maximum number of nodes that are permitted to be unavailable during an upgrade. If number of unavailable nodes is larger than the ",(0,i.kt)("strong",{parentName:"p"},"concurrency,")," the upgrade will fail. If an upgrade fails, you may need to repair or remove failed nodes before the upgrade can succeed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controlplane concurrency:")," The maximum number of server nodes to upgrade at a single time; also the maximum unavailable server nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Worker concurrency:")," The maximum number worker nodes to upgrade at the same time; also the maximum unavailable worker nodes")),(0,i.kt)("p",null,"In the K3s documentation, controlplane nodes are called server nodes. These nodes run the Kubernetes master, which maintains the desired state of the cluster. In K3s, these controlplane nodes have the capability to have workloads scheduled to them by default."),(0,i.kt)("p",null,"Also in the K3s documentation, nodes with the worker role are called agent nodes. Any workloads or pods that are deployed in the cluster can be scheduled to these nodes by default."),(0,i.kt)("h1",{id:"debug-logging-and-troubleshooting-for-registered-k3s-clusters"},"Debug Logging and Troubleshooting for Registered K3s Clusters"),(0,i.kt)("p",null,"Nodes are upgraded by the system upgrade controller running in the downstream cluster. Based on the cluster configuration, Rancher deploys two ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller#example-upgrade-plan"},"plans")," to upgrade K3s nodes: one for controlplane nodes and one for workers. The system upgrade controller follows the plans and upgrades the nodes."),(0,i.kt)("p",null,"To enable debug logging on the system upgrade controller deployment, edit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/50a4c8975543d75f1d76a8290001d87dc298bdb4/manifests/system-upgrade-controller.yaml#L32"},"configmap")," to set the debug environment variable to true. Then restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," pod."),(0,i.kt)("p",null,"Logs created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," can be viewed by running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-system system-upgrade-controller\n")),(0,i.kt)("p",null,"The current status of the plans can be viewed with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get plans -A -o yaml\n")),(0,i.kt)("p",null,"If the cluster becomes stuck in upgrading, restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller"),"."),(0,i.kt)("p",null,"To prevent issues when upgrading, the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/"},"Kubernetes upgrade best practices")," should be followed."),(0,i.kt)("h1",{id:"annotating-registered-clusters"},"Annotating Registered Clusters"),(0,i.kt)("p",null,"For all types of registered Kubernetes clusters except for K3s Kubernetes clusters, Rancher doesn't have any information about how the cluster is provisioned or configured."),(0,i.kt)("p",null,"Therefore, when Rancher registers a cluster, it assumes that several capabilities are disabled by default. Rancher assumes this in order to avoid exposing UI options to the user even when the capabilities are not enabled in the registered cluster."),(0,i.kt)("p",null,"However, if the cluster has a certain capability, such as the ability to use a pod security policy, a user of that cluster might still want to select pod security policies for the cluster in the Rancher UI. In order to do that, the user will need to manually indicate to Rancher that pod security policies are enabled for the cluster."),(0,i.kt)("p",null,"By annotating a registered cluster, it is possible to indicate to Rancher that a cluster was given a pod security policy, or another capability, outside of Rancher."),(0,i.kt)("p",null,"This example annotation indicates that a pod security policy is enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"capabilities.cattle.io/pspEnabled": "true"\n')),(0,i.kt)("p",null,"The following annotation indicates Ingress capabilities. Note that that the values of non-primitive objects need to be JSON encoded, with quotations escaped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"capabilities.cattle.io/ingressCapabilities": "[\n  {\n    "customDefaultBackend":true,\n    "ingressProvider":"asdf"\n  }\n]"\n')),(0,i.kt)("p",null,"These capabilities can be annotated for the cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressCapabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadBalancerCapabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodePoolScalingSupported")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodePortRange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pspEnabled")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"taintSupport"))),(0,i.kt)("p",null,"All the capabilities and their type definitions can be viewed in the Rancher API view, at ",(0,i.kt)("inlineCode",{parentName:"p"},"[Rancher Server URL]/v3/schemas/capabilities"),"."),(0,i.kt)("p",null,"To annotate a registered cluster,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster view in Rancher and select ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,i.kt)("li",{parentName:"ol"},"Expand the ",(0,i.kt)("strong",{parentName:"li"},"Labels & Annotations")," section."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Annotation.")),(0,i.kt)("li",{parentName:"ol"},"Add an annotation to the cluster with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"capabilities/<capability>: <value>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the cluster capability that will be overridden by the annotation. In this scenario, Rancher is not aware of any capabilities of the cluster until you add the annotation."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The annotation does not give the capabilities to the cluster, but it does indicate to Rancher that the cluster has those capabilities."))}m.isMDXComponent=!0}}]);