"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11842],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Fluentd",weight:600,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/fluentd","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/fluentd","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/fluentd","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/fluentd/"]},s=void 0,u={unversionedId:"explanations/integrations-in-rancher/cluster-logging/fluentd",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/fluentd",title:"Fluentd",description:"If your organization uses Fluentd, you can configure Rancher to send it Kubernetes logs.  Afterwards, you can log into your Fluentd server to view logs.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/fluentd.md",sourceDirName:"explanations/integrations-in-rancher/cluster-logging",slug:"/explanations/integrations-in-rancher/cluster-logging/fluentd",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/fluentd",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/fluentd.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Fluentd",weight:600,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/fluentd","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/fluentd","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/fluentd","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/fluentd/"]},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch"},next:{title:"Kafka",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/kafka"}},c={},p=[{value:"Fluentd Configuration",id:"fluentd-configuration",level:2},{value:"SSL Configuration",id:"ssl-configuration",level:2}],g={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your organization uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"Fluentd"),", you can configure Rancher to send it Kubernetes logs.  Afterwards, you can log into your Fluentd server to view logs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")," Configure Fluentd input forward to receive the event stream."),(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.fluentd.org/v1.0/articles/in_forward"},"Fluentd Documentation")," for details.")),(0,o.kt)("h2",{id:"fluentd-configuration"},"Fluentd Configuration"),(0,o.kt)("p",null,"You can add multiple Fluentd Servers. If you want to add additional Fluentd servers, click ",(0,o.kt)("strong",{parentName:"p"},"Add Fluentd Server"),". For each Fluentd server, complete the configuration information:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Endpoint")," field, enter the address and port of your Fluentd instance, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://Fluentd-server:24224"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("strong",{parentName:"p"},"Shared Key")," if your Fluentd Server is using a shared key for authentication.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("strong",{parentName:"p"},"Username")," and ",(0,o.kt)("strong",{parentName:"p"},"Password")," if your Fluentd Server is using username and password for authentication.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional:")," Enter the ",(0,o.kt)("strong",{parentName:"p"},"Hostname")," of the Fluentd server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the load balancing ",(0,o.kt)("strong",{parentName:"p"},"Weight")," of the Fluentd server. If the weight of one server is 20 and the other server is 30, events will be sent in a 2:3 ratio. If you do not enter a weight, the default weight is 60.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If this server is a standby server, check ",(0,o.kt)("strong",{parentName:"p"},"Use as Standby Only"),". Standby servers are used when all other servers are not available."))),(0,o.kt)("p",null,"After adding all the Fluentd servers, you have the option to select ",(0,o.kt)("strong",{parentName:"p"},"Enable Gzip Compression"),". By default, this is enabled because the transferred payload size will be reduced."),(0,o.kt)("h2",{id:"ssl-configuration"},"SSL Configuration"),(0,o.kt)("p",null,"If your Fluentd servers are using TLS, you need to select ",(0,o.kt)("strong",{parentName:"p"},"Use TLS"),". If you are using a self-signed certificate, provide the ",(0,o.kt)("strong",{parentName:"p"},"CA Certificate PEM"),". You can copy and paste the certificate or upload it using the ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," button."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Fluentd does not support self-signed certificates when client authentication is enabled.")))}d.isMDXComponent=!0}}]);