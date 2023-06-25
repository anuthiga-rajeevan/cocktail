import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './Types';

type GlobalThemeProps = {
  theme?: ThemeProps;
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: GlobalThemeProps) => theme?.body};
    color: ${({ theme }: GlobalThemeProps) => theme?.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }`;

  export default withTheme(GlobalStyles);