import React from 'react'

import * as P from './stylePanel';

type PropsPnlLeft = {
  children?: React.ReactNode | JSX.Element;
};
const PanelLeft: React.FC<PropsPnlLeft> = ({ children }) => {
  return (
    <P.ContainerPanelLeft>{children}</P.ContainerPanelLeft>
  );
};
export default PanelLeft;
