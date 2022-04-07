import{r as i,j as e,g as _,u as y,h as I}from"./react-7f918845.js";import{v as D,J as T,ak as E,k as b}from"./vendor-2e679db4.js";import{c as x}from"./index-dcd7dfe0.js";import{b as w,r as k,o as M,c as g,v as B,H as F,J as L,D as f,K as P,M as $,j as O}from"./index-c208d301.js";import{u as v}from"./react-redux-8df6583b.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-102d9908.js";var H={"song-list":"_song-list_1pg80_1","song-list__item":"_song-list__item_1pg80_4","song-list__left":"_song-list__left_1pg80_19","song-list__right":"_song-list__right_1pg80_23","song-list__ordinal":"_song-list__ordinal_1pg80_27","song-list__img":"_song-list__img_1pg80_32","song-list__img-wrapper":"_song-list__img-wrapper_1pg80_37","song-list__song":"_song-list__song_1pg80_42","song-list__author":"_song-list__author_1pg80_67","song-list__album":"_song-list__album_1pg80_73"};const z=i.exports.forwardRef(({type:n},r)=>{const s=g("song-list",H),[t,o]=i.exports.useState([]),c=v();function d(l){c(B(l))}return i.exports.useEffect(()=>{if(n===void 0)return;let l=!1;async function p(){const a=await F(n);l||o(a.data)}return p(),()=>{l=!0}},[n]),i.exports.useImperativeHandle(r,()=>t,[t]),e("div",{className:s(),children:t.map((l,p)=>_("div",{className:s("item"),children:[_("div",{className:s("left"),children:[e("div",{className:s("ordinal"),children:p+1}),e("div",{className:s("img-wrapper"),children:e(w,{className:s("img"),src:k(l.album.picUrl,100),icon:!0,onClick:()=>d(l.id)})}),_("div",{className:s("song"),children:[e("p",{children:l.name}),e("small",{children:"SQ"}),e(D,{})]})]}),_("div",{className:s("right"),children:[e("div",{className:s("author"),children:l.album.artists.reduce((a,h)=>`${a}/${h.name}`,"").slice(1)}),e("div",{className:s("album"),children:l.album.name}),e("div",{className:s("duration"),children:M(l.duration)})]})]},l.id))})});var J={"album-list":"_album-list_beldj_1","album-list__left":"_album-list__left_beldj_6","album-list__right":"_album-list__right_beldj_16","album-list__img":"_album-list__img_beldj_21","album-list__img-wrapper":"_album-list__img-wrapper_beldj_26","album-list__description":"_album-list__description_beldj_33","album-list__name":"_album-list__name_beldj_38","album-list__author":"_album-list__author_beldj_41"};const R=({type:n,area:r})=>{const s=g("album-list",J),[t,o]=i.exports.useState(),c=v(),{push:d}=y(),l=i.exports.useMemo(()=>(t==null?void 0:t.weekData)||(t==null?void 0:t.monthData),[t]),p=i.exports.useMemo(()=>{var a;return!!((a=t==null?void 0:t.weekData)!=null&&a.length)},[t]);return i.exports.useEffect(()=>{(async()=>{const a=await L({area:r,type:n,limit:20});o(a)})()},[r,n]),_("div",{className:s(),children:[e("div",{className:s("left"),children:_("h2",{children:["\u672C",p?"\u5468":"\u6708","\u65B0\u789F"]})}),e("div",{className:s("right"),children:l==null?void 0:l.map(a=>_("div",{className:s("item"),children:[e("div",{className:s("img-wrapper"),children:e(w,{className:s("img"),src:k(a.picUrl,100),icon:{size:"big",hoverDisplay:!0},onClick:()=>d(f.list(a.id)),onIconClick:()=>c(P(a.id))})}),_("div",{className:s("description"),children:[e("div",{className:s("name"),children:a.name}),e("div",{className:s("author"),children:a.artist.name})]})]},a.id))})]})};var U={"song-control":"_song-control_1uy4e_1","song-control__item":"_song-control__item_1uy4e_4"};const q=({onPlayAll:n,onCollectAll:r})=>{const s=g("song-control",U),t=[{name:"\u64AD\u653E\u5168\u90E8",icon:T},{name:"\u6536\u85CF\u5168\u90E8",icon:E}];function o(c){c===0?n():r()}return e("div",{className:s(),children:t.map((c,d)=>_("div",{className:s("item"),onClick:()=>o(d),children:[e(c.icon,{}),c.name]},c.name))})};var C={"album-control":"_album-control_edfae_1","album-control__item":"_album-control__item_edfae_4","--active":"_--active_edfae_19"};const G=({albumType:n,setAlbumType:r})=>{const s=g("album-control",C),t=[{text:"\u63A8\u8350",type:"hot"},{text:"\u5168\u90E8",type:"new"}];return e("div",{className:s(),children:t.map(o=>e("div",{className:s("item"),children:e("span",{className:b({[C["--active"]]:n===o.type}),onClick:()=>r(o.type),children:o.text})},o.text))})},ss=()=>{const n=g("newest"),[r,s]=i.exports.useState(0),[t,o]=i.exports.useState(0),c=i.exports.useMemo(()=>x[t],[t]),{push:d}=y(),{pathname:l}=I(),p=v(),a=i.exports.useRef([]),[h,A]=i.exports.useState("hot"),N=[{path:f.findMusicNewest(""),label:"\u65B0\u6B4C\u901F\u9012"},{path:f.findMusicNewest("album"),label:"\u65B0\u789F\u4E0A\u67B6"}];function S(){}function j(){if(!(a!=null&&a.current))return;const u={tracks:a.current.map($),current:0,fm:[]};p(O(u))}return i.exports.useEffect(()=>{const m=N.findIndex(u=>u.path===l);m>-1&&s(m)},[l]),_("div",{className:n(),children:[e("header",{className:n("switch"),children:N.map((m,u)=>e("div",{className:b("newest__switch-item",{["--active"]:r===u}),onClick:()=>{d(m.path),s(u)},children:m.label},u))}),_("div",{className:n("control"),children:[e("div",{children:x.slice(0,-1).map((m,u)=>e("span",{className:b("newest__category",{["--active"]:t===u}),onClick:()=>o(u),children:m.name},m.area))}),r?e(G,{albumType:h,setAlbumType:A}):e(q,{onCollectAll:S,onPlayAll:j})]}),r?e(R,{type:h,area:c.albumArea}):e(z,{ref:a,type:c.type})]})};export{ss as default};
