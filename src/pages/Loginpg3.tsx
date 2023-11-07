import * as L from "./stylespg";

import { ThemeLogo } from "../components/themes/ThemeLogo";

import  { AccesUseForm } from "../components/contexts/AccesContext";

export const Loginpg3 = () => {

  const { state } = AccesUseForm();

  return (
    <ThemeLogo>
      <L.Container>
        <L.ContainerMenuPage>
          <h2>{state.idnmuser} continue...</h2>
          <h4>Conclua as Informações solicitadas.</h4>
          <p>Step: {state.currentstep}/4.</p>
        </L.ContainerMenuPage>
        <L.DivisionHPanel />
      </L.Container>
    </ThemeLogo>
  );
};
