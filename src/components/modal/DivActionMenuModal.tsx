import * as M from "./stylesModal";

import DivTitleModal from "./DivTitleModal";

type Props = {
  onClick?: () => void;
  path?: string;
  title?: string;
  img?: string;
  id?: string;
};
const DivActionMenuModal = ({ id, img, path, title, onClick }: Props) => {
  return (
    <M.ContainerActionItemDivMenu>
      <M.ContainerActClickModalItemMenu id={id} path={path} onClick={onClick}>
        <M.ContainerCenterImgDiv img={img} />
        <DivTitleModal title={title} />
      </M.ContainerActClickModalItemMenu>
    </M.ContainerActionItemDivMenu>
  );
};

export default DivActionMenuModal;
