import{r as o,R as s}from"./react-cb61e8c1.js";import{k as d}from"./vendor-b86105ba.js";import{c as l}from"./index-7638329a.js";const p="_nav_1homd_1",f="_nav__item_1homd_4";var i={nav:p,nav__item:f,"--active":"_--active_1homd_18"};const E=({id:c,data:n,onNavClick:a})=>{const m=l("nav",i),[_,r]=o.exports.useState();function v(e,t){r(e),a==null||a(t)}return o.exports.useEffect(()=>{const e=n.findIndex(t=>t.id===c);e>-1&&r(e)},[c]),s.createElement("div",{className:m()},n.map((e,t)=>s.createElement("div",{key:e.id,className:m("item"),onClick:()=>v(t,e.id)},s.createElement("span",{className:d({[i["--active"]]:t===_})},e.name))))};export{E as N};
