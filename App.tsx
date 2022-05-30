import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

// Fonts
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

// Theme
import { theme } from "./src/infrastructure/theme";

// Context providers
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationsContextProvider } from "./src/services/locations/locations.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// Navigation
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <FavouritesContextProvider>
        <LocationsContextProvider>
          <RestaurantsContextProvider>
            <ThemeProvider theme={theme}>
              <PaperProvider>
                <Navigation />
                <ExpoStatusBar style="auto" />
              </PaperProvider>
            </ThemeProvider>
          </RestaurantsContextProvider>
        </LocationsContextProvider>
      </FavouritesContextProvider>
    </NavigationContainer>
  );
}
