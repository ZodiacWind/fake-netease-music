import{R as e,r as v}from"./react-6a93a4b0.js";import{a as p,u}from"./react-redux-0a51a65b.js";import{r as i,I as d,c as _,s as g,a as E,B as f,L as C,C as k,g as y,W as N,n as h}from"./index-efec1b87.js";import{k as M,H as b,X as F,Y as O,Z as U}from"./vendor-2d6f78b2.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-6c750f63.js";const G="_cover_tuak0_1",I="_cover__img_tuak0_20",L="_cover__play_tuak0_25";var n={cover:G,"cover__pre-img":"_cover__pre-img_tuak0_14",cover__img:I,cover__play:L,"--pause":"_--pause_tuak0_33"};const z=({current:t,next:s})=>{var r;const a=_("cover",n),c=p(l=>l.controller.pause),m=u(),o=()=>{m(g(!c))};return e.createElement(e.Fragment,null,e.createElement("div",{className:a()},((r=s==null?void 0:s.album)==null?void 0:r.picUrl)&&e.createElement("img",{className:a("pre-img"),src:i(s.album.picUrl,300),alt:"pre-cover"}),(t==null?void 0:t.album.picUrl)&&e.createElement("div",{className:a("img")},e.createElement("img",{src:i(t.album.picUrl,300),alt:"cover"}),e.createElement("div",{className:M(a("play"),{[n["--pause"]]:!c}),onClick:o},e.createElement(d,{type:c?"play":"pause",size:"large"})))))},w=()=>{const t=_("fm"),s=u(),[a,c]=p(o=>{const{fm:r,current:l}=o.currentTrack;return r[l]?[r[l],r[l+1]]:[]}),m=[{icon:b},{icon:F},{icon:O,event:()=>{s(h())}},{icon:U}];return v.exports.useEffect(()=>{a||s(E(!0))},[]),e.createElement("div",{className:"fm"},e.createElement("section",{className:t("player")},e.createElement("div",{className:t("cover-wrapper")},e.createElement(z,{current:a,next:c}),e.createElement(f,{data:m})),e.createElement(C,{music:a})),e.createElement(k,{id:a==null?void 0:a.id,api:y,functionChildren:o=>e.createElement(N,{count:o})}))};export{w as default};