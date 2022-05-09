import styled from "styled-components/native";
import { Card } from "react-native-paper";

import { CustomThemeProps } from "../../../infrastructure/theme";

export const RestaurantCard = styled(Card)<CustomThemeProps>`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)<CustomThemeProps>`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardContent = styled.View<CustomThemeProps>`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View<CustomThemeProps>`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text<CustomThemeProps>`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Section = styled.View<CustomThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View<CustomThemeProps>`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image<CustomThemeProps>`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;
