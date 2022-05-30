import { useContext, useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

import { Restaurant } from "../../models/restaurant";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

interface Props {
  restaurant: Restaurant;
}

export const Favourite: React.FC<Props> = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = useMemo(
    () => favourites.find((r) => r.placeId === restaurant.placeId),
    [favourites, restaurant]
  );

  return (
    <FavouriteButton
      onPress={() =>
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        color={isFavourite ? "red" : "white"}
        size={24}
      />
    </FavouriteButton>
  );
};
