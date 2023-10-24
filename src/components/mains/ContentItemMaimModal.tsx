import React from "react";

import * as MM from "./stylesMainPg";

type Props = {
  children?: React.ReactNode | JSX.Element;
  liberado?: boolean;
  imgdiv?: string;
  img?: string;
  titlebtn?: string;
  txt?: string;
  // onClick?: () => void;
};
const ContentItemMainModal = ({ liberado, imgdiv, txt, children }: Props) => {
  return (
    <MM.ContainerMainButtonModal liberado={liberado}>
      <MM.ContainerDivImgItem imgdiv={imgdiv} />
      {txt}
      <span>
        {children}
        {/* <ButtonImgMain liberado= {liberado} img={img} titlebtn={titlebtn} onClick={ onClick }/> */}
      </span>
    </MM.ContainerMainButtonModal>
  );
};

export default ContentItemMainModal;
