!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e48cb0e3-4028-4893-99b9-7df98a489527",e._sentryDebugIdIdentifier="sentry-dbid-e48cb0e3-4028-4893-99b9-7df98a489527")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[37674],{326745:(e,t,n)=>{n.d(t,{u:()=>useAppRoute});var r=n(654266);function useAppRoute(){return(0,r.lq)()}},138584:(e,t,n)=>{n.d(t,{Py:()=>SimpleSpinnerSkeleton,am:()=>isLoadingState,bU:()=>PageFrame,o0:()=>isErrorState});var r=n(908867),o=n(490343),a=n(791088),s=n(334439),i=n(831085),PageErrOccurred=function({onPress:e}){var t=(0,r.A)();return(0,i.jsx)(o.Empty,{pt:"$32",icon:"ErrorOutline",title:t.formatMessage({id:s.ETranslations.global_an_error_occurred}),description:t.formatMessage({id:s.ETranslations.global_an_error_occurred_desc}),buttonProps:{onPress:e,children:t.formatMessage({id:s.ETranslations.global_refresh})},"data-sentry-element":"Empty","data-sentry-component":"PageErrOccurred","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/components/PageFrame/index.tsx"})},SimpleSpinnerSkeleton=function(){return(0,i.jsxs)(o.Stack,{"data-sentry-element":"Stack","data-sentry-component":"SimpleSpinnerSkeleton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/components/PageFrame/index.tsx",children:[(0,i.jsx)(o.Stack,{px:"$5",py:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/components/PageFrame/index.tsx",children:(0,i.jsx)(o.Skeleton.HeadingSm,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/components/PageFrame/index.tsx"})}),Array.from({length:3}).map((function(e,t){return(0,i.jsxs)(a.c,{children:[(0,i.jsx)(o.Skeleton,{h:"$10",w:"$10",radius:"round"}),(0,i.jsxs)(o.Stack,{children:[(0,i.jsx)(o.Skeleton.BodyLg,{}),(0,i.jsx)(o.Skeleton.BodyMd,{})]})]},t)}))]})},isLoadingState=function({result:e,isLoading:t}){return Boolean(void 0===e&&(void 0===t||!0===t))},isErrorState=function({result:e,isLoading:t}){return Boolean(void 0===e&&!1===t)},PageFrame=function({children:e,loading:t,LoadingSkeleton:n,error:r,onRefresh:o}){return t?n?(0,i.jsx)(n,{}):null:r?(0,i.jsx)(PageErrOccurred,{onPress:o}):(0,i.jsx)(i.Fragment,{children:e})}},598312:(e,t,n)=>{n.d(t,{w:()=>useEarnTxLabel});var r=n(514041),o=n(908867),a=n(334439);function useEarnTxLabel(){var e=(0,o.A)();return(0,r.useCallback)((function(t){var n;return null!=(n={stake:e.formatMessage({id:a.ETranslations.earn_stake}),redeem:e.formatMessage({id:a.ETranslations.earn_redeem}),withdraw:e.formatMessage({id:a.ETranslations.global_withdraw}),claim:e.formatMessage({id:a.ETranslations.earn_claim})}[t.toLowerCase()])?n:t}),[e])}},637674:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n(324586),o=n(487809),a=n.n(o),s=n(586330),i=n(514041),c=n(908867),d=n(490343),l=n(643087),p=n(791088),u=n(498356),m=n(326745),k=n(911998),g=n(334439),f=n(193068),y=n(567807),w=n(138584),b=n(598312),v=n(905817),x=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var HistoryItem=function({item:e,provider:t,token:n}){var r=(0,u.A)(),o=(0,m.u)(),{accountId:a,networkId:s}=o.params,c=(0,i.useCallback)((function(){r.push(f.kZ.HistoryDetails,{networkId:s,accountId:a,transactionHash:e.txHash,historyTx:void 0,isAllNetworks:!1})}),[a,s,e,r]);return(0,x.jsx)(p.c,{avatarProps:{src:n?.logoURI},title:e.title,subtitle:t?(0,v.c)(t):void 0,onPress:c,"data-sentry-element":"ListItem","data-sentry-component":"HistoryItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/pages/HistoryList/index.tsx",children:(0,x.jsx)(d.YStack,{"data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/pages/HistoryList/index.tsx",children:e.amount&&Number(e.amount)>0?(0,x.jsx)(d.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",color:"receive"===e.direction?"$textSuccess":void 0,formatterOptions:{tokenSymbol:n?.symbol,showPlusMinusSigns:!0},children:`${"send"===e.direction?"-":"+"}${e.amount}`}):null})})},keyExtractor=function(e){var t=e?.txHash;return t},HistoryContent=function({sections:e,network:t,tokenMap:n,provider:r}){var o=(0,i.useCallback)((function({item:e}){return(0,x.jsx)(HistoryItem,{item:e,network:t,token:n[e.tokenAddress],provider:r})}),[t,n,r]),a=(0,i.useCallback)((function({section:e}){return(0,x.jsx)(d.SectionList.SectionHeader,{title:e.title,titleProps:{color:e.isPending?"$textCaution":void 0},justifyContent:"space-between"})}),[]),s=(0,c.A)();return(0,x.jsx)(d.SectionList,{estimatedItemSize:"$14",sections:e,renderItem:o,renderSectionHeader:a,keyExtractor,ListEmptyComponent:(0,x.jsx)(d.Empty,{pt:"$46",icon:"ClockTimeHistoryOutline",title:s.formatMessage({id:g.ETranslations.global_no_transactions_yet}),description:s.formatMessage({id:g.ETranslations.global_no_transactions_yet_desc})}),"data-sentry-element":"SectionList","data-sentry-component":"HistoryContent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/pages/HistoryList/index.tsx"})};const __WEBPACK_DEFAULT_EXPORT__=function(){var e=(0,m.u)(),t=(0,c.A)(),n=(0,b.w)(),{accountId:o,networkId:i,symbol:p,provider:u,stakeTag:f}=e.params,{result:v,isLoading:h,run:S}=(0,k.yk)((0,s.A)((function*(){var e=yield l.A.serviceStaking.getStakeHistory({accountId:o,networkId:i,symbol:p,provider:u}),s=a()(e.list,(function(e){return(0,y.Yq)(new Date(1e3*e.timestamp),{hideTimeForever:!0})})),c=Object.entries(s).map((function([e,t]){return{title:e,data:t}})).sort((function(e,t){return t.data[0].timestamp-e.data[0].timestamp})),d=function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.tokenMap);if(f){yield l.A.serviceHistory.fetchAccountHistory({accountId:o,networkId:i});var m=yield l.A.serviceStaking.fetchLocalStakingHistory({accountId:o,networkId:i,stakeTag:f});m.forEach((function(e){if(e.stakingInfo.receive){var t=e.stakingInfo.receive;d[t.token.address]=t.token}if(e.stakingInfo.send){var n=e.stakingInfo.send;d[n.token.address]=n.token}}));var k=m.map((function(e){var t,r,o,a,s=null!=(t=e.stakingInfo.send)?t:e.stakingInfo.receive;return{txHash:e.decodedTx.txid,timestamp:null!=(r=null!=(o=e.decodedTx.createdAt)?o:e.decodedTx.updatedAt)?r:0,title:n(e.stakingInfo.label),direction:e.stakingInfo.send?"send":"receive",amount:s?.amount,tokenAddress:null!=(a=s?.token.address)?a:""}}));k.length>0&&c.unshift({title:t.formatMessage({id:g.ETranslations.global_pending}),data:k,isPending:!0})}return{network:e.network,sections:c,tokenMap:d}})),[o,i,p,u,f,n,t],{watchLoading:!0,pollingInterval:3e4});return(0,x.jsxs)(d.Page,{scrollEnabled:!0,"data-sentry-element":"Page","data-sentry-component":"HistoryList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/pages/HistoryList/index.tsx",children:[(0,x.jsx)(d.Page.Header,{title:t.formatMessage({id:g.ETranslations.global_history}),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/pages/HistoryList/index.tsx"}),(0,x.jsx)(d.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/pages/HistoryList/index.tsx",children:(0,x.jsx)(w.bU,{LoadingSkeleton:w.Py,error:(0,w.o0)({result:v,isLoading:h}),loading:(0,w.am)({result:v,isLoading:h}),onRefresh:S,"data-sentry-element":"PageFrame","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Staking/pages/HistoryList/index.tsx",children:v?(0,x.jsx)(HistoryContent,{sections:v.sections,network:v.network,tokenMap:v.tokenMap,provider:u}):null})})]})}},905817:(e,t,n)=>{n.d(t,{FZ:()=>countDecimalPlaces,Y:()=>buildLocalTxStatusSyncId,c:()=>capitalizeString});var r=n(241440),buildLocalTxStatusSyncId=function(e){return`${e.provider.name.toLowerCase()}-${e.token.info.symbol.toLowerCase()}`};function capitalizeString(e){return e?e.charAt(0).toUpperCase()+e.slice(1):e}function countDecimalPlaces(e){var t="string"==typeof e?Number(e):e;if(Number.isNaN(t))return 0;var n="string"==typeof e?e:(0,r.A)(e).toFixed(),o=n.indexOf(".");return-1===o?0:n.length-o-1}}}]);
//# sourceMappingURL=37674.b3d95a55cd.chunk.js.map