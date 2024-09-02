(self.webpackChunk_siteed_expo_audio_ui=self.webpackChunk_siteed_expo_audio_ui||[]).push([[34],{"../../node_modules/@siteed/react-native-logger/dist/logger.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{addLog:()=>addLog,clearLogs:()=>clearLogs,enabled:()=>enabled,getLogger:()=>getLogger,getLoggerConfig:()=>getLoggerConfig,getLogs:()=>getLogs,initializeDebugSettings:()=>initializeDebugSettings,reset:()=>logger_core_reset,setLoggerConfig:()=>setLoggerConfig,setNamespaces:()=>setNamespaces});const state={enabledNamespaces:[],logsArray:[],config:{maxLogs:100,namespaces:""},loggersMap:new Map},coerceToString=param=>{if(void 0===param)return"";if("string"==typeof param)return param;try{return JSON.stringify(param)}catch(e){return((obj,space)=>{const cache=new Set,result=JSON.stringify(obj,((_key,value)=>{if("object"==typeof value&&null!==value){if(cache.has(value))return"[Circular]";cache.add(value)}return value}),space);return cache.clear(),result})(param)}},addLog=({namespace,level,params=[]})=>{if(!enabled(namespace))return;const[message,...restParams]=params;let messageWithNamespace=`[${namespace}] `,hasStringMessage=!1;"string"==typeof message?(messageWithNamespace=`[${namespace}] ${message}`,hasStringMessage=!0):message instanceof Error&&(messageWithNamespace=`[${namespace}] ${message.stack??message.message}`,hasStringMessage=!0);const sParams=coerceToString(hasStringMessage?restParams:params),newLog={message:`[${level.toUpperCase()}] ${messageWithNamespace} ${sParams}`,namespace,timestamp:Date.now()};state.logsArray=[...state.logsArray,newLog],state.logsArray.length>state.config.maxLogs&&(state.logsArray=state.logsArray.slice(-state.config.maxLogs));const toLogParams=hasStringMessage?restParams:params;switch(level){case"debug":console.debug(messageWithNamespace,...toLogParams);break;case"info":console.info(messageWithNamespace,...toLogParams);break;case"warn":console.warn(messageWithNamespace,...toLogParams);break;case"error":console.error(messageWithNamespace,...toLogParams);break;default:console.log(messageWithNamespace,...toLogParams)}},enabled=namespace=>{for(const name of state.enabledNamespaces)if(namespace===name||namespace.startsWith(name.replace("*","")))return!0;return!1},setNamespaces=namespaces=>{const split=namespaces.split(/[\s,]+/);state.enabledNamespaces=[];for(const ns of split)ns&&state.enabledNamespaces.push(ns)},getLogs=()=>state.logsArray,clearLogs=()=>{state.logsArray=[]},logger_core_reset=()=>{clearLogs(),setLoggerConfig({maxLogs:100,namespaces:""}),initializeDebugSettings()},setLoggerConfig=newConfig=>{state.config={...state.config,...newConfig},void 0!==newConfig.namespaces&&setNamespaces(newConfig.namespaces)},getLoggerConfig=()=>state.config,getLogger=namespace=>{if(state.loggersMap.has(namespace))return state.loggersMap.get(namespace);const logger={log:(...params)=>addLog({namespace,level:"log",params}),info:(...params)=>addLog({namespace,level:"info",params}),debug:(...params)=>addLog({namespace,level:"debug",params}),warn:(...params)=>addLog({namespace,level:"warn",params}),error:(...params)=>addLog({namespace,level:"error",params}),extend:subNamespace=>getLogger(`${namespace}:${subNamespace}`)};return state.loggersMap.set(namespace,logger),logger},initializeDebugSettings=()=>{let debugSetting="";!{}.DEBUG?"undefined"!=typeof window&&window.localStorage&&(debugSetting=window.localStorage.getItem("DEBUG")||""):debugSetting={}.DEBUG,debugSetting&&(state.config.namespaces=debugSetting,setNamespaces(debugSetting))};initializeDebugSettings()},"../../node_modules/react-native-web/dist/exports/Button/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("../../node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_Text=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Text/index.js")),_warnOnce=__webpack_require__("../../node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var Button=React.forwardRef((function(props,forwardedRef){(0,_warnOnce.warnOnce)("Button","Button is deprecated. Please use Pressable.");var accessibilityLabel=props.accessibilityLabel,color=props.color,disabled=props.disabled,onPress=props.onPress,testID=props.testID,title=props.title;return React.createElement(_TouchableOpacity.default,{accessibilityLabel,accessibilityRole:"button",disabled,focusable:!disabled,onPress,ref:forwardedRef,style:[styles.button,color&&{backgroundColor:color},disabled&&styles.buttonDisabled],testID},React.createElement(_Text.default,{style:[styles.text,disabled&&styles.textDisabled]},title))}));Button.displayName="Button";var styles=_StyleSheet.default.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});exports.default=Button},"../../node_modules/react-native-web/dist/exports/TouchableOpacity/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("../../node_modules/react/index.js")),React=_react,_useMergeRefs=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePressEvents=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/modules/usePressEvents/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/View/index.js")),_warnOnce=__webpack_require__("../../node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _excluded=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];var styles=_StyleSheet.default.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),MemoedTouchableOpacity=React.memo(React.forwardRef((function TouchableOpacity(props,forwardedRef){(0,_warnOnce.warnOnce)("TouchableOpacity","TouchableOpacity is deprecated. Please use Pressable.");var activeOpacity=props.activeOpacity,delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,delayLongPress=props.delayLongPress,disabled=props.disabled,focusable=props.focusable,onLongPress=props.onLongPress,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,rejectResponderTermination=props.rejectResponderTermination,style=props.style,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded),hostRef=(0,_react.useRef)(null),setRef=(0,_useMergeRefs.default)(forwardedRef,hostRef),_useState=(0,_react.useState)("0s"),duration=_useState[0],setDuration=_useState[1],_useState2=(0,_react.useState)(null),opacityOverride=_useState2[0],setOpacityOverride=_useState2[1],setOpacityTo=(0,_react.useCallback)((function(value,duration){setOpacityOverride(value),setDuration(duration?duration/1e3+"s":"0s")}),[setOpacityOverride,setDuration]),setOpacityActive=(0,_react.useCallback)((function(duration){setOpacityTo(null!=activeOpacity?activeOpacity:.2,duration)}),[activeOpacity,setOpacityTo]),setOpacityInactive=(0,_react.useCallback)((function(duration){setOpacityTo(null,duration)}),[setOpacityTo]),pressConfig=(0,_react.useMemo)((function(){return{cancelable:!rejectResponderTermination,disabled,delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,onLongPress,onPress,onPressStart:function onPressStart(event){var isGrant=null!=event.dispatchConfig?"onResponderGrant"===event.dispatchConfig.registrationName:"keydown"===event.type;setOpacityActive(isGrant?0:150),null!=onPressIn&&onPressIn(event)},onPressEnd:function onPressEnd(event){setOpacityInactive(250),null!=onPressOut&&onPressOut(event)}}}),[delayLongPress,delayPressIn,delayPressOut,disabled,onLongPress,onPress,onPressIn,onPressOut,rejectResponderTermination,setOpacityActive,setOpacityInactive]),pressEventHandlers=(0,_usePressEvents.default)(hostRef,pressConfig);return React.createElement(_View.default,(0,_extends2.default)({},rest,pressEventHandlers,{accessibilityDisabled:disabled,focusable:!disabled&&!1!==focusable,pointerEvents:disabled?"box-none":void 0,ref:setRef,style:[styles.root,!disabled&&styles.actionable,style,null!=opacityOverride&&{opacity:opacityOverride},{transitionDuration:duration}]}))})));MemoedTouchableOpacity.displayName="TouchableOpacity";exports.default=MemoedTouchableOpacity},"../../node_modules/react-native-web/dist/modules/usePressEvents/PressResponder.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/createClass.js")),ERROR="ERROR",Transitions=Object.freeze({NOT_RESPONDER:{DELAY:ERROR,RESPONDER_GRANT:"RESPONDER_INACTIVE_PRESS_START",RESPONDER_RELEASE:ERROR,RESPONDER_TERMINATED:ERROR,LONG_PRESS_DETECTED:ERROR},RESPONDER_INACTIVE_PRESS_START:{DELAY:"RESPONDER_ACTIVE_PRESS_START",RESPONDER_GRANT:ERROR,RESPONDER_RELEASE:"NOT_RESPONDER",RESPONDER_TERMINATED:"NOT_RESPONDER",LONG_PRESS_DETECTED:ERROR},RESPONDER_ACTIVE_PRESS_START:{DELAY:ERROR,RESPONDER_GRANT:ERROR,RESPONDER_RELEASE:"NOT_RESPONDER",RESPONDER_TERMINATED:"NOT_RESPONDER",LONG_PRESS_DETECTED:"RESPONDER_ACTIVE_LONG_PRESS_START"},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:ERROR,RESPONDER_GRANT:ERROR,RESPONDER_RELEASE:"NOT_RESPONDER",RESPONDER_TERMINATED:"NOT_RESPONDER",LONG_PRESS_DETECTED:"RESPONDER_ACTIVE_LONG_PRESS_START"},ERROR:{DELAY:"NOT_RESPONDER",RESPONDER_GRANT:"RESPONDER_INACTIVE_PRESS_START",RESPONDER_RELEASE:"NOT_RESPONDER",RESPONDER_TERMINATED:"NOT_RESPONDER",LONG_PRESS_DETECTED:"NOT_RESPONDER"}}),getElementRole=function getElementRole(element){return element.getAttribute("role")},getElementType=function getElementType(element){return element.tagName.toLowerCase()},isActiveSignal=function isActiveSignal(signal){return"RESPONDER_ACTIVE_PRESS_START"===signal||"RESPONDER_ACTIVE_LONG_PRESS_START"===signal},isButtonRole=function isButtonRole(element){return"button"===getElementRole(element)},isPressStartSignal=function isPressStartSignal(signal){return"RESPONDER_INACTIVE_PRESS_START"===signal||"RESPONDER_ACTIVE_PRESS_START"===signal||"RESPONDER_ACTIVE_LONG_PRESS_START"===signal},isValidKeyPress=function isValidKeyPress(event){var key=event.key,target=event.target,isSpacebar=" "===key||"Spacebar"===key,isButtonish="button"===getElementType(target)||isButtonRole(target);return"Enter"===key||isSpacebar&&isButtonish};exports.default=(0,_createClass2.default)((function PressResponder(config){(0,_classCallCheck2.default)(this,PressResponder),this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState="NOT_RESPONDER",this._responderElement=null,this.configure(config)}),[{key:"configure",value:function configure(config){this._config=config}},{key:"reset",value:function reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}},{key:"getEventHandlers",value:function getEventHandlers(){return null==this._eventHandlers&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}},{key:"_createEventHandlers",value:function _createEventHandlers(){var _this=this,start=function start(event,shouldDelay){event.persist(),_this._cancelPressOutDelayTimeout(),_this._longPressDispatched=!1,_this._selectionTerminated=!1,_this._touchState="NOT_RESPONDER",_this._isPointerTouch="touchstart"===event.nativeEvent.type,_this._receiveSignal("RESPONDER_GRANT",event);var delayPressStart=normalizeDelay(_this._config.delayPressStart,0,50);!1!==shouldDelay&&delayPressStart>0?_this._pressDelayTimeout=setTimeout((function(){_this._receiveSignal("DELAY",event)}),delayPressStart):_this._receiveSignal("DELAY",event);var delayLongPress=normalizeDelay(_this._config.delayLongPress,10,450);_this._longPressDelayTimeout=setTimeout((function(){_this._handleLongPress(event)}),delayLongPress+delayPressStart)},end=function end(event){_this._receiveSignal("RESPONDER_RELEASE",event)},keyupHandler=function keyupHandler(event){var onPress=_this._config.onPress,target=event.target;if("NOT_RESPONDER"!==_this._touchState&&isValidKeyPress(event)){end(event),document.removeEventListener("keyup",keyupHandler);var role=target.getAttribute("role"),elementType=getElementType(target),isNativeInteractiveElement="link"===role||"a"===elementType||"button"===elementType||"input"===elementType||"select"===elementType||"textarea"===elementType,isActiveElement=_this._responderElement===target;null!=onPress&&!isNativeInteractiveElement&&isActiveElement&&onPress(event),_this._responderElement=null}};return{onStartShouldSetResponder:function onStartShouldSetResponder(event){var disabled=_this._config.disabled;return disabled&&isButtonRole(event.currentTarget)&&event.stopPropagation(),null==disabled||!disabled},onKeyDown:function onKeyDown(event){var disabled=_this._config.disabled,key=event.key,target=event.target;if(!disabled&&isValidKeyPress(event)){"NOT_RESPONDER"===_this._touchState&&(start(event,!1),_this._responderElement=target,document.addEventListener("keyup",keyupHandler));var isSpacebarKey=" "===key||"Spacebar"===key,role=getElementRole(target);isSpacebarKey&&("button"===role||"menuitem"===role)&&"button"!==getElementType(target)&&event.preventDefault(),event.stopPropagation()}},onResponderGrant:function onResponderGrant(event){return start(event)},onResponderMove:function onResponderMove(event){null!=_this._config.onPressMove&&_this._config.onPressMove(event);var touch=getTouchFromResponderEvent(event);if(null!=_this._touchActivatePosition){var deltaX=_this._touchActivatePosition.pageX-touch.pageX,deltaY=_this._touchActivatePosition.pageY-touch.pageY;Math.hypot(deltaX,deltaY)>10&&_this._cancelLongPressDelayTimeout()}},onResponderRelease:function onResponderRelease(event){return end(event)},onResponderTerminate:function onResponderTerminate(event){"selectionchange"===event.nativeEvent.type&&(_this._selectionTerminated=!0),_this._receiveSignal("RESPONDER_TERMINATED",event)},onResponderTerminationRequest:function onResponderTerminationRequest(event){var _this$_config=_this._config,cancelable=_this$_config.cancelable,disabled=_this$_config.disabled,onLongPress=_this$_config.onLongPress;return!(!disabled&&null!=onLongPress&&_this._isPointerTouch&&"contextmenu"===event.nativeEvent.type)&&(null==cancelable||cancelable)},onClick:function onClick(event){var _this$_config2=_this._config,disabled=_this$_config2.disabled,onPress=_this$_config2.onPress;disabled?isButtonRole(event.currentTarget)&&event.stopPropagation():(event.stopPropagation(),_this._longPressDispatched||_this._selectionTerminated?event.preventDefault():null!=onPress&&!1===event.altKey&&onPress(event))},onContextMenu:function onContextMenu(event){var _this$_config3=_this._config,disabled=_this$_config3.disabled,onLongPress=_this$_config3.onLongPress;disabled?isButtonRole(event.currentTarget)&&event.stopPropagation():null!=onLongPress&&_this._isPointerTouch&&!event.defaultPrevented&&(event.preventDefault(),event.stopPropagation())}}}},{key:"_receiveSignal",value:function _receiveSignal(signal,event){var prevState=this._touchState,nextState=null;null!=Transitions[prevState]&&(nextState=Transitions[prevState][signal]),"NOT_RESPONDER"===this._touchState&&"RESPONDER_RELEASE"===signal||(null==nextState||nextState===ERROR?console.error("PressResponder: Invalid signal "+signal+" for state "+prevState+" on responder"):prevState!==nextState&&(this._performTransitionSideEffects(prevState,nextState,signal,event),this._touchState=nextState))}},{key:"_performTransitionSideEffects",value:function _performTransitionSideEffects(prevState,nextState,signal,event){var _this2=this;if(function isTerminalSignal(signal){return"RESPONDER_TERMINATED"===signal||"RESPONDER_RELEASE"===signal}(signal)&&(setTimeout((function(){_this2._isPointerTouch=!1}),0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),isPressStartSignal(prevState)&&"LONG_PRESS_DETECTED"===signal){var onLongPress=this._config.onLongPress;null!=onLongPress&&null==event.nativeEvent.key&&(onLongPress(event),this._longPressDispatched=!0)}var isPrevActive=isActiveSignal(prevState),isNextActive=isActiveSignal(nextState);if(!isPrevActive&&isNextActive?this._activate(event):isPrevActive&&!isNextActive&&this._deactivate(event),isPressStartSignal(prevState)&&"RESPONDER_RELEASE"===signal){var _this$_config4=this._config,_onLongPress=_this$_config4.onLongPress;null!=_this$_config4.onPress&&(null!=_onLongPress&&"RESPONDER_ACTIVE_LONG_PRESS_START"===prevState||isNextActive||isPrevActive||(this._activate(event),this._deactivate(event)))}this._cancelPressDelayTimeout()}},{key:"_activate",value:function _activate(event){var _this$_config5=this._config,onPressChange=_this$_config5.onPressChange,onPressStart=_this$_config5.onPressStart,touch=getTouchFromResponderEvent(event);this._touchActivatePosition={pageX:touch.pageX,pageY:touch.pageY},null!=onPressStart&&onPressStart(event),null!=onPressChange&&onPressChange(!0)}},{key:"_deactivate",value:function _deactivate(event){var _this$_config6=this._config,onPressChange=_this$_config6.onPressChange,onPressEnd=_this$_config6.onPressEnd;function end(){null!=onPressEnd&&onPressEnd(event),null!=onPressChange&&onPressChange(!1)}var delayPressEnd=normalizeDelay(this._config.delayPressEnd);delayPressEnd>0?this._pressOutDelayTimeout=setTimeout((function(){end()}),delayPressEnd):end()}},{key:"_handleLongPress",value:function _handleLongPress(event){"RESPONDER_ACTIVE_PRESS_START"!==this._touchState&&"RESPONDER_ACTIVE_LONG_PRESS_START"!==this._touchState||this._receiveSignal("LONG_PRESS_DETECTED",event)}},{key:"_cancelLongPressDelayTimeout",value:function _cancelLongPressDelayTimeout(){null!=this._longPressDelayTimeout&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}},{key:"_cancelPressDelayTimeout",value:function _cancelPressDelayTimeout(){null!=this._pressDelayTimeout&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}},{key:"_cancelPressOutDelayTimeout",value:function _cancelPressOutDelayTimeout(){null!=this._pressOutDelayTimeout&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}]);function normalizeDelay(delay,min,fallback){return void 0===min&&(min=0),void 0===fallback&&(fallback=0),Math.max(min,null!=delay?delay:fallback)}function getTouchFromResponderEvent(event){var _event$nativeEvent=event.nativeEvent,changedTouches=_event$nativeEvent.changedTouches,touches=_event$nativeEvent.touches;return null!=touches&&touches.length>0?touches[0]:null!=changedTouches&&changedTouches.length>0?changedTouches[0]:event.nativeEvent}},"../../node_modules/react-native-web/dist/modules/usePressEvents/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function usePressEvents(hostRef,config){var pressResponderRef=(0,_react.useRef)(null);null==pressResponderRef.current&&(pressResponderRef.current=new _PressResponder.default(config));var pressResponder=pressResponderRef.current;return(0,_react.useEffect)((function(){pressResponder.configure(config)}),[config,pressResponder]),(0,_react.useEffect)((function(){return function(){pressResponder.reset()}}),[pressResponder]),(0,_react.useDebugValue)(config),pressResponder.getEventHandlers()};var _PressResponder=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/modules/usePressEvents/PressResponder.js")),_react=__webpack_require__("../../node_modules/react/index.js")}}]);