!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="320ed63e-888f-41e7-bbb6-98449d478c61",e._sentryDebugIdIdentifier="sentry-dbid-320ed63e-888f-41e7-bbb6-98449d478c61")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9504],{709504:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=n(514041),o=n(490343),a=n(287121),r=n(654004),i=n(831085),l={type:void 0,path:"",coinType:"",impl:"",networks:[],template:"",id:"111111111",address:"2222222",name:"1",pub:"",addresses:{aaaa:"1"},connectedAddresses:{},selectedAddress:{},addressDetail:{networkId:"tbtc--0",address:"0x1111111",baseAddress:"0x1111111",normalizedAddress:"0x1111111",displayAddress:"0x1111111",isValid:!0,allowEmptyAddress:!1}},c={id:"external--hw-da2fb056-f3c8-4b55-922e-a04a6fea29cf--m/44'/0'/0",name:"2222",address:"0x222222",connectionInfo:{evmInjected:{global:"ethereum",name:"string",icon:"https://uni.onekey-asset.com/static/chain/btc.png"}}},p={id:"external--hw-da2fb05u-f3c8-4b55-922e-a04a6fea29cf--m/44'/0'/0",name:"3333",address:"0x222222",connectionInfo:{evmInjected:{global:"ethereum",name:"string",icon:"https://uni.onekey-asset.com/static/chain/btc.pn"}}};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,i.jsx)(r.P,{description:"",suggestions:[""],boundaryConditions:[""],elements:[{title:"Default",element:(0,i.jsxs)(o.YStack,{gap:"$4",justifyContent:"center",children:[(0,i.jsx)(a.h,{}),(0,i.jsx)(a.h,{src:"https://cdn.bitkeep.vip/web/v10037/img/down/logo.png"}),(0,i.jsx)(a.h,{src:"https://avatars2.githubusercontent.com/u/48327834?s=200&v=4"}),(0,i.jsx)(a.h,{address:"0x1111111"}),(0,i.jsx)(a.h,{account:l}),(0,i.jsx)(a.h,{size:"small"}),(0,i.jsx)(a.h,{size:"small",account:l}),(0,i.jsx)(a.h,{networkId:"tbtc--0"}),(0,i.jsx)(a.h,{account:l,networkId:"tbtc--0"}),(0,i.jsx)(a.h,{size:"small",networkId:"tbtc--0"}),(0,i.jsx)(a.h,{size:"small",account:l,networkId:"tbtc--0"}),(0,i.jsx)(a.h,{size:"small",src:"https://uni.onekey-asset.com/static/chain/btc.pn"}),(0,i.jsx)(a.h,{size:"small",src:"https://uni.onekey-asset.com/static/chain/btc.png"}),(0,i.jsx)(a.h,{src:"https://uni.onekey-asset.com/static/chain/btc.png"})]})},{title:"Switch Image URI",element:function(){var[e,t]=(0,s.useState)("");return(0,i.jsxs)(o.YStack,{gap:"$4",children:[(0,i.jsx)(a.h,{src:e}),(0,i.jsxs)(o.YStack,{gap:"$4",children:[(0,i.jsx)(o.Button,{onPress:function(){t("https://uni.onekey-asset.com/static/chain/btc.pn")},children:"Change to invalid URI"}),(0,i.jsx)(o.Button,{onPress:function(){t("https://uni.onekey-asset.com/static/chain/btc.png")},children:"Change to valid URI"}),(0,i.jsx)(o.Button,{onPress:function(){t("")},children:"Change to empty URI"})]})]})}},{title:"Switch Account",element:function(){var[e,t]=(0,s.useState)("default"),[n,r]=(0,s.useState)(void 0);return(0,i.jsxs)(o.YStack,{gap:"$4",children:[(0,i.jsx)(a.h,{dbAccount:n,size:e}),(0,i.jsxs)(o.YStack,{gap:"$4",children:[(0,i.jsx)(o.Select,{items:[{value:"default",label:"default"},{value:"small",label:"small"}],value:e,onChange:t,title:"Demo Title",onOpenChange:function(){}}),(0,i.jsx)(o.Button,{onPress:function(){r(l)},children:"Change to db Network Account"}),(0,i.jsx)(o.Button,{onPress:function(){r(c)},children:"Change to External account"}),(0,i.jsx)(o.Button,{onPress:function(){r(p)},children:"Change to invalid External account"}),(0,i.jsx)(o.Button,{onPress:function(){r(void 0)},children:"Change to empty account"})]})]})}}],"data-sentry-element":"Layout","data-sentry-component":"ToastGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/AccountAvatar.tsx"})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var s=n(586330),o=n(654266),a=n(490343),r=n(427745),i=n(643087),l=n(498356),c=n(193068),p=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,p.jsx)(a.Stack,{children:(0,p.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,p.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,p.jsx)(a.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,n){return(0,p.jsx)(a.Stack,{children:(0,p.jsxs)(a.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:h=!1,children:x}){var g=(0,r.U6)(),k=(0,l.A)();return(0,p.jsx)(a.Page,{skipLoading:h,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,p.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:g,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,p.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,p.jsxs)(a.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,p.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){k.dispatch(o.y9.replace(c.WP.Main,{screen:c.V4.Developer,params:{screen:c.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,p.jsx)(a.Button,{ml:"$4",onPress:(0,s.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,p.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,s.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,p.jsxs)(a.Stack,{gap:"$2",children:[(0,p.jsx)(a.Stack,{children:(0,p.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,p.jsx)(a.Stack,{children:(0,p.jsx)(FormattedText,{text:e})})]}):null,t?(0,p.jsxs)(a.Stack,{gap:"$2",children:[(0,p.jsx)(a.Stack,{children:(0,p.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,p.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,p.jsxs)(a.Stack,{gap:"$2",children:[(0,p.jsx)(a.Stack,{children:(0,p.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,p.jsx)(FormattedText,{text:n})]}):null,(0,p.jsxs)(a.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,p.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,p.jsx)(a.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,p.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,p.jsxs)(a.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,p.jsxs)(a.Stack,{flexDirection:"column",children:[(0,p.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,p.jsx)(a.Stack,{paddingTop:1,children:(0,p.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,p.jsx)(a.Stack,{children:"function"==typeof e.element?(0,p.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,p.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:x?(0,p.jsx)(a.Stack,{gap:"$3",children:x}):null})]})]})})})}}}]);
//# sourceMappingURL=9504.78bbff3327.chunk.js.map