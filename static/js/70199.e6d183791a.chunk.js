!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3f3b8abe-6233-429a-a571-a9b5e1b131d8",e._sentryDebugIdIdentifier="sentry-dbid-3f3b8abe-6233-429a-a571-a9b5e1b131d8")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[70199],{70199:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=n(490343),r=n(654004),s=n(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(r.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"default",element:(0,s.jsxs)(o.Stack,{gap:"$8",children:[(0,s.jsx)(o.LinearGradient,{colors:["#4c669f","#3b5998","#192f6a"],height:"$24",width:"100%",justifyContent:"center",children:(0,s.jsx)(o.SizableText,{size:"$bodyMd",color:"#fff",textAlign:"center",children:"Sign in"})}),(0,s.jsx)(o.LinearGradient,{colors:["bgActive","backgroundHover","bgPrimary"],height:"$24",width:"100%",justifyContent:"center",children:(0,s.jsx)(o.SizableText,{size:"$bodyMd",color:"#fff",textAlign:"center",children:"Sign in"})})]})}],"data-sentry-element":"Layout","data-sentry-component":"LinearGradientGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LinearGradient.tsx"})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var o=n(586330),r=n(654266),s=n(490343),a=n(427745),i=n(643087),l=n(498356),p=n(193068),c=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(s.Stack,{children:(0,c.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,n){return(0,c.jsx)(s.Stack,{children:(0,c.jsxs)(s.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:y=!1,children:g}){var k=(0,a.U6)(),h=(0,l.A)();return(0,c.jsx)(s.Page,{skipLoading:y,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:k,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(s.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){h.dispatch(r.y9.replace(p.WP.Main,{screen:p.V4.Developer,params:{screen:p.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(s.Button,{ml:"$4",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(s.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:n})]}):null,(0,c.jsxs)(s.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(s.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(s.Stack,{flexDirection:"column",children:[(0,c.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(s.Stack,{paddingTop:1,children:(0,c.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(s.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:g?(0,c.jsx)(s.Stack,{gap:"$3",children:g}):null})]})]})})})}}}]);
//# sourceMappingURL=70199.e6d183791a.chunk.js.map