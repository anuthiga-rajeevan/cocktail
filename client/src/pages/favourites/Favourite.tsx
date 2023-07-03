import React from 'react';
import { BaseDiv, StyledHeading } from './Favourite.styles';
import Cocktail from '../../components/cocktail/Cocktail';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Favourite() {
  const cocktails = useSelector((state: RootState) => state.favourite.favourites);

  return <BaseDiv>
    <StyledHeading>My Favourites</StyledHeading>
    <Cocktail cocktails={cocktails} />
  </BaseDiv>;
}

export default Favourite;
