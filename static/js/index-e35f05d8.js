import{r as s,u as F,R as t}from"./react-8de69987.js";import{L as E}from"./index-4d9a8751.js";import{ax as S,D as x,c as C}from"./index-4de405b4.js";import{H as v}from"./index-d21acc6d.js";import"./vendor-a5ef6589.js";import"./lodash-70433db2.js";import"./react-router-dom-0278a61d.js";import"./react-redux-3330aec9.js";const R=()=>{const r=C("collection-singer"),[a,o]=s.exports.useState([]),{push:c}=F();return s.exports.useEffect(()=>{(async()=>{const i=(await S()).data.map(n=>{const{id:m,picUrl:u,name:l,mvSize:p,albumSize:g}=n,f=`\u4E13\u8F91\uFF1A${g}`,d=`MV\uFF1A${p}`;return{id:m,imgUrl:u,col2:l,col3:f,col4:d}});o(i)})()},[]),t.createElement("div",{className:r()},t.createElement(v,{title:"\u6536\u85CF\u7684\u6B4C\u624B",count:26}),t.createElement(E,{data:a,onItemClick:e=>c(x.singer(e))}))};export{R as default};
