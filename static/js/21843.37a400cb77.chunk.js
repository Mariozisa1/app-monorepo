!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1f157417-a823-403a-891d-b50271caff18",e._sentryDebugIdIdentifier="sentry-dbid-1f157417-a823-403a-891d-b50271caff18")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[21843],{421843:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=n(490343),r=n(334439),a=n(117746),s=n(654004),i=n(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,i.jsx)(s.P,{description:"对操作结果的反馈，无需用户操作即可自行消失",suggestions:["使用 Toast 显示简约明确的信息反馈","用户点击或触摸 Toast 内容时，浮层将会停留在页面上","Toast 显示的文本应少于 20 字","不建议使用 Toast 显示过长的报错信息"],boundaryConditions:["Toast 永远拥有最高层级的浮层","Toast 组件能显示的最长文本内容为三排，超出三排将会缩略","界面中只会存在一个 Toast 示例，后触发的 Toast 信息会覆盖前一条 Toast 信息"],elements:[{title:"Sans",element:(0,i.jsxs)(o.YStack,{gap:"$2",children:[(0,i.jsx)(o.SizableText,{size:"$heading5xl",children:"heading5xl"}),(0,i.jsx)(o.SizableText,{size:"$heading4xl",children:"heading4xl"}),(0,i.jsx)(o.SizableText,{size:"$heading3xl",children:"heading3xl"}),(0,i.jsx)(o.SizableText,{size:"$heading2xl",children:"heading2xl"}),(0,i.jsx)(o.SizableText,{size:"$headingXl",children:"headingXl"}),(0,i.jsx)(o.SizableText,{size:"$headingLg",children:"headingLg"}),(0,i.jsx)(o.SizableText,{size:"$headingMd",children:"headingMd"}),(0,i.jsx)(o.SizableText,{size:"$headingSm",children:"headingSm"}),(0,i.jsx)(o.SizableText,{size:"$headingXs",children:"headingXs"}),(0,i.jsx)(o.SizableText,{size:"$bodyLg",children:"bodyLg"}),(0,i.jsx)(o.SizableText,{size:"$bodyMd",children:"bodyMd"}),(0,i.jsx)(o.SizableText,{size:"$bodySm",children:"bodySm"}),(0,i.jsx)(o.SizableText,{size:"$bodyLgMedium",children:"bodyLgMedium"}),(0,i.jsx)(o.SizableText,{size:"$bodyMdMedium",children:"bodyMdMedium"}),(0,i.jsx)(o.SizableText,{size:"$bodySmMedium",children:"bodySmMedium"})]})},{title:"Underline",element:(0,i.jsxs)(o.YStack,{gap:"$2",children:[(0,i.jsx)(o.SizableText,{size:"$bodyLg",textDecorationLine:"underline",children:'`variant="$bodyLg" textDecorationLine="underline"`'}),(0,i.jsx)(o.SizableText,{size:"$bodyMd",textDecorationLine:"underline",children:'`variant="$bodyMd" textDecorationLine="underline"`'})]})},{title:"Colors",element:(0,i.jsxs)(o.YStack,{gap:"$2",children:[(0,i.jsx)(o.SizableText,{children:"Default"}),(0,i.jsx)(o.SizableText,{color:"$textSubdued",children:"$textSubdued"}),(0,i.jsx)(o.SizableText,{color:"$textDisabled",children:"$textDisabled"}),(0,i.jsx)(o.SizableText,{color:"$textInverse",backgroundColor:"$bgInverse",children:"$textInverse"}),(0,i.jsx)(o.SizableText,{color:"$textInverseSubdued",backgroundColor:"$bgInverse",children:"$textInverseSubdued"}),(0,i.jsx)(o.SizableText,{color:"$textOnColor",backgroundColor:"$bgCriticalStrong",children:"$textOnColor"}),(0,i.jsx)(o.SizableText,{color:"$textSuccess",children:"$textSuccess"}),(0,i.jsx)(o.SizableText,{color:"$textInfo",children:"$textInfo"}),(0,i.jsx)(o.SizableText,{color:"$textCritical",children:"$textCritical"}),(0,i.jsx)(o.SizableText,{color:"$textCaution",children:"$textCaution"}),(0,i.jsx)(o.SizableText,{color:"$textInteractive",children:"$textInteractive"}),(0,i.jsx)(o.SizableText,{color:"$textPlaceholder",children:"$textPlaceholder"})]})},{title:"Rich Text",element:(0,i.jsxs)(o.YStack,{gap:"$2",children:[(0,i.jsx)(o.RichSizeableText,{linkList:{a:{url:"https://1key.so"}},children:"Hello<a> OneKey </a>World"}),(0,i.jsx)(o.RichSizeableText,{linkList:{url0:{url:"https://1key.so",color:"orange"},url1:{url:"https://google.com",color:"pink"},url2:{url:void 0,color:"green",size:"$heading4xl",onPress:function(){alert("Open ChatGPT?"),(0,a.Dr)("https://chatgpt.com")}}},children:"Hello<url0> OneKey </url0><url1> Google </url1><url2> ChatGPT </url2>World"}),(0,i.jsx)(o.RichSizeableText,{i18NValues:{red:function(e){return(0,i.jsx)(o.SizableText,{color:"$textCritical",children:e})},number:"10"},children:r.ETranslations.hardware_onekey_lite_pin_error_desc})]})}],"data-sentry-element":"Layout","data-sentry-component":"TypographyGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Typography.tsx"})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var o=n(586330),r=n(654266),a=n(490343),s=n(427745),i=n(643087),l=n(498356),d=n(193068),c=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,n){return(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:p=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:h=!1,children:m}){var g=(0,s.U6)(),y=(0,l.A)();return(0,c.jsx)(a.Page,{skipLoading:h,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:g,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(a.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){y.dispatch(r.y9.replace(d.WP.Main,{screen:d.V4.Developer,params:{screen:d.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(a.Button,{ml:"$4",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(a.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:n})]}):null,(0,c.jsxs)(a.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:p?.map((function(e,t){return(0,c.jsxs)(a.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(a.Stack,{flexDirection:"column",children:[(0,c.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(a.Stack,{paddingTop:1,children:(0,c.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(a.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:m?(0,c.jsx)(a.Stack,{gap:"$3",children:m}):null})]})]})})})}}}]);
//# sourceMappingURL=21843.37a400cb77.chunk.js.map