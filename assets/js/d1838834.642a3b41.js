"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||n;return a?o.createElement(h,l(l({ref:t},p),{},{components:a})):o.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<n;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(67294),r=a(86010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var o=a(87462),r=a(67294),n=a(86010),l=a(72389),s=a(67392),i=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:l,values:m,groupId:d,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:o}}=e;return{value:t,label:a,attributes:o}})),b=(0,s.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,i.U)(),[w,y]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=d){const e=N[d];null!=e&&e!==w&&k.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,a=C.indexOf(t),o=k[a].value;o!==w&&(R(t),y(o),null!=d&&v(d,String(o)))},j=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:j,onClick:T},l,{className:(0,n.Z)("tabs__item",c,l?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}},2733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=a(87462),r=(a(67294),a(3905)),n=a(65488),l=a(85162);const s={title:"Custom Roles"},i=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",title:"Custom Roles",description:"Within Rancher, roles determine what actions a user can make within a cluster or project.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Custom Roles"},sidebar:"tutorialSidebar",previous:{title:"Cluster and Project Roles",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},next:{title:"Locked Roles",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating A Custom Role for a Cluster or Project",id:"creating-a-custom-role-for-a-cluster-or-project",level:2},{value:"Creating a Custom Global Role",id:"creating-a-custom-global-role",level:2},{value:"Creating a Custom Global Role that Copies Rules from an Existing Role",id:"creating-a-custom-global-role-that-copies-rules-from-an-existing-role",level:3},{value:"Creating a Custom Global Role that Does Not Copy Rules from Another Role",id:"creating-a-custom-global-role-that-does-not-copy-rules-from-another-role",level:3},{value:"Deleting a Custom Global Role",id:"deleting-a-custom-global-role",level:2},{value:"Assigning a Custom Global Role to a Group",id:"assigning-a-custom-global-role-to-a-group",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Within Rancher, ",(0,r.kt)("em",{parentName:"p"},"roles")," determine what actions a user can make within a cluster or project."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("em",{parentName:"p"},"roles")," are different from ",(0,r.kt)("em",{parentName:"p"},"permissions"),", which determine what clusters and projects you can access."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete the tasks on this page, one of the following permissions are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Roles")," role assigned.")),(0,r.kt)("h2",{id:"creating-a-custom-role-for-a-cluster-or-project"},"Creating A Custom Role for a Cluster or Project"),(0,r.kt)("p",null,"While Rancher comes out-of-the-box with a set of default user roles, you can also create default custom roles to provide users with very specific permissions within Rancher."),(0,r.kt)("p",null,"The steps to add custom roles differ depending on the version of Rancher."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Rancher v2.0.7+",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles")," from the main menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a tab to determine the scope of the roles you're adding. The tabs are:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster:")," The role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"li"},"only")," clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project:")," The role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"li"},"only")," projects.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Cluster/Project Role."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name")," the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: Choose the ",(0,r.kt)("strong",{parentName:"p"},"Cluster/Project Creator Default")," option to assign this role to a user when they create a new cluster or project. Using this feature, you can expand or restrict the default roles for cluster/project creators."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Out of the box, the Cluster Creator Default and the Project Creator Default roles are ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Owner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Project Owner")," respectively."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," options to assign individual ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API endpoints")," to the role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field.")),(0,r.kt)("p",{parentName:"li"},"You can also choose the individual cURL methods (",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Get"),", etc.) available for use with each endpoint you assign.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Inherit from a Role")," options to assign individual Rancher roles to your custom roles. Note: When a custom role inherits from a parent role, the parent role cannot be deleted until the child role is deleted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")))),(0,r.kt)(l.Z,{value:"Rancher before v2.0.7",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles")," from the main menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Role"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name")," the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose whether to set the role to a status of ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"locked"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Locked roles cannot be assigned to users."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Context")," dropdown menu, choose the scope of the role assigned to the user. The contexts are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"All:")," The user can use their assigned role regardless of context. This role is valid for assignment when adding/managing members to clusters or projects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cluster:")," This role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"p"},"only")," clusters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Project:")," This role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"p"},"only")," projects.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," options to assign individual ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API endpoints")," to the role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field.")),(0,r.kt)("p",{parentName:"li"},"You can also choose the individual cURL methods (",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Get"),", etc.) available for use with each endpoint you assign.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Inherit from a Role")," options to assign individual Rancher roles to your custom roles. Note: When a custom role inherits from a parent role, the parent role cannot be deleted until the child role is deleted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."))))),(0,r.kt)("h2",{id:"creating-a-custom-global-role"},"Creating a Custom Global Role"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,r.kt)("h3",{id:"creating-a-custom-global-role-that-copies-rules-from-an-existing-role"},"Creating a Custom Global Role that Copies Rules from an Existing Role"),(0,r.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom global role in which all of the rules from another role, such as the administrator role, are copied into a new role. This allows you to only configure the variations between the existing role and the new role."),(0,r.kt)("p",null,"The custom global role can then be assigned to a user or group so that the custom global role takes effect the first time the user or users sign into Rancher."),(0,r.kt)("p",null,"To create a custom global role based on an existing role,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Global")," tab, go to the role that the custom global role will be based on. Click ",(0,r.kt)("strong",{parentName:"p"},"\u22ee"," (\u2026) > Clone."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: To assign the custom role default for new users, go to the ",(0,r.kt)("strong",{parentName:"p"},"New User Default")," section and click ",(0,r.kt)("strong",{parentName:"p"},"Yes: Default role for new users."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," section, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save.")))),(0,r.kt)("h3",{id:"creating-a-custom-global-role-that-does-not-copy-rules-from-another-role"},"Creating a Custom Global Role that Does Not Copy Rules from Another Role"),(0,r.kt)("p",null,"Custom global roles don't have to be based on existing roles. To create a custom global role by choosing the specific Kubernetes resource operations that should be allowed for the role, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Global")," tab, click ",(0,r.kt)("strong",{parentName:"p"},"Add Global Role."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: To assign the custom role default for new users, go to the ",(0,r.kt)("strong",{parentName:"p"},"New User Default")," section and click ",(0,r.kt)("strong",{parentName:"p"},"Yes: Default role for new users."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," section, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save.")))),(0,r.kt)("h2",{id:"deleting-a-custom-global-role"},"Deleting a Custom Global Role"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,r.kt)("p",null,"When deleting a custom global role, all global role bindings with this custom role are deleted."),(0,r.kt)("p",null,"If a user is only assigned one custom global role, and the role is deleted, the user would lose access to Rancher. For the user to regain access, an administrator would need to edit the user and apply new global permissions."),(0,r.kt)("p",null,"Custom global roles can be deleted, but built-in roles cannot be deleted."),(0,r.kt)("p",null,"To delete a custom global role,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"li"},"Security > Roles.")),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Global")," tab, go to the custom global role that should be deleted and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee"," (\u2026) > Delete.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Delete."))),(0,r.kt)("h2",{id:"assigning-a-custom-global-role-to-a-group"},"Assigning a Custom Global Role to a Group"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,r.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom global role. When the role is assigned to a group, the users in the group have the appropriate level of access the first time they sign into Rancher."),(0,r.kt)("p",null,"When a user in the group logs in, they get the built-in Standard User global role by default. They will also get the permissions assigned to their groups."),(0,r.kt)("p",null,"If a user is removed from the external authentication provider group, they would lose their permissions from the custom global role that was assigned to the group. They would continue to have their individual Standard User role."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")," You can only assign a global role to a group if:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"You have set up an ",(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication#external-vs-local-authentication"},"external authentication provider")),(0,r.kt)("li",{parentName:"ul"},"The external authentication provider supports ",(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},"user groups")),(0,r.kt)("li",{parentName:"ul"},"You have already set up at least one user group with the authentication provider"))),(0,r.kt)("p",null,"To assign a custom global role to a group, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view, go to ",(0,r.kt)("strong",{parentName:"li"},"Security > Groups.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Assign Global Role.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Select Group To Add")," field, choose the existing group that will be assigned the custom global role."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Custom")," section, choose any custom global role that will be assigned to the group."),(0,r.kt)("li",{parentName:"ol"},"Optional: In the ",(0,r.kt)("strong",{parentName:"li"},"Global Permissions")," or ",(0,r.kt)("strong",{parentName:"li"},"Built-in")," sections, select any additional permissions that the group should have."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The custom global role will take effect when the users in the group log into Rancher."))}d.isMDXComponent=!0}}]);