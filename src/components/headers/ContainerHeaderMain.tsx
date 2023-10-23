import * as H from "./stylesHeader";

type PropsHeader = {
  children?: React.ReactNode | JSX.Element;
};

const ContainerHeaderMain: React.FC<PropsHeader> = ({ children }) => {
  return <H.ContainerHPanelMain>{children}</H.ContainerHPanelMain>;
};

export default ContainerHeaderMain;
