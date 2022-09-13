"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58662],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Migrating Rancher to a New Cluster",weight:3},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",id:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",title:"Migrating Rancher to a New Cluster",description:"If you are migrating Rancher to a new Kubernetes cluster, you don't need to install Rancher on the new cluster first. If Rancher is restored to a new cluster with Rancher already installed, it can cause problems.",source:"@site/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",tags:[],version:"current",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Migrating Rancher to a New Cluster",weight:3},sidebar:"tutorialSidebar",previous:{title:"Restoring Rancher",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},next:{title:"Backing up Rancher Installed with Docker",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Install the rancher-backup Helm chart",id:"1-install-the-rancher-backup-helm-chart",level:3},{value:"2. Restore from backup using a Restore custom resource",id:"2-restore-from-backup-using-a-restore-custom-resource",level:3},{value:"3. Install cert-manager",id:"3-install-cert-manager",level:3},{value:"4. Bring up Rancher with Helm",id:"4-bring-up-rancher-with-helm",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are migrating Rancher to a new Kubernetes cluster, you don't need to install Rancher on the new cluster first. If Rancher is restored to a new cluster with Rancher already installed, it can cause problems."),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"These instructions assume you have ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"created a backup")," and you have already installed a new Kubernetes cluster where Rancher will be deployed."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is required to use the same hostname that was set as the server URL in the first cluster. If not done, downstream clusters will show as unavailable in the cluster management page of the UI, and you won't be able to click inside the cluster or on the cluster's ",(0,s.kt)("b",null,"Explore")," button."))),(0,s.kt)("p",null,"Rancher version must be v2.5.0 and up"),(0,s.kt)("p",null,"Rancher can be installed on any Kubernetes cluster, including hosted Kubernetes clusters such as Amazon EKS clusters. For help installing Kubernetes, refer to the documentation of the Kubernetes distribution. One of Rancher's Kubernetes distributions may also be used:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE Kubernetes installation docs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3s Kubernetes installation docs"))),(0,s.kt)("h3",{id:"1-install-the-rancher-backup-helm-chart"},"1. Install the rancher-backup Helm chart"),(0,s.kt)("p",null,"Install version 2.x.x of the rancher-backup chart. The following assumes a connected environment with access to DockerHub:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm repo add rancher-charts https://charts.rancher.io\nhelm repo update\nhelm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace --version $CHART_VERSION\nhelm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system --version $CHART_VERSION\n")),(0,s.kt)("br",null),"For an **air-gapped environment**, use the option below to pull the `backup-restore-operator` image from your private registry when installing the rancher-backup-crd helm chart. ``` --set image.repository $REGISTRY/rancher/backup-restore-operator ```",(0,s.kt)("h3",{id:"2-restore-from-backup-using-a-restore-custom-resource"},"2. Restore from backup using a Restore custom resource"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Kubernetes v1.22, available as an experimental feature of v2.6.3, does not support restoring from backup files containing CRDs with the apiVersion ",(0,s.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1beta1"),". In v1.22, the default ",(0,s.kt)("inlineCode",{parentName:"p"},"resourceSet")," in the rancher-backup app is updated to collect only CRDs that use ",(0,s.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1"),". There are currently two ways to work around this issue:"),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"Update the default ",(0,s.kt)("inlineCode",{parentName:"li"},"resourceSet")," to collect the CRDs with the apiVersion v1."),(0,s.kt)("li",{parentName:"ol"},"Update the default ",(0,s.kt)("inlineCode",{parentName:"li"},"resourceSet")," and the client to use the new APIs internally, with ",(0,s.kt)("inlineCode",{parentName:"li"},"apiextensions.k8s.io/v1")," as the replacement.")),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"Note that when making or restoring backups for v1.22, the Rancher version and the local cluster's Kubernetes version should be the same. The Kubernetes version should be considered when restoring a backup since the supported apiVersion in the cluster and in the backup file could be different.")))),(0,s.kt)("p",null,"If you are using an S3 store as the backup source and need to use your S3 credentials for restore, create a secret in this cluster using your S3 credentials. The Secret data must have two keys - ",(0,s.kt)("inlineCode",{parentName:"p"},"accessKey")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"secretKey")," - that contain the S3 credentials."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The values ",(0,s.kt)("inlineCode",{parentName:"p"},"accessKey")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"secretKey")," in the example below must be base64-encoded first when creating the object directly. If not encoded first, the pasted values will cause errors when you are attempting to backup or restore."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: s3-creds\ntype: Opaque\ndata:\n  accessKey: <Enter your base64-encoded access key>\n  secretKey: <Enter your base64-encoded secret key>\n")),(0,s.kt)("p",null,"This secret can be created in any namespace; with the above example, it will get created in the default namespace."),(0,s.kt)("p",null,"In the Restore custom resource, ",(0,s.kt)("inlineCode",{parentName:"p"},"prune")," must be set to false."),(0,s.kt)("p",null,"Create a Restore custom resource like the example below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# migrationResource.yaml\napiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  prune: false\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: backup-test\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The field ",(0,s.kt)("inlineCode",{parentName:"p"},"encryptionConfigSecretName")," must be set only if your backup was created with encryption enabled. Provide the name of the Secret containing the encryption config file. If you only have the encryption config file, but don't have a secret created with it in this cluster, use the following steps to create the secret:"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The encryption configuration file must be named ",(0,s.kt)("inlineCode",{parentName:"li"},"encryption-provider-config.yaml"),", and the ",(0,s.kt)("inlineCode",{parentName:"li"},"--from-file")," flag must be used to create this secret. So save your ",(0,s.kt)("inlineCode",{parentName:"li"},"EncryptionConfiguration")," in a file called ",(0,s.kt)("inlineCode",{parentName:"li"},"encryption-provider-config.yaml")," and run this command:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl create secret generic encryptionconfig \\\n  --from-file=./encryption-provider-config.yaml \\\n  -n cattle-resources-system\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Apply the manifest, and watch for the Restore resources status:"),(0,s.kt)("p",{parentName:"li"},"Apply the resource:"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl apply -f migrationResource.yaml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Watch the Restore status:\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl get restore\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Watch the restoration logs:\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-resources-system --tail 100 -f rancher-backup-xxx-xxx\n")),(0,s.kt)("p",null,"Once the Restore resource has the status ",(0,s.kt)("inlineCode",{parentName:"p"},"Completed"),", you can continue the Rancher installation."),(0,s.kt)("h3",{id:"3-install-cert-manager"},"3. Install cert-manager"),(0,s.kt)("p",null,"Follow the steps to ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-install-cert-manager"},"install cert-manager")," in the documentation about installing cert-manager on Kubernetes."),(0,s.kt)("h3",{id:"4-bring-up-rancher-with-helm"},"4. Bring up Rancher with Helm"),(0,s.kt)("p",null,"Use the same version of Helm to install Rancher, that was used on the first cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=<same hostname as the server URL from the first Rancher server> \\\n")))}h.isMDXComponent=!0}}]);