"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99557],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Troubleshooting",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-rancher/troubleshooting","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-rancher/troubleshooting/"]},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting",title:"Troubleshooting",description:"Where is everything",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Troubleshooting",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-rancher/troubleshooting","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-rancher/troubleshooting/"]},sidebar:"tutorialSidebar",previous:{title:"Chart Options",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options"},next:{title:"RKE Add-On Install",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on"}},u={},d=[{value:"Where is everything",id:"where-is-everything",level:3},{value:"&quot;default backend - 404&quot;",id:"default-backend---404",level:3},{value:"Is Rancher Running",id:"is-rancher-running",level:3},{value:"Checking the rancher logs",id:"checking-the-rancher-logs",level:3},{value:"Cert CN is &quot;Kubernetes Ingress Controller Fake Certificate&quot;",id:"cert-cn-is-kubernetes-ingress-controller-fake-certificate",level:3},{value:"cert-manager issued certs (Rancher Generated or LetsEncrypt)",id:"cert-manager-issued-certs-rancher-generated-or-letsencrypt",level:4},{value:"Bring Your Own SSL Certs",id:"bring-your-own-ssl-certs",level:4},{value:"no matches for kind &quot;Issuer&quot;",id:"no-matches-for-kind-issuer",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"where-is-everything"},"Where is everything"),(0,s.kt)("p",null,"Most of the troubleshooting will be done on objects in these 3 namespaces."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system")," - ",(0,s.kt)("inlineCode",{parentName:"li"},"rancher")," deployment and pods."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ingress-nginx")," - Ingress controller pods and services."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kube-system")," - ",(0,s.kt)("inlineCode",{parentName:"li"},"tiller")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"cert-manager")," pods.")),(0,s.kt)("h3",{id:"default-backend---404"},'"default backend - 404"'),(0,s.kt)("p",null,"A number of things can cause the ingress-controller not to forward traffic to your rancher instance. Most of the time its due to a bad ssl configuration."),(0,s.kt)("p",null,"Things to check"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#is-rancher-running"},"Is Rancher Running")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#cert-cn-is-kubernetes-ingress-controller-fake-certificate"},'Cert CN is "Kubernetes Ingress Controller Fake Certificate"'))),(0,s.kt)("h3",{id:"is-rancher-running"},"Is Rancher Running"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to check the ",(0,s.kt)("inlineCode",{parentName:"p"},"cattle-system")," system namespace and see if the Rancher pods are in a Running state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods\n\nNAME                           READY     STATUS    RESTARTS   AGE\npod/rancher-784d94f59b-vgqzh   1/1       Running   0          10m\n")),(0,s.kt)("p",null,"If the state is not ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", run a ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," on the pod and check the Events."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kubectl -n cattle-system describe pod\n\n...\nEvents:\n  Type     Reason                 Age   From                Message\n  ----     ------                 ----  ----                -------\n  Normal   Scheduled              11m   default-scheduler   Successfully assigned rancher-784d94f59b-vgqzh to localhost\n  Normal   SuccessfulMountVolume  11m   kubelet, localhost  MountVolume.SetUp succeeded for volume "rancher-token-dj4mt"\n  Normal   Pulling                11m   kubelet, localhost  pulling image "rancher/rancher:v2.0.4"\n  Normal   Pulled                 11m   kubelet, localhost  Successfully pulled image "rancher/rancher:v2.0.4"\n  Normal   Created                11m   kubelet, localhost  Created container\n  Normal   Started                11m   kubelet, localhost  Started container\n')),(0,s.kt)("h3",{id:"checking-the-rancher-logs"},"Checking the rancher logs"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to list the pods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods\n\nNAME                           READY     STATUS    RESTARTS   AGE\npod/rancher-784d94f59b-vgqzh   1/1       Running   0          10m\n")),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," and the pod name to list the logs from the pod."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -f rancher-784d94f59b-vgqzh\n")),(0,s.kt)("h3",{id:"cert-cn-is-kubernetes-ingress-controller-fake-certificate"},'Cert CN is "Kubernetes Ingress Controller Fake Certificate"'),(0,s.kt)("p",null,'Use your browser to check the certificate details. If it says the Common Name is "Kubernetes Ingress Controller Fake Certificate", something may have gone wrong with reading or issuing your SSL cert.'),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," if you are using LetsEncrypt to issue certs it can sometimes take a few minuets to issue the cert.")),(0,s.kt)("h4",{id:"cert-manager-issued-certs-rancher-generated-or-letsencrypt"},"cert-manager issued certs (Rancher Generated or LetsEncrypt)"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager")," has 3 parts."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cert-manager")," pod in the ",(0,s.kt)("inlineCode",{parentName:"li"},"kube-system")," namespace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Issuer")," object in the ",(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system")," namespace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Certificate")," object in the ",(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system")," namespace.")),(0,s.kt)("p",null,"Work backwards and do a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl describe")," on each object and check the events. You can track down what might be missing."),(0,s.kt)("p",null,"For example there is a problem with the Issuer:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe certificate\n...\nEvents:\n  Type     Reason          Age                 From          Message\n  ----     ------          ----                ----          -------\n  Warning  IssuerNotReady  18s (x23 over 19m)  cert-manager  Issuer rancher not ready\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kubectl -n cattle-system describe issuer\n...\nEvents:\n  Type     Reason         Age                 From          Message\n  ----     ------         ----                ----          -------\n  Warning  ErrInitIssuer  19m (x12 over 19m)  cert-manager  Error initializing issuer: secret "tls-rancher" not found\n  Warning  ErrGetKeyPair  9m (x16 over 19m)   cert-manager  Error getting keypair for CA issuer: secret "tls-rancher" not found\n')),(0,s.kt)("h4",{id:"bring-your-own-ssl-certs"},"Bring Your Own SSL Certs"),(0,s.kt)("p",null,"Your certs get applied directly to the Ingress object in the ",(0,s.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,s.kt)("p",null,"Check the status of the Ingress object and see if its ready."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe ingress\n")),(0,s.kt)("p",null,"If its ready and the SSL is still not working you may have a malformed cert or secret."),(0,s.kt)("p",null,"Check the nginx-ingress-controller logs. Because the nginx-ingress-controller has multiple containers in its pod you will need to specify the name of the container."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs -f nginx-ingress-controller-rfjrq nginx-ingress-controller\n...\nW0705 23:04:58.240571       7 backend_ssl.go:49] error obtaining PEM from secret cattle-system/tls-rancher-ingress: error retrieving secret cattle-system/tls-rancher-ingress: secret cattle-system/tls-rancher-ingress was not found\n")),(0,s.kt)("h3",{id:"no-matches-for-kind-issuer"},'no matches for kind "Issuer"'),(0,s.kt)("p",null,"The SSL configuration option you have chosen requires cert-manager to be installed before installing Rancher or else the following error is shown:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Error: validation failed: unable to recognize "": no matches for kind "Issuer" in version "certmanager.k8s.io/v1alpha1"\n')),(0,s.kt)("p",null,"Install cert-manager and try installing Rancher again."))}h.isMDXComponent=!0}}]);