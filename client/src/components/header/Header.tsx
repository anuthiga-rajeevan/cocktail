import * as React from 'react';
import { AppBar, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

import useStyles from './Header.styles';
import Theme from '../theme/Theme';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Theme  />
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
