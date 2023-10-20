import * as H from './stylesHeader';
import LogoSys from '../../assets/pngs/logosys.png';

export const HeaderLogo = () => {
  return (
    <H.ContainerHPanelMain>
      <H.DivHeardLogo bd_color='#ff0000'>
        <H.ContainerLogoSys oncursor={true} img={LogoSys} onClick={() => window.location.reload()}/>
      </H.DivHeardLogo>
      <H.DivHeardLogo bd_color='#2bff00'>
        <h1>Acesso ao Login.</h1>
      </H.DivHeardLogo>
      <H.DivHeardLogo bd_color='#ffee00'>
        <h1>Header3</h1>
      </H.DivHeardLogo>
    </H.ContainerHPanelMain>
  );
};

export default HeaderLogo;
