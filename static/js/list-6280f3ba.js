import{u as m,R as n}from"./react-8de69987.js";import{L as c}from"./index-1e9a40e7.js";import{h as l,n as p}from"./vendor-a5ef6589.js";import{a as f}from"./react-redux-3330aec9.js";import{D as s}from"./index-b727b1c2.js";import"./lodash-70433db2.js";import"./react-router-dom-0278a61d.js";const y=({data:a,isAlbum:o})=>{const{push:r}=m(),i=a.map(u=>({id:u.id,imgUrl:u.picUrl,name:u.name,col2:`${u.size}\u9996`,col3:`\u53D1\u884C\u65F6\u95F4\uFF1A ${l(u.publishTime).format("YYYY-MM-DD")}`})),t=f(u=>!!u.user.cookie);function e(u){!u.id||(o?r(s.list(u.id,"album")):t?r(s.list(u.id)):p.error("\u9700\u8981\u767B\u5F55\uFF0C\u624D\u80FD\u67E5\u770B\u4ED6\u4EBA\u6B4C\u5355\u4FE1\u606F>_<"))}return n.createElement(c,{imgType:"extra",data:i,onItemClick:e})};export{y as default};