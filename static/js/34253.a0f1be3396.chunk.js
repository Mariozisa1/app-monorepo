!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="996d03ec-84df-4ac7-adf3-dd6312f5432e",e._sentryDebugIdIdentifier="sentry-dbid-996d03ec-84df-4ac7-adf3-dd6312f5432e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[34253],{834253:(e,n,o)=>{o.r(n),o.d(n,{default:()=>WebViewModal});var r=o(586330),a=o(514041),s=o(952817);s.ow;s.ow;var t=o(654266),i=o(908867),l=o(684358),d=o(490343),u=o(896666),f=o(236387),c=o(334439),p=o(663522),w=o(117746),b=o(831085);function WebViewModal(){var{webviewRef:e,setWebViewRef:n}=function useWebViewBridge(){const e=(0,a.useRef)(null),[n,o]=(0,a.useState)(null);return{jsBridge:n,webviewRef:e,setWebViewRef:n=>{var r;e.current=n;const a=null===(r=e.current)||void 0===r?void 0:r.jsBridge;a&&o(a)}}}(),o=(0,t.lq)(),{url:s,title:g}=o.params,{copyText:y}=(0,d.useClipboard)(),m=(0,i.A)(),h=(0,a.useCallback)((function(){return(0,b.jsx)(d.ActionList,{renderTrigger:(0,b.jsx)(u.v$,{icon:"DotHorOutline"}),title:m.formatMessage({id:c.ETranslations.explore_options}),sections:[{items:[{label:m.formatMessage({id:c.ETranslations.global_refresh}),icon:"RefreshCwOutline",onPress:(a=(0,r.A)((function*(){e?.current?.reload?.()})),function onPress(){return a.apply(this,arguments)})},{label:m.formatMessage({id:c.ETranslations.explore_share}),icon:"ShareOutline",onPress:function(){l.A.share(p.Ay.isNativeIOS?{url:s}:{message:s}).catch((function(){}))}},{label:m.formatMessage({id:c.ETranslations.global_copy_url}),icon:"LinkOutline",onPress:(o=(0,r.A)((function*(){y(s)})),function onPress(){return o.apply(this,arguments)})},{label:m.formatMessage({id:c.ETranslations.explore_open_in_browser}),icon:"GlobusOutline",onPress:(n=(0,r.A)((function*(){(0,w.Dr)(s)})),function onPress(){return n.apply(this,arguments)})}]}]});var n,o,a}),[e,s,y,m]),[k,v]=(0,a.useState)(g);(0,a.useEffect)((function(){v("")}),[]);var x=(0,a.useCallback)((function({title:e}){g||v(e)}),[g,v]);return(0,b.jsxs)(d.Page,{"data-sentry-element":"Page","data-sentry-component":"WebViewModal","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/WebView/pages/WebViewModal/index.tsx",children:[(0,b.jsx)(d.Page.Header,{headerRight:h,title:k,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/WebView/pages/WebViewModal/index.tsx"}),(0,b.jsx)(d.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/WebView/pages/WebViewModal/index.tsx",children:(0,b.jsx)(f.A,{onWebViewRef:function(e){return e&&n(e)},src:s,onNavigationStateChange:x,"data-sentry-element":"WebView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/WebView/pages/WebViewModal/index.tsx"})})]})}}}]);
//# sourceMappingURL=34253.a0f1be3396.chunk.js.map