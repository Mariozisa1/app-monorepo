!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="04700d44-6524-435f-86e6-427ea644b656",e._sentryDebugIdIdentifier="sentry-dbid-04700d44-6524-435f-86e6-427ea644b656")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[97692],{97692:(e,t,o)=>{o.r(t),o.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=o(490343),r=o(654004),s=o(831085),a=[{imgUrl:"https://asset.onekey-asset.com/portal/803ff853ecdd7808b35fdf6f837ae1af514aad56/static/shop-hero-animation-poster-8e1206b59d2201dfaa8cd72a8134179f.jpg",title:"title1",onPress:function(){}},{imgUrl:"https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",title:"title2",onPress:function(){}},{imgUrl:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"title3",onPress:function(){}}];const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(r.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:function(){return(0,s.jsx)(n.Swiper,{autoplay:!0,autoplayDelayMs:2e3,autoplayLoop:!0,height:"$64",data:a,renderItem:function({item:e}){return(0,s.jsxs)(n.YStack,{onPress:e.onPress,alignItems:"center",children:[(0,s.jsx)(n.Image,{width:"100%",height:"$52",src:e.imgUrl}),(0,s.jsx)(n.SizableText,{children:e.title})]})},renderPagination:function({currentIndex:e}){return(0,s.jsx)(n.XStack,{gap:"$1",position:"absolute",right:"$5",bottom:"$24",children:a.map((function(t,o){return(0,s.jsx)(n.Stack,{w:"$3",$gtMd:{w:"$4"},h:"$1",borderRadius:"$full",bg:"$whiteA12",opacity:e===o?1:.5},o)}))})}})}}],"data-sentry-element":"Layout","data-sentry-component":"SliderGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Swiper.tsx"})}},654004:(e,t,o)=>{o.d(t,{P:()=>Layout});var n=o(586330),r=o(654266),s=o(490343),a=o(427745),i=o(643087),l=o(498356),p=o(193068),c=o(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(s.Stack,{children:(0,c.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,o){return(0,c.jsx)(s.Stack,{children:(0,c.jsxs)(s.SizableText,{children:[o+1,". ",t,o===e.length-1?"。":"；"]})},o.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:o=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:y=!1,children:h}){var g=(0,a.U6)(),x=(0,l.A)();return(0,c.jsx)(s.Page,{skipLoading:y,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:g,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(s.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){x.dispatch(r.y9.replace(p.WP.Main,{screen:p.V4.Developer,params:{screen:p.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(s.Button,{ml:"$4",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(s.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,o?.length>0?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:o})]}):null,(0,c.jsxs)(s.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(s.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(s.Stack,{flexDirection:"column",children:[(0,c.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(s.Stack,{paddingTop:1,children:(0,c.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(s.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:h?(0,c.jsx)(s.Stack,{gap:"$3",children:h}):null})]})]})})})}}}]);
//# sourceMappingURL=97692.b6339214c8.chunk.js.map