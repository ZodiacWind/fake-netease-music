import{b as C,D as b,c as D,U as N,V as h}from"./index-7638329a.js";import{o as v,r as s,u as H,R as t}from"./react-cb61e8c1.js";import{I as J}from"./index-6fa3ffe2.js";import"./react-router-dom-23ef9bd5.js";import"./vendor-b86105ba.js";import"./lodash-0d4875ad.js";import"./react-redux-35258e53.js";const P=()=>{const a=D("zone"),i=v(),n=s.exports.useMemo(()=>Number(i.type),[i.type]),[d,f]=s.exports.useState([]),[y,E]=s.exports.useReducer(g,[]),R=s.exports.useMemo(()=>{var e;return(e=d.find(o=>o.id===n))==null?void 0:e.name},[d,n]),l=s.exports.useRef(0),r=s.exports.useRef(null),u=20,{push:j}=H();async function m(){var c;const e=await N(n,l.current,u),o=l.current===0?"reset":"add";E({type:o,payload:e.djRadios}),l.current+=u,(c=r.current)==null||c.call(r,e.hasMore)}async function x(){const e=await h();f(e.categories)}function g(e,o){const{type:c,payload:p}=o;return c==="reset"?p:[...e,...p]}return s.exports.useEffect(()=>{x(),m()},[]),t.createElement("div",{className:a()},t.createElement("h2",{className:a("title")},R),t.createElement("section",{className:a("cards")},y.map(e=>t.createElement("div",{key:e.id,className:a("card")},t.createElement(C,{className:a("img"),src:e.picUrl,onClick:()=>j(b.radioList(e.id))}),t.createElement("div",{className:a("right")},t.createElement("h3",null,e.name),t.createElement("div",null,e.desc),t.createElement("small",null,"\u8282\u76EE:",e.programCount,"\uFF0C\u8BA2\u9605:",e.subCount))))),t.createElement(J,{ref:r,cb:m}))};export{P as default};
