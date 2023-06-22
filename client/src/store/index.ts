import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import themeReducer from './theme';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
