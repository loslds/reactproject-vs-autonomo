import * as S from "./stylesSidebar";

import menu from "../../assets/svgs/menu.svg";
import servicos from "../../assets/pngs/servicos.png";
import design from "../../assets/pngs/design.png";
import producao from "../../assets/pngs/producao.png";
import acabamento from "../../assets/pngs/acabamento.png";
import expedicao from "../../assets/pngs/expedicao.png";
import administracao from "../../assets/pngs/administra.png";
import master from "../../assets/pngs/master.png";
import { useNavigate } from "react-router-dom";

import config from "../../assets/pngs/config.png";

import ContainerBarSideMain from "./ContainerBarSideMain";
import ButtonSideBar from "./ButtonSideBar";
import ContainerItensMenu from "./ContainerItensMenu";
import React from "react";
import CardAcessoSistema from "../modalhelp/CardAcessoSistema";
import PageModal from "../modal/PageModal";

type PropsHeader = {
  loginonoff?: boolean;
};
const BarSideMenu = ({ loginonoff }: PropsHeader) => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [ismodalnotlogin, setIsModalNotLogin] = React.useState(false);

  return (
    <ContainerBarSideMain>
      <S.ContainerButtonSRigth>
        <ButtonSideBar img={menu} titbtn={"Menu..."} onClick={() => {}} />
      </S.ContainerButtonSRigth>
      <ContainerItensMenu>
        {!loginonoff ? (
          <ButtonSideBar
            img={servicos}
            titbtn="Recepção..."
            onClick={() => {
              setIsModalNotLogin(true);
            }}
          />
        ) : (
          <ButtonSideBar
            img={servicos}
            titbtn="Recepção..."
            onClick={() => {
              goto("/recepcappg");
            }}
          />
        )}
        <ButtonSideBar
          img={design}
          titbtn="Design..."
          onClick={() => alert("cliquei Design" + loginonoff)}
        />
        <ButtonSideBar
          img={producao}
          titbtn="Produção..."
          onClick={() => alert("cliquei Produção")}
        />
        <ButtonSideBar
          img={acabamento}
          titbtn="Acabamento..."
          onClick={() => alert("cliquei Acabamento")}
        />
        <ButtonSideBar
          img={expedicao}
          titbtn="Expedição..."
          onClick={() => alert("cliquei Expedição")}
        />
        <ButtonSideBar
          img={administracao}
          titbtn="Administração..."
          onClick={() => alert("cliquei Administração")}
        />
        <ButtonSideBar
          img={master}
          titbtn="Master..."
          onClick={() => alert("cliquei Master")}
        />
        <ButtonSideBar
          img={config}
          titbtn="Config..."
          onClick={() => alert("cliquei Config")}
        />
      </ContainerItensMenu>
      {!ismodalnotlogin ? (
        <PageModal
          ispx={true}
          ptop={"25%"}
          pwidth={"50%"}
          pheight={"50%"}
          titulo={"Acesso ao Sistema."}
          onClose={() => setIsModalNotLogin(false)}
        >
          <CardAcessoSistema />
        </PageModal>
      ) : null}
    </ContainerBarSideMain>
  );
};

export default BarSideMenu;
