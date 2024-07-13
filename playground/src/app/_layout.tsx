// playground/src/app/_layout.tsx
import { MaterialIcons } from "@expo/vector-icons";
import { UIProvider } from "@siteed/design-system";
import { LoggerProvider } from "@siteed/react-native-logger";
import { useRouter } from "expo-router";
import { Stack } from "expo-router/stack";

import { AudioRecorderProvider } from "../../../src";
import { AudioFilesProvider } from "../context/AudioFilesProvider";
import { ApplicationContextProvider } from "../context/application-context";
export default function RootLayout() {
  const router = useRouter();

  return (
    <LoggerProvider>
      <ApplicationContextProvider debugMode>
        <AudioRecorderProvider config={{ debug: true }}>
          <UIProvider>
            <AudioFilesProvider>
              <Stack
                screenOptions={{
                  headerLeft: ({ label, canGoBack, tintColor }) => {
                    if (canGoBack) {
                      return (
                        <MaterialIcons
                          name="arrow-back-ios"
                          size={24}
                          color={tintColor}
                          onPress={() => router.back()}
                          style={{ paddingRight: 10, paddingLeft: 10 }}
                        />
                      );
                    } else {
                      return (
                        <MaterialIcons
                          name="home"
                          size={24}
                          color={tintColor}
                          onPress={() => router.navigate("/")}
                          style={{ paddingRight: 10, paddingLeft: 10 }}
                        />
                      );
                    }
                  },
                }}
              >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </AudioFilesProvider>
          </UIProvider>
        </AudioRecorderProvider>
      </ApplicationContextProvider>
    </LoggerProvider>
  );
}
