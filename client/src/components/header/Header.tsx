import * as React from 'react';
import { AppBar, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

import useStyles from './Header.styles';
import { useDarkMode } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../Themes';
import Theme from '../theme/Theme';

export default function Header() {
  const classes = useStyles();
  const [theme, themeToggler] = useDarkMode<string>();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <AppBar>
      <Toolbar>
        <Theme theme={theme} toggleTheme={themeToggler} />
        <TextField
          id='search'
          placeholder='Search'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            ),
          }}
          variant='standard'
          className={classes.textbox}
        />
        <div className={classes.menuDiv}>
          <Typography variant='h6' className={classes.typography}>
            Home
          </Typography>
          <Typography variant='h6' className={classes.typography}>
            Favourites
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
