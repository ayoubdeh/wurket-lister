var vm=Object.defineProperty;var Om=(s,e,t)=>e in s?vm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>Om(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const Sm=()=>{};var Ju={};/**
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
 */const Nm={SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const GB=function(s,e){if(!s)throw Pm(e)},Pm=function(s){return new Error("Firebase Database ("+Nm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const uC=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Fm=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],B=s[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,B=o?s[r+1]:0,c=r+2<s.length,l=c?s[r+2]:0,h=i>>2,C=(i&3)<<4|B>>4;let p=(B&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),n.push(t[h],t[C],t[p],t[_])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(uC(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Fm(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],B=r<s.length?t[s.charAt(r)]:0;++r;const l=r<s.length?t[s.charAt(r)]:64;++r;const C=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||B==null||l==null||C==null)throw new Lm;const p=i<<2|B>>4;if(n.push(p),l!==64){const _=B<<4&240|l>>2;if(n.push(_),C!==64){const y=l<<6&192|C;n.push(y)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Lm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const km=function(s){const e=uC(s);return _c.encodeByteArray(e,!0)},Po=function(s){return km(s).replace(/\./g,"")},hC=function(s){try{return _c.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Es(s){return fC(void 0,s)}function fC(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!xm(t)||(s[t]=fC(s[t],e[t]));return s}function xm(s){return s!=="__proto__"}/**
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
 */function Dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mm=()=>Dc().__FIREBASE_DEFAULTS__,Vm=()=>{if(typeof process>"u"||typeof Ju>"u")return;const s=Ju.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Gm=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&hC(s[1]);return e&&JSON.parse(e)},Ba=()=>{try{return Sm()||Mm()||Vm()||Gm()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},CC=s=>{var e,t;return(t=(e=Ba())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Um=s=>{const e=CC(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},dC=()=>{var s;return(s=Ba())==null?void 0:s.config},pC=s=>{var e;return(e=Ba())==null?void 0:e[`_${s}`]};/**
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
 */class Wr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Hm(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Po(JSON.stringify(t)),Po(JSON.stringify(o)),""].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function Jm(){var e;const s=(e=Ba())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Km(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qm(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function $m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zm(){const s=at();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Wm(){return!Jm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ca(){try{return typeof indexedDB=="object"}catch{return!1}}function Ym(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Qm="FirebaseError";class Ot extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Qm,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Xm(i,n):"Error",B=`${this.serviceName}: ${o} (${r}).`;return new Ot(r,B,n)}}function Xm(s,e){try{let t=0,n="";for(;t<s.length;){const r=s.indexOf("{$",t);if(r===-1){n+=s.substring(t);break}const i=s.indexOf("}",r+2);if(i===-1){n+=s.substring(t);break}const o=s.substring(r+2,i),B=e[o];n+=s.substring(t,r)+(B!=null?String(B):`<${o}?>`),t=i+1}return n}catch{return s}}function Zm(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function qn(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(Ku(i)&&Ku(o)){if(!qn(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Ku(s){return s!==null&&typeof s=="object"}/**
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
 */function Ei(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function eE(s,e){const t=new tE(s,e);return t.subscribe.bind(t)}class tE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");nE(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=cB),r.error===void 0&&(r.error=cB),r.complete===void 0&&(r.complete=cB);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nE(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function cB(){}/**
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
 */const sE=1e3,rE=2,iE=14400*1e3,oE=.5;function wc(s,e=sE,t=rE){const n=e*Math.pow(t,s),r=Math.round(oE*n*(Math.random()-.5)*2);return Math.min(iE,n+r)}/**
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
 */function We(s){return s&&s._delegate?s._delegate:s}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function _i(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gC(s){return(await fetch(s,{credentials:"include"})).ok}class vt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class aE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Wr;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cE(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);n===B&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:BE(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BE(s){return s===us?void 0:s}function cE(s){return s.instantiationMode==="EAGER"}/**
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
 */class lE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(le||(le={}));const uE={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},hE=le.INFO,fE={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},CE=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=fE[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Br{constructor(e){this.name=e,this._logLevel=hE,this._logHandler=CE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const dE=(s,e)=>e.some(t=>s instanceof t);let qu,$u;function pE(){return qu||(qu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mC=new WeakMap,UB=new WeakMap,EC=new WeakMap,lB=new WeakMap,yc=new WeakMap;function mE(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(Un(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mC.set(t,s)}).catch(()=>{}),yc.set(e,s),e}function EE(s){if(UB.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});UB.set(s,e)}let HB={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return UB.get(s);if(e==="objectStoreNames")return s.objectStoreNames||EC.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Un(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function _E(s){HB=s(HB)}function DE(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(uB(this),e,...t);return EC.set(n,e.sort?e.sort():[e]),Un(n)}:gE().includes(s)?function(...e){return s.apply(uB(this),e),Un(mC.get(this))}:function(...e){return Un(s.apply(uB(this),e))}}function wE(s){return typeof s=="function"?DE(s):(s instanceof IDBTransaction&&EE(s),dE(s,pE())?new Proxy(s,HB):s)}function Un(s){if(s instanceof IDBRequest)return mE(s);if(lB.has(s))return lB.get(s);const e=wE(s);return e!==s&&(lB.set(s,e),yc.set(e,s)),e}const uB=s=>yc.get(s);function _C(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),B=Un(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),B.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),B}const yE=["get","getKey","getAll","getAllKeys","count"],IE=["put","add","delete","clear"],hB=new Map;function zu(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(hB.get(e))return hB.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=IE.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||yE.includes(t)))return;const i=async function(o,...B){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(B.shift())),(await Promise.all([l[t](...B),r&&c.done]))[0]};return hB.set(e,i),i}_E(s=>({...s,get:(e,t,n)=>zu(e,t)||s.get(e,t,n),has:(e,t)=>!!zu(e,t)||s.has(e,t)}));/**
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
 */class TE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AE(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function AE(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jB="@firebase/app",Wu="0.16.7";/**
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
 */const sn=new Br("@firebase/app"),bE="@firebase/app-compat",RE="@firebase/analytics-compat",vE="@firebase/analytics",OE="@firebase/app-check-compat",SE="@firebase/app-check",NE="@firebase/auth",PE="@firebase/auth-compat",FE="@firebase/crashlytics",LE="@firebase/database",kE="@firebase/data-connect",xE="@firebase/database-compat",ME="@firebase/functions",VE="@firebase/functions-compat",GE="@firebase/installations",UE="@firebase/installations-compat",HE="@firebase/messaging",jE="@firebase/messaging-compat",JE="@firebase/performance",KE="@firebase/performance-compat",qE="@firebase/remote-config",$E="@firebase/remote-config-compat",zE="@firebase/storage",WE="@firebase/storage-compat",YE="@firebase/firestore",QE="@firebase/ai",XE="@firebase/firestore-compat",ZE="firebase",e_="13.4.0";/**
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
 */const JB="[DEFAULT]",t_={[jB]:"fire-core",[bE]:"fire-core-compat",[vE]:"fire-analytics",[RE]:"fire-analytics-compat",[SE]:"fire-app-check",[OE]:"fire-app-check-compat",[NE]:"fire-auth",[PE]:"fire-auth-compat",[FE]:"fire-cls",[LE]:"fire-rtdb",[kE]:"fire-data-connect",[xE]:"fire-rtdb-compat",[ME]:"fire-fn",[VE]:"fire-fn-compat",[GE]:"fire-iid",[UE]:"fire-iid-compat",[HE]:"fire-fcm",[jE]:"fire-fcm-compat",[JE]:"fire-perf",[KE]:"fire-perf-compat",[qE]:"fire-rc",[$E]:"fire-rc-compat",[zE]:"fire-gcs",[WE]:"fire-gcs-compat",[YE]:"fire-fst",[XE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[ZE]:"fire-js-all"};/**
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
 */const Fo=new Map,n_=new Map,KB=new Map;function Yu(s,e){try{s.container.addComponent(e)}catch(t){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function kt(s){const e=s.name;if(KB.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;KB.set(e,s);for(const t of Fo.values())Yu(t,s);for(const t of n_.values())Yu(t,s);return!0}function En(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ft(s){return s==null?!1:s.settings!==void 0}/**
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
 */const s_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new ns("app","Firebase",s_);/**
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
 */class r_{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const $n=e_;function DC(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:JB,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw Bn.create("bad-app-name",{appName:String(r)});if(t||(t=dC()),!t)throw Bn.create("no-options");const i=Fo.get(r);if(i)if(qn(t,i.options)){if(qn(n,i.config))return i;throw Bn.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Bn.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new lE(r);for(const c of KB.values())o.addComponent(c);const B=new r_(t,n,o);return Fo.set(r,B),B}function Di(s=JB){const e=Fo.get(s);if(!e&&s===JB&&dC())return DC();if(!e)throw Bn.create("no-app",{appName:s});return e}function ht(s,e,t){let n=t_[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(o.join(" "));return}kt(new vt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const i_="firebase-heartbeat-database",o_=1,Yr="firebase-heartbeat-store";let fB=null;function wC(){return fB||(fB=_C(i_,o_,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Yr)}catch(t){console.warn(t)}}}}).catch(s=>{throw Bn.create("idb-open",{originalErrorMessage:s.message})})),fB}async function a_(s){try{const t=(await wC()).transaction(Yr),n=await t.objectStore(Yr).get(yC(s));return await t.done,n}catch(e){if(e instanceof Ot)sn.warn(e.message);else{const t=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(t.message)}}}async function Qu(s,e){try{const n=(await wC()).transaction(Yr,"readwrite");await n.objectStore(Yr).put(e,yC(s)),await n.done}catch(t){if(t instanceof Ot)sn.warn(t.message);else{const n=Bn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sn.warn(n.message)}}}function yC(s){return`${s.name}!${s.options.appId}`}/**
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
 */const B_=1024,c_=30;class l_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new h_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>c_){const o=f_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){sn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xu(),{heartbeatsToSend:n,unsentEntries:r}=u_(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return sn.warn(t),""}}}function Xu(){return new Date().toISOString().substring(0,10)}function u_(s,e=B_){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Zu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Zu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class h_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ca()?Ym().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await a_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Zu(s){return Po(JSON.stringify({version:2,heartbeats:s})).length}function f_(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function C_(s){kt(new vt("platform-logger",e=>new TE(e),"PRIVATE")),kt(new vt("heartbeat",e=>new l_(e),"PRIVATE")),ht(jB,Wu,s),ht(jB,Wu,"esm2020"),ht("fire-js","")}/**
 * @license
 * Copyright 2026 Google LLC
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
 */const qB="firebase-js-sdk-policy",d_=["https://www.googletagmanager.com/gtag/js","https://apis.google.com/js/api.js","https://www.google.com/recaptcha/api.js","https://www.google.com/recaptcha/enterprise.js"];let Xi,IC=!1;function TC(s){if(!d_.some(t=>s.startsWith(t)&&(s.length===t.length||s.charAt(t.length)==="?")))throw new TypeError(`Firebase: Refusing to load untrusted script URL: ${s}`);return s}function p_(){if(Xi===void 0){Xi=null;const s=typeof window<"u"?window.trustedTypes:void 0;if(s!=null&&s.createPolicy)try{Xi=s.createPolicy(qB,{createScriptURL:TC})}catch{IC=!0}}return Xi}function AC(s,e){TC(e);const t=p_();if(t){s.src=t.createScriptURL(e);return}try{s.src=e}catch(n){throw IC&&sn.error(`Unable to load ${e} because this page requires Trusted Types for scripts but does not allow the "${qB}" Trusted Types policy. To fix this, add "${qB}" to the trusted-types directive of the page's Content-Security-Policy.`),n}}/**
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
 */C_("");var g_="firebase",m_="13.4.0";/**
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
 */ht(g_,m_,"app");/**
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
 */const $B=new Map,bC={activated:!1,tokenObservers:[]},E_={initialized:!1,enabled:!1};function Ge(s){return $B.get(s)||{...bC}}function __(s,e){return $B.set(s,e),$B.get(s)}function la(){return E_}/**
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
 */const RC="https://content-firebaseappcheck.googleapis.com/v1",D_="exchangeRecaptchaEnterpriseToken",w_="exchangeDebugToken",eh={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},y_=1440*60*1e3;/**
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
 */class I_{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Wr,this.pending.promise.catch(t=>{}),await T_(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Wr,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function T_(s){return new Promise(e=>{setTimeout(e,s)})}/**
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
 */const A_={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},mt=new ns("appCheck","AppCheck",A_);/**
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
 */function th(s=!1){var e;return s?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function Ic(s){if(!Ge(s).activated)throw mt.create("use-before-activation",{appName:s.name})}function vC(s){const e=Math.round(s/1e3),t=Math.floor(e/(3600*24)),n=Math.floor((e-t*3600*24)/3600),r=Math.floor((e-t*3600*24-n*3600)/60),i=e-t*3600*24-n*3600-r*60;let o="";return t&&(o+=Zi(t)+"d:"),n&&(o+=Zi(n)+"h:"),o+=Zi(r)+"m:"+Zi(i)+"s",o}function Zi(s){return s===0?"00":s>=10?s.toString():"0"+s}/**
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
 */async function Tc({url:s,body:e},t){const n={"Content-Type":"application/json"},r=t.getImmediate({optional:!0});if(r){const C=await r.getHeartbeatsHeader();C&&(n["X-Firebase-Client"]=C)}const i={method:"POST",body:JSON.stringify(e),headers:n};let o;try{o=await fetch(s,i)}catch(C){throw mt.create("fetch-network-error",{originalErrorMessage:C==null?void 0:C.message})}if(o.status!==200)throw mt.create("fetch-status-error",{httpStatus:o.status});let B;try{B=await o.json()}catch(C){throw mt.create("fetch-parse-error",{originalErrorMessage:C==null?void 0:C.message})}const c=B.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw mt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${B.ttl}`});const l=Number(c[1])*1e3,h=Date.now();return{token:B.token,expireTimeMillis:h+l,issuedAtTimeMillis:h}}function b_(s,e){const{projectId:t,appId:n,apiKey:r}=s.options;return{url:`${RC}/projects/${t}/apps/${n}:${D_}?key=${r}`,body:{recaptcha_enterprise_token:e}}}function OC(s,e){const{projectId:t,appId:n,apiKey:r}=s.options;return{url:`${RC}/projects/${t}/apps/${n}:${w_}?key=${r}`,body:{debug_token:e}}}/**
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
 */const R_="firebase-app-check-database",v_=1,Qr="firebase-app-check-store",SC="debug-token";let eo=null;function NC(){return eo||(eo=new Promise((s,e)=>{try{const t=indexedDB.open(R_,v_);t.onsuccess=n=>{s(n.target.result)},t.onerror=n=>{var r;e(mt.create("storage-open",{originalErrorMessage:(r=n.target.error)==null?void 0:r.message}))},t.onupgradeneeded=n=>{const r=n.target.result;switch(n.oldVersion){case 0:r.createObjectStore(Qr,{keyPath:"compositeKey"})}}}catch(t){e(mt.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),eo)}function O_(s){return FC(LC(s))}function S_(s,e){return PC(LC(s),e)}function N_(s){return PC(SC,s)}function P_(){return FC(SC)}async function PC(s,e){const n=(await NC()).transaction(Qr,"readwrite"),i=n.objectStore(Qr).put({compositeKey:s,value:e});return new Promise((o,B)=>{i.onsuccess=c=>{o()},n.onerror=c=>{var l;B(mt.create("storage-set",{originalErrorMessage:(l=c.target.error)==null?void 0:l.message}))}})}async function FC(s){const t=(await NC()).transaction(Qr,"readonly"),r=t.objectStore(Qr).get(s);return new Promise((i,o)=>{r.onsuccess=B=>{const c=B.target.result;i(c?c.value:void 0)},t.onerror=B=>{var c;o(mt.create("storage-get",{originalErrorMessage:(c=B.target.error)==null?void 0:c.message}))}})}function LC(s){return`${s.options.appId}-${s.name}`}/**
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
 */const xn=new Br("@firebase/app-check");/**
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
 */async function F_(s){if(ca()){let e;try{e=await O_(s)}catch(t){xn.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function CB(s,e){return ca()?S_(s,e).catch(t=>{xn.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function L_(s){let e;try{e=await P_()}catch{}if(e)return e;{const t=crypto.randomUUID();let n=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${t}

`;const r=s==null?void 0:s.options.appId,i=s==null?void 0:s.options.projectId;return i&&r?n+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${i}/appcheck/apps?selectedAppId=${r}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${t} --project ${i} --app ${r}

`:n+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,n+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(n),N_(t).catch(o=>xn.warn(`Failed to persist debug token to IndexedDB. Error: ${o}`)),t}}/**
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
 */function Ac(){return la().enabled}async function bc(){const s=la();if(s.enabled&&s.token)return s.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function k_(s){const e=Dc(),t=la();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const n=new Wr;t.token=n,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(L_(s))}/**
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
 */const x_={error:"UNKNOWN_ERROR"};function M_(s){return _c.encodeString(JSON.stringify(s),!1)}async function zB(s,e=!1,t=!1){const n=s.app;Ic(n);const r=Ge(n);let i=r.token,o;if(i&&!Ks(i)&&(r.token=void 0,i=void 0),!i){const l=await r.cachedTokenPromise;l&&(Ks(l)?i=l:await CB(n,void 0))}if(!e&&i&&Ks(i))return{token:i.token};let B=!1;if(Ac())try{const l=await bc();r.exchangeTokenPromise||(r.exchangeTokenPromise=Tc(OC(n,l),s.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),B=!0);const h=await r.exchangeTokenPromise;return await CB(n,h),r.token=h,{token:h.token}}catch(l){return l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?xn.warn(l.message):t&&xn.error(l),dB(l)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),B=!0),i=await Ge(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?xn.warn(l.message):t&&xn.error(l),o=l}let c;return i?o?Ks(i)?c={token:i.token,internalError:o}:c=dB(o):(c={token:i.token},r.token=i,await CB(n,i)):c=dB(o),B&&MC(n,c),c}async function V_(s){const e=s.app;Ic(e);const{provider:t}=Ge(e);if(Ac()){const n=await bc(),r=OC(e,n);r.body.limited_use=!0;const{token:i}=await Tc(r,s.heartbeatServiceProvider);return{token:i}}else{const{token:n}=await t.getToken(!0);return{token:n}}}function kC(s,e,t,n){const{app:r}=s,i=Ge(r),o={next:t,error:n,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ks(i.token)){const B=i.token;Promise.resolve().then(()=>{t({token:B.token}),nh(s)}).catch(()=>{})}i.cachedTokenPromise.then(()=>nh(s))}function xC(s,e){const t=Ge(s),n=t.tokenObservers.filter(r=>r.next!==e);n.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=n}function nh(s){const{app:e}=s,t=Ge(e);let n=t.tokenRefresher;n||(n=G_(s),t.tokenRefresher=n),!n.isRunning()&&t.isTokenAutoRefreshEnabled&&n.start()}function G_(s){const{app:e}=s;return new I_(async()=>{const t=Ge(e);let n;if(t.token?n=await zB(s,!0):n=await zB(s),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const t=Ge(e);if(t.token){let n=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-300*1e3;return n=Math.min(n,r),Math.max(0,n-Date.now())}else return 0},eh.RETRIAL_MIN_WAIT,eh.RETRIAL_MAX_WAIT)}function MC(s,e){const t=Ge(s).tokenObservers;for(const n of t)try{n.type==="EXTERNAL"&&e.error!=null?n.error(e.error):n.next(e)}catch{}}function Ks(s){return s.expireTimeMillis-Date.now()>0}function dB(s){return{token:M_(x_),error:s}}/**
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
 */class U_{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ge(this.app);for(const t of e)xC(this.app,t.next);return Promise.resolve()}}function H_(s,e){return new U_(s,e)}function j_(s){return{getToken:e=>zB(s,e),getLimitedUseToken:()=>V_(s),addTokenListener:e=>kC(s,"INTERNAL",e),removeTokenListener:e=>xC(s.app,e)}}const J_="@firebase/app-check",K_="0.13.2",q_="https://www.google.com/recaptcha/enterprise.js";function $_(s,e){const t=new Wr,n=Ge(s);n.reCAPTCHAState={initialized:t};const r=z_(s),i=th(!0);return i?sh(s,e,i,r,t):Q_(()=>{const o=th(!0);if(!o)throw new Error("no recaptcha");sh(s,e,o,r,t)}),t.promise}function sh(s,e,t,n,r){t.ready(()=>{Y_(s,e,t,n),r.resolve(t)})}function z_(s){const e=`fire_app_check_${s.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function W_(s){Ic(s);const t=await Ge(s).reCAPTCHAState.initialized.promise;return new Promise((n,r)=>{const i=Ge(s).reCAPTCHAState;t.ready(()=>{n(t.execute(i.widgetId,{action:"fire_app_check"}))})})}function Y_(s,e,t,n){const r=t.render(n,{sitekey:e,size:"invisible",callback:()=>{Ge(s).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Ge(s).reCAPTCHAState.succeeded=!1}}),i=Ge(s);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:r}}function Q_(s){const e=document.createElement("script");AC(e,q_+"?render=explicit"),e.onload=s,document.head.appendChild(e)}class Rc{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){var r,i,o;Z_(this._throttleData);const t=await W_(this._app).catch(B=>{throw mt.create("recaptcha-error")});if(!((r=Ge(this._app).reCAPTCHAState)!=null&&r.succeeded))throw mt.create("recaptcha-error");let n;try{const B=b_(this._app,t);e&&(B.body.limited_use=!0),n=await Tc(B,this._heartbeatServiceProvider)}catch(B){throw(i=B.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=X_(Number((o=B.customData)==null?void 0:o.httpStatus),this._throttleData),mt.create("initial-throttle",{time:vC(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):B}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=En(e,"heartbeat"),$_(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Rc?this._siteKey===e._siteKey:!1}}function X_(s,e){if(s===404||s===403)return{backoffCount:1,allowRequestsAfter:Date.now()+y_,httpStatus:s};{const t=e?e.backoffCount:0,n=wc(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+n,httpStatus:s}}}function Z_(s){if(s&&Date.now()-s.allowRequestsAfter<=0)throw mt.create("throttled",{time:vC(s.allowRequestsAfter-Date.now()),httpStatus:s.httpStatus})}/**
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
 */function eD(s=Di(),e){var r;s=We(s);const t=En(s,"app-check");if(la().initialized||k_(s),Ac()&&bc().then(i=>{console.log(`Firebase App Check debug token: ${i}`)}),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o&&!!o.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&((r=o.provider)!=null&&r.isEqual(e.provider)))return i;throw mt.create("already-initialized",{appName:s.name})}const n=t.initialize({options:e});return tD(s,e.provider,e.isTokenAutoRefreshEnabled),Ge(s).isTokenAutoRefreshEnabled&&kC(n,"INTERNAL",()=>{}),n}function tD(s,e,t=!1){const n=__(s,{...bC});n.activated=!0,n.provider=e,n.cachedTokenPromise=F_(s).then(r=>(r&&Ks(r)&&(n.token=r,MC(s,{token:r.token})),r)),n.isTokenAutoRefreshEnabled=t&&s.automaticDataCollectionEnabled,!s.automaticDataCollectionEnabled&&t&&xn.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(s)}/**
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
 */const nD="app-check",rh="app-check-internal";function sD(){kt(new vt(nD,s=>{const e=s.getProvider("app").getImmediate(),t=s.getProvider("heartbeat");return H_(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((s,e,t)=>{s.getProvider(rh).initialize()})),kt(new vt(rh,s=>{const e=s.getProvider("app-check").getImmediate();return j_(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ht(J_,K_)}sD();function VC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rD=VC,GC=new ns("auth","Firebase",VC());/**
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
 */const Lo=new Br("@firebase/auth");function mo(s,...e){Lo.logLevel<=le.WARN&&Lo.warn(`Auth (${$n}): ${s}`,...e)}function Eo(s,...e){Lo.logLevel<=le.ERROR&&Lo.error(`Auth (${$n}): ${s}`,...e)}/**
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
 */function fn(s,...e){throw Oc(s,...e)}function tn(s,...e){return Oc(s,...e)}function vc(s,e,t){const n={...rD(),[e]:t};return new ns("auth","Firebase",n).create(e,{appName:s.name})}function Hn(s){return vc(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oc(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return GC.create(s,...e)}function ie(s,e,...t){if(!s)throw Oc(e,...t)}function cn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Eo(e),new Error(e)}function Cn(s,e){s||cn(e)}/**
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
 */function WB(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function iD(){return ih()==="http:"||ih()==="https:"}function ih(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
 */function oD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iD()||qm()||"connection"in navigator)?navigator.onLine:!0}function aD(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=jm()||$m()}get(){return oD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sc(s,e){Cn(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class UC{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lD=new wi(3e4,6e4);function ua(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function cr(s,e,t,n,r={}){return HC(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const B=Ei({...o,key:s.config.apiKey}).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const l={method:e,headers:c,...i};return Km()||(l.referrerPolicy="strict-origin-when-cross-origin"),s.emulatorConfig&&_i(s.emulatorConfig.host)&&(l.credentials="include"),UC.fetch()(await JC(s,s.config.apiHost,t,B),l)})}async function HC(s,e,t){s._canInitEmulator=!1;const n={...BD,...e};try{const r=new uD(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw to(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[c,l]=B.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(s,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw to(s,"email-already-in-use",o);if(c==="USER_DISABLED")throw to(s,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vc(s,h,l);fn(s,h)}}catch(r){if(r instanceof Ot)throw r;fn(s,"network-request-failed",{message:String(r)})}}async function jC(s,e,t,n,r={}){const i=await cr(s,e,t,n,r);return"mfaPendingCredential"in i&&fn(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function JC(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?Sc(s.config,r):`${s.config.apiScheme}://${r}`;return cD.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class uD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(tn(this.auth,"network-request-failed")),lD.get())})}}function to(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=tn(s,e,n);return r.customData._tokenResponse=t,r}/**
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
 */async function hD(s,e){return cr(s,"POST","/v1/accounts:delete",e)}async function ko(s,e){return cr(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vr(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fD(s,e=!1){const t=We(s),n=await t.getIdToken(e),r=Nc(n);ie(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:Vr(pB(r.auth_time)),issuedAtTime:Vr(pB(r.iat)),expirationTime:Vr(pB(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pB(s){return Number(s)*1e3}function Nc(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const r=hC(t);return r?JSON.parse(r):(Eo("Failed to decode base64 JWT payload"),null)}catch(r){return Eo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function oh(s){const e=Nc(s);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xr(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw KC(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function KC(s){return s instanceof Ot?s.code==="auth/user-disabled"||s.code==="auth/user-token-expired":!1}/**
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
 */class CD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class YB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vr(this.lastLoginAt),this.creationTime=Vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(s){var C;const e=s.auth,t=await s.getIdToken(),n=await Xr(s,ko(e,{idToken:t}));ie(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(C=r.providerUserInfo)!=null&&C.length?qC(r.providerUserInfo):[],o=pD(s.providerData,i),B=s.isAnonymous,c=!(s.email&&r.passwordHash)&&!(o!=null&&o.length),l=B?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new YB(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(s,h)}async function dD(s){const e=We(s);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pD(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function qC(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function gD(s,e){const t=await HC(s,{},async()=>{const n=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await JC(s,r,"/v1/token",`key=${i}`),B=await s._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:B,body:n};return s.emulatorConfig&&_i(s.emulatorConfig.host)&&(c.credentials="include"),UC.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mD(s,e){return cr(s,"POST","/v2/accounts:revokeToken",ua(s,e))}/**
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
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await gD(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Ys;return n&&(ie(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(ie(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function bn(s,e){ie(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Jt{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new CD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new YB(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Xr(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fD(this,e)}reload(){return dD(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await xo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await Xr(this,hD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:C,emailVerified:p,isAnonymous:_,providerData:y,stsTokenManager:S}=t;ie(C&&S,e,"internal-error");const k=Ys.fromJSON(this.name,S);ie(typeof C=="string",e,"internal-error"),bn(n,e.name),bn(r,e.name),ie(typeof p=="boolean",e,"internal-error"),ie(typeof _=="boolean",e,"internal-error"),bn(i,e.name),bn(o,e.name),bn(B,e.name),bn(c,e.name),bn(l,e.name),bn(h,e.name);const J=new Jt({uid:C,auth:e,email:r,emailVerified:p,displayName:n,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:k,createdAt:l,lastLoginAt:h});return y&&Array.isArray(y)&&(J.providerData=y.map($=>({...$}))),c&&(J._redirectEventId=c),J}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ys;r.updateFromServerResponse(t);const i=new Jt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await xo(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];ie(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?qC(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),B=new Ys;B.updateFromIdToken(n);const c=new Jt({uid:r.localId,auth:e,stsTokenManager:B,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new YB(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const ah=new Map;function ln(s){Cn(s instanceof Function,"Expected a class definition");let e=ah.get(s);return e?(Cn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,ah.set(s,e),e)}/**
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
 */class $C{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$C.type="NONE";const Bh=$C;/**
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
 */function _o(s,e,t){return`firebase:${s}:${e}:${t}`}class _s{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=_o(this.userKey,r.apiKey,i),this.fullPersistenceKey=_o("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ko(this.auth,{idToken:e}).catch(()=>{});return t?Jt._fromGetAccountInfoResponse(this.auth,t,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new _s(ln(Bh),e,n);const r=_o(n,e.config.apiKey,e.name);let i=null,o=null;const B=new Set;for(const p of t){let _=null;try{_=await p._get(r)}catch{B.add(p);continue}try{if(_){let y;if(typeof _=="string"){const S=await ko(e,{idToken:_}).catch(()=>{});if(!S)break;y=await Jt._fromGetAccountInfoResponse(e,S,_)}else y=Jt._fromJSON(e,_);i=y,o=p;break}}catch{}}const c=(await Promise.all(t.map(async p=>{try{if(await p._isAvailable())return p;p._lastProbeTimedOut&&B.add(p)}catch{return}}))).filter(p=>p);let l=c[0]||ln(Bh),h=null;o&&i&&(o!==l&&(h=i),l=o);const C=c.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!C.length?new _s(l,e,n):(l=C[0],h&&await l._set(r,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==l&&!B.has(p))try{await p._remove(r)}catch{}})),new _s(l,e,n))}}/**
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
 */function ch(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZC(e))return"Blackberry";if(ed(e))return"Webos";if(WC(e))return"Safari";if((e.includes("chrome/")||YC(e))&&!e.includes("edge/"))return"Chrome";if(XC(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function zC(s=at()){return/firefox\//i.test(s)}function WC(s=at()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YC(s=at()){return/crios\//i.test(s)}function QC(s=at()){return/iemobile/i.test(s)}function XC(s=at()){return/android/i.test(s)}function ZC(s=at()){return/blackberry/i.test(s)}function ed(s=at()){return/webos/i.test(s)}function Pc(s=at()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function ED(s=at()){var e;return Pc(s)&&!!((e=window.navigator)!=null&&e.standalone)}function _D(){return zm()&&document.documentMode===10}function td(s=at()){return Pc(s)||XC(s)||ed(s)||ZC(s)||/windows phone/i.test(s)||QC(s)}/**
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
 */function nd(s,e=[]){let t;switch(s){case"Browser":t=ch(at());break;case"Worker":t=`${ch(at())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$n}/${n}`}/**
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
 */class DD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,B)=>{try{const c=e(i);o(c)}catch(c){B(c)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function wD(s,e={}){return cr(s,"GET","/v2/passwordPolicy",ua(s,e))}/**
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
 */const yD=6;class ID{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??yD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class TD{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lh(this),this.idTokenSubscription=new lh(this),this.beforeStateQueue=new DD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted){try{this.persistenceManager=await _s.create(this,e)}catch(o){mo(`Failed to initialize persistence: ${o}`),this.persistenceManager=await _s.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){mo(`Failed to initialize current user: ${o}`)}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ko(this,{idToken:e}),n=await Jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===B)&&(c!=null&&c.user)&&(n=c.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(t){if(KC(t))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Hn(this));const t=e?We(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wD(this),t=new ID(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await mD(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}).catch(c=>{if(!o)if(typeof t!="function"&&t.error)t.error(c);else if(n)n(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,n,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),r=vc(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&mo(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ha(s){return We(s)}class lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AD(s){Fc=s}function bD(s){return Fc.loadJS(s)}function RD(){return Fc.gapiScript}function vD(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */function OD(s,e){const t=En(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(qn(i,e??{}))return r;fn(r,"already-initialized")}return t.initialize({options:e})}function SD(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ln);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ND(s,e,t){const n=ha(s);ie(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=sd(e),{host:o,port:B}=PD(e),c=B===null?"":`:${B}`,l={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){ie(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ie(qn(l,n.config.emulator)&&qn(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,_i(o)?gC(`${i}//${o}${c}`):FD()}function sd(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function PD(s){const e=sd(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:uh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:uh(o)}}}function uh(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function FD(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class rd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,t){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}/**
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
 */async function Qs(s,e){return jC(s,"POST","/v1/accounts:signInWithIdp",ua(s,e))}/**
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
 */const LD="http://localhost";class Is extends rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Is(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qs(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qs(e,t)}buildRequest(){const e={requestUri:LD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ei(t)}return e}}/**
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
 */class id{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends id{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends yi{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Is._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Pn.credential(t,n)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class Fn extends yi{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Ln extends yi{constructor(){super("twitter.com")}static credential(e,t){return Is._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ln.credential(t,n)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */async function kD(s,e){return jC(s,"POST","/v1/accounts:signUp",ua(s,e))}/**
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
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Jt._fromIdTokenResponse(e,n,r),o=hh(n);return new zn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=hh(n);return new zn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function hh(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */async function xD(s){var r;if(Ft(s.app))return Promise.reject(Hn(s));const e=ha(s);if(await e._initializationPromise,(r=e.currentUser)!=null&&r.isAnonymous)return new zn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await kD(e,{returnSecureToken:!0}),n=await zn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class Mo extends Ot{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Mo(e,t,n,r)}}function od(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(s,i,e,n):i})}async function MD(s,e,t=!1){const n=await Xr(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return zn._forOperation(s,"link",n)}/**
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
 */async function VD(s,e,t=!1){const{auth:n}=s;if(Ft(n.app))return Promise.reject(Hn(n));const r="reauthenticate";try{const i=await Xr(s,od(n,r,e,s),t);ie(i.idToken,n,"internal-error");const o=Nc(i.idToken);ie(o,n,"internal-error");const{sub:B}=o;return ie(s.uid===B,n,"user-mismatch"),zn._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(n,"user-mismatch"),i}}/**
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
 */async function GD(s,e,t=!1){if(Ft(s.app))return Promise.reject(Hn(s));const n="signIn",r=await od(s,n,e),i=await zn._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}function UD(s,e,t,n){return We(s).onIdTokenChanged(e,t,n)}function HD(s,e,t){return We(s).beforeAuthStateChanged(e,t)}const Vo="__sak";/**
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
 */class ad{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jD=1e3,JD=10;class Bd extends ad{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);_D()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,JD):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},jD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bd.type="LOCAL";const KD=Bd;/**
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
 */class cd extends ad{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cd.type="SESSION";const ld=cd;/**
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
 */function qD(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new fa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const B=Array.from(o).map(async l=>l(t.origin,i)),c=await qD(B);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
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
 */function Lc(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class $D{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((B,c)=>{const l=Lc("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(C){const p=C;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function zD(s){nn().location.href=s}/**
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
 */function ud(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function WD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YD(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function QD(){return ud()?self:null}/**
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
 */const hd="firebaseLocalStorageDb",XD=1,Go="firebaseLocalStorage",fd="fbase_key",ZD=800,ew=3,fh=800,Ca=2500,Gr="DB_TIMEOUT";class Ii{constructor(e){this.request=e}toPromise(e=Ca){return new Promise((t,n)=>{let r=!1;const i=setTimeout(()=>{var o;if(!r){r=!0;try{(o=this.request.transaction)==null||o.abort()}catch{}n(new Error(Gr))}},e);this.request.addEventListener("success",()=>{r||(r=!0,clearTimeout(i),t(this.request.result))}),this.request.addEventListener("error",()=>{r||(r=!0,clearTimeout(i),n(this.request.error))})})}}function da(s,e){return s.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function tw(){const s=indexedDB.deleteDatabase(hd);return new Ii(s).toPromise()}function Cd(){const s=indexedDB.open(hd,XD);return new Promise((e,t)=>{let n=!1;const r=setTimeout(()=>{n||(n=!0,t(new Error(Gr)))},Ca);s.addEventListener("error",()=>{n||(n=!0,clearTimeout(r),t(s.error))}),s.addEventListener("upgradeneeded",()=>{const i=s.result;try{i.createObjectStore(Go,{keyPath:fd})}catch(o){n||(n=!0,clearTimeout(r),t(o))}}),s.addEventListener("success",async()=>{const i=s.result;if(n){i.close();return}if(clearTimeout(r),i.objectStoreNames.contains(Go))n=!0,e(i);else{i.close();try{await tw();const o=await Cd();n=!0,e(o)}catch(o){n||(n=!0,t(o))}}})})}async function Ch(s,e,t,n=Ca){const r=da(s,!0).put({[fd]:e,value:t});return new Ii(r).toPromise(n)}async function nw(s,e){const t=da(s,!1).get(e),n=await new Ii(t).toPromise();return n===void 0?null:n.value}function dh(s,e,t=Ca){const n=da(s,!0).delete(e);return new Ii(n).toPromise(t)}class dd{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this._lastProbeTimedOut=!1,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.dbPromise)return this.dbPromise;const e=Cd();return this.dbPromise=e,e.catch(()=>{this.dbPromise===e&&(this.dbPromise=null)}),e}async _withRetries(e){let t=0;for(;;){let n,r=null;try{const i=this._openDb();return r=this.dbPromise,n=await i,await e(n)}catch(i){if(n)n.close(),r&&this.dbPromise===r&&(this.dbPromise=null);else if(this.dbPromise&&this.dbPromise===r){const B=this.dbPromise;this.dbPromise=null;try{(await B).close()}catch{}}if(i instanceof Error&&i.message===Gr||t++>ew)throw i}}}async initializeServiceWorkerMessaging(){return ud()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(QD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await WD(),!this.activeServiceWorker)return;this.sender=new $D(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){this._lastProbeTimedOut=!1;try{return indexedDB?(await this._withRetries(async e=>{await Ch(e,Vo,"1",fh),await dh(e,Vo,fh)}),!0):!1}catch(e){this._lastProbeTimedOut=e instanceof Error&&e.message===Gr}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ch(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){try{const t=await this._withRetries(n=>nw(n,e));return this.localCache[e]=t,t}catch(t){if(t instanceof Error&&t.message===Gr&&this.localCache[e]!=null)return this.localCache[e];throw t}}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=da(r,!1).getAll();return new Ii(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||mo(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,e in this.localCache||this._get(e).catch(()=>{})),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}dd.type="LOCAL";const sw=dd;new wi(3e4,6e4);/**
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
 */function rw(s,e){return e?ln(e):(ie(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class kc extends rd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iw(s){return GD(s.auth,new kc(s),s.bypassAuthState)}function ow(s){const{auth:e,user:t}=s;return ie(t,e,"internal-error"),VD(t,new kc(s),s.bypassAuthState)}async function aw(s){const{auth:e,user:t}=s;return ie(t,e,"internal-error"),MD(t,new kc(s),s.bypassAuthState)}/**
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
 */class pd{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(n){this.pendingPromise&&this.reject(n)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iw;case"linkViaPopup":case"linkViaRedirect":return aw;case"reauthViaPopup":case"reauthViaRedirect":return ow;default:fn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bw=new wi(2e3,1e4);class qs extends pd{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bw.get())};e()}}qs.currentPopupAction=null;/**
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
 */const cw="pendingRedirect",Do=new Map;class lw extends pd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const n=await uw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uw(s,e){const t=Cw(e),n=fw(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function hw(s,e){Do.set(s._key(),e)}function fw(s){return ln(s._redirectPersistence)}function Cw(s){return _o(cw,s.config.apiKey,s.name)}async function dw(s,e,t=!1){if(Ft(s.app))return Promise.reject(Hn(s));const n=ha(s),r=rw(n,e),o=await new lw(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const pw=600*1e3;class gw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!gd(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(tn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function gd({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mw(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gd(s);default:return!1}}/**
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
 */async function Ew(s,e={}){return cr(s,"GET","/v1/projects",e)}/**
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
 */const _w=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dw=/^https?/;async function ww(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Ew(s);for(const t of e)try{if(yw(t))return}catch{}fn(s,"unauthorized-domain")}function yw(s){const e=WB(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Dw.test(t))return!1;if(_w.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const Iw=new wi(3e4,6e4);function gh(){const s=nn().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function Tw(s){return new Promise((e,t)=>{var r,i,o;function n(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),t(tn(s,"network-request-failed"))},timeout:Iw.get()})}if((i=(r=nn().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=nn().gapi)!=null&&o.load)n();else{const B=vD("iframefcb");return nn()[B]=()=>{gapi.load?n():t(tn(s,"network-request-failed"))},bD(`${RD()}?onload=${B}`).catch(c=>t(c))}}).catch(e=>{throw wo=null,e})}let wo=null;function Aw(s){return wo=wo||Tw(s),wo}/**
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
 */const bw=new wi(5e3,15e3),Rw="__/auth/iframe",vw="emulator/auth/iframe",Ow={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nw(s){const e=s.config;ie(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Sc(e,vw):`https://${s.config.authDomain}/${Rw}`,n={apiKey:e.apiKey,appName:s.name,v:$n},r=Sw.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Ei(n).slice(1)}`}async function Pw(s){const e=await Aw(s),t=nn().gapi;return ie(t,s,"internal-error"),e.open({where:document.body,url:Nw(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ow,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=tn(s,"network-request-failed"),B=nn().setTimeout(()=>{i(o)},bw.get());function c(){nn().clearTimeout(B),r(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Fw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lw=500,kw=600,xw="_blank",Mw="http://localhost";class mh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vw(s,e,t,n=Lw,r=kw){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let B="";const c={...Fw,width:n.toString(),height:r.toString(),top:i,left:o},l=at().toLowerCase();t&&(B=YC(l)?xw:t),zC(l)&&(e=e||Mw,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[_,y])=>`${p}${_}=${y},`,"");if(ED(l)&&B!=="_self")return Gw(e||"",B),new mh(null);const C=window.open(e||"",B,h);ie(C,s,"popup-blocked");try{C.focus()}catch{}return new mh(C)}function Gw(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Uw="__/auth/handler",Hw="emulator/auth/handler",jw=encodeURIComponent("fac");async function Eh(s,e,t,n,r,i){ie(s.config.authDomain,s,"auth-domain-config-required"),ie(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:$n,eventId:r};if(e instanceof id){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Zm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,C]of Object.entries({}))o[h]=C}if(e instanceof yi){const h=e.getScopes().filter(C=>C!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const c=await s._getAppCheckToken(),l=c?`#${jw}=${encodeURIComponent(c)}`:"";return`${Jw(s)}?${Ei(B).slice(1)}${l}`}function Jw({config:s}){return s.emulator?Sc(s,Hw):`https://${s.authDomain}/${Uw}`}/**
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
 */const gB="webStorageSupport";class Kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ld,this._completeRedirectFn=dw,this._overrideRedirectResult=hw}async _openPopup(e,t,n,r){var o;Cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Eh(e,t,n,WB(),r);return Vw(e,i,Lc())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Eh(e,t,n,WB(),r);return zD(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Cn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Pw(e),n=new gw(e);return t.register("authEvent",r=>(ie(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gB,{type:gB},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[gB];i!==void 0&&t(!!i),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ww(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return td()||WC()||Pc()}}const qw=Kw;var _h="@firebase/auth",Dh="1.13.11";/**
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
 */class $w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zw(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ww(s){kt(new vt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=n.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:B,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(s)},l=new TD(n,r,i,c);return SD(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),kt(new vt("auth-internal",e=>{const t=ha(e.getProvider("auth").getImmediate());return(n=>new $w(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(_h,Dh,zw(s)),ht(_h,Dh,"esm2020")}/**
 * @license
 * Copyright 2026 Google LLC
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
 */function Yw(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}function Qw(s){return new Promise((e,t)=>{const n=document.createElement("script");try{AC(n,s)}catch(r){t(r);return}n.onload=e,n.onerror=r=>{const i=tn("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",Yw().appendChild(n)})}/**
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
 */const Xw=300,Zw=pC("authIdTokenMaxAge")||Xw;let wh=null;const ey=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Zw)return;const r=t==null?void 0:t.token;wh!==r&&(wh=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ty(s=Di()){const e=En(s,"auth");if(e.isInitialized())return e.getImmediate();const t=OD(s,{popupRedirectResolver:qw,persistence:[sw,KD,ld]}),n=pC("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=ey(i.toString());HD(t,o,()=>o(t.currentUser)),UD(t,B=>o(B))}}const r=CC("auth");return r&&ND(t,`http://${r}`),t}AD({loadJS:Qw,gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ww("Browser");var yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xc;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function w(){}w.prototype=E.prototype,b.F=E.prototype,b.prototype=new w,b.prototype.constructor=b,b.D=function(R,A,O){for(var D=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)D[Ct-2]=arguments[Ct];return E.prototype[A].apply(R,D)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,E,w){w||(w=0);const R=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)R[A]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(A=0;A<16;++A)R[A]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=b.g[0],w=b.g[1],A=b.g[2];let O=b.g[3],D;D=E+(O^w&(A^O))+R[0]+3614090360&4294967295,E=w+(D<<7&4294967295|D>>>25),D=O+(A^E&(w^A))+R[1]+3905402710&4294967295,O=E+(D<<12&4294967295|D>>>20),D=A+(w^O&(E^w))+R[2]+606105819&4294967295,A=O+(D<<17&4294967295|D>>>15),D=w+(E^A&(O^E))+R[3]+3250441966&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(O^w&(A^O))+R[4]+4118548399&4294967295,E=w+(D<<7&4294967295|D>>>25),D=O+(A^E&(w^A))+R[5]+1200080426&4294967295,O=E+(D<<12&4294967295|D>>>20),D=A+(w^O&(E^w))+R[6]+2821735955&4294967295,A=O+(D<<17&4294967295|D>>>15),D=w+(E^A&(O^E))+R[7]+4249261313&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(O^w&(A^O))+R[8]+1770035416&4294967295,E=w+(D<<7&4294967295|D>>>25),D=O+(A^E&(w^A))+R[9]+2336552879&4294967295,O=E+(D<<12&4294967295|D>>>20),D=A+(w^O&(E^w))+R[10]+4294925233&4294967295,A=O+(D<<17&4294967295|D>>>15),D=w+(E^A&(O^E))+R[11]+2304563134&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(O^w&(A^O))+R[12]+1804603682&4294967295,E=w+(D<<7&4294967295|D>>>25),D=O+(A^E&(w^A))+R[13]+4254626195&4294967295,O=E+(D<<12&4294967295|D>>>20),D=A+(w^O&(E^w))+R[14]+2792965006&4294967295,A=O+(D<<17&4294967295|D>>>15),D=w+(E^A&(O^E))+R[15]+1236535329&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(A^O&(w^A))+R[1]+4129170786&4294967295,E=w+(D<<5&4294967295|D>>>27),D=O+(w^A&(E^w))+R[6]+3225465664&4294967295,O=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(O^E))+R[11]+643717713&4294967295,A=O+(D<<14&4294967295|D>>>18),D=w+(O^E&(A^O))+R[0]+3921069994&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(A^O&(w^A))+R[5]+3593408605&4294967295,E=w+(D<<5&4294967295|D>>>27),D=O+(w^A&(E^w))+R[10]+38016083&4294967295,O=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(O^E))+R[15]+3634488961&4294967295,A=O+(D<<14&4294967295|D>>>18),D=w+(O^E&(A^O))+R[4]+3889429448&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(A^O&(w^A))+R[9]+568446438&4294967295,E=w+(D<<5&4294967295|D>>>27),D=O+(w^A&(E^w))+R[14]+3275163606&4294967295,O=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(O^E))+R[3]+4107603335&4294967295,A=O+(D<<14&4294967295|D>>>18),D=w+(O^E&(A^O))+R[8]+1163531501&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(A^O&(w^A))+R[13]+2850285829&4294967295,E=w+(D<<5&4294967295|D>>>27),D=O+(w^A&(E^w))+R[2]+4243563512&4294967295,O=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(O^E))+R[7]+1735328473&4294967295,A=O+(D<<14&4294967295|D>>>18),D=w+(O^E&(A^O))+R[12]+2368359562&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(w^A^O)+R[5]+4294588738&4294967295,E=w+(D<<4&4294967295|D>>>28),D=O+(E^w^A)+R[8]+2272392833&4294967295,O=E+(D<<11&4294967295|D>>>21),D=A+(O^E^w)+R[11]+1839030562&4294967295,A=O+(D<<16&4294967295|D>>>16),D=w+(A^O^E)+R[14]+4259657740&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(w^A^O)+R[1]+2763975236&4294967295,E=w+(D<<4&4294967295|D>>>28),D=O+(E^w^A)+R[4]+1272893353&4294967295,O=E+(D<<11&4294967295|D>>>21),D=A+(O^E^w)+R[7]+4139469664&4294967295,A=O+(D<<16&4294967295|D>>>16),D=w+(A^O^E)+R[10]+3200236656&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(w^A^O)+R[13]+681279174&4294967295,E=w+(D<<4&4294967295|D>>>28),D=O+(E^w^A)+R[0]+3936430074&4294967295,O=E+(D<<11&4294967295|D>>>21),D=A+(O^E^w)+R[3]+3572445317&4294967295,A=O+(D<<16&4294967295|D>>>16),D=w+(A^O^E)+R[6]+76029189&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(w^A^O)+R[9]+3654602809&4294967295,E=w+(D<<4&4294967295|D>>>28),D=O+(E^w^A)+R[12]+3873151461&4294967295,O=E+(D<<11&4294967295|D>>>21),D=A+(O^E^w)+R[15]+530742520&4294967295,A=O+(D<<16&4294967295|D>>>16),D=w+(A^O^E)+R[2]+3299628645&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(A^(w|~O))+R[0]+4096336452&4294967295,E=w+(D<<6&4294967295|D>>>26),D=O+(w^(E|~A))+R[7]+1126891415&4294967295,O=E+(D<<10&4294967295|D>>>22),D=A+(E^(O|~w))+R[14]+2878612391&4294967295,A=O+(D<<15&4294967295|D>>>17),D=w+(O^(A|~E))+R[5]+4237533241&4294967295,w=A+(D<<21&4294967295|D>>>11),D=E+(A^(w|~O))+R[12]+1700485571&4294967295,E=w+(D<<6&4294967295|D>>>26),D=O+(w^(E|~A))+R[3]+2399980690&4294967295,O=E+(D<<10&4294967295|D>>>22),D=A+(E^(O|~w))+R[10]+4293915773&4294967295,A=O+(D<<15&4294967295|D>>>17),D=w+(O^(A|~E))+R[1]+2240044497&4294967295,w=A+(D<<21&4294967295|D>>>11),D=E+(A^(w|~O))+R[8]+1873313359&4294967295,E=w+(D<<6&4294967295|D>>>26),D=O+(w^(E|~A))+R[15]+4264355552&4294967295,O=E+(D<<10&4294967295|D>>>22),D=A+(E^(O|~w))+R[6]+2734768916&4294967295,A=O+(D<<15&4294967295|D>>>17),D=w+(O^(A|~E))+R[13]+1309151649&4294967295,w=A+(D<<21&4294967295|D>>>11),D=E+(A^(w|~O))+R[4]+4149444226&4294967295,E=w+(D<<6&4294967295|D>>>26),D=O+(w^(E|~A))+R[11]+3174756917&4294967295,O=E+(D<<10&4294967295|D>>>22),D=A+(E^(O|~w))+R[2]+718787259&4294967295,A=O+(D<<15&4294967295|D>>>17),D=w+(O^(A|~E))+R[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(A+(D<<21&4294967295|D>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+O&4294967295}n.prototype.v=function(b,E){E===void 0&&(E=b.length);const w=E-this.blockSize,R=this.C;let A=this.h,O=0;for(;O<E;){if(A==0)for(;O<=w;)r(this,b,O),O+=this.blockSize;if(typeof b=="string"){for(;O<E;)if(R[A++]=b.charCodeAt(O++),A==this.blockSize){r(this,R),A=0;break}}else for(;O<E;)if(R[A++]=b[O++],A==this.blockSize){r(this,R),A=0;break}}this.h=A,this.o+=E},n.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;E=this.o*8;for(var w=b.length-8;w<b.length;++w)b[w]=E&255,E/=256;for(this.v(b),b=Array(16),E=0,w=0;w<4;++w)for(let R=0;R<32;R+=8)b[E++]=this.g[w]>>>R&255;return b};function i(b,E){var w=B;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=E(b)}function o(b,E){this.h=E;const w=[];let R=!0;for(let A=b.length-1;A>=0;A--){const O=b[A]|0;R&&O==E||(w[A]=O,R=!1)}this.g=w}var B={};function c(b){return-128<=b&&b<128?i(b,function(E){return new o([E|0],E<0?-1:0)}):new o([b|0],b<0?-1:0)}function l(b){if(isNaN(b)||!isFinite(b))return C;if(b<0)return k(l(-b));const E=[];let w=1;for(let R=0;b>=w;R++)E[R]=b/w|0,w*=4294967296;return new o(E,0)}function h(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return k(h(b.substring(1),E));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=l(Math.pow(E,8));let R=C;for(let O=0;O<b.length;O+=8){var A=Math.min(8,b.length-O);const D=parseInt(b.substring(O,O+A),E);A<8?(A=l(Math.pow(E,A)),R=R.j(A).add(l(D))):(R=R.j(w),R=R.add(l(D)))}return R}var C=c(0),p=c(1),_=c(16777216);s=o.prototype,s.m=function(){if(S(this))return-k(this).m();let b=0,E=1;for(let w=0;w<this.g.length;w++){const R=this.i(w);b+=(R>=0?R:4294967296+R)*E,E*=4294967296}return b},s.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(y(this))return"0";if(S(this))return"-"+k(this).toString(b);const E=l(Math.pow(b,6));var w=this;let R="";for(;;){const A=Ce(w,E).g;w=J(w,A.j(E));let O=((w.g.length>0?w.g[0]:w.h)>>>0).toString(b);if(w=A,y(w))return O+R;for(;O.length<6;)O="0"+O;R=O+R}},s.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function y(b){if(b.h!=0)return!1;for(let E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function S(b){return b.h==-1}s.l=function(b){return b=J(this,b),S(b)?-1:y(b)?0:1};function k(b){const E=b.g.length,w=[];for(let R=0;R<E;R++)w[R]=~b.g[R];return new o(w,~b.h).add(p)}s.abs=function(){return S(this)?k(this):this},s.add=function(b){const E=Math.max(this.g.length,b.g.length),w=[];let R=0;for(let A=0;A<=E;A++){let O=R+(this.i(A)&65535)+(b.i(A)&65535),D=(O>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);R=D>>>16,O&=65535,D&=65535,w[A]=D<<16|O}return new o(w,w[w.length-1]&-2147483648?-1:0)};function J(b,E){return b.add(k(E))}s.j=function(b){if(y(this)||y(b))return C;if(S(this))return S(b)?k(this).j(k(b)):k(k(this).j(b));if(S(b))return k(this.j(k(b)));if(this.l(_)<0&&b.l(_)<0)return l(this.m()*b.m());const E=this.g.length+b.g.length,w=[];for(var R=0;R<2*E;R++)w[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<b.g.length;A++){const O=this.i(R)>>>16,D=this.i(R)&65535,Ct=b.i(A)>>>16,rs=b.i(A)&65535;w[2*R+2*A]+=D*rs,$(w,2*R+2*A),w[2*R+2*A+1]+=O*rs,$(w,2*R+2*A+1),w[2*R+2*A+1]+=D*Ct,$(w,2*R+2*A+1),w[2*R+2*A+2]+=O*Ct,$(w,2*R+2*A+2)}for(b=0;b<E;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=E;b<2*E;b++)w[b]=0;return new o(w,0)};function $(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function re(b,E){this.g=b,this.h=E}function Ce(b,E){if(y(E))throw Error("division by zero");if(y(b))return new re(C,C);if(S(b))return E=Ce(k(b),E),new re(k(E.g),k(E.h));if(S(E))return E=Ce(b,k(E)),new re(k(E.g),E.h);if(b.g.length>30){if(S(b)||S(E))throw Error("slowDivide_ only works with positive integers.");for(var w=p,R=E;R.l(b)<=0;)w=Te(w),R=Te(R);var A=Oe(w,1),O=Oe(R,1);for(R=Oe(R,2),w=Oe(w,2);!y(R);){var D=O.add(R);D.l(b)<=0&&(A=A.add(w),O=D),R=Oe(R,1),w=Oe(w,1)}return E=J(b,A.j(E)),new re(A,E)}for(A=C;b.l(E)>=0;){for(w=Math.max(1,Math.floor(b.m()/E.m())),R=Math.ceil(Math.log(w)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),O=l(w),D=O.j(E);S(D)||D.l(b)>0;)w-=R,O=l(w),D=O.j(E);y(O)&&(O=p),A=A.add(O),b=J(b,D)}return new re(A,b)}s.B=function(b){return Ce(this,b).h},s.and=function(b){const E=Math.max(this.g.length,b.g.length),w=[];for(let R=0;R<E;R++)w[R]=this.i(R)&b.i(R);return new o(w,this.h&b.h)},s.or=function(b){const E=Math.max(this.g.length,b.g.length),w=[];for(let R=0;R<E;R++)w[R]=this.i(R)|b.i(R);return new o(w,this.h|b.h)},s.xor=function(b){const E=Math.max(this.g.length,b.g.length),w=[];for(let R=0;R<E;R++)w[R]=this.i(R)^b.i(R);return new o(w,this.h^b.h)};function Te(b){const E=b.g.length+1,w=[];for(let R=0;R<E;R++)w[R]=b.i(R)<<1|b.i(R-1)>>>31;return new o(w,b.h)}function Oe(b,E){const w=E>>5;E%=32;const R=b.g.length-w,A=[];for(let O=0;O<R;O++)A[O]=E>0?b.i(O+w)>>>E|b.i(O+w+1)<<32-E:b.i(O+w);return new o(A,b.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=h,xc=o}).apply(typeof yh<"u"?yh:typeof self<"u"?self:typeof window<"u"?window:{});function Ye(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)}var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var md,Lr,Ed,yo,QB,_d,Dd,wd;(function(){var s,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function r(a,u){if(u)e:{var f=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var v=a[d];if(!(v in f))break e;f=f[v]}a=a[a.length-1],d=f[a],u=u(d),u!=d&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(u){var f=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&f.push([d,u[d]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,f){return a.call.apply(a.bind,arguments)}function l(a,u,f){return l=c,l.apply(null,arguments)}function h(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var d=f.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function C(a,u){function f(){}f.prototype=u.prototype,a.Z=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(d,v,N){for(var K=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)K[Be-2]=arguments[Be];return u.prototype[v].apply(d,K)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const u=a.length;if(u>0){const f=Array(u);for(let d=0;d<u;d++)f[d]=a[d];return f}return[]}function y(a,u){for(let d=1;d<arguments.length;d++){const v=arguments[d];var f=typeof v;if(f=f!="object"?f:v?Array.isArray(v)?"array":f:"null",f=="array"||f=="object"&&typeof v.length=="number"){f=a.length||0;const N=v.length||0;a.length=f+N;for(let K=0;K<N;K++)a[f+K]=v[K]}else a.push(v)}}class S{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(a){o.setTimeout(()=>{throw a},0)}function J(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ${constructor(){this.h=this.g=null}add(u,f){const d=re.get();d.set(u,f),this.h?this.h.next=d:this.g=d,this.h=d}}var re=new S(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Oe=!1,b=new $,E=()=>{const a=Promise.resolve(void 0);Te=()=>{a.then(w)}};function w(){for(var a;a=J();){try{a.h.call(a.g)}catch(f){k(f)}var u=re;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}Oe=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,u),o.removeEventListener("test",f,u)}catch{}return a})();function D(a){return/^[\s\xa0]*$/.test(a)}function Ct(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}C(Ct,A),Ct.prototype.init=function(a,u){const f=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ct.Z.h.call(this)},Ct.prototype.h=function(){Ct.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rs="closure_listenable_"+(Math.random()*1e6|0),Qg=0;function Xg(a,u,f,d,v){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!d,this.ha=v,this.key=++Qg,this.da=this.fa=!1}function xi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mi(a,u,f){for(const d in a)u.call(f,a[d],d,a)}function Zg(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function jl(a){const u={};for(const f in a)u[f]=a[f];return u}const Jl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kl(a,u){let f,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(f in d)a[f]=d[f];for(let N=0;N<Jl.length;N++)f=Jl[N],Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}}function Vi(a){this.src=a,this.g={},this.h=0}Vi.prototype.add=function(a,u,f,d,v){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const K=Ga(a,u,d,v);return K>-1?(u=a[K],f||(u.fa=!1)):(u=new Xg(u,this.src,N,!!d,v),u.fa=f,a.push(u)),u};function Va(a,u){const f=u.type;if(f in a.g){var d=a.g[f],v=Array.prototype.indexOf.call(d,u,void 0),N;(N=v>=0)&&Array.prototype.splice.call(d,v,1),N&&(xi(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ga(a,u,f,d){for(let v=0;v<a.length;++v){const N=a[v];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==d)return v}return-1}var Ua="closure_lm_"+(Math.random()*1e6|0),Ha={};function ql(a,u,f,d,v){if(Array.isArray(u)){for(let N=0;N<u.length;N++)ql(a,u[N],f,d,v);return null}return f=Wl(f),a&&a[rs]?a.J(u,f,B(d)?!!d.capture:!1,v):em(a,u,f,!1,d,v)}function em(a,u,f,d,v,N){if(!u)throw Error("Invalid event type");const K=B(v)?!!v.capture:!!v;let Be=Ja(a);if(Be||(a[Ua]=Be=new Vi(a)),f=Be.add(u,f,d,K,N),f.proxy)return f;if(d=tm(),f.proxy=d,d.src=a,d.listener=f,a.addEventListener)O||(v=K),v===void 0&&(v=!1),a.addEventListener(u.toString(),d,v);else if(a.attachEvent)a.attachEvent(zl(u.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return f}function tm(){function a(f){return u.call(a.src,a.listener,f)}const u=nm;return a}function $l(a,u,f,d,v){if(Array.isArray(u))for(var N=0;N<u.length;N++)$l(a,u[N],f,d,v);else d=B(d)?!!d.capture:!!d,f=Wl(f),a&&a[rs]?(a=a.i,N=String(u).toString(),N in a.g&&(u=a.g[N],f=Ga(u,f,d,v),f>-1&&(xi(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete a.g[N],a.h--)))):a&&(a=Ja(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ga(u,f,d,v)),(f=a>-1?u[a]:null)&&ja(f))}function ja(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[rs])Va(u.i,a);else{var f=a.type,d=a.proxy;u.removeEventListener?u.removeEventListener(f,d,a.capture):u.detachEvent?u.detachEvent(zl(f),d):u.addListener&&u.removeListener&&u.removeListener(d),(f=Ja(u))?(Va(f,a),f.h==0&&(f.src=null,u[Ua]=null)):xi(a)}}}function zl(a){return a in Ha?Ha[a]:Ha[a]="on"+a}function nm(a,u){if(a.da)a=!0;else{u=new Ct(u,this);const f=a.listener,d=a.ha||a.src;a.fa&&ja(a),a=f.call(d,u)}return a}function Ja(a){return a=a[Ua],a instanceof Vi?a:null}var Ka="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wl(a){return typeof a=="function"?a:(a[Ka]||(a[Ka]=function(u){return a.handleEvent(u)}),a[Ka])}function tt(){R.call(this),this.i=new Vi(this),this.M=this,this.G=null}C(tt,R),tt.prototype[rs]=!0,tt.prototype.removeEventListener=function(a,u,f,d){$l(this,a,u,f,d)};function ct(a,u){var f,d=a.G;if(d)for(f=[];d;d=d.G)f.push(d);if(a=a.M,d=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var v=u;u=new A(d,a),Kl(u,v)}v=!0;let N,K;if(f)for(K=f.length-1;K>=0;K--)N=u.g=f[K],v=Gi(N,d,!0,u)&&v;if(N=u.g=a,v=Gi(N,d,!0,u)&&v,v=Gi(N,d,!1,u)&&v,f)for(K=0;K<f.length;K++)N=u.g=f[K],v=Gi(N,d,!1,u)&&v}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const f=a.g[u];for(let d=0;d<f.length;d++)xi(f[d]);delete a.g[u],a.h--}}this.G=null},tt.prototype.J=function(a,u,f,d){return this.i.add(String(a),u,!1,f,d)},tt.prototype.K=function(a,u,f,d){return this.i.add(String(a),u,!0,f,d)};function Gi(a,u,f,d){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let N=0;N<u.length;++N){const K=u[N];if(K&&!K.da&&K.capture==f){const Be=K.listener,Me=K.ha||K.src;K.fa&&Va(a.i,K),v=Be.call(Me,d)!==!1&&v}}return v&&!d.defaultPrevented}function sm(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Yl(a){a.g=sm(()=>{a.g=null,a.i&&(a.i=!1,Yl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class rm extends R{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Yl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(a){R.call(this),this.h=a,this.g={}}C(pr,R);var Ql=[];function Xl(a){Mi(a.g,function(u,f){this.g.hasOwnProperty(f)&&ja(u)},a),a.g={}}pr.prototype.N=function(){pr.Z.N.call(this),Xl(this)},pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qa=o.JSON.stringify,im=o.JSON.parse,om=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Zl(){}function eu(){}var gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $a(){A.call(this,"d")}C($a,A);function za(){A.call(this,"c")}C(za,A);var is={},tu=null;function Ui(){return tu=tu||new tt}is.Ia="serverreachability";function nu(a){A.call(this,is.Ia,a)}C(nu,A);function mr(a){const u=Ui();ct(u,new nu(u))}is.STAT_EVENT="statevent";function su(a,u){A.call(this,is.STAT_EVENT,a),this.stat=u}C(su,A);function lt(a){const u=Ui();ct(u,new su(u,a))}is.Ja="timingevent";function ru(a,u){A.call(this,is.Ja,a),this.size=u}C(ru,A);function Er(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function _r(){this.g=!0}_r.prototype.ua=function(){this.g=!1};function am(a,u,f,d,v,N){a.info(function(){if(a.g)if(N){var K="",Be=N.split("&");for(let _e=0;_e<Be.length;_e++){var Me=Be[_e].split("=");if(Me.length>1){const He=Me[0];Me=Me[1];const Yt=He.split("_");K=Yt.length>=2&&Yt[1]=="type"?K+(He+"="+Me+"&"):K+(He+"=redacted&")}}}else K=null;else K=N;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+u+`
`+f+`
`+K})}function Bm(a,u,f,d,v,N,K){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+u+`
`+f+`
`+N+" "+K})}function xs(a,u,f,d){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+lm(a,f)+(d?" "+d:"")})}function cm(a,u){a.info(function(){return"TIMEOUT: "+u})}_r.prototype.info=function(){};function lm(a,u){if(!a.g)return u;if(!u)return null;try{const N=JSON.parse(u);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var f=N[a];if(!(f.length<2)){var d=f[1];if(Array.isArray(d)&&!(d.length<1)){var v=d[0];if(v!="noop"&&v!="stop"&&v!="close")for(let K=1;K<d.length;K++)d[K]=""}}}}return qa(N)}catch{return u}}var Hi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},iu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ou;function Wa(){}C(Wa,Zl),Wa.prototype.g=function(){return new XMLHttpRequest},ou=new Wa;function Dr(a){return encodeURIComponent(String(a))}function um(a){var u=1;a=a.split(":");const f=[];for(;u>0&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function Dn(a,u,f,d){this.j=a,this.i=u,this.l=f,this.S=d||1,this.V=new pr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var Bu={},Ya={};function Qa(a,u,f){a.M=1,a.A=Ji(Wt(u)),a.u=f,a.R=!0,cu(a,null)}function cu(a,u){a.F=Date.now(),ji(a),a.B=Wt(a.A);var f=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),wu(f.i,"t",d),a.C=0,f=a.j.L,a.h=new au,a.g=Gu(a.j,f?u:null,!a.u),a.P>0&&(a.O=new rm(l(a.Y,a,a.g),a.P)),u=a.V,f=a.g,d=a.ba;var v="readystatechange";Array.isArray(v)||(v&&(Ql[0]=v.toString()),v=Ql);for(let N=0;N<v.length;N++){const K=ql(f,v[N],d||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.J?jl(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),mr(),am(a.i,a.v,a.B,a.l,a.S,a.u)}Dn.prototype.ba=function(a){a=a.target;const u=this.O;u&&In(a)==3?u.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const Be=In(this.g),Me=this.g.ya(),_e=this.g.ca();if(!(Be<3)&&(Be!=3||this.g&&(this.h.h||this.g.la()||vu(this.g)))){this.K||Be!=4||Me==7||(Me==8||_e<=0?mr(3):mr(2)),Xa(this);var u=this.g.ca();this.X=u;var f=hm(this);if(this.o=u==200,Bm(this.i,this.v,this.B,this.l,this.S,Be,u),this.o){if(this.U&&!this.L){t:{if(this.g){var d,v=this.g;if((d=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(d)){var N=d;break t}}N=null}if(a=N)xs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Za(this,a);else{this.o=!1,this.m=3,lt(12),os(this),wr(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<f.length;)if(He=fm(this,f),He==Ya){Be==4&&(this.m=4,lt(14),a=!1),xs(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Bu){this.m=4,lt(15),xs(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else xs(this.i,this.l,He,null),Za(this,He);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||f.length!=0||this.h.h||(this.m=1,lt(16),a=!1),this.o=this.o&&a,!a)xs(this.i,this.l,f,"[Invalid Chunked Response]"),os(this),wr(this);else if(f.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),aB(K),K.P=!0,lt(11))}}else xs(this.i,this.l,f,null),Za(this,f);Be==4&&os(this),this.o&&!this.K&&(Be==4?ku(this.j,this):(this.o=!1,ji(this)))}else bm(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),os(this),wr(this)}}}catch{}finally{}};function hm(a){if(!lu(a))return a.g.la();const u=vu(a.g);if(u==="")return"";let f="";const d=u.length,v=In(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return os(a),wr(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<d;N++)a.h.h=!0,f+=a.h.i.decode(u[N],{stream:!(v&&N==d-1)});return u.length=0,a.h.g+=f,a.C=0,a.h.g}function lu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function fm(a,u){var f=a.C,d=u.indexOf(`
`,f);return d==-1?Ya:(f=Number(u.substring(f,d)),isNaN(f)?Bu:(d+=1,d+f>u.length?Ya:(u=u.slice(d,d+f),a.C=d+f,u)))}Dn.prototype.cancel=function(){this.K=!0,os(this)};function ji(a){a.T=Date.now()+a.H,uu(a,a.H)}function uu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Er(l(a.aa,a),u)}function Xa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(cm(this.i,this.B),this.M!=2&&(mr(),lt(17)),os(this),this.m=2,wr(this)):uu(this,this.T-a)};function wr(a){a.j.I==0||a.K||ku(a.j,a)}function os(a){Xa(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Xl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Za(a,u){try{var f=a.j;if(f.I!=0&&(f.g==a||eB(f.h,a))){if(!a.L&&eB(f.h,a)&&f.I==3){try{var d=f.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Wi(f),$i(f);else break e;oB(f),lt(18)}}else f.xa=v[1],0<f.xa-f.K&&v[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Er(l(f.Va,f),6e3));Cu(f.h)<=1&&f.ta&&(f.ta=void 0)}else Bs(f,11)}else if((a.L||f.g==a)&&Wi(f),!D(u))for(v=f.Ba.g.parse(u),u=0;u<v.length;u++){let _e=v[u];const He=_e[0];if(!(He<=f.K))if(f.K=He,_e=_e[1],f.I==2)if(_e[0]=="c"){f.M=_e[1],f.ba=_e[2];const Yt=_e[3];Yt!=null&&(f.ka=Yt,f.j.info("VER="+f.ka));const cs=_e[4];cs!=null&&(f.za=cs,f.j.info("SVER="+f.za));const Tn=_e[5];Tn!=null&&typeof Tn=="number"&&Tn>0&&(d=1.5*Tn,f.O=d,f.j.info("backChannelRequestTimeoutMs_="+d)),d=f;const An=a.g;if(An){const Qi=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var N=d.h;N.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(tB(N,N.h),N.h=null))}if(d.G){const BB=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;BB&&(d.wa=BB,Ae(d.J,d.G,BB))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),d=f;var K=a;if(d.na=Vu(d,d.L?d.ba:null,d.W),K.L){du(d.h,K);var Be=K,Me=d.O;Me&&(Be.H=Me),Be.D&&(Xa(Be),ji(Be)),d.g=K}else Fu(d);f.i.length>0&&zi(f)}else _e[0]!="stop"&&_e[0]!="close"||Bs(f,7);else f.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Bs(f,7):iB(f):_e[0]!="noop"&&f.l&&f.l.qa(_e),f.A=0)}}mr(4)}catch{}}var Cm=class{constructor(a,u){this.g=a,this.map=u}};function hu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cu(a){return a.h?1:a.g?a.g.size:0}function eB(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function tB(a,u){a.g?a.g.add(u):a.h=u}function du(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}hu.prototype.cancel=function(){if(this.i=pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.G);return u}return _(a.i)}var gu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dm(a,u){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const d=a[f].indexOf("=");let v,N=null;d>=0?(v=a[f].substring(0,d),N=a[f].substring(d+1)):v=a[f],u(v,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function wn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof wn?(this.l=a.l,yr(this,a.j),this.o=a.o,this.g=a.g,Ir(this,a.u),this.h=a.h,nB(this,yu(a.i)),this.m=a.m):a&&(u=String(a).match(gu))?(this.l=!1,yr(this,u[1]||"",!0),this.o=Tr(u[2]||""),this.g=Tr(u[3]||"",!0),Ir(this,u[4]),this.h=Tr(u[5]||"",!0),nB(this,u[6]||"",!0),this.m=Tr(u[7]||"")):(this.l=!1,this.i=new br(null,this.l))}wn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ar(u,mu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ar(u,mu,!0),"@"),a.push(Dr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ar(f,f.charAt(0)=="/"?mm:gm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ar(f,_m)),a.join("")},wn.prototype.resolve=function(a){const u=Wt(this);let f=!!a.j;f?yr(u,a.j):f=!!a.o,f?u.o=a.o:f=!!a.g,f?u.g=a.g:f=a.u!=null;var d=a.h;if(f)Ir(u,a.u);else if(f=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var v=u.h.lastIndexOf("/");v!=-1&&(d=u.h.slice(0,v+1)+d)}if(v=d,v==".."||v==".")d="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){d=v.lastIndexOf("/",0)==0,v=v.split("/");const N=[];for(let K=0;K<v.length;){const Be=v[K++];Be=="."?d&&K==v.length&&N.push(""):Be==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),d&&K==v.length&&N.push("")):(N.push(Be),d=!0)}d=N.join("/")}else d=v}return f?u.h=d:f=a.i.toString()!=="",f?nB(u,yu(a.i)):f=!!a.m,f&&(u.m=a.m),u};function Wt(a){return new wn(a)}function yr(a,u,f){a.j=f?Tr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ir(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function nB(a,u,f){u instanceof br?(a.i=u,Dm(a.i,a.l)):(f||(u=Ar(u,Em)),a.i=new br(u,a.l))}function Ae(a,u,f){a.i.set(u,f)}function Ji(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Tr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ar(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,pm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mu=/[#\/\?@]/g,gm=/[#\?:]/g,mm=/[#\?]/g,Em=/[#\?@]/g,_m=/#/g;function br(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function as(a){a.g||(a.g=new Map,a.h=0,a.i&&dm(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}s=br.prototype,s.add=function(a,u){as(this),this.i=null,a=Ms(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Eu(a,u){as(a),u=Ms(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function _u(a,u){return as(a),u=Ms(a,u),a.g.has(u)}s.forEach=function(a,u){as(this),this.g.forEach(function(f,d){f.forEach(function(v){a.call(u,v,d,this)},this)},this)};function Du(a,u){as(a);let f=[];if(typeof u=="string")_u(a,u)&&(f=f.concat(a.g.get(Ms(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)f=f.concat(a[u]);return f}s.set=function(a,u){return as(this),this.i=null,a=Ms(this,a),_u(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},s.get=function(a,u){return a?(a=Du(this,a),a.length>0?String(a[0]):u):u};function wu(a,u,f){Eu(a,u),f.length>0&&(a.i=null,a.g.set(Ms(a,u),_(f)),a.h+=f.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var f=u[d];const v=Dr(f);f=Du(this,f);for(let N=0;N<f.length;N++){let K=v;f[N]!==""&&(K+="="+Dr(f[N])),a.push(K)}}return this.i=a.join("&")};function yu(a){const u=new br;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Ms(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Dm(a,u){u&&!a.j&&(as(a),a.i=null,a.g.forEach(function(f,d){const v=d.toLowerCase();d!=v&&(Eu(this,d),wu(this,v,f))},a)),a.j=u}function wm(a,u){const f=new _r;if(o.Image){const d=new Image;d.onload=h(yn,f,"TestLoadImage: loaded",!0,u,d),d.onerror=h(yn,f,"TestLoadImage: error",!1,u,d),d.onabort=h(yn,f,"TestLoadImage: abort",!1,u,d),d.ontimeout=h(yn,f,"TestLoadImage: timeout",!1,u,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else u(!1)}function ym(a,u){const f=new _r,d=new AbortController,v=setTimeout(()=>{d.abort(),yn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:d.signal}).then(N=>{clearTimeout(v),N.ok?yn(f,"TestPingServer: ok",!0,u):yn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),yn(f,"TestPingServer: error",!1,u)})}function yn(a,u,f,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(f)}catch{}}function Im(){this.g=new om}function sB(a){this.i=a.Sb||null,this.h=a.ab||!1}C(sB,Zl),sB.prototype.g=function(){return new Ki(this.i,this.h)};function Ki(a,u){tt.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(Ki,tt),s=Ki.prototype,s.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,vr(this)},s.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Rr(this)),this.readyState=0},s.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Iu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Iu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}s.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Rr(this):vr(this),this.readyState==3&&Iu(this)}},s.Oa=function(a){this.g&&(this.response=this.responseText=a,Rr(this))},s.Na=function(a){this.g&&(this.response=a,Rr(this))},s.ga=function(){this.g&&Rr(this)};function Rr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,vr(a)}s.setRequestHeader=function(a,u){this.A.append(a,u)},s.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function vr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tu(a){let u="";return Mi(a,function(f,d){u+=d,u+=":",u+=f,u+=`\r
`}),u}function rB(a,u,f){e:{for(d in f){var d=!1;break e}d=!0}d||(f=Tu(f),typeof a=="string"?f!=null&&Dr(f):Ae(a,u,f))}function Se(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(Se,tt);var Tm=/^https?$/i,Am=["POST","PUT"];s=Se.prototype,s.Fa=function(a){this.H=a},s.ea=function(a,u,f,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ou.g(),this.g.onreadystatechange=p(l(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){Au(this,N);return}if(a=f||"",f=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)f.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const N of d.keys())f.set(N,d.get(N));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),v=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Am,u,void 0)>=0)||d||v||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of f)this.g.setRequestHeader(N,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Au(this,N)}};function Au(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,bu(a),qi(a)}function bu(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}s.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ct(this,"complete"),ct(this,"abort"),qi(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Se.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Ru(this):this.Xa())},s.Xa=function(){Ru(this)};function Ru(a){if(a.h&&typeof i<"u"){if(a.v&&In(a)==4)setTimeout(a.Ca.bind(a),0);else if(ct(a,"readystatechange"),In(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var d;if(d=N===0){let K=String(a.D).match(gu)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),d=!Tm.test(K?K.toLowerCase():"")}f=d}if(f)ct(a,"complete"),ct(a,"success");else{a.o=6;try{var v=In(a)>2?a.g.statusText:""}catch{v=""}a.l=v+" ["+a.ca()+"]",bu(a)}}finally{qi(a)}}}}function qi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,u||ct(a,"ready");try{f.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}s.ca=function(){try{return In(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),im(u)}};function vu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bm(a){const u={};a=(a.g&&In(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(D(a[d]))continue;var f=um(a[d]);const v=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[v]||[];u[v]=N,N.push(f)}Zg(u,function(d){return d.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Or(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Ou(a){this.za=0,this.i=[],this.j=new _r,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Or("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Or("baseRetryDelayMs",5e3,a),this.Za=Or("retryDelaySeedMs",1e4,a),this.Ta=Or("forwardChannelMaxRetries",2,a),this.va=Or("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new hu(a&&a.concurrentRequestLimit),this.Ba=new Im,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Ou.prototype,s.ka=8,s.I=1,s.connect=function(a,u,f,d){lt(0),this.W=a,this.H=u||{},f&&d!==void 0&&(this.H.OSID=f,this.H.OAID=d),this.F=this.X,this.J=Vu(this,null,this.W),zi(this)};function iB(a){if(Su(a),a.I==3){var u=a.V++,f=Wt(a.J);if(Ae(f,"SID",a.M),Ae(f,"RID",u),Ae(f,"TYPE","terminate"),Sr(a,f),u=new Dn(a,a.j,u),u.M=2,u.A=Ji(Wt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=u.A,f=!0),f||(u.g=Gu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),ji(u)}Mu(a)}function $i(a){a.g&&(aB(a),a.g.cancel(),a.g=null)}function Su(a){$i(a),a.v&&(o.clearTimeout(a.v),a.v=null),Wi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function zi(a){if(!fu(a.h)&&!a.m){a.m=!0;var u=a.Ea;Te||E(),Oe||(Te(),Oe=!0),b.add(u,a),a.D=0}}function Rm(a,u){return Cu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Er(l(a.Ea,a,u),xu(a,a.D)),a.D++,!0)}s.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const v=new Dn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=jl(N),Kl(N,this.U)):N=this.U),this.u!==null||this.R||(v.J=N,N=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var d=this.i[f];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Pu(this,v,u),f=Wt(this.J),Ae(f,"RID",a),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),Sr(this,f),N&&(this.R?u="headers="+Dr(Tu(N))+"&"+u:this.u&&rB(f,this.u,N)),tB(this.h,v),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",u),Ae(f,"SID","null"),v.U=!0,Qa(v,f,null)):Qa(v,f,u),this.I=2}}else this.I==3&&(a?Nu(this,a):this.i.length==0||fu(this.h)||Nu(this))};function Nu(a,u){var f;u?f=u.l:f=a.V++;const d=Wt(a.J);Ae(d,"SID",a.M),Ae(d,"RID",f),Ae(d,"AID",a.K),Sr(a,d),a.u&&a.o&&rB(d,a.u,a.o),f=new Dn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Pu(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),tB(a.h,f),Qa(f,d,u)}function Sr(a,u){a.H&&Mi(a.H,function(f,d){Ae(u,d,f)}),a.l&&Mi({},function(f,d){Ae(u,d,f)})}function Pu(a,u,f){f=Math.min(a.i.length,f);const d=a.l?l(a.l.Ka,a.l,a):null;e:{var v=a.i;let Be=-1;for(;;){const Me=["count="+f];Be==-1?f>0?(Be=v[0].g,Me.push("ofs="+Be)):Be=0:Me.push("ofs="+Be);let _e=!0;for(let He=0;He<f;He++){var N=v[He].g;const Yt=v[He].map;if(N-=Be,N<0)Be=Math.max(0,v[He].g-100),_e=!1;else try{N="req"+N+"_"||"";try{var K=Yt instanceof Map?Yt:Object.entries(Yt);for(const[cs,Tn]of K){let An=Tn;B(Tn)&&(An=qa(Tn)),Me.push(N+cs+"="+encodeURIComponent(An))}}catch(cs){throw Me.push(N+"type="+encodeURIComponent("_badmap")),cs}}catch{d&&d(Yt)}}if(_e){K=Me.join("&");break e}}K=void 0}return a=a.i.splice(0,f),u.G=a,K}function Fu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Te||E(),Oe||(Te(),Oe=!0),b.add(u,a),a.A=0}}function oB(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Er(l(a.Da,a),xu(a,a.A)),a.A++,!0)}s.Da=function(){if(this.v=null,Lu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Er(l(this.Wa,this),a)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),$i(this),Lu(this))};function aB(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Lu(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Wt(a.na);Ae(u,"RID","rpc"),Ae(u,"SID",a.M),Ae(u,"AID",a.K),Ae(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(u,"TO",a.ia),Ae(u,"TYPE","xmlhttp"),Sr(a,u),a.u&&a.o&&rB(u,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ji(Wt(u)),f.u=null,f.R=!0,cu(f,a)}s.Va=function(){this.C!=null&&(this.C=null,$i(this),oB(this),lt(19))};function Wi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ku(a,u){var f=null;if(a.g==u){Wi(a),aB(a),a.g=null;var d=2}else if(eB(a.h,u))f=u.G,du(a.h,u),d=1;else return;if(a.I!=0){if(u.o)if(d==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var v=a.D;d=Ui(),ct(d,new ru(d,f)),zi(a)}else Fu(a);else if(v=u.m,v==3||v==0&&u.X>0||!(d==1&&Rm(a,u)||d==2&&oB(a)))switch(f&&f.length>0&&(u=a.h,u.i=u.i.concat(f)),v){case 1:Bs(a,5);break;case 4:Bs(a,10);break;case 3:Bs(a,6);break;default:Bs(a,2)}}}function xu(a,u){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*u}function Bs(a,u){if(a.j.info("Error code "+u),u==2){var f=l(a.bb,a),d=a.Ua;const v=!d;d=new wn(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||yr(d,"https"),Ji(d),v?wm(d.toString(),f):ym(d.toString(),f)}else lt(2);a.I=0,a.l&&a.l.pa(u),Mu(a),Su(a)}s.bb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Mu(a){if(a.I=0,a.ja=[],a.l){const u=pu(a.h);(u.length!=0||a.i.length!=0)&&(y(a.ja,u),y(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function Vu(a,u,f){var d=f instanceof wn?Wt(f):new wn(f);if(d.g!="")u&&(d.g=u+"."+d.g),Ir(d,d.u);else{var v=o.location;d=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const N=new wn(null);d&&yr(N,d),u&&(N.g=u),v&&Ir(N,v),f&&(N.h=f),d=N}return f=a.G,u=a.wa,f&&u&&Ae(d,f,u),Ae(d,"VER",a.ka),Sr(a,d),d}function Gu(a,u,f){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Se(new sB({ab:f})):new Se(a.ma),u.Fa(a.L),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}s=Uu.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Yi(){}Yi.prototype.g=function(a,u){return new yt(a,u)};function yt(a,u){tt.call(this),this.g=new Ou(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!D(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Vs(this)}C(yt,tt),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){iB(this.g)},yt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=qa(a),a=f);u.i.push(new Cm(u.Ya++,a)),u.I==3&&zi(u)},yt.prototype.N=function(){this.g.l=null,delete this.j,iB(this.g),delete this.g,yt.Z.N.call(this)};function Hu(a){$a.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Hu,$a);function ju(){za.call(this),this.status=1}C(ju,za);function Vs(a){this.g=a}C(Vs,Uu),Vs.prototype.ra=function(){ct(this.g,"a")},Vs.prototype.qa=function(a){ct(this.g,new Hu(a))},Vs.prototype.pa=function(a){ct(this.g,new ju)},Vs.prototype.oa=function(){ct(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,wd=function(){return new Yi},Dd=function(){return Ui()},_d=is,QB={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Hi.NO_ERROR=0,Hi.TIMEOUT=8,Hi.HTTP_ERROR=6,yo=Hi,iu.COMPLETE="complete",Ed=iu,eu.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",tt.prototype.listen=tt.prototype.J,Lr=eu,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,md=Se}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.10.0
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository [object Object]
* @license MIT
*/var De,M=(De=class{},V(De,"FOLD_CASE",1),V(De,"LITERAL",2),V(De,"CLASS_NL",4),V(De,"DOT_NL",8),V(De,"ONE_LINE",16),V(De,"NON_GREEDY",32),V(De,"PERL_X",64),V(De,"UNICODE_GROUPS",128),V(De,"WAS_DOLLAR",256),V(De,"LOOKBEHIND",512),V(De,"MATCH_NL",De.CLASS_NL|De.DOT_NL),V(De,"PERL",De.CLASS_NL|De.ONE_LINE|De.PERL_X|De.UNICODE_GROUPS),V(De,"POSIX",0),V(De,"UNANCHORED",0),V(De,"ANCHOR_START",1),V(De,"ANCHOR_BOTH",2),De);const Gs={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Zr=128,XB=new Int32Array(Zr),ZB=new Int32Array(Zr),so=65535;for(let s=0;s<Zr;s++)s>=97&&s<=122?XB[s]=s-32:XB[s]=s,s>=65&&s<=90?ZB[s]=s+32:ZB[s]=s;var VB,L=(VB=class{static toUpperCase(s){if(s<Zr)return XB[s];const e=String.fromCodePoint(s).toUpperCase(),t=e.codePointAt(0)>so?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=n.codePointAt(0)>so?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}static toLowerCase(s){if(s<Zr)return ZB[s];const e=String.fromCodePoint(s).toLowerCase(),t=e.codePointAt(0)>so?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=n.codePointAt(0)>so?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}},V(VB,"CODES",Object.freeze({"\x07":7,"\b":8,"	":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125})),VB),g=class{constructor(s,e=!1){this.data=s,this.isStride1=e,this.SIZE=e?2:3}getLo(s){return this.data[s*this.SIZE]}getHi(s){return this.data[s*this.SIZE+1]}getStride(s){return this.isStride1?1:this.data[s*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const ny="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-",yd=new Uint8Array(256);for(let s=0;s<64;s++)yd[ny.charCodeAt(s)]=s;const Id=s=>{const e=[];let t=0,n=0;for(let r=0;r<s.length;r++){const i=yd[s.charCodeAt(r)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},m=(s,e)=>{const t=Id(s),n=e?t.length/2:t.length/3,r=new Uint32Array(n*3);let i=0,o=0;for(let B=0;B<n;B++)i+=t[o++],r[B*3]=i,i+=t[o++],r[B*3+1]=i,r[B*3+2]=e?1:t[o++];return r},sy=s=>{const e=Id(s),t=new Map;let n=0;for(let r=0;r<e.length;r+=2){n+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var ro=class{constructor(s){this.initializer=s,this.cache=new Map}has(s){return Object.hasOwn(this.initializer,s)}get(s){if(this.cache.has(s))return this.cache.get(s);const e=this.has(s)?this.initializer[s]():null;return this.cache.set(s,e),e}},Rn,It=(Rn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=sy("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}},V(Rn,"_CASE_ORBIT",null),V(Rn,"_Print",null),V(Rn,"CATEGORIES",new ro({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),V(Rn,"SCRIPTS",new ro({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),V(Rn,"FOLD_CATEGORIES",new ro({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),V(Rn,"FOLD_SCRIPT",new ro({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),Rn),me,q=(me=class{static isUnsearchable(e){return e===me.RUNE_ERROR||e>=me.MIN_HIGH_SURROGATE&&e<=me.MAX_LOW_SURROGATE}static is32(e,t){let n=0,r=e.length;for(;n<r;){const i=n+Math.floor((r-n)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const c=e.getStride(i);return(t-o)%c===0}t<o?r=i:n=i+1}return!1}static is(e,t){if(t<=me.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const r=e.getLo(n);if(t<r)return!1;const i=e.getStride(n);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&me.is32(e,t)}static isPrint(e){return e<=me.MAX_LATIN1?e>=32&&e<me.MAX_ASCII||e>=161&&e!==173:me.is(It.Print,e)}static simpleFold(e){if(It.CASE_ORBIT.has(e))return It.CASE_ORBIT.get(e);if(e<=me.MAX_ASCII){const t=L.toLowerCase(e);return t!==e?t:L.toUpperCase(e)}return e}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=me.MAX_ASCII&&t<=me.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=me.simpleFold(e);n!==e;n=me.simpleFold(n))if(n===t)return!0;return!1}},V(me,"MAX_RUNE",1114111),V(me,"RUNE_ERROR",65533),V(me,"MAX_ASCII",127),V(me,"MAX_LATIN1",255),V(me,"MAX_BMP",65535),V(me,"MIN_FOLD",65),V(me,"MAX_FOLD",125251),V(me,"MIN_HIGH_SURROGATE",55296),V(me,"MAX_HIGH_SURROGATE",56319),V(me,"MIN_LOW_SURROGATE",56320),V(me,"MAX_LOW_SURROGATE",57343),V(me,"MIN_SUPPLEMENTARY_CODE_POINT",65536),me),Ti=class extends Error{constructor(s){super(s),this.name="RE2JSException"}},ye=class extends Ti{constructor(s,e=null){let t=`error parsing regexp: ${s}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=s,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},mB=class extends Ti{constructor(s){super(s),this.name="RE2JSCompileException"}},dt=class extends Ti{constructor(s){super(s),this.name="RE2JSGroupException"}},ry=class extends Ti{constructor(s){super(s),this.name="RE2JSFlagsException"}},Uo=class extends Ti{constructor(s){super(s),this.name="RE2JSInternalException"}};const Mc=256,Td=new Uint8Array(Mc);for(let s=0;s<Mc;s++)Td[s]=97<=s&&s<=122||65<=s&&s<=90||48<=s&&s<=57||s===95?1:0;let EB=null,_B=null;var ge,j=(ge=class{static emptyInts(){return[]}static isString(e){return typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"}static typeName(e){return e===null||typeof e!="object"&&typeof e!="function"?e===null?"null":typeof e:Object.prototype.toString.call(e).slice(8,-1)}static checkPattern(e){if(!ge.isString(e))throw new TypeError(`The pattern must be a string, not ${ge.typeName(e)} (RE2JS.translateRegExp() converts a RegExp)`)}static checkInput(e){if(!ge.isString(e)&&!ge.isByteArray(e))throw new TypeError(`The input must be a string or a byte array (Uint8Array or number[]), not ${ge.typeName(e)}`)}static checkFlags(e){if(!Number.isInteger(e)||(e&-544)!==0)throw new ry("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS")}static isByteArray(e){return Array.isArray(e)||Object.prototype.toString.call(e)==="[object Uint8Array]"}static isalnum(e){return L.CODES[0]<=e&&e<=L.CODES[9]||L.CODES.a<=e&&e<=L.CODES.z||L.CODES.A<=e&&e<=L.CODES.Z}static unhex(e){return L.CODES[0]<=e&&e<=L.CODES[9]?e-L.CODES[0]:L.CODES.a<=e&&e<=L.CODES.f?e-L.CODES.a+10:L.CODES.A<=e&&e<=L.CODES.F?e-L.CODES.A+10:-1}static escapeRune(e){let t="";if(q.isPrint(e))ge.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case L.CODES['"']:t+='\\"';break;case L.CODES["\\"]:t+="\\\\";break;case L.CODES["	"]:t+="\\t";break;case L.CODES[`
`]:t+="\\n";break;case L.CODES["\r"]:t+="\\r";break;case L.CODES["\b"]:t+="\\b";break;case L.CODES["\f"]:t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);n.push(i),r+=i>q.MAX_BMP?2:1}return new Int32Array(n)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<Mc?Td[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=ge.EMPTY_BEGIN_TEXT|ge.EMPTY_BEGIN_LINE),e===10&&(n|=ge.EMPTY_BEGIN_LINE),t<0&&(n|=ge.EMPTY_END_TEXT|ge.EMPTY_END_LINE),t===10&&(n|=ge.EMPTY_END_LINE),ge.isWordRune(e)!==ge.isWordRune(t)?n|=ge.EMPTY_WORD_BOUNDARY:n|=ge.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>ge.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>q.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return EB||(EB=new TextEncoder),EB.encode(e);{let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===q.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===q.MIN_LOW_SURROGATE?(i=q.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){_B||(_B=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return _B.decode(t)}else{let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],B=e[n++],c=e[n++],l=((i&7)<<18|(o&63)<<12|(B&63)<<6|c&63)-q.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(q.MIN_HIGH_SURROGATE+(l>>10)),t[r++]=String.fromCharCode(q.MIN_LOW_SURROGATE+(l&1023))}else{let o=e[n++],B=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},V(ge,"METACHARACTERS","\\.+*?()|[]{}^$"),V(ge,"EMPTY_BEGIN_LINE",1),V(ge,"EMPTY_END_LINE",2),V(ge,"EMPTY_BEGIN_TEXT",4),V(ge,"EMPTY_END_TEXT",8),V(ge,"EMPTY_WORD_BOUNDARY",16),V(ge,"EMPTY_NO_WORD_BOUNDARY",32),V(ge,"EMPTY_ALL",-1),ge);const Ad=(s=[],e=0)=>{const t=Object.create(null);for(let n=0;n<s.length;n++){const r=s[n],i=e+n;t[r]=i,t[i]=r}return Object.freeze(t)};var Gn,Ts=(Gn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Gn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Gn.Encoding.UTF_16}},V(Gn,"Encoding",Ad(["UTF_16","UTF_8"])),Gn),Ih=class extends Ts{constructor(s=null){super(),this.bytes=s}getEncoding(){return Ts.Encoding.UTF_8}asCharSequence(){return j.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},iy=class extends Ts{constructor(s=null){super(),this.charSequence=s}getEncoding(){return Ts.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return j.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},Cs=class{static utf16(s){return j.checkInput(s),new iy(s)}static utf8(s){return j.isByteArray(s)?new Ih(s):new Ih(j.stringToUtf8ByteArray(s))}},ut=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},Ht,oy=(Ht=class extends ut{constructor(e,t=0,n=e.length){super(),this.bytes=e,this.start=t,this.end=n}hasString(e,t){const n=e.bytes;if(n.length===0)return!0;const r=this.indexOf(this.bytes,n,this.start+t);return r!==-1&&r<=this.end-n.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return ut.EOF();const t=this.bytes[e]&255;if(t<128)return t<<3|1;let n,r,i=128,o=191;if(t>=194&&t<=223)n=2,r=t&31;else if(t>=224&&t<=239)n=3,r=t&15,t===224?i=160:t===237&&(o=159);else if(t>=240&&t<=244)n=4,r=t&7,t===240?i=144:t===244&&(o=143);else return Ht.RUNE_ERROR_STEP;if(e+n>this.end)return Ht.RUNE_ERROR_STEP;const B=this.bytes[e+1]&255;if(B<i||B>o)return Ht.RUNE_ERROR_STEP;if(r=r<<6|B&63,n>2){const c=this.bytes[e+2]&255;if((c&192)!==128)return Ht.RUNE_ERROR_STEP;if(r=r<<6|c&63,n>3){const l=this.bytes[e+3]&255;if((l&192)!==128)return Ht.RUNE_ERROR_STEP;r=r<<6|l&63}}return r<<3|n}index(e,t){t+=this.start;const n=this.indexOf(this.bytes,e.prefixUTF8,t);return n<0?n:n-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let r=e-1;if(t=this.bytes[r--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);r>=i&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start);const o=this.step(r-this.start);t=r+(o&7)===e?o>>3:q.RUNE_ERROR}}const n=e<this.end?this.step(e-this.start)>>3:-1;return j.emptyOpContext(t,n)}indexOf(e,t,n=0){let r=t.length;if(r===0)return n<=this.end?n:-1;const i=t[0];let o=this.end-r;const B=typeof e.indexOf=="function";let c=n;for(;c<=o;){if(B){if(c=e.indexOf(i,c),c===-1||c>o)return-1}else{for(;c<=o&&e[c]!==i;)c++;if(c>o)return-1}let l=!0;for(let h=1;h<r;h++)if(e[c+h]!==t[h]){l=!1;break}if(l)return c;c++}return-1}prefixLength(e){return e.prefixUTF8.length}},V(Ht,"RUNE_ERROR_STEP",q.RUNE_ERROR<<3|1),Ht),ay=class extends ut{constructor(s,e=0,t=s.length){super(),this.charSequence=s,this.start=e,this.end=t}hasString(s,e){const t=this.charSequence.indexOf(s.str,this.start+e);return t!==-1&&t<=this.end-s.str.length}hasAnyString(s,e){return s.automaton16().searchUTF16(this.charSequence,this.start+e,this.end)}step(s){if(s+=this.start,s>=this.end)return ut.EOF();const e=this.charSequence.charCodeAt(s);if(e<q.MIN_HIGH_SURROGATE||e>q.MAX_HIGH_SURROGATE||s+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(s+1);return t>=q.MIN_LOW_SURROGATE&&t<=q.MAX_LOW_SURROGATE?(e-q.MIN_HIGH_SURROGATE)*1024+(t-q.MIN_LOW_SURROGATE)+q.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(s,e){e+=this.start;const t=this.charSequence.indexOf(s.prefix,e);return t<0||t>this.end-s.prefix.length?-1:t-e}context(s){s+=this.start;const e=s>this.start&&s<=this.end?this.charSequence.charCodeAt(s-1):-1,t=s<this.end?this.charSequence.charCodeAt(s):-1;return j.emptyOpContext(e,t)}prefixLength(s){return s.prefix.length}},be=class{static fromUTF8(s,e=0,t=s.length){return new oy(s,e,t)}static fromUTF16(s,e=0,t=void 0){return j.checkInput(s),new ay(s,e,t??s.length)}},gs,Th=(gs=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const r=n.codePointAt(0);return r===L.CODES["\\"]||r===L.CODES.$?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===L.CODES.$?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=n.numberOfInstructions(),this.lookbehindState=null,t instanceof Ts?this.resetMatcherInput(t):j.isByteArray(t)?this.resetMatcherInput(Cs.utf8(t)):this.resetMatcherInput(Cs.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Ts||(j.isByteArray(e)?e=Cs.utf8(e):e=Cs.utf16(e)),this.matcherInput=e,this.lookbehindState!==null?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new dt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new dt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new dt(`group '${e}' not found`);e=r}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new dt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new dt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new dt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!n[0])throw new dt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,M.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,M.ANCHOR_START)}find(e=null){if(e!==null){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new dt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?be.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):be.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,M.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?j.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const r=this.start(),i=this.end();return this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===L.CODES["\\"]){if(n<i&&(t+=e.substring(n,i)),i++,i>=r)throw new dt("character to be escaped is missing");n=i,i++;continue}if(o===L.CODES.$){if(n<i&&(t+=e.substring(n,i)),i+1>=r)throw new dt("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(L.CODES[0]<=B&&B<=L.CODES[9]){let c=B-L.CODES[0],l=i+2;for(;l<r;l++){const C=e.codePointAt(l);if(C<L.CODES[0]||C>L.CODES[9]||c*10+C-L.CODES[0]>this.patternGroupCount)break;c=c*10+C-L.CODES[0]}if(c>this.patternGroupCount)throw new dt(`n > number of groups: ${c}`);const h=this.group(c);h!==null&&(t+=h),i=l,n=i}else if(B===L.CODES["{"]){let c=i+2;for(;c<r&&e.codePointAt(c)!==L.CODES["}"];)c++;if(c>=r)throw new dt("named capture group is missing trailing '}'");const l=e.substring(i+2,c),h=this.group(l);h!==null&&(t+=h),i=c+1,n=i}else throw new dt("Illegal group reference");continue}i++}return n<r&&(t+=e.substring(n,r)),t}appendReplacementInternalJs(e){const t=o=>o>=48&&o<=57,n=this.patternGroupCount;let r="",i=0;for(;i<e.length;){const o=e.indexOf("$",i);if(o<0)break;r+=e.substring(i,o),i=o;const B=e.charCodeAt(i+1);if(B===L.CODES.$)r+="$",i+=2;else if(B===L.CODES["&"])r+=this.group(0),i+=2;else if(B===L.CODES["`"])r+=this.substring(0,this.start(0)),i+=2;else if(B===L.CODES["'"])r+=this.substring(this.end(0),this.matcherInputLength),i+=2;else if(t(B)){let c=1,l=B-48;const h=e.charCodeAt(i+2);if(t(h)&&l*10+h-48<=n&&(c=2,l=l*10+h-48),l>=1&&l<=n){const C=this.group(l);C!==null&&(r+=C)}else r+=e.substring(i,i+1+c);i+=1+c}else if(B===L.CODES["<"]&&this.hasNamedGroups){const c=e.indexOf(">",i+2);if(c<0)r+="$<",i+=2;else{const l=e.substring(i+2,c);if(Object.hasOwn(this.namedGroups,l)){const h=this.group(l);h!==null&&(r+=h)}i=c+1}}else r+="$",i+=1}return r+e.substring(i)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let r="";this.reset();const i=typeof e=="function";let o=null;if(i){if(this.groupCount()>=gs.MAX_REPLACER_ARGS)throw new dt("Too many capture groups to safely invoke replacer function");o=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o):this.appendReplacement(e,n),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t){let n="";const r=this.start(),i=this.end();this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=i;const o=this.matchArray();return o.push(r,t),this.hasNamedGroups&&o.push(this.namedGroupsObject()),n+=String(e(...o)),n}matchArray(){const e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){const n=this.group(t);e.push(n===null?void 0:n)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;const e=this.getNamedGroups();for(const t in e)e[t]===null&&(e[t]=void 0);return e}},V(gs,"MAX_REPLACER_ARGS",65535),gs),ue,P=(ue=class{static isRuneOp(e){return ue.RUNE<=e&&e<=ue.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=j.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?q.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?q.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case ue.ALT:return`alt -> ${this.out}, ${this.arg}`;case ue.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case ue.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case ue.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case ue.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case ue.FAIL:return"fail";case ue.NOP:return`nop -> ${this.out}`;case ue.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case ue.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case ue.RUNE:return this.runes===null?"rune <null>":["rune ",ue.escapeRunes(this.runes),(this.arg&M.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case ue.RUNE1:return`rune1 ${ue.escapeRunes(this.runes)} -> ${this.out}`;case ue.RUNE_ANY:return`any -> ${this.out}`;case ue.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},V(ue,"ALT",1),V(ue,"ALT_MATCH",2),V(ue,"CAPTURE",3),V(ue,"EMPTY_WIDTH",4),V(ue,"FAIL",5),V(ue,"MATCH",6),V(ue,"NOP",7),V(ue,"RUNE",8),V(ue,"RUNE1",9),V(ue,"RUNE_ANY",10),V(ue,"RUNE_ANY_NOT_NL",11),V(ue,"LB_WRITE",12),V(ue,"LB_CHECK",13),ue),ms,Ah=(ms=class{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}init(e){this.ncap=e;const t=Math.min(this.densePcs.length,ms.INITIAL_THREADS)*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}growCaps(e){const t=this.densePcs.length*this.ncap,n=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));n.set(this.denseCaps),this.denseCaps=n}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},V(ms,"INITIAL_THREADS",32),ms),By=class{constructor(s){this.pos=-1,this.pcs=new Int32Array(s.numInst()),this.size=0,this.lbTable=new Int32Array(s.numLb+1)}reset(){this.pos=-1,this.size=0}},cy=class bd{static fromRE2(e){const t=new bd;return t.prog=e.prog,t.re2=e,t.q0=new Ah(t.prog.numInst()),t.q1=new Ah(t.prog.numInst()),t.addStack=new Int32Array(2*(t.prog.numInst()+1)),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?j.emptyInts():j.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n,r=null){const i=this.re2.cond;if(i===j.EMPTY_ALL||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);const o=this.prog.numLb>0,B=t;let c=t,l=!1;o&&(r!==null&&r.pos>=0&&r.pos<=t?(c=r.pos,l=!0):c=0);let h=o&&r!==null,C=this.q0,p=this.q1,_=e.step(c),y=_>>3,S=_&7,k=-1,J=0;_!==ut.EOF()&&(_=e.step(c+S),k=_>>3,J=_&7);let $;for(c===0?$=j.emptyOpContext(-1,y):$=e.context(c),o&&(l?this.restoreLookbehinds(r,C,$):this.spawnLookbehinds(C,c,$));;){if(C.mainThreads===0){if((i&j.EMPTY_BEGIN_TEXT)!==0&&c!==0||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&c!==0||this.matched)break;if(this.prog.numLb===0&&C.isEmpty()&&this.re2.prefix.length!==0&&k!==this.re2.prefixRune&&e.canCheckPrefix()){const Te=e.index(this.re2,c);if(Te<0)break;c+=Te,_=e.step(c),y=_>>3,S=_&7,_=e.step(c+S),k=_>>3,J=_&7,$=e.context(c)}}c>=B&&(h&&(this.saveLookbehinds(r,C,c),h=!1),!this.matched&&(c===0||n===M.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=c),this.add(C,this.prog.start,c,this.matchcap,0,$)));const re=c+S;if($=e.context(re),this.step(C,p,c,re,y,$,n,c===e.endPos()),S===0||this.ncap===0&&this.matched)break;c+=S,y=k,S=J,y!==-1&&(_=e.step(c+S),k=_>>3,J=_&7);const Ce=C;C=p,p=Ce}return C.clear(),p.clear(),this.matched}matchSet(e,t,n){const r=this.re2.cond;if(r===j.EMPTY_ALL)return[];if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,c=this.q1,l=e.step(i),h=l>>3,C=l&7,p=-1,_=0;l!==ut.EOF()&&(l=e.step(i+C),p=l>>3,_=l&7);let y=i===0?j.emptyOpContext(-1,h):e.context(i);const S=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(B,i,y);!(B.mainThreads===0&&((r&j.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&i!==0));){(i===0||n===M.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,y);const k=i+C;y=e.context(k);for(let $=0;$<B.size;$++){const re=B.densePcs[$],Ce=this.prog.inst[re],Te=$*this.ncap;let Oe=!1;switch(Ce.op){case P.MATCH:if(n===M.ANCHOR_BOTH&&i!==e.endPos())break;S.add(Ce.arg);break;case P.RUNE:Oe=Ce.matchRune(h);break;case P.RUNE1:Oe=h===Ce.runes[0];break;case P.RUNE_ANY:Oe=!0;break;case P.RUNE_ANY_NOT_NL:Oe=h!==10;break;default:continue}Oe&&this.add(c,Ce.out,k,B.denseCaps,Te,y)}if(B.clear(),C===0)break;i+=C,h=p,C=_,h!==-1&&(l=e.step(i+C),p=l>>3,_=l&7);const J=B;B=c,c=J}return c.clear(),Array.from(S).sort((k,J)=>k-J)}step(e,t,n,r,i,o,B,c){const l=this.re2.longest;for(let h=0;h<e.size;h++){const C=e.densePcs[h],p=h*this.ncap;if(l&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const _=this.prog.inst[C];let y=!1;switch(_.op){case P.MATCH:if(B===M.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!l||!this.matched||this.matchcap[1]<n)){e.denseCaps[p+1]=n;for(let S=0;S<this.ncap;S++)this.matchcap[S]=e.denseCaps[p+S]}l||(e.size=0),this.matched=!0;break;case P.RUNE:y=_.matchRune(i);break;case P.RUNE1:y=i===_.runes[0];break;case P.RUNE_ANY:y=!0;break;case P.RUNE_ANY_NOT_NL:y=i!==10;break;default:continue}y&&this.add(t,_.out,r,e.denseCaps,p,o)}e.clear()}spawnLookbehinds(e,t,n){for(let r=0;r<this.prog.lbStarts.length;r++)this.add(e,this.prog.lbStarts[r],t,this.matchcap,0,n)}restoreLookbehinds(e,t,n){this.lbTable.set(e.lbTable);for(let r=0;r<e.size;r++)this.add(t,e.pcs[r],e.pos,this.matchcap,0,n)}saveLookbehinds(e,t,n){let r=0;for(let i=0;i<t.size;i++){const o=t.densePcs[i];this.prog.lbInst[o]===1&&P.isRuneOp(this.prog.inst[o].op)&&(e.pcs[r++]=o)}e.size=r,e.pos=n,e.lbTable.set(this.lbTable)}add(e,t,n,r,i,o){const B=this.addStack;let c=0;for(;;){for(;t!==0&&!e.contains(t);){const h=e.add(t),C=this.prog.inst[t];switch(C.op){case P.FAIL:t=0;break;case P.ALT:case P.ALT_MATCH:B[c++]=C.arg,B[c++]=0,t=C.out;break;case P.EMPTY_WIDTH:t=(C.arg&~o)===0?C.out:0;break;case P.NOP:t=C.out;break;case P.CAPTURE:C.arg<this.ncap&&(B[c++]=-C.arg-1,B[c++]=r[i+C.arg],r[i+C.arg]=n),t=C.out;break;case P.LB_WRITE:this.lbTable[Math.abs(C.arg)]=n,t=C.out;break;case P.LB_CHECK:C.arg>0?t=this.lbTable[C.arg]===n?C.out:0:t=this.lbTable[-C.arg]!==n?C.out:0;break;case P.MATCH:case P.RUNE:case P.RUNE1:case P.RUNE_ANY:case P.RUNE_ANY_NOT_NL:if(this.prog.lbInst[t]===0&&e.mainThreads++,this.ncap>0){const p=h*this.ncap;p+this.ncap>e.denseCaps.length&&e.growCaps(p+this.ncap);for(let _=0;_<this.ncap;_++)e.denseCaps[p+_]=r[i+_]}t=0;break;default:throw new Uo("unhandled")}}if(c===0)return;c-=2;const l=B[c];l<0?(r[i-l-1]=B[c+1],t=0):t=l}}};const ly=(s,e,t)=>{let n=-2128831035;for(let r=0;r<s.length;r++)n^=s[r],n=Math.imul(n,16777619);n^=e,n=Math.imul(n,16777619);for(let r=0;r<t.length;r++)n^=t[r],n=Math.imul(n,16777619);return n},bh=(s,e)=>{if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0},Rh=(s,e,t,n)=>s.flag===t&&bh(s.nfaStates,e)&&bh(s.matchIDs,n),DB=[],Nr=-1;var io=class{constructor(s,e,t){this.nfaStates=s,this.flag=e,this.isMatch=(e&Rd.FLAG_MATCH)!==0,this.matchIDs=t,this.next=null,this.nextAnchored=null}},pe,Rd=(pe=class{constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let n=0;n<e.numInst();n++){const r=e.getInst(n).op;if(r===P.LB_WRITE||r===P.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){const e=new Set,t=(r,i)=>{e.add(r),e.add(i+1)};for(let r=0;r<this.prog.numInst();r++){const i=this.prog.getInst(r);switch(i.op){case P.RUNE:case P.RUNE1:if(i.runes.length===1){if(t(i.runes[0],i.runes[0]),(i.arg&M.FOLD_CASE)!==0)for(let o=q.simpleFold(i.runes[0]);o!==i.runes[0];o=q.simpleFold(o))t(o,o)}else for(let o=0;o<i.runes.length;o+=2)t(i.runes[o],i.runes[o+1]);break;case P.RUNE_ANY_NOT_NL:t(10,10);break;case P.EMPTY_WIDTH:(i.arg&(j.EMPTY_BEGIN_LINE|j.EMPTY_END_LINE))!==0&&t(10,10),(i.arg&(j.EMPTY_WORD_BOUNDARY|j.EMPTY_NO_WORD_BOUNDARY))!==0&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;const n=new Int32Array(q.MAX_LATIN1+1);for(let r=0;r<=q.MAX_LATIN1;r++)n[r]=this.searchClass(r);this.latin1Class=n}runeClass(e){return e<=q.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){const t=this.classBounds;let n=0,r=t.length;for(;n<r;){const i=n+r>>1;t[i]<=e?n=i+1:r=i}return n}closure(e,t){const n=new Set,r=Array.from(e);let i=0;for(;r.length>0;){const o=r.pop();if(o===0||n.has(o))continue;n.add(o);const B=this.prog.getInst(o);switch(B.op){case P.ALT:case P.ALT_MATCH:r.push(B.out),r.push(B.arg);break;case P.NOP:case P.CAPTURE:r.push(B.out);break;case P.EMPTY_WIDTH:i|=B.arg,(B.arg&~t)===0&&r.push(B.out)}}return{pcs:Array.from(n).sort((o,B)=>o-B),needflags:i}}getState(e,t,n){const r=ly(e,t,n),i=this.stateCache.get(r);if(i instanceof io){if(Rh(i,e,t,n))return i}else if(i!==void 0){for(let c=0;c<i.length;c++)if(Rh(i[c],e,t,n))return i[c]}const o=pe.stateCost(e,n);if(this.memBudget<o)return null;this.memBudget-=o;const B=new io(e,t,n);return i===void 0?this.stateCache.set(r,B):i instanceof io?this.stateCache.set(r,[i,B]):i.push(B),this.stateCount++,B}static stateCost(e,t){const n=t.length===0?0:pe.ARRAY_OVERHEAD+pe.ELEMENT_SIZE*t.length;return pe.STATE_OVERHEAD+pe.ELEMENT_SIZE*e.length+n}*cachedStates(){for(const e of this.stateCache.values())e instanceof io?yield e:yield*e}makeState(e,t,n){const r=this.closure(e,t&pe.FLAG_EMPTY_MASK);let i=t;return r.needflags===0&&(i&=pe.FLAG_MATCH),i|=r.needflags<<pe.FLAG_NEED_SHIFT,this.getState(r.pcs,i,n)}allocTable(e,t){const n=this.numClasses+1,r=pe.TABLE_OVERHEAD+pe.ELEMENT_SIZE*n;if(this.memBudget<r)return null;this.memBudget-=r;const i=new Array(n).fill(null);return t===M.UNANCHORED?e.next=i:e.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(e,t,n,r){let i=r===M.UNANCHORED?e.next:e.nextAnchored;if(i!==null){const $=i[t];if($!==null)return $}else if(i=this.allocTable(e,r),i===null)return null;const o=e.flag>>>pe.FLAG_NEED_SHIFT,B=e.flag&pe.FLAG_EMPTY_MASK;let c=B,l=0;n===10&&(c|=j.EMPTY_END_LINE,l|=j.EMPTY_BEGIN_LINE),n===Nr&&(c|=j.EMPTY_END_LINE|j.EMPTY_END_TEXT);const h=(e.flag&pe.FLAG_LAST_WORD)!==0,C=n!==Nr&&j.isWordRune(n);c|=C===h?j.EMPTY_NO_WORD_BOUNDARY:j.EMPTY_WORD_BOUNDARY;let p=e.nfaStates;(c&~B&o)!==0&&(p=this.closure(p,c).pcs);const _=[];let y=!1,S=DB;for(let $=0;$<p.length;$++){const re=this.prog.getInst(p[$]);re.op===P.MATCH?(y||(y=!0,S=[]),S.push(re.arg)):n!==Nr&&P.isRuneOp(re.op)&&re.matchRune(n)&&_.push(re.out)}S.length>1&&S.sort(($,re)=>$-re),r===M.UNANCHORED&&n!==Nr&&_.push(this.prog.start);let k=l;y&&(k|=pe.FLAG_MATCH),C&&(k|=pe.FLAG_LAST_WORD);const J=this.makeState(_,k,S);return J===null?null:(i[t]=J,J)}start(e,t){const n=e.context(t);let r;if((n&j.EMPTY_BEGIN_TEXT)!==0)r=j.EMPTY_BEGIN_TEXT|j.EMPTY_BEGIN_LINE;else if((n&j.EMPTY_BEGIN_LINE)!==0)r=j.EMPTY_BEGIN_LINE;else{const o=e.step(t),B=o>=0&&j.isWordRune(o>>3);r=(n&j.EMPTY_WORD_BOUNDARY)!==0!==B?pe.FLAG_LAST_WORD:0}let i=this.startStates.get(r);if(i===void 0){if(i=this.makeState([this.prog.start],r,DB),i===null&&(this.clearCache(),i=this.makeState([this.prog.start],r,DB),i===null))return null;this.startStates.set(r,i)}return i}stepOrReset(e,t,n,r,i,o){let B=this.step(e,t,n,r);if(B!==null)return B;if(o.resetPos>=0&&i-o.resetPos<pe.PROGRESS_PER_STATE*this.stateCount)return null;o.resetPos=i;const c=this.resetCache(e);return c===null?null:(B=this.step(c,t,n,r),B)}run(e,t,n,r,i){const o=e.endPos(),B=this.latin1Class,c=n===M.UNANCHORED,l={resetPos:-1};let h=t;for(;h<o;){const C=e.step(h),p=C>>3,_=C&7;if(_===0)break;const y=p<=q.MAX_LATIN1?B[p]:this.runeClass(p);let S=c&&r.next!==null?r.next[y]:null;if(S===null&&(S=this.stepOrReset(r,y,p,n,h,l),S===null))return null;if(r=S,r.isMatch&&i(r,!1))return!0;if(!c&&r.nfaStates.length===0)return!1;h+=_}return r=this.stepOrReset(r,this.numClasses,Nr,n,h,l),r===null?null:r.isMatch&&i(r,!0)}match(e,t,n){if(this.failed)return null;if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return!1;const r=this.start(e,t);return r===null?null:this.run(e,t,n,r,(i,o)=>n!==M.ANCHOR_BOTH||o)}matchSet(e,t,n){if(this.failed)return null;if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return[];const r=this.start(e,t);if(r===null)return null;const i=new Set,o=(B,c)=>{if(n!==M.ANCHOR_BOTH||c)for(let l=0;l<B.matchIDs.length;l++)i.add(B.matchIDs[l]);return!1};return this.run(e,t,n,r,o)===null?null:Array.from(i).sort((B,c)=>B-c)}},V(pe,"FLAG_EMPTY_MASK",255),V(pe,"FLAG_MATCH",256),V(pe,"FLAG_LAST_WORD",512),V(pe,"FLAG_NEED_SHIFT",16),V(pe,"STATE_OVERHEAD",150),V(pe,"ARRAY_OVERHEAD",40),V(pe,"ELEMENT_SIZE",8),V(pe,"TABLE_OVERHEAD",48),V(pe,"PROGRESS_PER_STATE",10),pe);const uy=32,hy=500,wB=256,fy=262144;var Cy=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(wB),this.jobArg=new Uint8Array(wB),this.jobPos=new Int32Array(wB),this.jobLen=0,this.visited=new Uint32Array(0)}reset(s,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=s.numInst()*(e+1)+uy-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(s,e){const t=s*(this.end+1)+e,n=t>>>5,r=1<<(t&31);return(this.visited[n]&r)!==0?!1:(this.visited[n]|=r,!0)}push(s,e,t,n){if(s.prog.getInst(e).op!==P.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(r);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(s,e,t,n,r){const i=s.longest;for(this.push(s,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],l=!0;for(;!(!l&&!this.shouldVisit(o,c));){l=!1;const h=s.prog.getInst(o);switch(h.op){case P.FAIL:break;case P.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(s,o,c,!0),o=h.out;continue}case P.ALT_MATCH:{const C=s.prog.getInst(h.out);if(P.isRuneOp(C.op)){this.push(s,h.arg,c,!1),o=h.arg,c=this.end;continue}this.push(s,h.out,this.end,!1),o=h.out;continue}case P.RUNE:{const C=e.step(c);if(C===ut.EOF()||!h.matchRune(C>>3))break;c+=C&7,o=h.out;continue}case P.RUNE1:{const C=e.step(c);if(C===ut.EOF()||C>>3!==h.runes[0])break;c+=C&7,o=h.out;continue}case P.RUNE_ANY_NOT_NL:{const C=e.step(c);if(C===ut.EOF()||C>>3===10)break;c+=C&7,o=h.out;continue}case P.RUNE_ANY:{const C=e.step(c);if(C===ut.EOF())break;c+=C&7,o=h.out;continue}case P.CAPTURE:if(B){this.cap[h.arg]=c;break}else{h.arg<this.ncap&&(this.push(s,o,this.cap[h.arg],!0),this.cap[h.arg]=c),o=h.out;continue}case P.EMPTY_WIDTH:{const C=e.context(c);if((h.arg&~C)!==0)break;o=h.out;continue}case P.NOP:o=h.out;continue;case P.MATCH:{if(r===M.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);const C=this.matchcap[1];if((C===-1||i&&c>0&&c>C)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case P.LB_WRITE:case P.LB_CHECK:throw new Uo("Backtracker cannot evaluate Lookbehind instructions");default:throw new Uo("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const oo=[];var ao=class vd{static shouldBacktrack(e){return e.numInst()<=hy}static maxBitStateLen(e){return vd.shouldBacktrack(e)?Math.floor(fy/e.numInst()):0}static execute(e,t,n,r,i){const o=e.cond;if(o===j.EMPTY_ALL||(r===M.ANCHOR_START||r===M.ANCHOR_BOTH)&&n!==0||(o&j.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const B=oo.length>0?oo.pop():new Cy,c=t.endPos();B.reset(e.prog,c,i);let l=!1;if((o&j.EMPTY_BEGIN_TEXT)!==0||r===M.ANCHOR_START||r===M.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,r)&&(l=!0);else{let C=-1;for(;n<=c&&C!==0;n+=C){if(e.prefix.length>0){const _=t.index(e,n);if(_<0)break;n+=_}if(B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,r)){l=!0;break}const p=t.step(n);C=p===ut.EOF()?0:p&7}}if(!l)return oo.push(B),null;const h=i===0?[]:j.toArray(B.matchcap.subarray(0,i));return oo.push(B),h}},vh=class{constructor(s){this.sparse=new Uint32Array(s),this.dense=new Uint32Array(s),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(s){return s<this.sparse.length&&this.sparse[s]<this.size&&this.dense[this.sparse[s]]===s}insert(s){this.contains(s)||this.insertNew(s)}insertNew(s){s>=this.sparse.length||(this.sparse[s]=this.size,this.dense[this.size]=s,this.size++)}};const dy=(s,e,t,n)=>{const r=s.length,i=e.length;let o=0,B=0;const c=[],l=[];let h=!0,C=-1;const p=_=>{const y=_?s:e,S=_?o:B,k=_?t:n;return C>0&&y[S]<=c[C]?!1:(c.push(y[S],y[S+1]),_?o+=2:B+=2,C+=2,l.push(k),!0)};for(;o<r||B<i;)if(B>=i?h=p(!0):o>=r||e[B]<s[o]?h=p(!1):h=p(!0),!h)return null;return{merged:c,next:l}};var py=class{constructor(s){this.start=s.start,this.numCap=s.numCap,this.inst=new Array(s.inst.length);for(let e=0;e<s.inst.length;e++){const t=s.inst[e],n=new P(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?new Int32Array(t.runes):new Int32Array(0),n.next=null,this.inst[e]=n}}};const gy=s=>{const e=new py(s);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==P.ALT&&n.op!==P.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[n[i]];if(o.op!==P.ALT&&o.op!==P.ALT_MATCH&&(r="arg",i="out",o=e.inst[n[i]],o.op!==P.ALT&&o.op!==P.ALT_MATCH))continue;const B=e.inst[n[r]];if(B.op===P.ALT||B.op===P.ALT_MATCH)continue;let c="out",l="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,c="arg",l="out"),h&&(o[c]=n[r]),n[r]===o[c]&&(n[i]=o[l])}return e},my=s=>{if(s.inst.length>=1e3)return null;const e=new vh(s.inst.length),t=new vh(s.inst.length),n=new Array(s.inst.length),r=new Array(s.inst.length).fill(!1),i=o=>{let B=!0;const c=s.inst[o];if(t.contains(o))return!0;switch(t.insert(o),c.op){case P.ALT:case P.ALT_MATCH:{B=i(c.out)&&i(c.arg);let l=r[c.out],h=r[c.arg];if(l&&h)return!1;if(h){const y=c.out;c.out=c.arg,c.arg=y;const S=l;l=h,h=S}l&&(r[o]=!0,c.op=P.ALT_MATCH);const C=n[c.out]||[],p=n[c.arg]||[],_=dy(C,p,c.out,c.arg);if(!_)return!1;n[o]=new Int32Array(_.merged),c.next=new Uint32Array(_.next);break}case P.CAPTURE:case P.EMPTY_WIDTH:case P.NOP:B=i(c.out),r[o]=r[c.out],n[o]=n[c.out]?new Int32Array(n[c.out]):new Int32Array(0),c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out);break;case P.MATCH:case P.FAIL:r[o]=c.op===P.MATCH;break;case P.RUNE:{if(r[o]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){n[o]=new Int32Array(0),c.next=new Uint32Array([c.out]);break}let l=[];if(c.runes.length===1&&(c.arg&M.FOLD_CASE)!==0){const h=c.runes[0];l.push(h,h);for(let C=q.simpleFold(h);C!==h;C=q.simpleFold(C))l.push(C,C);l.sort((C,p)=>C-p)}else for(let h=0;h<c.runes.length;h++)l.push(c.runes[h]);n[o]=new Int32Array(l),c.next=new Uint32Array(Math.floor(l.length/2)+1).fill(c.out),c.op=P.RUNE;break}case P.RUNE1:{if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let l=[];if((c.arg&M.FOLD_CASE)!==0){const h=c.runes[0];l.push(h,h);for(let C=q.simpleFold(h);C!==h;C=q.simpleFold(C))l.push(C,C);l.sort((C,p)=>C-p)}else l.push(c.runes[0],c.runes[0]);n[o]=new Int32Array(l),c.next=new Uint32Array(Math.floor(l.length/2)+1).fill(c.out),c.op=P.RUNE;break}case P.RUNE_ANY:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=new Int32Array([0,q.MAX_RUNE]),c.next=new Uint32Array([c.out]);break;case P.RUNE_ANY_NOT_NL:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=new Int32Array([0,9,11,q.MAX_RUNE]),c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out)}return B};for(e.clear(),e.insert(s.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<s.inst.length;o++)n[o]&&(s.inst[o].runes=n[o]);return s},Ey=(s,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case P.ALT:case P.ALT_MATCH:case P.RUNE:break;case P.CAPTURE:case P.EMPTY_WIDTH:case P.NOP:case P.MATCH:case P.FAIL:s.inst[t].next=null;break;case P.RUNE1:case P.RUNE_ANY:case P.RUNE_ANY_NOT_NL:s.inst[t].next=null,s.inst[t].op=n.op,s.inst[t].runes=n.runes?new Int32Array(n.runes):new Int32Array(0)}}};var Oh=class Od{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==P.EMPTY_WIDTH||(t.arg&j.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===P.ALT||e.inst[i].op===P.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case P.ALT:case P.ALT_MATCH:if(B===P.MATCH||e.inst[o.arg].op===P.MATCH)return null;break;case P.EMPTY_WIDTH:if(B===P.MATCH){if((o.arg&j.EMPTY_END_TEXT)===j.EMPTY_END_TEXT)continue;return null}break;default:if(B===P.MATCH&&n)return null}}let r=gy(e);return r=my(r),r!==null&&Ey(r,e),r}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===P.ALT_MATCH?e.out:0}static execute(e,t,n,r,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let c=!1,l=t.step(n),h=l>>3,C=l&7,p=ut.EOF(),_=-1,y=0;l!==ut.EOF()&&(p=t.step(n+C),p!==ut.EOF()&&(_=p>>3,y=p&7));let S=n===0?j.emptyOpContext(-1,h):t.context(n),k=o.start,J;for(;;){switch(J=o.inst[k],k=J.out,J.op){case P.MATCH:return r===M.ANCHOR_BOTH&&n!==t.endPos()?null:(c=!0,B.length>0&&(B[0]=0,B[1]=n),i===0?[]:j.toArray(B));case P.RUNE:if(!J.matchRune(h))return null;break;case P.RUNE1:if(h!==J.runes[0])return null;break;case P.RUNE_ANY:break;case P.RUNE_ANY_NOT_NL:if(h===10)return null;break;case P.ALT:case P.ALT_MATCH:k=Od.next(J,h);continue;case P.FAIL:return null;case P.NOP:continue;case P.EMPTY_WIDTH:if((J.arg&~S)!==0)return null;continue;case P.CAPTURE:J.arg<B.length&&(B[J.arg]=n);continue;default:throw new Uo("bad inst")}if(C===0)break;S=j.emptyOpContext(h,_),n+=C,h=_,C=y,h!==-1&&(p=t.step(n+C),p!==ut.EOF()?(_=p>>3,y=p&7):(_=-1,y=0))}return c?i===0?[]:j.toArray(B):null}},Y,I=(Y=class{static isPseudoOp(e){return e>=Y.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===L.CODES["-"]?"\\":""}static fromRegexp(e){const t=new Y(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Y.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Y.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Y.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Y.Op.EMPTY_MATCH:e+="(?:)";break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:case Y.Op.REPEAT:{const t=this.subs[0];switch(t.op>Y.Op.CAPTURE||t.op===Y.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Y.Op.STAR:e+="*";break;case Y.Op.PLUS:e+="+";break;case Y.Op.QUEST:e+="?";break;case Y.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}"}(this.flags&M.NON_GREEDY)!==0&&(e+="?");break}case Y.Op.CONCAT:for(let t of this.subs)t.op===Y.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Y.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case Y.Op.LITERAL:(this.flags&M.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=j.escapeRune(t);(this.flags&M.FOLD_CASE)!==0&&(e+=")");break;case Y.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Y.Op.ANY_CHAR:e+="(?s:.)";break;case Y.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Y.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Y.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Y.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Y.Op.BEGIN_TEXT:e+="\\A";break;case Y.Op.END_TEXT:(this.flags&M.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case Y.Op.BEGIN_LINE:e+="^";break;case Y.Op.END_LINE:e+="$";break;case Y.Op.WORD_BOUNDARY:e+="\\b";break;case Y.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Y.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===q.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,r=this.runes[t+1]-1;e+=Y.quoteIfHyphen(n),e+=j.escapeRune(n),n!==r&&(e+="-",e+=Y.quoteIfHyphen(r),e+=j.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],r=this.runes[t+1];e+=Y.quoteIfHyphen(n),e+=j.escapeRune(n),n!==r&&(e+="-",e+=Y.quoteIfHyphen(r),e+=j.escapeRune(r))}e+="]";break;default:e+=this.op}return e}maxCap(){let e=0;if(this.op===Y.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof Y)||this.op!==e.op)return!1;switch(this.op){case Y.Op.END_TEXT:if((this.flags&M.WAS_DOLLAR)!==(e.flags&M.WAS_DOLLAR))return!1;break;case Y.Op.LITERAL:case Y.Op.CHAR_CLASS:if((this.flags&M.FOLD_CASE)!==(e.flags&M.FOLD_CASE))return!1;if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Y.Op.ALTERNATE:case Y.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.REPEAT:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.PLB:case Y.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1}return!0}},V(Y,"Op",Ad(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),Y),Vc=class{static walk(s,e){const t=[];let n=s,r;for(;;){if(n.subs.length===0)r=e.leaf(n);else{const i=e.enter(n);if(i.result===void 0){t.push({re:n,state:i,i:0}),n=n.subs[0];continue}r=i.result}for(;;){if(t.length===0)return r;const i=t[t.length-1];if(e.child(i.re,i.state,r,i.i),i.i++,i.state.result===void 0&&i.i<i.re.subs.length){n=i.re.subs[i.i];break}t.pop(),r=i.state.result!==void 0?i.state.result:e.leave(i.re,i.state)}}}},Sh=class{constructor(s,e){const t=new Map,n=[0],r=[0],i=[0],o=[0];for(const y of s){let S=0;for(let k=0;k<y.length;k++){const J=S*e+y[k];let $=t.get(J);$===void 0&&($=n.length,t.set(J,$),n.push(S),r.push(y[k]),i.push(i[S]+1),o.push(0)),S=$}o[S]=1}const B=n.length,c=new Int32Array(B-1);for(let y=1;y<B;y++)c[y-1]=y;c.sort((y,S)=>n[y]-n[S]||r[y]-r[S]);const l=new Int32Array(B+1);for(let y=1;y<B;y++)l[n[y]+1]++;for(let y=0;y<B;y++)l[y+1]+=l[y];const h=new Int32Array(B-1);for(let y=0;y<c.length;y++)h[y]=r[c[y]];this.childStart=l,this.childUnit=h,this.childNode=c;const C=new Int32Array(B);for(let y=0;y<B;y++)C[y]=y;C.sort((y,S)=>i[y]-i[S]);const p=new Int32Array(B),_=Uint8Array.from(o);for(let y=1;y<B;y++){const S=C[y],k=n[S];if(k!==0){let J=p[k],$=this.next(J,r[S]);for(;$<0&&J!==0;)J=p[J],$=this.next(J,r[S]);p[S]=$>=0?$:0}_[S]|=_[p[S]]}this.fail=p,this.match=_}next(s,e){let t=this.childStart[s],n=this.childStart[s+1];const r=this.childUnit;for(;t<n;){const i=t+n>>1,o=r[i];if(o===e)return this.childNode[i];o<e?t=i+1:n=i}return-1}advance(s,e){for(;;){const t=this.next(s,e);if(t>=0)return t;if(s===0)return 0;s=this.fail[s]}}searchUTF16(s,e,t){let n=0;for(let r=e;r<t;r++)if(n=this.advance(n,s.charCodeAt(r)),this.match[n]===1)return!0;return!1}searchUTF8(s,e,t){let n=0;for(let r=e;r<t;r++)if(n=this.advance(n,s[r]),this.match[n]===1)return!0;return!1}},At,ce=(At=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.cost=e===At.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(this.ac16===null){const e=this.subs.map(t=>{const n=new Array(t.str.length);for(let r=0;r<t.str.length;r++)n[r]=t.str.charCodeAt(r);return n});this.ac16=new Sh(e,65536)}return this.ac16}automaton8(){return this.ac8===null&&(this.ac8=new Sh(this.subs.map(e=>e.bytes),256)),this.ac8}eval(e,t){switch(this.type){case At.Type.NONE:return!0;case At.Type.EXACT:return e.hasString(this,t);case At.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case At.Type.OR:if(this.allExact)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},V(At,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),V(At,"MAX_SCANS",32),V(At,"MAX_AC_UNITS",1<<18),At),jt,_y=(jt=class{static build(e){return e?Vc.walk(e,jt.WALKER):new ce(ce.Type.NONE)}static leaf(e){if(e.op!==I.Op.LITERAL)return new ce(ce.Type.NONE);if(e.runes.length===0||(e.flags&M.FOLD_CASE)!==0)return new ce(ce.Type.NONE);let t="";for(let r=0;r<e.runes.length;r++){if(q.isUnsearchable(e.runes[r]))return new ce(ce.Type.NONE);t+=String.fromCodePoint(e.runes[r])}const n=new ce(ce.Type.EXACT);return n.str=t,n.bytes=j.stringToUtf8ByteArray(n.str),n}static enter(e){switch(e.op){case I.Op.CAPTURE:case I.Op.PLUS:return{sub:null};case I.Op.REPEAT:return e.min>=1?{sub:null}:{result:new ce(ce.Type.NONE)};case I.Op.CONCAT:return{pf:new ce(ce.Type.AND),subs:[]};case I.Op.ALTERNATE:return{pf:new ce(ce.Type.OR),subs:[]};default:return{result:new ce(ce.Type.NONE)}}}static child(e,t,n){if(t.subs===void 0){t.sub=n;return}if(t.pf.type===ce.Type.AND){if(n.type===ce.Type.NONE)return;if(n.type===ce.Type.AND){for(let r=0;r<n.subs.length;r++)t.subs.push(n.subs[r]);return}t.subs.push(n);return}if(n.type===ce.Type.NONE){t.result=new ce(ce.Type.NONE);return}if(n.type===ce.Type.OR){for(let r=0;r<n.subs.length;r++)t.subs.push(n.subs[r]);return}t.subs.push(n)}static leave(e,t){if(t.subs===void 0)return t.sub;const n=t.pf,r=new Set,i=[];for(const l of t.subs){if(l.type===ce.Type.EXACT){if(r.has(l.str))continue;r.add(l.str)}i.push(l)}if(n.type===ce.Type.AND){const l=[];let h=0;for(const C of i)h+C.cost>ce.MAX_SCANS||(l.push(C),h+=C.cost);return l.length===0?new ce(ce.Type.NONE):l.length===1?l[0]:(n.subs=l,n.cost=h,n)}if(i.length===0)return new ce(ce.Type.NONE);if(i.length===1)return i[0];n.subs=i;let o=!0,B=0,c=0;for(const l of i)l.type!==ce.Type.EXACT?o=!1:c+=l.bytes.length,B+=l.cost;return o?c>ce.MAX_AC_UNITS?new ce(ce.Type.NONE):(n.allExact=!0,n.cost=1,n):B>ce.MAX_SCANS?new ce(ce.Type.NONE):(n.cost=B,n)}},V(jt,"WALKER",{leaf:e=>jt.leaf(e),enter:e=>jt.enter(e),child:(e,t,n)=>jt.child(e,t,n),leave:(e,t)=>jt.leave(e,t)}),jt),Pt=class{constructor(s=0,e=0){this.head=s,this.tail=e}},Dy=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(s){return this.inst[s]}numInst(){return this.inst.length}addInst(s){this.inst.push(new P(s))}markLookbehindInsts(){const s=new Uint8Array(this.inst.length),e=this.lbStarts.slice();for(;e.length>0;){const t=e.pop();if(t===0||s[t]===1)continue;s[t]=1;const n=this.inst[t];switch(n.op){case P.ALT:case P.ALT_MATCH:e.push(n.out,n.arg);break;case P.MATCH:case P.FAIL:break;default:e.push(n.out)}}this.lbInst=s}skipNop(s){let e=this.inst[s];for(;e.op===P.NOP||e.op===P.CAPTURE;)e=this.inst[s],s=e.out;return e}prefix(){let s="",e=this.skipNop(this.start);if(!P.isRuneOp(e.op)||e.runes.length!==1)return[e.op===P.MATCH,s];for(;P.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&M.FOLD_CASE)===0&&!q.isUnsearchable(e.runes[0]);)s+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===P.MATCH,s]}startCond(){let s=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case P.EMPTY_WIDTH:s|=t.arg;break;case P.FAIL:return-1;case P.CAPTURE:case P.NOP:break;default:break e}e=t.out}return s}patch(s,e){let t=s.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(s,e){if(s.head===0)return e;if(e.head===0)return s;const t=this.inst[s.tail>>1];return(s.tail&1)===0?t.out=e.head:t.arg=e.head,new Pt(s.head,e.tail)}toString(){let s="";for(let e=0;e<this.inst.length;e++){const t=s.length;s+=e,e===this.start&&(s+="*"),s+="        ".substring(s.length-t),s+=this.inst[e],s+=`
`}return s}};const wy=new Int32Array([0,L.CODES[`
`]-1,L.CODES[`
`]+1,q.MAX_RUNE]),Nh=new Int32Array([0,q.MAX_RUNE]);var Bo=class{constructor(s=0,e=new Pt,t=!1){this.i=s,this.out=e,this.nullable=t}},yy=class ec{static compileRegexp(e){const t=new ec,n=t.compile(e);return t.prog.patch(n.out,t.newInst(P.MATCH).i),t.prog.start=n.i,t.prog.markLookbehindInsts(),t.prog}static compileSet(e){const t=new ec;if(e.length===0)return t.prog.start=t.newInst(P.FAIL).i,t.prog.markLookbehindInsts(),t.prog;let n=[];for(let i=0;i<e.length;i++){t.lbOffset=t.prog.numLb;const o=t.compile(e[i]),B=t.newInst(P.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),n.push(o.i)}let r=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(P.ALT),B=t.prog.getInst(o.i);B.out=r,B.arg=n[i],r=o.i}return t.prog.start=r,t.prog.markLookbehindInsts(),t.prog}constructor(){this.prog=new Dy,this.newInst(P.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,n)=>this.child(e,t,n),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new Bo(this.prog.numInst()-1,new Pt,!0)}nop(){const e=this.newInst(P.NOP);return e.out=new Pt(e.i<<1,e.i<<1),e}fail(){return new Bo}cap(e){const t=this.newInst(P.CAPTURE);return t.out=new Pt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new Bo(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(P.ALT),r=this.prog.getInst(n.i);return r.out=e.i,r.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(P.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Pt(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Pt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){if(e.i===0)return this.nop();const n=this.newInst(P.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Pt(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Pt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.i===0?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return e.i===0?this.fail():new Bo(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(P.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Pt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(P.RUNE);n.nullable=!1;const r=this.prog.getInst(n.i);return r.runes=e,t&=M.FOLD_CASE,(e.length!==1||q.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,n.out=new Pt(n.i<<1,n.i<<1),(t&M.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=P.RUNE1:e.length===2&&e[0]===0&&e[1]===q.MAX_RUNE?r.op=P.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===L.CODES[`
`]-1&&e[2]===L.CODES[`
`]+1&&e[3]===q.MAX_RUNE&&(r.op=P.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=Math.sign(t)*(Math.abs(t)+this.lbOffset),r=this.newInst(P.LB_WRITE);this.prog.getInst(r.i).arg=n;const i=this.rune(Nh,0),o=this.star(i,!0),B=this.cat(o,e);this.prog.patch(B.out,r.i);const c=this.newInst(P.LB_CHECK);return this.prog.getInst(c.i).arg=n,this.prog.lbStarts.push(B.i),Math.abs(n)>this.prog.numLb&&(this.prog.numLb=Math.abs(n)),c.out=new Pt(c.i<<1,c.i<<1),c}compile(e){return Vc.walk(e,this.walker)}leaf(e){switch(e.op){case I.Op.NO_MATCH:return this.fail();case I.Op.EMPTY_MATCH:return this.nop();case I.Op.LITERAL:{if(e.runes.length===0)return this.nop();let t=null;for(let n of e.runes){let r=this.runeCache.get(n);r===void 0&&(r=new Int32Array([n]),this.runeCache.set(n,r));const i=this.rune(r,e.flags);t=t===null?i:this.cat(t,i)}return t}case I.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case I.Op.ANY_CHAR_NOT_NL:return this.rune(wy,0);case I.Op.ANY_CHAR:return this.rune(Nh,0);case I.Op.BEGIN_LINE:return this.empty(j.EMPTY_BEGIN_LINE);case I.Op.END_LINE:return this.empty(j.EMPTY_END_LINE);case I.Op.BEGIN_TEXT:return this.empty(j.EMPTY_BEGIN_TEXT);case I.Op.END_TEXT:return this.empty(j.EMPTY_END_TEXT);case I.Op.WORD_BOUNDARY:return this.empty(j.EMPTY_WORD_BOUNDARY);case I.Op.NO_WORD_BOUNDARY:return this.empty(j.EMPTY_NO_WORD_BOUNDARY);case I.Op.CONCAT:case I.Op.ALTERNATE:return this.nop();default:throw new mB("regexp: unhandled case in compile")}}enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{f:null};default:throw new mB("regexp: unhandled case in compile")}}child(e,t,n){e.op===I.Op.CONCAT?t.f=t.f===null?n:this.cat(t.f,n):e.op===I.Op.ALTERNATE?t.f=t.f===null?n:this.alt(t.f,n):t.sub=n}leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:return this.lookBehind(t.sub,e.lb);case I.Op.CAPTURE:{const n=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),n)}case I.Op.STAR:return this.star(t.sub,(e.flags&M.NON_GREEDY)!==0);case I.Op.PLUS:return this.plus(t.sub,(e.flags&M.NON_GREEDY)!==0);case I.Op.QUEST:return this.quest(t.sub,(e.flags&M.NON_GREEDY)!==0);case I.Op.CONCAT:case I.Op.ALTERNATE:return t.f;default:throw new mB("regexp: unhandled case in compile")}}},Ne,Iy=(Ne=class{static simplify(e){return e===null?null:Vc.walk(e,Ne.WALKER)}static leaf(e){if(e.op===I.Op.CHAR_CLASS){if(e.runes===null)return e;if(e.runes.length===0)return new I(I.Op.NO_MATCH);if(e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE)return new I(I.Op.ANY_CHAR);if(e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES[`
`]-1&&e.runes[2]===L.CODES[`
`]+1&&e.runes[3]===q.MAX_RUNE)return new I(I.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{subs:[],changed:!1};case I.Op.REPEAT:return e.min===0&&e.max===0?{result:new I(I.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,n,r){if(t.subs===void 0){t.sub=n;return}if(n!==e.subs[r]&&(t.changed=!0),e.op===I.Op.CONCAT){if(n.op===I.Op.NO_MATCH){t.result=new I(I.Op.NO_MATCH);return}if(n.op===I.Op.EMPTY_MATCH){t.changed=!0;return}if(n.op===I.Op.CONCAT){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}else{if(n.op===I.Op.NO_MATCH){t.changed=!0;return}if(n.op===I.Op.ALTERNATE){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}t.subs.push(n)}static leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:{const n=t.sub;if(n!==e.subs[0]){const r=I.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=[n],r}return e}case I.Op.CONCAT:case I.Op.ALTERNATE:if(t.changed){const n=t.subs;if(n.length===0)return new I(e.op===I.Op.CONCAT?I.Op.EMPTY_MATCH:I.Op.NO_MATCH);if(n.length===1)return n[0];const r=I.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=n,r}return e;case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return Ne.simplify1(e.op,e.flags,t.sub,e);case I.Op.REPEAT:return Ne.simplifyRepeat(e,t.sub);default:return e}}static simplifyRepeat(e,t){if(e.max===-1){if(e.min===0)return Ne.simplify1(I.Op.STAR,e.flags,t,null);if(e.min===1)return Ne.simplify1(I.Op.PLUS,e.flags,t,null);const r=[];for(let i=0;i<e.min-1;i++)r.push(t);return r.push(Ne.simplify1(I.Op.PLUS,e.flags,t,null)),Ne.concat(r)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let r=0;r<e.min;r++)n.push(t)}if(e.max>e.min){let r=Ne.simplify1(I.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++)r=Ne.simplify1(I.Op.QUEST,e.flags,Ne.concat([t,r]),null);if(n===null)return r;n.push(r)}return n!==null?Ne.concat(n):new I(I.Op.NO_MATCH)}static concat(e){const t=[];for(let r=0;r<e.length;r++){const i=e[r];if(i.op===I.Op.NO_MATCH)return new I(I.Op.NO_MATCH);if(i.op!==I.Op.EMPTY_MATCH){if(i.op===I.Op.CONCAT){for(let o=0;o<i.subs.length;o++)t.push(i.subs[o]);continue}t.push(i)}}if(t.length===0)return new I(I.Op.EMPTY_MATCH);if(t.length===1)return t[0];const n=new I(I.Op.CONCAT);return n.subs=t,n}static simplify1(e,t,n,r){if(n.op===I.Op.EMPTY_MATCH)return n;if(n.op===I.Op.NO_MATCH)return e===I.Op.PLUS?n:new I(I.Op.EMPTY_MATCH);if(e===n.op&&(t&M.NON_GREEDY)===(n.flags&M.NON_GREEDY))return n;if(r!==null&&r.op===e&&(r.flags&M.NON_GREEDY)===(t&M.NON_GREEDY)&&n===r.subs[0])return r;const i=new I(e);return i.flags=t,i.subs=[n],i}},V(Ne,"WALKER",{leaf:e=>Ne.leaf(e),enter:e=>Ne.enter(e),child:(e,t,n,r)=>Ne.child(e,t,n,r),leave:(e,t)=>Ne.leave(e,t)}),Ne),fe=class{constructor(s,e){this.sign=s,this.cls=e}};const Ph=[48,57],Fh=[9,10,12,13,32,32],Lh=[48,57,65,90,95,95,97,122],kh=new Map([["\\d",new fe(1,Ph)],["\\D",new fe(-1,Ph)],["\\s",new fe(1,Fh)],["\\S",new fe(-1,Fh)],["\\w",new fe(1,Lh)],["\\W",new fe(-1,Lh)]]),xh=[48,57,65,90,97,122],Mh=[65,90,97,122],Vh=[0,127],Gh=[9,9,32,32],Uh=[0,31,127,127],Hh=[48,57],jh=[33,126],Jh=[97,122],Kh=[32,126],qh=[33,47,58,64,91,96,123,126],$h=[9,13,32,32],zh=[65,90],Wh=[48,57,65,90,95,95,97,122],Yh=[48,57,65,70,97,102],Qh=new Map([["[:alnum:]",new fe(1,xh)],["[:^alnum:]",new fe(-1,xh)],["[:alpha:]",new fe(1,Mh)],["[:^alpha:]",new fe(-1,Mh)],["[:ascii:]",new fe(1,Vh)],["[:^ascii:]",new fe(-1,Vh)],["[:blank:]",new fe(1,Gh)],["[:^blank:]",new fe(-1,Gh)],["[:cntrl:]",new fe(1,Uh)],["[:^cntrl:]",new fe(-1,Uh)],["[:digit:]",new fe(1,Hh)],["[:^digit:]",new fe(-1,Hh)],["[:graph:]",new fe(1,jh)],["[:^graph:]",new fe(-1,jh)],["[:lower:]",new fe(1,Jh)],["[:^lower:]",new fe(-1,Jh)],["[:print:]",new fe(1,Kh)],["[:^print:]",new fe(-1,Kh)],["[:punct:]",new fe(1,qh)],["[:^punct:]",new fe(-1,qh)],["[:space:]",new fe(1,$h)],["[:^space:]",new fe(-1,$h)],["[:upper:]",new fe(1,zh)],["[:^upper:]",new fe(-1,zh)],["[:word:]",new fe(1,Wh)],["[:^word:]",new fe(-1,Wh)],["[:xdigit:]",new fe(1,Yh)],["[:^xdigit:]",new fe(-1,Yh)]]);var ls=class Io{static charClassToString(e,t){let n="[";for(let r=0;r<t;r+=2){r>0&&(n+=" ");const i=e[r],o=e[r+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static sortRanges(e,t){const n=t>>1,r=new Array(n);for(let o=0;o<n;o++)r[o]=o;r.sort((o,B)=>e[2*o]-e[2*B]||e[2*B+1]-e[2*o+1]);const i=e.slice(0,t);for(let o=0;o<n;o++)e[2*o]=i[2*r[o]],e[2*o+1]=i[2*r[o]+1]}constructor(e=j.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;Io.sortRanges(this.r,this.len);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],r=this.r[t+1];if(n<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=n,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&M.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const r=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=q.MIN_FOLD&&t>=q.MAX_FOLD)return this.appendRange(e,t);if(t<q.MIN_FOLD||e>q.MAX_FOLD)return this.appendRange(e,t);e<q.MIN_FOLD&&(this.appendRange(e,q.MIN_FOLD-1),e=q.MIN_FOLD),t>q.MAX_FOLD&&(this.appendRange(q.MAX_FOLD+1,t),t=q.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let r=q.simpleFold(n);r!==n;r=q.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const r=e[n],i=e[n+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,r);continue}for(let o=n;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const r=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let B=r;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const r=this.r[n],i=this.r[n+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=q.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=q.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new Io().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return Io.charClassToString(this.r,this.len)}},Ty=class{constructor(s){this.str=s,this.position=0}pos(){return this.position}rewindTo(s){this.position=s}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(s){this.position+=s}skipString(s){this.position+=s.length}pop(){const s=this.str.codePointAt(this.position);return this.position+=j.charCount(s),s}lookingAt(s){return this.str.startsWith(s,this.position)}rest(){return this.str.substring(this.position)}from(s){return this.str.substring(s,this.position)}toString(){return this.rest()}},H,Ay=(H=class{static unicodeTable(e){return e==="Any"?{tab:H.ANY_TABLE,fold:H.ANY_TABLE,sign:1}:e==="Ascii"?{tab:H.ASCII_TABLE,fold:H.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:It.CATEGORIES.get("Cn"),fold:It.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:It.CATEGORIES.get("LC"),fold:It.FOLD_CATEGORIES.get("LC"),sign:1}:It.CATEGORIES.has(e)?{tab:It.CATEGORIES.get(e),fold:It.FOLD_CATEGORIES.get(e),sign:1}:It.SCRIPTS.has(e)?{tab:It.SCRIPTS.get(e),fold:It.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<q.MIN_FOLD||e>q.MAX_FOLD)return e;let t=e;const n=e;for(e=q.simpleFold(e);e!==n;e=q.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===I.Op.EMPTY_MATCH)return null;if(e.op===I.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===I.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new I(I.Op.LITERAL);return n.flags=t,n.runes=j.stringToRunes(e),n}static parse(e,t){return new H(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=H.parseInt(e);if(n===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=H.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||r===-2||r>1e3||r>=0&&n>r)throw new ye(H.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|r&q.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==L.CODES._&&!j.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=L.CODES[0]&&e.peek()<=L.CODES[9];)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===L.CODES[0]?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===I.Op.LITERAL&&e.runes.length===1||e.op===I.Op.CHAR_CLASS||e.op===I.Op.ANY_CHAR_NOT_NL||e.op===I.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case I.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case I.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case I.Op.ANY_CHAR_NOT_NL:return t!==L.CODES[`
`];case I.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case I.Op.ANY_CHAR:break;case I.Op.ANY_CHAR_NOT_NL:H.matchRune(t,L.CODES[`
`])&&(e.op=I.Op.ANY_CHAR);break;case I.Op.CHAR_CLASS:{const n=new ls(Array.isArray(e.runes)?e.runes:Array.from(e.runes));t.op===I.Op.LITERAL?n.appendLiteral(t.runes[0],t.flags):n.appendClass(t.runes),e.runes=n.toGrowableArray();break}case I.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=I.Op.CHAR_CLASS,e.runes=new ls().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toGrowableArray()}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new ye(H.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case L.CODES[1]:case L.CODES[2]:case L.CODES[3]:case L.CODES[4]:case L.CODES[5]:case L.CODES[6]:case L.CODES[7]:if(!e.more()||e.peek()<L.CODES[0]||e.peek()>L.CODES[7])break;case L.CODES[0]:{let r=n-L.CODES[0];for(let i=1;i<3&&!(!e.more()||e.peek()<L.CODES[0]||e.peek()>L.CODES[7]);i++)r=r*8+e.peek()-L.CODES[0],e.skip(1);return r}case L.CODES.x:{if(!e.more())break;if(n=e.pop(),n===L.CODES["{"]){let o=0,B=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===L.CODES["}"])break;const c=j.unhex(n);if(c<0||(B=B*16+c,B>q.MAX_RUNE))break e;o++}if(o===0)break e;return B}const r=j.unhex(n);if(!e.more())break;n=e.pop();const i=j.unhex(n);if(r<0||i<0)break;return r*16+i}case L.CODES.a:return L.CODES["\x07"];case L.CODES.f:return L.CODES["\f"];case L.CODES.n:return L.CODES[`
`];case L.CODES.r:return L.CODES["\r"];case L.CODES.t:return L.CODES["	"];case L.CODES.v:return L.CODES["\v"];default:if(n<=q.MAX_ASCII&&!j.isalnum(n))return n}throw new ye(H.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new ye(H.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?H.parseEscape(e):e.pop()}static hasCapture(e){if(e===null)return!1;if(e.op===I.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(H.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new I(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>H.MAX_RUNES)throw new ye(H.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===I.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(H.MAX_SIZE/this.repeats)?this.repeats=H.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(H.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>H.MAX_SIZE)throw new ye(H.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case I.Op.LITERAL:n=e.runes.length;break;case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case I.Op.PLUS:case I.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case I.Op.CONCAT:for(let r of e.subs)n=n+this.calcSize(r);break;case I.Op.ALTERNATE:for(let r of e.subs)n=n+this.calcSize(r);e.subs.length>1&&(n=n+e.subs.length-1);break;case I.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+r:n=1+e.min*r;break}n=e.max*r+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<H.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>H.MAX_HEIGHT)throw new ye(H.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let r of e.subs){const i=this.calcHeight(r);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!I.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===I.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&q.simpleFold(e.runes[0])===e.runes[2]&&q.simpleFold(e.runes[2])===e.runes[0]||e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&q.simpleFold(e.runes[0])===e.runes[1]&&q.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|M.FOLD_CASE))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|M.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const r=this.stack[n-1],i=this.stack[n-2];if(r.op!==I.Op.LITERAL||i.op!==I.Op.LITERAL||(r.flags&M.FOLD_CASE)!==(i.flags&M.FOLD_CASE))return!1;Array.isArray(i.runes)||(i.runes=Array.from(i.runes));for(let o=0;o<r.runes.length;o++)i.runes.push(r.runes[o]);return e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1)}newLiteral(e,t){const n=this.newRegexp(I.Op.LITERAL);return n.flags=t,(t&M.FOLD_CASE)!==0&&(e=H.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,r,i,o){let B=this.flags;if((B&M.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=M.NON_GREEDY),o!==-1))throw new ye(H.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new ye(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const l=this.stack[c-1];if(I.isPseudoOp(l.op))throw new ye(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=B,h.subs=[l],this.stack[c-1]=h,this.checkLimits(h),e===I.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new ye(H.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===I.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(I.Op.EMPTY_MATCH)):this.push(this.collapse(e,I.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(I.Op.NO_MATCH)):this.push(this.collapse(e,I.Op.ALTERNATE))}cleanAlt(e){e.op===I.Op.CHAR_CLASS&&(e.runes=new ls(Array.from(e.runes)).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE?(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES[`
`]-1&&e.runes[2]===L.CODES[`
`]+1&&e.runes[3]===q.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let B of e)n+=B.op===t?B.subs.length:1;let r=new Array(n).fill(null),i=0;for(let B of e)if(B.op===t){for(let c=0;c<B.subs.length;c++)r[i++]=B.subs[c];this.reuse(B)}else r[i++]=B;let o=this.newRegexp(t);if(o.subs=r,t===I.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,r=0,i=null,o=0,B=0,c=0;for(let h=0;h<=n;h++){let C=null,p=0,_=0;if(h<n){let y=e[t+h];if(y.op===I.Op.CONCAT&&y.subs.length>0&&(y=y.subs[0]),y.op===I.Op.LITERAL&&(C=y.runes,p=y.runes.length,_=y.flags&M.FOLD_CASE),_===B){let S=0;for(;S<o&&S<p&&i[S]===C[S];)S++;if(S>0){o=S;continue}}}if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const y=this.newRegexp(I.Op.LITERAL);y.flags=B,y.runes=i.slice(0,o);for(let J=c;J<h;J++)e[t+J]=this.removeLeadingString(e[t+J],o),this.checkLimits(e[t+J]);const S=this.collapse(e.slice(t+c,t+h),I.Op.ALTERNATE),k=this.newRegexp(I.Op.CONCAT);k.subs=[y,S],e[r++]=k}c=h,i=C,o=p,B=_}n=r,t=0,c=0,r=0;let l=null;for(let h=0;h<=n;h++){let C=null;if(!(h<n&&(C=H.leadingRegexp(e[t+h]),l!==null&&l.equals(C)&&(H.isCharClass(l)||l.op===I.Op.REPEAT&&l.min===l.max&&H.isCharClass(l.subs[0]))))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const p=l;for(let S=c;S<h;S++){const k=S!==c;e[t+S]=this.removeLeadingRegexp(e[t+S],k),this.checkLimits(e[t+S])}const _=this.collapse(e.slice(t+c,t+h),I.Op.ALTERNATE),y=this.newRegexp(I.Op.CONCAT);y.subs=[p,_],e[r++]=y}c=h,l=C}}n=r,t=0,c=0,r=0;for(let h=0;h<=n;h++)if(!(h<n&&H.isCharClass(e[t+h]))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{let C=c;for(let _=c+1;_<h;_++){const y=e[t+C],S=e[t+_];(y.op<S.op||y.op===S.op&&(y.runes!==null?y.runes.length:0)<(S.runes!==null?S.runes.length:0))&&(C=_)}const p=e[t+c];e[t+c]=e[t+C],e[t+C]=p;for(let _=c+1;_<h;_++)H.mergeCharClass(e[t+c],e[t+_]),this.reuse(e[t+_]);this.cleanAlt(e[t+c]),e[r++]=e[t+c]}h<n&&(e[r++]=e[t+h]),c=h+1}n=r,t=0,c=0,r=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===I.Op.EMPTY_MATCH&&e[t+h+1].op===I.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return n=r,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===I.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===I.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=I.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(I.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&M.LITERAL)!==0)return H.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const r=new Ty(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case L.CODES["("]:if((this.flags&M.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&M.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(I.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case L.CODES["|"]:this.parseVerticalBar(),r.skip(1);break;case L.CODES[")"]:this.parseRightParen(),r.skip(1);break;case L.CODES["^"]:(this.flags&M.ONE_LINE)!==0?this.op(I.Op.BEGIN_TEXT):this.op(I.Op.BEGIN_LINE),r.skip(1);break;case L.CODES.$:(this.flags&M.ONE_LINE)!==0?this.op(I.Op.END_TEXT).flags|=M.WAS_DOLLAR:this.op(I.Op.END_LINE),r.skip(1);break;case L.CODES["."]:(this.flags&M.DOT_NL)!==0?this.op(I.Op.ANY_CHAR):this.op(I.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case L.CODES["["]:this.parseClass(r);break;case L.CODES["*"]:case L.CODES["+"]:case L.CODES["?"]:{i=r.pos();let o=null;switch(r.pop()){case L.CODES["*"]:o=I.Op.STAR;break;case L.CODES["+"]:o=I.Op.PLUS;break;case L.CODES["?"]:o=I.Op.QUEST}this.repeat(o,t,n,i,r,e);break}case L.CODES["{"]:{const o=r.pos(),B=H.parseRepeat(r);if(B<0){r.rewindTo(o),this.literal(r.pop());break}i=o,t=B>>16,n=(B&q.MAX_BMP)<<16>>16,this.repeat(I.Op.REPEAT,t,n,i,r,e);break}case L.CODES["\\"]:{const o=r.pos();if(r.skip(1),(this.flags&M.PERL_X)!==0&&r.more())switch(r.pop()){case L.CODES.A:this.op(I.Op.BEGIN_TEXT);break e;case L.CODES.b:this.op(I.Op.WORD_BOUNDARY);break e;case L.CODES.B:this.op(I.Op.NO_WORD_BOUNDARY);break e;case L.CODES.C:throw new ye(H.ERR_INVALID_ESCAPE,"\\C");case L.CODES.Q:{let l=r.rest();const h=l.indexOf("\\E");h>=0?(l=l.substring(0,h),r.skipString(l),r.skipString("\\E")):r.skipString(l);let C=0;for(;C<l.length;){const p=l.codePointAt(C);this.literal(p),C+=j.charCount(p)}break e}case L.CODES.z:this.op(I.Op.END_TEXT);break e;default:r.rewindTo(o)}else r.rewindTo(o);const B=this.newRegexp(I.Op.CHAR_CLASS);if(B.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const l=new ls;if(this.parseUnicodeClass(r,l)){B.runes=l.toArray(),this.push(B);break e}}const c=new ls;if(this.parsePerlClassEscape(r,c)){B.runes=c.toArray(),this.push(B);break e}r.rewindTo(o),this.reuse(B),this.literal(H.parseEscape(r));break}default:this.literal(r.pop())}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new ye(H.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const B=n.charAt(2)==="P"?4:3,c=n.indexOf(">");if(c<0)throw new ye(H.ERR_INVALID_NAMED_CAPTURE,n);const l=n.substring(B,c);if(e.skipString(l),e.skip(B+1),!H.isValidCaptureName(l))throw new ye(H.ERR_INVALID_NAMED_CAPTURE,n.substring(0,c+1));const h=this.op(I.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[l])throw new ye(H.ERR_DUPLICATE_NAMED_CAPTURE,l);this.namedGroups[l]=this.numCap,h.name=l;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case L.CODES.i:r|=M.FOLD_CASE,o=!0;break;case L.CODES.m:r&=-17,o=!0;break;case L.CODES.s:r|=M.DOT_NL,o=!0;break;case L.CODES.U:r|=M.NON_GREEDY,o=!0;break;case L.CODES["-"]:if(i<0)break e;i=-1,r=~r,o=!1;break;case L.CODES[":"]:case L.CODES[")"]:if(i<0){if(!o)break e;r=~r}B===L.CODES[":"]&&this.op(I.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new ye(H.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(I.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===I.Op.VERTICAL_BAR&&H.isCharClass(this.stack[e-1])&&H.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const r=n;n=t,t=r,this.stack[e-3]=n}return H.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===I.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new ye(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==I.Op.LEFT_PAREN)throw new ye(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(H.hasCapture(e))throw new ye(H.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=I.Op.PLB:t.op=I.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=I.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&M.PERL_X)===0||!e.more()||e.pop()!==L.CODES["\\"]||!e.more())return!1;e.pop();const r=e.from(n),i=kh.has(r)?kh.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&M.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),r=n.indexOf(":]");if(r<0)return!1;const i=n.substring(0,r+2);e.skipString(i);const o=Qh.has(i)?Qh.get(i):null;if(o===null)throw new ye(H.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&M.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&M.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===L.CODES.P&&(r=-1),!e.more())throw e.rewindTo(n),new ye(H.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==L.CODES["{"])o=j.runeToString(i);else{const h=e.rest(),C=h.indexOf("}");if(C<0)throw e.rewindTo(n),new ye(H.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,C),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===L.CODES["^"]&&(r=0-r,o=o.substring(1));const B=H.unicodeTable(o);if(B===null)throw new ye(H.ERR_INVALID_CHAR_RANGE,e.from(n));B.sign<0&&(r=0-r);const c=B.tab,l=B.fold;if((this.flags&M.FOLD_CASE)===0||l===null)t.appendTableWithSign(c,r);else{const h=new ls().appendTable(c).appendTable(l).cleanClass().toArray();t.appendClassWithSign(Array.from(h),r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(I.Op.CHAR_CLASS);n.flags=this.flags;const r=new ls;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&M.CLASS_NL)===0&&r.appendRange(L.CODES[`
`],L.CODES[`
`]));let o=!0;for(;!e.more()||e.peek()!==L.CODES["]"]||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&M.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new ye(H.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(B);const c=H.parseClassChar(e,t);let l=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(l=H.parseClassChar(e,t),l<c)throw new ye(H.ERR_INVALID_CHAR_RANGE,e.from(B))}(this.flags&M.FOLD_CASE)===0?r.appendRange(c,l):r.appendFoldedRange(c,l)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),n.runes=r.toArray(),this.push(n)}},V(H,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),V(H,"ERR_INVALID_CHAR_RANGE","invalid character class range"),V(H,"ERR_INVALID_ESCAPE","invalid escape sequence"),V(H,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),V(H,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),V(H,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),V(H,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),V(H,"ERR_MISSING_BRACKET","missing closing ]"),V(H,"ERR_MISSING_PAREN","missing closing )"),V(H,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),V(H,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),V(H,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),V(H,"ERR_UNEXPECTED_PAREN","unexpected )"),V(H,"ERR_NESTING_DEPTH","expression nests too deeply"),V(H,"ERR_LARGE","expression too large"),V(H,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),V(H,"MAX_HEIGHT",1e3),V(H,"MAX_SIZE",1398101),V(H,"MAX_RUNES",33554432),V(H,"ANY_TABLE",new g(new Uint32Array([0,q.MAX_RUNE,1]))),V(H,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),V(H,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),H),by=class hs{static initTest(e){const t=hs.compile(e),n=new hs(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n.namedGroups=t.namedGroups,n}static compile(e){return hs.compileImpl(e,M.PERL,!1)}static compilePOSIX(e){return hs.compileImpl(e,M.POSIX,!0)}static compileImpl(e,t,n){let r=Ay.parse(e,t);const i=r.maxCap(),o=r.namedGroups;r=Iy.simplify(r);const B=_y.build(r),c=yy.compileRegexp(r),l=new hs(e,c,i,n);l.prefilter=B.type===ce.Type.NONE?null:B;const[h,C]=c.prefix();return l.prefixComplete=h,l.prefix=C,l.prefixUTF8=j.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=o,l}static match(e,t){return hs.compile(e).match(t)}constructor(e,t,n=0,r=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=Oh.compile(this.prog),this.prefilter=null}get dfa(){return this.lazyDFA===null&&(this.lazyDFA=new Rd(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,n,r){if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(n===M.UNANCHORED){const c=e.index(this,t);if(c<0)return null;i=t+c,o=i+B}else if(n===M.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(n===M.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(r>0){const c=new Int32Array(r).fill(-1);return c[0]=i,c[1]=o,Array.from(c)}return[]}createLookbehindState(){return this.prog.numLb>0?new By(this.prog):null}executeEngine(e,t,n,r,i=null){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,r);if(this.prefilter!==null&&n===M.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Oh.execute(this,e,t,n,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=ao.maxBitStateLen(this.prog)?ao.execute(this,e,t,n,r):this.doExecuteNFA(e,t,n,r,i);if(this.prog.numLb===0){const o=this.dfa.match(e,t,n);if(o!==null)return o?[]:null;if(e.endPos()<=ao.maxBitStateLen(this.prog))return ao.execute(this,e,t,n,r)}return this.doExecuteNFA(e,t,n,r,i)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,r,i=null){let o=this.get();o||(o=cy.fromRE2(this)),o.init(r);const B=o.match(e,t,n,i)?o.submatches():null;return this.put(o),B}match(e){return this.executeEngine(be.fromUTF16(e),0,M.UNANCHORED,0)!==null}matchWithGroup(e,t,n,r,i,o=null){return e instanceof Ts||(j.isByteArray(e)?e=Cs.utf8(e):e=Cs.utf16(e)),this.matchMachineInput(e,t,n,r,i,o)}matchMachineInput(e,t,n,r,i,o=null){if(t>n)return[!1,null];const B=e.isUTF16Encoding()?be.fromUTF16(e.asCharSequence(),0,n):be.fromUTF8(e.asBytes(),0,n),c=this.executeEngine(B,t,r,2*i,o);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.executeEngine(be.fromUTF8(e),0,M.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let r=0,i=0,o="";const B=be.fromUTF16(e),c=this.createLookbehindState();let l=0;for(;i<=e.length;){const h=this.executeEngine(B,i,M.UNANCHORED,2,c);if(h===null||h.length===0)break;o+=e.substring(r,h[0]),(h[1]>r||h[0]===0)&&(o+=t(e.substring(h[0],h[1])),l++),r=h[1];const C=B.step(i)&7;if(i+C>h[1]?i+=C:i+1>h[1]?i++:i=h[1],l>=n)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let r=0;r<e.length;r++)n[r]=e[r];e=n}return e}allMatches(e,t,n=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,c=-1;const l=this.createLookbehindState();for(;B<t&&o<=i;){const h=this.executeEngine(e,o,M.UNANCHORED,this.prog.numCap,l);if(h===null||h.length===0)break;let C=!0;if(h[1]===o){h[0]===c&&(C=!1);const p=e.step(o);p<0?o=i+1:o+=p&7}else o=h[1];c=h[1],C&&(r.push(n(this.pad(h))),B++)}return r}findUTF8(e){const t=this.executeEngine(be.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(be.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(be.fromUTF16(e),0,M.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(be.fromUTF16(e),0,M.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(be.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(be.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(be.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(be.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(be.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(be.fromUTF8(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(be.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(be.fromUTF16(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(be.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(be.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(be.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(be.fromUTF16(e),t);return n.length===0?null:n}},Ry=class Us{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(Object.prototype.toString.call(e)==="[object RegExp]"&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",r=!1,i=e.length;i===0&&(n="(?:)",r=!0);let o=!1,B=0;for(;B<i;){let l=e[B];if(l==="\\"){if(B+1<i)switch(l=e[B+1],l){case"\\":n+="\\\\",B+=2;continue;case"c":if(B+2<i){let p=e[B+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let _=p%32;n+="\\x",n+=(_>>4).toString(16).toUpperCase(),n+=(_&15).toString(16).toUpperCase(),B+=3,r=!0;continue}}n+="c",B+=2,r=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let p=B+3,_=!1,y=!1;for(;p<i;){const S=e[p];if(S==="}"){y=!0;break}if(!Us.isHexadecimal(S))break;_=!0,p++}if(y&&_){n+="\\x",B+=2,r=!0;continue}}else if(B+5<i){let p=!0;for(let _=0;_<4;_++)if(!Us.isHexadecimal(e[B+2+_])){p=!1;break}if(p){n+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,r=!0;continue}}}n+="u",B+=2,r=!0;continue;case"x":{let p=!1;if(B+2<i&&e[B+2]==="{"){let _=B+3,y=!1,S=!1;for(;_<i;){const k=e[_];if(k==="}"){S=!0;break}if(!Us.isHexadecimal(k))break;y=!0,_++}S&&y&&(p=!0)}else B+3<i&&Us.isHexadecimal(e[B+2])&&Us.isHexadecimal(e[B+3])&&(p=!0);p?(n+="\\x",B+=2):(n+="x",B+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+l,B+=2;continue;default:{let p=e.codePointAt(B+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let _=j.charCount(p);n+=e.substring(B+1,B+1+_),B+=_+1,r=!0}else{n+="\\";let _=j.charCount(p);n+=e.substring(B+1,B+1+_),B+=_+1}continue}}}else if(l==="/"){n+="\\/",B+=1,r=!0;continue}else if(l==="["){if(!o&&e[B+1]==="]"){n+="[^\\x00-\\x{10FFFF}]",B+=2,r=!0;continue}if(!o&&e[B+1]==="^"&&e[B+2]==="]"){n+="[\\x00-\\x{10FFFF}]",B+=3,r=!0;continue}o=!0}else if(l==="]")o=!1;else if(!o&&l==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){n+="(?P<",B+=3,r=!0;continue}let h=e.codePointAt(B),C=j.charCount(h);n+=e.substring(B,B+C),B+=C}const c=r?n:e;return t.length>0?`(?${t})${c}`:c}};const Xh=(s,e)=>{const t=s.matchArray();return t.index=s.start(0),t.input=e,t.groups=s.namedGroupsObject(),t};var xe,Gc=(xe=class{static quote(e){return j.quoteMeta(e)}static quoteReplacement(e,t=!1){return Th.quoteReplacement(e,t)}static translateRegExp(e){return Ry.translate(e)}static compile(e,t=0){j.checkPattern(e),j.checkFlags(t);let n=e;(t&xe.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&xe.DOTALL)!==0&&(n=`(?s)${n}`),(t&xe.MULTILINE)!==0&&(n=`(?m)${n}`);let r=M.PERL;(t&xe.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&xe.LOOKBEHINDS)!==0&&(r|=M.LOOKBEHIND);const i=new xe(e,t);return i.re2Input=by.compileImpl(n,r,(t&xe.LONGEST_MATCH)!==0),i}static matches(e,t){return xe.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const r=new xe(e,t);return r.re2Input=n,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return j.isByteArray(e)&&(e=Cs.utf8(e)),new Th(this,e)}test(e){return j.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=j.isByteArray(e)?be.fromUTF8(e):be.fromUTF16(e);return this.re2Input.executeEngine(t,0,M.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);return t.find()?Xh(t,e):null}split(e,t=0){const n=this.matcher(e),r=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&r.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.inputLength()))}return(t!==0||r.length===0&&!(o===n.inputLength()&&o>0))&&r.push(n.substring(o,n.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();)yield Xh(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},V(xe,"CASE_INSENSITIVE",Gs.CASE_INSENSITIVE),V(xe,"DOTALL",Gs.DOTALL),V(xe,"MULTILINE",Gs.MULTILINE),V(xe,"DISABLE_UNICODE_GROUPS",Gs.DISABLE_UNICODE_GROUPS),V(xe,"LONGEST_MATCH",Gs.LONGEST_MATCH),V(xe,"LOOKBEHINDS",Gs.LOOKBEHINDS),xe);/**
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
 */let lr="13.3.0";function vy(s){lr=s}/**
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
 */const As=new Br("@firebase/firestore");function Hs(){return As.logLevel}function W(s,...e){if(As.logLevel<=le.DEBUG){const t=e.map(Uc);As.debug(`Firestore (${lr}): ${s}`,...t)}}function bs(s,...e){if(As.logLevel<=le.ERROR){const t=e.map(Uc);As.error(`Firestore (${lr}): ${s}`,...t)}}function dn(s,...e){if(As.logLevel<=le.WARN){const t=e.map(Uc);As.warn(`Firestore (${lr}): ${s}`,...t)}}function Uc(s){if(typeof s=="string")return s;try{return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
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
 */function oe(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Sd(s,n,t)}function Sd(s,e,t){let n=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw bs(n),new Error(n)}function te(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||Sd(e,r,n)}function Ie(s,e){return s}/**
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
 */function Oy(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Hc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Oy(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function de(s,e){return s<e?-1:s>e?1:0}function ei(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return yB(r)===yB(i)?de(r,i):yB(r)?1:-1}return de(s.length,e.length)}const Sy=55296,Ny=57343;function yB(s){const e=s.charCodeAt(0);return e>=Sy&&e<=Ny}function nr(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
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
 */class _t{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??Qe.RED,this.left=r??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Qe(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zh(this.data.getIterator())}getIteratorFrom(e){return new Zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ze(this.comparator);return t.data=e,t}}class Zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const sr="__name__";class Qt{constructor(e,t,n){t===void 0?t=0:t>e.length&&oe(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&oe(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=Qt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return de(e.length,t.length)}static compareSegments(e,t){const n=Qt.isNumericId(e),r=Qt.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Qt.extractNumericId(e).compare(Qt.extractNumericId(t)):ei(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xc.fromString(e.substring(4,e.length-2))}}class ve extends Qt{construct(e,t,n){return new ve(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new z(G.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new ve(t)}static emptyPath(){return new ve([])}}const Py=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let bt=class js extends Qt{construct(e,t,n){return new js(e,t,n)}static isValidIdentifier(e){return Py.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),js.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sr}static keyField(){return new js([sr])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new z(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const B=e[r];if(B==="\\"){if(r+1===e.length)throw new z(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,r+=2}else B==="`"?(o=!o,r++):B!=="."||o?(n+=B,r++):(i(),r++)}if(i(),o)throw new z(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new js(t)}static emptyPath(){return new js([])}};/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Kt([])}unionWith(e){let t=new ze(bt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */function Rs(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function ur(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Fy(s,e){const t=[];for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.push(e(s[n],n,s));return t}function Nd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(ve.fromString(e))}static fromName(e){return new ae(ve.fromString(e).popFirst(5))}static empty(){return new ae(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new ve(e.slice()))}}/**
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
 */function Ly(s,e,t){if(!t)throw new z(G.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function ky(s,e,t,n){if(e===!0&&n===!0)throw new z(G.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function ef(s){if(!ae.isDocumentKey(s))throw new z(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Ai(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function jc(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":oe(12329,{type:typeof s})}function tc(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new z(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jc(s);throw new z(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Le(s,e){const t={typeString:s};return e&&(t.value=e),t}function bi(s,e){if(!Ai(s))throw new z(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0,o=e[n].optional;if(!(n in s)){if(o)continue;t=`JSON missing required field: '${n}'`;break}const B=s[n];if(r&&typeof B!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&B!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new z(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const tf=-62135596800,nf=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*nf);return new Ee(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new z(G.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return Ee._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(r+1000000000n))}return new Ee(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tf)throw new z(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nf}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new z(G.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bi(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:Le("string",Ee._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
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
 */class xy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xy("Invalid base64 string: "+i):i}})(e);return new ft(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const My=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(s){if(te(!!s,39018),typeof s=="string"){let e=0;const t=My.exec(s);if(te(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ke(s.seconds),nanos:Ke(s.nanos)}}function Ke(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Ho(s){return typeof s=="string"?ft.fromBase64String(s):ft.fromUint8Array(s)}/**
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
 */const Pd="server_timestamp",Fd="__type__",Ld="__previous_value__",kd="__local_write_time__";function Jc(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Fd])==null?void 0:n.stringValue)===Pd}function pa(s){const e=s.mapValue.fields[Ld];return Jc(e)?pa(e):e}function ti(s){const e=vs(s.mapValue.fields[kd].timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class Vy{constructor(e,t,n,r,i,o,B,c,l,h,C,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=h,this.apiKey=C,this._customHeaders=p,this.grpcFlowControlWindow=_}}const jo="(default)";class Jo{constructor(e,t){this.projectId=e,this.database=t||jo}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database===jo}isEqual(e){return e instanceof Jo&&e.projectId===this.projectId&&e.database===this.database}}function Gy(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new z(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(s.options.projectId,e)}/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
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
 */class Z{constructor(){this.exponent=0,this.i=0n,this.o=0n,this.u=new Array(4).fill(0n),this.l=new Array(6).fill(0n),this.h=new Array(6).fill(0n),this.T=new Array(6).fill(0n),this.P=new Array(12).fill(0n)}static I(e,t){let n=new Z;return n.parse(e,t),n}parse(e,t){t+=e.length-1,this.exponent=0,this.i=0n,this.o=0n;let n=this.T,r=this.R(e,n);if(r==0&&this.isEmpty(n)||(t+=r)<Z.A)return;if(t>Z.V)return void(this.exponent=Number(Z.m));let i=this.p(t,n);this.S(t,i,n)}R(e,t){for(let i=0;i<6;i++)t[i]=0n;let n=0;for(;n<e.length&&e[n]==0;)n+=1;if(n==e.length)return 0;let r=-n;if(e.length-n>Z.v){let i=e[Z.v]>=5,o=new Array(Z.v).fill(0);for(let B=0;B<Z.v;B++)o[B]=e[B+n];i&&(r+=this.D(o)),e=o,n=0}for(let i=e.length-1;i>=n;i--)t[0]|=BigInt(e[i])<<32n,this.C(t);return r}C(e){let t=e.length;for(let n=0;n<t;n++){let r=e[n]%10n;e[n]=e[n]/10n,n+1<t&&(e[n+1]+=r<<32n)}}isEmpty(e){for(let t=0;t<e.length;t++)if(e[t]!=0n)return!1;return!0}D(e){for(let t=e.length-1;t>=0;t--){if(e[t]!=9)return e[t]=e[t]+1,0;e[t]=0}return e[0]=1,1}p(e,t){let n=t[0]<<31n|t[1]>>1n,r=Number(n)/Z.F;return Math.floor(Number(e)*Z.O+this.log2(r))}log2(e){return Z.M*Math.log(e)}S(e,t,n){let r=this.u;this.N(-t,r);let i=this.P;this.B(n,r,i),this.L(i),BigInt(r[0])!=BigInt(-e)&&this.L(i),t+=this.$(i),(t+=Z.U)<=0||(t+=this.k(i),BigInt(t)>=Z.m?this.exponent=Number(Z.m):(this.exponent=Number(t),this.i=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.o=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}N(e,t){if(e==0)return void this.q(Z.K[0],t);let n=Z.K;e<0&&(e=-e,n=Z.W);let r=Z.G,i=32,o=!0;for(;e>0;)e>=r&&(o?(this.q(n[i],t),o=!1):this.j(t,n[i],t),e-=r),i-=1,r*=.5}q(e,t){for(let n=0;n<t.length;n++)t[n]=e[n]}j(e,t,n){this.H(e,t,this.P);let r=this.J(this.P);this.Y(this.P,n),n[0]=e[0]+t[0]+BigInt(r)}H(e,t,n){for(let r=0;r<n.length;r++)n[r]=0n;this.Z(e,this.l),this.Z(t,this.h);for(let r=5;r>=0;r--)for(let i=5;i>=0;i--){let o=this.l[r]*this.h[i];n[i+r+1]=n[i+r+1]+(o&Z.X)&0xffffffffffffffffn,n[i+r]=n[i+r]+(o>>32n)&0xffffffffffffffffn}for(let r=11;r>=1;r--)n[r-1]=n[r-1]+(n[r]>>32n)&0xffffffffffffffffn,n[r]&=Z.X}J(e){let t=0;for(;this.ee(e);)this.L(e),t-=1;return t}ee(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let t=1;t<e.length;t++){if(e[t]<0x99999999n)return!0;if(e[t]>0x99999999n)return!1}return!1}B(e,t,n){for(let o=0;o<n.length;o++)n[o]=0n;let r=this.h;this.Z(t,r);let i=e.length;for(let o=i-1;o>=0;o--)for(let B=i-1;B>=0;B--){let c=e[o]*r[B];n[B+o+1]=n[B+o+1]+(c&Z.X)&0xffffffffffffffffn,n[B+o]=n[B+o]+(c>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)n[o-1]=n[o-1]+(n[o]>>32n)&0xffffffffffffffffn,n[o]&=Z.X}L(e){let t=e.length-1;e[0]&=Z.X,e[t]*=10n;for(let n=t-1;n>=0;n--)e[n]=10n*e[n]+(e[n+1]>>32n)&0xffffffffffffffffn,e[n+1]&=Z.X}$(e){let t=31-Z.te(e[0]);return t!=0&&this.ne(e,t),t}k(e){return this.re(e,5,100n),this.re(e,4,0x80000000n),(e[0]&Z.ie<<1n)!=0n?(this.ne(e,1),1):0}Y(e,t){t[1]=(e[0]<<32n)+e[1],t[2]=(e[2]<<32n)+e[3],t[3]=(e[4]<<32n)+e[5]}Z(e,t){t[0]=e[1]>>32n,t[1]=e[1]&Z.X,t[2]=e[2]>>32n,t[3]=e[2]&Z.X,t[4]=e[3]>>32n,t[5]=e[3]&Z.X}ne(e,t){let n=e.length-1,r=BigInt(32-Math.abs(t));if(t>0){let i=BigInt(t);for(let o=n+1-1;o>=1;o--)e[o]=e[o]>>i|e[o-1]<<r&Z.X;e[0]=e[0]>>i}else if(t<0){let i=BigInt(-t);e[0]=0xffffffffffffffffn&(e[0]<<i|e[1]>>r);for(let o=1;o<n;o++)e[o]=0xffffffffffffffffn&(e[o]<<i&Z.X|e[o+1]>>r);e[n]=e[n]<<i&Z.X}}re(e,t,n){let r=t;e[r]=e[r]+n&0xffffffffffffffffn;for(let i=r+1-1;i>=1&&(e[i]&Z.ie)!=0n;i--)e[i]&=Z.X,e[i-1]+=1n}static te(e){let t=Number(e>>32n);return t==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(t)}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */var je,$s,nc,To,Ao,kr;Z.v=59,Z.V=646456993,Z.A=-646457032,Z.F=0xccccccccccccd00,Z.se=0x8000000000000000n,Z.G=2147483648,Z.X=0x00000000ffffffffn,Z.ie=0xffffffff00000000n,Z.O=Math.log(10)/Math.log(2),Z.M=1/Math.log(2),Z.U=2147483647,Z.m=0xffffffffn,Z.K=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],Z.W=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class Q{constructor(e,t,n,r){this.negative=e,this._e=t,this.i=n,this.o=r}exponent(){return this._e-Z.U}oe(){return this._e===0&&this.i===0n&&this.o===0n}ae(){return this._e===Ye(Q,je,"f",$s)&&this.i===0n&&this.o===0n}isNaN(){return this._e===Ye(Q,je,"f",$s)&&!(this.i===0n&&this.o===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let t,n;if(this.negative){if(!e.negative)return-1;t=1,n=-1}else{if(e.negative)return 1;t=-1,n=1}return this._e<e._e?t:this._e>e._e?n:this.i<e.i?t:this.i>e.i?n:this.o<e.o?t:this.o>e.o?n:0}debug(){return(this.negative?"+":"-")+Ye(Q,je,"m",nc).call(Q,this.i)+Ye(Q,je,"m",nc).call(Q,this.o)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return Q.NaN;if(!isFinite(e))return e<0?Q.ue:Q.ce;if(e===0)return Math.sign(1/e)>0?Q.le:Q.Ee;const t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);const n=t.getBigUint64(0);let r=BigInt.asUintN(64,n<<12n),i=2047&Number(n>>52n);if(i===0){const o=Z.te(r);r=o<63?r<<BigInt(o+1):0n,i=-o}return new Q(e<0,Ye(Q,je,"m",kr).call(Q,i-1023),r,0n)}static fromString(e){if(e==="NaN")return Q.NaN;if(e==="-Infinity")return Q.ue;if(e==="Infinity"||e==="+Infinity")return Q.ce;const t=new Array(e.length).fill(0);let n=0,r=0,i=0,o=!1;for(e[n]==="-"?(o=!0,n++):e[n]==="+"&&n++;Ye(Q,je,"m",To).call(Q,e,n);)t[r++]=Ye(Q,je,"m",Ao).call(Q,e,n++);if(e[n]==="."){const c=++n;for(;Ye(Q,je,"m",To).call(Q,e,n);)t[r++]=Ye(Q,je,"m",Ao).call(Q,e,n++);i=c-n}if(e[n]==="e"||e[n]==="E"){let c=0;n++;let l=1;e[n]==="-"?(l=-1,n++):e[n]==="+"&&n++;const h=n;for(;Ye(Q,je,"m",To).call(Q,e,n);)if(c=10*c+Ye(Q,je,"m",Ao).call(Q,e,n++),n-h>9)throw new Error("Exponent too large "+e);if(n===h)throw new Error("Invalid number "+e);i+=c*l}if(r===0||n!==e.length)throw new Error("Invalid number "+e);const B=Z.I(t.slice(0,r),i);return new Q(o,B.exponent,B.i,B.o)}}je=Q,nc=function(e){return e.toString(16).padStart(16,"0")},To=function(e,t){const n=e.codePointAt(t);return n!==void 0&&n>=48&&n<=57},Ao=function(e,t){return e.codePointAt(t)-48},kr=function(e){return e+Z.U},$s={value:Number(Z.m)},Q.le=new Q(!1,0,0n,0n),Q.Ee=new Q(!0,0,0n,0n),Q.NaN=new Q(!1,Ye(Q,je,"f",$s),1n<<63n,0n),Q.ue=new Q(!0,Ye(Q,je,"f",$s),0n,0n),Q.ce=new Q(!1,Ye(Q,je,"f",$s),0n,0n),new Q(!0,Ye(Q,je,"m",kr).call(Q,63),0n,0n),new Q(!1,Ye(Q,je,"m",kr).call(Q,0),0n,0n),new Q(!0,Ye(Q,je,"m",kr).call(Q,0),0n,0n);/**
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
 */const Kc=-1;function qc(s){return s==null}function ni(s){return s===0&&1/s==-1/0}function Uy(s){return typeof s=="number"&&Number.isInteger(s)&&!ni(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}function sc(s){return typeof s=="string"}/**
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
 */const $c="__type__",zc="__vector__",Ko="value",Hy="server_timestamp",xd="__min__",Wc="__max__",zs="__regex__",rc="pattern",ic="options",qo="__oid__",hr="__int__",Os="__decimal128__",Ws="__request_timestamp__",oc="seconds",ac="increment",Yc="__binary__",rr={nullValue:"NULL_VALUE"},lo={mapValue:{}};var we,Nt;(Nt=we||(we={})).he="regexValue",Nt.Te="bsonObjectIdValue",Nt.Pe="int32Value",Nt.Ie="decimal128Value",Nt.Re="bsonTimestampValue",Nt.Ae="bsonBinaryValue",Nt.Ve="minKeyValue",Nt.de="maxKeyValue",Nt.fe="maxValue",Nt.me="vectorValue",Nt.pe="serverTimestampValue",Nt.ge="regularMapValue";const sf={[zc]:we.me,[Wc]:we.fe,[Hy]:we.pe},Md={[zs]:we.he,[qo]:we.Te,[hr]:we.Pe,[Os]:we.Ie,[Ws]:we.Re,[Yc]:we.Ae,[xd]:we.Ve,[Wc]:we.de},jy=new Set(Object.values(Md)),Dt={booleanValue:!0},$e={booleanValue:!1};function Ue(s){if("nullValue"in s)return 0;if("booleanValue"in s)return 2;if("integerValue"in s||"doubleValue"in s)return 3;if("timestampValue"in s)return 4;if("stringValue"in s)return 7;if("bytesValue"in s)return 8;if("referenceValue"in s)return 9;if("geoPointValue"in s)return 11;if("arrayValue"in s)return 13;if(!("mapValue"in s))return oe(28295,{value:s});switch(Kd(s)){case we.pe:return 6;case we.fe:return 9007199254740991;case we.me:return 14;case we.he:return 12;case we.Te:return 10;case we.Pe:case we.Ie:return 3;case we.Re:return 5;case we.Ae:return 8;case we.Ve:return 1;case we.de:return 16;default:return 15}}function xt(s,e,t){if(s===e)return!0;const n=Ue(s);if(n!==Ue(e))return!1;switch(n){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return s.booleanValue===e.booleanValue;case 6:return ti(s).isEqual(ti(e));case 4:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=vs(i.timestampValue),c=vs(o.timestampValue);return B.seconds===c.seconds&&B.nanos===c.nanos})(s,e);case 7:return s.stringValue===e.stringValue;case 8:return(function(i,o){return Hd(i,o)===0})(s,e);case 9:return s.referenceValue===e.referenceValue;case 11:return(function(i,o){return Ke(i.geoPointValue.latitude)===Ke(o.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(o.geoPointValue.longitude)})(s,e);case 3:return(function(i,o,B){if($t(i)&&$t(o))return Gd(i,o)===0;if("integerValue"in i&&"integerValue"in o||Ss(i)&&Ss(o))return ri(i)===ri(o);let c,l;if("doubleValue"in i&&"doubleValue"in o)c=Ke(i.doubleValue),l=Ke(o.doubleValue);else{if(!(B!=null&&B.ye))return!1;c=Ke(i.integerValue??i.doubleValue),l=Ke(o.integerValue??o.doubleValue)}return c===l?!!(B!=null&&B.we)||ni(c)===ni(l):!!(B===void 0||B.be)&&isNaN(c)&&isNaN(l)})(s,e,t);case 13:return nr(s.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>xt(r,i,t)));case 14:case 15:return(function(i,o,B){const c=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Rs(c)!==Rs(l))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(l[h]===void 0||!xt(c[h],l[h],B)))return!1;return!0})(s,e,t);case 5:return Ud(s,e)===0;case 12:return jd(s,e)===0;case 10:return Jd(s,e)===0;default:return oe(52216,{left:s})}}function si(s,e){return(s.values||[]).find((t=>xt(t,e)))!==void 0}function wt(s,e){if(s===e)return 0;const t=Ue(s),n=Ue(e);if(t!==n)return de(t,n);switch(t){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return de(s.booleanValue,e.booleanValue);case 3:return ii(s,e);case 4:return of(s.timestampValue,e.timestampValue);case 6:return of(ti(s),ti(e));case 7:return ei(s.stringValue,e.stringValue);case 8:return Hd(s,e);case 9:return(function(i,o){const B=i.split("/"),c=o.split("/");for(let l=0;l<B.length&&l<c.length;l++){const h=de(B[l],c[l]);if(h!==0)return h}return de(B.length,c.length)})(s.referenceValue,e.referenceValue);case 11:return(function(i,o){const B=de(Ke(i.latitude),Ke(o.latitude));return B!==0?B:de(Ke(i.longitude),Ke(o.longitude))})(s.geoPointValue,e.geoPointValue);case 13:return af(s.arrayValue,e.arrayValue);case 14:return(function(i,o){var p,_,y,S;const B=i.fields||{},c=o.fields||{},l=(p=B[Ko])==null?void 0:p.arrayValue,h=(_=c[Ko])==null?void 0:_.arrayValue,C=de(((y=l==null?void 0:l.values)==null?void 0:y.length)||0,((S=h==null?void 0:h.values)==null?void 0:S.length)||0);return C!==0?C:af(l,h)})(s.mapValue,e.mapValue);case 15:return(function(i,o){if(i===lo.mapValue&&o===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(o===lo.mapValue)return-1;const B=i.fields||{},c=Object.keys(B),l=o.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let C=0;C<c.length&&C<h.length;++C){const p=ei(c[C],h[C]);if(p!==0)return p;const _=wt(B[c[C]],l[h[C]]);if(_!==0)return _}return de(c.length,h.length)})(s.mapValue,e.mapValue);case 5:return Ud(s,e);case 12:return jd(s,e);case 10:return Jd(s,e);default:throw oe(23264,{Se:t})}}function ri(s){let e;return e=Ss(s)?s.mapValue.fields[hr].integerValue:s.integerValue||s.doubleValue,Ke(e)}function Vd(s){return s.mapValue.fields[Os].stringValue}function ii(s,e){if($t(s)||$t(e))return Gd(s,e);const t=ri(s),n=ri(e);return isNaN(t)?isNaN(n)?0:-1:isNaN(n)?1:de(t,n)}function Gd(s,e){const t=rf(s),n=rf(e);return t.oe()&&n.oe()?0:t.isNaN()?n.isNaN()?0:-1:n.isNaN()?1:t.compareTo(n)}function rf(s){return $t(s)?Q.fromString(Vd(s)):Q.fromNumber(ri(s))}function of(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return de(s,e);const t=vs(s),n=vs(e),r=de(t.seconds,n.seconds);return r!==0?r:de(t.nanos,n.nanos)}function af(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=wt(t[r],n[r]);if(i!==void 0&&i!==0)return i}return de(t.length,n.length)}function Ud(s,e){var B,c,l,h,C,p,_,y,S,k,J,$;const t=(l=(c=(B=s.mapValue.fields)==null?void 0:B[Ws].mapValue)==null?void 0:c.fields)==null?void 0:l[oc],n=(p=(C=(h=e.mapValue.fields)==null?void 0:h[Ws].mapValue)==null?void 0:C.fields)==null?void 0:p[oc],r=(S=(y=(_=s.mapValue.fields)==null?void 0:_[Ws].mapValue)==null?void 0:y.fields)==null?void 0:S[ac],i=($=(J=(k=e.mapValue.fields)==null?void 0:k[Ws].mapValue)==null?void 0:J.fields)==null?void 0:$[ac],o=ii(t,n);return o!==0?o:ii(r,i)}function Bf(s){var B;if("bytesValue"in s)return{subtype:0,bytes:Ho(s.bytesValue)};const e=(B=s.mapValue)==null?void 0:B.fields,t=e==null?void 0:e[Yc],n=t==null?void 0:t.bytesValue;if(!n)throw new Error("Received incorrect value for BsonBinaryData");const r=Ho(n).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const i=r[0],o=r.slice(1);return{subtype:i,bytes:ft.fromUint8Array(o)}}function Hd(s,e){const t=Bf(s),n=Bf(e);return t.subtype!==n.subtype?t.subtype<n.subtype?-1:1:t.bytes.compareTo(n.bytes)}function jd(s,e){var l,h,C,p,_,y,S,k,J,$,re,Ce,Te,Oe,b,E;const t=s.mapValue.fields,n=((p=(C=(h=(l=t==null?void 0:t[zs])==null?void 0:l.mapValue)==null?void 0:h.fields)==null?void 0:C[rc])==null?void 0:p.stringValue)??"",r=((k=(S=(y=(_=t==null?void 0:t[zs])==null?void 0:_.mapValue)==null?void 0:y.fields)==null?void 0:S[ic])==null?void 0:k.stringValue)??"",i=e.mapValue.fields,o=((Ce=(re=($=(J=i==null?void 0:i[zs])==null?void 0:J.mapValue)==null?void 0:$.fields)==null?void 0:re[rc])==null?void 0:Ce.stringValue)??"",B=((E=(b=(Oe=(Te=i==null?void 0:i[zs])==null?void 0:Te.mapValue)==null?void 0:Oe.fields)==null?void 0:b[ic])==null?void 0:E.stringValue)??"",c=ei(n,o);return c!==0?c:de(r,B)}function Jd(s,e){var t,n,r,i;return ei(((n=(t=s.mapValue.fields)==null?void 0:t[qo])==null?void 0:n.stringValue)??"",((i=(r=e.mapValue.fields)==null?void 0:r[qo])==null?void 0:i.stringValue)??"")}function ir(s){return Bc(s)}function Bc(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=vs(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return Ho(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return ae.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=Bc(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${Bc(t.fields[o])}`;return r+"}"})(s.mapValue):oe(61005,{value:s})}function $o(s){switch(Ue(s)){case 0:case 2:return 4;case 3:return $t(s)?16:8;case 4:case 11:return 16;case 6:const e=pa(s);return e?16+$o(e):16;case 7:return 2*s.stringValue.length;case 8:return"bytesValue"in s?Ho(s.bytesValue).approximateByteSize():cf(s.mapValue);case 9:return s.referenceValue.length;case 13:return(function(n){return(n.values||[]).reduce(((r,i)=>r+$o(i)),0)})(s.arrayValue);case 14:case 15:case 12:case 10:case 5:case 1:case 16:return cf(s.mapValue);default:throw oe(13486,{value:s})}}function cf(s){let e=0;return ur(s.fields,((t,n)=>{e+=t.length+$o(n)})),e}function Zt(s){return!!s&&"integerValue"in s}function en(s){return!!s&&"doubleValue"in s}function $t(s){var t;if(!((t=s.mapValue)!=null&&t.fields))return!1;const e=s.mapValue.fields;return Rs(e)===1&&e[Os]&&!!e[Os].stringValue}function Ss(s){var t,n;if(!((t=s.mapValue)!=null&&t.fields))return!1;const e=s.mapValue.fields;return Rs(e)===1&&((n=e[hr])==null?void 0:n.integerValue)!==void 0}function pn(s){return Zt(s)||en(s)||!!s&&Ss(s)||!!s&&$t(s)}function or(s){return!!s&&"arrayValue"in s}function qt(s){return!!s&&"nullValue"in s}function ot(s){return!(!en(s)||!isNaN(Number(s.doubleValue)))||!(!$t(s)||Vd(s)!=="NaN")}function Ds(s){return!!s&&"mapValue"in s}function Kd(s){var n,r;if(!((n=s.mapValue)!=null&&n.fields))return we.ge;const e=s.mapValue.fields,t=(r=e[$c])==null?void 0:r.stringValue;if(t&&sf[t])return sf[t];if(Rs(e)===1){const i=Object.keys(e);return Md[i[0]]??we.ge}return we.ge}function cc(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[$c])==null?void 0:n.stringValue)===zc}function lc(s){var e,t;return(t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[Ko])==null?void 0:t.arrayValue}function Ur(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return ur(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ur(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ur(s.arrayValue.values[t]);return e}return{...s}}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ds(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ur(t)}setAll(e){let t=bt.emptyPath(),n={},r=[];e.forEach(((o,B)=>{if(!t.isImmediateParentOf(B)){const c=this.getFieldsMap(t);this.applyChanges(c,n,r),n={},r=[],t=B.popLast()}o?n[B.lastSegment()]=Ur(o):r.push(B.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ds(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ds(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ur(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new Lt(Ur(this.value))}}function qd(s){const e=[];return ur(s.fields,((t,n)=>{const r=new bt([t]);if(Ds(n)&&!(function(o){return jy.has(Kd(o))})(n)){const i=qd(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Kt(e)}/**
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
 */function Qc(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ni(e)?"-0":e}}function Xs(s){return{integerValue:""+s}}function ga(s,e,t){return Uy(e)?Xs(e):Qc(s,e)}/**
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
 */class ma{constructor(){this._=void 0}}function Jy(s,e,t){return s instanceof oi?(function(r,i){const o={fields:{[Fd]:{stringValue:Pd},[kd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Jc(i)&&(i=pa(i)),i&&(o.fields[Ld]=i),{mapValue:o}})(t,e):s instanceof ai?zd(s,e):s instanceof Bi?Wd(s,e):s instanceof ci?(function(r,i){const o=$d(r,i),B=lf(o)+lf(r.xe);return $t(o)||$t(r.xe)?{mapValue:{fields:{[Os]:{stringValue:B.toString()}}}}:Ss(o)?en(r.xe)?{doubleValue:B}:Zt(r.xe)?{integerValue:B.toString()}:{mapValue:{fields:{[hr]:Xs(B)}}}:Zt(o)&&(Zt(r.xe)||Ss(r.xe))?Xs(B):Qc(r.serializer,B)})(s,e):s instanceof zo?(function(r,i){return!pn(i)||ot(r.xe)?r.xe:ot(i)?i:ii(r.xe,i)<0?r.xe:i})(s,e):s instanceof Wo?(function(r,i){return!pn(i)||ot(r.xe)?r.xe:ot(i)?i:ii(r.xe,i)>0?r.xe:i})(s,e):void 0}function Ky(s,e,t){return s instanceof ai?zd(s,e):s instanceof Bi?Wd(s,e):t}function $d(s,e){return s instanceof ci?pn(e)?e:{integerValue:0}:null}class oi extends ma{}class ai extends ma{constructor(e){super(),this.elements=e}}function zd(s,e){const t=Yd(e);for(const n of s.elements)t.some((r=>xt(r,n)))||t.push(n);return{arrayValue:{values:t}}}class Bi extends ma{constructor(e){super(),this.elements=e}}function Wd(s,e){let t=Yd(e);for(const n of s.elements)t=t.filter((r=>!xt(r,n)));return{arrayValue:{values:t}}}class Xc extends ma{constructor(e,t){super(),this.serializer=e,this.xe=t}}class ci extends Xc{}class zo extends Xc{}class Wo extends Xc{}function lf(s){return Zt(s)?Ke(s.integerValue):en(s)?Ke(s.doubleValue):Ss(s)?Ke(s.mapValue.fields[hr].integerValue):$t(s)?parseFloat(s.mapValue.fields[Os].stringValue):0}function Yd(s){return or(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
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
 */class qy{constructor(e,t){this.field=e,this.transform=t}}function $y(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof ai&&r instanceof ai||n instanceof Bi&&r instanceof Bi?nr(n.elements,r.elements,xt):n instanceof ci&&r instanceof ci||n instanceof zo&&r instanceof zo||n instanceof Wo&&r instanceof Wo?xt(n.xe,r.xe):n instanceof oi&&r instanceof oi})(s.transform,e.transform)}class zy{constructor(e,t){this.version=e,this.transformResults=t}}class un{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Ea{}function Qd(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Zd(s.key,un.none()):new Ri(s.key,s.data,un.none());{const t=s.data,n=Lt.empty();let r=new ze(bt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new Fs(s.key,n,new Kt(r.toArray()),un.none())}}function Wy(s,e,t){s instanceof Ri?(function(r,i,o){const B=r.value.clone(),c=hf(r.fieldTransforms,i,o.transformResults);B.setAll(c),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()})(s,e,t):s instanceof Fs?(function(r,i,o){if(!bo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const B=hf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Xd(r)),c.setAll(B),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(s,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Hr(s,e,t,n){return s instanceof Ri?(function(i,o,B,c){if(!bo(i.precondition,o))return B;const l=i.value.clone(),h=ff(i.fieldTransforms,c,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(s,e,t,n):s instanceof Fs?(function(i,o,B,c){if(!bo(i.precondition,o))return B;const l=ff(i.fieldTransforms,c,o),h=o.data;return h.setAll(Xd(i)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((C=>C.field)))})(s,e,t,n):(function(i,o,B){return bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B})(s,e,t)}function Yy(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=$d(n.transform,r||null);i!=null&&(t===null&&(t=Lt.empty()),t.set(n.field,i))}return t||null}function uf(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&nr(n,r,((i,o)=>$y(i,o)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Ri extends Ea{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fs extends Ea{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xd(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function hf(s,e,t){const n=new Map;te(s.length===t.length,32656,{ve:t.length,De:s.length});for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,B=e.data.field(i.field);n.set(i.field,Ky(o,B,t[r]))}return n}function ff(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,Jy(i,o,e))}return n}class Zd extends Ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qy extends Ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Yo{constructor(e,t){this.position=e,this.inclusive=t}}function Cf(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=ae.comparator(ae.fromName(o.referenceValue),t.key):n=wt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function df(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!xt(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class ep{}class qe extends ep{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Zy(e,t,n):t==="array-contains"?new nI(e,n):t==="in"?new sI(e,n):t==="not-in"?new rI(e,n):t==="array-contains-any"?new iI(e,n):new qe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new eI(e,n):new tI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wt(t,this.value)):t!==null&&Ue(this.value)===Ue(t)&&this.matchesComparison(wt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends ep{constructor(e,t){super(),this.filters=e,this.op=t,this.Ce=null}static create(e,t){return new Wn(e,t)}matches(e){return tp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Ce!==null||(this.Ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Ce}getFilters(){return Object.assign([],this.filters)}}function tp(s){return s.op==="and"}function np(s){return Xy(s)&&tp(s)}function Xy(s){for(const e of s.filters)if(e instanceof Wn)return!1;return!0}function uc(s){if(s instanceof qe)return s.field.canonicalString()+s.op.toString()+ir(s.value);if(np(s))return s.filters.map((e=>uc(e))).join(",");{const e=s.filters.map((t=>uc(t))).join(",");return`${s.op}(${e})`}}function sp(s,e){return s instanceof qe?(function(n,r){return r instanceof qe&&n.op===r.op&&n.field.isEqual(r.field)&&xt(n.value,r.value)})(s,e):s instanceof Wn?(function(n,r){return r instanceof Wn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,o,B)=>i&&sp(o,r.filters[B])),!0):!1})(s,e):void oe(19439)}function rp(s){return s instanceof qe?(function(t){return`${t.field.canonicalString()} ${t.op} ${ir(t.value)}`})(s):s instanceof Wn?(function(t){return t.op.toString()+" {"+t.getFilters().map(rp).join(" ,")+"}"})(s):"Filter"}class Zy extends qe{constructor(e,t,n){super(e,t,n),this.key=ae.fromName(n.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class eI extends qe{constructor(e,t){super(e,"in",t),this.keys=ip("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class tI extends qe{constructor(e,t){super(e,"not-in",t),this.keys=ip("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ip(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>ae.fromName(n.referenceValue)))}class nI extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return or(t)&&si(t.arrayValue,this.value)}}class sI extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class rI extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!si(this.value.arrayValue,t)}}class iI extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!or(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>si(this.value.arrayValue,n)))}}/**
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
 */class Qo{constructor(e,t="asc"){this.field=e,this.dir=t}}function oI(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Ee(0,0))}static max(){return new Re(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vt{constructor(e,t,n,r,i,o,B){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new Vt(e,0,Re.min(),Re.min(),Re.min(),Lt.empty(),0)}static newFoundDocument(e,t,n,r){return new Vt(e,1,t,Re.min(),n,r,0)}static newNoDocument(e,t){return new Vt(e,2,t,Re.min(),Re.min(),Lt.empty(),0)}static newUnknownDocument(e,t){return new Vt(e,3,t,Re.min(),Re.min(),Lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const li=-1;function aI(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=Re.fromTimestamp(n===1e9?new Ee(t+1,0):new Ee(t,n));return new Yn(r,ae.empty(),e)}function BI(s){return new Yn(s.readTime,s.key,li)}class Yn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Yn(Re.min(),ae.empty(),li)}static max(){return new Yn(Re.max(),ae.empty(),li)}}function cI(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(s.documentKey,e.documentKey),t!==0?t:de(s.largestBatchId,e.largestBatchId))}/**
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
 */class lI{constructor(e,t=null,n=[],r=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=B,this.Fe=null}}function pf(s,e=null,t=[],n=[],r=null,i=null,o=null){return new lI(s,e,t,n,r,i,o)}function op(s){const e=Ie(s);if(e.Fe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>uc(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),qc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>ir(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>ir(n))).join(",")),e.Fe=t}return e.Fe}function ap(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!oI(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!sp(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!df(s.startAt,e.startAt)&&df(s.endAt,e.endAt)}function uI(s){return!!s.isCorePipeline}/**
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
 */class _a{constructor(e,t=null,n=[],r=[],i=null,o="F",B=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=c,this.Oe=null,this.Me=null,this.Ne=null,this.startAt,this.endAt}}function hI(s,e,t,n,r,i,o,B){return new _a(s,e,t,n,r,i,o,B)}function fI(s){return new _a(s)}function gf(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function CI(s){return ae.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function dI(s){return s.collectionGroup!==null}function jr(s){const e=Ie(s);if(e.Oe===null){e.Oe=[];const t=new Set;for(const i of e.explicitOrderBy)e.Oe.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new ze(bt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(B=B.add(l.field))}))})),B})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Oe.push(new Qo(i,n))})),t.has(bt.keyField().canonicalString())||e.Oe.push(new Qo(bt.keyField(),n))}return e.Oe}function ws(s){const e=Ie(s);return e.Me||(e.Me=pI(e,jr(s))),e.Me}function pI(s,e){if(s.limitType==="F")return pf(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Qo(r.field,i)}));const t=s.endAt?new Yo(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new Yo(s.startAt.position,s.startAt.inclusive):null;return pf(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function hc(s,e,t){return new _a(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function gI(s,e){return ap(ws(s),ws(e))&&s.limitType===e.limitType}function Ro(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>rp(r))).join(", ")}]`),qc(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>ir(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>ir(r))).join(",")),`Target(${n})`})(ws(s))}; limitType=${s.limitType})`}function Zc(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ae.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of jr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(o,B,c){const l=Cf(o,B,c);return o.inclusive?l<=0:l<0})(n.startAt,jr(n),r)||n.endAt&&!(function(o,B,c){const l=Cf(o,B,c);return o.inclusive?l>=0:l>0})(n.endAt,jr(n),r))})(s,e)}function Bp(s){return(e,t)=>{let n=!1;for(const r of jr(s)){const i=mI(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function mI(s,e,t){const n=s.field.isKeyField()?ae.comparator(e.key,t.key):(function(i,o,B){const c=o.data.field(i),l=B.data.field(i);return c!==null&&l!==null?wt(c,l):oe(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return oe(19790,{direction:s.dir})}}/**
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
 */var ke,he;function EI(s){switch(s){case G.OK:return oe(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return oe(15467,{code:s})}}function _I(s){if(s===void 0)return bs("GRPC error has no .code"),G.UNKNOWN;switch(s){case ke.OK:return G.OK;case ke.CANCELLED:return G.CANCELLED;case ke.UNKNOWN:return G.UNKNOWN;case ke.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ke.INTERNAL:return G.INTERNAL;case ke.UNAVAILABLE:return G.UNAVAILABLE;case ke.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ke.NOT_FOUND:return G.NOT_FOUND;case ke.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ke.ABORTED:return G.ABORTED;case ke.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ke.DATA_LOSS:return G.DATA_LOSS;default:return oe(39323,{code:s})}}(he=ke||(ke={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ls{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Nd(this.inner)}size(){return this.innerSize}}/**
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
 */const DI=new _t(ae.comparator);function Jr(){return DI}const cp=new _t(ae.comparator);function Pr(...s){let e=cp;for(const t of s)e=e.insert(t.key,t);return e}function lp(s){let e=cp;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function kn(){return Kr()}function up(){return Kr()}function Kr(){return new Ls((s=>s.toString()),((s,e)=>s.isEqual(e)))}const wI=new _t(ae.comparator),yI=new ze(ae.comparator);function Xe(...s){let e=yI;for(const t of s)e=e.add(t);return e}const II=new ze(de);function TI(){return II}/**
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
 */new xc([4294967295,4294967295],0);class AI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vo(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function el(s){const e=vs(s);return new Ee(e.seconds,e.nanos)}function mf(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function Oo(s,e){return vo(s,e.toTimestamp())}function Zs(s){return te(!!s,49232),Re.fromTimestamp(el(s))}function hp(s,e){return fc(s,e).canonicalString()}function fc(s,e){const t=(function(r){return new ve(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function bI(s){const e=ve.fromString(s);return te(LI(e),10190,{key:e.toString()}),e}function Xo(s,e){return hp(s.databaseId,e.path)}function RI(s){const e=bI(s);return e.length===4?ve.emptyPath():OI(e)}function vI(s){return new ve(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function OI(s){return te(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Ef(s,e,t){return{name:Xo(s,e),fields:t.value.mapValue.fields}}function SI(s,e){let t;if(e instanceof Ri)t={update:Ef(s,e.key,e.value)};else if(e instanceof Zd)t={delete:Xo(s,e.key)};else if(e instanceof Fs)t={update:Ef(s,e.key,e.data),updateMask:FI(e.fieldMask)};else{if(!(e instanceof Qy))return oe(16599,{Bt:e.type});t={verify:Xo(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const B=o.transform;if(B instanceof oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof Bi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof ci)return{fieldPath:o.field.canonicalString(),increment:B.xe};if(B instanceof zo)return{fieldPath:o.field.canonicalString(),minimum:B.xe};if(B instanceof Wo)return{fieldPath:o.field.canonicalString(),maximum:B.xe};throw oe(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Oo(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)})(s,e.precondition)),t}function NI(s,e){return s&&s.length>0?(te(e!==void 0,14353),s.map((t=>(function(r,i){let o=r.updateTime?Zs(r.updateTime):Zs(i);return o.isEqual(Re.min())&&(o=Zs(i)),new zy(o,r.transformResults||[])})(t,e)))):[]}function PI(s){let e=RI(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){te(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(C){const p=fp(C);return p instanceof Wn&&np(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(C){return C.map((p=>(function(y){return new Qo(Js(y.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(p)))})(t.orderBy));let B=null;t.limit&&(B=(function(C){let p;return p=typeof C=="object"?C.value:C,qc(p)?null:p})(t.limit));let c=null;t.startAt&&(c=(function(C){const p=!!C.before,_=C.values||[];return new Yo(_,p)})(t.startAt));let l=null;return t.endAt&&(l=(function(C){const p=!C.before,_=C.values||[];return new Yo(_,p)})(t.endAt)),hI(e,r,o,i,B,"F",c,l)}function fp(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Js(t.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Js(t.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Js(t.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Js(t.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}})(s):s.fieldFilter!==void 0?(function(t){return qe.create(Js(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return Wn.create(t.compositeFilter.filters.map((n=>fp(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return oe(1026)}})(t.compositeFilter.op))})(s):oe(30097,{filter:s})}function Js(s){return bt.fromServerFormat(s.fieldPath)}function FI(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function LI(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function Cp(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}function ui(s,e){const t={fields:{}};return e.forEach(((n,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=n._toProto(s)})),{mapValue:t}}function Zo(s){return{stringValue:s}}/**
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
 */function Da(s){return new AI(s,!0)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class dp{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class pp{constructor(e,t){if(this.seconds=e,this.increment=t,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
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
 */class Gt{constructor(e,t=0){if(this.subtype=t,!Number.isInteger(t)||t<0||t>255)throw new z(G.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,t=0){try{return new Gt(ft.fromBase64String(e),t)}catch(n){throw new z(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e,t=0){return new Gt(ft.fromUint8Array(e),t)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:Gt._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(bi(e,Gt._jsonSchema)){const t=e.subtype??0;return Gt.fromBase64String(e.bytes,t)}}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:Le("string",Gt._jsonSchemaVersion),bytes:Le("string"),subtype:{...Le("number"),optional:!0}};/**
 * @license
 * Copyright 2025 Google LLC
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
 */class gp{constructor(e){this.stringValue=e,this.value=Q.fromString(e)}isEqual(e){return!(!this.value.oe()||!e.value.oe())||this.value.compareTo(e.value)===0}toJSON(){return{Ut:{stringValue:this.stringValue}}}}/**
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
 */class tl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function kI(){return new tl(sr)}/**
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
 */class nl{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(bi(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Le("string",hn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
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
 */class mp{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Mn{constructor(){this.type="MaxKey"}static instance(){return Mn.MAX_KEY_VALUE_INSTANCE||(Mn.MAX_KEY_VALUE_INSTANCE=new Mn),Mn.MAX_KEY_VALUE_INSTANCE}}Mn.MAX_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Vn{constructor(){this.type="MinKey"}static instance(){return Vn.MIN_KEY_VALUE_INSTANCE||(Vn.MIN_KEY_VALUE_INSTANCE=new Vn),Vn.MIN_KEY_VALUE_INSTANCE}}Vn.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */class ys{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ep{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(it.UNAUTHENTICATED)))}shutdown(){}}class MI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class VI{constructor(e){this.kt=e,this.currentUser=it.UNAUTHENTICATED,this.Qt=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.qt===void 0,42304);let n=this.Qt;const r=c=>this.Qt!==n?(n=this.Qt,t(c)):Promise.resolve();let i=new ys;this.qt=()=>{this.Qt++,this.currentUser=this.Kt(),i.resolve(),i=new ys,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},B=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.qt&&(this.auth.addAuthTokenListener(this.qt),o())};this.kt.onInit((c=>B(c))),setTimeout((()=>{if(!this.auth){const c=this.kt.getImmediate({optional:!0});c?B(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ys)}}),0),o()}getToken(){const e=this.Qt,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.Qt!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(te(typeof n.accessToken=="string",31837,{Wt:n}),new Ep(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.qt&&this.auth.removeAuthTokenListener(this.qt),this.qt=void 0}Kt(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{Gt:e}),new it(e)}}class GI{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n,this.type="FirstParty",this.user=it.FIRST_PARTY,this.Jt=new Map}Yt(){return this.Ht?this.Ht():null}get headers(){this.Jt.set("X-Goog-AuthUser",this.jt);const e=this.Yt();return e&&this.Jt.set("Authorization",e),this.zt&&this.Jt.set("X-Goog-Iam-Authorization-Token",this.zt),this.Jt}}class UI{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n}getToken(){return Promise.resolve(new GI(this.jt,this.zt,this.Ht))}start(e,t){e.enqueueRetryable((()=>t(it.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _f{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HI{constructor(e,t){this.Zt=t,this.forceRefresh=!1,this.appCheck=null,this.Xt=null,this.en=null,Ft(e)&&e.settings.appCheckToken&&(this.en=e.settings.appCheckToken)}start(e,t){te(this.qt===void 0,3512);const n=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.Xt;return this.Xt=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.qt=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.qt&&this.appCheck.addTokenListener(this.qt)};this.Zt.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.Zt.getImmediate({optional:!0});i?r(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.en)return Promise.resolve(new _f(this.en));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.Xt=t.token,new _f(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.qt&&this.appCheck.removeTokenListener(this.qt),this.qt=void 0}}function _p(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */class jI{tn(e){}shutdown(){}}/**
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
 */const Df="ConnectivityMonitor";class wf{constructor(){this.nn=()=>this.rn(),this.sn=()=>this._n(),this.an=[],this.un()}tn(e){this.an.push(e)}shutdown(){window.removeEventListener("online",this.nn),window.removeEventListener("offline",this.sn)}un(){window.addEventListener("online",this.nn),window.addEventListener("offline",this.sn)}rn(){W(Df,"Network connectivity changed: AVAILABLE");for(const e of this.an)e(0)}_n(){W(Df,"Network connectivity changed: UNAVAILABLE");for(const e of this.an)e(1)}static cn(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uo=null;function Cc(){return uo===null?uo=(function(){return 268435456+Math.round(2147483648*Math.random())})():uo++,"0x"+uo.toString(16)}/**
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
 */const IB="RestConnection",JI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class KI{get En(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.hn=t+"://"+e.host,this.Tn=`projects/${n}/databases/${r}`,this.Pn=this.databaseId.database===jo?`project_id=${n}`:`project_id=${n}&database_id=${r}`}In(e,t,n,r,i){const o=Cc(),B=this.Rn(e,t.toUriEncodedString());W(IB,`Sending RPC '${e}' ${o}:`,B,n);const c={"google-cloud-resource-prefix":this.Tn,"x-goog-request-params":this.Pn};this.An(c,r,i);const{host:l}=new URL(B),h=_i(l);return this.Vn(e,B,c,n,h).then((C=>(W(IB,`Received RPC '${e}' ${o}: `,C),C)),(C=>{throw dn(IB,`RPC '${e}' ${o} failed with error: `,C,"url: ",B,"request:",n),C}))}dn(e,t,n,r,i,o){return this.In(e,t,n,r,i)}An(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+lr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}Rn(e,t){const n=JI[e];let r=`${this.hn}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class qI{constructor(e){this.fn=e.fn,this.mn=e.mn}pn(e){this.gn=e}yn(e){this.wn=e}bn(e){this.Sn=e}onMessage(e){this.xn=e}close(){this.mn()}send(e){this.fn(e)}vn(){this.gn()}Dn(){this.wn()}Cn(e){this.Sn(e)}Fn(e){this.xn(e)}}/**
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
 */const nt="WebChannelConnection",Fr=(s,e,t)=>{s.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class er extends KI{constructor(e){super(e),this.On=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static Mn(){if(!er.Nn){const e=Dd();Fr(e,_d.STAT_EVENT,(t=>{t.stat===QB.PROXY?W(nt,"STAT_EVENT: detected buffering proxy"):t.stat===QB.NOPROXY&&W(nt,"STAT_EVENT: detected no buffering proxy")})),er.Nn=!0}}Vn(e,t,n,r,i){const o=Cc();return new Promise(((B,c)=>{const l=new md;l.setWithCredentials(!0),l.listenOnce(Ed.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case yo.NO_ERROR:const C=l.getResponseJson();W(nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(C)),B(C);break;case yo.TIMEOUT:W(nt,`RPC '${e}' ${o} timed out`),c(new z(G.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const p=l.getStatus();if(W(nt,`RPC '${e}' ${o} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const y=_==null?void 0:_.error;if(y&&y.status&&y.message){const S=(function(J){const $=J.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf($)>=0?$:G.UNKNOWN})(y.status);c(new z(S,y.message))}else c(new z(G.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new z(G.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{Bn:e,streamId:o,Ln:l.getLastErrorCode(),$n:l.getLastError()})}}finally{W(nt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);W(nt,`RPC '${e}' ${o} sending request:`,r),l.send(t,"POST",h,n,15)}))}Un(e,t,n){const r=Cc(),i=[this.hn,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(B.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(B.useFetchStreams=!0),this.An(B.initMessageHeaders,t,n),B.encodeInitMessageHeaders=!0;const l=i.join("");W(nt,`Creating RPC '${e}' stream ${r}: ${l}`,B);const h=o.createWebChannel(l,B);this.kn(h);let C=!1,p=!1;const _=new qI({fn:y=>{p?W(nt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(C||(W(nt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),C=!0),W(nt,`RPC '${e}' stream ${r} sending:`,y),h.send(y))},mn:()=>h.close()});return Fr(h,Lr.EventType.OPEN,(()=>{p||(W(nt,`RPC '${e}' stream ${r} transport opened.`),_.vn())})),Fr(h,Lr.EventType.CLOSE,(()=>{p||(p=!0,W(nt,`RPC '${e}' stream ${r} transport closed`),_.Cn(),this.Qn(h))})),Fr(h,Lr.EventType.ERROR,(y=>{p||(p=!0,dn(nt,`RPC '${e}' stream ${r} transport errored. Name:`,y.name,"Message:",y.message),_.Cn(new z(G.UNAVAILABLE,"The operation could not be completed")))})),Fr(h,Lr.EventType.MESSAGE,(y=>{var S;if(!p){const k=y.data[0];te(!!k,16349);const J=k,$=(J==null?void 0:J.error)||((S=J[0])==null?void 0:S.error);if($){W(nt,`RPC '${e}' stream ${r} received error:`,$);const re=$.status;let Ce=(function(b){const E=ke[b];if(E!==void 0)return _I(E)})(re),Te=$.message;re==="NOT_FOUND"&&Te.includes("database")&&Te.includes("does not exist")&&Te.includes(this.databaseId.database)&&dn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ce===void 0&&(Ce=G.INTERNAL,Te="Unknown error status: "+re+" with message "+$.message),p=!0,_.Cn(new z(Ce,Te)),h.close()}else W(nt,`RPC '${e}' stream ${r} received:`,k),_.Fn(k)}})),er.Mn(),setTimeout((()=>{_.Dn()}),0),_}terminate(){this.On.forEach((e=>e.close())),this.On=[]}kn(e){this.On.push(e)}Qn(e){this.On=this.On.filter((t=>t===e))}An(e,t,n){super.An(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wd()}}/**
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
 */function $I(s){return new er(s)}er.Nn=!1;class Dp{constructor(e,t,n=1e3,r=1.5,i=6e4){this.qn=e,this.timerId=t,this.Kn=n,this.Wn=r,this.Gn=i,this.jn=0,this.zn=null,this.Hn=Date.now(),this.reset()}reset(){this.jn=0}Jn(){this.jn=this.Gn}Yn(e){this.cancel();const t=Math.floor(this.jn+this.Zn()),n=Math.max(0,Date.now()-this.Hn),r=Math.max(0,t-n);r>0&&W("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jn} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.zn=this.qn.enqueueAfterDelay(this.timerId,r,(()=>(this.Hn=Date.now(),e()))),this.jn*=this.Wn,this.jn<this.Kn&&(this.jn=this.Kn),this.jn>this.Gn&&(this.jn=this.Gn)}Xn(){this.zn!==null&&(this.zn.skipDelay(),this.zn=null)}cancel(){this.zn!==null&&(this.zn.cancel(),this.zn=null)}Zn(){return(Math.random()-.5)*this.jn}}/**
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
 */const yf="PersistentStream";class zI{constructor(e,t,n,r,i,o,B,c){this.qn=e,this.er=n,this.tr=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=c,this.state=0,this.nr=0,this.rr=null,this.ir=null,this.stream=null,this.sr=0,this._r=new Dp(e,t)}ar(){return this.state===1||this.state===5||this.ur()}ur(){return this.state===2||this.state===3}start(){this.sr=0,this.state!==4?this.auth():this.cr()}async stop(){this.ar()&&await this.close(0)}lr(){this.state=0,this._r.reset()}Er(){this.ur()&&this.rr===null&&(this.rr=this.qn.enqueueAfterDelay(this.er,6e4,(()=>this.hr())))}Tr(e){this.Pr(),this.stream.send(e)}async hr(){if(this.ur())return this.close(0)}Pr(){this.rr&&(this.rr.cancel(),this.rr=null)}Ir(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this.Pr(),this.Ir(),this._r.cancel(),this.nr++,e!==4?this._r.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(bs(t.toString()),bs("Using maximum backoff delay to prevent overloading the backend."),this._r.Jn()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Rr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.bn(t)}Rr(){}auth(){this.state=1;const e=this.Ar(this.nr),t=this.nr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.nr===t&&this.Vr(n,r)}),(n=>{e((()=>{const r=new z(G.UNKNOWN,"Fetching auth token failed: "+n.message);return this.dr(r)}))}))}Vr(e,t){const n=this.Ar(this.nr);this.stream=this.mr(e,t),this.stream.pn((()=>{n((()=>this.listener.pn()))})),this.stream.yn((()=>{n((()=>(this.state=2,this.ir=this.qn.enqueueAfterDelay(this.tr,1e4,(()=>(this.ur()&&(this.state=3),Promise.resolve()))),this.listener.yn())))})),this.stream.bn((r=>{n((()=>this.dr(r)))})),this.stream.onMessage((r=>{n((()=>++this.sr==1?this.pr(r):this.onNext(r)))}))}cr(){this.state=5,this._r.Yn((async()=>{this.state=0,this.start()}))}dr(e){return W(yf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Ar(e){return t=>{this.qn.enqueueAndForget((()=>this.nr===e?t():(W(yf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class WI extends zI{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get br(){return this.sr>0}start(){this.lastStreamToken=void 0,super.start()}Rr(){this.br&&this.Sr([])}mr(e,t){return this.connection.Un("Write",e,t)}pr(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.vr()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this._r.reset();const t=NI(e.writeResults,e.commitTime),n=Zs(e.commitTime);return this.listener.Dr(n,t)}Cr(){const e={};e.database=vI(this.serializer),this.Tr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>SI(this.serializer,n)))};this.Tr(t)}}/**
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
 */class YI{}class QI extends YI{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.Fr=!1}Or(){if(this.Fr)throw new z(G.FAILED_PRECONDITION,"The client has already been terminated.")}In(e,t,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.In(e,fc(t,n),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(G.UNKNOWN,i.toString())}))}dn(e,t,n,r,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,B])=>this.connection.dn(e,fc(t,n),r,o,B,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(G.UNKNOWN,o.toString())}))}terminate(){this.Fr=!0,this.connection.terminate()}}function XI(s,e,t,n){return new QI(s,e,t,n)}/**
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
 */const ZI="ComponentProvider",If=new Map;function eT(s,e,t,n,r){return new Vy(s,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,_p(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n,r._customHeaders,r.grpcFlowControlWindow)}/**
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
 */const Tf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wp=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(wp,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
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
 */class sl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.Mr(n),this.Nr=n=>t.writeSequenceNumber(n))}Mr(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.Nr&&this.Nr(e),e}}sl.Br=-1;/**
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
 */const tT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function rl(s){if(s.code!==G.FAILED_PRECONDITION||s.message!==tT)throw s;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,n)=>{t(e)}))}static reject(e){return new x(((t,n)=>{n(e)}))}static waitFor(e){return new x(((t,n)=>{let r=0,i=0,o=!1;e.forEach((B=>{++r,B.next((()=>{++i,o&&i===r&&t()}),(c=>n(c)))})),o=!0,i===r&&t()}))}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next((r=>r?x.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new x(((n,r)=>{const i=e.length,o=new Array(i);let B=0;for(let c=0;c<i;c++){const l=c;t(e[l]).next((h=>{o[l]=h,++B,B===i&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new x(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function sT(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function vi(s){return s.name==="IndexedDbTransactionError"}/**
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
 */const Af="LruGarbageCollector",rT=1048576;function bf([s,e],[t,n]){const r=de(s,t);return r===0?de(e,n):r}class iT{constructor(e){this.ai=e,this.buffer=new ze(bf),this.ui=0}ci(){return++this.ui}li(e){const t=[e,this.ci()];if(this.buffer.size<this.ai)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();bf(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oT{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ei=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.hi(6e4)}stop(){this.Ei&&(this.Ei.cancel(),this.Ei=null)}get started(){return this.Ei!==null}hi(e){W(Af,`Garbage collection scheduled in ${e}ms`),this.Ei=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ei=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vi(t)?W(Af,"Ignoring IndexedDB error during garbage collection: ",t):await rl(t)}await this.hi(3e5)}))}}class aT{constructor(e,t){this.Ti=e,this.params=t}calculateTargetCount(e,t){return this.Ti.Pi(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(sl.Br);const n=new iT(t);return this.Ti.forEachTarget(e,(r=>n.li(r.sequenceNumber))).next((()=>this.Ti.Ii(e,(r=>n.li(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Ti.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ti.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Tf)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tf):this.Ri(e,t)))}getCacheSize(e){return this.Ti.getCacheSize(e)}Ri(e,t){let n,r,i,o,B,c,l;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),r=this.params.maximumSequenceNumbersToCollect):r=C,o=Date.now(),this.nthSequenceNumber(e,r)))).next((C=>(n=C,B=Date.now(),this.removeTargets(e,n,t)))).next((C=>(i=C,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((C=>(l=Date.now(),Hs()<=le.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(B-o)+`ms
	Removed ${i} targets in `+(c-B)+`ms
	Removed ${C} documents in `+(l-c)+`ms
Total Duration: ${l-h}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:C}))))}}function BT(s,e){return new aT(s,e)}/**
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
 */const yp="firestore.googleapis.com",Rf=!0;class vf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yp,this.ssl=Rf}else this.host=e.host,this.ssl=e.ssl??Rf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=wp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rT)throw new z(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(ky("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_p(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new z(G.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new z(G.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new z(G.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new z(G.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,r){if(n===r)return!0;if(!n||!r)return!1;const i=Object.keys(n),o=Object.keys(r);if(i.length!==o.length)return!1;for(const B of i)if(n[B]!==r[B])return!1;return!0})(this._customHeaders,e._customHeaders)}}let il=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new xI;switch(n.type){case"firstParty":return new UI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=If.get(t);n&&(W(ZI,"Removing Datastore"),If.delete(t),n.terminate())})(this),Promise.resolve()}};function cT(s,e,t,n={}){var l;s=tc(s,il);const r=_i(e),i=s._getSettings(),o={...i,emulatorOptions:s._getEmulatorOptions()},B=`${e}:${t}`;r&&gC(`https://${B}`),i.host!==yp&&i.host!==B&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:B,ssl:r,emulatorOptions:n};if(!qn(c,o)&&(s._setSettings(c),n.mockUserToken)){let h,C;if(typeof n.mockUserToken=="string")h=n.mockUserToken,C=it.MOCK_USER;else{h=Hm(n.mockUserToken,(l=s._app)==null?void 0:l.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new z(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new it(p)}s._authCredentials=new MI(new Ep(h,C))}}/**
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
 */class ol{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ol(this.firestore,e,this._query)}}class Ze{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(bi(t,Ze._jsonSchema))return new Ze(e,n||null,new ae(ve.fromString(t.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Le("string",Ze._jsonSchemaVersion),referencePath:Le("string")};class hi extends ol{constructor(e,t,n){super(e,t,fI(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new ae(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function lT(s,e,...t){if(s=We(s),arguments.length===1&&(e=Hc.newId()),Ly("doc","path",e),s instanceof il){const n=ve.fromString(e,...t);return ef(n),new Ze(s,null,new ae(n))}{if(!(s instanceof Ze||s instanceof hi))throw new z(G.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ve.fromString(e,...t));return ef(n),new Ze(s.firestore,s instanceof hi?s.converter:null,new ae(n))}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Ip{constructor(e,t){this.pattern=e,this.options=t}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
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
 */class Rt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Rt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bi(e,Rt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Rt(e.vectorValues);throw new z(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rt._jsonSchemaVersion="firestore/vectorValue/1.0",Rt._jsonSchema={type:Le("string",Rt._jsonSchemaVersion),vectorValues:Le("object")};/**
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
 */const uT=/^__.*__$/;class hT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}function Tp(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{dataSource:s})}}class al{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new al({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ea(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Tp(this.dataSource)&&uT.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class fT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Da(e)}createContext(e,t,n,r=!1){return new al({dataSource:e,methodName:t,targetDoc:n,path:bt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CT(s){const e=s._freezeSettings(),t=Da(s._databaseId);return new fT(s._databaseId,!!e.ignoreUndefinedProperties,t)}function dT(s,e,t,n,r,i={}){const o=s.createContext(i.merge||i.mergeFields?2:0,e,t,r);vp("Data must be an object, but it was:",o,n);const B=Ap(n,o);let c,l;if(i.merge)c=new Kt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const C of i.mergeFields){const p=wa(e,C,t);if(!o.contains(p))throw new z(G.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);mT(h,p)||h.push(p)}c=new Kt(h),l=o.fieldTransforms.filter((C=>c.covers(C.field)))}else c=null,l=o.fieldTransforms;return new hT(new Lt(B),c,l)}class Bl extends nl{_toFieldTransform(e){return new qy(e.path,new oi)}isEqual(e){return e instanceof Bl}}function fi(s,e,t){if(Rp(s=We(s)))return vp("Unsupported field value:",e,s),Ap(s,e);if(s instanceof nl)return(function(r,i){if(!Tp(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let B=0;for(const c of r){let l=fi(c,i.childContextForArray(B));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),B++}return{arrayValue:{values:o}}})(s,e)}return(function(r,i,o){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ga(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const B=Ee.fromDate(r);return{timestampValue:vo(i.serializer,B)}}if(r instanceof Ee){const B=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vo(i.serializer,B)}}if(bp(r)){const B=Ee.fromInstant(r),c=new Ee(B.seconds,1e3*Math.floor(B.nanoseconds/1e3));return{timestampValue:vo(i.serializer,c)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return r.subtype===0?{bytesValue:mf(i.serializer,r._byteString)}:(function(c,l){const h=l.toUint8Array(),C=new Uint8Array(h.length+1);return C[0]=l.subtype,C.set(h,1),{mapValue:{fields:{[Yc]:{bytesValue:mf(c,ft.fromUint8Array(C))}}}}})(i.serializer,r);if(r instanceof Ze){const B=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(B))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:hp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Rt)return(function(c,l){const h=c instanceof Rt?c.toArray():c;return{mapValue:{fields:{[$c]:{stringValue:zc},[Ko]:{arrayValue:{values:h.map((p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return Qc(l.serializer,p)}))}}}}}})(r,i);if(r instanceof Ip)return(function(c){return{mapValue:{fields:{[zs]:{mapValue:{fields:{[rc]:{stringValue:c.pattern},[ic]:{stringValue:c.options}}}}}}}})(r);if(r instanceof dp)return(function(c){return{mapValue:{fields:{[qo]:{stringValue:c.value}}}}})(r);if(r instanceof mp)return(function(c){return{mapValue:{fields:{[hr]:Xs(c.value)}}}})(r);if(r instanceof gp)return(function(c){return{mapValue:{fields:{[Os]:{stringValue:c.stringValue}}}}})(r);if(r instanceof pp)return(function(c){return{mapValue:{fields:{[Ws]:{mapValue:{fields:{[oc]:Xs(c.seconds),[ac]:Xs(c.increment)}}}}}}})(r);if(r instanceof Vn)return(function(){return{mapValue:{fields:{[xd]:{nullValue:"NULL_VALUE"}}}}})();if(r instanceof Mn)return(function(){return{mapValue:{fields:{[Wc]:{nullValue:"NULL_VALUE"}}}}})();if(Cp(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${jc(r)}`)})(s,e)}function Ap(s,e){const t={};return Nd(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(s,((n,r)=>{const i=fi(r,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function bp(s){if(typeof s!="object"||s===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&s instanceof Temporal.Instant)return!0;const e=s;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function Rp(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Ee||s instanceof hn||s instanceof Gt||s instanceof Ze||s instanceof nl||s instanceof Rt||s instanceof Vn||s instanceof Mn||s instanceof mp||s instanceof gp||s instanceof Ip||s instanceof dp||s instanceof pp||bp(s)||Cp(s))}function vp(s,e,t){if(!Rp(t)||!Ai(t)){const n=jc(t);throw n==="an object"?e.createError(s+" a custom object"):e.createError(s+" "+n)}}function wa(s,e,t){if((e=We(e))instanceof tl)return e._internalPath;if(typeof e=="string")return gT(s,e);throw ea("Field path arguments must be of type string or ",s,!1,void 0,t)}const pT=new RegExp("[~\\*/\\[\\]]");function gT(s,e,t){if(e.search(pT)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new tl(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function ea(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new z(G.INVALID_ARGUMENT,B+s+c)}function mT(s,e){return s.some((t=>t.isEqual(e)))}function ET(s){return typeof s._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Bt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Lt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let B;i.nestedOptions&&Ai(o)?B={mapValue:{fields:new Bt(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=fi(o,t)??void 0),B&&n.set(bt.fromServerFormat(i.serverName),B)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const i=new Map(Fy(n,((o,B)=>[bt.fromServerFormat(B),o!==void 0?fi(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
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
 */function _T(s){return typeof s=="object"&&s!==null&&!!("nullValue"in s&&(s.nullValue===null||s.nullValue==="NULL_VALUE")||"booleanValue"in s&&(s.booleanValue===null||typeof s.booleanValue=="boolean")||"integerValue"in s&&(s.integerValue===null||typeof s.integerValue=="number"||typeof s.integerValue=="string")||"doubleValue"in s&&(s.doubleValue===null||typeof s.doubleValue=="number")||"timestampValue"in s&&(s.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(s.timestampValue))||"stringValue"in s&&(s.stringValue===null||typeof s.stringValue=="string")||"bytesValue"in s&&(s.bytesValue===null||s.bytesValue instanceof Uint8Array)||"referenceValue"in s&&(s.referenceValue===null||typeof s.referenceValue=="string")||"geoPointValue"in s&&(s.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(s.geoPointValue))||"arrayValue"in s&&(s.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(s.arrayValue))||"mapValue"in s&&(s.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Ai(t.fields))})(s.mapValue))||"fieldReferenceValue"in s&&(s.fieldReferenceValue===null||typeof s.fieldReferenceValue=="string")||"functionValue"in s&&(s.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(s.functionValue))||"pipelineValue"in s&&(s.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(s.pipelineValue)))}function DT(){return new Bl("serverTimestamp")}function wT(s){return new Rt(s)}/**
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
 */function U(s){let e;return s instanceof ss?s:(e=Ai(s)?RT(s):s instanceof Array?vT(s):Op(s,void 0),e)}function TB(s){if(s instanceof ss)return s;if(s instanceof Rt)return Ci(s);if(Array.isArray(s))return Ci(wT(s));throw new Error("Unsupported value: "+typeof s)}function ya(s){return sc(s)?TT(s):U(s)}let ss=class{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,U(e)],"add")}asBoolean(){if(this instanceof Qn)return this;if(this instanceof fr)return new Np(this);if(this instanceof Oi)return new bT(this);if(this instanceof F)return new Sp(this);throw new z("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,U(e)],"subtract")}multiply(e){return new F("multiply",[this,U(e)],"multiply")}divide(e){return new F("divide",[this,U(e)],"divide")}mod(e){return new F("mod",[this,U(e)],"mod")}equal(e){return new F("equal",[this,U(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,U(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,U(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,U(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,U(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,U(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((r=>U(r)));return new F("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,U(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new xr(e.map(U),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new xr(e.map(U),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new xr(e.map(U),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new xr(e.map(U),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,U(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,U(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,U(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,U(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,U(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,U(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,U(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,U(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(U(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(U(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(U(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Ci(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(U);return new F("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,U(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,U(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,U(e),U(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,U(e),U(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(U);return new F("concat",[this,...n],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,U(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,U(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new F("array_transform",[this,U(e),U(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,U(e)];return t!==void 0&&n.push(U(t)),new F("array_slice",n,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,U(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,U(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,U(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,U(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,U(e),U("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,U(e),U("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,U(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Ci(e)],"mapGet")}mapSet(e,t,...n){const r=[this,U(e),U(t),...n.map(U)];return new F("map_set",r,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,U(e)],"get_field")}count(){return Tt._create("count",[this],"count")}sum(){return Tt._create("sum",[this],"sum")}average(){return Tt._create("average",[this],"average")}minimum(){return Tt._create("minimum",[this],"minimum")}maximum(){return Tt._create("maximum",[this],"maximum")}first(){return Tt._create("first",[this],"first")}last(){return Tt._create("last",[this],"last")}arrayAgg(){return Tt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Tt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Tt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new F("maximum",[this,...n.map(U)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new F("minimum",[this,...n.map(U)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,TB(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,TB(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,TB(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,U(e),U(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,U(e),U(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,ya(e),U(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,U(e)];return t&&n.push(U(t)),new F("timestamp_extract",n,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const n=U(e);return new F("substring",t===void 0?[this,n]:[this,n,U(t)],"substring")}arrayGet(e){return new F("array_get",[this,U(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,U(e)],"ifError");return e instanceof Qn?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,U(e)],"mapRemove")}mapMerge(e,...t){const n=U(e),r=t.map(U);return new F("map_merge",[this,n,...r],"mapMerge")}pow(e){return new F("pow",[this,U(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,U(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,U(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,U(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,U(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,U(e),...t.map(U)],"coalesce")}join(e){return new F("join",[this,U(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,U(e)])}timestampTruncate(e,t){const n=[this,U(e)];return t&&n.push(U(t)),new F("timestamp_trunc",n)}ascending(){return OT(this)}descending(){return ST(this)}as(e){return new IT(this,e,"as")}};class Tt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const r=new Tt(e,t);return r._methodName=n,r}as(e){return new yT(this,e,"as")}over(e){return new cl(this.name,this.params,new Fp(e),"over")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class yT{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class IT{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class xr extends ss{constructor(e,t){super(),this.di=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.di.map((t=>t._toProto(e)))}}}_readUserData(e){this.di.forEach((t=>t._readUserData(e)))}}class Oi extends ss{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,U(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function TT(s){return AT(s,"field")}function AT(s,e){return new Oi(typeof s=="string"?sr===s?kI()._internalPath:wa("field",s):s._internalPath,e)}class fr extends ss{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new fr(e,void 0);return t._protoValue=e,t}_toProto(e){return te(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,_T(this._protoValue)||(this._protoValue=fi(this.value,e))}}function Ci(s,e){return Op(s,"constant")}function Op(s,e){const t=new fr(s,e);return typeof s=="boolean"?new Np(t):t}class F extends ss{constructor(e,t,n,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),r!==void 0&&(this._options=r)}get _optionsUtil(){return new Bt({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Qn extends ss{get _methodName(){return this._expr._methodName}countIf(){return Tt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=U(e),n=new F("if_error",[this,t],"ifError");return t instanceof Qn?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Sp extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Np extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class bT extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function RT(s,e){const t=[];for(const n in s)if(Object.prototype.hasOwnProperty.call(s,n)){const r=s[n];t.push(Ci(n)),t.push(U(r))}return new F("map",t,"map")}function vT(s){return(function(t,n){return new F("array",t.map((r=>U(r))),n)})(s,"array")}function OT(s){return new Pp(ya(s),"ascending","ascending")}function ST(s){return new Pp(ya(s),"descending","descending")}class Pp{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Zo(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}function ho(s){return s instanceof ss}class Fp{constructor(e){this._protoValueType="ProtoValue";const t=e.sort;this.partition=(e.partition??[]).map(ya),this.sort=t===void 0?[]:Array.isArray(t)?t:[t],this.documents=e.documents,this.range=e.range}_toProto(e){const t={};return this.partition.length>0&&(t.partition={arrayValue:{values:this.partition.map((n=>n._toProto(e)))}}),this.sort.length>0&&(t.sort={arrayValue:{values:this.sort.map((n=>n._toProto(e)))}}),this.documents!==void 0&&(t.documents=this.frameToProto(e,this.documents)),this.range!==void 0&&(t.range=this.frameToProto(e,this.range)),{mapValue:{fields:t}}}_readUserData(e){this.partition.forEach((t=>t._readUserData(e))),this.sort.forEach((t=>t._readUserData(e)));for(const t of[this.documents,this.range]){if(t===void 0)continue;ho(t.preceding)&&t.preceding._readUserData(e),ho(t.following)&&t.following._readUserData(e);const n=t.unit;n!==void 0&&ho(n)&&n._readUserData(e)}}frameToProto(e,t){const n={};t.preceding!==void 0&&(n.preceding=this.frameBoundToProto(e,t.preceding,"preceding")),t.following!==void 0&&(n.following=this.frameBoundToProto(e,t.following,"following"));const r=t.unit;return r!==void 0&&(n.unit=sc(r)?Zo(r):r._toProto(e)),{mapValue:{fields:n}}}frameBoundToProto(e,t,n){if(typeof t=="number")return ga(e,t);if(sc(t))return Zo(t);if(ho(t))return t._toProto(e);throw new z("invalid-argument",`Invalid window frame bound: '${n}'. Expected a number, 'current', 'unbounded', or an Expression.`)}}class cl{constructor(e,t=[],n,r){this.name=e,this.params=t,this.window=n,this._methodName=r,this.exprType="WindowFunction",this._protoValueType="ProtoValue"}over(e){return new cl(this.name,this.params,new Fp(e),this._methodName??"over")}as(e){return new NT(this,e,"as")}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this.window===void 0?t:{functionValue:{name:"over",args:[t,this.window._toProto(e)]}}}_readUserData(e){var t;e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((n=>n._readUserData(e))),(t=this.window)==null||t._readUserData(e)}}class NT{constructor(e,t,n){this.windowFunction=e,this.alias=t,this._methodName=n}_readUserData(e){this.windowFunction._readUserData(e)}}class St{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Lp extends St{get _name(){return"add_fields"}get _optionsUtil(){return new Bt({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ui(e,this.fields)]}}_readUserData(e){super._readUserData(e),Xn(this.fields,e)}}class kp extends St{get _name(){return"aggregate"}get _optionsUtil(){return new Bt({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ui(e,this.accumulators),ui(e,this.groups)]}}_readUserData(e){super._readUserData(e),Xn(this.groups,e),Xn(this.accumulators,e)}}class xp extends St{get _name(){return"distinct"}get _optionsUtil(){return new Bt({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ui(e,this.groups)]}}_readUserData(e){super._readUserData(e),Xn(this.groups,e)}}class Ia extends St{get _name(){return"collection"}get _optionsUtil(){return new Bt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.pi=FT(e)}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.pi}]}}_readUserData(e){super._readUserData(e)}}class Ta extends St{get _name(){return"collection_group"}get _optionsUtil(){return new Bt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class ll extends St{get _name(){return"database"}get _optionsUtil(){return new Bt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class ul extends St{get _name(){return"documents"}get _optionsUtil(){return new Bt({})}constructor(e,t){if(super(t),!e||e.length===0)throw new z(G.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(n);if(r.size!==n.length)throw new z(G.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.gi=n,this.yi=r}_toProto(e){return{...super._toProto(e),args:this.gi.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class hl extends St{get _name(){return"where"}get _optionsUtil(){return new Bt({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Xn(this.condition,e)}}class ta extends St{get _name(){return"limit"}get _optionsUtil(){return new Bt({})}constructor(e,t){te(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[ga(e,this.limit)]}}}class Of extends St{get _name(){return"offset"}get _optionsUtil(){return new Bt({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[ga(e,this.offset)]}}}class PT extends St{get _name(){return"select"}get _optionsUtil(){return new Bt({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ui(e,this.selections)]}}_readUserData(e){super._readUserData(e),Xn(this.selections,e)}}class fl extends St{get _name(){return"sort"}get _optionsUtil(){return new Bt({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Xn(this.orderings,e)}}class Cl extends St{get _name(){return"replace_with"}get _optionsUtil(){return new Bt({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Zo(Cl.bi)]}}_readUserData(e){super._readUserData(e),Xn(this.map,e)}}Cl.bi="full_replace";function FT(s){const e=typeof s=="string"?s:s.path;return e.startsWith("/")?e:"/"+e}function Xn(s,e){return ET(s)?s._readUserData(e):Array.isArray(s)?s.forEach((t=>t._readUserData(e))):s instanceof Map?s.forEach((t=>t._readUserData(e))):Object.values(s).forEach((t=>t._readUserData(e))),s}// Copyright 2024 Google LLC* @license
class gt{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return Aa(this)}getPipelineCollectionGroup(){return dl(this)}getPipelineCollectionId(){return LT(this)}getPipelineDocuments(){return dc(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((r,i)=>{r._name!==xp.name&&r._name!==kp.name||(n="keyless"),r._name===PT.name&&n==="exact"&&(n="augmented"),r._name===Lp.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return jn(this)}}function jn(s){const e=s.stages[0];return e instanceof Ia||e instanceof Ta||e instanceof ll||e instanceof ul?e._name:"unknown"}function Aa(s){if(jn(s)==="collection")return s.stages[0].pi}function dl(s){if(jn(s)==="collection_group")return s.stages[0].collectionId}function LT(s){switch(jn(s)){case"collection":return ve.fromString(Aa(s)).lastSegment();case"collection_group":return dl(s);default:return}}function dc(s){if(jn(s)==="documents")return s.stages[0].gi}class T{constructor(e,t){this.type=e,this.value=t}static Oi(){return new T("ERROR",void 0)}static Mi(){return new T("UNSET",void 0)}static Ni(){return new T("NULL",rr)}static newValue(e){return qt(e)?new T("NULL",rr):(function(n){return!!n&&"booleanValue"in n})(e)?new T("BOOLEAN",e):Zt(e)?new T("INT",e):en(e)?new T("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new T("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new T("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):or(e)?new T("ARRAY",e):cc(e)?new T("VECTOR",e):Ds(e)?new T("MAP",e):new T("ERROR",void 0)}Bi(){return this.type==="ERROR"||this.type==="UNSET"}Li(){return this.type==="NULL"}}function qr(s){if(!s.Bi())return s.value}function Mp(s){return s instanceof Qn?s._expr:s}function se(s){if((s=Mp(s))instanceof Oi)return new kT(s);if(s instanceof fr)return new xT(s);if(s instanceof xr)return new MT(s);if(s instanceof F){if(s.name==="add")return new UT(s);if(s.name==="subtract")return new HT(s);if(s.name==="multiply")return new jT(s);if(s.name==="divide")return new JT(s);if(s.name==="mod")return new KT(s);if(s.name==="and")return new qT(s);if(s.name==="equal")return new r0(s);if(s.name==="not_equal")return new i0(s);if(s.name==="less_than")return new o0(s);if(s.name==="less_than_or_equal")return new a0(s);if(s.name==="greater_than")return new B0(s);if(s.name==="greater_than_or_equal")return new c0(s);if(s.name==="array_concat")return new l0(s);if(s.name==="array_reverse")return new u0(s);if(s.name==="array_contains")return new h0(s);if(s.name==="array_contains_all")return new f0(s);if(s.name==="array_contains_any")return new C0(s);if(s.name==="array_length")return new d0(s);if(s.name==="array_element")return new p0(s);if(s.name==="equal_any")return new Vp(s);if(s.name==="not_equal_any")return new zT(s);if(s.name==="is_nan")return new WT(s);if(s.name==="is_not_nan")return new YT(s);if(s.name==="is_null")return new QT(s);if(s.name==="is_not_null")return new XT(s);if(s.name==="is_error")return new ZT(s);if(s.name==="exists")return new e0(s);if(s.name==="not")return new ba(s);if(s.name==="or")return new $T(s);if(s.name==="xor")return new pl(s);if(s.name==="conditional")return new t0(s);if(s.name==="maximum")return new n0(s);if(s.name==="minimum")return new s0(s);if(s.name==="reverse")return new g0(s);if(s.name==="replace_first")return new m0(s);if(s.name==="replace_all")return new E0(s);if(s.name==="char_length")return new _0(s);if(s.name==="byte_length")return new D0(s);if(s.name==="like")return new w0(s);if(s.name==="regex_contains")return new y0(s);if(s.name==="regex_match")return new I0(s);if(s.name==="string_contains")return new T0(s);if(s.name==="starts_with")return new A0(s);if(s.name==="ends_with")return new b0(s);if(s.name==="to_lower")return new R0(s);if(s.name==="to_upper")return new v0(s);if(s.name==="trim")return new O0(s);if(s.name==="string_concat")return new S0(s);if(s.name==="map_get")return new N0(s);if(s.name==="cosine_distance")return new P0(s);if(s.name==="dot_product")return new F0(s);if(s.name==="euclidean_distance")return new L0(s);if(s.name==="vector_length")return new k0(s);if(s.name==="unix_micros_to_timestamp")return new U0(s);if(s.name==="timestamp_to_unix_micros")return new J0(s);if(s.name==="unix_millis_to_timestamp")return new H0(s);if(s.name==="timestamp_to_unix_millis")return new K0(s);if(s.name==="unix_seconds_to_timestamp")return new j0(s);if(s.name==="timestamp_to_unix_seconds")return new q0(s);if(s.name==="timestamp_add")return new $0(s);if(s.name==="timestamp_subtract")return new z0(s)}throw new Error(`Unknown Expr : ${s}`)}class kT{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===sr)return T.newValue({referenceValue:Xo(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:Oo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:Oo(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Jc(n)?T.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Oo(i.serializer,Re.fromTimestamp(ti(o)))};if(i.serverTimestampBehavior==="previous"){const B=pa(o);if(B)return B}return{nullValue:"NULL_VALUE"}})(e,n)):T.newValue(n):T.Mi()}}class xT{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class MT{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.di.map((r=>se(r).evaluate(e,t)));return n.some((r=>r.Bi()))?T.Oi():T.newValue({arrayValue:{values:n.map((r=>r.value))}})}}function et(s){return en(s)?Number(s.doubleValue):Number(s.integerValue)}function rn(s){return BigInt(s.integerValue)}const VT=BigInt("0x7fffffffffffffff"),GT=-BigInt("0x8000000000000000");class Si{constructor(e){this.expr=e}evaluate(e,t){te(this.expr.params.length>=2,24778);const n=se(this.expr.params[0]).evaluate(e,t),r=se(this.expr.params[1]).evaluate(e,t);let i=this.$i(n,r);for(const o of this.expr.params.slice(2)){const B=se(o).evaluate(e,t);i=this.$i(i,B)}return i}$i(e,t){if(e.Bi()||t.Bi())return T.Oi();if(e.Li()||t.Li())return T.Ni();const n=e.value,r=t.value;if(!en(n)&&!Zt(n)||!en(r)&&!Zt(r))return T.Oi();if(en(n)||en(r)){const i=this.Ui(n,r);return i?T.newValue(i):T.Oi()}if(Zt(n)&&Zt(r)){const i=this.ki(n,r);return i===void 0?T.Oi():typeof i=="number"?T.newValue({doubleValue:i}):i<GT||i>VT?T.Oi():T.newValue({integerValue:`${i}`})}return T.Oi()}}function gn(s,e){return Ue(s)!==Ue(e)?"TYPE_MISMATCH":ot(s)||ot(e)?"NOT_EQ":qt(s)&&qt(e)?"EQ":qt(s)||qt(e)?"NULL":or(s)&&or(e)?(function(n,r){var o,B,c;if(((o=n.values)==null?void 0:o.length)!==((B=r.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let l=0;l<(((c=n.values)==null?void 0:c.length)??0);l++){const h=n.values[l],C=r.values[l];switch(gn(h,C)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:oe(44609,{Qi:h,qi:C})}}return i?"NULL":"EQ"})(s.arrayValue,e.arrayValue):cc(s)&&cc(e)||Ds(s)&&Ds(e)?(function(n,r){const i=n.fields||{},o=r.fields||{};if(Rs(i)!==Rs(o))return"NOT_EQ";let B=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(gn(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"})(s.mapValue,e.mapValue):(function(n,r){return xt(n,r,{be:!1,ye:!0,we:!0})})(s,e)?"EQ":"NOT_EQ"}class UT extends Si{ki(e,t){return rn(e)+rn(t)}Ui(e,t){return{doubleValue:et(e)+et(t)}}}class HT extends Si{constructor(e){super(e),this.expr=e}ki(e,t){return rn(e)-rn(t)}Ui(e,t){return{doubleValue:et(e)-et(t)}}}class jT extends Si{constructor(e){super(e),this.expr=e}ki(e,t){return rn(e)*rn(t)}Ui(e,t){return{doubleValue:et(e)*et(t)}}}class JT extends Si{constructor(e){super(e),this.expr=e}ki(e,t){const n=rn(t);if(n!==BigInt(0))return rn(e)/n}Ui(e,t){const n=et(t);return n===0?{doubleValue:ni(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:et(e)/n}}}class KT extends Si{constructor(e){super(e),this.expr=e}ki(e,t){const n=rn(t);if(n!==BigInt(0))return rn(e)%n}Ui(e,t){const n=et(t);if(n!==0)return{doubleValue:et(e)%n}}}class qT{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const B=se(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return T.newValue($e);break;case"NULL":r=!0;break;default:n=!0}}return n?T.Oi():r?T.Ni():T.newValue(Dt)}}class ba{constructor(e){this.expr=e}evaluate(e,t){var r;te(this.expr.params.length===1,9634);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return T.newValue({booleanValue:!((r=n.value)!=null&&r.booleanValue)});case"NULL":return T.Ni();default:return T.Oi()}}}class $T{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const B=se(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return T.newValue(Dt);break;case"NULL":r=!0;break;default:n=!0}}return n?T.Oi():r?T.Ni():T.newValue($e)}}class pl{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const B=se(o).evaluate(e,t);switch(B.type){case"BOOLEAN":n=pl.xor(n,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":r=!0;break;default:return T.Oi()}}return r?T.Ni():T.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class Vp{constructor(e){this.expr=e}evaluate(e,t){var o,B;te(this.expr.params.length===2,55094);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return T.Oi()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.Oi()}if(n)return T.Ni();for(const c of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(qt(r.value)&&qt(c)?"EQ":gn(r.value,c)){case"EQ":return T.newValue(Dt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:oe(44608,{value:r.value,candidate:c})}return n?T.Ni():T.newValue($e)}}class zT{constructor(e){this.expr=e}evaluate(e,t){return new ba(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class WT{constructor(e){this.expr=e}evaluate(e,t){te(this.expr.params.length===1,23322);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return T.newValue($e);case"DOUBLE":return T.newValue({booleanValue:isNaN(et(n.value))});case"NULL":return T.Ni();default:return T.Oi()}}}class YT{constructor(e){this.expr=e}evaluate(e,t){return te(this.expr.params.length===1,50406),new ba(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class QT{constructor(e){this.expr=e}evaluate(e,t){switch(te(this.expr.params.length===1,23123),se(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(Dt);case"UNSET":case"ERROR":return T.Oi();default:return T.newValue($e)}}}class XT{constructor(e){this.expr=e}evaluate(e,t){return te(this.expr.params.length===1,23167),new ba(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class ZT{constructor(e){this.expr=e}evaluate(e,t){return te(this.expr.params.length===1,5228),se(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(Dt):T.newValue($e)}}class e0{constructor(e){this.expr=e}evaluate(e,t){switch(te(this.expr.params.length===1,6877),se(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.Oi();case"UNSET":return T.newValue($e);default:return T.newValue(Dt)}}}class t0{constructor(e){this.expr=e}evaluate(e,t){var r;te(this.expr.params.length===3,11706);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(r=n.value)!=null&&r.booleanValue?se(this.expr.params[1]).evaluate(e,t):se(this.expr.params[2]).evaluate(e,t);case"NULL":return se(this.expr.params[2]).evaluate(e,t);default:return T.Oi()}}}class n0{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>se(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||wt(i.value,r.value)>0?i:r}return r===void 0?T.Ni():r}}class s0{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>se(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||wt(i.value,r.value)<0?i:r}return r===void 0?T.Ni():r}}class Cr{constructor(e){this.expr=e}evaluate(e,t){te(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return T.Oi()}const r=se(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.Oi()}return this.Ki(n,r)}}class r0 extends Cr{constructor(e){super(e),this.expr=e}Ki(e,t){if(e.Li()&&t.Li())return T.newValue(Dt);if(e.Li()||t.Li()||ot(e.value)||ot(t.value)||Ue(e.value)!==Ue(t.value))return T.newValue($e);switch(gn(e.value,t.value)){case"EQ":return T.newValue(Dt);case"NOT_EQ":return T.newValue($e);case"NULL":return T.Ni();default:oe(44615,{left:e,right:t})}}}class i0 extends Cr{constructor(e){super(e),this.expr=e}Ki(e,t){switch(gn(e.value,t.value)){case"EQ":return T.newValue($e);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(Dt);case"NULL":return T.Ni();default:oe(44614,{left:e,right:t})}}}class o0 extends Cr{constructor(e){super(e),this.expr=e}Ki(e,t){return Ue(e.value)!==Ue(t.value)||ot(e.value)||ot(t.value)?T.newValue($e):T.newValue({booleanValue:wt(e.value,t.value)<0})}}class a0 extends Cr{constructor(e){super(e),this.expr=e}Ki(e,t){return Ue(e.value)!==Ue(t.value)||ot(e.value)||ot(t.value)?T.newValue($e):gn(e.value,t.value)==="EQ"?T.newValue(Dt):T.newValue({booleanValue:wt(e.value,t.value)<0})}}class B0 extends Cr{constructor(e){super(e),this.expr=e}Ki(e,t){return Ue(e.value)!==Ue(t.value)||ot(e.value)||ot(t.value)?T.newValue($e):T.newValue({booleanValue:wt(e.value,t.value)>0})}}class c0 extends Cr{constructor(e){super(e),this.expr=e}Ki(e,t){return Ue(e.value)!==Ue(t.value)||ot(e.value)||ot(t.value)?T.newValue($e):gn(e.value,t.value)==="EQ"?T.newValue(Dt):T.newValue({booleanValue:wt(e.value,t.value)>0})}}class l0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class u0{constructor(e){this.expr=e}evaluate(e,t){var r;te(this.expr.params.length===1,216);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.Ni();case"ARRAY":{const i=((r=n.value.arrayValue)==null?void 0:r.values)??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.Oi()}}}class h0{constructor(e){this.expr=e}evaluate(e,t){return te(this.expr.params.length===2,52884),new Vp(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class f0{constructor(e){this.expr=e}evaluate(e,t){var c,l,h,C;te(this.expr.params.length===2,1392);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.Oi()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.Oi()}if(n)return T.Ni();const o=((l=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:l.values)??[],B=((C=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of o){let _=!1;n=!1;for(const y of B){switch(qt(p)&&qt(y)?"EQ":gn(p,y)){case"EQ":_=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:oe(44613,{value:y,search:p})}if(_)break}if(!_)return T.newValue($e)}return T.newValue(Dt)}}class C0{constructor(e){this.expr=e}evaluate(e,t){var c,l,h,C;te(this.expr.params.length===2,2680);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.Oi()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.Oi()}if(n)return T.Ni();const o=((l=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:l.values)??[],B=((C=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of B)for(const _ of o)switch(qt(p)&&qt(_)?"EQ":gn(p,_)){case"EQ":return T.newValue(Dt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:oe(60403,{value:p,search:_})}return n?T.Ni():T.newValue($e)}}class d0{constructor(e){this.expr=e}evaluate(e,t){var r,i,o;te(this.expr.params.length===1,38605);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.Ni();case"ARRAY":return T.newValue({integerValue:`${((o=(i=(r=n.value)==null?void 0:r.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return T.Oi()}}}class p0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class g0{constructor(e){this.expr=e}evaluate(e,t){var r,i;te(this.expr.params.length===1,1508);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.Ni();case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;if(typeof o=="string"){const B=ft.fromBase64String(o).toUint8Array();return B.reverse(),T.newValue({bytesValue:ft.fromUint8Array(B).toBase64()})}return T.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),c=Array.from(B,(l=>l.segment)).reverse();return T.newValue({stringValue:c.join("")})}default:return T.Oi()}}}class m0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class E0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _0{constructor(e){this.expr=e}evaluate(e,t){te(this.expr.params.length===1,19400);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.Ni();case"STRING":{const r=(function(o){let B=0;for(let c=0;c<o.length;c++){const l=o.codePointAt(c);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){const h=o.codePointAt(c+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,c++):B+=1}else B+=1;else B+=1;else{if(!(l<=1114111))return;B+=1,c++}}return B})(n.value.stringValue);return r===void 0?T.Oi():T.newValue({integerValue:r})}default:return T.Oi()}}}class D0{constructor(e){this.expr=e}evaluate(e,t){var r,i;te(this.expr.params.length===1,8486);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;return typeof o=="string"?T.newValue({integerValue:ft.fromBase64String(o).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(c){let l=0;for(let h=0;h<c.length;h++){const C=c.codePointAt(h);if(C===void 0)return;if(C>=55296&&C<=57343){if(!(C<=56319))return;{const p=c.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;l+=4,h++}}else if(C<=127)l+=1;else if(C<=2047)l+=2;else if(C<=65535)l+=3;else{if(!(C<=1114111))return;l+=4,h++}}return l})((i=n.value)==null?void 0:i.stringValue);return o===void 0?T.Oi():T.newValue({integerValue:o})}case"NULL":return T.Ni();default:return T.Oi()}}}class dr{constructor(e){this.expr=e}evaluate(e,t){var o,B;te(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":n=!0;break;default:return T.Oi()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return T.Oi()}return n?T.Ni():this.Wi((o=r.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class w0 extends dr{Wi(e,t){try{const n=(function(o){let B="";for(let c=0;c<o.length;c++){const l=o.charAt(c);switch(l){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+l;break;default:B+=l}}return"^"+B+"$"})(t),r=Gc.compile(n);return T.newValue({booleanValue:r.matches(e)})}catch(n){return dn(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),T.Oi()}}}class y0 extends dr{Wi(e,t){try{const n=Gc.compile(t);return T.newValue({booleanValue:n.test(e)})}catch{return dn(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.Oi()}}}class I0 extends dr{Wi(e,t){try{return T.newValue({booleanValue:Gc.compile(t).matches(e)})}catch{return dn(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.Oi()}}}class T0 extends dr{Wi(e,t){return T.newValue({booleanValue:e.includes(t)})}}class A0 extends dr{Wi(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class b0 extends dr{Wi(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class R0{constructor(e){this.expr=e}evaluate(e,t){var r,i;te(this.expr.params.length===1,29079);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return T.Ni();default:return T.Oi()}}}class v0{constructor(e){this.expr=e}evaluate(e,t){var r,i;te(this.expr.params.length===1,60487);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return T.Ni();default:return T.Oi()}}}class O0{constructor(e){this.expr=e}evaluate(e,t){var r,i;te(this.expr.params.length===1,28544);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.trim()});case"NULL":return T.Ni();default:return T.Oi()}}}class S0{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>se(o).evaluate(e,t)));let r="",i=!1;for(const o of n)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return T.Oi()}return i?T.Ni():T.newValue({stringValue:r})}}class N0{constructor(e){this.expr=e}evaluate(e,t){var o,B,c,l;te(this.expr.params.length===2,4483);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return T.Mi();case"MAP":break;default:return T.Oi()}const r=se(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return T.Oi();const i=(l=(B=(o=n.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:l[(c=r.value)==null?void 0:c.stringValue];return i===void 0?T.Mi():T.newValue(i)}}class gl{constructor(e){this.expr=e}evaluate(e,t){var l,h;te(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":n=!0;break;default:return T.Oi()}const i=se(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return T.Oi()}if(n)return T.Ni();const o=lc(r.value),B=lc(i.value);if(o===void 0||B===void 0||((l=o.values)==null?void 0:l.length)!==((h=B.values)==null?void 0:h.length))return T.Oi();const c=this.Gi(o,B);return c===void 0||isNaN(c)?T.Oi():T.newValue({doubleValue:c})}}class P0 extends gl{Gi(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,B=0;for(let l=0;l<n.length;l++){if(!pn(n[l])||!pn(r[l]))return;const h=et(n[l]),C=et(r[l]);i+=h*C,o+=h*h,B+=C*C}const c=Math.sqrt(o)*Math.sqrt(B);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class F0 extends gl{Gi(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!pn(n[o])||!pn(r[o]))return;i+=et(n[o])*et(r[o])}return i}}class L0 extends gl{Gi(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!pn(n[o])||!pn(r[o]))return;const B=et(n[o]),c=et(r[o]);i+=Math.pow(B-c,2)}return Math.sqrt(i)}}class k0{constructor(e){this.expr=e}evaluate(e,t){var r;te(this.expr.params.length===1,39044);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=lc(n.value);return T.newValue({integerValue:((r=i==null?void 0:i.values)==null?void 0:r.length)??0})}case"NULL":return T.Ni();default:return T.Oi()}}}const di=BigInt(-62135596800),pi=BigInt(253402300799),na=BigInt(1e3),Jn=BigInt(1e6),x0=di*na,M0=pi*na+BigInt(999),V0=di*Jn,G0=pi*Jn+BigInt(999999);function ml(s){return s>=V0&&s<=G0}function Gp(s){return s>=di&&s<=pi}function gi(s,e){const t=BigInt(s);return!(t<di||t>pi)&&!(e<0||e>=1e9)&&(t!==di||e===0)&&!(t===pi&&e>999999999)}function Up(s,e){return e<0?{seconds:s-1,nanos:e+1e9}:{seconds:s,nanos:e}}function El(s){return BigInt(s.seconds)*Jn+BigInt(Math.trunc(s.nanoseconds/1e3))}class _l{constructor(e){this.expr=e}evaluate(e,t){te(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return T.Ni();default:return T.Oi()}}}class U0 extends _l{toTimestamp(e){if(!ml(e))return T.Oi();let t=Number(e/Jn),n=Number(e%Jn*BigInt(1e3));const r=Up(t,n);return t=r.seconds,n=r.nanos,gi(t,n)?T.newValue({timestampValue:{seconds:t,nanos:n}}):T.Oi()}}class H0 extends _l{toTimestamp(e){if(!(function(o){return o>=x0&&o<=M0})(e))return T.Oi();let t=Number(e/na),n=Number(e%na*BigInt(1e6));const r=Up(t,n);return t=r.seconds,n=r.nanos,gi(t,n)?T.newValue({timestampValue:{seconds:t,nanos:n}}):T.Oi()}}class j0 extends _l{toTimestamp(e){if(!Gp(e))return T.Oi();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class Dl{constructor(e){this.expr=e}evaluate(e,t){te(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=se(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return T.Ni();default:return T.Oi()}const r=el(n.value.timestampValue);return gi(r.seconds,r.nanoseconds)?this.ji(r):T.Oi()}}class J0 extends Dl{ji(e){const t=El(e);return ml(t)?T.newValue({integerValue:`${t.toString()}`}):T.Oi()}}class K0 extends Dl{ji(e){const t=El(e),n=t/BigInt(1e3),r=t%BigInt(1e3);return n>BigInt(0)||r===BigInt(0)?T.newValue({integerValue:n.toString()}):T.newValue({integerValue:(n-BigInt(1)).toString()})}}class q0 extends Dl{ji(e){const t=BigInt(e.seconds);return Gp(t)?T.newValue({integerValue:t.toString()}):T.Oi()}}class Hp{constructor(e){this.expr=e}evaluate(e,t){te(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const r=se(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return T.Oi()}const i=se(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function($){switch($){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return T.Oi();break;case"NULL":n=!0;break;default:return T.Oi()}const B=se(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":n=!0;break;default:return T.Oi()}if(n)return T.Ni();const c=BigInt(B.value.integerValue);let l;try{switch(o){case"microsecond":l=c;break;case"millisecond":l=c*BigInt(1e3);break;case"second":l=c*BigInt(1e6);break;case"minute":l=c*BigInt(6e7);break;case"hour":l=c*BigInt(36e8);break;case"day":l=c*BigInt(864e8);break;default:return T.Oi()}if(o!=="microsecond"&&c!==BigInt(0)&&l/c!==BigInt(this.zi(o)))return T.Oi()}catch(J){return dn(`Error during timestamp arithmetic: ${J}`),T.Oi()}const h=el(r.value.timestampValue);if(!gi(h.seconds,h.nanoseconds))return T.Oi();const C=El(h),p=this.Hi(C,l);if(!ml(p))return T.Oi();const _=Number(p/Jn),y=p%Jn,S=Number((y<0?y+Jn:y)*BigInt(1e3)),k=y<0?_-1:_;return gi(k,S)?T.newValue({timestampValue:{seconds:k,nanos:S}}):T.Oi()}zi(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class $0 extends Hp{Hi(e,t){return e+t}}class z0 extends Hp{Hi(e,t){return e-t}}function mi(s){if((s=Mp(s))instanceof Oi)return`fld(${s.fieldName})`;if(s instanceof fr)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ze?`ref(${t.path})`:t instanceof Rt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(s.value)})`;if(s instanceof F)return`fn(${s.name},[${s.params.map(mi).join(",")}])`;if(s.expressionType==="ListOfExpressions")return`list([${s.di.map(mi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(s,null,2)}`)}function W0(s){if(s instanceof Lp)return`${s._name}(${fo(s.fields)})`;if(s instanceof kp){let e=`${s._name}(${fo(s.accumulators)})`;return s.groups.size>0&&(e+=`grouping(${fo(s.groups)})`),e}if(s instanceof xp)return`${s._name}(${fo(s.groups)})`;if(s instanceof Ia)return`${s._name}(${s.pi})`;if(s instanceof Ta)return`${s._name}(${s.collectionId})`;if(s instanceof ll)return`${s._name}()`;if(s instanceof ul)return`${s._name}(${s.gi.sort()})`;if(s instanceof hl)return`${s._name}(${mi(s.condition)})`;if(s instanceof ta)return`${s._name}(${s.limit})`;if(s instanceof fl)return`${s._name}(${(function(t){return t.map((n=>`${mi(n.expr)}${n.direction}`)).join(",")})(s.orderings)})`;throw new Error(`Unrecognized stage ${s._name}`)}function fo(s){return`${Array.from(s.entries()).sort().map((([e,t])=>`${e}=${mi(t)}`)).join(",")}`}function Kn(s){return s.stages.map((e=>W0(e))).join("|")}function jp(s,e){return Kn(s)===Kn(e)}function Xt(s){return s instanceof gt}function Sf(s){return Xt(s)?Kn(s):Ro(s)}function Jp(s){return Xt(s)?Kn(s):(function(t){return`${op(ws(t))}|lt:${t.limitType}`})(s)}function Kp(s,e){return s instanceof gt&&e instanceof gt?jp(s,e):!(s instanceof gt&&!(e instanceof gt)||!(s instanceof gt)&&e instanceof gt)&&gI(s,e)}function qp(s){return uI(s)?Kn(s):op(s)}function $p(s,e){return s instanceof gt&&e instanceof gt?jp(s,e):!(s instanceof gt&&!(e instanceof gt)||!(s instanceof gt)&&e instanceof gt)&&ap(s,e)}/**
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
 */class Y0{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Wy(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Hr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Hr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=up();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(r.key)?null:B;const c=Qd(o,B);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Re.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Xe())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,((t,n)=>uf(t,n)))&&nr(this.baseMutations,e.baseMutations,((t,n)=>uf(t,n)))}}class wl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){te(e.mutations.length===n.length,58842,{Ji:e.mutations.length,Yi:n.length});let r=(function(){return wI})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new wl(e,t,n,r)}}/**
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
 */const zp="";function Q0(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Nf(e)),e=X0(s.get(t),e);return Nf(e)}function X0(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case zp:t+="";break;default:t+=i}}return t}function Nf(s){return s+zp+""}/**
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
 */class Z0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eA{constructor(e){this.Xi=e}}function tA(s){const e=PI({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
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
 */class nA{constructor(){this.d_=new sA}addToCollectionParentIndex(e,t){return this.d_.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.d_.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Yn.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class sA{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ze(ve.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ze(ve.comparator)).toArray()}}/**
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
 */class Zn{constructor(e){this.K_=e}next(){return this.K_+=2,this.K_}static W_(){return new Zn(0)}static G_(){return new Zn(-1)}}// Copyright 2024 Google LLC* @license
function rA(s,e){var n;let t=e;for(const r of s.stages)t=iA({serializer:s.serializer,serverTimestampBehavior:(n=s.listenOptions)==null?void 0:n.serverTimestampBehavior},r,t);return t}function yl(s,e){return rA(s,[e]).length>0}function iA(s,e,t){if(e instanceof Ia)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.pi))})(0,e,t);if(e instanceof hl)return(function(r,i,o){return o.filter((B=>{const c=qr(se(i.condition).evaluate(r,B));return c!==void 0&&xt(c,Dt)}))})(s,e,t);if(e instanceof Ta)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof ll)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()))})(0,0,t);if(e instanceof ul)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()&&i.yi.has(B.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof ta)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof fl)return(function(r,i,o){const B=i.orderings.map((c=>({eo:se(c.expr),direction:c.direction})));return[...o].sort(((c,l)=>{for(const{eo:h,direction:C}of B){const p=qr(h.evaluate(r,c)),_=qr(h.evaluate(r,l)),y=wt(p??rr,_??rr);if(y!==0)return C==="ascending"?y:-y}return 0}))})(s,e,t);throw new Error(`Unknown stage: ${e._name}`)}function oA(s){const e=(function(n){for(let r=n.stages.length-1;r>=0;r--){const i=n.stages[r];if(i instanceof fl)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(s);return(t,n)=>{for(const r of e){const i=qr(se(r.expr).evaluate({serializer:s.serializer},t)),o=qr(se(r.expr).evaluate({serializer:s.serializer},n)),B=wt(i||rr,o||rr);if(B!==0)return r.direction==="ascending"?B:-B}return 0}}/**
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
 */class aA{constructor(){this.changes=new Ls((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cA{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&Hr(n.mutation,r,Kt.empty(),Ee.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,Xe()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=Xe()){const r=kn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=Pr();return i.forEach(((B,c)=>{o=o.insert(B,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=kn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Xe())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,B)=>{t.set(o,B)}))}))}computeViews(e,t,n,r){let i=Jr();const o=Kr(),B=(function(){return Kr()})();return t.forEach(((c,l)=>{const h=n.get(l.key);r.has(l.key)&&(h===void 0||h.mutation instanceof Fs)?i=i.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Hr(h.mutation,l,h.mutation.getFieldMask(),Ee.now())):o.set(l.key,Kt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((l,h)=>o.set(l,h))),t.forEach(((l,h)=>B.set(l,new BA(h,o.get(l)??null)))),B)))}recalculateAndSaveOverlays(e,t){const n=Kr();let r=new _t(((o,B)=>o-B)),i=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const B of o)B.keys().forEach((c=>{const l=t.get(c);if(l===null)return;let h=n.get(c)||Kt.empty();h=B.applyToLocalView(l,h),n.set(c,h);const C=(r.get(B.batchId)||Xe()).add(c);r=r.insert(B.batchId,C)}))})).next((()=>{const o=[],B=r.getReverseIterator();for(;B.hasNext();){const c=B.getNext(),l=c.key,h=c.value,C=up();h.forEach((p=>{if(!i.has(p)){const _=Qd(t.get(p),n.get(p));_!==null&&C.set(p,_),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,C))}return x.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return Xt(t)?this.getDocumentsMatchingPipeline(e,t,n,r):CI(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):x.resolve(kn());let B=li,c=i;return o.next((l=>x.forEach(l,((h,C)=>(B<C.largestBatchId&&(B=C.largestBatchId),i.get(h)?x.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{c=c.insert(h,p)}))))).next((()=>this.populateOverlays(e,l,i))).next((()=>this.computeViews(e,c,l,Xe()))).next((h=>({batchId:B,changes:lp(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((n=>{let r=Pr();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=Pr();return this.indexManager.getCollectionParents(e,i).next((B=>x.forEach(B,(c=>{const l=(function(C,p){return new _a(p,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,n,r).next((h=>{h.forEach(((C,p)=>{o=o.insert(C,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>Zc(t,B)))))}getDocumentsMatchingPipeline(e,t,n,r){if(jn(t)==="collection_group"){const i=dl(t);let o=Pr();return this.indexManager.getCollectionParents(e,i).next((B=>x.forEach(B,(c=>{const l=(function(C,p){const _=C.stages.map((y=>y instanceof Ta?new Ia(p.canonicalString(),{}):y));return new gt(C.serializer,_)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,l,n,r).next((h=>{h.forEach(((C,p)=>{o=o.insert(C,p)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,jn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r);case"documents":let B=Xe();for(const c of dc(t))B=B.add(ae.fromPath(c));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new z("invalid-argument",`Invalid pipeline source to execute offline: ${Kn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>yl(t,B)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,Vt.newInvalidDocument(B)))}));let r=Pr();return t.forEach(((i,o)=>{const B=e.get(i);B!==void 0&&Hr(B.mutation,o,Kt.empty(),Ee.now()),n(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,n){switch(jn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ve.fromString(Aa(t)),n);case"collection_group":throw new z("invalid-argument",`Unexpected collection group pipeline: ${Kn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,dc(t).map((r=>ae.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new z("invalid-argument",`Failed to get overlays for pipeline: ${Kn(t)}`)}}}/**
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
 */class lA{constructor(e){this.serializer=e,this.co=new Map,this.lo=new Map}getBundleMetadata(e,t){return x.resolve(this.co.get(t))}saveBundleMetadata(e,t){return this.co.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Zs(r.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.lo.get(t))}saveNamedQuery(e,t){return this.lo.set(t.name,(function(r){return{name:r.name,query:tA(r.bundledQuery),readTime:Zs(r.readTime)}})(t)),x.resolve()}}/**
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
 */class uA{constructor(){this.overlays=new _t(ae.comparator),this.Eo=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=kn();return x.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}getAllOverlays(e,t){const n=kn();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&n.set(r,i)})),x.resolve(n)}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.Es(e,t,i)})),x.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Eo.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Eo.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const r=kn(),i=t.length+1,o=new ae(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const c=B.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>n&&r.set(c.getKey(),c)}return x.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _t(((l,h)=>l-h));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>n){let h=i.get(l.largestBatchId);h===null&&(h=kn(),i=i.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const B=kn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,h)=>B.set(l,h))),!(B.size()>=r)););return x.resolve(B)}Es(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Eo.get(r.largestBatchId).delete(n.key);this.Eo.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Z0(t,n));let i=this.Eo.get(t);i===void 0&&(i=Xe(),this.Eo.set(t,i)),this.Eo.set(t,i.add(n.key))}}/**
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
 */class hA{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class Il{constructor(){this.ho=new ze(Je.To),this.Po=new ze(Je.Io)}isEmpty(){return this.ho.isEmpty()}addReference(e,t){const n=new Je(e,t);this.ho=this.ho.add(n),this.Po=this.Po.add(n)}Ro(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Ao(new Je(e,t))}Vo(e,t){e.forEach((n=>this.removeReference(n,t)))}fo(e){const t=new ae(new ve([])),n=new Je(t,e),r=new Je(t,e+1),i=[];return this.Po.forEachInRange([n,r],(o=>{this.Ao(o),i.push(o.key)})),i}mo(){this.ho.forEach((e=>this.Ao(e)))}Ao(e){this.ho=this.ho.delete(e),this.Po=this.Po.delete(e)}po(e){const t=new ae(new ve([])),n=new Je(t,e),r=new Je(t,e+1);let i=Xe();return this.Po.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Je(e,0),n=this.ho.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Je{constructor(e,t){this.key=e,this.yo=t}static To(e,t){return ae.comparator(e.key,t.key)||de(e.yo,t.yo)}static Io(e,t){return de(e.yo,t.yo)||ae.comparator(e.key,t.key)}}/**
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
 */class fA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.rs=1,this.wo=new ze(Je.To)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.rs;this.rs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Y0(i,t,n,r);this.mutationQueue.push(o);for(const B of r)this.wo=this.wo.add(new Je(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.bo(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.So(n),i=r<0?0:r;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Kc:this.rs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Je(t,0),r=new Je(t,Number.POSITIVE_INFINITY),i=[];return this.wo.forEachInRange([n,r],(o=>{const B=this.bo(o.yo);i.push(B)})),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ze(de);return t.forEach((r=>{const i=new Je(r,0),o=new Je(r,Number.POSITIVE_INFINITY);this.wo.forEachInRange([i,o],(B=>{n=n.add(B.yo)}))})),x.resolve(this.xo(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ae.isDocumentKey(i)||(i=i.child(""));const o=new Je(new ae(i),0);let B=new ze(de);return this.wo.forEachWhile((c=>{const l=c.key.path;return!!n.isPrefixOf(l)&&(l.length===r&&(B=B.add(c.yo)),!0)}),o),x.resolve(this.xo(B))}xo(e){const t=[];return e.forEach((n=>{const r=this.bo(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){te(this.vo(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.wo;return x.forEach(t.mutations,(r=>{const i=new Je(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wo=n}))}us(e){}containsKey(e,t){const n=new Je(t,0),r=this.wo.firstAfterOrEqual(n);return x.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}vo(e,t){return this.So(e)}So(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}bo(e){const t=this.So(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class CA{constructor(e){this.Do=e,this.docs=(function(){return new _t(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Do(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():Vt.newInvalidDocument(t))}getEntries(e,t){let n=Jr();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():Vt.newInvalidDocument(r))})),x.resolve(n)}getAllEntries(e){let t=Jr();return this.docs.forEach(((n,r)=>{t=t.insert(n,r.document)})),x.resolve(t)}getDocumentsMatchingQuery(e,t,n,r){let i,o;Xt(t)?(i=ve.fromString(Aa(t)),o=h=>yl(t,h)):(i=t.path,o=h=>Zc(t,h));let B=Jr();const c=new ae(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:C}}=l.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||cI(BI(C),n)<=0||(r.has(C.key)||o(C))&&(B=B.insert(C.key,C.mutableCopy()))}return x.resolve(B)}getAllFromCollectionGroup(e,t,n,r){oe(9500)}Co(e,t){return x.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new dA(this)}getSize(e){return x.resolve(this.size)}}class dA extends aA{constructor(e){super(),this.ao=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ao.addEntry(e,r)):this.ao.removeEntry(n)})),x.waitFor(t)}getFromCache(e,t){return this.ao.getEntry(e,t)}getAllFromCache(e,t){return this.ao.getEntries(e,t)}}/**
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
 */class pA{constructor(e){this.persistence=e,this.Fo=new Ls((t=>qp(t)),$p),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.Oo=0,this.Mo=new Il,this.targetCount=0,this.No=Zn.W_()}forEachTarget(e,t){return this.Fo.forEach(((n,r)=>t(r))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Oo)}allocateTargetId(e){return this.highestTargetId=this.No.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Oo&&(this.Oo=t),x.resolve()}H_(e){this.Fo.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.No=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.Oo&&(this.Oo=e.sequenceNumber)}addTargetData(e,t){return this.H_(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.H_(t),x.resolve()}removeTargetData(e,t){return this.Fo.delete(t.target),this.Mo.fo(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Fo.forEach(((o,B)=>{B.sequenceNumber<=t&&n.get(B.targetId)===null&&(this.Fo.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),r++)})),x.waitFor(i).next((()=>r))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fo.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this.Mo.Ro(t,n),x.resolve()}removeMatchingKeys(e,t,n){this.Mo.Vo(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mo.fo(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mo.po(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this.Mo.containsKey(t))}}/**
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
 */class Wp{constructor(e,t){this.Bo={},this.overlays={},this.Lo=new sl(0),this.$o=!1,this.$o=!0,this.Uo=new hA,this.referenceDelegate=e(this),this.ko=new pA(this),this.indexManager=new nA,this.remoteDocumentCache=(function(r){return new CA(r)})((n=>this.referenceDelegate.Qo(n))),this.serializer=new eA(t),this.qo=new lA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$o=!1,Promise.resolve()}get started(){return this.$o}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Bo[e.toKey()];return n||(n=new fA(t,this.referenceDelegate),this.Bo[e.toKey()]=n),n}getGlobalsCache(){return this.Uo}getTargetCache(){return this.ko}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qo}runTransaction(e,t,n){W("MemoryPersistence","Starting transaction:",e);const r=new gA(this.Lo.next());return this.referenceDelegate.Ko(),n(r).next((i=>this.referenceDelegate.Wo(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Go(e,t){return x.or(Object.values(this.Bo).map((n=>()=>n.containsKey(e,t))))}}class gA extends nT{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.jo=new Il,this.zo=null}static Ho(e){return new Tl(e)}get Jo(){if(this.zo)return this.zo;throw oe(60996)}addReference(e,t,n){return this.jo.addReference(n,t),this.Jo.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.jo.removeReference(n,t),this.Jo.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.Jo.add(t.toString()),x.resolve()}removeTarget(e,t){this.jo.fo(t.targetId).forEach((r=>this.Jo.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.Jo.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ko(){this.zo=new Set}Wo(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Jo,(n=>{const r=ae.fromPath(n);return this.Yo(e,r).next((i=>{i||t.removeEntry(r,Re.min())}))})).next((()=>(this.zo=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yo(e,t).next((n=>{n?this.Jo.delete(t.toString()):this.Jo.add(t.toString())}))}Qo(e){return 0}Yo(e,t){return x.or([()=>x.resolve(this.jo.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Go(e,t)])}}class sa{constructor(e,t){this.persistence=e,this.Zo=new Ls((n=>Q0(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=BT(this,t)}static Ho(e,t){return new sa(e,t)}Ko(){}Wo(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Pi(e){const t=this.Y_(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}Y_(e){let t=0;return this.Ii(e,(n=>{t++})).next((()=>t))}Ii(e,t){return x.forEach(this.Zo,((n,r)=>this.X_(e,n,r).next((i=>i?x.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Co(e,(o=>this.X_(e,o,t).next((B=>{B||(n++,i.removeEntry(o,Re.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.Zo.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.Zo.set(t,e.currentSequenceNumber),x.resolve()}Qo(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$o(e.data.value)),t}X_(e,t,n){return x.or([()=>this.persistence.Go(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.Zo.get(t);return x.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Al{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$a=n,this.Ua=r}static ka(e,t){let n=Xe(),r=Xe();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Al(e,t.fromCache,n,r)}}/**
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
 */function mA(s,e){return ae.comparator(s.key,e.key)}/**
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
 */class EA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _A{constructor(){this.Qa=!1,this.qa=!1,this.Ka=100,this.Wa=(function(){return Wm()?8:sT(at())>0?6:4})()}initialize(e,t){this.Ga=e,this.indexManager=t,this.Qa=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ja(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.za(e,t,r,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new EA;return this.Ha(e,t,o).next((B=>{if(i.result=B,this.qa)return this.Ja(e,t,o,B.size)}))})).next((()=>i.result))}Ja(e,t,n,r){return Xt(t)?x.resolve():n.documentReadCount<this.Ka?(Hs()<=le.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ka,"documents"),x.resolve()):(Hs()<=le.DEBUG&&W("QueryEngine","Query:",Ro(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wa*r?(Hs()<=le.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ws(t))):x.resolve())}ja(e,t){if(Xt(t))return x.resolve(null);let n=t;if(gf(n))return x.resolve(null);let r=ws(n);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=hc(n,null,"F"),r=ws(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const B=Xe(...o);return this.Ga.getDocuments(e,B).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.Ya(n,c);return this.Za(n,h,B,l.readTime)?this.ja(e,hc(n,null,"F")):this.Xa(e,h,n,l)}))))})))))}za(e,t,n,r){return(Xt(t)?(function(o){for(const B of o.stages){if(B instanceof ta||B instanceof Of)return!1;if(B instanceof hl){if(B.condition instanceof Sp&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof Oi&&B.condition._expr.params[0].fieldName===sr)continue;return!1}}return!0})(t):gf(t))||r.isEqual(Re.min())?x.resolve(null):this.Ga.getDocuments(e,n).next((i=>{const o=this.Ya(t,i);return this.Za(t,o,n,r)?x.resolve(null):(Hs()<=le.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Sf(t)),this.Xa(e,o,t,aI(r,li)).next((B=>B)))}))}Ya(e,t){let n,r;return Xt(e)?(n=new ze(mA),r=i=>yl(e,i)):(n=new ze(Bp(e)),r=i=>Zc(e,i)),t.forEach(((i,o)=>{r(o)&&(n=n.add(o))})),n}Za(e,t,n,r){if(Xt(e))return(function(B){return B.stages.some((c=>c instanceof ta||c instanceof Of))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ha(e,t,n){return Hs()<=le.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Sf(t)),this.Ga.getDocumentsMatchingQuery(e,t,Yn.min(),n)}Xa(e,t,n,r){return this.Ga.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const DA="LocalStore";class wA{constructor(e,t,n,r){this.persistence=e,this.eu=t,this.serializer=r,this.tu=new _t(de),this.nu=new Ls((i=>qp(i)),$p),this.ru=new Map,this.iu=e.getRemoteDocumentCache(),this.ko=e.getTargetCache(),this.qo=e.getBundleCache(),this.su(n)}su(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cA(this.iu,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.iu.setIndexManager(this.indexManager),this.eu.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.tu)))}}function yA(s,e,t,n){return new wA(s,e,t,n)}async function Yp(s,e){const t=Ie(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.su(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],B=[];let c=Xe();for(const l of r){o.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of i){B.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next((l=>({_u:l,removedBatchIds:o,addedBatchIds:B})))}))}))}function IA(s,e){const t=Ie(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.iu.newChangeBuffer({trackRemovals:!0});return(function(B,c,l,h){const C=l.batch,p=C.keys();let _=x.resolve();return p.forEach((y=>{_=_.next((()=>h.getEntry(c,y))).next((S=>{const k=l.docVersions.get(y);te(k!==null,48541),S.version.compareTo(k)<0&&(C.applyToRemoteDocument(S,l),S.isValidDocument()&&(S.setReadTime(l.commitVersion),h.addEntry(S)))}))})),_.next((()=>B.mutationQueue.removeMutationBatch(c,C)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(B){let c=Xe();for(let l=0;l<B.mutationResults.length;++l)B.mutationResults[l].transformResults.length>0&&(c=c.add(B.batch.mutations[l].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function TA(s){const e=Ie(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ko.getLastRemoteSnapshotVersion(t)))}function AA(s,e){const t=Ie(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Kc),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}/**
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
 */class bA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Pu=0,this.Iu=null,this.Ru=!0}Au(){this.Pu===0&&(this.Vu("Unknown"),this.Iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Iu=null,this.du("Backend didn't respond within 10 seconds."),this.Vu("Offline"),Promise.resolve()))))}fu(e){this.state==="Online"?this.Vu("Unknown"):(this.Pu++,this.Pu>=1&&(this.mu(),this.du(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Vu("Offline")))}set(e){this.mu(),this.Pu=0,e==="Online"&&(this.Ru=!1),this.Vu(e)}Vu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}du(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ru?(bs(t),this.Ru=!1):W("OnlineStateTracker",t)}mu(){this.Iu!==null&&(this.Iu.cancel(),this.Iu=null)}}/**
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
 */const Ni="RemoteStore";class RA{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.pu=[],this.gu=new Map,this.yu=new Map,this.wu=new Map,this.bu=new Zn(1e3),this.Su=new Zn(1001),this.xu=new Set,this.vu=[],this.Du=i,this.Du.tn((o=>{n.enqueueAndForget((async()=>{Fi(this)&&(W(Ni,"Restarting streams for network reachability change."),await(async function(c){const l=Ie(c);l.xu.add(4),await Pi(l),l.Cu.set("Unknown"),l.xu.delete(4),await Ra(l)})(this))}))})),this.Cu=new bA(n,r)}}async function Ra(s){if(Fi(s))for(const e of s.vu)await e(!0)}async function Pi(s){for(const e of s.vu)await e(!1)}function Fi(s){return Ie(s).xu.size===0}async function Qp(s,e,t){if(!vi(e))throw e;s.xu.add(1),await Pi(s),s.Cu.set("Offline"),t||(t=()=>TA(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{W(Ni,"Retrying IndexedDB access"),await t(),s.xu.delete(1),await Ra(s)}))}function Xp(s,e){return e().catch((t=>Qp(s,t,e)))}async function va(s){const e=Ie(s),t=es(e);let n=e.pu.length>0?e.pu[e.pu.length-1].batchId:Kc;for(;vA(e);)try{const r=await AA(e.localStore,n);if(r===null){e.pu.length===0&&t.Er();break}n=r.batchId,OA(e,r)}catch(r){await Qp(e,r)}Zp(e)&&eg(e)}function vA(s){return Fi(s)&&s.pu.length<10}function OA(s,e){s.pu.push(e);const t=es(s);t.ur()&&t.br&&t.Sr(e.mutations)}function Zp(s){return Fi(s)&&!es(s).ar()&&s.pu.length>0}function eg(s){es(s).start()}async function SA(s){es(s).Cr()}async function NA(s){const e=es(s);for(const t of s.pu)e.Sr(t.mutations)}async function PA(s,e,t){const n=s.pu.shift(),r=wl.from(n,e,t);await Xp(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await va(s)}async function FA(s,e){e&&es(s).br&&await(async function(n,r){if((function(o){return EI(o)&&o!==G.ABORTED})(r.code)){const i=n.pu.shift();es(n).lr(),await Xp(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await va(n)}})(s,e),Zp(s)&&eg(s)}async function Pf(s,e){const t=Ie(s);t.asyncQueue.verifyOperationInProgress(),W(Ni,"RemoteStore received new credentials");const n=Fi(t);t.xu.add(3),await Pi(t),n&&t.Cu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.xu.delete(3),await Ra(t)}async function LA(s,e){const t=Ie(s);e?(t.xu.delete(2),await Ra(t)):e||(t.xu.add(2),await Pi(t),t.Cu.set("Unknown"))}function es(s){return s.Mu||(s.Mu=(function(t,n,r){const i=Ie(t);return i.Or(),new WI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{pn:()=>Promise.resolve(),yn:SA.bind(null,s),bn:FA.bind(null,s),vr:NA.bind(null,s),Dr:PA.bind(null,s)}),s.vu.push((async e=>{e?(s.Mu.lr(),await va(s)):(await s.Mu.stop(),s.pu.length>0&&(W(Ni,`Stopping write stream with ${s.pu.length} pending writes`),s.pu=[]))}))),s.Mu}/**
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
 */class bl{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,B=new bl(e,t,o,r,i);return B.start(n),B}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tg(s,e){if(bs("AsyncQueue",`${e}: ${s}`),vi(s))return new z(G.UNAVAILABLE,`${e}: ${s}`);throw s}class Ff{constructor(){this.activeTargetIds=TI()}nc(e){this.activeTargetIds=this.activeTargetIds.add(e)}rc(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tc(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kA{constructor(){this.kc=new Ff,this.Qc={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.kc.nc(e),this.Qc[e]||"not-current"}updateQueryState(e,t,n){this.Qc[e]=t}removeLocalQueryTarget(e){this.kc.rc(e)}isLocalQueryTarget(e){return this.kc.activeTargetIds.has(e)}clearQueryState(e){delete this.Qc[e]}getAllActiveQueryTargets(){return this.kc.activeTargetIds}isActiveQueryTarget(e){return this.kc.activeTargetIds.has(e)}start(){return this.kc=new Ff,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function AB(){return typeof document<"u"?document:null}class xA{constructor(){this.queries=Lf(),this.onlineState="Unknown",this.Jc=new Set}terminate(){(function(t,n){const r=Ie(t),i=r.queries;r.queries=Lf(),i.forEach(((o,B)=>{for(const c of B.jc)c.onError(n)}))})(this,new z(G.ABORTED,"Firestore shutting down"))}}function Lf(){return new Ls((s=>Jp(s)),Kp)}function MA(s){s.Jc.forEach((e=>{e.next()}))}var kf;(function(s){s.Default="default",s.Cache="cache"})(kf||(kf={}));const VA="SyncEngine";class GA{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Cl={},this.Fl=new Ls((B=>Jp(B)),Kp),this.Ol=new Map,this.Ml=new Set,this.Nl=new _t(ae.comparator),this.Bl=new Map,this.Ll=new Il,this.$l={},this.Ul=new Map,this.kl=Zn.G_(),this.onlineState="Unknown",this.Ql=void 0}get isPrimaryClient(){return this.Ql===!0}}async function UA(s,e,t){const n=KA(s);try{const r=await(function(o,B){const c=Ie(o),l=Ee.now(),h=B.reduce(((_,y)=>_.add(y.key)),Xe());let C,p;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let y=Jr(),S=Xe();return c.iu.getEntries(_,h).next((k=>{y=k,y.forEach(((J,$)=>{$.isValidDocument()||(S=S.add(J))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,y))).next((k=>{C=k;const J=[];for(const $ of B){const re=Yy($,C.get($.key).overlayedDocument);re!=null&&J.push(new Fs($.key,re,qd(re.value.mapValue),un.exists(!0)))}return c.mutationQueue.addMutationBatch(_,l,J,B)})).next((k=>{p=k;const J=k.applyToLocalDocumentSet(C,S);return c.documentOverlayCache.saveOverlays(_,k.batchId,J)}))})).then((()=>({batchId:p.batchId,changes:lp(C)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,B,c){let l=o.$l[o.currentUser.toKey()];l||(l=new _t(de)),l=l.insert(B,c),o.$l[o.currentUser.toKey()]=l})(n,r.batchId,t),await Oa(n,r.changes),await va(n.remoteStore)}catch(r){const i=tg(r,"Failed to persist write");t.reject(i)}}function xf(s,e,t){const n=Ie(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Fl.forEach(((i,o)=>{const B=o.view.Yc(e);B.snapshot&&r.push(B.snapshot)})),(function(o,B){const c=Ie(o);c.onlineState=B;let l=!1;c.queries.forEach(((h,C)=>{for(const p of C.jc)p.Yc(B)&&(l=!0)})),l&&MA(c)})(n.eventManager,e),r.length&&n.Cl.gr(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function HA(s,e){const t=Ie(s),n=e.batch.batchId;try{const r=await IA(t.localStore,e);sg(t,n,null),ng(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Oa(t,r)}catch(r){await rl(r)}}async function jA(s,e,t){const n=Ie(s);try{const r=await(function(o,B){const c=Ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let h;return c.mutationQueue.lookupMutationBatch(l,B).next((C=>(te(C!==null,37113),h=C.keys(),c.mutationQueue.removeMutationBatch(l,C)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,h,B))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h))).next((()=>c.localDocuments.getDocuments(l,h)))}))})(n.localStore,e);sg(n,e,t),ng(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Oa(n,r)}catch(r){await rl(r)}}function ng(s,e){(s.Ul.get(e)||[]).forEach((t=>{t.resolve()})),s.Ul.delete(e)}function sg(s,e,t){const n=Ie(s);let r=n.$l[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.$l[n.currentUser.toKey()]=r}}async function Oa(s,e,t){const n=Ie(s),r=[],i=[],o=[];n.Fl.isEmpty()||(n.Fl.forEach(((B,c)=>{o.push(n.ql(c,e,t).then((l=>{var h;if((l||t)&&n.isPrimaryClient){const C=l?!l.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,C?"current":"not-current")}if(l){r.push(l);const C=Al.ka(c.targetId,l);i.push(C)}})))})),await Promise.all(o),n.Cl.gr(r),await(async function(c,l){const h=Ie(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>x.forEach(l,(p=>x.forEach(p.$a,(_=>h.persistence.referenceDelegate.addReference(C,p.targetId,_))).next((()=>x.forEach(p.Ua,(_=>h.persistence.referenceDelegate.removeReference(C,p.targetId,_)))))))))}catch(C){if(!vi(C))throw C;W(DA,"Failed to update sequence numbers: "+C)}for(const C of l){const p=C.targetId;if(!C.fromCache){const _=h.tu.get(p),y=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(y);h.tu=h.tu.insert(p,S)}}})(n.localStore,i))}async function JA(s,e){const t=Ie(s);if(!t.currentUser.isEqual(e)){W(VA,"User change. New user:",e.toKey());const n=await Yp(t.localStore,e);t.currentUser=e,(function(i,o){i.Ul.forEach((B=>{B.forEach((c=>{c.reject(new z(G.CANCELLED,o))}))})),i.Ul.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Oa(t,n._u)}}function KA(s){const e=Ie(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jA.bind(null,e),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.jl(e),this.persistence=this.zl(e),await this.persistence.start(),this.localStore=this.Hl(e),this.gcScheduler=this.Jl(e,this.localStore),this.indexBackfillerScheduler=this.Yl(e,this.localStore)}Jl(e,t){return null}Yl(e,t){return null}Hl(e){return yA(this.persistence,new _A,e.initialUser,this.serializer)}zl(e){return new Wp(Tl.Ho,this.serializer)}jl(e){return new kA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class qA extends ra{constructor(e){super(),this.cacheSizeBytes=e}Jl(e,t){te(this.persistence.referenceDelegate instanceof sa,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new oT(n,e.asyncQueue,t)}zl(e){const t=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new Wp((n=>sa.Ho(n,t)),this.serializer)}}class pc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>xf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=JA.bind(null,this.syncEngine),await LA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new xA})()}createDatastore(e){const t=Da(e.databaseInfo.databaseId),n=$I(e.databaseInfo);return XI(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,o,B){return new RA(n,r,i,o,B)})(this.localStore,this.datastore,e.asyncQueue,(t=>xf(this.syncEngine,t,0)),(function(){return wf.cn()?new wf:new jI})())}createSyncEngine(e,t){return(function(r,i,o,B,c,l,h){const C=new GA(r,i,o,B,c,l);return h&&(C.Ql=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=Ie(r);W(Ni,"RemoteStore shutting down."),i.xu.add(5),await Pi(i),i.Du.shutdown(),i.Cu.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}pc.provider={build:()=>new pc};/**
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
 */const ts="FirestoreClient";class $A{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=Hc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{W(ts,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(W(ts,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=tg(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function bB(s,e){s.asyncQueue.verifyOperationInProgress(),W(ts,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await Yp(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function Mf(s,e){s.asyncQueue.verifyOperationInProgress();const t=await zA(s);W(ts,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>Pf(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>Pf(e.remoteStore,r))),s._onlineComponents=e}async function zA(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){W(ts,"Using user provided OfflineComponentProvider");try{await bB(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===G.FAILED_PRECONDITION||r.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;dn("Error using user provided cache. Falling back to memory cache: "+t),await bB(s,new ra)}}else W(ts,"Using default OfflineComponentProvider"),await bB(s,new qA(void 0));return s._offlineComponents}async function WA(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(W(ts,"Using user provided OnlineComponentProvider"),await Mf(s,s._uninitializedComponentsProvider._online)):(W(ts,"Using default OnlineComponentProvider"),await Mf(s,new pc))),s._onlineComponents}function YA(s){return WA(s).then((e=>e.syncEngine))}function QA(s,e){const t=new ys;return s.asyncQueue.enqueueAndForget((async()=>UA(await YA(s),e,t))),t.promise}/**
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
 */let rg=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(wa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},XA=class extends rg{data(){return super.data()}};/**
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
 */function ZA(s,e,t){let n;return n=s?s.toFirestore(e):e,n}/**
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
 */const Vf="AsyncQueue";class Gf{constructor(e=Promise.resolve()){this._E=[],this.oE=!1,this.aE=[],this.uE=null,this.cE=!1,this.lE=!1,this.EE=[],this._r=new Dp(this,"async_queue_retry"),this.hE=()=>{const n=AB();n&&W(Vf,"Visibility state changed to "+n.visibilityState),this._r.Xn()},this.TE=e;const t=AB();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hE)}get isShuttingDown(){return this.oE}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.PE(),this.IE(e)}enterRestrictedMode(e){if(!this.oE){this.oE=!0,this.lE=e||!1;const t=AB();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hE)}}enqueue(e){if(this.PE(),this.oE)return new Promise((()=>{}));const t=new ys;return this.IE((()=>this.oE&&this.lE?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this._E.push(e),this.RE())))}async RE(){if(this._E.length!==0){try{await this._E[0](),this._E.shift(),this._r.reset()}catch(e){if(!vi(e))throw e;W(Vf,"Operation failed with retryable error: "+e)}this._E.length>0&&this._r.Yn((()=>this.RE()))}}IE(e){const t=this.TE.then((()=>(this.cE=!0,e().catch((n=>{throw this.uE=n,this.cE=!1,bs("INTERNAL UNHANDLED ERROR: ",Uf(n)),n})).then((n=>(this.cE=!1,n))))));return this.TE=t,t}enqueueAfterDelay(e,t,n){this.PE(),this.EE.indexOf(e)>-1&&(t=0);const r=bl.createAndSchedule(this,e,t,n,(i=>this.AE(i)));return this.aE.push(r),r}PE(){this.uE&&oe(47125,{VE:Uf(this.uE)})}verifyOperationInProgress(){}async dE(){let e;do e=this.TE,await e;while(e!==this.TE)}fE(e){for(const t of this.aE)if(t.timerId===e)return!0;return!1}mE(e){return this.dE().then((()=>{this.aE.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.aE)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.dE()}))}pE(e){this.EE.push(e)}AE(e){const t=this.aE.indexOf(e);this.aE.splice(t,1)}}function Uf(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class ig extends il{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Gf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gf(e),this._firestoreClient=void 0,await e}}}function eb(s,e){const t=typeof s=="object"?s:Di(),n=typeof s=="string"?s:jo,r=En(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=Um("firestore");i&&cT(r,...i)}return r}function tb(s){if(s._terminated)throw new z(G.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||nb(s),s._firestoreClient}function nb(s){var n,r,i,o;const e=s._freezeSettings(),t=eT(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,(r=s._app)==null?void 0:r.options.apiKey,e);s._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new $A(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(s._componentsProvider))}class Co{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tr extends rg{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(wa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=tr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",tr._jsonSchema={type:Le("string",tr._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class So extends tr{data(e={}){return super.data(e)}}class $r{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Co(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new So(this._firestore,this._userDataWriter,n.key,n,new Co(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((B=>{Xt(r._snapshot.query)?oA(r._snapshot.query):Bp(r.query._query);const c=new So(r._firestore,r._userDataWriter,B.doc.key,B.doc,new Co(r._snapshot.mutatedKeys.has(B.doc.key),r._snapshot.fromCache),r.query.converter);return B.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((B=>i||B.type!==3)).map((B=>{const c=new So(r._firestore,r._userDataWriter,B.doc.key,B.doc,new Co(r._snapshot.mutatedKeys.has(B.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,h=-1;return B.type!==0&&(l=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:sb(B.type),doc:c,oldIndex:l,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$r._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sb(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:s})}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */$r._jsonSchemaVersion="firestore/querySnapshot/1.0",$r._jsonSchema={type:Le("string",$r._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};function rb(s,e,t){s=tc(s,Ze);const n=tc(s.firestore,ig),r=ZA(s.converter,e),i=CT(n);return ib(n,[dT(i,"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,un.none())])}function ib(s,e){const t=tb(s);return QA(t,e)}const Hf="@firebase/firestore",jf="4.20.0";(function(e,t=!0){vy($n),kt(new vt("firestore",((n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),B=new ig(new VI(n.getProvider("auth-internal")),new HI(o,n.getProvider("app-check-internal")),Gy(o,r),o);return i={useFetchStreams:t,...i},B._setSettings(i),B}),"PUBLIC").setMultipleInstances(!0)),ht(Hf,jf,e),ht(Hf,jf,"esm2020")})();const og="@firebase/installations",Rl="0.6.24";/**
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
 */const ag=1e4,Bg=`w:${Rl}`,cg="FIS_v2",ob="https://firebaseinstallations.googleapis.com/v1",ab=3600*1e3,Bb="installations",cb="Installations";/**
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
 */const lb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ns=new ns(Bb,cb,lb);function lg(s){return s instanceof Ot&&s.code.includes("request-failed")}/**
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
 */function ug({projectId:s}){return`${ob}/projects/${s}/installations`}function hg(s){return{token:s.token,requestStatus:2,expiresIn:hb(s.expiresIn),creationTime:Date.now()}}async function fg(s,e){const n=(await e.json()).error;return Ns.create("request-failed",{requestName:s,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Cg({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function ub(s,{refreshToken:e}){const t=Cg(s);return t.append("Authorization",fb(e)),t}async function dg(s){const e=await s();return e.status>=500&&e.status<600?s():e}function hb(s){return Number(s.replace("s","000"))}function fb(s){return`${cg} ${s}`}/**
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
 */async function Cb({appConfig:s,heartbeatServiceProvider:e},{fid:t}){const n=ug(s),r=Cg(s),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:t,authVersion:cg,appId:s.appId,sdkVersion:Bg},B={method:"POST",headers:r,body:JSON.stringify(o)},c=await dg(()=>fetch(n,B));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:hg(l.authToken)}}else throw await fg("Create Installation",c)}/**
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
 */function pg(s){return new Promise(e=>{setTimeout(e,s)})}/**
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
 */function db(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pb=/^[cdef][\w-]{21}$/,gc="";function gb(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const t=mb(s);return pb.test(t)?t:gc}catch{return gc}}function mb(s){return db(s).substr(0,22)}/**
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
 */function Sa(s){return`${s.appName}!${s.appId}`}/**
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
 */const gg=new Map;function mg(s,e){const t=Sa(s);Eg(t,e),Eb(t,e)}function Eg(s,e){const t=gg.get(s);if(t)for(const n of t)n(e)}function Eb(s,e){const t=_b();t&&t.postMessage({key:s,fid:e}),Db()}let ds=null;function _b(){return!ds&&"BroadcastChannel"in self&&(ds=new BroadcastChannel("[Firebase] FID Change"),ds.onmessage=s=>{Eg(s.data.key,s.data.fid)}),ds}function Db(){gg.size===0&&ds&&(ds.close(),ds=null)}/**
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
 */const wb="firebase-installations-database",yb=1,Ps="firebase-installations-store";let RB=null;function vl(){return RB||(RB=_C(wb,yb,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(Ps)}}})),RB}async function ia(s,e){const t=Sa(s),r=(await vl()).transaction(Ps,"readwrite"),i=r.objectStore(Ps),o=await i.get(t);return await i.put(e,t),await r.done,(!o||o.fid!==e.fid)&&mg(s,e.fid),e}async function _g(s){const e=Sa(s),n=(await vl()).transaction(Ps,"readwrite");await n.objectStore(Ps).delete(e),await n.done}async function Na(s,e){const t=Sa(s),r=(await vl()).transaction(Ps,"readwrite"),i=r.objectStore(Ps),o=await i.get(t),B=e(o);return B===void 0?await i.delete(t):await i.put(B,t),await r.done,B&&(!o||o.fid!==B.fid)&&mg(s,B.fid),B}/**
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
 */async function Ol(s){let e;const t=await Na(s.appConfig,n=>{const r=Ib(n),i=Tb(s,r);return e=i.registrationPromise,i.installationEntry});return t.fid===gc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Ib(s){const e=s||{fid:gb(),registrationStatus:0};return Dg(e)}function Tb(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ns.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=Ab(s,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bb(s)}:{installationEntry:e}}async function Ab(s,e){try{const t=await Cb(s,e);return ia(s.appConfig,t)}catch(t){throw lg(t)&&t.customData.serverCode===409?await _g(s.appConfig):await ia(s.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bb(s){let e=await Jf(s.appConfig);for(;e.registrationStatus===1;)await pg(100),e=await Jf(s.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await Ol(s);return n||t}return e}function Jf(s){return Na(s,e=>{if(!e)throw Ns.create("installation-not-found");return Dg(e)})}function Dg(s){return Rb(s)?{fid:s.fid,registrationStatus:0}:s}function Rb(s){return s.registrationStatus===1&&s.registrationTime+ag<Date.now()}/**
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
 */async function vb({appConfig:s,heartbeatServiceProvider:e},t){const n=Ob(s,t),r=ub(s,t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Bg,appId:s.appId}},B={method:"POST",headers:r,body:JSON.stringify(o)},c=await dg(()=>fetch(n,B));if(c.ok){const l=await c.json();return hg(l)}else throw await fg("Generate Auth Token",c)}function Ob(s,{fid:e}){return`${ug(s)}/${e}/authTokens:generate`}/**
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
 */async function Sl(s,e=!1){let t;const n=await Na(s.appConfig,i=>{if(!wg(i))throw Ns.create("not-registered");const o=i.authToken;if(!e&&Pb(o))return i;if(o.requestStatus===1)return t=Sb(s,e),i;{if(!navigator.onLine)throw Ns.create("app-offline");const B=Lb(i);return t=Nb(s,B),B}});return t?await t:n.authToken}async function Sb(s,e){let t=await Kf(s.appConfig);for(;t.authToken.requestStatus===1;)await pg(100),t=await Kf(s.appConfig);const n=t.authToken;return n.requestStatus===0?Sl(s,e):n}function Kf(s){return Na(s,e=>{if(!wg(e))throw Ns.create("not-registered");const t=e.authToken;return kb(t)?{...e,authToken:{requestStatus:0}}:e})}async function Nb(s,e){try{const t=await vb(s,e),n={...e,authToken:t};return await ia(s.appConfig,n),t}catch(t){if(lg(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await _g(s.appConfig);else{const n={...e,authToken:{requestStatus:0}};await ia(s.appConfig,n)}throw t}}function wg(s){return s!==void 0&&s.registrationStatus===2}function Pb(s){return s.requestStatus===2&&!Fb(s)}function Fb(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+ab}function Lb(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function kb(s){return s.requestStatus===1&&s.requestTime+ag<Date.now()}/**
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
 */async function xb(s){const e=s,{installationEntry:t,registrationPromise:n}=await Ol(e);return n?n.catch(console.error):Sl(e).catch(console.error),t.fid}/**
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
 */async function Mb(s,e=!1){const t=s;return await Vb(t),(await Sl(t,e)).token}async function Vb(s){const{registrationPromise:e}=await Ol(s);e&&await e}/**
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
 */function Gb(s){if(!s||!s.options)throw vB("App Configuration");if(!s.name)throw vB("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!s.options[t])throw vB(t);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function vB(s){return Ns.create("missing-app-config-values",{valueName:s})}/**
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
 */const yg="installations",Ub="installations-internal",Hb=s=>{const e=s.getProvider("app").getImmediate(),t=Gb(e),n=En(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},jb=s=>{const e=s.getProvider("app").getImmediate(),t=En(e,yg).getImmediate();return{getId:()=>xb(t),getToken:r=>Mb(t,r)}};function Jb(){kt(new vt(yg,Hb,"PUBLIC")),kt(new vt(Ub,jb,"PRIVATE"))}/**
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
 */Jb();ht(og,Rl);ht(og,Rl,"esm2020");const OB="@firebase/remote-config",qf="0.10.0";/**
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
 */class Ig{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */const Tg="remote-config",$f=100;/**
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
 */const Kb={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported.","stream-error":"The stream was not able to connect to the backend: {$originalErrorMessage}.","realtime-unavailable":"The Realtime service is unavailable: {$originalErrorMessage}","update-message-invalid":"The stream invalidation message was unparsable: {$originalErrorMessage}","update-not-fetched":"Unable to fetch the latest config: {$originalErrorMessage}","analytics-unavailable":"Connection to Firebase Analytics failed: {$originalErrorMessage}"},Fe=new ns("remoteconfig","Remote Config",Kb);function qb(s,e){return s instanceof Ot&&s.code.indexOf(e)!==-1}/**
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
 */const $b=!1,zb="",zf=0,Wb=["1","true","t","yes","y","on"];class SB{constructor(e,t=zb){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return this._source==="static"?$b:Wb.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return zf;let e=Number(this._value);return isNaN(e)&&(e=zf),e}getSource(){return this._source}}class Yb{constructor(e){this.storage=e._storage,this.logger=e._logger,this.analyticsProvider=e._analyticsProvider}async updateActiveExperiments(e){const t=await this.storage.getActiveExperiments()||new Set,n=this.createExperimentInfoMap(e);return this.addActiveExperiments(n),this.removeInactiveExperiments(t,n),this.storage.setActiveExperiments(new Set(n.keys()))}createExperimentInfoMap(e){const t=new Map;for(const n of e)t.set(n.experimentId,n);return t}addActiveExperiments(e){const t={};for(const[n,r]of e.entries())t[`firebase${n}`]=r.variantId;this.addExperimentToAnalytics(t)}removeInactiveExperiments(e,t){const n={};for(const r of e)t.has(r)||(n[`firebase${r}`]=null);this.addExperimentToAnalytics(n)}addExperimentToAnalytics(e){if(Object.keys(e).length!==0)try{const t=this.analyticsProvider.getImmediate({optional:!0});t?(t.setUserProperties(e),t.logEvent("set_firebase_experiment_state")):this.logger.warn("Analytics import failed. Verify if you have imported Firebase Analytics in your app code.")}catch(t){throw Fe.create("analytics-unavailable",{originalErrorMessage:t==null?void 0:t.message})}}}/**
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
 */function Qb(s=Di(),e={}){var r,i;s=We(s);const t=En(s,Tg);if(t.isInitialized()){const o=t.getOptions();if(qn(o,e))return t.getImmediate();throw Fe.create("already-initialized")}t.initialize({options:e});const n=t.getImmediate();return e.initialFetchResponse&&(n._initializePromise=Promise.all([n._storage.setLastSuccessfulFetchResponse(e.initialFetchResponse),n._storage.setActiveConfigEtag(((r=e.initialFetchResponse)==null?void 0:r.eTag)||""),n._storage.setActiveConfigTemplateVersion(e.initialFetchResponse.templateVersion||0),n._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),n._storageCache.setLastFetchStatus("success"),n._storageCache.setActiveConfig(((i=e.initialFetchResponse)==null?void 0:i.config)||{})]).then(),n._isInitializationComplete=!0),n}async function Xb(s){const e=We(s),[t,n]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);if(!t||!t.config||!t.eTag||!t.templateVersion||t.eTag===n)return!1;const i=new Yb(e).updateActiveExperiments(t.experiments||[]);return await Promise.all([e._storageCache.setActiveConfig(t.config),e._storage.setActiveConfigEtag(t.eTag),e._storage.setActiveConfigTemplateVersion(t.templateVersion),i]),!0}function Zb(s){const e=We(s);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function eR(s){const e=We(s),t=new Ig;setTimeout(async()=>{t.abort()},e.settings.fetchTimeoutMillis);const n=e._storageCache.getCustomSignals();n&&e._logger.debug(`Fetching config with custom signals: ${JSON.stringify(n)}`);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:t,customSignals:n}),await e._storageCache.setLastFetchStatus("success")}catch(r){const i=qb(r,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(i),r}}function po(s,e){const t=We(s);t._isInitializationComplete||t._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const n=t._storageCache.getActiveConfig();return n&&n[e]!==void 0?new SB("remote",n[e]):t.defaultConfig&&t.defaultConfig[e]!==void 0?new SB("default",String(t.defaultConfig[e])):(t._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new SB("static"))}/**
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
 */class tR{constructor(e,t,n,r){this.client=e,this.storage=t,this.storageCache=n,this.logger=r}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const n=Date.now()-t,r=n<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${r}.`),r}async fetch(e){const[t,n]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(n&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return n;e.eTag=n&&n.eTag;const r=await this.client.fetch(e),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return r.status===200&&i.push(this.storage.setLastSuccessfulFetchResponse(r)),await Promise.all(i),r}}/**
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
 */function nR(s=navigator){return s.languages&&s.languages[0]||s.language}/**
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
 */class sR{constructor(e,t,n,r,i,o){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=o}async fetch(e){const[t,n]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),i=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},B={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:n,app_id:this.appId,language_code:nR(),custom_signals:e.customSignals},c={method:"POST",headers:o,body:JSON.stringify(B)},l=fetch(i,c),h=new Promise((re,Ce)=>{e.signal.addEventListener(()=>{const Te=new Error("The operation was aborted.");Te.name="AbortError",Ce(Te)})});let C;try{await Promise.race([l,h]),C=await l}catch(re){let Ce="fetch-client-network";throw(re==null?void 0:re.name)==="AbortError"&&(Ce="fetch-timeout"),Fe.create(Ce,{originalErrorMessage:re==null?void 0:re.message})}let p=C.status;const _=C.headers.get("ETag")||void 0;let y,S,k,J,$;if(C.status===200){let re;try{re=await C.json()}catch(Ce){throw Fe.create("fetch-client-parse",{originalErrorMessage:Ce==null?void 0:Ce.message})}y=re.entries,S=re.state,k=re.templateVersion,J=re.experimentDescriptions,$=re.rolloutMetadata}if(S==="INSTANCE_STATE_UNSPECIFIED"?p=500:S==="NO_CHANGE"?p=304:(S==="NO_TEMPLATE"||S==="EMPTY_CONFIG")&&(y={},J=[],$=[]),p!==304&&p!==200)throw Fe.create("fetch-status",{httpStatus:p});return{status:p,eTag:_,config:y,templateVersion:k,experiments:J,rollouts:$}}}/**
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
 */function rR(s,e){return new Promise((t,n)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);s.addEventListener(()=>{clearTimeout(i),n(Fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iR(s){if(!(s instanceof Ot)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class oR{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:n}){await rR(e.signal,t);try{const r=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),r}catch(r){if(!iR(r))throw r;const i={throttleEndTimeMillis:Date.now()+wc(n),backoffCount:n+1};return await this.storage.setThrottleMetadata(i),this.attemptFetch(e,i)}}}/**
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
 */const aR=60*1e3,BR=720*60*1e3;class cR{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,n,r,i,o,B){this.app=e,this._client=t,this._storageCache=n,this._storage=r,this._logger=i,this._realtimeHandler=o,this._analyticsProvider=B,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:aR,minimumFetchIntervalMillis:BR},this.defaultConfig={}}}/**
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
 */function No(s,e){const t=s.target.error||void 0;return Fe.create(e,{originalErrorMessage:t&&(t==null?void 0:t.message)})}const vn="app_namespace_store",lR="firebase_remote_config",uR=1;function hR(){return new Promise((s,e)=>{try{const t=indexedDB.open(lR,uR);t.onerror=n=>{e(No(n,"storage-open"))},t.onsuccess=n=>{s(n.target.result)},t.onupgradeneeded=n=>{const r=n.target.result;switch(n.oldVersion){case 0:r.createObjectStore(vn,{keyPath:"compositeKey"})}}}catch(t){e(Fe.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}})}class Ag{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getActiveExperiments(){return this.get("active_experiments")}setActiveExperiments(e){return this.set("active_experiments",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}getRealtimeBackoffMetadata(){return this.get("realtime_backoff_metadata")}setRealtimeBackoffMetadata(e){return this.set("realtime_backoff_metadata",e)}getActiveConfigTemplateVersion(){return this.get("last_known_template_version")}setActiveConfigTemplateVersion(e){return this.set("last_known_template_version",e)}}class fR extends Ag{constructor(e,t,n,r=hR()){super(),this.appId=e,this.appName=t,this.namespace=n,this.openDbPromise=r}async setCustomSignals(e){const n=(await this.openDbPromise).transaction([vn],"readwrite"),r=await this.getWithTransaction("custom_signals",n),i=bg(e,r||{});return await this.setWithTransaction("custom_signals",i,n),i}async getWithTransaction(e,t){return new Promise((n,r)=>{const i=t.objectStore(vn),o=this.createCompositeKey(e);try{const B=i.get(o);B.onerror=c=>{r(No(c,"storage-get"))},B.onsuccess=c=>{const l=c.target.result;n(l?l.value:void 0)}}catch(B){r(Fe.create("storage-get",{originalErrorMessage:B==null?void 0:B.message}))}})}async setWithTransaction(e,t,n){return new Promise((r,i)=>{const o=n.objectStore(vn),B=this.createCompositeKey(e);try{const c=o.put({compositeKey:B,value:t});c.onerror=l=>{i(No(l,"storage-set"))},c.onsuccess=()=>{r()}}catch(c){i(Fe.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async get(e){const n=(await this.openDbPromise).transaction([vn],"readonly");return this.getWithTransaction(e,n)}async set(e,t){const r=(await this.openDbPromise).transaction([vn],"readwrite");return this.setWithTransaction(e,t,r)}async delete(e){const t=await this.openDbPromise;return new Promise((n,r)=>{const o=t.transaction([vn],"readwrite").objectStore(vn),B=this.createCompositeKey(e);try{const c=o.delete(B);c.onerror=l=>{r(No(l,"storage-delete"))},c.onsuccess=()=>{n()}}catch(c){r(Fe.create("storage-delete",{originalErrorMessage:c==null?void 0:c.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class CR extends Ag{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){const t=this.storage.custom_signals||{};return this.storage.custom_signals=bg(e,t),Promise.resolve(this.storage.custom_signals)}}function bg(s,e){const t={...e,...s},n=Object.fromEntries(Object.entries(t).filter(([r,i])=>i!==null).map(([r,i])=>typeof i=="number"?[r,i.toString()]:[r,i]));if(Object.keys(n).length>$f)throw Fe.create("custom-signal-max-allowed-signals",{maxSignals:$f});return n}/**
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
 */class dR{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),r=this.storage.getCustomSignals(),i=await e;i&&(this.lastFetchStatus=i);const o=await t;o&&(this.lastSuccessfulFetchTimestampMillis=o);const B=await n;B&&(this.activeConfig=B);const c=await r;c&&(this.customSignals=c)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class pR{constructor(e){this.allowedEvents_=e,this.listeners_={},GB(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(e){GB(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Nl extends pR{static getInstance(){return new Nl}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return GB(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const gR="X-Goog-Api-Key",mR="X-Goog-Firebase-Installations-Auth",NB=8,Wf=3,Yf=-1,Qf=0,Xf="featureDisabled",Zf="retryIntervalSeconds",eC="latestTemplateVersionNumber",ER="_exp_rollout";class _R{constructor(e,t,n,r,i,o,B,c,l,h){this.firebaseInstallations=e,this.storage=t,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=o,this.appId=B,this.logger=c,this.storageCache=l,this.cachingClient=h,this.observers=new Set,this.isConnectionActive=!1,this.isRealtimeDisabled=!1,this.httpRetriesRemaining=NB,this.isInBackground=!1,this.decoder=new TextDecoder("utf-8"),this.isClosingConnection=!1,this.propagateError=C=>this.observers.forEach(p=>{var _;return(_=p.error)==null?void 0:_.call(p,C)}),this.isStatusCodeRetryable=C=>!C||[408,429,502,503,504].includes(C),this.setRetriesRemaining(),Nl.getInstance().on("visible",this.onVisibilityChange,this)}async setRetriesRemaining(){const e=await this.storage.getRealtimeBackoffMetadata(),t=(e==null?void 0:e.numFailedStreams)||0;this.httpRetriesRemaining=Math.max(NB-t,1)}async updateBackoffMetadataWithLastFailedStreamConnectionTime(e){var r;const t=(((r=await this.storage.getRealtimeBackoffMetadata())==null?void 0:r.numFailedStreams)||0)+1,n=wc(t,6e4,2);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(e.getTime()+n),numFailedStreams:t})}async updateBackoffMetadataWithRetryInterval(e){const t=Date.now(),n=e*1e3,r=new Date(t+n);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:r,numFailedStreams:0}),await this.retryHttpConnectionWhenBackoffEnds()}async closeRealtimeHttpConnection(){if(!this.isClosingConnection){this.isClosingConnection=!0;try{this.reader&&await this.reader.cancel()}catch{this.logger.debug("Failed to cancel the reader, connection was lost.")}finally{this.reader=void 0}this.controller&&(await this.controller.abort(),this.controller=void 0),this.isClosingConnection=!1}}async resetRealtimeBackoff(){await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(-1),numFailedStreams:0})}resetRetryCount(){this.httpRetriesRemaining=NB}async establishRealtimeConnection(e,t,n,r){const i=await this.storage.getActiveConfigEtag(),o=await this.storage.getActiveConfigTemplateVersion(),B={[gR]:this.apiKey,[mR]:n,"Content-Type":"application/json",Accept:"application/json","If-None-Match":i||"*","Content-Encoding":"gzip"},c={project:this.projectId,namespace:this.namespace,lastKnownVersionNumber:o,appId:this.appId,sdkVersion:this.sdkVersion,appInstanceId:t};return await fetch(e,{method:"POST",headers:B,body:JSON.stringify(c),signal:r})}getRealtimeUrl(){const t=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfigrealtime.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:streamFetchInvalidations?key=${this.apiKey}`;return new URL(t)}async createRealtimeConnection(){const[e,t]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken(!1)]);this.controller=new AbortController;const n=this.getRealtimeUrl();return await this.establishRealtimeConnection(n,e,t,this.controller.signal)}async retryHttpConnectionWhenBackoffEnds(){let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(Yf),numFailedStreams:Qf});const t=new Date(e.backoffEndTimeMillis).getTime(),n=Date.now(),r=Math.max(0,t-n);await this.makeRealtimeHttpConnection(r)}setIsHttpConnectionRunning(e){this.isConnectionActive=e}checkAndSetHttpConnectionFlagIfNotRunning(){const e=this.canEstablishStreamConnection();return e&&this.setIsHttpConnectionRunning(!0),e}fetchResponseIsUpToDate(e,t){return e.config!=null&&e.templateVersion?e.templateVersion>=t:this.storageCache.getLastFetchStatus()==="success"}parseAndValidateConfigUpdateMessage(e){const t=e.indexOf("{"),n=e.indexOf("}",t);return t<0||n<0||t>=n?"":e.substring(t,n+1)}isEventListenersEmpty(){return this.observers.size===0}getRandomInt(e){return Math.floor(Math.random()*e)}executeAllListenerCallbacks(e){this.observers.forEach(t=>t.next(e))}getChangedParams(e,t,n,r){const i=new Set,o=new Set(Object.keys(e||{})),B=new Set(Object.keys(t||{})),c=n.experiments||[],l=(r==null?void 0:r.experiments)||[],h=this.createExperimentsMap(c),C=this.createExperimentsMap(l),p=n.rollouts||[],_=(r==null?void 0:r.rollouts)||[],y=this.createRolloutsMap(p),S=this.createRolloutsMap(_);for(const k of o){if(!B.has(k)||e[k]!==t[k]){i.add(k);continue}if(h.has(k)!==C.has(k)){i.add(k);continue}const J=h.get(k),$=C.get(k);if(J&&$&&!this.areExperimentsEqual(J,$)){i.add(k);continue}if(y.has(k)!==S.has(k)){i.add(k);continue}const re=y.get(k),Ce=S.get(k);re&&Ce&&!this.areRolloutsEqual(re,Ce)&&i.add(k)}for(const k of B)o.has(k)||i.add(k);return i}areExperimentsEqual(e,t){return e.experimentId===t.experimentId&&e.variantId===t.variantId&&e.timeToLiveMillis===t.timeToLiveMillis&&e.triggerTimeoutMillis===t.triggerTimeoutMillis}areRolloutsEqual(e,t){if(e.size!==t.size)return!1;for(const[n,r]of e)if(t.get(n)!==r)return!1;return!0}createExperimentsMap(e){const t=new Map;for(const n of e)if(!(!n.affectedParameterKeys||n.experimentId.startsWith(ER)))for(const r of n.affectedParameterKeys)t.set(r,n);return t}createRolloutsMap(e){const t=new Map;for(const n of e){const r=n.rolloutId,i=n.variantId,o=n.affectedParameterKeys||[];for(const B of o){let c=t.get(B);c||(c=new Map,t.set(B,c)),c.set(r,i)}}return t}async fetchLatestConfig(e,t){const n=e-1,r=Wf-n,i=this.storageCache.getCustomSignals();i&&this.logger.debug(`Fetching config with custom signals: ${JSON.stringify(i)}`);const o=new Ig;try{const B={cacheMaxAgeMillis:0,signal:o,customSignals:i,fetchType:"REALTIME",fetchAttempt:r},c=await this.storage.getLastSuccessfulFetchResponse(),l=await this.cachingClient.fetch(B);let h=await this.storage.getActiveConfig();if(!this.fetchResponseIsUpToDate(l,t)){this.logger.debug("Fetched template version is the same as SDK's current version. Retrying fetch."),await this.autoFetch(n,t);return}if(l.config==null){this.logger.debug("The fetch succeeded, but the backend had no updates.");return}h==null&&(h={});const C=this.getChangedParams(l.config,h,l,c);if(C.size===0){this.logger.debug("Config was fetched, but no params changed.");return}const p={getUpdatedKeys(){return new Set(C)}};this.executeAllListenerCallbacks(p)}catch(B){const c=B instanceof Error?B.message:String(B),l=Fe.create("update-not-fetched",{originalErrorMessage:`Failed to auto-fetch config update: ${c}`});this.propagateError(l)}}async autoFetch(e,t){if(e===0){const i=Fe.create("update-not-fetched",{originalErrorMessage:"Unable to fetch the latest version of the template."});this.propagateError(i);return}const r=this.getRandomInt(4)*1e3;await new Promise(i=>setTimeout(i,r)),await this.fetchLatestConfig(e,t)}async handleNotifications(e){let t,n="";for(;;){const{done:r,value:i}=await e.read();if(r)break;if(t=this.decoder.decode(i,{stream:!0}),n+=t,t.includes("}")){if(n=this.parseAndValidateConfigUpdateMessage(n),n.length===0)continue;try{const o=JSON.parse(n);if(this.isEventListenersEmpty())break;if(Xf in o&&o[Xf]===!0){const B=Fe.create("realtime-unavailable",{originalErrorMessage:"The server is temporarily unavailable. Try again in a few minutes."});this.propagateError(B);break}if(eC in o){const B=await this.storage.getActiveConfigTemplateVersion(),c=Number(o[eC]);B&&c>B&&await this.autoFetch(Wf,c)}if(Zf in o){const B=Number(o[Zf]);await this.updateBackoffMetadataWithRetryInterval(B)}}catch(o){this.logger.debug("Unable to parse latest config update message.",o);const B=o instanceof Error?o.message:String(o);this.propagateError(Fe.create("update-message-invalid",{originalErrorMessage:B}))}n=""}}}async listenForNotifications(e){try{await this.handleNotifications(e)}catch{this.isInBackground||this.logger.debug("Real-time connection was closed due to an exception.")}}async prepareAndBeginRealtimeHttpStream(){if(!this.checkAndSetHttpConnectionFlagIfNotRunning())return;let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(Yf),numFailedStreams:Qf});const t=e.backoffEndTimeMillis.getTime();if(Date.now()<t){await this.retryHttpConnectionWhenBackoffEnds();return}let n,r;try{if(n=await this.createRealtimeConnection(),r=n.status,n.ok&&n.body){this.resetRetryCount(),await this.resetRealtimeBackoff();const i=n.body.getReader();this.reader=i,await this.listenForNotifications(i)}}catch(i){this.isInBackground?this.resetRetryCount():this.logger.debug("Exception connecting to real-time RC backend. Retrying the connection...:",i)}finally{const i=this.isInBackground;if(await this.closeRealtimeHttpConnection(),this.setIsHttpConnectionRunning(!1),!this.isInBackground)if(i)this.resetRetryCount(),await this.retryHttpConnectionWhenBackoffEnds();else{const o=r===void 0||this.isStatusCodeRetryable(r);if(o&&await this.updateBackoffMetadataWithLastFailedStreamConnectionTime(new Date),o||n!=null&&n.ok)await this.retryHttpConnectionWhenBackoffEnds();else{const B=`Unable to connect to the server. HTTP status code: ${r}`,c=Fe.create("stream-error",{originalErrorMessage:B});this.propagateError(c)}}}}canEstablishStreamConnection(){const e=this.observers.size>0,t=!this.isRealtimeDisabled,n=!this.isConnectionActive,r=!this.isInBackground;return e&&t&&n&&r}async makeRealtimeHttpConnection(e){if(this.canEstablishStreamConnection()){if(this.httpRetriesRemaining>0)this.httpRetriesRemaining--,await new Promise(t=>setTimeout(t,e)),this.prepareAndBeginRealtimeHttpStream();else if(!this.isInBackground){const t=Fe.create("stream-error",{originalErrorMessage:"Unable to connect to the server. Check your connection and try again."});this.propagateError(t)}}}async beginRealtime(){this.observers.size>0&&await this.makeRealtimeHttpConnection(0)}addObserver(e){this.observers.add(e),this.beginRealtime()}removeObserver(e){this.observers.has(e)&&this.observers.delete(e)}async onVisibilityChange(e){this.isInBackground=!e,e?e&&await this.beginRealtime():await this.closeRealtimeHttpConnection()}}/**
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
 */function DR(){kt(new vt(Tg,s,"PUBLIC").setMultipleInstances(!0)),ht(OB,qf),ht(OB,qf,"esm2020");function s(e,{options:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate(),i=e.getProvider("analytics-internal"),{projectId:o,apiKey:B,appId:c}=n.options;if(!o)throw Fe.create("registration-project-id");if(!B)throw Fe.create("registration-api-key");if(!c)throw Fe.create("registration-app-id");const l=(t==null?void 0:t.templateId)||"firebase",h=ca()?new fR(c,n.name,l):new CR,C=new dR(h),p=new Br(OB);p.logLevel=le.ERROR;const _=new sR(r,$n,l,o,B,c),y=new oR(_,h),S=new tR(y,h,C,p),k=new _R(r,h,$n,l,o,B,c,p,C,S),J=new cR(n,S,C,h,p,k,i);return Zb(J),J}}/**
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
 */async function wR(s){return s=We(s),await eR(s),Xb(s)}/**
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
 */DR();const yR={apiKey:"AIzaSyAz4vJyX4lMaLOFzOrTgKtGekUjNvdMko4",authDomain:"wurket-lister.firebaseapp.com",projectId:"wurket-lister",storageBucket:"wurket-lister.firebasestorage.app",messagingSenderId:"160184160436",appId:"1:160184160436:web:e52c8df9e7f63981e947e1"},IR="6LfJxiouAAAAANFYAH7nccqpYs0aG2gwPWex4vTJ",Li=DC(yR);["localhost","127.0.0.1"].includes(location.hostname)&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=!0);eD(Li,{provider:new Rc(IR),isTokenAutoRefreshEnabled:!0});const fs=Qb(Li);fs.settings.minimumFetchIntervalMillis=600*1e3;fs.defaultConfig={cloud_model:"gemini-3.5-flash-lite",currency:"MAD",marketplace_name:"Wurket",listing_style:"Short, honest, no exaggeration. Mention condition and what is included."};async function TR(){try{await wR(fs)}catch(s){console.warn("Remote Config fetch failed, using defaults",s)}return{cloudModel:po(fs,"cloud_model").asString(),currency:po(fs,"currency").asString(),marketplace:po(fs,"marketplace_name").asString(),listingStyle:po(fs,"listing_style").asString()}}const PB=ty(Li),AR=eb(Li);async function Rg(){return PB.currentUser?PB.currentUser:(await xD(PB)).user}async function bR(s){const e=await Rg(),{photo:t,...n}=s;await rb(lT(AR,"users",e.uid,"listings",s.id),{...n,syncedAt:DT()})}var tC="@firebase/ai",mc="3.1.0";/**
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
 */const ar="AI",RR="global",vR="firebasevertexai.googleapis.com",oa="v1beta",nC=mc,OR="gl-js",SR="hybrid",NR=180*1e3,PR="gemini-3.5-flash-lite";/**
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
 */class ne extends Ot{constructor(e,t,n){const r=ar,i=`${r}/${e}`,o=`${r}: ${t} (${i})`;super(e,o),this.code=e,this.customErrorData=n,Error.captureStackTrace&&Error.captureStackTrace(this,ne),Object.setPrototypeOf(this,ne.prototype),this.toString=()=>o}}/**
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
 */const sC=["user","model","function","system"],vg={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},st={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},Et={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},On={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
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
 */const ee={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",ALREADY_INITIALIZED:"already-initialized",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
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
 */const ks={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
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
 */const _n={AGENT_PLATFORM:"AGENT_PLATFORM",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Og{constructor(e){this.backendType=e}}class Pa extends Og{constructor(){super(_n.GOOGLE_AI)}_getModelPath(e,t){return`/${oa}/projects/${e}/${t}`}_getTemplatePath(e,t){return`/${oa}/projects/${e}/templates/${t}`}}class Sg extends Og{constructor(e){super(_n.AGENT_PLATFORM),this.location=RR,e&&(this.location=e)}_getModelPath(e,t){return`/${oa}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${oa}/projects/${e}/locations/${this.location}/templates/${t}`}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function FR(s){if(s instanceof Pa)return`${ar}/googleai`;if(s instanceof Sg)return`${ar}/agentplatform/${s.location}`;throw new ne(ee.ERROR,`Invalid backend: ${JSON.stringify(s.backendType)}`)}function LR(s){const e=s.split("/");if(e[0]!==ar)throw new ne(ee.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"agentplatform":const n=e[2];if(!n)throw new ne(ee.ERROR,`Invalid instance identifier, unknown location '${s}'`);return new Sg(n);case"googleai":return new Pa;default:throw new ne(ee.ERROR,`Invalid instance identifier string: '${s}'`)}}/**
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
 */const Ve=new Br("@firebase/ai");var an;(function(s){s.UNAVAILABLE="unavailable",s.DOWNLOADABLE="downloadable",s.DOWNLOADING="downloading",s.AVAILABLE="available"})(an||(an={}));/**
 * @license
 * Copyright 2025 Google LLC
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
 */const Ng={type:"text",languages:["en"]},FB=[Ng,{type:"image"}],LB=[Ng];class Mt{constructor(e,t,n){this.languageModelProvider=e,this.mode=t,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:FB,expectedOutputs:LB}},n&&(this.onDeviceParams=n,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=FB),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=LB)):this.onDeviceParams.createOptions={expectedInputs:FB,expectedOutputs:LB})}async isAvailable(e){var n;if(!this.mode)return Ve.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===Et.ONLY_IN_CLOUD)return Ve.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const t=await((n=this.languageModelProvider)==null?void 0:n.availability(this.onDeviceParams.createOptions));if(this.mode===Et.ONLY_ON_DEVICE){if(t===an.UNAVAILABLE)throw new ne(ee.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(t===an.DOWNLOADABLE||t===an.DOWNLOADING){Ve.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(r){throw new ne(ee.ERROR,r.message)}return!0}return!0}return t!==an.AVAILABLE?(Ve.debug(`On-device inference unavailable because availability is "${t}".`),!1):Mt.isOnDeviceRequest(e)?!0:(Ve.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(Mt.toLanguageModelMessage)),r=await t.prompt(n,this.onDeviceParams.promptOptions);return Mt.toResponse(r)}async generateContentStream(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(Mt.toLanguageModelMessage)),r=t.promptStreaming(n,this.onDeviceParams.promptOptions);return Mt.toStreamResponse(r)}async countTokens(e){throw new ne(ee.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return Ve.debug("Empty prompt rejected for on-device inference."),!1;for(const t of e.contents){if(t.parts.some(n=>"functionResponse"in n))return Ve.debug("Content with a function response part rejected for on-device inference."),!1;for(const n of t.parts)if("inlineData"in n&&n.inlineData&&Mt.SUPPORTED_MIME_TYPES.indexOf(n.inlineData.mimeType)===-1)return Ve.debug(`Unsupported mime type "${n.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var n;const t=await((n=this.languageModelProvider)==null?void 0:n.availability(this.onDeviceParams.createOptions));return(t===an.DOWNLOADABLE||t===an.DOWNLOADING)&&this.download(e),t}download(e){var n;if(this.downloadPromise)return;const t={...this.onDeviceParams.createOptions};t&&!t.monitor&&e&&(t.monitor=r=>{r.addEventListener("downloadprogress",i=>{e(i.loaded)})}),this.downloadPromise=(n=this.languageModelProvider)==null?void 0:n.create(t).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const t=await Promise.all(e.parts.map(Mt.toLanguageModelMessageContent));return{role:Mt.toLanguageModelMessageRole(e.role),content:t}}static async toLanguageModelMessageContent(e){if("text"in e&&typeof e.text=="string")return{type:"text",value:e.text};if("inlineData"in e&&e.inlineData){const n=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(n)}}throw new ne(ee.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new ne(ee.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const t=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(n,r){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:n}]}}]});r.enqueue(t.encode(`data: ${i}

`))}}))}}}Mt.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function kR(s,e,t){const r=(e||Dc()).LanguageModel;if(r&&s)return new Mt(r,s,t)}/**
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
 */class xR{constructor(e,t,n,r,i){this.app=e,this.backend=t,this.chromeAdapterFactory=i;const o=r==null?void 0:r.getImmediate({optional:!0}),B=n==null?void 0:n.getImmediate({optional:!0});this.auth=B||null,this.appCheck=o||null}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function MR(s,{instanceIdentifier:e}){if(!e)throw new ne(ee.ERROR,"AIService instance identifier is undefined.");const t=LR(e),n=s.getProvider("app").getImmediate(),r=s.getProvider("auth-internal"),i=s.getProvider("app-check-internal");return new xR(n,t,r,i,kR)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function VR(s){var t,n,r,i,o,B,c;if((n=(t=s.app)==null?void 0:t.options)!=null&&n.apiKey)if((i=(r=s.app)==null?void 0:r.options)!=null&&i.projectId){if(!((B=(o=s.app)==null?void 0:o.options)!=null&&B.appId))throw new ne(ee.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new ne(ee.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new ne(ee.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:s.app.options.apiKey,project:s.app.options.projectId,appId:s.app.options.appId,automaticDataCollectionEnabled:s.app.automaticDataCollectionEnabled,backend:s.backend};if(Ft(s.app)&&s.app.settings.appCheckToken){const l=s.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:l})}else s.appCheck&&((c=s.options)!=null&&c.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>s.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>s.appCheck.getToken());return s.auth&&(e.getAuthToken=()=>s.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class zr{constructor(e,t){this._apiSettings=VR(e),this.model=zr.normalizeModelName(t,this._apiSettings.backend.backendType)}static normalizeModelName(e,t){return t===_n.GOOGLE_AI?zr.normalizeGoogleAIModelName(e):zr.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let t;return e.includes("/")?e.startsWith("models/")?t=`publishers/google/${e}`:t=e:t=`publishers/google/models/${e}`,t}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const GR="Timeout has expired.",kB="AbortError";class UR{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${vR}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function HR(s){const e=[];return e.push(`${OR}/${nC}`),e.push(`fire/${nC}`),(s.params.apiSettings.inferenceMode===Et.PREFER_ON_DEVICE||s.params.apiSettings.inferenceMode===Et.PREFER_IN_CLOUD)&&e.push(SR),e.join(" ")}async function jR(s){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",HR(s)),e.append("x-goog-api-key",s.params.apiSettings.apiKey),s.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",s.params.apiSettings.appId),s.params.apiSettings.getAppCheckToken){const t=await s.params.apiSettings.getAppCheckToken();t&&(e.append("X-Firebase-AppCheck",t.token),t.error&&Ve.warn(`Unable to obtain a valid App Check token: ${t.error.message}`))}if(s.params.apiSettings.getAuthToken){const t=await s.params.apiSettings.getAuthToken();t&&e.append("Authorization",`Firebase ${t.accessToken}`)}return e}async function Pl(s,e){var l,h;const t=new UR(s);let n;const r=(l=s.singleRequestOptions)==null?void 0:l.signal,i=((h=s.singleRequestOptions)==null?void 0:h.timeout)!=null&&s.singleRequestOptions.timeout>=0?s.singleRequestOptions.timeout:NR,o=new AbortController,B=setTimeout(()=>{o.abort(new DOMException(GR,kB)),Ve.debug(`Aborting request to ${t} due to timeout (${i}ms)`)},i),c=AbortSignal.any(r?[r,o.signal]:[o.signal]);if(r&&r.aborted)throw clearTimeout(B),new DOMException(r.reason??"Aborted externally before fetch",kB);try{const C={method:"POST",headers:await jR(t),signal:c,body:e};if(n=await fetch(t.toString(),C),!n.ok){let p="",_;try{const y=await n.json();p=y.error.message,y.error.details&&(p+=` ${JSON.stringify(y.error.details)}`,_=y.error.details)}catch{}throw n.status===403&&_&&_.some(y=>y.reason==="SERVICE_DISABLED")&&_.some(y=>{var S,k;return(k=(S=y.links)==null?void 0:S[0])==null?void 0:k.description.includes("Google developers console API activation")})?new ne(ee.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${t.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:n.status,statusText:n.statusText,errorDetails:_}):new ne(ee.FETCH_ERROR,`Error fetching from ${t}: [${n.status} ${n.statusText}] ${p}`,{status:n.status,statusText:n.statusText,errorDetails:_})}}catch(C){let p=C;throw C.code!==ee.FETCH_ERROR&&C.code!==ee.API_NOT_ENABLED&&C instanceof Error&&C.name!==kB&&(p=new ne(ee.ERROR,`Error fetching from ${t.toString()}: ${C.message}`),p.stack=C.stack),p}finally{clearTimeout(B)}return n}/**
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
 */function go(s){if(s.candidates&&s.candidates.length>0){if(s.candidates.length>1&&Ve.warn(`This response had ${s.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Fg(s.candidates[0]))throw new ne(ee.RESPONSE_ERROR,`Response error: ${ps(s)}. Response body stored in error.response`,{response:s});return!0}else return!1}function on(s){return"type"in s&&s.type?s:s.text!==void 0?{...s,type:"text"}:s.inlineData!==void 0?{...s,type:"inlineData"}:s.functionCall!==void 0?{...s,type:"functionCall"}:s.functionResponse!==void 0?{...s,type:"functionResponse"}:s.fileData!==void 0?{...s,type:"fileData"}:s.executableCode!==void 0?{...s,type:"executableCode"}:s.codeExecutionResult!==void 0?{...s,type:"codeExecutionResult"}:s}function aa(s,e=On.IN_CLOUD){var n,r;if((n=s.candidates)!=null&&n[0]&&!s.candidates[0].hasOwnProperty("index")&&(s.candidates[0].index=0),s.candidates)for(const i of s.candidates)(r=i.content)!=null&&r.parts&&(i.content.parts=i.content.parts.map(on));const t=JR(s);return t.inferenceSource=e,t}function JR(s){return s.text=()=>{if(go(s))return rC(s,e=>!("thought"in e&&e.thought));if(s.promptFeedback)throw new ne(ee.RESPONSE_ERROR,`Text not available. ${ps(s)}`,{response:s});return""},s.thoughtSummary=()=>{if(go(s)){const e=rC(s,t=>!!("thought"in t&&t.thought));return e===""?void 0:e}else if(s.promptFeedback)throw new ne(ee.RESPONSE_ERROR,`Thought summary not available. ${ps(s)}`,{response:s})},s.inlineDataParts=()=>{if(go(s))return KR(s);if(s.promptFeedback)throw new ne(ee.RESPONSE_ERROR,`Data not available. ${ps(s)}`,{response:s})},s.functionCalls=()=>{if(go(s))return Pg(s);if(s.promptFeedback)throw new ne(ee.RESPONSE_ERROR,`Function call not available. ${ps(s)}`,{response:s})},s}function rC(s,e){var n,r,i,o;const t=[];if((r=(n=s.candidates)==null?void 0:n[0].content)!=null&&r.parts)for(const B of(o=(i=s.candidates)==null?void 0:i[0].content)==null?void 0:o.parts){const c=on(B);c.type==="text"&&e(c)&&t.push(c.text)}return t.length>0?t.join(""):""}function Pg(s){var t,n,r,i;if(!s)return;const e=[];if((n=(t=s.candidates)==null?void 0:t[0].content)!=null&&n.parts)for(const o of(i=(r=s.candidates)==null?void 0:r[0].content)==null?void 0:i.parts){const B=on(o);B.type==="functionCall"&&e.push(B.functionCall)}if(e.length>0)return e}function KR(s){var t,n,r,i;const e=[];if((n=(t=s.candidates)==null?void 0:t[0].content)!=null&&n.parts)for(const o of(i=(r=s.candidates)==null?void 0:r[0].content)==null?void 0:i.parts){const B=on(o);B.type==="inlineData"&&e.push(B)}if(e.length>0)return e}const qR=[st.RECITATION,st.SAFETY,st.BLOCKLIST,st.PROHIBITED_CONTENT,st.SPII,st.MALFORMED_FUNCTION_CALL,st.IMAGE_SAFETY,st.IMAGE_PROHIBITED_CONTENT,st.IMAGE_OTHER,st.NO_IMAGE,st.IMAGE_RECITATION,st.LANGUAGE,st.UNEXPECTED_TOOL_CALL,st.TOO_MANY_TOOL_CALLS,st.MISSING_THOUGHT_SIGNATURE,st.MALFORMED_RESPONSE];function Fg(s){return!!s.finishReason&&qR.some(e=>e===s.finishReason)}function ps(s){var t,n,r;let e="";if((!s.candidates||s.candidates.length===0)&&s.promptFeedback)e+="Response was blocked",(t=s.promptFeedback)!=null&&t.blockReason&&(e+=` due to ${s.promptFeedback.blockReason}`),(n=s.promptFeedback)!=null&&n.blockReasonMessage&&(e+=`: ${s.promptFeedback.blockReasonMessage}`);else if((r=s.candidates)!=null&&r[0]){const i=s.candidates[0];Fg(i)&&(e+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(e+=`: ${i.finishMessage}`))}return e}/**
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
 */function Fl(s){if(s!=null){if(typeof s=="string")return{role:"system",parts:[{type:"text",text:s}]};if(s.type==="text"||"text"in s&&typeof s.text=="string")return{role:"system",parts:[Es(on(s))]};if(s.parts){const e=s.parts.map(t=>Es(on(t)));return s.role?{...s,parts:e}:{role:"system",parts:e}}}}function Mr(s){let e=[];if(typeof s=="string")e=[{type:"text",text:s}];else for(const t of s)typeof t=="string"?e.push({type:"text",text:t}):e.push(Es(on(t)));return $R(e)}function $R(s){const e={role:"user",parts:[]};let t=!1,n=!1;for(const r of s)r.type==="functionResponse"||"functionResponse"in r?n=!0:t=!0,e.parts.push(r);if(t&&n)throw new ne(ee.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!t&&!n)throw new ne(ee.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function xB(s){let e;if(s.contents){const t=s;e={...t,contents:t.contents.map(n=>({...n,parts:n.parts?n.parts.map(on):[]}))}}else e={contents:[Mr(s)]};return s.systemInstruction&&(e.systemInstruction=Fl(s.systemInstruction)),e}function zR(s){return s.parts&&Array.isArray(s.parts)?{...s,parts:s.parts.map(Ll)}:s}function Ll(s){let e;if("type"in s){const{type:t,...n}=s;e=n}else e=s;return e.functionResponse&&(e={...e,functionResponse:zR(e.functionResponse)}),e}function kl(s){return s.parts?{...s,parts:s.parts.map(Ll)}:s}function Lg(s){return s==null||typeof s=="string"?s:"parts"in s&&Array.isArray(s.parts)?kl(s):Ll(s)}function kg(s){const e={...s};return e.contents&&(e.contents=e.contents.map(kl)),e.systemInstruction&&(e.systemInstruction=Lg(e.systemInstruction)),e}function WR(s){const e={...s};return e.contents&&(e.contents=e.contents.map(kl)),e.systemInstruction&&(e.systemInstruction=Lg(e.systemInstruction)),e}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function xg(s){var e,t;if((e=s.safetySettings)==null||e.forEach(n=>{if(n.method)throw new ne(ee.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(t=s.generationConfig)!=null&&t.topK){const n=Math.round(s.generationConfig.topK);n!==s.generationConfig.topK&&(Ve.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),s.generationConfig.topK=n)}return s}function xl(s){return{candidates:s.candidates?QR(s.candidates):void 0,promptFeedback:s.promptFeedback?XR(s.promptFeedback):void 0,usageMetadata:s.usageMetadata}}function YR(s,e){return{generateContentRequest:{model:e,...s}}}function QR(s){const e=[];let t;return e&&s.forEach(n=>{var o,B;let r;if(n.citationMetadata&&(r={citations:n.citationMetadata.citationSources}),n.safetyRatings&&(t=n.safetyRatings.map(c=>({...c,severity:c.severity??vg.HARM_SEVERITY_UNSUPPORTED,probabilityScore:c.probabilityScore??0,severityScore:c.severityScore??0}))),(B=(o=n.content)==null?void 0:o.parts)!=null&&B.some(c=>"videoMetadata"in c&&c.videoMetadata))throw new ne(ee.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const i={index:n.index,content:n.content,finishReason:n.finishReason,finishMessage:n.finishMessage,safetyRatings:t,citationMetadata:r,groundingMetadata:n.groundingMetadata,urlContextMetadata:n.urlContextMetadata};e.push(i)}),e}function XR(s){const e=[];return(s.safetyRatings??[]).forEach(n=>{e.push({category:n.category,probability:n.probability,severity:n.severity??vg.HARM_SEVERITY_UNSUPPORTED,probabilityScore:n.probabilityScore??0,severityScore:n.severityScore??0,blocked:n.blocked})}),{blockReason:s.blockReason,safetyRatings:e,blockReasonMessage:s.blockReasonMessage}}/**
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
 */const iC=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function ZR(s,e,t){const n=s.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=sv(n),[i,o]=r.tee(),{response:B,firstValue:c}=await ev(o,e,t);return{stream:nv(i,e,t),response:B,firstValue:c}}async function ev(s,e,t){const[n,r]=s.tee(),i=n.getReader(),{value:o}=await i.read();return{firstValue:o,response:tv(r,e,t)}}async function tv(s,e,t){const n=[],r=s.getReader();for(;;){const{done:i,value:o}=await r.read();if(i){let B=rv(n);return e.backend.backendType===_n.GOOGLE_AI&&(B=xl(B)),aa(B,t)}n.push(o)}}async function*nv(s,e,t){var r,i;const n=s.getReader();for(;;){const{value:o,done:B}=await n.read();if(B)break;let c;e.backend.backendType===_n.GOOGLE_AI?c=aa(xl(o),t):c=aa(o,t);const l=(r=c.candidates)==null?void 0:r[0];!((i=l==null?void 0:l.content)!=null&&i.parts)&&!(l!=null&&l.finishReason)&&!(l!=null&&l.citationMetadata)&&!(l!=null&&l.urlContextMetadata)||(yield c)}}function sv(s){const e=s.getReader();return new ReadableStream({start(n){let r="";return i();function i(){return e.read().then(({value:o,done:B})=>{if(B){if(r.trim()){n.error(new ne(ee.PARSE_FAILED,"Failed to parse stream"));return}n.close();return}r+=o;let c=r.match(iC),l;for(;c;){try{l=JSON.parse(c[1])}catch{n.error(new ne(ee.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}n.enqueue(l),r=r.substring(c[0].length),c=r.match(iC)}return i()})}}})}function rv(s){const e=s[s.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const n of s)if(n.candidates)for(const r of n.candidates){const i=r.index||0;t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:r.index}),t.candidates[i].citationMetadata=r.citationMetadata,t.candidates[i].finishReason=r.finishReason,t.candidates[i].finishMessage=r.finishMessage,t.candidates[i].safetyRatings=r.safetyRatings,t.candidates[i].groundingMetadata=r.groundingMetadata;const o=r.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(t.candidates[i].urlContextMetadata=o),r.content){if(!r.content.parts)continue;t.candidates[i].content||(t.candidates[i].content={role:r.content.role||"user",parts:[]});for(const B of r.content.parts){if("text"in B&&B.text==="")continue;if(Object.keys(B).length===0)throw new ne(ee.INVALID_CONTENT,"Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");const c=on({...B});Object.keys(c).length>0&&t.candidates[i].content.parts.push(c)}}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const iv=[ee.FETCH_ERROR,ee.ERROR,ee.API_NOT_ENABLED];async function Mg(s,e,t,n){if(!e)return{response:await n(),inferenceSource:On.IN_CLOUD};switch(e.mode){case Et.ONLY_ON_DEVICE:if(await e.isAvailable(s))return{response:await t(),inferenceSource:On.ON_DEVICE};throw new ne(ee.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case Et.ONLY_IN_CLOUD:return{response:await n(),inferenceSource:On.IN_CLOUD};case Et.PREFER_IN_CLOUD:try{return{response:await n(),inferenceSource:On.IN_CLOUD}}catch(r){if(r instanceof ne&&iv.includes(r.code)&&await e.isAvailable(s))return{response:await t(),inferenceSource:On.ON_DEVICE};throw r}case Et.PREFER_ON_DEVICE:return await e.isAvailable(s)?{response:await t(),inferenceSource:On.ON_DEVICE}:{response:await n(),inferenceSource:On.IN_CLOUD};default:throw new ne(ee.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
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
 */async function ov(s,e,t,n){return t=kg(t),s.backend.backendType===_n.GOOGLE_AI&&(t=xg(t)),Pl({task:"streamGenerateContent",model:e,apiSettings:s,stream:!0,singleRequestOptions:n},JSON.stringify(t))}async function Vg(s,e,t,n,r){const i=await Mg(t,n,()=>n.generateContentStream(t),()=>ov(s,e,t,r));return ZR(i.response,s,i.inferenceSource)}async function av(s,e,t,n){return t=kg(t),s.backend.backendType===_n.GOOGLE_AI&&(t=xg(t)),Pl({model:e,task:"generateContent",apiSettings:s,stream:!1,singleRequestOptions:n},JSON.stringify(t))}async function Gg(s,e,t,n,r){const i=await Mg(t,n,()=>n.generateContent(t),()=>av(s,e,t,r)),o=await Bv(i.response,s);return{response:aa(o,i.inferenceSource)}}async function Bv(s,e){const t=await s.json();return e.backend.backendType===_n.GOOGLE_AI?xl(t):t}/**
 * @license
 * Copyright 2026 Google LLC
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
 */const oC="SILENT_ERROR",aC=10;class cv{constructor(e,t,n){this.params=t,this.requestOptions=n,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,Es(this._history).map(e=>({...e,parts:e.parts?e.parts.map(on):[]}))}async _sendMessage(e,t){let n={};await this._sendPromise;const r=[];return this._sendPromise=this._sendPromise.then(async()=>{var c,l,h;let i,o=0;const B=((c=this.requestOptions)==null?void 0:c.maxSequentialFunctionCalls)??aC;do{let C;if(i){o++;const y=await this._callFunctionsAsNeeded(i);C=Mr(y)}else C=Mr(e);const p=this._formatRequest(C,[...r]);r.push(C);const _=await this._callGenerateContent(p,t);if(_)if(n=_,i=this._getCallableFunctionCalls(_.response),_.response.candidates&&_.response.candidates.length>0){const y={parts:((l=_.response.candidates)==null?void 0:l[0].content.parts)||[],role:((h=_.response.candidates)==null?void 0:h[0].content.role)||"model"};r.push(Es(y))}else{const y=ps(_.response);y&&Ve.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}else i=void 0}while(i&&o<B);i&&o>=B&&Ve.warn(`Automatic function calling exceeded the limit of ${B} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(r),n}async _sendMessageStream(e,t){await this._sendPromise;const n=[],i=(async()=>{var h;let o,B=0;const c=((h=this.requestOptions)==null?void 0:h.maxSequentialFunctionCalls)??aC;let l;do{let C;if(o){B++;const _=await this._callFunctionsAsNeeded(o);C=Mr(_)}else C=Mr(e);const p=this._formatRequest(C,[...n]);if(n.push(C),l=await this._callGenerateContentStream(p,t),o=this._getCallableFunctionCalls(l.firstValue),o&&l.firstValue&&l.firstValue.candidates&&l.firstValue.candidates.length>0){const _={...l.firstValue.candidates[0].content};_.role||(_.role="model"),n.push(_)}}while(o&&B<c);return o&&B>=c&&Ve.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`),{stream:l.stream,response:l.response}})();return this._sendPromise=this._sendPromise.then(async()=>i).catch(o=>{throw new Error(oC)}).then(o=>o.response).then(o=>{if(o.candidates&&o.candidates.length>0){this._history=this._history.concat(n);const B={...o.candidates[0].content};B.role||(B.role="model"),this._history.push(Es(B))}else{const B=ps(o);B&&Ve.warn(`sendMessageStream() was unsuccessful. ${B}. Inspect response object for details.`)}}).catch(o=>{o.message!==oC&&o.name!=="AbortError"&&Ve.error(o)}),i}_getCallableFunctionCalls(e){var r,i,o;const t=(i=(r=this.params)==null?void 0:r.tools)==null?void 0:i.find(B=>B.functionDeclarations);if(!(t!=null&&t.functionDeclarations))return;const n=Pg(e);if(n){for(const B of n)if(!((o=t.functionDeclarations)==null?void 0:o.some(l=>l.name===B.name&&typeof l.functionReference=="function")))return;return n}}async _callFunctionsAsNeeded(e){var i,o;const t=[],n=[],r=(o=(i=this.params)==null?void 0:i.tools)==null?void 0:o.find(B=>B.functionDeclarations);if(r&&r.functionDeclarations){for(const c of e){const l=r.functionDeclarations.find(h=>h.name===c.name);if(l!=null&&l.functionReference){const h=Promise.resolve(l.functionReference(c.args)).catch(C=>{const p=new ne(ee.ERROR,`Error in user-defined function "${l.name}": ${C.message}`);throw p.stack=C.stack,p});t.push({name:c.name,id:c.id,results:h}),n.push(h)}}await Promise.all(n);const B=[];for(const{name:c,id:l,results:h}of t){const C={name:c,response:await h};l&&(C.id=l),B.push({type:"functionResponse",functionResponse:C})}return B}else throw new ne(ee.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
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
 */const lv=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],uv={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},BC={user:["model"],function:["model"],model:["user","function"],system:[]};function hv(s){let e=null;for(const t of s){const{role:n,parts:r}=t;if(!e&&n!=="user")throw new ne(ee.INVALID_CONTENT,`First Content should be with role 'user', got ${n}`);if(!sC.includes(n))throw new ne(ee.INVALID_CONTENT,`Each item should include role field. Got ${n} but valid roles are: ${JSON.stringify(sC)}`);if(!Array.isArray(r))throw new ne(ee.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(r.length===0)throw new ne(ee.INVALID_CONTENT,"Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const B of r){if(B.type)i[B.type]+=1;else for(const c of["text","inlineData","functionCall","functionResponse","fileData","executableCode","codeExecutionResult"])c in B&&(i[c]+=1);"thought"in B&&B.thought&&(i.thought+=1),"thoughtSignature"in B&&B.thoughtSignature&&(i.thoughtSignature+=1)}const o=uv[n];for(const B of lv)if(!o.includes(B)&&i[B]>0)throw new ne(ee.INVALID_CONTENT,`Content with role '${n}' can't contain '${B}' part`);if(e&&!BC[n].includes(e.role))throw new ne(ee.INVALID_CONTENT,`Content with role '${n}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(BC)}`);e=t}}/**
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
 */class fv extends cv{constructor(e,t,n,r,i){var o;super(e,r,i),this.model=t,this.chromeAdapter=n,this.params=r,this.requestOptions=i,r!=null&&r.history&&(hv(r.history),this._history=Es(r.history)),((o=this.params)==null?void 0:o.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:Fl(this.params.systemInstruction)})}_formatRequest(e,t){var n,r,i,o,B;return{safetySettings:(n=this.params)==null?void 0:n.safetySettings,generationConfig:(r=this.params)==null?void 0:r.generationConfig,tools:(i=this.params)==null?void 0:i.tools,toolConfig:(o=this.params)==null?void 0:o.toolConfig,systemInstruction:(B=this.params)==null?void 0:B.systemInstruction,contents:[...this._history,...t,e]}}_callGenerateContent(e,t){return Gg(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}_callGenerateContentStream(e,t){return Vg(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}async sendMessage(e,t){return this._sendMessage(e,t)}async sendMessageStream(e,t){return this._sendMessageStream(e,t)}}/**
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
 */async function Cv(s,e,t,n){t=WR(t);let r="";if(s.backend.backendType===_n.GOOGLE_AI){const o=YR(t,e);r=JSON.stringify(o)}else r=JSON.stringify(t);return(await Pl({model:e,task:"countTokens",apiSettings:s,stream:!1,singleRequestOptions:n},r)).json()}async function dv(s,e,t,n,r){if((n==null?void 0:n.mode)===Et.ONLY_ON_DEVICE)throw new ne(ee.UNSUPPORTED,"countTokens() is not supported for on-device models.");return Cv(s,e,t,r)}/**
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
 */class pv extends zr{constructor(e,t,n,r){super(e,t.model),this.chromeAdapter=r,this.generationConfig=t.generationConfig||{},gv(this.generationConfig),this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Fl(t.systemInstruction),this.requestOptions=n||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===Et.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===an.UNAVAILABLE){const n=new ne(ee.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===Et.ONLY_ON_DEVICE)throw n;Ve.debug(n.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,t){const n=xB(e);return Gg(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t})}async generateContentStream(e,t){const n=xB(e),{stream:r,response:i}=await Vg(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t});return{stream:r,response:i}}startChat(e){return new fv(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,t){const n=xB(e);return dv(this._apiSettings,this.model,n,this.chromeAdapter,{...this.requestOptions,...t})}}function gv(s){var e,t;if(((e=s.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((t=s.thinkingConfig)!=null&&t.thinkingLevel))throw new ne(ee.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(s.responseSchema!=null&&s.responseJsonSchema!=null)throw new ne(ee.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((s.responseSchema!=null||s.responseJsonSchema!=null)&&s.responseMimeType!=="application/json"&&s.responseMimeType!=="text/x.enum")throw new ne(ee.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
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
 */class Pe{constructor(e){if(!e.type&&!e.anyOf)throw new ne(ee.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const t in e)this[t]=e[t];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=e.hasOwnProperty("nullable")?!!e.nullable:!1}toJSON(){const e={type:this.type};for(const t in this)this.hasOwnProperty(t)&&this[t]!==void 0&&(t!=="required"||this.type===ks.OBJECT)&&(e[t]=this[t]);return e}static array(e){return new Dv(e,e.items)}static object(e){return new wv(e,e.properties,e.optionalProperties)}static string(e){return new cC(e)}static enumString(e){return new cC(e,e.enum)}static integer(e){return new mv(e)}static number(e){return new Ev(e)}static boolean(e){return new _v(e)}static anyOf(e){return new yv(e)}}class mv extends Pe{constructor(e){super({type:ks.INTEGER,...e})}}class Ev extends Pe{constructor(e){super({type:ks.NUMBER,...e})}}class _v extends Pe{constructor(e){super({type:ks.BOOLEAN,...e})}}class cC extends Pe{constructor(e,t){super({type:ks.STRING,...e}),this.enum=t}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class Dv extends Pe{constructor(e,t){super({type:ks.ARRAY,...e}),this.items=t}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class wv extends Pe{constructor(e,t,n=[]){super({type:ks.OBJECT,...e}),this.properties=t,this.optionalProperties=n}toJSON(){const e=super.toJSON();e.properties={...this.properties};const t=[];if(this.optionalProperties){for(const n of this.optionalProperties)if(!this.properties.hasOwnProperty(n))throw new ne(ee.INVALID_SCHEMA,`Property "${n}" specified in "optionalProperties" does not exist.`)}for(const n in this.properties)this.properties.hasOwnProperty(n)&&(e.properties[n]=this.properties[n].toJSON(),this.optionalProperties.includes(n)||t.push(n));return t.length>0&&(e.required=t),delete e.optionalProperties,e}}class yv extends Pe{constructor(e){if(e.anyOf.length===0)throw new ne(ee.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(t=>t.toJSON())),e}}/**
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
 */function Iv(s=Di(),e){s=We(s);const t=En(s,ar),n=(e==null?void 0:e.backend)??new Pa,r=FR(n),i=t.getImmediate({identifier:r}),o=i.options;if(o){const B=e==null?void 0:e.useLimitedUseAppCheckTokens,c=!!o.useLimitedUseAppCheckTokens;if(B!=null&&!!B!==c)throw new ne(ee.ALREADY_INITIALIZED,`getAI() has already been called for app "${s.name}" and this backend with useLimitedUseAppCheckTokens: ${c}. This option cannot be changed after the AI instance has been initialized. Pass the desired options to the first getAI() call for this app and backend, or omit useLimitedUseAppCheckTokens to reuse the existing instance.`);return i}return i.options={useLimitedUseAppCheckTokens:(e==null?void 0:e.useLimitedUseAppCheckTokens)??!1},i}const Tv=["mode","onDeviceParams","inCloudParams"];function Ug(s,e,t){var B;const n=e;let r;if(n.mode){for(const c of Object.keys(e))Tv.includes(c)||Ve.warn(`When a hybrid inference mode is specified (mode is currently set to ${n.mode}), "${c}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);r=n.inCloudParams||{model:PR}}else r=e;if(!r.model)throw new ne(ee.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const i=(B=s.chromeAdapterFactory)==null?void 0:B.call(s,n.mode,typeof window>"u"?void 0:window,n.onDeviceParams),o=new pv(s,r,t,i);return o._apiSettings.inferenceMode=n.mode,o}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Av(){kt(new vt(ar,MR,"PUBLIC").setMultipleInstances(!0)),ht(tC,mc),ht(tC,mc,"esm2020")}Av();const Hg=Iv(Li,{backend:new Pa}),jg={auto:Et.PREFER_ON_DEVICE,device:Et.ONLY_ON_DEVICE,cloud:Et.ONLY_IN_CLOUD},Fa=["Fashion","Shoes & bags","Beauty & perfume","Home & kitchen","Electronics","Phones & accessories","Handicrafts & decor","Food & local products","Kids & baby","Sports & outdoors","Auto & moto","Other"],La=["New","Like new","Good","Fair","For parts"],bv={type:"object",properties:{title:{type:"string",description:"Max 70 characters. Brand + product + key attribute."},description:{type:"string",description:"2-4 short sentences."},category:{type:"string",enum:Fa},condition:{type:"string",enum:La},attributes:{type:"array",items:{type:"object",properties:{name:{type:"string"},value:{type:"string"}},required:["name","value"]}},tags:{type:"array",items:{type:"string"}},price:{type:"number",description:"Price in local currency if the seller gave one, else 0."},missing_info:{type:"array",items:{type:"string"},description:"Facts a buyer would ask about that are missing (size, color, warranty...)."}},required:["title","description","category","condition","attributes","tags","price","missing_info"]},Rv=Pe.object({properties:{title:Pe.string(),description:Pe.string(),category:Pe.enumString({enum:Fa}),condition:Pe.enumString({enum:La}),attributes:Pe.array({items:Pe.object({properties:{name:Pe.string(),value:Pe.string()}})}),tags:Pe.array({items:Pe.string()}),price:Pe.number(),missing_info:Pe.array({items:Pe.string()})}}),MB=new Map;function Jg(s,e){return MB.has(s)||MB.set(s,e()),MB.get(s)}function Kg(s,e){return Jg(`listing:${s}:${e.cloudModel}`,()=>Ug(Hg,{mode:jg[s],onDeviceParams:{createOptions:{expectedInputs:[{type:"image"},{type:"text",languages:["en"]}],expectedOutputs:[{type:"text",languages:["en"]}]},promptOptions:{responseConstraint:bv}},inCloudParams:{model:e.cloudModel,generationConfig:{responseMimeType:"application/json",responseSchema:Rv,temperature:.4}}}))}function qg(s,e,t){return Jg(`text:${s}:${t}:${e.cloudModel}`,()=>Ug(Hg,{mode:jg[s],onDeviceParams:{createOptions:{expectedInputs:[{type:"text",languages:["en",t]}],expectedOutputs:[{type:"text",languages:[t]}]}},inCloudParams:{model:e.cloudModel,generationConfig:{temperature:.5}}}))}async function Ml(s){const e=performance.now(),t=await s();return{result:t,ms:Math.round(performance.now()-e),source:t.response.inferenceSource||"in_cloud"}}async function vv({photoBase64:s,note:e,mode:t,cfg:n}){const i=[[`You help small sellers in Morocco list products on ${n.marketplace}, an online marketplace with cash on delivery.`,`Look at the product photo and write a listing in English. ${n.listingStyle}`,"Describe only the item being sold. Ignore food, props, people and background in the photo; never list them as included.","Only state what you can see or what the seller wrote. Never invent brands, sizes or specs; list unknowns in missing_info instead.",`If the seller gave a price, put it in "price" (number, ${n.currency}); otherwise 0.`,`Seller note: ${(e==null?void 0:e.trim())||"(none)"}`,"Answer with JSON only."].join(`
`)];s&&i.push({type:"inlineData",inlineData:{data:s,mimeType:"image/jpeg"}});const o=await Ml(()=>Kg(t,n).generateContent(i)),B=o.result.response.text().trim().replace(/^```(json)?|```$/g,"");return{listing:JSON.parse(B),source:o.source,ms:o.ms}}const Ov={fr:"French",ar:"Modern Standard Arabic",es:"Spanish"};async function Sv({listing:s,lang:e,mode:t,cfg:n}){var l,h;const r=[`Translate this marketplace listing into ${Ov[e]}. Keep brand names. Return exactly two lines:`,"TITLE: <translated title>","DESCRIPTION: <translated description>","",`TITLE: ${s.title}`,`DESCRIPTION: ${s.description}`].join(`
`),i=await Ml(()=>qg(t,n,e).generateContent(r)),o=i.result.response.text(),B=((l=(o.match(/TITLE:\s*(.+)/i)||[])[1])==null?void 0:l.trim())||"",c=((h=(o.match(/DESCRIPTION:\s*([\s\S]+)/i)||[])[1])==null?void 0:h.trim())||o.trim();return{title:B,description:c,source:i.source,ms:i.ms}}async function Nv({listing:s,message:e,mode:t,cfg:n}){const r=[`You are a friendly small seller on ${n.marketplace} (Morocco, cash on delivery, delivery 24-72h).`,"Write a short reply (max 3 sentences) to the buyer, in the same language the buyer used.","Use only facts from the listing. If the answer is not in the listing, say you will check and reply soon.",`Listing: ${s.title}. ${s.description} Condition: ${s.condition}. Price: ${s.price||"not set"} ${n.currency}.`,`Attributes: ${(s.attributes||[]).map(o=>`${o.name}: ${o.value}`).join("; ")||"none"}`,`Buyer message: ${e}`].join(`
`),i=await Ml(()=>qg(t,n,"en").generateContent(r));return{reply:i.result.response.text().trim(),source:i.source,ms:i.ms}}async function Pv(){if(!("LanguageModel"in self))return"unsupported";try{return await self.LanguageModel.availability({expectedInputs:[{type:"image"},{type:"text",languages:["en"]}],expectedOutputs:[{type:"text",languages:["en"]}]})}catch{return"unavailable"}}async function Fv(s,e){await Kg("auto",s).initializeDeviceModel(e)}const X=s=>document.getElementById(s),Ut=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);let mn={cloudModel:"gemini-3.5-flash-lite",currency:"MAD",marketplace:"Wurket",listingStyle:""},Sn=null,rt=null,Vl={};const $g="wurket-lister:listings",ki=()=>{try{return JSON.parse(localStorage.getItem($g))||[]}catch{return[]}},zg=s=>{try{localStorage.setItem($g,JSON.stringify(s))}catch(e){zt("Storage full: "+e.message)}};function zt(s,e=3200){const t=X("toast");t.textContent=s,t.hidden=!1,clearTimeout(zt.t),zt.t=setTimeout(()=>t.hidden=!0,e)}const ka=()=>document.querySelector("input[name=mode]:checked").value,Gl=(s,e,t)=>{s.className="badge "+e,s.textContent=(e==="on_device"?"🔒 On-device · Gemini Nano":`☁️ Cloud · ${mn.cloudModel}`)+` · ${(t/1e3).toFixed(1)}s`};async function xa(s,e){s.disabled=!0,s.classList.add("spin");try{return await e()}catch(t){console.error(t);const n=String(t.message||t);zt(/on-device|ONLY_ON_DEVICE|LanguageModel|not available/i.test(n)&&ka()==="device"?"The on-device model is not ready on this device. Switch to Hybrid to fall back to the cloud.":"AI request failed: "+n.slice(0,160),6e3)}finally{s.disabled=!1,s.classList.remove("spin")}}async function Ec(){const s=await Pv(),e=X("device"),t={available:["ok","Gemini Nano ready on this device"],downloadable:["bad","On-device model not downloaded"],downloading:["bad","Downloading on-device model…"],unavailable:["cloud","No on-device model → cloud"],unsupported:["cloud","Browser has no built-in AI → cloud"]},[n,r]=t[s]||["cloud",s];e.className="chip "+n,e.textContent=r,X("prepare").hidden=!(s==="downloadable"||s==="downloading")}function Ul(){const s=X("net");s.textContent=navigator.onLine?"online":"offline",s.className="chip "+(navigator.onLine?"":"bad")}addEventListener("online",()=>{Ul(),Ma(!0)});addEventListener("offline",Ul);X("prepare").onclick=()=>xa(X("prepare"),async()=>{await Fv(mn,s=>{X("device").textContent=`Downloading on-device model… ${Math.round(s*100)}%`}),await Ec()});async function Wg(s){Sn=await Lv(s,768),X("preview").src=Sn.dataUrl,X("preview").hidden=!1,X("dropText").hidden=!0,X("draft").disabled=!1}X("photo").onchange=s=>{const e=s.target.files[0];e&&Wg(e)};const lC={};document.querySelectorAll("[data-sample]").forEach(s=>{const e=s.dataset.sample;lC[e]=fetch(`./demo-photos/${e}`).then(t=>t.blob()).catch(()=>null),s.onclick=async()=>{const t=await lC[e];t?Wg(t):zt("Sample photo not available offline")}});function Lv(s,e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>{const i=Math.min(1,e/Math.max(r.width,r.height)),o=document.createElement("canvas");o.width=Math.round(r.width*i),o.height=Math.round(r.height*i),o.getContext("2d").drawImage(r,0,0,o.width,o.height);const B=o.toDataURL("image/jpeg",.85);t({dataUrl:B,base64:B.split(",")[1]}),URL.revokeObjectURL(r.src)},r.onerror=n,r.src=URL.createObjectURL(s)})}X("category").innerHTML=Fa.map(s=>`<option>${s}</option>`).join("");X("condition").innerHTML=La.map(s=>`<option>${s}</option>`).join("");X("draft").onclick=()=>xa(X("draft"),async()=>{const{listing:s,source:e,ms:t}=await vv({photoBase64:Sn==null?void 0:Sn.base64,note:X("note").value,mode:ka(),cfg:mn});rt={id:crypto.randomUUID(),...s,photo:Sn==null?void 0:Sn.dataUrl,source:e,createdAt:Date.now(),synced:!1},Vl={},kv(),Gl(X("draftBadge"),e,t)});function kv(){X("result").hidden=!1,X("title").value=rt.title||"",X("desc").value=rt.description||"",X("category").value=Fa.includes(rt.category)?rt.category:"Other",X("condition").value=La.includes(rt.condition)?rt.condition:"Good",X("price").value=rt.price||"",X("attrs").innerHTML=(rt.attributes||[]).map(e=>`<span><b>${Ut(e.name)}:</b> ${Ut(e.value)}</span>`).join(""),X("tags").innerHTML=(rt.tags||[]).slice(0,8).map(e=>`<span>#${Ut(String(e).replace(/^#/,"").replace(/\s+/g,""))}</span>`).join("");const s=(rt.missing_info||[]).map(e=>String(e).trim()).filter(Boolean);X("missing").hidden=!s.length,X("missing").innerHTML=`<b>Buyers will ask:</b> ${s.map(Ut).join(" · ")}. Add it to the note and draft again, or edit the text.`,X("translations").innerHTML=""}function Yg(){Object.assign(rt,{title:X("title").value.trim(),description:X("desc").value.trim(),category:X("category").value,condition:X("condition").value,price:Number(X("price").value)||0})}for(const[s,e]of[["trFr","fr"],["trAr","ar"]])X(s).onclick=()=>xa(X(s),async()=>{var r;Yg();const t=await Sv({listing:rt,lang:e,mode:ka(),cfg:mn});Vl[e]={title:t.title,description:t.description};const n=document.createElement("div");n.className="tr",e==="ar"&&(n.dir="rtl"),n.innerHTML=`<div class="row between"><strong>${e==="fr"?"Français":"العربية"}</strong><span class="badge"></span></div><p><b>${Ut(t.title)}</b><br>${Ut(t.description)}</p>`,Gl(n.querySelector(".badge"),t.source,t.ms),(r=X("translations").querySelector(`[data-lang=${e}]`))==null||r.remove(),n.dataset.lang=e,X("translations").append(n)});X("save").onclick=async()=>{Yg();const s=ki().filter(e=>e.id!==rt.id);s.unshift({...rt,translations:Vl,synced:!1}),zg(s),Hl(),zt("Saved on this device"),Ma(!0)};X("replyBtn").onclick=()=>xa(X("replyBtn"),async()=>{const s=ki().find(t=>t.id===X("replyListing").value)||rt;if(!s)return zt("Save a listing first");if(!X("buyerMsg").value.trim())return zt("Paste the buyer message");const e=await Nv({listing:s,message:X("buyerMsg").value,mode:ka(),cfg:mn});X("replyText").textContent=e.reply,X("replyOut").hidden=!1,Gl(X("replyBadge"),e.source,e.ms)});X("copyReply").onclick=()=>navigator.clipboard.writeText(X("replyText").textContent).then(()=>zt("Copied"));function Hl(){const s=ki();X("list").innerHTML=s.length?s.map(e=>`
    <li><img src="${e.photo||""}" alt="" /><div class="meta"><b>${Ut(e.title)}</b>
    <small>${Ut(e.category)} · ${Ut(e.condition)} · ${e.price?e.price+" "+Ut(mn.currency):"no price"} · ${e.source==="on_device"?"🔒 drafted on-device":"☁️ drafted in cloud"} · ${e.synced?"✓ synced":"not synced"}</small></div>
    <button class="ghost small" data-wa="${e.id}">Copy for WhatsApp</button></li>`).join(""):"<li><small>No listings yet. Draft one above.</small></li>",X("replyListing").innerHTML=s.map(e=>`<option value="${e.id}">${Ut(e.title)}</option>`).join("")||'<option value="">(current draft)</option>',X("list").querySelectorAll("[data-wa]").forEach(e=>e.onclick=()=>{const t=s.find(r=>r.id===e.dataset.wa),n=`*${t.title}*
${t.description}
${t.price?`Prix / Price: ${t.price} ${mn.currency}
`:""}Paiement à la livraison ✅`;navigator.clipboard.writeText(n).then(()=>zt("Copied, paste it in WhatsApp"))})}async function Ma(s){if(!navigator.onLine){s||zt("Offline: listings will sync when you are back online");return}const e=ki(),t=e.filter(n=>!n.synced);try{for(const n of t)await bR(n),n.synced=!0;zg(e),Hl(),X("syncState").textContent=t.length?`Synced ${t.length} listing(s) to Firestore.`:"Everything is synced."}catch(n){console.error(n),X("syncState").textContent="Sync failed: "+n.message}}X("sync").onclick=()=>Ma(!1);X("csv").onclick=()=>{const s=["title","description","category","condition","price","currency","tags","title_fr","description_fr","title_ar","description_ar"],e=i=>`"${String(i??"").replace(/"/g,'""')}"`,t=ki().map(i=>{var o,B,c,l,h,C,p,_;return[i.title,i.description,i.category,i.condition,i.price||"",mn.currency,(i.tags||[]).join(" "),(B=(o=i.translations)==null?void 0:o.fr)==null?void 0:B.title,(l=(c=i.translations)==null?void 0:c.fr)==null?void 0:l.description,(C=(h=i.translations)==null?void 0:h.ar)==null?void 0:C.title,(_=(p=i.translations)==null?void 0:p.ar)==null?void 0:_.description].map(e).join(",")}),n=new Blob(["\uFEFF"+[s.join(","),...t].join(`
`)],{type:"text/csv"});Object.assign(document.createElement("a"),{href:URL.createObjectURL(n),download:"listings.csv"}).click()};(async()=>(Ul(),Hl(),mn=await TR(),await Ec(),Rg().then(()=>Ma(!0)).catch(s=>console.warn("auth",s)),setInterval(Ec,15e3)))();
