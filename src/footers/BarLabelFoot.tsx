import * as F from "./stylesfoot";

type PropsLabelFoot = {
  testo?: string;
};
const BarLabelFoot = ({ testo }: PropsLabelFoot) => {
  return (
    <F.AreaTitleCollunIten>
      <label>{testo}</label>
    </F.AreaTitleCollunIten>
  );
};
export default BarLabelFoot;
