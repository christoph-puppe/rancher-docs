"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6280\u672f"},i=void 0,o={unversionedId:"faq/technical-items",id:"faq/technical-items",title:"\u6280\u672f",description:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/technical-items.md",sourceDirName:"faq",slug:"/faq/technical-items",permalink:"/zh/faq/technical-items",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/technical-items.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u6280\u672f"},sidebar:"tutorialSidebar",previous:{title:"Dockershim",permalink:"/zh/faq/dockershim"},next:{title:"\u5b89\u5168",permalink:"/zh/faq/security"}},p={},c=[{value:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\uff1f",id:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801",level:3},{value:"\u6211\u5220\u9664/\u505c\u7528\u4e86\u6700\u540e\u4e00\u4e2a admin\uff0c\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u6211\u5220\u9664\u505c\u7528\u4e86\u6700\u540e\u4e00\u4e2a-admin\u8be5\u5982\u4f55\u89e3\u51b3",level:3},{value:"\u5982\u4f55\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u8bb0\u5f55\uff1f",id:"\u5982\u4f55\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u8bb0\u5f55",level:3},{value:"\u6211\u7684 ClusterIP \u4e0d\u54cd\u5e94 ping\uff0c\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u6211\u7684-clusterip-\u4e0d\u54cd\u5e94-ping\u8be5\u5982\u4f55\u89e3\u51b3",level:3},{value:"\u5728\u54ea\u91cc\u7ba1\u7406\u8282\u70b9\u6a21\u677f\uff1f",id:"\u5728\u54ea\u91cc\u7ba1\u7406\u8282\u70b9\u6a21\u677f",level:3},{value:"\u4e3a\u4ec0\u4e48\u6211\u7684\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5904\u4e8e <code>Pending</code> \u72b6\u6001\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5904\u4e8e-pending-\u72b6\u6001",level:3},{value:"Rancher \u7684\u72b6\u6001\u5b58\u50a8\u5728\u54ea\u91cc\uff1f",id:"rancher-\u7684\u72b6\u6001\u5b58\u50a8\u5728\u54ea\u91cc",level:3},{value:"\u652f\u6301\u7684 Docker \u7248\u672c\u662f\u5982\u4f55\u786e\u5b9a\u7684\uff1f",id:"\u652f\u6301\u7684-docker-\u7248\u672c\u662f\u5982\u4f55\u786e\u5b9a\u7684",level:3},{value:"\u5982\u4f55\u8bbf\u95ee Rancher \u521b\u5efa\u7684\u8282\u70b9\uff1f",id:"\u5982\u4f55\u8bbf\u95ee-rancher-\u521b\u5efa\u7684\u8282\u70b9",level:3},{value:"\u5982\u4f55\u5728 Rancher \u4e2d\u81ea\u52a8\u5316\u4efb\u52a1 X\uff1f",id:"\u5982\u4f55\u5728-rancher-\u4e2d\u81ea\u52a8\u5316\u4efb\u52a1-x",level:3},{value:"\u8282\u70b9\u7684 IP \u5730\u5740\u6539\u53d8\u4e86\uff0c\u8be5\u5982\u4f55\u6062\u590d\uff1f",id:"\u8282\u70b9\u7684-ip-\u5730\u5740\u6539\u53d8\u4e86\u8be5\u5982\u4f55\u6062\u590d",level:3},{value:"\u5982\u4f55\u5c06\u5176\u4ed6\u53c2\u6570/\u7ed1\u5b9a/\u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5230 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u7684 Kubernetes \u7ec4\u4ef6\u4e2d\uff1f",id:"\u5982\u4f55\u5c06\u5176\u4ed6\u53c2\u6570\u7ed1\u5b9a\u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5230-rancher-\u542f\u52a8\u7684-kubernetes-\u96c6\u7fa4\u7684-kubernetes-\u7ec4\u4ef6\u4e2d",level:3},{value:"\u5982\u4f55\u68c0\u67e5\u8bc1\u4e66\u94fe\u662f\u5426\u6709\u6548\uff1f",id:"\u5982\u4f55\u68c0\u67e5\u8bc1\u4e66\u94fe\u662f\u5426\u6709\u6548",level:3},{value:"\u5982\u4f55\u5728\u670d\u52a1\u5668\u8bc1\u4e66\u4e2d\u68c0\u67e5 <code>Common Name</code> \u548c <code>Subject Alternative Names</code>\uff1f",id:"\u5982\u4f55\u5728\u670d\u52a1\u5668\u8bc1\u4e66\u4e2d\u68c0\u67e5-common-name-\u548c-subject-alternative-names",level:3},{value:"\u4e3a\u4ec0\u4e48\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\u91cd\u65b0\u8c03\u5ea6\u4e00\u4e2a pod \u9700\u8981 5 \u5206\u949f\u4ee5\u4e0a\u7684\u65f6\u95f4\uff1f",id:"\u4e3a\u4ec0\u4e48\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\u91cd\u65b0\u8c03\u5ea6\u4e00\u4e2a-pod-\u9700\u8981-5-\u5206\u949f\u4ee5\u4e0a\u7684\u65f6\u95f4",level:3},{value:"\u6211\u53ef\u4ee5\u5728 UI \u4e2d\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e\u5417\uff1f",id:"\u6211\u53ef\u4ee5\u5728-ui-\u4e2d\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e\u5417",level:3}],u={toc:c};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801"},"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\uff1f"),(0,a.kt)("p",null,"Docker \u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,a.kt)("p",null,"Kubernetes \u5b89\u88c5\uff08Helm\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_cluster.yml\n$ kubectl --kubeconfig $KUBECONFIG -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,a.kt)("h3",{id:"\u6211\u5220\u9664\u505c\u7528\u4e86\u6700\u540e\u4e00\u4e2a-admin\u8be5\u5982\u4f55\u89e3\u51b3"},"\u6211\u5220\u9664/\u505c\u7528\u4e86\u6700\u540e\u4e00\u4e2a admin\uff0c\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"),(0,a.kt)("p",null,"Docker \u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> ensure-default-admin\nNew default administrator (user-xxxxx)\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,a.kt)("p",null,"Kubernetes \u5b89\u88c5\uff08Helm\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_cluster.yml\n$ kubectl --kubeconfig $KUBECONFIG -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher | grep '1/1' | head -1 | awk '{ print $1 }') -- ensure-default-admin\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,a.kt)("h3",{id:"\u5982\u4f55\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u8bb0\u5f55"},"\u5982\u4f55\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u8bb0\u5f55\uff1f"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/logging"},"\u6545\u969c\u6392\u9664\uff1a\u65e5\u5fd7\u8bb0\u5f55"),"\u3002"),(0,a.kt)("h3",{id:"\u6211\u7684-clusterip-\u4e0d\u54cd\u5e94-ping\u8be5\u5982\u4f55\u89e3\u51b3"},"\u6211\u7684 ClusterIP \u4e0d\u54cd\u5e94 ping\uff0c\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"),(0,a.kt)("p",null,"ClusterIP \u662f\u4e00\u4e2a\u865a\u62df IP\uff0c\u4e0d\u4f1a\u54cd\u5e94 ping\u3002\u8981\u6d4b\u8bd5 ClusterIP \u662f\u5426\u914d\u7f6e\u6b63\u786e\uff0c\u6700\u597d\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u8bbf\u95ee IP \u548c\u7aef\u53e3\u5e76\u68c0\u67e5\u5b83\u662f\u5426\u54cd\u5e94\u3002"),(0,a.kt)("h3",{id:"\u5728\u54ea\u91cc\u7ba1\u7406\u8282\u70b9\u6a21\u677f"},"\u5728\u54ea\u91cc\u7ba1\u7406\u8282\u70b9\u6a21\u677f\uff1f"),(0,a.kt)("p",null,"\u6253\u5f00\u4f60\u7684\u8d26\u53f7\u83dc\u5355\uff08\u53f3\u4e0a\u89d2\uff09\u5e76\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"\u8282\u70b9\u6a21\u677f"),"\u3002"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5904\u4e8e-pending-\u72b6\u6001"},"\u4e3a\u4ec0\u4e48\u6211\u7684\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"h3"},"Pending")," \u72b6\u6001\uff1f"),(0,a.kt)("p",null,"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u521b\u5efa\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"type: LoadBalancer"),"\u3002Kubernetes \u9700\u8981\u4e00\u4e2a\u53ef\u4ee5\u6ee1\u8db3\u8fd9\u4e9b\u8bf7\u6c42\u7684\u4e91\u63d0\u4f9b\u5546\u6216\u63a7\u5236\u5668\uff0c\u5426\u5219\u8fd9\u4e9b\u8bf7\u6c42\u5c06\u6c38\u8fdc\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Pending")," \u72b6\u6001\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/set-up-cloud-providers"},"\u4e91\u63d0\u4f9b\u5546"),"\u6216",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"\u521b\u5efa\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002"),(0,a.kt)("h3",{id:"rancher-\u7684\u72b6\u6001\u5b58\u50a8\u5728\u54ea\u91cc"},"Rancher \u7684\u72b6\u6001\u5b58\u50a8\u5728\u54ea\u91cc\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker \u5b89\u88c5\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher/rancher")," \u5bb9\u5668\u7684\u5d4c\u5165\u5f0f etcd \u4e2d\uff0c\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes install\uff1a\u5728\u4e3a\u8fd0\u884c Rancher \u800c\u521b\u5efa\u7684 RKE \u96c6\u7fa4\u7684 etcd \u4e2d\u3002")),(0,a.kt)("h3",{id:"\u652f\u6301\u7684-docker-\u7248\u672c\u662f\u5982\u4f55\u786e\u5b9a\u7684"},"\u652f\u6301\u7684 Docker \u7248\u672c\u662f\u5982\u4f55\u786e\u5b9a\u7684\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u9075\u5faa\u4e0a\u6e38 Kubernetes \u7248\u672c\u9a8c\u8bc1\u8fc7\u7684 Docker \u7248\u672c\u3002\u5982\u679c\u9700\u8981\u83b7\u53d6\u9a8c\u8bc1\u8fc7\u7684\u7248\u672c\uff0c\u8bf7\u67e5\u770b Kubernetes \u7248\u672c CHANGELOG.md \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.10.md#external-dependencies"},"External Dependencies"),"\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u8bbf\u95ee-rancher-\u521b\u5efa\u7684\u8282\u70b9"},"\u5982\u4f55\u8bbf\u95ee Rancher \u521b\u5efa\u7684\u8282\u70b9\uff1f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8f6c\u5230",(0,a.kt)("strong",{parentName:"p"},"\u8282\u70b9"),"\u89c6\u56fe\uff0c\u7136\u540e\u4e0b\u8f7d\u7528\u4e8e\u8bbf\u95ee Rancher \u521b\u5efa\u7684\u8282\u70b9\u7684 SSH \u5bc6\u94a5\u3002\u9009\u62e9\u8981\u8bbf\u95ee\u7684\u8282\u70b9\u5e76\u5355\u51fb\u884c\u5c3e ",(0,a.kt)("strong",{parentName:"p"},"\u22ee")," \u6309\u94ae\uff0c\u7136\u540e\u9009\u62e9",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u5bc6\u94a5"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e0b\u8f7d\u5bc6\u94a5",src:n(45171).Z,width:"442",height:"426"})),(0,a.kt)("p",null,"\u89e3\u538b\u7f29\u4e0b\u8f7d\u7684 zip \u6587\u4ef6\uff0c\u5e76\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"id_rsa")," \u6587\u4ef6\u8fde\u63a5\u5230\u4f60\u7684\u4e3b\u673a\u3002\u8bf7\u52a1\u5fc5\u4f7f\u7528\u6b63\u786e\u7684\u7528\u6237\u540d\uff08\u5982\u679c\u662f RancherOS\uff0c\u5219\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\uff1b\u5982\u679c\u662f Ubuntu\uff0c\u5219\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu"),"\uff1b\u5982\u679c\u662f Amazon Linux\uff0c\u5219\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ec2-user"),"\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ssh -i id_rsa user@ip_of_node\n")),(0,a.kt)("h3",{id:"\u5982\u4f55\u5728-rancher-\u4e2d\u81ea\u52a8\u5316\u4efb\u52a1-x"},"\u5982\u4f55\u5728 Rancher \u4e2d\u81ea\u52a8\u5316\u4efb\u52a1 X\uff1f"),(0,a.kt)("p",null,"UI \u7531\u9759\u6001\u6587\u4ef6\u7ec4\u6210\uff0c\u5e76\u6839\u636e API \u7684\u54cd\u5e94\u5de5\u4f5c\u3002\u6362\u8a00\u4e4b\uff0cUI \u4e2d\u53ef\u4ee5\u6267\u884c\u7684\u6bcf\u4e2a\u64cd\u4f5c/\u4efb\u52a1\u90fd\u53ef\u4ee5\u901a\u8fc7 API \u8fdb\u884c\u81ea\u52a8\u5316\u3002\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"li"},"https://your_rancher_ip/v3")," \u5e76\u6d4f\u89c8 API \u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528 UI \u65f6\u6355\u83b7 API \u8c03\u7528\uff08\u901a\u5e38\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/#network"},"Chrome \u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5de5\u5177\uff09\u3002")),(0,a.kt)("h3",{id:"\u8282\u70b9\u7684-ip-\u5730\u5740\u6539\u53d8\u4e86\u8be5\u5982\u4f55\u6062\u590d"},"\u8282\u70b9\u7684 IP \u5730\u5740\u6539\u53d8\u4e86\uff0c\u8be5\u5982\u4f55\u6062\u590d\uff1f"),(0,a.kt)("p",null,"\u8282\u70b9\u9700\u8981\u914d\u7f6e\u9759\u6001 IP\uff08\u6216\u4f7f\u7528 DHCP \u4fdd\u7559\u7684 IP\uff09\u3002\u5982\u679c\u8282\u70b9\u7684 IP \u5df2\u66f4\u6539\uff0c\u4f60\u5fc5\u987b\u5728\u96c6\u7fa4\u4e2d\u5220\u9664\u5e76\u91cd\u65b0\u6dfb\u52a0\u5b83\u3002\u5220\u9664\u540e\uff0cRancher \u4f1a\u5c06\u96c6\u7fa4\u66f4\u65b0\u4e3a\u6b63\u786e\u7684\u72b6\u6001\u3002\u5982\u679c\u96c6\u7fa4\u4e0d\u518d\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Provisioning")," \u72b6\u6001\uff0c\u5219\u5df2\u4ece\u96c6\u7fa4\u5220\u9664\u8be5\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u8282\u70b9\u7684 IP \u5730\u5740\u53d1\u751f\u53d8\u5316\u65f6\uff0cRancher \u4f1a\u5931\u53bb\u4e0e\u8282\u70b9\u7684\u8fde\u63a5\uff0c\u56e0\u6b64\u65e0\u6cd5\u6b63\u5e38\u6e05\u7406\u8282\u70b9\u3002\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes"},"\u6e05\u7406\u96c6\u7fa4\u8282\u70b9"),"\u6765\u6e05\u7406\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u79fb\u9664\u5e76\u6e05\u7406\u8282\u70b9\u65f6\uff0c\u4f60\u53ef\u4ee5\u5c06\u8282\u70b9\u91cd\u65b0\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5c06\u5176\u4ed6\u53c2\u6570\u7ed1\u5b9a\u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5230-rancher-\u542f\u52a8\u7684-kubernetes-\u96c6\u7fa4\u7684-kubernetes-\u7ec4\u4ef6\u4e2d"},"\u5982\u4f55\u5c06\u5176\u4ed6\u53c2\u6570/\u7ed1\u5b9a/\u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5230 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u7684 Kubernetes \u7ec4\u4ef6\u4e2d\uff1f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u96c6\u7fa4\u9009\u9879\u4e2d\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u914d\u7f6e\u6587\u4ef6"),"\u9009\u9879\u6765\u6dfb\u52a0\u5176\u4ed6\u53c2\u6570/\u200b\u200b\u7ed1\u5b9a/\u73af\u5883\u53d8\u91cf\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 RKE \u6587\u6863\u4e2d\u7684",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/services-extras/"},"\u5176\u4ed6\u53c2\u6570\u3001\u7ed1\u5b9a\u548c\u73af\u5883\u53d8\u91cf"),"\uff0c\u6216\u6d4f\u89c8 ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"Cluster.ymls \u793a\u4f8b"),"\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u68c0\u67e5\u8bc1\u4e66\u94fe\u662f\u5426\u6709\u6548"},"\u5982\u4f55\u68c0\u67e5\u8bc1\u4e66\u94fe\u662f\u5426\u6709\u6548\uff1f"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl verify")," \u547d\u4ee4\u6765\u9a8c\u8bc1\u4f60\u7684\u8bc1\u4e66\u94fe\uff1a"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSL_CERT_DIR")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SSL_CERT_FILE")," \u914d\u7f6e\u5230\u865a\u62df\u4f4d\u7f6e\uff0c\u4ece\u800c\u786e\u4fdd\u5728\u624b\u52a8\u9a8c\u8bc1\u65f6\u4e0d\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u7684\u8bc1\u4e66\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SSL_CERT_DIR=/dummy SSL_CERT_FILE=/dummy openssl verify -CAfile ca.pem rancher.yourdomain.com.pem\nrancher.yourdomain.com.pem: OK\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"unable to get local issuer certificate")," \u9519\u8bef\uff0c\u5219\u8868\u793a\u94fe\u4e0d\u5b8c\u6574\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd9\u8868\u793a\u4f60\u7684\u670d\u52a1\u5668\u8bc1\u4e66\u7531\u4e2d\u95f4 CA \u9881\u53d1\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u62e5\u6709\u6b64\u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u5728\u8bc1\u4e66\u7684\u9a8c\u8bc1\u4e2d\u4f7f\u7528\u5b83\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SSL_CERT_DIR=/dummy SSL_CERT_FILE=/dummy openssl verify -CAfile ca.pem -untrusted intermediate.pem rancher.yourdomain.com.pem\nrancher.yourdomain.com.pem: OK\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u6210\u529f\u9a8c\u8bc1\u8bc1\u4e66\u94fe\uff0c\u4f60\u9700\u8981\u5728\u670d\u52a1\u5668\u8bc1\u4e66\u4e2d\u5305\u542b\u6240\u9700\u7684\u4e2d\u95f4 CA \u8bc1\u4e66\uff0c\u4ece\u800c\u5b8c\u6210\u4e0e Rancher \u8fde\u63a5\u7684\u8bc1\u4e66\u94fe\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 Rancher Agent\uff09\u3002\u670d\u52a1\u5668\u8bc1\u4e66\u6587\u4ef6\u4e2d\u8bc1\u4e66\u7684\u987a\u5e8f\u9996\u5148\u662f\u670d\u52a1\u5668\u8bc1\u4e66\u672c\u8eab\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"rancher.yourdomain.com.pem")," \u7684\u5185\u5bb9\uff09\uff0c\u7136\u540e\u662f\u4e2d\u95f4 CA \u8bc1\u4e66\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"intermediate.pem")," \u7684\u5185\u5bb9\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n%YOUR_CERTIFICATE%\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\n%YOUR_INTERMEDIATE_CERTIFICATE%\n-----END CERTIFICATE-----\n")),(0,a.kt)("p",null,"\u5982\u679c\u5728\u9a8c\u8bc1\u8fc7\u7a0b\u4e2d\u4ecd\u7136\u51fa\u73b0\u9519\u8bef\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u68c0\u7d22\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u4e3b\u9898\u548c\u9881\u53d1\u8005\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl x509 -noout -subject -issuer -in rancher.yourdomain.com.pem\nsubject= /C=GB/ST=England/O=Alice Ltd/CN=rancher.yourdomain.com\nissuer= /C=GB/ST=England/O=Alice Ltd/CN=Alice Intermediate CA\n")),(0,a.kt)("h3",{id:"\u5982\u4f55\u5728\u670d\u52a1\u5668\u8bc1\u4e66\u4e2d\u68c0\u67e5-common-name-\u548c-subject-alternative-names"},"\u5982\u4f55\u5728\u670d\u52a1\u5668\u8bc1\u4e66\u4e2d\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Common Name")," \u548c ",(0,a.kt)("inlineCode",{parentName:"h3"},"Subject Alternative Names"),"\uff1f"),(0,a.kt)("p",null,"\u867d\u7136\u6280\u672f\u4e0a\u4ec5\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," \u4e2d\u6709\u4e00\u4e2a\u6761\u76ee\uff0c\u4f46\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Common Name")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," \u4e2d\u90fd\u5305\u542b\u4e3b\u673a\u540d\u53ef\u4ee5\u6700\u5927\u7a0b\u5ea6\u5730\u63d0\u9ad8\u4e0e\u65e7\u7248\u6d4f\u89c8\u5668/\u5e94\u7528\u7a0b\u5e8f\u7684\u517c\u5bb9\u6027\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Common Name"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl x509 -noout -subject -in cert.pem\nsubject= /CN=rancher.my.org\n")),(0,a.kt)("p",null,"\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl x509 -noout -in cert.pem -text | grep DNS\n                DNS:rancher.my.org\n")),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\u91cd\u65b0\u8c03\u5ea6\u4e00\u4e2a-pod-\u9700\u8981-5-\u5206\u949f\u4ee5\u4e0a\u7684\u65f6\u95f4"},"\u4e3a\u4ec0\u4e48\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\u91cd\u65b0\u8c03\u5ea6\u4e00\u4e2a pod \u9700\u8981 5 \u5206\u949f\u4ee5\u4e0a\u7684\u65f6\u95f4\uff1f"),(0,a.kt)("p",null,"\u8fd9\u662f\u4ee5\u4e0b\u9ed8\u8ba4 Kubernetes \u8bbe\u7f6e\u7684\u7ec4\u5408\u5bfc\u81f4\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubelet",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node-status-update-frequency"),"\uff1a\u6307\u5b9a kubelet \u5c06\u8282\u70b9\u72b6\u6001\u53d1\u5e03\u5230 master \u7684\u9891\u7387\uff08\u9ed8\u8ba4 10s\uff09\u3002"))),(0,a.kt)("li",{parentName:"ul"},"kube-controller-manager",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node-monitor-period"),"\uff1a\u5728 NodeController \u4e2d\u540c\u6b65 NodeStatus \u7684\u5468\u671f\uff08\u9ed8\u8ba4 5s\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node-monitor-grace-period"),"\uff1a\u5728\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u4e0d\u5065\u5eb7\u4e4b\u524d\uff0c\u5141\u8bb8\u8282\u70b9\u65e0\u54cd\u5e94\u7684\u65f6\u95f4\u957f\u5ea6\uff08\u9ed8\u8ba4 40s\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pod-eviction-timeout"),"\uff1a\u5728\u6545\u969c\u8282\u70b9\u4e0a\u5220\u9664 pod \u7684\u5bbd\u9650\u671f\uff08\u9ed8\u8ba4 5m0s\uff09\u3002")))),(0,a.kt)("p",null,"\u6709\u5173\u8fd9\u4e9b\u8bbe\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes\uff1akubelet")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"Kubernetes\uff1akube-controller-manager"),"\u3002"),(0,a.kt)("p",null,"Kubernetes 1.13 \u9ed8\u8ba4\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"TaintBasedEvictions")," \u529f\u80fd\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#taint-based-evictions"},"Kubernetes\uff1a\u57fa\u4e8e\u6c61\u70b9\u7684\u9a71\u9010"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kube-apiserver\uff08Kubernetes 1.13 \u53ca\u66f4\u9ad8\u7248\u672c\uff09",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default-not-ready-toleration-seconds"),"\uff1a\u8868\u793a ",(0,a.kt)("inlineCode",{parentName:"li"},"notReady:NoExecute")," \u7684\u5bb9\u5fcd\u5ea6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"tolerationSeconds"),"\uff0c\u8be5\u8bbe\u7f6e\u9ed8\u8ba4\u6dfb\u52a0\u5230\u8fd8\u6ca1\u6709\u8be5\u5bb9\u5fcd\u5ea6\u7684 pod\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default-unreachable-toleration-seconds"),"\uff1a\u8868\u793a ",(0,a.kt)("inlineCode",{parentName:"li"},"unreachable:NoExecute")," \u7684\u5bb9\u5fcd\u5ea6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"tolerationSeconds"),"\uff0c\u8be5\u8bbe\u7f6e\u9ed8\u8ba4\u6dfb\u52a0\u5230\u8fd8\u6ca1\u6709\u8be5\u5bb9\u5fcd\u5ea6\u7684 pod\u3002")))),(0,a.kt)("h3",{id:"\u6211\u53ef\u4ee5\u5728-ui-\u4e2d\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e\u5417"},"\u6211\u53ef\u4ee5\u5728 UI \u4e2d\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e\u5417\uff1f"),(0,a.kt)("p",null,"\u662f\u7684\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e\u8bbf\u95ee UI \u7684\u5927\u90e8\u5206\u5185\u5bb9\u3002\u8981\u67e5\u770b\u5feb\u6377\u65b9\u5f0f\u7684\u6982\u89c8\uff0c\u8bf7\u5728 UI \u4efb\u610f\u4f4d\u7f6e\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),"\u3002"))}s.isMDXComponent=!0},45171:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/downloadsshkeys-617979ebc3df306cf60b60325923b283.png"}}]);