import * as F from './stylesfoot';

type PropsFootCab = {
  title?: string;
};
const BarTitleItemLeft= ({ title }: PropsFootCab) => {
  return (
    <F.AreaTitleItenLeft>
      <label>{title}</label>
    </F.AreaTitleItenLeft>
  );
};
export default BarTitleItemLeft;


