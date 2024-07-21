"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[452],{8210:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=n(4848),i=n(8453);const s={id:"extract-audio-analysis",title:"extractAudioAnalysis",sidebar_label:"extractAudioAnalysis"},r="Extract Audio Analysis",o={id:"api-reference/audio-features/extract-audio-analysis",title:"extractAudioAnalysis",description:"The extractAudioAnalysis function is used to extract audio analysis data from a recording file. This function processes the audio data and returns an AudioAnalysis object. This information can be used to visualize audio, as demonstrated in the playground app.",source:"@site/docs/api-reference/audio-features/extract-audio-analysis.md",sourceDirName:"api-reference/audio-features",slug:"/api-reference/audio-features/extract-audio-analysis",permalink:"/expo-audio-stream/docs/api-reference/audio-features/extract-audio-analysis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"extract-audio-analysis",title:"extractAudioAnalysis",sidebar_label:"extractAudioAnalysis"},sidebar:"tutorialSidebar",previous:{title:"Audio Features",permalink:"/expo-audio-stream/docs/api-reference/audio-features/audio-analysis"},next:{title:"Playground Application",permalink:"/expo-audio-stream/docs/playground"}},u={},d=[{value:"Interface",id:"interface",level:2},{value:"Example Usage",id:"example-usage",level:2}];function l(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"extract-audio-analysis",children:"Extract Audio Analysis"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"extractAudioAnalysis"})," function is used to extract audio analysis data from a recording file. This function processes the audio data and returns an ",(0,t.jsx)(a.code,{children:"AudioAnalysis"})," object. This information can be used to visualize audio, as demonstrated in the playground app."]}),"\n",(0,t.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"export interface ExtractAudioAnalysisProps {\n    fileUri?: string // should provide either fileUri or arrayBuffer\n    wavMetadata?: WavFileInfo\n    arrayBuffer?: ArrayBuffer\n    bitDepth?: number\n    skipWavHeader?: boolean\n    durationMs?: number\n    sampleRate?: number\n    numberOfChannels?: number\n    algorithm?: 'peak' | 'rms'\n    position?: number // Optional number of bytes to skip. Default is 0\n    length?: number // Optional number of bytes to read.\n    pointsPerSecond?: number // Optional number of points per second. Use to reduce the number of points and compute the number of datapoints to return.\n    features?: AudioFeaturesOptions\n    featuresExtratorUrl?: string\n}\n\nexport const extractAudioAnalysis: (props: ExtractAudioAnalysisProps) => Promise<AudioAnalysis>\n"})}),"\n",(0,t.jsx)(a.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(a.p,{children:"Here\u2019s an example of how to use the extractAudioAnalysis function to extract audio analysis data from a file:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { extractAudioAnalysis } from '@siteed/expo-audio-stream';\n\nconst analysisProps = {\n    fileUri: 'path/to/audio/file.wav',\n    pointsPerSecond: 20,\n    sampleRate: 44100,\n    numberOfChannels: 1,\n    algorithm: 'rms',\n    features: {\n        energy: true,\n        rms: true,\n        zcr: true,\n    },\n};\n\nconst analysis = await extractAudioAnalysis(analysisProps);\nconsole.log('Audio Analysis:', analysis);\n\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"extractAudioAnalysis"})," function can be used to get detailed information from any audio file. This information can be useful for visualizing audio data, as demonstrated in the playground app."]})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>o});var t=n(6540);const i={},s=t.createContext(i);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);