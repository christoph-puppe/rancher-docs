"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88768],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),d=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(f,o(o({ref:e},p),{},{components:n})):a.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56392:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Nutanix Node Template Configuration",weight:2},c=void 0,d={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",title:"Nutanix Node Template Configuration",description:"- Account Access",source:"@site/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Nutanix Node Template Configuration",weight:2},sidebar:"tutorialSidebar",previous:{title:"VSphere Node Template Configuration",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},next:{title:"Machine Configuration",permalink:"/pages-for-subheaders/machine-configuration"}},p={},s=[],u={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#account-access"},"Account Access")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#scheduling"},"Scheduling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#instance-options"},"Instance Options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#networks"},"Networks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#vm-categories"},"VM Categories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cloud-init"},"cloud-init"))),(0,i.kt)("h1",{id:"account-access"},"Account Access"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Management Endpoint"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Hostname/IP address of Prism Central"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Username of the Prism Central user"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Password of the Prism Central user"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Allow insecure communication"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set to true to allow insecure SSL communication to Prism Central"),(0,i.kt)("td",{parentName:"tr",align:"left"},"False")))),(0,i.kt)("h1",{id:"scheduling"},"Scheduling"),(0,i.kt)("p",null,"Choose what Nutanix cluster the virtual machine will be scheduled to. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Cluster"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the Nutanix cluster where the VM should be deployed (case sensitive)")))),(0,i.kt)("h1",{id:"instance-options"},"Instance Options"),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Instance Options")," section, configure the number of vCPUs, memory, and disk size for the VMs created by this template."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CPUs"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of vCPUs allocated to the VM (cores)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of RAM allocated to the VM (MB)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Template Image"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the Disk Image template to clone as the VM's primary disk (must support cloud-init)"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"VM Disk Size"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"New size of the VM's primary disk (in GiB)"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional Disk Size"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Size of an additional disk to add to the VM (in GiB)"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage Container"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage container ",(0,i.kt)("em",{parentName:"td"},"UUID")," in which to provision an additional disk"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Cloud Config YAML"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cloud-init to provide to the VM (will be patched with Rancher root user)"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Network"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name(s) of the network(s) to attach to the VM"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"VM Categories"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name(s) of any categories to be applied to the VM"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,"The VM may use any modern Linux operating system that is configured with support for ",(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"cloud-init")," using the ",(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html"},"Config Drive v2 datasource"),"."),(0,i.kt)("h1",{id:"networks"},"Networks"),(0,i.kt)("p",null,"The node template allows a VM to be provisioned with multiple networks. In the ",(0,i.kt)("strong",{parentName:"p"},"Network")," field, you can click ",(0,i.kt)("strong",{parentName:"p"},"Add")," to add any networks available to you in AOS."),(0,i.kt)("h1",{id:"vm-categories"},"VM Categories"),(0,i.kt)("p",null,"A category is a grouping of entities into a key value pair. Typically, VMs are assigned to a category based on some criteria. Policies can then be tied to those entities that are assigned (grouped by) a specific category value."),(0,i.kt)("h1",{id:"cloud-init"},"cloud-init"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," allows you to initialize your nodes by applying configuration on the first boot. This may involve things such as creating users or authorizing SSH keys."),(0,i.kt)("p",null,"To make use of cloud-init initialization, paste a cloud config using valid YAML syntax into the ",(0,i.kt)("strong",{parentName:"p"},"Cloud Config YAML")," field. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"},"cloud-init documentation")," for a commented set of examples of supported cloud config directives."),(0,i.kt)("p",null,"Note that cloud-init based network configuration is not recommended and only supported via user data ",(0,i.kt)("inlineCode",{parentName:"p"},"runcmd")," rather than by NoCloud or other network configuration datasources. "),(0,i.kt)("p",null,"Nutanix IP Address Management (IPAM) or another DHCP service is recommended."))}m.isMDXComponent=!0}}]);