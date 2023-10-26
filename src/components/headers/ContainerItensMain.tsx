import * as H from "./stylesHeader";

type PropsItensHeader = {
  bdcolor?: string;
  children?: React.ReactNode | JSX.Element;
};

const ContainerItensHeaderMain = ({ children, bdcolor }: PropsItensHeader) => {
  return <H.DivHeardLogo bd_color={bdcolor}>{children}</H.DivHeardLogo>;
};

export default ContainerItensHeaderMain;
