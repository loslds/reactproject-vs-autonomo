//import React from "react";

import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/globals";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;

