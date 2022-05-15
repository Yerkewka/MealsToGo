import { useContext } from "react";
import { ListRenderItemInfo } from "react-native";
import styled from "styled-components/native";

import { Loader } from "../../../components/loader/Loader";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { Restaurant } from "../../../models/restaurant";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
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
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </SafeArea>
  );
};
