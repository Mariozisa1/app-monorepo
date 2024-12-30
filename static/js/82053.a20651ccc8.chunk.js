!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b6c48fa3-bcd1-4616-a660-61955e8275cd",e._sentryDebugIdIdentifier="sentry-dbid-b6c48fa3-bcd1-4616-a660-61955e8275cd")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[82053],{940916:(e,t,r)=>{r.d(t,{G:()=>b});var n=r(482451),i=r.n(n),a=r(324586),o=r(586330),s=r(230414),u=r(507140),c=r(606777),d=r(401349),f=r(404727),p=r(180556),l=r(929296),y=r(195309),h=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,y.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,l.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,a=(0,d.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,a,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,d.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,o.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,d._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,s.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,d.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,o.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),a=c.A.toBuffer(r),{curve:o}=this,s=(0,d.MX)(o,n,i,a);return Promise.resolve(s)},(0,s.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(){function CoreChainApiBase(){}var e,t,r,n,a,l,y,h,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return d.ev;case"secp256k1":return d.bI;case"nistp256":return d.OX;default:throw new u.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,o.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,o.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],a=e?.relPaths?.[0];if(!i&&a&&(i=r[[n,a].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,o.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:a}=e,o={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(o=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:a})),r.imported){var{privateKey:s}=(0,d.VV)({password:i,credential:r.imported}),f=c.A.bytesToHex((0,d.w)(i,s));o[n.path]=f,o[""]=f}if(!Object.keys(o).length)throw new Error("No private keys found");return o})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,o.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:a}=r,o=a.split("/"),s=n||[o.pop()],f=o.join("/");if(0===s.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,d.Wu)(e,i,t,f,s).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(a=(0,o.A)((function*(e,t){var r=this,{curve:n,generateFrom:a}=t,{template:s,hdCredential:f,password:l,indexes:y}=e,{pathPrefix:h,pathSuffix:v}=(0,p.Ah)(s),g=y.map((function(e){return v.replace("{index}",e.toString())})),b="privateKey"===a,w=[],P=[];b?P=(0,d.Wu)(n,f,l,h,g):w=yield(0,d.MJ)({curveName:n,hdCredential:f,password:l,prefix:h,relPaths:g});var A=b?P:w;if(A.length!==y.length)throw new u.He("Unable to get publick key.");var S,C=yield Promise.all(A.map((S=(0,o.A)((function*(t){var n,a,{path:o,extendedKey:{key:s}}=t;if(b){var u=c.A.bytesToHex((0,d.Yc)(l,s));a=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=s.toString("hex"),a=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:o},a)})),function(e){return S.apply(this,arguments)})));return{addresses:C}})),function baseGetAddressesFromHd(e,t){return a.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return f.ECoreCredentialType.hd;if(e.imported)return f.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(l=(0,o.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return l.apply(this,arguments)}),v.validateXpub=(y=(0,o.A)((function*(e){throw new u.MS})),function validateXpub(e){return y.apply(this,arguments)}),v.validateXprvt=(h=(0,o.A)((function*(e){throw new u.MS})),function validateXprvt(e){return h.apply(this,arguments)}),(0,s.A)(CoreChainApiBase)}()},382053:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(230414),i=r(929296),a=r(195309),o=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,o.A)(e);if(t){var i=(0,o.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var s=function(e){(0,i.A)(CoreChainHd,e);var t=_createSuper(CoreChainHd);function CoreChainHd(){return t.apply(this,arguments)}return(0,n.A)(CoreChainHd)}(r(27580).A)},27580:(e,t,r)=>{r.d(t,{A:()=>b,h:()=>handleSignData});var n=r(586330),i=r(230414),a=r(929296),o=r(195309),s=r(972715),u=r(723453),c=r(258051),d=r(903403),f=r(825145),p=r(606777),l=r(424754),y=r(940916),h=r(401349),v=r(404727);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g="ed25519";function handleSignData(e){return(0,u.i)("TransactionData",e)}var b=function(e){(0,a.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,o,s,u,y,b,w,P=CoreChainSoftware.prototype;return P.getExportedSecretKey=(r=(0,n.A)((function*(e){var{password:t,keyType:r,credentials:n}=e,{privateKeyRaw:i}=yield this.baseGetDefaultPrivateKey(e);if(!i)throw new Error("privateKeyRaw is required");if(r===v.ECoreApiExportedSecretKeyType.privateKey)return`0x${(0,h.Yc)(t,i).toString("hex")}`;throw new Error(`SecretKey type not support: ${r}`)})),function getExportedSecretKey(e){return r.apply(this,arguments)}),P.getPrivateKeys=(o=(0,n.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:g})})),function getPrivateKeys(e){return o.apply(this,arguments)}),P.signTransaction=(s=(0,n.A)((function*(e){var{unsignedTx:t,account:{pub:r}}=e,n=yield this.baseGetSingleSigner({payload:e,curve:g});if(!t.rawTxUnsigned)throw new Error("unsignedTx.rawTxUnsigned is undefined");var i=yield n.getPrvkey(),a=c.h.fromSecretKey(i),o=p.A.toBuffer(t.rawTxUnsigned),s=yield a.signTransaction(o);return{txid:"",rawTx:s.bytes,signatureScheme:"ed25519",signature:s.signature,publicKey:l.A.addHexPrefix((0,f.wT)(r)),encodedTx:t.encodedTx}})),function signTransaction(e){return s.apply(this,arguments)}),P.signMessage=(u=(0,n.A)((function*(e){var t=e.unsignedMsg,r=yield this.baseGetSingleSigner({payload:e,curve:g}),n=yield r.getPrvkey(),i=c.h.fromSecretKey(n),a=p.A.toBuffer(t.message);return(yield i.signPersonalMessage(a)).signature})),function signMessage(e){return u.apply(this,arguments)}),P.getAddressFromPrivate=(y=(0,n.A)((function*(e){var t,{privateKeyRaw:r}=e;if(l.A.isHexString(r)&&(t=p.A.toBuffer(r,"hex")),!t)throw new Error("Invalid private key");var n=this.baseGetCurve(g).publicFromPrivate(t);return this.getAddressFromPublic({publicKey:p.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return y.apply(this,arguments)}),P.getAddressFromPublic=(b=(0,n.A)((function*(e){var{publicKey:t}=e,r=new d.G(p.A.toBuffer(t)),n=l.A.addHexPrefix(r.toSuiAddress());return Promise.resolve({address:n,publicKey:t})})),function getAddressFromPublic(e){return b.apply(this,arguments)}),P.getAddressesFromHd=(w=(0,n.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:g})})),function getAddressesFromHd(e){return w.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(y.G)},180556:(e,t,r)=>{r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(451661),i=r.n(n),a=r(491180);function slicePathTemplate(e){return a.A.slicePathTemplate(e)}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}}}]);
//# sourceMappingURL=82053.a20651ccc8.chunk.js.map