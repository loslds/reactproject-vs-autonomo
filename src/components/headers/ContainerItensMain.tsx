import * as H from "./stylesHeader";

type PropsItensHeader = {
  children?: React.ReactNode | JSX.Element;
};

const ContainerItensHeaderMain: React.FC<PropsItensHeader> = ({ children }) => {
  return <H.DivHeardLogo>{children}</H.DivHeardLogo>;
};

export default ContainerItensHeaderMain;
