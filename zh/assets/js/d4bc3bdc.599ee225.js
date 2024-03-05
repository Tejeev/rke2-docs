"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4349],{8074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(5893),o=n(1151);const s={title:"Token Management"},i=void 0,d={id:"security/token",title:"Token Management",description:"Server Token Rotation",source:"@site/docs/security/token.md",sourceDirName:"security",slug:"/security/token",permalink:"/zh/security/token",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/token.md",tags:[],version:"current",lastUpdatedAt:1709629497,formattedLastUpdatedAt:"2024\u5e743\u67085\u65e5",frontMatter:{title:"Token Management"},sidebar:"mySidebar",previous:{title:"Certificate Management",permalink:"/zh/security/certificates"},next:{title:"\u67b6\u6784",permalink:"/zh/architecture"}},a={},c=[{value:"Server Token Rotation",id:"server-token-rotation",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"server-token-rotation",children:"Server Token Rotation"}),"\n",(0,r.jsx)(t.admonition,{title:"Version Gate",type:"info",children:(0,r.jsx)(t.p,{children:"Available as of 2023-11 releases (v1.28.3+rke2r2, v1.27.7+rke2r2, v1.26.10+rke2r2, v1.25.15+rke2r2)."})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"rke2 token rotate"})," command allows you to rotate and replace the original token used for server bootstrap. After running the command on a single server, all servers and agents that used the original token should be restarted with the new token. The original token will be invalidated and cannot be used to join any new servers or agents to the cluster."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Flag"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"--data-dir"})," value"]}),(0,r.jsx)(t.td,{children:"Folder to hold state"}),(0,r.jsx)(t.td,{children:"/var/lib/rancher/rke2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"--kubeconfig"})," value"]}),(0,r.jsx)(t.td,{children:"Kubeconfig for authentication to server"}),(0,r.jsx)(t.td,{children:"/etc/rancher/rke2/rke2.yaml"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"--server"})," value"]}),(0,r.jsx)(t.td,{children:"Server to connect to"}),(0,r.jsxs)(t.td,{children:['"',(0,r.jsx)(t.a,{href:"https://127.0.0.1:9345",children:"https://127.0.0.1:9345"}),'"']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"--token"})," value"]}),(0,r.jsx)(t.td,{children:"Existing token used to join a server or agent to a cluster"}),(0,r.jsx)(t.td,{children:"N/A"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"--new-token"})," value"]}),(0,r.jsx)(t.td,{children:"New token to replace the original token"}),(0,r.jsx)(t.td,{children:"If not specified, a random 16 character token will be generated"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);