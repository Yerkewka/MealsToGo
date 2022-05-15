import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

// Navigators
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName = TAB_ICONS[route.name as keyof typeof TAB_ICONS];

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
