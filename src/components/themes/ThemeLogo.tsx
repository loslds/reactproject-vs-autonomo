import * as L from "./stylesTheme";
import HeaderLogo from "../headers/HeaderLogo";
import BarSideMenu from "../sidebar/BarSideMenuLogin";
import FootLogin from "../../footers/FootLogin";

type PropsThemeLogo = {
  children: React.ReactNode;
};
export const ThemeLogo = ({ children }: PropsThemeLogo) => {
  return (
    <L.ContainerLogoMain>
      <L.ContainerLogoMainFlex>
        <HeaderLogo />
        <L.DivisionHPanel />
        <BarSideMenu />
        <L.DivisionHPanel />
        <L.ContainerPage>{children}</L.ContainerPage>
        <L.DivisionHPanel />
        <FootLogin />
      </L.ContainerLogoMainFlex>
    </L.ContainerLogoMain>
  );
};
