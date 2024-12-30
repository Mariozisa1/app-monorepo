!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="84c98126-0baa-4ee3-a212-e31402d6be82",e._sentryDebugIdIdentifier="sentry-dbid-84c98126-0baa-4ee3-a212-e31402d6be82")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[23696],{82506:(e,n,t)=>{t.d(n,{d:()=>useDebounce});var o=t(578104);function useDebounce(e,n,t){var[r]=(0,o.d7)(e,n,t);return r}},278484:(e,n,t)=>{t.d(n,{wI:()=>DAppAccountListItem,ZY:()=>DAppAccountListStandAloneItem,X1:()=>DAppAccountListStandAloneItemForHomeScene,VV:()=>WalletConnectAccountTriggerList});var o=t(460986),r=t.n(o),a=t(324586),s=t(586330),c=t(514041),i=t(908867),p=t(17617),u=t(490343),l=t(643087),d=t(904121),m=t(237532),g=t(24284),A=t(911998),f=t(162616),y=t(226952),w=t(334439),k=(t(663522),t(584186)),h=t(714191),b=t(82506);var x=t(831085);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,a.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function DAppAccountListInitFromHome({num:e,shouldSyncFromHome:n}){var[,t]=(0,f.K7)(),o=(0,f.z$)();return(0,c.useEffect)((function(){return(0,s.A)((function*(){try{t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!0}})})),yield k.A.wait(600),n&&(yield o.current.syncFromScene({from:{sceneName:h.Zs.home,sceneNum:0},num:e}))}finally{n&&(yield k.A.wait(300)),t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}))(),function(){t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}),[o,e,t,n]),null}function DAppAccountListItem({num:e,handleAccountChanged:n,readonly:t,networkReadonly:o,compressionUiMode:r,initFromHome:a,beforeShowTrigger:s,skeletonRenderDuration:i}){!function useHandleDiscoveryAccountChanged({num:e,handleAccountChanged:n}){var{activeAccount:t}=(0,f.LH)({num:e}),{selectedAccount:o}=(0,f.wz)({num:e}),r=(0,b.d)(t,200),a=(0,b.d)(o,200),s=(0,c.useRef)(t),i=(0,c.useRef)(o);(0,c.useEffect)((function(){s.current=t,i.current=o}),[t,o]),(0,c.useEffect)((function(){n&&(r.isOthersWallet&&r.account?.id===a.othersWalletAccountId||r.indexedAccount?.id===a.indexedAccountId)&&n({activeAccount:s.current,selectedAccount:i.current},e)}),[r,a,n,e])}({num:e,handleAccountChanged:n});var l=Boolean(a&&!t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.YGroup,{bg:"$bg",borderRadius:"$3",borderColor:"$borderSubdued",borderWidth:p.A.hairlineWidth,separator:(0,x.jsx)(u.Divider,{}),disabled:t,"data-sentry-element":"YGroup","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,x.jsx)(u.YGroup.Item,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,x.jsx)(d.jY,{num:e,beforeShowTrigger:s,disabled:o||t,loadingDuration:0,"data-sentry-element":"NetworkSelectorTriggerDappConnection","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})}),(0,x.jsx)(u.YGroup.Item,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,x.jsx)(m.Up,{num:e,compressionUiMode:r,beforeShowTrigger:s,loadingDuration:0,"data-sentry-element":"AccountSelectorTriggerDappConnection","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})})]}),(0,x.jsx)(DAppAccountListInitFromHome,{num:e,shouldSyncFromHome:l,"data-sentry-element":"DAppAccountListInitFromHome","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})]})}function DAppAccountListStandAloneItem({readonly:e,handleAccountChanged:n,onConnectedAccountInfoChanged:t}){var o=(0,i.A)(),{serviceDApp:a,serviceNetwork:p}=l.A,{$sourceInfo:m}=(0,g.A)(),{result:f}=(0,A.yk)((0,s.A)((function*(){var e,n;if(!m?.origin||!m.scope)return{accountSelectorNum:null,networkIds:null};var t=(0,y.zg)(m.scope),o=t?(yield p.getNetworkIdsByImpls({impls:t})).networkIds:null,r=yield a.getConnectedAccountsInfo({origin:m.origin,scope:null!=(e=m.scope)?e:"",isWalletConnectRequest:m.isWalletConnectRequest});return Array.isArray(r)&&r.length>0&&"number"==typeof r[0]?.num?{accountSelectorNum:r[0].num,networkIds:o,existConnectedAccount:!0}:{accountSelectorNum:yield a.getAccountSelectorNum({origin:m.origin,scope:null!=(n=m.scope)?n:"",isWalletConnectRequest:m.isWalletConnectRequest}),networkIds:o,existConnectedAccount:!1}})),[m?.origin,m?.scope,m?.isWalletConnectRequest,a,p]);return(0,c.useEffect)((function(){r()(f?.accountSelectorNum)&&t&&t({num:f.accountSelectorNum,existConnectedAccount:f.existConnectedAccount})}),[f?.accountSelectorNum,f?.existConnectedAccount,t]),(0,x.jsxs)(u.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem","data-sentry-element":"YStack","data-sentry-component":"DAppAccountListStandAloneItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,x.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:o.formatMessage({id:w.ETranslations.global_accounts})}),"number"==typeof f?.accountSelectorNum&&Array.isArray(f?.networkIds)?(0,x.jsx)(d.b8,{config:{sceneName:h.Zs.discover,sceneUrl:m?.origin},enabledNum:[f.accountSelectorNum],availableNetworksMap:{[f.accountSelectorNum]:{networkIds:f.networkIds}},children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!f?.existConnectedAccount,num:f?.accountSelectorNum,handleAccountChanged:n,readonly:e})}):null]})}function DAppAccountListStandAloneItemForHomeScene(){var e=(0,i.A)();return(0,x.jsxs)(u.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem","data-sentry-element":"YStack","data-sentry-component":"DAppAccountListStandAloneItemForHomeScene","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,x.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:e.formatMessage({id:w.ETranslations.global_accounts})}),(0,x.jsx)(d.b8,{config:{sceneName:h.Zs.home},enabledNum:[0],"data-sentry-element":"AccountSelectorProviderMirror","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!1,num:0,readonly:!0,"data-sentry-element":"DAppAccountListItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})})]})}function WalletConnectAccountTriggerList({sceneUrl:e,sessionAccountsInfo:n,handleAccountChanged:t}){var o=n.map((function(e){return e.accountSelectorNum})),r=n.reduce((function(e,n){var t=n.networkIds.filter(Boolean);return e[n.accountSelectorNum]={networkIds:t,defaultNetworkId:t[0]},e}),{});return(0,x.jsxs)(u.YStack,{gap:"$2","data-sentry-element":"YStack","data-sentry-component":"WalletConnectAccountTriggerList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,x.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:"Accounts"}),Array.isArray(n)&&n.length?(0,x.jsx)(d.b8,{config:{sceneName:h.Zs.discover,sceneUrl:e},enabledNum:o,availableNetworksMap:r,children:(0,x.jsx)(u.YStack,{gap:"$2",children:n.map((function(e){return(0,x.jsx)(u.Stack,{children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!0,num:e.accountSelectorNum,handleAccountChanged:t})},e.accountSelectorNum)}))})}):null]})}},980342:(e,n,t)=>{t.d(n,{A:()=>s,z:()=>useDappCloseHandler});var o=t(490343),r=t(42484),a=t(831085);function useDappCloseHandler(e,n){return function(t){t?.flag!==r.nd.Confirmed&&e.reject(),"function"==typeof n&&n(t)}}const s=function DappOpenModalPage({children:e,onClose:n,dappApprove:t}){var r=useDappCloseHandler(t,n);return(0,a.jsxs)(o.Page,{scrollEnabled:!0,onClose:r,"data-sentry-element":"Page","data-sentry-component":"DappOpenModalPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/DappOpenModalPage.tsx",children:[(0,a.jsx)(o.Page.Header,{headerShown:!1,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/DappOpenModalPage.tsx"}),e]})}},789094:(e,n,t)=>{t.d(n,{A:()=>l});var o=t(514041),r=t(241440),a=t(908867),s=t(490343),c=t(334439),i=t(643087),p=t(911998),u=t(831085);const l=function LNSendPaymentForm(e){var{networkId:n,useFormReturn:t,amount:l,minimumAmount:d,maximumAmount:m,descriptionLabelId:g,commentAllowedLength:A,metadata:f,amountReadOnly:y,commentReadOnly:w}=e,k=(0,a.A)(),{result:h}=(0,p.yk)((function(){return i.A.serviceLightning.getInvoiceConfig({networkId:n})}),[n]),b=new r.A(null!=d?d:0).toNumber(),x=new r.A(null!=m?m:0).toNumber(),S=(0,o.useMemo)((function(){var e;return x&&x>0&&x>b&&x<Number(h?.maxSendAmount)&&(e=x),{min:{value:b,message:k.formatMessage({id:c.ETranslations.dapp_connect_amount_should_be_at_least},{0:b})},max:e?{value:e,message:k.formatMessage({id:c.ETranslations.dapp_connect_amount_should_not_exceed},{0:e})}:void 0,pattern:{value:/^[0-9]*$/,message:k.formatMessage({id:c.ETranslations.send_field_only_integer})},validate:function(e){if(!(b<=0)||e){var n=new r.A(e);return n.isInteger()?h?.maxSendAmount&&n.isGreaterThan(h?.maxSendAmount)?k.formatMessage({id:c.ETranslations.dapp_connect_amount_should_not_exceed},{0:h?.maxSendAmount}):void 0:k.formatMessage({id:c.ETranslations.send_field_only_integer})}}}}),[b,x,k,h?.maxSendAmount]),v=(0,o.useMemo)((function(){if(!(Number(l)>0||b>0&&b===x))return b>0&&x>0?k.formatMessage({id:c.ETranslations.dapp_connect_sats_between},{min:b,max:x<b?h?.maxSendAmount:Math.min(x,Number(h?.maxSendAmount))}):void 0}),[l,b,x,k,h]),D=(0,o.useMemo)((function(){if(!f||!f.length)return null;try{return JSON.parse(f).map((function([e,n],o){if("text/plain"===e||"text/long-desc"===e){var r=`metadataDescription-${o}`;return t.setValue(r,n),(0,u.jsx)(s.Form.Field,{label:k.formatMessage({id:c.ETranslations.global_description}),name:r,children:(0,u.jsx)(s.TextArea,{editable:!1,disabled:!0,numberOfLines:2})},n)}})).filter(Boolean)}catch(e){}return[]}),[k,f,t]);return(0,u.jsxs)(s.Form,{form:t,"data-sentry-element":"Form","data-sentry-component":"LNSendPaymentForm","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNSendPaymentForm.tsx",children:[D,(0,u.jsx)(s.Form.Field,{label:k.formatMessage({id:c.ETranslations.dapp_connect_amount}),name:"amount",rules:S,labelAddon:v,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNSendPaymentForm.tsx",children:(0,u.jsx)(s.Input,{editable:!y,readonly:y,placeholder:k.formatMessage({id:c.ETranslations.dapp_connect_enter_amount}),flex:1,addOns:[{label:k.formatMessage({id:c.ETranslations.global_sats})}],"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNSendPaymentForm.tsx"})}),Number(A)>0?(0,u.jsx)(s.Form.Field,{label:k.formatMessage({id:null!=g?g:c.ETranslations.dapp_connect_description_optional}),name:"comment",rules:{maxLength:{value:Number(A),message:k.formatMessage({id:c.ETranslations.dapp_connect_msg_description_can_be_up_to_int_characters},{number:A})}},defaultValue:"",children:(0,u.jsx)(s.TextArea,{editable:!w,disabled:w})}):null]})}},323696:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var o=t(324586),r=t(586330),a=t(514041),s=t(654266),c=t(241440),i=t(908867),p=t(490343),u=t(643087),l=t(796895),d=t(24284),m=t(927799),g=t(980342),A=t(333597),f=t(507140),y=t(334439),w=t(42484),k=t(278484),h=t(987711),b=t(905710),x=t(789094),S=t(831085);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,o.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const v=function LnurlPayRequestModal(){var e,n,t,o,v=(0,i.A)(),D=(0,s.lq)().params,L=(0,d.A)(),{$sourceInfo:I}=L,{accountId:j,networkId:_,lnurlDetails:C,transfersInfo:N}=D.isSendFlow?D:L,O=(0,l.A)({id:null!=(e=I?.id)?e:"",closeWindowAfterResolved:!0}),M=(0,a.useMemo)((function(){if(C?.url)return new URL(C.url).origin}),[C?.url]),[P,F]=(0,a.useState)(!1),T=(0,m.E)({accountId:j,networkId:_}),{showContinueOperate:R,continueOperate:E,setContinueOperate:q,riskLevel:H,urlSecurityInfo:$}=(0,b.q)({origin:null!=M?M:""}),Y=Math.floor(Number(null!=(n=C?.minSendable)?n:0)/1e3),z=Math.floor(Number(null!=(t=C?.maxSendable)?t:0)/1e3),W=(0,p.useForm)({defaultValues:{amount:Y>0&&Y===z?`${Y}`:"",comment:""}}),K=(0,a.useMemo)((function(){return C&&"number"==typeof C.commentAllowed&&C.commentAllowed>0?C.commentAllowed:0}),[C]),Z=(0,a.useCallback)((o=(0,r.A)((function*(e){if(C&&!P&&(yield W.trigger())){F(!0);var n,{serviceLightning:t}=u.A,o=W.getValues(),r=new c.A(o.amount).times(1e3).toNumber();try{var a={amount:r,comment:o.comment?o.comment:void 0};n=yield t.fetchLnurlPayRequestResult({callback:C.callback,params:a})}catch(e){var s;F(!1),O.reject();var i=null!=(s=e?.message)?s:e;throw new f.oZ({message:i,autoToast:!0})}try{var l=n.pr;(yield t.verifyInvoice({paymentInfo:n,metadata:C.metadata,amount:r,networkId:_,accountId:j}))||p.Toast.error({title:v.formatMessage({id:y.ETranslations.dapp_connect_msg_invalid_lightning_payment_request})});var d=N[0],m=[_objectSpread(_objectSpread({},d),{},{to:l,lnurlPaymentInfo:n,lightningAddress:(0,A.RT)(d.to)?d.to:void 0})];yield T.normalizeSendConfirm({transfersInfo:m,sameModal:!0,onSuccess:function(){D.isSendFlow||O.resolve({close:function(){e?.({flag:w.nd.Confirmed})},result:{status:"OK",data:void 0}})},onFail:function(){D.isSendFlow||O.reject()}})}catch(e){var g;O.reject();var k=null!=(g=e?.message)?g:e;throw new f.oZ({message:k,autoToast:!0})}finally{F(!1)}}})),function(e){return o.apply(this,arguments)}),[W,P,C,_,j,N,O,v,T,D.isSendFlow]);return(0,S.jsx)(g.A,{dappApprove:O,"data-sentry-element":"DappOpenModalPage","data-sentry-component":"LnurlPayRequestModal","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Send/LnurlPayRequestModal.tsx",children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Page.Header,{headerShown:!1,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Send/LnurlPayRequestModal.tsx"}),(0,S.jsx)(p.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Send/LnurlPayRequestModal.tsx",children:(0,S.jsxs)(h.HJ,{title:v.formatMessage({id:y.ETranslations.dapp_connect_lnurl_pay_request}),subtitleShown:!1,origin:null!=M?M:"",urlSecurityInfo:$,"data-sentry-element":"DAppRequestLayout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Send/LnurlPayRequestModal.tsx",children:[D.isSendFlow?(0,S.jsx)(k.X1,{}):(0,S.jsx)(k.ZY,{readonly:!0}),(0,S.jsx)(x.A,{accountId:j,networkId:_,useFormReturn:W,amount:Y===z?Y:void 0,amountReadOnly:Y===z,minimumAmount:Y,maximumAmount:z,commentAllowedLength:K,metadata:C.metadata,"data-sentry-element":"LNSendPaymentForm","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Send/LnurlPayRequestModal.tsx"})]})}),(0,S.jsx)(p.Page.Footer,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Send/LnurlPayRequestModal.tsx",children:(0,S.jsx)(h.OS,{confirmText:v.formatMessage({id:y.ETranslations.global_continue}),continueOperate:E,setContinueOperate:function(e){q(!!e)},onConfirm:Z,onCancel:function(){D.isSendFlow||O.reject()},confirmButtonProps:{loading:P,disabled:!E},showContinueOperateCheckbox:R,riskLevel:H,"data-sentry-element":"DAppRequestFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Send/LnurlPayRequestModal.tsx"})})]})})}}}]);
//# sourceMappingURL=23696.1760b98426.chunk.js.map