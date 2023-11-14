"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Advanced Options and Configuration"},i=void 0,l={unversionedId:"advanced",id:"advanced",title:"Advanced Options and Configuration",description:"This section contains advanced information describing the different ways you can run and manage RKE2.",source:"@site/docs/advanced.md",sourceDirName:".",slug:"/advanced",permalink:"/advanced",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/advanced.md",tags:[],version:"current",lastUpdatedAt:1699996945,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{title:"Advanced Options and Configuration"},sidebar:"mySidebar",previous:{title:"Helm Integration",permalink:"/helm"},next:{title:"CLI Tools",permalink:"/reference/cli_tools"}},s={},p=[{value:"Certificate Rotation",id:"certificate-rotation",level:2},{value:"Auto-Deploying Manifests",id:"auto-deploying-manifests",level:2},{value:"Configuring containerd",id:"configuring-containerd",level:2},{value:"Configuring an HTTP proxy",id:"configuring-an-http-proxy",level:2},{value:"Node Labels and Taints",id:"node-labels-and-taints",level:2},{value:"Starting the Server with the Installation Script",id:"starting-the-server-with-the-installation-script",level:2},{value:"Disabling Server Charts",id:"disabling-server-charts",level:2},{value:"Installation on classified AWS regions or networks with custom AWS API endpoints",id:"installation-on-classified-aws-regions-or-networks-with-custom-aws-api-endpoints",level:2},{value:"Control Plane Component Resource Requests/Limits",id:"control-plane-component-resource-requestslimits",level:2},{value:"Extra Control Plane Component Volume Mounts",id:"extra-control-plane-component-volume-mounts",level:2},{value:"RW Host Path Volume Mount",id:"rw-host-path-volume-mount",level:3},{value:"RO Host Path Volume Mount",id:"ro-host-path-volume-mount",level:3},{value:"Extra Control Plane Component Environment Variables",id:"extra-control-plane-component-environment-variables",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section contains advanced information describing the different ways you can run and manage RKE2."),(0,r.kt)("h2",{id:"certificate-rotation"},"Certificate Rotation"),(0,r.kt)("p",null,"By default, certificates in RKE2 expire in 12 months."),(0,r.kt)("p",null,"If the certificates are expired or have fewer than 90 days remaining before they expire, the certificates are rotated when RKE2 is restarted."),(0,r.kt)("p",null,"As of v1.21.8+rke2r1, certificates can also be rotated manually. To do this, it is best to stop the rke2-server process, rotate the certificates, then start the process up again: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl stop rke2-server\nrke2 certificate rotate\nsystemctl start rke2-server\n")),(0,r.kt)("p",null,"To renew agent certificates, restart rke2-agent in agent nodes. Agent certificates are renewed every time the agent starts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl restart rke2-agent\n")),(0,r.kt)("p",null,"It is also possible to rotate an individual service by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--service")," flag, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate --service api-server"),". See ",(0,r.kt)("a",{parentName:"p",href:"/security/certificates#rotating-client-and-server-certificates-manually"},"Certificate Management")," for more details."),(0,r.kt)("h2",{id:"auto-deploying-manifests"},"Auto-Deploying Manifests"),(0,r.kt)("p",null,"Any file found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests")," will automatically be deployed to Kubernetes in a manner similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply"),"."),(0,r.kt)("p",null,"For information about deploying Helm charts using the manifests directory, refer to the section about ",(0,r.kt)("a",{parentName:"p",href:"/helm"},"Helm.")),(0,r.kt)("h2",{id:"configuring-containerd"},"Configuring containerd"),(0,r.kt)("p",null,"RKE2 will generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," for containerd in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/etc/containerd/config.toml"),"."),(0,r.kt)("p",null,"For advanced customization of this file you can create another file called ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml.tmpl")," in the same directory and it will be used instead."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml.tmpl")," will be treated as a Go template file, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.Node")," structure is being passed to the template. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/pkg/agent/templates/templates.go#L16-L32"},"this template")," for an example of how to use the structure to customize the configuration file."),(0,r.kt)("h2",{id:"configuring-an-http-proxy"},"Configuring an HTTP proxy"),(0,r.kt)("p",null,"If you are running RKE2 in an environment, which only has external connectivity through an HTTP proxy, you can configure your proxy settings on the RKE2 systemd service. These proxy settings will then be used in RKE2 and passed down to the embedded containerd and kubelet."),(0,r.kt)("p",null,"Add the necessary ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," variables to the environment file of your systemd service, usually:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/default/rke2-server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/default/rke2-agent"))),(0,r.kt)("p",null,"RKE2 will automatically add the cluster internal Pod and Service IP ranges and cluster DNS domain to the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," entries. You should ensure that the IP address ranges used by the Kubernetes nodes themselves (i.e. the public and private IPs of the nodes) are included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," list, or that the nodes can be reached through the proxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP_PROXY=http://your-proxy.example.com:8888\nHTTPS_PROXY=http://your-proxy.example.com:8888\nNO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\n")),(0,r.kt)("p",null,"If you want to configure the proxy settings for containerd without affecting RKE2 and the Kubelet, you can prefix the variables with ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINERD_"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CONTAINERD_HTTP_PROXY=http://your-proxy.example.com:8888\nCONTAINERD_HTTPS_PROXY=http://your-proxy.example.com:8888\nCONTAINERD_NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\n")),(0,r.kt)("h2",{id:"node-labels-and-taints"},"Node Labels and Taints"),(0,r.kt)("p",null,"RKE2 agents can be configured with the options ",(0,r.kt)("inlineCode",{parentName:"p"},"node-label")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node-taint")," which adds a label and taint to the kubelet. The two options only add labels and/or taints at registration time, and can only be added once and not removed after that through rke2 commands."),(0,r.kt)("p",null,"If you want to change node labels and taints after node registration you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". Refer to the official Kubernetes documentation for details on how to add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node"},"node labels"),"."),(0,r.kt)("h1",{id:"how-agent-node-registration-works"},"How Agent Node Registration Works"),(0,r.kt)("p",null,"Agent nodes are registered via a websocket connection initiated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2 agent")," process, and the connection is maintained by a client-side load balancer running as part of the agent process."),(0,r.kt)("p",null,"Agents register with the server using the cluster secret portion of the join token, along with a randomly generated node-specific password, which is stored on the agent at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node/password"),". The server will store the passwords for individual nodes as Kubernetes secrets, and any subsequent attempts must use the same password. Node password secrets are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace with names using the template ",(0,r.kt)("inlineCode",{parentName:"p"},"<host>.node-password.rke2"),". These secrets are deleted when the corresponding Kubernetes node is deleted."),(0,r.kt)("p",null,"Note: Prior to RKE2 v1.20.2 servers stored passwords on disk at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/cred/node-passwd"),"."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node")," directory of an agent is removed, the password file should be recreated for the agent prior to startup, or the entry removed from the server or Kubernetes cluster (depending on the RKE2 version)."),(0,r.kt)("h2",{id:"starting-the-server-with-the-installation-script"},"Starting the Server with the Installation Script"),(0,r.kt)("p",null,"The installation script provides units for systemd, but does not enable or start the service by default."),(0,r.kt)("p",null,"When running with systemd, logs will be created in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," and viewed using ",(0,r.kt)("inlineCode",{parentName:"p"},"journalctl -u rke2-server")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"journalctl -u rke2-agent"),"."),(0,r.kt)("p",null,"An example of installing with the install script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.rke2.io | sh -\nsystemctl enable rke2-server\nsystemctl start rke2-server\n")),(0,r.kt)("h2",{id:"disabling-server-charts"},"Disabling Server Charts"),(0,r.kt)("p",null,"The server charts bundled with ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2")," deployed during cluster bootstrapping can be disabled and replaced with alternatives.  A common use case is replacing the bundled ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx")," chart with an alternative."),(0,r.kt)("p",null,"To disable any of the bundled system charts, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"disable")," parameter in the config file before bootstrapping.  The full list of system charts to disable is below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rke2-canal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rke2-coredns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rke2-ingress-nginx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rke2-metrics-server"))),(0,r.kt)("p",null,"Note that it is the cluster operator's responsibility to ensure that components are disabled or replaced with care, as the server charts play important roles in cluster operability.  Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/architecture#server-charts"},"architecture overview")," for more information on the individual system charts role within the cluster."),(0,r.kt)("h2",{id:"installation-on-classified-aws-regions-or-networks-with-custom-aws-api-endpoints"},"Installation on classified AWS regions or networks with custom AWS API endpoints"),(0,r.kt)("p",null,"In public AWS regions, to ensure RKE2 is cloud-enabled, and capable of auto-provisioning certain cloud resources, config RKE2 with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\ncloud-provider-name: aws\n")),(0,r.kt)("p",null,"When installing RKE2 on classified regions (such as SC2S or C2S), there are a few additional pre-requisites to be aware of to ensure RKE2 knows how and where to securely communicate with the appropriate AWS endpoints:"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure all the common AWS cloud-provider ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/aws/"},"prerequisites")," are met.  These are independent of regions and are always required.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure RKE2 knows where to send API requests for ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticloadbalancing")," services by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud.conf")," file, the below is an example for the ",(0,r.kt)("inlineCode",{parentName:"p"},"us-iso-east-1")," (C2S) region:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/cloud.conf\n[Global]\n[ServiceOverride "ec2"]\n  Service=ec2\n  Region=us-iso-east-1\n  URL=https://ec2.us-iso-east-1.c2s.ic.gov\n  SigningRegion=us-iso-east-1\n[ServiceOverride "elasticloadbalancing"]\n  Service=elasticloadbalancing\n  Region=us-iso-east-1\n  URL=https://elasticloadbalancing.us-iso-east-1.c2s.ic.gov\n  SigningRegion=us-iso-east-1\n')),(0,r.kt)("p",null,"Alternatively, if you are using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/privatelink/endpoint-services-overview.html"},"private AWS endpoints"),", ensure the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," is used for each of the private endpoints."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Ensure the appropriate AWS CA bundle is loaded into the system's root ca trust store.  This may already be done for you depending on the AMI you are using.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# on CentOS/RHEL 7/8\ncp <ca.pem> /etc/pki/ca-trust/source/anchors/\nupdate-ca-trust\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Configure RKE2 to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"aws")," cloud-provider with the custom ",(0,r.kt)("inlineCode",{parentName:"li"},"cloud.conf")," created in step 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/config.yaml\n...\ncloud-provider-name: aws\ncloud-provider-config: "/etc/rancher/rke2/cloud.conf"\n...\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/install/methods"},"Install")," RKE2 normally (most likely in an ",(0,r.kt)("a",{parentName:"p",href:"/install/airgap"},"airgapped")," capacity)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate successful installation by confirming the existence of AWS metadata on cluster node labels with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get nodes --show-labels")))),(0,r.kt)("h2",{id:"control-plane-component-resource-requestslimits"},"Control Plane Component Resource Requests/Limits"),(0,r.kt)("p",null,"The following options are available under the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," sub-command for RKE2. The options allow for specifying CPU requests and limits for the control plane components within RKE2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   --control-plane-resource-requests value       (components) Control Plane resource requests [$RKE2_CONTROL_PLANE_RESOURCE_REQUESTS]\n   --control-plane-resource-limits value         (components) Control Plane resource limits [$RKE2_CONTROL_PLANE_RESOURCE_LIMITS]\n")),(0,r.kt)("p",null,"Values are a comma-delimited list of ",(0,r.kt)("inlineCode",{parentName:"p"},"[controlplane-component]-(cpu|memory)=[desired-value]"),". The possible values for ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane-component")," are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kube-apiserver\nkube-scheduler\nkube-controller-manager\nkube-proxy\netcd\ncloud-controller-manager\n")),(0,r.kt)("p",null,"Thus, an example config may value may look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\ncontrol-plane-resource-requests:\n  - kube-apiserver-cpu=500m\n  - kube-apiserver-memory=512M\n  - kube-scheduler-cpu=250m\n  - kube-scheduler-memory=512M\n  - etcd-cpu=1000m\n")),(0,r.kt)("p",null,"The unit values for CPU/memory are identical to Kubernetes resource units (See: ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes"},"Resource Limits in Kubernetes"),")"),(0,r.kt)("h2",{id:"extra-control-plane-component-volume-mounts"},"Extra Control Plane Component Volume Mounts"),(0,r.kt)("p",null,"The following options are available under the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," sub-command for RKE2. These options specify host-path mounting of directories from the node filesystem into the static pod component that corresponds to the prefixed name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"ENV VAR"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-apiserver-extra-mount")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_APISERVER_EXTRA_MOUNT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-scheduler-extra-mount")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_SCHEDULER_EXTRA_MOUNT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-controller-manager-extra-mount")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_MOUNT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-proxy-extra-mount")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_PROXY_EXTRA_MOUNT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-extra-mount")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_ETCD_EXTRA_MOUNT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cloud-controller-manager-extra-mount")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_MOUNT")))),(0,r.kt)("h3",{id:"rw-host-path-volume-mount"},"RW Host Path Volume Mount"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/source/volume/path/on/host:/destination/volume/path/in/staticpod")),(0,r.kt)("h3",{id:"ro-host-path-volume-mount"},"RO Host Path Volume Mount"),(0,r.kt)("p",null,"In order to mount a volume as read only, append ",(0,r.kt)("inlineCode",{parentName:"p"},":ro")," to the end of the volume mount.\n",(0,r.kt)("inlineCode",{parentName:"p"},"/source/volume/path/on/host:/destination/volume/path/in/staticpod:ro")),(0,r.kt)("p",null,"Multiple volume mounts can be specified for the same component by passing the flag values as an array in the config file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/config.yaml\nkube-apiserver-extra-mount: \n   - "/tmp/foo.yaml:/root/foo.yaml"\n   - "/tmp/bar.txt:/etc/bar.txt:ro"\n')),(0,r.kt)("h2",{id:"extra-control-plane-component-environment-variables"},"Extra Control Plane Component Environment Variables"),(0,r.kt)("p",null,"The following options are available under the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," sub-command for RKE2. These options specify additional environment variables in standard format i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"KEY=VALUE")," for the static pod component that corresponds to the prefixed name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"ENV VAR"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-apiserver-extra-env")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_APISERVER_EXTRA_ENV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-scheduler-extra-env")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_SCHEDULER_EXTRA_ENV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-controller-manager-extra-env")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_ENV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kube-proxy-extra-env")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_KUBE_PROXY_EXTRA_ENV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-extra-env")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_ETCD_EXTRA_ENV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cloud-controller-manager-extra-env")),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_ENV")))),(0,r.kt)("p",null,"Multiple environment variables can be specified for the same component by passing the flag values as an array in the config file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/config.yaml\nkube-apiserver-extra-env:\n  - "MY_FOO=FOO"\n  - "MY_BAR=BAR"\nkube-scheduler-extra-env: "TZ=America/Los_Angeles"\n')))}u.isMDXComponent=!0}}]);