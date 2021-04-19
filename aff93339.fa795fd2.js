(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return A})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),l=n(7),c=(n(0),n(136)),A={id:"install-calico",title:"Install Calico"},r={unversionedId:"Kubernetes-Advanced/install-calico",id:"Kubernetes-Advanced/install-calico",isDocsHomePage:!1,title:"Install Calico",description:"Dans cet exemple nous allons cr\xe9er un Single Master Kubernetes avec Calico.",source:"@site/docs/Kubernetes-Advanced/install-calico.md",slug:"/Kubernetes-Advanced/install-calico",permalink:"/docs/Kubernetes-Advanced/install-calico",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes-Advanced/install-calico.md",version:"current",lastUpdatedAt:1618828164,sidebar:"docs",previous:{title:"Setup VM",permalink:"/docs/Kubernetes-Advanced/setup-vm"},next:{title:"Install Calico Beta",permalink:"/docs/Kubernetes-Advanced/install-calico-beta"}},s=[{value:"Installation du cluster",id:"installation-du-cluster",children:[{value:"Initialisation du cluster",id:"initialisation-du-cluster",children:[]},{value:"Installation de Calico",id:"installation-de-calico",children:[]},{value:"Installation de Calicoctl",id:"installation-de-calicoctl",children:[]}]},{value:"Ajout des Nodes",id:"ajout-des-nodes",children:[]}],o={toc:s};function u(e){var t=e.components,A=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,A,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Dans cet exemple nous allons cr\xe9er un Single Master Kubernetes avec Calico."),Object(c.b)("p",null,"Les machines doivent \xeatre initialis\xe9es en suivant le tuto: ",Object(c.b)("a",{parentName:"p",href:"/docs/Kubernetes-Advanced/setup-vm"},"Setup VM"),"."),Object(c.b)("p",null,"Lien vers la documentation officelle: ",Object(c.b)("a",{parentName:"p",href:"https://docs.projectcalico.org/getting-started/kubernetes/self-managed-onprem/onpremises"},"docs.projectcalico.org"),"."),Object(c.b)("h2",{id:"installation-du-cluster"},"Installation du cluster"),Object(c.b)("p",null,"Ces \xe9tapes sont \xe0 faire sur la machine Master uniquement."),Object(c.b)("h3",{id:"initialisation-du-cluster"},"Initialisation du cluster"),Object(c.b)("p",null,"Initialisation du cluster. L'adresse choisie ne doit pas \xeatre occup\xe9 dans le r\xe9seau existant. Sous risque que les pods ne soit pas accessibles"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"sudo kubeadm init --pod-network-cidr=192.168.44.0/24\n")),Object(c.b)("p",null,"Ne pas oublier de copier la commande ",Object(c.b)("code",null,"kubeadm join")," donn\xe9e \xe0 la fin de l'installation, qui servira \xe0 lier les nodes avec le master."),Object(c.b)("p",null,Object(c.b)("img",{alt:"install",src:n(211).default})),Object(c.b)("p",null,"Ajout de la commande kubectl ex\xe9cutable par le user courant."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n")),Object(c.b)("h3",{id:"installation-de-calico"},"Installation de Calico"),Object(c.b)("p",null,"Ajout ressources de Calico."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f https://docs.projectcalico.org/manifests/tigera-operator.yaml\n")),Object(c.b)("p",null,"T\xe9l\xe9charger le fichier ",Object(c.b)("code",null,"custom-resources.yaml")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"wget https://docs.projectcalico.org/manifests/custom-resources.yaml\n")),Object(c.b)("p",null,"Modifer le fichier ",Object(c.b)("code",null,"custom-resources.yaml")," avec les informations CIDR choisis pr\xe9c\xe9demment."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: operator.tigera.io/v1\nkind: Installation\nmetadata:\n  name: default\nspec:\n  # Configures Calico networking.\n  calicoNetwork:\n    # Note: The ipPools section cannot be modified post-install.\n    ipPools:\n    - blockSize: 26\n      cidr: 192.168.44.0/24\n      encapsulation: VXLANCrossSubnet\n      natOutgoing: Enabled\n      nodeSelector: all()\n")),Object(c.b)("p",null,"Cr\xe9ation du fichier que nous venons d'\xe9diter."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f custom-resources.yaml\n")),Object(c.b)("p",null,"Les pods suivant doivent se lancer et \xeatre \xe0 l'\xe9tat ",Object(c.b)("em",{parentName:"p"},"Running")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n calico-system\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Pods Post install",src:n(154).default})),Object(c.b)("p",null,"Taint le serveur Master, car aucun pods personnel ne doit s'ex\xe9cuter dessus."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl taint nodes --all node-role.kubernetes.io/master-\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Taint Master",src:n(148).default})),Object(c.b)("p",null,"Confirmer que vous avez bien une Node dans votre cluster"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o wide\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Cluster Node",src:n(149).default})),Object(c.b)("p",null,"F\xe9liciations \ud83c\udf89 !! Vous avez maintenant un simple cluster Kubernetes avec Calico"),Object(c.b)("h3",{id:"installation-de-calicoctl"},"Installation de Calicoctl"),Object(c.b)("p",null,"L'ajout de calicoctl permettra d'ex\xe9cuter des commandes sp\xe9cifique \xe0 la gestion du cluster avec calico."),Object(c.b)("p",null,"Aller dans /usr/bin/local pour d\xe9finir la commande comme \xe9tant dans le ",Object(c.b)("code",null,"PATH")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/bin/\nsudo curl -O -L  https://github.com/projectcalico/calicoctl/releases/download/v3.18.1/calicoctl\nsudo chmod +x calicoctl\n")),Object(c.b)("p",null,"Cr\xe9ation d'un fichier de configuration pour calico"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/calico\nsudo nano /etc/calico/calicoctl.cfg\n")),Object(c.b)("p",null,"Cr\xe9ation du fichier"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: projectcalico.org/v3\nkind: CalicoAPIConfig\nmetadata:\nspec:\n  datastoreType: "kubernetes"\n  kubeconfig: "/home/<user>/.kube/config"\n')),Object(c.b)("p",null,"Tester la bonne installation de calicoctl"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"calicoctl -h\n# Ou\ncalicoctl get nodes\n")),Object(c.b)("h2",{id:"ajout-des-nodes"},"Ajout des Nodes"),Object(c.b)("p",null,"Maintenant que la VM Master est pr\xeate, il faut ajouter les nodes au cluster."),Object(c.b)("p",null,"Ex\xe9cuter la commande kubeadm join r\xe9cup\xe9r\xe9 lors de l'\xe9tape ",Object(c.b)("a",{parentName:"p",href:"install-calico#initialisation-du-cluster"},"Initialisation du cluster")," sur toutes les nodes."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubeadm join 192.168.1.20:6443 --token <your_token> --discovery-token-ca-cert-hash sha256:<your_sha256>\n")),Object(c.b)("p",null,"A la fin de processus, il est possible de lister les nodes du cluster."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"sudo calicoctl node status\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Calico Node Status",src:n(153).default})),Object(c.b)("p",null,"F\xe9liciations \ud83c\udf89 !! Votre cluster Kubernetes est maintenant pr\xeat \xe0 d\xe9ployer de nombreux Pods."))}u.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),u=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=u(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},f=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,A=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),i=u(n),f=a,d=i["".concat(A,".").concat(f)]||i[f]||b[f]||c;return n?l.a.createElement(d,r(r({ref:t},o),{},{components:n})):l.a.createElement(d,r({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,A=new Array(c);A[0]=f;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,A[1]=r;for(var o=2;o<c;o++)A[o]=n[o];return l.a.createElement.apply(null,A)}return l.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},148:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cluster-node-912785f1b98b64ecb624a67b2db2b3e2.png"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/calico-status-299fe83064432ab21822df6941726b61.png"},154:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},211:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install-d8fdff9ba29b09251b715a9dd60d1278.png"}}]);