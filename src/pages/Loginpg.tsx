import * as L from "./stylespg";

import { ThemeLogo } from "../components/themes";
//import { AcessoActions, AcessoUseForm } from '../components/contexts/AcessoContext';

export const Loginpg = () => {

//  const { state, dispatch } = AcessoUseForm();

  //               // React.useEffect(() => {
//   dispatch({ type: AcessoActions.setIdAces, payload: idacesso });
//   // dispatch({ type: AcessoActions.setIdEmp, payload: 0 });
//   dispatch({ type: AcessoActions.setNmFant, payload: nmusuario });
//   dispatch({ type: AcessoActions.setIdUser, payload: iduser });
//   // dispatch({ type: AcessoActions.setIdNmUser, payload: '' });
//   // dispatch({ type: AcessoActions.setPswUser, payload: '' });
//   dispatch({ type: AcessoActions.setPin, payload: pinusuario });
//   dispatch({ type: AcessoActions.setMail, payload: mailusuario });
//   dispatch({ type: AcessoActions.setFoneC, payload: cellusuario });
//   dispatch({ type: AcessoActions.setLvMod, payload: nvmodusuario });
//   // dispatch({ type: AcessoActions.setNmRecep, payload: '' });
//   dispatch({ type: AcessoActions.setMdRecep, payload: mdreceusuario });
//   // dispatch({ type: AcessoActions.setNmDesig, payload: '' });
//   dispatch({ type: AcessoActions.setMdDesig, payload: mddesiusuario });
//   // dispatch({ type: AcessoActions.setNmProdu, payload: '' });
//   dispatch({ type: AcessoActions.setMdProdu, payload: mdprodusuario });
//   // dispatch({ type: AcessoActions.setNmAcaba, payload: '' });
//   dispatch({ type: AcessoActions.setMdAcaba, payload: mdacabusuario });
//   // dispatch({ type: AcessoActions.setNmExped, payload: ''});
//   dispatch({ type: AcessoActions.setMdExped, payload: mdexpeusuario });
//   // dispatch({ type: AcessoActions.setNmAdmin, payload: '' });
//   dispatch({ type: AcessoActions.setMdAdmin, payload: mdadmiusuario });
//   // dispatch({ type: AcessoActions.setNmAdmin, payload: '' });
//   dispatch({ type: AcessoActions.setMdMaster, payload: mdmastusuario });
//   // dispatch({ type: AcessoActions.setNmMaster, payload: '' });
//   dispatch({ type: AcessoActions.setMdConfig, payload: mdconfigusuario });
//   // dispatch({ type: AcessoActions.setNmConfig, payload: '' });
//   dispatch({ type: AcessoActions.setPinAdm, payload: pinmaster });
//   // dispatch({ type: AcessoActions.setPinAdm, payload: 1234 });
//   dispatch({ type: AcessoActions.setAcessoPg, payload: titlepagina });

//   dispatch({ type: AcessoActions.setLogado, payload: logado });
//   dispatch({ type: AcessoActions.setDtIni, payload: logoonsys });
//   // dispatch({ type: AcessoActions.setDtFim, payload: '' });
//   // dispatch({ type: AcessoActions.setTmp, payload: '' });
// // }, [dispatch]);

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
      </L.Container>
    </ThemeLogo>
  );
};
