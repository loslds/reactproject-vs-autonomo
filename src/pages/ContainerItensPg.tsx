import * as Pg from "./stylespg";

type PropsItensPg = {
  bdcolor?: string;
  children?: React.ReactNode | JSX.Element;
};

const ContainerItensPg = ({ children, bdcolor }: PropsItensPg) => {
  return <Pg.DivLabelPg bd_color={bdcolor}>{children}</Pg.DivLabelPg>;
};

export default ContainerItensPg;
