import{r as a,u as y,R as t}from"./react-bbb89bd4.js";import{av as C,c as D,D as R}from"./index-fe3ac249.js";import{L as k}from"./index-231c4145.js";import"./vendor-8363c58c.js";import"./lodash-70433db2.js";import"./react-router-dom-ef6aab28.js";import"./react-redux-253ec180.js";const U=()=>{const s=D("radio"),[o,r]=a.exports.useState(0),[c,n]=a.exports.useState([]),{push:i}=y();function l(e){i(R.radioList(e))}return a.exports.useEffect(()=>{(async()=>{const e=await C();r(e.count);const u=e.djRadios.map(m=>{const{id:p,dj:d,picUrl:E,programCount:f,name:g}=m,{nickname:F}=d,h=`by ${F}`,x=`\u8282\u76EE${f}`;return{id:p,col2:g,imgUrl:E,col3:h,col4:x}});n(u)})()},[]),t.createElement("div",{className:s()},t.createElement("header",{className:s("header")},t.createElement("strong",null,"\u6211\u8BA2\u9605\u7684\u7535\u53F0"),t.createElement("span",null,"\uFF08",o,"\uFF09")),t.createElement(k,{data:c,onItemClick:l}))};export{U as default};