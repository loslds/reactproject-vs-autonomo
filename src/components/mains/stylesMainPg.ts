import styled from 'styled-components';

import semimg from '../../assets/images/svgs/semimg.svg';


////////////////////////////////////////
// inicio componente MainPg
///////////////////////////////////////
export const ContainerMains = styled.div`
  border: 0px;
  top: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 60px;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  display: flex;
  color: Black;
  background: transparent;
`;
export const ContainerMainsFlex = styled.div`
  border: none;
  margin: 0px 0px 0px 5px;
  padding: 0px 0px 0px 0px;
  width: 99%;
  font-size: 16px;
  font-style: normal;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: transparent;
`;
//** fim componente MainPg */
////////////////////////////////////////
// Area de itens dentro do componente MainPg
////////////////////////////////////////

export const ContainerMainsItens = styled.div`
  border: 5px silver groove;
  margin: 5px 0px 5px 0px;
  padding: 0px 0px 0px 0px;
  min-width: 100%;
  font-size: 14px;
  font-style: normal;
  flex: 1 1 0%;
  flex-flow: nowrap;
  justify-content: column;
  align-items: center;
  align-content: center;
  background-color: #fdfdf0;
  :hover {
    border-color : yellow;
  }
  `;

//** fim  Area de itens dentro do componente MainPg */
////////////////////////////////////////
// Area do Titulo dentro do componente MainPg
// inicio componete MainTitle
///////////////////////////////////////
export const ContainerMainTitle = styled.div`
border: none;
padding: 0px auto;
margin: 0px auto;
min-width: 100%;
font-size: 16px;
font-style: normal;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
align-content: center;
`;
export const ContainerMainTitleFlex = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 18px;
  text-align: center;
  background-color: #a7e6fa;
`;
//** fim componete MainTitle */
////////////////////////////////////////
// inicio componente ContainerPanelItens
///////////////////////////////////////

export const ContainerPanelMainsItems = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
  min-height: 60px;
  background-color: transparent;
`;
export const FlexPanelMainsItems = styled.div`
  border: 0px;
  width: 900px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 50px;
  font-size: 24px;
  @media (min-width: 440px) {
    justify-content: center;
    align-items: center;
  }
`;
//** fim componente ContainerPanelItens */
////////////////////////////////////////
// inicio Area de Itens dentro do componente MainPg
///////////////////////////////////////

export const ContainerMainItem = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background-color: transparent;
  :hover {
    border-color : yellow;
  }
  label {
    padding: 0px 10px 0px 10px;
    width: 100%;
    font-size: 12px;
    font-family: normal;
  }
`;
//** fim Area de Itens dentro do componente MainPg */
///////////////////////////////////
// inicio componete MainImgItem
///////////////////////////////////////

export const ContainerMainImgItem = styled.div`
  border: 3px solid red;
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 2px;
  min-width: 65%;
  display: flex;
  min-height: 65px;
  display: flex;
  flex-wrap: nowrap;
  float: left;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background-color: transparent;
  color: black;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  label {
    font-size: 18px;
    line-height: 20px;
  }
`;
//** fim componete MainImgItem */
///////////////////////////////////////////////
//** inicio componente ButtonItemMainPg  */
// inicio componente ContainerPanelItens
///////////////////////////////////////
type Props = {
  liberado? : boolean;
};
export const ContainerMainButton = styled.div<Props>`
  border: 3px solid red;
  border-color: #ddffaa;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 1px 2px 1px 2px;
  min-width: 33%;
  display: flex;
  float: left;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #25cd89;
  color: #000;
  font-weight: bold;
  cursor: default;

  &:hover {
    border-color: ${props => ( props.liberado ? 'orange' : 'red')};
  }

  span {
    margin: 0px 2px 0px 2px;
    display: inline-flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
  }
`;

export const ContainerMainButtonModal = styled.div<Props>`
  border: 5px solid;
  border-color: #ddffaa;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 1px 2px 1px 2px;
  min-width: 33%;
  display: flex;
  float: left;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: #25cd89;
  color: #000;
  font-size: 12px;
  font-weight: bold;
  cursor: default;

  &:hover {
    border-color: ${props => ( props.liberado ? 'orange' : 'red')};
    // background-color: ${props => ( props.liberado ? '#ddffaa' : 'red' )};
    /*rgba(255, 92, 92,0.4);*/
    //background-color: #7df0c1;
  }
  span {
    margin: 0px 0px 0px 0px;
    /* display: flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center; */
  }
`;

type PropsMainButton = {
 img?: string;
 liberado?: boolean;
 modulo?: string;
};
export const MainButton = styled.button<PropsMainButton>`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 10px;
  min-height: 33px;
  width: 33px;
  color: black;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: ${props => ( props.liberado ? 'pointer' : 'help' )};
  outline: none;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
//** Fim componente ContainerPanelItens  */
export const ContainerDivImgItem = styled.div<{ imgdiv? : string }>`
  border: none; /*1px green solid;*/
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 0px 0px;
  width: 35%;
  height: 35px;
  //direction: left;
  //display: flex;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  //align-items: center;
  background-color: transparent;
  background-image: url(${({ imgdiv }) => imgdiv || semimg});
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: center;
`;

///////////////////
//**  */
//////////////////
///////////////

// export const ContainerMainItensRigth = styled.div`
//   border: 3px silver groove;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 80%;
//   min-height: 45px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: end;
//   align-items: center;
//   align-content: center;
//   background-color: transparent;
//   :hover {
//     border-color : yellow;
//   }
//   label {
//     padding: 0px 10px 0px 10px;
//     width: 100%;
//     font-size: 18px;
//     font-family: normal;
//   }
// ;`

// export const ContainerMainImgButton = styled.div`
//   border: 1px solid black;
//   padding: 0px 0px 0px 0px;
//   margin: 5px 5px 5px 5px;
//   min-width: 15%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   background-color: transparent;
//   color: black;
//   font-size: 14px;
//   line-height: 16px;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
//   label {
//     font-size: 18px;
//     line-height: 20px;
//   }
// `;





