!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="26555688-2ada-4de4-80b2-e92340d93838",e._sentryDebugIdIdentifier="sentry-dbid-26555688-2ada-4de4-80b2-e92340d93838")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[44701],{82506:(e,n,o)=>{o.d(n,{d:()=>useDebounce});var t=o(578104);function useDebounce(e,n,o){var[r]=(0,t.d7)(e,n,o);return r}},278484:(e,n,o)=>{o.d(n,{wI:()=>DAppAccountListItem,ZY:()=>DAppAccountListStandAloneItem,X1:()=>DAppAccountListStandAloneItemForHomeScene,VV:()=>WalletConnectAccountTriggerList});var t=o(460986),r=o.n(t),a=o(324586),s=o(586330),c=o(514041),i=o(908867),p=o(17617),u=o(490343),l=o(643087),m=o(904121),d=o(237532),A=o(24284),g=o(911998),k=o(162616),f=o(226952),w=o(334439),y=(o(663522),o(584186)),h=o(714191),b=o(82506);var v=o(831085);function ownKeys(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(o),!0).forEach((function(n){(0,a.A)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function DAppAccountListInitFromHome({num:e,shouldSyncFromHome:n}){var[,o]=(0,k.K7)(),t=(0,k.z$)();return(0,c.useEffect)((function(){return(0,s.A)((function*(){try{o((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!0}})})),yield y.A.wait(600),n&&(yield t.current.syncFromScene({from:{sceneName:h.Zs.home,sceneNum:0},num:e}))}finally{n&&(yield y.A.wait(300)),o((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}))(),function(){o((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}),[t,e,o,n]),null}function DAppAccountListItem({num:e,handleAccountChanged:n,readonly:o,networkReadonly:t,compressionUiMode:r,initFromHome:a,beforeShowTrigger:s,skeletonRenderDuration:i}){!function useHandleDiscoveryAccountChanged({num:e,handleAccountChanged:n}){var{activeAccount:o}=(0,k.LH)({num:e}),{selectedAccount:t}=(0,k.wz)({num:e}),r=(0,b.d)(o,200),a=(0,b.d)(t,200),s=(0,c.useRef)(o),i=(0,c.useRef)(t);(0,c.useEffect)((function(){s.current=o,i.current=t}),[o,t]),(0,c.useEffect)((function(){n&&(r.isOthersWallet&&r.account?.id===a.othersWalletAccountId||r.indexedAccount?.id===a.indexedAccountId)&&n({activeAccount:s.current,selectedAccount:i.current},e)}),[r,a,n,e])}({num:e,handleAccountChanged:n});var l=Boolean(a&&!o);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(u.YGroup,{bg:"$bg",borderRadius:"$3",borderColor:"$borderSubdued",borderWidth:p.A.hairlineWidth,separator:(0,v.jsx)(u.Divider,{}),disabled:o,"data-sentry-element":"YGroup","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,v.jsx)(u.YGroup.Item,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,v.jsx)(m.jY,{num:e,beforeShowTrigger:s,disabled:t||o,loadingDuration:0,"data-sentry-element":"NetworkSelectorTriggerDappConnection","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})}),(0,v.jsx)(u.YGroup.Item,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,v.jsx)(d.Up,{num:e,compressionUiMode:r,beforeShowTrigger:s,loadingDuration:0,"data-sentry-element":"AccountSelectorTriggerDappConnection","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})})]}),(0,v.jsx)(DAppAccountListInitFromHome,{num:e,shouldSyncFromHome:l,"data-sentry-element":"DAppAccountListInitFromHome","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})]})}function DAppAccountListStandAloneItem({readonly:e,handleAccountChanged:n,onConnectedAccountInfoChanged:o}){var t=(0,i.A)(),{serviceDApp:a,serviceNetwork:p}=l.A,{$sourceInfo:d}=(0,A.A)(),{result:k}=(0,g.yk)((0,s.A)((function*(){var e,n;if(!d?.origin||!d.scope)return{accountSelectorNum:null,networkIds:null};var o=(0,f.zg)(d.scope),t=o?(yield p.getNetworkIdsByImpls({impls:o})).networkIds:null,r=yield a.getConnectedAccountsInfo({origin:d.origin,scope:null!=(e=d.scope)?e:"",isWalletConnectRequest:d.isWalletConnectRequest});return Array.isArray(r)&&r.length>0&&"number"==typeof r[0]?.num?{accountSelectorNum:r[0].num,networkIds:t,existConnectedAccount:!0}:{accountSelectorNum:yield a.getAccountSelectorNum({origin:d.origin,scope:null!=(n=d.scope)?n:"",isWalletConnectRequest:d.isWalletConnectRequest}),networkIds:t,existConnectedAccount:!1}})),[d?.origin,d?.scope,d?.isWalletConnectRequest,a,p]);return(0,c.useEffect)((function(){r()(k?.accountSelectorNum)&&o&&o({num:k.accountSelectorNum,existConnectedAccount:k.existConnectedAccount})}),[k?.accountSelectorNum,k?.existConnectedAccount,o]),(0,v.jsxs)(u.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem","data-sentry-element":"YStack","data-sentry-component":"DAppAccountListStandAloneItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,v.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:t.formatMessage({id:w.ETranslations.global_accounts})}),"number"==typeof k?.accountSelectorNum&&Array.isArray(k?.networkIds)?(0,v.jsx)(m.b8,{config:{sceneName:h.Zs.discover,sceneUrl:d?.origin},enabledNum:[k.accountSelectorNum],availableNetworksMap:{[k.accountSelectorNum]:{networkIds:k.networkIds}},children:(0,v.jsx)(DAppAccountListItem,{initFromHome:!k?.existConnectedAccount,num:k?.accountSelectorNum,handleAccountChanged:n,readonly:e})}):null]})}function DAppAccountListStandAloneItemForHomeScene(){var e=(0,i.A)();return(0,v.jsxs)(u.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem","data-sentry-element":"YStack","data-sentry-component":"DAppAccountListStandAloneItemForHomeScene","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,v.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:e.formatMessage({id:w.ETranslations.global_accounts})}),(0,v.jsx)(m.b8,{config:{sceneName:h.Zs.home},enabledNum:[0],"data-sentry-element":"AccountSelectorProviderMirror","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,v.jsx)(DAppAccountListItem,{initFromHome:!1,num:0,readonly:!0,"data-sentry-element":"DAppAccountListItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})})]})}function WalletConnectAccountTriggerList({sceneUrl:e,sessionAccountsInfo:n,handleAccountChanged:o}){var t=n.map((function(e){return e.accountSelectorNum})),r=n.reduce((function(e,n){var o=n.networkIds.filter(Boolean);return e[n.accountSelectorNum]={networkIds:o,defaultNetworkId:o[0]},e}),{});return(0,v.jsxs)(u.YStack,{gap:"$2","data-sentry-element":"YStack","data-sentry-component":"WalletConnectAccountTriggerList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,v.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:"Accounts"}),Array.isArray(n)&&n.length?(0,v.jsx)(m.b8,{config:{sceneName:h.Zs.discover,sceneUrl:e},enabledNum:t,availableNetworksMap:r,children:(0,v.jsx)(u.YStack,{gap:"$2",children:n.map((function(e){return(0,v.jsx)(u.Stack,{children:(0,v.jsx)(DAppAccountListItem,{initFromHome:!0,num:e.accountSelectorNum,handleAccountChanged:o})},e.accountSelectorNum)}))})}):null]})}},980342:(e,n,o)=>{o.d(n,{A:()=>s,z:()=>useDappCloseHandler});var t=o(490343),r=o(42484),a=o(831085);function useDappCloseHandler(e,n){return function(o){o?.flag!==r.nd.Confirmed&&e.reject(),"function"==typeof n&&n(o)}}const s=function DappOpenModalPage({children:e,onClose:n,dappApprove:o}){var r=useDappCloseHandler(o,n);return(0,a.jsxs)(t.Page,{scrollEnabled:!0,onClose:r,"data-sentry-element":"Page","data-sentry-component":"DappOpenModalPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/DappOpenModalPage.tsx",children:[(0,a.jsx)(t.Page.Header,{headerShown:!1,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/DappOpenModalPage.tsx"}),e]})}},646433:(e,n,o)=>{o.d(n,{A:()=>l});var t=o(514041),r=o(241440),a=o(908867),s=o(490343),c=o(334439),i=o(643087),p=o(911998),u=o(831085);const l=function LNMakeInvoiceForm(e){var{networkId:n,useFormReturn:o,amount:l,minimumAmount:m,maximumAmount:d,descriptionLabelId:A,memo:g,amountReadOnly:k}=e,f=(0,a.A)(),{result:w}=(0,p.yk)((function(){return i.A.serviceLightning.getInvoiceConfig({networkId:n})}),[n]),y=new r.A(null!=m?m:0).toNumber(),h=new r.A(null!=d?d:0).toNumber(),b=(0,t.useMemo)((function(){var e;return h&&h>0&&h>y&&h<Number(w?.maxReceiveAmount)&&(e=h),{min:{value:y,message:f.formatMessage({id:c.ETranslations.dapp_connect_amount_should_be_at_least},{0:y})},max:e?{value:e,message:f.formatMessage({id:c.ETranslations.dapp_connect_amount_should_not_exceed},{0:e})}:void 0,pattern:{value:/^[0-9]*$/,message:f.formatMessage({id:c.ETranslations.send_field_only_integer})},validate:function(e){if(!(y<=0)||e){var n=new r.A(e);return n.isInteger()?w?.maxReceiveAmount&&n.isGreaterThan(w?.maxReceiveAmount)?f.formatMessage({id:c.ETranslations.dapp_connect_amount_should_not_exceed},{0:w?.maxReceiveAmount}):void 0:f.formatMessage({id:c.ETranslations.send_field_only_integer})}}}}),[y,h,w,f]),v=(0,t.useMemo)((function(){if(!(Number(l)>0||y>0&&y===h))return y>0&&h>0?f.formatMessage({id:c.ETranslations.dapp_connect_sats_between},{min:y,max:h<y?w?.maxReceiveAmount:Math.min(h,Number(w?.maxReceiveAmount))}):void 0}),[l,y,h,w,f]);return(0,u.jsxs)(s.Form,{form:o,"data-sentry-element":"Form","data-sentry-component":"LNMakeInvoiceForm","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNMakeInvoiceForm.tsx",children:[(0,u.jsx)(s.Form.Field,{label:f.formatMessage({id:c.ETranslations.send_amount}),name:"amount",rules:b,labelAddon:v,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNMakeInvoiceForm.tsx",children:(0,u.jsx)(s.Input,{editable:!k,readonly:k,placeholder:f.formatMessage({id:c.ETranslations.dapp_connect_enter_amount}),flex:1,addOns:[{label:f.formatMessage({id:c.ETranslations.global_sats})}],"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNMakeInvoiceForm.tsx"})}),(0,u.jsx)(s.Form.Field,{label:f.formatMessage({id:null!=A?A:c.ETranslations.global_description}),name:"description",rules:{maxLength:{value:40,message:f.formatMessage({id:c.ETranslations.dapp_connect_msg_description_can_be_up_to_int_characters},{number:"40"})}},defaultValue:"","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNMakeInvoiceForm.tsx",children:(0,u.jsx)(s.TextArea,{editable:!g,"data-sentry-element":"TextArea","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/components/LNMakeInvoiceForm.tsx"})})]})}},144701:(e,n,o)=>{o.r(n),o.d(n,{default:()=>h});var t=o(586330),r=o(514041),a=o(241440),s=o(908867),c=o(490343),i=o(643087),p=o(796895),u=o(24284),l=o(980342),m=o(507140),d=o(334439),A=o(42484),g=o(278484),k=o(987711),f=o(905710),w=o(646433),y=o(831085);const h=function WeblnMakeInvoiceModal(){var e,n,o,h,b,v,x,I,D,L,S=(0,s.A)(),{$sourceInfo:_,accountId:C,networkId:M}=(0,u.A)(),j=(0,p.A)({id:null!=(e=_?.id)?e:"",closeWindowAfterResolved:!0}),[N,T]=(0,r.useState)(!1),F=_?.data.params,{showContinueOperate:O,continueOperate:W,setContinueOperate:E,riskLevel:R,urlSecurityInfo:H}=(0,f.q)({origin:null!=(n=_?.origin)?n:""}),P=(0,c.useForm)({defaultValues:{amount:`${null!=(o=null!=(h=F.amount)?h:F.defaultAmount)?o:""}`,description:null!=(b=F.defaultMemo)?b:""}}),$=(0,r.useCallback)((L=(0,t.A)((function*(e){if(!N&&(yield P.trigger())&&M&&C){T(!0);var n=P.getValues(),o=n.amount||"0";try{var t=yield i.A.serviceLightning.createInvoice({networkId:M,accountId:C,amount:o,description:n.description});c.Toast.success({title:"Invoice created"}),yield j.resolve({close:function(){e?.({flag:A.nd.Confirmed})},result:{paymentRequest:t.payment_request,paymentHash:t.payment_hash}})}catch(e){var r;j.reject();var a=null!=(r=e?.message)?r:e;throw new m.oZ({message:a,autoToast:!0})}finally{T(!1)}}})),function(e){return L.apply(this,arguments)}),[M,C,N,j,P]);return(0,y.jsx)(l.A,{dappApprove:j,"data-sentry-element":"DappOpenModalPage","data-sentry-component":"WeblnMakeInvoiceModal","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx",children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.Page.Header,{headerShown:!1,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx"}),(0,y.jsx)(c.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx",children:(0,y.jsxs)(k.HJ,{title:S.formatMessage({id:d.ETranslations.dapp_connect_create_invoice_request}),subtitleShown:!1,origin:null!=(v=_?.origin)?v:"",urlSecurityInfo:H,"data-sentry-element":"DAppRequestLayout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx",children:[(0,y.jsx)(g.ZY,{readonly:!0,"data-sentry-element":"DAppAccountListStandAloneItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx"}),(0,y.jsx)(w.A,{isWebln:!0,accountId:C,networkId:M,useFormReturn:P,amount:new a.A(null!=(x=F.amount)?x:"").toNumber(),minimumAmount:new a.A(null!=(I=F.minimumAmount)?I:"").toNumber(),maximumAmount:new a.A(null!=(D=F.maximumAmount)?D:"").toNumber(),amountReadOnly:Number(F.amount)>0,memo:F.defaultMemo,"data-sentry-element":"LNMakeInvoiceForm","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx"})]})}),(0,y.jsx)(c.Page.Footer,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx",children:(0,y.jsx)(k.OS,{confirmText:S.formatMessage({id:d.ETranslations.dapp_connect_create}),continueOperate:W,setContinueOperate:function(e){E(!!e)},onConfirm:$,onCancel:function(){return j.reject()},confirmButtonProps:{loading:N,disabled:!W},showContinueOperateCheckbox:O,riskLevel:R,"data-sentry-element":"DAppRequestFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LightningNetwork/pages/Webln/WeblnMakeInvoiceModal.tsx"})})]})})}}}]);
//# sourceMappingURL=44701.9f67efab78.chunk.js.map