/*! v:640356 b:default c:errorCounter */
(window["pcodeJsonp640356ZeIikbjHif"]=window["pcodeJsonp640356ZeIikbjHif"]||[]).push([[45],{1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAllActiveTestIds=t.collectAllActiveTestIds=t.generateActiveTestIds=t.getActiveTestIds=t.useExperimentFlag=t.resetExperimentsData=t.initExperimentsData=void 0;var r=[];window.__activeTestIds=window.__activeTestIds||[],window.__pcodeAllActiveTestIds=[];t.initExperimentsData=function(e){var t=e.flags,n=e.flagsMap,r=e.testIds;t,n,r};t.resetExperimentsData=function(){void 0,void 0,void 0,r=[]};t.useExperimentFlag=function(e,t,r){var i,a;void 0===t&&(t=!1);var s=n(36).getUaasConfig();i=s.flags,a=s.flagsMap;var u=i&&i[e];return!t&&a&&a[e]&&(0,n(3).forEach)(a[e],(function(e){var t,i,a=e.value,s=e.testId;i=u,((t=a)&&i&&"object"==typeof t&&"object"==typeof i?n.lv["json"].stringify(t)===n.lv["json"].stringify(i):t===i)&&o(s,r)})),u};var o=function(e,r){var o=r;o||(o=i()),function(e,r){var o=n(36).getUaasConfig().testIds;if(o){var i=(0,n(56).find)(o.split(";"),(function(t){return 0===t.indexOf(e)}));i&&(r.push(i),(0,t.collectAllActiveTestIds)([i]))}}(e,o)},i=function(){return window.__activeTestIds||[]};t.getActiveTestIds=function(e){var t;return(0,n(60).unique)(null!==(t=null==e?void 0:e.concat(r))&&void 0!==t?t:r)};t.generateActiveTestIds=function(e,t){var r;void 0===e&&(e=[]),void 0===t&&(t=[]);var o=null!==(r=n(36).getUaasConfig().rrActiveTestIds)&&void 0!==r?r:[],a=[].concat(e,t,i(),o);if(a.length)return(0,n(60).unique)(a).join(";")};t.collectAllActiveTestIds=function(e){e&&e.length&&window.__pcodeAllActiveTestIds&&(window.__pcodeAllActiveTestIds=window.__pcodeAllActiveTestIds.concat(e))};t.getAllActiveTestIds=function(){if(window.__pcodeAllActiveTestIds&&window.__pcodeAllActiveTestIds.length)return(0,n(60).unique)(window.__pcodeAllActiveTestIds).join(";")},(0,n(95).setSafeframeVersion)((0,t.useExperimentFlag)("SAFEFRAME_VERSION"))},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateHexString=void 0,t.generateHexString=function(e){for(var t="",r=0;r<e;r++)t+=(16*(0,n(82).random)()|0).toString(16);return t}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmpty=void 0,t.isEmpty=function(e){return!(0,n(30).getObjectKeys)(e).length}},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listToArray=void 0,t.listToArray=function(e){if(!e)return[];for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t}},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectStorage=void 0;var r=function(){function e(e){this.obj=e}return e.prototype.getItem=function(e){return this.obj[e]},e.prototype.setItem=function(e,t){this.obj[e]=t},e}();t.ObjectStorage=r},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCrossFrameStorage=void 0;var r=(0,n(19).once)((function(){return(0,n(365).getCrossFrameDataSource)(self,"Ya.pcodeCrossFrameData",(function(){return new(n(141).ObjectStorage)({})}))}));t.getCrossFrameStorage=function(e){return(0,n(252).getOrCreateItem)(r(),e,(function(){return new(n(141).ObjectStorage)({})}))}},16:function(e,t,n){"use strict";function r(){return window.Ya||(window.Ya=(0,t.initYa)())}function o(){var e=r();return e.Context||(e.Context=(0,t.initYaContext)())}Object.defineProperty(t,"__esModule",{value:!0}),t.initYa=t.initYaDirect=t.initYaContext=t.getYaContext=t.getYa=t.getGlobalVariable=t.setGlobalVariable=void 0,t.setGlobalVariable=function(e,t){o()[e]=t},t.getGlobalVariable=function(e){return o()[e]},t.getYa=r,t.getYaContext=o;function i(){return{}}t.initYaContext=function(){return{isAllowedRepeatAds:n(189).isAllowedRepeatAds,_load_callbacks:[],_callbacks:[],_asyncIdCounter:0,LOG_DIRECT:(0,n(42).isPercent)(1),_activeTestIds:[]}},t.initYaDirect=i;t.initYa=function(){return{Direct:{},Context:(0,t.initYaContext)()}}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.padLeft=void 0,t.padLeft=function(e,t,n){void 0===n&&(n=" ");var r=t-e.length;if(r>0){for(var o=n;o.length<r;)o+=o;return(o.length>r?o.substr(0,r):o)+e}return e}},176:function(e,t,n){"use strict";var r=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},o=function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(355),t),o(n(356),t),o(n(357),t)},177:function(e,t,n){"use strict";function r(){return n(65).pcodeInternalDebugFlag}Object.defineProperty(t,"__esModule",{value:!0}),t.logger=t.LOGGER_DEFAULT_PORTION=t.isDevelopBuild=void 0,t.isDevelopBuild=r;var o=Math.random();t.LOGGER_DEFAULT_PORTION=1,function(e){var t=new(n(176).GogolLogger)({version:"pcode_".concat((0,n(41).getCodeVersion)()),vsid:n(176).VSID,rnd:o}),i=new(n(359).MetrikaLogger),a=new(n(361).ErrorCounter),s=new(n(372).TraceLoggerSlim),u=!0;function c(e,t,r,o){return"string"==typeof t&&(t=new Error(t),r||(r="remoteLogString")),{namespace:r,version:(0,n(41).getCodeVersion)(),type:e,additional:o,error:t}}function d(t,n){e.debug("REMOTE_LOG: ".concat(n||""," "),t)}function l(e){return function(t,o,s,l){if(u){var f=c(e,t,o,s),v=l||25;if(r())return d(f),void console.error(f.error);(0,n(42).isPercent)(v)&&a.log(f),i.log(f)}}}(0,n(373).onUnload)((function(){u=!1})),e.errorStrict=function(e,t){if(u){var o=c("ERROR",e,"",t),s=(0,n(13).isString)(e)&&e in n(254).allStrictErrorCodes?n(254).allStrictErrorCodes[e]:25;if(r())return d(o),void console.error(o.error);(0,n(42).isPercent)(s)&&a.log(o),i.log(o)}},e.error=l("ERROR"),e.warn=l("WARNING"),e.logGogolEvent=function(o){if(r()){var i=o,a=i.data,s=i.sensors,u=i.values;e.debug("logGogolEvent=[".concat(o.name,"] probability=[").concat(o.probability,"]"),a,s,u)}else"TRUE"!==(0,n(1).useExperimentFlag)("VAS_AND_PCODE_COMMON_FLAG_DISABLE_STATS_LOGS")&&t.logGogolEvent(o)},e.debug=r()?function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return console.warn.apply(console,e)}:n(2).noop,e.traceLog=function(e,t,o){r()?d(e,t):("string"==typeof e&&(e={msg:e}),(0,n(42).isPercent)(o||1)&&s.sendCsrEvent({data:e,name:t,version:String((0,n(41).getCodeVersion)())}))},e.configure=function(e){t.config(e),a.config(e)},e.pc=function(){return(0,n(42).isPercent)(0)}}(t.logger||(t.logger={}))},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=t.open=t.isVisible=t.isReady=t.isAvailable=t.getMraid=void 0;var r=window;function o(e){void 0===e&&(e=window);try{var t="ownerDocument"in e&&"defaultView"in e.ownerDocument?e.ownerDocument.defaultView:e,n=t.mraid||t.top.mraid;return n&&n.getState&&n.addEventListener?n:void 0}catch(e){return}}function i(e){return void 0===e&&(e=r),void 0!==o(e)}t.getMraid=o,t.isAvailable=i,t.isReady=function(e){return void 0===e&&(e=r),i(e)&&"loading"!==o(e).getState()},t.isVisible=function(e){return void 0===e&&(e=r),i(e)&&o(e).isViewable()},t.open=function(e,t){void 0===e&&(e=r),i(e)&&o(e).open(t)},t.on=function(e,t,a){if(void 0===a&&(a=r),!i(a))return n(2).noop;var s=o(a);return s.addEventListener(e,t),function(){s.removeEventListener(e,t)}}},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=void 0;t.get=function(e,t){for(var r=0,o=t.split(".");r<o.length;r++){var i=o[r];if(!(0,n(25).isObject)(e)){e=void 0;break}e=e[i]}return e}},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.set=void 0;t.set=function(e,t,r){if(!(0,n(25).isObject)(e))return e;for(var o=e,i=t.split("."),a=i.pop(),s=0,u=i;s<u.length;s++){var c=u[s],d=e[c];e=(0,n(25).isObject)(d)?d:e[c]={}}return e[a]=r,o}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAllowedRepeatAds=void 0;var r={21753:50,27219:50,101833:50,122989:50,70350:50,250894:10};t.isAllowedRepeatAds=function(e,t){if(e in r){var o=r[e];return"boolean"==typeof o?o:r[e]=(0,n(42).isPercent)(o)}return t}},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTouchDevice=void 0,t.isTouchDevice=(0,n(249).isTouchDevice)()},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isLightHouse=void 0;var r=-1!==navigator.userAgent.indexOf("Chrome-Lighthouse");t.isLightHouse=function(){return r}},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapObjectValues=void 0,t.mapObjectValues=function(e,t){var r={};return(0,n(30).getObjectKeys)(e).forEach((function(n){r[n]=t(e[n],n)})),r}},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configureMetrika=t.metrikaAdSessionLabel=void 0,t.metrikaAdSessionLabel="adSessionID",t.configureMetrika=(0,n(14).protect)("sessionId::configureMetrika",(function(e,r){var o;(0,n(346).pushMetrikaEvent)(e,((o={})[t.metrikaAdSessionLabel]=r,o))}))},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTouchDevice=void 0,t.isTouchDevice=function(e){return void 0===e&&(e=window),(0,n(368).hasTouchPoints)(e)||(0,n(369).isMatchingAnyPointerCoarse)(e)||(0,n(370).isMatchingTouchEnabled)(e)||(0,n(371).hasDocumentTouch)(e)||(0,n(347).hasTouchEvents)(e)}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logSspInfo=void 0;var r=!1;t.logSspInfo=function(e){var t;if(!r){r=!0;var o=(0,n(45).getWindowSize)(),i=o.width,a=o.height;(0,n(20).traceLog)({type:e.type,sspId:String(e.sspId),def:e.def,width:i,height:a,inIframe:window.top!==window,hasMraid:(0,n(182).isAvailable)(),version:(null===(t=(0,n(182).getMraid)())||void 0===t?void 0:t.getVersion())||"",href:window.location.href},"SSP_MRAID_LOG",2)}}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowStorage=void 0;var r=(0,n(19).once)((function(){return(0,n(364).getWindowDataSource)(self,"Ya.pcodeWindowData",(function(){return new(n(141).ObjectStorage)({})}))}));t.getWindowStorage=function(e){return(0,n(252).getOrCreateItem)(r(),e,(function(){return new(n(141).ObjectStorage)({})}))}},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOrCreateItem=void 0;t.getOrCreateItem=function(e,t,n){var r=e.getItem(t);return r||(r=n(t),e.setItem(t,r)),r}},253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isMatchingMediaQuery=void 0,t.isMatchingMediaQuery=function(e,t){if(!(0,n(5).isFunction)(e.matchMedia))return!1;var r=e.matchMedia(t);return(0,n(25).isObject)(r)&&Boolean(r.matches)}},254:function(e,t,n){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.allStrictErrorCodes=t.InvalidSettingErrorCodes=void 0;var o={INVALID_BLOCK_ID:1,UNKNOWN_BLOCK_TYPE:1,CONTAINER_NOT_FOUND:1};t.InvalidSettingErrorCodes={BLOCK_NOT_FOUND:1,PAGE_NOT_FOUND:100,PAGE_DISABLED:1,WRONG_DOMAIN:1};var i={NO_FOUND_ROOT_CONTAINER:1,INIT_WITHOUT_DATASOURCE:1,SET_STATS_ROOT_FIELDS_ERROR:1,VIDEO_IN_COMBO_CLIENT_CODE_INIT_ERROR:1};t.allStrictErrorCodes=r(r(r(r(r(r(r(r(r(r(r({},{AD_LOADER_SUCCESS:.1,AD_LOADER_XHR_ERROR:1,AD_LOADER_EMPTY_ANSWER:1,AD_LOADER_TOO_SHORT_ANSWER:1,AD_LOADER_NO_ADS_TO_RENDER:1,AD_LOADER_BAD_ANSWER:100,AD_LOADER_TOO_MANY_ATTEMPTS:100}),{ADFOX_LOAD_SUCCESS:.1,ADFOX_LOAD_XHR_ERROR:1,ADFOX_LOAD_JSONP_ERROR:1,ADFOX_UNKNOWN_ERROR:1,ADFOX_LOG_ERROR:1,ADFOX_LOG_EVENT:.1,ADFOX_ADX_STUB:1,ADFOX_HB_TIMEOUT:.1,ADFOX_MATHID_SUCCESS:.1}),{HB_CALLED:.1,HB_ADAPTER_SEND:.01,HB_RENDERED:.1,HB_CONFIGURATION_ERROR:1,HB_FETCH_BIDS_REQUEST_ERROR:1,HB_FETCH_BIDS_REQUEST_TIMEOUT:1,HB_ADAPTER_REQUEST_TIMEOUT:.1,HB_ADAPTER_REQUEST_ERROR:.1,HB_ADAPTER_PARSE_ERROR:1}),{MEDIA_SEND_COMPLETE_MESSAGE_FAILED:.1}),{WIDGET_PRELOAD_FAILED:.1,WIDGET_INVALID_ID:.1,WIDGET_INVALID_RENDER_FIELD:.1,WIDGET_LOAD_META_FAILED:.1,WIDGET_LOAD_SETTINGS_FAILED:.1,WIDGET_LOAD_BUNDLE:.1,WIDGET_DEFINE_PRODUCT_VARIABLE:.1,WIDGET_MEDIA_ERROR:.1}),{COLLECTION_ERROR:100}),o),t.InvalidSettingErrorCodes),{}),i),{CLOSABLE_AD_CHUNK_LOAD_FAILED:1,UNCAUGHT_SSP:10,UNCAUGHT_SDK:10,DESKTOP_FULLSCREEN:1});r(r(r(r(r({},o),t.InvalidSettingErrorCodes),i),{TOUCH_MORDA_TZAR:1}),{DESKTOP_FULLSCREEN:1,DESKTOP_FLOOR_AD:1,TOO_SMALL_CONTAINER:1,VIDEO_ERROR:1,CHUNK_LOAD:1,UNEXPECTED_DOM:1})},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initPcodeMetrikaCounter=void 0;var r;t.initPcodeMetrikaCounter=function(){return r||(r=new Promise((function(e){(0,n(323).requestCounter)({id:42093449,enableCookies:!1},e)}))).then((function(e){var t=(0,n(36).getTestIds)();e.params(t);var r=(0,n(36).getFlagsIdsMap)();e.params(r)})),r}},262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEnv=void 0,t.getEnv=function(){return"production"}},323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.requestCounter=void 0;var r=(0,n(35).checkBundleType)(n(35).bundleTypes.SSP),o=(0,n(35).checkBundleType)(n(35).bundleTypes.mobileSdk),i=!r&&!o&&!0,a=n(360).MetrikaManager.getInstance((function(){return(0,n(16).getYa)()}),i);t.requestCounter=function(e,t){a.requestCounter(e,t)}},33:function(e,t,n){"use strict";function r(e){return void 0===e&&(e=window),Boolean(e.ampSeen)}Object.defineProperty(t,"__esModule",{value:!0}),t.isAMP=t.isAmp=void 0,t.isAmp=r,t.isAMP=r()},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateSessionId=void 0;t.generateSessionId=function(){return(1e6*(0,n(82).random)()).toFixed(0)+(new Date).valueOf().toString()}},346:function(e,t,n){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.pushMetrikaEvent=void 0;t.pushMetrikaEvent=(0,n(14).protect)("metrika::pushEvent",(function(e,t){var o=(0,n(183).get)(e,"Ya._metrika.dataLayer")||[];(0,n(184).set)(e,"Ya._metrika.dataLayer",o),o.push({ymetrikaEvent:{type:"params",parent:1,data:{__ym:r({},t)}}})}))},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasTouchEvents=void 0,t.hasTouchEvents=function(e){return"ontouchstart"in e}},35:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.checkBundleIsMobilSdk=t.checkBundleIsSSP=t.checkBundleType=t.saveBundleType=t.bundleTypes=void 0,function(e){e["SSP"]="ssp",e["mobileSdk"]="msdk",e["webView"]="webview"}(r=t.bundleTypes||(t.bundleTypes={}));function o(e){switch(e){case r.SSP:return(0,n(354).isSspPage)(window)||(0,n(16).getGlobalVariable)("bundleType")===e;default:return(0,n(16).getGlobalVariable)("bundleType")===e}}t.saveBundleType=function(e,t){var o,i=Number(null===(o=null==e?void 0:e.common)||void 0===o?void 0:o.sspId);if(i&&1e3!==i&&!t&&(0,n(20).traceLog)({sspId:i},"NO SSP BUNDLE INFO",100),(0,n(16).getGlobalVariable)("bundleType"))(0,n(250).logSspInfo)({def:"global",type:(0,n(16).getGlobalVariable)("bundleType"),sspId:i});else{var a=t?function(e){var t;switch(e){case"ssp":t=r.SSP;break;case"mobsdk":t=r.mobileSdk;break;case"viber":case"webview":t=r.webView;break;default:t=void 0}return t}(t):function(e){if(e&&e.common&&1===Number(e.common.isMobileSdk))return r.mobileSdk;return}(e);a&&((0,n(16).setGlobalVariable)("bundleType",a),(0,n(250).logSspInfo)({def:t?"config":"data",type:a,sspId:i}))}},t.checkBundleType=o,t.checkBundleIsSSP=function(){return o(r.SSP)},t.checkBundleIsMobilSdk=function(){return o(r.mobileSdk)}},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSspPage=void 0,t.isSspPage=function(e){return Boolean(e.YA_SSP_PAGE)}},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GogolLogger=t.STATS_LOG_URL=void 0,t.STATS_LOG_URL="https://log.strm.yandex.ru/log";var r=function(){function e(e){this.params=e}return e.prototype.config=function(e){this.loggerConfig=e},e.prototype.logGogolEvent=function(e){var r=e.name,o=e.probability,i=void 0===o?.01:o,a=this.params,s=a.version,u=a.vsid,c=a.rnd;if(c<i&&!(0,n(246).isLightHouse)()){var d="".concat(t.STATS_LOG_URL,"?PCODE=").concat(s,"&event=").concat(r),l=e,f=l.data,v=l.values,g=l.sensors,_=l.dailySensors,p=g&&(0,n(247).mapObjectValues)(g,(function(e){return"boolean"==typeof e?String(e):e})),E=_&&(0,n(247).mapObjectValues)(_,(function(e){return"boolean"==typeof e?String(e):e}));(0,n(79).request)({method:"POST",url:d,data:n.lv["json"].stringify({eventType:"event",service:"VAS",version:s,vsid:u,data:f,timestamp:Number(new Date),referrer:document.referrer,location:(0,n(69).getHref)(),vasVersion:(0,n(41).getVasVersion)(),isVideoADB:!1,eventName:r,sensors:p,dailySensors:E,values:v,rnd:c,loggerConfig:this.loggerConfig})})}},e}();t.GogolLogger=r},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VSID=void 0,t.VSID=(0,n(358).generateVSID)()},358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateVSID=t.PACKAGE_TYPE=t.DEFAULT_VSID_LENGTH=t.TIMESTAMP_PART_LENGTH=t.VERSION_PART_LENGTH=t.HEX_PART_LENGTH=t.ID_SEPARATOR=void 0,t.ID_SEPARATOR="x",t.HEX_PART_LENGTH=44,t.VERSION_PART_LENGTH=4,t.TIMESTAMP_PART_LENGTH=10,t.DEFAULT_VSID_LENGTH=64,t.PACKAGE_TYPE="VAS";var r=function(e){return(0,n(170).padLeft)(String(e%Math.pow(10,t.VERSION_PART_LENGTH)),t.VERSION_PART_LENGTH,"0")};t.generateVSID=function(e){return void 0===e&&(e=(0,n(41).getCodeVersion)()),[(0,n(104).generateHexString)(t.HEX_PART_LENGTH),t.PACKAGE_TYPE,r(e),(0,n(170).padLeft)(Date.now().toString().slice(0,t.TIMESTAMP_PART_LENGTH),t.TIMESTAMP_PART_LENGTH,"0")].join(t.ID_SEPARATOR)}},359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MetrikaLogger=void 0;var r=function(){function e(){}return e.prototype.log=function(e){if((0,n(42).isPercent)(1)){var t={};t[e.version]={},t[e.version][e.namespace]={},t[e.version][e.namespace][e.error.name]=e.error,(0,n(261).initPcodeMetrikaCounter)().then((function(e){e.hit(window.location.href,{params:t})}))}},e}();t.MetrikaLogger=r},36:function(e,t,n){"use strict";var r,o,i,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getUaasIsInternalNetwork=t.getUaasFlags=t.getTestIds=t.getFlagsIdsMap=t.getUaasConfig=t.setMeta=t.parseConfig=void 0;t.parseConfig=function(){var e={testIds:"",flags:{},flagsMap:{},isInternalNetwork:!1};try{e=n.lv["json"].parse(__UAAS_CFG__)}catch(e){}finally{if(e.isInternalNetwork){var t=(0,n(65).getPcodeAbFlags)();(0,n(112).isEmpty)(t)||(e.flags=a(a({},e.flags),t))}}return e};var s=(0,n(19).once)(t.parseConfig);t.setMeta=function(e){e.flags&&(r=e.flags),e.flagsMap&&(i=e.flagsMap),e.testIds&&(o=e.testIds)};t.getUaasConfig=function(){var e=s();return e.flags=r||e.flags,e.flagsMap=i||e.flagsMap,e.testIds=o||e.testIds,e},t.getFlagsIdsMap=(0,n(19).once)((function(){var e=(0,t.getUaasConfig)().flagsMap,r={};return(0,n(15).forOwn)(e,(function(e,t){(0,n(3).forEach)(e,(function(e){var n=e.testId;r[t]=n}))})),r})),t.getTestIds=(0,n(19).once)((function(){var e=(0,t.getUaasConfig)().testIds.split(";");return(0,n(8).map)(e,(function(e){return e.split(",")[0]}))}));t.getUaasFlags=function(){var e=s();return r||e.flags};t.getUaasIsInternalNetwork=function(){return s().isInternalNetwork}},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MetrikaManager=t.METRIKA_URL=t.metrikaCallbacksDict=void 0,t.metrikaCallbacksDict={Metrika:"yandex_metrika_callbacks",Metrika2:"yandex_metrika_callbacks2"};t.METRIKA_URL="https://mc.yandex.ru/metrika/watch.js";var r=function(){function e(e,r,o){var i=this;this.getYa=e,this.needLoadMetrika=r,this.loadMetrika=(0,n(19).once)((function(){i.needLoadMetrika&&!i.win.YA_TURBO_METRIKA&&(0,n(81).loadCustomScript)({src:t.METRIKA_URL,win:i.win})})),this.win=o||window,Boolean(e().Metrika)?this.metrikaName="Metrika":Boolean(e().Metrika2)?this.metrikaName="Metrika2":this.metrikaName="tag"===this.win.YA_TURBO_METRIKA?"Metrika2":"Metrika",this.metrikaCallbacksName=t.metrikaCallbacksDict[this.metrikaName]}return e.getInstance=function(t,r){return void 0===r&&(r=!0),"exp"===(0,n(1).useExperimentFlag)("DISABLE_METRIKA")&&(r=!1),this.instance||(this.instance=new e(t,r)),this.instance},e.prototype.requestCounter=function(e,t){var n=this;this.isLoaded()?t(this.getCounter(e)):(this.loadMetrika(),this.addCallback((function(){t(n.getCounter(e))})))},e.prototype.getCounter=function(e){var t="yaCounter"+e.id;return this.win[t]||(this.win[t]=this.createCounter(e)),this.win[t]},e.prototype.isLoaded=function(){return Boolean(this.getYa()[this.metrikaName])},e.prototype.addCallback=function(e){this.win[this.metrikaCallbacksName]||(this.win[this.metrikaCallbacksName]=[]),this.win[this.metrikaCallbacksName].push(e)},e.prototype.createCounter=function(e){var t=this.getYa()[this.metrikaName];if(!t)throw new Error("metrika counter creation error: ".concat(this.metrikaName," is not in context"));try{return new t({id:e.id,type:e.isYAN?1:void 0,defer:!0,nck:!e.enableCookies})}catch(e){throw new Error("metrika counter creation error: "+e.message)}},e}();t.MetrikaManager=r},361:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorCounter=void 0,r=n(362);var o=function(){function e(){this.initialized=!1,this.savedMsgs=[]}return e.prototype.init=function(){var e=this;return this.initialized||(this.initialized=!0,this.initPromise=new Promise((function(t,o){r((function(r){var o=(0,n(36).getUaasConfig)();e.logger=new r["default"],e.logger.initErrors({project:"pcode",version:String((0,n(41).getCodeVersion)()),env:(0,n(262).getEnv)(),reqid:(0,n(92).getSessionId)(),platform:n(228).isTouchDevice?"touch":"desktop",blocker:!1,additional:{bundle:"default",vasVersion:(0,n(41).getVasVersion)()},slots:o.testIds?o.testIds.split(";"):void 0,throttleSend:0,uncaughtException:!1,unhandledRejection:!1,preventError:!1}),e.savedCfg&&e.config(e.savedCfg),e.savedMsgs.forEach((function(t){return e.log(t)})),delete e.savedCfg,e.savedMsgs=[],t(e)}),(function(t){e.initialized=!1,o(t)}))}))),this.initPromise},e.prototype.config=function(e){this.logger?this.logger.updateErrors({page:e.labels.pageId||void 0,additional:{bundle:"default",pageId:e.data&&e.data.pageId}}):this.savedCfg=e},e.prototype.log=function(e){if(!this.logger)return this.savedMsgs.push(e),void this.init()["catch"](n(2).noop);var t={type:e.namespace,level:"WARNING"===e.type?"warn":"error"},r=e.additional,o=(0,n(1).getAllActiveTestIds)();o&&((r=r||{}).activeTestIds=o),(window.__sspbidreqid||window.__ssphitlogid)&&((r=r||{}).sspbidreqid=window.__sspbidreqid,r.ssphitlogid=window.__ssphitlogid),r&&(t.additional=r),this.logger.logError(t,e.error)},e}();t.ErrorCounter=o},362:function(e,t,n){e.exports=function(e,t){n.e(45).then(function(){e(n(548))}.bind(undefined,n)).catch((function(){t&&t.apply(this,arguments)}))}},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSession=void 0;t.getSession=function(e,t,r,o){var i=t.getItem(n(91).SESSION_KEY);return i||(i=r.getItem(n(91).SESSION_KEY)||e(),o(window,i)),t.setItem(n(91).SESSION_KEY,i),r.setItem(n(91).SESSION_KEY,i),i}},364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowDataSource=void 0;t.getWindowDataSource=function(e,t,r){var o=(0,n(183).get)(e,t);return o||(o=r(),(0,n(184).set)(e,t,o)),o}},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCrossFrameDataSource=void 0;t.getCrossFrameDataSource=function(e,t,r){var o;return(0,n(366).traverseBreadth)([e.top],(function(e){if(!(o=(0,n(14).callSafe)((function(){return(0,n(183).get)(e,t)}))))return(0,n(14).callSafe)((function(){return(0,n(139).listToArray)(e.frames)}))||[]})),o||(o=r()),(0,n(184).set)(e,t,o),o}},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.traverseBreadth=void 0;t.traverseBreadth=function(e,t){for(var n=e.slice();n.length;){var r=t(n.shift());if(!r)return;n.push.apply(n,r)}}},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setSession=void 0;t.setSession=function(e,t,r,o){o(window,e),t.setItem(n(91).SESSION_KEY,e),r.setItem(n(91).SESSION_KEY,e)}},368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasTouchPoints=void 0,t.hasTouchPoints=function(e){return function(e){return Boolean(e.PointerEvent)}(e)&&function(e){return(e.navigator||{}).maxTouchPoints||0}(e)>0}},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isMatchingAnyPointerCoarse=void 0;var r=(0,n(8).map)(n(67).cssPrefixes,(function(e){return"(".concat(e,"any-pointer:coarse)")})).join(",");t.isMatchingAnyPointerCoarse=function(e){return(0,n(253).isMatchingMediaQuery)(e,r)}},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isMatchingTouchEnabled=t.TOUCH_ENABLED_QUERY=void 0,t.TOUCH_ENABLED_QUERY=(0,n(8).map)(n(67).cssPrefixes,(function(e){return"(".concat(e,"touch-enabled)")})).join(","),t.isMatchingTouchEnabled=function(e){return(0,n(253).isMatchingMediaQuery)(e,t.TOUCH_ENABLED_QUERY)}},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasDocumentTouch=void 0,t.hasDocumentTouch=function(e){var t=e.DocumentTouch;return Boolean(t)&&e.document instanceof t}},372:function(e,t,n){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.TraceLoggerSlim=void 0;var o=function(){function e(e){void 0===e&&(e={}),this.defaultData=e}return e.prototype.clearDefaultSsrData=function(){this.defaultData={}},e.prototype.sendCsrEvent=function(e){if((0,n(25).isObject)(e)){var t=r(r(r({},this.defaultData),e),{is_ssr:!1,unixtime:this.getUnixtime()});this.sendEvent(t)}},e.prototype.sendEvent=function(e){var t={method:"POST",url:"//yandex.ru/ads/trace",data:this.prepareData(e)};(0,n(79).request)(t)},e.prototype.getUnixtime=function(){return Math.floor(Date.now()/1e3)},e.prototype.undefinedToNull=function(e){return(0,n(15).forOwn)(e,(function(t,n){void 0===e[n]&&(e[n]=null)})),e},e.prototype.prepareData=function(e){var t=this.undefinedToNull(e);return n.lv["json"].stringify(t).replace(/\\n/g,"\\$&")+"\n"},e}();t.TraceLoggerSlim=o},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.onUnload=t.UNLOAD_EVENTS=void 0,t.UNLOAD_EVENTS=["beforeunload","pagehide","unload"],t.onUnload=function(e,n){void 0===n&&(n=window);var r=function(){return t.UNLOAD_EVENTS.forEach((function(e){return n.removeEventListener(e,o)}))},o=function(t){"pagehide"===t.type&&t.persisted||(e(t),r())};return t.UNLOAD_EVENTS.forEach((function(e){return n.addEventListener(e,o)})),r}},41:function(e,t,n){"use strict";function r(){return 640356}Object.defineProperty(t,"__esModule",{value:!0}),t.getVasVersion=t.getRevisionNo=t.getCodeVersion=void 0,t.getCodeVersion=r,t.getRevisionNo=function(){return 356},t.getVasVersion=function(e){var t,r,o,i;if(void 0===e&&(e=window),(0,n(5).isFunction)(null===(r=null===(t=e.ya)||void 0===t?void 0:t.videoAd)||void 0===r?void 0:r.getModuleVersion))return null===(i=null===(o=e.ya)||void 0===o?void 0:o.videoAd)||void 0===i?void 0:i.getModuleVersion()}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPercent=t.fixPrecision=t.toFraction=void 0;function r(e){return o(e/100)}function o(e){return Number(e.toFixed(3))}t.toFraction=r,t.fixPrecision=o,t.isPercent=function(e){return Math.random()<r(e)}},548:function(e,t,n){function r(){var e;this.getSetting=function(e){var t=this._errorSettings[e];return null===t?null:t||""},function(e,t){var r={client:["690.2354",1e3,100,0],uncaught:["690.2361",100,10,0],external:["690.2854",100,10,0],script:["690.2609",100,10,0]},o={};t.ERROR_LEVEL={INFO:"info",DEBUG:"debug",WARN:"warn",ERROR:"error",FATAL:"fatal"},t._errorSettings={clck:"https://yandex.ru/clck/click",beacon:!0,project:"unknown",page:"",env:"",experiments:[],additional:{},platform:"",region:"",dc:"",service:"",level:"",version:"",yandexuid:"",coordinates_gp:"",referrer:"",preventError:!1,unhandledRejection:!1,uncaughtException:!0,debug:!1,limits:{},silent:{},filters:{},pageMaxAge:864e6,initTimestamp:+new Date};var i=!1;function a(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function s(e){return"boolean"==typeof e&&(e=+e),"number"==typeof e?e+"":null}t.initErrors=function(n){a(t._errorSettings,n),!i&&t._errorSettings["uncaughtException"]&&(!function(){if(e.addEventListener)e.addEventListener("error",u),"Promise"in e&&t._errorSettings.unhandledRejection&&e.addEventListener("unhandledrejection",(function(e){var t,n=e.reason,r={};n&&(n.stack&&n.message?t=n.message:"[object Event]"===(t=String(n))?t="event.type: "+n.type:"[object Object]"===t&&(r.unhandledObject=n),n.target&&n.target.src&&(r.src=n.target.src),u({message:"Unhandled rejection: "+t,stack:n.stack,additional:r}))}));else{var n=e.onerror;e.onerror=function(e,t,r,o,i){u({error:i||new Error(e||"Empty error"),message:e,lineno:r,colno:o,filename:t}),n&&n.apply(this,arguments)}}}(),i=!0)},t.updateErrors=function(e){a(t._errorSettings,e)},t._handleError=function(e,n){var i,a,s=t._errorSettings;if(s.preventError&&e.preventDefault&&e.preventDefault(),n)i=e,a="client";else{i=t._normalizeError(e),a=i.type;var u=s.onError;"function"==typeof u&&u(i);var c=s.transform;"function"==typeof c&&(i=c(i))}var d=+new Date,l=s.initTimestamp,f=s.pageMaxAge;if(!(-1!==f&&l&&l+f<d)){var v=r[a][1];"number"==typeof s.limits[a]&&(v=s.limits[a]);var g=r[a][2];"number"==typeof s.silent[a]&&(g=s.silent[a]);var _=r[a][3];if(_<v||-1===v){i.path=r[a][0];var p=t._getErrorData(i,{silent:_<g||-1===g?"no":"yes",isCustom:Boolean(n)},s),E=function(e){o[i.message]=!1,t._sendError(e.path,e.vars),r[a][3]++}.bind(this,p);if(void 0===s.throttleSend)E();else{if(o[i.message])return;o[i.message]=!0,setTimeout(E,s.throttleSend)}}}},t._getErrorData=function(t,r,o){r=r||{};var i="";try{var u=a(a({},o.additional),t.additional);0!==Object.keys(u).length&&(i=n.lv["json"].stringify(u))}catch(t){o.debug&&e.console&&console.error("[error-counter] json.stringify:",t)}var c=o.experiments instanceof Array?o.experiments.join(";"):"",d={"-stack":t.stack,"-url":t.file,"-line":t.line,"-col":t.col,"-block":t.block,"-method":t.method,"-msg":t.message,"-env":o.env,"-external":t.external,"-externalCustom":t.externalCustom,"-project":o.project,"-service":t.service||o.service,"-page":t.page||o.page,"-platform":o.platform,"-level":t.level,"-experiments":c,"-version":o.version,"-region":o.region,"-dc":o.dc,"-yandexuid":o.yandexuid,"-coordinates_gp":t.coordinates_gp||o.coordinates_gp,"-referrer":o.referrer,"-source":t.source,"-sourceMethod":t.sourceMethod,"-type":r.isCustom?t.type:"","-additional":i,"-adb":s(Ya.blocker)||s(o.blocker),"-cdn":e.YaStaticRegion,"-ua":navigator.userAgent,"-silent":r.silent,"-ts":+new Date,"-init-ts":o.initTimestamp};return o.debug&&e.console&&console[console[t.level]?t.level:"error"]("[error-counter] "+t.message,d,t.stack),{path:t.path,vars:d}},t._baseNormalizeError=function(e){var t=(e=e||{}).filename||e.fileName||"",n=e.error&&e.error.stack||e.stack||"",r=e.message||"";return{file:t,line:e.lineno||e.lineNumber,col:e.colno||e.colNumber,stack:n,message:r,additional:e.additional}},t._normalizeError=function(e){var n=t._baseNormalizeError(e),r="uncaught",o=t._isExternalError(n.file,n.message,n.stack),i="",a="";return o.hasExternal?(r="external",i=o.common,a=o.custom):/^Script error\.?$/.test(n.message)&&(r="script"),n.external=i,n.externalCustom=a,n.type=r,n},t._sendError=function(e,n){t.send(null,e,function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&(e[n]||0===e[n])&&t.push(n+"="+encodeURIComponent(e[n]).replace(/\*/g,"%2A"));return t.join(",")}(n),null,null,null,null)};var u=function(e){t._handleError(e,!1)}}("undefined"!=typeof self?self:window,this),(e=this).logError=function(t,n){t=t||{},"string"!=typeof n&&void 0!==n||((n=new Error(n)).justCreated=!0);var r=t.message||"",o=e._baseNormalizeError(n);o.message&&(r&&(r+="; "),r+=o.message),o.message=r||"Empty error";for(var i=["service","source","type","block","additional","level","page","method","sourceMethod","coordinates_gp"],a=0;a<i.length;a++){var s=i[a];t[s]?o[s]=t[s]:n&&n[s]&&(o[s]=n[s])}e._handleError(o,!0)},function(e){function t(){var t=e.getSetting("clck"),n=e.countersBatchData.join("\r\n");if((e.countersBatchData=[],e.counterTimerId=null,t)&&!(navigator.sendBeacon&&e.getSetting("beacon")&&navigator.sendBeacon(t,n)))if("undefined"!=typeof self&&self.fetch)fetch(t,{method:"POST",body:n});else{var r=new XMLHttpRequest;r.open("POST",t),r.send(n)}}e.countersBatchData=[],e.counterTimerId,e.send=function(n,r,o,i,a,s,u){clearTimeout(e.counterTimerId);var c=function(t,n,r,o,i,a){var s=e.getSetting("slots");return[a?"/"+a.join("/"):"","/path="+n,s?"/slots="+s.join(";"):"",r?"/vars="+r:"","/cts="+(new Date).getTime(),"/*"]}(0,r,o,0,0,u);e.countersBatchData.push("/reqid="+e.getSetting("reqid")+c.join("")),e.countersBatchData.length<42?e.counterTimerId=setTimeout(t,15):t()}}(this),function(e){var t={url:{0:/(miscellaneous|extension)_bindings/,1:/^chrome:/,2:/kaspersky-labs\.com\//,3:/^(?:moz|chrome)-extension:\/\//,4:/^file:/,5:/^resource:\/\//,6:/webnetc\.top/,7:/local\.adguard\.com/},message:{0:/__adgRemoveDirect/,1:/Content Security Policy/,2:/vid_mate_check/,3:/ucapi/,4:/Access is denied/i,5:/^Uncaught SecurityError/i,6:/__ybro/,7:/__show__deepen/,8:/ntp is not defined/,9:/Cannot set property 'install' of undefined/,10:/NS_ERROR/,11:/Error loading script/,12:/^TypeError: undefined is not a function$/,13:/__firefox__\.(?:favicons|metadata|reader|searchQueryForField|searchLoginField)/},stack:{0:/(?:moz|chrome)-extension:\/\//,1:/adguard.*\.user\.js/i}};function n(e,t){if(e&&t){var n=[];for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];"string"==typeof o&&(o=new RegExp(o)),o instanceof RegExp&&o.test(e)&&n.push(r)}return n.join("_")}}function r(e,r){var o,i=[];for(var a in t)t.hasOwnProperty(a)&&(o=n(e[a],r[a]))&&i.push(a+"~"+o);return i.join(";")}e._isExternalError=function(n,o,i){var a=e._errorSettings.filters||{},s={url:(n||"")+"",message:(o||"")+"",stack:(i||"")+""},u=r(s,t),c=r(s,a);return{common:u,custom:c,hasExternal:!(!u&&!c)}}}(this)}window.Ya=window.Ya||{},void 0!==e.exports?(e.exports=r,e.exports.default=r):window.Ya.ErrorLogger=r},65:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.debugConsoleEnabled=t.yaAdExternalDebugFlag=t.pcodeInternalDebugFlag=t.getPcodeInternalDebugFlag=t.getPcodeAbFlags=void 0;var o=(0,n(68).memoize)((function(e){return{search:(0,n(27).parseQueryString)(e.search),hash:(0,n(27).parseQueryString)(e.hash)}})),i=n(33).isAMP&&(null===(r=window.context)||void 0===r?void 0:r.location)||window.location,a=function(e){var t=e.paramName,n=e.location,r=void 0===n?window.location:n,i=e.valueTransform,a=void 0===i?function(e){return e}:i,s=o(r),u=s.search,c=s.hash;return a(t in u?u[t]:t in c?c[t]:null)};t.getPcodeAbFlags=function(e){void 0===e&&(e=i);var t={};null!==a({paramName:"pcode-test-flags",location:e})&&a({paramName:"pcode-test-flags",location:e}).split(";").forEach((function(e){var r=e.split("=");if(r[0]){var o=r[1];try{o=n.lv["json"].parse(o)}catch(e){}t[r[0]]=o}}));return t};t.getPcodeInternalDebugFlag=function(e){void 0===e&&(e=i);return a({paramName:"pcodeDebug",location:e,valueTransform:Boolean})||!1},t.pcodeInternalDebugFlag=(0,t.getPcodeInternalDebugFlag)();var s;t.yaAdExternalDebugFlag=(void 0===s&&(s=i),a({paramName:"ya_ad_debug",location:s,valueTransform:Boolean})),t.debugConsoleEnabled=a({paramName:"yan_console",location:i,valueTransform:function(e){return null!==e}})},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SESSION_KEY=void 0,t.SESSION_KEY="sessionId"},92:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.setSessionId=t.getSessionId=void 0;t.getSessionId=function(){return r||(r=(0,n(363).getSession)(n(340).generateSessionId,(0,n(251).getWindowStorage)("common"),(0,n(146).getCrossFrameStorage)("common"),n(248).configureMetrika)),r};t.setSessionId=function(e){r!==e&&((0,n(367).setSession)(e,(0,n(251).getWindowStorage)("common"),(0,n(146).getCrossFrameStorage)("common"),n(248).configureMetrika),r=e)}}}]);