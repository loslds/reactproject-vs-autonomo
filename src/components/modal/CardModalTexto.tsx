import * as M from "../../components/modal/stylesModal";

type Props = {
  id?: string;
  children?: React.ReactNode;
};

const CardModalTexto = ({ id, children }: Props) => {
  return <M.ContainerModalTexto id={id}>{children}</M.ContainerModalTexto>;
};

export default CardModalTexto;
