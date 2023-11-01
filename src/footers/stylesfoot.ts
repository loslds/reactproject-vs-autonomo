import styled from 'styled-components';
import semimg from '../assets/svgs/semimg.svg'

////////////////////////////////////////////
/** Content do foot */
////////////////////////////////////////////
export const AreaContainer = styled.div`
  border: none;
  margin: 0px 0px 0px 2px;
  padding: 0px 0px 0px 0px;
  max-width: 99%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  font-family: Verdana, Tahoma, sans-serif;
  font-style: normal;
  color: #000000;
  label {
    padding: 0px 0px 0px 0px;
    margin: 2px 0px 2px 5px;
    line-height: 20px;
    font-size: 18px;
    text-decoration: none;
    color: #000000;
  }
`;

export const AreaFlex = styled.div`
border: none;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
width: 100%;
background-color: transparent; /* #a7e6fa;  #afebf0; #a2dde0; */
display: flex;
flex-flow: row wrap;
align-content: center;
justify-content: space-around;
color: #000000;
`;
////////////////////////////////////////////
/** Content da Area de cada coluna foot */
////////////////////////////////////////////
type Props3Collun = {
  pwidth?: string;
 };
export const Area3Collun = styled.div<Props3Collun>`
  border: 2px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0cqmin 0px 0px 0px;
  margin: 2px 0px 2px 0px;
  width: ${({ pwidth }) => pwidth || '25%'};
  background: #a7e6fa;
  display: flex;
  flex-flow: wrap;
  color: #000000;
`;
////////////////////////////////////////////
/** Content da divisão da Area de cada coluna foot */
////////////////////////////////////////////
export const DivisionVPanel = styled.div`
  border: 0px;
  padding: 0px 1px 0px 1px;
  margin: 0px 1px 0px 1px;
  width: 2px;
  display: flex;
  background-color: #7f7fbb;
  color: #000000;
`;
////////////////////////////////////////////
/** Content da Area para Cabeçalho de cada coluna foot */
////////////////////////////////////////////
export const AreaReaderAga4 = styled.div`
  border-bottom: 1px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 20px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 12px;
  line-height: 14px;
`;
////////////////////////////////////////////
/** Content da Area cada coluna foot */
////////////////////////////////////////////
export const AreaContentCollumItem = styled.div`
  /* border-bottom: 1px solid ;
  border-color: rgba(0, 0, 0, 0.2); */
  border: none;
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: transparent;
  color: #000000;
  p {
   color: #000000;
   font-size: 14px;
  }
`;
////////////////////////////////////////////
/** Content do Conteudo da coluna foot */
////////////////////////////////////////////
export const DivAreaCollunItem = styled.div`
  /* border: 1px solid ;
  border-color: #79797b; */
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 100px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  //align-content: center;
  //align-items: center;
  background: transparent;
  color: #000000;
  :hover {
    border-color: #ffff00;// amarelo
 }
 `;
////////////////////////////////////////////
/** Content da Area do Button foot */
////////////////////////////////////////////
export const DivAreaImgButton = styled.div`
  border: 3px solid;
  border-radius: 45%;
  border-color: #79797b;
  padding: 2px 2px 2px 2px;
  margin: 2px 2px 2px 2px;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  background: transparent;
`;
////////////////////////////////////////////
/** Contentainer Botão foot */
////////////////////////////////////////////
type PropsBtnImgFoot = {
  height? : string;
  width? : string;
  img?: string;
  title?: string;
  };
  export const ButtonImgFoot = styled.button<PropsBtnImgFoot>`
  border: none;
  border-radius: 45%;
  padding: 0px 0px 0px 0px;
  margin: 3px 3px 3px 3px;
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '40px'};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  background: white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  `;





////////////////////////////////////////////////////////////
/** texto cabeçalho collun */
////////////////////////////////////////////
export const AreaTitleCollunIten = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 20px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;
///////////////////////////////////////////////////////
