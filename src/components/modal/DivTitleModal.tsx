import * as M from "./stylesModal";

type Props = {
  title?: string;
};
const DivTitleModal = ({ title }: Props) => {
  return (
    <M.ContainerCenterDiv>
      <label>{title}</label>
    </M.ContainerCenterDiv>
  );
};

export default DivTitleModal;
