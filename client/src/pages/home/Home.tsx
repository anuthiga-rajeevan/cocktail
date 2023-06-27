import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getRandomCocktail } from '../../store/cocktail';
import { LoadingStatus } from '../../Types';
import { CircularProgress } from '@mui/material';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const cocktails = useSelector((state: RootState) => state.cocktail.cocktails);
  const getCocktailStatus = useSelector((state: RootState) => state.cocktail.getCocktailStatus);
  console.log(getCocktailStatus)

  useEffect(() => {
    if (getCocktailStatus === LoadingStatus.idle) {
      dispatch(getRandomCocktail());
    }
  }, [dispatch, getCocktailStatus]
  );

  if (getCocktailStatus === LoadingStatus.loading) {
    return <CircularProgress />;
  }
  return <div>{JSON.stringify(cocktails)}</div>;
}

export default Home;
