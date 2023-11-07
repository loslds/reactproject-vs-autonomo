import React from "react";
import * as M from "../modal/stylesModal";

import { useNavigate } from "react-router-dom";
import { AccesUseForm } from "../contexts/AccesContext.tsx";

import CardModalTexto from "../modal/CardModalTexto";

import menu from "../../assets/svgs/menu.svg";

import home from "../../assets/svgs/home.svg";
import camera from "../../assets/svgs/camera2.svg";
import profile from "../../assets/svgs/profile.svg";

import DivActionMenuModal from "../modal/DivActionMenuModal";

type Props = {
  img?: string;
};
const CardTxtQuemSouUser = ({ img }: Props) => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state } = AccesUseForm();

  const [ismenu, setIsMenu] = React.useState(false);

  const tarb_ini = "Iniciei meu Trabalho " + state.datetimei + "...";
  const meuacesso =
    'O Seu "Nivel de Acesso" disponibilizado  : ' + state.nmmod + ' ';

  const handleMenu = React.useCallback(() => {
    setIsMenu((oldState) => !oldState);
  }, []);

  return (
    <CardModalTexto>
      <M.ContainerHeardImgMain>
        <M.ContainerModalImg pminheight={"130px"} pwidth={"150px"} img={img} />
        <M.ButtonModalMenu
          sizer={"60px"}
          img={menu}
          title="Menu Opções..."
          onClick={handleMenu}
        />

        <M.ContainerDivModalItemsMenu open={ismenu}>
          <DivActionMenuModal
            id={"1"}
            img={profile}
            title={"Alteração do Acesso."}
            path={"/altpswpg"}
            onClick={goto("/altpswpg")}
          />
          <DivActionMenuModal
            id={"2"}
            img={camera}
            title={"Alteração da Foto."}
            path={"/altavtpg"}
            onClick={goto("/altavtpg")}
          />
          <DivActionMenuModal
            id={"3"}
            img={home}
            title={"LogoOut Sistema."}
            path={"/homepg"}
            onClick={goto("/")}
          />
        </M.ContainerDivModalItemsMenu>
      </M.ContainerHeardImgMain>
      <h4>Oi, {state.idnmuser}...</h4>

      <p>
        {" "}
        &emsp;&emsp;O Sistema esta adequado a tratar as suas Informações com
        eficiência e fidelidade de acôrdo com o exercício o seu Cadastro.
      </p>
      <p>
        {" "}
        &emsp;&emsp;Aqui, estaremos trabalhando com a possibilidade de operar
        com diferêntes empresas no mesmo Sistema.
      </p>
      <p>
        {" "}
        &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios em
        requerer, guardar e publicar as informações.
      </p>
      <p>
        {" "}
        &emsp;&emsp;Todas as rotinas e processamento tem o mesmo perfil, somente
        usa filtro para indexar-las.
      </p>
      <p>
        {" "}
        &emsp;&emsp;As demais Empresa estarão disponiveis através de um novo
        cadastro com as mesmas finalidades
      </p>
      <br />
      <p> &emsp;&emsp;{meuacesso}</p>
      <p> &emsp;&emsp;{tarb_ini} ...</p>
      <label>Obs:. Opções do "MENU".</label>
      <li>Alteração do ACESSO SISTEMA.</li>
      <p>
        {" "}
        &emsp;&emsp;&rarr; Esta opção irá dar condições de voce alterar(mudar)
        sua senha de acesso, ao fazer Logoff deverá entrar com a nova senha.
      </p>
      <li>Alterarção de seu "AVATAR"(Foto).</li>
      <p>
        {" "}
        &emsp;&emsp;&rarr; Esta opção irá automaticamente alterar(mudar) seu
        avatar(Foto).
      </p>
      <li>Fazer "LOGOUT" no Sistema.</li>
      <p>
        {" "}
        &emsp;&emsp;&rarr;Esta opção automaticamente desconectará voce do
        serviço do Sistema.
      </p>
      <br />
    </CardModalTexto>
  );
};

export default CardTxtQuemSouUser;

// const listmenu = [
//   {id: 1, img: key50, label:'Acesso.', path:'/altpswpg', onClick: () => {} },
//   {id: 2, img: camera, label:'Avatar.', path:'/altavtpg', onClick: () => {} },
//   {id: 3, img: home  , label:'Sair...', path:'/homepg', onClick: () => {} }
// ];
// {listmenu.map(item => {
//   const { id, img, label, path } = item
//   return (
//     <DivActionMenuModal
//       key={id}
//       img={img}
//       title={label}
//       path={path}
//       onClick={ () => handlerClick}
//     />
//     )
//   })
// }
