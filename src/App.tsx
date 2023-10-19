// import { AcessoProvider } from './components/contexts/AcessoContext.tsx';
// import { RouterProvider } from 'react-router-dom';
// import { Router } from './Router';

// const App = () => {
//   return (
//     <AcessoProvider>
//       <RouterProvider router={Router} />
//     </AcessoProvider>
//   );
// };

// export default App

import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />{" "}
    </>
  );
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { AcessoProvider } from './components/contexts/AcessoContext.tsx';

// import Erropg from './pages/Erropg.tsx';
// import { Loginpg1 } from './pages/Loginpg1';
// import { Loginpg2 } from './pages/Loginpg2';
// import { Loginpg3 } from './pages/Loginpg3';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Erropg />,
//     children: [
//       { path: "/", element: <Loginpg1 /> },
//       { path: "/loginpg2", element: <Loginpg2 /> },
//       { path: "/loginpg3", element: <Loginpg3 /> }
//     ]
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <AcessoProvider>
//       <RouterProvider router={router} />
//     </AcessoProvider>
//   </React.StrictMode>
// );

// import './index.css';
// import { Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <div className='App'>
//       <Outlet />
//     </div>
//   );
// }

// export default App
