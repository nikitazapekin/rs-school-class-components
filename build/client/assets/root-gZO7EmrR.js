import{u as x,a as h,r as n,j as t,O as y}from"./index-tMfIdM9H.js";import{u as f,d as S,_ as j,M as w,L as g,P as M,S as k}from"./themeSlice-UQ2EKB3S.js";import{s as L}from"./store-i1TKY7e1.js";/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function O({getKey:e,...l}){let{isSpaMode:u}=f(),o=x(),c=h();S({getKey:e,storageKey:a});let d=n.useMemo(()=>{if(!e)return null;let s=e(o,c);return s!==o.key?s:null},[]);if(u)return null;let m=((s,p)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(s)||"{}")[p||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return n.createElement("script",j({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function E({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(w,{}),t.jsx(g,{})]}),t.jsxs("body",{children:[t.jsx(M,{store:L,children:e}),t.jsx(O,{}),t.jsx(k,{})]})]})}function I(){return t.jsx(y,{})}export{E as Layout,I as default};
