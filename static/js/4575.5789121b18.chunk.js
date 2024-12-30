!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="751d1074-f7bc-4644-9661-9a4c9422d09a",e._sentryDebugIdIdentifier="sentry-dbid-751d1074-f7bc-4644-9661-9a4c9422d09a")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4575],{940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>A});var n=r(482451),i=r.n(n),a=r(324586),s=r(586330),o=r(230414),u=r(507140),c=r(606777),d=r(401349),p=r(404727),l=r(180556),f=r(929296),y=r(195309),h=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,y.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,f.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,a=(0,d.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,a,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,d.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,s.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,d._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,o.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,d.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,s.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),a=c.A.toBuffer(r),{curve:s}=this,o=(0,d.MX)(s,n,i,a);return Promise.resolve(o)},(0,o.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(){function CoreChainApiBase(){}var e,t,r,n,a,f,y,h,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return d.ev;case"secp256k1":return d.bI;case"nistp256":return d.OX;default:throw new u.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,s.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,s.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],a=e?.relPaths?.[0];if(!i&&a&&(i=r[[n,a].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,s.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:a}=e,s={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(s=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:a})),r.imported){var{privateKey:o}=(0,d.VV)({password:i,credential:r.imported}),p=c.A.bytesToHex((0,d.w)(i,o));s[n.path]=p,s[""]=p}if(!Object.keys(s).length)throw new Error("No private keys found");return s})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,s.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:a}=r,s=a.split("/"),o=n||[s.pop()],p=s.join("/");if(0===o.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,d.Wu)(e,i,t,p,o).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(a=(0,s.A)((function*(e,t){var r=this,{curve:n,generateFrom:a}=t,{template:o,hdCredential:p,password:f,indexes:y}=e,{pathPrefix:h,pathSuffix:v}=(0,l.Ah)(o),g=y.map((function(e){return v.replace("{index}",e.toString())})),A="privateKey"===a,b=[],P=[];A?P=(0,d.Wu)(n,p,f,h,g):b=yield(0,d.MJ)({curveName:n,hdCredential:p,password:f,prefix:h,relPaths:g});var w=A?P:b;if(w.length!==y.length)throw new u.He("Unable to get publick key.");var x,m=yield Promise.all(w.map((x=(0,s.A)((function*(t){var n,a,{path:s,extendedKey:{key:o}}=t;if(A){var u=c.A.bytesToHex((0,d.Yc)(f,o));a=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=o.toString("hex"),a=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:s},a)})),function(e){return x.apply(this,arguments)})));return{addresses:m}})),function baseGetAddressesFromHd(e,t){return a.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return p.ECoreCredentialType.hd;if(e.imported)return p.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(f=(0,s.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return f.apply(this,arguments)}),v.validateXpub=(y=(0,s.A)((function*(e){throw new u.MS})),function validateXpub(e){return y.apply(this,arguments)}),v.validateXprvt=(h=(0,s.A)((function*(e){throw new u.MS})),function validateXprvt(e){return h.apply(this,arguments)}),(0,o.A)(CoreChainApiBase)}()},574182:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(230414),i=r(929296),a=r(195309),s=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var o=function(e){(0,i.A)(CoreChainHd,e);var t=_createSuper(CoreChainHd);function CoreChainHd(){return t.apply(this,arguments)}return(0,n.A)(CoreChainHd)}(r(216435).A)},216435:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var n=r(586330),i=r(230414),a=r(929296),s=r(195309),o=r(972715),u=r(825145),c=r(606777),d=r(940916),p=r(401349),l=r(404727),f=r(180556),y=r(656298),h=r(590715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,o.A)(e);if(t){var i=(0,o.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var v="ed25519",g=function(e){(0,a.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,s,o,d,g,A,b,P,w,x,m=CoreChainSoftware.prototype;return m.baseGetPrivateKeysHd=(r=(0,n.A)((function*({password:e,account:t,hdCredential:r}){var{path:n}=t,i=yield(0,y.o1)(e,r,n),a=(0,y.w7)(i),s=(0,p.w)(e,a);return{[n]:c.A.bytesToHex(s)}})),function baseGetPrivateKeysHd(e){return r.apply(this,arguments)}),m.getPrivateKeys=(s=(0,n.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:v})})),function getPrivateKeys(e){return s.apply(this,arguments)}),m.getAdaXprvInfo=(o=(0,n.A)((function*({account:e,signer:t}){var r=yield t.getPrvkey(),n=(0,y.zd)(r);return{xprv:yield(0,y.GN)(n.rootKey),accountIndex:(0,y.Cm)(e.path)}})),function getAdaXprvInfo(e){return o.apply(this,arguments)}),m.signTransaction=(d=(0,n.A)((function*(e){var{unsignedTx:t,account:r}=e,n=t.encodedTx,i=yield this.baseGetSingleSigner({payload:e,curve:v}),{xprv:a,accountIndex:s}=yield this.getAdaXprvInfo({signer:i,account:r}),o=yield y.xh.getCardanoApi(),{signedTx:u,txid:c}=yield o.signTransaction(n.tx.body,r.address,Number(s),n.inputs,a,!!n.signOnly,!1);return{encodedTx:t.encodedTx,rawTx:u,txid:c}})),function signTransaction(e){return d.apply(this,arguments)}),m.signMessage=(g=(0,n.A)((function*(e){var{account:t}=e,r=e.unsignedMsg,n=yield this.baseGetSingleSigner({payload:e,curve:v}),{xprv:i,accountIndex:a}=yield this.getAdaXprvInfo({signer:n,account:t}),s=yield y.xh.getCardanoApi(),{signature:o,key:u}=yield s.dAppSignData(r.payload.addr,r.payload.payload,i,Number(a));return JSON.stringify({signature:o,key:u})})),function signMessage(e){return g.apply(this,arguments)}),m.buildAdaAddressItem=function buildAdaAddressItem({baseAddress:e,stakingAddress:t}){var{address:r,path:n,xpub:i}=e;return{address:r,publicKey:"",path:(0,f.vN)({fullPath:n}),xpub:i,addresses:{"0/0":r,"2/0":t.address},relPath:"0/0"}},m.getAddressFromPrivate=(A=(0,n.A)((function*(e){var{privateKeyRaw:t}=e,r=c.A.toBuffer(t),n=(0,y.zd)(r),i=parseInt(n.index,10),a=(0,y.h$)(n.rootKey,[i],h.x.MAINNET),{baseAddress:s,stakingAddress:o}=a[0];return this.buildAdaAddressItem({baseAddress:s,stakingAddress:o})})),function getAddressFromPrivate(e){return A.apply(this,arguments)}),m.getAddressFromPublic=(b=(0,n.A)((function*(){throw new Error("Method not implemented. use getAddressFromPrivate instead.")})),function getAddressFromPublic(){return b.apply(this,arguments)}),m.getAddressesFromHd=(P=(0,n.A)((function*(e){var t=this,{hdCredential:r,password:n,indexes:i}=e;return{addresses:(yield(0,y.hA)(r,n,i,h.x.MAINNET)).map((function(e){var{baseAddress:r,stakingAddress:n}=e;return t.buildAdaAddressItem({baseAddress:r,stakingAddress:n})}))}})),function getAddressesFromHd(e){return P.apply(this,arguments)}),m.getExportedCredentialHd=(w=(0,n.A)((function*({password:e,account:t,hdCredential:r}){var{path:n}=t;return yield(0,y.o1)(e,r,n)})),function getExportedCredentialHd(e){return w.apply(this,arguments)}),m.getExportedSecretKey=(x=(0,n.A)((function*(e){var{account:t,keyType:r,password:n,credentials:i}=e,{privateKeyRaw:a}=yield this.baseGetDefaultPrivateKey(e);if(!a)throw new Error("privateKeyRaw is required");if(r===l.ECoreApiExportedSecretKeyType.xprvt){if(i.hd)return(0,y.o1)(n,(0,u.wT)(i.hd),t.path);if(i.imported){var s=(0,p.Yc)(n,a);return(0,y.as)(s)}}throw new Error(`SecretKey type not support: ${r}`)})),function getExportedSecretKey(e){return x.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(d.G)},656298:(e,t,r)=>{"use strict";r.d(t,{h$:()=>batchGetShelleyAddressByRootKey,hA:()=>l,w7:()=>decodePrivateKeyByXprv,zd:()=>encodePrivateKey,o1:()=>generateExportedCredential,as:()=>generateXprvFromPrivateKey,Cm:()=>getPathIndex,GN:()=>getXprvString,xh:()=>n.A,J9:()=>validBootstrapAddress,$T:()=>validShelleyAddress});var n=r(14863),i=r(541199),a=r(590715),encodeAddress=function(e){var t=(0,i.getAddressType)(e);if(t===i.AddressTypes.BOOTSTRAP)return i.base58.encode(e);var r={[i.AddressTypes.BASE]:"addr",[i.AddressTypes.POINTER]:"addr",[i.AddressTypes.ENTERPRISE]:"addr",[i.AddressTypes.REWARD]:"stake"},n=(0,i.getShelleyAddressNetworkId)(e)===a.x.TESTNET_OR_PREPROD,s=`${r[t]}${n?"_test":""}`;return i.bech32.encode(s,e)},xpub2blake2b224Hash=function(e){return(0,i.getPubKeyBlake2b224Hash)(function(e){return e.slice(0,32)}(e))},stakingAddressFromXpub=function(e,t){var r=(0,i.packRewardAddress)(xpub2blake2b224Hash(e),t);return encodeAddress(r)},baseAddressFromXpub=function(e,t,r){var n=(0,i.packBaseAddress)(xpub2blake2b224Hash(e),xpub2blake2b224Hash(t),r);return encodeAddress(n)},validShelleyAddress=function(e){return(e.startsWith("addr1")||e.startsWith("addr_test1"))&&(0,i.isValidShelleyAddress)(e)},validBootstrapAddress=function(e){return(e.startsWith("Ae2")||e.startsWith("DdzFF"))&&(0,i.isValidBootstrapAddress)(e)},s=r(586330),o=r(401349),u=2147483648,c=2,d=r(901048).Buffer;function getPathIndex(e){return e.split("/").slice(3,4)[0].slice(0,-1)}function getRootKey(e,t){return _getRootKey.apply(this,arguments)}function _getRootKey(){return(_getRootKey=(0,s.A)((function*(e,t){var r=(0,o.s8)(t,e);return yield(0,i.mnemonicToRootKeypair)(r,c)}))).apply(this,arguments)}function getXprvString(e,t){return _getXprvString.apply(this,arguments)}function _getXprvString(){return(_getXprvString=(0,s.A)((function*(e,t){var r="string"==typeof e?yield getRootKey(e,t):e;return i.bech32.encode("xprv",d.concat([r.slice(0,64),r.slice(96)]))}))).apply(this,arguments)}function generateExportedCredential(e,t,r){return _generateExportedCredential.apply(this,arguments)}function _generateExportedCredential(){return(_generateExportedCredential=(0,s.A)((function*(e,t,r){var n=getPathIndex(r),a=yield getRootKey(e,t);return i.bech32.encode("xprv",d.concat([a.slice(0,64),a.slice(96,128),d.from(n,"utf8")]))}))).apply(this,arguments)}function decodePrivateKeyByXprv(e){var t=i.bech32.decode(e),r=t.data.slice(96),n=(0,i.toPublic)(t.data.slice(0,64));return d.concat([t.data.slice(0,64),n,t.data.slice(64,96),r])}function encodePrivateKey(e){return{rootKey:e.slice(0,128),index:d.from(e.slice(128)).toString("utf8")}}function generateXprvFromPrivateKey(e){var{rootKey:t,index:r}=encodePrivateKey(e);return i.bech32.encode("xprv",d.concat([t.slice(0,64),t.slice(96,128),d.from(r,"utf8")]))}var shelleyStakeAccountPath=function(e){return[u+1852,u+1815,u+e,2,0]},derivePath=function(e,t){return e.reduce((function(e,t){return(0,i.derivePrivate)(e,t,c)}),t)},deriveXpub=function(e,t){var r=derivePath(e,t);return(0,i.toPublic)(r.slice(0,64))};function ShelleyStakingAccountProvider(e,t,r){var n=shelleyStakeAccountPath(e),i=deriveXpub(n,t);return{path:n,address:stakingAddressFromXpub(i,r)}}function ShelleyBaseAddressProvider(e,t,r){var n,i=[u+1852,u+1815,u+e,0,0],a=deriveXpub(i,t),s=shelleyStakeAccountPath(e),o=deriveXpub(s,t),c=function(e,t){return derivePath(e,t).slice(64).toString("hex")}(i.slice(0,3),t);return{path:(n=i,`m/${n.map((function(e){return e%u+(e>=u?"'":"")})).join("/")}`),address:baseAddressFromXpub(a,o,r),xpub:c}}var p,batchGetShelleyAddressByRootKey=function(e,t,r){return t.map((function(t){return{baseAddress:ShelleyBaseAddressProvider(t,e,r),stakingAddress:ShelleyStakingAccountProvider(t,e,r)}}))},l=(p=(0,s.A)((function*(e,t,r,n){var i=yield getRootKey(t,e);return batchGetShelleyAddressByRootKey(i,r,n)})),function batchGetShelleyAddresses(e,t,r,n){return p.apply(this,arguments)});r(11261)},14863:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n,i=r(586330);const a={getCardanoApi:(n=(0,i.A)((function*(){var e=yield Promise.all([r.e(68822),r.e(29853),r.e(50794),r.e(53887)]).then(r.bind(r,429853));return{composeTxPlan:e.onekeyUtils.composeTxPlan,signTransaction:e.onekeyUtils.signTransaction,hwSignTransaction:e.trezorUtils.signTransaction,txToOneKey:e.onekeyUtils.txToOneKey,dAppGetBalance:e.dAppUtils.getBalance,dAppGetAddresses:e.dAppUtils.getAddresses,dAppGetUtxos:e.dAppUtils.getUtxos,dAppConvertCborTxToEncodeTx:e.dAppUtils.convertCborTxToEncodeTx,dAppSignData:e.dAppUtils.signData}})),function getCardanoApi(){return n.apply(this,arguments)})};var{getCardanoApi:s}=a,o=function(){var e=(0,i.A)((function*(){return Promise.resolve(!0)}));return function ensureSDKReady(){return e.apply(this,arguments)}}();const u={getCardanoApi:s,ensureSDKReady:o}},11261:(e,t,r)=>{"use strict";r.d(t,{lo:()=>transformToOneKeyOutputs,mc:()=>transformToOneKeyInputs});var n=r(324586);r(37754);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var transformToOneKeyInputs=function(e,t){return e.map((function(e){var r=t.find((function(t){return t.tx_hash===e.txHash&&+t.output_index===e.outputIndex}));if(!r)throw Error(`Cannot transform utxo ${e.txHash}:${e.outputIndex}`);return{path:r.path,prev_hash:e.txHash,prev_index:e.outputIndex}}))},parseAsset=function(e){return{policyId:e.slice(0,56),assetNameInHex:e.slice(56)}},transformToTokenBundle=function(e){if(0!==e.length){var t=[];e.forEach((function(e){var{policyId:r}=parseAsset(e.unit);t.includes(r)||t.push(r)}));var r=[];return t.forEach((function(t){var n=[];e.forEach((function(e){var r=parseAsset(e.unit);r.policyId===t&&n.push({assetNameBytes:r.assetNameInHex,amount:e.quantity})})),r.push({policyId:t,tokenAmounts:n})})),r}},transformToOneKeyOutputs=function(e,t){return e.map((function(e){return _objectSpread(_objectSpread({},e.isChange?{addressParameters:t}:{address:e.address}),{},{amount:e.amount,tokenBundle:transformToTokenBundle(e.assets)})}))}},180556:(e,t,r)=>{"use strict";r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(451661),i=r.n(n),a=r(491180);function slicePathTemplate(e){return a.A.slicePathTemplate(e)}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}},878044:()=>{}}]);
//# sourceMappingURL=4575.5789121b18.chunk.js.map