import styled from "styled-components";
import Background1 from "../../assets/background-1.png";

export const Container = styled.div`
  background: url("${Background1}");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 0;
    justify-content: start;
    background-size: 250% 100%;
    background-position: bottom;
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;

  @media only screen and (max-width: 1023px) {
    text-align: center;
    margin-top: 13vh;
    gap: 10px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  filter: drop-shadow(1px 1px 5px #000000);

  @media only screen and (max-width: 767px) {
    width: 130px;
    left: 15px;
    top: 15px;
  }
`;

export const WelcomeTitle = styled.h1`
  font-family: "Special Elite", system-ui;
  color: #ea4d2a;
  font-weight: 400;
  font-size: 45px;

  @media only screen and (max-width: 1023px) {
    font-size: 20px;
  }
`;

export const WelcomeTitle1 = styled.h3`
  font-family: "Special Elite", system-ui;
  color: #000000;
  font-weight: 400;
  font-size: 30px;
  text-align: center;

  @media only screen and (max-width: 1023px) {
    font-size: 15px;
  }
`;

export const Quote = styled.p`
  font-family: "Special Elite", system-ui;
  color: #000000;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin: 150px 0 -100px 0;

  & span {
    font-family: "Special Elite", system-ui;
    font-size: 12px;
  }

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0) 0.2%,
    rgba(255, 255, 255, 0) 0.5%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(15px);
  border-radius: 15px;
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-right: 20px;

  @media only screen and (max-width: 1023px) {
    background: linear-gradient(
      157deg,
      rgba(255, 255, 255, 0) 0.2%,
      rgba(255, 255, 255, 0.1) 0.5%,
      rgba(255, 255, 255, 0.2) 100%
    );
    margin-right: 0;
    padding: 20px;
    position: absolute;
    top: 25%;
    backdrop-filter: none;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 30px;

  @media only screen and (max-width: 1023px) {
    font-size: 20px;
    margin-bottom: 20px;
    color: #2c2b2b;
  }
`;

export const InputLabel = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 20px;

  @media only screen and (max-width: 1023px) {
    color: #2c2b2b;
  }
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
  color: #fc791e;
  font-size: 16px;
  font-weight: 400;

  //&:disabled {background: #fff};
  }

  @media only screen and (max-width: 1023px) {
    padding: 7px 20px;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 15px 0;
  border: none;
  background-color: #ea4d2a;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 45px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  @media only screen and (max-width: 1023px) {
    margin-top: 20px;
  }
`;

export const Register = styled.a`
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  @media only screen and (max-width: 1023px) {
    margin-top: 10px;
    font-size: 12px;
    color: #2c2b2b;
  }
`;
