import React from 'react';
import * as F from './stylesfoot';

type PropsFootColuuns = {
  isclick?: boolean;
  pwidth?: string;
  onClick?: () => void;
  children?: React.ReactNode | JSX.Element;

};
const BarColunsFoot: React.FC<PropsFootColuuns> = ({  isclick, pwidth, onClick, children }) => {
  return (
    <F.AreaCollun isclick={isclick} pwidth={pwidth } onClick={onClick}>
      {children}
    </F.AreaCollun>
  );
};
export default BarColunsFoot;
