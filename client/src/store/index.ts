import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import themeReducer from './theme';
import cocktailReducer from './cocktail.store';
import filterReducer from './filter.store';
import favouriteReducer from './favourite.store';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cocktail: cocktailReducer,
    filter: filterReducer,
    favourite: favouriteReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
