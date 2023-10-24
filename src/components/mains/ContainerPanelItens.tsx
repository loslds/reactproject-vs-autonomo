import * as MM from "./stylesMainPg";

type PropsMainCPItens = {
  children?: React.ReactNode | JSX.Element;
};
const ContainerPanelItens = ({ children }: PropsMainCPItens) => {
  return (
    <MM.ContainerPanelMainsItems>
      <MM.FlexPanelMainsItems>{children}</MM.FlexPanelMainsItems>
    </MM.ContainerPanelMainsItems>
  );
};

export default ContainerPanelItens;
