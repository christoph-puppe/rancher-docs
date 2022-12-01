"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),p=a,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Set up Infrastructure for a High Availability RKE Kubernetes Cluster"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster",id:"version-2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster",title:"Set up Infrastructure for a High Availability RKE Kubernetes Cluster",description:"This tutorial is intended to help you create a high-availability RKE cluster that can be used to install a Rancher server.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster",permalink:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Set up Infrastructure for a High Availability RKE Kubernetes Cluster"},sidebar:"tutorialSidebar",previous:{title:"Set up Infrastructure for a High Availability K3s Kubernetes Cluster",permalink:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster"},next:{title:"Set up Infrastructure for a High Availability RKE2 Kubernetes Cluster",permalink:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke2-kubernetes-cluster"}},l={},u=[{value:"Why three nodes?",id:"why-three-nodes",level:3},{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes",level:3},{value:"2. Set up the Load Balancer",id:"2-set-up-the-load-balancer",level:3},{value:"3. Set up the DNS Record",id:"3-set-up-the-dns-record",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial is intended to help you create a high-availability RKE cluster that can be used to install a Rancher server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," These nodes must be in the same region. You may place these servers in separate availability zones (datacenter).")),(0,a.kt)("p",null,"To install the Rancher management server on a high-availability RKE cluster, we recommend setting up the following infrastructure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Three Linux nodes,")," typically virtual machines, in an infrastructure provider such as Amazon's EC2, Google Compute Engine, or vSphere."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A load balancer")," to direct front-end traffic to the three nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it.")),(0,a.kt)("p",null,"These nodes must be in the same region/data center. You may place these servers in separate availability zones."),(0,a.kt)("h3",{id:"why-three-nodes"},"Why three nodes?"),(0,a.kt)("p",null,"In an RKE cluster, Rancher server data is stored on etcd. This etcd database runs on all three nodes."),(0,a.kt)("p",null,"The etcd database requires an odd number of nodes so that it can always elect a leader with a majority of the etcd cluster. If the etcd database cannot elect a leader, etcd can suffer from ",(0,a.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-split-brain-in-distributed-systems"},"split brain"),", requiring the cluster to be restored from backup. If one of the three etcd nodes fails, the two remaining nodes can elect a leader because they have the majority of the total number of etcd nodes."),(0,a.kt)("h3",{id:"1-set-up-linux-nodes"},"1. Set up Linux Nodes"),(0,a.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,a.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,a.kt)("h3",{id:"2-set-up-the-load-balancer"},"2. Set up the Load Balancer"),(0,a.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on any of the three nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,a.kt)("p",null,"When Kubernetes gets set up in a later step, the RKE tool will deploy an NGINX Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,a.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the NGINX Ingress controller to listen for traffic destined for the Rancher hostname. The NGINX Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,a.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,a.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,a.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:"),"\nDo not use this load balancer (i.e, the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications.")),(0,a.kt)("h3",{id:"3-set-up-the-dns-record"},"3. Set up the DNS Record"),(0,a.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,a.kt)("p",null,"Depending on your environment, this may be an A record pointing to the LB IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,a.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,a.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")))}d.isMDXComponent=!0}}]);