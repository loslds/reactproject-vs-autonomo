import * as L from "./stylesTheme";
import HeaderLogo from "../headers/HeaderLogo";
import BarSideMenu from "../sidebar/BarSideMenuLogin";
import FootLogin from "../footers/FootLogin";

type PropsThemeLogo = {
  children: React.ReactNode;
};
export const ThemeLogo = ({ children }: PropsThemeLogo) => {
  return (
    <L.ContainerLogoMain>
      {/* container area */}
      <L.ContainerLogoMainFlex>
        <HeaderLogo />

        <L.DivisionHPanel pxheigt="3px" />

        {/* container page */}
        <L.ContainerPage>
          {/* container step */}
          <BarSideMenu />

          <L.DivisionHPanel />

          {children}
        </L.ContainerPage>
        <L.DivisionHPanel />

        {/* container foot */}
        <FootLogin />
      </L.ContainerLogoMainFlex>
    </L.ContainerLogoMain>
  );
};
