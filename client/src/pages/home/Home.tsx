import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RefreshIcon from '@mui/icons-material/Refresh';
import { AppDispatch, RootState } from '../../store';
import Filter from '../../components/filter/Filter';
import Cocktail from '../../components/cocktail/Cocktail';
import { BaseDiv, CocktailDiv, EmptyStateDiv, FilterDiv, RefreshDiv, StyledButton, StyledHeading } from './Home.styles';
import { LoadingStatus } from '../../Types';
import { getRandomCocktail } from '../../store/cocktail.store';
import ProgressBar from '../../components/progressBar/ProgressBar';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const isSearch = useSelector((state: RootState) => state.cocktail.isSearch);
  const searchText = useSelector((state: RootState) => state.cocktail.searchText);
  const isFilter = useSelector((state: RootState) => state.cocktail.isFilter);
  const getCocktailStatus = useSelector((state: RootState) => state.cocktail.getCocktailStatus);
  const cocktails = useSelector((state: RootState) => state.cocktail.cocktails);

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
        <StyledHeading>{isFilter ? 'Browse Drinks' : isSearch ? `Search results for ${searchText}` : 'Random Drinks'}</StyledHeading>
        <StyledButton onClick={reloadCocktails}>
          <RefreshIcon />
        </StyledButton>
      </RefreshDiv>
      {getCocktailStatus === LoadingStatus.loading ? <ProgressBar /> : null}
      {isSearch && !cocktails && <EmptyStateDiv>{`No Drinks found for ${searchText}`}</EmptyStateDiv>}
      {!isSearch && !cocktails && <EmptyStateDiv>{`No Drinks found`}</EmptyStateDiv>}
      <Cocktail cocktails={cocktails} />
    </CocktailDiv>
  </BaseDiv>
}

export default Home;
