"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[53126],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Configure Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins"},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",title:"Configure Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml.md",tags:[],version:"current",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Configure Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins"},sidebar:"tutorialSidebar",previous:{title:"Configure Keycloak (OIDC)",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc"},next:{title:"Configure PingIdentity (SAML)",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the IDP Metadata",id:"getting-the-idp-metadata",level:2},{value:"Configuring Keycloak in Rancher",id:"configuring-keycloak-in-rancher",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2},{value:"You are not redirected to Keycloak",id:"you-are-not-redirected-to-keycloak",level:3},{value:"Forbidden message displayed after IdP login",id:"forbidden-message-displayed-after-idp-login",level:3},{value:"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata",id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, failed to process response&quot;",id:"keycloak-error-were-sorry-failed-to-process-response",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, invalid requester&quot;",id:"keycloak-error-were-sorry-invalid-requester",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("Tabs"),d=c("TabItem"),m={toc:p};function k(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If your organization uses Keycloak Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You must have a ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP Server")," configured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Keycloak, create a ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"new SAML client"),", with the settings below. See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"Keycloak documentation")," for help."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Sign Documents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,r.kt)("sup",null,"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Sign Assertions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,r.kt)("sup",null,"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"All other ",(0,r.kt)("inlineCode",{parentName:"td"},"ON/OFF")," Settings"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Either ",(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata")," or the value configured in the ",(0,r.kt)("inlineCode",{parentName:"td"},"Entry ID Field")," of the Rancher Keycloak configuration",(0,r.kt)("sup",null,"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Client Name")),(0,r.kt)("td",{parentName:"tr",align:null},"<CLIENT_NAME> (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SAML"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/acs"))))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("sup",null,"1"),": Optionally, you can enable either one or both of these settings.",(0,r.kt)("sup",null,"2"),": Rancher SAML metadata won't be generated until a SAML provider is configured and saved."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(91906).Z,width:"1962",height:"2292"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the new SAML client, create Mappers to expose the users fields"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Add all "Builtin Protocol Mappers"\n',(0,r.kt)("img",{src:a(1051).Z,width:"2618",height:"898"})),(0,r.kt)("li",{parentName:"ul"},'Create a new "Group list" mapper to map the member attribute to a user\'s groups\n',(0,r.kt)("img",{src:a(19640).Z,width:"1522",height:"1070"}))))),(0,r.kt)("h2",{id:"getting-the-idp-metadata"},"Getting the IDP Metadata"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"Keycloak 5 and earlier",mdxType:"TabItem"},(0,r.kt)("p",null,"To get the IDP metadata, export a ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file from your Keycloak client.\nFrom the ",(0,r.kt)("strong",{parentName:"p"},"Installation")," tab, choose the ",(0,r.kt)("strong",{parentName:"p"},"SAML Metadata IDPSSODescriptor")," format option and download your file.")),(0,r.kt)(d,{value:"Keycloak 6-13",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Configure")," section, click the ",(0,r.kt)("strong",{parentName:"li"},"Realm Settings")," tab."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"General")," tab."),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Endpoints")," field, click ",(0,r.kt)("strong",{parentName:"li"},"SAML 2.0 Identity Provider Metadata"),".")),(0,r.kt)("p",null,"Verify the IDP metadata contains the following attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,r.kt)("p",null,"Some browsers, such as Firefox, may render/process the document such that the contents appear to have been modified, and some attributes appear to be missing. In this situation, use the raw response data that can be found using your browser."),(0,r.kt)("p",null,"The following is an example process for Firefox, but will vary slightly for other browsers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("strong",{parentName:"li"},"F12")," to access the developer console."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Network")," tab."),(0,r.kt)("li",{parentName:"ol"},"From the table, click the row containing ",(0,r.kt)("inlineCode",{parentName:"li"},"descriptor"),"."),(0,r.kt)("li",{parentName:"ol"},"From the details pane, click the ",(0,r.kt)("strong",{parentName:"li"},"Response")," tab."),(0,r.kt)("li",{parentName:"ol"},"Copy the raw response data.")),(0,r.kt)("p",null,"The XML obtained contains ",(0,r.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor")," as the root element. Rancher expects the root element to be ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityDescriptor")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor"),". So before passing this XML to Rancher, follow these steps to adjust it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy all the attributes from ",(0,r.kt)("inlineCode",{parentName:"li"},"EntitiesDescriptor")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"EntityDescriptor")," that are not present."),(0,r.kt)("li",{parentName:"ol"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"<EntitiesDescriptor>")," tag from the beginning."),(0,r.kt)("li",{parentName:"ol"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"</EntitiesDescriptor>")," from the end of the xml.")),(0,r.kt)("p",null,"You are left with something similar as the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" entityID="https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}">\n....\n</EntityDescriptor>\n'))),(0,r.kt)(d,{value:"Keycloak 14+",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Configure")," section, click the ",(0,r.kt)("strong",{parentName:"li"},"Realm Settings")," tab."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"General")," tab."),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Endpoints")," field, click ",(0,r.kt)("strong",{parentName:"li"},"SAML 2.0 Identity Provider Metadata"),".")),(0,r.kt)("p",null,"Verify the IDP metadata contains the following attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,r.kt)("p",null,"Some browsers, such as Firefox, may render/process the document such that the contents appear to have been modified, and some attributes appear to be missing. In this situation, use the raw response data that can be found using your browser."),(0,r.kt)("p",null,"The following is an example process for Firefox, but will vary slightly for other browsers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("strong",{parentName:"li"},"F12")," to access the developer console."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Network")," tab."),(0,r.kt)("li",{parentName:"ol"},"From the table, click the row containing ",(0,r.kt)("inlineCode",{parentName:"li"},"descriptor"),"."),(0,r.kt)("li",{parentName:"ol"},"From the details pane, click the ",(0,r.kt)("strong",{parentName:"li"},"Response")," tab."),(0,r.kt)("li",{parentName:"ol"},"Copy the raw response data.")))),(0,r.kt)("h2",{id:"configuring-keycloak-in-rancher"},"Configuring Keycloak in Rancher"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Keycloak SAML"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form. For help with filling the form, see the ",(0,r.kt)("a",{parentName:"p",href:"#configuration-reference"},"configuration reference"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure a Keycloak Account")," form, click ",(0,r.kt)("strong",{parentName:"p"},"Enable"),"."),(0,r.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Keycloak IdP to validate your Rancher Keycloak configuration."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You may have to disable your popup blocker to see the IdP login page.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Keycloak. Your users can now sign into Rancher using their Keycloak logins."),(0,r.kt)("admonition",{title:"SAML Provider Caveats:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,r.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,r.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,r.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of."))),(0,r.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute that contains the display name of users. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"givenName"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute that contains the user name/given name. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"email"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,r.kt)("td",{parentName:"tr",align:null},"An attribute that is unique to every user. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"email"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,r.kt)("td",{parentName:"tr",align:null},"Make entries for managing group memberships. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"member"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Entity ID Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID that needs to be configured as a client ID in the Keycloak client. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"A key/certificate pair to create a secure shell between Rancher and your IdP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDP-metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata.xml")," file that you exported from your IdP server.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can generate a key/certificate pair using an openssl command. For example:"),(0,r.kt)("p",{parentName:"admonition"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.cert")),(0,r.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,r.kt)("p",null,"If you are experiencing issues while testing the connection to the Keycloak server, first double-check the configuration option of your SAML client. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."),(0,r.kt)("h3",{id:"you-are-not-redirected-to-keycloak"},"You are not redirected to Keycloak"),(0,r.kt)("p",null,"When you click on ",(0,r.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", you are not redirected to your IdP."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify your Keycloak client configuration."),(0,r.kt)("li",{parentName:"ul"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"Force Post Binding")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"OFF"),".")),(0,r.kt)("h3",{id:"forbidden-message-displayed-after-idp-login"},"Forbidden message displayed after IdP login"),(0,r.kt)("p",null,"You are correctly redirected to your IdP login page and you are able to enter your credentials, however you get a ",(0,r.kt)("inlineCode",{parentName:"p"},"Forbidden")," message afterwards."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check the Rancher debug log."),(0,r.kt)("li",{parentName:"ul"},"If the log displays ",(0,r.kt)("inlineCode",{parentName:"li"},"ERROR: either the Response or Assertion must be signed"),", make sure either ",(0,r.kt)("inlineCode",{parentName:"li"},"Sign Documents")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Sign assertions")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"ON")," in your Keycloak client.")),(0,r.kt)("h3",{id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata"},"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata"),(0,r.kt)("p",null,"This is usually due to the metadata not being created until a SAML provider is configured.\nTry configuring and saving keycloak as your SAML provider and then accessing the metadata."),(0,r.kt)("h3",{id:"keycloak-error-were-sorry-failed-to-process-response"},'Keycloak Error: "We\'re sorry, failed to process response"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,r.kt)("li",{parentName:"ul"},"If the log displays ",(0,r.kt)("inlineCode",{parentName:"li"},"failed: org.keycloak.common.VerificationException: Client does not have a public key"),", set ",(0,r.kt)("inlineCode",{parentName:"li"},"Encrypt Assertions")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")),(0,r.kt)("h3",{id:"keycloak-error-were-sorry-invalid-requester"},'Keycloak Error: "We\'re sorry, invalid requester"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,r.kt)("li",{parentName:"ul"},"If the log displays ",(0,r.kt)("inlineCode",{parentName:"li"},"request validation failed: org.keycloak.common.VerificationException: SigAlg was null"),", set ",(0,r.kt)("inlineCode",{parentName:"li"},"Client Signature Required")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")))}k.isMDXComponent=!0},1051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak-saml-client-builtin-mappers-00ff9682000bed21181c493512aaac6f.png"},91906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak-saml-client-configuration-c6ef99ce0f7510ce130ee88e940cc430.png"},19640:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak-saml-client-group-mapper-bc05499e6b7e1f429b0a97490c1d9ddd.png"}}]);