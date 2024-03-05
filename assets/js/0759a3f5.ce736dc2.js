"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2409],{3754:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>h,metadata:()=>c,toc:()=>l});var t=s(5893),n=s(1151);const h={hide_table_of_contents:!0,sidebar_position:1},i="v1.29.X",c={id:"release-notes/v1.29.X",title:"v1.29.X",description:"Before upgrading from earlier releases, be sure to read the Kubernetes Urgent Upgrade Notes.",source:"@site/docs/release-notes/v1.29.X.md",sourceDirName:"release-notes",slug:"/release-notes/v1.29.X",permalink:"/release-notes/v1.29.X",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/release-notes/v1.29.X.md",tags:[],version:"current",lastUpdatedAt:1709629497,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"mySidebar",previous:{title:"Windows Agent Configuration Reference",permalink:"/reference/windows_agent_config"},next:{title:"v1.28.X",permalink:"/release-notes/v1.28.X"}},a={},l=[{value:"Release v1.29.1+rke2r1",id:"release-v1291rke2r1",level:2},{value:"Changes since v1.29.0+rke2r1:",id:"changes-since-v1290rke2r1",level:3},{value:"Charts Versions",id:"charts-versions",level:2},{value:"Release v1.29.0+rke2r1",id:"release-v1290rke2r1",level:2},{value:"Changes since v1.28.4+rke2r1:",id:"changes-since-v1284rke2r1",level:3},{value:"Charts Versions",id:"charts-versions-1",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"v129x",children:"v1.29.X"}),"\n",(0,t.jsx)(r.admonition,{title:"Upgrade Notice",type:"warning",children:(0,t.jsxs)(r.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,t.jsx)(r.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Version"}),(0,t.jsx)(r.th,{children:"Release date"}),(0,t.jsx)(r.th,{children:"Kubernetes"}),(0,t.jsx)(r.th,{children:"Etcd"}),(0,t.jsx)(r.th,{children:"Containerd"}),(0,t.jsx)(r.th,{children:"Runc"}),(0,t.jsx)(r.th,{children:"Metrics-server"}),(0,t.jsx)(r.th,{children:"CoreDNS"}),(0,t.jsx)(r.th,{children:"Ingress-Nginx"}),(0,t.jsx)(r.th,{children:"Helm-controller"}),(0,t.jsx)(r.th,{children:"Canal (Default)"}),(0,t.jsx)(r.th,{children:"Calico"}),(0,t.jsx)(r.th,{children:"Cilium"}),(0,t.jsx)(r.th,{children:"Multus"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/release-notes/v1.29.X#release-v1291rke2r1",children:"v1.29.1+rke2r1"})}),(0,t.jsx)(r.td,{children:"Feb 06 2024"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#v1291",children:"v1.29.1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.11-k3s2",children:"v1.7.11-k3s2"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3",children:"v0.6.3"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/ingress-nginx/releases/tag/nginx-1.9.3-hardened1",children:"nginx-1.9.3-hardened1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.8",children:"v0.15.8"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.23.0",children:"Flannel v0.23.0"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.a,{href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26",children:"Calico v3.26.3"})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26",children:"v3.26.3"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/cilium/cilium/releases/tag/v1.14.4",children:"v1.14.4"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni/releases/tag/v4.0.2",children:"v4.0.2"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/release-notes/v1.29.X#release-v1290rke2r1",children:"v1.29.0+rke2r1"})}),(0,t.jsx)(r.td,{children:"Dec 22 2023"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#v1290",children:"v1.29.0"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.11-k3s1",children:"v1.7.11-k3s1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.10",children:"v1.1.10"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3",children:"v0.6.3"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/ingress-nginx/releases/tag/nginx-1.9.3-hardened1",children:"nginx-1.9.3-hardened1"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.4",children:"v0.15.4"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.23.0",children:"Flannel v0.23.0"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.a,{href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26",children:"Calico v3.26.3"})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26",children:"v3.26.3"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/cilium/cilium/releases/tag/v1.14.4",children:"v1.14.4"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni/releases/tag/v4.0.2",children:"v4.0.2"})})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.h2,{id:"release-v1291rke2r1",children:["Release ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/releases/tag/v1.29.1+rke2r1",children:"v1.29.1+rke2r1"})]}),"\n",(0,t.jsx)(r.p,{children:"This release updates Kubernetes to v1.29.1."}),"\n",(0,t.jsxs)(r.admonition,{title:"Important Notes",type:"warning",children:[(0,t.jsxs)(r.p,{children:["Addresses the runc CVE: ",(0,t.jsx)(r.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2024-21626",children:"CVE-2024-21626"})," by updating runc to v1.1.12."]}),(0,t.jsxs)(r.p,{children:["If your server (control-plane) nodes were not started with the ",(0,t.jsx)(r.code,{children:"--token"})," CLI flag or config file key, a randomized token was generated during initial cluster startup. This key is used both for joining new nodes to the cluster, and for encrypting cluster bootstrap data within the datastore. Ensure that you retain a copy of this token, as is required when restoring from backup."]}),(0,t.jsx)(r.p,{children:"You may retrieve the token value from any server already joined to the cluster:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cat /var/lib/rancher/rke2/server/token\n"})})]}),"\n",(0,t.jsx)(r.h3,{id:"changes-since-v1290rke2r1",children:"Changes since v1.29.0+rke2r1:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Update channels ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5172",children:"(#5172)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Bump actions/setup-go from 4 to 5 ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5125",children:"(#5125)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Use dl.k8s.io for getting kubectl ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/4952",children:"(#4952)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Bump actions/setup-python from 4 to 5 ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5124",children:"(#5124)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Address Repetitive Windows Bootstrapping ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5159",children:"(#5159)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Unload selinux module only if container-selinux is updated from a bre\u2026 ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5157",children:"(#5157)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Add v1.29 to channels list ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5194",children:"(#5194)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Version bump of coredns chart to fix bug ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5189",children:"(#5189)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Fix coredns local cache when in dual stack clusters"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Update multus chart to add optional dhcp daemonset ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5146",children:"(#5146)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Add e2e test for dnscache ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5190",children:"(#5190)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Update rke2-whereabouts to v0.6.3 and bump rke2-multus parent chart ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5232",children:"(#5232)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Bump sriov image build verions ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5237",children:"(#5237)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Enable arm64 based images for calico, multus and harvester ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5154",children:"(#5154)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Improve kube-proxy logging and move calico logs to a better path ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5248",children:"(#5248)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Bump k3s for v1.29 ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5268",children:"(#5268)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Update to 1.29.1 ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5296",children:"(#5296)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Update base image ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5305",children:"(#5305)"})]}),"\n",(0,t.jsxs)(r.li,{children:["Bump K3s and runc versions for v1.29 ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5349",children:"(#5349)"})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"charts-versions",children:"Charts Versions"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Version"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-cilium"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-cilium/rke2-cilium-1.14.400.tgz",children:"1.14.400"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-canal"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-canal/rke2-canal-v3.26.3-build2023110900.tgz",children:"v3.26.3-build2023110900"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-calico"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-calico/rke2-calico-v3.26.300.tgz",children:"v3.26.300"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-calico-crd"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-calico/rke2-calico-crd-v3.26.300.tgz",children:"v3.26.300"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-coredns"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-coredns/rke2-coredns-1.24.008.tgz",children:"1.24.008"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-ingress-nginx"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-ingress-nginx/rke2-ingress-nginx-4.8.200.tgz",children:"4.8.200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-metrics-server"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-metrics-server/rke2-metrics-server-2.11.100-build2023051511.tgz",children:"2.11.100-build2023051511"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rancher-vsphere-csi"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rancher-vsphere-csi/rancher-vsphere-csi-3.0.1-rancher101.tgz",children:"3.0.1-rancher101"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rancher-vsphere-cpi"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rancher-vsphere-cpi/rancher-vsphere-cpi-1.5.100.tgz",children:"1.5.100"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"harvester-cloud-provider"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/harvester-cloud-provider/harvester-cloud-provider-0.2.200.tgz",children:"0.2.200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"harvester-csi-driver"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/harvester-cloud-provider/harvester-csi-driver-0.1.1600.tgz",children:"0.1.1600"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-snapshot-controller"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-snapshot-controller/rke2-snapshot-controller-1.7.202.tgz",children:"1.7.202"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-snapshot-controller-crd"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-snapshot-controller/rke2-snapshot-controller-crd-1.7.202.tgz",children:"1.7.202"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-snapshot-validation-webhook"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-snapshot-validation-webhook/rke2-snapshot-validation-webhook-1.7.302.tgz",children:"1.7.302"})})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h2,{id:"release-v1290rke2r1",children:["Release ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/releases/tag/v1.29.0+rke2r1",children:"v1.29.0+rke2r1"})]}),"\n",(0,t.jsx)(r.p,{children:"This release is RKE2's first in the v1.29 line. This release updates Kubernetes to v1.29.0."}),"\n",(0,t.jsxs)(r.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,t.jsx)(r.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]}),"\n",(0,t.jsx)(r.admonition,{title:"Important Notes",type:"warning",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The experimental ",(0,t.jsx)(r.code,{children:"secrets-encrypt rotate-keys"})," command, used to perform an abbreviated rotation of secrets\r\nencryptions keys, has been removed from this release due to changes in the upstream implementation of\r\nconfiguration reloading. It will return in a subsequent release; see ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/issues/5152",children:"https://github.com/rancher/rke2/issues/5152"}),"\r\nfor more information."]}),"\n"]})}),"\n",(0,t.jsx)(r.h3,{id:"changes-since-v1284rke2r1",children:"Changes since v1.28.4+rke2r1:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Bump k3s version for v1.29 (",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5153",children:"#5153"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Bump k3s and kubernetes versions for v1.29.0 (",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5144",children:"#5144"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["\u26a0\ufe0f added support for amazon linux 2023 (#4973) (",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/4973",children:"#4973"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Bump containerd to v1.7.11 (",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5129",children:"#5129"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Bumped containerd/runc to v1.7.10/v1.1.10 (",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5117",children:"#5117"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Update stable channel to v1.26.11+rke2r1 (",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/5099",children:"#5099"}),")"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"charts-versions-1",children:"Charts Versions"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Version"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-cilium"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-cilium/rke2-cilium-1.14.400.tgz",children:"1.14.400"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-canal"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-canal/rke2-canal-v3.26.3-build2023110900.tgz",children:"v3.26.3-build2023110900"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-calico"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-calico/rke2-calico-v3.26.300.tgz",children:"v3.26.300"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-calico-crd"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-calico/rke2-calico-crd-v3.26.300.tgz",children:"v3.26.300"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-coredns"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-coredns/rke2-coredns-1.24.007.tgz",children:"1.24.007"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-ingress-nginx"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-ingress-nginx/rke2-ingress-nginx-4.8.200.tgz",children:"4.8.200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-metrics-server"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-metrics-server/rke2-metrics-server-2.11.100-build2023051511.tgz",children:"2.11.100-build2023051511"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rancher-vsphere-csi"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rancher-vsphere-csi/rancher-vsphere-csi-3.0.1-rancher101.tgz",children:"3.0.1-rancher101"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rancher-vsphere-cpi"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rancher-vsphere-cpi/rancher-vsphere-cpi-1.5.100.tgz",children:"1.5.100"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"harvester-cloud-provider"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/harvester-cloud-provider/harvester-cloud-provider-0.2.200.tgz",children:"0.2.200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"harvester-csi-driver"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/harvester-cloud-provider/harvester-csi-driver-0.1.1600.tgz",children:"0.1.1600"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-snapshot-controller"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-snapshot-controller/rke2-snapshot-controller-1.7.202.tgz",children:"1.7.202"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-snapshot-controller-crd"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-snapshot-controller/rke2-snapshot-controller-crd-1.7.202.tgz",children:"1.7.202"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rke2-snapshot-validation-webhook"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/raw/main/assets/rke2-snapshot-validation-webhook/rke2-snapshot-validation-webhook-1.7.302.tgz",children:"1.7.302"})})]})]})]}),"\n",(0,t.jsx)(r.hr,{})]})}function o(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>i});var t=s(7294);const n={},h=t.createContext(n);function i(e){const r=t.useContext(h);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(h.Provider,{value:r},e.children)}}}]);