!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b5dd83e4-2221-4287-a39b-dec32364fb34",e._sentryDebugIdIdentifier="sentry-dbid-b5dd83e4-2221-4287-a39b-dec32364fb34")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[50200],{82506:(e,n,o)=>{o.d(n,{d:()=>useDebounce});var t=o(578104);function useDebounce(e,n,o){var[r]=(0,t.d7)(e,n,o);return r}},278484:(e,n,o)=>{o.d(n,{wI:()=>DAppAccountListItem,ZY:()=>DAppAccountListStandAloneItem,X1:()=>DAppAccountListStandAloneItemForHomeScene,VV:()=>WalletConnectAccountTriggerList});var t=o(460986),r=o.n(t),a=o(324586),c=o(586330),s=o(514041),p=o(908867),i=o(17617),u=o(490343),d=o(643087),l=o(904121),m=o(237532),A=o(24284),g=o(911998),k=o(162616),f=o(226952),y=o(334439),w=(o(663522),o(584186)),x=o(714191),h=o(82506);var C=o(831085);function ownKeys(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(o),!0).forEach((function(n){(0,a.A)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function DAppAccountListInitFromHome({num:e,shouldSyncFromHome:n}){var[,o]=(0,k.K7)(),t=(0,k.z$)();return(0,s.useEffect)((function(){return(0,c.A)((function*(){try{o((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!0}})})),yield w.A.wait(600),n&&(yield t.current.syncFromScene({from:{sceneName:x.Zs.home,sceneNum:0},num:e}))}finally{n&&(yield w.A.wait(300)),o((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}))(),function(){o((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}),[t,e,o,n]),null}function DAppAccountListItem({num:e,handleAccountChanged:n,readonly:o,networkReadonly:t,compressionUiMode:r,initFromHome:a,beforeShowTrigger:c,skeletonRenderDuration:p}){!function useHandleDiscoveryAccountChanged({num:e,handleAccountChanged:n}){var{activeAccount:o}=(0,k.LH)({num:e}),{selectedAccount:t}=(0,k.wz)({num:e}),r=(0,h.d)(o,200),a=(0,h.d)(t,200),c=(0,s.useRef)(o),p=(0,s.useRef)(t);(0,s.useEffect)((function(){c.current=o,p.current=t}),[o,t]),(0,s.useEffect)((function(){n&&(r.isOthersWallet&&r.account?.id===a.othersWalletAccountId||r.indexedAccount?.id===a.indexedAccountId)&&n({activeAccount:c.current,selectedAccount:p.current},e)}),[r,a,n,e])}({num:e,handleAccountChanged:n});var d=Boolean(a&&!o);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(u.YGroup,{bg:"$bg",borderRadius:"$3",borderColor:"$borderSubdued",borderWidth:i.A.hairlineWidth,separator:(0,C.jsx)(u.Divider,{}),disabled:o,"data-sentry-element":"YGroup","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,C.jsx)(u.YGroup.Item,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,C.jsx)(l.jY,{num:e,beforeShowTrigger:c,disabled:t||o,loadingDuration:0,"data-sentry-element":"NetworkSelectorTriggerDappConnection","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})}),(0,C.jsx)(u.YGroup.Item,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,C.jsx)(m.Up,{num:e,compressionUiMode:r,beforeShowTrigger:c,loadingDuration:0,"data-sentry-element":"AccountSelectorTriggerDappConnection","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})})]}),(0,C.jsx)(DAppAccountListInitFromHome,{num:e,shouldSyncFromHome:d,"data-sentry-element":"DAppAccountListInitFromHome","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})]})}function DAppAccountListStandAloneItem({readonly:e,handleAccountChanged:n,onConnectedAccountInfoChanged:o}){var t=(0,p.A)(),{serviceDApp:a,serviceNetwork:i}=d.A,{$sourceInfo:m}=(0,A.A)(),{result:k}=(0,g.yk)((0,c.A)((function*(){var e,n;if(!m?.origin||!m.scope)return{accountSelectorNum:null,networkIds:null};var o=(0,f.zg)(m.scope),t=o?(yield i.getNetworkIdsByImpls({impls:o})).networkIds:null,r=yield a.getConnectedAccountsInfo({origin:m.origin,scope:null!=(e=m.scope)?e:"",isWalletConnectRequest:m.isWalletConnectRequest});return Array.isArray(r)&&r.length>0&&"number"==typeof r[0]?.num?{accountSelectorNum:r[0].num,networkIds:t,existConnectedAccount:!0}:{accountSelectorNum:yield a.getAccountSelectorNum({origin:m.origin,scope:null!=(n=m.scope)?n:"",isWalletConnectRequest:m.isWalletConnectRequest}),networkIds:t,existConnectedAccount:!1}})),[m?.origin,m?.scope,m?.isWalletConnectRequest,a,i]);return(0,s.useEffect)((function(){r()(k?.accountSelectorNum)&&o&&o({num:k.accountSelectorNum,existConnectedAccount:k.existConnectedAccount})}),[k?.accountSelectorNum,k?.existConnectedAccount,o]),(0,C.jsxs)(u.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem","data-sentry-element":"YStack","data-sentry-component":"DAppAccountListStandAloneItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,C.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:t.formatMessage({id:y.ETranslations.global_accounts})}),"number"==typeof k?.accountSelectorNum&&Array.isArray(k?.networkIds)?(0,C.jsx)(l.b8,{config:{sceneName:x.Zs.discover,sceneUrl:m?.origin},enabledNum:[k.accountSelectorNum],availableNetworksMap:{[k.accountSelectorNum]:{networkIds:k.networkIds}},children:(0,C.jsx)(DAppAccountListItem,{initFromHome:!k?.existConnectedAccount,num:k?.accountSelectorNum,handleAccountChanged:n,readonly:e})}):null]})}function DAppAccountListStandAloneItemForHomeScene(){var e=(0,p.A)();return(0,C.jsxs)(u.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem","data-sentry-element":"YStack","data-sentry-component":"DAppAccountListStandAloneItemForHomeScene","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,C.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:e.formatMessage({id:y.ETranslations.global_accounts})}),(0,C.jsx)(l.b8,{config:{sceneName:x.Zs.home},enabledNum:[0],"data-sentry-element":"AccountSelectorProviderMirror","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:(0,C.jsx)(DAppAccountListItem,{initFromHome:!1,num:0,readonly:!0,"data-sentry-element":"DAppAccountListItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx"})})]})}function WalletConnectAccountTriggerList({sceneUrl:e,sessionAccountsInfo:n,handleAccountChanged:o}){var t=n.map((function(e){return e.accountSelectorNum})),r=n.reduce((function(e,n){var o=n.networkIds.filter(Boolean);return e[n.accountSelectorNum]={networkIds:o,defaultNetworkId:o[0]},e}),{});return(0,C.jsxs)(u.YStack,{gap:"$2","data-sentry-element":"YStack","data-sentry-component":"WalletConnectAccountTriggerList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:[(0,C.jsx)(u.SizableText,{size:"$headingMd",color:"$text","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/components/DAppAccountList/DAppAccountListItem.tsx",children:"Accounts"}),Array.isArray(n)&&n.length?(0,C.jsx)(l.b8,{config:{sceneName:x.Zs.discover,sceneUrl:e},enabledNum:t,availableNetworksMap:r,children:(0,C.jsx)(u.YStack,{gap:"$2",children:n.map((function(e){return(0,C.jsx)(u.Stack,{children:(0,C.jsx)(DAppAccountListItem,{initFromHome:!0,num:e.accountSelectorNum,handleAccountChanged:o})},e.accountSelectorNum)}))})}):null]})}},450200:(e,n,o)=>{o.r(n),o.d(n,{default:()=>x});var t=o(503668),r=o.n(t),a=o(586330),c=o(514041),s=o(654266),p=o(908867),i=o(490343),u=o(643087),d=o(904121),l=o(791088),m=o(498356),A=o(334439),g=o(193068),k=o(714191),f=o(233693),y=o(278484),w=o(831085);const x=function CurrentConnectionModal(){var e=(0,p.A)(),n=(0,m.A)(),o=(0,s.lq)(),{faviconUrl:t,origin:x}=o.params,{handleAccountInfoChanged:h}=(0,f.Q)(),[C,D]=(0,c.useState)([]),b=(0,c.useRef)(!1),I=(0,c.useCallback)((0,a.A)((function*(){if(x){var e=yield u.A.serviceDApp.findInjectedAccountByOrigin(x);e?D(e):n.pop()}else D(null)})),[x,n]);(0,s.xK)((function(){b.current&&(I(),b.current=!1)})),(0,c.useEffect)((function(){I()}),[I]);var v=(0,c.useCallback)((function(){b.current=!0,n.pushModal(g.ry.DAppConnectionModal,{screen:g.EB.ConnectionList})}),[n]),S=(0,c.useCallback)((function(){n.pushModal(g.ry.DAppConnectionModal,{screen:g.EB.DefaultWalletSettingsModal})}),[n]),j=(0,c.useCallback)((0,a.A)((function*(){C?.[0].storageType&&(yield u.A.serviceDApp.disconnectWebsite({origin:x,storageType:C?.[0].storageType,entry:"ExtPanel"}),n.pop())})),[x,C,n]);return(0,w.jsxs)(i.Page,{"data-sentry-element":"Page","data-sentry-component":"CurrentConnectionModal","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:[(0,w.jsx)(i.Page.Header,{title:e.formatMessage({id:A.ETranslations.global_connect}),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx"}),(0,w.jsxs)(i.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:[(0,w.jsxs)(i.XStack,{p:"$5",gap:"$3","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:[(0,w.jsxs)(i.Image,{size:"$10",borderRadius:"$2","data-sentry-element":"Image","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:[(0,w.jsx)(i.Image.Source,{src:t,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx"}),(0,w.jsx)(i.Image.Fallback,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:(0,w.jsx)(i.Icon,{size:"$10",name:"GlobusOutline","data-sentry-element":"Icon","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx"})}),(0,w.jsx)(i.Image.Loading,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:(0,w.jsx)(i.Skeleton,{width:"100%",height:"100%","data-sentry-element":"Skeleton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx"})})]}),(0,w.jsxs)(i.YStack,{"data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:[(0,w.jsx)(i.SizableText,{size:"$bodyLgMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:new URL(x).hostname}),(0,w.jsx)(i.SizableText,{size:"$bodyMd",color:"$textSuccess","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:e.formatMessage({id:A.ETranslations.global_connected})})]})]}),r()(C)||!C.length?null:(0,w.jsx)(d.b8,{config:{sceneName:k.Zs.discover,sceneUrl:x},enabledNum:C.map((function(e){return e.num})),availableNetworksMap:C.reduce((function(e,n){return Array.isArray(n.availableNetworkIds)&&(e[n.num]={networkIds:n.availableNetworkIds}),e}),{}),children:(0,w.jsx)(i.ListView,{data:C,renderItem:function({item:e}){return(0,w.jsx)(i.YStack,{px:"$5",pb:"$2",children:(0,w.jsx)(y.wI,{num:e.num,compressionUiMode:!0,handleAccountChanged:(n=(0,a.A)((function*(n){yield h({origin:x,accountSelectorNum:e.num,prevAccountInfo:e,accountChangedParams:n,storageType:e.storageType,afterUpdate:I})})),function(e){return n.apply(this,arguments)})},e.num)});var n},estimatedItemSize:"$10"})})]}),(0,w.jsxs)(i.Page.Footer,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:[(0,w.jsx)(i.Divider,{"data-sentry-element":"Divider","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx"}),(0,w.jsxs)(i.YStack,{bg:"$bgSubdued",py:"$3",gap:"$2","data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:[(0,w.jsx)(l.c,{onPress:v,"data-sentry-element":"ListItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:(0,w.jsx)(i.SizableText,{size:"$bodyMd","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:e.formatMessage({id:A.ETranslations.explore_manage_dapp_connections})})},"manage-connection"),(0,w.jsx)(l.c,{onPress:S,"data-sentry-element":"ListItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:(0,w.jsx)(i.SizableText,{size:"$bodyMd","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:e.formatMessage({id:A.ETranslations.explore_default_wallet_settings})})},"default-wallet-settings"),(0,w.jsx)(i.Divider,{mx:"$5","data-sentry-element":"Divider","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx"}),(0,w.jsx)(l.c,{onPress:j,"data-sentry-element":"ListItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:(0,w.jsx)(i.SizableText,{size:"$bodyMd","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/CurrentConnectionModal/index.tsx",children:e.formatMessage({id:A.ETranslations.explore_disconnect})})},"disconnection")]})]})]})}},233693:(e,n,o)=>{o.d(n,{Q:()=>useShouldUpdateConnectedAccount});var t=o(586330),r=o(797331),a=o.n(r),c=o(514041);o(663522),o(193068);var s=o(553083),p=o(643087),i=(o(317522),o(394764),o(660015),o(574319),{"https://wallet.keplr.app":!0});a()((function(e,n){var o=new URL(e).origin;"domReady"===n&&i[o]||(p.A.serviceDApp.notifyDAppAccountsChanged(o),p.A.serviceDApp.notifyDAppChainChanged(o))}),800);function useShouldUpdateConnectedAccount(){var e,n=(0,c.useCallback)((function(e,n){var o=e.walletId!==n.walletId||e.indexedAccountId!==n.indexedAccountId||e.networkId!==n.networkId||e.accountId!==n.accountId||e.address!==n.address,t=n.accountId&&n.walletId&&(s.Ay.isLightningNetworkByNetworkId(n.networkId)||n.address)&&n.networkId;return e&&o&&t}),[]),o=(0,c.useCallback)((function({activeAccount:e,selectedAccount:n}){var o,t,r,a,c,s;return{walletId:null!=(o=e.wallet?.id)?o:"",indexedAccountId:null!=(t=e.indexedAccount?.id)?t:"",networkId:null!=(r=e.network?.id)?r:"",accountId:null!=(a=e.account?.id)?a:"",address:null!=(c=e.account?.address)?c:"",networkImpl:null!=(s=e.network?.impl)?s:"",deriveType:e.deriveType,focusedWallet:n.focusedWallet,othersWalletAccountId:n.othersWalletAccountId}}),[]),r=(0,c.useCallback)((e=(0,t.A)((function*({origin:e,accountSelectorNum:t,prevAccountInfo:r,accountChangedParams:a,storageType:c,afterUpdate:s}){var i=o(a);if(n(r,i)){var{serviceDApp:u}=p.A;yield p.A.serviceDApp.updateConnectionSession({origin:e,accountSelectorNum:t,updatedAccountInfo:i,storageType:c}),yield p.A.serviceDApp.syncDappAccountIfPrimaryMode({origin:e}),s(),r.accountId!==i.accountId&&u.notifyDAppAccountsChanged(e),r.networkId!==i.networkId&&u.notifyDAppChainChanged(e)}})),function(n){return e.apply(this,arguments)}),[o,n]);return{handleAccountInfoChanged:r}}}}]);
//# sourceMappingURL=50200.3b3d5185ae.chunk.js.map