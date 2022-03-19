import{R as e,r as c,u as y,g as S}from"./react-8de69987.js";import{v as I,J as j,ak as D,k as b}from"./vendor-a5ef6589.js";import{c as h}from"./index-a839f1b4.js";import{G as T,b as k,r as C,o as M,c as g,u as B,H as F,D as E,J as L,K as P,j as $}from"./index-4de405b4.js";import{u as v}from"./react-redux-3330aec9.js";import"./lodash-70433db2.js";import"./react-router-dom-0278a61d.js";var O={"song-list":"_song-list_1pg80_1","song-list__item":"_song-list__item_1pg80_4","song-list__left":"_song-list__left_1pg80_19","song-list__right":"_song-list__right_1pg80_23","song-list__ordinal":"_song-list__ordinal_1pg80_27","song-list__img":"_song-list__img_1pg80_32","song-list__img-wrapper":"_song-list__img-wrapper_1pg80_37","song-list__song":"_song-list__song_1pg80_42","song-list__author":"_song-list__author_1pg80_67","song-list__album":"_song-list__album_1pg80_73"};const R=e.forwardRef(({type:n},r)=>{const t=g("song-list",O),[s,o]=c.exports.useState([]),i=v();function u(l){i(B(l))}return c.exports.useEffect(()=>{(async()=>{if(n===void 0)return;const l=await T(n);o(l.data)})()},[n]),c.exports.useImperativeHandle(r,()=>s,[s]),e.createElement("div",{className:t()},s.map((l,p)=>e.createElement("div",{key:l.id,className:t("item")},e.createElement("div",{className:t("left")},e.createElement("div",{className:t("ordinal")},p+1),e.createElement("div",{className:t("img-wrapper")},e.createElement(k,{className:t("img"),src:C(l.album.picUrl,100),icon:!0,onClick:()=>u(l.id)})),e.createElement("div",{className:t("song")},e.createElement("p",null,l.name),e.createElement("small",null,"SQ"),e.createElement(I,null))),e.createElement("div",{className:t("right")},e.createElement("div",{className:t("author")},l.album.artists.reduce((a,d)=>`${a}/${d.name}`,"").slice(1)),e.createElement("div",{className:t("album")},l.album.name),e.createElement("div",{className:t("duration")},M(l.duration))))))});var H={"album-list":"_album-list_beldj_1","album-list__left":"_album-list__left_beldj_6","album-list__right":"_album-list__right_beldj_16","album-list__img":"_album-list__img_beldj_21","album-list__img-wrapper":"_album-list__img-wrapper_beldj_26","album-list__description":"_album-list__description_beldj_33","album-list__name":"_album-list__name_beldj_38","album-list__author":"_album-list__author_beldj_41"};const z=({type:n,area:r})=>{const t=g("album-list",H),[s,o]=c.exports.useState(),i=v(),{push:u}=y(),l=c.exports.useMemo(()=>(s==null?void 0:s.weekData)||(s==null?void 0:s.monthData),[s]),p=c.exports.useMemo(()=>{var a;return!!((a=s==null?void 0:s.weekData)!=null&&a.length)},[s]);return c.exports.useEffect(()=>{(async()=>{const a=await F({area:r,type:n,limit:20});o(a)})()},[r,n]),e.createElement("div",{className:t()},e.createElement("div",{className:t("left")},e.createElement("h2",null,"\u672C",p?"\u5468":"\u6708","\u65B0\u789F")),e.createElement("div",{className:t("right")},l==null?void 0:l.map(a=>e.createElement("div",{key:a.id,className:t("item")},e.createElement("div",{className:t("img-wrapper")},e.createElement(k,{className:t("img"),src:C(a.picUrl,100),icon:{size:"big",hoverDisplay:!0},onClick:()=>u(E.list(a.id)),onIconClick:()=>i(L(a.id))})),e.createElement("div",{className:t("description")},e.createElement("div",{className:t("name")},a.name),e.createElement("div",{className:t("author")},a.artist.name))))))};var G={"song-control":"_song-control_1uy4e_1","song-control__item":"_song-control__item_1uy4e_4"};const J=({onPlayAll:n,onCollectAll:r})=>{const t=g("song-control",G),s=[{name:"\u64AD\u653E\u5168\u90E8",icon:j},{name:"\u6536\u85CF\u5168\u90E8",icon:D}];function o(i){i===0?n():r()}return e.createElement("div",{className:t()},s.map((i,u)=>e.createElement("div",{key:i.name,className:t("item"),onClick:()=>o(u)},e.createElement(i.icon,null),i.name)))};var N={"album-control":"_album-control_edfae_1","album-control__item":"_album-control__item_edfae_4","--active":"_--active_edfae_19"};const U=({albumType:n,setAlbumType:r})=>{const t=g("album-control",N),s=[{text:"\u63A8\u8350",type:"hot"},{text:"\u5168\u90E8",type:"new"}];return e.createElement("div",{className:t()},s.map(o=>e.createElement("div",{key:o.text,className:t("item")},e.createElement("span",{className:b({[N["--active"]]:n===o.type}),onClick:()=>r(o.type)},o.text))))},Z=()=>{const n=g("newest"),[r,t]=c.exports.useState(0),[s,o]=c.exports.useState(0),i=c.exports.useMemo(()=>h[s],[s]),{push:u}=y(),{pathname:l}=S(),p=v(),a=c.exports.useRef([]),[d,w]=c.exports.useState("hot"),f=[{path:E.findMusicNewest(""),label:"\u65B0\u6B4C\u901F\u9012"},{path:E.findMusicNewest("album"),label:"\u65B0\u789F\u4E0A\u67B6"}];function x(){}function A(){if(!(a!=null&&a.current))return;const m={tracks:a.current.map(P),current:0,fm:[]};p($(m))}return c.exports.useEffect(()=>{const _=f.findIndex(m=>m.path===l);_>-1&&t(_)},[l]),e.createElement("div",{className:n()},e.createElement("header",{className:n("switch")},f.map((_,m)=>e.createElement("div",{key:m,className:b("newest__switch-item",{["--active"]:r===m}),onClick:()=>{u(_.path),t(m)}},_.label))),e.createElement("div",{className:n("control")},e.createElement("div",null,h.slice(0,-1).map((_,m)=>e.createElement("span",{key:_.area,className:b("newest__category",{["--active"]:s===m}),onClick:()=>o(m)},_.name))),r?e.createElement(U,{albumType:d,setAlbumType:w}):e.createElement(J,{onCollectAll:x,onPlayAll:A})),r?e.createElement(z,{type:d,area:i.albumArea}):e.createElement(R,{ref:a,type:i.type}))};export{Z as default};
