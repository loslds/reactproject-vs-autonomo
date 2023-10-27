import styled from 'styled-components';


export const DivTeste = styled.div<{ bg_color?: string; bd_color?: string }>`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 40px;
  width: 100%;
  display: flex;
  border: 2px solid;
  border-color: ${props => (props.bd_color ? 'bd_color' : '#fff')};;
  background-color: ${props => (props.bg_color ? 'bg_color' : 'transparent')};
`;
// o mesmo que ContainerLogo
export const ContainerLogoMain = styled.div`
  border: none;
  top: 0px;
  left: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  //align-content: center;
  background-color: #2b2bf7;
  color: #fff;
  h1,
  h2,
  h3,
  h4 {
    margin: 5px 2px 0px 10px;
    padding: 0px 2px 0px 2px;
    line-height: normal;
    font-size: 16px;
    line-height: 1.2;
    background-color: transparent;
  }
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 16px;
  }
  p {
    margin: 0px 5px 0px 5px;
    padding: 0px 2px 0px 2px;
    color: #000;
    font-size: 14px;
  }
  li {
    list-style-type: none;
    margin-left: 15px;
  }
  p {
    margin: 0px 5px 0px 5px;
    font-size: 14px;
    color: #b8b8d4;
  }
`;
//////////////////////////////////////////////////////
// contente da Area do theme
export const ContainerLogo = styled.div`
  background-color: #02044A;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  display: flex;
 `;
//////////////////////////////////////////////////////
// div de divisão de painel do theme
export const DivisionHPanel = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 1px;
  width: 99%;
  display: flex;
  background-color: #7f7fbb;
`;
//////////////////////////////////////
// content da flexao da Area do theme
export const ContainerLogoMainFlex = styled.div`
  border: none; /* 1px dashed #ff0000; */
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  top: 0px;
  max-width: 80%;
  display: flex;
  //flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column;
  //align-items: center;
  justify-content: space-between;
  align-content: center;
`;
////////////////////////////////////////
// o mesmo que Container Step
export const ContainerMenuPage = styled.div`
  border: 1px dashed #fff;
  margin: 0px 0px 0px 2px;
  padding: 0px 0px 0px 0px;
  max-width: 99%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
////////////////////////////////////////////////
// Container da Area para Pagina no Theme
export const ContainerPage = styled.div`
  border: 1px dashed #fff;
  margin: 0px 0px 0px 2px;
  padding: 0px 0px 0px 0px;
  max-width: 99%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
////////////////////////////////////////////////
