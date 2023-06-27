import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import themeReducer from './theme';
import cocktailReducer from './cocktail';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cocktail: cocktailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
