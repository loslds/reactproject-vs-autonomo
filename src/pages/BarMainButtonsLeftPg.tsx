import * as Pg from "./stylespg";

type PropsPnlManButton = {
  children?: React.ReactNode | JSX.Element;
};

const BarMainButtonsLeftPg = ({ children }: PropsPnlManButton) => {
  return (
    <Pg.ContainerPanelMainLeftButton>
      {children}
    </Pg.ContainerPanelMainLeftButton>
  );
};

export default BarMainButtonsLeftPg;
