!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="47b7ebb4-30a4-4670-bd2f-381e62fafff2",e._sentryDebugIdIdentifier="sentry-dbid-47b7ebb4-30a4-4670-bd2f-381e62fafff2")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[30707],{714718:(e,t,n)=>{n.d(t,{A:()=>useFormatDate});var o=n(514041),i=n(243915),a=n(152111),r=n(724726),s=n(584941),c=n(121684),l=n(567807),u=n(886738);function useFormatDate(){var e=(0,u.L)(),t=(0,o.useCallback)((function(t,n){var o;o="string"==typeof t?(0,i.A)(t):t;try{return(0,a.A)(o,null!=n?n:"PPp",{locale:(0,l.mw)(e)})}catch(e){return"-"}}),[e]),n=(0,o.useCallback)((function(n,o){var a,r;r="string"==typeof n?(0,i.A)(n):n;var s=(new Date).getFullYear(),c=(new Date).getMonth(),l="yyyy/LL/dd, HH:mm";return["de","es","en-US","fr-FR","it-IT","uk-UA"].includes(e)&&(l="LL/dd/yyyy, HH:mm"),(s===r.getFullYear()&&o?.hideTheYear||o?.hideYear)&&(l=(l=l.replace("yyyy/","")).replace("/yyyy","")),(c===r.getMonth()&&o?.hideTheMonth||o?.hideMonth)&&(l=l.replace("LL/","")),o?.hideTimeForever&&(l=l.replace(", HH:mm","")),o?.onlyTime&&(l="HH:mm"),null!=(a=t(r,l))?a:""}),[t,e]),d=(0,o.useCallback)((function(e,n){var o,a,r;return a="string"==typeof e?(0,i.A)(e):e,(new Date).getFullYear()===a.getFullYear()&&n?.hideTheYear||n?.hideYear?null!=(r=t(a,"MMMM"))?r:"":null!=(o=t(a,"MMMM, yyyy"))?o:""}),[t]),f=(0,o.useCallback)((function(t,n){var o;return null!=(o=(0,r.A)(t,n,{locale:(0,l.mw)(e)}))?o:""}),[e]),p=(0,o.useCallback)((function(t){var n;return null!=(n=(0,s.A)(t,{addSuffix:!0,locale:(0,l.mw)(e)}))?n:""}),[e]),m=(0,o.useCallback)((function(t){var n;return null!=(n=(0,c.A)(t,{locale:(0,l.mw)(e)}))?n:""}),[e]);return(0,o.useMemo)((function(){return{format:t,formatDate:n,formatMonth:d,formatDistanceToNow:p,formatDuration:m,formatDistanceStrict:f}}),[t,n,d,p,m,f])}},130707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var o=n(579071),i=n.n(o),a=n(324586),r=n(839850),s=n(586330),c=n(514041),l=n(908867),u=n(490343),d=n(829209),f=n(471169),p=n(334439),m=n(193068),g=n(251039),y=n(17245),b=n(643087),h=n(791088),k=n(498356),v=n(714718),w=n(911998),x=n(831085),A=["item"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,a.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=!1;function HeaderRight(){var e=(0,l.A)(),t=(0,k.A)(),n=(0,c.useCallback)((function(){t.pushModal(m.ry.SettingModal,{screen:m.Pj.SettingNotifications})}),[t]);return(0,x.jsxs)(u.HeaderButtonGroup,{"data-sentry-element":"HeaderButtonGroup","data-sentry-component":"HeaderRight","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:[(0,x.jsx)(u.HeaderIconButton,{icon:"BroomOutline",onPress:function(){var t;u.Dialog.show({icon:"BroomOutline",title:e.formatMessage({id:p.ETranslations.global_mark_all_as_confirmation_title}),description:e.formatMessage({id:p.ETranslations.global_mark_all_as_confirmation_desc}),onConfirm:(t=(0,s.A)((function*(){yield b.A.serviceNotification.markNotificationReadAll()})),function onConfirm(){return t.apply(this,arguments)})})},"data-sentry-element":"HeaderIconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx"}),(0,x.jsx)(u.HeaderIconButton,{icon:"SettingsOutline",onPress:n,"data-sentry-element":"HeaderIconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx"})]})}var N=(0,c.memo)((function NotificationItem(e){var{item:t}=e,n=(0,r.A)(e,A),{formatDistanceToNow:o}=(0,v.A)(),{title:i,content:a}=t.body,{createdAt:s,readed:c,msgId:l}=t,[{badge:d}]=(0,f.useNotificationsAtom)(),[p]=(0,f.useNotificationsReadedAtom)();return(0,x.jsxs)(h.c,_objectSpread(_objectSpread({gap:"$0.5",flexDirection:"column",alignItems:"stretch",userSelect:"none",hoverStyle:{bg:"$bgHover"}},n),{},{"data-sentry-element":"ListItem","data-sentry-component":"NotificationItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:[(0,x.jsxs)(u.XStack,{alignItems:"baseline",gap:"$3",pr:"$1.5","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:[(0,x.jsx)(u.SizableText,{flex:1,size:"$headingSm",numberOfLines:1,"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:i}),(0,x.jsx)(u.SizableText,{size:"$bodySm",color:"$textSubdued",flexShrink:0,"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:o(new Date(s))}),c||!d||p?.[l]?null:(0,x.jsx)(u.Stack,{position:"absolute",top:"$1.5",right:"$-2",borderRadius:"$full",bg:"$bgCriticalStrong",w:"$2",h:"$2"})]}),(0,x.jsx)(u.SizableText,{size:"$bodyMd",flex:1,maxWidth:"$96","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:a})]}))}));function MaxAccountLimitWarning(){var e=(0,k.A)(),t=(0,l.A)(),[{lastSettingsUpdateTime:n,maxAccountCount:o=d.zH}]=(0,f.useNotificationsAtom)(),{result:a}=(0,w.yk)((0,s.A)((function*(){return i()(n),{serverSettings:yield b.A.serviceNotification.fetchServerNotificationSettings(),enabledAccountCount:yield b.A.simpleDb.notificationSettings.getEnabledAccountCount()}})),[n]);return(0,c.useMemo)((function(){return!S&&a?.serverSettings?.pushEnabled&&a?.serverSettings?.accountActivityPushEnabled&&a?.enabledAccountCount&&a?.enabledAccountCount>=o}),[a?.enabledAccountCount,o,a?.serverSettings?.accountActivityPushEnabled,a?.serverSettings?.pushEnabled])?(0,x.jsx)(u.Alert,{mx:"$5",mb:"$2",type:"warning",title:t.formatMessage({id:p.ETranslations.notifications_account_reached_limit_alert_title},{count:o}),description:t.formatMessage({id:p.ETranslations.notifications_account_reached_limit_alert_desc}),closable:!0,onClose:function(){S=!0},action:{primary:t.formatMessage({id:p.ETranslations.global_manage}),onPrimaryPress:function(){e.pushModal(m.ry.SettingModal,{screen:m.Pj.SettingManageAccountActivity})}},"data-sentry-element":"Alert","data-sentry-component":"MaxAccountLimitWarning","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx"}):null}const j=function NotificationList(){var e=(0,l.A)(),{bottom:t}=(0,u.useSafeAreaInsets)(),n=(0,k.A)(),o=(0,c.useCallback)((function(){return(0,x.jsx)(HeaderRight,{})}),[]),[{lastReceivedTime:a,firstTimeGuideOpened:r},d]=(0,f.useNotificationsAtom)(),h=(0,c.useRef)(!1);(0,c.useEffect)((function(){r||h.current||(setTimeout((function(){n.pushModal(m.ry.NotificationsModal,{screen:g.f.NotificationIntroduction})}),600),h.current=!0,d((function(e){return _objectSpread(_objectSpread({},e),{},{firstTimeGuideOpened:!0})})))}),[r,n,d]);var{result:v=[],isLoading:A}=(0,w.yk)((0,s.A)((function*(){return i()(a),b.A.serviceNotification.refreshBadgeFromServer(),yield b.A.serviceNotification.fetchMessageList()})),[a],{watchLoading:!0,checkIsFocused:!1}),S=(0,c.useMemo)((function(){return function groupNotificationsByDate(e){return e?.length?[{title:"default",data:e}]:[]}(v)}),[v]),j=(0,c.useMemo)((function(){return A||void 0===A?(0,x.jsx)(u.Stack,{gap:"$1.5",px:"$5",children:Array.from({length:3}).map((function(e,t){return(0,x.jsxs)(u.Stack,{gap:"$1",py:"$2",children:[(0,x.jsx)(u.Stack,{py:"$1",children:(0,x.jsx)(u.Skeleton,{h:"$3",w:"$16"})}),(0,x.jsx)(u.Stack,{py:"$1",children:(0,x.jsx)(u.Skeleton,{h:"$3",w:"$48"})})]},t)}))}):(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(u.SectionList,{sections:S,renderSectionHeader:function({section:{title:e}}){return null},renderItem:function({item:e,index:t}){return(0,x.jsx)(N,_objectSpread(_objectSpread({item:e},0!==t&&{mt:"$2.5"}),{},{onPress:function(){y.A.navigateToNotificationDetail({navigation:n,message:e.body,notificationAccountId:e?.body?.extras?.params?.accountId,notificationId:e?.msgId||e?.body?.extras?.params?.msgId||e?.body?.extras?.msgId||""})}}),e.msgId||t)},estimatedItemSize:"$20",ListEmptyComponent:(0,x.jsx)(u.Empty,{pt:170,icon:"BellOutline",title:e.formatMessage({id:p.ETranslations.notifications_empty_title}),description:e.formatMessage({id:p.ETranslations.notifications_empty_desc})}),ListFooterComponent:(0,x.jsx)(u.Stack,{h:t||"$5"})})})}),[A,t,e,n,S]);return(0,x.jsxs)(u.Page,{scrollEnabled:!0,safeAreaEnabled:!1,"data-sentry-element":"Page","data-sentry-component":"NotificationList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:[(0,x.jsx)(u.Page.Header,{title:e.formatMessage({id:p.ETranslations.global_notifications}),headerRight:o,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx"}),(0,x.jsxs)(u.Page.Body,{pb:t||"$5","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx",children:[(0,x.jsx)(MaxAccountLimitWarning,{"data-sentry-element":"MaxAccountLimitWarning","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Notifications/pages/NotificationList.tsx"}),j]})]})}},121684:(e,t,n)=>{n.d(t,{A:()=>formatDuration});var o=n(766017),i=n(372231),a=["years","months","weeks","days","hours","minutes","seconds"];function formatDuration(e,t){var n,r,s,c,l;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var u=(0,o.q)(),d=null!==(n=null!==(r=null==t?void 0:t.locale)&&void 0!==r?r:u.locale)&&void 0!==n?n:i.A,f=null!==(s=null==t?void 0:t.format)&&void 0!==s?s:a,p=null!==(c=null==t?void 0:t.zero)&&void 0!==c&&c,m=null!==(l=null==t?void 0:t.delimiter)&&void 0!==l?l:" ";return d.formatDistance?f.reduce((function(t,n){var o="x".concat(n.replace(/(^.)/,(function(e){return e.toUpperCase()}))),i=e[n];return"number"==typeof i&&(p||e[n])?t.concat(d.formatDistance(o,i)):t}),[]).join(m):""}}}]);
//# sourceMappingURL=30707.050b84089b.chunk.js.map