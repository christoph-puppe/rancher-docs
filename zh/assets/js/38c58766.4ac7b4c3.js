"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<s;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),s=a(86010),l=a(72389),i=a(67392),o=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:m,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),R=(0,i.l)(f,((e,t)=>e.value===t.value));if(R.length>0)throw new Error(`Docusaurus error: Duplicate values "${R.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,o.U)(),[v,O]=(0,n.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=b[m];null!=e&&e!==v&&f.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,a=N.indexOf(t),r=f[a].value;r!==v&&(T(t),O(r),null!=m&&y(m,String(r)))},I=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>N.push(e),onKeyDown:I,onClick:C},l,{className:(0,s.Z)("tabs__item",c,l?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,n.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},55674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),s=a(65488),l=a(85162);const i={title:"Rendering the Helm Template in an Air Gapped Environment"},o=void 0,u={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",id:"version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",title:"Rendering the Helm Template in an Air Gapped Environment",description:"These instructions assume you have already followed the instructions for a Kubernetes upgrade on this page, including the prerequisites, up until step 3. Upgrade Rancher.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"2022\u5e7410\u670829\u65e5",frontMatter:{title:"Rendering the Helm Template in an Air Gapped Environment"},sidebar:"tutorialSidebar",previous:{title:"Upgrades",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},next:{title:"Installing Rancher on Amazon EKS",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"}},p={},c=[{value:"Rancher Helm Template Options",id:"rancher-helm-template-options",level:2},{value:"Option A: Default Self-signed Certificate",id:"option-a-default-self-signed-certificate",level:3},{value:"Option B: Certificates from Files using Kubernetes Secrets",id:"option-b-certificates-from-files-using-kubernetes-secrets",level:3},{value:"Apply the Rendered Templates",id:"apply-the-rendered-templates",level:2},{value:"Verify the Upgrade",id:"verify-the-upgrade",level:2},{value:"Known Upgrade Issues",id:"known-upgrade-issues",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These instructions assume you have already followed the instructions for a Kubernetes upgrade on ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"this page,")," including the prerequisites, up until step 3. Upgrade Rancher.")),(0,n.kt)("h2",{id:"rancher-helm-template-options"},"Rancher Helm Template Options"),(0,n.kt)("p",null,"Render the Rancher template using the same chosen options that were used when installing Rancher. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,n.kt)("p",null,"Based on the choice you made during installation, complete one of the procedures below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,n.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,n.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))),(0,n.kt)("h3",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-signed Certificate"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n"))),(0,n.kt)(l.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set certmanager.version=<CERTMANAGER_VERSION> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")))),(0,n.kt)("h3",{id:"option-b-certificates-from-files-using-kubernetes-secrets"},"Option B: Certificates from Files using Kubernetes Secrets"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,n.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,n.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,n.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n"))),(0,n.kt)(l.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,n.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,n.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,n.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set privateCA=true \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")))),(0,n.kt)("h2",{id:"apply-the-rendered-templates"},"Apply the Rendered Templates"),(0,n.kt)("p",null,"Copy the rendered manifest directories to a system with access to the Rancher server cluster and apply the rendered templates."),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply the rendered manifests."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system apply -R -f ./rancher\n")),(0,n.kt)("h2",{id:"verify-the-upgrade"},"Verify the Upgrade"),(0,n.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Having network issues following upgrade?")),(0,n.kt)("p",{parentName:"blockquote"},"See ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"Restoring Cluster Networking"),".")),(0,n.kt)("h2",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,n.kt)("p",null,"A list of known issues for each Rancher version can be found in the release notes on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))}m.isMDXComponent=!0}}]);