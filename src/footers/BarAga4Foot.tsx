
import * as F from './stylesfoot';

type PropsFootCab = {
  title?: string;
};
const BarAga4Foot= ({ title }: PropsFootCab) => {
  return (
    <F.AreaReaderAga4>
      <h4>{title}</h4>
    </F.AreaReaderAga4>
  );
};
export default BarAga4Foot;


