import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { LoadingStatus } from '../Types';
// Types
interface ThemeState {
  theme: string | undefined;
  getThemeStatus: LoadingStatus;
}

const initialState: ThemeState = {
  theme: undefined,
  getThemeStatus: LoadingStatus.idle,
};

// Slice
const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    getTheme(state) {
      const theme = localStorage.getItem('theme');
      state.theme = theme ? theme : undefined;
      state.getThemeStatus = LoadingStatus.success;
    },
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { getTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
