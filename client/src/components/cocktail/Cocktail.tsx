import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { RootState } from '../../store';
import { Cocktail as CocktailType, LoadingStatus } from '../../Types';
import { CocktailCard, Container, StyledImage } from './Cocktail.styles';

export default function Cocktail() {
    const cocktails = useSelector((state: RootState) => state.cocktail.cocktails);
    const getCocktailStatus = useSelector((state: RootState) => state.cocktail.getCocktailStatus);

    return <Container>
        {getCocktailStatus === LoadingStatus.loading && <CircularProgress />}
        {cocktails.map((cocktail: CocktailType) => <CocktailCard>
            <StyledImage src={cocktail.strDrinkThumb}/>
        </CocktailCard>)}
        </Container>;
}
