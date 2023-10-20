import styled from 'styled-components'

export const ContainerPanelMain = styled.div`
  border: 4px #ff0000 solid;
  top: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: Black;
  background-color: #ffffff;
`;
/** quota da flexão do corpo  sem Borda */
export const ContainerPanelMainFlex = styled.div`
  border: 0px;
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  width: 980px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`
/** quota da flexão do corpo com Borda */
export const ContainerPanelMainFlexBorder = styled.div`
  border: 3px #949596 solid;
  border-radius: 10px;
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`
export const ContainerPanelMainCard = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  display: flex;
`;
export const ContainerPanelMC = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  /* min-height: 40px; */
  display: flex;
`;
export const ContainerPanelMCAround = styled.div`
  max-width: 100%;
  /* min-height: 40px; */
  display: flex;

  border: 0; /*px green solid;*/
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 0px;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: transparent;
`;


export const DivisionPanel = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 1px;
  width: 98%;
  display: flex;
  background-color: #7f7fbb;
`;
/** fim panel Main */
/** quota para titulo */
export const ContainerPanelTitleFlex = styled.div`
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
  background-color: #a7e6fa;
`;

export const ContainerPanel = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  min-height: 40px;
  background-color: transparent;
`;
export const ContainerPanelFlex = styled.div`
  border: 0px;
  width: 99%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 40px;
  font-size: 14px;
  background-color: transparent;
`;

export const ContainerPanelLeft = styled.div`
  border: 3px silver groove;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 0px;
  max-width: 45%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: aliceblue;

  label {
    padding: 0px 10px 0px 10px;
    width: 100%;
    font-size: 18px;
    font-family: normal;
  }

  select {
    padding: 0px 10px 0px 10px;
    margin: 3px 10px 3px 10px;
    width: 100%;
    font-size: 18px;
    font-family: normal;
    background-color: #fdffde;
    :hover,
    :focus {
      border: 2px red groove;
    }
  }

  input {
    /* padding: 0px 10px 0px 10px;
    margin: 2.5px 10px 2.5px 10px; */

    padding: 0px 0px 0px 0px;
    margin: 3px 10px 3px 10px;
    width: 100%;
    font-size: 18px;
    font-family: normal;
    background-color: #fdffde;
    :hover,
    :focus {
      border: 2px red groove;
    }
  }
`;

export const ContainerPanelEnd = styled.div`
  border: 3px silver groove;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`;
export const ContainerPanelText = styled.div`
  border: 0px #8284f1 solid;
  padding: 1px 5px 1px 5px;
  margin: 5px 5px 5px 5px;
  width: 98%;
  display: flex;
  flex-wrap: row wrap;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  h5 {
    margin-left: 25px;
    font-size: 10px;
    color: blue;
  }
`;
export const ContainerPanelTextFlex = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
