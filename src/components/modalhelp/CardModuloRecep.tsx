import * as M from "../modal/stylesModal";

import CardModalTexto from "../modal/CardModalTexto";

import semimg from "../../assets/images/svgs/semimg.svg";

type PropsMDRecep = {
  isscroll?: boolean;
};
const CardModuloRecep = ({ isscroll }: PropsMDRecep) => {
  return (
    <CardModalTexto>
      <M.ContentTextoModulos isscroll={isscroll}>
        <M.ContainerHeardModalMain>
          <M.ContainerModalImg
            pminheight={"60px"}
            pwidth={"80px"}
            img={semimg}
          />
        </M.ContainerHeardModalMain>
        <h4>Conceito de Recpção.</h4>
        <label>Ao receber os Cliêntes :</label>
        <p> 01º - Transmitir simpatia e respeito.</p>
        <p> 02º - Prestimos de atenção e ouvir-los com todo cuidado.</p>
        <p>
          {" "}
          03º - Procurar decidir a melhor forma de Prestação no Serviço a ser
          Executado.
        </p>
        <p>
          {" "}
          &emsp;&emsp;Se necessário, explicar motivos do possível trabalho não
          seja adequado diante do apresentado ou requerido e indicar a melhor
          forma.
        </p>
        <p> 04º - Determinar se existe Serviço de Design.</p>
        <p> &emsp;&emsp;Caso já existente ou se deverá desenvolver.</p>
        <p>
          {" "}
          05º - Determinar Tamanho de Largura e de Comprimento de cada objeto.
        </p>
        <p> 06º - Determinar Cores de cada objeto.</p>
        <p>
          {" "}
          &emsp;&emsp;Não se esquecer de enunciar o uso de linhas especiais , se
          o caso for.
        </p>
        <p> 07º - Determinar qual o tipo de Objeto será Executado.</p>
        <p>
          {" "}
          &emsp;&emsp;Bordado sobre peça, Bordado sobre Bonés,Chapéus, Renda, ou
          tecido, etc...
        </p>
        <p>
          {" "}
          &emsp;&emsp;Se terá Aplique, se o material é da Empresa ou do Cliênte.
        </p>
        <p> &emsp;&emsp;Se terá Corte Laser ou Gravação no Aplique.</p>
        <p> &emsp;&emsp;Se terá Somente Gravação a Laser no objeto.</p>
        <p> 08º - Determinar Valores para cada objeto.</p>
        <p> &emsp;&emsp;Caso Bordados anunciar Valor.</p>
        <p> &emsp;&emsp;Caso Desenvolvimento de Arte(Design) anunciar Valor.</p>
        <p> &emsp;&emsp;Caso Corte Laser anunciar Valor.</p>
        <p> &emsp;&emsp;Caso Gravação a Laser anunciar Valor.</p>
        <p> 09º - Quanto do Material.</p>
        <p> &emsp;&emsp; Material da Empresa ou Cliente.</p>
        <p> &emsp;&emsp; Material se encontra na Empresa ou Aguarda obter.</p>
        <p> 10º - Quanto a Forma de Pagamento.</p>
        <p> 11º - Determinar a Data, período, e hora para entrega Serviço.</p>
        <p> 12º - Registrar Nome do Cliênte, telefone de contato.</p>
        <p> &emsp;&emsp; No atendimento Inicial.</p>
        <p> &emsp;&emsp; No atendimento Final.</p>
        <p>colocar link</p>
      </M.ContentTextoModulos>
    </CardModalTexto>
  );
};
export default CardModuloRecep;
