"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79224],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(t),p=a,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||s;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=h;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7136:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const s={title:"Tips for Running Rancher"},o=void 0,i={unversionedId:"reference-guides/best-practices/rancher-server/tips-for-running-rancher",id:"version-2.6/reference-guides/best-practices/rancher-server/tips-for-running-rancher",title:"Tips for Running Rancher",description:"This guide is geared toward use cases where Rancher is used to manage downstream Kubernetes clusters. The high-availability setup is intended to prevent losing access to downstream clusters if the Rancher server is not available.",source:"@site/versioned_docs/version-2.6/reference-guides/best-practices/rancher-server/tips-for-running-rancher.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/tips-for-running-rancher",permalink:"/v2.6/reference-guides/best-practices/rancher-server/tips-for-running-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/best-practices/rancher-server/tips-for-running-rancher.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Tips for Running Rancher"},sidebar:"tutorialSidebar",previous:{title:"Rancher Deployment Strategy",permalink:"/v2.6/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"},next:{title:"Best Practices for Rancher Managed Clusters",permalink:"/v2.6/pages-for-subheaders/rancher-managed-clusters"}},c={},l=[{value:"Run Rancher on a Separate Cluster",id:"run-rancher-on-a-separate-cluster",level:3},{value:"Make sure nodes are configured correctly for Kubernetes",id:"make-sure-nodes-are-configured-correctly-for-kubernetes",level:3},{value:"When using RKE: Back up the Statefile",id:"when-using-rke-back-up-the-statefile",level:3},{value:"Run All Nodes in the Cluster in the Same Datacenter",id:"run-all-nodes-in-the-cluster-in-the-same-datacenter",level:3},{value:"Development and Production Environments Should be Similar",id:"development-and-production-environments-should-be-similar",level:3},{value:"Monitor Your Clusters to Plan Capacity",id:"monitor-your-clusters-to-plan-capacity",level:3}],u={toc:l};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide is geared toward use cases where Rancher is used to manage downstream Kubernetes clusters. The high-availability setup is intended to prevent losing access to downstream clusters if the Rancher server is not available."),(0,a.kt)("p",null,'A high-availability Kubernetes installation, defined as an installation of Rancher on a Kubernetes cluster with at least three nodes, should be used in any production installation of Rancher, as well as any installation deemed "important." Multiple Rancher instances running on multiple nodes ensure high availability that cannot be accomplished with a single node environment.'),(0,a.kt)("p",null,"If you are installing Rancher in a vSphere environment, refer to the best practices documented ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},"here.")),(0,a.kt)("p",null,"When you set up your high-availability Rancher installation, consider the following:"),(0,a.kt)("h3",{id:"run-rancher-on-a-separate-cluster"},"Run Rancher on a Separate Cluster"),(0,a.kt)("p",null,"Don't run other workloads or microservices in the Kubernetes cluster that Rancher is installed on."),(0,a.kt)("h3",{id:"make-sure-nodes-are-configured-correctly-for-kubernetes"},"Make sure nodes are configured correctly for Kubernetes"),(0,a.kt)("p",null,"It's important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node, checking that all correct ports are opened, and deploying with ssd backed etcd. More details can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin"},"kubernetes docs")," and ",(0,a.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4/op-guide/performance/"},"etcd's performance op guide"),"."),(0,a.kt)("h3",{id:"when-using-rke-back-up-the-statefile"},"When using RKE: Back up the Statefile"),(0,a.kt)("p",null,"RKE keeps record of the cluster state in a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),". This file is important for the recovery of a cluster and/or the continued maintenance of the cluster through RKE. Because this file contains certificate material, we strongly recommend encrypting this file before backing up. After each run of ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," you should backup the state file."),(0,a.kt)("h3",{id:"run-all-nodes-in-the-cluster-in-the-same-datacenter"},"Run All Nodes in the Cluster in the Same Datacenter"),(0,a.kt)("p",null,"For best performance, run all three of your nodes in the same geographic datacenter. If you are running nodes in the cloud, such as AWS, run each node in a separate Availability Zone. For example, launch node 1 in us-west-2a, node 2 in us-west-2b, and node 3 in us-west-2c."),(0,a.kt)("h3",{id:"development-and-production-environments-should-be-similar"},"Development and Production Environments Should be Similar"),(0,a.kt)("p",null,'It\'s strongly recommended to have a "staging" or "pre-production" environment of the Kubernetes cluster that Rancher runs on. This environment should mirror your production environment as closely as possible in terms of software and hardware configuration.'),(0,a.kt)("h3",{id:"monitor-your-clusters-to-plan-capacity"},"Monitor Your Clusters to Plan Capacity"),(0,a.kt)("p",null,"The Rancher server's Kubernetes cluster should run within the ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/installation-requirements"},"system and hardware requirements")," as closely as possible. The more you deviate from the system and hardware requirements, the more risk you take."),(0,a.kt)("p",null,"However, metrics-driven capacity planning analysis should be the ultimate guidance for scaling Rancher, because the published requirements take into account a variety of workload types."),(0,a.kt)("p",null,"Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution, and Grafana, which lets you visualize the metrics from Prometheus."),(0,a.kt)("p",null,"After you ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/monitoring-and-alerting"},"enable monitoring")," in the cluster, you can set up alerts to let you know if your cluster is approaching its capacity. You can also use the Prometheus and Grafana monitoring framework to establish a baseline for key metrics as you scale."))}d.isMDXComponent=!0}}]);