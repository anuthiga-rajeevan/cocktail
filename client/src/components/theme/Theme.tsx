import * as React from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';

import { useTheme } from '../../hooks/useTheme';
import { Theme as themeType } from '../../Types';
import { StyledIconButton } from './Theme.styles';

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return <StyledIconButton onClick={() => setTheme(theme === themeType.light ? themeType.dark : themeType.light)}>
    {theme === themeType.light ? <DarkMode /> : <LightMode />}
  </StyledIconButton>;
};

export default Theme;
