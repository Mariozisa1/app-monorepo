!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6577e90b-8d4a-4f60-83d0-86c74fdfac72",e._sentryDebugIdIdentifier="sentry-dbid-6577e90b-8d4a-4f60-83d0-86c74fdfac72")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[48881],{940916:(e,t,r)=>{r.d(t,{G:()=>b});var n=r(482451),i=r.n(n),o=r(324586),a=r(586330),s=r(230414),u=r(507140),c=r(606777),d=r(401349),f=r(404727),p=r(180556),l=r(929296),y=r(195309),v=r(972715),h=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,v.A)(e);if(t){var i=(0,v.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,y.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,l.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,o=(0,d.N)(n,{key:e,chainCode:h.alloc(32)},r).key.toString("hex");return(i=t.call(this,o,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,d.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,a.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,d._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,s.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=h.from(e,"hex"),this.uncompressedPublicKey=(0,d.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,a.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(h.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),o=c.A.toBuffer(r),{curve:a}=this,s=(0,d.MX)(a,n,i,o);return Promise.resolve(s)},(0,s.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,o.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(){function CoreChainApiBase(){}var e,t,r,n,o,l,y,v,h=CoreChainApiBase.prototype;return h.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return d.ev;case"secp256k1":return d.bI;case"nistp256":return d.OX;default:throw new u.He("Unsupported curve")}},h.baseCreateSigner=(e=(0,a.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),h.baseGetSingleSigner=(t=(0,a.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],o=e?.relPaths?.[0];if(!i&&o&&(i=r[[n,o].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),h.baseGetPrivateKeys=(r=(0,a.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:o}=e,a={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(a=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:o})),r.imported){var{privateKey:s}=(0,d.VV)({password:i,credential:r.imported}),f=c.A.bytesToHex((0,d.w)(i,s));a[n.path]=f,a[""]=f}if(!Object.keys(a).length)throw new Error("No private keys found");return a})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),h.baseGetPrivateKeysHd=(n=(0,a.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:o}=r,a=o.split("/"),s=n||[a.pop()],f=a.join("/");if(0===s.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,d.Wu)(e,i,t,f,s).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),h.baseGetAddressesFromHd=(o=(0,a.A)((function*(e,t){var r=this,{curve:n,generateFrom:o}=t,{template:s,hdCredential:f,password:l,indexes:y}=e,{pathPrefix:v,pathSuffix:h}=(0,p.Ah)(s),g=y.map((function(e){return h.replace("{index}",e.toString())})),b="privateKey"===o,w=[],A=[];b?A=(0,d.Wu)(n,f,l,v,g):w=yield(0,d.MJ)({curveName:n,hdCredential:f,password:l,prefix:v,relPaths:g});var P=b?A:w;if(P.length!==y.length)throw new u.He("Unable to get publick key.");var m,C=yield Promise.all(P.map((m=(0,a.A)((function*(t){var n,o,{path:a,extendedKey:{key:s}}=t;if(b){var u=c.A.bytesToHex((0,d.Yc)(l,s));o=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=s.toString("hex"),o=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:a},o)})),function(e){return m.apply(this,arguments)})));return{addresses:C}})),function baseGetAddressesFromHd(e,t){return o.apply(this,arguments)}),h.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return f.ECoreCredentialType.hd;if(e.imported)return f.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},h.baseGetDefaultPrivateKey=(l=(0,a.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return l.apply(this,arguments)}),h.validateXpub=(y=(0,a.A)((function*(e){throw new u.MS})),function validateXpub(e){return y.apply(this,arguments)}),h.validateXprvt=(v=(0,a.A)((function*(e){throw new u.MS})),function validateXprvt(e){return v.apply(this,arguments)}),(0,s.A)(CoreChainApiBase)}()},248881:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(230414),i=r(929296),o=r(195309),a=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var s=function(e){(0,i.A)(CoreChainImported,e);var t=_createSuper(CoreChainImported);function CoreChainImported(){return t.apply(this,arguments)}return(0,n.A)(CoreChainImported)}(r(703569).A)},703569:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(153142),i=r.n(n),o=r(586330),a=r(230414),s=r(929296),u=r(195309),c=r(972715),d=r(401349),f=r(507140),p=r(606777),l=r(940916),y=r(404727);const v=r(990530).default;var h=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,c.A)(e);if(t){var i=(0,c.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,u.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g="ed25519",b=function(e){(0,s.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,n,u,c,l,b,w,A,P=CoreChainSoftware.prototype;return P._signAlgoTx=(r=(0,o.A)((function*({encodedTx:e,signer:t}){var r=v.Transaction.from_obj_for_encoding(v.decodeObj(h.from(e,"base64"))),[n]=yield t.sign(r.bytesToSign());return{txid:r.txID(),rawTx:h.from(v.encodeObj({sig:n,txn:r.get_obj_for_encoding()})).toString("base64")}})),function _signAlgoTx(e){return r.apply(this,arguments)}),P.getExportedSecretKey=(n=(0,o.A)((function*(e){var{networkInfo:t,password:r,keyType:n,credentials:i,addressEncoding:o}=e,{privateKeyRaw:a}=yield this.baseGetDefaultPrivateKey(e);if(!a)throw new Error("privateKeyRaw is required");if(n===y.ECoreApiExportedSecretKeyType.privateKey)return v.mnemonicFromSeed((0,d.Yc)(r,a));throw new Error(`SecretKey type not support: ${n}`)})),function getExportedSecretKey(e){return n.apply(this,arguments)}),P.getPrivateKeys=(u=(0,o.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:g})})),function getPrivateKeys(e){return u.apply(this,arguments)}),P.signTransaction=(c=(0,o.A)((function*(e){var t=this,{unsignedTx:r}=e,n=yield this.baseGetSingleSigner({payload:e,curve:g}),o=r.encodedTx;if(i()(o)){var a=yield Promise.all(o.map((function(e){return t._signAlgoTx({encodedTx:e,signer:n})})));return{encodedTx:r.encodedTx,txid:a.map((function(e){return e.txid})).join(","),rawTx:a.map((function(e){return e.rawTx})).join(",")}}var{txid:s,rawTx:u}=yield this._signAlgoTx({encodedTx:o,signer:n});return{encodedTx:r.encodedTx,txid:s,rawTx:u}})),function signTransaction(e){return c.apply(this,arguments)}),P.signMessage=(l=(0,o.A)((function*(){throw new f.MS})),function signMessage(){return l.apply(this,arguments)}),P.getAddressFromPrivate=(b=(0,o.A)((function*(e){var{privateKeyRaw:t}=e,r=p.A.toBuffer(t);if(32!==r.length)throw new f.He("Invalid private key.");var n=d.ev.publicFromPrivate(r);return this.getAddressFromPublic({publicKey:p.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return b.apply(this,arguments)}),P.getAddressFromPublic=(w=(0,o.A)((function*(e){var{publicKey:t}=e,r=v.encodeAddress(p.A.toBuffer(t));return Promise.resolve({address:r,publicKey:t})})),function getAddressFromPublic(e){return w.apply(this,arguments)}),P.getAddressesFromHd=(A=(0,o.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:g})})),function getAddressesFromHd(e){return A.apply(this,arguments)}),(0,a.A)(CoreChainSoftware)}(l.G)},180556:(e,t,r)=>{r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(451661),i=r.n(n),o=r(491180);function slicePathTemplate(e){return o.A.slicePathTemplate(e)}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}}}]);
//# sourceMappingURL=48881.ac67e4bb26.chunk.js.map