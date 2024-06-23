import { Platform, Subscription } from "expo-modules-core";
import { useCallback, useEffect, useReducer, useRef } from "react";

import { addAudioAnalysisListener, addAudioEventListener } from ".";
import {
  AudioAnalysisData,
  AudioDataEvent,
  AudioEventPayload,
  AudioStreamResult,
  AudioStreamStatus,
  RecordingConfig,
  StartAudioStreamResult,
} from "./ExpoAudioStream.types";
import ExpoAudioStreamModule from "./ExpoAudioStreamModule";
import { WavFileInfo } from "./utils";

const MAX_VISUALIZATION_DURATION_MS = 10000; // Default maximum duration for visualization

export interface ExtractMetadataProps {
  fileUri: string;
  wavMetadata?: WavFileInfo;
  arrayBuffer?: ArrayBuffer;
  algorithm?: "peak" | "rms";
  position?: number; // Optional number of bytes to skip. Default is 0
  length?: number; // Optional number of bytes to read.
  pointsPerSecond?: number; // Optional number of points per second. Use to reduce the number of points and compute the number of datapoints to return.
}

export interface UseAudioRecorderProps {
  debug?: boolean;
}
export interface UseAudioRecorderState {
  startRecording: (_: RecordingConfig) => Promise<StartAudioStreamResult>;
  stopRecording: () => Promise<AudioStreamResult | null>;
  pauseRecording: () => void;
  resumeRecording: () => void;
  isRecording: boolean;
  isPaused: boolean;
  duration: number; // Duration of the recording
  size: number; // Size in bytes of the recorded audio
  analysisData?: AudioAnalysisData;
}

interface RecorderState {
  isRecording: boolean;
  isPaused: boolean;
  duration: number;
  size: number;
  analysisData?: AudioAnalysisData;
}

type RecorderAction =
  | { type: "START" | "STOP" | "PAUSE" | "RESUME" }
  | { type: "UPDATE_STATUS"; payload: { duration: number; size: number } }
  | { type: "UPDATE_ANALYSIS"; payload: AudioAnalysisData };

function recorderReducer(
  state: RecorderState,
  action: RecorderAction,
): RecorderState {
  switch (action.type) {
    case "START":
      return {
        ...state,
        isRecording: true,
        isPaused: false,
        duration: 0,
        size: 0,
      };
    case "STOP":
      return { ...state, isRecording: false, isPaused: false };
    case "PAUSE":
      return { ...state, isPaused: true, isRecording: false };
    case "RESUME":
      return { ...state, isPaused: false, isRecording: true };
    case "UPDATE_STATUS":
      return {
        ...state,
        duration: action.payload.duration,
        size: action.payload.size,
      };
    case "UPDATE_ANALYSIS":
      return {
        ...state,
        analysisData: action.payload,
      };
    default:
      return state;
  }
}
const TAG = "[ useAudioRecorder ] ";

export function useAudioRecorder({
  debug = false,
}: UseAudioRecorderProps = {}): UseAudioRecorderState {
  const [state, dispatch] = useReducer(recorderReducer, {
    isRecording: false,
    isPaused: false,
    duration: 0,
    size: 0,
    analysisData: undefined,
  });

  const analysisListenerRef = useRef<Subscription | null>(null);

  const audioAnalysisData = useRef<AudioAnalysisData>({
    pointsPerSecond: 20,
    bitDepth: 32,
    numberOfChannels: 1,
    sampleRate: 44100,
    dataPoints: [],
    amplitudeRange: {
      min: Number.MAX_VALUE,
      max: Number.MIN_VALUE,
    },
  });

  const onAudioStreamRef = useRef<
    ((_: AudioDataEvent) => Promise<void>) | null
  >(null);

  const logDebug = useCallback(
    (message: string, data?: any) => {
      if (debug) {
        if (data) {
          console.log(`${TAG} ${message}`, data);
        } else {
          console.log(`${TAG} ${message}`);
        }
      }
    },
    [debug],
  );

  const handleAudioAnalysis = useCallback(
    async (analysis: AudioAnalysisData, visualizationDuration: number) => {
      const analysisData = audioAnalysisData.current;
      const maxDuration = visualizationDuration;
      const newDurationMs =
        (analysisData.durationMs || 0) + (analysis.durationMs || 0);

      // Combine data points
      analysisData.dataPoints = [
        ...analysisData.dataPoints,
        ...analysis.dataPoints,
      ];

      // Trim data points to keep within the maximum duration
      let totalDuration = newDurationMs;
      while (
        totalDuration > maxDuration &&
        analysisData.dataPoints.length > 0
      ) {
        const removedPoint = analysisData.dataPoints.shift();
        totalDuration -= removedPoint ? 1000 / analysis.pointsPerSecond : 0;
      }

      analysisData.durationMs = totalDuration;

      // Update amplitude range
      analysisData.amplitudeRange.min = Math.min(
        analysisData.amplitudeRange.min,
        analysis.amplitudeRange.min,
      );
      analysisData.amplitudeRange.max = Math.max(
        analysisData.amplitudeRange.max,
        analysis.amplitudeRange.max,
      );

      // Dispatch the updated analysis data
      dispatch({ type: "UPDATE_ANALYSIS", payload: { ...analysisData } });
    },
    [logDebug],
  );

  const handleAudioEvent = useCallback(
    async (eventData: AudioEventPayload) => {
      const {
        fileUri,
        deltaSize,
        totalSize,
        lastEmittedSize,
        position,
        streamUuid,
        encoded,
        mimeType,
        buffer,
      } = eventData;
      logDebug(`[handleAudioEvent] Received audio event:`, {
        fileUri,
        deltaSize,
        totalSize,
        position,
        mimeType,
        lastEmittedSize,
        streamUuid,
        encodedLength: encoded?.length,
      });
      if (deltaSize === 0) {
        // Ignore packet with no data
        return;
      }
      try {
        // Coming from native ( ios / android ) otherwise buffer is set
        if (Platform.OS !== "web") {
          // Read the audio file as a base64 string for comparison
          if (!encoded) {
            console.error(`${TAG} Encoded audio data is missing`);
            throw new Error("Encoded audio data is missing");
          }
          onAudioStreamRef.current?.({
            data: encoded,
            position,
            fileUri,
            eventDataSize: deltaSize,
            totalSize,
          });
        } else if (buffer) {
          // Coming from web
          onAudioStreamRef.current?.({
            data: buffer,
            position,
            fileUri,
            eventDataSize: deltaSize,
            totalSize,
          });
        }
      } catch (error) {
        console.error(`${TAG} Error processing audio event:`, error);
      }
    },
    [logDebug],
  );

  const checkStatus = useCallback(async () => {
    try {
      if (!state.isRecording) {
        logDebug(`${TAG} Not recording, exiting status check.`);
        return;
      }

      const status: AudioStreamStatus = ExpoAudioStreamModule.status();
      if (debug) {
        logDebug(`${TAG} Status:`, status);
      }

      if (!status.isRecording) {
        dispatch({ type: "STOP" });
      } else {
        dispatch({
          type: "UPDATE_STATUS",
          payload: { duration: status.duration, size: status.size },
        });
      }
    } catch (error) {
      console.error(`${TAG} Error getting status:`, error);
    }
  }, [state.isRecording, logDebug]);

  useEffect(() => {
    let interval: number;
    if (state.isRecording) {
      interval = setInterval(checkStatus, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [checkStatus, state.isRecording]);

  useEffect(() => {
    logDebug(`Registering audio event listener`);
    const subscribeAudio = addAudioEventListener(handleAudioEvent);

    logDebug(`Subscribed to audio event listener and analysis listener`, {
      subscribeAudio,
    });

    return () => {
      logDebug(`Removing audio event listener`);
      subscribeAudio.remove();
    };
  }, [handleAudioEvent, handleAudioAnalysis, logDebug]);

  const startRecording = useCallback(
    async (recordingOptions: RecordingConfig) => {
      if (debug) {
        logDebug(`start recoding`, recordingOptions);
      }

      const { onAudioStream, ...options } = recordingOptions;
      const { maxRecentDataDuration = 10000, enableProcessing } = options;
      if (typeof onAudioStream === "function") {
        onAudioStreamRef.current = onAudioStream;
      } else {
        console.warn(`${TAG} onAudioStream is not a function`, onAudioStream);
        onAudioStreamRef.current = null;
      }
      const startResult: StartAudioStreamResult =
        await ExpoAudioStreamModule.startRecording(options);
      dispatch({ type: "START" });

      if (enableProcessing) {
        const listener = addAudioAnalysisListener(async (analysisData) => {
          await handleAudioAnalysis(analysisData, maxRecentDataDuration);
        });

        analysisListenerRef.current = listener;
      }

      return startResult;
    },
    [logDebug],
  );

  const stopRecording = useCallback(async () => {
    logDebug(`${TAG} stoping recording`);

    if (analysisListenerRef.current) {
      analysisListenerRef.current.remove();
      analysisListenerRef.current = null;
    }

    const stopResult: AudioStreamResult =
      await ExpoAudioStreamModule.stopRecording();
    onAudioStreamRef.current = null;
    logDebug(`${TAG} recording stopped`, stopResult);
    dispatch({ type: "STOP" });
    return stopResult;
  }, [logDebug]);

  const pauseRecording = useCallback(async () => {
    logDebug(`${TAG} pause recording`);
    const pauseResult = await ExpoAudioStreamModule.pauseRecording();
    dispatch({ type: "PAUSE" });
    return pauseResult;
  }, [logDebug]);

  const resumeRecording = useCallback(async () => {
    logDebug(`${TAG} resume recording`);
    const resumeResult = await ExpoAudioStreamModule.resumeRecording();
    dispatch({ type: "RESUME" });
    return resumeResult;
  }, [logDebug]);

  return {
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    isPaused: state.isPaused,
    isRecording: state.isRecording,
    duration: state.duration,
    size: state.size,
    analysisData: state.analysisData,
  };
}
