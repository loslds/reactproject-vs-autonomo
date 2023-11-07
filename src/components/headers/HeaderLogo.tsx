import * as H from "./stylesHeader";
import LogoSys from "../../assets/pngs/logosys.png";
import ContainerHeaderMain from "./ContainerHeaderMain";
import ContainerItensHeaderMain from "./ContainerItensMain";
import BarHeaderLogin from "./BarHearderLogin";
//import { AcessoActions } from "../contexts/AcessoContext";
import { AccesUseForm } from "../contexts/AccesContext";
const HeaderLogo = () => {
  const { state } = AccesUseForm();

  return (
    <ContainerHeaderMain>
      <ContainerItensHeaderMain>
        <H.ContainerLogoSys
          img={LogoSys}
          onClick={() => window.location.reload()}
        />
      </ContainerItensHeaderMain>

      <ContainerItensHeaderMain>
        <h1>Sistema Gerenciador.</h1>
      </ContainerItensHeaderMain>

      <ContainerItensHeaderMain>
        <BarHeaderLogin logado={state.logado} />
      </ContainerItensHeaderMain>
    </ContainerHeaderMain>
  );
};

export default HeaderLogo;
