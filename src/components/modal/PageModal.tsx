import React from "react";

import * as M from "./stylesModal";

import ButtonModal from "./ButtonModal";
import CardButtonsModal from "./CardButtonsModal";
import CardModal from "./CardModal";

import TitleModal from "./TitleModal";
import closevrm from "../../assets/pngs/closevrm.png";

type PropsModalHlp = {
  id?: string;
  children?: React.ReactNode | JSX.Element;
  ispx?: boolean;
  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  isbtn?: boolean;
  img?: string;
  titbtn?: string;
  onClose?: () => void;
};
const PageModal = ({

  ptop,
  pwidth,
  pheight,
  titulo,
  children,
  onClose,
}: PropsModalHlp) => {
  return (
    <M.Content>
      <M.ContainerModal
        ptop={ptop}
        pwidth={pwidth}
        pheight={pheight}

      >
        <CardModal>
          <TitleModal titulo={titulo} />
          <CardButtonsModal>
            <ButtonModal img={closevrm} onClick={onClose} />
          </CardButtonsModal>
        </CardModal>
        {children}
      </M.ContainerModal>
    </M.Content>
  );
};

export default PageModal;
