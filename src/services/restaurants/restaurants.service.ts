import camelize from "camelize-ts";

import { mocks, mockImages } from "./mock";
import { Restaurant } from "../../models/restaurant";

export const getRestaurants = (location: string): Promise<Restaurant[]> => {
  return new Promise((resolve, reject) => {
    try {
      const { results } = mocks[location];

      resolve(
        camelize(
          results.map((restaurant: any, index: number) => {
            restaurant.photos = [mockImages[index % mockImages.length]];

            return {
              ...restaurant,
              isOpenNow:
                restaurant.opening_hours && restaurant.opening_hours.open_now,
              isClosedTemporarily:
                restaurant.business_status === "TEMPORARILY CLOSED",
              address: restaurant.vicinity,
            };
          })
        )
      );
    } catch (err) {
      reject([]);
    }
  });
};
