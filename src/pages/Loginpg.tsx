import React from "react";

import { useNavigate } from "react-router-dom";

import * as Pg from "./stylespg";

import { ThemeLogo } from "../components/themes";
import {
  AccesActions,
  AccesUseForm,
} from "../components/contexts/AccesContext";

//import profile from "../assets/svgs/profile.svg";
import protection from "../assets/svgs/protection.svg";

import BarMainButtonsLeftPg from "./BarMainButtonsLeftPg";

export const Loginpg = () => {
  const [ispathpg, setIsPathPg] = React.useState(false);
  const [strpathpg, setStrPathPg] = React.useState("");

  const { state, dispatch } = AccesUseForm();

  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  React.useEffect(() => {
    dispatch({ type: AccesActions.setCurrentStep, payload: 0 });
    dispatch({ type: AccesActions.setIdAces, payload: 0 });
    dispatch({ type: AccesActions.setIdEmp, payload: 0 });
    dispatch({ type: AccesActions.setNmFant, payload: "" });
    dispatch({ type: AccesActions.setIdUser, payload: 0 });
    dispatch({ type: AccesActions.setIdNmUser, payload: "Oswaldo" });
    dispatch({ type: AccesActions.setPswUser, payload: "" });
    dispatch({ type: AccesActions.setPin, payload: "" });
    dispatch({ type: AccesActions.setMail, payload: "" });
    dispatch({ type: AccesActions.setFoneC, payload: "" });
    dispatch({ type: AccesActions.setNet, payload: "" });
    dispatch({ type: AccesActions.setIdMod, payload: 0 });
    dispatch({ type: AccesActions.setNmMod, payload: "" });
    dispatch({ type: AccesActions.setNmRecep, payload: "Recepção" });
    dispatch({ type: AccesActions.setMdRecep, payload: false });
    dispatch({ type: AccesActions.setNmDesig, payload: "Design" });
    dispatch({ type: AccesActions.setMdDesig, payload: false });
    dispatch({ type: AccesActions.setNmProdu, payload: "Produção" });
    dispatch({ type: AccesActions.setMdProdu, payload: false });
    dispatch({ type: AccesActions.setNmAcaba, payload: "Acabamento" });
    dispatch({ type: AccesActions.setMdAcaba, payload: false });
    dispatch({ type: AccesActions.setNmExped, payload: "Expedição" });
    dispatch({ type: AccesActions.setMdExped, payload: false });
    dispatch({ type: AccesActions.setNmAdmin, payload: "Administração" });
    dispatch({ type: AccesActions.setMdAdmin, payload: false });
    dispatch({ type: AccesActions.setNmMaster, payload: "Master" });
    dispatch({ type: AccesActions.setMdMaster, payload: false });
    dispatch({ type: AccesActions.setNmConfig, payload: "" });
    dispatch({ type: AccesActions.setMdConfig, payload: false });
    dispatch({ type: AccesActions.setPinAdm, payload: 9999 });
    dispatch({ type: AccesActions.setPathPage, payload: "" });
    dispatch({ type: AccesActions.setLogado, payload: true });
    dispatch({ type: AccesActions.setDtIni, payload: "" });
    dispatch({ type: AccesActions.setDtFim, payload: "" });
    dispatch({ type: AccesActions.setTmp, payload: "" });
  }, [dispatch]);

  const handlerGetPath = () => {
    setIsPathPg(true);
    dispatch({ type: AccesActions.setPathPage, payload: strpathpg });
  };

  React.useMemo(() => {
    setStrPathPg("/loginpg1");
    goto(strpathpg);
  }, [strpathpg]);

  // React.useEffect(() => {
  //   setStrPathPg("/loginpg1");
  //   goto(strpathpg);
  // }, [strpathpg]);

  console.log("idnmuser", state.idnmuser);
  console.log("ispathpg", ispathpg);
  console.log("strpathpg", strpathpg);

  return (
    <ThemeLogo>
      <Pg.Container>
        <Pg.ContainerMenuPage>
          <h2>Bem Vindo...</h2>
          <h4>Abaixo você tera uma prévia da apresentação do Sistema.</h4>
          <p>Step: {state.currentstep}/4.</p>
        </Pg.ContainerMenuPage>
        <Pg.DivisionHPanel />
        <h3>Sintese :</h3>
        <br />
        <p>
          {"   "}&emsp;&emsp;Se você não conhece o que temos para lhe
          apresentar, antes de acessar procure conhecer todas as informações que
          podemos lhe oferecer e a maneira de como conseguir-las.
        </p>
        <br />
        <p>
          {"   "}&emsp;&emsp;Do lado Direito do seu video, você encontra uma
          imagem com a "LOGOMARCA", ao clicar nela você estara fazendo um
          Reflesh no seu Brouser e reiniciando a Página que estamos.
        </p>
        <br />
        <p>
          {"   "}&emsp;&emsp;Logo ao centro se encontra o Titulo da Página que
          identifica a ação de sua decisão para as rotinas que estarão ao seu
          dispor, solicitando ou lhe informando alguma coisa necessária para que
          continue chegar ao destino do qual você tenciona; ou lhe informando;
          ou coletado informações necessárias.
        </p>
        <br />
        <p>
          {"   "}&emsp;&emsp;Abaixo da "LOGOMARCA" se encontra um Botão do Menu
          de Atividades do Sistema.
        </p>
        <p>
          {"   "}&emsp;&emsp;Ao clicar no botão "MENU", ativara as Opções de
          Atividade representada com uma figura no botão, cada qual uma Rotina
          de Acesso ao "MODULOS"de Trabalho.
        </p>
        <br />
        <p>
          {"   "}&emsp;&emsp;Os "MODULOS" são os setores onde são esperadas as
          informações, as quais referidas pelo processamento dos serviços
          executados ou administrados dentre elas:
        </p>
        <br />
        <p>
          {"   "}
          &emsp;&emsp;"RECEPÇÃO",&emsp;&emsp;"DESIGN", &emsp;&emsp;"PRODUÇÃO",
          &emsp;&emsp;"ACABAMENTO", &emsp;&emsp;EXPEDIÇÃO,
          &emsp;&emsp;ADMINISTRAÇÃO.
        </p>
        <p>
          {"   "}&emsp;&emsp;Os demais modulos: "MASTER" e "CONFIG" fazem parte
          dos editores das Regras do Sistema.
        </p>
        <br />
        <p>
          {"   "}&emsp;&emsp;Para saber mais sobre o conteudo dos "MODULOS",
          click sobre ele.
        </p>
        <br />

        <BarMainButtonsLeftPg>
          <Pg.ContainerButtonsPage>
            <Pg.DivLabelPg>
              <Pg.ContainerPgLabelRigth>
                <label>Logar...</label>
                <Pg.ButtonPg
                  img={protection}
                  title={"Iniciar..."}
                  onKeyDown={handlerGetPath}
                  onClick={goto(strpathpg)}
                />
              </Pg.ContainerPgLabelRigth>
            </Pg.DivLabelPg>
          </Pg.ContainerButtonsPage>
        </BarMainButtonsLeftPg>
      </Pg.Container>
    </ThemeLogo>
  );
};
