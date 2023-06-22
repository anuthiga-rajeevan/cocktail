import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/home/Home';
import Favourite from './pages/favourites/Favourite';

export default function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/favourites', element: <Favourite /> },
  ]);
  return routes;
}
