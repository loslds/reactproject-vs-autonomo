import React from "react";
import * as L from "./stylespg";

import { ThemeLogo } from "../components/themes";
import { AcessoActions } from "../components/contexts/AcessoContext";
import { AcessoUseForm } from "../components/contexts/AcessoContext";

export const Loginpg = () => {
  const { dispatch } = AcessoUseForm();

  React.useEffect(() => {
    dispatch({ type: AcessoActions.setCurrentStep, payload: 0 });
    dispatch({ type: AcessoActions.setIdAces, payload: 0 });
    dispatch({ type: AcessoActions.setIdEmp, payload: 0 });
    dispatch({ type: AcessoActions.setNmFant, payload: "" });
    dispatch({ type: AcessoActions.setIdUser, payload: 0 });
    dispatch({ type: AcessoActions.setIdNmUser, payload: "" });
    dispatch({ type: AcessoActions.setPswUser, payload: "" });
    dispatch({ type: AcessoActions.setPin, payload: "" });
    dispatch({ type: AcessoActions.setMail, payload: "" });
    dispatch({ type: AcessoActions.setFoneC, payload: "" });
    dispatch({ type: AcessoActions.setNet, payload: "" });
    dispatch({ type: AcessoActions.setIdMod, payload: 0 });
    dispatch({ type: AcessoActions.setNmMod, payload: "" });
    dispatch({ type: AcessoActions.setNmRecep, payload: "Recepção" });
    dispatch({ type: AcessoActions.setMdRecep, payload: false });
    dispatch({ type: AcessoActions.setNmDesig, payload: "Design" });
    dispatch({ type: AcessoActions.setMdDesig, payload: false });
    dispatch({ type: AcessoActions.setNmProdu, payload: "Produção" });
    dispatch({ type: AcessoActions.setMdProdu, payload: false });
    dispatch({ type: AcessoActions.setNmAcaba, payload: "Acabamento" });
    dispatch({ type: AcessoActions.setMdAcaba, payload: false });
    dispatch({ type: AcessoActions.setNmExped, payload: "Expedição" });
    dispatch({ type: AcessoActions.setMdExped, payload: false });
    dispatch({ type: AcessoActions.setNmAdmin, payload: "Administração" });
    dispatch({ type: AcessoActions.setMdAdmin, payload: false });
    dispatch({ type: AcessoActions.setNmMaster, payload: "Master" });
    dispatch({ type: AcessoActions.setMdMaster, payload: false });
    dispatch({ type: AcessoActions.setNmConfig, payload: "" });
    dispatch({ type: AcessoActions.setMdConfig, payload: false });
    dispatch({ type: AcessoActions.setPinAdm, payload: 9999 });
    dispatch({ type: AcessoActions.setPathPage, payload: "" });
    dispatch({ type: AcessoActions.setLogado, payload: false });
    dispatch({ type: AcessoActions.setDtIni, payload: "" });
    dispatch({ type: AcessoActions.setDtFim, payload: "" });
    dispatch({ type: AcessoActions.setTmp, payload: "" });
  }, [dispatch]);

  // net: 0,
  // lvMod: 0,
  //
  return (
    <ThemeLogo>
      <L.Container>
        <L.ContainerMenuPage>
          <h2>Bem Vindo...</h2>
          <h4>Abaixo você tera uma prévia da apresentação do Sistema.</h4>
        </L.ContainerMenuPage>
        <L.DivisionHPanel />
        <h3>Sintese :</h3>
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
        <button>Logar</button>
      </L.Container>
    </ThemeLogo>
  );
};
