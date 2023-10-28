import React from 'react';
import * as F from './stylesfoot';

type PropsFootCab = {
  title?: string;
};
const BarCabecalho= ({ title }: PropsFootCab) => {
  return (
    <F.AreaCabecalho>
      <h4>{title}</h4>
    </F.AreaCabecalho>
  );
};
export default BarCabecalho;


