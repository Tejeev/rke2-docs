"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[109],{7822:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=r(5893),o=r(1151);const c={title:"Logging"},s=void 0,i={id:"reference/logging",title:"Logging",description:"When running with systemd, logs are sent to journald and can be viewed using journalctl -u rke2-server or journalctl -u rke2-agent. Some systemd configurations may also write combined logs to /var/log/syslog, in which case the rke2 logs will also be available there.",source:"@site/docs/reference/logging.md",sourceDirName:"reference",slug:"/reference/logging",permalink:"/reference/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/reference/logging.md",tags:[],version:"current",lastUpdatedAt:1708109958,formattedLastUpdatedAt:"Feb 16, 2024",frontMatter:{title:"Logging"},sidebar:"mySidebar",previous:{title:"Agent Configuration Reference",permalink:"/reference/linux_agent_config"},next:{title:"Server Configuration Reference",permalink:"/reference/server_config"}},a={},l=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["When running with systemd, logs are sent to journald and can be viewed using ",(0,t.jsx)(n.code,{children:"journalctl -u rke2-server"})," or ",(0,t.jsx)(n.code,{children:"journalctl -u rke2-agent"}),". Some systemd configurations may also write combined logs to ",(0,t.jsx)(n.code,{children:"/var/log/syslog"}),", in which case the rke2 logs will also be available there."]}),"\n",(0,t.jsxs)(n.p,{children:["The Containerd logs are written to ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/containerd/containerd.log"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The kubelet logs are written to ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/logs/kubelet.log"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Etcd and the Kubernetes control-plane components run as static Pods in the ",(0,t.jsx)(n.code,{children:"kube-system"})," namespace."]}),"\n",(0,t.jsxs)(n.p,{children:["Logs from each Kubernetes Pod can be accessed with ",(0,t.jsx)(n.code,{children:"kubectl"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml logs -n kube-system -l component=kube-apiserver\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Logs from each container are written to ",(0,t.jsx)(n.code,{children:"/var/log/pods"})," or can be accessed with ",(0,t.jsx)(n.code,{children:"crictl"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export CONTAINER_RUNTIME_ENDPOINT=unix:///run/k3s/containerd/containerd.sock\n# list running containers\n/var/lib/rancher/rke2/bin/crictl ps\n# get logs from container by container id\n/var/lib/rancher/rke2/bin/crictl logs <container_id>\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(7294);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);