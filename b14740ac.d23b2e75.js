(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),o=t(7),r=(t(0),t(123)),l={id:"8_3_Taints_&_Tolerations",title:"Taints and Tolerations"},i={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",id:"Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",isDocsHomePage:!1,title:"Taints and Tolerations",description:"* Taints - ability to control which Pods are scheduled to Nodes",source:"@site/docs\\Kubernetes\\3_kubernetes_storage_&_scheduling\\8_3_Taints_&_Tolerations.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations.md",version:"current",sidebar:"docs",previous:{title:"Affinity & Anti-Affinity",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity"},next:{title:"Node Cordoning",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining"}},c=[{value:"Adding a Taint to a Nodes and a Toleration to a Pod",id:"adding-a-taint-to-a-nodes-and-a-toleration-to-a-pod",children:[]},{value:"Demo",id:"demo",children:[]}],s={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Taints - ability to control which Pods are scheduled to Nodes"),Object(r.b)("li",{parentName:"ul"},"Tolerations - allows a Pod to ignore a Taint and be scheduled as normal on Tainted Nodes"),Object(r.b)("li",{parentName:"ul"},"Useful in scenarios where the cluster administrator needs to influence scheduling without depending on the user",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"key=value:effect"),Object(r.b)("li",{parentName:"ul"},"kubectl taint nodes c1-node1 key=MyTaint:NoSchedule"),Object(r.b)("li",{parentName:"ul"},"They are two different parameters",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"PreferNoSchedule"),Object(r.b)("li",{parentName:"ul"},"NoExecute")))))),Object(r.b)("h2",{id:"adding-a-taint-to-a-nodes-and-a-toleration-to-a-pod"},"Adding a Taint to a Nodes and a Toleration to a Pod"),Object(r.b)("p",null,"Assign a taint to a node"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl taint nodes c1-node1 key=MyTaint:NoSchedule\n")),Object(r.b)("p",null,"Add a toleration to the pod"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'spec:\n    containers:\n    - name: hello-world\n      image: gcr.io/google-samples/hello-app:1.0\n      ports:\n      - containerPort: 8080\n    tolerations:\n    - key: "key"\n      operator: "Equal"\n      value: "MyTaint"\n      effect: "NoSchedule"\n')),Object(r.b)("h2",{id:"demo"},"Demo"),Object(r.b)("p",null,"Controlling Pods placement with Taints and Tolerations"),Object(r.b)("p",null,"Create two files: deployment.yaml"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),Object(r.b)("p",null,"and deployment-tolerations.yaml"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-tolerations\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: hello-world-tolerations\n  template:\n    metadata:\n      labels:\n        app: hello-world-tolerations\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n      tolerations:\n      - key: "key"\n        operator: "Equal"\n        value: "MyTaint"\n        effect: "NoSchedule"\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Let's add a Taint to c1-node1\nkubectl taint nodes c1-node1 key=MyTaint:NoSchedule\n\n#We can see the taint at the node level, look at the Taints section\nkubectl describe node c1-node1\n\n#Let's create a deployment with three replicas\nkubectl apply -f deployment.yaml\n\n#We can see Pods get placed on the non tainted nodes\nkubectl get pods -o wide\n\n#But we we add a deployment with a Toleration...\nkubectl apply -f deployment-tolerations.yaml\n\n#We can see Pods get placed on the non tainted nodes\nkubectl get pods -o wide\n\n#Remove our Taint\nkubectl taint nodes c1-node1 key:NoSchedule-\n\n#Clean up after our demo\nkubectl delete -f deployment-tolerations.yaml\nkubectl delete -f deployment.yaml\n")))}d.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=a,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return t?o.a.createElement(m,i(i({ref:n},s),{},{components:t})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);