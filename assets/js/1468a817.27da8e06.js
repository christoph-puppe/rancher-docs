"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98253],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25406:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],o={title:"Creating and Revising RKE Templates",weight:32},s=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates",title:"Creating and Revising RKE Templates",description:"This section describes how to manage RKE templates and revisions. You an create, share, update, and delete templates from the Cluster Management view under RKE1 Configuration > RKE Templates.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates.md",tags:[],version:"current",lastUpdatedAt:1662778329,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Creating and Revising RKE Templates",weight:32},sidebar:"tutorialSidebar",previous:{title:"Access and Sharing",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},next:{title:"Template Enforcement",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a Template",id:"creating-a-template",level:3},{value:"Updating a Template",id:"updating-a-template",level:3},{value:"Deleting a Template",id:"deleting-a-template",level:3},{value:"Creating a Revision Based on the Default Revision",id:"creating-a-revision-based-on-the-default-revision",level:3},{value:"Creating a Revision Based on a Cloned Revision",id:"creating-a-revision-based-on-a-cloned-revision",level:3},{value:"Disabling a Template Revision",id:"disabling-a-template-revision",level:3},{value:"Re-enabling a Disabled Template Revision",id:"re-enabling-a-disabled-template-revision",level:3},{value:"Setting a Template Revision as Default",id:"setting-a-template-revision-as-default",level:3},{value:"Deleting a Template Revision",id:"deleting-a-template-revision",level:3},{value:"Upgrading a Cluster to Use a New Template Revision",id:"upgrading-a-cluster-to-use-a-new-template-revision",level:3},{value:"Exporting a Running Cluster to a New RKE Template and Revision",id:"exporting-a-running-cluster-to-a-new-rke-template-and-revision",level:3}],c={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to manage RKE templates and revisions. You an create, share, update, and delete templates from the ",(0,r.kt)("strong",{parentName:"p"},"Cluster Management")," view under ",(0,r.kt)("strong",{parentName:"p"},"RKE1 Configuration > RKE Templates"),"."),(0,r.kt)("p",null,"Template updates are handled through a revision system. When template owners want to change or update a template, they create a new revision of the template. Individual revisions cannot be edited. However, if you want to prevent a revision from being used to create a new cluster, you can disable it."),(0,r.kt)("p",null,"Template revisions can be used in two ways: to create a new cluster, or to upgrade a cluster that was created with an earlier version of the template. The template creator can choose a default revision, but when end users create a cluster, they can choose any template and any template revision that is available to them. After the cluster is created from a specific revision, it cannot change to another template, but the cluster can be upgraded to a newer available revision of the same template."),(0,r.kt)("p",null,"The template owner has full control over template revisions, and can create new revisions to update the template, delete or disable revisions that should not be used to create clusters, and choose which template revision is the default."),(0,r.kt)("p",null,"This section covers the following topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-template"},"Creating a template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updating-a-template"},"Updating a template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deleting-a-template"},"Deleting a template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-revision-based-on-the-default-revision"},"Creating a revision based on the default revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-revision-based-on-a-cloned-revision"},"Creating a revision based on a cloned revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabling-a-template-revision"},"Disabling a template revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#re-enabling-a-disabled-template-revision"},"Re-enabling a disabled template revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-a-template-revision-as-default"},"Setting a template revision as default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deleting-a-template-revision"},"Deleting a template revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrading-a-cluster-to-use-a-new-template-revision"},"Upgrading a cluster to use a new template revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exporting-a-running-cluster-to-a-new-rke-template-and-revision"},"Exporting a running cluster to a new RKE template and revision"))),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You can create RKE templates if you have the ",(0,r.kt)("strong",{parentName:"p"},"Create RKE Templates")," permission, which can be ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions"},"given by an administrator.")),(0,r.kt)("p",null,"You can revise, share, and delete a template if you are an owner of the template. For details on how to become an owner of a template, refer to ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates#sharing-ownership-of-templates"},"the documentation on sharing template ownership.")),(0,r.kt)("h3",{id:"creating-a-template"},"Creating a Template"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 configuration > Node Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Template"),"."),(0,r.kt)("li",{parentName:"ol"},"Provide a name for the template. An auto-generated name is already provided for the template' first version, which is created along with this template."),(0,r.kt)("li",{parentName:"ol"},"Optional: Share the template with other users or groups by ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates#sharing-templates-with-specific-users-or-groups"},"adding them as members.")," You can also make the template public to share with everyone in the Rancher setup."),(0,r.kt)("li",{parentName:"ol"},"Then follow the form on screen to save the cluster configuration parameters as part of the template's revision. The revision can be marked as default for this template.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," An RKE template with one revision is configured. You can use this RKE template revision later when you ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"provision a Rancher-launched cluster"),". After a cluster is managed by an RKE template, it cannot be disconnected and the option to uncheck ",(0,r.kt)("strong",{parentName:"p"},"Use an existing RKE Template and Revision")," will be unavailable."),(0,r.kt)("h3",{id:"updating-a-template"},"Updating a Template"),(0,r.kt)("p",null,"When you update an RKE template, you are creating a revision of the existing template. Clusters that were created with an older version of the template can be updated to match the new revision."),(0,r.kt)("p",null,"You can't edit individual revisions. Since you can't edit individual revisions of a template, in order to prevent a revision from being used, you can ",(0,r.kt)("a",{parentName:"p",href:"#disabling-a-template-revision"},"disable it.")),(0,r.kt)("p",null,"When new template revisions are created, clusters using an older revision of the template are unaffected."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > RKE Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the template that you want to edit and click the ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,r.kt)("li",{parentName:"ol"},"Edit the required information and click ",(0,r.kt)("strong",{parentName:"li"},"Save"),"."),(0,r.kt)("li",{parentName:"ol"},"Optional: You can change the default revision of this template and also change who it is shared with.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The template is updated. To apply it to a cluster using an older version of the template, refer to the section on ",(0,r.kt)("a",{parentName:"p",href:"#upgrading-a-cluster-to-use-a-new-template-revision"},"upgrading a cluster to use a new revision of a template.")),(0,r.kt)("h3",{id:"deleting-a-template"},"Deleting a Template"),(0,r.kt)("p",null,"When you no longer use an RKE template for any of your clusters, you can delete it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 configuration > RKE Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the RKE template that you want to delete and click the ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"."),(0,r.kt)("li",{parentName:"ol"},"Confirm the deletion.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The template is deleted."),(0,r.kt)("h3",{id:"creating-a-revision-based-on-the-default-revision"},"Creating a Revision Based on the Default Revision"),(0,r.kt)("p",null,"You can clone the default template revision and quickly update its settings rather than creating a new revision from scratch. Cloning templates saves you the hassle of re-entering the access keys and other parameters needed for cluster creation."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > RKE Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the RKE template that you want to clone and click the ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > New Revision from Default"),"."),(0,r.kt)("li",{parentName:"ol"},"Complete the rest of the form to create a new revision.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The RKE template revision is cloned and configured."),(0,r.kt)("h3",{id:"creating-a-revision-based-on-a-cloned-revision"},"Creating a Revision Based on a Cloned Revision"),(0,r.kt)("p",null,"When creating new RKE template revisions from your user settings, you can clone an existing revision and quickly update its settings rather than creating a new one from scratch. Cloning template revisions saves you the hassle of re-entering the cluster parameters."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,r.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the template revision you want to clone. Then select ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Clone Revision"),"."),(0,r.kt)("li",{parentName:"ol"},"Complete the rest of the form.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The RKE template revision is cloned and configured. You can use the RKE template revision later when you provision a cluster. Any existing cluster using this RKE template can be upgraded to this new revision."),(0,r.kt)("h3",{id:"disabling-a-template-revision"},"Disabling a Template Revision"),(0,r.kt)("p",null,"When you no longer want an RKE template revision to be used for creating new clusters, you can disable it. A disabled revision can be re-enabled."),(0,r.kt)("p",null,"You can disable the revision if it is not being used by any cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > RKE Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the template revision you want to disable. Then select ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Disable"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The RKE template revision cannot be used to create a new cluster."),(0,r.kt)("h3",{id:"re-enabling-a-disabled-template-revision"},"Re-enabling a Disabled Template Revision"),(0,r.kt)("p",null,"If you decide that a disabled RKE template revision should be used to create new clusters, you can re-enable it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,r.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the template revision you want to re-enable. Then select ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Enable"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The RKE template revision can be used to create a new cluster."),(0,r.kt)("h3",{id:"setting-a-template-revision-as-default"},"Setting a Template Revision as Default"),(0,r.kt)("p",null,"When end users create a cluster using an RKE template, they can choose which revision to create the cluster with. You can configure which revision is used by default."),(0,r.kt)("p",null,"To set an RKE template revision as default,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > RKE templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the RKE template revision that should be default and click the ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Set as Default"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The RKE template revision will be used as the default option when clusters are created with the template."),(0,r.kt)("h3",{id:"deleting-a-template-revision"},"Deleting a Template Revision"),(0,r.kt)("p",null,"You can delete all revisions of a template except for the default revision."),(0,r.kt)("p",null,"To permanently delete a revision,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > RKE templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the RKE template revision that should be deleted and click the ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Delete"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The RKE template revision is deleted."),(0,r.kt)("h3",{id:"upgrading-a-cluster-to-use-a-new-template-revision"},"Upgrading a Cluster to Use a New Template Revision"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section assumes that you already have a cluster that ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates"},"has an RKE template applied.")),(0,r.kt)("p",{parentName:"div"},"This section also assumes that you have ",(0,r.kt)("a",{parentName:"p",href:"#updating-a-template"},"updated the template that the cluster is using")," so that a new template revision is available."))),(0,r.kt)("p",null,"To upgrade a cluster to use a new template revision,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the cluster that you want to upgrade and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Options")," section, click the dropdown menu for the template revision, then select the new template revision."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The cluster is upgraded to use the settings defined in the new template revision."),(0,r.kt)("h3",{id:"exporting-a-running-cluster-to-a-new-rke-template-and-revision"},"Exporting a Running Cluster to a New RKE Template and Revision"),(0,r.kt)("p",null,"You can save an existing cluster's settings as an RKE template."),(0,r.kt)("p",null,"This exports the cluster's settings as a new RKE template, and also binds the cluster to that template. The result is that the cluster can only be changed if the ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#updating-a-template"},"template is updated,")," and the cluster is upgraded to ","[use a newer version of the template.]"),(0,r.kt)("p",null,"To convert an existing cluster to use an RKE template,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the cluster that will be converted to use an RKE template and ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Save as RKE Template"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the RKE template in the form that appears, and click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new RKE template is created."),(0,r.kt)("li",{parentName:"ul"},"The cluster is converted to use the new template."),(0,r.kt)("li",{parentName:"ul"},"New clusters can be ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#creating-a-cluster-from-an-rke-template"},"created from the new template and revision."))))}d.isMDXComponent=!0}}]);