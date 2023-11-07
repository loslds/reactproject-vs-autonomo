
import styled from 'styled-components';

export const ContainerDefault = styled.div`
  top: 0px;
  left: 0px;
  border: none;
  padding: 0;
  margin: 0;
  min-width: 100%;
  scroll-behavior: auto;
  display: flex;
  justify-content: center;
  background-color: #ffff00;
  color: #000;
`;

export const ContainerFlexDefault = styled.div`
  border: none;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 900px;
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


export const ContainerPanelDefault = styled.div`
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    border: 3px double;
    border-color: #ff0000;
    border-radius: 10px;
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;


`;
