"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30951],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"EC2 Machine Configuration Reference",weight:2},c=void 0,u={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",title:"EC2 Machine Configuration Reference",description:"For more details about EC2 nodes, refer to the official documentation for the EC2 Management Console.",source:"@site/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"EC2 Machine Configuration Reference",weight:2},sidebar:"tutorialSidebar",previous:{title:"Machine Configuration",permalink:"/pages-for-subheaders/machine-configuration"},next:{title:"DigitalOcean Machine Configuration",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean"}},l={},d=[{value:"Region",id:"region",level:3},{value:"Zone",id:"zone",level:3},{value:"Instance Type",id:"instance-type",level:3},{value:"Root Disk Size",id:"root-disk-size",level:3},{value:"VPC/Subnet",id:"vpcsubnet",level:3},{value:"IAM Instance Profile Name",id:"iam-instance-profile-name",level:3},{value:"Advanced Options",id:"advanced-options",level:2},{value:"AMI ID",id:"ami-id",level:3},{value:"SSH Username for AMI",id:"ssh-username-for-ami",level:3},{value:"Security Group",id:"security-group",level:3},{value:"EBS Root Volume Type",id:"ebs-root-volume-type",level:3},{value:"Encrypt EBS Volume",id:"encrypt-ebs-volume",level:3},{value:"Request Spot Instance",id:"request-spot-instance",level:3},{value:"Use only private address",id:"use-only-private-address",level:3},{value:"EBS-Optimized Instance",id:"ebs-optimized-instance",level:3},{value:"Allow access to EC2 metadata",id:"allow-access-to-ec2-metadata",level:3},{value:"Use tokens for metadata",id:"use-tokens-for-metadata",level:3},{value:"Add Tag",id:"add-tag",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For more details about EC2 nodes, refer to the official documentation for the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},"EC2 Management Console"),"."),(0,o.kt)("h3",{id:"region"},"Region"),(0,o.kt)("p",null,"The geographical ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},"region")," in which to build your cluster."),(0,o.kt)("h3",{id:"zone"},"Zone"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones"},"zone"),", an isolated location within a region to build your cluster"),(0,o.kt)("h3",{id:"instance-type"},"Instance Type"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html"},"instance type"),", which determines the hardware characteristics, used to provision your cluster."),(0,o.kt)("h3",{id:"root-disk-size"},"Root Disk Size"),(0,o.kt)("p",null,"Configure the size (in GB) for your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/RootDeviceStorage.html"},"root device"),"."),(0,o.kt)("h3",{id:"vpcsubnet"},"VPC/Subnet"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html"},"VPC")," or specific ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html"},"subnet"),", an IP range in your VPC, to add your resources to."),(0,o.kt)("h3",{id:"iam-instance-profile-name"},"IAM Instance Profile Name"),(0,o.kt)("p",null,"The name of the ","[instance profile]"," used to pass an IAM role to an EC2 instance."),(0,o.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("h3",{id:"ami-id"},"AMI ID"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"},"Amazon Machine Image")," used for the nodes in your cluster."),(0,o.kt)("h3",{id:"ssh-username-for-ami"},"SSH Username for AMI"),(0,o.kt)("p",null,"The username for connecting to your launched instances. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html"},"here")," for the default usernames to selected AMIs. For AMIs not listed, check with the AMI provider."),(0,o.kt)("h3",{id:"security-group"},"Security Group"),(0,o.kt)("p",null,"Choose the default security group or configure a security group."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-security-group"},"Amazon EC2 security group when using Node Driver")," to see what rules are created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," Security Group."),(0,o.kt)("h3",{id:"ebs-root-volume-type"},"EBS Root Volume Type"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html"},"EBS volume type")," to use for the root device."),(0,o.kt)("h3",{id:"encrypt-ebs-volume"},"Encrypt EBS Volume"),(0,o.kt)("p",null,"Enable ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html"},"Amazon EBS Encryption"),"."),(0,o.kt)("h3",{id:"request-spot-instance"},"Request Spot Instance"),(0,o.kt)("p",null,"Enable option to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html"},"request spot instances")," and specify the maximum instance price per hour you're willing to pay."),(0,o.kt)("h3",{id:"use-only-private-address"},"Use only private address"),(0,o.kt)("p",null,"Enable option on use only ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html"},"private addresses"),"."),(0,o.kt)("h3",{id:"ebs-optimized-instance"},"EBS-Optimized Instance"),(0,o.kt)("p",null,"Use an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html"},"EBS-optimized instance"),"."),(0,o.kt)("h3",{id:"allow-access-to-ec2-metadata"},"Allow access to EC2 metadata"),(0,o.kt)("p",null,"Enable access to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html"},"EC2 metadata"),"."),(0,o.kt)("h3",{id:"use-tokens-for-metadata"},"Use tokens for metadata"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html"},"Instance Metadata Service Version 2 (IMDSv2)"),", a token-based method to access metadata."),(0,o.kt)("h3",{id:"add-tag"},"Add Tag"),(0,o.kt)("p",null,"Add metadata using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"},"tags")," to categorize resources."))}m.isMDXComponent=!0}}]);