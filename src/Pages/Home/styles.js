import styled from "styled-components";
import Background3 from "../../assets/background-3.png";
import BackgroundRoof from "../../assets/telhado.png";
import CornestoneImg from "../../assets/pilar.png";
import CornestoneImg1 from "../../assets/pilar1.png";
import BackgroundBase from "../../assets/base.png";
import BackgroundBase1 from "../../assets/base-areia.png";

export const Container = styled.div`
  background: url("${Background3}");
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
  filter: drop-shadow(1px 1px 5px #000000);
`;

export const Title = styled.h1`
  font-family: "Special Elite", system-ui;
  font-weight: 400;
  font-size: 40px;
  margin-top: 3%;
`;

export const Roof = styled.div`
  background: url("${BackgroundRoof}");
  background-size: 100% 100%;
  width: 720px;
  height: 150px;
  filter: drop-shadow(1px 1px 3px #000000);

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3% 0 5px 0;

  & p {
    font-family: "Special Elite", system-ui;
    font-size: 35px;
    font-weight: 700;
    margin-top: 15px;
    text-shadow: 1px 1px 5px #000000;
  }
`;

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
  height: 230px;
  width: 100px;
  filter: drop-shadow(1px 1px 3px #000000);
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  cursor: pointer;

  &:hover {
    background: url("${CornestoneImg1}");
    background-size: 100% 100%;
    height: 235px;
    width: 102.5px;
    margin-top: -5px;
    transition: 1s;
    filter: drop-shadow(1px 1px 6px #000000);
  }

  &:active {
    background: url("${CornestoneImg1}");
    background-size: 100% 100%;
    opacity: 0.6;
    transition: 0.5s;
  }
`;

export const CornestoneTitle = styled.h2`
  font-family: "Special Elite", system-ui;
  font-size: 21px;
  font-weight: 700;
  margin-top: 20px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  letter-spacing: -2px;
  text-shadow: 2px 2px 5px #000000;
`;

export const Base = styled.button`
  background: url("${BackgroundBase}");
  background-size: 100% 100%;
  width: 720px;
  height: 70px;
  filter: drop-shadow(1px 1px 1.5px #000000);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    background: url("${BackgroundBase1}");
    background-size: 100% 100%;
    height: 73px;
    width: 725px;
    margin-top: 2px;
    transition: 1s;
    filter: drop-shadow(1px 1px 6px #000000);
  }

  &:active {
    background: url("${BackgroundBase1}");
    background-size: 100% 100%;
    opacity: 0.6;
    transition: 0.5s;
  }
`;

export const BaseTitle = styled.h2`
  font-family: "Special Elite", system-ui;
  font-size: 20px;
  font-weight: 700;
  text-shadow: 1px 1px 5px #000000;
  margin-top: 30px;
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
`;

export const TitleModal = styled.h1`
  font-family: "Special Elite", system-ui;
  font-size: 32px;
  color: #ea4d2a;
  text-shadow: 1px 1px 5px #000000;
`;

export const CaptionModal = styled.h4`
  font-family: "Special Elite", system-ui;
  font-size: 22px;
`;

export const ParagraphModal = styled.p`
  color: #2c2b2b;
  font-weight: 600;
  font-size: 17px;
`;

export const ListModal = styled.ul`
  color: #2c2b2b;
  font-size: 17px;
`;
export const ButtonModal = styled.button`
  border-radius: 10px;
  padding: 12px 20px;
  border: none;
  background-color: #ea4d2a;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }
`;


