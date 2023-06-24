import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/header/Header';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './Themes';
import Routes from './routes';
import { RootState } from './store';
import { Theme } from './Types';

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

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
