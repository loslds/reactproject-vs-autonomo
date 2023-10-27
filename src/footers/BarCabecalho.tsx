import React from 'react';
import * as F from './stylesfoot';

type PropsFootCab = {
  title?: string;
};
const BarCabecalho: React.FC<PropsFootCab> = ({ title }) => {
  return (
    <F.AreaCabecalho>
      <h4>{title}</h4>
    </F.AreaCabecalho>
  );
};
export default BarCabecalho;


