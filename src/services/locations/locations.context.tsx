import { createContext, useEffect, useState, useCallback } from "react";

import { MapPoint } from "../../models/location";
import { getLocation } from "./locations.service";

interface LocationsContext {
  searchTerm: string;
  location: MapPoint | null;
  isLoading: boolean;
  error: string;
  search: (keyword: string) => void;
}

export const LocationsContext = createContext<LocationsContext>({
  searchTerm: "",
  location: null,
  isLoading: false,
  error: "",
  search: console.log,
});

export const LocationsContextProvider: React.FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("san francisco");

  const [location, setLocation] = useState<MapPoint | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchLocations = useCallback(async (keyword: string) => {
    try {
      if (!keyword) {
        return;
      }

      setIsLoading(true);

      const result = await getLocation(keyword.toLowerCase());

      setLocation(result);
    } catch (err) {
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLocations(searchTerm);
  }, [searchTerm, fetchLocations]);

  return (
    <LocationsContext.Provider
      value={{
        location,
        isLoading,
        error,
        searchTerm,
        search: setSearchTerm,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
