(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{132:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||s;return t?a.a.createElement(m,o(o({ref:n},i),{},{components:t})):a.a.createElement(m,o({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),s=(t(0),t(132)),l={id:"install-kubespray",title:"Install Kubespray"},o={unversionedId:"Kubernetes-Advanced/install-kubespray",id:"Kubernetes-Advanced/install-kubespray",isDocsHomePage:!1,title:"Install Kubespray",description:"Cette page n'est pas compl\xe8te et contient peut \xeatre des informations erron\xe9es.",source:"@site/docs/Kubernetes-Advanced/install-kubespray.md",slug:"/Kubernetes-Advanced/install-kubespray",permalink:"/docs/Kubernetes-Advanced/install-kubespray",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes-Advanced/install-kubespray.md",version:"current",sidebar:"docs",previous:{title:"Install Calico Beta",permalink:"/docs/Kubernetes-Advanced/install-calico-beta"},next:{title:"Configure a Master Slave Replication",permalink:"/docs/PostgreSQL/configure-master-slave"}},c=[{value:"Install Kubespray",id:"install-kubespray",children:[]}],i={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Cette page n'est pas compl\xe8te et contient peut \xeatre des informations erron\xe9es."))),Object(s.b)("h2",{id:"install-kubespray"},"Install Kubespray"),Object(s.b)("p",null,"setup 3 machines master (avec lien kuber de base)"),Object(s.b)("p",null,"Install de kubespray (sur le master 1)"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kubernetes-sigs/kubespray.git\nsudo apt install -y python3-pip\ncd kubespray\npip3 install -r requirements.txt\ncp -rfp inventory/sample inventory/mycluster\n")),Object(s.b)("p",null,"Ne pas oublier d'ajouter le dossier ",Object(s.b)("code",null,"/home/jules/.local/bin")," dans le PATH"),Object(s.b)("p",null,"D\xe9claration des IPs du cluster"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"declare -a IPS=(192.168.1.20 192.168.1.21 192.168.1.22 192.168.1.24 192.168.1.26)\n")),Object(s.b)("p",null,"Cr\xe9ation du fichier hosts.ini"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"sudo nano inventory/mycluster/hosts.ini\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"# ## Configure 'ip' variable to bind kubernetes services on a\n# ## different ip than the default iface\n# ## We should set etcd_member_name for etcd cluster. The node that is not a etcd member do not need to set the value, or can set the empty string value.\n[all]\n# node1 ansible_host=95.54.0.12  # ip=10.3.0.1 etcd_member_name=etcd1\nmaster1 ansible_host=192.168.1.20\nmaster2 ansible_host=192.168.1.21\nmaster3 ansible_host=192.168.1.22\n\nnode1 ansible_host=192.168.1.24\nnode2 ansible_host=192.168.1.26\n\n[kube_control_plane]\nmaster1\nmaster2\nmaster3\n\n[etcd]\nmaster1\nmaster2\nmaster3\n\n[kube-node]\nnode1\nnode2\n\n[k8s-cluster:children]\nkube_control_plane\nkube-node\n")),Object(s.b)("p",null,"creation d'une public private key le master 1"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\n")),Object(s.b)("p",null,"copie de la cl\xe9 pub sur les autres serveurs (ne pas oublier de la faire avec l'ip du serbeur master lui m\xeame => si kubespray est install\xe9 sur un autre master)"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id -i ~/.ssh/id_rsa.pub jules@192.168.1.24\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/kubespray\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'ansible-playbook -i inventory/mycluster/hosts.ini cluster.yml -b -v --private-key=~/.ssh/id_rsa --extra-vars="ansible_become_pass=<yourStr0ngP@assword>"\nansible-playbook -i inventory/mycluster/hosts.ini --become --become-user=root cluster.yml -v --private-key=~/.ssh/id_rsa --extra-vars="ansible_become_pass=<yourStr0ngP@assword>"\n')))}u.isMDXComponent=!0}}]);