!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7f7a4088-1a61-442b-a0e7-f1bd05953dcf",e._sentryDebugIdIdentifier="sentry-dbid-7f7a4088-1a61-442b-a0e7-f1bd05953dcf")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[98915],{898915:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(490343),i=r(324586),n=r(586330),s=r(514041),o=r(791088),p=r(57597),c=r(471169),m=r(831085);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function FirmwareUpdateSectionFieldItem({name:e,title:t,titleProps:r={color:"$textCritical"},children:a,onValueChange:i,testID:p=""}){var d,[S,l]=(0,c.useFirmwareUpdateDevSettingsPersistAtom)(),w=s.Children.only(a),g=e?S?.[e]:"",u=(0,s.useCallback)((d=(0,n.A)((function*(t){e&&(l((function(r){return _objectSpread(_objectSpread({},r),{},{[e]:t})})),i?.(t))})),function(e){return d.apply(this,arguments)}),[e,i,l]),v=w?(0,s.cloneElement)(w,_objectSpread(_objectSpread({},w.props),{},{value:g,onChange:u})):null;return(0,m.jsx)(o.c,{title:t,titleProps:r,testID:p,"data-sentry-element":"ListItem","data-sentry-component":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:v})}function FirmwareUpdateDevSettings(){var[e]=(0,c.useFirmwareUpdateDevSettingsPersistAtom)();return(0,m.jsxs)(a.YStack,{"data-sentry-element":"YStack","data-sentry-component":"FirmwareUpdateDevSettings","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:[(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"lowBatteryLevel",title:"Low Battery","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"shouldUpdateBridge",title:"Should Update Bridge","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"shouldUpdateFullRes",title:"Should Update Full Resouces","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"shouldUpdateFromWeb",title:"Should Update from web","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"allIsUpToDate",title:"All is up to date","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"usePreReleaseConfig",title:"Use pre-release config","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"forceUpdateResEvenSameVersion",title:"Force update res even same version","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"forceUpdateFirmware",title:"Force update firmware","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"forceUpdateBle",title:"Force update bluetooth","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"forceUpdateBootloader",title:"Force update bootloader","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"showAutoCheckHardwareUpdatesToast",title:"Show Auto Check Hardware Updates Toast","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(FirmwareUpdateSectionFieldItem,{name:"showDeviceDebugLogs",title:"Show Device Debug Log","data-sentry-element":"FirmwareUpdateSectionFieldItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:(0,m.jsx)(a.Switch,{size:a.ESwitchSize.small,"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})}),(0,m.jsx)(a.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx",children:JSON.stringify(e,null,2)}),(0,m.jsx)(p.FirmwareUpdateGalleryDemo,{"data-sentry-element":"FirmwareUpdateGalleryDemo","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/List/DevSettingsSection/FirmwareUpdateDevSettings.tsx"})]})}const d=function PageFirmwareUpdateDevSettings(){return(0,m.jsxs)(a.Page,{scrollEnabled:!0,"data-sentry-element":"Page","data-sentry-component":"PageFirmwareUpdateDevSettings","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/FirmwareUpdateDevSettings/PageFirmwareUpdateDevSettings.tsx",children:[(0,m.jsx)(a.Page.Header,{title:"FirmwareUpdateDevSettings","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/FirmwareUpdateDevSettings/PageFirmwareUpdateDevSettings.tsx"}),(0,m.jsx)(FirmwareUpdateDevSettings,{"data-sentry-element":"FirmwareUpdateDevSettings","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/FirmwareUpdateDevSettings/PageFirmwareUpdateDevSettings.tsx"})]})}}}]);
//# sourceMappingURL=98915.4f1e510d0e.chunk.js.map