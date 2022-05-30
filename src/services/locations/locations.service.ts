import camelize from "camelize-ts";

import { Location } from "../../models/location";
import { locations } from "./mock/locations.mock";

export const getLocation = (searchTerm: string): Promise<Location> => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];

    if (!location) {
      reject("Not found");
    }

    return resolve(camelize(location.results[0]));
  });
};
