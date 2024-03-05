"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2753],{7162:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=d(5893),r=d(1151);const i={title:"Requirements"},t=void 0,l={id:"install/requirements",title:"Requirements",description:"RKE2 is very lightweight, but has some minimum requirements as outlined below.",source:"@site/docs/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/install/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/requirements.md",tags:[],version:"current",lastUpdatedAt:1709629497,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{title:"Requirements"},sidebar:"mySidebar",previous:{title:"Quick Start",permalink:"/install/quickstart"},next:{title:"Configuration Options",permalink:"/install/configuration"}},h={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Operating Systems",id:"operating-systems",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Linux/Windows",id:"linuxwindows",level:3},{value:"VM Sizing Guide",id:"vm-sizing-guide",level:3},{value:"Disks",id:"disks",level:4},{value:"Networking",id:"networking",level:2},{value:"Inbound Network Rules",id:"inbound-network-rules",level:3},{value:"Windows Specific Inbound Network Rules",id:"windows-specific-inbound-network-rules",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"RKE2 is very lightweight, but has some minimum requirements as outlined below."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Two rke2 nodes cannot have the same node name. By default, the node name is taken from the machine's hostname."}),"\n",(0,s.jsx)(n.p,{children:"If two or more of your machines have the same hostname, you must do one of the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update the hostname to a unique value"}),"\n",(0,s.jsxs)(n.li,{children:["Set the ",(0,s.jsx)(n.code,{children:"node-name"})," parameter in the config file to a unique value"]}),"\n",(0,s.jsxs)(n.li,{children:["Set the ",(0,s.jsx)(n.code,{children:"with-node-id"})," parameter in the config file to ",(0,s.jsx)(n.code,{children:"true"})," to append a randomly generated ID number to the hostname."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"with-node-id"})," parameter is available starting with the 2023-05 releases (v1.27.2+rke2r1, v1.26.5+rke2r1, v1.25.10+rke2r1, v1.24.14+rke2r1)."]})}),"\n",(0,s.jsx)(n.h2,{id:"operating-systems",children:"Operating Systems"}),"\n",(0,s.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,s.jsx)(n.p,{children:"RKE2 has been tested and validated on the following operating systems, and their subsequent non-major releases:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Distro"}),(0,s.jsx)(n.th,{children:"Version"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ubuntu"}),(0,s.jsx)(n.td,{children:"18.04, 20.04, 22.04"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CentOS/RHEL"}),(0,s.jsx)(n.td,{children:"7.8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Rocky/RHEL"}),(0,s.jsx)(n.td,{children:"8.5, 9.1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oracle Linux"}),(0,s.jsx)(n.td,{children:"8.7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Amazon Linux"}),(0,s.jsx)(n.td,{children:"2023"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SLES"}),(0,s.jsx)(n.td,{children:"15 SP3, SP4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OpenSUSE, SLE Micro"}),(0,s.jsx)(n.td,{children:"5.1, 5.2, 5.3, 5.4"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"warning",children:(0,s.jsxs)(n.p,{children:["Experimental as of ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/rke2/releases/tag/v1.21.3%2Brke2r1",children:"v1.21.3+rke2r1"})]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Windows Support requires choosing Calico as the CNI for the RKE2 cluster"})}),"\n",(0,s.jsx)(n.p,{children:"The RKE2 Windows Node (Worker) agent has been tested and validated on the following operating systems, and their subsequent non-major releases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"}),"\n",(0,s.jsx)(n.li,{children:"Windows Server 2022 LTSC (amd64) (OS Build 20348.169)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," The Windows Server Containers feature needs to be enabled for the RKE2 Windows agent to work."]}),"\n",(0,s.jsx)(n.p,{children:"Open a new Powershell window with Administrator privileges"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:'powershell -Command "Start-Process PowerShell -Verb RunAs"\n'})}),"\n",(0,s.jsx)(n.p,{children:"In the new Powershell window, run the following command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Enable-WindowsOptionalFeature -Online -FeatureName Containers \u2013All\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will require a reboot for the ",(0,s.jsx)(n.code,{children:"Containers"})," feature to properly function."]}),"\n",(0,s.jsx)(n.h2,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsx)(n.p,{children:"Hardware requirements scale based on the size of your deployments. Minimum recommendations are outlined here."}),"\n",(0,s.jsx)(n.h3,{id:"linuxwindows",children:"Linux/Windows"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RAM: 4GB Minimum (we recommend at least 8GB)"}),"\n",(0,s.jsx)(n.li,{children:"CPU: 2 Minimum (we recommend at least 4CPU)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"vm-sizing-guide",children:"VM Sizing Guide"}),"\n",(0,s.jsx)(n.p,{children:"When limited on CPU and RAM on the control-plane + etcd nodes, there could be limitations for the amount of agent nodes that can be joined under standard workload conditions."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Server CPU"}),(0,s.jsx)(n.th,{children:"Server RAM"}),(0,s.jsx)(n.th,{children:"Number of Agents"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"4 GB"}),(0,s.jsx)(n.td,{children:"0-225"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"8 GB"}),(0,s.jsx)(n.td,{children:"226-450"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"16 GB"}),(0,s.jsx)(n.td,{children:"451-1300"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"16+"}),(0,s.jsx)(n.td,{children:"32 GB"}),(0,s.jsx)(n.td,{children:"1300+"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["It is recommended to join agent nodes in batches of 50 or less to allow the CPU to free up space, as there is a spike on node join. Remember to modify the default ",(0,s.jsx)(n.code,{children:"cluster-cidr"})," if desiring more than 255 nodes!"]}),"\n",(0,s.jsx)(n.p,{children:"This data was retrieved under specific test conditions. It will vary depending upon environment and workloads. The steps below give an overview of the test that was run to retrieve this. It was last performed on v1.27.4+rke2r1. All of the machines were provisioned in AWS with standard 20 GiB gp3 volumes."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Monitor resources on grafana using prometheus data source."}),"\n",(0,s.jsxs)(n.li,{children:["Deploy workloads in such a way to simulate continuous cluster activity:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A basic workload that scales up and down continuously"}),"\n",(0,s.jsx)(n.li,{children:"A workload that is deleted and recreated in a loop"}),"\n",(0,s.jsx)(n.li,{children:"A constant workload that contains multiple other resources including CRDs."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Join agent nodes in batches of 30-50 at a time."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"disks",children:"Disks"}),"\n",(0,s.jsx)(n.p,{children:"RKE2 performance depends on the performance of the database, and since RKE2 runs etcd embeddedly and it stores the data dir on disk, we recommend using an SSD when possible to ensure optimal performance."}),"\n",(0,s.jsx)(n.h2,{id:"networking",children:"Networking"}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"tip",children:(0,s.jsxs)(n.p,{children:["If your node has NetworkManager installed and enabled, ",(0,s.jsx)(n.a,{href:"/known_issues#networkmanager",children:"ensure that it is configured to ignore CNI-managed interfaces."}),". If your node has Wicked installed and enabled, ",(0,s.jsx)(n.a,{href:"/known_issues#wicked",children:"ensure that the forwarding sysctl config is enabled"})]})}),"\n",(0,s.jsx)(n.p,{children:"The RKE2 server needs port 6443 and 9345 to be accessible by other nodes in the cluster."}),"\n",(0,s.jsx)(n.p,{children:"All nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used."}),"\n",(0,s.jsx)(n.p,{children:"If you wish to utilize the metrics server, you will need to open port 10250 on each node."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important:"})," The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472."]}),"\n",(0,s.jsx)(n.h3,{id:"inbound-network-rules",children:"Inbound Network Rules"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Protocol"}),(0,s.jsx)(n.th,{children:"Port"}),(0,s.jsx)(n.th,{children:"Source"}),(0,s.jsx)(n.th,{children:"Destination"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"9345"}),(0,s.jsx)(n.td,{children:"RKE2 agent nodes"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"RKE2 supervisor API"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"6443"}),(0,s.jsx)(n.td,{children:"RKE2 agent nodes"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"Kubernetes API"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"8472"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Required only for Flannel VXLAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"10250"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"kubelet metrics"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"2379"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"etcd client port"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"2380"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"etcd peer port"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"2381"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"RKE2 server nodes"}),(0,s.jsx)(n.td,{children:"etcd metrics port"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"30000-32767"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"NodePort port range"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"8472"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Cilium CNI VXLAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"4240"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Cilium CNI health checks"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ICMP"}),(0,s.jsx)(n.td,{children:"8/0"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Cilium CNI health checks"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"179"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Calico CNI with BGP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"4789"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Calico CNI with VXLAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"5473"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Calico CNI with Typha"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"9098"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Calico Typha health checks"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"9099"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Calico health checks"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"5473"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Calico CNI with Typha"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"8472"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Canal CNI with VXLAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"9099"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Canal CNI health checks"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"51820"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Canal CNI with WireGuard IPv4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"51821"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Canal CNI with WireGuard IPv6/dual-stack"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"4789"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Flannel CNI with VXLAN"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"windows-specific-inbound-network-rules",children:"Windows Specific Inbound Network Rules"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Protocol"}),(0,s.jsx)(n.th,{children:"Port"}),(0,s.jsx)(n.th,{children:"Source"}),(0,s.jsx)(n.th,{children:"Destination"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"4789"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Required for Calico and Flannel VXLAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"179"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"All RKE2 nodes"}),(0,s.jsx)(n.td,{children:"Calico CNI with BGP"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Typically, all outbound traffic will be allowed."})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,d)=>{d.d(n,{Z:()=>l,a:()=>t});var s=d(7294);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);