import * as L from './stylesTheme';
import { HeaderLogo } from '../headers/HeaderLogo';
type PropsThemeLogo = {
  children: React.ReactNode;
};
export const ThemeLogo = ({ children }: PropsThemeLogo) => {
  return (
    <L.ContainerLogo>
      <L.AreaLogo>
        <HeaderLogo />
        <L.StepLogo>
          <L.SidebarLogo>sidebar</L.SidebarLogo>
          <L.PageLogo>{children}</L.PageLogo>
        </L.StepLogo>
      </L.AreaLogo>
    </L.ContainerLogo>
  );
};
