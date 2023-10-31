import * as F from "./stylesfoot";

type PropsFootCab = {
  title?: string;
};
const BarTitleCollunIten = ({ title }: PropsFootCab) => {
  return (
    <F.AreaTitleCollunIten>
      <label>{title}</label>
    </F.AreaTitleCollunIten>
  );
};
export default BarTitleCollunIten;
