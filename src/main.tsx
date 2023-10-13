import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import App from './App.tsx';
import Erropg from './pages/Erropg.tsx';
import Loginoffpg from './pages/Loginoffpg.tsx';
import Homepg from './pages/Homepg.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erropg />,
    children: [
      {
        path: "/",
        element: <Loginoffpg />
      },
      {
        path: "/homepg",
        element: <Homepg />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

