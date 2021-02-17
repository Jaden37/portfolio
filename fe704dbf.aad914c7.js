(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return i}));var o=t(3),r=t(7),a=(t(0),t(123)),l={id:"8_5_Manually_Scheduling",title:"Manually Scheduling a Pod"},c={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",id:"Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",isDocsHomePage:!1,title:"Manually Scheduling a Pod",description:"In some scenario you need to manually schedule a pod",source:"@site/docs\\Kubernetes\\3_kubernetes_storage_&_scheduling\\8_5_Manually_Scheduling.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling.md",version:"current",sidebar:"docs",previous:{title:"Node Cordoning",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining"}},u=[{value:"Demo",id:"demo",children:[]}],d={toc:u};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In some scenario you need to manually schedule a pod"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Scheduler populates nodeName"),Object(a.b)("li",{parentName:"ul"},"If you specify nodeName in your Pod definition the Pod will be started on that node"),Object(a.b)("li",{parentName:"ul"},"Node's name must exist"),Object(a.b)("li",{parentName:"ul"},"Still subject to Node resource constraints")),Object(a.b)("h2",{id:"demo"},"Demo"),Object(a.b)("p",null,"Manually scheduling a Pod by specifying nodeName"),Object(a.b)("p",null,"Create pod.yaml file"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-pod\nspec:\n  nodeName: 'c1-node1'\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n    ports:\n    - containerPort: 8080\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f pod.yaml\n\n#Our Pod should be on c1-node1\nkubectl get pod -o wide\n\n#Let's delete our pod, since there's no controller it won't get recreated :(\nkubectl delete pod hello-world-pod \n\n#Now let's cordon node1 again\nkubectl cordon c1-node1\n\n#And try to recreate our pod\nkubectl apply -f pod.yaml\n\n#You can still place a pod on the node since the Pod isn't getting 'scheduled', status is SchedulingDisabled\n#Because we have specify the nodeName in the spec and bypass the scheduling process\nkubectl get pod -o wide\n\n#Can't remove the unmanaged Pod either since it's not managed by a Controller and won't get restarted in another node\nkubectl drain c1-node1 --ignore-daemonsets \n\n#Let's clean up our demo, delete our pod and uncordon the node\nkubectl delete pod hello-world-pod \n \n#Now let's uncordon node1 so it's able to have pods scheduled to it\nkubectl uncordon c1-node1\n")))}i.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),i=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=i(t),b=o,m=s["".concat(l,".").concat(b)]||s[b]||p[b]||a;return t?r.a.createElement(m,c(c({ref:n},d),{},{components:t})):r.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var d=2;d<a;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);