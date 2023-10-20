import React from 'react'

import * as P from './stylePanel';

type PropsPnlForm = {
  children?: React.ReactNode | JSX.Element;
};

const PanelForm: React.FC<PropsPnlForm> = ({ children }) => {
  return (
    <P.ContainerPanelMain>
      <P.ContainerPanelMainFlex>
        {children}
      </P.ContainerPanelMainFlex>
    </P.ContainerPanelMain>
  );
};
export default PanelForm;

