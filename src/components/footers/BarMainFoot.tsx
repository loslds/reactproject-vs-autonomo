import React from "react";
import * as F from "./stylesfoot";

type PropsAreaContainer = {
  children?: React.ReactNode | JSX.Element;
};
const BarMainFoot = ({ children }: PropsAreaContainer) => {
  return (
    <F.AreaContainer>
      <F.AreaFlex>{children}</F.AreaFlex>
    </F.AreaContainer>
  );
};
export default BarMainFoot;
