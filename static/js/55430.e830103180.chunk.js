!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a30eab3e-c3bd-4681-a64c-eb7aba341542",e._sentryDebugIdIdentifier="sentry-dbid-a30eab3e-c3bd-4681-a64c-eb7aba341542")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[55430],{451661:e=>{var t=10,r=41,n=107,i=9,a=25,s=10;function inputBytes(e){return r+(e.script?e.script.length:n)}function outputBytes(e){return e.script?s+e.script.length+(e.script.length>=74?2:1):i+(e.script?e.script.length:a)}function dustThreshold(e,t){return inputBytes({})*t}function transactionBytes(e,r){return t+e.reduce((function(e,t){return e+inputBytes(t)}),0)+r.reduce((function(e,t){return e+outputBytes(t)}),0)}function uintOrNaN(e){return"number"!=typeof e?NaN:isFinite(e)?Math.floor(e)!==e||e<0?NaN:e:NaN}function sumOrNaN(e){return e.reduce((function(e,t){return e+uintOrNaN(t.value)}),0)}var o=outputBytes({});e.exports={dustThreshold,finalize:function finalize(e,t,r){var n=transactionBytes(e,t),i=r*(n+o),a=sumOrNaN(e)-(sumOrNaN(t)+i);a>dustThreshold(0,r)&&(t=t.concat({value:a}));var s=sumOrNaN(e)-sumOrNaN(t);return isFinite(s)?{inputs:e,outputs:t,fee:s}:{fee:r*n}},inputBytes,outputBytes,sumOrNaN,sumForgiving:function sumForgiving(e){return e.reduce((function(e,t){return e+(isFinite(t.value)?t.value:0)}),0)},transactionBytes,uintOrNaN}},940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>b});var n=r(482451),i=r.n(n),a=r(324586),s=r(586330),o=r(230414),u=r(507140),c=r(606777),p=r(401349),f=r(404727),l=r(180556),d=r(929296),y=r(195309),h=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,y.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,d.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,a=(0,p.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,a,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,p.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,s.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,p._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,o.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,p.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,s.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),a=c.A.toBuffer(r),{curve:s}=this,o=(0,p.MX)(s,n,i,a);return Promise.resolve(o)},(0,o.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(){function CoreChainApiBase(){}var e,t,r,n,a,d,y,h,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return p.ev;case"secp256k1":return p.bI;case"nistp256":return p.OX;default:throw new u.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,s.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,s.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],a=e?.relPaths?.[0];if(!i&&a&&(i=r[[n,a].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,s.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:a}=e,s={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(s=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:a})),r.imported){var{privateKey:o}=(0,p.VV)({password:i,credential:r.imported}),f=c.A.bytesToHex((0,p.w)(i,o));s[n.path]=f,s[""]=f}if(!Object.keys(s).length)throw new Error("No private keys found");return s})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,s.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:a}=r,s=a.split("/"),o=n||[s.pop()],f=s.join("/");if(0===o.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,p.Wu)(e,i,t,f,o).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(a=(0,s.A)((function*(e,t){var r=this,{curve:n,generateFrom:a}=t,{template:o,hdCredential:f,password:d,indexes:y}=e,{pathPrefix:h,pathSuffix:v}=(0,l.Ah)(o),g=y.map((function(e){return v.replace("{index}",e.toString())})),b="privateKey"===a,A=[],S=[];b?S=(0,p.Wu)(n,f,d,h,g):A=yield(0,p.MJ)({curveName:n,hdCredential:f,password:d,prefix:h,relPaths:g});var m=b?S:A;if(m.length!==y.length)throw new u.He("Unable to get publick key.");var P,w=yield Promise.all(m.map((P=(0,s.A)((function*(t){var n,a,{path:s,extendedKey:{key:o}}=t;if(b){var u=c.A.bytesToHex((0,p.Yc)(d,o));a=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=o.toString("hex"),a=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:s},a)})),function(e){return P.apply(this,arguments)})));return{addresses:w}})),function baseGetAddressesFromHd(e,t){return a.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return f.ECoreCredentialType.hd;if(e.imported)return f.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(d=(0,s.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return d.apply(this,arguments)}),v.validateXpub=(y=(0,s.A)((function*(e){throw new u.MS})),function validateXpub(e){return y.apply(this,arguments)}),v.validateXprvt=(h=(0,s.A)((function*(e){throw new u.MS})),function validateXprvt(e){return h.apply(this,arguments)}),(0,o.A)(CoreChainApiBase)}()},176932:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(230414),i=r(929296),a=r(195309),s=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var o=function(e){(0,i.A)(CoreChainImported,e);var t=_createSuper(CoreChainImported);function CoreChainImported(){return t.apply(this,arguments)}return(0,n.A)(CoreChainImported)}(r(803513).A)},803513:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var n=r(586330),i=r(230414),a=r(929296),s=r(195309),o=r(972715),u=r(507140),c=r(825145),p=r(606777),f=r(940916),l=r(401349),d=r(404727),y=r(603508),h=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,o.A)(e);if(t){var i=(0,o.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var v="secp256k1",g=function(e){(0,a.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,s,o,f,g,b,A,S=CoreChainSoftware.prototype;return S.getExportedSecretKey=(r=(0,n.A)((function*(e){var{networkInfo:t,password:r,keyType:n,credentials:i}=e,{privateKeyRaw:a}=yield this.baseGetDefaultPrivateKey(e);if(!a)throw new Error("privateKeyRaw is required");if(n===d.ECoreApiExportedSecretKeyType.privateKey){var s=t.chainId;return(0,y.privateKeyFromBuffer)((0,l.Yc)(r,a),s).toWIF()}throw new Error(`SecretKey type not support: ${n}`)})),function getExportedSecretKey(e){return r.apply(this,arguments)}),S.getPrivateKeys=(s=(0,n.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:v})})),function getPrivateKeys(e){return s.apply(this,arguments)}),S.signTransaction=(o=(0,n.A)((function*(e){var{unsignedTx:t,account:r,networkInfo:{chainId:i}}=e,a=yield this.baseGetSingleSigner({payload:e,curve:v}),s=t.encodedTx,o=(0,y.toTransaction)(s),u=yield(0,y.signTransaction)(o,{getPublicKey:()=>(0,y.publicKeyFromOriginPubkey)(h.from(p.A.hexToBytes((0,c.wT)(r.pub)))),getPrivateKey:()=>(0,n.A)((function*(){var e=yield a.getPrvkey(),t=yield a.getPubkey(!0);return(0,y.privateKeyFromOriginPrivateKey)(e,t,i)}))()});return{encodedTx:t.encodedTx,txid:"",rawTx:u}})),function signTransaction(e){return o.apply(this,arguments)}),S.signMessage=(f=(0,n.A)((function*(){throw new u.MS})),function signMessage(){return f.apply(this,arguments)}),S.getAddressFromPrivate=(g=(0,n.A)((function*(e){var{privateKeyRaw:t}=e,r=p.A.toBuffer(t),n=this.baseGetCurve(v).publicFromPrivate(r);return this.getAddressFromPublic({publicKey:p.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return g.apply(this,arguments)}),S.getAddressFromPublic=(b=(0,n.A)((function*(e){var{publicKey:t,networkInfo:{chainId:r}}=e,n=(0,y.publicKeyFromOriginPubkey)(p.A.toBuffer(t)),i=(0,y.addressFromPublicKey)(n,r);return Promise.resolve({address:i,publicKey:t})})),function getAddressFromPublic(e){return b.apply(this,arguments)}),S.getAddressesFromHd=(A=(0,n.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:v})})),function getAddressesFromHd(e){return A.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(f.G)},630420:(e,t,r)=>{"use strict";r.d(t,{_:()=>f});var n=r(646123),i=r.n(n),a=r(586330),s=r(230414),o=r(21756),u=r(507140),c=r(334439),p=r(545179),f=function(){function RestAPIClient(e){this.axios=o.A.create({baseURL:e,timeout:3e4})}var e,t,r,n,f,l,d,y,h=RestAPIClient.prototype;return h.getBlockdag=(e=(0,a.A)((function*(){try{return(yield this.axios.get("/info/blockdag",{headers:{"Content-Type":"application/json"}})).data}catch(e){return{networkName:"",blockCount:"0",headerCount:"0",virtualDaaScore:"0"}}})),function getBlockdag(){return e.apply(this,arguments)}),h.getNetworkInfo=(t=(0,a.A)((function*(){try{return(yield this.axios.get("/info/network",{headers:{"Content-Type":"application/json"}})).data}catch(e){return{networkName:"",blockCount:"0",headerCount:"0",virtualDaaScore:"0"}}})),function getNetworkInfo(){return t.apply(this,arguments)}),h.queryBalance=(r=(0,a.A)((function*(e){try{return(yield this.axios.get(`/addresses/${e}/balance`,{headers:{"Content-Type":"application/json"}})).data.balance}catch(e){return 0n}})),function queryBalance(e){return r.apply(this,arguments)}),h.queryUtxos=(n=(0,a.A)((function*(e){try{return(yield this.axios.get(`/addresses/${e}/utxos`,{headers:{"Content-Type":"application/json"}})).data}catch(e){return[]}})),function queryUtxos(e){return n.apply(this,arguments)}),h.sendRawTransaction=(f=(0,a.A)((function*(e){var t=(0,p.UW)(e);return this.axios.post("/transactions",t,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data.transactionId})).catch((function(e){var t=i()(e,"response.data.error","");if(t.match(/payment of \d+ is dust/))throw new u.He({message:t,key:c.ETranslations.send_amount_too_small});if(-1!==t.toLowerCase().indexOf("insufficient balance"))throw new u.He({message:t,key:c.ETranslations.earn_insufficient_balance});throw new u.He(t)}))})),function sendRawTransaction(e){return f.apply(this,arguments)}),h.getTransaction=(l=(0,a.A)((function*(e){return(yield this.axios.get(`/transactions/${e}?inputs=true&outputs=true&resolve_previous_outpoints=light`,{headers:{"Content-Type":"application/json"}})).data})),function getTransaction(e){return l.apply(this,arguments)}),h.getTransactions=(d=(0,a.A)((function*(e){return(yield this.axios.post("/transactions/search?resolve_previous_outpoints=light",{transactionIds:[...e]},{headers:{"Content-Type":"application/json"}})).data})),function getTransactions(e){return d.apply(this,arguments)}),h.getTransactionsByAddress=(y=(0,a.A)((function*(e){return(yield this.axios.get(`/addresses/${e}/full-transactions?limit=50&offset=0&resolve_previous_outpoints=light`,{headers:{"Content-Type":"application/json"}})).data})),function getTransactionsByAddress(e){return y.apply(this,arguments)}),(0,s.A)(RestAPIClient)}()},729047:(e,t,r)=>{"use strict";r.d(t,{CI:()=>o,H2:()=>u,Wu:()=>n,aF:()=>s,du:()=>a,uR:()=>i});var n=10,i=2e7,a=1e6,s=1e5,o=1,u=0},603508:(e,t,r)=>{"use strict";r.d(t,{CONFIRMATION_COUNT:()=>a.Wu,DEFAULT_FEE_RATE:()=>a.CI,DUST_AMOUNT:()=>a.uR,EKaspaSignType:()=>p,MAX_BLOCK_SIZE:()=>a.du,MAX_ORPHAN_TX_MASS:()=>a.aF,SignatureType:()=>f.D7,SigningMethodType:()=>f.Ne,addressFromPublicKey:()=>addressFromPublicKey,isValidAddress:()=>isValidAddress,privateKeyFromBuffer:()=>privateKeyFromBuffer,privateKeyFromOriginPrivateKey:()=>privateKeyFromOriginPrivateKey,privateKeyFromWIF:()=>privateKeyFromWIF,publicKeyFromOriginPubkey:()=>publicKeyFromOriginPubkey,publicKeyFromX:()=>publicKeyFromX,selectUTXOs:()=>selectUTXOs,signTransaction:()=>f.Wg,toTransaction:()=>f.EX});var n=r(387473),i=function(e){return e.PayToPublicKey="pubkey",e.PayToScriptHash="scripthash",e}({});function addressFromPublicKey(e,t){return n.Address.fromPublicKey(e,t).toString()}function isValidAddress(e,t,r=i.PayToPublicKey){return n.Address.isValid(e,t,r)}r(630420);var a=r(729047),s=r(830036),o=r(894191),u=r(209188);function privateKeyFromWIF(e){return n.PrivateKey.fromWIF(e)}function privateKeyFromBuffer(e,t){return n.PrivateKey.fromBuffer(e,t)}function privateKeyFromOriginPrivateKey(e,t,r){var i=new Uint8Array(e),a=t;if(3===a[0]&&(i=u.A.privateNegate(i)),!i)throw new Error("Private key is required for tweaking signer!");var c=u.A.privateAdd(i,(0,o.q)(a.slice(1),void 0));return new n.PrivateKey((0,s.My)(c),r)}var c=r(901048).Buffer,p=function(e){return e.Schnorr="schnorr",e.ECDSA="ecdsa",e}({});function publicKeyFromX(e,t){var r=e?`02${t}`:`03${t}`;return n.PublicKey.fromString(r)}function publicKeyFromOriginPubkey(e){var t=(0,o.z)(c.from(e.slice(1)));if(!t)throw new Error("Public key tweak failed");var{parity:r,x:n}=t;return publicKeyFromX(0===r,(0,s.My)(n))}var f=r(545179),l=r(414637),d=r(241440),y=new d.A("18446744073709551615"),h=r(507140);function selectUTXOs(e,t,r){var n=function sortUXTO(e){return e.sort((function(e,t){return e.blockDaaScore-t.blockDaaScore||new d.g(t.satoshis).minus(e.satoshis).toNumber()||e.txid.localeCompare(t.txid)||e.vout-t.vout}))}(e),i=[],a=[],s=new d.g(0),o=0;for(var u of n){var c=new l.UnspentOutput(u);if(a.push(c.id),i.push(u),o+=c.mass,(s=s.plus(c.satoshis)).isGreaterThanOrEqualTo(t))break}if(s.isLessThan(t))throw new h.Cm;if(s.isGreaterThan(y))throw new Error("utxo amount is too large");return{utxoIds:a,utxos:i,mass:o}}},545179:(e,t,r)=>{"use strict";r.d(t,{D7:()=>y,EX:()=>toTransaction,Ne:()=>h,UW:()=>submitTransactionFromString,Wg:()=>signTransaction});var n=r(586330),i=r(830036),a=r(332084),s=r(387473),o=r(241440),u=r(507140),c=r(334439),p=r(424754),f=r(209188),l=r(729047),d=r(414637),y=function(e){return e[e.SIGHASH_ALL=1]="SIGHASH_ALL",e[e.SIGHASH_NONE=2]="SIGHASH_NONE",e[e.SIGHASH_SINGLE=3]="SIGHASH_SINGLE",e[e.SIGHASH_FORKID=64]="SIGHASH_FORKID",e[e.SIGHASH_ANYONECANPAY=128]="SIGHASH_ANYONECANPAY",e}({}),h=function(e){return e.ECDSA="ecdsa",e.Schnorr="schnorr",e}({});function toTransaction(e){var t,{inputs:r,outputs:n,mass:i}=e,{address:a}=r[0]||{},{address:p,value:f}=n[0],y=new o.A(f),h=new o.A(null!=(t=e.feeInfo?.price)?t:l.CI).multipliedBy(i).toFixed();if(e.hasMaxSend&&(y=y.minus(h)),y.isLessThan(0))throw new u.He({message:"Insufficient Balance.",key:c.ETranslations.swap_page_button_insufficient_balance});var v=(new s.Transaction).from(r.map((function(e){return new d.UnspentOutput(e)}))).to(p,y.toFixed()).setVersion(0).fee(parseInt(h,10)).change(a?.toString());return v.inputs.forEach((function(e){e.sequenceNumber=l.H2})),v}function _sign2(){return(_sign2=(0,n.A)((function*(e,t,r,n,o,u,c,l){var d=s.Transaction.Sighash.sighash(e,r,n,o,u,c);if("schnorr"===l){var y=(yield t.getPrivateKey()).toBuffer(),h=f.A.signSchnorr(d,y),v=(0,i.My)(h),g=s.crypto.Signature.fromString(p.A.stripHexPrefix(v)),b=g.toBuffer("schnorr").toString("hex");if(b.length<128)throw new Error(`Invalid Signature\nsecp256k1 sig:${p.A.hexlify(v)}\nSignature.fromString:${b}`);return g.compressed=!0,g.nhashtype=r,g}if("ecdsa"===l){var A=yield a._S(d,(yield t.getPrivateKey()).toBuffer()),S=p.A.hexlify(A),m=s.crypto.Signature.fromString(p.A.stripHexPrefix(S));return m.compressed=!0,m.nhashtype=r,m}}))).apply(this,arguments)}function getSignaturesWithInput(e,t,r,n){return _getSignaturesWithInput.apply(this,arguments)}function _getSignaturesWithInput(){return _getSignaturesWithInput=(0,n.A)((function*(e,t,r,n,i=y.SIGHASH_ALL|y.SIGHASH_FORKID,a=h.Schnorr){if(t instanceof s.Transaction.Input.PublicKey){var o=n.getPublicKey();if(o.toString()===p.A.hexlify(t?.output?.script?.getPublicKey(),{noPrefix:!0})){var u=yield function sign(e,t,r,n,i,a,s,o){return _sign2.apply(this,arguments)}(e,n,i,r,t.output?.script,t.output?.satoshis,void 0,a);return[new s.Transaction.Signature({publicKey:o,prevTxId:t.prevTxId,outputIndex:t.outputIndex,inputIndex:r,signature:u,sigtype:i})]}return[]}})),_getSignaturesWithInput.apply(this,arguments)}function _getSignatures(){return(_getSignatures=(0,n.A)((function*(e,t,r,n=y.SIGHASH_ALL|y.SIGHASH_FORKID,i=h.Schnorr){var a,s=[];for(var{input:o,index:u}of t)a=(yield getSignaturesWithInput(r,o,u,e,n,i))||[],s.push(...a);return s}))).apply(this,arguments)}function _sign3(){return _sign3=(0,n.A)((function*(e,t,r,n,i=h.ECDSA){var a=(yield function getSignatures(e,t,r){return _getSignatures.apply(this,arguments)}(e,t,r,n,i))||[];for(var s of a)r.inputs[s.inputIndex].addSignature(r,s,i);return r.toBuffer().toString("hex")})),_sign3.apply(this,arguments)}function signTransaction(e,t){for(var r=[],n=0;n<e.inputs.length;n+=1){var i=e.inputs[n];r.push({input:i,index:n})}return function _sign(e,t,r,n){return _sign3.apply(this,arguments)}(t,r,e,y.SIGHASH_ALL,h.Schnorr)}function submitTransactionFromString(e){var t=new s.Transaction(e),{nLockTime:r,version:n}=t;return{transaction:{version:n,inputs:t.inputs.map((function(e){return{previousOutpoint:{transactionId:e.prevTxId.toString("hex"),index:e.outputIndex},signatureScript:e.script.toBuffer().toString("hex"),sequence:l.H2,sigOpCount:1}})),outputs:t.outputs.map((function(e){return{amount:new o.A(e.satoshis).toFixed(),scriptPublicKey:{scriptPublicKey:e.script.toBuffer().toString("hex"),version:0}}})),lockTime:r,fee:t.fee,subnetworkId:"0000000000000000000000000000000000000000"}}}},187826:()=>{},414637:(e,t,r)=>{"use strict";r.d(t,{UnspentOutput:()=>i.f});var n=r(187826);r.o(n,"UnspentOutput")&&r.d(t,{UnspentOutput:function(){return n.UnspentOutput}}),r.o(n,"selectUTXOs")&&r.d(t,{selectUTXOs:function(){return n.selectUTXOs}});var i=r(829933)},829933:(e,t,r)=>{"use strict";r.d(t,{f:()=>u});var n=r(230414),i=r(929296),a=r(195309),s=r(972715),o=r(387473);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var u=function(e){(0,i.A)(UnspentOutput,e);var t=_createSuper(UnspentOutput);function UnspentOutput(e){var r;return(r=t.call(this,e)).blockDaaScore=e.blockDaaScore,r.scriptPublicKeyVersion=e.scriptPublicKeyVersion,r.id=`${r.txId}${r.outputIndex}`,r.signatureOPCount=r.script.getSignatureOperationsCount(),r.mass=r.signatureOPCount*o.Transaction.MassPerSigOp,r.mass+=151*o.Transaction.MassPerTxByte,r.scriptPubKey=e.scriptPubKey,r}return UnspentOutput.prototype.toJSON=function toJSON(){return{txid:this.txId,address:this.address.toString(),vout:this.outputIndex,scriptPubKey:this.scriptPubKey,satoshis:this.satoshis,blockDaaScore:this.blockDaaScore,scriptPublicKeyVersion:this.scriptPublicKeyVersion}},UnspentOutput.fromJSON=function fromJSON(e){return new UnspentOutput(e)},(0,n.A)(UnspentOutput)}(o.Transaction.UnspentOutput)},180556:(e,t,r)=>{"use strict";r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(451661),i=r.n(n),a=r(491180);function slicePathTemplate(e){return a.A.slicePathTemplate(e)}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}},937130:()=>{},527852:()=>{}}]);
//# sourceMappingURL=55430.e830103180.chunk.js.map