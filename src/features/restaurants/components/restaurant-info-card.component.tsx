import { SvgXml } from "react-native-svg";

import { Restaurant } from "../../../models/restaurant";
import starSVG from "../../../../assets/star";
import openSVG from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  RestaurantCardContent,
  Rating,
  Address,
  Icon,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

interface Props {
  restaurant: Restaurant;
}

export const RestaurantInfoCard: React.FC<Props> = ({ restaurant }) => {
  const {
    name = "Some restaurant",
    icon = "https://previews.123rf.com/images/sumberejeki/sumberejeki2007/sumberejeki200702595/151907453-.jpg",
    address = "100 some street name",
    photos = [
      "https://www.goodfood.com.au/content/dam/images/h/1/o/2/5/3/image.related.wideLandscape.460x259.h1o23z.png/1590640869107.jpg",
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingsArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <Text>{name}</Text>
        <Section>
          <Rating>
            {ratingsArray.map((_, index) => (
              <SvgXml key={index} xml={starSVG} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">TEMPORARILY CLOSED</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={openSVG} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
