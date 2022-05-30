import { Restaurant } from "../../../models/restaurant";
import { CompactRestaurant } from "../../../components/restaurant/compact-restaurant-info.component";

interface Props {
  restaurant: Restaurant;
}

export const MapCallout: React.FC<Props> = ({ restaurant }) => {
  return <CompactRestaurant restaurant={restaurant} />;
};
