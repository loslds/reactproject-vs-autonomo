//import React from "react";

import * as M from "./stylesModal";

type PropsBtMdl = {
  img?: string;
  titbtn?: string;
  //onClick?: React.ReactNode | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonModal = ({ titbtn, img, onClick }: PropsBtMdl) => {
  return <M.ButtonModalImg img={img} title={titbtn} onClick={onClick} />;
};
export default ButtonModal;
