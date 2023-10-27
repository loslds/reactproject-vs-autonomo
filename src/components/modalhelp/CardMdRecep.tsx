import * as M from "../modal/stylesModal";

import CardModalTexto from "../modal/CardModalTexto";

import servicos from "../../assets/pngs/servicos.png";

const CardMdRecep = () => {
  return (
    <CardModalTexto>
      <M.ContentTextoModulos>
        <M.ContainerHeardModalMain>
          <M.ContainerModalImg
            ispx={true}
            pminheight={"60px"}
            pwidth={"80px"}
            img={servicos}
          />
        </M.ContainerHeardModalMain>
        <label>Sintese:</label>
        <label>Acesso ao Modulo " R E C E P Ç Ã O ".</label>
      </M.ContentTextoModulos>
    </CardModalTexto>
  );
};
export default CardMdRecep;
