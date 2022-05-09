import { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { CustomThemeProps } from "../../../infrastructure/theme";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View<CustomThemeProps>`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsListContainer = styled.View<CustomThemeProps>`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SearchContainer>
      <RestaurantsListContainer>
        <RestaurantInfoCard />
      </RestaurantsListContainer>
    </SafeArea>
  );
};
