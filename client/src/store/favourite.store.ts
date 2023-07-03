import { createSlice } from '@reduxjs/toolkit';
import {
    CocktailBase, LoadingStatus,
} from '../Types';

// Types
interface FavouriteState {
    favourites: Array<CocktailBase>;
    favouritesId: Array<string>;
    getFavouriteStatus: LoadingStatus;
}

const initialState: FavouriteState = {
    favourites: [],
    favouritesId: [],
    getFavouriteStatus: LoadingStatus.idle,
};

// Slice
const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        setFavouriteId(state) {
            state.favouritesId = state.favourites ? state.favourites.map((favourite: CocktailBase) => favourite.idDrink) : [];
        },
        addFavourite(state, action) {
            const favouritesString = localStorage.getItem('favourites');
            const favourites = favouritesString ? JSON.parse(favouritesString) : [];
            favourites.push(action.payload);
            state.favourites = favourites;
            localStorage.setItem('favourites', JSON.stringify(favourites));
            favouriteSlice.caseReducers.setFavouriteId(state);
        },
        removeFavourite(state, action) {
            const favouritesString = localStorage.getItem('favourites');
            const favourites = favouritesString ? JSON.parse(favouritesString) : [];
            const filteredFavourites = favourites.filter((favourite: CocktailBase) => favourite.idDrink !== action.payload);
            console.log(filteredFavourites)
            state.favourites = filteredFavourites;
            localStorage.setItem('favourites', JSON.stringify(filteredFavourites));
            favouriteSlice.caseReducers.setFavouriteId(state);
        },
        getFavourites(state) {
            const favourites = localStorage.getItem('favourites');
            state.favourites = favourites ? JSON.parse(favourites) : [];
            favouriteSlice.caseReducers.setFavouriteId(state);
            state.getFavouriteStatus = LoadingStatus.success;
        }
    },

});

export const { addFavourite, removeFavourite, getFavourites, setFavouriteId } = favouriteSlice.actions;
export default favouriteSlice.reducer;
