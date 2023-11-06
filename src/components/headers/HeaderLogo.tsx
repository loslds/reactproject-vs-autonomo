import * as H from "./stylesHeader";
import LogoSys from "../../assets/pngs/logosys.png";
import ContainerHeaderMain from "./ContainerHeaderMain";
import ContainerItensHeaderMain from "./ContainerItensMain";
import BarHeaderLogin from "./BarHearderLogin";

type PropsHeader = {
  loginonoff?: boolean;
};
const HeaderLogo = ({ loginonoff }: PropsHeader) => {
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
        <BarHeaderLogin logado={loginonoff} />
      </ContainerItensHeaderMain>
    </ContainerHeaderMain>
  );
};

export default HeaderLogo;
