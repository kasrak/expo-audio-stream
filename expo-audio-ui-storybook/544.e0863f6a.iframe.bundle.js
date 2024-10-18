/*! For license information please see 544.e0863f6a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_siteed_expo_audio_ui=self.webpackChunk_siteed_expo_audio_ui||[]).push([[544],{"./node_modules/@siteed/react-native-logger/dist/logger.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{addLog:()=>addLog,clearLogs:()=>clearLogs,enabled:()=>enabled,getLogger:()=>getLogger,getLoggerConfig:()=>getLoggerConfig,getLogs:()=>getLogs,initializeDebugSettings:()=>initializeDebugSettings,reset:()=>logger_core_reset,setLoggerConfig:()=>setLoggerConfig,setNamespaces:()=>setNamespaces});const state={enabledNamespaces:[],logsArray:[],config:{maxLogs:100,namespaces:""},loggersMap:new Map},coerceToString=param=>{if(void 0===param)return"";if("string"==typeof param)return param;try{return JSON.stringify(param)}catch(e){return((obj,space)=>{const cache=new Set,result=JSON.stringify(obj,((_key,value)=>{if("object"==typeof value&&null!==value){if(cache.has(value))return"[Circular]";cache.add(value)}return value}),space);return cache.clear(),result})(param)}},addLog=({namespace,level,params=[]})=>{if(!enabled(namespace))return;const[message,...restParams]=params;let messageWithNamespace=`[${namespace}] `,hasStringMessage=!1;"string"==typeof message?(messageWithNamespace=`[${namespace}] ${message}`,hasStringMessage=!0):message instanceof Error&&(messageWithNamespace=`[${namespace}] ${message.stack??message.message}`,hasStringMessage=!0);const sParams=coerceToString(hasStringMessage?restParams:params),newLog={message:`[${level.toUpperCase()}] ${messageWithNamespace} ${sParams}`,namespace,timestamp:Date.now()};state.logsArray=[...state.logsArray,newLog],state.logsArray.length>state.config.maxLogs&&(state.logsArray=state.logsArray.slice(-state.config.maxLogs));const toLogParams=hasStringMessage?restParams:params;switch(level){case"debug":console.debug(messageWithNamespace,...toLogParams);break;case"info":console.info(messageWithNamespace,...toLogParams);break;case"warn":console.warn(messageWithNamespace,...toLogParams);break;case"error":console.error(messageWithNamespace,...toLogParams);break;default:console.log(messageWithNamespace,...toLogParams)}},enabled=namespace=>{for(const name of state.enabledNamespaces)if(namespace===name||namespace.startsWith(name.replace("*","")))return!0;return!1},setNamespaces=namespaces=>{const split=namespaces.split(/[\s,]+/);state.enabledNamespaces=[];for(const ns of split)ns&&state.enabledNamespaces.push(ns)},getLogs=()=>state.logsArray,clearLogs=()=>{state.logsArray=[]},logger_core_reset=()=>{clearLogs(),setLoggerConfig({maxLogs:100,namespaces:""}),initializeDebugSettings()},setLoggerConfig=newConfig=>{state.config={...state.config,...newConfig},void 0!==newConfig.namespaces&&setNamespaces(newConfig.namespaces)},getLoggerConfig=()=>state.config,getLogger=namespace=>{if(state.loggersMap.has(namespace))return state.loggersMap.get(namespace);const logger={log:(...params)=>addLog({namespace,level:"log",params}),info:(...params)=>addLog({namespace,level:"info",params}),debug:(...params)=>addLog({namespace,level:"debug",params}),warn:(...params)=>addLog({namespace,level:"warn",params}),error:(...params)=>addLog({namespace,level:"error",params}),extend:subNamespace=>getLogger(`${namespace}:${subNamespace}`)};return state.loggersMap.set(namespace,logger),logger},initializeDebugSettings=()=>{let debugSetting="";!{}.DEBUG?"undefined"!=typeof window&&window.localStorage&&(debugSetting=window.localStorage.getItem("DEBUG")||""):debugSetting={}.DEBUG,debugSetting&&(state.config.namespaces=debugSetting,setNamespaces(debugSetting))};initializeDebugSettings()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);