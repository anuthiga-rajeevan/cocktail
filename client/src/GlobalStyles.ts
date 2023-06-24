import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: { theme?: any }) => theme.body};
    color: ${({ theme }: { theme?: any }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
  `;
