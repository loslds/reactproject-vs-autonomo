import * as S from "./stylesSidebar";

type PropsItnsMd = {
  children?: React.ReactNode | JSX.Element;
};

const ContainerItensMenu = ({ children }: PropsItnsMd) => {
  return <S.ContainerItensModulo>{children}</S.ContainerItensModulo>;
};

export default ContainerItensMenu;
