import{r as c,u as O,R as t}from"./react-cb61e8c1.js";import{B as Q,T as i,C,L as y}from"./index-78a3e15e.js";import{a5 as o,b as k,r as W,D as d,J as X,c as Y,u as Z,a6 as _,a7 as $,F as ee,a8 as te,a9 as ae,aa as ne,ab as se,j as re}from"./index-7638329a.js";import{a as ce,u as ie}from"./react-redux-35258e53.js";import{h as oe}from"./vendor-b86105ba.js";import"./lodash-0d4875ad.js";import"./react-router-dom-23ef9bd5.js";var le="static/jpg/recommend-53b882c2.jpg";const Ce=()=>{const n=Y("find-music"),l=ce(e=>!!e.user.cookie),[N,v]=c.exports.useState([]),[w,x]=c.exports.useState([]),[b,B]=c.exports.useState([]),[S,P]=c.exports.useState([]),[D,h]=c.exports.useState([]),[j,A]=c.exports.useState([]),[F,M]=c.exports.useState([]),p=ie(),{push:r}=O(),g={size:"medium",hoverDisplay:!0,placement:"bottom"},z=oe(Date.now()).format("DD");function E(e){return e.map(s=>{const{id:a,name:u,picUrl:m}=s;return{id:a,name:u,imgUrl:m}})}function f(e){p(Z(e))}function T({i:e,j:s,len:a,item:u}){var m;return t.createElement(t.Fragment,null,t.createElement("strong",{className:n("ordinal")},e*a/2+s+1),t.createElement("div",null,t.createElement("div",null,u.name),t.createElement("div",{className:n("artist")},(m=u.extra)==null?void 0:m.artistName)))}function I({item:e}){var s;return t.createElement("div",{className:n("list")},t.createElement("div",{className:n("list-name")},e.name),t.createElement("div",{className:n("list-detail")},(s=e.extra)==null?void 0:s.description))}async function L(){const e=await _();v(e.banners)}async function R(){const s=await $({limit:l?9:10});x(E(s.result))}async function V(){if(!l)return;const e=await ee();B(e.data.dailySongs)}async function U(){const e=await te({limit:4});P(E(e.result))}async function J(){const e=await ae();h(E(e.result))}async function H(){const s=(await ne()).albums.map(a=>({id:a.id,name:a.name,imgUrl:a.picUrl,extra:{artistName:a.artist.name}}));A(s)}async function G(){const s=(await se()).toplist.map(a=>({id:a.id,name:a.name,imgUrl:a.picUrl,extra:{description:a.rcmdtext}}));M(s)}function q(){l&&r(o.video)}const K=e=>{e.stopPropagation(),p(re({tracks:b,current:0,fm:[]}))};return c.exports.useEffect(()=>{L(),R(),V(),U(),J(),H(),G()},[]),t.createElement("div",{className:n()},t.createElement(Q,{data:N,onBannerClick:f}),t.createElement(i,{name:"\u63A8\u8350\u6B4C\u5355",onClick:()=>r(o.findMusicMusicList)}),t.createElement("div",{className:n("card")},l&&t.createElement("div",{className:n("card-item")},t.createElement("div",{className:n("card-wrapper"),onClick:()=>r(o.dailyRecommend)},t.createElement("header",null,"\u6839\u636E\u60A8\u7684\u97F3\u4E50\u53E3\u5473\u751F\u6210\u6BCF\u65E5\u66F4\u65B0"),t.createElement("strong",null,z),t.createElement(k,{className:n("card-img"),icon:g,src:le,alt:"\u6BCF\u65E5\u63A8\u8350",onIconClick:K})),t.createElement("p",null,"\u6BCF\u65E5\u6B4C\u66F2\u63A8\u8350")),w.map(e=>t.createElement("div",{key:e.id,className:n("card-item")},t.createElement(k,{className:n("card-img"),src:W(e.imgUrl,135),icon:g,onClick:()=>r(d.list(e.id)),onIconClick:()=>p(X(e.id))}),t.createElement("p",null,e.name)))),t.createElement(i,{name:"\u72EC\u5BB6\u653E\u9001",welt:!0,onClick:()=>{}}),t.createElement(C,{type:"rectangle",data:S,onItemClick:e=>r(d.playVideo(e))}),t.createElement(i,{name:"\u6700\u65B0\u97F3\u4E50",onClick:()=>r(o.findMusicNewest)}),t.createElement(y,{icon:!0,data:j,functionChildren:T,onItemClick:f}),t.createElement(i,{name:"\u63A8\u8350MV",onClick:q}),t.createElement(C,{type:"rectangle",data:D,onItemClick:e=>r(d.playVideo(e))}),t.createElement(i,{name:"\u4E3B\u64AD\u7535\u53F0",welt:!0,onClick:()=>r(o.findMusicRadioHost)}),t.createElement(y,{size:"medium",data:F,functionChildren:I,onItemClick:e=>r(d.radioList(e))}))};export{Ce as default};
