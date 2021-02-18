(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(125)),s={id:"2_Define_PV_&_PVC",title:"Define PV & PVC"},o={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC",id:"Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC",isDocsHomePage:!1,title:"Define PV & PVC",description:"Defining a Persistent Volume",source:"@site/docs\\Kubernetes\\3_kubernetes_storage_&_scheduling\\2_Define_PV_&_PVC.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC.md",version:"current",sidebar:"docs",previous:{title:"Persistent storage",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage"},next:{title:"Configure Storage Server",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage"}},c=[{value:"Defining a Persistent Volume",id:"defining-a-persistent-volume",children:[]},{value:"Defining a Persistent Volume Claim",id:"defining-a-persistent-volume-claim",children:[]},{value:"Using Persistent Volume in Pods",id:"using-persistent-volume-in-pods",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"defining-a-persistent-volume"},"Defining a Persistent Volume"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type - {nfs, fc, azureDisk, ...}"),Object(i.b)("li",{parentName:"ul"},"capacity"),Object(i.b)("li",{parentName:"ul"},"accessModes"),Object(i.b)("li",{parentName:"ul"},"persistentVolumeReclaimPolicy - this parameter is Optional"),Object(i.b)("li",{parentName:"ul"},"Labels")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n    name: pv-nfs-data\nspec:\n    capacity:\n        storage: 10Gi\n    accessModes:\n        - ReadWriteMany\n    nfs:\n        server: 172.16.94.5\n        path: "/export/volumes/pod"\n')),Object(i.b)("h2",{id:"defining-a-persistent-volume-claim"},"Defining a Persistent Volume Claim"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"accessModes"),Object(i.b)("li",{parentName:"ul"},"resources"),Object(i.b)("li",{parentName:"ul"},"storageClassName"),Object(i.b)("li",{parentName:"ul"},"selector")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n    name: pvc-nfs-data\nspec:\n    accessModes:\n        -ReadWriteMany\n    resources:\n        requests:\n            storage: 10Gi\n")),Object(i.b)("h2",{id:"using-persistent-volume-in-pods"},"Using Persistent Volume in Pods"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n    volumes:\n    - name: webcontent\n      persistentVolumeClaim:\n        claimName: pvc-nfs-data\n    containers:\n    - name: nginx\n    ...\n    volumeMounts:\n    - name: webcontent\n      mountPath: "/usr/share/nginx/html/web-app"\n')))}u.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||i;return t?a.a.createElement(d,o(o({ref:n},l),{},{components:t})):a.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);