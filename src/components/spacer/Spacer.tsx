import styled from "styled-components/native";

import { CustomThemeProps, ThemeType } from "../../infrastructure/theme";

type Position = "left" | "top" | "right" | "bottom";
type Size = "small" | "medium" | "large";

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

interface Props extends CustomThemeProps {
  position: Position;
  size: Size;
}

const getVariant = (position: Position, size: Size, theme: ThemeType) => {
  const sizeIndex = sizeVariants[size];
  const value = theme.space[sizeIndex];
  const property = `margin-${position}`;

  return `${property}:${value}`;
};

export const Spacer = styled.View<Props>`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
