(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),l=(n(0),n(128)),s={id:"7_Scheduling",title:"Scheduling"},a={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling",id:"Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling",isDocsHomePage:!1,title:"Scheduling",description:"Scheduling inside Kubernetes, is the part of the master Node (he has the responsibility for scheduling workload).",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling.md",version:"current",sidebar:"docs",previous:{title:"Accessing a Private Container Registry",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry"},next:{title:"Control Scheduling",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_0_Control_scheduling"}},i=[{value:"Kubernetes has one job...",id:"kubernetes-has-one-job",children:[]},{value:"starting Pods on Nodes",id:"starting-pods-on-nodes",children:[]},{value:"Scheduling in Kubernetes",id:"scheduling-in-kubernetes",children:[]},{value:"The goal of Scheduling",id:"the-goal-of-scheduling",children:[]},{value:"Scheduling Process",id:"scheduling-process",children:[]},{value:"Node Selection",id:"node-selection",children:[]},{value:"Resources Request",id:"resources-request",children:[]},{value:"Demo 1",id:"demo-1",children:[]},{value:"Demo 2",id:"demo-2",children:[]}],c={toc:i};function u(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Scheduling inside Kubernetes, is the part of the master Node (he has the responsibility for scheduling workload)."),Object(l.b)("h3",{id:"kubernetes-has-one-job"},"Kubernetes has one job..."),Object(l.b)("h3",{id:"starting-pods-on-nodes"},"starting Pods on Nodes"),Object(l.b)("p",null,"But to so this, a lot of decisions have to be made (enough resources, policies in the cluster)."),Object(l.b)("h2",{id:"scheduling-in-kubernetes"},"Scheduling in Kubernetes"),Object(l.b)("p",null,"Scheduler is the process of selecting a node to start a Pod on inside of our Clutser"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Selecting a Node to start a Pod on - one of the core components in the master node"),Object(l.b)("li",{parentName:"ul"},"kube-scheduler - this is the default scheduler"),Object(l.b)("li",{parentName:"ul"},"you can create our own scheduler")),Object(l.b)("h2",{id:"the-goal-of-scheduling"},"The goal of Scheduling"),Object(l.b)("p",null,"Is find the best, most feasible node in the cluster to run a pod."),Object(l.b)("p",null,"To make this decisions, he have two things:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Resources - cpu, memory, storage"),Object(l.b)("li",{parentName:"ul"},"Policy - ex: two Pod on different nodes or zones")),Object(l.b)("h2",{id:"scheduling-process"},"Scheduling Process"),Object(l.b)("p",null,Object(l.b)("img",{alt:"scheduling process",src:n(212).default})),Object(l.b)("h2",{id:"node-selection"},"Node Selection"),Object(l.b)("p",null,"Let's look more closely on the node selection process."),Object(l.b)("p",null,"The node selection have 3 phases:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Filetering - remove node that cannot run our pod",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"From all the nodes"),Object(l.b)("li",{parentName:"ul"},"Apply filters"),Object(l.b)("li",{parentName:"ul"},"Filtered Nodes"),Object(l.b)("li",{parentName:"ul"},"Hard constraints - pod spec, node resources, etc..."),Object(l.b)("li",{parentName:"ul"},"If no node is found, the pod is unscheduable and will fail scheduling"))),Object(l.b)("li",{parentName:"ul"},"Scoring - process of yielding a list of eligible nodes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Scoring function - Start from the filtered list"),Object(l.b)("li",{parentName:"ul"},"Feasible Nodes"),Object(l.b)("li",{parentName:"ul"},"Policu constraints - image on the node, etc..."),Object(l.b)("li",{parentName:"ul"},"Find the best node to run our pod"))),Object(l.b)("li",{parentName:"ul"},"Binding - updating the node name in our pods object",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Selected Nodes List - the highest priority nodes"),Object(l.b)("li",{parentName:"ul"},"Ties are broken - if they are multiple nodes, a random was selected"),Object(l.b)("li",{parentName:"ul"},"Update API Object")))),Object(l.b)("h2",{id:"resources-request"},"Resources Request"),Object(l.b)("p",null,"Resource are important in the process of shoosing a node"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Setting requests will cause the scheduler to find a Node to fit the workload/Pod",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"requests are guarantees"),Object(l.b)("li",{parentName:"ul"},"CPU"),Object(l.b)("li",{parentName:"ul"},"Memory"))),Object(l.b)("li",{parentName:"ul"},"Allocatable resources per Node"),Object(l.b)("li",{parentName:"ul"},"Pods that need to be scheduled but there not enough resources available will go Pending")),Object(l.b)("h2",{id:"demo-1"},"Demo 1"),Object(l.b)("p",null,"Finding scheduling information"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Let's create a deployment with three replicas\nkubectl apply -f deployment.yaml\n\n#Pods spread out evenly across the Nodes due to our scoring functions for selector spread during Scoring.\nkubectl get pods -o wide\n\n#We can look at the Pods events to see the scheduler making its choice\nkubectl describe pods \n\n#If we scale our deployment to 6...\nkubectl scale deployment hello-world --replicas=6\n\n#We can see that the scheduler works to keep load even across the nodes.\nkubectl get pods -o wide\n\n#We can see the nodeName populated for this node\nkubectl get pods hello-world-[tab][tab] -o yaml\n\n#Clean up this demo...and delete its resources\nkubectl delete deployment hello-world\n")),Object(l.b)("h2",{id:"demo-2"},"Demo 2"),Object(l.b)("p",null,"Scheduling Pods with resource requests. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Start a watch, the pods will go from Pending->ContainerCreating->Running\n#Each pod has a 1 core CPU request.\nkubectl get pods --watch &\nkubectl apply -f requests.yaml\n\n#We created three pods, one but one is not starting...\nkubectl get pods -o wide\n\n#Let's scale our deployment to 6 replica.  These pods will stay pending.  Some pod names may be repeated.\nkubectl scale deployment hello-world-requests --replicas=6\n\n#We see that three Pods are pending...why?\nkubectl get pods -o wide\nkubectl get pods -o wide | grep Pending\n\n#Let's look at why the Pod is Pending...check out the Pod's events...\nkubectl describe pods\n\n#Now let's look at the node's Allocations...we've allocated 62% of our CPU...\n#1 User pod using 1 whole CPU, one system Pod using 250 millicores of a CPU and \n#looking at allocatable resources, we have only 2 whole Cores available for use.\n#The next pod coming along wants 1 whole core, and tha'ts not available.\n#The scheduler can't find a place in this cluster to place our workload...is this good or bad?\nkubectl describe node c1-node1\n\n#Clean up after this demo\nkubectl delete deployment hello-world-requests\n\n#stop the watch\nfg\nctrl+c\n")))}u.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(s,".").concat(p)]||d[p]||b[p]||l;return n?r.a.createElement(h,a(a({ref:t},c),{},{components:n})):r.a.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scheduling_process-f1e8f998749ef2a055f772fb09810ddd.png"}}]);