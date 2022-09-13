"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78729],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(n),d=a,h=k["".concat(i,".").concat(d)]||k[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"Rollbacks",weight:3,aliases:["/rancher/v2.0-v2.4/en/upgrades/rollbacks","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/rollbacks","/rancher/v2.0-v2.4/en/upgrades/ha-server-rollbacks","/rancher/v2.0-v2.4/en/upgrades/rollbacks/ha-server-rollbacks","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/rollbacks/ha-server-rollbacks","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/rollbacks"]},i=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",id:"version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",title:"Rollbacks",description:"Rolling Back to Rancher v2.2-v2.4",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Rollbacks",weight:3,aliases:["/rancher/v2.0-v2.4/en/upgrades/rollbacks","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/rollbacks","/rancher/v2.0-v2.4/en/upgrades/ha-server-rollbacks","/rancher/v2.0-v2.4/en/upgrades/rollbacks/ha-server-rollbacks","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/rollbacks/ha-server-rollbacks","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/rollbacks"]},sidebar:"tutorialSidebar",previous:{title:"Install Rancher on a Kubernetes Cluster",permalink:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},next:{title:"Troubleshooting the Rancher Server Kubernetes Cluster",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"}},p={},u=[{value:"Rolling Back to Rancher v2.2-v2.4",id:"rolling-back-to-rancher-v22-v24",level:3},{value:"Rolling Back to v2.0.0-v2.1.5",id:"rolling-back-to-v200-v215",level:3}],k={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"rolling-back-to-rancher-v22-v24"},"Rolling Back to Rancher v2.2-v2.4"),(0,o.kt)("p",null,"For Rancher installed on Kubernetes, follow the procedure detailed here: ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"Restoring Backups for Kubernetes installs.")," Restoring a snapshot of the Rancher Server cluster will revert Rancher to the version and state at the time of the snapshot."),(0,o.kt)("p",null,"For information on how to roll back Rancher installed with Docker, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"},"this page.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Managed clusters are authoritative for their state. This means restoring the rancher server will not revert workload deployments or changes made on managed clusters after the snapshot was taken.")),(0,o.kt)("h3",{id:"rolling-back-to-v200-v215"},"Rolling Back to v2.0.0-v2.1.5"),(0,o.kt)("p",null,"If you are rolling back to versions in either of these scenarios, you must follow some extra instructions in order to get your clusters working."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rolling back from v2.1.6+ to any version between v2.1.0 - v2.1.5 or v2.0.0 - v2.0.10."),(0,o.kt)("li",{parentName:"ul"},"Rolling back from v2.0.11+ to any version between v2.0.0 - v2.0.10.")),(0,o.kt)("p",null,"Because of the changes necessary to address ",(0,o.kt)("a",{parentName:"p",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20321"},"CVE-2018-20321"),", special steps are necessary if the user wants to roll back to a previous version of Rancher where this vulnerability exists. The steps are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Record the ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceAccountToken")," for each cluster.  To do this, save the following script on a machine with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," access to the Rancher management plane and execute it.  You will need to run these commands on the machine where the rancher container is running. Ensure JQ is installed before running the command. The commands will vary depending on how you installed Rancher."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed with Docker")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker exec <NAME OF RANCHER CONTAINER> kubectl get clusters -o json | jq '[.items[] | select(any(.status.conditions[]; .type == \"ServiceAccountMigrated\")) | {name: .metadata.name, token: .status.serviceAccountToken}]' > tokens.json\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed on a Kubernetes Cluster")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl get clusters -o json | jq '[.items[] | select(any(.status.conditions[]; .type == \"ServiceAccountMigrated\")) | {name: .metadata.name, token: .status.serviceAccountToken}]' > tokens.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After executing the command a ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens.json")," file will be created.  Important! Back up this file in a safe place.",(0,o.kt)("strong",{parentName:"p"}," You will need it to restore functionality to your clusters after rolling back Rancher.  "),"If you lose this file, you may lose access to your clusters.**")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rollback Rancher following the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"normal instructions"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once Rancher comes back up, every cluster managed by Rancher (except for Imported clusters) will be in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Unavailable")," state.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the backed up tokens based on how you installed Rancher."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed with Docker")),(0,o.kt)("p",{parentName:"li"},"Save the following script as ",(0,o.kt)("inlineCode",{parentName:"p"},"apply_tokens.sh")," to the machine where the Rancher docker container is running. Also copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens.json")," file created previously to the same directory as the script."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'set -e\n\ntokens=$(jq .[] -c tokens.json)\nfor token in $tokens; do\n    name=$(echo $token | jq -r .name)\n    value=$(echo $token | jq -r .token)\n\n    docker exec $1 kubectl patch --type=merge clusters $name -p "{\\"status\\": {\\"serviceAccountToken\\": \\"$value\\"}}"\ndone\n')),(0,o.kt)("p",{parentName:"li"}," the script to allow execution (",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x apply_tokens.sh"),") and execute the script as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./apply_tokens.sh <DOCKER CONTAINER NAME>\n")),(0,o.kt)("p",{parentName:"li"},"After a few moments the clusters will go from Unavailable back to Available."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed on a Kubernetes Cluster")),(0,o.kt)("p",{parentName:"li"},"Save the following script as ",(0,o.kt)("inlineCode",{parentName:"p"},"apply_tokens.sh")," to a machine with kubectl access to the Rancher management plane. Also copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens.json")," file created previously to the same directory as the script."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'set -e\n\ntokens=$(jq .[] -c tokens.json)\nfor token in $tokens; do\n    name=$(echo $token | jq -r .name)\n    value=$(echo $token | jq -r .token)\n\n   kubectl patch --type=merge clusters $name -p "{\\"status\\": {\\"serviceAccountToken\\": \\"$value\\"}}"\ndone\n')),(0,o.kt)("p",{parentName:"li"},"Set the script to allow execution (",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x apply_tokens.sh"),") and execute the script as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./apply_tokens.sh\n")),(0,o.kt)("p",{parentName:"li"},"After a few moments the clusters will go from ",(0,o.kt)("inlineCode",{parentName:"p"},"Unavailable")," back to ",(0,o.kt)("inlineCode",{parentName:"p"},"Available"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue using Rancher as normal."))))}d.isMDXComponent=!0}}]);