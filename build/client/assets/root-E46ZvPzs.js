import{r as n,j as t}from"./jsx-runtime-21OhILyQ.js";import{h,j as x,k as f,M as y,L as S,P as j,S as w}from"./themeSlice-wEpJH5nF.js";import{s as g}from"./store-UYfyqG4r.js";import{u as k,d as M,O as L}from"./index-S4zzjQE9.js";/**
 * @remix-run/react v2.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function O({getKey:e,...l}){let{isSpaMode:u}=h(),o=k(),c=M();x({getKey:e,storageKey:a});let d=n.useMemo(()=>{if(!e)return null;let s=e(o,c);return s!==o.key?s:null},[]);if(u)return null;let m=((s,p)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(s)||"{}")[p||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return n.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function I({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(y,{}),t.jsx(S,{})]}),t.jsxs("body",{children:[t.jsx(j,{store:g,children:e}),t.jsx(O,{}),t.jsx(w,{})]})]})}function J(){return t.jsx(L,{})}export{I as Layout,J as default};
