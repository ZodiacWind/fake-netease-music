var M=Object.defineProperty;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var y=(e,a,t)=>a in e?M(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,w=(e,a)=>{for(var t in a||(a={}))N.call(a,t)&&y(e,t,a[t]);if(v)for(var t of v(a))q.call(a,t)&&y(e,t,a[t]);return e};var h=(e,a)=>{var t={};for(var r in e)N.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&v)for(var r of v(e))a.indexOf(r)<0&&q.call(e,r)&&(t[r]=e[r]);return t};import{R as _,r as x}from"./react-8de69987.js";import{c as b,b as E,r as $}from"./index-4de405b4.js";import{k as g,ad as L,ac as R}from"./vendor-a5ef6589.js";const A="_title_1jwng_1";var j={title:A,"--welt":"_--welt_1jwng_9"};const Z=i=>{var l=i,{name:e,welt:a=!1,className:t}=l,r=h(l,["name","welt","className"]);const n=b("title",j),d=g(t,n(),{[j["--welt"]]:a});return _.createElement("header",w({className:d},r),e,_.createElement(L,null))},D="_card_1vrfj_1",S="_card__img_1vrfj_6",T="_card__item_1vrfj_11";var U={card:D,card__img:S,card__item:T,"--square":"_--square_1vrfj_19","--rectangle":"_--rectangle_1vrfj_25"};const B=({type:e="square",data:a,icon:t,onItemClick:r,onItemIconClick:i})=>{const l=b("card",U);return _.createElement("div",{className:l()},a.map(n=>_.createElement("div",{key:n.id,className:g(l("item"),U[`--${e}`])},_.createElement(E,{className:l("img"),src:e==="rectangle"?n.imgUrl:$(n.imgUrl),icon:t,onClick:()=>r==null?void 0:r(n.id),onIconClick:()=>i==null?void 0:i(n.id)}),_.createElement("p",null,n.name))))},z="_list_1qctb_1",F="_list__col_1qctb_5",G="_list__item_1qctb_12",P="_list__img_1qctb_22";var O={list:z,list__col:F,list__item:G,list__img:P,"list__img-wrapper":"_list__img-wrapper_1qctb_27","--default":"_--default_1qctb_30","--medium":"_--medium_1qctb_34","--large":"_--large_1qctb_38"};const k=({icon:e,data:a,functionChildren:t,size:r="default",onItemClick:i})=>{const l=b("list",O),n=a.length,d=[a.slice(0,n/2),a.slice(n/2,n)];return _.createElement("div",{className:l()},d.map((p,s)=>_.createElement("div",{key:s,className:l("col")},p.map((c,o)=>_.createElement("div",{key:o,className:l("item"),onDoubleClick:()=>i==null?void 0:i(c.id)},_.createElement("div",{className:g(l("img-wrapper"),O[`--${r}`])},_.createElement(E,{className:l("img"),src:$(c.imgUrl),icon:e,onClick:()=>i==null?void 0:i(c.id)})),t==null?void 0:t({item:c,i:s,j:o,len:n}))))))},H="_banner_xdvgn_1",J="_banner__item_xdvgn_5",K="_banner__dot_xdvgn_27",Q="_banner__array_xdvgn_49";var m={banner:H,banner__item:J,"--left":"_--left_xdvgn_16","--right":"_--right_xdvgn_20","--hidden":"_--hidden_xdvgn_24",banner__dot:K,"--active":"_--active_xdvgn_35","banner__dot-wrapper":"_banner__dot-wrapper_xdvgn_41",banner__array:Q};let f,u=0;const C=({data:e,onBannerClick:a})=>{const t=b("banner",m),[r,i]=x.exports.useState(0);async function l(s=!1){const c=e.length,o=s?u+1:u-1;u=o<0?o+c:o%c,i(u)}function n(s){const c=e.length;return s===r-1||r===0&&s===c-1?m["--left"]:s===(r+1)%c?m["--right"]:s===r?"":m["--hidden"]}function d(){requestAnimationFrame(()=>{f=setInterval(()=>{l(!0)},5e3)})}function p(s){clearInterval(f),u=s,i(u)}return x.exports.useEffect(()=>{if(e.length!==0)return d(),()=>{clearInterval(f)}},[e]),_.createElement("div",{className:t()},e.map((s,c)=>_.createElement(E,{src:s.imageUrl,key:s.imageUrl,banLoading:!0,className:g(t("item"),n(c)),onClick:()=>a==null?void 0:a(s.targetId)})),_.createElement("div",{className:t("dot-wrapper")},e.map((s,c)=>_.createElement("div",{key:s.imageUrl,onMouseOver:()=>p(c),onMouseOut:d,className:g(t("dot"),{[m["--active"]]:c===r})}))),_.createElement(R,{className:g(t("array"),m["--left"]),onClick:()=>l()}),_.createElement(L,{className:g(t("array"),m["--right"]),onClick:()=>l(!0)}))};export{C as B,B as C,k as L,Z as T};
