import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

import { Restaurant } from "../../models/restaurant";

export type RestaurantStackParamsList = {
  List: undefined;
  Details: { restaurant: Restaurant };
};

const RestaurantStack = createNativeStackNavigator<RestaurantStackParamsList>();

export const RestaurantsNavigator: React.FC = () => {
  return (
    <RestaurantStack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="List" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="Details"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
