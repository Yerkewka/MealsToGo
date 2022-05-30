import { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { LocationsContext } from "../../../services/locations/locations.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantStackParamsList } from "../../../infrastructure/navigation/restaurants.navigator";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-collout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

type Props = NativeStackScreenProps<RestaurantStackParamsList>;

export const MapScreen: React.FC<Props> = ({ navigation }) => {
  const { location } = useContext(LocationsContext);
  const { restaurants } = useContext(RestaurantsContext);

  const [latitudeDelta, setLatitudeDelta] = useState<number>(0);

  useEffect(() => {
    if (location) {
      const northEastLatitude = location.geometry.viewport.northeast.lat;
      const southWestLatitude = location.geometry.viewport.southwest.lat;

      setLatitudeDelta(northEastLatitude - southWestLatitude);
    }
  }, [location]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: location?.geometry.location.lat,
          longitude: location?.geometry.location.lng,
          latitudeDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() => navigation.navigate("Details", { restaurant })}
            >
              <MapCallout restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  );
};
