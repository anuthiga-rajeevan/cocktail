import React from 'react';
import { InputAdornment } from '@mui/material';
import { Search as SeachIcon } from '@mui/icons-material';
import { StyledSearchField } from './Search.styles';

export default function Search() {
    const handleSeach = (evt: any) => {
        evt.preventDefault();
        console.log('called')

    }
    return <form onSubmit={handleSeach}>
    <StyledSearchField
        id='search'
        placeholder='Search'
        InputProps={{
            startAdornment: (
                <InputAdornment position='start'>
                    <SeachIcon />
                </InputAdornment>
            ),
        }}
        variant='standard'
    /></form>
}
