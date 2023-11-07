import * as M from "../modal/stylesModal";

import CardModalTexto from "../modal/CardModalTexto";

import clientes from "../../assets/svgs/clientes.svg";

const CardAcessoSistema = () => {
  return (
    <CardModalTexto>
      <M.ContentTextoModulos>
        <M.ContainerHeardModalMain>
          <M.ContainerModalImg
            pminheight={"60px"}
            pwidth={"80px"}
            img={clientes}
          />
        </M.ContainerHeardModalMain>
        <label>Acesso para todos que estiverem Cadastrados.</label>
        <h5>Atenção:</h5>
        <p>
          &emsp;Para acessar, devemos estar cadastrados conforme o Setor e a
          herarquia do acesso liberado a você. Para logar e obter acesso, crie
          uma conta, ou entre em contato com a Administração.&emsp;Receberá uma
          senha de acesso conforme sua Identidade, e o seu "ACESSO" ao sistema.
          &emsp;Diante da eventual "ACESSO", será definida a Forma de Acesso,
          com opção para: Empresa, Email, Celular.
        </p>
        <p>
          &emsp;Caso crie uma conta, deverá ter um dos acesso da Opção para
          poder ser usado como checar sua Pessoa.(medida de Segurança).
        </p>
        <p>
          &emsp;Caso use use Email recebera um comunicado determinando a sua
          "Senha" que terá a duração de 24hs. para que voçê altere.
        </p>
        <p>
          &emsp;Caso use Celular recebera um SMS determinando a sua "Senha" que
          terá a duração de 24hs. para que voçê altere. &emsp;Ao adentrar com o
          acesso recebido, devera conter os dados: C.P.F, chave Login, chave
          PIN. Com o qual deverá ser usado na recuperação caso esqueça seu
          acesso.
        </p>
        <p>
          Assim que for detectado sua Chave de Acesso, o Sistema irá
          redirecionar voce para o Setor do qual vc faz parte.
        </p>
      </M.ContentTextoModulos>
    </CardModalTexto>
  );
};
export default CardAcessoSistema;
