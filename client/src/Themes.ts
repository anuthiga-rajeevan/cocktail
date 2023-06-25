import { blueGrey } from "@mui/material/colors";

export const getSpacing = function getSpacing(space: number) {
  return `${space * 0.4}rem`;
}; 

export const sizes = {
  none: 0,
  xxSmall: getSpacing(1),
  xSmall: getSpacing(2),
  small: getSpacing(3),
  medium: getSpacing(4),
  large: getSpacing(6),
  xLarge: getSpacing(8),
  xxLarge: getSpacing(12),
  xxxLarge: getSpacing(18)
};

export const defaultTheme = {
  sizes,
  getSpacing: (value: number) => getSpacing(value)
}

export const lightTheme = {
  body: blueGrey[50],
  text: blueGrey[700],
  header: blueGrey[100],
  activeLink: blueGrey[900],
  ...defaultTheme
};
export const darkTheme = {
  body: blueGrey[900],
  text: blueGrey[300],
  header: blueGrey[800],
  activeLink: blueGrey[50],
  ...defaultTheme
};
