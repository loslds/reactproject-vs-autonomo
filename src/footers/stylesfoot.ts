import styled from 'styled-components';
import semimg from '../assets/svgs/semimg.svg'

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
border: 1px red dashed;
/* border: none; */
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
//min-height: 100px;
width: 100%;
background-color: transparent; /* #a7e6fa;  #afebf0; #a2dde0; */
display: flex;
flex-flow: row wrap;
align-content: center;
justify-content: space-around;
color: #000000;
`;
/////////////////////////////////////////////////
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
// div de divisão de painel do theme
export const DivisionVPanel = styled.div`
  border: 0px;
  padding: 0px 1px 0px 1px;
  margin: 0px 1px 0px 1px;
  width: 2px;
  display: flex;
  background-color: #7f7fbb;
  color: #000000;
`;
export const AreaCabecalho = styled.div`
  border-bottom: 1px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 20px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 12px;
  line-height: 14px;
  background: transparent;
`;
////////////////////////////////////////////////////////
// itens da coluna
export const AreaContentCollumItem = styled.div`
  border-bottom: 1px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 0px 2px 0px 2px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: transparent;
  color: #000000;
`;
//////////////////////////////////////////////////
/** conteudo da coluna ESquerda  */
export const DivAreaCollunItem = styled.div`
  border: 1px solid red ;
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
 `;
////////////////////////////////////////////
/** item botao img collun */
////////////////////////////////////////////
export const DivAreaImgButton = styled.div`
  border: 1px solid;
  border-radius: 45%;
  border-color: rgba(225, 235, 252, 1);
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 40px;
  //min-width: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  background: transparent;
  /* :hover {
    background: rgba(225, 235, 252, 1); */
// }

  /* display: flex;
  position: ;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center; */

`;


type PropsBtnImgFoot = {
  height? : string;
  width? : string;
  img?: string;
  title?: string;
  };
  export const ButtonImgFoot = styled.button<PropsBtnImgFoot>`
  border: none;/*1px solid #000000;*/
  border-radius: 45%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;

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






export const AreaTitleCollunIten = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 40px;
  background-color: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color: #000000;
`;
///////////////////////////////////////////////////////

export const DivAreaCollunImg = styled.div`
  border: 1px solid yellow ;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-content: center;
  //align-items: center;
  background: transparent;
  color: #000000;

 `;


// export const AreaCollunImg = styled.div`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   min-height: 35px;
//   background-color: transparent;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   color: #000000;
// `;
///////////////////////////////////////////////////////


















// type PropsCollun = {
//   pwidth?: string;
//  };
// export const AreaCollun = styled.div<PropsCollun>`
//   border: 3px solid ;
//   border-color: rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   padding: 0cqmin 0px 0px 0px;
//   margin: 0px 0px 3px 0px;
//   width: ${({ pwidth }) => pwidth || '25%'};
//   background: #a7e6fa;
//   display: flex;
//   flex-flow: wrap;
// //  justify-content: center;
// `;



// export const DivAreaCollunItemRight = styled.div<{ img?: string }>`
//   border: 1px solid blue ;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   min-height: 35px;
//   width: 100%;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: right;
//   align-content: center;
//   align-items: center;
//   background: transparent;
//   :hover {
//     background: rgba(225, 235, 252, 1);
//   }
// `;

// export const AreaContainerButton = styled.div`
//   border: none;
// /* border: 1px black solid;*/
//   padding: 2px 2px 2px 2px;
//   margin: 0px 0px 0px 0px;
//   width: 98%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;
//   background: transparent;
//   label {
//     padding: 0px 0px 0px 0px;
//     margin: 3px 0px 3px 0px;
//     font-style: normal;
//     font-family: Verdana, Tahoma, sans-serif;
//     font-weight: bold;
//   }
//   span {
//     padding: 0px 0px 0px 0px;
//     margin: 5px 0px 5px 0px;
//     font-style: normal;
//     font-family: Verdana, Tahoma, sans-serif;
//     font-weight: normal;
//   }
// `;

// type PropsDivImgACntt = {
// divheight? : string;
// divwidth? : string;
// img?: string;
// };
// export const DivImgAreaContent = styled.div<PropsDivImgACntt>`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 3px 0px 3px 0px;
//   min-height: ${({ divheight }) => divheight || '35px'};
//   width: ${({ divwidth }) => divwidth || '45px'};
//   display: flex;
//   flex-wrap: wrap;
//   flex-flow: row ;
//   justify-content: space-around;
//   align-content: center;
//   align-items: center;
// `;




// export const AreaButtons = styled.div`
//   border: 1px black solid;
//   padding: 1px 1px 1px 1px;
//   margin: 3px 0px 3px 0px;
//   width: 99%;
//   font-size: 16px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
// `;

// export const DivImgAreaButton = styled.div<{ img?: string }>`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 3px 0px 3px 0px;
//   height: 35px;
//   width: 45%;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-image: url(${({ img }) => img || semimg});
// `;


// export const ButtonsFoot = styled.button<{ oncursor?: boolean }>`
//   border: 1px solid black;
//   padding: 1px 1px 1px 1px;
//   margin: 0px 5px 0px 5px;
//   font-size: 16px;
//   font-weight: bold;
//   font-family: 'Courier New', 'Courier', 'monospace';
//   background: transparent;
//   /* cursor: pointer; */
//   cursor: pointer;
//   outline: none;
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-items: center;
// `;

// type PropsBtSB = {
//   img?: string;
//   titbtn?: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// };
// export const ButtonsBnt = styled.button<PropsBtSB>`
//   border: 1px solid;
//   border-color: transparent;
//   border-radius: 5px;
//   padding: 1px 5px 1px 5px;
//   margin: 0px 5px 0px 5px;
//   font-size: 16px;
//   font-weight: bold;
//   font-family: 'Courier New', 'Courier', 'monospace';
//   background: transparent;
//   cursor: pointer;
//   outline: none;
//   width: auto;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-items: center;
//   :hover {
//     border-color: rgba(230, 230, 230, 1);
//     background: rgba(225, 235, 252, 1);
//   }
// `;

// //// ContainerMainItem /////
// export const ContainerMain = styled.div`
//   border: 0px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   min-width: 100%;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-around;
//   align-items: center;
//   align-content: center;
//   background-color: transparent;
//   :hover {
//     border-color : yellow;
//   }
//   label {
//     padding: 0px 10px 0px 10px;
//     width: 100%;
//     font-size: 12px;
//     font-family: normal;
//   }
// `;
