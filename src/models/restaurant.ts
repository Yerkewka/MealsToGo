import { Location } from "./location";

export interface Restaurant extends Location {
  placeId: string;
  name: string;
  icon: string;
  address: string;
  photos: string[];
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}
