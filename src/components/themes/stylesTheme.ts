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
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: #2b2bf7;
  font-family: 'Courier New', Courier, monospace, Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  line-height: normal;
  color: #ffffff;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 5px 2px 0px 10px;
    padding: 0px 2px 0px 2px;
    /* line-height: normal;
    font-size: 16px;
    line-height: 1.2; */
    background: transparent;
    background-color: transparent;
  }
  /* h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 5px 2px 0px 10px;
    padding: 0px 2px 0px 2px;
    background: transparent;
    background-color: transparent;
  } */

  h1 {
    line-height: 30px;
    font-size: 28px;
    //color: #ffffff;
  }
  h2 {
    line-height: 26px;
    font-size: 24px;
    //color: #ffffff;
  }
  h3 {
    line-height: 22px;
    font-size: 20px;
    //color: #ffffff;
  }
  h4 {
    line-height: 20px;
    font-size: 18px;
    //color: #ffffff;
  }
  h5 {
    line-height: 18px;
    font-size: 16px;
    //color: #ffffff;
  }
  li {
    list-style-type: none;
    margin-left: 15px;
  }
  p {
    margin: 0px 5px 0px 5px;
    font-size: 16px;
    //color: #ffffff;
  }
  label {
    padding: 0px 10px 0px 10px;
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 18x;
    line-height: 20px;
    font-weight: bold;
  }
  /* button {
    border: 3px double;
    border-color: #9899ba;
    border-radius: 10px;
    //background-color: #d7d7e3;
  } */
`;
//////////////////////////////////////////////////////
// contente da Area do theme
export const ContainerLogo = styled.div`
  background-color: #02044A;
  color: #ffffff;
  min-height: 100vh;
  width: 100%;
  display: flex;
 `;
//////////////////////////////////////////////////////
// div de divisão de painel do theme
export const DivisionHPanel = styled.div<{pxheigt? : string}>`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: ${props => (props.pxheigt ? 'pxheigt' : '1px')};
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
