import styled from "styled-components";
import Background2 from "../../assets/background-3.png";
import BackgroundRoof from "../../assets/telhado.png";
import CornestoneImg from "../../assets/pilar.png";

export const Container = styled.div`
  background: url("${Background2}");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 100px;
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Title = styled.h1`
  font-family: "Special Elite", system-ui;
  font-weight: 400;
  font-size: 40px;
  margin-top: 13.5vh;
`;

export const Roof = styled.div`
  background: url("${BackgroundRoof}");
  background-size: 100% 100%;
  width: 630px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  

  & p {
    font-family: "Special Elite", system-ui;
    font-size: 35px;
    font-weight: 700;
    margin-top: 4%;
  }
`;

export const Beam = styled.img`
  height: 82px;
  `

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CornerstoneContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cornerstone = styled.button`
  background: url("${CornestoneImg}");
  background-size: 100% 100%;
  width: 80%;
  height: 200px;
  border: none;
  cursor: pointer;

  &:hover {
    width: 85%;
    height: 208px;
    margin-top: -8px;
    transition: 0.5s;
  }

  &:active {
    opacity: 0.4;
  }
`;

export const CornestoneTitle = styled.h2`
  font-family: "Special Elite", system-ui;
  font-size: 30px;
  margin: 2px 0;
`;

export const ProgressExt = styled.div`
  background-color: #ffffff;
  width: 70%;
  height: 25px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #000000;
`;

export const ProgressInt = styled.div`
  width: 50%;
  height: 90%;
  margin: 1px;
  border-radius: 5px;
  background-color: #ea4d2a;
`;
