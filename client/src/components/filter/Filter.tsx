import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';

import { LoadingStatus } from '../../Types';
import { AppDispatch, RootState } from '../../store';
import { getFilters, setFilterKey, setFilterValue } from '../../store/filter.store';
import { filterCocktail, listCocktailByFirstLetter } from '../../store/cocktail.store';
import { AlphabetBodyDiv, BodyDiv, HeadingDiv, StyledArrowDiv, StyledHeadingTypography, StyledListSelectedTypography, StyledListTypography, StyledSideBar } from './Filter.styles';
import ProgressBar from '../progressBar/ProgressBar';

export default function Filter() {
    const dispatch = useDispatch<AppDispatch>();
    const filters = useSelector((state: RootState) => state.filter.filters);
    const getFilterStatus = useSelector((state: RootState) => state.filter.getFilterStatus);
    const filterKey = useSelector((state: RootState) => state.filter.filterKey);
    const filterValue = useSelector((state: RootState) => state.filter.filterValue);

    const filterKeyMapping: { [key: string]: string } = {
        alcohols: 'a',
        ingrediants: 'i',
        glasses: 'g',
        categories: 'c',
    }

    useEffect(() => {
        if (getFilterStatus === LoadingStatus.idle) {
            dispatch(getFilters());
        }
    }, [dispatch, getFilterStatus]
    );

    const handleShowFilter = (key: string) => {
        if (key === filterKey) {
            dispatch(setFilterKey(''));
        } else {
            dispatch(setFilterKey(key));
        }
    }

    const handleFilter = (filterValue: string | undefined) => {
        dispatch(setFilterValue(filterValue));
        if (filterKey === 'alphabets') {
            dispatch(listCocktailByFirstLetter(filterValue || ''))
        } else {
            dispatch(filterCocktail({ [filterKeyMapping[filterKey]]: filterValue }));
        }
    }

    return <StyledSideBar elevation={5}>
        {getFilterStatus === LoadingStatus.loading ? <ProgressBar/> : 
        Object.keys(filters).map((key: string) => {
            return <div key={key}>
                <HeadingDiv onClick={() => handleShowFilter(key)}>
                    <StyledHeadingTypography>{key}</StyledHeadingTypography>
                    <StyledArrowDiv>{filterKey === key ? <ArrowDropDown /> : <ArrowDropUp />}</StyledArrowDiv>
                </HeadingDiv>
                {filterKey === key && filterKey === 'alphabets' && <AlphabetBodyDiv>
                    {filters[key as keyof typeof filters].map((filterVal: string | undefined) => {
                        return (filterVal === filterValue) ? <StyledListSelectedTypography key={filterVal} >{filterVal}</StyledListSelectedTypography> : <StyledListTypography key={filterVal} onClick={() => handleFilter(filterVal)}>{filterVal}</StyledListTypography>
                    })}
                </AlphabetBodyDiv>}
                {filterKey === key && filterKey !== 'alphabets'  && <BodyDiv>
                    {filters[key as keyof typeof filters].map((filterVal: string | undefined) => {
                        return (filterVal === filterValue) ? <StyledListSelectedTypography key={filterVal} >{filterVal}</StyledListSelectedTypography> : <StyledListTypography key={filterVal} onClick={() => handleFilter(filterVal)}>{filterVal}</StyledListTypography>
                    })}
                </BodyDiv>}
            </div>
        })}
    </StyledSideBar>;
}
