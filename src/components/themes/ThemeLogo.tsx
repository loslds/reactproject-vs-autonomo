import * as L from "./stylesTheme";
import { HeaderLogo } from "../headers/HeaderLogo";
//import * as P from "../../panels/stylePanel";
type PropsThemeLogo = {
  children: React.ReactNode;
};
export const ThemeLogo = ({ children }: PropsThemeLogo) => {
  return (
    <L.ContainerLogoMain>
      <L.ContainerLogoMainFlex>
        <HeaderLogo />
        {/* <L.DivisionHPanel /> */}
        <L.ContainerLogoStep>
          <L.ContainerLogoSidebar>
            <h2>sidebar</h2>
          </L.ContainerLogoSidebar>
          <L.ContainerLogoPage>{children}</L.ContainerLogoPage>
        </L.ContainerLogoStep>
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
