import{R as s}from"./react-f2ce6df7.js";import{b as c,r as i,c as m}from"./index-42c9aaa4.js";import{k as d}from"./vendor-989d90fd.js";const o="_list__item_tdndn_1",g="_list__img_tdndn_14",p="_list__name_tdndn_39",v="_list__col2_tdndn_44",N="_list__col3_tdndn_51";var t={list__item:o,list__img:g,"list__img-wrapper":"_list__img-wrapper_tdndn_19","--circle":"_--circle_tdndn_25","--extra":"_--extra_tdndn_32","--normal":"_--normal_tdndn_35",list__name:p,list__col2:v,list__col3:N};const j=({imgType:l="normal",data:r,onItemClick:a})=>{const _=m("list",t);return s.createElement("div",{className:_()},r.map((e,n)=>s.createElement("div",{className:_("item"),key:n},s.createElement("div",{className:d(_("img-wrapper"),t[`--${l}`])},s.createElement(c,{src:i(e.imgUrl,100),className:_("img"),onClick:()=>a==null?void 0:a(e)})),s.createElement("div",{className:_("name"),onClick:()=>a==null?void 0:a(e)},e.name),s.createElement("div",{className:_("col2")},e.col2),s.createElement("div",{className:_("col3")},e.col3))))};export{j as L};
