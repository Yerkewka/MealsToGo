import styled, { useTheme } from "styled-components/native";

import { CustomThemeProps, ThemeType } from "../../infrastructure/theme";

type Position = "left" | "top" | "right" | "bottom";
type Size = "small" | "medium" | "large";

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position: Position, size: Size, theme: ThemeType) => {
  const sizeIndex = sizeVariants[size];
  const value = theme.space[sizeIndex];
  const property = `margin-${position}`;

  return `${property}:${value}`;
};

interface ViewProps extends CustomThemeProps {
  variant: string;
}

const SpacerView = styled.View<ViewProps>`
  ${({ variant }) => variant}
`;

interface Props {
  position: Position;
  size: Size;
  children: JSX.Element;
}

export const Spacer: React.FC<Props> = ({
  position = "top",
  size = "small",
  children,
}) => {
  const theme = useTheme();

  const variant = getVariant(position, size, theme as ThemeType);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
