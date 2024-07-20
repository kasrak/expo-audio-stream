"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[396],{1998:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=o(4848),r=o(8453);const t={id:"audio-recording",title:"AudioRecording",sidebar_label:"AudioRecording"},a="AudioRecording",s={id:"api-reference/audio-recording",title:"AudioRecording",description:"The AudioRecording interface represents the result of an audio recording. This result is obtained by calling the stopRecording function. It contains various details about the recording such as the file URI, duration, size, and more.",source:"@site/docs/api-reference/audio-recording.md",sourceDirName:"api-reference",slug:"/api-reference/audio-recording",permalink:"/expo-audio-stream/docs/api-reference/audio-recording",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"audio-recording",title:"AudioRecording",sidebar_label:"AudioRecording"},sidebar:"tutorialSidebar",previous:{title:"Recording Configuration",permalink:"/expo-audio-stream/docs/api-reference/recording-config"},next:{title:"AudioDataEvent",permalink:"/expo-audio-stream/docs/api-reference/audio-data-event"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Example Usage",id:"example-usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"audiorecording",children:"AudioRecording"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AudioRecording"})," interface represents the result of an audio recording. This result is obtained by calling the ",(0,i.jsx)(n.code,{children:"stopRecording"})," function. It contains various details about the recording such as the file URI, duration, size, and more."]}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface AudioRecording {\n    fileUri: string\n    filename: string\n    durationMs: number\n    size: number\n    mimeType: string\n    channels: number\n    bitDepth: BitDepth\n    sampleRate: SampleRate\n    wavPCMData?: ArrayBuffer // Full PCM data for the recording in WAV format (only on web, for native use the fileUri)\n    analysisData?: AudioAnalysis // Analysis data for the recording depending on enableProcessing flag\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useAudioRecorder } from '@siteed/expo-audio-stream';\n\nconst {\n    startRecording,\n    stopRecording,\n    isRecording,\n    durationMs,\n    size,\n} = useAudioRecorder({ debug: true });\n\nconst handleStop = async () => {\n    const result: AudioRecording = await stopRecording();\n    if (result) {\n        console.log('Recording stopped:', result);\n        console.log('File URI:', result.fileUri);\n        console.log('Duration (ms):', result.durationMs);\n        console.log('Size (bytes):', result.size);\n        console.log('MIME type:', result.mimeType);\n        console.log('Channels:', result.channels);\n        console.log('Bit depth:', result.bitDepth);\n        console.log('Sample rate:', result.sampleRate);\n        if (result.wavPCMData) {\n            console.log('WAV PCM Data:', result.wavPCMData);\n        }\n        if (result.analysisData) {\n            console.log('Analysis Data:', result.analysisData);\n        }\n    } else {\n        console.log('No recording result available.');\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var i=o(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);