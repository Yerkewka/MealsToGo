import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";

// Fonts
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </PaperProvider>
    </ThemeProvider>
  );
}
