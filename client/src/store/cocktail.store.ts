import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
    Cocktail, LoadingStatus
} from '../Types';
import {
    searchCocktailByName as searchCocktailByNameService,
    listCocktailByFirstLetter as listCocktailByFirstLetterService,
    getRandomCocktail as getRandomCocktailService,
    filterCocktail as filterCocktailService
} from '../services/cocktail.service';
import { setFilterKey, setFilterValue } from './filter.store';

// Types
interface CocktailState {
    isFilter: boolean;
    isSearch: boolean;
    searchText: string | undefined;
    cocktails: Cocktail[];
    getCocktailStatus: LoadingStatus;
}

const initialState: CocktailState = {
    isFilter: false,
    isSearch: false,
    searchText: undefined,
    cocktails: [],
    getCocktailStatus: LoadingStatus.idle,
};

// Action Creators
export const searchCocktailByName = createAsyncThunk(
    'cocktail/searchCocktailByName',
    async (cocktailName: string, { dispatch, rejectWithValue }) => {
        dispatch(setFilterKey(''));
        dispatch(setFilterValue(''));
        try {
            const cocktails = await searchCocktailByNameService(cocktailName);
            return cocktails;
        } catch (err: any) {
            const error = err.response?.data?.error || 'Something went wrong';
            return rejectWithValue(error);
        }
    },
);

export const listCocktailByFirstLetter = createAsyncThunk(
    'cocktail/listCocktailByFirstLetter',
    async (letter: string, { rejectWithValue }) => {
        try {
            const cocktails = await listCocktailByFirstLetterService(letter);
            return cocktails;
        } catch (err: any) {
            const error = err.response?.data?.error || 'Something went wrong';
            return rejectWithValue(error);
        }
    },
);

export const getRandomCocktail = createAsyncThunk(
    'cocktail/getRandomCocktail',
    async (_: undefined, { dispatch, rejectWithValue }) => {
        dispatch(setFilterKey(''));
        dispatch(setFilterValue(''));
        try {
            const requests = [];
            for (let i = 0; i < 5; i++) {
                requests.push(getRandomCocktailService())
            }
            const responses = await Promise.all(requests);
            const response = responses.map((res) => res[0])
            return response;
        } catch (err: any) {
            const error = err.response?.data?.error || 'Something went wrong';
            return rejectWithValue(error);
        }
    },
);

export const filterCocktail = createAsyncThunk(
    'cocktail/filterCocktail',
    async (param: {}, { rejectWithValue }) => {
        try {
            const cocktails = await filterCocktailService(param);
            return cocktails;
        } catch (err: any) {
            const error = err.response?.data?.error || 'Something went wrong';
            return rejectWithValue(error);
        }
    },
);

// Slice
const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        setSearchText(state, action) {
            state.searchText = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(searchCocktailByName.fulfilled, (state, action) => {
            state.getCocktailStatus = LoadingStatus.success;
            state.cocktails = action.payload;
            state.isSearch = true;
            state.isFilter = false;
        }).addCase(searchCocktailByName.pending, (state) => {
            state.getCocktailStatus = LoadingStatus.loading;
            state.isSearch = true;
            state.isFilter = false;
            state.cocktails = [];
        }).addCase(searchCocktailByName.rejected, (state) => {
            state.getCocktailStatus = LoadingStatus.failed;
            state.isSearch = true;
            state.isFilter = false;
            state.cocktails = [];
        }).addCase(getRandomCocktail.fulfilled, (state, action) => {
            state.getCocktailStatus = LoadingStatus.success;
            state.cocktails = action.payload;
            state.isSearch = false;
            state.isFilter = false;
        }).addCase(getRandomCocktail.pending, (state) => {
            state.getCocktailStatus = LoadingStatus.loading;
            state.isSearch = false;
            state.isFilter = false;
            state.cocktails = [];
        }).addCase(getRandomCocktail.rejected, (state) => {
            state.getCocktailStatus = LoadingStatus.failed;
            state.isSearch = false;
            state.isFilter = false;
            state.cocktails = [];
        })
            .addMatcher(isAnyOf(listCocktailByFirstLetter.fulfilled, filterCocktail.fulfilled), (state, action) => {
                state.getCocktailStatus = LoadingStatus.success;
                state.cocktails = action.payload;
                state.isSearch = false;
                state.isFilter = true;
                state.searchText = undefined;
            }).addMatcher(isAnyOf(listCocktailByFirstLetter.pending, filterCocktail.pending), (state) => {
                state.getCocktailStatus = LoadingStatus.loading;
                state.cocktails = [];
                state.isSearch = false;
                state.isFilter = true;
                state.searchText = undefined;
            }).addMatcher(isAnyOf(listCocktailByFirstLetter.rejected, filterCocktail.rejected), (state) => {
                state.getCocktailStatus = LoadingStatus.failed;
                state.cocktails = [];
                state.isSearch = false;
                state.isFilter = true;
                state.searchText = undefined;
            })
    },
});

export const { setSearchText } = cocktailSlice.actions;
export default cocktailSlice.reducer;
