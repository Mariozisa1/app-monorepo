!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bfdae6d1-bcfe-491c-a74e-fad80b7519b1",e._sentryDebugIdIdentifier="sentry-dbid-bfdae6d1-bcfe-491c-a74e-fad80b7519b1")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[80208],{593827:(e,t,a)=>{a.d(t,{L:()=>WalletAvatar});var n=a(503668),o=a.n(n),r=a(490343),s=a(491180),l=a(258988),i=a(831085);function WalletAvatarBase({size:e,img:t,wallet:a}){var n,o,p=t||a?.avatarInfo?.img;return p?s.A.isHwHiddenWallet({wallet:a})?(0,i.jsx)(r.Icon,{size:"$10",name:"LockSolid",color:"$iconSubdued"}):(0,i.jsxs)(r.Image,{size:e,"data-sentry-element":"Image","data-sentry-component":"WalletAvatarBase","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:[(0,i.jsx)(r.Image.Source,{source:null!=(n=l.UO[p])?n:l.UO.bear,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx"}),(0,i.jsx)(r.Image.Fallback,{delayMs:300,justifyContent:"center",alignItems:"center","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:(0,i.jsx)(r.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:null!=(o=a?.avatarInfo?.emoji)?o:""})})]}):null}function WalletAvatar({size:e="$10",status:t,badge:a,img:n,wallet:s}){return(0,i.jsxs)(r.Stack,{w:e,h:e,justifyContent:"center",alignItems:"center","data-sentry-element":"Stack","data-sentry-component":"WalletAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:[(0,i.jsx)(WalletAvatarBase,{size:e,img:n,wallet:s,"data-sentry-element":"WalletAvatarBase","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx"}),"connected"===t?(0,i.jsx)(r.Stack,{position:"absolute",bottom:-2,right:-2,bg:"$bgSidebar",p:"$0.5",borderRadius:"$full",zIndex:"$1",children:(0,i.jsx)(r.Stack,{borderRadius:"$full",w:"$2.5",h:"$2.5",bg:"$bgSuccessStrong"})}):null,o()(a)?null:(0,i.jsx)(r.Stack,{position:"absolute",h:"$4",px:"$0.5",justifyContent:"center",bottom:-2,right:-1,bg:"$bgSubdued",borderRadius:"$full",zIndex:"$1",children:(0,i.jsx)(r.SizableText,{size:"$bodySm",textAlign:"center",children:a})})]})}},980208:(e,t,a)=>{a.r(t),a.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=a(490343),o=a(593827),r=a(654004),s=a(831085),l={id:"hd-2",name:"wallet 124",avatar:a(569513),type:"hd",backuped:!1,nextIds:{hiddenWalletNum:1,accountGlobalNum:1,accountHdIndex:0},accounts:[],walletNo:0,avatarInfo:{img:"pig"}};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(r.P,{description:"",suggestions:[""],boundaryConditions:[""],elements:[{title:"Default",element:(0,s.jsxs)(n.YStack,{gap:"$2",children:[(0,s.jsx)(o.L,{size:"$20",wallet:l}),(0,s.jsx)(o.L,{img:"panda",wallet:void 0}),(0,s.jsx)(o.L,{img:"panda",wallet:void 0}),(0,s.jsx)(o.L,{wallet:l}),(0,s.jsx)(o.L,{wallet:l,status:"connected"}),(0,s.jsx)(o.L,{size:"small",wallet:l})]})}],"data-sentry-element":"Layout","data-sentry-component":"ToastGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/WalletAvatar.tsx"})}},654004:(e,t,a)=>{a.d(t,{P:()=>Layout});var n=a(586330),o=a(654266),r=a(490343),s=a(427745),l=a(643087),i=a(498356),p=a(193068),c=a(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(r.Stack,{children:(0,c.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,a){return(0,c.jsx)(r.Stack,{children:(0,c.jsxs)(r.SizableText,{children:[a+1,". ",t,a===e.length-1?"。":"；"]})},a.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:a=[],elements:d=[],scrollEnabled:m=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:k=!1,children:y}){var g=(0,s.U6)(),x=(0,i.A)();return(0,c.jsx)(r.Page,{skipLoading:k,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:m,flex:1,marginBottom:g,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(r.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){x.dispatch(o.y9.replace(p.WP.Main,{screen:p.V4.Developer,params:{screen:p.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(r.Button,{ml:"$4",onPress:(0,n.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,n.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(r.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,a?.length>0?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:a})]}):null,(0,c.jsxs)(r.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(r.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(r.Stack,{flexDirection:"column",children:[(0,c.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(r.Stack,{paddingTop:1,children:(0,c.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(r.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:y?(0,c.jsx)(r.Stack,{gap:"$3",children:y}):null})]})]})})})}}}]);
//# sourceMappingURL=80208.a67edd5e91.chunk.js.map