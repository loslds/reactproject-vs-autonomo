import * as H from "./stylesHeader";

type PropsHeader = {
  children?: React.ReactNode | JSX.Element;
};

const ContainerHeaderMain= ({ children }: PropsHeader) => {
  return <H.ContainerHPanelMain>{children}</H.ContainerHPanelMain>;
};

export default ContainerHeaderMain;
