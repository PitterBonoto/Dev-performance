import styled from "styled-components";
import BackgroundFundo from "../../assets/background-3.png";

export const ContainerPrincipal = styled.div`
  background: url("${BackgroundFundo}");
  background-size: cover;
  height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  filter: drop-shadow(1px 1px 5px #000000);
`;

export const Nav = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const Title = styled.h1`
  font-family: "Special Elite", system-ui;
  font-weight: 400;
  font-size: 50px;
  margin-top: 10px;
  filter: drop-shadow(1px 1px 5px #000000);
`;

export const ButtonBack = styled.button`
  border-radius: 10px;
  padding: 15px;
  height: 90%;
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
`;

export const ContainerItensPrincipal = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 60%;
  margin-top: 20px;
`;

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
  justify-content: center;
  gap: 20px;
  padding: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TitleCard = styled.p`
  font-family: "Special Elite", system-ui;
  color: #2c2b2b;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;

export const ListaCard = styled.div`
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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
`;

export const ContainerCitation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -17%;
  //background: #ea4d2a;
`;

export const Citation = styled.p`
  font-family: "Special Elite", system-ui;
  color: #2c2b2b;
  font-weight: 600;
  font-size: 18px;
  width: 65%;
`;

export const ImgSaude = styled.img`
  height: 250px;
`;

/* estilização da minha todo list */
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

/* Aqui começa a progressBar */
export const ContainerTitleToDoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 20px;
`;

export const ProgressValue = styled.p`
  font-size: 15px;
  color: #2c2b2b;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
`;

export const ProgressExt = styled.div`
  background-color: #ffffff;
  width: 150px;
  height: 25px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #000000;
  border: none;
`;

export const ProgressInt = styled.div`
  height: 90%;
  margin: 1px;
  border-radius: 5px;
  transition: 1s;
`;
/* Aqui termina a progressBar */

export const LabelTodo = styled.label`
  color: #2c2b2b;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 5px;
  margin-bottom: -13px;
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

  font-size: 16px;
  font-weight: 400;
  height: 40px;
  width: 80%;
  margin-right: 10px;
`;

export const ButtonTodo = styled.button`
  border-radius: 10px;
  padding: 10px 0;
  border: none;
  background-color: #ea4d2a;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  cursor: pointer;
  height: 40px;
  width: 20%;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }
`;

export const ContainerTodoListItens = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(234, 77, 42, 1);
  padding-bottom: 1rem;
`;

export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p:hover {
    color: #ea4d2a;
  }
`;

export const taskContainerComplete = styled.div`
  p {
    text-decoration: line-through;
  }
`;

export const CheckTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CheckBoxContainer = styled.label`
  position: relative;
  padding: 5px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
  margin-top: -12px;
`;

export const P = styled.p`
  font-family: "Special Elite", system-ui;
  font-size: 18px;
  margin-top: 4px;
  color: #2c2b2b;

  ${(props) =>
    props.isTaskCompleted &&
    `
  text-decoration: line-through;
  color: #ea4d2a;
  `}
`;

export const InputCheck = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #ea4d2a;
  margin-right: 5px;
`;

export const TrashStyle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: -10px;

  &:hover {
    background: transparent;
    scale: 1.5;
    transition: 1s;
    filter: drop-shadow(1px 1px 6px #000000);
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
`;

export const ContainerModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
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
  width: 90%;
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

export const VideoModal = styled.video`
  width: 45%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
