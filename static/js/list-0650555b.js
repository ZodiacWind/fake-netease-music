import{u as c,R as m}from"./react-cb61e8c1.js";import{L as n}from"./index-3e44426f.js";import{h as d,n as l}from"./vendor-b86105ba.js";import{a as p}from"./react-redux-35258e53.js";import{D as r}from"./index-7638329a.js";import"./lodash-0d4875ad.js";import"./react-router-dom-23ef9bd5.js";const x=({data:a,isAlbum:u})=>{const{push:e}=c(),o=a.map(s=>({id:s.id,imgUrl:s.picUrl,name:s.name,col2:`${s.size}\u9996`,col3:`\u53D1\u884C\u65F6\u95F4\uFF1A ${d(s.publishTime).format("YYYY-MM-DD")}`})),t=p(s=>!!s.user.cookie);function i(s){!s.id||(u?e(r.list(s.id,"album")):t?e(r.list(s.id)):l.error("\u9700\u8981\u767B\u5F55\uFF0C\u624D\u80FD\u67E5\u770B\u4ED6\u4EBA\u6B4C\u5355\u4FE1\u606F>_<"))}return m.createElement(n,{imgType:"extra",data:o,onItemClick:i})};export{x as default};
