import * as React from 'react';

import { StyledNavBar, SearchDiv, MenuDiv, StyledNavLink } from './Header.styles';
import Theme from '../theme/Theme';
import Search from '../search/Search';

export default function Header() {
  return (
    <StyledNavBar elevation={5}>
      <SearchDiv ><Search /></SearchDiv>
      <MenuDiv>
        <StyledNavLink to='/' >
          Home
        </StyledNavLink>
        <StyledNavLink to='/favourites'>
          Favourites
        </StyledNavLink>
      </MenuDiv>
      <div><Theme /></div>
      
    </StyledNavBar>
  );
}
