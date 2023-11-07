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

        <L.DivisionHPanel />
        {/* container step */}
        <BarSideMenu />

        <L.DivisionHPanel />

        {/* container page */}
        <L.ContainerPage>{children}</L.ContainerPage>

        <L.DivisionHPanel />

        {/* container foot */}
        <FootLogin />
      </L.ContainerLogoMainFlex>
    </L.ContainerLogoMain>
  );
};
