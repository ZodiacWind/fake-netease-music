import{r as n,g as a,j as t,p as F,u as x}from"./react-fd5b3f8c.js";import{t as Y,I as $,c as P,b as z,d as M,r as H,w as d,j as D,C as L,$ as W,a0 as q,D as A,a1 as K,a2 as J,a3 as Q,a4 as X,a5 as Z,a6 as ee}from"./index-32e1ab72.js";import{ac as se,z as ae,K as te,$ as oe,a2 as ie,h as re}from"./vendor-29be4ff8.js";import{W as ne}from"./write-comment-2f17b8fb.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-f202c9ff.js";import"./react-redux-0fe31567.js";const le="_video_1pcl7_1",ce="_video__control_1pcl7_14",ue="_video__pause_1pcl7_29";var de={video:le,video__control:ce,video__pause:ue};const me=({src:s})=>{const m=P("video",de),[i,e]=n.exports.useState(!1),l=n.exports.useRef(null);return a("div",{className:m(),children:[t("video",{ref:l,src:Y(s),autoPlay:!0,controls:!0,onPause:()=>e(!0),onPlay:()=>e(!1)}),i&&t($,{type:"play",size:"giant",className:m("pause"),onClick:()=>{var u;return(u=l.current)==null?void 0:u.play()}})]})},be=()=>{const s=P("play-video"),i=F().id,[e,l]=n.exports.useState(),[u,B]=n.exports.useState(""),[w,E]=n.exports.useState([]),{goBack:T}=x(),I=n.exports.useMemo(()=>!Number.isNaN(Number(i)),[i]),{push:p}=x();async function O(){const o=await K(i),{creator:r,title:c,publishTime:h,playTime:v,videoGroup:C,praisedCount:N,subscribeCount:f,shareCount:g,commentCount:b}=o.data,y=re(h).format("YYYY-MM-DD"),{avatarUrl:_,nickname:V,userId:U}=r;l({title:c,publishTime:y,playTime:v,videoGroup:C,praisedCount:N,subscribeCount:f,shareCount:g,commentCount:b,avatarUrl:_,nickname:V,userId:U})}async function R(){const[o,r]=await Promise.all([J(Number(i)),Q(Number(i))]),{name:c,publishTime:h,playCount:v,videoGroup:C,subCount:N,shareCount:f,commentCount:g,artistName:b,cover:y,artistId:_}=o.data,{likedCount:V}=r;l({title:c,publishTime:h,playTime:v,videoGroup:C,subscribeCount:N,shareCount:f,commentCount:g,praisedCount:V,nickname:b,avatarUrl:y,artistId:_})}async function S(){var r;const o=await X(i);B((r=o.urls)==null?void 0:r[0].url)}async function j(){const o=await Z(Number(i));B(o.data.url)}async function G(){const o=await ee(i);E(o.data)}function k(){e!=null&&e.artistId?p(A.singer(e.artistId)):e!=null&&e.userId&&p(A.user(e.userId))}return n.exports.useEffect(()=>(I?(R(),j()):(O(),S()),G(),z),[i]),t("div",{className:s(),children:a("div",{className:s("detail"),children:[a("div",{className:s("left"),children:[t("h2",{className:s("title"),children:a("span",{onClick:()=>T(),children:[t(se,{})," \u89C6\u9891\u8BE6\u60C5"]})}),t(me,{src:u}),a("div",{className:s("author-wrapper"),children:[e&&a("div",{className:s("author"),children:[t(M,{className:s("avatar"),src:H(e.avatarUrl,50),onClick:k}),t("strong",{onClick:k,children:e.nickname})]}),a("button",{className:s("follow"),children:[t(ae,{})," \u5173\u6CE8"]})]}),t("h2",{className:s("name"),children:e==null?void 0:e.title}),a("div",{className:s("publish"),children:[a("span",{children:["\u53D1\u5E03: ",e==null?void 0:e.publishTime]}),a("span",{children:["\u64AD\u653E: ",d(e==null?void 0:e.playTime),"\u6B21"]})]}),t("div",{className:s("tags"),children:e==null?void 0:e.videoGroup.map(o=>t("div",{className:s("tag"),children:o.name},o.id))}),a("div",{className:s("button-group"),children:[a("div",{children:[a(D,{children:[t(te,{}),"\u8D5E",d(e==null?void 0:e.praisedCount)]}),a(D,{children:[t(oe,{}),"\u6536\u85CF",d(e==null?void 0:e.subscribeCount)]}),a(D,{children:[t(ie,{}),"\u5206\u4EAB",d(e==null?void 0:e.shareCount)]})]}),t("a",{children:"\u4E3E\u62A5"})]}),a("h3",{className:s("comment"),children:["\u542C\u53CB\u8BC4\u8BBA ",a("span",{children:["(\u5DF2\u6709",e==null?void 0:e.commentCount,"\u8BC4\u8BBA)"]})]}),t(ne,{}),t(L,{id:i,api:I?W:q})]}),a("div",{className:s("right"),children:[t("h2",{className:s("title"),children:"\u76F8\u5173\u63A8\u8350"}),w.map(o=>a("div",{className:s("item"),children:[t(M,{className:s("item-img"),src:o.coverUrl,onClick:()=>p(A.playVideo(o.vid))}),a("div",{className:s("item-description"),children:[t("div",{className:s("item-title"),children:o.title}),a("div",{className:s("item-author"),children:["by ",o.creator.reduce((r,c)=>`${r}/${c.userName}`,"").slice(1)]})]})]},o.vid))]})]})})};export{be as default};
