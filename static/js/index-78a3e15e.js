var M=Object.defineProperty;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var q=(e,a,t)=>a in e?M(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,w=(e,a)=>{for(var t in a||(a={}))y.call(a,t)&&q(e,t,a[t]);if(u)for(var t of u(a))N.call(a,t)&&q(e,t,a[t]);return e};var h=(e,a)=>{var t={};for(var r in e)y.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&u)for(var r of u(e))a.indexOf(r)<0&&N.call(e,r)&&(t[r]=e[r]);return t};import{R as _,r as x}from"./react-cb61e8c1.js";import{c as b,b as f,r as j}from"./index-7638329a.js";import{k as m,ad as U,ac as R}from"./vendor-b86105ba.js";const A="_title_1jwng_1";var O={title:A,"--welt":"_--welt_1jwng_9"};const Z=i=>{var n=i,{name:e,welt:a=!1,className:t}=n,r=h(n,["name","welt","className"]);const l=b("title",O),d=m(t,l(),{[O["--welt"]]:a});return _.createElement("header",w({className:d},r),e,_.createElement(U,null))},D="_card_1vrfj_1",S="_card__img_1vrfj_6",T="_card__item_1vrfj_11";var $={card:D,card__img:S,card__item:T,"--square":"_--square_1vrfj_19","--rectangle":"_--rectangle_1vrfj_25"};const B=({type:e="square",data:a,icon:t,onItemClick:r,onItemIconClick:i})=>{const n=b("card",$);return _.createElement("div",{className:n()},a.map(l=>_.createElement("div",{key:l.id,className:m(n("item"),$[`--${e}`])},_.createElement(f,{className:n("img"),src:e==="rectangle"?l.imgUrl:j(l.imgUrl),icon:t,onClick:()=>r==null?void 0:r(l.id),onIconClick:()=>i==null?void 0:i(l.id)}),_.createElement("p",null,l.name))))},z="_list_1qctb_1",F="_list__col_1qctb_5",G="_list__item_1qctb_12",P="_list__img_1qctb_22";var L={list:z,list__col:F,list__item:G,list__img:P,"list__img-wrapper":"_list__img-wrapper_1qctb_27","--default":"_--default_1qctb_30","--medium":"_--medium_1qctb_34","--large":"_--large_1qctb_38"};const k=({icon:e,data:a,functionChildren:t,size:r="default",onItemClick:i})=>{const n=b("list",L),l=a.length,d=[a.slice(0,l/2),a.slice(l/2,l)];return _.createElement("div",{className:n()},d.map((p,s)=>_.createElement("div",{key:s,className:n("col")},p.map((c,o)=>_.createElement("div",{key:o,className:n("item"),onDoubleClick:()=>i==null?void 0:i(c.id)},_.createElement("div",{className:m(n("img-wrapper"),L[`--${r}`])},_.createElement(f,{className:n("img"),src:j(c.imgUrl),icon:e,onClick:()=>i==null?void 0:i(c.id)})),t==null?void 0:t({item:c,i:s,j:o,len:l}))))))},H="_banner_xdvgn_1",J="_banner__item_xdvgn_5",K="_banner__dot_xdvgn_27",Q="_banner__array_xdvgn_49";var g={banner:H,banner__item:J,"--left":"_--left_xdvgn_16","--right":"_--right_xdvgn_20","--hidden":"_--hidden_xdvgn_24",banner__dot:K,"--active":"_--active_xdvgn_35","banner__dot-wrapper":"_banner__dot-wrapper_xdvgn_41",banner__array:Q};let E,v=0;const C=({data:e,onBannerClick:a})=>{const t=b("banner",g),[r,i]=x.exports.useState(0);async function n(s=!1){const c=e.length,o=s?v+1:v-1;v=o<0?o+c:o%c,i(v)}function l(s){const c=e.length;return s===r-1||r===0&&s===c-1?g["--left"]:s===(r+1)%c?g["--right"]:s===r?"":g["--hidden"]}function d(){requestAnimationFrame(()=>{E=setInterval(()=>{n(!0)},5e3)})}function p(s){clearInterval(E),v=s,i(v)}return x.exports.useEffect(()=>{if(e.length!==0)return d(),()=>{clearInterval(E)}},[e]),_.createElement("div",{className:t()},e.map((s,c)=>_.createElement(f,{src:s.imageUrl,key:s.imageUrl,banLoading:!0,className:m(t("item"),l(c)),onClick:()=>a==null?void 0:a(s.targetId)})),_.createElement("div",{className:t("dot-wrapper")},e.map((s,c)=>_.createElement("div",{key:s.imageUrl,onMouseOver:()=>p(c),onMouseOut:d,className:m(t("dot"),{[g["--active"]]:c===r})}))),_.createElement(R,{className:m(t("array"),g["--left"]),onClick:()=>n()}),_.createElement(U,{className:m(t("array"),g["--right"]),onClick:()=>n(!0)}))};export{C as B,B as C,k as L,Z as T};
