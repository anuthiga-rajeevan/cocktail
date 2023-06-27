import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { Theme } from './Types';
import { lightTheme, darkTheme } from './Themes';

const initialState = {
  theme: { theme: Theme.light },
};

const mockStore = configureStore();
let store;

describe('App', () => {
  it('should render header component', () => {
    store = mockStore(initialState);
    render(<Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </Provider>);
    const headerElement = screen.queryAllByTestId('testHeaderId');
    expect(headerElement).toHaveLength(1);
  });
});