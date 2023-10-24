import React from "react";

import * as P from "./stylePanel";

type PropsPnlMain = {
  children?: React.ReactNode | JSX.Element;
};
const PanelMain: React.FC<PropsPnlMain> = ({ children }) => {
  return (
    <P.ContainerPanelMain>
      <P.ContainerPanelMainFlex>
        <P.ContainerPanelMainCard>{children}</P.ContainerPanelMainCard>
      </P.ContainerPanelMainFlex>
    </P.ContainerPanelMain>
  );
};
export default PanelMain;
