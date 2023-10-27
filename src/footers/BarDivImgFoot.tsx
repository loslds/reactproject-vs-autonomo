import React from 'react';
import * as F from './stylesfoot';

type PropsDivImgFoot = {
  heightdiv? : string;
  widthdiv? : string;
  imgdiv?: string;
  children?: React.ReactNode | JSX.Element;
};
const BarDivImgFoot: React.FC<PropsDivImgFoot> = ({heightdiv, widthdiv, imgdiv, children }) => {
  return (
    <F.DivImgAreaContent divheight={heightdiv} divwidth={widthdiv} img={imgdiv}>
      {children}
    </F.DivImgAreaContent>
  );
};
export default BarDivImgFoot;
