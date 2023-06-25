import * as React from 'react';

import { StyledNavBar, SearchDiv, MenuDiv, StyledNavLink } from './Header.styles';
import Theme from '../theme/Theme';
import Search from '../search/Search';

export default function Header() {
  return (
    <StyledNavBar>
      <SearchDiv ><Search /></SearchDiv>
      <MenuDiv>
        <StyledNavLink to='/' >
          Home
        </StyledNavLink>
        <StyledNavLink to='/favourites'>
          Favourites
        </StyledNavLink>
      </MenuDiv>
      <div className='theme'><Theme /></div>
      
    </StyledNavBar>
  );
}
