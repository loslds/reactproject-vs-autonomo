// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";

import ReactDOM from "react-dom/client";

import { AccesProvider } from "./components/contexts/AccesContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Erropg from "./pages/Erropg.tsx";
import { Loginpg } from "./pages/Loginpg.tsx";
import { Loginpg1 } from "./pages/Loginpg1";
import { Loginpg2 } from "./pages/Loginpg2";
import { Loginpg3 } from "./pages/Loginpg3";

import Recepcappg from "./pages/Recepcaopg";
import Designpg from "./pages/Designpg";
import Producaopg from "./pages/Producaopg";
import Acabamentopg from "./pages/Acabamentopg";
import Expedicaopg from "./pages/Expedicaopg";
import Administracaopg from "./pages/Administracaopg";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpg />,
    errorElement: <Erropg />,
    children: [
      { path: "/", element: <Loginpg /> },
      { path: "/loginpg2", element: <Loginpg1 /> },
      { path: "/loginpg2", element: <Loginpg2 /> },
      { path: "/loginpg3", element: <Loginpg3 /> },
      { path: "/recepcappg", element: <Recepcappg /> },
      { path: "/designpg", element: <Designpg /> },
      { path: "/producaopg", element: <Producaopg /> },
      { path: "/acabamentopg", element: <Acabamentopg /> },
      { path: "/expedicaopg", element: <Expedicaopg /> },
      { path: "/administracaog", element: <Administracaopg /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AccesProvider>
      <RouterProvider router={router} />
    </AccesProvider>
  </React.StrictMode>
);
