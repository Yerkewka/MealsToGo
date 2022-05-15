import React, { createContext, useState, useEffect, useContext } from "react";

import { Restaurant } from "../../models/restaurant";
import { LocationsContext } from "../locations/locations.context";
import { getRestaurants } from "./restaurants.service";

interface RestaurantsState {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: string;
}

export const RestaurantsContext = createContext<RestaurantsState>({
  restaurants: [],
  isLoading: false,
  error: "",
});

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { location } = useContext(LocationsContext);

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;

      fetchRestaurants(locationString);
    }
  }, [location]);

  const fetchRestaurants = async (locationString: string) => {
    try {
      setIsLoading(true);

      setRestaurants([]);

      const data = await getRestaurants(locationString);

      setRestaurants(data);
    } catch (err) {
      setError(err as string);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
