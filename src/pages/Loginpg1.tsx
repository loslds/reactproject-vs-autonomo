import React from "react";

import * as L from "./stylespg";

import { ThemeLogo } from "../components/themes/ThemeLogo";

import {
  AccesActions,
  AccesUseForm,
} from "../components/contexts/AccesContext";

export const Loginpg1 = () => {
  const { state, dispatch } = AccesUseForm();

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  return (
    <ThemeLogo>
      <L.Container>
        <L.ContainerMenuPage>
          <h2>Bem Vindo...</h2>
          <h4>Abaixo você tera uma prévia da apresentação do Sistema.</h4>
          <p>Step: {state.currentstep}/4.</p>
        </L.ContainerMenuPage>
        <L.DivisionHPanel />
      </L.Container>
    </ThemeLogo>
  );
};
