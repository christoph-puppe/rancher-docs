"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58959],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=a,f=h["".concat(u,".").concat(p)]||h[p]||d[p]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47903:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Authentication, Permissions and Global Configuration",weight:6},u=void 0,c={unversionedId:"pages-for-subheaders/authentication-permissions-and-global-configuration",id:"pages-for-subheaders/authentication-permissions-and-global-configuration",title:"Authentication, Permissions and Global Configuration",description:"After installation, the system administrator should configure Rancher to configure authentication, authorization, security, default settings, security policies, drivers and global DNS entries.",source:"@site/docs/pages-for-subheaders/authentication-permissions-and-global-configuration.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/authentication-permissions-and-global-configuration",permalink:"/pages-for-subheaders/authentication-permissions-and-global-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/authentication-permissions-and-global-configuration.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Authentication, Permissions and Global Configuration",weight:6},sidebar:"tutorialSidebar",previous:{title:"Advanced User Guides",permalink:"/pages-for-subheaders/advanced-user-guides"},next:{title:"Authentication",permalink:"/pages-for-subheaders/about-authentication"}},l={},d=[{value:"First Log In",id:"first-log-in",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Pod Security Policies",id:"pod-security-policies",level:2},{value:"Provisioning Drivers",id:"provisioning-drivers",level:2},{value:"Adding Kubernetes Versions into Rancher",id:"adding-kubernetes-versions-into-rancher",level:2},{value:"Enabling Experimental Features",id:"enabling-experimental-features",level:2}],h={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After installation, the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"system administrator")," should configure Rancher to configure authentication, authorization, security, default settings, security policies, drivers and global DNS entries."),(0,o.kt)("h2",{id:"first-log-in"},"First Log In"),(0,o.kt)("p",null,"After you log into Rancher for the first time, Rancher will prompt you for a ",(0,o.kt)("strong",{parentName:"p"},"Rancher Server URL"),".You should set the URL to the main entry point to the Rancher Server. When a load balancer sits in front a Rancher Server cluster, the URL should resolve to the load balancer. The system will automatically try to infer the Rancher Server URL from the IP address or host name of the host running the Rancher Server. This is only correct if you are running a single node Rancher Server installation. In most cases, therefore, you need to set the Rancher Server URL to the correct value yourself."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After you set the Rancher Server URL, we do not support updating it. Set the URL with extreme care."))),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"One of the key features that Rancher adds to Kubernetes is centralized user authentication. This feature allows to set up local users and/or connect to an external authentication provider. By connecting to an external authentication provider, you can leverage that provider's user and groups."),(0,o.kt)("p",null,"For more information how authentication works and how to configure each provider, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-authentication"},"Authentication"),"."),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Within Rancher, each person authenticates as a ",(0,o.kt)("em",{parentName:"p"},"user"),", which is a login that grants you access to Rancher. Once the user logs in to Rancher, their ",(0,o.kt)("em",{parentName:"p"},"authorization"),", or their access rights within the system, is determined by the user's role. Rancher provides built-in roles to allow you to easily configure a user's permissions to resources, but Rancher also provides the ability to customize the roles for each Kubernetes resource."),(0,o.kt)("p",null,"For more information how authorization works and how to customize roles, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/manage-role-based-access-control-rbac"},"Roles Based Access Control (RBAC)"),"."),(0,o.kt)("h2",{id:"pod-security-policies"},"Pod Security Policies"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pod Security Policies")," (or PSPs) are objects that control security-sensitive aspects of pod specification, e.g. root privileges. If a pod does not meet the conditions specified in the PSP, Kubernetes will not allow it to start, and Rancher will display an error message."),(0,o.kt)("p",null,"For more information how to create and use PSPs, see ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Pod Security Policies"),"."),(0,o.kt)("h2",{id:"provisioning-drivers"},"Provisioning Drivers"),(0,o.kt)("p",null,"Drivers in Rancher allow you to manage which providers can be used to provision ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes clusters")," or ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes in an infrastructure provider")," to allow Rancher to deploy and manage Kubernetes."),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-provisioning-drivers"},"Provisioning Drivers"),"."),(0,o.kt)("h2",{id:"adding-kubernetes-versions-into-rancher"},"Adding Kubernetes Versions into Rancher"),(0,o.kt)("p",null,"With this feature, you can upgrade to the latest version of Kubernetes as soon as it is released, without upgrading Rancher. This feature allows you to easily upgrade Kubernetes patch versions (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.15.X"),"), but not intended to upgrade Kubernetes minor versions (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.X.0"),") as Kubernetes tends to deprecate or add APIs between minor versions."),(0,o.kt)("p",null,"The information that Rancher uses to provision ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters")," is now located in the Rancher Kubernetes Metadata. For details on metadata configuration and how to change the Kubernetes version used for provisioning RKE clusters, see ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"},"Rancher Kubernetes Metadata.")),(0,o.kt)("p",null,"Rancher Kubernetes Metadata contains Kubernetes version information which Rancher uses to provision ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters"),"."),(0,o.kt)("p",null,"For more information on how metadata works and how to configure metadata config, see ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"},"Rancher Kubernetes Metadata"),"."),(0,o.kt)("h2",{id:"enabling-experimental-features"},"Enabling Experimental Features"),(0,o.kt)("p",null,"Rancher includes some features that are experimental and disabled by default. Feature flags were introduced to allow you to try these features. For more information, refer to the section about ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/enable-experimental-features"},"feature flags.")))}p.isMDXComponent=!0}}]);