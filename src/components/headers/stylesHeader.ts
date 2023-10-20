import styled from 'styled-components';
import semimg from '../../assets/svgs/semimg.svg';

export const DivHeardLogo = styled.div<{bd_color?: string }>`
  margin: 0px 0px 0px 0px;
  padding: 0px 15px 5px 5px;
  min-height: 55px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  border: 1px solid;
  border-color: transparent;
  //background-color: transparent;
  &:hover {
    border: 2px solid;
    border-color: ${props => (props.bd_color ? 'bd_color' : 'transparent')};
    background-color: #e4e4e4;
    color: #000;
  }
`;
type PropsImgSys = {
  img?: string;
  oncursor?: boolean;
  onClick?: () => void;
};
export const ContainerLogoSys = styled.div<PropsImgSys>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 10px;
  background: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
  cursor: ${props => (props.oncursor ? 'pointer' : 'default')};
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
`;





export const ContainerHLogo = styled.div`
  padding: 0 0 0 0;
  border-bottom: 3px solid #16195C;
  h1 {
    margin: 0px 10px 0px 10px;
    padding: 0;
    font-size: 28px;
  }
  p {
    margin: 0 0 0 20px;
    font-size: 14px;
    color: #b8b8d4;
  }
 `;

export const ContainerHPanelMain = styled.div`
  border-bottom: 3px solid #16195C;
  top: 0px;
  margin: 0px 0px 0px 0px;
  padding: 15px 0px 0px 0px;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  h1 {
    margin: 0 0 0 20px;
    padding: 0;
    font-size: 28px;
  }
  p {
    margin: 0 0 0 20px;
    font-size: 14px;
    color: #b8b8d4;
  }
`;


export const ContainerHEndLogo = styled.div`
  padding: 15px 0;
  border: 3px solid #aa1111;
 `;
