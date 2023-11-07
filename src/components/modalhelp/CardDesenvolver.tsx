import * as M from "../modal/stylesModal";

import CardModalTexto from "../modal/CardModalTexto";

import negado from "../../assets/svgs/negado.svg";

const CardDesemvolver = () => {
  return (
    <CardModalTexto>
      <M.ContainerHeardModalMain>
        <M.ContainerModalImg
          pminheight={"60px"}
          pwidth={"80px"}
          img={negado}
        />
      </M.ContainerHeardModalMain>
      <label>Serviço em Desemvolvimento.</label>
      <p>No momento aguardando programação de aplicativo.</p>
      <p>Desculpas pelo transtorno.</p>
    </CardModalTexto>
  );
};
export default CardDesemvolver;
