import React from 'react';
import * as F from './stylesfoot';

type PropsFootBarBtn = {
  imgdiv?: string;
  txt?: string;
  imgbtn?: string;
  titlebtn?: string;
};
const BarButtonsCard: React.FC<PropsFootBarBtn> = ({ imgdiv, txt, imgbtn, titlebtn }) => {
  return (
    <F.AreaButtons>
      <F.ButtonsFoot title='oi....'>
        <F.DivImgAreaButton img={imgdiv} />
        {txt}
        <F.DivImgAreaButton img={imgdiv} />
      </F.ButtonsFoot>
    </F.AreaButtons>
  );
};
export default BarButtonsCard;
