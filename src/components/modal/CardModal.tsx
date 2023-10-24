//import React from "react";

import * as M from "./stylesModal";

type PropsCardMdl = {
  id?: string;
  children?: React.ReactNode;
};
const CardModal = ({ children }: PropsCardMdl) => {
  return (
    <M.ContainerCard>
      <M.ContainerCardFlex>{children}</M.ContainerCardFlex>
    </M.ContainerCard>
  );
};

export default CardModal;
