(self.webpackChunk_siteed_expo_audio_ui=self.webpackChunk_siteed_expo_audio_ui||[]).push([[417,568],{"./src/AudioVisualizer/AudioVisualizer.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.AudioVisualizer=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js")),_reactNativeLogger=__webpack_require__("../../node_modules/@siteed/react-native-logger/dist/logger.js"),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("../../node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_AudioVisualizers=__webpack_require__("./src/AudioVisualizer/AudioVisualizers.helpers.tsx"),_CanvasContainer=_interopRequireDefault(__webpack_require__("./src/AudioVisualizer/CanvasContainer.tsx")),_GestureHandler=__webpack_require__("./src/AudioVisualizer/GestureHandler.tsx"),_NavigationControls=_interopRequireDefault(__webpack_require__("./src/NavigationControls/NavigationControls.tsx")),_jsxRuntime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var initialState={ready:!1,triggerUpdate:0,canvasWidth:0,currentTime:void 0,hasInitialized:!1,selectedCandle:null,selectedIndex:-1},reducer=function reducer(state,action){return"UPDATE_STATE"===action.type?Object.assign({},state,action.state):state},logger=(0,_reactNativeLogger.getLogger)("AudioVisualizer");(exports.AudioVisualizer=function AudioVisualizer(_ref){var audioData=_ref.audioData,_ref$canvasHeight=_ref.canvasHeight,canvasHeight=void 0===_ref$canvasHeight?100:_ref$canvasHeight,_ref$candleWidth=_ref.candleWidth,candleWidth=void 0===_ref$candleWidth?3:_ref$candleWidth,fullCurrentTime=_ref.currentTime,_ref$candleSpace=_ref.candleSpace,candleSpace=void 0===_ref$candleSpace?2:_ref$candleSpace,_ref$playing=_ref.playing,playing=void 0!==_ref$playing&&_ref$playing,_ref$mode=_ref.mode,mode=void 0===_ref$mode?"static":_ref$mode,_ref$showRuler=_ref.showRuler,showRuler=void 0!==_ref$showRuler&&_ref$showRuler,_ref$showNavigation=_ref.showNavigation,showNavigation=void 0===_ref$showNavigation||_ref$showNavigation,_ref$showDottedLine=_ref.showDottedLine,showDottedLine=void 0===_ref$showDottedLine||_ref$showDottedLine,_ref$showSilence=_ref.showSilence,showSilence=void 0!==_ref$showSilence&&_ref$showSilence,_ref$showYAxis=_ref.showYAxis,showYAxis=void 0!==_ref$showYAxis&&_ref$showYAxis,onSeekEnd=_ref.onSeekEnd,onSelection=_ref.onSelection,font=_ref.font,customTheme=_ref.theme,CustomNavigationControls=_ref.NavigationControls,translateX=(0,_reactNativeReanimated.useSharedValue)(0),_useReducer=(0,_react.useReducer)(reducer,initialState),_useReducer2=(0,_slicedToArray2.default)(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1],ready=state.ready,triggerUpdate=state.triggerUpdate,canvasWidth=state.canvasWidth,currentTime=state.currentTime,hasInitialized=state.hasInitialized,selectedCandle=state.selectedCandle,selectedIndex=state.selectedIndex,handleLayout=(0,_react.useCallback)((function(event){var width=event.nativeEvent.layout.width;logger.log(`Layout width: ${width}`),dispatch({type:"UPDATE_STATE",state:{canvasWidth:width}})}),[]),referenceLineX=(0,_AudioVisualizers.calculateReferenceLinePosition)({canvasWidth,referenceLinePosition:"live"===mode?"RIGHT":"MIDDLE"}),maxDisplayedItems=Math.ceil(canvasWidth/(candleWidth+candleSpace)),maxTranslateX=audioData.dataPoints.length*(candleWidth+candleSpace),paddingLeft=canvasWidth/2,totalCandleWidth=audioData.dataPoints.length*(candleWidth+candleSpace),updateActivePointsResult=(0,_react.useRef)({activePoints:[],range:{start:0,end:0,startVisibleIndex:0,endVisibleIndex:0},lastUpdatedTranslateX:0}),theme=(0,_react.useMemo)((function(){var defaultTheme=(0,_AudioVisualizers.createDefaultTheme)(canvasWidth,referenceLineX);return Object.assign({},defaultTheme,customTheme)}),[canvasWidth,referenceLineX,customTheme]),NavigationControlsComponent=CustomNavigationControls||_NavigationControls.default;(0,_react.useEffect)((function(){if(0!==maxDisplayedItems&&!hasInitialized){if("live"!==mode){var initialActivePoints=new Array(3*maxDisplayedItems).fill({id:-1,amplitude:0,visible:!1});updateActivePointsResult.current=Object.assign({},updateActivePointsResult.current,{activePoints:initialActivePoints})}dispatch({type:"UPDATE_STATE",state:{hasInitialized:!0,ready:!0}})}}),[maxDisplayedItems,mode,hasInitialized]),(0,_react.useEffect)((function(){if(hasInitialized){var _updateActivePoints=(0,_AudioVisualizers.updateActivePoints)({x:translateX.value,context:{dataPoints:audioData.dataPoints,maxDisplayedItems,activePoints:updateActivePointsResult.current.activePoints,range:updateActivePointsResult.current.range,referenceLineX,mode,candleWidth,candleSpace}}),updatedActivePoints=_updateActivePoints.activePoints,updatedRange=_updateActivePoints.range,updatedLastUpdatedTranslateX=_updateActivePoints.lastUpdatedTranslateX;logger.log(`Updated active points: ${updatedActivePoints.length}`),updateActivePointsResult.current={activePoints:updatedActivePoints,range:updatedRange,lastUpdatedTranslateX:updatedLastUpdatedTranslateX},dispatch({type:"UPDATE_STATE",state:{triggerUpdate:triggerUpdate+1,selectedCandle:null,selectedIndex:-1}})}}),[audioData.dataPoints,dispatch,hasInitialized,maxDisplayedItems,canvasWidth]),(0,_react.useEffect)((function(){fullCurrentTime&&dispatch({type:"UPDATE_STATE",state:{currentTime:fullCurrentTime}})}),[fullCurrentTime]),(0,_react.useEffect)((function(){if(currentTime&&audioData.durationMs){logger.log(`Syncing translateX... currentTime=${currentTime}`);var newTranslateX=(0,_AudioVisualizers.syncTranslateX)({currentTime,durationMs:audioData.durationMs,maxTranslateX,minTranslateX:0,translateX}),movedDistance=Math.abs(newTranslateX-updateActivePointsResult.current.lastUpdatedTranslateX),translateXThreshold=canvasWidth;if(logger.log(`Moved distance: ${movedDistance} newTranslateX: ${newTranslateX} Threshold: ${translateXThreshold}`),movedDistance>=translateXThreshold){var _updateActivePoints2=(0,_AudioVisualizers.updateActivePoints)({x:newTranslateX,context:{dataPoints:audioData.dataPoints,maxDisplayedItems,activePoints:updateActivePointsResult.current.activePoints,referenceLineX,mode,range:updateActivePointsResult.current.range,candleWidth,candleSpace}}),updatedActivePoints=_updateActivePoints2.activePoints,updatedRange=_updateActivePoints2.range,updatedLastUpdatedTranslateX=_updateActivePoints2.lastUpdatedTranslateX;updateActivePointsResult.current={activePoints:updatedActivePoints,range:updatedRange,lastUpdatedTranslateX:updatedLastUpdatedTranslateX},dispatch({type:"UPDATE_STATE",state:{triggerUpdate:triggerUpdate+1}})}}}),[playing,currentTime,audioData.durationMs,canvasWidth,translateX]);var handleDragEnd=(0,_react.useCallback)((function(_ref2){var newTranslateX=_ref2.newTranslateX;if(audioData.durationMs&&onSeekEnd){var newTime=-newTranslateX/maxTranslateX*audioData.durationMs/1e3;onSeekEnd(newTime)}var _updateActivePoints3=(0,_AudioVisualizers.updateActivePoints)({x:newTranslateX,context:{dataPoints:audioData.dataPoints,maxDisplayedItems,activePoints:updateActivePointsResult.current.activePoints,referenceLineX,mode,range:updateActivePointsResult.current.range,candleWidth,candleSpace}}),updatedActivePoints=_updateActivePoints3.activePoints,updatedRange=_updateActivePoints3.range,updatedLastUpdatedTranslateX=_updateActivePoints3.lastUpdatedTranslateX;updateActivePointsResult.current={activePoints:updatedActivePoints,range:updatedRange,lastUpdatedTranslateX:updatedLastUpdatedTranslateX},dispatch({type:"UPDATE_STATE",state:{triggerUpdate:triggerUpdate+1}})}),[onSeekEnd,audioData.dataPoints,maxDisplayedItems]),handleSelectionChange=(0,_react.useCallback)((function(candle){var currentIndex=audioData.dataPoints.findIndex((function(point){return point.id===candle.id}));dispatch({type:"UPDATE_STATE",state:{selectedCandle:Object.assign({},candle,{visible:!0}),selectedIndex:currentIndex}}),null==onSelection||onSelection({dataPoint:candle,index:currentIndex})}),[onSelection,dispatch]),handlePrevNextSelection=(0,_react.useCallback)((function(direction){if(logger.debug(`[${direction}] Selected index: ${selectedIndex}`,selectedCandle),selectedCandle&&-1!==selectedIndex){var newIndex="prev"===direction?selectedIndex-1:selectedIndex+1;if(logger.debug(`New index: ${newIndex}`),!(newIndex<0||newIndex>=audioData.dataPoints.length)){var newSelectedCandle=audioData.dataPoints[newIndex];newSelectedCandle&&(dispatch({type:"UPDATE_STATE",state:{selectedCandle:Object.assign({},newSelectedCandle,{visible:!0}),selectedIndex:newIndex}}),logger.debug(`New selected candle: ${newSelectedCandle.id}`,onSelection),null==onSelection||onSelection({dataPoint:newSelectedCandle,index:newIndex}))}}}),[audioData.dataPoints,selectedIndex,selectedCandle,onSelection,dispatch]),handleReset=(0,_react.useCallback)((function(){translateX.value=0;var _updateActivePoints4=(0,_AudioVisualizers.updateActivePoints)({x:translateX.value,context:{dataPoints:audioData.dataPoints,maxDisplayedItems,activePoints:updateActivePointsResult.current.activePoints,range:updateActivePointsResult.current.range,referenceLineX,mode,candleWidth,candleSpace}}),updatedActivePoints=_updateActivePoints4.activePoints,updatedRange=_updateActivePoints4.range,updatedLastUpdatedTranslateX=_updateActivePoints4.lastUpdatedTranslateX;logger.log(`Updated active points: ${updatedActivePoints.length}`),updateActivePointsResult.current={activePoints:updatedActivePoints,range:updatedRange,lastUpdatedTranslateX:updatedLastUpdatedTranslateX};var newSelectedDataPoint=audioData.dataPoints[0];newSelectedDataPoint&&dispatch({type:"UPDATE_STATE",state:{selectedCandle:Object.assign({},newSelectedDataPoint,{visible:!0}),selectedIndex:0,triggerUpdate:Date.now()}})}),[dispatch]);return(0,_jsxRuntime.jsxs)(_View.default,{style:[theme.container,{marginTop:20}],onLayout:handleLayout,children:["live"!==mode&&showNavigation&&(0,_jsxRuntime.jsx)(NavigationControlsComponent,{selectedCandle,selectedIndex,audioData,theme,onPrev:function onPrev(){return handlePrevNextSelection("prev")},onNext:function onNext(){return handlePrevNextSelection("next")},onReset:handleReset}),(0,_jsxRuntime.jsx)(_GestureHandler.GestureHandler,{playing,mode,translateX,maxTranslateX,canvasWidth,candleWidth,candleSpace,totalCandleWidth,activePoints:updateActivePointsResult.current.activePoints,onDragEnd:handleDragEnd,onSelection:handleSelectionChange,children:(0,_jsxRuntime.jsx)(_View.default,{children:ready&&(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_CanvasContainer.default,{canvasHeight,candleWidth,candleSpace,showDottedLine,showYAxis,showRuler,showSilence,mode,font,startIndex:updateActivePointsResult.current.range.start,translateX,activePoints:updateActivePointsResult.current.activePoints,algorithm:audioData.amplitudeAlgorithm,maxDisplayedItems,paddingLeft,totalCandleWidth,canvasWidth,selectedCandle,onSelection:handleSelectionChange,durationMs:audioData.durationMs,minAmplitude:audioData.amplitudeRange.min,maxAmplitude:audioData.amplitudeRange.max,theme}),(0,_jsxRuntime.jsx)(_View.default,{style:theme.referenceLine})]})})})]})}).__docgenInfo={description:"",methods:[],displayName:"AudioVisualizer",props:{audioData:{required:!0,tsType:{name:"AudioAnalysis"},description:""},currentTime:{required:!1,tsType:{name:"number"},description:""},canvasHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},candleWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},candleSpace:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},showDottedLine:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showRuler:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showYAxis:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSilence:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},font:{required:!1,tsType:{name:"SkFont"},description:""},onSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"({\n    dataPoint,\n    index,\n}: {\n    dataPoint: DataPoint\n    index: number\n}) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n    dataPoint: DataPoint\n    index: number\n}",signature:{properties:[{key:"dataPoint",value:{name:"DataPoint",required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:""}],return:{name:"void"}}},description:""},mode:{required:!1,tsType:{name:"union",raw:"'static' | 'live'",elements:[{name:"literal",value:"'static'"},{name:"literal",value:"'live'"}]},description:"",defaultValue:{value:"'static'",computed:!1}},playing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSeekEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(newTime: number) => void",signature:{arguments:[{type:{name:"number"},name:"newTime"}],return:{name:"void"}}},description:""},theme:{required:!1,tsType:{name:"Partial",elements:[{name:"AudioVisualizerTheme"}],raw:"Partial<AudioVisualizerTheme>"},description:""},NavigationControls:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<NavigationControlsProps>",elements:[{name:"NavigationControlsProps"}]},description:""}}}},"./src/AudioVisualizer/GestureHandler.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.GestureHandler=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("../../node_modules/react/index.js")),_Platform=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Platform/index.js")),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_jsxRuntime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _worklet_15074780195039_init_data={code:"function anonymous(_e){const{initialTranslateX,translateX}=this.__closure;initialTranslateX.current=translateX.value;}"},_worklet_11556785601281_init_data={code:"function anonymous(e){const{translateX,maxTranslateX}=this.__closure;const newTranslateX=translateX.value+e.changeX;const clampedTranslateX=Math.max(-maxTranslateX,Math.min(0,newTranslateX));translateX.value=clampedTranslateX;}"},_worklet_10621825781431_init_data={code:"function anonymous(_e){const{runOnJS,onDragEnd,translateX}=this.__closure;runOnJS(onDragEnd)({newTranslateX:translateX.value});}"},_worklet_13261011667953_init_data={code:"function anonymous(event){const{onSelection,canvasWidth,translateX,totalCandleWidth,candleWidth,candleSpace,activePoints,runOnJS}=this.__closure;if(!onSelection){return;}const{x:x}=event;if(x<0||x>canvasWidth){return;}const plotStart=canvasWidth/2+translateX.value;const plotEnd=plotStart+totalCandleWidth;if(x<plotStart||x>plotEnd){return;}const adjustedX=x-plotStart;const index=Math.floor(adjustedX/(candleWidth+candleSpace));const candle=activePoints[index];if(!candle){return;}runOnJS(onSelection)(candle);}"};(exports.GestureHandler=function GestureHandler(_ref){var playing=_ref.playing,mode=_ref.mode,translateX=_ref.translateX,maxTranslateX=_ref.maxTranslateX,canvasWidth=_ref.canvasWidth,candleSpace=_ref.candleSpace,candleWidth=_ref.candleWidth,totalCandleWidth=_ref.totalCandleWidth,activePoints=_ref.activePoints,onDragEnd=_ref.onDragEnd,onSelection=_ref.onSelection,children=_ref.children,initialTranslateX=(0,_react.useRef)(0);if(playing||"live"===mode)return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children});var anonymous,panGesture=_reactNativeGestureHandler.Gesture.Pan().onStart((anonymous=function anonymous(_e){initialTranslateX.current=translateX.value},anonymous.__closure={initialTranslateX,translateX},anonymous.__workletHash=0xdb5deeb28df,anonymous.__initData=_worklet_15074780195039_init_data,anonymous)).onChange(function(){var anonymous=function anonymous(e){var newTranslateX=translateX.value+e.changeX,clampedTranslateX=Math.max(-maxTranslateX,Math.min(0,newTranslateX));translateX.value=clampedTranslateX};return anonymous.__closure={translateX,maxTranslateX},anonymous.__workletHash=0xa82c619bb01,anonymous.__initData=_worklet_11556785601281_init_data,anonymous}()).onEnd(function(){var anonymous=function anonymous(_e){(0,_reactNativeReanimated.runOnJS)(onDragEnd)({newTranslateX:translateX.value})};return anonymous.__closure={runOnJS:_reactNativeReanimated.runOnJS,onDragEnd,translateX},anonymous.__workletHash=0x9a916270eb7,anonymous.__initData=_worklet_10621825781431_init_data,anonymous}()),tapGesture=_reactNativeGestureHandler.Gesture.Tap().onEnd(function(){var anonymous=function anonymous(event){if(onSelection){var x=event.x;if(!(x<0||x>canvasWidth)){var plotStart=canvasWidth/2+translateX.value;if(!(x<plotStart||x>plotStart+totalCandleWidth)){var adjustedX=x-plotStart,index=Math.floor(adjustedX/(candleWidth+candleSpace)),candle=activePoints[index];candle&&(0,_reactNativeReanimated.runOnJS)(onSelection)(candle)}}}};return anonymous.__closure={onSelection,canvasWidth,translateX,totalCandleWidth,candleWidth,candleSpace,activePoints,runOnJS:_reactNativeReanimated.runOnJS},anonymous.__workletHash=0xc0f91e3cbf1,anonymous.__initData=_worklet_13261011667953_init_data,anonymous}()),composedGesture=_Platform.default.select({web:_reactNativeGestureHandler.Gesture.Race(panGesture,tapGesture),default:_reactNativeGestureHandler.Gesture.Race(panGesture)});return(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector,{gesture:composedGesture,children})}).__docgenInfo={description:"",methods:[],displayName:"GestureHandler",props:{playing:{required:!0,tsType:{name:"boolean"},description:""},mode:{required:!0,tsType:{name:"union",raw:"'static' | 'live'",elements:[{name:"literal",value:"'static'"},{name:"literal",value:"'live'"}]},description:""},canvasWidth:{required:!0,tsType:{name:"number"},description:""},candleWidth:{required:!0,tsType:{name:"number"},description:""},candleSpace:{required:!0,tsType:{name:"number"},description:""},totalCandleWidth:{required:!0,tsType:{name:"number"},description:""},translateX:{required:!0,tsType:{name:"SharedValue",elements:[{name:"number"}],raw:"SharedValue<number>"},description:""},maxTranslateX:{required:!0,tsType:{name:"number"},description:""},activePoints:{required:!0,tsType:{name:"Array",elements:[{name:"CandleData"}],raw:"CandleData[]"},description:""},onSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"(dataPoint: DataPoint) => void",signature:{arguments:[{type:{name:"DataPoint"},name:"dataPoint"}],return:{name:"void"}}},description:""},onDragEnd:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { newTranslateX: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ newTranslateX: number }",signature:{properties:[{key:"newTranslateX",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/NavigationControls/NavigationControls.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireDefault(__webpack_require__("../../node_modules/react/index.js"));var _Button=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Button/index.js")),_Text=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Text/index.js")),_View=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),NavigationControls=function NavigationControls(_ref){var selectedCandle=_ref.selectedCandle,selectedIndex=_ref.selectedIndex,audioData=_ref.audioData,onPrev=_ref.onPrev,onNext=_ref.onNext,onReset=_ref.onReset,theme=_ref.theme;return(0,_jsxRuntime.jsxs)(_View.default,{style:theme.navigationContainer,children:[(0,_jsxRuntime.jsxs)(_Text.default,{style:theme.text,children:[audioData.samples," samples"]}),(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row",justifyContent:"space-between",width:"100%"},children:[(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row",gap:10,alignItems:"center"},children:[(0,_jsxRuntime.jsx)(_Button.default,{title:"<",onPress:onPrev,disabled:!selectedCandle}),selectedCandle?(0,_jsxRuntime.jsx)(_Text.default,{style:theme.text,children:`${selectedIndex+1} / ${audioData.dataPoints.length}`}):(0,_jsxRuntime.jsxs)(_Text.default,{style:theme.text,children:[audioData.dataPoints.length," items"]}),(0,_jsxRuntime.jsx)(_Button.default,{title:">",onPress:onNext,disabled:!selectedCandle})]}),(0,_jsxRuntime.jsx)(_Button.default,{onPress:onReset,title:"Reset"})]})]})};exports.default=NavigationControls;NavigationControls.__docgenInfo={description:"",methods:[],displayName:"NavigationControls",props:{selectedCandle:{required:!0,tsType:{name:"union",raw:"DataPoint | null",elements:[{name:"DataPoint"},{name:"null"}]},description:""},selectedIndex:{required:!0,tsType:{name:"number"},description:""},audioData:{required:!0,tsType:{name:"AudioAnalysis"},description:""},onPrev:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},theme:{required:!0,tsType:{name:"AudioVisualizerTheme"},description:""}}}}}]);