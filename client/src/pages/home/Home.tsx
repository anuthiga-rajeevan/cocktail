import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RefreshIcon from '@mui/icons-material/Refresh';
import { AppDispatch, RootState } from '../../store';
import Filter from '../../components/filter/Filter';
import Cocktail from '../../components/cocktail/Cocktail';
import { BaseDiv, CocktailDiv, FilterDiv, RefreshDiv, StyledButton } from './Home.styles';
import { LoadingStatus } from '../../Types';
import { getRandomCocktail } from '../../store/cocktail.store';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const getCocktailStatus = useSelector((state: RootState) => state.cocktail.getCocktailStatus);

  useEffect(() => {
    if (getCocktailStatus === LoadingStatus.idle) {
      dispatch(getRandomCocktail());
    }
  }, [dispatch, getCocktailStatus]);

  const reloadCocktails = () => {
    dispatch(getRandomCocktail());
  }

  return <BaseDiv>
    <FilterDiv><Filter /></FilterDiv>
    <CocktailDiv>
      <RefreshDiv>
        <StyledButton onClick={reloadCocktails}>
          <RefreshIcon />
        </StyledButton>
      </RefreshDiv>
      <Cocktail />
    </CocktailDiv>
  </BaseDiv>
}

export default Home;
