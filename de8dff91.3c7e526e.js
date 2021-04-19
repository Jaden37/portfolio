(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),l=(t(0),t(136)),r={id:"8_2_Affinity_Anti-Affinity",title:"Affinity & Anti-Affinity"},i={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity",id:"Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity",isDocsHomePage:!1,title:"Affinity & Anti-Affinity",description:"The difference between nodeAffinity and nodeSelectors is nodeAffinity allows you to use matchExpressions (for more complex rules).",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity.md",version:"current",lastUpdatedAt:1613556017,sidebar:"docs",previous:{title:"Node Selector",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_1_Node_Selector"},next:{title:"Taints and Tolerations",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations"}},s=[{value:"Using Affinity to Control Pod Placement",id:"using-affinity-to-control-pod-placement",children:[]},{value:"Demo 1",id:"demo-1",children:[]},{value:"Demo 2",id:"demo-2",children:[]}],c={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The difference between nodeAffinity and nodeSelectors is nodeAffinity allows you to use matchExpressions (for more complex rules)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"nodeAffinity - uses Labels on Nodes to make a scheduling decision with matchExpressions",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"requiredDuringSchedulingIgnoredDuringExecution - a pod is not scheduled if the defined rules are not evaluate to true"),Object(l.b)("li",{parentName:"ul"},"preferredDuringSchedulingIgnoredDuringExecution - if the rules are not evaluated to true, the pod is scheduled"))),Object(l.b)("li",{parentName:"ul"},"podAffinity - use labels and selectors to schedule Pods onto the same Node, Zone as some other Pod (with matchLabels or matchExpressions)"),Object(l.b)("li",{parentName:"ul"},"podAntiAffinity - schedule Pods onto the\ndifferent Node, Zone as some other Pod")),Object(l.b)("p",null,"More infi here ",Object(l.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity"},"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity")),Object(l.b)("h2",{id:"using-affinity-to-control-pod-placement"},"Using Affinity to Control Pod Placement"),Object(l.b)("p",null,"In this example, I want to deploy a cache server, on a node that already have a web server (for lower latency)."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'spec:\n    containers:\n    - name: hello-world-cache\n    ...\n    affinity:\n        podAffinity:\n            requiredDuringSchedulingIgnoredDuringExecution:\n            - labelSelector:\n                matchExpressions:\n                - key: app\n                  operator: In\n                  values:\n                  - hello-world-web\n                topologyKey: "kubernetes.io/hostname"\n')),Object(l.b)("h2",{id:"demo-1"},"Demo 1"),Object(l.b)("p",null,"Using Affinity to schedule Pods to Nodes"),Object(l.b)("p",null,"Create a file named deployment-affinity.yaml"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-web\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-web\n  template:\n    metadata:\n      labels:\n        app: hello-world-web\n    spec:\n      containers:\n      - name: hello-world-web\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-cache\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-cache\n  template:\n    metadata:\n      labels:\n        app: hello-world-cache\n    spec:\n      containers:\n      - name: hello-world-cache\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n      affinity:\n        podAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - hello-world-web\n            topologyKey: "kubernetes.io/hostname"\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Let's start off with a deployment of web and cache pods\n#Affinity: we want to have always have a cache pod co-located on a Node where we a Web Pod\nkubectl apply -f deployment-affinity.yaml\n\n#Let's check out the labels on the nodes, look for kubernetes.io/hostname which\n#we're using for our topologykey\nkubectl describe nodes c1-node1 | head\nkubectl get nodes --show-labels\n\n#We can see that web and cache are both on the name node\nkubectl get pods -o wide \n\n#If we scale the web deployment\n#We'll still get spread across nodes in the ReplicaSet, so we don't need to enforce that with affinity\nkubectl scale deployment hello-world-web --replicas=2\nkubectl get pods -o wide \n\n#Then when we scale the cache deployment, it will get scheduled to the same node as the other web server\nkubectl scale deployment hello-world-cache --replicas=2\nkubectl get pods -o wide \n\n#Clean up the resources from these deployments\nkubectl delete -f deployment-affinity.yaml\n")),Object(l.b)("h2",{id:"demo-2"},"Demo 2"),Object(l.b)("p",null,"Using Anti-Affinity to schedule Pods to Nodes"),Object(l.b)("p",null,"Let's create 2 files, deployment-antiaffinity.yaml"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-web\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-web\n  template:\n    metadata:\n      labels:\n        app: hello-world-web\n    spec:\n      containers:\n      - name: hello-world-web\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n      affinity:\n        podAntiAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - hello-world-web\n            topologyKey: "kubernetes.io/hostname"\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-cache\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-cache\n  template:\n    metadata:\n      labels:\n        app: hello-world-cache\n    spec:\n      containers:\n      - name: hello-world-cache\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n      affinity:\n        podAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - hello-world-web\n            topologyKey: "kubernetes.io/hostname"\n')),Object(l.b)("p",null,"and deployment-antiaffinity-corrected.yaml"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-web\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-web\n  template:\n    metadata:\n      labels:\n        app: hello-world-web\n    spec:\n      containers:\n      - name: hello-world-web\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n      affinity:\n        podAntiAffinity:\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            podAffinityTerm:\n              labelSelector:\n                matchExpressions:\n                - key: app\n                  operator: In\n                  values:\n                  - hello-world-web\n              topologyKey: "kubernetes.io/hostname"\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-cache\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-cache\n  template:\n    metadata:\n      labels:\n        app: hello-world-cache\n    spec:\n      containers:\n      - name: hello-world-cache\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n      affinity:\n        podAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - hello-world-web\n            topologyKey: "kubernetes.io/hostname"\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Now, let's test out anti-affinity, deploy web and cache again. \n#But this time we're going to make sure that no more than 1 web pod is on each node with anti-affinity\nkubectl apply -f deployment-antiaffinity.yaml\nkubectl get pods -o wide\n\n#Now let's scale the replicas in the web and cache deployments\nkubectl scale deployment hello-world-web --replicas=4\n\n#One Pod will go Pending because we can have only 1 Web Pod per node \n#when using requiredDuringSchedulingIgnoredDuringExecution in our antiaffinity rule\nkubectl get pods -o wide --selector app=hello-world-web\n\n#To 'fix' this we can change the scheduling rule to preferredDuringSchedulingIgnoredDuringExecution\n#Also going to set the number of replicas to 4\nkubectl apply -f deployment-antiaffinity-corrected.yaml\nkubectl scale deployment hello-world-web --replicas=4\n\n#Now we'll have 4 pods up an running, but doesn't the scheduler already ensure replicaset spread? Yes!\nkubectl get pods -o wide --selector app=hello-world-web\n\n#Let's clean up the resources from this demos\nkubectl delete -f deployment-antiaffinity-corrected.yaml\n")))}p.isMDXComponent=!0},136:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,b=d["".concat(r,".").concat(f)]||d[f]||u[f]||l;return t?a.a.createElement(b,i(i({ref:n},c),{},{components:t})):a.a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);