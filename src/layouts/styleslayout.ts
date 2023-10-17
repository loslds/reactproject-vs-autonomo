import styled from 'styled-components';

export const ContainerDefault = styled.div`
  top: 0px;
  left: 0px;
  border: 2 solid red;
  min-width: 100%;
  padding: 0;
  margin: 0;
  scroll-behavior: auto;
  display: flex;
  justify-content: center;
  background-color: #223445;
`;

export const ContainerFlexDefault = styled.div`
  border: 2 solid white;
  max-height: 100%;
  width: 900px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`;   


export const ContainerHeaderDefault = styled.div`
    top: 0px;
    left: 0px;
    border: 2 solid yellow;
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
       
`;
