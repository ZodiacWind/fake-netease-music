import{R as s}from"./react-8de69987.js";import{b as c,r as i,c as m}from"./index-4de405b4.js";import{k as d}from"./vendor-a5ef6589.js";const o="_list__item_tdndn_1",g="_list__img_tdndn_14",p="_list__name_tdndn_39",N="_list__col2_tdndn_44",v="_list__col3_tdndn_51";var e={list__item:o,list__img:g,"list__img-wrapper":"_list__img-wrapper_tdndn_19","--circle":"_--circle_tdndn_25","--extra":"_--extra_tdndn_32","--normal":"_--normal_tdndn_35",list__name:p,list__col2:N,list__col3:v};const x=({imgType:l="normal",data:r,onItemClick:t})=>{const _=m("list",e);return s.createElement("div",{className:_()},r.map((a,n)=>s.createElement("div",{className:_("item"),key:n},s.createElement("div",{className:d(_("img-wrapper"),e[`--${l}`])},s.createElement(c,{src:i(a.imgUrl,100),className:_("img"),onClick:()=>t==null?void 0:t(a)})),s.createElement("div",{className:_("name"),onClick:()=>t==null?void 0:t(a)},a.name),s.createElement("div",{className:_("col2")},a.col2),s.createElement("div",{className:_("col3")},a.col3))))};export{x as L};
