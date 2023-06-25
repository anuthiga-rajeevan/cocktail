import * as React from 'react';
import { InputAdornment } from '@mui/material';
import { Search as SeachIcon } from '@mui/icons-material';
import { StyledSearchField } from './Search.styles';

export default function Search() {
    return <StyledSearchField
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
    />
}
