import{r,R as e}from"./react-cb61e8c1.js";import{c as n,aA as i}from"./index-7638329a.js";import"./vendor-b86105ba.js";import"./lodash-0d4875ad.js";import"./react-router-dom-23ef9bd5.js";import"./react-redux-35258e53.js";const d="_detail_hzoqt_1";var m={detail:d};const b=({id:s})=>{const o=n("detail",m),[a,c]=r.exports.useState();async function l(){const t=await i(s);c(t)}return r.exports.useEffect(()=>{l()},[s]),e.createElement("div",{className:o()},a==null?void 0:a.introduction.map(t=>e.createElement("div",{key:t.ti},e.createElement("h2",null,t.ti),e.createElement("p",null,t.txt))))};export{b as default};
