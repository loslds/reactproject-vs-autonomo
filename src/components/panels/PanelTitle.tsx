import React from 'react'

import * as P from './stylePanel';

type PropsPnlTitle = {
  children?: React.ReactNode | JSX.Element;
};
const PanelTitle: React.FC<PropsPnlTitle> = ({ children }) => {
  return (
    <P.ContainerPanelTitleFlex>{children}</P.ContainerPanelTitleFlex>
  );
};
export default PanelTitle;
