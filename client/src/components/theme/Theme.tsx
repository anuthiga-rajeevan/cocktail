import * as React from 'react';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import styled from 'styled-components';

import { useTheme } from '../../hooks/useTheme';
import { Theme as themeType } from '../../Types';

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return <IconButton onClick={() => setTheme(theme === themeType.light ? themeType.dark : themeType.light)}>
    {theme === themeType.light ? <DarkMode /> : <LightMode />}
  </IconButton>;
};

export default Theme;
