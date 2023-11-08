import styled from "styled-components";

import semimg from "../assets/svgs/semimg.svg";

export const Container = styled.div`
  border: 0;
  max-width: 100%;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
`;
export const ContainerMenuPage = styled.div`
  border: none;
  margin: 0px 0px 0px 2px;
  padding: 0px 0px 0px 0px;
  max-width: 99%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
//////////////////////////////////////////////////////
// div de divisão de painel do theme
export const DivisionHPanel = styled.div<{pxheigt? : string}>`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: ${props => (props.pxheigt ? 'pxheigt' : '1px')};
  width: 99.5%;
  display: flex;
  background-color: #7f7fbb;
`;
/////////////////////////////////////////////
/** botão da Pagina */
export const ContainerButtonImgBg = styled.div`
  border: 1px solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  //min-height: 45px;
  min-width: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  color: white;
`;

export const ButtonsImgPg = styled.button<{ img?: string }>`
  border: 0;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  // min-width: 45px;
  min-height: 45px;
  display: flex;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  font-size: 16px;
`;
//////////////////////////////////////
export const ContainerPanelMainLeftButton = styled.div`
  border: none;/* 1px solid red; */
  margin: 2px 0px 2px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  align-content: center;
  background: transparent;
`;


export const ContainerButtonsPage = styled.div`
  border: none;
  margin: 3px 10px 3px 3px;
  padding: 0px 0px 0px 0px;
  //min-width: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-content: center;
  background: transparent;
  label {
    padding: 0px 0px 0px 0px;
    margin: 3px 5px 3px 10px;
    font-style: normal;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
    color: #ffffff;
    &:hover {
    color: #000;
  }

  }
`;

export const DivLabelPg = styled.div<{bd_color?: string }>`
  padding: 0px  5px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //align-items: center;
  align-content: center;
  border-radius: 5px;
  border: 2px solid;
  border-color: #fff;
  background-color: transparent;
  color: #fff;
  &:hover {
    border: 2px solid;
    border-color: ${props => (props.bd_color ? 'bd_color' : 'transparent')};
    background-color: #e4e4e4;
    color: #000;
  }
`;

export const ContainerPgLabelRigth = styled.div`
  /* border: 1px blueviolet solid; */
  border: none;/*1px solid #2fd7d2;*/
  padding: 0px 0px 0px 0px;
  margin: 3px 0px 3px 0px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color: #ffffff;
  /* label {
    padding: 0px 0px 0px 0px;
    margin: 3px 5px 3px 10px;
    font-style: normal;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
    color: #ffffff;
    &:hover {
//    background-color: #e4e4e4;
    color: #000;
  } */
`;

type PropsBtn = {
  img?: string;
  title?: string;
  //onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonPg = styled.button<PropsBtn>`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 0px 5px 0px 5px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  background: transparent;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 45px;
  width: 50px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
//    background-color: #e4e4e4;
    color: #000;
  }
`;
