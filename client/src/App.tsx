import React from 'react';
import { BrowserRouter, Routes as DomRoutes } from 'react-router-dom';

import Routes from './routes';
import Header from './components/header/Header';

function App() {
  return (
    <>

      <BrowserRouter >
        <Header />
        <DomRoutes>
          <Routes />
        </DomRoutes>
      </BrowserRouter >
    </>



  );
}

export default App;
