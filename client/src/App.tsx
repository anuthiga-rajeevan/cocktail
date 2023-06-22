import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/header/Header';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './Themes';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
