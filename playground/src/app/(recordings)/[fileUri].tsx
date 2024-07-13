// playground/src/app/(recordings)/[fileUri].tsx
import { Entypo } from "@expo/vector-icons";
import {
  AppTheme,
  ScreenWrapper,
  useBottomModal,
  useTheme,
  useToast,
} from "@siteed/design-system";
import { useLogger } from "@siteed/react-native-logger";
import {
  router,
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

import { AudioAnalysisData, extractAudioAnalysis } from "../../../../src";
import { AudioRecording } from "../../component/audio-recording/audio-recording";
import {
  AudioRecordingConfigForm,
  SelectedAudioVisualizerProps,
} from "../../component/audio-recording-config/audio-recording-config-form";
import { useAudioFiles } from "../../context/AudioFilesProvider";

const getStyles = (_: { theme: AppTheme }) => {
  return StyleSheet.create({
    container: {},
  });
};

export const FullAudioViewerPage = () => {
  const theme = useTheme();
  const { colors } = theme;

  const styles = useMemo(() => getStyles({ theme }), [theme]);
  const { logger } = useLogger("AudioRecording");
  const { show } = useToast();

  const local = useLocalSearchParams<{
    fileUri: string;
    tab?: string;
  }>();

  const { files, removeFile } = useAudioFiles();
  const [processing, setProcessing] = useState(false);

  const { fileUri } = local;
  const selectedFile = files.find((file) => file.fileUri === fileUri);
  const [audioAnalysis, setAudioAnalysis] = useState<AudioAnalysisData>();
  const navigator = useNavigation();

  const { openDrawer } = useBottomModal();

  const [config, setConfig] = useState<SelectedAudioVisualizerProps>({
    candleSpace: 2,
    candleWidth: 10,
    canvasHeight: 150,
  });

  useEffect(() => {
    // Set navbar title
    navigator.setOptions({
      headerShow: true,
      headerTitle: ({ tintColor }: { tintColor: string }) => {
        return (
          <Text style={{ fontSize: 16, fontWeight: "bold", color: tintColor }}>
            Analysis
          </Text>
        );
      },
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={async () => {
              await openDrawer({
                render: () => (
                  <AudioRecordingConfigForm
                    config={config}
                    onChange={setConfig}
                  />
                ),
              });
            }}
          >
            {({ pressed }) => (
              <Entypo
                name="sound-mix"
                size={25}
                style={{
                  marginRight: 15,
                  opacity: pressed ? 0.5 : 1,
                  color: pressed ? colors.primary : colors.text,
                }}
              />
            )}
          </Pressable>
        </View>
      ),
    });
  }, [navigator, selectedFile, logger, setConfig, openDrawer, show]);

  const extractAnalysis = useCallback(async () => {
    if (!selectedFile) return;
    setProcessing(true);
    try {
      const analysis = await extractAudioAnalysis({
        fileUri: selectedFile.webAudioUri ?? selectedFile.fileUri,
        pointsPerSecond: 20,
        bitDepth: selectedFile.bitDepth,
        durationMs: selectedFile.duration,
        sampleRate: selectedFile.sampleRate,
        numberOfChannels: selectedFile.channels,
        algorithm: "rms",
        features: {}, // Add necessary features here
      });
      setAudioAnalysis(analysis);
    } catch (error) {
      logger.error("Error extracting audio analysis:", error);
      show({ type: "error", message: "Failed to extract audio analysis" });
    } finally {
      setProcessing(false);
    }
  }, [selectedFile, logger, show]);

  useFocusEffect(
    useCallback(() => {
      if (!selectedFile) return;
      extractAnalysis();
    }, [selectedFile, extractAnalysis]),
  );

  return (
    <ScreenWrapper contentContainerStyle={styles.container}>
      {processing && <ActivityIndicator />}
      {selectedFile && (
        <AudioRecording
          recording={selectedFile}
          audioAnalysis={audioAnalysis}
          actionText="Refresh"
          visualConfig={config}
          onActionPress={extractAnalysis}
          onDelete={async () => {
            if (!selectedFile) return;
            await removeFile(selectedFile.fileUri);
            router.push("/files");
          }}
        />
      )}
    </ScreenWrapper>
  );
};

export default FullAudioViewerPage;
