import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { CustomThemeProps } from "../../../infrastructure/theme";
import { Restaurant } from "../../../models/restaurant";

import starSVG from "../../../../assets/star";
import openSVG from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/Spacer";

const RestaurantCard = styled(Card)<CustomThemeProps>`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)<CustomThemeProps>`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Content = styled.View<CustomThemeProps>`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text<CustomThemeProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled.View<CustomThemeProps>`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text<CustomThemeProps>`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled.View<CustomThemeProps>`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View<CustomThemeProps>`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const TemporarilyClosed = styled.Text<CustomThemeProps>`
  color: ${(props) => props.theme.colors.text.error};
  text-transform: uppercase;
`;

const RestaurantIcon = styled.Image<CustomThemeProps>`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

interface Props {
  restaurant?: Restaurant;
}

export const RestaurantInfoCard: React.FC<Props> = ({ restaurant = {} }) => {
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
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Content>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingsArray.map((_, index) => (
              <SvgXml key={index} xml={starSVG} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <TemporarilyClosed>Temporarily closed</TemporarilyClosed>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={openSVG} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <RestaurantIcon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Content>
    </RestaurantCard>
  );
};
