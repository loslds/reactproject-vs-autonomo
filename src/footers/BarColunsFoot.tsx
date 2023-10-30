import * as F from './stylesfoot';

type PropsFootColuuns = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
const BarColunsFoot = ({ pwidth, children }:PropsFootColuuns) => {
  return (
    <F.AreaCollun pwidth={pwidth }>
      {children}
    </F.AreaCollun>
  );
};
export default BarColunsFoot;