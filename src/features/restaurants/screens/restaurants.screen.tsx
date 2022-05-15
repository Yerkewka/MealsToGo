import { useContext } from "react";
import { ListRenderItemInfo, TouchableOpacity } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";

import { Loader } from "../../../components/loader/Loader";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { Restaurant } from "../../../models/restaurant";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantStackParamsList } from "../../../infrastructure/navigation/restaurants.navigator";

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

type Props = NativeStackScreenProps<RestaurantStackParamsList, "List">;

export const RestaurantsScreen: React.FC<Props> = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <Loader />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }: ListRenderItemInfo<Restaurant>) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </SafeArea>
  );
};
