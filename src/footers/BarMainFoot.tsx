import React from 'react';
import * as F from './stylesfoot';

type PropsFootHome = {
  children?: React.ReactNode | JSX.Element;
};
const BarMainFoot: React.FC<PropsFootHome> = ({ children }) => {

  return (
    <F.AreaContainer>
      <F.AreaFlex>
        {children}
      </F.AreaFlex>
    </F.AreaContainer>
  );
};
export default BarMainFoot;
