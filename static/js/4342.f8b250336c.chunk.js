!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8381dd9e-114c-436e-b9a8-b3f9c958aea3",e._sentryDebugIdIdentifier="sentry-dbid-8381dd9e-114c-436e-b9a8-b3f9c958aea3")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4342],{804342:(e,t,n)=>{n.r(t),n.d(t,{default:()=>SettingCurrencyModal});var r=n(586330),a=n(514041),o=n(908867),s=n(490343),i=(n(793239),n(643087)),u=n(791088),c=n(471169),l=n(334439),d=n(831085),p=[],currencyFilterFn=function(e,t){var n=e.toLowerCase();return t.id.toLowerCase().includes(n)||t.name.toLowerCase().includes(n)},CurrencyItem=function({item:e,onPress:t,currency:n}){var r=(0,a.useCallback)((function(){t(e)}),[e,t]);return(0,d.jsx)(u.c,{title:`${e.id.toUpperCase()} - ${e.unit}`,subtitle:e.name,checkMark:n?.id===e.id,onPress:r,"data-sentry-element":"ListItem","data-sentry-component":"CurrencyItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/Currency/index.tsx"})},keyExtractor=function(e,t){return`${t}`};function SettingCurrencyModal(){var[e]=(0,c.useSettingsPersistAtom)(),[t,n]=(0,a.useState)(""),u=(0,a.useRef)({id:e.currencyInfo.id,unit:e.currencyInfo.symbol}),[f,m]=(0,a.useState)(u.current),g=(0,o.A)(),[{currencyMap:y}]=(0,c.useCurrencyPersistAtom)(),b=(0,a.useMemo)((function(){var e=Object.values(y);if(0===e.length)return[];for(var n={crypto:[],fiat:[],popular:[]},r=e.filter((function(e){return currencyFilterFn(t,e)})),_loop=function(){var e=r[a];e.type.forEach((function(t){n[t]&&n[t].push(e)}))},a=0;a<r.length;a+=1)_loop();return[{title:g.formatMessage({id:l.ETranslations.global_popular}),data:n.popular},{title:g.formatMessage({id:l.ETranslations.global_crypto}),data:n.crypto},{title:g.formatMessage({id:l.ETranslations.settings_fiat}),data:n.fiat}].filter((function(e){return e.data.length>0}))}),[y,g,t]),k=(0,a.useCallback)((function(e){m(e)}),[]),w=(0,a.useCallback)((function({item:e}){return(0,d.jsx)(CurrencyItem,{item:e,currency:f,onPress:k})}),[f,k]),C=(0,a.useCallback)((function({section:e}){return(0,d.jsx)(s.SectionList.SectionHeader,{title:e.title})}),[]),h=(0,a.useCallback)((0,r.A)((function*(){f&&(yield i.A.serviceSetting.setCurrency({id:f.id,symbol:f.unit}),setTimeout((function(){i.A.serviceApp.restartApp()})))})),[f]),x=(0,a.useMemo)((function(){return u.current.id===f?.id}),[f?.id]),S=(0,a.useMemo)((function(){return{onChangeText:function({nativeEvent:e}){var t=e.text.trim();n(t)},placeholder:g.formatMessage({id:l.ETranslations.global_search})}}),[g]);return(0,d.jsxs)(s.Page,{"data-sentry-element":"Page","data-sentry-component":"SettingCurrencyModal","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/Currency/index.tsx",children:[(0,d.jsx)(s.Page.Header,{title:g.formatMessage({id:l.ETranslations.settings_default_currency}),headerSearchBarOptions:S,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/Currency/index.tsx"}),(0,d.jsx)(s.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/Currency/index.tsx",children:(0,d.jsx)(s.SectionList,{estimatedItemSize:60,ListEmptyComponent:(0,d.jsx)(s.Empty,{icon:"SearchOutline",title:g.formatMessage({id:l.ETranslations.global_no_results}),description:g.formatMessage({id:l.ETranslations.global_search_no_results_desc})}),sections:null!=b?b:p,renderItem:w,renderSectionHeader:C,extraData:f,keyExtractor,"data-sentry-element":"SectionList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/Currency/index.tsx"})}),(0,d.jsx)(s.Page.Footer,{onConfirm:h,confirmButtonProps:{disabled:x},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/Currency/index.tsx"})]})}}}]);
//# sourceMappingURL=4342.f8b250336c.chunk.js.map