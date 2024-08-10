import{j as m,g as Pn,R as je,b as Le,u as Fe,r as Gt}from"./index-tMfIdM9H.js";import{y as On,v as w,z as _n,A as Nn,B as En,C as Cn,D as In,w as Tn,E as jn,F as Ln,G as Fn}from"./themeSlice-UQ2EKB3S.js";const Me=()=>m.jsx(m.Fragment,{children:m.jsx("span",{className:"loader","data-testid":"loader"})}),gt=t=>t.themeSlice.isDark,Xt=t=>(t.appSlice||{}).params||{query:"",offset:1,limit:10,storedValue:""},se=()=>{};let $t={},Re={},De=null,ze={mark:se,measure:se};try{typeof window<"u"&&($t=window),typeof document<"u"&&(Re=document),typeof MutationObserver<"u"&&(De=MutationObserver),typeof performance<"u"&&(ze=performance)}catch{}const{userAgent:oe=""}=$t.navigator||{},U=$t,h=Re,ie=De,ct=ze;U.document;const R=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ue=~oe.indexOf("MSIE")||~oe.indexOf("Trident/");var b="classic",Ye="duotone",P="sharp",O="sharp-duotone",Mn=[b,Ye,P,O],Rn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},le={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Dn=["kit"],zn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Un=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Yn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Wn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Hn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Gn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Xn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},$n={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},We={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},qn=["solid","regular","light","thin","duotone","brands"],He=[1,2,3,4,5,6,7,8,9,10],Bn=He.concat([11,12,13,14,15,16,17,18,19,20]),et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vn=[...Object.keys(Gn),...qn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(He.map(t=>"".concat(t,"x"))).concat(Bn.map(t=>"w-".concat(t))),Kn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Jn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ce={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const F="___FONT_AWESOME___",_t=16,Ge="fa",Xe="svg-inline--fa",$="data-fa-i2svg",Nt="data-fa-pseudo-element",Zn="data-fa-pseudo-element-pending",qt="data-prefix",Bt="data-icon",fe="fontawesome-i2svg",ta="async",ea=["HTML","HEAD","STYLE","SCRIPT"],$e=(()=>{try{return!0}catch{return!1}})(),qe=[b,P,O];function it(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[b]}})}const Be={...We};Be[b]={...We[b],...le.kit,...le["kit-duotone"]};const G=it(Be),Et={...$n};Et[b]={...Et[b],...ce.kit,...ce["kit-duotone"]};const st=it(Et),Ct={...Xn};Ct[b]={...Ct[b],...Jn.kit};const X=it(Ct),It={...Hn};It[b]={...It[b],...Qn.kit};const na=it(It),aa=zn,Ve="fa-layers-text",ra=Un,sa={...Rn};it(sa);const oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At=et,Q=new Set;Object.keys(st[b]).map(Q.add.bind(Q));Object.keys(st[P]).map(Q.add.bind(Q));Object.keys(st[O]).map(Q.add.bind(Q));const ia=[...Dn,...Vn],at=U.FontAwesomeConfig||{};function la(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ca(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ca(la(n));r!=null&&(at[a]=r)});const Ke={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ge,replacementClass:Xe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);const J={...Ke,...at};J.autoReplaceSvg||(J.observeMutations=!1);const u={};Object.keys(Ke).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){J[t]=e,rt.forEach(n=>n(u))},get:function(){return J[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,rt.forEach(e=>e(u))},get:function(){return J.cssPrefix}});U.FontAwesomeConfig=u;const rt=[];function fa(t){return rt.push(t),()=>{rt.splice(rt.indexOf(t),1)}}const D=_t,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ua(t){if(!t||!R)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=s)}return h.head.insertBefore(e,a),t}const ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ot(){let t=12,e="";for(;t-- >0;)e+=ma[Math.random()*62|0];return e}function Z(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vt(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Qe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Qe(t[n]),'" '),"").trim()}function ht(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Kt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function pa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(i)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function ga(t){let{transform:e,width:n=_t,height:a=_t,startCentered:r=!1}=t,s="";return r&&Ue?s+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):s+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),s+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var ha=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Je(){const t=Ge,e=Xe,n=u.cssPrefix,a=u.replacementClass;let r=ha;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let ue=!1;function kt(){u.autoAddCss&&!ue&&(ua(Je()),ue=!0)}var ba={mixout(){return{dom:{css:Je,insertCss:kt}}},hooks(){return{beforeDOMElementCreation(){kt()},beforeI2svg(){kt()}}}};const M=U||{};M[F]||(M[F]={});M[F].styles||(M[F].styles={});M[F].hooks||(M[F].hooks={});M[F].shims||(M[F].shims=[]);var T=M[F];const Ze=[],tn=function(){h.removeEventListener("DOMContentLoaded",tn),mt=1,Ze.map(t=>t())};let mt=!1;R&&(mt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),mt||h.addEventListener("DOMContentLoaded",tn));function ya(t){R&&(mt?setTimeout(t,0):Ze.push(t))}function lt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Qe(t):"<".concat(e," ").concat(da(n),">").concat(a.map(lt).join(""),"</").concat(e,">")}function me(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var va=function(e,n){return function(a,r,s,o){return e.call(n,a,r,s,o)}},St=function(e,n,a,r){var s=Object.keys(e),o=s.length,i=r!==void 0?va(n,r):n,l,c,f;for(a===void 0?(l=1,f=e[s[0]]):(l=0,f=a);l<o;l++)c=s[l],f=i(f,e[c],c,e);return f};function xa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Tt(t){const e=xa(t);return e.length===1?e[0].toString(16):null}function Aa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function de(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function jt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=de(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,de(e)):T.styles[t]={...T.styles[t]||{},...r},t==="fas"&&jt("fa",e)}const{styles:H,shims:ka}=T,Sa={[b]:Object.values(X[b]),[P]:Object.values(X[P]),[O]:Object.values(X[O])};let Qt=null,en={},nn={},an={},rn={},sn={};const wa={[b]:Object.keys(G[b]),[P]:Object.keys(G[P]),[O]:Object.keys(G[O])};function Pa(t){return~ia.indexOf(t)}function Oa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Pa(r)?r:null}const on=()=>{const t=a=>St(H,(r,s,o)=>(r[o]=St(s,a,{}),r),{});en=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=s}),a)),nn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=s}),a)),sn=t((a,r,s)=>{const o=r[2];return a[s]=s,o.forEach(i=>{a[i]=s}),a});const e="far"in H||u.autoFetchSvg,n=St(ka,(a,r)=>{const s=r[0];let o=r[1];const i=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:i}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:i}),a},{names:{},unicodes:{}});an=n.names,rn=n.unicodes,Qt=bt(u.styleDefault,{family:u.familyDefault})};fa(t=>{Qt=bt(t.styleDefault,{family:u.familyDefault})});on();function Jt(t,e){return(en[t]||{})[e]}function _a(t,e){return(nn[t]||{})[e]}function z(t,e){return(sn[t]||{})[e]}function ln(t){return an[t]||{prefix:null,iconName:null}}function Na(t){const e=rn[t],n=Jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return Qt}const Zt=()=>({prefix:null,iconName:null,rest:[]});function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=b}=e,a=G[n][t],r=st[n][t]||st[n][a],s=t in T.styles?t:null;return r||s||null}const Ea={[b]:Object.keys(X[b]),[P]:Object.keys(X[P]),[O]:Object.keys(X[O])};function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[b]:"".concat(u.cssPrefix,"-").concat(b),[P]:"".concat(u.cssPrefix,"-").concat(P),[O]:"".concat(u.cssPrefix,"-").concat(O)};let r=null,s=b;const o=Mn.filter(l=>l!==Ye);o.forEach(l=>{(t.includes(a[l])||t.some(c=>Ea[l].includes(c)))&&(s=l)});const i=t.reduce((l,c)=>{const f=Oa(u.cssPrefix,c);if(H[c]?(c=Sa[s].includes(c)?na[s][c]:c,r=c,l.prefix=c):wa[s].indexOf(c)>-1?(r=c,l.prefix=bt(c,{family:s})):f?l.iconName=f:c!==u.replacementClass&&!o.some(g=>c===a[g])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const g=r==="fa"?ln(l.iconName):{},p=z(l.prefix,l.iconName);g.prefix&&(r=null),l.iconName=g.iconName||p||l.iconName,l.prefix=g.prefix||l.prefix,l.prefix==="far"&&!H.far&&H.fas&&!u.autoFetchSvg&&(l.prefix="fas")}return l},Zt());return(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(i.prefix="fad"),!i.prefix&&s===P&&(H.fass||u.autoFetchSvg)&&(i.prefix="fass",i.iconName=z(i.prefix,i.iconName)||i.iconName),!i.prefix&&s===O&&(H.fasds||u.autoFetchSvg)&&(i.prefix="fasds",i.iconName=z(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||r==="fa")&&(i.prefix=Y()||"fas"),i}class Ca{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},jt(s,r[s]);const o=X[b][s];o&&jt(o,r[s]),on()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:o,icon:i}=a[r],l=i[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=i)}),e[s][o]=i}),e}}let pe=[],B={};const K={},Ia=Object.keys(K);function Ta(t,e){let{mixoutsTo:n}=e;return pe=t,B={},Object.keys(K).forEach(a=>{Ia.indexOf(a)===-1&&delete K[a]}),pe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(o=>{B[o]||(B[o]=[]),B[o].push(s[o])})}a.provides&&a.provides(K)}),n}function Lt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(B[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(B[t]||[]).forEach(s=>{s.apply(null,n)})}function W(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return K[t]?K[t].apply(null,e):void 0}function Ft(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=z(n,e)||e,me(cn.definitions,n,e)||me(T.styles,n,e)}const cn=new Ca,ja=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,q("noAuto")},La={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(q("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,ya(()=>{Ma({autoReplaceSvgRoot:e}),q("watch",t)})}},Fa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bt(t[0]);return{prefix:n,iconName:z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(aa))){const e=yt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:z(e,t)||t}}}},_={noAuto:ja,config:u,dom:La,parse:Fa,library:cn,findIconDefinition:Ft,toHtml:lt},Ma=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(T.styles).length>0||u.autoFetchSvg)&&R&&u.autoReplaceSvg&&_.dom.i2svg({node:e})};function vt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>lt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ra(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:o}=t;if(Kt(o)&&n.found&&!a.found){const{width:i,height:l}=n,c={x:i/l/2,y:.5};r.style=ht({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Da(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:a}]}]}function te(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:o,title:i,maskId:l,titleId:c,extra:f,watchable:g=!1}=t,{width:p,height:v}=n.found?n:e,S=a==="fak",N=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(E=>f.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(f.classes).join(" ");let y={children:[],attributes:{...f.attributes,"data-prefix":a,"data-icon":r,class:N,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)}};const A=S&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};g&&(y.attributes[$]=""),i&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||ot())},children:[i]}),delete y.attributes.title);const x={...y,prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...A,...f.styles}},{children:k,attributes:L}=n.found&&e.found?W("generateAbstractMask",x)||{children:[],attributes:{}}:W("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=k,x.attributes=L,o?Da(x):Ra(x)}function ge(t){const{content:e,width:n,height:a,transform:r,title:s,extra:o,watchable:i=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};i&&(l[$]="");const c={...o.styles};Kt(r)&&(c.transform=ga({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const f=ht(c);f.length>0&&(l.style=f);const g=[];return g.push({tag:"span",attributes:l,children:[e]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function za(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},s=ht(a.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:wt}=T;function Mt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ua={found:!1,width:512,height:512};function Ya(t,e){!$e&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rt(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=Y()),new Promise((a,r)=>{if(n==="fa"){const s=ln(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&wt[e]&&wt[e][t]){const s=wt[e][t];return a(Mt(s))}Ya(t,e),a({...Ua,icon:u.showMissingIcons&&t?W("missingIconAbstract")||{}:{}})})}const he=()=>{},Dt=u.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:he,measure:he},nt='FA "6.6.0"',Wa=t=>(Dt.mark("".concat(nt," ").concat(t," begins")),()=>fn(t)),fn=t=>{Dt.mark("".concat(nt," ").concat(t," ends")),Dt.measure("".concat(nt," ").concat(t),"".concat(nt," ").concat(t," begins"),"".concat(nt," ").concat(t," ends"))};var ee={begin:Wa,end:fn};const ft=()=>{};function be(t){return typeof(t.getAttribute?t.getAttribute($):null)=="string"}function Ha(t){const e=t.getAttribute?t.getAttribute(qt):null,n=t.getAttribute?t.getAttribute(Bt):null;return e&&n}function Ga(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function Xa(){return u.autoReplaceSvg===!0?ut.replace:ut[u.autoReplaceSvg]||ut.replace}function $a(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function qa(t){return h.createElement(t)}function un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?$a:qa}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(un(s,{ceFn:n}))}),a}function Ba(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ut={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(un(n),e)}),e.getAttribute($)===null&&u.keepOriginalSource){let n=h.createComment(Ba(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Vt(e).indexOf(u.replacementClass))return ut.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,i)=>(i===u.replacementClass||i.match(a)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>lt(s)).join(`
`);e.setAttribute($,""),e.innerHTML=r}};function ye(t){t()}function mn(t,e){const n=typeof e=="function"?e:ft;if(t.length===0)n();else{let a=ye;u.mutateApproach===ta&&(a=U.requestAnimationFrame||ye),a(()=>{const r=Xa(),s=ee.begin("mutate");t.map(r),s(),n()})}}let ne=!1;function dn(){ne=!0}function zt(){ne=!1}let dt=null;function ve(t){if(!ie||!u.observeMutations)return;const{treeCallback:e=ft,nodeCallback:n=ft,pseudoElementsCallback:a=ft,observeMutationsRoot:r=h}=t;dt=new ie(s=>{if(ne)return;const o=Y();Z(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!be(i.addedNodes[0])&&(u.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&u.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&be(i.target)&&~oa.indexOf(i.attributeName))if(i.attributeName==="class"&&Ha(i.target)){const{prefix:l,iconName:c}=yt(Vt(i.target));i.target.setAttribute(qt,l||o),c&&i.target.setAttribute(Bt,c)}else Ga(i.target)&&n(i.target)})}),R&&dt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Va(){dt&&dt.disconnect()}function Ka(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),o=s[0],i=s.slice(1);return o&&i.length>0&&(a[o]=i.join(":").trim()),a},{})),n}function Qa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=yt(Vt(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=_a(r.prefix,t.innerText)||Jt(r.prefix,Tt(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ja(t){const e=Z(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||ot()):(e["aria-hidden"]="true",e.focusable="false")),e}function Za(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Qa(t),s=Ja(t),o=Lt("parseNodeAttributes",{},t);let i=e.styleParser?Ka(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:s},...o}}const{styles:tr}=T;function pn(t){const e=u.autoReplaceSvg==="nest"?xe(t,{styleParser:!1}):xe(t);return~e.extra.classes.indexOf(Ve)?W("generateLayersText",t,e):W("generateSvgReplacementMutation",t,e)}let j=new Set;qe.map(t=>{j.add("fa-".concat(t))});Object.keys(G[b]).map(j.add.bind(j));Object.keys(G[P]).map(j.add.bind(j));Object.keys(G[O]).map(j.add.bind(j));j=[...j];function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=h.documentElement.classList,a=f=>n.add("".concat(fe,"-").concat(f)),r=f=>n.remove("".concat(fe,"-").concat(f)),s=u.autoFetchSvg?j:qe.map(f=>"fa-".concat(f)).concat(Object.keys(tr));s.includes("fa")||s.push("fa");const o=[".".concat(Ve,":not([").concat($,"])")].concat(s.map(f=>".".concat(f,":not([").concat($,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=Z(t.querySelectorAll(o))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const l=ee.begin("onTree"),c=i.reduce((f,g)=>{try{const p=pn(g);p&&f.push(p)}catch(p){$e||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,g)=>{Promise.all(c).then(p=>{mn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(p=>{l(),g(p)})})}function er(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(n=>{n&&mn([n],e)})}function nr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ft(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ft(r||{})),t(a,{...n,mask:r})}}const ar=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:s=null,title:o=null,titleId:i=null,classes:l=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:v}=t;return vt({type:"icon",...t},()=>(q("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(o?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(i||ot()):(c["aria-hidden"]="true",c.focusable="false")),te({icons:{main:Mt(v),mask:r?Mt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:{...I,...n},symbol:a,title:o,maskId:s,titleId:i,extra:{attributes:c,styles:f,classes:l}})))};var rr={mixout(){return{icon:nr(ar)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ae,t.nodeCallback=er,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return Ae(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:o,transform:i,symbol:l,mask:c,maskId:f,extra:g}=n;return new Promise((p,v)=>{Promise.all([Rt(a,o),c.iconName?Rt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[N,y]=S;p([e,te({icons:{main:N,mask:y},prefix:o,iconName:a,transform:i,symbol:l,maskId:f,title:r,titleId:s,extra:g,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:o}=e;const i=ht(o);i.length>0&&(a.style=i);let l;return Kt(s)&&(l=W("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},sr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return vt({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},or={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return vt({type:"counter",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),za({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},ir={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:s={},styles:o={}}=e;return vt({type:"text",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),ge({content:t,transform:{...I,...n},title:a,extra:{attributes:s,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let o=null,i=null;if(Ue){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,i=c.height/l}return u.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,ge({content:e.innerHTML,width:o,height:i,transform:r,title:a,extra:s,watchable:!0})])}}};const lr=new RegExp('"',"ug"),ke=[1105920,1112319],Se={FontAwesome:{normal:"fas",400:"fas"},...Wn,...Yn,...Kn},Ut=Object.keys(Se).reduce((t,e)=>(t[e.toLowerCase()]=Se[e],t),{}),cr=Object.keys(Ut).reduce((t,e)=>{const n=Ut[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function fr(t){const e=t.replace(lr,""),n=Aa(e,0),a=n>=ke[0]&&n<=ke[1],r=e.length===2?e[0]===e[1]:!1;return{value:Tt(r?e[0]:e),isSecondary:a||r}}function ur(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ut[n]||{})[r]||cr[n]}function we(t,e){const n="".concat(Zn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=Z(t.children).filter(p=>p.getAttribute(Nt)===e)[0],i=U.getComputedStyle(t,e),l=i.getPropertyValue("font-family"),c=l.match(ra),f=i.getPropertyValue("font-weight"),g=i.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&g!=="none"&&g!==""){const p=i.getPropertyValue("content");let v=ur(l,f);const{value:S,isSecondary:N}=fr(p),y=c[0].startsWith("FontAwesome");let A=Jt(v,S),x=A;if(y){const k=Na(S);k.iconName&&k.prefix&&(A=k.iconName,v=k.prefix)}if(A&&!N&&(!o||o.getAttribute(qt)!==v||o.getAttribute(Bt)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const k=Za(),{extra:L}=k;L.attributes[Nt]=e,Rt(A,v).then(E=>{const Sn=te({...k,icons:{main:E,mask:Zt()},prefix:v,iconName:x,extra:L,watchable:!0}),xt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(xt,t.firstChild):t.appendChild(xt),xt.outerHTML=Sn.map(wn=>lt(wn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function mr(t){return Promise.all([we(t,"::before"),we(t,"::after")])}function dr(t){return t.parentNode!==document.head&&!~ea.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Pe(t){if(R)return new Promise((e,n)=>{const a=Z(t.querySelectorAll("*")).filter(dr).map(mr),r=ee.begin("searchPseudoElements");dn(),Promise.all(a).then(()=>{r(),zt(),e()}).catch(()=>{r(),zt(),n()})})}var pr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Pe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;u.searchPseudoElements&&Pe(n)}}};let Oe=!1;var gr={mixout(){return{dom:{unwatch(){dn(),Oe=!0}}}},hooks(){return{bootstrap(){ve(Lt("mutationObserverCallbacks",{}))},noAuto(){Va()},watch(t){const{observeMutationsRoot:e}=t;Oe?zt():ve(Lt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const _e=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var hr={mixout(){return{parse:{transform:t=>_e(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=_e(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(l," ").concat(c)},g={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:f,path:g};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const Pt={x:0,y:0,width:"100%",height:"100%"};function Ne(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function br(t){return t.tag==="g"?t.children:[t]}var yr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?yt(n.split(" ").map(r=>r.trim())):Zt();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:o,transform:i}=e;const{width:l,icon:c}=r,{width:f,icon:g}=s,p=pa({transform:i,containerWidth:f,iconWidth:l}),v={tag:"rect",attributes:{...Pt,fill:"white"}},S=c.children?{children:c.children.map(Ne)}:{},N={tag:"g",attributes:{...p.inner},children:[Ne({tag:c.tag,attributes:{...c.attributes,...p.path},...S})]},y={tag:"g",attributes:{...p.outer},children:[N]},A="mask-".concat(o||ot()),x="clip-".concat(o||ot()),k={tag:"mask",attributes:{...Pt,id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,y]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:br(g)},k]};return n.push(L,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(A,")"),...Pt}}),{children:n,attributes:a}}}},vr={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},xr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ar=[ba,rr,sr,or,ir,pr,gr,hr,yr,vr,xr];Ta(Ar,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;const Yt=_.parse;_.findIconDefinition;_.toHtml;const kr=_.icon;_.layer;_.text;_.counter;var gn={exports:{}},Sr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wr=Sr,Pr=wr;function hn(){}function bn(){}bn.resetWarningCache=hn;var Or=function(){function t(a,r,s,o,i,l){if(l!==Pr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:bn,resetWarningCache:hn};return n.PropTypes=n,n};gn.exports=Or();var _r=gn.exports;const d=Pn(_r);function Ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(n),!0).forEach(function(a){V(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function pt(t){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pt(t)}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,s;for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Er(t,e){if(t==null)return{};var n=Nr(t,e),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Wt(t){return Cr(t)||Ir(t)||Tr(t)||jr()}function Cr(t){if(Array.isArray(t))return Ht(t)}function Ir(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Tr(t,e){if(t){if(typeof t=="string")return Ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ht(t,e)}}function Ht(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,s=t.bounce,o=t.shake,i=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,g=t.pulse,p=t.fixedWidth,v=t.inverse,S=t.border,N=t.listItem,y=t.flip,A=t.size,x=t.rotation,k=t.pull,L=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":i,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":g,"fa-fw":p,"fa-inverse":v,"fa-border":S,"fa-li":N,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},V(e,"fa-".concat(A),typeof A<"u"&&A!==null),V(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),V(e,"fa-pull-".concat(k),typeof k<"u"&&k!==null),V(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(L).map(function(E){return L[E]?E:null}).filter(function(E){return E})}function Fr(t){return t=t-0,t===t}function yn(t){return Fr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Mr=["style"];function Rr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Dr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=yn(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?e[Rr(r)]=s:e[r]=s,e},{})}function vn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return vn(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=Dr(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[yn(c)]=f}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,i=Er(n,Mr);return r.attrs.style=C(C({},r.attrs.style),o),t.apply(void 0,[e.tag,C(C({},r.attrs),i)].concat(Wt(a)))}var xn=!1;try{xn=!0}catch{}function zr(){if(!xn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ce(t){if(t&&pt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Yt.icon)return Yt.icon(t);if(t===null)return null;if(t&&pt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ot(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?V({},t,e):{}}var Ie={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ae=je.forwardRef(function(t,e){var n=C(C({},Ie),t),a=n.icon,r=n.mask,s=n.symbol,o=n.className,i=n.title,l=n.titleId,c=n.maskId,f=Ce(a),g=Ot("classes",[].concat(Wt(Lr(n)),Wt((o||"").split(" ")))),p=Ot("transform",typeof n.transform=="string"?Yt.transform(n.transform):n.transform),v=Ot("mask",Ce(r)),S=kr(f,C(C(C(C({},g),p),v),{},{symbol:s,title:i,titleId:l,maskId:c}));if(!S)return zr("Could not find icon",f),null;var N=S.abstract,y={ref:e};return Object.keys(n).forEach(function(A){Ie.hasOwnProperty(A)||(y[A]=n[A])}),Ur(N[0],y)});ae.displayName="FontAwesomeIcon";ae.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var Ur=vn.bind(null,je.createElement),Yr={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Wr=Yr;const tt=()=>On(),Hr=()=>{const t=w(gt),e=tt(),n=()=>{e(_n())};return m.jsx(m.Fragment,{children:m.jsxs("button",{className:"theme__button",onClick:n,children:["Switch Theme ",t?"Dark":"Light"]})})},Te=(t,e)=>n=>{n(Nn({offset:t,query:e}))},Gr=()=>t=>{t(En())},Xr=()=>t=>{t(Cn())},$r=t=>e=>{e(In(t))},An=()=>{const t=Le(),e=Fe(),n=tt(),a=w(Xt),r=(l,c)=>{const f=new URLSearchParams(e.search);f.set("page",String(l)),c?f.set("query",c):f.delete("query"),t(`?${f.toString()}`),console.log("Navigated to:",`?${f.toString()}`)},s=()=>{const l=new URLSearchParams(e.search),c=parseInt(l.get("page")||"1",10),f=l.get("query")||"";return{page:c,query:f}};return Gt.useEffect(()=>{const l=s();r(Number(l.page),String(l.query)),localStorage.setItem("searchParam",String(l.query)),n(Te(Number(l.page),String(l.query)))},[]),{setPage:r,handleInput:l=>{n($r(l.target.value))},handleSearch:()=>{window.scrollTo(0,0),n(Te(1,a.query));const l=new URLSearchParams(e.search);l.set("page",String(1)),l.set("query",String(a.query)),t(`?${l.toString()}`)}}},qr=()=>{const t=w(gt),{handleInput:e,handleSearch:n}=An();return m.jsx("header",{className:`header ${t?"header-dark":""}`,children:m.jsxs("div",{className:"header__content",children:[m.jsxs("nav",{className:"header__search",children:[m.jsx("input",{type:"text",className:"search__bar",placeholder:"Search...",onChange:e}),m.jsx("button",{className:"search__btn",onClick:n,"aria-label":"search",children:m.jsx(ae,{icon:Wr})})]}),m.jsx(Tn,{to:"/dcfewfe",children:"Redirect to not found page"}),m.jsx(Hr,{})]})})},Br=t=>e=>{e(jn(t))},re=t=>t.selectedElementsSlice.storedElements||[],Vr=({user:t})=>{const e=tt(),n=w(gt),a=w(re),r=w(Xt),s=Le(),o=Fe(),i=()=>{e(Br(t))},l=()=>{const c=new URLSearchParams;c.append("page",String(r.offset)),r.query&&c.append("query",r.query),c.append("user",t.login),s(`/details?${c.toString()}`,{state:{from:o}})};return m.jsx("div",{className:"user__link",children:m.jsxs("div",{className:`user ${n?"user-dark":""}`,children:[m.jsx("img",{className:"user__logo",src:t.avatar_url,alt:"user"}),m.jsxs("div",{className:"user__content",children:[m.jsx("p",{className:"user__login",children:t.login}),m.jsx("input",{type:"checkbox",className:"user__checkbox",onChange:i,checked:a&&a.some(c=>t.id===c.id),readOnly:!0}),m.jsx("button",{onClick:l,children:"Show details"})]})]})})},Kr=t=>t.appSlice.users,kn=t=>t.appSlice.isLoading,Qr=()=>{const{setPage:t}=An(),e=tt(),n=w(Kr),a=w(Xt),r=w(kn),s=()=>{window.scrollTo(0,0),e(Gr()),t(a.offset+1,a.query)},o=()=>{window.scrollTo(0,0),e(Xr()),t(a.offset-1,a.query)};return m.jsx("section",{className:"list",children:m.jsxs("div",{className:"list__container",children:[r&&m.jsx(Me,{}),n.map(i=>m.jsx(Vr,{user:i},i.id)),n.length==0&&m.jsx("p",{className:"list__nothing",children:"Nothing found"}),m.jsxs("div",{className:"list__btns",children:[m.jsx("button",{className:"list__prev list__btn",onClick:o,children:"Prev"}),m.jsx("button",{className:"list__next list__btn",onClick:s,"data-testid":"next",children:"Next"})]})]})})},Jr=()=>t=>{t(Ln())},Zr=()=>{const t=tt(),e=w(re),n=()=>{t(Jr())},[a,r]=Gt.useState(),s=()=>{if(e.length===0)return;const i=[Object.keys(e[0])];e.forEach(g=>{i.push(Object.values(g).map(p=>String(p)))});let l="";i.forEach(g=>{l+=g.join(";")+`
`});const c=new Blob([l],{type:"text/csv;charset=utf-8"}),f=URL.createObjectURL(c);r(f)};return m.jsxs("div",{className:"stored__users__panel",children:[m.jsxs("p",{className:"stored__users__text",children:["You chose ",e.length," users"]}),m.jsxs("div",{className:"stored__users__btns",children:[m.jsx("a",{className:"stored__users__btn stored__users__download",href:a,download:`${e.length}__users.csv`,onClick:s,children:"download"}),m.jsx("button",{className:"stored__users__btn stored__users__clear",onClick:n,children:"Unselect all"})]})]})},ts=()=>{const e={backgroundColor:w(gt)?"rgb(59, 59, 59)":"aliceblue",width:"100%",minHeight:"100vh",height:"100%",position:"fixed",left:0,top:0,zIndex:-111,transition:"1s"};return m.jsx("div",{style:e,"data-testid":"background",children:" "})},es=t=>e=>{e(Fn(t))},rs=()=>{const t=tt(),e=w(re),n=w(kn);return Gt.useEffect(()=>{t(es(String(localStorage.getItem("searchParam")!=null?localStorage.getItem("searchParam"):"")))},[]),m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"container",children:[m.jsx(qr,{}),m.jsx(Qr,{}),e.length>0&&m.jsx(Zr,{})]}),m.jsx(ts,{}),n&&m.jsx(Me,{})]})};export{rs as A,ts as B,Me as S,gt as g,Xt as p,tt as u};
