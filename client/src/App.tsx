import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/header/Header';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './Themes';
import Routes from './routes';
import { AppDispatch, RootState } from './store';
import { LoadingStatus, Theme } from './Types';
import { useEffect } from 'react';
import { getFavourites } from './store/favourite.store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const getFavouriteStatus = useSelector((state: RootState) => state.favourite.getFavouriteStatus);

  useEffect(() => {
    if (getFavouriteStatus === LoadingStatus.idle) {
        dispatch(getFavourites());
    }
}, [getFavouriteStatus, dispatch]);

  return (
      <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes />
        </Router>
      </ThemeProvider>
  );
}

export default App;
