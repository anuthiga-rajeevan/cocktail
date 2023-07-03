import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    FilterResponse,
    LoadingStatus
} from '../Types';
import {
    getFilters as getFiltersService
} from '../services/filter.service';

// Types
interface CocktailState {
    filterKey: string;
    filterValue: string;
    filters: FilterResponse;
    getFilterStatus: LoadingStatus;
}

const initialState: CocktailState = {
    filterKey: '',
    filterValue: '',
    filters: {
        alcohols: [],
        ingrediants: [],
        glasses: [],
        categories: [],
        alphabets: new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) ),
    },
    getFilterStatus: LoadingStatus.idle,
};

// Action Creators
export const getFilters = createAsyncThunk(
    'filter/getFilters',
    async (_: undefined, { rejectWithValue }) => {
        try {
            const [alcohols, ingrediants, glasses, categories] = await Promise.all([getFiltersService({ a: 'list' }), getFiltersService({ i: 'list' }), getFiltersService({ g: 'list' }), getFiltersService({ c: 'list' })]);
            return {
                alcohols: alcohols.map(({ strAlcoholic }) => strAlcoholic),
                ingrediants: ingrediants.map(({ strIngredient1 }) => strIngredient1),
                glasses: glasses.map(({ strGlass }) => strGlass),
                categories: categories.map(({ strCategory }) => strCategory),
            };
        } catch (err: any) {
            const error = err.response?.data?.error || 'Something went wrong';
            return rejectWithValue(error);
        }
    },
);

// Slice
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterKey(state, action) {
            state.filterKey = action.payload;
        },
        setFilterValue(state, action) {
            state.filterValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFilters.fulfilled, (state, action) => {
                state.getFilterStatus = LoadingStatus.success;
                state.filters = {...state.filters, ...action.payload};
            }).addCase(getFilters.pending, (state) => {
                state.getFilterStatus = LoadingStatus.loading;
            }).addCase(getFilters.rejected, (state) => {
                state.getFilterStatus = LoadingStatus.failed;
            })
    },
});

export const { setFilterKey, setFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
