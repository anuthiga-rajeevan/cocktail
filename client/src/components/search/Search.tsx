import React, { ChangeEvent, useState } from 'react';
import { InputAdornment } from '@mui/material';
import { Search as SeachIcon } from '@mui/icons-material';
import { ErrorTypography, StyledSearchField } from './Search.styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { searchCocktailByName, setSearchText as setSearchTextAction } from '../../store/cocktail.store';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Search() {
    const dispatch = useDispatch<AppDispatch>();
    const [searchText, setSearchText] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const navigate = useNavigate();

    const handleSeach = (evt: any) => {
        evt.preventDefault();
        if (pathArray[1] === 'favourites') {
            navigate('/');
        }
        if (searchText === '') {
            setHasError(true);
            return;
        }
        dispatch(setSearchTextAction(searchText));
        dispatch(searchCocktailByName(searchText));
    }
    return <form onSubmit={handleSeach}>
    <StyledSearchField
        id='search'
        placeholder='Search'
        onChange={(evt: ChangeEvent<HTMLInputElement>) => setSearchText(evt.target.value)}
        InputProps={{
            startAdornment: (
                <InputAdornment position='start'>
                    <SeachIcon />
                </InputAdornment>
            ),
        }}
        variant='standard'
    />
    {hasError && <ErrorTypography>Has Error</ErrorTypography>}
    </form>
}
