import React, { createContext, useState } from "react";
import { Restaurant } from "../../models/restaurant";

interface FavouritesContext {
  favourites: Restaurant[];
  addToFavourites: (restaurant: Restaurant) => void;
  removeFromFavourites: (restaurant: Restaurant) => void;
}

export const FavouritesContext = createContext<FavouritesContext>({
  favourites: [],
  addToFavourites: console.log,
  removeFromFavourites: console.log,
});

export const FavouritesContextProvider: React.FC = ({ children }) => {
  const [favourites, setFavourites] = useState<Restaurant[]>([]);

  const addToFavourites = (restaurant: Restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = (restaurant: Restaurant) => {
    setFavourites(favourites.filter((f) => f.placeId !== restaurant.placeId));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
