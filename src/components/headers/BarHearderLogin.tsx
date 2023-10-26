import React from "react";

import loginoff from "../../assets/svgs/loginoff.svg";
import loginon from "../../assets/svgs/loginon.svg";
import avatar from "../../assets/svgs/avatar.svg";

import * as H from "./stylesHeader";

import PageModal from "../modal/PageModal";
import CardTxtQuemSouUser from "../modalhelp/CardTxtQuemSouUser";
import CardAcessoSistema from "../modalhelp/CardAcessoSistema";

// import { useNavigate } from "react-router-dom";

type PropsBarHLogin = {
  logado?: boolean;
  img?: string;
  onclick?: () => void;
};
const BarHearderLogin = ({ logado }: PropsBarHLogin) => {
  // const navigate = useNavigate();
  // const goto = (path: string) => {
  //   return () => {
  //     navigate(path);
  //   };
  // };
  const quemsou = "";
  const [ismodalqsou, setIsModalQSou] = React.useState(false);
  const [ismodalnotlogin, setIsModalNotLogin] = React.useState(false);

  return (
    <H.BarContainerHRigth>
      <label>Login...: </label>
      {logado ? (
        <H.ButtonHLogin
          img={loginon}
          title={"Quem sou ..."}
          onClick={() => {
            setIsModalQSou(true);
          }}
        />
      ) : (
        <H.ButtonHLogin
          img={loginoff}
          title={"Click para Logar..."}
          onClick={ () => { setIsModalNotLogin(true)}}/>
      )}
      {ismodalqsou ? (
        <PageModal
          ispx={true}
          ptop={"25%"}
          pwidth={"50%"}
          pheight={"50%"}
          titulo={quemsou}
          onClose={() => setIsModalQSou(false)}
        >
          <CardTxtQuemSouUser img={avatar} />
        </PageModal>
      ) : null }
      {ismodalnotlogin ? (
        <PageModal
          ispx={true}
          ptop={'25%'}
          pwidth={'50%'}
          pheight={'50%'}
          titulo={'Acesso ao Sistema.'}
          onClose={() => setIsModalNotLogin(false)}
        >
          <CardAcessoSistema />
        </PageModal>
      ): null}
    </H.BarContainerHRigth>
  );
};
export default BarHearderLogin;
