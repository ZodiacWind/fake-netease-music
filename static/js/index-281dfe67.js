var x=Object.defineProperty,S=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(e,t,i)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))E.call(t,i)&&g(e,i,t[i]);if(m)for(var i of m(t))k.call(t,i)&&g(e,i,t[i]);return e},v=(e,t)=>S(e,T(t));var N=(e,t)=>{var i={};for(var l in e)E.call(e,l)&&t.indexOf(l)<0&&(i[l]=e[l]);if(e!=null&&m)for(var l of m(e))t.indexOf(l)<0&&k.call(e,l)&&(i[l]=e[l]);return i};import{R as a,r as _,u as z}from"./react-6a93a4b0.js";import{b as y,r as C,c as D,aj as B,m as P,D as u,K as R,j}from"./index-5e562a9a.js";import{u as A}from"./react-redux-0a51a65b.js";import"./vendor-2d6f78b2.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-6c750f63.js";const U="_official_s160o_1",$="_official__left_s160o_5",G="_official__img_s160o_11",H="_official__right_s160o_16",K="_official__item_s160o_20",O="_official__all_s160o_65";var V={official:U,official__left:$,official__img:G,official__right:H,official__item:K,"official__item-left":"_official__item-left_s160o_43","official__item-right":"_official__item-right_s160o_55",official__all:O};const q=({data:e,onItemClick:t,onViewAll:i})=>{const l=D("official",V);return a.createElement("div",{className:l()},a.createElement("div",{className:l("left")},a.createElement(y,{className:l("img"),src:C(e.coverImgUrl),icon:{size:"big",hoverDisplay:!0},onClick:()=>t(e.tracks,0),onIconClick:()=>t(e.tracks,0)})),a.createElement("div",{className:l("right")},a.createElement("ul",null,e.tracks.map((c,r)=>a.createElement("li",{key:c.id,className:l("item"),onClick:()=>t(e.tracks,r)},a.createElement("div",{className:l("item-left")},a.createElement("strong",null,r+1),a.createElement("div",null,a.createElement("span",null,"-")),a.createElement("span",null,c.name)),a.createElement("div",{className:l("item-right")},c.ar.reduce((o,f)=>`${o}/${f.name}`,"").slice(1))))),a.createElement("div",{className:l("all"),onClick:()=>i(e.id)},"\u67E5\u770B\u5168\u90E8 >")))},Z=()=>{const e=D("rank"),[t,i]=_.exports.useState([]),[l,c]=_.exports.useState([]),r=A(),{push:o}=z();function f(s,n){r(j({current:n,tracks:s,fm:[]}))}return _.exports.useEffect(()=>{(async()=>{const s=await B();i(s.list);const n=s.list.slice(0,5),p=[];for(const I of n){const d=(await P(I.id)).playlist,{tracks:b}=d,w=N(d,["tracks"]);p.push(v(h({},w),{tracks:b.slice(0,5)}))}c(p)})()},[]),a.createElement("div",{className:e()},a.createElement("header",{className:e("header")},"\u5B98\u65B9\u699C"),a.createElement("div",{className:e("official")},l.map(s=>a.createElement(q,{key:s.id,data:s,onItemClick:f,onViewAll:n=>o(u.list(n))}))),a.createElement("header",{className:e("header")},"\u5168\u7403\u699C"),a.createElement("div",{className:e("global")},t.map(s=>a.createElement("div",{key:s.id,className:e("item")},a.createElement("div",{className:e("img-wrapper")},a.createElement(y,{className:e("img"),src:C(s.coverImgUrl),icon:{size:"big",hoverDisplay:!0},onClick:()=>o(u.list(s.id)),onIconClick:()=>r(R(s.id))})),a.createElement("div",{className:e("detail"),onClick:()=>o(u.list(s.id))},s.name)))))};export{Z as default};
