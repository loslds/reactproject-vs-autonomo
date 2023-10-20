import styled from 'styled-components';

// o mesmo que ContainerLogo
export const ContainerLogoMain = styled.div`
  border: none;
  top: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #2b2bf7;
  color: #fff;
  h1 {
    margin: 0 0 0 10px;
    padding: 0;
    font-size: 28px;
  }
  p {
    margin: 0 0 0 20px;
    font-size: 14px;
    color: #b8b8d4;
  }
`;
//////////////////////////////////////////////////////
export const ContainerLogo = styled.div`
  background-color: #02044A;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  display: flex;
 `;
//////////////////////////////////////////////////////
// dive de divisão de painel

export const DivisionHPanel = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 1px;
  width: 100%;
  display: flex;
  background-color: #7f7fbb;
`;

// o mesmo que Container Area
/** quota da flexão do corpo  sem Borda */
export const ContainerLogoMainFlex = styled.div`
  border: 0px;
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  width: 80%;
  display: flex;
  flex-direction: column;

  /* align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent; */
`;
////////////////////////////////////////////////
export const AreaLogo = styled.div`
  margin: 0;
  min-height: 100%;
  max-width: 980px;
  display: flex;
  flex-direction: column;
`;
////////////////////////////////////////////////
// o mesmo que Container Step
export const ContainerLogoStep = styled.div`
  border: 1px dashed #2bda0c;
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  display: flex;
`;
////////////////////////////////////////////////
export const StepLogo = styled.div`
  width: 100%;
  display: flex;
`;
////////////////////////////////////////////////
// o mesmo que SidebarLogo
export const ContainerLogoSidebar = styled.div`
  width: 100%;
  width: 250px;
  border-right: 3px solid #16195C;
`;
////////////////////////////////////////////////
export const SidebarLogo = styled.div`
  width: 250px;
  border-right: 3px solid #16195C;
`;
////////////////////////////////////////////////
// o mesmo que PageLogo
export const ContainerLogoPage = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;

////////////////////////////////////////////////
export const PageLogo = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;
////////////////////////////////////////////////
