"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57646],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44904:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Configuring Okta (SAML)"},i=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",title:"Configuring Okta (SAML)",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Configuring Okta (SAML)"},sidebar:"tutorialSidebar",previous:{title:"Configuring PingIdentity (SAML)",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity"},next:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",permalink:"/v2.0-v2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Okta in Rancher",id:"configuring-okta-in-rancher",level:2}],p={toc:s};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,r.kt)("p",null,"If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Okta integration only supports Service Provider initiated logins.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In Okta, create a SAML Application with the settings below. See the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta"},"Okta documentation")," for help."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Single Sign on URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/acs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Audience URI (SP Entity ID)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/metadata"))))),(0,r.kt)("h2",{id:"configuring-okta-in-rancher"},"Configuring Okta in Rancher"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,r.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Okta"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Okta Account")," form. The examples below describe how you can map Okta attributes from attribute statements to fields within Rancher."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the display name of users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the user name/given name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that is unique to every user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name in a group attribute statement that exposes your groups.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"A key/certificate pair used for Assertion Encryption.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Identity Provider metadata")," file that you find in the application ",(0,r.kt)("inlineCode",{parentName:"td"},"Sign On")," section.")))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," You can generate a key/certificate pair using an openssl command. For example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"   openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt\n"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Okta Account")," form, click ",(0,r.kt)("strong",{parentName:"p"},"Authenticate with Okta"),", which is at the bottom of the page."),(0,r.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Okta IdP to validate your Rancher Okta configuration."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If nothing seems to happen, it's likely because your browser blocked the pop-up. Make sure you disable the pop-up blocker for your rancher domain and whitelist it in any other extensions you might utilize.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Okta. Your users can now sign into Rancher using their Okta logins."),(0,r.kt)("admonition",{title:"SAML Provider Caveats:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,r.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,r.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,r.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of."))))}c.isMDXComponent=!0}}]);