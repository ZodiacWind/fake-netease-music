var I=Object.defineProperty,w=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(e,t,i)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&k(e,i,t[i]);if(m)for(var i of m(t))E.call(t,i)&&k(e,i,t[i]);return e},v=(e,t)=>w(e,S(t));var N=(e,t)=>{var i={};for(var l in e)g.call(e,l)&&t.indexOf(l)<0&&(i[l]=e[l]);if(e!=null&&m)for(var l of m(e))t.indexOf(l)<0&&E.call(e,l)&&(i[l]=e[l]);return i};import{R as a,r as _,u as T}from"./react-cb61e8c1.js";import{b as y,r as C,c as D,ai as z,m as B,D as u,J as P,j as R}from"./index-7638329a.js";import{u as A}from"./react-redux-35258e53.js";import"./vendor-b86105ba.js";import"./lodash-0d4875ad.js";import"./react-router-dom-23ef9bd5.js";const U="_official_s160o_1",$="_official__left_s160o_5",G="_official__img_s160o_11",H="_official__right_s160o_16",J="_official__item_s160o_20",O="_official__all_s160o_65";var V={official:U,official__left:$,official__img:G,official__right:H,official__item:J,"official__item-left":"_official__item-left_s160o_43","official__item-right":"_official__item-right_s160o_55",official__all:O};const q=({data:e,onItemClick:t,onViewAll:i})=>{const l=D("official",V);return a.createElement("div",{className:l()},a.createElement("div",{className:l("left")},a.createElement(y,{className:l("img"),src:C(e.coverImgUrl),icon:{size:"big",hoverDisplay:!0},onClick:()=>t(e.tracks,0),onIconClick:()=>t(e.tracks,0)})),a.createElement("div",{className:l("right")},a.createElement("ul",null,e.tracks.map((c,r)=>a.createElement("li",{key:c.id,className:l("item"),onClick:()=>t(e.tracks,r)},a.createElement("div",{className:l("item-left")},a.createElement("strong",null,r+1),a.createElement("div",null,a.createElement("span",null,"-")),a.createElement("span",null,c.name)),a.createElement("div",{className:l("item-right")},c.ar.reduce((o,f)=>`${o}/${f.name}`,"").slice(1))))),a.createElement("div",{className:l("all"),onClick:()=>i(e.id)},"\u67E5\u770B\u5168\u90E8 >")))},Z=()=>{const e=D("rank"),[t,i]=_.exports.useState([]),[l,c]=_.exports.useState([]),r=A(),{push:o}=T();function f(s,n){r(R({current:n,tracks:s,fm:[]}))}return _.exports.useEffect(()=>{(async()=>{const s=await z();i(s.list);const n=s.list.slice(0,5),d=[];for(const b of n){const p=(await B(b.id)).playlist,{tracks:j}=p,x=N(p,["tracks"]);d.push(v(h({},x),{tracks:j.slice(0,5)}))}c(d)})()},[]),a.createElement("div",{className:e()},a.createElement("header",{className:e("header")},"\u5B98\u65B9\u699C"),a.createElement("div",{className:e("official")},l.map(s=>a.createElement(q,{key:s.id,data:s,onItemClick:f,onViewAll:n=>o(u.list(n))}))),a.createElement("header",{className:e("header")},"\u5168\u7403\u699C"),a.createElement("div",{className:e("global")},t.map(s=>a.createElement("div",{key:s.id,className:e("item")},a.createElement("div",{className:e("img-wrapper")},a.createElement(y,{className:e("img"),src:C(s.coverImgUrl),icon:{size:"big",hoverDisplay:!0},onClick:()=>o(u.list(s.id)),onIconClick:()=>r(P(s.id))})),a.createElement("div",{className:e("detail"),onClick:()=>o(u.list(s.id))},s.name)))))};export{Z as default};
