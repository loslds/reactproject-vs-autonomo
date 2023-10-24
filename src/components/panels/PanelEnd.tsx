import React from 'react'

import * as P from './stylePanel';

type PropsPnlEnd = {
  children?: React.ReactNode | JSX.Element;
};
const PanelEnd: React.FC<PropsPnlEnd> = ({ children }) => {
  return (
    <P.ContainerPanelEnd>{children}</P.ContainerPanelEnd>
  );
};
export default PanelEnd;
