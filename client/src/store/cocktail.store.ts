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

// Types
interface CocktailState {
    isSearch: boolean;
    cocktails: Cocktail[];
    getCocktailStatus: LoadingStatus;
}

const initialState: CocktailState = {
    isSearch: false,
    cocktails: [],
    getCocktailStatus: LoadingStatus.idle,
};

// Action Creators
export const searchCocktailByName = createAsyncThunk(
    'cocktail/searchCocktailByName',
    async (cocktailName: string, { rejectWithValue }) => {
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
    async (_: undefined, { rejectWithValue }) => {
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchCocktailByName.fulfilled, (state, action) => {
            state.getCocktailStatus = LoadingStatus.success;
            state.cocktails = action.payload;
            state.isSearch = true;
        }).addCase(searchCocktailByName.pending, (state) => {
            state.getCocktailStatus = LoadingStatus.loading;
            state.isSearch = false;
            state.cocktails = [];
        }).addCase(searchCocktailByName.rejected, (state) => {
            state.getCocktailStatus = LoadingStatus.failed;
            state.cocktails = [];
        })
            .addMatcher(isAnyOf(listCocktailByFirstLetter.fulfilled, getRandomCocktail.fulfilled, filterCocktail.fulfilled), (state, action) => {
                state.getCocktailStatus = LoadingStatus.success;
                state.cocktails = action.payload;
                state.isSearch = false;
            }).addMatcher(isAnyOf(listCocktailByFirstLetter.pending, getRandomCocktail.pending, filterCocktail.pending), (state) => {
                state.getCocktailStatus = LoadingStatus.loading;
                state.cocktails = [];
                state.isSearch = false;
            }).addMatcher(isAnyOf(listCocktailByFirstLetter.rejected, getRandomCocktail.rejected, filterCocktail.rejected), (state) => {
                state.getCocktailStatus = LoadingStatus.failed;
                state.cocktails = [];
                state.isSearch = false;
            })
    },
});

export default cocktailSlice.reducer;
