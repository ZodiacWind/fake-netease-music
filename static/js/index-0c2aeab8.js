import{r as o,R as e,u as V}from"./react-8de69987.js";import{ak as R,al as G,am as b,c as A,D,an as P}from"./index-4de405b4.js";import{N as T}from"./index-30ea311e.js";import{L as w}from"./index-0b04169c.js";import{P as M}from"./index-f7eaed53.js";import{ad as S,k as L}from"./vendor-a5ef6589.js";import"./lodash-70433db2.js";import"./react-router-dom-0278a61d.js";import"./react-redux-3330aec9.js";function F(t){const[p,f]=o.exports.useState([]),r=o.exports.useMemo(()=>{const c=p.find(s=>s.id===t);return c?c.name:"\u5168\u90E8\u89C6\u9891"},[t]),i=e.createElement(e.Fragment,null,r," ",e.createElement(S,null));async function v(){const c=await R();f(c.data)}return o.exports.useEffect(()=>{v()},[]),{videoGroupList:p,buttonContext:i}}function I(t){const[p,f]=o.exports.useReducer(g,[]),[r,i]=o.exports.useState(""),[v,c]=o.exports.useState(!0),s=o.exports.useRef(null);let E=0;const x=8;async function C(a=0){const u=t?await G(t,a):await b(a);c(u.hasmore);const m=u.datas.filter(l=>l.data.creator).map(l=>{const{vid:h,coverUrl:d,title:y,creator:N}=l.data,{nickname:k}=N;return{id:h,imgUrl:d,description:y,author:k}});f(a===0?{payload:m}:{type:"add",payload:m})}function g(a,{type:u="reset",payload:m}){return u==="add"?[...a,...m]:m}return o.exports.useEffect(()=>{C()},[t]),o.exports.useEffect(()=>{if(!s.current)return;const a=new IntersectionObserver(u=>{u[0].intersectionRatio<=0||(v?(i("\u52A0\u8F7D\u4E2D..."),E+=x,C(E)):i("\u6CA1\u6709\u66F4\u591A\u4E86~"))});return a.observe(s.current),()=>{s.current&&a.unobserve(s.current),a.disconnect()}},[]),{moreText:r,videoList:p,footerRef:s}}const Q=()=>{const t=A("video"),[p,f]=o.exports.useState([]),[r,i]=o.exports.useState(0),{push:v}=V(),{buttonContext:c,videoGroupList:s}=F(r),{moreText:E,videoList:x,footerRef:C}=I(r);function g(n){v(D.playVideo(n))}function a(n){i(n)}async function u(){const n=await P();f(n.data.map(l=>({name:l.name,id:l.id})))}function m(n){function l(d){i(d),n(!1)}function h(){i(0),n(!1)}return e.createElement("div",{className:t("popover")},e.createElement("header",{className:t("popover-header")},e.createElement("button",{className:L({["--active"]:!r}),onClick:h},"\u5168\u90E8\u89C6\u9891")),e.createElement("div",{className:t("popover-main")},s.map(d=>e.createElement("div",{key:d.id},e.createElement("span",{className:L({"--active":d.id===r}),onClick:()=>l(d.id)},d.name)))))}return o.exports.useEffect(()=>{u()},[]),e.createElement("div",{className:t()},e.createElement("header",{className:t("header")},e.createElement(M,{context:c,functionChildren:m}),e.createElement(T,{id:r,data:p,onNavClick:a})),e.createElement(w,{data:x,onItemClick:g}),e.createElement("footer",{ref:C,className:t("footer")},E))};export{Q as default};
