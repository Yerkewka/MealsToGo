import camelize from "camelize-ts";

import { Location, MapPoint } from "../../models/location";
import { locations } from "./mock/locations.mock";

export const getLocation = (searchTerm: string): Promise<MapPoint> => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];

    if (!location) {
      reject("Not found");
    }

    return resolve(transformLocation(location.results[0]));
  });
};

const transformLocation = (location: Location) => {
  return camelize(location).geometry.location;
};
