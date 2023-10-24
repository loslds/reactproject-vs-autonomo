import * as MM from "./stylesMainPg";

type Props = {
  img?: string;
  titlebtn?: string;
  liberado?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonImgMain = ({ liberado, img, titlebtn, onClick }: Props) => {
  return (
    <MM.MainButton
      liberado={liberado}
      img={img}
      title={titlebtn}
      onClick={onClick}
    />
  );
};
export default ButtonImgMain;
