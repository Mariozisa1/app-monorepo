!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="13a80937-8997-4006-a12f-522f934e7711",e._sentryDebugIdIdentifier="sentry-dbid-13a80937-8997-4006-a12f-522f934e7711")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[41299],{451661:e=>{var t=10,r=41,n=107,i=9,a=25,o=10;function inputBytes(e){return r+(e.script?e.script.length:n)}function outputBytes(e){return e.script?o+e.script.length+(e.script.length>=74?2:1):i+(e.script?e.script.length:a)}function dustThreshold(e,t){return inputBytes({})*t}function transactionBytes(e,r){return t+e.reduce((function(e,t){return e+inputBytes(t)}),0)+r.reduce((function(e,t){return e+outputBytes(t)}),0)}function uintOrNaN(e){return"number"!=typeof e?NaN:isFinite(e)?Math.floor(e)!==e||e<0?NaN:e:NaN}function sumOrNaN(e){return e.reduce((function(e,t){return e+uintOrNaN(t.value)}),0)}var s=outputBytes({});e.exports={dustThreshold,finalize:function finalize(e,t,r){var n=transactionBytes(e,t),i=r*(n+s),a=sumOrNaN(e)-(sumOrNaN(t)+i);a>dustThreshold(0,r)&&(t=t.concat({value:a}));var o=sumOrNaN(e)-sumOrNaN(t);return isFinite(o)?{inputs:e,outputs:t,fee:o}:{fee:r*n}},inputBytes,outputBytes,sumOrNaN,sumForgiving:function sumForgiving(e){return e.reduce((function(e,t){return e+(isFinite(t.value)?t.value:0)}),0)},transactionBytes,uintOrNaN}},940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>w});var n=r(482451),i=r.n(n),a=r(324586),o=r(586330),s=r(230414),u=r(507140),c=r(606777),f=r(401349),p=r(404727),l=r(180556),d=r(929296),y=r(195309),h=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,y.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,d.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,a=(0,f.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,a,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,f.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,o.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,f._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,s.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,f.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,o.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),a=c.A.toBuffer(r),{curve:o}=this,s=(0,f.MX)(o,n,i,a);return Promise.resolve(s)},(0,s.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(){function CoreChainApiBase(){}var e,t,r,n,a,d,y,h,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return f.ev;case"secp256k1":return f.bI;case"nistp256":return f.OX;default:throw new u.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,o.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,o.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],a=e?.relPaths?.[0];if(!i&&a&&(i=r[[n,a].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,o.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:a}=e,o={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(o=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:a})),r.imported){var{privateKey:s}=(0,f.VV)({password:i,credential:r.imported}),p=c.A.bytesToHex((0,f.w)(i,s));o[n.path]=p,o[""]=p}if(!Object.keys(o).length)throw new Error("No private keys found");return o})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,o.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:a}=r,o=a.split("/"),s=n||[o.pop()],p=o.join("/");if(0===s.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,f.Wu)(e,i,t,p,s).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(a=(0,o.A)((function*(e,t){var r=this,{curve:n,generateFrom:a}=t,{template:s,hdCredential:p,password:d,indexes:y}=e,{pathPrefix:h,pathSuffix:v}=(0,l.Ah)(s),g=y.map((function(e){return v.replace("{index}",e.toString())})),w="privateKey"===a,b=[],P=[];w?P=(0,f.Wu)(n,p,d,h,g):b=yield(0,f.MJ)({curveName:n,hdCredential:p,password:d,prefix:h,relPaths:g});var A=w?P:b;if(A.length!==y.length)throw new u.He("Unable to get publick key.");var C,m=yield Promise.all(A.map((C=(0,o.A)((function*(t){var n,a,{path:o,extendedKey:{key:s}}=t;if(w){var u=c.A.bytesToHex((0,f.Yc)(d,s));a=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=s.toString("hex"),a=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:o},a)})),function(e){return C.apply(this,arguments)})));return{addresses:m}})),function baseGetAddressesFromHd(e,t){return a.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return p.ECoreCredentialType.hd;if(e.imported)return p.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(d=(0,o.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return d.apply(this,arguments)}),v.validateXpub=(y=(0,o.A)((function*(e){throw new u.MS})),function validateXpub(e){return y.apply(this,arguments)}),v.validateXprvt=(h=(0,o.A)((function*(e){throw new u.MS})),function validateXprvt(e){return h.apply(this,arguments)}),(0,s.A)(CoreChainApiBase)}()},541299:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(230414),i=r(929296),a=r(195309),o=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,o.A)(e);if(t){var i=(0,o.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var s=function(e){(0,i.A)(CoreChainHd,e);var t=_createSuper(CoreChainHd);function CoreChainHd(){return t.apply(this,arguments)}return(0,n.A)(CoreChainHd)}(r(724910).A)},724910:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(586330),i=r(230414),a=r(929296),o=r(195309),s=r(972715),u=r(507140);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var c=function(e){(0,a.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,o,s,c,f,p,l=CoreChainSoftware.prototype;return l.getExportedSecretKey=function getExportedSecretKey(e){throw new u.MS},l.getPrivateKeys=(r=(0,n.A)((function*(e){throw new u.MS})),function getPrivateKeys(e){return r.apply(this,arguments)}),l.signTransaction=(o=(0,n.A)((function*(e){throw new u.MS})),function signTransaction(e){return o.apply(this,arguments)}),l.signMessage=(s=(0,n.A)((function*(e){throw new u.MS})),function signMessage(e){return s.apply(this,arguments)}),l.getAddressFromPrivate=(c=(0,n.A)((function*(e){throw new u.MS})),function getAddressFromPrivate(e){return c.apply(this,arguments)}),l.getAddressFromPublic=(f=(0,n.A)((function*(e){throw new u.MS})),function getAddressFromPublic(e){return f.apply(this,arguments)}),l.getAddressesFromHd=(p=(0,n.A)((function*(e){throw new u.MS})),function getAddressesFromHd(e){return p.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(r(940916).G)},180556:(e,t,r)=>{"use strict";r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(451661),i=r.n(n),a=r(491180);function slicePathTemplate(e){return a.A.slicePathTemplate(e)}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}}}]);
//# sourceMappingURL=41299.1af027c118.chunk.js.map