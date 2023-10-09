"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4128],{3905:(M,N,I)=>{I.d(N,{Zo:()=>e,kt:()=>y});var g=I(7294);function j(M,N,I){return N in M?Object.defineProperty(M,N,{value:I,enumerable:!0,configurable:!0,writable:!0}):M[N]=I,M}function D(M,N){var I=Object.keys(M);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);N&&(g=g.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),I.push.apply(I,g)}return I}function z(M){for(var N=1;N<arguments.length;N++){var I=null!=arguments[N]?arguments[N]:{};N%2?D(Object(I),!0).forEach((function(N){j(M,N,I[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(I)):D(Object(I)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(I,N))}))}return M}function T(M,N){if(null==M)return{};var I,g,j=function(M,N){if(null==M)return{};var I,g,j={},D=Object.keys(M);for(g=0;g<D.length;g++)I=D[g],N.indexOf(I)>=0||(j[I]=M[I]);return j}(M,N);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);for(g=0;g<D.length;g++)I=D[g],N.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(M,I)&&(j[I]=M[I])}return j}var t=g.createContext({}),i=function(M){var N=g.useContext(t),I=N;return M&&(I="function"==typeof M?M(N):z(z({},N),M)),I},e=function(M){var N=i(M.components);return g.createElement(t.Provider,{value:N},M.children)},L="mdxType",C={inlineCode:"code",wrapper:function(M){var N=M.children;return g.createElement(g.Fragment,{},N)}},A=g.forwardRef((function(M,N){var I=M.components,j=M.mdxType,D=M.originalType,t=M.parentName,e=T(M,["components","mdxType","originalType","parentName"]),L=i(I),A=j,y=L["".concat(t,".").concat(A)]||L[A]||C[A]||D;return I?g.createElement(y,z(z({ref:N},e),{},{components:I})):g.createElement(y,z({ref:N},e))}));function y(M,N){var I=arguments,j=N&&N.mdxType;if("string"==typeof M||j){var D=I.length,z=new Array(D);z[0]=A;var T={};for(var t in N)hasOwnProperty.call(N,t)&&(T[t]=N[t]);T.originalType=M,T[L]="string"==typeof M?M:j,z[1]=T;for(var i=2;i<D;i++)z[i]=I[i];return g.createElement.apply(null,z)}return g.createElement.apply(null,I)}A.displayName="MDXCreateElement"},8495:(M,N,I)=>{I.r(N),I.d(N,{assets:()=>t,contentTitle:()=>z,default:()=>C,frontMatter:()=>D,metadata:()=>T,toc:()=>i});var g=I(7462),j=(I(7294),I(3905));const D={slug:"/",sidebar_position:1,title:"Introduction"},z=void 0,T={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"RKE2, also known as RKE Government, is Rancher's next-generation Kubernetes distribution.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1696889750,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Introduction"},sidebar:"mySidebar",next:{title:"Quick Start",permalink:"/install/quickstart"}},t={},i=[{value:"How is this different from RKE or K3s?",id:"how-is-this-different-from-rke-or-k3s",level:2},{value:"Why two names?",id:"why-two-names",level:2},{value:"Security",id:"security",level:2}],e={toc:i},L="wrapper";function C(M){let{components:N,...D}=M;return(0,j.kt)(L,(0,g.Z)({},e,D,{components:N,mdxType:"MDXLayout"}),(0,j.kt)("p",null,(0,j.kt)("img",{src:I(9273).Z+"#gh-light-mode-only",width:"346",height:"111"}),(0,j.kt)("img",{src:I(1103).Z+"#gh-dark-mode-only",width:"346",height:"111"})),(0,j.kt)("p",null,"RKE2, also known as RKE Government, is Rancher's next-generation Kubernetes distribution."),(0,j.kt)("p",null,"It is a fully ",(0,j.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/card-mode?selected=rke-government"},"conformant Kubernetes distribution")," that focuses on security and compliance within the U.S. Federal Government sector."),(0,j.kt)("p",null,"To meet these goals, RKE2 does the following:"),(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"Provides ",(0,j.kt)("a",{parentName:"li",href:"/security/hardening_guide"},"defaults and configuration options")," that allow clusters to pass the CIS Kubernetes Benchmark ",(0,j.kt)("a",{parentName:"li",href:"/security/cis_self_assessment16"},"v1.6")," or ",(0,j.kt)("a",{parentName:"li",href:"/security/cis_self_assessment123"},"v1.23")," with minimal operator intervention"),(0,j.kt)("li",{parentName:"ul"},"Enables ",(0,j.kt)("a",{parentName:"li",href:"/security/fips_support"},"FIPS 140-2 compliance")),(0,j.kt)("li",{parentName:"ul"},"Regularly scans components for CVEs using ",(0,j.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/trivy"},"trivy")," in our build pipeline")),(0,j.kt)("h2",{id:"how-is-this-different-from-rke-or-k3s"},"How is this different from RKE or K3s?"),(0,j.kt)("p",null,"RKE2 combines the best-of-both-worlds from the 1.x version of RKE (hereafter referred to as RKE1) and K3s."),(0,j.kt)("p",null,"From K3s, it inherits the usability, ease-of-operations, and deployment model."),(0,j.kt)("p",null,"From RKE1, it inherits close alignment with upstream Kubernetes. In places K3s has diverged from upstream Kubernetes in order to optimize for edge deployments, but RKE1 and RKE2 can stay closely aligned with upstream."),(0,j.kt)("p",null,"Importantly, RKE2 does not rely on Docker as RKE1 does. RKE1 leveraged Docker for deploying and managing the control plane components as well as the container runtime for Kubernetes. RKE2 launches control plane components as static pods, managed by the kubelet. The embedded container runtime is containerd."),(0,j.kt)("h2",{id:"why-two-names"},"Why two names?"),(0,j.kt)("p",null,"It is known as RKE Government in order to convey the primary use cases and sector it currently targets."),(0,j.kt)("p",null,"It is also known as RKE2 as it is the next iteration of the Rancher Kubernetes Engine for datacenter use cases. The distribution runs standalone and integration work into Rancher is underway. We intend to make RKE2 an option in Rancher once it achieves feature parity with RKE. An upgrade path from RKE to RKE2 is also under development for those that want to migrate."),(0,j.kt)("h2",{id:"security"},"Security"),(0,j.kt)("p",null,"Rancher Labs supports responsible disclosure and endeavors to resolve security\nissues in a reasonable timeframe. To report a security vulnerability, email\n",(0,j.kt)("a",{parentName:"p",href:"mailto:security@rancher.com"},"security@rancher.com"),"."))}C.isMDXComponent=!0},1103:(M,N,I)=>{I.d(N,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxOyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibG9nby1ob3Jpem9udGFsLXJrZTItZGFyay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzNDA4Ij4KCQkKCTwvZGVmcz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXc0MDYiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMy44MzgxNzY0IgogICBpbmtzY2FwZTpjeD0iMTcyLjk5ODgzIgogICBpbmtzY2FwZTpjeT0iNTUuODg1OTE2IgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjMzNzQiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEzNzYiCiAgIGlua3NjYXBlOndpbmRvdy14PSI2NiIKICAgaW5rc2NhcGU6d2luZG93LXk9IjI3IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMzgzIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTM3NSI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzJFNjhFOTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnNDAzIj4KCTxnCiAgIGlkPSJnMzk3IgogICBzdHlsZT0iZGlzcGxheTppbmxpbmUiPgoJCTxnCiAgIGlkPSJnMzgzIj4KCQkJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAxNjMuODE5ODUsMzAuMzEzOTA4IGggMjAuODAyOTUgYyA5Ljg3NzczLDAgMTYuNTM3Niw0Ljc4OTA1OCAxNi41Mzc2LDE0LjA2NzU1OCAwLDcuNTU4NzI3IC01LjE2Mjk4LDEyLjEyMzY4IC0xMC4xNzczNywxMy42OTQ4NjIgMS40OTY4OSwxLjI3MTU2MSAyLjYxOTg2LDIuOTkyNTU0IDMuNTE3NSw0Ljc4OTA1OSAyLjA5NDkxLDQuMjY1MzM1IDMuNTE2MjksOC45Nzg4ODIgNy45MzE0Myw4Ljk3ODg4MiAxLjEyMjk3LDAgMi4wMjA2MiwtMC4zNzM5MTcgMi4wMjA2MiwtMC4zNzM5MTcgbCAtMC45NzMxNiw4LjkwNDU3OSBjIDAsMCAtMi42OTI5NCwwLjY3MzUzOSAtNS4wMTMxNywwLjY3MzUzOSAtNS45ODYzMywwIC05LjQyODMyLC0yLjMyMDIzNyAtMTIuOTQ1OCwtMTAuMzI3MTcyIC0xLjQ5NTY5LC0zLjU5MDU3NiAtMy41OTE4LC05Ljg3Nzc0MyAtNi4zNjAyNSwtOS44Nzc3NDMgaCAtMi44NDM5NiB2IDE5Ljk3OTU4OCBoIC0xMi40OTYzOSB6IG0gMTIuNDk2MzksOS4wNTQzOTMgdiAxMi40MjA4NjQgaCA0LjQ5MDY2IGMgMy41OTE3OCwwIDcuNzgxNiwtMS4xMjE3NTMgNy43ODE2LC02LjUwODgzNCAwLC00LjQxNTE0NiAtMi44NDI3NCwtNS45MTIwMyAtNi4yODU5MywtNS45MTIwMyB6IgogICBpZD0icGF0aDM3NyIgLz4KCQkJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAyMDkuNjkxMDcsMzAuMzEzOTA4IGggMTIuNDk2MzcgdiAxNC4xNDMwNzQgYyAwLDEuNTcxMTgyIC0wLjIyNDExLDMuODkwMTk3IC0wLjM3MzkyLDUuNjEyNDA3IGggMC4yOTk2MiBjIDAuODIzMzUsLTEuMjcxNTYgMS44NzA4MSwtMy4yMTc4NzYgMy4xNDIzNywtNC43MTQ3NjMgTCAyMzcuNjAzMywzMC4zMTM5MDggaCAxMy40NjgzMSBsIC0xNi40NjIwOCwxOS44Mjk3NzYgMTcuMzYwOTQsMzAuNjc5NDU5IEggMjM3LjYwMzMgbCAtMTEuNjc0MjUsLTIxLjE3NTYzMiAtMy43NDE2MSw0LjU2NDk1MiB2IDE2LjYxMDY4IGggLTEyLjQ5NjM3IHoiCiAgIGlkPSJwYXRoMzc5IiAvPgoJCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDI1NS45Mzc0MSwzMC4zMTM5MjcgaCAzMy40NDc5IHYgOS4yNzg0OTIgSCAyNjguNDMzNzggViA1MC40NDMzMSBoIDE3LjU4NTA1IHYgOS4yNzg0OTIgaCAtMTcuNTg1MDUgdiAxMS44MjI4MyBoIDIxLjcwMDU5IHYgOS4yNzg0OTYgaCAtMzQuMTk2OTYgeiIKICAgaWQ9InBhdGgzODEiCiAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSIgLz4KCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDMzMy45OTc2NSw4MC42NDg4MTEgaCAtMzcuMzAwNzggdiAtOC44NTUyOTMgbCAxMi41NTA3OCwtMTIuMjk1MjIzIGMgMy41ODU5NCwtMy42MzI5NDIgNS45Mjk2OSwtNi4xMTM1NTYgNy4wMzEyNSwtNy40NDE4NDkgMS4xMDE1NiwtMS4zMjgyOTMgMS44NjkxNCwtMi40NjkyNjUgMi4zMDI3MywtMy40MjI5MDkgMC40MzM2LC0wLjk1MzY0NyAwLjY1MDQsLTEuOTUyNzA1IDAuNjUwNCwtMi45OTcxNzcgMCwtMS4yOTQyMzEgLTAuNDMzNiwtMi4zMTU5OTggLTEuMzAwNzksLTMuMDY1MjkyIC0wLjg2NzE4LC0wLjc0OTI5MSAtMi4wODU5MywtMS4xMjM5NCAtMy42NTYyNSwtMS4xMjM5NCAtMS42MTcxOCwwIC0zLjI1MTk1LDAuNDQ4NDQxIC00LjkwNDI5LDEuMzQ1MzI2IC0xLjY1MjM1LDAuODk2ODgxIC0zLjUyMTQ5LDIuMjE5NDk3IC01LjYwNzQyLDMuOTY3ODQ5IGwgLTcuNjI4OTEsLTguNjUwOTM2IGMgMi42NDg0NCwtMi4yOTMyOTMgNC44NzUsLTMuOTMzNzkyIDYuNjc5NjksLTQuOTIxNDk3IDEuODA0NjgsLTAuOTg3NzA1IDMuNzY3NTcsLTEuNzQyNjc2IDUuODg4NjcsLTIuMjY0OTEgMi4xMjEwOSwtMC41MjIyMzYgNC41MDU4NiwtMC43ODMzNTIgNy4xNTQzLC0wLjc4MzM1MiAzLjMyODEyLDAgNi4yOTg4MiwwLjU2NzY0NiA4LjkxMjEsMS43MDI5NCAyLjYxMzI5LDEuMTM1MjkzIDQuNjQwNjMsMi43NTMwODcgNi4wODIwNCw0Ljg1MzM3OSAxLjQ0MTQsMi4xMDAyOTIgMi4xNjIxMSw0LjQ1NjAyOCAyLjE2MjExLDcuMDY3MTk5IDAsMS45NTI3MDYgLTAuMjUxOTYsMy43NTc4MjQgLTAuNzU1ODYsNS40MTUzNTIgLTAuNTAzOTEsMS42NTc1MjggLTEuMjgzMjEsMy4yODY2NzUgLTIuMzM3ODksNC44ODc0MzYgLTEuMDU0NjksMS42MDA3NjUgLTIuNDU1MDgsMy4yODY2NzUgLTQuMjAxMTgsNS4wNTc3MzIgLTEuNzQ2MDksMS43NzEwNTcgLTUuNDY2NzksNS4xMzE1MjcgLTExLjE2MjExLDEwLjA4MTQwMiB2IDAuMzQwNTkxIGggMTkuNDQxNDEgeiIKICAgaWQ9InBhdGgzOTkiIC8+PC9nPgoJCTxnCiAgIGlkPSJnMzk1IgogICBzdHlsZT0iZGlzcGxheTppbmxpbmUiPgoJCQk8Y2lyY2xlCiAgIGNsYXNzPSJzdDEiCiAgIGN4PSIzNC45MDgwNTgiCiAgIGN5PSI3Ni4zOTQyMTEiCiAgIHI9IjciCiAgIGlkPSJjaXJjbGUzODUiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Im0gNzEuNDU4NjE4LDU4LjY4MTgyNCBjIC0wLjIwOTE4MiwwIC0wLjQxNjk5MiwtMC4wMTA4MSAtMC42MjMwOTIsLTAuMDI5NCAxLjgwMzQ4OSwzLjg5OTE3NyAyLjk1ODkzMSw4LjE1Njg5OCAzLjMwNjE5OCwxMi42Mzk5OTEgSCA4OS4xMDczIGMgMi4xMzM2NjcsLTMuNzYzMDU0IDUuNjE4OTczLC02LjY2MDY4MiA5Ljc5MzUwMywtOC4wMjkwMjIgViA1OC42ODAxMTUgSCA3MS40ODczMjggYyAtMC4wMDk0LDQuMmUtNSAtMC4wMTkxNCwwLjAwMTcgLTAuMDI4NzEsMC4wMDE3IHoiCiAgIGlkPSJwYXRoMzg3IiAvPgoJCQk8cGF0aAogICBjbGFzcz0ic3QxIgogICBkPSJtIDQyLjEwNzE1NSwyNy43NDQwOCB2IDkuNjQ2NDA0IGMgOC4yNDQzMDgsMS4xMTI0MjMgMTUuNjM2ODY0LDQuOTM4MTEgMjEuMjQ5MTY4LDEwLjU0OTMwNSBMIDU4LjQ2ODI4NSwyNy43NDQwOCBaIgogICBpZD0icGF0aDM4OSIgLz4KCQkJPGNpcmNsZQogICBjbGFzcz0ic3QxIgogICBjeD0iMTA0LjMzODI4IgogICBjeT0iNzkuODk0MjExIgogICByPSIzLjUiCiAgIGlkPSJjaXJjbGUzOTEiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Ik0gMTIxLjU4Njg5LDAgSCAxNC4zOTIzODMgQyA2LjQ3NjUzODIsMCAwLDYuNDc2NjIzNSAwLDE0LjM5MjQ2OSB2IDgyLjU3NzQzOCBjIDAsNy45MTU4NDMgNi40NzY1MzgyLDE0LjM5MjQ3MyAxNC4zOTIzODMsMTQuMzkyNDczIEggMTIxLjU4Njg5IGMgNy45MTU4NCwwIDE0LjM5MjM5LC02LjQ3NjYzIDE0LjM5MjM5LC0xNC4zOTI0NzMgViAxNC4zOTI0NjkgQyAxMzUuOTc5MjgsNi40NzY2MjM1IDEyOS41MDI3MywwIDEyMS41ODY4OSwwIFogTSAzNC45MDgwNTgsOTcuMzk0MjExIGMgLTExLjU3OTM5NSwwIC0yMS4wMDAwMDIsLTkuNDIwNTYzIC0yMS4wMDAwMDIsLTIxIDAsLTExLjU3OTQzOCA5LjQyMDYwNywtMjEuMDAwMDA0IDIxLjAwMDAwMiwtMjEuMDAwMDA0IDExLjU3OTM5NSwwIDIxLDkuNDIwNTY3IDIxLDIxLjAwMDAwNCAwLDExLjU3OTQzNyAtOS40MjA2MDgsMjEgLTIxLDIxIHogbSA2OS40MzAyMjIsMCBjIC03Ljc2NjEzNywwIC0xNC4zNjMxNTksLTUuMDg2NTc5IC0xNi42NDQxNDMsLTEyLjEwMTc5MiBIIDY3LjI1NzkzNSBjIC0zLjg2Mjk4OCwwIC02Ljk5NTIxNywtMy4xMjkxNSAtNywtNi45OTE3OTggbCAtMC4wMDQ4LC00LjEwODA1NSBjIDAsLTEyLjc2NTA4NyAtMTAuMzc4MzIzLC0yMy4xNDM0MSAtMjMuMTM0ODY1LC0yMy4xNDM0MSBIIDI1LjYwODYxOCBjIC0zLjg2NTcyMywwIC03LC0zLjEzMzkzNCAtNywtNyAwLC0zLjg2NjA2NiAzLjEzNDI3NywtNyA3LC03IGggMi40OTg1MzUgViAyNy43NDQwOCBoIC0yLjQ5ODUzNSBjIC0zLjg2NTcyMywwIC03LC0zLjEzMzkzNiAtNywtNyAwLC0zLjg2NjA2NCAzLjEzNDI3NywtNyA3LC03IGggMzguMzY3Mzg2IGMgMy4yMzEzNSwwIDYuMDQyOTY1LDIuMjEyMTA5IDYuODAzODA2LDUuMzUzMjIyIGwgNi4xOTIzMzcsMjUuNTgyODEzIGggMjYuNDE1MDgzIGMgNS4yNDU5LDAgOS41MTM1Nyw0LjI2NzY3NyA5LjUxMzU3LDkuNTEzNTczIHYgMTAuNDQ2ODkxIGMgNS4zMjg2MiwzLjAwMzExMyA4LjkzNzQ4LDguNzEzMzAzIDguOTM3NDgsMTUuMjUzNjMyIDAsOS42NDk1MjEgLTcuODUwMzksMTcuNSAtMTcuNSwxNy41IHoiCiAgIGlkPSJwYXRoMzkzIiAvPgoJCTwvZz4KCTwvZz4KCQo8L2c+Cjwvc3ZnPgo="},9273:(M,N,I)=>{I.d(N,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxOyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczE4MSI+CgkKCQo8L2RlZnM+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMTQ4Ij4KCS5zdDB7ZmlsbDojMzg0NzQ1O30KCS5zdDF7ZmlsbDojMkU2OEU5O30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxNTYiPgoJCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDE2My44MTk4NSwzMC4zMTM5MDggaCAyMC44MDI5NSBjIDkuODc3NzMsMCAxNi41Mzc2LDQuNzg5MDU4IDE2LjUzNzYsMTQuMDY3NTU4IDAsNy41NTg3MjcgLTUuMTYyOTgsMTIuMTIzNjggLTEwLjE3NzM3LDEzLjY5NDg2MiAxLjQ5Njg5LDEuMjcxNTYxIDIuNjE5ODYsMi45OTI1NTQgMy41MTc1LDQuNzg5MDU5IDIuMDk0OTEsNC4yNjUzMzUgMy41MTYyOSw4Ljk3ODg4MiA3LjkzMTQzLDguOTc4ODgyIDEuMTIyOTcsMCAyLjAyMDYyLC0wLjM3MzkxNyAyLjAyMDYyLC0wLjM3MzkxNyBsIC0wLjk3MzE2LDguOTA0NTc5IGMgMCwwIC0yLjY5Mjk0LDAuNjczNTM5IC01LjAxMzE3LDAuNjczNTM5IC01Ljk4NjMzLDAgLTkuNDI4MzIsLTIuMzIwMjM3IC0xMi45NDU4LC0xMC4zMjcxNzIgLTEuNDk1NjksLTMuNTkwNTc2IC0zLjU5MTgsLTkuODc3NzQzIC02LjM2MDI1LC05Ljg3Nzc0MyBoIC0yLjg0Mzk2IHYgMTkuOTc5NTg4IGggLTEyLjQ5NjM5IHogbSAxMi40OTYzOSw5LjA1NDM5MyB2IDEyLjQyMDg2NCBoIDQuNDkwNjYgYyAzLjU5MTc4LDAgNy43ODE2LC0xLjEyMTc1MyA3Ljc4MTYsLTYuNTA4ODM0IDAsLTQuNDE1MTQ2IC0yLjg0Mjc0LC01LjkxMjAzIC02LjI4NTkzLC01LjkxMjAzIHoiCiAgIGlkPSJwYXRoMTUwIiAvPgoJCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDIwOS42OTEwNywzMC4zMTM5MDggaCAxMi40OTYzNyB2IDE0LjE0MzA3NCBjIDAsMS41NzExODIgLTAuMjI0MTEsMy44OTAxOTcgLTAuMzczOTIsNS42MTI0MDcgaCAwLjI5OTYyIGMgMC44MjMzNSwtMS4yNzE1NiAxLjg3MDgxLC0zLjIxNzg3NiAzLjE0MjM3LC00LjcxNDc2MyBMIDIzNy42MDMzLDMwLjMxMzkwOCBoIDEzLjQ2ODMxIGwgLTE2LjQ2MjA4LDE5LjgyOTc3NiAxNy4zNjA5NCwzMC42Nzk0NTkgSCAyMzcuNjAzMyBsIC0xMS42NzQyNSwtMjEuMTc1NjMyIC0zLjc0MTYxLDQuNTY0OTUyIHYgMTYuNjEwNjggaCAtMTIuNDk2MzcgeiIKICAgaWQ9InBhdGgxNTIiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMjU1LjkzNzQxLDMwLjMxMzkyNyBoIDMzLjQ0NzkgdiA5LjI3ODQ5MiBIIDI2OC40MzM3OCBWIDUwLjQ0MzMxIGggMTcuNTg1MDUgdiA5LjI3ODQ5MiBoIC0xNy41ODUwNSB2IDExLjgyMjgzIGggMjEuNzAwNTkgdiA5LjI3ODQ5NiBoIC0zNC4xOTY5NiB6IgogICBpZD0icGF0aDE1NCIgLz4KCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDMzMS45OTc2NSw4MC42NDg4MTEgaCAtMzcuMzAwNzggdiAtOC44NTUyOTMgbCAxMi41NTA3OCwtMTIuMjk1MjIzIGMgMy41ODU5NCwtMy42MzI5NDIgNS45Mjk2OSwtNi4xMTM1NTYgNy4wMzEyNSwtNy40NDE4NDkgMS4xMDE1NiwtMS4zMjgyOTMgMS44NjkxNCwtMi40NjkyNjUgMi4zMDI3MywtMy40MjI5MDkgMC40MzM2LC0wLjk1MzY0NyAwLjY1MDQsLTEuOTUyNzA1IDAuNjUwNCwtMi45OTcxNzcgMCwtMS4yOTQyMzEgLTAuNDMzNiwtMi4zMTU5OTggLTEuMzAwNzksLTMuMDY1MjkyIC0wLjg2NzE4LC0wLjc0OTI5MSAtMi4wODU5MywtMS4xMjM5NCAtMy42NTYyNSwtMS4xMjM5NCAtMS42MTcxOCwwIC0zLjI1MTk1LDAuNDQ4NDQxIC00LjkwNDI5LDEuMzQ1MzI2IC0xLjY1MjM1LDAuODk2ODgxIC0zLjUyMTQ5LDIuMjE5NDk3IC01LjYwNzQyLDMuOTY3ODQ5IGwgLTcuNjI4OTEsLTguNjUwOTM2IGMgMi42NDg0NCwtMi4yOTMyOTMgNC44NzUsLTMuOTMzNzkyIDYuNjc5NjksLTQuOTIxNDk3IDEuODA0NjgsLTAuOTg3NzA1IDMuNzY3NTcsLTEuNzQyNjc2IDUuODg4NjcsLTIuMjY0OTEgMi4xMjEwOSwtMC41MjIyMzYgNC41MDU4NiwtMC43ODMzNTIgNy4xNTQzLC0wLjc4MzM1MiAzLjMyODEyLDAgNi4yOTg4MiwwLjU2NzY0NiA4LjkxMjEsMS43MDI5NCAyLjYxMzI5LDEuMTM1MjkzIDQuNjQwNjMsMi43NTMwODcgNi4wODIwNCw0Ljg1MzM3OSAxLjQ0MTQsMi4xMDAyOTIgMi4xNjIxMSw0LjQ1NjAyOCAyLjE2MjExLDcuMDY3MTk5IDAsMS45NTI3MDYgLTAuMjUxOTYsMy43NTc4MjQgLTAuNzU1ODYsNS40MTUzNTIgLTAuNTAzOTEsMS42NTc1MjggLTEuMjgzMjEsMy4yODY2NzUgLTIuMzM3ODksNC44ODc0MzYgLTEuMDU0NjksMS42MDA3NjUgLTIuNDU1MDgsMy4yODY2NzUgLTQuMjAxMTgsNS4wNTc3MzIgLTEuNzQ2MDksMS43NzEwNTcgLTUuNDY2NzksNS4xMzE1MjcgLTExLjE2MjExLDEwLjA4MTQwMiB2IDAuMzQwNTkxIGggMTkuNDQxNDEgeiIKICAgaWQ9InBhdGgxNzIiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIpIiAvPjwvZz48ZwogICBpZD0iZzE2OCI+CgkJCTxjaXJjbGUKICAgY2xhc3M9InN0MSIKICAgY3g9IjM0LjkwODA1OCIKICAgY3k9Ijc2LjM5NDIxMSIKICAgcj0iNyIKICAgaWQ9ImNpcmNsZTE1OCIgLz4KCQkJPHBhdGgKICAgY2xhc3M9InN0MSIKICAgZD0ibSA3MS40NTg2MTgsNTguNjgxODI0IGMgLTAuMjA5MTgyLDAgLTAuNDE2OTkyLC0wLjAxMDgxIC0wLjYyMzA5MiwtMC4wMjk0IDEuODAzNDg5LDMuODk5MTc3IDIuOTU4OTMxLDguMTU2ODk4IDMuMzA2MTk4LDEyLjYzOTk5MSBIIDg5LjEwNzMgYyAyLjEzMzY2NywtMy43NjMwNTQgNS42MTg5NzMsLTYuNjYwNjgyIDkuNzkzNTAzLC04LjAyOTAyMiBWIDU4LjY4MDExNSBIIDcxLjQ4NzMyOCBjIC0wLjAwOTQsNC4yZS01IC0wLjAxOTE0LDAuMDAxNyAtMC4wMjg3MSwwLjAwMTcgeiIKICAgaWQ9InBhdGgxNjAiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Im0gNDIuMTA3MTU1LDI3Ljc0NDA4IHYgOS42NDY0MDQgYyA4LjI0NDMwOCwxLjExMjQyMyAxNS42MzY4NjQsNC45MzgxMSAyMS4yNDkxNjgsMTAuNTQ5MzA1IEwgNTguNDY4Mjg1LDI3Ljc0NDA4IFoiCiAgIGlkPSJwYXRoMTYyIiAvPgoJCQk8Y2lyY2xlCiAgIGNsYXNzPSJzdDEiCiAgIGN4PSIxMDQuMzM4MjgiCiAgIGN5PSI3OS44OTQyMTEiCiAgIHI9IjMuNSIKICAgaWQ9ImNpcmNsZTE2NCIgLz4KCQkJPHBhdGgKICAgY2xhc3M9InN0MSIKICAgZD0iTSAxMjEuNTg2ODksMCBIIDE0LjM5MjM4MyBDIDYuNDc2NTM4MiwwIDAsNi40NzY2MjM1IDAsMTQuMzkyNDY5IHYgODIuNTc3NDM4IGMgMCw3LjkxNTg0MyA2LjQ3NjUzODIsMTQuMzkyNDczIDE0LjM5MjM4MywxNC4zOTI0NzMgSCAxMjEuNTg2ODkgYyA3LjkxNTg0LDAgMTQuMzkyMzksLTYuNDc2NjMgMTQuMzkyMzksLTE0LjM5MjQ3MyBWIDE0LjM5MjQ2OSBDIDEzNS45NzkyOCw2LjQ3NjYyMzUgMTI5LjUwMjczLDAgMTIxLjU4Njg5LDAgWiBNIDM0LjkwODA1OCw5Ny4zOTQyMTEgYyAtMTEuNTc5Mzk1LDAgLTIxLjAwMDAwMiwtOS40MjA1NjMgLTIxLjAwMDAwMiwtMjEgMCwtMTEuNTc5NDM4IDkuNDIwNjA3LC0yMS4wMDAwMDQgMjEuMDAwMDAyLC0yMS4wMDAwMDQgMTEuNTc5Mzk1LDAgMjEsOS40MjA1NjcgMjEsMjEuMDAwMDA0IDAsMTEuNTc5NDM3IC05LjQyMDYwOCwyMSAtMjEsMjEgeiBtIDY5LjQzMDIyMiwwIGMgLTcuNzY2MTM3LDAgLTE0LjM2MzE1OSwtNS4wODY1NzkgLTE2LjY0NDE0MywtMTIuMTAxNzkyIEggNjcuMjU3OTM1IGMgLTMuODYyOTg4LDAgLTYuOTk1MjE3LC0zLjEyOTE1IC03LC02Ljk5MTc5OCBsIC0wLjAwNDgsLTQuMTA4MDU1IGMgMCwtMTIuNzY1MDg3IC0xMC4zNzgzMjMsLTIzLjE0MzQxIC0yMy4xMzQ4NjUsLTIzLjE0MzQxIEggMjUuNjA4NjE4IGMgLTMuODY1NzIzLDAgLTcsLTMuMTMzOTM0IC03LC03IDAsLTMuODY2MDY2IDMuMTM0Mjc3LC03IDcsLTcgaCAyLjQ5ODUzNSBWIDI3Ljc0NDA4IGggLTIuNDk4NTM1IGMgLTMuODY1NzIzLDAgLTcsLTMuMTMzOTM2IC03LC03IDAsLTMuODY2MDY0IDMuMTM0Mjc3LC03IDcsLTcgaCAzOC4zNjczODYgYyAzLjIzMTM1LDAgNi4wNDI5NjUsMi4yMTIxMDkgNi44MDM4MDYsNS4zNTMyMjIgbCA2LjE5MjMzNywyNS41ODI4MTMgaCAyNi40MTUwODMgYyA1LjI0NTksMCA5LjUxMzU3LDQuMjY3Njc3IDkuNTEzNTcsOS41MTM1NzMgdiAxMC40NDY4OTEgYyA1LjMyODYyLDMuMDAzMTEzIDguOTM3NDgsOC43MTMzMDMgOC45Mzc0OCwxNS4yNTM2MzIgMCw5LjY0OTUyMSAtNy44NTAzOSwxNy41IC0xNy41LDE3LjUgeiIKICAgaWQ9InBhdGgxNjYiIC8+CgkJPC9nPgo8L3N2Zz4K"}}]);