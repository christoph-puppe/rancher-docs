"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57412],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),i=n(86010),l=n(72389),o=n(67392),s=n(7094),c=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,d=e.defaultValue,h=e.values,g=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,S=(0,r.useState)(b),T=S[0],R=S[1],A=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var M=w[g];null!=M&&M!==T&&v.some((function(e){return e.value===M}))&&R(M)}var x=function(e){var t=e.currentTarget,n=A.indexOf(t),a=v[n].value;a!==T&&(P(t),R(a),null!=g&&C(g,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=A.indexOf(e.currentTarget)+1;n=null!=(a=A[r])?a:A[0];break;case"ArrowLeft":var i,l=A.indexOf(e.currentTarget)-1;n=null!=(i=A[l])?i:A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return A.push(e)},onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},71640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(65488),o=n(85162),s=["components"],c={title:"Receiver Configuration",shortTitle:"Receivers",weight:1},u=void 0,p={unversionedId:"reference-guides/monitoring-v2-configuration/receivers",id:"reference-guides/monitoring-v2-configuration/receivers",title:"Receiver Configuration",description:"The Alertmanager Config Secret contains the configuration of an Alertmanager instance that sends out notifications based on alerts it receives from Prometheus.",source:"@site/docs/reference-guides/monitoring-v2-configuration/receivers.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/receivers",permalink:"/reference-guides/monitoring-v2-configuration/receivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/receivers.md",tags:[],version:"current",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Receiver Configuration",shortTitle:"Receivers",weight:1},sidebar:"tutorialSidebar",previous:{title:"Monitoring V2 Configuration",permalink:"/pages-for-subheaders/monitoring-v2-configuration"},next:{title:"Route Configuration",permalink:"/reference-guides/monitoring-v2-configuration/routes"}},m={},d=[{value:"Creating Receivers in the Rancher UI",id:"creating-receivers-in-the-rancher-ui",level:2},{value:"Receiver Configuration",id:"receiver-configuration",level:2},{value:"Native vs. Non-native Receivers",id:"native-vs-non-native-receivers",level:3},{value:"Slack",id:"slack",level:2},{value:"Email",id:"email",level:2},{value:"PagerDuty",id:"pagerduty",level:2},{value:"Opsgenie",id:"opsgenie",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Custom",id:"custom",level:2},{value:"Teams",id:"teams",level:2},{value:"Enabling the Teams Receiver for Rancher Managed Clusters",id:"enabling-the-teams-receiver-for-rancher-managed-clusters",level:3},{value:"Configure the Teams Receiver",id:"configure-the-teams-receiver",level:3},{value:"SMS",id:"sms",level:2},{value:"Enabling the SMS Receiver for Rancher Managed Clusters",id:"enabling-the-sms-receiver-for-rancher-managed-clusters",level:3},{value:"Configure the SMS Receiver",id:"configure-the-sms-receiver",level:3},{value:"Configuring Multiple Receivers",id:"configuring-multiple-receivers",level:2},{value:"Example Alertmanager Configs",id:"example-alertmanager-configs",level:2},{value:"Slack",id:"slack-1",level:3},{value:"PagerDuty",id:"pagerduty-1",level:3},{value:"Example Route Config for CIS Scan Alerts",id:"example-route-config-for-cis-scan-alerts",level:2},{value:"Trusted CA for Notifiers",id:"trusted-ca-for-notifiers",level:2}],h={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#configuration-file"},"Alertmanager Config")," Secret contains the configuration of an Alertmanager instance that sends out notifications based on alerts it receives from Prometheus."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,i.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#3-how-alertmanager-works"},"this section.")))),(0,i.kt)("h2",{id:"creating-receivers-in-the-rancher-ui"},"Creating Receivers in the Rancher UI"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,i.kt)("li",{parentName:"ul"},"If you configured monitoring with an existing Alertmanager Secret, it must have a format that is supported by Rancher's UI. Otherwise you will only be able to make changes based on modifying the Alertmanager Secret directly. Note: We are continuing to make enhancements to what kinds of Alertmanager Configurations we can support using the Routes and Receivers UI, so please ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/issues/new"},"file an issue")," if you have a request for a feature enhancement.")))),(0,i.kt)("p",null,"To create notification receivers in the Rancher UI,"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where you want to create receivers. Click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring -> Alerting -> AlertManagerConfigs"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Receiver"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Name")," for the receiver."),(0,i.kt)("li",{parentName:"ol"},"Configure one or more providers for the receiver. For help filling out the forms, refer to the configuration options below."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."))),(0,i.kt)(o.Z,{value:"Rancher before v2.6.5",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where you want to create receivers. Click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring")," and click ",(0,i.kt)("strong",{parentName:"li"},"Receiver"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a name for the receiver."),(0,i.kt)("li",{parentName:"ol"},"Configure one or more providers for the receiver. For help filling out the forms, refer to the configuration options below."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Alerts can be configured to send notifications to the receiver(s)."),(0,i.kt)("h2",{id:"receiver-configuration"},"Receiver Configuration"),(0,i.kt)("p",null,"The notification integrations are configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"receiver"),", which is explained in the ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#receiver"},"Prometheus documentation.")),(0,i.kt)("h3",{id:"native-vs-non-native-receivers"},"Native vs. Non-native Receivers"),(0,i.kt)("p",null,"By default, AlertManager provides native integration with some receivers, which are listed in ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#receiver"},"this section.")," All natively supported receivers are configurable through the Rancher UI."),(0,i.kt)("p",null,"For notification mechanisms not natively supported by AlertManager, integration is achieved using the ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#webhook_config"},"webhook receiver.")," A list of third-party drivers providing such integrations can be found ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/operating/integrations/#alertmanager-webhook-receiver"},"here.")," Access to these drivers, and their associated integrations, is provided through the Alerting Drivers app. Once enabled, configuring non-native receivers can also be done through the Rancher UI."),(0,i.kt)("p",null,"Currently the Rancher Alerting Drivers app provides access to the following integrations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Microsoft Teams, based on the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/idealista/prom2teams"},"prom2teams")," driver"),(0,i.kt)("li",{parentName:"ul"},"SMS, based on the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/messagebird/sachet"},"Sachet")," driver")),(0,i.kt)("p",null,"The following types of receivers can be configured in the Rancher UI:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#slack"},"Slack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#email"},"Email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#pagerduty"},"PagerDuty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#opsgenie"},"Opsgenie")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#webhook"},"Webhook")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#custom"},"Custom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#teams"},"Teams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#sms"},"SMS"))),(0,i.kt)("p",null,"The custom receiver option can be used to configure any receiver in YAML that cannot be configured by filling out the other forms in the Rancher UI."),(0,i.kt)("h2",{id:"slack"},"Slack"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter your Slack webhook URL. For instructions to create a Slack webhook, see the ",(0,i.kt)("a",{parentName:"td",href:"https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack"},"Slack documentation."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Default Channel"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter the name of the channel that you want to send alert notifications in the following format: ",(0,i.kt)("inlineCode",{parentName:"td"},"#<channelname>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Proxy for the webhook notifications.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,i.kt)("h2",{id:"email"},"Email"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Default Recipient Address"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The email address that will receive notifications.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,i.kt)("p",null,"SMTP options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sender"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter an email address available on your SMTP mail server that you want to send the notification from.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Host"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter the IP address or hostname for your SMTP server. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"smtp.email.com"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Use TLS"),(0,i.kt)("td",{parentName:"tr",align:null},"Bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Use TLS for encryption.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Username"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter a username to authenticate with the SMTP server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Password"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter a password to authenticate with the SMTP server.")))),(0,i.kt)("h2",{id:"pagerduty"},"PagerDuty"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Integration Type"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Events API v2")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"Prometheus"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Default Integration Key"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"For instructions to get an integration key, see the ",(0,i.kt)("a",{parentName:"td",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty documentation."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Proxy for the PagerDuty notifications.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,i.kt)("h2",{id:"opsgenie"},"Opsgenie"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"API Key"),(0,i.kt)("td",{parentName:"tr",align:null},"For instructions to get an API key, refer to the ",(0,i.kt)("a",{parentName:"td",href:"https://docs.opsgenie.com/docs/api-key-management"},"Opsgenie documentation."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Proxy for the Opsgenie notifications.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,i.kt)("p",null,"Opsgenie Responders:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Schedule, Team, User, or Escalation. For more information on alert responders, refer to the ",(0,i.kt)("a",{parentName:"td",href:"https://docs.opsgenie.com/docs/alert-recipients-and-teams"},"Opsgenie documentation."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Send To"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Id, Name, or Username of the Opsgenie recipient.")))),(0,i.kt)("h2",{id:"webhook"},"Webhook"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Webhook URL for the app of your choice.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Proxy for the webhook notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,i.kt)("h2",{id:"custom"},"Custom"),(0,i.kt)("p",null,"The YAML provided here will be directly appended to your receiver within the Alertmanager Config Secret."),(0,i.kt)("h2",{id:"teams"},"Teams"),(0,i.kt)("h3",{id:"enabling-the-teams-receiver-for-rancher-managed-clusters"},"Enabling the Teams Receiver for Rancher Managed Clusters"),(0,i.kt)("p",null,"The Teams receiver is not a native receiver and must be enabled before it can be used. You can enable the Teams receiver for a Rancher managed cluster by going to the Apps page and installing the rancher-alerting-drivers app with the Teams option selected."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install rancher-alerting-drivers and click ",(0,i.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Alerting Drivers")," app."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Helm Deploy Options")," tab."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Teams")," option and click ",(0,i.kt)("strong",{parentName:"li"},"Install"),"."),(0,i.kt)("li",{parentName:"ol"},"Take note of the namespace used as it will be required in a later step.")),(0,i.kt)("h3",{id:"configure-the-teams-receiver"},"Configure the Teams Receiver"),(0,i.kt)("p",null,"The Teams receiver can be configured by updating its ConfigMap. For example, the following is a minimal Teams receiver configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[Microsoft Teams]\nteams-instance-1: https://your-teams-webhook-url\n")),(0,i.kt)("p",null,"When configuration is complete, add the receiver using the steps in ",(0,i.kt)("a",{parentName:"p",href:"#creating-receivers-in-the-rancher-ui"},"this section"),"."),(0,i.kt)("p",null,"Use the example below as the URL where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ns-1")," is replaced with the namespace where the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," app is installed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"url: http://rancher-alerting-drivers-prom2teams.ns-1.svc:8089/v2/teams-instance-1\n")),(0,i.kt)("h2",{id:"sms"},"SMS"),(0,i.kt)("h3",{id:"enabling-the-sms-receiver-for-rancher-managed-clusters"},"Enabling the SMS Receiver for Rancher Managed Clusters"),(0,i.kt)("p",null,"The SMS receiver is not a native receiver and must be enabled before it can be used. You can enable the SMS receiver for a Rancher managed cluster by going to the Apps page and installing the rancher-alerting-drivers app with the SMS option selected."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to install ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click"),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Alerting Drivers")," app."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Helm Deploy Options")," tab"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"SMS")," option and click ",(0,i.kt)("strong",{parentName:"li"},"Install"),"."),(0,i.kt)("li",{parentName:"ol"},"Take note of the namespace used as it will be required in a later step.")),(0,i.kt)("h3",{id:"configure-the-sms-receiver"},"Configure the SMS Receiver"),(0,i.kt)("p",null,"The SMS receiver can be configured by updating its ConfigMap. For example, the following is a minimal SMS receiver configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"providers:\n  telegram:\n    token: 'your-token-from-telegram'\n\nreceivers:\n- name: 'telegram-receiver-1'\n  provider: 'telegram'\n  to:\n    - '123456789'\n")),(0,i.kt)("p",null,"When configuration is complete, add the receiver using the steps in ",(0,i.kt)("a",{parentName:"p",href:"#creating-receivers-in-the-rancher-ui"},"this section"),"."),(0,i.kt)("p",null,"Use the example below as the name and URL, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the name assigned to the receiver, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"telegram-receiver-1"),", must match the name in the ",(0,i.kt)("inlineCode",{parentName:"li"},"receivers.name")," field in the ConfigMap, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"telegram-receiver-1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ns-1")," in the URL is replaced with the namespace where the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," app is installed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: telegram-receiver-1\nurl http://rancher-alerting-drivers-sachet.ns-1.svc:9876/alert\n")),(0,i.kt)("h2",{id:"configuring-multiple-receivers"},"Configuring Multiple Receivers"),(0,i.kt)("p",null,"By editing the forms in the Rancher UI, you can set up a Receiver resource with all the information Alertmanager needs to send alerts to your notification system."),(0,i.kt)("p",null,"It is also possible to send alerts to multiple notification systems. One way is to configure the Receiver using custom YAML, in which case you can add the configuration for multiple notification systems, as long as you are sure that both systems should receive the same messages."),(0,i.kt)("p",null,"You can also set up multiple receivers by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," option for a route, so that the alerts sent to a receiver continue being evaluated in the next level of the routing tree, which could contain another receiver."),(0,i.kt)("h2",{id:"example-alertmanager-configs"},"Example Alertmanager Configs"),(0,i.kt)("h3",{id:"slack-1"},"Slack"),(0,i.kt)("p",null,"To set up notifications via Slack, the following Alertmanager Config YAML can be placed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"alertmanager.yaml")," key of the Alertmanager Config Secret, where the ",(0,i.kt)("inlineCode",{parentName:"p"},"api_url")," should be updated to use your Webhook URL from Slack:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"route:\n  group_by: ['job']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 3h\n  receiver: 'slack-notifications'\nreceivers:\n- name: 'slack-notifications'\n  slack_configs:\n  - send_resolved: true\n    text: '{{ template \"slack.rancher.text\" . }}'\n    api_url: <user-provided slack webhook url here>\ntemplates:\n- /etc/alertmanager/config/*.tmpl\n")),(0,i.kt)("h3",{id:"pagerduty-1"},"PagerDuty"),(0,i.kt)("p",null,"To set up notifications via PagerDuty, use the example below from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty documentation")," as a guideline. This example sets up a route that captures alerts for a database service and sends them to a receiver linked to a service that will directly notify the DBAs in PagerDuty, while all other alerts will be directed to a default receiver with a different PagerDuty integration key."),(0,i.kt)("p",null,"The following Alertmanager Config YAML can be placed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"alertmanager.yaml")," key of the Alertmanager Config Secret. The ",(0,i.kt)("inlineCode",{parentName:"p"},"service_key"),' should be updated to use your PagerDuty integration key and can be found as per the "Integrating with Global Event Routing" section of the PagerDuty documentation. For the full list of configuration options, refer to the ',(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#pagerduty_config"},"Prometheus documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"route:\n group_by: [cluster]\n receiver: 'pagerduty-notifications'\n group_interval: 5m\n routes:\n  - match:\n      service: database\n    receiver: 'database-notifcations'\n\nreceivers:\n- name: 'pagerduty-notifications'\n  pagerduty_configs:\n  - service_key: 'primary-integration-key'\n\n- name: 'database-notifcations'\n  pagerduty_configs:\n  - service_key: 'database-integration-key'\n")),(0,i.kt)("h2",{id:"example-route-config-for-cis-scan-alerts"},"Example Route Config for CIS Scan Alerts"),(0,i.kt)("p",null,"While configuring the routes for ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," alerts, you can specify the matching using the key-value pair ",(0,i.kt)("inlineCode",{parentName:"p"},"job: rancher-cis-scan"),"."),(0,i.kt)("p",null,"For example, the following example route configuration could be used with a Slack receiver named ",(0,i.kt)("inlineCode",{parentName:"p"},"test-cis"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  receiver: test-cis\n  group_by:\n#    - string\n  group_wait: 30s\n  group_interval: 30s\n  repeat_interval: 30s\n  match:\n    job: rancher-cis-scan\n#    key: string\n  match_re:\n    {}\n#    key: string\n")),(0,i.kt)("p",null,"For more information on enabling alerting for ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark"),", see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/cis-scan-guides#enabling-alerting-for-rancher-cis-benchmark"},"this section.")),(0,i.kt)("h2",{id:"trusted-ca-for-notifiers"},"Trusted CA for Notifiers"),(0,i.kt)("p",null,"If you need to add a trusted CA to your notifier, follow the steps in ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/monitoring-v2-configuration/helm-chart-options#trusted-ca-for-notifiers"},"this section.")))}g.isMDXComponent=!0}}]);