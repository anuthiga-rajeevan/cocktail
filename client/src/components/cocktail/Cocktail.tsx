import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from '@mui/material';
import { AppDispatch, RootState } from '../../store';
import { CocktailBase, Cocktail as CocktailType } from '../../Types';
import { CocktailCard, CocktailCategoryTypography, CocktailContentDiv, CocktailNameTypography, Container, StyledButton, StyledImage } from './Cocktail.styles';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { addFavourite, removeFavourite } from '../../store/favourite.store';

interface IProps {
    cocktails: Array<CocktailBase | CocktailType>
}

export default function Cocktail({cocktails}: IProps) {
    const dispatch = useDispatch<AppDispatch>();
    const favouritesId = useSelector((state: RootState) => state.favourite.favouritesId);

    const addToFavorite = (cocktail: CocktailBase) => {
        dispatch(addFavourite(cocktail));
    }

    const removeFromFavorite = (cocktailId: string) => {
        dispatch(removeFavourite(cocktailId));
    }

    return <Container>
        
        {cocktails && cocktails.map((cocktail: CocktailType) => <CocktailCard key={cocktail.idDrink}>
            <StyledImage src={cocktail.strDrinkThumb}/>
            <CocktailContentDiv>
                <CocktailNameTypography>{cocktail.strDrink}</CocktailNameTypography>
                <CocktailCategoryTypography>{cocktail.strCategory}</CocktailCategoryTypography>
                {favouritesId.includes(cocktail.idDrink) ? <Tooltip title='Remove Favorite'><StyledButton onClick={() => removeFromFavorite(cocktail.idDrink)}><Favorite/></StyledButton></Tooltip> : <Tooltip title='Add to Favorite'><StyledButton onClick={() => addToFavorite(cocktail)}><FavoriteBorderOutlined/></StyledButton></Tooltip>}
            </CocktailContentDiv>
        </CocktailCard>)}
        </Container>;
}
