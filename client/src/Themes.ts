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

export const darkTheme = {
  colors: {
    1: blueGrey[50],
    2: blueGrey[100],
    3: blueGrey[200],
    4: blueGrey[300],
    5: blueGrey[400],
    6: blueGrey[500],
    7: blueGrey[600],
    8: blueGrey[700],
    9: blueGrey[800],
    10: blueGrey[900],
  },
  ...defaultTheme
};
export const lightTheme = {
  colors: {
    1: blueGrey[900],
    2: blueGrey[800],
    3: blueGrey[700],
    4: blueGrey[600],
    5: blueGrey[500],
    6: blueGrey[400],
    7: blueGrey[300],
    8: blueGrey[200],
    9: blueGrey[100],
    10: blueGrey[50],
  },
  ...defaultTheme
};
