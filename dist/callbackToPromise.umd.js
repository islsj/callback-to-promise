(function(n,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n.callbackToPromise=t())})(this,function(){"use strict";var w=Object.defineProperty;var A=(n,t,o)=>t in n?w(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var p=(n,t,o)=>(A(n,typeof t!="symbol"?t+"":t,o),o);const n=(u,i)=>{const e=u.indexOf(i);e>-1&&u.splice(e,1)},t=(u,i)=>setTimeout(()=>{i>0&&u("execution time timeout")},i*1e3);class o{constructor(){p(this,"value");p(this,"updated",()=>{});let i=this;this.value=new Proxy([],{get(e,r,f){return Reflect.get(e,r,f)},set(e,r,f,l){let b=e[r];return Reflect.set(e,r,f,l),i.updated(b,f),!0}})}}const k=(u,i)=>{u.updated=i};function y(u,i){const{wait:e="all",output:r="sort",second:f=0}=i||{};let l=[],h=0;return(...c)=>new Promise((m,T)=>{try{let x=t(T,f),d=new o;for(let s in c)if(toString.call(c[s])==="[object Function]"){const a=c[s];d.value.push(a),(!Array.isArray(e)||e.includes(parseInt(s)))&&(c[s]=()=>{l.push({callback:c[s],result:a()}),n(d.value,a)})}h=d.value.length,k(d,()=>{(e==="all"&&l.length===h||Array.isArray(e)&&l.length===e.length)&&(clearTimeout(x),r==="sort"&&(l=l.sort((s,a)=>{const v=c.indexOf(s.callback),O=c.indexOf(a.callback);return v-O}),m(l)),r==="order"&&m(l)),e==="race"&&l.length&&m([l[0]])}),u(...c)}catch(x){T(x)}})}return y});