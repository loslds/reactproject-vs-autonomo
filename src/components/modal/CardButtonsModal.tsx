import React from "react";

import * as M from "./stylesModal";

type PropsCardBtMdl = {
  id?: string;
  children?: React.ReactNode | JSX.Element;
};
const CardButtonsModal = ({ id, children }: PropsCardBtMdl) => {
  return <M.ContainerButtonModal id={id}>{children}</M.ContainerButtonModal>;
};

export default CardButtonsModal;
