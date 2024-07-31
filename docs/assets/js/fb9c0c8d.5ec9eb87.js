"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[4252],{465:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var s=r(4848),i=r(8453);const o={id:"use-audio-recorder",title:"useAudioRecorder",sidebar_label:"useAudioRecorder"},d="useAudioRecorder",t={id:"hooks/use-audio-recorder",title:"useAudioRecorder",description:"The useAudioRecorder hook provides methods and state for managing audio recording. It handles starting, stopping, pausing, and resuming recordings, and it provides analysis data for the recorded audio.",source:"@site/docs/hooks/use-audio-recorder.md",sourceDirName:"hooks",slug:"/hooks/use-audio-recorder",permalink:"/expo-audio-stream/docs/hooks/use-audio-recorder",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"use-audio-recorder",title:"useAudioRecorder",sidebar_label:"useAudioRecorder"},sidebar:"tutorialSidebar",previous:{title:"Shared Recording",permalink:"/expo-audio-stream/docs/usage/shared-recording"},next:{title:"API Intro",permalink:"/expo-audio-stream/docs/api-reference/api-intro"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"<code>debug</code> (optional)",id:"debug-optional",level:3},{value:"<code>audioWorkletUrl</code> (optional)",id:"audioworkleturl-optional",level:3},{value:"<code>featuresExtratorUrl</code> (optional)",id:"featuresextratorurl-optional",level:3},{value:"Usage",id:"usage",level:2},{value:"UseAudioRecorderState",id:"useaudiorecorderstate",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"useaudiorecorder",children:"useAudioRecorder"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useAudioRecorder"})," hook provides methods and state for managing audio recording. It handles starting, stopping, pausing, and resuming recordings, and it provides analysis data for the recorded audio."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.h3,{id:"debug-optional",children:[(0,s.jsx)(n.code,{children:"debug"})," (optional)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Enables or disables debug logging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"audioworkleturl-optional",children:[(0,s.jsx)(n.code,{children:"audioWorkletUrl"})," (optional)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": URL for the audio worklet (only for web). This parameter is primarily used during development or when you need to overwrite the default audio worklets. It allows you to specify a custom URL for the audio worklet script."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"featuresextratorurl-optional",children:[(0,s.jsx)(n.code,{children:"featuresExtratorUrl"})," (optional)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": URL for the features extractor (only for web). Similar to ",(0,s.jsx)(n.code,{children:"audioWorkletUrl"}),", this parameter is used during development or when you need to overwrite the default features extractor. It allows you to specify a custom URL for the features extractor script."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { useAudioRecorder } from \'@siteed/expo-audio-stream\'\n\nexport default function App() {\n    const {\n        startRecording,\n        stopRecording,\n        pauseRecording,\n        resumeRecording,\n        isRecording,\n        isPaused,\n        durationMs,\n        size,\n        analysisData,\n    } = useAudioRecorder({\n        debug: true,\n    })\n\n    const handleStart = async () => {\n        const { granted } = await Audio.requestPermissionsAsync()\n        if (granted) {\n            await startRecording({ interval: 500 })\n        }\n    }\n\n    const handleStop = async () => {\n        await stopRecording()\n    }\n\n    return (\n        <View>\n            <Button title="Request Permission" onPress={() => Audio.requestPermissionsAsync()} />\n            {isRecording ? (\n                <View>\n                    <Text>Duration: {durationMs} ms</Text>\n                    <Text>Size: {size} bytes</Text>\n                    <Button title="Stop Recording" onPress={handleStop} />\n                </View>\n            ) : (\n                <View>\n                    <Button title="Start Recording" onPress={handleStart} />\n                </View>\n            )}\n        </View>\n    )\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"useaudiorecorderstate",children:"UseAudioRecorderState"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useAudioRecorder"})," hook returns an object with the following properties:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"startRecording"}),": Function to start recording with the given configuration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"startRecording: (config: RecordingConfig) => Promise<StartRecordingResult>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"stopRecording"}),": Function to stop recording and get the result."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"stopRecording: () => Promise<AudioRecordingResult | null>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pauseRecording"}),": Function to pause the current recording."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"pauseRecording: () => void\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"resumeRecording"}),": Function to resume a paused recording."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"resumeRecording: () => void\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"isRecording"}),": ",(0,s.jsx)(n.code,{children:"boolean"})," - Indicates if recording is in progress."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"isPaused"}),": ",(0,s.jsx)(n.code,{children:"boolean"})," - Indicates if the recording is paused."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"durationMs"}),": ",(0,s.jsx)(n.code,{children:"number"})," - Duration of the recording in milliseconds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"size"}),": ",(0,s.jsx)(n.code,{children:"number"})," - Size of the recorded audio in bytes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"analysisData"}),": ",(0,s.jsx)(n.code,{children:"AudioAnalysis"})," - Analysis data for the recording. Only available if ",(0,s.jsx)(n.code,{children:"enableProcessing"})," is set to ",(0,s.jsx)(n.code,{children:"true"})," in the ",(0,s.jsx)(n.code,{children:"startRecording"})," configuration."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>t});var s=r(6540);const i={},o=s.createContext(i);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);