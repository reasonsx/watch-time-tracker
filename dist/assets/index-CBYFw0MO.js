(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},qr=[],en=()=>{},E_=()=>!1,qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xl=t=>t.startsWith("onUpdate:"),nt=Object.assign,Zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},w_=Object.prototype.hasOwnProperty,Ae=(t,e)=>w_.call(t,e),le=Array.isArray,Hr=t=>Ho(t)==="[object Map]",hf=t=>Ho(t)==="[object Set]",he=t=>typeof t=="function",Ke=t=>typeof t=="string",Xn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",df=t=>(Oe(t)||he(t))&&he(t.then)&&he(t.catch),ff=Object.prototype.toString,Ho=t=>ff.call(t),T_=t=>Ho(t).slice(8,-1),pf=t=>Ho(t)==="[object Object]",ec=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},I_=/-(\w)/g,Bt=Wo(t=>t.replace(I_,(e,n)=>n?n.toUpperCase():"")),A_=/\B([A-Z])/g,Ar=Wo(t=>t.replace(A_,"-$1").toLowerCase()),Ko=Wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Wo(t=>t?`on${Ko(t)}`:""),Gn=(t,e)=>!Object.is(t,e),oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},mf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zu;const gf=()=>Zu||(Zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?P_(r):tc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Oe(t))return t}const b_=/;(?![^(]*\))/g,R_=/:([^]+)/,S_=/\/\*[^]*?\*\//g;function P_(t){const e={};return t.replace(S_,"").split(b_).forEach(n=>{if(n){const r=n.split(R_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zo(t){let e="";if(Ke(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=zo(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const C_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k_=Yl(C_);function _f(t){return!!t||t===""}const yf=t=>!!(t&&t.__v_isRef===!0),wn=t=>Ke(t)?t:t==null?"":le(t)||Oe(t)&&(t.toString===ff||!he(t.toString))?yf(t)?wn(t.value):JSON.stringify(t,vf,2):String(t),vf=(t,e)=>yf(e)?vf(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$a(r,i)+" =>"]=s,n),{})}:hf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$a(n))}:Xn(e)?$a(e):Oe(e)&&!le(e)&&!pf(e)?String(e):e,$a=(t,e="")=>{var n;return Xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class x_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function V_(){return Pt}let xe;const qa=new WeakSet;class Ef{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qa.has(this)&&(qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eh(this),If(this);const e=xe,n=Ht;xe=this,Ht=!0;try{return this.fn()}finally{Af(this),xe=e,Ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,eh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pl(this)&&this.run()}get dirty(){return pl(this)}}let wf=0,js,$s;function Tf(t,e=!1){if(t.flags|=8,e){t.next=$s,$s=t;return}t.next=js,js=t}function nc(){wf++}function rc(){if(--wf>0)return;if($s){let e=$s;for($s=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;js;){let e=js;for(js=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function If(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Af(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),sc(r),D_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ei))return;t.globalVersion=ei;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!pl(t)){t.flags&=-3;return}const n=xe,r=Ht;xe=t,Ht=!0;try{If(t);const s=t.fn(t._value);(e.version===0||Gn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,Ht=r,Af(t),t.flags&=-3}}function sc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function D_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ht=!0;const Rf=[];function Zn(){Rf.push(Ht),Ht=!1}function er(){const t=Rf.pop();Ht=t===void 0?!0:t}function eh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let ei=0;class O_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ic{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!xe||!Ht||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new O_(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,Sf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,ei++,this.notify(e)}notify(e){nc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rc()}}}function Sf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ml=new WeakMap,pr=Symbol(""),gl=Symbol(""),ti=Symbol("");function mt(t,e,n){if(Ht&&xe){let r=ml.get(t);r||ml.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ic),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const a=ml.get(t);if(!a){ei++;return}const l=c=>{c&&c.trigger()};if(nc(),e==="clear")a.forEach(l);else{const c=le(t),h=c&&ec(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===ti||!Xn(g)&&g>=f)&&l(p)})}else switch(n!==void 0&&l(a.get(n)),h&&l(a.get(ti)),e){case"add":c?h&&l(a.get("length")):(l(a.get(pr)),Hr(t)&&l(a.get(gl)));break;case"delete":c||(l(a.get(pr)),Hr(t)&&l(a.get(gl)));break;case"set":Hr(t)&&l(a.get(pr));break}}rc()}function Nr(t){const e=be(t);return e===t?e:(mt(e,"iterate",ti),Ft(t)?e:e.map(ht))}function Go(t){return mt(t=be(t),"iterate",ti),t}const N_={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,ht)},concat(...t){return Nr(this).concat(...t.map(e=>le(e)?Nr(e):e))},entries(){return Ha(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return hn(this,"find",t,e,ht,arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wa(this,"includes",t)},indexOf(...t){return Wa(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return Wa(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...t){return Cs(this,"push",t)},reduce(t,...e){return th(this,"reduce",t,e)},reduceRight(t,...e){return th(this,"reduceRight",t,e)},shift(){return Cs(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return Cs(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return Cs(this,"unshift",t)},values(){return Ha(this,"values",ht)}};function Ha(t,e,n){const r=Go(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const M_=Array.prototype;function hn(t,e,n,r,s,i){const a=Go(t),l=a!==t&&!Ft(t),c=a[e];if(c!==M_[e]){const p=c.apply(t,i);return l?ht(p):p}let h=n;a!==t&&(l?h=function(p,g){return n.call(this,ht(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function th(t,e,n,r){const s=Go(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,ht(l),c,t)}),s[e](i,...r)}function Wa(t,e,n){const r=be(t);mt(r,"iterate",ti);const s=r[e](...n);return(s===-1||s===!1)&&cc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Cs(t,e,n=[]){Zn(),nc();const r=be(t)[e].apply(t,n);return rc(),er(),r}const L_=Yl("__proto__,__v_isRef,__isVue"),Pf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xn));function F_(t){Xn(t)||(t=String(t));const e=be(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Cf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Y_:Df:i?Vf:xf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=le(e);if(!s){let c;if(a&&(c=N_[n]))return c;if(n==="hasOwnProperty")return F_}const l=Reflect.get(e,n,pt(e)?e:r);return(Xn(n)?Pf.has(n):L_(n))||(s||mt(e,"get",n),i)?l:pt(l)?a&&ec(n)?l:l.value:Oe(l)?s?Nf(l):Jo(l):l}}class kf extends Cf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=gr(i);if(!Ft(r)&&!gr(r)&&(i=be(i),r=be(r)),!le(e)&&pt(i)&&!pt(r))return c?!1:(i.value=r,!0)}const a=le(e)&&ec(n)?Number(n)<e.length:Ae(e,n),l=Reflect.set(e,n,r,pt(e)?e:s);return e===be(s)&&(a?Gn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Xn(n)||!Pf.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",le(e)?"length":pr),Reflect.ownKeys(e)}}class U_ extends Cf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const B_=new kf,j_=new U_,$_=new kf(!0);const oc=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function Qi(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(Gn(e,i)&&mt(s,"get",e),mt(s,"get",i));const{has:a}=Qo(s),l=r?oc:n?uc:ht;if(a.call(s,e))return l(t.get(e));if(a.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function Ji(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(Gn(t,s)&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Yi(t,e=!1){return t=t.__v_raw,!e&&mt(be(t),"iterate",pr),Reflect.get(t,"size",t)}function nh(t,e=!1){!e&&!Ft(t)&&!gr(t)&&(t=be(t));const n=be(this);return Qo(n).has.call(n,t)||(n.add(t),yn(n,"add",t,t)),this}function rh(t,e,n=!1){!n&&!Ft(e)&&!gr(e)&&(e=be(e));const r=be(this),{has:s,get:i}=Qo(r);let a=s.call(r,t);a||(t=be(t),a=s.call(r,t));const l=i.call(r,t);return r.set(t,e),a?Gn(e,l)&&yn(r,"set",t,e):yn(r,"add",t,e),this}function sh(t){const e=be(this),{has:n,get:r}=Qo(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&yn(e,"delete",t,void 0),i}function ih(){const t=be(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function Xi(t,e){return function(r,s){const i=this,a=i.__v_raw,l=be(a),c=e?oc:t?uc:ht;return!t&&mt(l,"iterate",pr),a.forEach((h,f)=>r.call(s,c(h),c(f),i))}}function Zi(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),a=Hr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?oc:e?uc:ht;return!e&&mt(i,"iterate",c?gl:pr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Dn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function q_(){const t={get(i){return Qi(this,i)},get size(){return Yi(this)},has:Ji,add:nh,set:rh,delete:sh,clear:ih,forEach:Xi(!1,!1)},e={get(i){return Qi(this,i,!1,!0)},get size(){return Yi(this)},has:Ji,add(i){return nh.call(this,i,!0)},set(i,a){return rh.call(this,i,a,!0)},delete:sh,clear:ih,forEach:Xi(!1,!0)},n={get(i){return Qi(this,i,!0)},get size(){return Yi(this,!0)},has(i){return Ji.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Xi(!0,!1)},r={get(i){return Qi(this,i,!0,!0)},get size(){return Yi(this,!0)},has(i){return Ji.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Zi(i,!1,!1),n[i]=Zi(i,!0,!1),e[i]=Zi(i,!1,!0),r[i]=Zi(i,!0,!0)}),[t,n,e,r]}const[H_,W_,K_,z_]=q_();function ac(t,e){const n=e?t?z_:K_:t?W_:H_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const G_={get:ac(!1,!1)},Q_={get:ac(!1,!0)},J_={get:ac(!0,!1)};const xf=new WeakMap,Vf=new WeakMap,Df=new WeakMap,Y_=new WeakMap;function X_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Z_(t){return t.__v_skip||!Object.isExtensible(t)?0:X_(T_(t))}function Jo(t){return gr(t)?t:lc(t,!1,B_,G_,xf)}function Of(t){return lc(t,!1,$_,Q_,Vf)}function Nf(t){return lc(t,!0,j_,J_,Df)}function lc(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Z_(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Wr(t){return gr(t)?Wr(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function cc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function ey(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&mf(t,"__v_skip",!0),t}const ht=t=>Oe(t)?Jo(t):t,uc=t=>Oe(t)?Nf(t):t;function pt(t){return t?t.__v_isRef===!0:!1}function $e(t){return Mf(t,!1)}function ty(t){return Mf(t,!0)}function Mf(t,e){return pt(t)?t:new ny(t,e)}class ny{constructor(e,n){this.dep=new ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||gr(e);e=r?e:be(e),Gn(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function Kr(t){return pt(t)?t.value:t}const ry={get:(t,e,n)=>e==="__v_raw"?t:Kr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pt(s)&&!pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Lf(t){return Wr(t)?t:new Proxy(t,ry)}class sy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ei-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return Tf(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function iy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new sy(r,s,n)}const eo={},Eo=new WeakMap;let ur;function oy(t,e=!1,n=ur){if(n){let r=Eo.get(n);r||Eo.set(n,r=[]),r.push(t)}}function ay(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=z=>s?z:Ft(z)||s===!1||s===0?pn(z,1):pn(z);let f,p,g,E,C=!1,D=!1;if(pt(t)?(p=()=>t.value,C=Ft(t)):Wr(t)?(p=()=>h(t),C=!0):le(t)?(D=!0,C=t.some(z=>Wr(z)||Ft(z)),p=()=>t.map(z=>{if(pt(z))return z.value;if(Wr(z))return h(z);if(he(z))return c?c(z,2):z()})):he(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Zn();try{g()}finally{er()}}const z=ur;ur=f;try{return c?c(t,3,[E]):t(E)}finally{ur=z}}:p=en,e&&s){const z=p,de=s===!0?1/0:s;p=()=>pn(z(),de)}const k=V_(),V=()=>{f.stop(),k&&Zl(k.effects,f)};if(i&&e){const z=e;e=(...de)=>{z(...de),V()}}let M=D?new Array(t.length).fill(eo):eo;const q=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const de=f.run();if(s||C||(D?de.some((fe,I)=>Gn(fe,M[I])):Gn(de,M))){g&&g();const fe=ur;ur=f;try{const I=[de,M===eo?void 0:D&&M[0]===eo?[]:M,E];c?c(e,3,I):e(...I),M=de}finally{ur=fe}}}else f.run()};return l&&l(q),f=new Ef(p),f.scheduler=a?()=>a(q,!1):q,E=z=>oy(z,!1,f),g=f.onStop=()=>{const z=Eo.get(f);if(z){if(c)c(z,4);else for(const de of z)de();Eo.delete(f)}},e?r?q(!0):M=f.run():a?a(q.bind(null,!0),!0):f.run(),V.pause=f.pause.bind(f),V.resume=f.resume.bind(f),V.stop=V,V}function pn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pt(t))pn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(hf(t)||Hr(t))t.forEach(r=>{pn(r,e,n)});else if(pf(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(t,e,n,r){try{return r?t(...r):t()}catch(s){Yo(s,e,n)}}function on(t,e,n,r){if(he(t)){const s=vi(t,e,n,r);return s&&df(s)&&s.catch(i=>{Yo(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}}function Yo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ke;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){Zn(),vi(i,null,10,[t,c,h]),er();return}}ly(t,n,s,r,a)}function ly(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let Yt=-1;const zr=[];let Mn=null,Mr=0;const Ff=Promise.resolve();let wo=null;function Uf(t){const e=wo||Ff;return t?e.then(this?t.bind(this):t):e}function cy(t){let e=Yt+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function hc(t){if(!(t.flags&1)){const e=ni(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=ni(n)?wt.push(t):wt.splice(cy(e),0,t),t.flags|=1,Bf()}}function Bf(){wo||(wo=Ff.then($f))}function uy(t){le(t)?zr.push(...t):Mn&&t.id===-1?Mn.splice(Mr+1,0,t):t.flags&1||(zr.push(t),t.flags|=1),Bf()}function oh(t,e,n=Yt+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function jf(t){if(zr.length){const e=[...new Set(zr)].sort((n,r)=>ni(n)-ni(r));if(zr.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mr=0;Mr<Mn.length;Mr++){const n=Mn[Mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,Mr=0}}const ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $f(t){try{for(Yt=0;Yt<wt.length;Yt++){const e=wt[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<wt.length;Yt++){const e=wt[Yt];e&&(e.flags&=-2)}Yt=-1,wt.length=0,jf(),wo=null,(wt.length||zr.length)&&$f()}}let kt=null,qf=null;function To(t){const e=kt;return kt=t,qf=t&&t.type.__scopeId||null,e}function ri(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mh(-1);const i=To(e);let a;try{a=t(...s)}finally{To(i),r._d&&mh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Mt(t,e){if(kt===null)return t;const n=ra(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=ke]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&pn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Zn(),on(c,n,8,[t.el,l,t,e]),er())}}const hy=Symbol("_vte"),dy=t=>t.__isTeleport;function dc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,dc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Hf(t,e){return he(t)?nt({name:t.name},e,{setup:t}):t}function Wf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _l(t,e,n,r,s=!1){if(le(t)){t.forEach((C,D)=>_l(C,e&&(le(e)?e[D]:e),n,r,s));return}if(qs(r)&&!s)return;const i=r.shapeFlag&4?ra(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===ke?l.refs={}:l.refs,p=l.setupState,g=be(p),E=p===ke?()=>!1:C=>Ae(g,C);if(h!=null&&h!==c&&(Ke(h)?(f[h]=null,E(h)&&(p[h]=null)):pt(h)&&(h.value=null)),he(c))vi(c,l,12,[a,f]);else{const C=Ke(c),D=pt(c);if(C||D){const k=()=>{if(t.f){const V=C?E(c)?p[c]:f[c]:c.value;s?le(V)&&Zl(V,i):le(V)?V.includes(i)||V.push(i):C?(f[c]=[i],E(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else C?(f[c]=a,E(c)&&(p[c]=a)):D&&(c.value=a,t.k&&(f[t.k]=a))};a?(k.id=-1,St(k,n)):k()}}}const qs=t=>!!t.type.__asyncLoader,Kf=t=>t.type.__isKeepAlive;function fy(t,e){zf(t,"a",e)}function py(t,e){zf(t,"da",e)}function zf(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Kf(s.parent.vnode)&&my(r,e,n,s),s=s.parent}}function my(t,e,n,r){const s=Xo(e,t,r,!0);Qf(()=>{Zl(r[e],s)},n)}function Xo(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Zn();const l=Ei(n),c=on(e,n,t,a);return l(),er(),c});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=ft)=>{(!na||t==="sp")&&Xo(t,(...r)=>e(...r),n)},gy=Rn("bm"),Gf=Rn("m"),_y=Rn("bu"),yy=Rn("u"),vy=Rn("bum"),Qf=Rn("um"),Ey=Rn("sp"),wy=Rn("rtg"),Ty=Rn("rtc");function Iy(t,e=ft){Xo("ec",t,e)}const Ay="components";function Zo(t,e){return Ry(Ay,t,!0,e)||t}const by=Symbol.for("v-ndc");function Ry(t,e,n=!0,r=!1){const s=kt||ft;if(s){const i=s.type;{const l=fv(i,!1);if(l&&(l===e||l===Bt(e)||l===Ko(Bt(e))))return i}const a=ah(s[t]||i[t],e)||ah(s.appContext[t],e);return!a&&r?i:a}}function ah(t,e){return t&&(t[e]||t[Bt(e)]||t[Ko(Bt(e))])}function Sy(t,e,n,r){let s;const i=n,a=le(t);if(a||Ke(t)){const l=a&&Wr(t);let c=!1;l&&(c=!Ft(t),t=Go(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(c?ht(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const yl=t=>t?gp(t)?ra(t):yl(t.parent):null,Hs=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yl(t.parent),$root:t=>yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fc(t),$forceUpdate:t=>t.f||(t.f=()=>{hc(t.update)}),$nextTick:t=>t.n||(t.n=Uf.bind(t.proxy)),$watch:t=>Gy.bind(t)}),Ka=(t,e)=>t!==ke&&!t.__isScriptSetup&&Ae(t,e),Py={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const E=a[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ka(r,e))return a[e]=1,r[e];if(s!==ke&&Ae(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ae(h,e))return a[e]=3,i[e];if(n!==ke&&Ae(n,e))return a[e]=4,n[e];vl&&(a[e]=0)}}const f=Hs[e];let p,g;if(f)return e==="$attrs"&&mt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==ke&&Ae(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,Ae(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ka(s,e)?(s[e]=n,!0):r!==ke&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==ke&&Ae(t,a)||Ka(e,a)||(l=i[0])&&Ae(l,a)||Ae(r,a)||Ae(Hs,a)||Ae(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vl=!0;function Cy(t){const e=fc(t),n=t.proxy,r=t.ctx;vl=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:E,updated:C,activated:D,deactivated:k,beforeDestroy:V,beforeUnmount:M,destroyed:q,unmounted:z,render:de,renderTracked:fe,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:b,components:R,directives:w,filters:_t}=e;if(h&&ky(h,r,null),a)for(const _e in a){const pe=a[_e];he(pe)&&(r[_e]=pe.bind(n))}if(s){const _e=s.call(n,n);Oe(_e)&&(t.data=Jo(_e))}if(vl=!0,i)for(const _e in i){const pe=i[_e],bt=he(pe)?pe.bind(n,n):he(pe.get)?pe.get.bind(n,n):en,jt=!he(pe)&&he(pe.set)?pe.set.bind(n):en,Ot=Ct({get:bt,set:jt});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Ne=>Ot.value=Ne})}if(l)for(const _e in l)Jf(l[_e],r,n,_e);if(c){const _e=he(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(pe=>{Ws(pe,_e[pe])})}f&&ch(f,t,"c");function qe(_e,pe){le(pe)?pe.forEach(bt=>_e(bt.bind(n))):pe&&_e(pe.bind(n))}if(qe(gy,p),qe(Gf,g),qe(_y,E),qe(yy,C),qe(fy,D),qe(py,k),qe(Iy,y),qe(Ty,fe),qe(wy,I),qe(vy,M),qe(Qf,z),qe(Ey,T),le(A))if(A.length){const _e=t.exposed||(t.exposed={});A.forEach(pe=>{Object.defineProperty(_e,pe,{get:()=>n[pe],set:bt=>n[pe]=bt})})}else t.exposed||(t.exposed={});de&&t.render===en&&(t.render=de),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),w&&(t.directives=w),T&&Wf(t)}function ky(t,e,n=en){le(t)&&(t=El(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ch(t,e,n){on(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jf(t,e,n,r){let s=r.includes(".")?up(n,r):()=>n[r];if(Ke(t)){const i=e[t];he(i)&&ao(s,i)}else if(he(t))ao(s,t.bind(n));else if(Oe(t))if(le(t))t.forEach(i=>Jf(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&ao(s,i,t)}}function fc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Io(c,h,a,!0)),Io(c,e,a)),Oe(e)&&i.set(e,c),c}function Io(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Io(t,i,n,!0),s&&s.forEach(a=>Io(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=xy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const xy={data:uh,props:hh,emits:hh,methods:Ds,computed:Ds,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Ds,directives:Ds,watch:Dy,provide:uh,inject:Vy};function uh(t,e){return e?t?function(){return nt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Vy(t,e){return Ds(El(t),El(e))}function El(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?nt(Object.create(null),t,e):e}function hh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:nt(Object.create(null),lh(t),lh(e??{})):e}function Dy(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function Yf(){return{app:null,config:{isNativeTag:E_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oy=0;function Ny(t,e){return function(r,s=null){he(r)||(r=nt({},r)),s!=null&&!Oe(s)&&(s=null);const i=Yf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Oy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&he(f.install)?(a.add(f),f.install(h,...p)):he(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const E=h._ceVNode||Be(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(E,f):t(E,f,g),c=!0,h._container=f,f.__vue_app__=h,ra(E.component)}},onUnmount(f){l.push(f)},unmount(){c&&(on(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Gr;Gr=h;try{return f()}finally{Gr=p}}};return h}}let Gr=null;function Ws(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=ft||kt;if(r||Gr){const s=Gr?Gr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Xf={},Zf=()=>Object.create(Xf),ep=t=>Object.getPrototypeOf(t)===Xf;function My(t,e,n,r=!1){const s={},i=Zf();t.propsDefaults=Object.create(null),tp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Of(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ly(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=be(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ea(t.emitsOptions,g))continue;const E=e[g];if(c)if(Ae(i,g))E!==i[g]&&(i[g]=E,h=!0);else{const C=Bt(g);s[C]=wl(c,l,C,E,t,!1)}else E!==i[g]&&(i[g]=E,h=!0)}}}else{tp(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Ae(e,p)&&((f=Ar(p))===p||!Ae(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=wl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],h=!0)}h&&yn(t.attrs,"set","")}function tp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Bs(c))continue;const h=e[c];let f;s&&Ae(s,f=Bt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:ea(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=be(n),h=l||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=wl(s,c,p,h[p],t,!Ae(h,p))}}return a}function wl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ae(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ei(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Ar(n))&&(r=!0))}return r}const Fy=new WeakMap;function np(t,e,n=!1){const r=n?Fy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!he(t)){const f=p=>{c=!0;const[g,E]=np(p,e,!0);nt(a,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Oe(t)&&r.set(t,qr),qr;if(le(i))for(let f=0;f<i.length;f++){const p=Bt(i[f]);dh(p)&&(a[p]=ke)}else if(i)for(const f in i){const p=Bt(f);if(dh(p)){const g=i[f],E=a[p]=le(g)||he(g)?{type:g}:nt({},g),C=E.type;let D=!1,k=!0;if(le(C))for(let V=0;V<C.length;++V){const M=C[V],q=he(M)&&M.name;if(q==="Boolean"){D=!0;break}else q==="String"&&(k=!1)}else D=he(C)&&C.name==="Boolean";E[0]=D,E[1]=k,(D||Ae(E,"default"))&&l.push(p)}}const h=[a,l];return Oe(t)&&r.set(t,h),h}function dh(t){return t[0]!=="$"&&!Bs(t)}const rp=t=>t[0]==="_"||t==="$stable",pc=t=>le(t)?t.map(Xt):[Xt(t)],Uy=(t,e,n)=>{if(e._n)return e;const r=ri((...s)=>pc(e(...s)),n);return r._c=!1,r},sp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rp(s))continue;const i=t[s];if(he(i))e[s]=Uy(s,i,r);else if(i!=null){const a=pc(i);e[s]=()=>a}}},ip=(t,e)=>{const n=pc(e);t.slots.default=()=>n},op=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},By=(t,e,n)=>{const r=t.slots=Zf();if(t.vnode.shapeFlag&32){const s=e._;s?(op(r,e,n),n&&mf(r,"_",s,!0)):sp(e,r)}else e&&ip(t,e)},jy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=ke;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:op(s,e,n):(i=!e.$stable,sp(e,s)),a=e}else e&&(ip(t,e),a={default:1});if(i)for(const l in s)!rp(l)&&a[l]==null&&delete s[l]},St=tv;function $y(t){return qy(t)}function qy(t,e){const n=gf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:E=en,insertStaticContent:C}=t,D=(_,v,P,L=null,O=null,B=null,G=void 0,W=null,H=!!v.dynamicChildren)=>{if(_===v)return;_&&!ks(_,v)&&(L=N(_),Ne(_,O,B,!0),_=null),v.patchFlag===-2&&(H=!1,v.dynamicChildren=null);const{type:j,ref:re,shapeFlag:J}=v;switch(j){case ta:k(_,v,P,L);break;case _r:V(_,v,P,L);break;case Qa:_==null&&M(v,P,L,G);break;case qt:R(_,v,P,L,O,B,G,W,H);break;default:J&1?de(_,v,P,L,O,B,G,W,H):J&6?w(_,v,P,L,O,B,G,W,H):(J&64||J&128)&&j.process(_,v,P,L,O,B,G,W,H,X)}re!=null&&O&&_l(re,_&&_.ref,B,v||_,!v)},k=(_,v,P,L)=>{if(_==null)r(v.el=l(v.children),P,L);else{const O=v.el=_.el;v.children!==_.children&&h(O,v.children)}},V=(_,v,P,L)=>{_==null?r(v.el=c(v.children||""),P,L):v.el=_.el},M=(_,v,P,L)=>{[_.el,_.anchor]=C(_.children,v,P,L,_.el,_.anchor)},q=({el:_,anchor:v},P,L)=>{let O;for(;_&&_!==v;)O=g(_),r(_,P,L),_=O;r(v,P,L)},z=({el:_,anchor:v})=>{let P;for(;_&&_!==v;)P=g(_),s(_),_=P;s(v)},de=(_,v,P,L,O,B,G,W,H)=>{v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),_==null?fe(v,P,L,O,B,G,W,H):T(_,v,O,B,G,W,H)},fe=(_,v,P,L,O,B,G,W)=>{let H,j;const{props:re,shapeFlag:J,transition:te,dirs:Z}=_;if(H=_.el=a(_.type,B,re&&re.is,re),J&8?f(H,_.children):J&16&&y(_.children,H,null,L,O,za(_,B),G,W),Z&&lr(_,null,L,"created"),I(H,_,_.scopeId,G,L),re){for(const Ie in re)Ie!=="value"&&!Bs(Ie)&&i(H,Ie,null,re[Ie],B,L);"value"in re&&i(H,"value",null,re.value,B),(j=re.onVnodeBeforeMount)&&Jt(j,L,_)}Z&&lr(_,null,L,"beforeMount");const ie=Hy(O,te);ie&&te.beforeEnter(H),r(H,v,P),((j=re&&re.onVnodeMounted)||ie||Z)&&St(()=>{j&&Jt(j,L,_),ie&&te.enter(H),Z&&lr(_,null,L,"mounted")},O)},I=(_,v,P,L,O)=>{if(P&&E(_,P),L)for(let B=0;B<L.length;B++)E(_,L[B]);if(O){let B=O.subTree;if(v===B||dp(B.type)&&(B.ssContent===v||B.ssFallback===v)){const G=O.vnode;I(_,G,G.scopeId,G.slotScopeIds,O.parent)}}},y=(_,v,P,L,O,B,G,W,H=0)=>{for(let j=H;j<_.length;j++){const re=_[j]=W?Ln(_[j]):Xt(_[j]);D(null,re,v,P,L,O,B,G,W)}},T=(_,v,P,L,O,B,G)=>{const W=v.el=_.el;let{patchFlag:H,dynamicChildren:j,dirs:re}=v;H|=_.patchFlag&16;const J=_.props||ke,te=v.props||ke;let Z;if(P&&cr(P,!1),(Z=te.onVnodeBeforeUpdate)&&Jt(Z,P,v,_),re&&lr(v,_,P,"beforeUpdate"),P&&cr(P,!0),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&f(W,""),j?A(_.dynamicChildren,j,W,P,L,za(v,O),B):G||pe(_,v,W,null,P,L,za(v,O),B,!1),H>0){if(H&16)b(W,J,te,P,O);else if(H&2&&J.class!==te.class&&i(W,"class",null,te.class,O),H&4&&i(W,"style",J.style,te.style,O),H&8){const ie=v.dynamicProps;for(let Ie=0;Ie<ie.length;Ie++){const Ee=ie[Ie],it=J[Ee],Qe=te[Ee];(Qe!==it||Ee==="value")&&i(W,Ee,it,Qe,O,P)}}H&1&&_.children!==v.children&&f(W,v.children)}else!G&&j==null&&b(W,J,te,P,O);((Z=te.onVnodeUpdated)||re)&&St(()=>{Z&&Jt(Z,P,v,_),re&&lr(v,_,P,"updated")},L)},A=(_,v,P,L,O,B,G)=>{for(let W=0;W<v.length;W++){const H=_[W],j=v[W],re=H.el&&(H.type===qt||!ks(H,j)||H.shapeFlag&70)?p(H.el):P;D(H,j,re,null,L,O,B,G,!0)}},b=(_,v,P,L,O)=>{if(v!==P){if(v!==ke)for(const B in v)!Bs(B)&&!(B in P)&&i(_,B,v[B],null,O,L);for(const B in P){if(Bs(B))continue;const G=P[B],W=v[B];G!==W&&B!=="value"&&i(_,B,W,G,O,L)}"value"in P&&i(_,"value",v.value,P.value,O)}},R=(_,v,P,L,O,B,G,W,H)=>{const j=v.el=_?_.el:l(""),re=v.anchor=_?_.anchor:l("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:Z}=v;Z&&(W=W?W.concat(Z):Z),_==null?(r(j,P,L),r(re,P,L),y(v.children||[],P,re,O,B,G,W,H)):J>0&&J&64&&te&&_.dynamicChildren?(A(_.dynamicChildren,te,P,O,B,G,W),(v.key!=null||O&&v===O.subTree)&&ap(_,v,!0)):pe(_,v,P,re,O,B,G,W,H)},w=(_,v,P,L,O,B,G,W,H)=>{v.slotScopeIds=W,_==null?v.shapeFlag&512?O.ctx.activate(v,P,L,G,H):_t(v,P,L,O,B,G,H):Dt(_,v,H)},_t=(_,v,P,L,O,B,G)=>{const W=_.component=lv(_,L,O);if(Kf(_)&&(W.ctx.renderer=X),cv(W,!1,G),W.asyncDep){if(O&&O.registerDep(W,qe,G),!_.el){const H=W.subTree=Be(_r);V(null,H,v,P)}}else qe(W,_,v,P,O,B,G)},Dt=(_,v,P)=>{const L=v.component=_.component;if(Zy(_,v,P))if(L.asyncDep&&!L.asyncResolved){_e(L,v,P);return}else L.next=v,L.update();else v.el=_.el,L.vnode=v},qe=(_,v,P,L,O,B,G)=>{const W=()=>{if(_.isMounted){let{next:J,bu:te,u:Z,parent:ie,vnode:Ie}=_;{const ot=lp(_);if(ot){J&&(J.el=Ie.el,_e(_,J,G)),ot.asyncDep.then(()=>{_.isUnmounted||W()});return}}let Ee=J,it;cr(_,!1),J?(J.el=Ie.el,_e(_,J,G)):J=Ie,te&&oo(te),(it=J.props&&J.props.onVnodeBeforeUpdate)&&Jt(it,ie,J,Ie),cr(_,!0);const Qe=Ga(_),Ye=_.subTree;_.subTree=Qe,D(Ye,Qe,p(Ye.el),N(Ye),_,O,B),J.el=Qe.el,Ee===null&&ev(_,Qe.el),Z&&St(Z,O),(it=J.props&&J.props.onVnodeUpdated)&&St(()=>Jt(it,ie,J,Ie),O)}else{let J;const{el:te,props:Z}=v,{bm:ie,m:Ie,parent:Ee,root:it,type:Qe}=_,Ye=qs(v);if(cr(_,!1),ie&&oo(ie),!Ye&&(J=Z&&Z.onVnodeBeforeMount)&&Jt(J,Ee,v),cr(_,!0),te&&Pe){const ot=()=>{_.subTree=Ga(_),Pe(te,_.subTree,_,O,null)};Ye&&Qe.__asyncHydrate?Qe.__asyncHydrate(te,_,ot):ot()}else{it.ce&&it.ce._injectChildStyle(Qe);const ot=_.subTree=Ga(_);D(null,ot,P,L,_,O,B),v.el=ot.el}if(Ie&&St(Ie,O),!Ye&&(J=Z&&Z.onVnodeMounted)){const ot=v;St(()=>Jt(J,Ee,ot),O)}(v.shapeFlag&256||Ee&&qs(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&_.a&&St(_.a,O),_.isMounted=!0,v=P=L=null}};_.scope.on();const H=_.effect=new Ef(W);_.scope.off();const j=_.update=H.run.bind(H),re=_.job=H.runIfDirty.bind(H);re.i=_,re.id=_.uid,H.scheduler=()=>hc(re),cr(_,!0),j()},_e=(_,v,P)=>{v.component=_;const L=_.vnode.props;_.vnode=v,_.next=null,Ly(_,v.props,L,P),jy(_,v.children,P),Zn(),oh(_),er()},pe=(_,v,P,L,O,B,G,W,H=!1)=>{const j=_&&_.children,re=_?_.shapeFlag:0,J=v.children,{patchFlag:te,shapeFlag:Z}=v;if(te>0){if(te&128){jt(j,J,P,L,O,B,G,W,H);return}else if(te&256){bt(j,J,P,L,O,B,G,W,H);return}}Z&8?(re&16&&Tt(j,O,B),J!==j&&f(P,J)):re&16?Z&16?jt(j,J,P,L,O,B,G,W,H):Tt(j,O,B,!0):(re&8&&f(P,""),Z&16&&y(J,P,L,O,B,G,W,H))},bt=(_,v,P,L,O,B,G,W,H)=>{_=_||qr,v=v||qr;const j=_.length,re=v.length,J=Math.min(j,re);let te;for(te=0;te<J;te++){const Z=v[te]=H?Ln(v[te]):Xt(v[te]);D(_[te],Z,P,null,O,B,G,W,H)}j>re?Tt(_,O,B,!0,!1,J):y(v,P,L,O,B,G,W,H,J)},jt=(_,v,P,L,O,B,G,W,H)=>{let j=0;const re=v.length;let J=_.length-1,te=re-1;for(;j<=J&&j<=te;){const Z=_[j],ie=v[j]=H?Ln(v[j]):Xt(v[j]);if(ks(Z,ie))D(Z,ie,P,null,O,B,G,W,H);else break;j++}for(;j<=J&&j<=te;){const Z=_[J],ie=v[te]=H?Ln(v[te]):Xt(v[te]);if(ks(Z,ie))D(Z,ie,P,null,O,B,G,W,H);else break;J--,te--}if(j>J){if(j<=te){const Z=te+1,ie=Z<re?v[Z].el:L;for(;j<=te;)D(null,v[j]=H?Ln(v[j]):Xt(v[j]),P,ie,O,B,G,W,H),j++}}else if(j>te)for(;j<=J;)Ne(_[j],O,B,!0),j++;else{const Z=j,ie=j,Ie=new Map;for(j=ie;j<=te;j++){const yt=v[j]=H?Ln(v[j]):Xt(v[j]);yt.key!=null&&Ie.set(yt.key,j)}let Ee,it=0;const Qe=te-ie+1;let Ye=!1,ot=0;const Cn=new Array(Qe);for(j=0;j<Qe;j++)Cn[j]=0;for(j=Z;j<=J;j++){const yt=_[j];if(it>=Qe){Ne(yt,O,B,!0);continue}let Nt;if(yt.key!=null)Nt=Ie.get(yt.key);else for(Ee=ie;Ee<=te;Ee++)if(Cn[Ee-ie]===0&&ks(yt,v[Ee])){Nt=Ee;break}Nt===void 0?Ne(yt,O,B,!0):(Cn[Nt-ie]=j+1,Nt>=ot?ot=Nt:Ye=!0,D(yt,v[Nt],P,null,O,B,G,W,H),it++)}const Cr=Ye?Wy(Cn):qr;for(Ee=Cr.length-1,j=Qe-1;j>=0;j--){const yt=ie+j,Nt=v[yt],kr=yt+1<re?v[yt+1].el:L;Cn[j]===0?D(null,Nt,P,kr,O,B,G,W,H):Ye&&(Ee<0||j!==Cr[Ee]?Ot(Nt,P,kr,2):Ee--)}}},Ot=(_,v,P,L,O=null)=>{const{el:B,type:G,transition:W,children:H,shapeFlag:j}=_;if(j&6){Ot(_.component.subTree,v,P,L);return}if(j&128){_.suspense.move(v,P,L);return}if(j&64){G.move(_,v,P,X);return}if(G===qt){r(B,v,P);for(let J=0;J<H.length;J++)Ot(H[J],v,P,L);r(_.anchor,v,P);return}if(G===Qa){q(_,v,P);return}if(L!==2&&j&1&&W)if(L===0)W.beforeEnter(B),r(B,v,P),St(()=>W.enter(B),O);else{const{leave:J,delayLeave:te,afterLeave:Z}=W,ie=()=>r(B,v,P),Ie=()=>{J(B,()=>{ie(),Z&&Z()})};te?te(B,ie,Ie):Ie()}else r(B,v,P)},Ne=(_,v,P,L=!1,O=!1)=>{const{type:B,props:G,ref:W,children:H,dynamicChildren:j,shapeFlag:re,patchFlag:J,dirs:te,cacheIndex:Z}=_;if(J===-2&&(O=!1),W!=null&&_l(W,null,P,_,!0),Z!=null&&(v.renderCache[Z]=void 0),re&256){v.ctx.deactivate(_);return}const ie=re&1&&te,Ie=!qs(_);let Ee;if(Ie&&(Ee=G&&G.onVnodeBeforeUnmount)&&Jt(Ee,v,_),re&6)Qt(_.component,P,L);else{if(re&128){_.suspense.unmount(P,L);return}ie&&lr(_,null,v,"beforeUnmount"),re&64?_.type.remove(_,v,P,X,L):j&&!j.hasOnce&&(B!==qt||J>0&&J&64)?Tt(j,v,P,!1,!0):(B===qt&&J&384||!O&&re&16)&&Tt(H,v,P),L&&Me(_)}(Ie&&(Ee=G&&G.onVnodeUnmounted)||ie)&&St(()=>{Ee&&Jt(Ee,v,_),ie&&lr(_,null,v,"unmounted")},P)},Me=_=>{const{type:v,el:P,anchor:L,transition:O}=_;if(v===qt){Pn(P,L);return}if(v===Qa){z(_);return}const B=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(_.shapeFlag&1&&O&&!O.persisted){const{leave:G,delayLeave:W}=O,H=()=>G(P,B);W?W(_.el,B,H):H()}else B()},Pn=(_,v)=>{let P;for(;_!==v;)P=g(_),s(_),_=P;s(v)},Qt=(_,v,P)=>{const{bum:L,scope:O,job:B,subTree:G,um:W,m:H,a:j}=_;fh(H),fh(j),L&&oo(L),O.stop(),B&&(B.flags|=8,Ne(G,_,v,P)),W&&St(W,v),St(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Tt=(_,v,P,L=!1,O=!1,B=0)=>{for(let G=B;G<_.length;G++)Ne(_[G],v,P,L,O)},N=_=>{if(_.shapeFlag&6)return N(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=g(_.anchor||_.el),P=v&&v[hy];return P?g(P):v};let Y=!1;const Q=(_,v,P)=>{_==null?v._vnode&&Ne(v._vnode,null,null,!0):D(v._vnode||null,_,v,null,null,null,P),v._vnode=_,Y||(Y=!0,oh(),jf(),Y=!1)},X={p:D,um:Ne,m:Ot,r:Me,mt:_t,mc:y,pc:pe,pbc:A,n:N,o:t};let ye,Pe;return{render:Q,hydrate:ye,createApp:Ny(Q,ye)}}function za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ap(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Ln(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&ap(a,l)),l.type===ta&&(l.el=a.el)}}function Wy(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function lp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lp(e)}function fh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ky=Symbol.for("v-scx"),zy=()=>Wt(Ky);function ao(t,e,n){return cp(t,e,n)}function cp(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:a}=n,l=nt({},n);let c;if(na)if(i==="sync"){const g=zy();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!e||r)l.once=!0;else{const g=()=>{};return g.stop=en,g.resume=en,g.pause=en,g}const h=ft;l.call=(g,E,C)=>on(g,h,E,C);let f=!1;i==="post"?l.scheduler=g=>{St(g,h&&h.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(g,E)=>{E?g():hc(g)}),l.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=ay(t,e,l);return c&&c.push(p),p}function Gy(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?up(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const a=Ei(this),l=cp(s,i.bind(r),n);return a(),l}function up(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Qy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bt(e)}Modifiers`]||t[`${Ar(e)}Modifiers`];function Jy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),a=i&&Qy(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Ke(f)?f.trim():f)),a.number&&(s=n.map(fl)));let l,c=r[l=ja(e)]||r[l=ja(Bt(e))];!c&&i&&(c=r[l=ja(Ar(e))]),c&&on(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,on(h,t,6,s)}}function hp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!he(t)){const c=h=>{const f=hp(h,e,!0);f&&(l=!0,nt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Oe(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>a[c]=null):nt(a,i),Oe(t)&&r.set(t,a),a)}function ea(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Ar(e))||Ae(t,e))}function Ga(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:E,ctx:C,inheritAttrs:D}=t,k=To(t);let V,M;try{if(n.shapeFlag&4){const z=s||r,de=z;V=Xt(h.call(de,z,f,p,E,g,C)),M=l}else{const z=e;V=Xt(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),M=e.props?l:Yy(l)}}catch(z){Ks.length=0,Yo(z,t,1),V=Be(_r)}let q=V;if(M&&D!==!1){const z=Object.keys(M),{shapeFlag:de}=q;z.length&&de&7&&(i&&z.some(Xl)&&(M=Xy(M,i)),q=Zr(q,M,!1,!0))}return n.dirs&&(q=Zr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&dc(q,n.transition),V=q,To(k),V}const Yy=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},Xy=(t,e)=>{const n={};for(const r in t)(!Xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ph(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!ea(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ph(r,a,h):!0:!!a;return!1}function ph(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ea(n,i))return!0}return!1}function ev({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const dp=t=>t.__isSuspense;function tv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):uy(t)}const qt=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),Ks=[];let xt=null;function Ue(t=!1){Ks.push(xt=t?null:[])}function nv(){Ks.pop(),xt=Ks[Ks.length-1]||null}let si=1;function mh(t){si+=t,t<0&&xt&&(xt.hasOnce=!0)}function fp(t){return t.dynamicChildren=si>0?xt||qr:null,nv(),si>0&&xt&&xt.push(t),t}function We(t,e,n,r,s,i){return fp($(t,e,n,r,s,i,!0))}function pp(t,e,n,r,s){return fp(Be(t,e,n,r,s,!0))}function Ao(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const mp=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||pt(t)||he(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===qt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mp(e),ref:e&&lo(e),scopeId:qf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return l?(mc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),si>0&&!a&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const Be=rv;function rv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===by)&&(t=_r),Ao(t)){const l=Zr(t,e,!0);return n&&mc(l,n),si>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(t)]=l:xt.push(l)),l.patchFlag=-2,l}if(pv(t)&&(t=t.__vccOpts),e){e=sv(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=zo(l)),Oe(c)&&(cc(c)&&!le(c)&&(c=nt({},c)),e.style=tc(c))}const a=Ke(t)?1:dp(t)?128:dy(t)?64:Oe(t)?4:he(t)?2:0;return $(t,e,n,r,s,a,i,!0)}function sv(t){return t?cc(t)||ep(t)?nt({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?iv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&mp(h),ref:e&&e.ref?n&&i?le(i)?i.concat(lo(e)):[i,lo(e)]:lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&dc(f,c.clone(f)),f}function ii(t=" ",e=0){return Be(ta,null,t,e)}function es(t="",e=!1){return e?(Ue(),pp(_r,null,t)):Be(_r,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Be(_r):le(t)?Be(qt,null,t.slice()):Ao(t)?Ln(t):Be(ta,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function mc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ep(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[ii(e)]):n=8);t.children=e,t.shapeFlag|=n}function iv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zo([e.class,r.class]));else if(s==="style")e.style=tc([e.style,r.style]);else if(qo(s)){const i=e[s],a=r[s];a&&i!==a&&!(le(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Jt(t,e,n,r=null){on(t,e,7,[n,r])}const ov=Yf();let av=0;function lv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ov,i={uid:av++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new x_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(r,s),emitsOptions:hp(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),t.ce&&t.ce(i),i}let ft=null,bo,Tl;{const t=gf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};bo=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Tl=e("__VUE_SSR_SETTERS__",n=>na=n)}const Ei=t=>{const e=ft;return bo(t),t.scope.on(),()=>{t.scope.off(),bo(e)}},gh=()=>{ft&&ft.scope.off(),bo(null)};function gp(t){return t.vnode.shapeFlag&4}let na=!1;function cv(t,e=!1,n=!1){e&&Tl(e);const{props:r,children:s}=t.vnode,i=gp(t);My(t,r,i,e),By(t,s,n);const a=i?uv(t,e):void 0;return e&&Tl(!1),a}function uv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Py);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?dv(t):null,i=Ei(t);Zn();const a=vi(r,t,0,[t.props,s]);if(er(),i(),df(a)){if(qs(t)||Wf(t),a.then(gh,gh),e)return a.then(l=>{_h(t,l,e)}).catch(l=>{Yo(l,t,0)});t.asyncDep=a}else _h(t,a,e)}else _p(t,e)}function _h(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Lf(e)),_p(t,n)}let yh;function _p(t,e,n){const r=t.type;if(!t.render){if(!e&&yh&&!r.render){const s=r.template||fc(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=nt(nt({isCustomElement:i,delimiters:l},a),c);r.render=yh(s,h)}}t.render=r.render||en}{const s=Ei(t);Zn();try{Cy(t)}finally{er(),s()}}}const hv={get(t,e){return mt(t,"get",""),t[e]}};function dv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hv),slots:t.slots,emit:t.emit,expose:e}}function ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Lf(ey(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hs)return Hs[n](t)},has(e,n){return n in e||n in Hs}})):t.proxy}function fv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function pv(t){return he(t)&&"__vccOpts"in t}const Ct=(t,e)=>iy(t,e,na);function yp(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!le(e)?Ao(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ao(n)&&(n=[n]),Be(t,e,n))}const mv="3.5.11";/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Il;const vh=typeof window<"u"&&window.trustedTypes;if(vh)try{Il=vh.createPolicy("vue",{createHTML:t=>t})}catch{}const vp=Il?t=>Il.createHTML(t):t=>t,gv="http://www.w3.org/2000/svg",_v="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Eh=fn&&fn.createElement("template"),yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(gv,t):e==="mathml"?fn.createElementNS(_v,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Eh.innerHTML=vp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Eh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vv=Symbol("_vtc");function Ev(t,e,n){const r=t[vv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wh=Symbol("_vod"),wv=Symbol("_vsh"),Tv=Symbol(""),Iv=/(^|;)\s*display\s*:/;function Av(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&co(r,l,"")}else for(const a in e)n[a]==null&&co(r,a,"");for(const a in n)a==="display"&&(i=!0),co(r,a,n[a])}else if(s){if(e!==n){const a=r[Tv];a&&(n+=";"+a),r.cssText=n,i=Iv.test(n)}}else e&&t.removeAttribute("style");wh in t&&(t[wh]=i?r.display:"",t[wv]&&(r.display="none"))}const Th=/\s*!important$/;function co(t,e,n){if(le(n))n.forEach(r=>co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bv(t,e);Th.test(n)?t.setProperty(Ar(r),n.replace(Th,""),"important"):t[r]=n}}const Ih=["Webkit","Moz","ms"],Ja={};function bv(t,e){const n=Ja[e];if(n)return n;let r=Bt(e);if(r!=="filter"&&r in t)return Ja[e]=r;r=Ko(r);for(let s=0;s<Ih.length;s++){const i=Ih[s]+r;if(i in t)return Ja[e]=i}return e}const Ah="http://www.w3.org/1999/xlink";function bh(t,e,n,r,s,i=k_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ah,e.slice(6,e.length)):t.setAttributeNS(Ah,e,n):n==null||i&&!_f(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Xn(n)?String(n):n)}function Rh(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_f(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function Rv(t,e,n,r){t.removeEventListener(e,n,r)}const Sh=Symbol("_vei");function Sv(t,e,n,r,s=null){const i=t[Sh]||(t[Sh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Pv(e);if(r){const h=i[e]=xv(r,s);Lr(t,l,h,c)}else a&&(Rv(t,l,a,c),i[e]=void 0)}}const Ph=/(?:Once|Passive|Capture)$/;function Pv(t){let e;if(Ph.test(t)){e={};let r;for(;r=t.match(Ph);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ar(t.slice(2)),e]}let Ya=0;const Cv=Promise.resolve(),kv=()=>Ya||(Cv.then(()=>Ya=0),Ya=Date.now());function xv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;on(Vv(r,n.value),e,5,[r])};return n.value=t,n.attached=kv(),n}function Vv(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Ev(t,r,a):e==="style"?Av(t,n,r):qo(e)?Xl(e)||Sv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ov(t,e,r,a))?(Rh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?Rh(t,Bt(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bh(t,e,r,a))};function Ov(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ch(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(e)&&Ke(n)?!1:e in t}const kh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>oo(e,n):e};function Nv(t){t.target.composing=!0}function xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xa=Symbol("_assign"),Lt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Xa]=kh(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=fl(l)),t[Xa](l)}),n&&Lr(t,"change",()=>{t.value=t.value.trim()}),e||(Lr(t,"compositionstart",Nv),Lr(t,"compositionend",xh),Lr(t,"change",xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Xa]=kh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?fl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Mv=["ctrl","shift","alt","meta"],Lv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mv.some(n=>t[`${n}Key`]&&!e.includes(n))},Ro=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=Lv[e[a]];if(l&&l(s,e))return}return t(s,...i)})},Fv=nt({patchProp:Dv},yv);let Vh;function Uv(){return Vh||(Vh=$y(Fv))}const Bv=(...t)=>{const e=Uv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$v(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,jv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function jv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $v(t){return Ke(t)?document.querySelector(t):t}const wi=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qv={};function Hv(t,e){const n=Zo("router-view");return Ue(),pp(n)}const Wv=wi(qv,[["render",Hv]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof document<"u";function Ep(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ep(t.default)}const Re=Object.assign;function Za(t,e){const n={};for(const r in e){const s=e[r];n[r]=Kt(s)?s.map(t):t(s)}return n}const zs=()=>{},Kt=Array.isArray,wp=/#/g,zv=/&/g,Gv=/\//g,Qv=/=/g,Jv=/\?/g,Tp=/\+/g,Yv=/%5B/g,Xv=/%5D/g,Ip=/%5E/g,Zv=/%60/g,Ap=/%7B/g,eE=/%7C/g,bp=/%7D/g,tE=/%20/g;function gc(t){return encodeURI(""+t).replace(eE,"|").replace(Yv,"[").replace(Xv,"]")}function nE(t){return gc(t).replace(Ap,"{").replace(bp,"}").replace(Ip,"^")}function Al(t){return gc(t).replace(Tp,"%2B").replace(tE,"+").replace(wp,"%23").replace(zv,"%26").replace(Zv,"`").replace(Ap,"{").replace(bp,"}").replace(Ip,"^")}function rE(t){return Al(t).replace(Qv,"%3D")}function sE(t){return gc(t).replace(wp,"%23").replace(Jv,"%3F")}function iE(t){return t==null?"":sE(t).replace(Gv,"%2F")}function oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const oE=/\/$/,aE=t=>t.replace(oE,"");function el(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=hE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:oi(a)}}function lE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ts(e.matched[r],n.matched[s])&&Rp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uE(t[n],e[n]))return!1;return!0}function uE(t,e){return Kt(t)?Oh(t,e):Kt(e)?Oh(e,t):t===e}function Oh(t,e){return Kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ai;(function(t){t.pop="pop",t.push="push"})(ai||(ai={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function dE(t){if(!t)if(Fr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aE(t)}const fE=/^[^#]+#/;function pE(t,e){return t.replace(fE,"#")+e}function mE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const sa=()=>({left:window.scrollX,top:window.scrollY});function gE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nh(t,e){return(history.state?history.state.position-e:-1)+t}const bl=new Map;function _E(t,e){bl.set(t,e)}function yE(t){const e=bl.get(t);return bl.delete(t),e}let vE=()=>location.protocol+"//"+location.host;function Sp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Dh(c,"")}return Dh(n,t)+r+s}function EE(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const E=Sp(t,location),C=n.value,D=e.value;let k=0;if(g){if(n.value=E,e.value=g,a&&a===C){a=null;return}k=D?g.position-D.position:0}else r(E);s.forEach(V=>{V(n.value,C,{delta:k,type:ai.pop,direction:k?k>0?Gs.forward:Gs.back:Gs.unknown})})};function c(){a=n.value}function h(g){s.push(g);const E=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(E),E}function f(){const{history:g}=window;g.state&&g.replaceState(Re({},g.state,{scroll:sa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Mh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?sa():null}}function wE(t){const{history:e,location:n}=window,r={value:Sp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:vE()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(E){console.error(E),n[f?"replace":"assign"](g)}}function a(c,h){const f=Re({},e.state,Mh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=Re({},s.value,e.state,{forward:c,scroll:sa()});i(f.current,f,!0);const p=Re({},Mh(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function TE(t){t=dE(t);const e=wE(t),n=EE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:pE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function IE(t){return typeof t=="string"||t&&typeof t=="object"}function Pp(t){return typeof t=="string"||typeof t=="symbol"}const Cp=Symbol("");var Lh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lh||(Lh={}));function ns(t,e){return Re(new Error,{type:t,[Cp]:!0},e)}function dn(t,e){return t instanceof Error&&Cp in t&&(e==null||!!(t.type&e))}const Fh="[^/]+?",AE={sensitive:!1,strict:!1,start:!0,end:!0},bE=/[.+*?^${}()[\]/\\]/g;function RE(t,e){const n=Re({},AE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(bE,"\\$&"),E+=40;else if(g.type===1){const{value:C,repeatable:D,optional:k,regexp:V}=g;i.push({name:C,repeatable:D,optional:k});const M=V||Fh;if(M!==Fh){E+=10;try{new RegExp(`(${M})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+z.message)}}let q=D?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(q=k&&h.length<2?`(?:/${q})`:"/"+q),k&&(q+="?"),s+=q,E+=20,k&&(E+=-8),D&&(E+=-20),M===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const E=f[g]||"",C=i[g-1];p[C.name]=E&&C.repeatable?E.split("/"):E}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of g)if(E.type===0)f+=E.value;else if(E.type===1){const{value:C,repeatable:D,optional:k}=E,V=C in h?h[C]:"";if(Kt(V)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Kt(V)?V.join("/"):V;if(!M)if(k)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=M}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function SE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=SE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Uh(r))return 1;if(Uh(s))return-1}return s.length-r.length}function Uh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PE={type:0,value:""},CE=/[a-zA-Z0-9_]/;function kE(t){if(!t)return[[]];if(t==="/")return[[PE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:CE.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function xE(t,e,n){const r=RE(kE(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function VE(t,e){const n=[],r=new Map;e=qh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const C=!E,D=jh(p);D.aliasOf=E&&E.record;const k=qh(e,p),V=[D];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of z)V.push(jh(Re({},D,{components:E?E.record.components:D.components,path:de,aliasOf:E?E.record:D})))}let M,q;for(const z of V){const{path:de}=z;if(g&&de[0]!=="/"){const fe=g.record.path,I=fe[fe.length-1]==="/"?"":"/";z.path=g.record.path+(de&&I+de)}if(M=xE(z,g,k),E?E.alias.push(M):(q=q||M,q!==M&&q.alias.push(M),C&&p.name&&!$h(M)&&a(p.name)),xp(M)&&c(M),D.children){const fe=D.children;for(let I=0;I<fe.length;I++)i(fe[I],M,E&&E.children[I])}E=E||M}return q?()=>{a(q)}:zs}function a(p){if(Pp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=NE(p,n);n.splice(g,0,p),p.record.name&&!$h(p)&&r.set(p.record.name,p)}function h(p,g){let E,C={},D,k;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw ns(1,{location:p});k=E.record.name,C=Re(Bh(g.params,E.keys.filter(q=>!q.optional).concat(E.parent?E.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Bh(p.params,E.keys.map(q=>q.name))),D=E.stringify(C)}else if(p.path!=null)D=p.path,E=n.find(q=>q.re.test(D)),E&&(C=E.parse(D),k=E.record.name);else{if(E=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!E)throw ns(1,{location:p,currentLocation:g});k=E.record.name,C=Re({},g.params,p.params),D=E.stringify(C)}const V=[];let M=E;for(;M;)V.unshift(M.record),M=M.parent;return{name:k,path:D,params:C,matched:V,meta:OE(V)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Bh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:DE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function DE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $h(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OE(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function qh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function NE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;kp(t,e[i])<0?r=i:n=i+1}const s=ME(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ME(t){let e=t;for(;e=e.parent;)if(xp(e)&&kp(t,e)===0)return e}function xp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function LE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Tp," "),a=i.indexOf("="),l=oi(a<0?i:i.slice(0,a)),c=a<0?null:oi(i.slice(a+1));if(l in e){let h=e[l];Kt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Hh(t){let e="";for(let n in t){const r=t[n];if(n=rE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(r)?r.map(i=>i&&Al(i)):[r&&Al(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const UE=Symbol(""),Wh=Symbol(""),ia=Symbol(""),Vp=Symbol(""),Rl=Symbol("");function xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Fn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(ns(4,{from:n,to:e})):g instanceof Error?c(g):IE(g)?c(ns(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function tl(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Ep(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Fn(f,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Kv(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const E=(p.__vccOpts||p)[e];return E&&Fn(E,n,r,a,l,s)()}))}}return i}function Kh(t){const e=Wt(ia),n=Wt(Vp),r=Ct(()=>{const c=Kr(t.to);return e.resolve(c)}),s=Ct(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ts.bind(null,f));if(g>-1)return g;const E=zh(c[h-2]);return h>1&&zh(f)===E&&p[p.length-1].path!==E?p.findIndex(ts.bind(null,c[h-2])):g}),i=Ct(()=>s.value>-1&&qE(n.params,r.value.params)),a=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&Rp(n.params,r.value.params));function l(c={}){return $E(c)?e[Kr(t.replace)?"replace":"push"](Kr(t.to)).catch(zs):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const BE=Hf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kh,setup(t,{slots:e}){const n=Jo(Kh(t)),{options:r}=Wt(ia),s=Ct(()=>({[Gh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jE=BE;function $E(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Kt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function zh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gh=(t,e,n)=>t??e??n,HE=Hf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(Rl),s=Ct(()=>t.route||r.value),i=Wt(Wh,0),a=Ct(()=>{let h=Kr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Ct(()=>s.value.matched[a.value]);Ws(Wh,Ct(()=>a.value+1)),Ws(UE,l),Ws(Rl,s);const c=$e();return ao(()=>[c.value,l.value,t.name],([h,f,p],[g,E,C])=>{f&&(f.instances[p]=h,E&&E!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),h&&f&&(!E||!ts(f,E)||!g)&&(f.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return Qh(n.default,{Component:g,route:h});const E=p.props[f],C=E?E===!0?h.params:typeof E=="function"?E(h):E:null,k=yp(g,Re({},C,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Qh(n.default,{Component:k,route:h})||k}}});function Qh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WE=HE;function KE(t){const e=VE(t.routes,t),n=t.parseQuery||LE,r=t.stringifyQuery||Hh,s=t.history,i=xs(),a=xs(),l=xs(),c=ty(On);let h=On;Fr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Za.bind(null,N=>""+N),p=Za.bind(null,iE),g=Za.bind(null,oi);function E(N,Y){let Q,X;return Pp(N)?(Q=e.getRecordMatcher(N),X=Y):X=N,e.addRoute(X,Q)}function C(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function D(){return e.getRoutes().map(N=>N.record)}function k(N){return!!e.getRecordMatcher(N)}function V(N,Y){if(Y=Re({},Y||c.value),typeof N=="string"){const v=el(n,N,Y.path),P=e.resolve({path:v.path},Y),L=s.createHref(v.fullPath);return Re(v,P,{params:g(P.params),hash:oi(v.hash),redirectedFrom:void 0,href:L})}let Q;if(N.path!=null)Q=Re({},N,{path:el(n,N.path,Y.path).path});else{const v=Re({},N.params);for(const P in v)v[P]==null&&delete v[P];Q=Re({},N,{params:p(v)}),Y.params=p(Y.params)}const X=e.resolve(Q,Y),ye=N.hash||"";X.params=f(g(X.params));const Pe=lE(r,Re({},N,{hash:nE(ye),path:X.path})),_=s.createHref(Pe);return Re({fullPath:Pe,hash:ye,query:r===Hh?FE(N.query):N.query||{}},X,{redirectedFrom:void 0,href:_})}function M(N){return typeof N=="string"?el(n,N,c.value.path):Re({},N)}function q(N,Y){if(h!==N)return ns(8,{from:Y,to:N})}function z(N){return I(N)}function de(N){return z(Re(M(N),{replace:!0}))}function fe(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let X=typeof Q=="function"?Q(N):Q;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=M(X):{path:X},X.params={}),Re({query:N.query,hash:N.hash,params:X.path!=null?{}:N.params},X)}}function I(N,Y){const Q=h=V(N),X=c.value,ye=N.state,Pe=N.force,_=N.replace===!0,v=fe(Q);if(v)return I(Re(M(v),{state:typeof v=="object"?Re({},ye,v.state):ye,force:Pe,replace:_}),Y||Q);const P=Q;P.redirectedFrom=Y;let L;return!Pe&&cE(r,X,Q)&&(L=ns(16,{to:P,from:X}),Ot(X,X,!0,!1)),(L?Promise.resolve(L):A(P,X)).catch(O=>dn(O)?dn(O,2)?O:jt(O):pe(O,P,X)).then(O=>{if(O){if(dn(O,2))return I(Re({replace:_},M(O.to),{state:typeof O.to=="object"?Re({},ye,O.to.state):ye,force:Pe}),Y||P)}else O=R(P,X,!0,_,ye);return b(P,X,O),O})}function y(N,Y){const Q=q(N,Y);return Q?Promise.reject(Q):Promise.resolve()}function T(N){const Y=Pn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function A(N,Y){let Q;const[X,ye,Pe]=zE(N,Y);Q=tl(X.reverse(),"beforeRouteLeave",N,Y);for(const v of X)v.leaveGuards.forEach(P=>{Q.push(Fn(P,N,Y))});const _=y.bind(null,N,Y);return Q.push(_),Tt(Q).then(()=>{Q=[];for(const v of i.list())Q.push(Fn(v,N,Y));return Q.push(_),Tt(Q)}).then(()=>{Q=tl(ye,"beforeRouteUpdate",N,Y);for(const v of ye)v.updateGuards.forEach(P=>{Q.push(Fn(P,N,Y))});return Q.push(_),Tt(Q)}).then(()=>{Q=[];for(const v of Pe)if(v.beforeEnter)if(Kt(v.beforeEnter))for(const P of v.beforeEnter)Q.push(Fn(P,N,Y));else Q.push(Fn(v.beforeEnter,N,Y));return Q.push(_),Tt(Q)}).then(()=>(N.matched.forEach(v=>v.enterCallbacks={}),Q=tl(Pe,"beforeRouteEnter",N,Y,T),Q.push(_),Tt(Q))).then(()=>{Q=[];for(const v of a.list())Q.push(Fn(v,N,Y));return Q.push(_),Tt(Q)}).catch(v=>dn(v,8)?v:Promise.reject(v))}function b(N,Y,Q){l.list().forEach(X=>T(()=>X(N,Y,Q)))}function R(N,Y,Q,X,ye){const Pe=q(N,Y);if(Pe)return Pe;const _=Y===On,v=Fr?history.state:{};Q&&(X||_?s.replace(N.fullPath,Re({scroll:_&&v&&v.scroll},ye)):s.push(N.fullPath,ye)),c.value=N,Ot(N,Y,Q,_),jt()}let w;function _t(){w||(w=s.listen((N,Y,Q)=>{if(!Qt.listening)return;const X=V(N),ye=fe(X);if(ye){I(Re(ye,{replace:!0}),X).catch(zs);return}h=X;const Pe=c.value;Fr&&_E(Nh(Pe.fullPath,Q.delta),sa()),A(X,Pe).catch(_=>dn(_,12)?_:dn(_,2)?(I(_.to,X).then(v=>{dn(v,20)&&!Q.delta&&Q.type===ai.pop&&s.go(-1,!1)}).catch(zs),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(_,X,Pe))).then(_=>{_=_||R(X,Pe,!1),_&&(Q.delta&&!dn(_,8)?s.go(-Q.delta,!1):Q.type===ai.pop&&dn(_,20)&&s.go(-1,!1)),b(X,Pe,_)}).catch(zs)}))}let Dt=xs(),qe=xs(),_e;function pe(N,Y,Q){jt(N);const X=qe.list();return X.length?X.forEach(ye=>ye(N,Y,Q)):console.error(N),Promise.reject(N)}function bt(){return _e&&c.value!==On?Promise.resolve():new Promise((N,Y)=>{Dt.add([N,Y])})}function jt(N){return _e||(_e=!N,_t(),Dt.list().forEach(([Y,Q])=>N?Q(N):Y()),Dt.reset()),N}function Ot(N,Y,Q,X){const{scrollBehavior:ye}=t;if(!Fr||!ye)return Promise.resolve();const Pe=!Q&&yE(Nh(N.fullPath,0))||(X||!Q)&&history.state&&history.state.scroll||null;return Uf().then(()=>ye(N,Y,Pe)).then(_=>_&&gE(_)).catch(_=>pe(_,N,Y))}const Ne=N=>s.go(N);let Me;const Pn=new Set,Qt={currentRoute:c,listening:!0,addRoute:E,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:D,resolve:V,options:t,push:z,replace:de,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:qe.add,isReady:bt,install(N){const Y=this;N.component("RouterLink",jE),N.component("RouterView",WE),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(c)}),Fr&&!Me&&c.value===On&&(Me=!0,z(s.location).catch(ye=>{}));const Q={};for(const ye in On)Object.defineProperty(Q,ye,{get:()=>c.value[ye],enumerable:!0});N.provide(ia,Y),N.provide(Vp,Of(Q)),N.provide(Rl,c);const X=N.unmount;Pn.add(N),N.unmount=function(){Pn.delete(N),Pn.size<1&&(h=On,w&&w(),w=null,c.value=On,Me=!1,_e=!1),X()}}};function Tt(N){return N.reduce((Y,Q)=>Y.then(()=>T(Q)),Promise.resolve())}return Qt}function zE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>ts(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>ts(h,c))||s.push(c))}return[n,r,s]}function GE(){return Wt(ia)}var Jh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,E=h&63;c||(E=64,a||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new JE;const g=i<<2|l>>4;if(r.push(g),h!==64){const E=l<<4&240|h>>2;if(r.push(E),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YE=function(t){const e=Dp(t);return Op.encodeByteArray(e,!0)},So=function(t){return YE(t).replace(/\./g,"")},Np=function(t){try{return Op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=()=>XE().__FIREBASE_DEFAULTS__,ew=()=>{if(typeof process>"u"||typeof Jh>"u")return;const t=Jh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},oa=()=>{try{return ZE()||ew()||tw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mp=t=>{var e,n;return(n=(e=oa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nw=t=>{const e=Mp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lp=()=>{var t;return(t=oa())===null||t===void 0?void 0:t.config},Fp=t=>{var e;return(e=oa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[So(JSON.stringify(n)),So(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function ow(){var t;const e=(t=oa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uw(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hw(){return!ow()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dw(){try{return typeof indexedDB=="object"}catch{return!1}}function fw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pw,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?mw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,l,r)}}function mw(t,e){return t.replace(gw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gw=/\{\$([^}]+)}/g;function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Yh(i)&&Yh(a)){if(!Po(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Os(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yw(t,e){const n=new vw(t,e);return n.subscribe.bind(n)}class vw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ew(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nl),s.error===void 0&&(s.error=nl),s.complete===void 0&&(s.complete=nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Iw(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tw(t){return t===hr?void 0:t}function Iw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const bw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Rw=ge.INFO,Sw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Pw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _c{constructor(e){this.name=e,this._logLevel=Rw,this._logHandler=Pw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Cw=(t,e)=>e.some(n=>t instanceof n);let Xh,Zh;function kw(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xw(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Up=new WeakMap,Sl=new WeakMap,Bp=new WeakMap,rl=new WeakMap,yc=new WeakMap;function Vw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Hn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Up.set(n,t)}).catch(()=>{}),yc.set(e,t),e}function Dw(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Sl.set(t,e)}let Pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ow(t){Pl=t(Pl)}function Nw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sl(this),e,...n);return Bp.set(r,e.sort?e.sort():[e]),Hn(r)}:xw().includes(t)?function(...e){return t.apply(sl(this),e),Hn(Up.get(this))}:function(...e){return Hn(t.apply(sl(this),e))}}function Mw(t){return typeof t=="function"?Nw(t):(t instanceof IDBTransaction&&Dw(t),Cw(t,kw())?new Proxy(t,Pl):t)}function Hn(t){if(t instanceof IDBRequest)return Vw(t);if(rl.has(t))return rl.get(t);const e=Mw(t);return e!==t&&(rl.set(t,e),yc.set(e,t)),e}const sl=t=>yc.get(t);function Lw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Hn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Hn(a.result),c.oldVersion,c.newVersion,Hn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Fw=["get","getKey","getAll","getAllKeys","count"],Uw=["put","add","delete","clear"],il=new Map;function ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Uw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return il.set(e,i),i}Ow(t=>({...t,get:(e,n,r)=>ed(e,n)||t.get(e,n,r),has:(e,n)=>!!ed(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",td="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new _c("@firebase/app"),$w="@firebase/app-compat",qw="@firebase/analytics-compat",Hw="@firebase/analytics",Ww="@firebase/app-check-compat",Kw="@firebase/app-check",zw="@firebase/auth",Gw="@firebase/auth-compat",Qw="@firebase/database",Jw="@firebase/data-connect",Yw="@firebase/database-compat",Xw="@firebase/functions",Zw="@firebase/functions-compat",eT="@firebase/installations",tT="@firebase/installations-compat",nT="@firebase/messaging",rT="@firebase/messaging-compat",sT="@firebase/performance",iT="@firebase/performance-compat",oT="@firebase/remote-config",aT="@firebase/remote-config-compat",lT="@firebase/storage",cT="@firebase/storage-compat",uT="@firebase/firestore",hT="@firebase/vertexai-preview",dT="@firebase/firestore-compat",fT="firebase",pT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="[DEFAULT]",mT={[Cl]:"fire-core",[$w]:"fire-core-compat",[Hw]:"fire-analytics",[qw]:"fire-analytics-compat",[Kw]:"fire-app-check",[Ww]:"fire-app-check-compat",[zw]:"fire-auth",[Gw]:"fire-auth-compat",[Qw]:"fire-rtdb",[Jw]:"fire-data-connect",[Yw]:"fire-rtdb-compat",[Xw]:"fire-fn",[Zw]:"fire-fn-compat",[eT]:"fire-iid",[tT]:"fire-iid-compat",[nT]:"fire-fcm",[rT]:"fire-fcm-compat",[sT]:"fire-perf",[iT]:"fire-perf-compat",[oT]:"fire-rc",[aT]:"fire-rc-compat",[lT]:"fire-gcs",[cT]:"fire-gcs-compat",[uT]:"fire-fst",[dT]:"fire-fst-compat",[hT]:"fire-vertex","fire-js":"fire-js",[fT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map,gT=new Map,xl=new Map;function nd(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(xl.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of Co.values())nd(n,t);for(const n of gT.values())nd(n,t);return!0}function vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Ti("app","Firebase",_T);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=pT;function jp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=Lp()),!n)throw Wn.create("no-options");const i=Co.get(s);if(i){if(Po(n,i.options)&&Po(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const a=new Aw(s);for(const c of xl.values())a.addComponent(c);const l=new yT(n,r,a);return Co.set(s,l),l}function $p(t=kl){const e=Co.get(t);if(!e&&t===kl&&Lp())return jp();if(!e)throw Wn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let s=(r=mT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}rs(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebase-heartbeat-database",ET=1,li="firebase-heartbeat-store";let ol=null;function qp(){return ol||(ol=Lw(vT,ET,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(li)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),ol}async function wT(t){try{const n=(await qp()).transaction(li),r=await n.objectStore(li).get(Hp(t));return await n.done,r}catch(e){if(e instanceof Sn)Tn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function rd(t,e){try{const r=(await qp()).transaction(li,"readwrite");await r.objectStore(li).put(e,Hp(t)),await r.done}catch(n){if(n instanceof Sn)Tn.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Hp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=1024,IT=30*24*60*60*1e3;class AT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=IT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sd(),{heartbeatsToSend:r,unsentEntries:s}=bT(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function sd(){return new Date().toISOString().substring(0,10)}function bT(t,e=TT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),id(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),id(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dw()?fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function id(t){return So(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){rs(new yr("platform-logger",e=>new Bw(e),"PRIVATE")),rs(new yr("heartbeat",e=>new AT(e),"PRIVATE")),Kn(Cl,td,t),Kn(Cl,td,"esm2017"),Kn("fire-js","")}ST("");function Ec(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PT=Wp,Kp=new Ti("auth","Firebase",Wp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new _c("@firebase/auth");function CT(t,...e){ko.logLevel<=ge.WARN&&ko.warn(`Auth (${ds}): ${t}`,...e)}function uo(t,...e){ko.logLevel<=ge.ERROR&&ko.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw wc(t,...e)}function tn(t,...e){return wc(t,...e)}function zp(t,e,n){const r=Object.assign(Object.assign({},PT()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kp.create(t,...e)}function oe(t,e,...n){if(!t)throw wc(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function In(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kT(){return od()==="http:"||od()==="https:"}function od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kT()||lw()||"connection"in navigator)?navigator.onLine:!0}function VT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=iw()||cw()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new Ai(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return Qp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ii(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return aw()||(h.referrerPolicy="no-referrer"),Gp.fetch()(Jp(t,t.config.apiHost,n,l),h)})}async function Qp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DT),e);try{const s=new MT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw to(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw to(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw to(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zp(t,f,h);zt(t,f)}}catch(s){if(s instanceof Sn)throw s;zt(t,"network-request-failed",{message:String(s)})}}async function bi(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Jp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Tc(t.config,s):`${t.config.apiScheme}://${s}`}function NT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),OT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function ad(t){return t!==void 0&&t.enterprise!==void 0}class LT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function FT(t,e){return nr(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function Yp(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BT(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Ic(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qs(al(s.auth_time)),issuedAtTime:Qs(al(s.iat)),expirationTime:Qs(al(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function al(t){return Number(t)*1e3}function Ic(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Np(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ld(t){const e=Ic(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&jT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ci(t,Yp(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xp(i.providerUserInfo):[],l=HT(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Dl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function qT(t){const e=rt(t);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xp(t){return t.map(e=>{var{providerId:n}=e,r=Ec(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e){const n=await Qp(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Jp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Gp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KT(t,e){return nr(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=ld(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Qr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $T(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BT(this,e)}reload(){return qT(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await ci(this,UT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:z,isAnonymous:de,providerData:fe,stsTokenManager:I}=n;oe(q&&I,e,"internal-error");const y=Qr.fromJSON(this.name,I);oe(typeof q=="string",e,"internal-error"),Nn(p,e.name),Nn(g,e.name),oe(typeof z=="boolean",e,"internal-error"),oe(typeof de=="boolean",e,"internal-error"),Nn(E,e.name),Nn(C,e.name),Nn(D,e.name),Nn(k,e.name),Nn(V,e.name),Nn(M,e.name);const T=new gn({uid:q,auth:e,email:g,emailVerified:z,displayName:p,isAnonymous:de,photoURL:C,phoneNumber:E,tenantId:D,stsTokenManager:y,createdAt:V,lastLoginAt:M});return fe&&Array.isArray(fe)&&(T.providerData=fe.map(A=>Object.assign({},A))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Xp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qr;l.updateFromIdToken(r);const c=new gn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new Map;function _n(t){In(t instanceof Function,"Expected a class definition");let e=cd.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zp.type="NONE";const ud=Zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(_n(ud),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(ud);const a=ho(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const p=gn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(em(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(im(e))return"Blackberry";if(om(e))return"Webos";if(tm(e))return"Safari";if((e.includes("chrome/")||nm(e))&&!e.includes("edge/"))return"Chrome";if(sm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function em(t=gt()){return/firefox\//i.test(t)}function tm(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nm(t=gt()){return/crios\//i.test(t)}function rm(t=gt()){return/iemobile/i.test(t)}function sm(t=gt()){return/android/i.test(t)}function im(t=gt()){return/blackberry/i.test(t)}function om(t=gt()){return/webos/i.test(t)}function Ac(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zT(t=gt()){var e;return Ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GT(){return uw()&&document.documentMode===10}function am(t=gt()){return Ac(t)||sm(t)||om(t)||im(t)||/windows phone/i.test(t)||rm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e=[]){let n;switch(t){case"Browser":n=hd(gt());break;case"Worker":n=`${hd(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e={}){return nr(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=6;class XT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:YT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dd(this),this.idTokenSubscription=new dd(this),this.beforeStateQueue=new QT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yp(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(vn(this));const n=e?rt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JT(this),n=new XT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function br(t){return rt(t)}class dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=yw(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(t){aa=t}function cm(t){return aa.loadJS(t)}function tI(){return aa.recaptchaEnterpriseScript}function nI(){return aa.gapiScript}function rI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sI="recaptcha-enterprise",iI="NO_RECAPTCHA";class oI{constructor(e){this.type=sI,this.auth=br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{FT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new LT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;ad(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(iI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&ad(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=tI();c.length!==0&&(c+=l),cm(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function fd(t,e,n,r=!1){const s=new oI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ol(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await fd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await fd(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t,e){const n=vc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Po(i,e??{}))return s;zt(s,"already-initialized")}return n.initialize({options:e})}function lI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cI(t,e,n){const r=br(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=um(e),{host:a,port:l}=uI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),hI()}function um(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uI(t){const e=um(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:pd(a)}}}function pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function dI(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function mI(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends bc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,n,"signInWithPassword",fI);case"emailLink":return pI(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,r,"signUpPassword",dI);case"emailLink":return mI(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="http://localhost";class vr extends bc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ec(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yI(t){const e=Os(Ns(t)).link,n=e?Os(Ns(e)).deep_link_id:null,r=Os(Ns(t)).deep_link_id;return(r?Os(Ns(r)).link:null)||r||n||e||t}class Rc{constructor(e){var n,r,s,i,a,l;const c=Os(Ns(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=_I((s=c.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=yI(e);try{return new Rc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rc.parseLink(n);return oe(r,"argument-error"),ui._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends hm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ri{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Ri{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ri{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e){return bi(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),a=md(r);return new Er({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=md(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends Sn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vo(e,n,r,s)}}function dm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,i,e,r):i})}async function EI(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(vn(r));const s="reauthenticate";try{const i=await ci(t,dm(r,s,e,t),n);oe(i.idToken,r,"internal-error");const a=Ic(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(t.uid===l,r,"user-mismatch"),Er._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(t,e,n=!1){if(Zt(t.app))return Promise.reject(vn(t));const r="signIn",s=await dm(t,r,e),i=await Er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function TI(t,e){return fm(br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t){const e=br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function II(t,e,n){if(Zt(t.app))return Promise.reject(vn(t));const r=br(t),a=await Ol(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&pm(t),c}),l=await Er._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function AI(t,e,n){return Zt(t.app)?Promise.reject(vn(t)):TI(rt(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pm(t),r})}function bI(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function RI(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function mm(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function SI(t){return rt(t).signOut()}const Do="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=1e3,CI=10;class _m extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);GT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_m.type="LOCAL";const kI=_m;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ym.type="SESSION";const vm=ym;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await xI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Sc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function DI(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function OI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MI(){return Em()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="firebaseLocalStorageDb",LI=1,Oo="firebaseLocalStorage",Tm="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ca(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function FI(){const t=indexedDB.deleteDatabase(wm);return new Si(t).toPromise()}function Nl(){const t=indexedDB.open(wm,LI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oo,{keyPath:Tm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await FI(),e(await Nl()))})})}async function gd(t,e,n){const r=ca(t,!0).put({[Tm]:e,value:n});return new Si(r).toPromise()}async function UI(t,e){const n=ca(t,!1).get(e),r=await new Si(n).toPromise();return r===void 0?null:r.value}function _d(t,e){const n=ca(t,!0).delete(e);return new Si(n).toPromise()}const BI=800,jI=3;class Im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Em()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OI(),!this.activeServiceWorker)return;this.sender=new VI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await gd(e,Do,"1"),await _d(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_d(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ca(s,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Im.type="LOCAL";const $I=Im;new Ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e){return e?_n(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends bc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HI(t){return fm(t.auth,new Pc(t),t.bypassAuthState)}function WI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),wI(n,new Pc(t),t.bypassAuthState)}async function KI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),EI(n,new Pc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HI;case"linkViaPopup":case"linkViaRedirect":return KI;case"reauthViaPopup":case"reauthViaRedirect":return WI;default:zt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new Ai(2e3,1e4);class $r extends Am{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zI.get())};e()}}$r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="pendingRedirect",fo=new Map;class QI extends Am{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await JI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JI(t,e){const n=ZI(e),r=XI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YI(t,e){fo.set(t._key(),e)}function XI(t){return _n(t._redirectPersistence)}function ZI(t){return ho(GI,t.config.apiKey,t.name)}async function e0(t,e,n=!1){if(Zt(t.app))return Promise.reject(vn(t));const r=br(t),s=qI(r,e),a=await new QI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=10*60*1e3;class n0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t0&&this.cachedEventUids.clear(),this.cachedEventUids.has(yd(e))}saveEventToCache(e){this.cachedEventUids.add(yd(e)),this.lastProcessedEventTime=Date.now()}}function yd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o0=/^https?/;async function a0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await s0(t);for(const n of e)try{if(l0(n))return}catch{}zt(t,"unauthorized-domain")}function l0(t){const e=Vl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!o0.test(n))return!1;if(i0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new Ai(3e4,6e4);function vd(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function u0(t){return new Promise((e,n)=>{var r,s,i;function a(){vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vd(),n(tn(t,"network-request-failed"))},timeout:c0.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)a();else{const l=rI("iframefcb");return nn()[l]=()=>{gapi.load?a():n(tn(t,"network-request-failed"))},cm(`${nI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw po=null,e})}let po=null;function h0(t){return po=po||u0(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Ai(5e3,15e3),f0="__/auth/iframe",p0="emulator/auth/iframe",m0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _0(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tc(e,p0):`https://${t.config.authDomain}/${f0}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=g0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function y0(t){const e=await h0(t),n=nn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:_0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{i(a)},d0.get());function c(){nn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E0=500,w0=600,T0="_blank",I0="http://localhost";class Ed{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A0(t,e,n,r=E0,s=w0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},v0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=gt().toLowerCase();n&&(l=nm(h)?T0:n),em(h)&&(e=e||I0,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(zT(h)&&l!=="_self")return b0(e||"",l),new Ed(null);const p=window.open(e||"",l,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new Ed(p)}function b0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="__/auth/handler",S0="emulator/auth/handler",P0=encodeURIComponent("fac");async function wd(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof hm){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",_w(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Ri){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${P0}=${encodeURIComponent(c)}`:"";return`${C0(t)}?${Ii(l).slice(1)}${h}`}function C0({config:t}){return t.emulator?Tc(t,S0):`https://${t.authDomain}/${R0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="webStorageSupport";class k0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vm,this._completeRedirectFn=e0,this._overrideRedirectResult=YI}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await wd(e,n,r,Vl(),s);return A0(e,a,Sc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wd(e,n,r,Vl(),s);return DI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await y0(e),r=new n0(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ll,{type:ll},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ll];a!==void 0&&n(!!a),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return am()||tm()||Ac()}}const x0=k0;var Td="@firebase/auth",Id="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O0(t){rs(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lm(t)},h=new ZT(r,s,i,c);return lI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new yr("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new V0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Td,Id,D0(t)),Kn(Td,Id,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=5*60,M0=Fp("authIdTokenMaxAge")||N0;let Ad=null;const L0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>M0)return;const s=n==null?void 0:n.token;Ad!==s&&(Ad=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function F0(t=$p()){const e=vc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aI(t,{popupRedirectResolver:x0,persistence:[$I,kI,vm]}),r=Fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=L0(i.toString());RI(n,a,()=>a(n.currentUser)),bI(n,l=>a(l))}}const s=Mp("auth");return s&&cI(n,`http://${s}`),n}function U0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",U0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O0("Browser");var B0="firebase",j0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(B0,j0,"app");var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,Rm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,b,R){for(var w=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)w[_t-2]=arguments[_t];return y.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],b=I.g[2];var R=I.g[3],w=y+(R^T&(b^R))+A[0]+3614090360&4294967295;y=T+(w<<7&4294967295|w>>>25),w=R+(b^y&(T^b))+A[1]+3905402710&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(T^R&(y^T))+A[2]+606105819&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(y^b&(R^y))+A[3]+3250441966&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(R^T&(b^R))+A[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=R+(b^y&(T^b))+A[5]+1200080426&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(T^R&(y^T))+A[6]+2821735955&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(y^b&(R^y))+A[7]+4249261313&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(R^T&(b^R))+A[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=R+(b^y&(T^b))+A[9]+2336552879&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(T^R&(y^T))+A[10]+4294925233&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(y^b&(R^y))+A[11]+2304563134&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(R^T&(b^R))+A[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=R+(b^y&(T^b))+A[13]+4254626195&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(T^R&(y^T))+A[14]+2792965006&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(y^b&(R^y))+A[15]+1236535329&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(b^R&(T^b))+A[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(y^T))+A[6]+3225465664&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(R^y))+A[11]+643717713&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(b^R))+A[0]+3921069994&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^R&(T^b))+A[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(y^T))+A[10]+38016083&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(R^y))+A[15]+3634488961&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(b^R))+A[4]+3889429448&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^R&(T^b))+A[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(y^T))+A[14]+3275163606&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(R^y))+A[3]+4107603335&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(b^R))+A[8]+1163531501&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^R&(T^b))+A[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(y^T))+A[2]+4243563512&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(R^y))+A[7]+1735328473&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(b^R))+A[12]+2368359562&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(T^b^R)+A[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^b)+A[8]+2272392833&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^T)+A[11]+1839030562&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^y)+A[14]+4259657740&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^R)+A[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^b)+A[4]+1272893353&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^T)+A[7]+4139469664&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^y)+A[10]+3200236656&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^R)+A[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^b)+A[0]+3936430074&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^T)+A[3]+3572445317&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^y)+A[6]+76029189&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^R)+A[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^b)+A[12]+3873151461&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^T)+A[15]+530742520&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^y)+A[2]+3299628645&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(b^(T|~R))+A[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~b))+A[7]+1126891415&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~T))+A[14]+2878612391&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~y))+A[5]+4237533241&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~R))+A[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~b))+A[3]+2399980690&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~T))+A[10]+4293915773&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~y))+A[1]+2240044497&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~R))+A[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~b))+A[15]+4264355552&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~T))+A[6]+2734768916&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~y))+A[13]+1309151649&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~R))+A[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~b))+A[11]+3174756917&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~T))+A[2]+718787259&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=T;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<y;)if(A[b++]=I.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<y;)if(A[b++]=I[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function i(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function a(I,y){this.h=y;for(var T=[],A=!0,b=I.length-1;0<=b;b--){var R=I[b]|0;A&&R==y||(T[b]=R,A=!1)}this.g=T}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(h(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new a(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return k(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var R=Math.min(8,I.length-b),w=parseInt(I.substring(b,b+R),y);8>R?(R=h(Math.pow(y,R)),A=A.j(R).add(h(w))):(A=A.j(T),A=A.add(h(w)))}return A}var p=c(0),g=c(1),E=c(16777216);t=a.prototype,t.m=function(){if(D(this))return-k(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(D(this))return"-"+k(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,A="";;){var b=z(T,y).g;T=V(T,b.j(y));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=b,C(T))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function D(I){return I.h==-1}t.l=function(I){return I=V(this,I),D(I)?-1:C(I)?0:1};function k(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new a(T,~I.h).add(g)}t.abs=function(){return D(this)?k(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,b=0;b<=y;b++){var R=A+(this.i(b)&65535)+(I.i(b)&65535),w=(R>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=w>>>16,R&=65535,w&=65535,T[b]=w<<16|R}return new a(T,T[T.length-1]&-2147483648?-1:0)};function V(I,y){return I.add(k(y))}t.j=function(I){if(C(this)||C(I))return p;if(D(this))return D(I)?k(this).j(k(I)):k(k(this).j(I));if(D(I))return k(this.j(k(I)));if(0>this.l(E)&&0>I.l(E))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var R=this.i(A)>>>16,w=this.i(A)&65535,_t=I.i(b)>>>16,Dt=I.i(b)&65535;T[2*A+2*b]+=w*Dt,M(T,2*A+2*b),T[2*A+2*b+1]+=R*Dt,M(T,2*A+2*b+1),T[2*A+2*b+1]+=w*_t,M(T,2*A+2*b+1),T[2*A+2*b+2]+=R*_t,M(T,2*A+2*b+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new a(T,0)};function M(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function q(I,y){this.g=I,this.h=y}function z(I,y){if(C(y))throw Error("division by zero");if(C(I))return new q(p,p);if(D(I))return y=z(k(I),y),new q(k(y.g),k(y.h));if(D(y))return y=z(I,k(y)),new q(k(y.g),y.h);if(30<I.g.length){if(D(I)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(I);)T=de(T),A=de(A);var b=fe(T,1),R=fe(A,1);for(A=fe(A,2),T=fe(T,2);!C(A);){var w=R.add(A);0>=w.l(I)&&(b=b.add(T),R=w),A=fe(A,1),T=fe(T,1)}return y=V(I,b.j(y)),new q(b,y)}for(b=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(T),w=R.j(y);D(w)||0<w.l(I);)T-=A,R=h(T),w=R.j(y);C(R)&&(R=g),b=b.add(R),I=V(I,w)}return new q(b,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new a(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new a(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new a(T,this.h^I.h)};function de(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(T,I.h)}function fe(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,b=[],R=0;R<A;R++)b[R]=0<y?I.i(R+T)>>>y|I.i(R+T+1)<<32-y:I.i(R+T);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Rm=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,mr=a}).apply(typeof bd<"u"?bd:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sm,Ms,Pm,mo,Ml,Cm,km,xm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in d))break e;d=d[S]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,S={next:function(){if(!m&&d<o.length){var x=d++;return{value:u(x,o[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,S,x){for(var K=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)K[Ce-2]=arguments[Ce];return u.prototype[S].apply(m,K)}}function D(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function k(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const S=o.length||0,x=m.length||0;o.length=S+x;for(let K=0;K<x;K++)o[S+K]=m[K]}else o.push(m)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var de=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function fe(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function I(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)o[d]=m[d];for(let x=0;x<T.length;x++)d=T[x],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function w(){var o=bt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class _t{constructor(){this.h=this.g=null}add(u,d){const m=Dt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Dt=new V(()=>new qe,o=>o.reset());class qe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,pe=!1,bt=new _t,jt=()=>{const o=l.Promise.resolve(void 0);_e=()=>{o.then(Ot)}};var Ot=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){R(d)}var u=Dt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Pn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Qt(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(de){e:{try{z(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Tt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qt.aa.h.call(this)}}C(Qt,Me);var Tt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,d,m,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=S,this.key=++Y,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o){this.src=o,this.g={},this.h=0}ye.prototype.add=function(o,u,d,m,S){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var K=_(o,u,m,S);return-1<K?(u=o[K],d||(u.fa=!1)):(u=new Q(u,this.src,x,!!m,S),u.fa=d,o.push(u)),u};function Pe(o,u){var d=u.type;if(d in o.g){var m=o.g[d],S=Array.prototype.indexOf.call(m,u,void 0),x;(x=0<=S)&&Array.prototype.splice.call(m,S,1),x&&(X(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _(o,u,d,m){for(var S=0;S<o.length;++S){var x=o[S];if(!x.da&&x.listener==u&&x.capture==!!d&&x.ha==m)return S}return-1}var v="closure_lm_"+(1e6*Math.random()|0),P={};function L(o,u,d,m,S){if(Array.isArray(u)){for(var x=0;x<u.length;x++)L(o,u[x],d,m,S);return null}return d=te(d),o&&o[N]?o.K(u,d,h(m)?!!m.capture:!!m,S):O(o,u,d,!1,m,S)}function O(o,u,d,m,S,x){if(!u)throw Error("Invalid event type");var K=h(S)?!!S.capture:!!S,Ce=re(o);if(Ce||(o[v]=Ce=new ye(o)),d=Ce.add(u,d,m,K,x),d.proxy)return d;if(m=B(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Pn||(S=K),S===void 0&&(S=!1),o.addEventListener(u.toString(),m,S);else if(o.attachEvent)o.attachEvent(H(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function B(){function o(d){return u.call(o.src,o.listener,d)}const u=j;return o}function G(o,u,d,m,S){if(Array.isArray(u))for(var x=0;x<u.length;x++)G(o,u[x],d,m,S);else m=h(m)?!!m.capture:!!m,d=te(d),o&&o[N]?(o=o.i,u=String(u).toString(),u in o.g&&(x=o.g[u],d=_(x,d,m,S),-1<d&&(X(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[u],o.h--)))):o&&(o=re(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,d,m,S)),(d=-1<o?u[o]:null)&&W(d))}function W(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[N])Pe(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(H(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=re(u))?(Pe(d,o),d.h==0&&(d.src=null,u[v]=null)):X(o)}}}function H(o){return o in P?P[o]:P[o]="on"+o}function j(o,u){if(o.da)o=!0;else{u=new Qt(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&W(o),o=d.call(m,u)}return o}function re(o){return o=o[v],o instanceof ye?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){Ne.call(this),this.i=new ye(this),this.M=this,this.F=null}C(Z,Ne),Z.prototype[N]=!0,Z.prototype.removeEventListener=function(o,u,d,m){G(this,o,u,d,m)};function ie(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var S=u;u=new Me(m,o),A(u,S)}if(S=!0,d)for(var x=d.length-1;0<=x;x--){var K=u.g=d[x];S=Ie(K,m,!0,u)&&S}if(K=u.g=o,S=Ie(K,m,!0,u)&&S,S=Ie(K,m,!1,u)&&S,d)for(x=0;x<d.length;x++)K=u.g=d[x],S=Ie(K,m,!1,u)&&S}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)X(d[m]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},Z.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function Ie(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,x=0;x<u.length;++x){var K=u[x];if(K&&!K.da&&K.capture==d){var Ce=K.listener,Xe=K.ha||K.src;K.fa&&Pe(o.i,K),S=Ce.call(Xe,m)!==!1&&S}}return S&&!m.defaultPrevented}function Ee(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function it(o){o.g=Ee(()=>{o.g=null,o.i&&(o.i=!1,it(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Qe extends Ne{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(o){Ne.call(this),this.h=o,this.g={}}C(Ye,Ne);var ot=[];function Cn(o){fe(o.g,function(u,d){this.g.hasOwnProperty(d)&&W(u)},o),o.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),Cn(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cr=l.JSON.stringify,yt=l.JSON.parse,Nt=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function kr(){}kr.prototype.h=null;function lu(o){return o.h||(o.h=o.i())}function cu(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sa(){Me.call(this,"d")}C(Sa,Me);function Pa(){Me.call(this,"c")}C(Pa,Me);var sr={},uu=null;function Oi(){return uu=uu||new Z}sr.La="serverreachability";function hu(o){Me.call(this,sr.La,o)}C(hu,Me);function ys(o){const u=Oi();ie(u,new hu(u))}sr.STAT_EVENT="statevent";function du(o,u){Me.call(this,sr.STAT_EVENT,o),this.stat=u}C(du,Me);function vt(o){const u=Oi();ie(u,new du(u,o))}sr.Ma="timingevent";function fu(o,u){Me.call(this,sr.Ma,o),this.size=u}C(fu,Me);function vs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function Yg(o,u,d,m,S,x){o.info(function(){if(o.g)if(x)for(var K="",Ce=x.split("&"),Xe=0;Xe<Ce.length;Xe++){var we=Ce[Xe].split("=");if(1<we.length){var at=we[0];we=we[1];var lt=at.split("_");K=2<=lt.length&&lt[1]=="type"?K+(at+"="+we+"&"):K+(at+"=redacted&")}}else K=null;else K=x;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+d+`
`+K})}function Xg(o,u,d,m,S,x,K){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+d+`
`+x+" "+K})}function xr(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+e_(o,d)+(m?" "+m:"")})}function Zg(o,u){o.info(function(){return"TIMEOUT: "+u})}Es.prototype.info=function(){};function e_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var x=S[0];if(x!="noop"&&x!="stop"&&x!="close")for(var K=1;K<S.length;K++)S[K]=""}}}}return Cr(d)}catch{return u}}var Ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function Mi(){}C(Mi,kr),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Ca=new Mi;function kn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var gu={},ka={};function xa(o,u,d){o.L=1,o.v=Bi(cn(u)),o.m=d,o.P=!0,_u(o,null)}function _u(o,u){o.F=Date.now(),Li(o),o.A=cn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),xu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new mu,o.g=Qu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Qe(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(ot[0]=S.toString()),S=ot);for(var x=0;x<S.length;x++){var K=L(d,S[x],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ys(),Yg(o.i,o.u,o.A,o.l,o.R,o.m)}kn.prototype.ca=function(o){o=o.target;const u=this.M;u&&un(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)e:{const lt=un(this.g);var u=this.g.Ba();const Or=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Fu(this.g)))){this.J||lt!=4||u==7||(u==8||0>=Or?ys(3):ys(2)),Va(this);var d=this.g.Z();this.X=d;t:if(yu(this)){var m=Fu(this.g);o="";var S=m.length,x=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),ws(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(x&&u==S-1)});m.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,Xg(this.i,this.u,this.A,this.l,this.R,lt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Xe=this.g;if((Ce=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ce)){var we=Ce;break t}}we=null}if(d=we)xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Da(this,d);else{this.o=!1,this.s=3,vt(12),ir(this),ws(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<K.length;)if($t=t_(this,K),$t==ka){lt==4&&(this.s=4,vt(14),d=!1),xr(this.i,this.l,null,"[Incomplete Response]");break}else if($t==gu){this.s=4,vt(15),xr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else xr(this.i,this.l,$t,null),Da(this,$t);if(yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||K.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)xr(this.i,this.l,K,"[Invalid Chunked Response]"),ir(this),ws(this);else if(0<K.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Ua(at),at.M=!0,vt(11))}}else xr(this.i,this.l,K,null),Da(this,K);lt==4&&ir(this),this.o&&!this.J&&(lt==4?Wu(this.j,this):(this.o=!1,Li(this)))}else y_(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ir(this),ws(this)}}}catch{}finally{}};function yu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function t_(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?ka:(d=Number(u.substring(d,m)),isNaN(d)?gu:(m+=1,m+d>u.length?ka:(u=u.slice(m,m+d),o.C=m+d,u)))}kn.prototype.cancel=function(){this.J=!0,ir(this)};function Li(o){o.S=Date.now()+o.I,vu(o,o.I)}function vu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=vs(g(o.ba,o),u)}function Va(o){o.B&&(l.clearTimeout(o.B),o.B=null)}kn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Zg(this.i,this.A),this.L!=2&&(ys(),vt(17)),ir(this),this.s=2,ws(this)):vu(this,this.S-o)};function ws(o){o.j.G==0||o.J||Wu(o.j,o)}function ir(o){Va(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Cn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Da(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Oa(d.h,o))){if(!o.K&&Oa(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ki(d),Hi(d);else break e;Fa(d),vt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=vs(g(d.Za,d),6e3));if(1>=Tu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ar(d,11)}else if((o.K||d.g==o)&&Ki(d),!M(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let we=S[u];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const at=we[3];at!=null&&(d.la=at,d.j.info("VER="+d.la));const lt=we[4];lt!=null&&(d.Aa=lt,d.j.info("SVER="+d.Aa));const Or=we[5];Or!=null&&typeof Or=="number"&&0<Or&&(m=1.5*Or,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const $t=o.g;if($t){const Gi=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var x=m.h;x.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Na(x,x.h),x.h=null))}if(m.D){const Ba=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(m.ya=Ba,Ve(m.I,m.D,Ba))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=o;if(m.qa=Gu(m,m.J?m.ia:null,m.W),K.K){Iu(m.h,K);var Ce=K,Xe=m.L;Xe&&(Ce.I=Xe),Ce.B&&(Va(Ce),Li(Ce)),m.g=K}else qu(m);0<d.i.length&&Wi(d)}else we[0]!="stop"&&we[0]!="close"||ar(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ar(d,7):La(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}ys(4)}catch{}}var n_=class{constructor(o,u){this.g=o,this.map=u}};function Eu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Tu(o){return o.h?1:o.g?o.g.size:0}function Oa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Na(o,u){o.g?o.g.add(u):o.h=u}function Iu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Eu.prototype.cancel=function(){if(this.i=Au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Au(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return D(o.i)}function r_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function s_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function bu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=s_(o),m=r_(o),S=m.length,x=0;x<S;x++)u.call(void 0,m[x],d&&d[x],o)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function i_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),S=null;if(0<=m){var x=o[d].substring(0,m);S=o[d].substring(m+1)}else x=o[d];u(x,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function or(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof or){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var u=o.i,d=new As;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Su(this,d),this.m=o.m}else o&&(u=String(o).match(Ru))?(this.h=!1,Fi(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),Ui(this,u[4]),this.l=Ts(u[5]||"",!0),Su(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.h=!1,this.i=new As(null,this.h))}or.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Is(u,Pu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Is(u,Pu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Is(d,d.charAt(0)=="/"?l_:a_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Is(d,u_)),o.join("")};function cn(o){return new or(o)}function Fi(o,u,d){o.j=d?Ts(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Su(o,u,d){u instanceof As?(o.i=u,h_(o.i,o.h)):(d||(u=Is(u,c_)),o.i=new As(u,o.h))}function Ve(o,u,d){o.i.set(u,d)}function Bi(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ts(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Is(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,o_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function o_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Pu=/[#\/\?@]/g,a_=/[#\?:]/g,l_=/[#\?]/g,c_=/[#\?@]/g,u_=/#/g;function As(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function xn(o){o.g||(o.g=new Map,o.h=0,o.i&&i_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=As.prototype,t.add=function(o,u){xn(this),this.i=null,o=Vr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Cu(o,u){xn(o),u=Vr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ku(o,u){return xn(o),u=Vr(o,u),o.g.has(u)}t.forEach=function(o,u){xn(this),this.g.forEach(function(d,m){d.forEach(function(S){o.call(u,S,m,this)},this)},this)},t.na=function(){xn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const S=o[m];for(let x=0;x<S.length;x++)d.push(u[m])}return d},t.V=function(o){xn(this);let u=[];if(typeof o=="string")ku(this,o)&&(u=u.concat(this.g.get(Vr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return xn(this),this.i=null,o=Vr(this,o),ku(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function xu(o,u,d){Cu(o,u),0<d.length&&(o.i=null,o.g.set(Vr(o,u),D(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const x=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var S=x;K[m]!==""&&(S+="="+encodeURIComponent(String(K[m]))),o.push(S)}}return this.i=o.join("&")};function Vr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function h_(o,u){u&&!o.j&&(xn(o),o.i=null,o.g.forEach(function(d,m){var S=m.toLowerCase();m!=S&&(Cu(this,m),xu(this,S,d))},o)),o.j=u}function d_(o,u){const d=new Es;if(l.Image){const m=new Image;m.onload=E(Vn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=E(Vn,d,"TestLoadImage: error",!1,u,m),m.onabort=E(Vn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(Vn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function f_(o,u){const d=new Es,m=new AbortController,S=setTimeout(()=>{m.abort(),Vn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(x=>{clearTimeout(S),x.ok?Vn(d,"TestPingServer: ok",!0,u):Vn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Vn(d,"TestPingServer: error",!1,u)})}function Vn(o,u,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function p_(){this.g=new Nt}function m_(o,u,d){const m=d||"";try{bu(o,function(S,x){let K=S;h(S)&&(K=Cr(S)),u.push(m+x+"="+encodeURIComponent(K))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ji,kr),ji.prototype.g=function(){return new $i(this.l,this.j)},ji.prototype.i=function(o){return function(){return o}}({});function $i(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C($i,Z),t=$i.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Rs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?bs(this):Rs(this),this.readyState==3&&Vu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,bs(this))},t.Qa=function(o){this.g&&(this.response=o,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Rs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Du(o){let u="";return fe(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ma(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Du(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ve(o,u,d))}function Fe(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Fe,Z);var g_=/^https?$/i,__=["POST","PUT"];t=Fe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?lu(this.o):lu(Ca),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(x){Ou(this,x);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(__,u,void 0))||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,K]of d)this.g.setRequestHeader(x,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lu(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Ou(this,x)}};function Ou(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Nu(o),qi(o)}function Nu(o){o.A||(o.A=!0,ie(o,"complete"),ie(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ie(this,"complete"),ie(this,"abort"),qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mu(this):this.bb())},t.bb=function(){Mu(this)};function Mu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||un(o)!=4||o.Z()!=2)){if(o.u&&un(o)==4)Ee(o.Ea,0,o);else if(ie(o,"readystatechange"),un(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var S=String(o.D).match(Ru)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!g_.test(S?S.toLowerCase():"")}d=m}if(d)ie(o,"complete"),ie(o,"success");else{o.m=6;try{var x=2<un(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Nu(o)}}finally{qi(o)}}}}function qi(o,u){if(o.g){Lu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ie(o,"ready");try{d.onreadystatechange=m}catch{}}}function Lu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function un(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),yt(u)}};function Fu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function y_(o){const u={};o=(o.g&&2<=un(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(M(o[m]))continue;var d=b(o[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=u[S]||[];u[S]=x,x.push(d)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Uu(o){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,o),this.cb=Ss("retryDelaySeedMs",1e4,o),this.Wa=Ss("forwardChannelMaxRetries",2,o),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Eu(o&&o.concurrentRequestLimit),this.Da=new p_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,m){vt(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Gu(this,null,this.W),Wi(this)};function La(o){if(Bu(o),o.G==3){var u=o.U++,d=cn(o.I);if(Ve(d,"SID",o.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Ps(o,d),u=new kn(o,o.j,u),u.L=2,u.v=Bi(cn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Qu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}zu(o)}function Hi(o){o.g&&(Ua(o),o.g.cancel(),o.g=null)}function Bu(o){Hi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Wi(o){if(!wu(o.h)&&!o.s){o.s=!0;var u=o.Ga;_e||jt(),pe||(_e(),pe=!0),bt.add(u,o),o.B=0}}function v_(o,u){return Tu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=vs(g(o.Ga,o,u),Ku(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new kn(this,this.j,o);let x=this.o;if(this.S&&(x?(x=y(x),A(x,this.S)):x=this.S),this.m!==null||this.O||(S.H=x,x=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=$u(this,S,u),d=cn(this.I),Ve(d,"RID",o),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Ps(this,d),x&&(this.O?u="headers="+encodeURIComponent(String(Du(x)))+"&"+u:this.m&&Ma(d,this.m,x)),Na(this.h,S),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),S.T=!0,xa(S,d,null)):xa(S,d,u),this.G=2}}else this.G==3&&(o?ju(this,o):this.i.length==0||wu(this.h)||ju(this))};function ju(o,u){var d;u?d=u.l:d=o.U++;const m=cn(o.I);Ve(m,"SID",o.K),Ve(m,"RID",d),Ve(m,"AID",o.T),Ps(o,m),o.m&&o.o&&Ma(m,o.m,o.o),d=new kn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=$u(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Na(o.h,d),xa(d,m,u)}function Ps(o,u){o.H&&fe(o.H,function(d,m){Ve(u,m,d)}),o.l&&bu({},function(d,m){Ve(u,m,d)})}function $u(o,u,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var S=o.i;let x=-1;for(;;){const K=["count="+d];x==-1?0<d?(x=S[0].g,K.push("ofs="+x)):x=0:K.push("ofs="+x);let Ce=!0;for(let Xe=0;Xe<d;Xe++){let we=S[Xe].g;const at=S[Xe].map;if(we-=x,0>we)x=Math.max(0,S[Xe].g-100),Ce=!1;else try{m_(at,K,"req"+we+"_")}catch{m&&m(at)}}if(Ce){m=K.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function qu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;_e||jt(),pe||(_e(),pe=!0),bt.add(u,o),o.v=0}}function Fa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=vs(g(o.Fa,o),Ku(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=vs(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Hi(this),Hu(this))};function Ua(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Hu(o){o.g=new kn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=cn(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),Ps(o,u),o.m&&o.o&&Ma(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Bi(cn(u)),d.m=null,d.P=!0,_u(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Hi(this),Fa(this),vt(19))};function Ki(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Wu(o,u){var d=null;if(o.g==u){Ki(o),Ua(o),o.g=null;var m=2}else if(Oa(o.h,u))d=u.D,Iu(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;m=Oi(),ie(m,new fu(m,d)),Wi(o)}else qu(o);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&v_(o,u)||m==2&&Fa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:ar(o,5);break;case 4:ar(o,10);break;case 3:ar(o,6);break;default:ar(o,2)}}}function Ku(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function ar(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),m=o.Xa;const S=!m;m=new or(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fi(m,"https"),Bi(m),S?d_(m.toString(),d):f_(m.toString(),d)}else vt(2);o.G=0,o.l&&o.l.sa(u),zu(o),Bu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function zu(o){if(o.G=0,o.ka=[],o.l){const u=Au(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Gu(o,u,d){var m=d instanceof or?cn(d):new or(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ui(m,m.s);else{var S=l.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var x=new or(null);m&&Fi(x,m),u&&(x.g=u),S&&Ui(x,S),d&&(x.l=d),m=x}return d=o.D,u=o.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",o.la),Ps(o,m),m}function Qu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Fe(new ji({eb:d})):new Fe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ju(){}t=Ju.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function zi(){}zi.prototype.g=function(o,u){return new Rt(o,u)};function Rt(o,u){Z.call(this),this.g=new Uu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!M(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Dr(this)}C(Rt,Z),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){La(this.g)},Rt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Cr(o),o=d);u.i.push(new n_(u.Ya++,o)),u.G==3&&Wi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,Rt.aa.N.call(this)};function Yu(o){Sa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(Yu,Sa);function Xu(){Pa.call(this),this.status=1}C(Xu,Pa);function Dr(o){this.g=o}C(Dr,Ju),Dr.prototype.ua=function(){ie(this.g,"a")},Dr.prototype.ta=function(o){ie(this.g,new Yu(o))},Dr.prototype.sa=function(o){ie(this.g,new Xu)},Dr.prototype.ra=function(){ie(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,xm=function(){return new zi},km=function(){return Oi()},Cm=sr,Ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,mo=Ni,pu.COMPLETE="complete",Pm=pu,cu.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Ms=cu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,Sm=Fe}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});const Rd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new _c("@firebase/firestore");function Vs(){return wr.logLevel}function ee(t,...e){if(wr.logLevel<=ge.DEBUG){const n=e.map(Cc);wr.debug(`Firestore (${ps}): ${t}`,...n)}}function An(t,...e){if(wr.logLevel<=ge.ERROR){const n=e.map(Cc);wr.error(`Firestore (${ps}): ${t}`,...n)}}function ss(t,...e){if(wr.logLevel<=ge.WARN){const n=e.map(Cc);wr.warn(`Firestore (${ps}): ${t}`,...n)}}function Cc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function Se(t,e){t||ae()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class q0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class H0{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new Vm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ut(e)}}class W0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class K0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new W0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new z0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Q0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ge(0,0))}static max(){return new ce(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends hi{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const J0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends hi{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return J0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ne(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(De.fromString(e))}static fromName(e){return new se(De.fromString(e).popFirst(5))}static empty(){return new se(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new De(e.slice()))}}function Y0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Qn(s,se.empty(),e)}function X0(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(ce.min(),se.empty(),-1)}static max(){return new Qn(ce.max(),se.empty(),-1)}}function Z0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==eA)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function nA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ci(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kc.oe=-1;function ua(t){return t==null}function No(t){return t===0&&1/t==-1/0}function rA(t){return typeof t=="number"&&Number.isInteger(t)&&!No(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pd(this.data.getIterator())}getIteratorFrom(e){return new Pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new tt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nm("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const sA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=sA.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vc(t){const e=t.mapValue.fields.__previous_value__;return xc(e)?Vc(e):e}function di(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xc(t)?4:aA(t)?9007199254740991:oA(t)?10:11:ae()}function an(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jn(s.timestampValue),l=Jn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=je(s.doubleValue),l=je(i.doubleValue);return a===l?No(a)===No(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Sd(a)!==Sd(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!an(a[c],l[c])))return!1;return!0}(t,e);default:return ae()}}function pi(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=je(i.integerValue||i.doubleValue),c=je(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Cd(t.timestampValue,e.timestampValue);case 4:return Cd(di(t),di(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Tr(i),c=Tr(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Te(l[h],c[h]);if(f!==0)return f}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Te(je(i.latitude),je(a.latitude));return l!==0?l:Te(je(i.longitude),je(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kd(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},g=a.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,D=Te(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:kd(E,C)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===so.mapValue&&a===so.mapValue)return 0;if(i===so.mapValue)return 1;if(a===so.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Te(c[p],f[p]);if(g!==0)return g;const E=os(l[c[p]],h[f[p]]);if(E!==0)return E}return Te(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Cd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Jn(t),r=Jn(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function kd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=os(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function as(t){return Ll(t)}function Ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ll(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ll(n.fields[a])}`;return s+"}"}(t.mapValue):ae()}function Fl(t){return!!t&&"integerValue"in t}function Dc(t){return!!t&&"arrayValue"in t}function xd(t){return!!t&&"nullValue"in t}function Vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function oA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Js(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Js(this.value))}}function Mm(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new et([n]);if(go(r)){const i=Mm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ce.min(),ce.min(),ce.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ce.min(),ce.min(),It.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ce.min(),ce.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.position=e,this.inclusive=n}}function Dd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),n.key):r=os(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Od(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function lA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{}class ze extends Lm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uA(e,n,r):n==="array-contains"?new fA(e,r):n==="in"?new pA(e,r):n==="not-in"?new mA(e,r):n==="array-contains-any"?new gA(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hA(e,r):new dA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Lm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return Fm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fm(t){return t.op==="and"}function Um(t){return cA(t)&&Fm(t)}function cA(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Ul(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+as(t.value);if(Um(t))return t.filters.map(e=>Ul(e)).join(",");{const e=t.filters.map(n=>Ul(n)).join(",");return`${t.op}(${e})`}}function Bm(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Bm(a,s.filters[l]),!0):!1}(t,e):void ae()}function jm(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(jm).join(" ,")+"}"}(t):"Filter"}class uA extends ze{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class hA extends ze{constructor(e,n){super(e,"in",n),this.keys=$m("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dA extends ze{constructor(e,n){super(e,"not-in",n),this.keys=$m("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $m(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class fA extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dc(n)&&pi(n.arrayValue,this.value)}}class pA extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class mA extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class gA extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Nd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new _A(t,e,n,r,s,i,a)}function Oc(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ul(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ue=n}return e.ue}function Nc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Od(t.startAt,e.startAt)&&Od(t.endAt,e.endAt)}function Bl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yA(t,e,n,r,s,i,a,l){return new ha(t,e,n,r,s,i,a,l)}function Mc(t){return new ha(t)}function Md(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vA(t){return t.collectionGroup!==null}function Ys(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new tt(et.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Lo(i,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new Lo(et.keyField(),r))}return e.ce}function rn(t){const e=ue(t);return e.le||(e.le=EA(e,Ys(t))),e.le}function EA(t,e){if(t.limitType==="F")return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)});const n=t.endAt?new Mo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mo(t.startAt.position,t.startAt.inclusive):null;return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jl(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return Nc(rn(t),rn(e))&&t.limitType===e.limitType}function qm(t){return`${Oc(rn(t))}|lt:${t.limitType}`}function Ur(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>jm(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>as(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>as(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function fa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ys(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Dd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ys(r),s)||r.endAt&&!function(a,l,c){const h=Dd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ys(r),s))}(t,e)}function wA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hm(t){return(e,n)=>{let r=!1;for(const s of Ys(t)){const i=TA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function TA(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?os(c,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Om(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=new Le(se.comparator);function bn(){return IA}const Wm=new Le(se.comparator);function Ls(...t){let e=Wm;for(const n of t)e=e.insert(n.key,n);return e}function Km(t){let e=Wm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return Xs()}function zm(){return Xs()}function Xs(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const AA=new Le(se.comparator),bA=new tt(se.comparator);function me(...t){let e=bA;for(const n of t)e=e.add(n);return e}const RA=new tt(Te);function SA(){return RA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function Gm(t){return{integerValue:""+t}}function PA(t,e){return rA(e)?Gm(e):Lc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this._=void 0}}function CA(t,e,n){return t instanceof mi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xc(i)&&(i=Vc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof gi?Jm(t,e):t instanceof _i?Ym(t,e):function(s,i){const a=Qm(s,i),l=Ld(a)+Ld(s.Pe);return Fl(a)&&Fl(s.Pe)?Gm(l):Lc(s.serializer,l)}(t,e)}function kA(t,e,n){return t instanceof gi?Jm(t,e):t instanceof _i?Ym(t,e):n}function Qm(t,e){return t instanceof Fo?function(r){return Fl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mi extends pa{}class gi extends pa{constructor(e){super(),this.elements=e}}function Jm(t,e){const n=Xm(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class _i extends pa{constructor(e){super(),this.elements=e}}function Ym(t,e){let n=Xm(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class Fo extends pa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ld(t){return je(t.integerValue||t.doubleValue)}function Xm(t){return Dc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n){this.field=e,this.transform=n}}function VA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof gi&&s instanceof gi||r instanceof _i&&s instanceof _i?is(r.elements,s.elements,an):r instanceof Fo&&s instanceof Fo?an(r.Pe,s.Pe):r instanceof mi&&s instanceof mi}(t.transform,e.transform)}class DA{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function Zm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fc(t.key,Ut.none()):new ki(t.key,t.data,Ut.none());{const n=t.data,r=It.empty();let s=new tt(et.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new rr(t.key,r,new Vt(s.toArray()),Ut.none())}}function OA(t,e,n){t instanceof ki?function(s,i,a){const l=s.value.clone(),c=Ud(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(s,i,a){if(!_o(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ud(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(eg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof ki?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=i.value.clone(),f=Bd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=Bd(i.fieldTransforms,c,a),f=a.data;return f.setAll(eg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return _o(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function NA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Qm(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Fd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&is(r,s,(i,a)=>VA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ki extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function eg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ud(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,kA(a,l,n[s]))}return r}function Bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,CA(i,a,e))}return r}class Fc extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MA extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Zm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>Fd(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>Fd(n,r))}}class Uc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return AA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Uc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ve;function BA(t){switch(t){default:return ae();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function tg(t){if(t===void 0)return An("GRPC error has no .code"),F.UNKNOWN;switch(t){case He.OK:return F.OK;case He.CANCELLED:return F.CANCELLED;case He.UNKNOWN:return F.UNKNOWN;case He.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case He.INTERNAL:return F.INTERNAL;case He.UNAVAILABLE:return F.UNAVAILABLE;case He.UNAUTHENTICATED:return F.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case He.NOT_FOUND:return F.NOT_FOUND;case He.ALREADY_EXISTS:return F.ALREADY_EXISTS;case He.PERMISSION_DENIED:return F.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case He.ABORTED:return F.ABORTED;case He.OUT_OF_RANGE:return F.OUT_OF_RANGE;case He.UNIMPLEMENTED:return F.UNIMPLEMENTED;case He.DATA_LOSS:return F.DATA_LOSS;default:return ae()}}(ve=He||(He={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new mr([4294967295,4294967295],0);function jd(t){const e=jA().encode(t),n=new Rm;return n.update(e),new Uint8Array(n.digest())}function $d(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mr([n,r],0),new mr([s,i],0)]}class Bc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=mr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(mr.fromNumber(r)));return s.compare($A)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=jd(e),[r,s]=$d(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Bc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=jd(e),[r,s]=$d(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ga(ce.min(),s,new Le(Te),bn(),me())}}class xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xi(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ng{constructor(e,n){this.targetId=e,this.me=n}}class rg{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qd{constructor(){this.fe=0,this.ge=Wd(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new xi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Wd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qA{constructor(e){this.Le=e,this.Be=new Map,this.ke=bn(),this.qe=Hd(),this.Qe=new Le(Te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Bl(i))if(r===0){const a=new se(i.path);this.Ue(n,a,dt.newNoDocument(a,ce.min()))}else Se(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Tr(r).toUint8Array()}catch(c){if(c instanceof Nm)return ss("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Bc(a,s,i)}catch(c){return ss(c instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Bl(l.target)){const c=new se(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,dt.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ga(e,n,this.Qe,this.ke,r);return this.ke=bn(),this.qe=Hd(),this.Qe=new Le(Te),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new qd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(Te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new qd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hd(){return new Le(se.comparator)}function Wd(){return new Le(se.comparator)}const HA={asc:"ASCENDING",desc:"DESCENDING"},WA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KA={and:"AND",or:"OR"};class zA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GA(t,e){return Uo(t,e.toTimestamp())}function sn(t){return Se(!!t),ce.fromTimestamp(function(n){const r=Jn(n);return new Ge(r.seconds,r.nanos)}(t))}function jc(t,e){return ql(t,e).canonicalString()}function ql(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ig(t){const e=De.fromString(t);return Se(ug(e)),e}function Hl(t,e){return jc(t.databaseId,e.path)}function cl(t,e){const n=ig(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(ag(n))}function og(t,e){return jc(t.databaseId,e)}function QA(t){const e=ig(t);return e.length===4?De.emptyPath():ag(e)}function Wl(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ag(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kd(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function JA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string"),st.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?F.UNKNOWN:tg(h.code);return new ne(f,h.message||"")}(a);n=new rg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cl(t,r.document.name),i=sn(r.document.updateTime),a=r.document.createTime?sn(r.document.createTime):ce.min(),l=new It({mapValue:{fields:r.document.fields}}),c=dt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new yo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cl(t,r.document),i=r.readTime?sn(r.readTime):ce.min(),a=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new yo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cl(t,r.document),i=r.removedTargetIds||[];n=new yo([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new UA(s,i),l=r.targetId;n=new ng(l,a)}}return n}function YA(t,e){let n;if(e instanceof ki)n={update:Kd(t,e.key,e.value)};else if(e instanceof Fc)n={delete:Hl(t,e.key)};else if(e instanceof rr)n={update:Kd(t,e.key,e.data),updateMask:ob(e.fieldMask)};else{if(!(e instanceof MA))return ae();n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof mi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:GA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function XA(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?sn(s.updateTime):sn(i);return a.isEqual(ce.min())&&(a=sn(i)),new DA(a,s.transformResults||[])}(n,e))):[]}function ZA(t,e){return{documents:[og(t,e.path)]}}function eb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=og(t,s);const i=function(h){if(h.length!==0)return cg(ln.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Br(g.field),direction:rb(g.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=$l(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function tb(t){let e=QA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=lg(p);return g instanceof ln&&Um(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(C){return new Lo(jr(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ua(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new Mo(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,E=p.values||[];return new Mo(E,g)}(n.endAt)),yA(e,s,a,i,l,"F",c,h)}function nb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jr(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jr(n.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>lg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function rb(t){return HA[t]}function sb(t){return WA[t]}function ib(t){return KA[t]}function Br(t){return{fieldPath:t.canonicalString()}}function jr(t){return et.fromServerFormat(t.fieldPath)}function cg(t){return t instanceof ze?function(n){if(n.op==="=="){if(Vd(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NAN"}};if(xd(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vd(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NAN"}};if(xd(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(n.field),op:sb(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>cg(s));return r.length===1?r[0]:{compositeFilter:{op:ib(n.op),filters:r}}}(t):ae()}function ob(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ug(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,s,i=ce.min(),a=ce.min(),l=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.ct=e}}function lb(t){const e=tb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.un=new ub}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Qn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class ub{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ls(0)}static kn(){return new ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zs(r.mutation,s,Vt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ls();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=bn();const a=Xs(),l=function(){return Xs()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof rr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Zs(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):a.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new db(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Xs();let s=new Le((a,l)=>a-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Vt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||me()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=zm();f.forEach(g=>{if(!i.has(g)){const E=Zm(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(dr());let l=-1,c=i;return a.next(h=>U.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,me())).next(f=>({batchId:l,changes:Km(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ls();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,g){return new ha(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,dt.newInvalidDocument(f)))});let l=Ls();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Zs(f.mutation,h,Vt.empty(),Ge.now()),fa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:lb(s.bundledQuery),readTime:sn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.overlays=new Le(se.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,a=new se(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=dr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new FA(n,r));let i=this.Ir.get(n);i===void 0&&(i=me(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Tr=new tt(Je.Er),this.dr=new tt(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new De([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new De([])),r=new Je(n,e),s=new Je(n,e+1);let i=me();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Te(e.wr,n.wr)}static Ar(e,n){return Te(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(Je.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new LA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(Te);return n.forEach(s=>{const i=new Je(s,0),a=new Je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new Je(new se(i),0);let l=new tt(Te);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Je(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.Mr=e,this.docs=function(){return new Le(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bn();const a=n.path,l=new se(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Z0(X0(f),r)<=0||(s.has(f.key)||fa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vb(this)}getSize(e){return U.resolve(this.size)}}class vb extends hb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.persistence=e,this.Nr=new ms(n=>Oc(n),Nc),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $c,this.targetCount=0,this.kr=ls.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kc(0),this.Kr=!1,this.Kr=!0,this.$r=new gb,this.referenceDelegate=e(this),this.Ur=new Eb(this),this.indexManager=new cb,this.remoteDocumentCache=function(s){return new yb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ab(n),this.Gr=new pb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _b(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new Tb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Tb extends tA{constructor(e){super(),this.currentSequenceNumber=e}}class qc{constructor(e){this.persistence=e,this.Jr=new $c,this.Yr=null}static Zr(e){return new qc(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hw()?8:nA(gt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Ib;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Vs()<=ge.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ur(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Vs()<=ge.DEBUG&&ee("QueryEngine","Query:",Ur(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vs()<=ge.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ur(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):U.resolve())}Yi(e,n){if(Md(n))return U.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jl(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=me(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,a,c.readTime)?this.Yi(e,jl(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Md(n)||s.isEqual(ce.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?U.resolve(null):(Vs()<=ge.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ur(n)),this.rs(e,a,n,Y0(s,-1)).next(l=>l))})}ts(e,n){let r=new tt(Hm(e));return n.forEach((s,i)=>{fa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Vs()<=ge.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ur(n)),this.Ji.getDocumentsMatchingQuery(e,n,Qn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Le(Te),this._s=new ms(i=>Oc(i),Nc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Rb(t,e,n,r){return new bb(t,e,n,r)}async function hg(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=me();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Sb(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let E=U.resolve();return g.forEach(C=>{E=E.next(()=>f.getEntry(c,C)).next(D=>{const k=h.docVersions.get(C);Se(k!==null),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dg(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Pb(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(st.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),function(D,k,V){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,E,f)&&l.push(n.Ur.updateTargetData(i,E))});let c=bn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Cb(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(ce.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function Cb(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=bn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function kb(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xb(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new qn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=ue(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ci(a))throw a;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function zd(t,e,n){const r=ue(t);let s=ce.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=ue(c),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,a,rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:ce.min(),n?i:me())).next(l=>(Vb(r,wA(e),l),{documents:l,Ts:i})))}function Vb(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Gd{constructor(){this.activeTargetIds=SA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Db{constructor(){this.so=new Gd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Gd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io=null;function ul(){return io===null?io=function(){return 268435456+Math.round(2147483648*Math.random())}():io++,"0x"+io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class Lb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=ul(),c=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,c,h,s).then(f=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ss("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=Nb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ul();return new Promise((a,l)=>{const c=new Sm;c.setWithCredentials(!0),c.listenOnce(Pm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mo.NO_ERROR:const f=c.getResponseJson();ee(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case mo.TIMEOUT:ee(ct,`RPC '${e}' ${i} timed out`),l(new ne(F.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const p=c.getStatus();if(ee(ct,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const C=function(k){const V=k.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(V)>=0?V:F.UNKNOWN}(E.status);l(new ne(C,E.message))}else l(new ne(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(F.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{ee(ct,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(ct,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=ul(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xm(),l=km(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ee(ct,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let g=!1,E=!1;const C=new Mb({Io:k=>{E?ee(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(ee(ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(ct,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),D=(k,V,M)=>{k.listen(V,q=>{try{M(q)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,Ms.EventType.OPEN,()=>{E||(ee(ct,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),D(p,Ms.EventType.CLOSE,()=>{E||(E=!0,ee(ct,`RPC '${e}' stream ${s} transport closed`),C.So())}),D(p,Ms.EventType.ERROR,k=>{E||(E=!0,ss(ct,`RPC '${e}' stream ${s} transport errored:`,k),C.So(new ne(F.UNAVAILABLE,"The operation could not be completed")))}),D(p,Ms.EventType.MESSAGE,k=>{var V;if(!E){const M=k.data[0];Se(!!M);const q=M,z=q.error||((V=q[0])===null||V===void 0?void 0:V.error);if(z){ee(ct,`RPC '${e}' stream ${s} received error:`,z);const de=z.status;let fe=function(T){const A=He[T];if(A!==void 0)return tg(A)}(de),I=z.message;fe===void 0&&(fe=F.INTERNAL,I="Unknown error status: "+de+" with message "+z.message),E=!0,C.So(new ne(fe,I)),p.close()}else ee(ct,`RPC '${e}' stream ${s} received:`,M),C.bo(M)}}),D(l,Cm.STAT_EVENT,k=>{k.stat===Ml.PROXY?ee(ct,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Ml.NOPROXY&&ee(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function hl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return new zA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ne(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fb extends pg{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=JA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ce.min():a.readTime?sn(a.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Bl(c)?{documents:ZA(i,c)}:{query:eb(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=sg(i,a.resumeToken);const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ce.min())>0){l.readTime=Uo(i,a.snapshotVersion.toTimestamp());const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=nb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wl(this.serializer),n.removeTarget=e,this.a_(n)}}class Ub extends pg{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=XA(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ne(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ql(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ql(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(F.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(An(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Sr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ue(c);h.L_.add(4),await Vi(h),h.q_.set("Unknown"),h.L_.delete(4),await ya(h)}(this))})}),this.q_=new jb(r,s)}}async function ya(t){if(Sr(t))for(const e of t.B_)await e(!0)}async function Vi(t){for(const e of t.B_)await e(!1)}function mg(t,e){const n=ue(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Gc(n)?zc(n):gs(n).r_()&&Kc(n,e))}function Wc(t,e){const n=ue(t),r=gs(n);n.N_.delete(e),r.r_()&&gg(n,e),n.N_.size===0&&(r.r_()?r.o_():Sr(n)&&n.q_.set("Unknown"))}function Kc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function gg(t,e){t.Q_.xe(e),gs(t).R_(e)}function zc(t){t.Q_=new qA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function Gc(t){return Sr(t)&&!gs(t).n_()&&t.N_.size>0}function Sr(t){return ue(t).L_.size===0}function _g(t){t.Q_=void 0}async function qb(t){t.q_.set("Online")}async function Hb(t){t.N_.forEach((e,n)=>{Kc(t,e)})}async function Wb(t,e){_g(t),Gc(t)?(t.q_.M_(e),zc(t)):t.q_.set("Unknown")}async function Kb(t,e,n){if(t.q_.set("Online"),e instanceof rg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(t,r)}else if(e instanceof yo?t.Q_.Ke(e):e instanceof ng?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await dg(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),gg(i,c);const p=new qn(f.target,c,h,f.sequenceNumber);Kc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Bo(t,r)}}async function Bo(t,e,n){if(!Ci(e))throw e;t.L_.add(1),await Vi(t),t.q_.set("Offline"),n||(n=()=>dg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ya(t)})}function yg(t,e){return e().catch(n=>Bo(t,n,e))}async function va(t){const e=ue(t),n=Yn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zb(e);)try{const s=await kb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Gb(e,s)}catch(s){await Bo(e,s)}vg(e)&&Eg(e)}function zb(t){return Sr(t)&&t.O_.length<10}function Gb(t,e){t.O_.push(e);const n=Yn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vg(t){return Sr(t)&&!Yn(t).n_()&&t.O_.length>0}function Eg(t){Yn(t).start()}async function Qb(t){Yn(t).p_()}async function Jb(t){const e=Yn(t);for(const n of t.O_)e.m_(n.mutations)}async function Yb(t,e,n){const r=t.O_.shift(),s=Uc.from(r,e,n);await yg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await va(t)}async function Xb(t,e){e&&Yn(t).V_&&await async function(r,s){if(function(a){return BA(a)&&a!==F.ABORTED}(s.code)){const i=r.O_.shift();Yn(r).s_(),await yg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await va(r)}}(t,e),vg(t)&&Eg(t)}async function Jd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.L_.add(3),await Vi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ya(n)}async function Zb(t,e){const n=ue(t);e?(n.L_.delete(2),await ya(n)):e||(n.L_.add(2),await Vi(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,s){const i=ue(n);return i.w_(),new Fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:qb.bind(null,t),Ro:Hb.bind(null,t),mo:Wb.bind(null,t),d_:Kb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Gc(t)?zc(t):t.q_.set("Unknown")):(await t.K_.stop(),_g(t))})),t.K_}function Yn(t){return t.U_||(t.U_=function(n,r,s){const i=ue(n);return i.w_(),new Ub(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Qb.bind(null,t),mo:Xb.bind(null,t),f_:Jb.bind(null,t),g_:Yb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await va(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Qc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jc(t,e){if(An("AsyncQueue",`${e}: ${t}`),Ci(t))return new ne(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.W_=new Le(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new cs(e,n,Xr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class tR{constructor(){this.queries=Xd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=Xd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new ne(F.ABORTED,"Firestore shutting down"))}}function Xd(){return new ms(t=>qm(t),da)}async function wg(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new eR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Jc(a,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Yc(n)}async function Tg(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nR(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Yc(n)}function rR(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Yc(t){t.Y_.forEach(e=>{e.next()})}var zl,Zd;(Zd=zl||(zl={})).ea="default",Zd.Cache="cache";class Ig{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.key=e}}class bg{constructor(e){this.key=e}}class sR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=Hm(e),this.Ra=new Xr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Yd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),E=fa(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;g&&E?g.data.isEqual(E.data)?C!==D&&(r.track({type:3,doc:E}),k=!0):this.ga(g,E)||(r.track({type:2,doc:E}),k=!0,(c&&this.Aa(E,c)>0||h&&this.Aa(E,h)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),k=!0):g&&!E&&(r.track({type:1,doc:g}),k=!0,(c||h)&&(l=!0)),k&&(E?(a=a.add(E),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,p)=>function(E,C){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return D(E)-D(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new cs(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new bg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Ag(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return cs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class iR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oR{constructor(e){this.key=e,this.va=!1}}class aR{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ms(l=>qm(l),da),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(se.comparator),this.Na=new Map,this.La=new $c,this.Ba={},this.ka=new Map,this.qa=ls.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function lR(t,e,n=!0){const r=xg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Rg(r,e,n,!0),s}async function cR(t,e){const n=xg(t);await Rg(n,e,!0,!1)}async function Rg(t,e,n,r){const s=await xb(t.localStore,rn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await uR(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&mg(t.remoteStore,s),l}async function uR(t,e,n,r,s){t.Ka=(p,g,E)=>async function(D,k,V,M){let q=k.view.ma(V);q.ns&&(q=await zd(D.localStore,k.query,!1).then(({documents:I})=>k.view.ma(I,q)));const z=M&&M.targetChanges.get(k.targetId),de=M&&M.targetMismatches.get(k.targetId)!=null,fe=k.view.applyChanges(q,D.isPrimaryClient,z,de);return tf(D,k.targetId,fe.wa),fe.snapshot}(t,p,g,E);const i=await zd(t.localStore,e,!0),a=new sR(e,i.Ts),l=a.ma(i.documents),c=xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);tf(t,n,h.wa);const f=new iR(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function hR(t,e,n){const r=ue(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!da(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wc(r.remoteStore,s.targetId),Gl(r,s.targetId)}).catch(Pi)):(Gl(r,s.targetId),await Kl(r.localStore,s.targetId,!0))}async function dR(t,e){const n=ue(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wc(n.remoteStore,r.targetId))}async function fR(t,e,n){const r=ER(t);try{const s=await function(a,l){const c=ue(a),h=Ge.now(),f=l.reduce((E,C)=>E.add(C.key),me());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=bn(),D=me();return c.cs.getEntries(E,f).next(k=>{C=k,C.forEach((V,M)=>{M.isValidDocument()||(D=D.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,C)).next(k=>{p=k;const V=[];for(const M of l){const q=NA(M,p.get(M.key).overlayedDocument);q!=null&&V.push(new rr(M.key,q,Mm(q.value.mapValue),Ut.exists(!0)))}return c.mutationQueue.addMutationBatch(E,h,V,l)}).next(k=>{g=k;const V=k.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(E,k.batchId,V)})}).then(()=>({batchId:g.batchId,changes:Km(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Le(Te)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await Di(r,s.changes),await va(r.remoteStore)}catch(s){const i=Jc(s,"Failed to persist write");n.reject(i)}}async function Sg(t,e){const n=ue(t);try{const r=await Pb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Se(a.va):s.removedDocuments.size>0&&(Se(a.va),a.va=!1))}),await Di(n,r,e)}catch(r){await Pi(r)}}function ef(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ue(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&Yc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pR(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Le(se.comparator);a=a.insert(i,dt.newNoDocument(i,ce.min()));const l=me().add(i),c=new ga(ce.min(),new Map,new Le(Te),a,l);await Sg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Xc(r)}else await Kl(r.localStore,e,!1).then(()=>Gl(r,e,n)).catch(Pi)}async function mR(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await Sb(n.localStore,e);Cg(n,r,null),Pg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Di(n,s)}catch(s){await Pi(s)}}async function gR(t,e,n){const r=ue(t);try{const s=await function(a,l){const c=ue(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Cg(r,e,n),Pg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Di(r,s)}catch(s){await Pi(s)}}function Pg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Cg(t,e,n){const r=ue(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Gl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||kg(t,r)})}function kg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Wc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Xc(t))}function tf(t,e,n){for(const r of n)r instanceof Ag?(t.La.addReference(r.key,e),_R(t,r)):r instanceof bg?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||kg(t,r.key)):ae()}function _R(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Xc(t))}function Xc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(De.fromString(e)),r=t.qa.next();t.Na.set(r,new oR(n)),t.Oa=t.Oa.insert(n,r),mg(t.remoteStore,new qn(rn(Mc(n.path)),r,"TargetPurposeLimboResolution",kc.oe))}}async function Di(t,e,n){const r=ue(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Hc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=ue(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>U.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!Ci(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const E=f.os.get(g),C=E.snapshotVersion,D=E.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,D)}}}(r.localStore,i))}async function yR(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await hg(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ne(F.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Di(n,r.hs)}}function vR(t,e){const n=ue(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function xg(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pR.bind(null,e),e.Ca.d_=nR.bind(null,e.eventManager),e.Ca.$a=rR.bind(null,e.eventManager),e}function ER(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gR.bind(null,e),e}class jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Rb(this.persistence,new Ab,e.initialUser,this.serializer)}Ga(e){return new wb(qc.Zr,this.serializer)}Wa(e){return new Db}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jo.provider={build:()=>new jo};class Ql{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ef(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yR.bind(null,this.syncEngine),await Zb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tR}()}createDatastore(e){const n=_a(e.databaseInfo.databaseId),r=function(i){return new Lb(i)}(e.databaseInfo);return function(i,a,l,c){return new Bb(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new $b(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ef(this.syncEngine,n,0),function(){return Qd.D()?new Qd:new Ob}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,f){const p=new aR(s,i,a,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Vi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ql.provider={build:()=>new Ql};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{ee("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(ee("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dl(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TR(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Jd(e.remoteStore,s)),t._onlineComponents=e}async function TR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ss("Error using user provided cache. Falling back to memory cache: "+n),await dl(t,new jo)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await dl(t,new jo);return t._offlineComponents}async function Dg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await nf(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await nf(t,new Ql))),t._onlineComponents}function IR(t){return Dg(t).then(e=>e.syncEngine)}async function Og(t){const e=await Dg(t),n=e.eventManager;return n.onListen=lR.bind(null,e.syncEngine),n.onUnlisten=hR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dR.bind(null,e.syncEngine),n}function AR(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Vg({next:g=>{f.Za(),a.enqueueAndForget(()=>Tg(i,p));const E=g.docs.has(l);!E&&g.fromCache?h.reject(new ne(F.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&c&&c.source==="server"?h.reject(new ne(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ig(Mc(l.path),f,{includeMetadataChanges:!0,_a:!0});return wg(i,p)}(await Og(t),t.asyncQueue,e,n,r)),r.promise}function bR(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Vg({next:g=>{f.Za(),a.enqueueAndForget(()=>Tg(i,p)),g.fromCache&&c.source==="server"?h.reject(new ne(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ig(l,f,{includeMetadataChanges:!0,_a:!0});return wg(i,p)}(await Og(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e,n){if(!n)throw new ne(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RR(t,e,n,r){if(e===!0&&r===!0)throw new ne(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sf(t){if(!se.isDocumentKey(t))throw new ne(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function of(t){if(se.isDocumentKey(t))throw new ne(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zc(t);throw new ne(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ng((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $0;switch(r.type){case"firstParty":return new K0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rf.get(n);r&&(ee("ComponentProvider","Removing Datastore"),rf.delete(n),r.terminate())}(this),Promise.resolve()}}function SR(t,e,n,r={}){var s;const i=(t=Gt(t,Ea))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ut.MOCK_USER;else{l=sw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ne(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(h)}t._authCredentials=new q0(new Vm(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wa(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class zn extends wa{constructor(e,n,r){super(e,n,Mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new se(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function lf(t,e,...n){if(t=rt(t),Mg("collection","path",e),t instanceof Ea){const r=De.fromString(e,...n);return of(r),new zn(t,null,r)}{if(!(t instanceof At||t instanceof zn))throw new ne(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return of(r),new zn(t.firestore,null,r)}}function us(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Dm.newId()),Mg("doc","path",e),t instanceof Ea){const r=De.fromString(e,...n);return sf(r),new At(t,null,new se(r))}{if(!(t instanceof At||t instanceof zn))throw new ne(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return sf(r),new At(t.firestore,t instanceof zn?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fg(this,"async_queue_retry"),this.Vu=()=>{const r=hl();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=hl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new En;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ci(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw An("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Qc.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Pr extends Ea{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cf(e),this._firestoreClient=void 0,await e}}}function PR(t,e){const n=typeof t=="object"?t:$p(),r=typeof t=="string"?t:"(default)",s=vc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nw("firestore");i&&SR(s,...i)}return s}function eu(t){if(t._terminated)throw new ne(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CR(t),t._firestoreClient}function CR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new iA(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ng(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new wR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(st.fromBase64String(e))}catch(n){throw new ne(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=/^__.*__$/;class xR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ki(e,this.data,n,this.fieldTransforms)}}class Lg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class ru{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return $o(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Fg(this.Cu)&&kR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class VR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_a(e)}Qu(e,n,r,s=!1){return new ru({Cu:e,methodName:n,qu:r,path:et.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function su(t){const e=t._freezeSettings(),n=_a(t._databaseId);return new VR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ug(t,e,n,r,s,i={}){const a=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);ou("Data must be an object, but it was:",a,r);const l=Bg(r,a);let c,h;if(i.merge)c=new Vt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Jl(e,p,n);if(!a.contains(g))throw new ne(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$g(f,g)||f.push(g)}c=new Vt(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new xR(new It(l),c,h)}class Aa extends Ia{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Aa}}class iu extends Ia{_toFieldTransform(e){return new xA(e.path,new mi)}isEqual(e){return e instanceof iu}}function DR(t,e,n,r){const s=t.Qu(1,e,n);ou("Data must be an object, but it was:",s,r);const i=[],a=It.empty();Rr(r,(c,h)=>{const f=au(e,c,n);h=rt(h);const p=s.Nu(f);if(h instanceof Aa)i.push(f);else{const g=ba(h,p);g!=null&&(i.push(f),a.set(f,g))}});const l=new Vt(i);return new Lg(a,l,s.fieldTransforms)}function OR(t,e,n,r,s,i){const a=t.Qu(1,e,n),l=[Jl(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Jl(e,i[g])),c.push(i[g+1]);const h=[],f=It.empty();for(let g=l.length-1;g>=0;--g)if(!$g(h,l[g])){const E=l[g];let C=c[g];C=rt(C);const D=a.Nu(E);if(C instanceof Aa)h.push(E);else{const k=ba(C,D);k!=null&&(h.push(E),f.set(E,k))}}const p=new Vt(h);return new Lg(f,p,a.fieldTransforms)}function ba(t,e){if(jg(t=rt(t)))return ou("Unsupported field value:",e,t),Bg(t,e);if(t instanceof Ia)return function(r,s){if(!Fg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=ba(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof tu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:sg(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nu)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Lc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Zc(r)}`)}(t,e)}function Bg(t,e){const n={};return Om(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=ba(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function jg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof tu||t instanceof hs||t instanceof At||t instanceof Ia||t instanceof nu)}function ou(t,e,n){if(!jg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Zc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Jl(t,e,n){if((e=rt(e))instanceof Ta)return e._internalPath;if(typeof e=="string")return au(t,e);throw $o("Field path arguments must be of type string or ",t,!1,void 0,n)}const NR=new RegExp("[~\\*/\\[\\]]");function au(t,e,n){if(e.search(NR)>=0)throw $o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ta(...e.split("."))._internalPath}catch{throw $o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $o(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ne(F.INVALID_ARGUMENT,l+t+c)}function $g(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MR extends qg{data(){return super.data()}}function Hg(t,e){return typeof e=="string"?au(t,e):e instanceof Ta?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FR{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>je(a.doubleValue));return new nu(i)}convertGeoPoint(e){return new tu(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Se(ug(r));const s=new fi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kg extends qg{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vo extends Kg{data(e={}){return super.data(e)}}class UR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vo(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:BR(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){t=Gt(t,At);const e=Gt(t.firestore,Pr);return AR(eu(e),t._key).then(n=>KR(e,t,n))}class zg extends FR{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function jR(t){t=Gt(t,wa);const e=Gt(t.firestore,Pr),n=eu(e),r=new zg(e);return LR(t._query),bR(n,t._query).then(s=>new UR(e,r,t,s))}function $R(t,e,n){t=Gt(t,At);const r=Gt(t.firestore,Pr),s=Wg(t.converter,e);return Ra(r,[Ug(su(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ut.none())])}function qR(t,e,n,...r){t=Gt(t,At);const s=Gt(t.firestore,Pr),i=su(s);let a;return a=typeof(e=rt(e))=="string"||e instanceof Ta?OR(i,"updateDoc",t._key,e,n,r):DR(i,"updateDoc",t._key,e),Ra(s,[a.toMutation(t._key,Ut.exists(!0))])}function HR(t){return Ra(Gt(t.firestore,Pr),[new Fc(t._key,Ut.none())])}function WR(t,e){const n=Gt(t.firestore,Pr),r=us(t),s=Wg(t.converter,e);return Ra(n,[Ug(su(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function Ra(t,e){return function(r,s){const i=new En;return r.asyncQueue.enqueueAndForget(async()=>fR(await IR(r),s,i)),i.promise}(eu(t),e)}function KR(t,e,n){const r=n.docs.get(e._key),s=new zg(t);return new Kg(t,s,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}function zR(){return new iu("serverTimestamp")}(function(e,n=!0){(function(s){ps=s})(ds),rs(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Pr(new H0(r.getProvider("auth-internal")),new G0(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Kn(Rd,"4.7.3",e),Kn(Rd,"4.7.3","esm2017")})();const GR={apiKey:"AIzaSyCgRSXBJ9kks4qoNFqfqwxsN6e7eibffWA",authDomain:"watch-time-tracker.firebaseapp.com",projectId:"watch-time-tracker",storageBucket:"watch-time-tracker.appspot.com",messagingSenderId:"170537439834",appId:"1:170537439834:web:ca7a24a0b8bc59e9f03e63",measurementId:"G-QJ8Z5XNLV8"},Gg=jp(GR),yi=F0(Gg),fr=PR(Gg),QR={class:"bg-white fixed z-20 w-full"},JR={class:"absolute inset-x-0 top-0 z-50"},YR={class:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global"},XR={class:"flex-grow flex justify-end"},ZR={key:0,class:"flex items-center lg:flex-row flex-col"},eS={class:"text-sm font-semibold leading-6 text-gray-900"},tS={key:1,class:"flex flex-col lg:flex-row items-start lg:items-center"},nS={__name:"Header",setup(t){const e=$e(null);mm(yi,r=>{e.value=r});const n=async()=>{try{await SI(yi)}catch(r){console.error("Error signing out:",r)}};return(r,s)=>{const i=Zo("RouterLink");return Ue(),We("div",QR,[$("header",JR,[$("nav",YR,[$("div",XR,[e.value?(Ue(),We("div",ZR,[$("span",eS,"Welcome, "+wn(e.value.email),1),$("button",{onClick:n,class:"ml-4 text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},"Log out")])):(Ue(),We("div",tS,[Be(i,{to:"/login",class:"text-sm self-center font-semibold leading-6 text-gray-900 block lg:inline"},{default:ri(()=>s[0]||(s[0]=[ii("Log in")])),_:1}),Be(i,{to:"/register",class:"mt-2 lg:mt-0 lg:ml-8"},{default:ri(()=>s[1]||(s[1]=[$("button",{class:"focus:ring-4 focus:outline-none focus:ring-indigo-700 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-indigo-600 text-white hover:bg-indigo-500"},"Sign up",-1)])),_:1})]))])])])])}}},rS={class:"bg-white p-6 fixed w-full z-10 shadow-md border border-gray-200"},sS={class:"flex items-center justify-center space-x-2"},iS={class:"text-lg text-gray-700"},oS={__name:"TimeCount",setup(t,{expose:e}){const n=$e(0),r=$e(!1),s=Ct(()=>{const c=Math.floor(n.value/1440),h=Math.floor(n.value%(60*24)/60),f=n.value%60;return`${c} days, ${h} hours, ${f} minutes`}),i=c=>{n.value+=c},a=()=>{n.value=0},l=()=>{r.value=!0,a(),setTimeout(()=>{r.value=!1},300)};return e({addTime:i}),(c,h)=>(Ue(),We("div",rS,[h[1]||(h[1]=$("h2",{class:"text-2xl font-bold mb-2 text-center text-indigo-600"},"Total Time",-1)),$("div",sS,[(Ue(),We("svg",{onClick:l,class:zo([{rotate:r.value},"w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-700 transition-transform duration-300 ease-in-out"]),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},h[0]||(h[0]=[$("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"},null,-1)]),2)),$("p",iS,wn(s.value),1)]),h[2]||(h[2]=$("p",{class:"mt-4 text-sm text-gray-500 text-center"}," Click on movie posters to add time! ",-1))]))}},aS=wi(oS,[["__scopeId","data-v-a58b9e0b"]]),lS={},cS={class:"relative isolate px-6 pt-14 lg:px-8"};function uS(t,e){return Ue(),We("div",cS)}const hS=wi(lS,[["render",uS]]),dS={class:"bg-white"},fS={class:"mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-16 lg:max-w-7xl lg:px-8"},pS={class:"mx-auto max-w-2xl mt-10 py-12"},mS={class:"px-10"},gS={class:"relative w-full"},_S={class:"text-center mb-12"},yS={class:"grid grid-cols-1 gap-x-6 gap-y-10 max-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"},vS={class:"relative w-full overflow-hidden rounded-lg bg-gray-200 movie-card",style:{"padding-bottom":"150%"}},ES=["src","alt","onClick"],wS={class:"mt-4 text-sm text-gray-700 text-center"},TS={class:"mt-1 text-lg font-medium text-gray-900 text-center"},IS={class:"mt-4 flex justify-center space-x-2"},AS=["onClick"],bS=["onClick"],RS={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},SS={class:"bg-white p-4 rounded-lg shadow-lg"},PS={key:1,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},CS={class:"bg-white p-4 rounded-lg shadow-lg"},kS={__name:"MoviesList",setup(t){const e=$e([]),n=$e(""),r=Wt("timeCounter"),s=$e(!1),i=$e(!1),a=$e({title:"",time:0,poster:""}),l=$e({id:"",title:"",time:0,poster:""}),c=Ct(()=>e.value.filter(k=>k.title.toLowerCase().includes(n.value.toLowerCase()))),h=async()=>{const k=await jR(lf(fr,"Movies"));e.value=[],k.forEach(V=>{e.value.push({id:V.id,...V.data()})})},f=k=>{r&&typeof r.value.addTime=="function"?r.value.addTime(k):console.error("timeCounter or addTime method is not available")},p=async()=>{try{await WR(lf(fr,"Movies"),a.value),e.value.push({id:Date.now(),...a.value}),a.value={title:"",time:0,poster:""},s.value=!1,await h()}catch(k){console.error("Error adding movie:",k)}},g=k=>{l.value={id:k.id,title:k.title,time:k.time,poster:k.poster},i.value=!0},E=async()=>{try{const k=us(fr,"Movies",l.value.id);await qR(k,{title:l.value.title,time:l.value.time,poster:l.value.poster}),i.value=!1,await h()}catch(k){console.error("Error updating movie:",k)}},C=k=>{confirm("Are you sure you want to delete this movie?")&&D(k)},D=async k=>{try{await HR(us(fr,"Movies",k)),e.value=e.value.filter(V=>V.id!==k)}catch(V){console.error("Error deleting movie:",V)}};return Gf(()=>{h()}),(k,V)=>(Ue(),We("div",dS,[$("div",fS,[V[19]||(V[19]=$("div",{class:"relative isolate px-6 pt-14 lg:px-8"},null,-1)),$("div",pS,[$("form",mS,[$("div",gS,[V[10]||(V[10]=$("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"},[$("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[$("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1)),Mt($("input",{"onUpdate:modelValue":V[0]||(V[0]=M=>n.value=M),type:"text",id:"search",class:"block w-full text-sm ps-10 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Enter movie title...",required:""},null,512),[[Lt,n.value]])])])]),$("div",_S,[$("button",{onClick:V[1]||(V[1]=M=>s.value=!0),class:"inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-green-600 text-white hover:bg-green-500"}," Add New Movie ")]),$("div",yS,[(Ue(!0),We(qt,null,Sy(c.value,M=>(Ue(),We("div",{key:M.id,class:"group cursor-pointer"},[$("div",vS,[$("img",{src:M.poster,alt:M.title,onClick:q=>f(M.time),class:"absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"},null,8,ES)]),$("h3",wS,wn(M.title),1),$("p",TS,wn(M.time)+" minutes",1),$("div",IS,[$("button",{onClick:Ro(q=>g(M),["prevent"]),class:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"}," Edit ",8,AS),$("button",{onClick:Ro(q=>C(M.id),["prevent"]),class:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500"}," Delete ",8,bS)])]))),128))]),s.value?(Ue(),We("div",RS,[$("div",SS,[V[11]||(V[11]=$("h2",{class:"text-lg font-bold"},"Add New Movie",-1)),V[12]||(V[12]=$("label",{for:"title"},"Title:",-1)),Mt($("input",{"onUpdate:modelValue":V[2]||(V[2]=M=>a.value.title=M),type:"text",id:"title",class:"border rounded-lg w-full mb-2 focus:ring-indigo-600"},null,512),[[Lt,a.value.title]]),V[13]||(V[13]=$("label",{for:"time"},"Time (minutes):",-1)),Mt($("input",{"onUpdate:modelValue":V[3]||(V[3]=M=>a.value.time=M),type:"number",id:"time",class:"border rounded-lg w-full mb-2 focus:ring-indigo-600"},null,512),[[Lt,a.value.time,void 0,{number:!0}]]),V[14]||(V[14]=$("label",{for:"poster"},"Poster URL:",-1)),Mt($("input",{"onUpdate:modelValue":V[4]||(V[4]=M=>a.value.poster=M),type:"text",id:"poster",class:"border rounded-lg w-full mb-2 focus:ring-indigo-600"},null,512),[[Lt,a.value.poster]]),$("button",{onClick:p,class:"mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 mr-2 bg-green-600 text-white hover:bg-green-500"},"Add Movie"),$("button",{onClick:V[5]||(V[5]=M=>s.value=!1),class:"mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-gray-600 text-white hover:bg-gray-500"},"Cancel")])])):es("",!0),i.value?(Ue(),We("div",PS,[$("div",CS,[V[15]||(V[15]=$("h2",{class:"text-lg font-bold"},"Edit Movie",-1)),V[16]||(V[16]=$("label",{for:"editTitle"},"Title:",-1)),Mt($("input",{"onUpdate:modelValue":V[6]||(V[6]=M=>l.value.title=M),type:"text",id:"editTitle",class:"border rounded-lg w-full mb-2 focus:ring-indigo-600"},null,512),[[Lt,l.value.title]]),V[17]||(V[17]=$("label",{for:"editTime"},"Time (minutes):",-1)),Mt($("input",{"onUpdate:modelValue":V[7]||(V[7]=M=>l.value.time=M),type:"number",id:"editTime",class:"border rounded-lg w-full mb-2 focus:ring-indigo-600"},null,512),[[Lt,l.value.time,void 0,{number:!0}]]),V[18]||(V[18]=$("label",{for:"editPoster"},"Poster URL:",-1)),Mt($("input",{"onUpdate:modelValue":V[8]||(V[8]=M=>l.value.poster=M),type:"text",id:"editPoster",class:"border rounded-lg w-full mb-2 focus:ring-indigo-600"},null,512),[[Lt,l.value.poster]]),$("button",{onClick:E,class:"mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 mr-2 bg-blue-600 text-white hover:bg-blue-500"},"Update Movie"),$("button",{onClick:V[9]||(V[9]=M=>i.value=!1),class:"mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-gray-600 text-white hover:bg-gray-500"},"Cancel")])])):es("",!0)])]))}},xS={},VS={class:"bg-white text-gray-800 pb-6"};function DS(t,e){return Ue(),We("footer",VS,e[0]||(e[0]=[$("div",{class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[$("div",{class:"flex flex-col justify-between items-center"},[$("p",{class:"text-sm"},"© 2024 All rights reserved. Created by Kamil Kregiel")])],-1)]))}const Qg=wi(xS,[["render",DS]]),OS={__name:"HomeView",setup(t){const e=$e(null);return Ws("timeCounter",e),(n,r)=>(Ue(),We(qt,null,[Be(nS),Be(aS,{ref_key:"timeCounter",ref:e},null,512),Be(hS),Be(kS),Be(Qg)],64))}},NS={class:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"},MS={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},LS={class:"mt-2"},FS={class:"mt-2"},US={key:0,class:"mt-2 text-center text-sm text-green-500"},BS={key:1,class:"mt-2 text-center text-sm text-red-500"},jS={class:"mt-10 text-center text-sm text-gray-500"},$S={__name:"LoginView",setup(t){const e=$e(""),n=$e(""),r=$e(""),s=$e(""),i=GE(),a=$e("");mm(yi,async c=>{if(c){const h=await uf(us(fr,"Users",c.uid));h.exists()&&(a.value=h.data().role)}});const l=async()=>{try{r.value="",s.value="";const h=(await AI(yi,e.value,n.value)).user,f=await uf(us(fr,"Users",h.uid));f.exists()&&(a.value=f.data().role),s.value="Login successful!",setTimeout(()=>{i.push({path:"/",query:{role:a.value}})},500)}catch(c){r.value=c.message}};return(c,h)=>{const f=Zo("RouterLink");return Ue(),We("div",NS,[h[7]||(h[7]=$("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[$("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"}," Sign in to your account ")],-1)),$("div",MS,[$("form",{class:"space-y-6",onSubmit:Ro(l,["prevent"])},[$("div",null,[h[2]||(h[2]=$("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email address",-1)),$("div",LS,[Mt($("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":h[0]||(h[0]=p=>e.value=p),required:"",placeholder:"Email address",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[Lt,e.value]])])]),$("div",null,[h[3]||(h[3]=$("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password",-1)),$("div",FS,[Mt($("input",{id:"password",name:"password",type:"password","onUpdate:modelValue":h[1]||(h[1]=p=>n.value=p),required:"",placeholder:"Password",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[Lt,n.value]])])]),h[4]||(h[4]=$("div",null,[$("button",{type:"submit",class:"focus:ring-4 focus:outline-none focus:ring-indigo-700 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Sign in ")],-1))],32),s.value?(Ue(),We("p",US,wn(s.value),1)):es("",!0),r.value?(Ue(),We("p",BS,wn(r.value),1)):es("",!0),$("p",jS,[h[6]||(h[6]=ii(" Not a member? ")),Be(f,{to:"/register"},{default:ri(()=>h[5]||(h[5]=[$("span",{class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},"Sign up",-1)])),_:1})])])])}}},qS={class:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"},HS={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},WS={class:"mt-2"},KS={class:"mt-2"},zS={class:"mt-2"},GS={key:0,class:"mt-2 text-center text-sm text-green-500"},QS={key:1,class:"mt-2 text-center text-sm text-red-500"},JS={class:"mt-10 text-center text-sm text-gray-500"},YS={__name:"RegisterView",setup(t){const e=$e(""),n=$e(""),r=$e(""),s=$e(""),i=$e(""),a=c=>{switch(c){case"auth/email-already-in-use":return"This email is already in use. Please use a different email.";case"auth/invalid-email":return"The email address is not valid. Please enter a valid email.";case"auth/weak-password":return"The password is too weak. Please use a stronger password.";case"auth/operation-not-allowed":return"Email/Password sign-in is not enabled. Please check your settings.";case"auth/too-many-requests":return"Too many requests. Please try again later.";default:return"An unknown error occurred. Please try again."}},l=async()=>{try{s.value="",i.value="";const h=(await II(yi,n.value,r.value)).user,f={username:e.value,email:n.value,password:r.value,role:"user",createdAt:zR()};await $R(us(fr,"Users",h.uid),f),console.log("User registered successfully"),i.value="Registration successful! You can now log in."}catch(c){s.value=a(c.code),console.error("Error registering user:",s.value)}};return(c,h)=>{const f=Zo("RouterLink");return Ue(),We("div",qS,[h[9]||(h[9]=$("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[$("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"}," Create an account ")],-1)),$("div",HS,[$("form",{class:"space-y-6",onSubmit:Ro(l,["prevent"])},[$("div",null,[h[3]||(h[3]=$("label",{for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},"Username",-1)),$("div",WS,[Mt($("input",{id:"username",name:"username",type:"text","onUpdate:modelValue":h[0]||(h[0]=p=>e.value=p),required:"",placeholder:"Username",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[Lt,e.value]])])]),$("div",null,[h[4]||(h[4]=$("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email address",-1)),$("div",KS,[Mt($("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":h[1]||(h[1]=p=>n.value=p),required:"",placeholder:"Email address",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[Lt,n.value]])])]),$("div",null,[h[5]||(h[5]=$("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password",-1)),$("div",zS,[Mt($("input",{id:"password",name:"password",type:"password","onUpdate:modelValue":h[2]||(h[2]=p=>r.value=p),required:"",placeholder:"Password",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[Lt,r.value]])])]),h[6]||(h[6]=$("div",null,[$("button",{type:"submit",class:"focus:ring-4 focus:outline-none focus:ring-indigo-700 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Sign up ")],-1))],32),i.value?(Ue(),We("p",GS,wn(i.value),1)):es("",!0),s.value?(Ue(),We("p",QS,wn(s.value),1)):es("",!0),$("p",JS,[h[8]||(h[8]=ii(" Already have an account? ")),Be(f,{to:"/login",class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},{default:ri(()=>h[7]||(h[7]=[ii(" Sign in ")])),_:1})])])])}}},XS={};function ZS(t,e){return Ue(),We("div",null," This is a profile page ")}const eP=wi(XS,[["render",ZS]]),tP=[{path:"/",name:"home",component:OS},{path:"/login",name:"login",component:$S},{path:"/register",name:"register",component:YS},{path:"/profile",name:"profile",component:eP,requireAuth:!0},{path:"/footer",name:"footer",component:Qg}],nP=KE({history:TE("/"),routes:tP}),Jg=Bv(Wv);Jg.use(nP);Jg.mount("#app");
