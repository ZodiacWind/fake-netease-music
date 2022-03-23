import{n as R,u as k,r as n,g as S,R as e}from"./react-6a93a4b0.js";import{b as L,r as T,t as z,i as m,D as H,c as $,A as j,E as q,F as G}from"./index-5e562a9a.js";import{L as W}from"./index-2e4d5f4f.js";import{A as J}from"./index-8a320b03.js";import{M as K}from"./index-c1c8d5b4.js";import{a as Q}from"./react-redux-0a51a65b.js";import{an as V,ao as X,ap as Y,af as Z,z as _,aq as D}from"./vendor-2d6f78b2.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-6c750f63.js";const ue=()=>{const a=$("user"),v=R(),{push:F}=k(),y=Q(l=>l.user.profile.userId),c=n.exports.useMemo(()=>Number(v.id),[v.id]),{state:A}=S(),[t,B]=n.exports.useState(),[o,U]=n.exports.useState([]),[u,P]=n.exports.useState([]),x=n.exports.useMemo(()=>N(u.filter(l=>l.userId===y)),[u]),I=n.exports.useMemo(()=>N(u.filter(l=>l.userId!==y)),[u]);function N(l){return l.map(s=>{const{id:r,name:i,coverImgUrl:E,trackCount:d,copywriter:p,createTime:f,tracks:g}=s;return{id:r,name:i,picUrl:E,size:d,description:p,publishTime:f,songs:g||[]}})}async function w(){const l=await j(c);B(l)}async function M(){const s=(await q(c)).djRadios.map(r=>{const{id:i,name:E,programCount:d,subCount:p,picUrl:f}=r,g=`\u8282\u76EE${d}`,h=`\u8BA2\u9605${p}`;return{id:i,imgUrl:f,name:E,col2:g,col3:h}});U(s)}async function b(){const l=await G(c);P(l.playlist)}function O(){if(o.length>0)return e.createElement(e.Fragment,null,e.createElement("h2",{className:a("tag")},e.createElement("div",null,"Ta\u521B\u5EFA\u7684\u7535\u53F0",e.createElement("strong",null,"\uFF08",o.length,"\uFF09"))),e.createElement("div",{className:a("radio")},e.createElement(W,{data:o})))}const C=({title:l,playlist:s})=>{const[r,i]=n.exports.useState("overview");return s.length>0?e.createElement(e.Fragment,null,e.createElement("h2",{className:a("tag")},e.createElement("div",null,l,e.createElement("strong",null,"\uFF08",s.length,"\uFF09")),e.createElement(J,{activeButton:r,setActiveButton:i})),e.createElement("div",{className:a("playlist")},e.createElement(K,{type:r,id:c,data:s,myself:A}))):null};return n.exports.useEffect(()=>{Number.isNaN(c)||(w(),M(),b())},[]),e.createElement("div",null,e.createElement("header",{className:a("header")},e.createElement(L,{src:t&&T(t.profile.avatarUrl,200),className:a("cover")}),e.createElement("div",{className:a("introduction")},e.createElement("h2",null,t==null?void 0:t.profile.nickname),e.createElement("div",{className:a("title")},e.createElement("div",{className:a("title-left")},(t==null?void 0:t.identify)&&e.createElement("div",{className:a("title-auth")},e.createElement("img",{src:z(t.identify.imageUrl)}),e.createElement("strong",null,t.identify.imageDesc)),e.createElement("mark",null,"Lv",t==null?void 0:t.level),t!=null&&t.profile.gender?e.createElement(V,null):e.createElement(X,null)),(t==null?void 0:t.identify)&&e.createElement("div",{className:a("title-right")},e.createElement(m,{onClick:()=>F(H.singer(t.profile.artistId))},e.createElement(Y,null),"\u6B4C\u624B\u9875"),e.createElement(m,null,e.createElement(Z,null),"\u53D1\u79C1\u4FE1"),e.createElement(m,null,e.createElement(_,null),"\u5173\u6CE8"),e.createElement(m,{className:"--circle"},e.createElement(D,null)))),e.createElement("div",{className:a("statistic")},e.createElement("div",{className:a("statistic-item")},e.createElement("h3",null,t==null?void 0:t.profile.eventCount),e.createElement("div",null,"\u52A8\u6001")),e.createElement("div",{className:a("statistic-item")},e.createElement("h3",null,t==null?void 0:t.profile.follows),e.createElement("div",null,"\u5173\u6CE8")),e.createElement("div",{className:a("statistic-item")},e.createElement("h3",null,t==null?void 0:t.profile.followeds),e.createElement("div",null,"\u7C89\u4E1D"))),e.createElement("div",{className:a("social")},e.createElement("div",null,"\u793E\u4EA4\u7F51\u7EDC: ",e.createElement("span",null,"\u672A\u7ED1\u5B9A")),e.createElement("div",null,"\u4E2A\u4EBA\u4ECB\u7ECD: ",e.createElement("span",null,(t==null?void 0:t.profile.signature)||"\u6682\u65E0\u4ECB\u7ECD"))))),O(),e.createElement(C,{title:"\u6B4C\u5355",playlist:x}),e.createElement(C,{title:"\u6536\u85CF\u7684\u6B4C\u5355",playlist:I}))};export{ue as default};
