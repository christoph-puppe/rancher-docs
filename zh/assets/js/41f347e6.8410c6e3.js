"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27301],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},50529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Adding Users to Projects"},s=void 0,i={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects",id:"version-2.5/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects",title:"Adding Users to Projects",description:"If you want to provide a user with access and permissions to specific projects and resources within a cluster, assign the user a project membership.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Adding Users to Projects"},sidebar:"tutorialSidebar",previous:{title:"Project Administration",permalink:"/zh/v2.5/pages-for-subheaders/manage-projects"},next:{title:"Namespaces",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"}},l={},c=[{value:"Adding Members to a New Project",id:"adding-members-to-a-new-project",level:3},{value:"Adding Members to an Existing Project",id:"adding-members-to-an-existing-project",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you want to provide a user with access and permissions to ",(0,n.kt)("em",{parentName:"p"},"specific")," projects and resources within a cluster, assign the user a project membership."),(0,n.kt)("p",null,"You can add members to a project as it is created, or add them to an existing project."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Tip:")," Want to provide a user with access to ",(0,n.kt)("em",{parentName:"p"},"all")," projects within a cluster? See ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Adding Cluster Members")," instead.")),(0,n.kt)("h3",{id:"adding-members-to-a-new-project"},"Adding Members to a New Project"),(0,n.kt)("p",null,"You can add members to a project as you create it (recommended if possible). For details on creating a new project, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"cluster administration section.")),(0,n.kt)("h3",{id:"adding-members-to-an-existing-project"},"Adding Members to an Existing Project"),(0,n.kt)("p",null,"Following project creation, you can add users as project members so that they can access its resources."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, open the project that you want to add members to.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main menu, select ",(0,n.kt)("strong",{parentName:"p"},"Members"),". Then click ",(0,n.kt)("strong",{parentName:"p"},"Add Member"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search for the user or group that you want to add to the project."),(0,n.kt)("p",{parentName:"li"},"If external authentication is configured:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rancher returns users from your external authentication source as you type.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A drop-down allows you to add groups instead of individual users. The dropdown only lists groups that you, the logged in user, are included in."))),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," If you are logged in as a local user, external users do not display in your search results."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign the user or group ",(0,n.kt)("strong",{parentName:"p"},"Project")," roles."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"What are Project Roles?")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Member")," role for a project automatically inherit the ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace creation")," role. However, this role is a ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Kubernetes ClusterRole"),", meaning its scope extends to all projects in the cluster. Therefore, users explicitly assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Member")," role for a project can create namespaces in other projects they're assigned to, even with only the ",(0,n.kt)("inlineCode",{parentName:"p"},"Read Only")," role assigned.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By default, the Rancher role of ",(0,n.kt)("inlineCode",{parentName:"p"},"project-member")," inherits from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Kubernetes-edit")," role, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"project-owner")," role inherits from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Kubernetes-admin")," role. As such, both ",(0,n.kt)("inlineCode",{parentName:"p"},"project-member")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"project-owner")," roles will allow for namespace management, including the ability to create and delete namespaces.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("inlineCode",{parentName:"p"},"Custom")," roles, you can modify the list of individual roles available for assignment."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To add roles to the list, ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"Add a Custom Role"),"."),(0,n.kt)("li",{parentName:"ul"},"To remove roles from the list, ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"Lock/Unlock Roles"),"."))))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The chosen users are added to the project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To revoke project membership, select the user and click ",(0,n.kt)("strong",{parentName:"li"},"Delete"),". This action deletes membership, not the user."),(0,n.kt)("li",{parentName:"ul"},"To modify a user's roles in the project, delete them from the project, and then re-add them with modified roles.")))}d.isMDXComponent=!0}}]);