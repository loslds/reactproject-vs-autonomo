import React from 'react';
import * as F from './stylesfoot';

type PropsAreaContent = {
  children?: React.ReactNode | JSX.Element;
  txt?: string;

};
const BarAreaContentFoot: React.FC<PropsAreaContent> = ({ txt, children }) => {
  return (
    <F.AreaContent>
       {children}
       <label>{txt}</label>
    </F.AreaContent>
  );
};
export default BarAreaContentFoot;

