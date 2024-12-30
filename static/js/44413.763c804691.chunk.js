!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9f27adf7-3400-48bd-9677-0b534164eeeb",e._sentryDebugIdIdentifier="sentry-dbid-9f27adf7-3400-48bd-9677-0b534164eeeb")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[44413],{940916:(e,t,r)=>{r.d(t,{G:()=>g});var n=r(482451),i=r.n(n),o=r(324586),a=r(586330),s=r(230414),c=r(507140),u=r(606777),f=r(401349),p=r(404727),l=r(180556),d=r(929296),y=r(195309),v=r(972715),h=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,v.A)(e);if(t){var i=(0,v.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,y.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var b=function(e){(0,d.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,o=(0,f.N)(n,{key:e,chainCode:h.alloc(32)},r).key.toString("hex");return(i=t.call(this,o,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,f.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,a.A)((function*(){return u.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,f._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,s.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=h.from(e,"hex"),this.uncompressedPublicKey=(0,f.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,a.A)((function*(e){return u.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(h.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=u.A.toBuffer(e),i=u.A.toBuffer(t),o=u.A.toBuffer(r),{curve:a}=this,s=(0,f.MX)(a,n,i,o);return Promise.resolve(s)},(0,s.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,o.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(){function CoreChainApiBase(){}var e,t,r,n,o,d,y,v,h=CoreChainApiBase.prototype;return h.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return f.ev;case"secp256k1":return f.bI;case"nistp256":return f.OX;default:throw new c.He("Unsupported curve")}},h.baseCreateSigner=(e=(0,a.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new c.He("Software signing requires a password.");var n=u.A.toBuffer(t);return Promise.resolve(new b(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),h.baseGetSingleSigner=(t=(0,a.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],o=e?.relPaths?.[0];if(!i&&o&&(i=r[[n,o].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),h.baseGetPrivateKeys=(r=(0,a.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:o}=e,a={};if(r.hd&&r.imported)throw new c.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(a=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:o})),r.imported){var{privateKey:s}=(0,f.VV)({password:i,credential:r.imported}),p=u.A.bytesToHex((0,f.w)(i,s));a[n.path]=p,a[""]=p}if(!Object.keys(a).length)throw new Error("No private keys found");return a})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),h.baseGetPrivateKeysHd=(n=(0,a.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:o}=r,a=o.split("/"),s=n||[a.pop()],p=a.join("/");if(0===s.length)throw new c.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,f.Wu)(e,i,t,p,s).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:u.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),h.baseGetAddressesFromHd=(o=(0,a.A)((function*(e,t){var r=this,{curve:n,generateFrom:o}=t,{template:s,hdCredential:p,password:d,indexes:y}=e,{pathPrefix:v,pathSuffix:h}=(0,l.Ah)(s),b=y.map((function(e){return h.replace("{index}",e.toString())})),g="privateKey"===o,w=[],P=[];g?P=(0,f.Wu)(n,p,d,v,b):w=yield(0,f.MJ)({curveName:n,hdCredential:p,password:d,prefix:v,relPaths:b});var A=g?P:w;if(A.length!==y.length)throw new c.He("Unable to get publick key.");var S,m=yield Promise.all(A.map((S=(0,a.A)((function*(t){var n,o,{path:a,extendedKey:{key:s}}=t;if(g){var c=u.A.bytesToHex((0,f.Yc)(d,s));o=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:c,privateKeyInfo:t})}else n=s.toString("hex"),o=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:a},o)})),function(e){return S.apply(this,arguments)})));return{addresses:m}})),function baseGetAddressesFromHd(e,t){return o.apply(this,arguments)}),h.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new c.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return p.ECoreCredentialType.hd;if(e.imported)return p.ECoreCredentialType.imported;throw new c.He("getCredentialsType ERROR: no credentials found")},h.baseGetDefaultPrivateKey=(d=(0,a.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return d.apply(this,arguments)}),h.validateXpub=(y=(0,a.A)((function*(e){throw new c.MS})),function validateXpub(e){return y.apply(this,arguments)}),h.validateXprvt=(v=(0,a.A)((function*(e){throw new c.MS})),function validateXprvt(e){return v.apply(this,arguments)}),(0,s.A)(CoreChainApiBase)}()},144413:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(230414),i=r(929296),o=r(195309),a=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var s=function(e){(0,i.A)(CoreChainImported,e);var t=_createSuper(CoreChainImported);function CoreChainImported(){return t.apply(this,arguments)}return(0,n.A)(CoreChainImported)}(r(906851).A)},906851:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(324586),i=r(230414),o=r(929296),a=r(195309),s=r(972715),c=r(586330),u=r(968135),f=r(457719),p=r.n(f),l=r(289620),d=r.n(l),y=r(507140),v=r(606777),h=r(940916),b=r(401349),g=r(404727),w=(function(e){e.MAIN="314",e.CALIBRATION="314159"}({}),function(e){return e[e.ID=0]="ID",e[e.SECP256K1=1]="SECP256K1",e[e.ACTOR=2]="ACTOR",e[e.BLS=3]="BLS",e[e.DELEGATED=4]="DELEGATED",e}({})),P=r(901048).Buffer;function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var A="secp256k1",S=P.from([1,113,160,228,2,32]),m=32;function getDigest(e){var t=d().blake2bInit(32);return d().blake2bUpdate(t,function getCID(e){var t=d().blake2bInit(m);d().blake2bUpdate(t,e);var r=P.from(d().blake2bFinal(t));return P.concat([S,r])}(e)),P.from(d().blake2bFinal(t))}function _signTransaction(){return(_signTransaction=(0,c.A)((function*(e,t){var{AddressSecp256k1:n,NetworkPrefix:i,Transaction:o}=r(121019),a=e.encodedTx,s=P.concat;P.concat=function(e,t){return s(e.map((function(e){return P.from(e)})),t)},n.fromString=function(e){var t=e[0],r=e[1];if(!function(e){return Object.values(i).includes(e)}(t))throw new y.He("Invalid filecoin network.");if(parseInt(r,10)!==w.SECP256K1)throw new y.He("Invalid filecoin protocol indicator.");var o=P.from(p()(e.substring(2).toUpperCase(),"RFC4648")),a=o.subarray(0,-4),s=o.subarray(-4),c=new n(t,a);if(P.from(c.getChecksum()).toString("hex")!==P.from(s).toString("hex"))throw new y.He("Invalid filecoin checksum network.");return c};var c=o.fromJSON(a),u=getDigest(yield c.serialize()),[f,l]=yield t.sign(u),d=P.concat([P.from(f),P.from([l])]);return P.concat=s,Promise.resolve({txid:"",rawTx:JSON.stringify({Message:a,Signature:{Data:d.toString("base64"),Type:w.SECP256K1}})})}))).apply(this,arguments)}var C=function(e){(0,o.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,n,a,s,f,p,l,d=CoreChainSoftware.prototype;return d.getExportedSecretKey=(r=(0,c.A)((function*(e){var{password:t,keyType:r,credentials:n}=e,{privateKeyRaw:i}=yield this.baseGetDefaultPrivateKey(e);if(!i)throw new Error("privateKeyRaw is required");if(r===g.ECoreApiExportedSecretKeyType.privateKey){var o=(0,b.Yc)(t,i).toString("base64");return P.from(JSON.stringify({Type:"secp256k1",PrivateKey:o})).toString("hex")}throw new Error(`SecretKey type not support: ${r}`)})),function getExportedSecretKey(e){return r.apply(this,arguments)}),d.getPrivateKeys=(n=(0,c.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:A})})),function getPrivateKeys(e){return n.apply(this,arguments)}),d.signTransaction=(a=(0,c.A)((function*(e){var{unsignedTx:t}=e,r=yield this.baseGetSingleSigner({payload:e,curve:A}),n=yield function _signTransaction2(e,t){return _signTransaction.apply(this,arguments)}(t,r);return _objectSpread(_objectSpread({},n),{},{encodedTx:t.encodedTx})})),function signTransaction(e){return a.apply(this,arguments)}),d.signMessage=(s=(0,c.A)((function*(){throw new y.MS})),function signMessage(){return s.apply(this,arguments)}),d.getAddressFromPrivate=(f=(0,c.A)((function*(e){var{privateKeyRaw:t}=e,r=v.A.toBuffer(t),n=this.baseGetCurve(A).publicFromPrivate(r);return this.getAddressFromPublic({publicKey:v.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return f.apply(this,arguments)}),d.getAddressFromPublic=(p=(0,c.A)((function*(e){var{publicKey:t,networkInfo:r}=e,n=(0,b.sA)(A,v.A.toBuffer(t)),i=n.toString("hex"),o=r.isTestnet?u.CoinType.TEST:u.CoinType.MAIN,a=(0,u.newSecp256k1Address)(n,o).toString();return Promise.resolve({address:"",addresses:{[r.networkId]:a},publicKey:i})})),function getAddressFromPublic(e){return p.apply(this,arguments)}),d.getAddressesFromHd=(l=(0,c.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:A})})),function getAddressesFromHd(e){return l.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(h.G)},180556:(e,t,r)=>{r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(451661),i=r.n(n),o=r(491180);function slicePathTemplate(e){return o.A.slicePathTemplate(e)}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}}}]);
//# sourceMappingURL=44413.763c804691.chunk.js.map