import { NativeModulesProxy, EventEmitter, type Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAudioStream.web.ts
// and on native platforms to ExpoAudioStream.ts
import ExpoAudioStreamModule from './ExpoAudioStreamModule';
import { AudioEventPayload, RecordingOptions } from './ExpoAudioStream.types';
import { useAudioRecorder } from './useAudioRecording';

const emitter = new EventEmitter(ExpoAudioStreamModule ?? NativeModulesProxy.ExpoAudioStream);



// Function to get the recording duration
export function getRecordingDuration(): Promise<number> {
  return ExpoAudioStreamModule.getRecordingDuration();
}

export function listAudioFiles(): Promise<string[]> {
  return ExpoAudioStreamModule.listAudioFiles();
}

export function clearAudioFiles(): Promise<void> {
  return ExpoAudioStreamModule.clearAudioFiles();
}

export function addChangeListener(listener: (event: AudioEventPayload) => void): Subscription {
  return emitter.addListener<AudioEventPayload>('AudioData', listener);
}


export { AudioEventPayload, useAudioRecorder };
