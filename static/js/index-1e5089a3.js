import{r as s,u as g,R as e}from"./react-cb61e8c1.js";import{L as j}from"./index-aaa0eb27.js";import{ax as x,D as F,c as E}from"./index-7638329a.js";import{H as S}from"./index-d32e264b.js";import"./vendor-b86105ba.js";import"./lodash-0d4875ad.js";import"./react-router-dom-23ef9bd5.js";import"./react-redux-35258e53.js";const B=()=>{const a=E("collection-singer"),[r,o]=s.exports.useState([]),{push:c}=g();return s.exports.useEffect(()=>{(async()=>{const i=(await x()).data.map(n=>{const{id:m,picUrl:u,name:l,mvSize:d,albumSize:p}=n,b=`\u4E13\u8F91\uFF1A${p}`,f=`MV\uFF1A${d}`;return{id:m,imgUrl:u,col2:l,col3:b,col4:f}});o(i)})()},[]),e.createElement("div",{className:a()},e.createElement(S,{title:"\u6536\u85CF\u7684\u6B4C\u624B",count:26}),e.createElement(j,{data:r,onItemClick:t=>c(F.singer(t))}))};export{B as default};
