import { useState } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { RestaurantStackParamsList } from "../../../infrastructure/navigation/restaurants.navigator";

const Title = styled.Text``;

type Props = NativeStackScreenProps<RestaurantStackParamsList, "Details">;

export const RestaurantDetailsScreen: React.FC<Props> = ({ route }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={route.params.restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mashroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mashrooms" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
