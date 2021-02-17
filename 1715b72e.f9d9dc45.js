(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),u=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?s.a.createElement(m,l(l({ref:t},i),{},{components:n})):s.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<r;i++)o[i]=n[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),s=n(7),r=(n(0),n(123)),o={id:"3_Configure_server_storage",title:"Configure Storage Server"},l={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage",id:"Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage",isDocsHomePage:!1,title:"Configure Storage Server",description:"Install and configure nfs-kerner-server",source:"@site/docs\\Kubernetes\\3_kubernetes_storage_&_scheduling\\3_Configure_server_storage.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage",editUrl:"https://github.com/Jaden37/docusaurus/docs/Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage.md",version:"current",sidebar:"docs",previous:{title:"Define PV & PVC",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC"},next:{title:"Storage Class",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/4_Storage_Class"}},c=[{value:"Demo 1",id:"demo-1",children:[]},{value:"Demo 2",id:"demo-2",children:[]}],i={toc:c};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Install and configure nfs-kerner-server"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Install NFS Server and create the directory for our exports\nsudo apt install -y nfs-kerner-server\nsudo mkdir -p /export/volumes/pod\n\n#Configure our NFS Export in /etc/export for /export/volumes. Using no_root_squash and no_subtree_check to \n#allow applications to mount subdirectories of the export directly.\nsudo bash -c 'echo \"/export/volumes  *(rw,no_root_squash,no_subtree_check)\" > /etc/exports'\ncat /etc/exports\nsudo systemctl restart nfs-kernel-server.service\nexit\n")),Object(r.b)("p",null,"On each Node (not the master server), install the NFS Client"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y nfs-common\n")),Object(r.b)("p",null,"Test the installation on one Node. If this test don't work create persistent volume in Kubernetes cannot be possible."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Try to mount a volume\nsudo mount -t nfs4 c1-storage1:/export/volumes /mnt/\nmount | grep nfs\n#Unmount it\nsudo umount /mnt\nexit\n")),Object(r.b)("h2",{id:"demo-1"},"Demo 1"),Object(r.b)("p",null,"Static Provisioning Persistent Volumes"),Object(r.b)("p",null,"create a file nfs.pv.yaml"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-nfs-data\nspec:\n  accessModes:\n    - ReadWriteMany\n  capacity:\n    storage: 10Gi\n  persistentVolumeReclaimPolicy: Retain\n  nfs:\n    server: 192.168.4.103\n    path: "/export/volumes/pod"\n')),Object(r.b)("p",null,"and a nfs.pvc.yaml file"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-nfs-data\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 10Gi\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Create a PV with the read/write many and retain as the reclaim policy\nkubectl apply -f nfs.pv.yaml\n\n\n#Review the created resources, Status, Access Mode and Reclaim policy is set to Reclaim rather than Delete. \nkubectl get PersistentVolume pv-nfs-data\n\n#Look more closely at the PV and it's configuration\nkubectl describe PersistentVolume pv-nfs-data\n\n#Create a PVC on that PV\nkubectl apply -f nfs.pvc.yaml\n\n\n#Check the status, now it's Bound due to the PVC on the PV. See the claim...\nkubectl get PersistentVolume\n\n#Check the status, Bound.\n#We defined the PVC it statically provisioned the PV...but it's not mounted yet.\nkubectl get PersistentVolumeClaim pvc-nfs-data\nkubectl describe PersistentVolumeClaim pvc-nfs-data\n")),Object(r.b)("p",null,"Create some content in our storage server"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"ssh jules@c1-storage1\nsudo bash -c 'echo \"Hello from our NFS mount!!!\" > /export/volumes/pod/demo.html'\ncat /export/volumes/pod/demo.html\nexit\n")),Object(r.b)("p",null,"Create a nfs.nginx.yaml file"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-nfs-deployment\nspec:  \n  replicas: 1\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      volumes:\n      - name: webcontent\n        persistentVolumeClaim:\n          claimName: pvc-nfs-data\n      containers:\n      - name: nginx\n        image: nginx\n        ports:\n        - containerPort: 80\n        volumeMounts:\n        - name: webcontent\n          mountPath: "/usr/share/nginx/html/web-app"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-nfs-service\nspec:\n  selector:\n    app: nginx\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 80\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Let's create a Pod (in a Deployment and add a Service) with a PVC on pvc-nfs-data\nkubectl apply -f nfs.nginx.yaml\nkubectl get service nginx-nfs-service\n#Create an environment variable, that containt the IP address of the service\nSERVICEIP=$(kubectl get service | grep nginx-nfs-service | awk '{ print $3 }')\n\n#Check to see if our pods are Running before proceeding\nkubectl get pods\n\n#Let's access that application to see our application data...\ncurl http://$SERVICEIP/web-app/demo.html\n")),Object(r.b)("p",null,"Check the mouted volume in the container"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Check the Mounted By output for which Pod(s) are accessing this storage\nkubectl describe PersistentVolumeClaim pvc-nfs-data\n \n#If we go 'inside' the Pod/Container, let's look at where the PV is mounted\nkubectl exec -it nginx-nfs-deployment-[tab][tab] -- /bin/bash\nls /usr/share/nginx/html/web-app\ncat /usr/share/nginx/html/web-app/demo.html\nexit\n")),Object(r.b)("p",null,"Check the mouted volume on the Node"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#What node is this pod on?\nkubectl get pods -o wide\n\n#Let's log into that node and look at the mounted volumes...it's the kubelets job to make the device/mount available.\nssh c1-node[X]\nmount | grep nfs\nexit\n")),Object(r.b)("p",null,"Delete the pod, can we get our data ?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Let's delete the pod and see if we still have access to our data in our PV...\nkubectl get pods\nkubectl delete pods nginx-nfs-deployment-[tab][tab]\n\n#We get a new pod...but is our app data still there???\nkubectl get pods\n\n\n#Let's access that application to see our application data...yes!\ncurl http://$SERVICEIP/web-app/demo.html\n")),Object(r.b)("h2",{id:"demo-2"},"Demo 2"),Object(r.b)("p",null,"Control the Persistent Volume with Access Modes (Demo 1 is required)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#scale up the deployment to 4 replicas\nkubectl scale deployment nginx-nfs-deployment --replicas=4\n\n#Now let's look at who's attached to the pvc, all 4 Pods\n#Our AccessMode for this PV and PVC is RWX ReadWriteMany\nkubectl describe PersistentVolumeClaim \n\n#Now when we access our application we're getting load balanced across all the pods hitting the same PV data\ncurl http://$SERVICEIP/web-app/demo.html\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Let's delete our deployment\nkubectl delete deployment nginx-nfs-deployment\n\n#Check status, still bound on the PV...why is that...\nkubectl get PersistentVolume \n\n#Because the PVC still exists...\nkubectl get PersistentVolumeClaim\n\n#Can re-use the same PVC and PV from a Pod definition...yes! Because I didn't delete the PVC.\nkubectl apply -f nfs.nginx.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#Our app is up and running\nkubectl get pods \n\n#But if I delete the deployment\nkubectl delete deployment nginx-nfs-deployment\n\n#AND I delete the PersistentVolumeClaim\nkubectl delete PersistentVolumeClaim pvc-nfs-data\n\n#My status is now Released...which means no one can claim this PV\nkubectl get PersistentVolume\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#But let's try to use it and see what happend, recreate the PVC for this PV\nkubectl apply -f nfs.pvc.yaml\n\n#Then try to use the PVC/PV in a Pod definition\nkubectl apply -f nfs.nginx.yaml\n\n#My pod creation is Pending\nkubectl get pods\n\n#As is my PVC Status...Pending...because that PV is released and our Reclaim Policy is Retain\nkubectl get PersistentVolumeClaim\nkubectl get PersistentVolume\n\n#Need to delete the PV if we want to 'reuse' that exact PV...to 're-create' the PV\nkubectl delete deployment nginx-nfs-deployment\nkubectl delete pvc pvc-nfs-data\nkubectl delete pv pv-nfs-data\n")),Object(r.b)("p",null,"Now if I come back and recreate the PV, then I can get access to the underlying storage again with this deployment and its PVC and this process of deleting that PV puts that decision of do I want to be able to reuse that storage again into the administrator's hands ",Object(r.b)("strong",{parentName:"p"},"Kubernetes doesnt automatically make this decision for you.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#If we recreate the PV, PVC, and the pods. we'll be able to re-deploy. \n#The clean up of the data is defined by the reclaim policy. (Delete will clean up for you, useful in dynamic provisioning scenarios)\n#But in this case, since it's NFS, we have to clean it up and remove the files\n#Nothing will prevent a user from getting this acess to this data, so it's imperitive to clean up. \nkubectl apply -f nfs.pv.yaml\nkubectl apply -f nfs.pvc.yaml\nkubectl apply -f nfs.nginx.yaml\nkubectl get pods \n\n\n#Time to clean up for the next demo\nkubectl delete -f nfs.nginx.yaml\nkubectl delete pvc pvc-nfs-data\nkubectl delete pv pv-nfs-data\n")))}u.isMDXComponent=!0}}]);