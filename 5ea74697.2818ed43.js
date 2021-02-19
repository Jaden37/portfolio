(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{125:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),s=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=s(t),p=o,m=u["".concat(l,".").concat(p)]||u[p]||b[p]||a;return t?r.a.createElement(m,c(c({ref:n},i),{},{components:t})):r.a.createElement(m,c({ref:n},i))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(125)),l={id:"8_4_Node_Cordining",title:"Node Cordoning"},c={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining",id:"Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining",isDocsHomePage:!1,title:"Node Cordoning",description:"* Marks a Node as unschedulable",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining.md",version:"current",sidebar:"docs",previous:{title:"Taints and Tolerations",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations"},next:{title:"Manually Scheduling a Pod",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling"}},d=[{value:"Demo",id:"demo",children:[]}],i={toc:d};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Marks a Node as unschedulable"),Object(a.b)("li",{parentName:"ul"},"Prevents new Pods from being scheduled to that Node"),Object(a.b)("li",{parentName:"ul"},"Does not affect any existing Pods on the Node"),Object(a.b)("li",{parentName:"ul"},"This is useful as a preparatory step before a Node reboot or maintenance",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"kubectl cordon c1-node2"))),Object(a.b)("li",{parentName:"ul"},"If you want to gracefully evict your Pods from  Node..., before your maintenance, you'll drain the node to ensure that workload gets scheduled somewhere else in the cluster",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"kubectl drain c1-node2 --ignore-daemonsets")))),Object(a.b)("h2",{id:"demo"},"Demo"),Object(a.b)("p",null,"Node Cordoning"),Object(a.b)("p",null,"Check the file deployment.yaml in the demo of ",Object(a.b)("a",{parentName:"p",href:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations"},"Taints and Tolerations\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#Let's create a deployment with three replicas\nkubectl apply -f deployment.yaml\n\n#Pods spread out evenly across the nodes\nkubectl get pods -o wide\n\n#Let's cordon c1-node2\nkubectl cordon c1-node2\n\n#That won't evict any pods...\nkubectl get pods -o wide\n\n#But if I scale the deployment\nkubectl scale deployment hello-world --replicas=6\n\n#c1-node2 won't get any new pods...one of the other Nodes will get an extra Pod here.\nkubectl get pods -o wide\n\n#Let's drain (remove) the Pods from c1-node2...\nkubectl drain c1-node2 \n\n#Let's try that again since daemonsets aren't scheduled we need to work around them.\nkubectl drain c1-node2 --ignore-daemonsets\n\n#Now all the workload is on c1-node1 and 2\nkubectl get pods -o wide\n\n#We can uncordon c1-node2, but nothing will get scheduled there until there's an event like a scaling operation or an eviction.\n#Something that will cause pods to get created\nkubectl uncordon c1-node2\n\n#So let's scale that Deployment and see where they get scheduled...\nkubectl scale deployment hello-world --replicas=9\n\n#All three get scheduled to the cordoned node\nkubectl get pods -o wide\n\n#Clean up this demo...\nkubectl delete deployment hello-world\n")))}s.isMDXComponent=!0}}]);