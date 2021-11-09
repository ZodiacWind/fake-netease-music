import{R as U,r as f,e as q}from"./react-cb61e8c1.js";import"./vendor-b86105ba.js";var v=U.createContext(null);function J(e){e()}var j=J,K=function(t){return j=t},Q=function(){return j};function X(){var e=Q(),t=null,u=null;return{clear:function(){t=null,u=null},notify:function(){e(function(){for(var o=t;o;)o.callback(),o=o.next})},get:function(){for(var o=[],i=t;i;)o.push(i),i=i.next;return o},subscribe:function(o){var i=!0,n=u={callback:o,next:null,prev:u};return n.prev?n.prev.next=n:t=n,function(){!i||t===null||(i=!1,n.next?n.next.prev=n.prev:u=n.prev,n.prev?n.prev.next=n.next:t=n.next)}}}}var z={notify:function(){},get:function(){return[]}};function H(e,t){var u,c=z;function o(S){return p(),c.subscribe(S)}function i(){c.notify()}function n(){l.onStateChange&&l.onStateChange()}function s(){return Boolean(u)}function p(){u||(u=t?t.addNestedSub(n):e.subscribe(n),c=X())}function y(){u&&(u(),u=void 0,c.clear(),c=z)}var l={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:n,isSubscribed:s,trySubscribe:p,tryUnsubscribe:y,getListeners:function(){return c}};return l}var L=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?f.exports.useLayoutEffect:f.exports.useEffect;function be(e){var t=e.store,u=e.context,c=e.children,o=f.exports.useMemo(function(){var s=H(t);return s.onStateChange=s.notifyNestedSubs,{store:t,subscription:s}},[t]),i=f.exports.useMemo(function(){return t.getState()},[t]);L(function(){var s=o.subscription;return s.trySubscribe(),i!==t.getState()&&s.notifyNestedSubs(),function(){s.tryUnsubscribe(),s.onStateChange=null}},[o,i]);var n=u||v;return U.createElement(n.Provider,{value:o},c)}var r={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=60103,P=60106,m=60107,g=60108,C=60114,x=60109,$=60110,R=60112,w=60113,N=60120,E=60115,k=60116,V=60121,A=60122,F=60117,I=60129,W=60131;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;M=a("react.element"),P=a("react.portal"),m=a("react.fragment"),g=a("react.strict_mode"),C=a("react.profiler"),x=a("react.provider"),$=a("react.context"),R=a("react.forward_ref"),w=a("react.suspense"),N=a("react.suspense_list"),E=a("react.memo"),k=a("react.lazy"),V=a("react.block"),A=a("react.server.block"),F=a("react.fundamental"),I=a("react.debug_trace_mode"),W=a("react.legacy_hidden")}function d(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case M:switch(e=e.type,e){case m:case C:case g:case w:case N:return e;default:switch(e=e&&e.$$typeof,e){case $:case R:case k:case E:case x:return e;default:return t}}case P:return t}}}var Y=x,Z=M,ee=R,te=m,re=k,ne=E,ue=P,oe=C,ce=g,se=w;r.ContextConsumer=$;r.ContextProvider=Y;r.Element=Z;r.ForwardRef=ee;r.Fragment=te;r.Lazy=re;r.Memo=ne;r.Portal=ue;r.Profiler=oe;r.StrictMode=ce;r.Suspense=se;r.isAsyncMode=function(){return!1};r.isConcurrentMode=function(){return!1};r.isContextConsumer=function(e){return d(e)===$};r.isContextProvider=function(e){return d(e)===x};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===M};r.isForwardRef=function(e){return d(e)===R};r.isFragment=function(e){return d(e)===m};r.isLazy=function(e){return d(e)===k};r.isMemo=function(e){return d(e)===E};r.isPortal=function(e){return d(e)===P};r.isProfiler=function(e){return d(e)===C};r.isStrictMode=function(e){return d(e)===g};r.isSuspense=function(e){return d(e)===w};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===m||e===C||e===I||e===g||e===w||e===N||e===W||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===E||e.$$typeof===x||e.$$typeof===$||e.$$typeof===R||e.$$typeof===F||e.$$typeof===V||e[0]===A)};r.typeOf=d;function T(){var e=f.exports.useContext(v);return e}function G(e){e===void 0&&(e=v);var t=e===v?T:function(){return f.exports.useContext(e)};return function(){var c=t(),o=c.store;return o}}var ie=G();function ae(e){e===void 0&&(e=v);var t=e===v?ie:G(e);return function(){var c=t();return c.dispatch}}var ye=ae(),fe=function(t,u){return t===u};function le(e,t,u,c){var o=f.exports.useReducer(function(b){return b+1},0),i=o[1],n=f.exports.useMemo(function(){return H(u,c)},[u,c]),s=f.exports.useRef(),p=f.exports.useRef(),y=f.exports.useRef(),l=f.exports.useRef(),S=u.getState(),h;try{if(e!==p.current||S!==y.current||s.current){var B=e(S);l.current===void 0||!t(B,l.current)?h=B:h=l.current}else h=l.current}catch(b){throw s.current&&(b.message+=`
The error may be correlated with this previous error:
`+s.current.stack+`

`),b}return L(function(){p.current=e,y.current=S,l.current=h,s.current=void 0}),L(function(){function b(){try{var _=u.getState();if(_===y.current)return;var D=p.current(_);if(t(D,l.current))return;l.current=D,y.current=_}catch(O){s.current=O}i()}return n.onStateChange=b,n.trySubscribe(),b(),function(){return n.tryUnsubscribe()}},[u,n]),h}function de(e){e===void 0&&(e=v);var t=e===v?T:function(){return f.exports.useContext(e)};return function(c,o){o===void 0&&(o=fe);var i=t(),n=i.store,s=i.subscription,p=le(c,o,n,s);return f.exports.useDebugValue(p),p}}var Se=de();K(q.exports.unstable_batchedUpdates);export{be as P,Se as a,ye as u};
