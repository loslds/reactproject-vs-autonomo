import React from "react";
import * as MM from "./stylesMainPg";

type Props = {
  id?: string;
  children?: React.ReactNode | JSX.Element;
};
const CardItemMaim = ({ id, children }: Props) => {
  return <MM.ContainerMainsItens id={id}>{children}</MM.ContainerMainsItens>;
};

export default CardItemMaim;
