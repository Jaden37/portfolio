(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(m,s(s({ref:n},c),{},{components:t})):a.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(123)),o={id:"4_Storage_Class",title:"Storage Class"},s={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/4_Storage_Class",id:"Kubernetes/3_kubernetes_storage_&_scheduling/4_Storage_Class",isDocsHomePage:!1,title:"Storage Class",description:"* Define tiers/classes of storage",source:"@site/docs\\Kubernetes\\3_kubernetes_storage_&_scheduling\\4_Storage_Class.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/4_Storage_Class",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/4_Storage_Class",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/4_Storage_Class.md",version:"current",sidebar:"docs",previous:{title:"Configure Storage Server",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage"},next:{title:"Why did we need Configuration as Data ?",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_0_Pods_with_env"}},l=[{value:"Dynamic Provisioning Workflow",id:"dynamic-provisioning-workflow",children:[]},{value:"Define StorageClass in Azure",id:"define-storageclass-in-azure",children:[]},{value:"Dynamic Provisioning",id:"dynamic-provisioning",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define tiers/classes of storage"),Object(i.b)("li",{parentName:"ul"},"Enable Dynamic Provisioning"),Object(i.b)("li",{parentName:"ul"},"Define infrastructure specific parameters"),Object(i.b)("li",{parentName:"ul"},"Reclaim Policy")),Object(i.b)("h2",{id:"dynamic-provisioning-workflow"},"Dynamic Provisioning Workflow"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a StorageClass - define the type of storage and reclaim policiy (optionnal)"),Object(i.b)("li",{parentName:"ul"},"Create a PersistentVolumeClaim - pointing to the StorageClass"),Object(i.b)("li",{parentName:"ul"},"Define Volume in Pod Spec - define a PersistentVolumeClaim pointing that PVC that we just created.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When the Pods start up, the PV is dynamically allocated")))),Object(i.b)("h2",{id:"define-storageclass-in-azure"},"Define StorageClass in Azure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n    name: managed-premium\nparameters:\n#Specific to our storage provisioner\n    kind: Managed\n    storageaccounttype: Premium_LRS\nprovisioner: kubernetes.io/azure-disk\n")),Object(i.b)("p",null,'Is this example no persistentVolumeClaimPolicy is defined. The default value is "delete", when I delete the PVC the underlying PV will be deleted.'),Object(i.b)("h2",{id:"dynamic-provisioning"},"Dynamic Provisioning"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n    name: pvc-azure-managed\nspec:\n    accessModes:\n    - ReadWriteOnce\n    storageClassName: managed-premium\n    resources:\n        requests:\n            storage: 10Gi\n")))}u.isMDXComponent=!0}}]);