import{b as j,D as N,c as H,V as J,X as v}from"./index-c208d301.js";import{p as b,r as e,u as E,g as n,j as a}from"./react-7f918845.js";import{I}from"./index-884062d4.js";import"./react-router-dom-102d9908.js";import"./vendor-2e679db4.js";import"./lodash-44bc1aaf.js";import"./react-redux-8df6583b.js";const k=()=>{const t=H("zone"),l=b(),i=e.exports.useMemo(()=>Number(l.type),[l.type]),[u,f]=e.exports.useState([]),[y,h]=e.exports.useReducer(D,[]),g=e.exports.useMemo(()=>{var s;return(s=u.find(o=>o.id===i))==null?void 0:s.name},[u,i]),d=e.exports.useRef(0),r=e.exports.useRef(null),p=20,{push:x}=E();async function R(){var c;const s=await J(i,d.current,p),o=d.current===0?"reset":"add";h({type:o,payload:s.djRadios}),d.current+=p,(c=r.current)==null||c.call(r,s.hasMore)}async function C(){const s=await v();f(s.categories)}function D(s,o){const{type:c,payload:m}=o;return c==="reset"?m:[...s,...m]}return e.exports.useEffect(()=>{C()},[]),n("div",{className:t(),children:[a("h2",{className:t("title"),children:g}),a("section",{className:t("cards"),children:y.map(s=>n("div",{className:t("card"),children:[a(j,{className:t("img"),src:s.picUrl,onClick:()=>x(N.radioList(s.id))}),n("div",{className:t("right"),children:[a("h3",{children:s.name}),a("div",{children:s.desc}),n("small",{children:["\u8282\u76EE:",s.programCount,"\uFF0C\u8BA2\u9605:",s.subCount]})]})]},s.id))}),a(I,{ref:r,cb:R})]})};export{k as default};
