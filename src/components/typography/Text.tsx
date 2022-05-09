import styled from "styled-components/native";
import { CustomThemeProps, ThemeType } from "../../infrastructure/theme";

const defaultStyles = (theme: ThemeType) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: ThemeType) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme: ThemeType) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme: ThemeType) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme: ThemeType) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: ThemeType) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  hint,
  error,
  caption,
  label,
};

interface Props extends CustomThemeProps {
  variant?: keyof typeof variants;
}

export const Text = styled.Text<Props>`
  ${({ theme }) => defaultStyles(theme)}
  ${({ variant = "body", theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
