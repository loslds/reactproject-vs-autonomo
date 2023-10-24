import * as M from "../modal/stylesModal";

import CardModalTexto from "../modal/CardModalTexto";

import clientes from "../assets/svgs/clientes.svg";

const CardAcessoSistema = () => {
  return (
    <CardModalTexto>
      <M.ContentTextoModulos>
        <M.ContainerHeardModalMain>
          <M.ContainerModalImg
            ispx={true}
            pminheight={"60px"}
            pwidth={"80px"}
            img={clientes}
          />
        </M.ContainerHeardModalMain>
        <label>Acesso para todos que estiverem Cadastrados.</label>
        <h5>1º Passo.</h5>
        <p>
          {" "}
          Para acessar o sistema devemos estar cadastrados conforme o Setor e a
          herarquia de seu Trabalho.
        </p>
        <p>
          {" "}
          Para que possa logar e obter acesso, entre em contato com a
          Administração.
        </p>
        <p>
          {" "}
          Receberá uma senha de acesso conforme sua Identidade, e o seu
          trabalho.
        </p>
        <p> Somente após isso feito poderá realizar o Login.</p>
        <h5>2º Passo.</h5>
        <p>
          {" "}
          Selecione a Impresa usando as opções que aparece no alto ao centro,
          clicando em "Opções."
        </p>
        <h5>3º Passo.</h5>
        <p>
          {" "}
          Determine o seu ID ("Nome") ao qual voce estará sendo Representado ao
          Sistema.
        </p>
        <h5>4º Passo.</h5>
        <p>
          {" "}
          Determine o sua Chave ("Senha") a qual voce tambem determinou durante
          o seu cadastramento.
        </p>
        <p> Logo irá aparecer um Botão ao lado direito.</p>
        <h5>e 5º Passo.</h5>
        <p>
          {" "}
          Assim que for detectado sua Chave de Acesso, O Sistema irá
          redirecionar voce para o Setor do qual vc faz parte.
        </p>
      </M.ContentTextoModulos>
    </CardModalTexto>
  );
};
export default CardAcessoSistema;
