import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './Types';

type GlobalThemeProps = {
  theme?: ThemeProps;
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: GlobalThemeProps) => theme?.colors?.[10]};
    color: ${({ theme }: GlobalThemeProps) => theme?.colors?.[1]};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }`;

  export default withTheme(GlobalStyles);