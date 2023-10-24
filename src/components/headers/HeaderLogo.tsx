import * as H from "./stylesHeader";
import LogoSys from "../../assets/pngs/logosys.png";
// import Loginon from '../../assets/svgs/loginon.svg';
// import Loginoff from '../../assets/svgs/loginoff.svg';
// import ButtonHeaderLogin from "./BareaderLogin";
import ContainerHeaderMain from "./ContainerHeaderMain";
import ContainerItensHeaderMain from "./ContainerItensMain";
import BarHeaderLogin from "./BarHearderLogin";

// export const HeaderLogo = (onoff: boolean) => {
type PropsHeader = {
  loginonoff: boolean;
  // children?: React.ReactNode | JSX.Element;
};

const HeaderLogo: React.FC<PropsHeader> = ({ loginonoff }) => {
  return (
    <ContainerHeaderMain>
      <ContainerItensHeaderMain>
        <H.ContainerLogoSys
          oncursor={true}
          img={LogoSys}
          onClick={() => window.location.reload()}
        />
      </ContainerItensHeaderMain>

      <ContainerItensHeaderMain>
        <h1>Acesso ao Sistema.</h1>
      </ContainerItensHeaderMain>

      <ContainerItensHeaderMain>
        <BarHeaderLogin logado={loginonoff} />
      </ContainerItensHeaderMain>
    </ContainerHeaderMain>
  );
};

export default HeaderLogo;
