!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7ac37281-4e49-4661-8026-d75d1d4dbee8",e._sentryDebugIdIdentifier="sentry-dbid-7ac37281-4e49-4661-8026-d75d1d4dbee8")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[57413],{940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>w});var n=r(482451),i=r.n(n),s=r(324586),a=r(586330),o=r(230414),u=r(507140),c=r(606777),d=r(401349),p=r(404727),f=r(180556),l=r(929296),h=r(195309),y=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,y.A)(e);if(t){var i=(0,y.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,h.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,l.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,s=(0,d.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,s,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,d.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,a.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,d._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,o.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,d.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,a.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),s=c.A.toBuffer(r),{curve:a}=this,o=(0,d.MX)(a,n,i,s);return Promise.resolve(o)},(0,o.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,s.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(){function CoreChainApiBase(){}var e,t,r,n,s,l,h,y,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return d.ev;case"secp256k1":return d.bI;case"nistp256":return d.OX;default:throw new u.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,a.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,a.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],s=e?.relPaths?.[0];if(!i&&s&&(i=r[[n,s].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,a.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:s}=e,a={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(a=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:s})),r.imported){var{privateKey:o}=(0,d.VV)({password:i,credential:r.imported}),p=c.A.bytesToHex((0,d.w)(i,o));a[n.path]=p,a[""]=p}if(!Object.keys(a).length)throw new Error("No private keys found");return a})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,a.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:s}=r,a=s.split("/"),o=n||[a.pop()],p=a.join("/");if(0===o.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,d.Wu)(e,i,t,p,o).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(s=(0,a.A)((function*(e,t){var r=this,{curve:n,generateFrom:s}=t,{template:o,hdCredential:p,password:l,indexes:h}=e,{pathPrefix:y,pathSuffix:v}=(0,f.Ah)(o),g=h.map((function(e){return v.replace("{index}",e.toString())})),w="privateKey"===s,b=[],P=[];w?P=(0,d.Wu)(n,p,l,y,g):b=yield(0,d.MJ)({curveName:n,hdCredential:p,password:l,prefix:y,relPaths:g});var A=w?P:b;if(A.length!==h.length)throw new u.He("Unable to get publick key.");var m,k=yield Promise.all(A.map((m=(0,a.A)((function*(t){var n,s,{path:a,extendedKey:{key:o}}=t;if(w){var u=c.A.bytesToHex((0,d.Yc)(l,o));s=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=o.toString("hex"),s=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:a},s)})),function(e){return m.apply(this,arguments)})));return{addresses:k}})),function baseGetAddressesFromHd(e,t){return s.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return p.ECoreCredentialType.hd;if(e.imported)return p.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(l=(0,a.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return l.apply(this,arguments)}),v.validateXpub=(h=(0,a.A)((function*(e){throw new u.MS})),function validateXpub(e){return h.apply(this,arguments)}),v.validateXprvt=(y=(0,a.A)((function*(e){throw new u.MS})),function validateXprvt(e){return y.apply(this,arguments)}),(0,o.A)(CoreChainApiBase)}()},501636:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(230414),i=r(929296),s=r(195309),a=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var o=function(e){(0,i.A)(CoreChainHd,e);var t=_createSuper(CoreChainHd);function CoreChainHd(){return t.apply(this,arguments)}return(0,n.A)(CoreChainHd)}(r(603973).A)},603973:(e,t,r)=>{"use strict";r.d(t,{A:()=>j});var n,i=r(586330),s=r(230414),a=r(929296),o=r(195309),u=r(972715),c=r(717288),d=r(236989),p=r.n(d),f=r(56075),l=r.n(f),h=r(928557),y=r(507140),v=r(825145),g=r(606777),w=r(940916),b=r(401349),P=r(824116),A=r(529848),m=r.n(A),k=r(404727),C=r(901048).Buffer,S=(n=(0,i.A)((function*({curve:e,indexes:t,hdCredential:r,password:n,isTestnet:s}){var a=`m/84'/${s?h.gU:h.$t}'`,o=t.map((function(e){return`${e.toString()}'`})),u=(0,b.W6)(e,r,n,a,o);if(u.length!==t.length)throw new y.He("Unable to get publick key.");var c,d=s?h.Jj:h.PA,p=(0,P.getBtcForkNetwork)(d),{public:f}=(p.segwitVersionBytes||{})[k.EAddressEncodings.P2WPKH]||p.bip32,l=[C.from(f.toString(16).padStart(8,"0"),"hex"),C.from([3])],v=yield Promise.all(u.map((c=(0,i.A)((function*(r,n){var{path:i,parentFingerPrint:s,extendedKey:a}=r,o=m().encode(C.concat([...l,s,C.from((t[n]+2**31).toString(16).padStart(8,"0"),"hex"),a.chainCode,a.key])),u="0/0",c=[u],{addresses:d}=yield(0,P.getAddressFromXpub)({curve:e,network:p,xpub:o,relativePaths:c,addressEncoding:k.EAddressEncodings.P2WPKH,encodeAddress:function(e){return e}}),{[u]:f}=d;return{accountIndex:t[n],address:f,publicKey:o,path:i,relPath:u}})),function(e,t){return c.apply(this,arguments)})));return v})),function generateNativeSegwitAccounts(e){return n.apply(this,arguments)}),K=r(97713),x=r(552001),H=r(901048).Buffer;var T=r(913360),R=r.n(T),E=r(901048).Buffer,B=new(R().ec)("secp256k1");const I=function(){function HashKeySigner(e){if(this.keyHex=e,!e)throw new Error("Invalid key");this.sk=B.keyFromPrivate(E.from(e,"hex"))}var e=HashKeySigner.prototype;return e.sign=function sign(e){if(!e)throw new Error("Invalid message");return this.sk.sign(e,{canonical:!0})},e.verify=function verify(e,t){try{return this.sk.verify(e,t)}catch(e){return!1}},(0,s.A)(HashKeySigner,[{key:"pk",get:function(){return this.sk.getPublic()}},{key:"pkHex",get:function(){return this.pk.encodeCompressed("hex")}}]),HashKeySigner}();var O=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,u.A)(e);if(t){var i=(0,u.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var _="secp256k1",j=function(e){(0,a.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,n,o,u,d,f,w,A,m,k,C=CoreChainSoftware.prototype;return C.getExportedSecretKey=function getExportedSecretKey(e){throw new y.MS},C.getPrivateKeys=(r=(0,i.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:_})})),function getPrivateKeys(e){return r.apply(this,arguments)}),C.signTransaction=(n=(0,i.A)((function*(e){var{unsignedTx:t}=e,r=yield this.baseGetSingleSigner({payload:e,curve:_}),n=(t.encodedTx,g.A.toBuffer("")),[i]=yield r.sign(n);return{encodedTx:t.encodedTx,txid:"",rawTx:""}})),function signTransaction(e){return n.apply(this,arguments)}),C.signMessage=(o=(0,i.A)((function*(e){e.unsignedMsg;var t=yield this.baseGetSingleSigner({payload:e,curve:_}),r=g.A.toBuffer(""),[n]=yield t.sign(r);return""})),function signMessage(e){return o.apply(this,arguments)}),C.getAddressFromPrivate=(u=(0,i.A)((function*(e){var{privateKeyRaw:t}=e,r=g.A.toBuffer(t),n=this.baseGetCurve(_).publicFromPrivate(r);return this.getAddressFromPublic({publicKey:g.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return u.apply(this,arguments)}),C.getAddressFromPublic=(d=(0,i.A)((function*(e){var{publicKey:t}=e;return Promise.resolve({address:"",publicKey:t})})),function getAddressFromPublic(e){return d.apply(this,arguments)}),C.getAddressFromXpub=(f=(0,i.A)((function*({network:e,xpub:t,relativePaths:r,addressEncoding:n}){var{addresses:i}=yield(0,P.getAddressFromXpub)({curve:_,network:e,xpub:t,relativePaths:r,addressEncoding:n,encodeAddress:function(e){return e}});return i})),function getAddressFromXpub(e){return f.apply(this,arguments)}),C.buildSignerLightning=(w=(0,i.A)((function*({password:e,hdCredential:t,address:r,path:n,isTestnet:i}){var s=i?{networkChainCode:"tbtc",networkImpl:h.Jj,networkId:"tbtc--0",chainId:""}:{networkChainCode:"btc",networkImpl:h.PA,networkId:"btc--0",chainId:""},a=`${n}/0/0`,o=yield this.getPrivateKeys({networkInfo:s,password:e,account:{address:r,path:a},credentials:{hd:t}});if(!o[a])throw new Error("No private key found.");return yield this.baseCreateSigner({curve:_,password:e,privateKey:o[a]})})),function buildSignerLightning(e){return w.apply(this,arguments)}),C.getAddressesFromHd=(A=(0,i.A)((function*(e){var{hdCredential:t,password:r,indexes:n,networkInfo:{networkChainCode:i}}=e,s=i===h.gM;return{addresses:yield S({curve:_,indexes:n,hdCredential:t,password:r,isTestnet:s})}})),function getAddressesFromHd(e){return A.apply(this,arguments)}),C.signApiMessage=(m=(0,i.A)((function*({msgPayload:e,password:t,hdCredential:r,address:n,path:i,isTestnet:s}){var a=yield this.buildSignerLightning({password:t,hdCredential:r,address:n,path:i,isTestnet:s}),o=s?h.Jj:h.PA,u=(0,P.getBtcForkNetwork)(o),c=yield a.getPrvkey(),d=(0,P.getBitcoinECPair)().fromPrivateKey(c,{network:u});return p().sign(l()(e),(0,v.wT)(d.privateKey),d.compressed,{segwitType:"p2wpkh"}).toString("hex")})),function signApiMessage(e){return m.apply(this,arguments)}),C.lnurlAuth=(k=(0,i.A)((function*(e){var{password:t,credentials:r,lnurlDetail:n}=e,i=(0,b.s8)((0,v.wT)(r.hd),t),s=(0,P.getBitcoinBip32)().fromSeed((0,c.mnemonicToSeedSync)(i)),a=s.derivePath("m/138'/0").privateKey;if(!a)throw new Error("lnurl-auth: invalid hashing key");var o=new URL(n.url),u=function getPathSuffix(e,t){for(var r=g.A.bytesToHex((0,K.w)(x.s,H.from(e,"utf-8"),H.from(t,"hex"))),n=H.from(r,"hex"),i=[],s=0;s<4;s+=1)i.push(n.readUInt32BE(4*s));return i}(o.host,g.A.bytesToHex(a)),d=s.derivePath("m/138'");for(var p of u)d=d.derive(p);if(!d.privateKey)throw new Error("lnurl-auth: invalid linking private key");var f=g.A.bytesToHex(d.privateKey);if(!f)throw new Error("Invalid linkingKey");var l=new I(f),h=g.A.hexToBytes(n.k1),y=l.sign(h).toDER("hex"),w=o;return w.searchParams.set("sig",y),w.searchParams.set("key",l.pkHex),w.searchParams.set("t",Date.now().toString()),w.toString()})),function lnurlAuth(e){return k.apply(this,arguments)}),C.verifyMessage=function verifyMessage({message:e,address:t,signature:r}){var n=p().verify(e,t,O.from(r,"hex"));return Promise.resolve({isValid:n,message:e,address:t,signature:r})},(0,s.A)(CoreChainSoftware)}(w.G)},180556:(e,t,r)=>{"use strict";r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(451661),i=r.n(n),s=r(491180);function slicePathTemplate(e){return s.A.slicePathTemplate(e)}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}},879314:()=>{}}]);
//# sourceMappingURL=57413.5ea6fe40d3.chunk.js.map