import React from "react";

import * as M from "./stylesModal";
type Props = {
  id?: string;
  titulo?: string;
  // children?: React.ReactNode;
};
const TitleModal: React.FC<Props> = ({ id, titulo }) => {
  return (
    <M.ContainerModalTitle id={id}>{<h4>{titulo}</h4>}</M.ContainerModalTitle>
  );
};
export default TitleModal;
