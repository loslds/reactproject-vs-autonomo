import loginoff from "../../assets/svgs/loginoff.svg";
import loginon from "../../assets/svgs/loginon.svg";

import * as H from "./stylesHeader";

type PropsBarHLogin = {
  logado?: boolean;
  img?: string;
  onclick?: () => void;
};
const BarHearderLogin = ({ logado }: PropsBarHLogin) => {
  return (
    <H.BarContainerHRigth>
      <label>Login...: </label>
      {logado ? (
        <H.ButtonHLogin
          img={loginon}
          title={"Quem sou ..."}
          onClick={() => {
            alert("oi..logo on");
          }}
        />
      ) : (
        <H.ButtonHLogin
          img={loginoff}
          title={"Click para Logar..."}
          onClick={() => {
            alert("oi..logo off");
          }}
        />
      )}
      ;
    </H.BarContainerHRigth>
  );
};
export default BarHearderLogin;
