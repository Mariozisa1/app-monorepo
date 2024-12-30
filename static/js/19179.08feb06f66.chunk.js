!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b9770bfb-60f2-459c-862f-08f43e7d4050",e._sentryDebugIdIdentifier="sentry-dbid-b9770bfb-60f2-459c-862f-08f43e7d4050")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[19179],{519179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(324586),o=n(586330),s=n(514041),a=n(908867),i=n(578104),c=n(490343),p=n(643087),u=n(791088),l=n(880590),d=n(911998),m=n(885127),f=n(334439),k=n(296827),g=n(796151),w=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){return e.Fast="Fast",e.Normal="Normal",e.NotAvailable="NotAvailable",e}(y||{});function ListHeaderComponent(){var e=(0,a.A)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c.SizableText,{px:"$5",size:"$bodyLg",color:"$textSubdued","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:e.formatMessage({id:f.ETranslations.custom_rpc_desc})}),(0,w.jsx)(c.Divider,{my:"$5","data-sentry-element":"Divider","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx"})]})}function ListEmptyComponent({onAddCustomRpc:e}){var t=(0,a.A)();return(0,w.jsx)(c.Empty,{mt:"$24",icon:"BezierNodesOutline",title:t.formatMessage({id:f.ETranslations.custom_rpc_empty_title}),buttonProps:{onPress:function(){return e()},children:t.formatMessage({id:f.ETranslations.custom_rpc_cta_label})},"data-sentry-element":"Empty","data-sentry-component":"ListEmptyComponent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx"})}function DialogContent({network:e,rpcInfo:t,onConfirm:n}){var r,i=(0,c.useForm)({defaultValues:{rpc:t?.rpc||""}}),u=(0,s.useRef)(!0),[d,m]=(0,s.useState)(!1),y=(0,a.A)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(c.Dialog.Header,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:[(0,w.jsx)(c.Stack,{mb:"$5","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:(0,w.jsx)(l.um,{networkId:e.id,size:"$12","data-sentry-element":"NetworkAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx"})}),(0,w.jsx)(c.Dialog.Title,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:y.formatMessage({id:f.ETranslations.custom_rpc_edit_dialog_title},{network:e.name})})]}),(0,w.jsx)(c.Form,{form:i,"data-sentry-element":"Form","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:(0,w.jsx)(c.Form.Field,{label:"RPC URL",name:"rpc",rules:{required:{value:!0,message:y.formatMessage({id:f.ETranslations.form_custom_rpc_error_invalid})},validate:function(e){var t=y.formatMessage({id:f.ETranslations.form_custom_rpc_error_invalid});return"string"!=typeof e?t:e.trim()&&g.Ay.parseUrl(e)&&u.current?void 0:t}},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:(0,w.jsx)(c.Input,{autoFocus:!0,flex:1,"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx"})})}),(0,w.jsx)(c.Dialog.Footer,{onConfirm:(r=(0,o.A)((function*({preventClose:r,close:o}){var{serviceCustomRpc:s}=p.A;m(!0);var a=i.getValues("rpc").trim(),c=e.id;try{var l;u.current=!0,yield s.measureRpcStatus({rpcUrl:a,networkId:c,validateChainId:!0}),yield s.addCustomRpc({rpc:a,networkId:c,enabled:null==(l=t?.enabled)||l}),k.U.setting.page.addCustomRPC({network:c})}catch(e){return u.current=!1,i.trigger("rpc"),void r()}finally{m(!1)}yield o(),n()})),function(e){return r.apply(this,arguments)}),confirmButtonProps:{loading:d},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx"})]})}const b=function CustomRPC(){var e,t,n=(0,a.A)(),{result:r,run:g}=(0,d.yk)((0,o.A)((function*(){var{serviceNetwork:e,serviceCustomRpc:t}=p.A;return{supportNetworks:yield e.getCustomRpcEnabledNetworks(),customRpcNetworks:yield t.getAllCustomRpc()}})),[]),[b,C]=(0,s.useState)({}),x=(0,s.useRef)(),v=(0,s.useCallback)((e=(0,o.A)((function*(e){try{var{responseTime:t}=yield p.A.serviceCustomRpc.measureRpcStatus({rpcUrl:e.rpc,networkId:e.networkId});return{responseTime:t,status:t<800?y.Fast:y.Normal,loading:!1}}catch(e){return{responseTime:-1,status:y.NotAvailable,loading:!1}}})),function(t){return e.apply(this,arguments)}),[]),h=(0,i.YQ)((t=(0,o.A)((function*({currentRpcInfos:e,previousRpcInfos:t}){var n=e.filter((function(e){var n=t?.find((function(t){return t.networkId===e.networkId}));return!n||n.rpc!==e.rpc}));C((function(e){var t=_objectSpread({},e);return n.forEach((function(e){t[e.networkId]=_objectSpread(_objectSpread({},t[e.networkId]),{},{loading:!0})})),t}));var r,s=n.map((r=(0,o.A)((function*(e){var t=yield v(e);!function(e,t){C((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:t})}))}(e.networkId,t)})),function(e){return r.apply(this,arguments)}));yield Promise.all(s)})),function(e){return t.apply(this,arguments)}),300);(0,s.useEffect)((function(){if(r?.customRpcNetworks){var e=r.customRpcNetworks,t=x.current||[];h({currentRpcInfos:e,previousRpcInfos:t}),x.current=e}}),[r?.customRpcNetworks,h]);var R,j,I=(0,s.useCallback)((function({network:e,rpcInfo:t}){c.Dialog.show({renderContent:(0,w.jsx)(DialogContent,{network:e,rpcInfo:t,onConfirm:g})})}),[g]),S=(0,m.A)(),P=(0,s.useCallback)((function(e){S({networkIds:r?.supportNetworks?.map((function(e){return e.id})),onSelect:function(t){I({network:t,rpcInfo:e?.rpcInfo})}})}),[S,r?.supportNetworks,I]),_=(0,s.useCallback)((function(){P()}),[P]),A=(0,s.useCallback)((R=(0,o.A)((function*(e){k.U.setting.page.deleteCustomRPC({network:e.networkId}),yield p.A.serviceCustomRpc.deleteCustomRpc(e.networkId),setTimeout((function(){g()}),200)})),function(e){return R.apply(this,arguments)}),[g]),E=(0,s.useCallback)((j=(0,o.A)((function*(e){yield p.A.serviceCustomRpc.updateCustomRpcEnabledStatus({networkId:e.networkId,enabled:!e.enabled}),e.enabled?k.U.setting.page.turnOffCustomRPC({network:e.networkId}):k.U.setting.page.turnOnCustomRPC({network:e.networkId}),setTimeout((function(){g()}),200)})),function(e){return j.apply(this,arguments)}),[g]),N=(0,s.useCallback)((function(e){if(!b[e.networkId]||b[e.networkId].loading)return(0,w.jsx)(c.Skeleton,{w:42,h:"$5"});var t="success";switch(b[e.networkId].status){case y.Fast:t="success";break;case y.Normal:t="warning";break;case y.NotAvailable:t="critical"}var r=b[e.networkId].status===y.NotAvailable?n.formatMessage({id:f.ETranslations.global_not_available}):`${b[e.networkId].responseTime}ms`;return(0,w.jsx)(c.Badge,{badgeType:t,badgeSize:"sm",children:r})}),[n,b]),T=(0,s.useCallback)((function(){return Array.isArray(r?.customRpcNetworks)&&r.customRpcNetworks.length>0?(0,w.jsx)(c.IconButton,{title:n.formatMessage({id:f.ETranslations.custom_rpc_cta_label}),variant:"tertiary",icon:"PlusLargeOutline",onPress:function(){_()}}):null}),[r?.customRpcNetworks,n,_]);return r?.customRpcNetworks?(0,w.jsxs)(c.Page,{"data-sentry-element":"Page","data-sentry-component":"CustomRPC","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:[(0,w.jsx)(c.Page.Header,{title:n.formatMessage({id:f.ETranslations.custom_rpc_title}),headerRight:T,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx"}),(0,w.jsx)(c.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx",children:(0,w.jsx)(c.ListView,{data:r.customRpcNetworks,estimatedItemSize:60,keyExtractor:function(e){return e.networkId},renderItem:function({item:e}){return(0,w.jsxs)(u.c,{testID:"CustomRpcItemContainer",children:[(0,w.jsx)(c.Switch,{disabled:e.isCustomNetwork,size:c.ESwitchSize.small,value:e.enabled,onChange:function(){return E(e)}}),(0,w.jsx)(l.um,{networkId:e.networkId,size:"$10"}),(0,w.jsx)(u.c.Text,{flex:1,primary:(0,w.jsxs)(c.XStack,{alignItems:"center",gap:"$2",children:[(0,w.jsx)(c.SizableText,{flexShrink:1,numberOfLines:1,size:"$bodyLgMedium",color:"$text",children:e.network.name}),N(e)]}),secondary:e.rpc,secondaryTextProps:{numberOfLines:1}}),(0,w.jsx)(c.ActionList,{title:n.formatMessage({id:f.ETranslations.global_more}),renderTrigger:(0,w.jsx)(c.IconButton,{icon:"DotHorOutline",variant:"tertiary"}),items:[{label:n.formatMessage({id:f.ETranslations.global_edit}),icon:"PencilOutline",onPress:function(){return I({network:e.network,rpcInfo:e})}},{label:n.formatMessage({id:f.ETranslations.global_delete}),destructive:!0,icon:"DeleteOutline",onPress:(t=(0,o.A)((function*(){return A(e)})),function onPress(){return t.apply(this,arguments)})}]})]});var t},ListHeaderComponent:(0,w.jsx)(ListHeaderComponent,{}),ListEmptyComponent:(0,w.jsx)(ListEmptyComponent,{onAddCustomRpc:function(){return P()}}),"data-sentry-element":"ListView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomRPC/index.tsx"})})]}):(0,w.jsx)(c.YStack,{flex:1,alignItems:"center",justifyContent:"center",children:(0,w.jsx)(c.Spinner,{})})}}}]);
//# sourceMappingURL=19179.08feb06f66.chunk.js.map