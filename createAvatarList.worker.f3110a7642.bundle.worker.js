/*! For license information please see createAvatarList.worker.f3110a7642.bundle.worker.js.LICENSE.txt */
!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="22cea8ec-7171-4696-91d9-ec50e972d7b8",t._sentryDebugIdIdentifier="sentry-dbid-22cea8ec-7171-4696-91d9-ec50e972d7b8")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.1 (2024123091)"},(()=>{var t={766:function(t){!function webpackUniversalModuleDefinition(e,i){t.exports=i()}(0,(function(){return function(t){var e={};function __nested_webpack_require_563__(i){if(e[i])return e[i].exports;var r=e[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,__nested_webpack_require_563__),r.loaded=!0,r.exports}return __nested_webpack_require_563__.m=t,__nested_webpack_require_563__.c=e,__nested_webpack_require_563__.p="",__nested_webpack_require_563__(0)}([function(t,e,i){const r=i(1),s=i(2),o=new Array(4);function rand(){const t=o[0]^o[0]<<11;return o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=o[3]^o[3]>>19^t^t>>8,(o[3]>>>0)/(1<<31>>>0)}function createColor(){return[Math.floor(360*rand())/360,(60*rand()+40)/100,25*(rand()+rand()+rand()+rand())/100]}function fillRect(t,e,i,r,s,o){for(let n=0;n<r;n++)for(let r=0;r<s;r++)t.buffer[t.index(e+n,i+r)]=o}function buildOpts(t){if(!t.seed)throw new Error("No seed provided");return function seedrand(t){for(let t=0;t<o.length;t++)o[t]=0;for(let e=0;e<t.length;e++)o[e%4]=(o[e%4]<<5)-o[e%4]+t.charCodeAt(e)}(t.seed),Object.assign({size:8,scale:16,color:createColor(),bgcolor:createColor(),spotcolor:createColor()},t)}t.exports=function makeBlockie(t){const e=buildOpts({seed:t.toLowerCase()}),i=function createImageData(t){const e=t,i=t,r=Math.ceil(e/2),s=e-r,o=[];for(let t=0;t<i;t++){let t=[];for(let e=0;e<r;e++)t[e]=Math.floor(2.3*rand());const e=t.slice(0,s).reverse();t=t.concat(e);for(let e=0;e<t.length;e++)o.push(t[e])}return o}(e.size),o=Math.sqrt(i.length),n=new r(e.size*e.scale,e.size*e.scale,3),f=(n.color(...s(...e.bgcolor)),n.color(...s(...e.color))),h=n.color(...s(...e.spotcolor));for(let t=0;t<i.length;t++){const r=Math.floor(t/o),s=t%o;if(i[t]){const o=1==i[t]?f:h;fillRect(n,s*e.scale,r*e.scale,e.scale,e.scale,o)}}return`data:image/png;base64,${n.getBase64()}`}},function(t,e){t.exports=function(t,e,i){function write(t,e){for(var i=2;i<arguments.length;i++)for(var r=0;r<arguments[i].length;r++)t[e++]=arguments[i].charAt(r)}function byte4(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t)}function byte2lsb(t){return String.fromCharCode(255&t,t>>8&255)}this.width=t,this.height=e,this.depth=i,this.pix_size=e*(t+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=25,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=8+3*i+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=8+i+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=8+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=12,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=new Array,this.palette=new Object,this.pindex=0;for(var r=new Array,s=0;s<this.buffer_size;s++)this.buffer[s]="\0";write(this.buffer,this.ihdr_offs,byte4(this.ihdr_size-12),"IHDR",byte4(t),byte4(e),"\b"),write(this.buffer,this.plte_offs,byte4(this.plte_size-12),"PLTE"),write(this.buffer,this.trns_offs,byte4(this.trns_size-12),"tRNS"),write(this.buffer,this.idat_offs,byte4(this.idat_size-12),"IDAT"),write(this.buffer,this.iend_offs,byte4(this.iend_size-12),"IEND");var o=30912;o+=31-o%31,write(this.buffer,this.idat_offs+8,function byte2(t){return String.fromCharCode(t>>8&255,255&t)}(o));for(s=0;(s<<16)-1<this.pix_size;s++){var n,f;s+65535<this.pix_size?(n=65535,f="\0"):(n=this.pix_size-(s<<16)-s,f=""),write(this.buffer,this.idat_offs+8+2+(s<<16)+(s<<2),f,byte2lsb(n),byte2lsb(~n))}for(s=0;s<256;s++){for(var h=s,a=0;a<8;a++)h=1&h?-306674912^h>>1&2147483647:h>>1&2147483647;r[s]=h}this.index=function(t,e){var i=e*(this.width+1)+t+1;return this.idat_offs+8+2+5*Math.floor(i/65535+1)+i},this.color=function(t,e,i,r){var s=(((r=r>=0?r:255)<<8|t)<<8|e)<<8|i;if(void 0===this.palette[s]){if(this.pindex==this.depth)return"\0";var o=this.plte_offs+8+3*this.pindex;this.buffer[o+0]=String.fromCharCode(t),this.buffer[o+1]=String.fromCharCode(e),this.buffer[o+2]=String.fromCharCode(i),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(r),this.palette[s]=String.fromCharCode(this.pindex++)}return this.palette[s]},this.getBase64=function(){var t,e,i,r,s,o,n,f=this.getDump(),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=f.length,d=0,_="";do{r=(t=f.charCodeAt(d))>>2,s=(3&t)<<4|(e=f.charCodeAt(d+1))>>4,i=f.charCodeAt(d+2),o=a<d+2?64:(15&e)<<2|i>>6,n=a<d+3?64:63&i,_+=h.charAt(r)+h.charAt(s)+h.charAt(o)+h.charAt(n)}while((d+=3)<a);return _},this.getDump=function(){for(var t=65521,e=1,i=0,s=5552,o=0;o<this.height;o++)for(var n=-1;n<this.width;n++)i+=e+=this.buffer[this.index(n,o)].charCodeAt(0),0==(s-=1)&&(e%=t,i%=t,s=5552);function crc32(t,e,i){for(var s=-1,o=4;o<i-4;o+=1)s=r[255&(s^t[e+o].charCodeAt(0))]^s>>8&16777215;write(t,e+i-4,byte4(~s))}return e%=t,i%=t,write(this.buffer,this.idat_offs+this.idat_size-8,byte4(i<<16|e)),crc32(this.buffer,this.ihdr_offs,this.ihdr_size),crc32(this.buffer,this.plte_offs,this.plte_size),crc32(this.buffer,this.trns_offs,this.trns_size),crc32(this.buffer,this.idat_offs,this.idat_size),crc32(this.buffer,this.iend_offs,this.iend_size),"PNG\r\n\n"+this.buffer.join("")}}},function(t,e){function hue2rgb(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}t.exports=function hsl2rgb(t,e,i){let r,s,o;if(0==e)r=s=o=i;else{const n=i<.5?i*(1+e):i+e-i*e,f=2*i-n;r=hue2rgb(f,n,t+1/3),s=hue2rgb(f,n,t),o=hue2rgb(f,n,t-1/3)}return[Math.round(255*r),Math.round(255*s),Math.round(255*o),255]}}])}))}},e={};function __webpack_require__(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,__webpack_require__),s.exports}(()=>{const t=__webpack_require__(766),e={};onmessage=i=>{const r=i.data;let s=e[r];s||(s={id:r,data:t(r)},e[r]=s),postMessage(s)}})()})();
//# sourceMappingURL=createAvatarList.worker.f3110a7642.bundle.worker.js.map