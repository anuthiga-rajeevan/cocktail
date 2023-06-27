import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
    Cocktail, LoadingStatus
} from '../Types';
import {
    searchCocktailByName as searchCocktailByNameService,
    listCocktailByFirstLetter as listCocktailByFirstLetterService,
    getRandomCocktail as getRandomCocktailService,
} from '../services/cocktail.service';

// Types
interface CocktailState {
    cocktails: Cocktail[];
    getCocktailStatus: LoadingStatus;
}

const initialState: CocktailState = {
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
    async ( _: undefined, { rejectWithValue }) => {
        try {
            const requests = [];
            for (let i=0; i<5; i++) {                
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

// Slice
const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isAnyOf(searchCocktailByName.fulfilled, listCocktailByFirstLetter.fulfilled, getRandomCocktail.fulfilled), (state, action) => {
                state.getCocktailStatus = LoadingStatus.success;
                state.cocktails = action.payload;
            }).addMatcher(isAnyOf(searchCocktailByName.pending, listCocktailByFirstLetter.pending, getRandomCocktail.pending), (state) => {
                state.getCocktailStatus = LoadingStatus.loading;
            }).addMatcher(isAnyOf(searchCocktailByName.rejected, listCocktailByFirstLetter.rejected, getRandomCocktail.rejected), (state) => {
                state.getCocktailStatus = LoadingStatus.failed;
                state.cocktails = [];
            })
    },
});

export default cocktailSlice.reducer;
