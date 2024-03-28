import styled from "styled-components";
import BackgroundFundo from "../../assets/background-3.png";

export const ContainerPrincipal = styled.div`
  background: url("${BackgroundFundo}");
  background-size: cover;
  height: 100vh;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 `;

export const Logo = styled.img`
 width: 200px;
  margin-bottom: 100px;
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const ContainerItensPrincipal = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  //background: #000;
  z-index: 1;
` 

export const ContainerItens = styled.div`
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0) 0.2%,
    rgba(255, 255, 255, 0) 0.5%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 15px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TitleCard = styled.p`
  color: #2c2b2b;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
`

export const ListaCard = styled.ol`
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  padding: 15px;
  li{
    text-align: left;
  }
`

export const Button = styled.button`
  border-radius: 10px;
  padding: 15px 0;
  border: none;
  background-color: #ea4d2a;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }
`

export const ContainerCitation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -17% ;
  //background: #ea4d2a;
`

export const Citation = styled.p`
  font-family: "Special Elite", system-ui;
  color: #2c2b2b;
  font-weight: 600;
  font-size: 18px;
  width: 65%;
`;

export const ImgSaude = styled.img`
  height: 250px; 
`

export const ContainerItensToDoList = styled.div`
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0) 0.2%,
    rgba(255, 255, 255, 0) 0.5%,
    rgba(255, 255, 255, 0.5) 100%
  );
  backdrop-filter: blur(2px);
  border-radius: 15px;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  padding: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  margin-bottom: 25px;

  color: #ea4d2a;
  font-size: 16px;
  font-weight: 400;
`;