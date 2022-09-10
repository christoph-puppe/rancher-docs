"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47934],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),k=a,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),s=r(67392),l=r(7094),u=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,k=e.defaultValue,m=e.values,g=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===k?k:null!=(t=null!=k?k:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:f[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),C=y.tabGroupChoices,w=y.setTabGroupChoices,E=(0,a.useState)(b),G=E[0],K=E[1],T=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=C[g];null!=O&&O!==G&&v.some((function(e){return e.value===O}))&&K(O)}var P=function(e){var t=e.currentTarget,r=T.indexOf(t),n=v[r].value;n!==G&&(j(t),K(n),null!=g&&w(g,String(n)))},A=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=T.indexOf(e.currentTarget)+1;r=null!=(n=T[a])?n:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;r=null!=(o=T[i])?o:T[T.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:G===t?0:-1,"aria-selected":G===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":G===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===G}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==G})}))))}function k(e){var t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},49539:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(65488),s=r(85162),l=["components"],u={title:"Managing GKE Clusters",shortTitle:"Google Kubernetes Engine",weight:2105,aliases:["/rancher/v2.5/en/tasks/clusters/creating-a-cluster/create-cluster-gke/","/rancher/v2.5/en/cluster-provisioning/hosted-kubernetes-clusters/gke","/rancher/v2.x/en/cluster-provisioning/hosted-kubernetes-clusters/gke/"]},c=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",title:"Managing GKE Clusters",description:"- Prerequisites",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",tags:[],version:"2.5",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Managing GKE Clusters",shortTitle:"Google Kubernetes Engine",weight:2105,aliases:["/rancher/v2.5/en/tasks/clusters/creating-a-cluster/create-cluster-gke/","/rancher/v2.5/en/cluster-provisioning/hosted-kubernetes-clusters/gke","/rancher/v2.x/en/cluster-provisioning/hosted-kubernetes-clusters/gke/"]},sidebar:"tutorialSidebar",previous:{title:"Setting up Clusters from Hosted Kubernetes Providers",permalink:"/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},next:{title:"Creating an AKS Cluster",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"}},d={},k=[{value:"Service Account Token",id:"service-account-token",level:3},{value:"Google Project ID",id:"google-project-id",level:3},{value:"1. Create a Cloud Credential",id:"1-create-a-cloud-credential",level:3},{value:"2. Create the GKE Cluster",id:"2-create-the-gke-cluster",level:3},{value:"Service Account Token",id:"service-account-token-1",level:3}],m={toc:k};function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#provisioning-a-gke-cluster"},"Provisioning a GKE Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#private-clusters"},"Private Clusters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-reference"},"Configuration Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#updating-kubernetes-version"},"Updating Kubernetes Version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#syncing"},"Syncing"))),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Some setup in Google Kubernetes Engine is required."),(0,o.kt)("h3",{id:"service-account-token"},"Service Account Token"),(0,o.kt)("p",null,"Create a service account using ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts"},"Google Kubernetes Engine"),". GKE uses this account to operate your cluster. Creating this account also generates a private key used for authentication."),(0,o.kt)("p",null,"The service account requires the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compute Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/compute.viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes Engine Admin:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/container.admin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Account User:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountUser"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"Google Documentation: Creating and Enabling Service Accounts")),(0,o.kt)("p",null,"For help obtaining a private key for your service account, refer to the Google cloud documentation ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"here.")," You will need to save the key in JSON format."),(0,o.kt)("h3",{id:"google-project-id"},"Google Project ID"),(0,o.kt)("p",null,"Your cluster will need to be part of a Google Project."),(0,o.kt)("p",null,"To create a new project, refer to the Google cloud documentation ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project"},"here.")),(0,o.kt)("p",null,"To get the project ID of an existing project, refer to the Google cloud documentation ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects"},"here.")),(0,o.kt)("h1",{id:"provisioning-a-gke-cluster"},"Provisioning a GKE Cluster"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to GKE will incur charges.")),(0,o.kt)("h3",{id:"1-create-a-cloud-credential"},"1. Create a Cloud Credential"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper right corner, click the user profile dropdown menu and click ",(0,o.kt)("strong",{parentName:"li"},"Cloud Credentials.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Cloud Credential.")),(0,o.kt)("li",{parentName:"ol"},"Enter a name for your Google cloud credentials."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Cloud Credential Type")," field, select ",(0,o.kt)("strong",{parentName:"li"},"Google.")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Service Account")," text box, paste your service account private key JSON, or upload the JSON file."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have created credentials that Rancher will use to provision the new GKE cluster."),(0,o.kt)("h3",{id:"2-create-the-gke-cluster"},"2. Create the GKE Cluster"),(0,o.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"With a hosted Kubernetes provider,")," click ",(0,o.kt)("strong",{parentName:"li"},"Google GKE"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,o.kt)("li",{parentName:"ol"},"Optional: Use ",(0,o.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,o.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,o.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,o.kt)("li",{parentName:"ol"},"Optional: Add Kubernetes ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," or ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"annotations")," to the cluster."),(0,o.kt)("li",{parentName:"ol"},"Enter your Google project ID and your Google cloud credentials."),(0,o.kt)("li",{parentName:"ol"},"Fill out the rest of the form. For help, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/gke-cluster-configuration"},"GKE cluster configuration reference.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have successfully deployed a GKE cluster."),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,o.kt)("h1",{id:"private-clusters"},"Private Clusters"),(0,o.kt)("p",null,"Private GKE clusters are supported. Note: This advanced setup can require more steps during the cluster provisioning process. For details, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters"},"this section.")),(0,o.kt)("h1",{id:"configuration-reference"},"Configuration Reference"),(0,o.kt)("p",null,"For details on configuring GKE clusters in Rancher, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/gke-cluster-configuration"},"this page.")),(0,o.kt)("h1",{id:"updating-kubernetes-version"},"Updating Kubernetes Version"),(0,o.kt)("p",null,"The Kubernetes version of a cluster can be upgraded to any version available in the region or zone fo the GKE cluster. Upgrading the master Kubernetes version does not automatically upgrade worker nodes. Nodes can be upgraded independently."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nGKE has removed basic authentication in 1.19+. In order to upgrade a cluster to 1.19+, basic authentication must be disabled in the Google Cloud. Otherwise, an error will appear in Rancher when an upgrade to 1.19+ is attempted. You can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication#disabling_authentication_with_a_static_password"},"Google documentation"),". After this, the Kubernetes version can be updated to 1.19+ via Rancher.")),(0,o.kt)("h1",{id:"syncing"},"Syncing"),(0,o.kt)("p",null,"The GKE provisioner can synchronize the state of a GKE cluster between Rancher and the provider. For an in-depth technical explanation of how this works, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"Syncing.")),(0,o.kt)("p",null,"For information on configuring the refresh interval, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/gke-cluster-configuration#configuring-the-refresh-interval"},"this section."))),(0,o.kt)(s.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,o.kt)("h1",{id:"prerequisites-1"},"Prerequisites"),(0,o.kt)("p",null,"Some setup in Google Kubernetes Engine is required."),(0,o.kt)("h3",{id:"service-account-token-1"},"Service Account Token"),(0,o.kt)("p",null,"Create a service account using ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts"},"Google Kubernetes Engine"),". GKE uses this account to operate your cluster. Creating this account also generates a private key used for authentication."),(0,o.kt)("p",null,"The service account requires the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compute Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/compute.viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes Engine Admin:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/container.admin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Account User:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountUser"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"Google Documentation: Creating and Enabling Service Accounts")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to GKE will incur charges.")),(0,o.kt)("h1",{id:"create-the-gke-cluster"},"Create the GKE Cluster"),(0,o.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Google Kubernetes Engine"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,o.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,o.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Either paste your service account private key in the ",(0,o.kt)("strong",{parentName:"p"},"Service Account")," text box or ",(0,o.kt)("strong",{parentName:"p"},"Read from a file"),". Then click ",(0,o.kt)("strong",{parentName:"p"},"Next: Configure Nodes"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," After submitting your private key, you may have to enable the Google Kubernetes Engine API. If prompted, browse to the URL displayed in the Rancher UI to enable the API."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your cluster options, node options and security options. For help, refer to the ",(0,o.kt)("a",{parentName:"p",href:"#gke-before-v2-5-8"},"GKE Cluster Configuration Reference."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review your options to confirm they're correct. Then click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have successfully deployed a GKE cluster."),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))))}g.isMDXComponent=!0}}]);