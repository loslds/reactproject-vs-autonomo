import * as M from "../modal/stylesModal";

import CardModalTexto from "../modal/CardModalTexto";

import negado from "../../assets/images/svgs/negado.svg";

const CardImgNeg = () => {
  return (
    <CardModalTexto>
      <M.ContainerHeardModalMain>
        <M.ContainerModalImg pminheight={"60px"} pwidth={"80px"} img={negado} />
      </M.ContainerHeardModalMain>
      <label>Acesso NEGADO.</label>
      <p>No momento seus requisitos não estão habilitados.</p>
    </CardModalTexto>
  );
};
export default CardImgNeg;
