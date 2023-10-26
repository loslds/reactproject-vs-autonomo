import * as L from './stylesTheme';
import HeaderLogo from '../headers/HeaderLogo';
import BarSideMenu from '../sidebar/BarSideMenu';
//import * as P from "../../panels/stylePanel";
type PropsThemeLogo = {
  children: React.ReactNode;
};
export const ThemeLogo = ({ children }: PropsThemeLogo) => {
  return (
    <L.ContainerLogoMain>
      <L.ContainerLogoMainFlex>
        <HeaderLogo loginonoff={false} />
        <L.DivisionHPanel />
        <BarSideMenu loginonoff={true} />
        <L.DivisionHPanel />
        <L.ContainerPage>
          {children}
        </L.ContainerPage>
        <L.DivisionHPanel />
        <h3>footer</h3>
      </L.ContainerLogoMainFlex>
    </L.ContainerLogoMain>

    // <L.ContainerLogo>
    //   <L.AreaLogo>
    //     <HeaderLogo />
    //     <L.StepLogo>
    //       <L.SidebarLogo>sidebar</L.SidebarLogo>
    //       <L.PageLogo>{children}</L.PageLogo>
    //     </L.StepLogo>
    //   </L.AreaLogo>
    // </L.ContainerLogo>
  );
};
