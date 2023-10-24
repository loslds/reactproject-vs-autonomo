import React from 'react'

import * as P from './stylePanel';

type PropsPnlMCAround = {
  children?: React.ReactNode | JSX.Element;
};
const PanelAround: React.FC<PropsPnlMCAround> = ({ children }) => {
  return (
    <P.ContainerPanelMC>
      <P.ContainerPanelMCAround>
        {children}
      </P.ContainerPanelMCAround>
    </P.ContainerPanelMC>
  );
};
export default PanelAround;