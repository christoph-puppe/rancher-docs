"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57779],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),g=r,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||n;return a?s.createElement(m,o(o({ref:t},c),{},{components:a})):s.createElement(m,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<n;l++)o[l]=a[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37816:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var s=a(87462),r=a(63366),n=(a(67294),a(3905)),o=["components"],i={title:"How Persistent Storage Works",weight:1},u=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",title:"How Persistent Storage Works",description:"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"How Persistent Storage Works",weight:1},sidebar:"tutorialSidebar",previous:{title:"Manage Persistent Storage",permalink:"/pages-for-subheaders/manage-persistent-storage"},next:{title:"Setting up Existing Storage",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"}},c={},p=[{value:"PVCs are Required for Both New and Existing Persistent Storage",id:"pvcs-are-required-for-both-new-and-existing-persistent-storage",level:3},{value:"Binding PVs to PVCs",id:"binding-pvs-to-pvcs",level:3}],d={toc:p};function g(e){var t=e.components,i=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage."),(0,n.kt)("p",null,"There are two ways to use persistent storage in Kubernetes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use an existing persistent volume"),(0,n.kt)("li",{parentName:"ul"},"Dynamically provision new persistent volumes")),(0,n.kt)("p",null,"To use an existing PV, your application will need to use a PVC that is bound to a PV, and the PV should include the minimum resources that the PVC requires."),(0,n.kt)("p",null,"For dynamic storage provisioning, your application will need to use a PVC that is bound to a storage class. The storage class contains the authorization to provision new persistent volumes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Setting Up New and Existing Persistent Storage",src:a(57062).Z,width:"761",height:"706"})),(0,n.kt)("p",null,"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"official Kubernetes documentation on storage")),(0,n.kt)("p",null,"This section covers the following topics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#about-persistent-volume-claims"},"About persistent volume claims"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#pvcs-are-required-for-both-new-and-existing-persistent-storage"},"PVCs are required for both new and existing persistent storage")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setting-up-existing-storage-with-a-pvc-and-pv"},"Setting up existing storage with a PVC and PV")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#binding-pvs-to-pvcs"},"Binding PVs to PVCs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#provisioning-new-storage-with-a-pvc-and-storage-class"},"Provisioning new storage with a PVC and storage class"))),(0,n.kt)("h1",{id:"about-persistent-volume-claims"},"About Persistent Volume Claims"),(0,n.kt)("p",null,"Persistent volume claims (PVCs) are objects that request storage resources from your cluster. They're similar to a voucher that your deployment can redeem for storage access. A PVC is mounted into a workloads as a volume so that the workload can claim its specified share of the persistent storage."),(0,n.kt)("p",null,"To access persistent storage, a pod must have a PVC mounted as a volume. This PVC lets your deployment application store its data in an external location, so that if a pod fails, it can be replaced with a new pod and continue accessing its data stored externally, as though an outage never occurred."),(0,n.kt)("p",null,"Each Rancher project contains a list of PVCs that you've created, available from ",(0,n.kt)("strong",{parentName:"p"},"Resources > Workloads > Volumes"),". You can reuse these PVCs when creating deployments in the future."),(0,n.kt)("h3",{id:"pvcs-are-required-for-both-new-and-existing-persistent-storage"},"PVCs are Required for Both New and Existing Persistent Storage"),(0,n.kt)("p",null,"A PVC is required for pods to use any persistent storage, regardless of whether the workload is intended to use storage that already exists, or the workload will need to dynamically provision new storage on demand."),(0,n.kt)("p",null,"If you are setting up existing storage for a workload, the workload mounts a PVC, which refers to a PV, which corresponds to existing storage infrastructure."),(0,n.kt)("p",null,"If a workload should request new storage, the workload mounts PVC, which refers to a storage class, which has the capability to create a new PV along with its underlying storage infrastructure."),(0,n.kt)("p",null,"Rancher lets you create as many PVCs within a project as you'd like."),(0,n.kt)("p",null,"You can mount PVCs to a deployment as you create it, or later, after the deployment is running."),(0,n.kt)("h1",{id:"setting-up-existing-storage-with-a-pvc-and-pv"},"Setting up Existing Storage with a PVC and PV"),(0,n.kt)("p",null,"Your pods can store data in ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"volumes,")," but if the pod fails, that data is lost. To solve this issue, Kubernetes offers persistent volumes (PVs), which are Kubernetes resources that correspond to external storage disks or file systems that your pods can access. If a pod crashes, its replacement pod can access the data in persistent storage without any data loss."),(0,n.kt)("p",null,"PVs can represent a physical disk or file system that you host on premise, or a vendor-hosted storage resource, such as Amazon EBS or Azure Disk."),(0,n.kt)("p",null,"Creating a persistent volume in Rancher will not create a storage volume. It only creates a Kubernetes resource that maps to an existing volume. Therefore, before you can create a persistent volume as a Kubernetes resource, you must have storage provisioned."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"PVs are created at the cluster level, which means that in a multi-tenant cluster, teams with access to separate namespaces could have access to the same PV."))),(0,n.kt)("h3",{id:"binding-pvs-to-pvcs"},"Binding PVs to PVCs"),(0,n.kt)("p",null,"When pods are set up to use persistent storage, they mount a persistent volume claim (PVC) that is mounted the same way as any other Kubernetes volume. When each PVC is created, the Kubernetes master considers it to be a request for storage and binds it to a PV that matches the minimum resource requirements of the PVC. Not every PVC is guaranteed to be bound to a PV. According to the Kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"documentation,")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Claims will remain unbound indefinitely if a matching volume does not exist. Claims will be bound as matching volumes become available. For example, a cluster provisioned with many 50Gi PVs would not match a PVC requesting 100Gi. The PVC can be bound when a 100Gi PV is added to the cluster.")),(0,n.kt)("p",null,"In other words, you can create unlimited PVCs, but they will only be bound to PVs if the Kubernetes master can find a sufficient PV that has at least the amount of disk space required by the PVC."),(0,n.kt)("p",null,"To dynamically provision new storage, the PVC mounted in the pod would have to correspond to a storage class instead of a persistent volume."),(0,n.kt)("h1",{id:"provisioning-new-storage-with-a-pvc-and-storage-class"},"Provisioning New Storage with a PVC and Storage Class"),(0,n.kt)("p",null,"Storage Classes allow you to create PVs dynamically without having to create persistent storage in an infrastructure provider first."),(0,n.kt)("p",null,"For example, if a workload is bound to a PVC and the PVC refers to an Amazon EBS Storage Class, the storage class can dynamically create an EBS volume and a corresponding PV."),(0,n.kt)("p",null,"The Kubernetes master will then bind the newly created PV to your workload's PVC, allowing your workload to use the persistent storage."))}g.isMDXComponent=!0},57062:function(e,t,a){t.Z=a.p+"assets/images/rancher-storage-c61fd870410492e2f0ece6773fe72f59.svg"}}]);