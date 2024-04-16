import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Modal from "react-modal";
import "./modalstyles.css";

import {
  ContainerPrincipal,
  Nav,
  Logo,
  Title,
  ButtonBack,
  ContainerItensPrincipal,
  ContainerItens,
  TitleCard,
  ListaCard,
  Button,
  Citation,
  ContainerCitation,
  ImgSaude,
  ContainerItensToDoList,
  ContainerTitleToDoList,
  ProgressValue,
  ProgressExt,
  ProgressInt,
  Input,
  ButtonTodo,
  LabelTodo,
  ContainerTodoListItens,
  ContainerTasks,
  TaskContainer,
  CheckTitle,
  CheckBoxContainer,
  InputCheck,
  TrashStyle,
  ContainerModal,
  ContainerModalText,
  TitleModal,
  CaptionModal,
  ParagraphModal,
  ListModal,
  VideoModal,
  ButtonModal,
} from "./styles";

import LogoImg from "../../assets/logo-dev-performance.png";
import ImgSaudeExerc from "../../assets/ginastica.png";
import VideoModal1 from "../../assets/video-teste.mp4";

/* trefas daqui até o return */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2 } from "lucide-react";

import { Paragraph } from "../../components/P";

function Health() {
  //const [complete, setComplete] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  async function handleCreateTask() {
    const { data: newTask } = await axios.post("http://localhost:3001/tasks", {
      /*id: v4(),*/
      title: task,
      isComplete: false,
    });
    if (task === "") {
      toast.error("🤔 Você precisa digitar pelo menos uma tarefa 🤔.");
    } else {
      //console.log(newTask);
      setTasks([...tasks, newTask]);

      //console.log(newTask);

      setTask("");
    }
  }

  useEffect(() => {
    async function fetchTasks() {
      const { data: newTask } = await axios.get("http://localhost:3001/tasks");
      setTasks(newTask);
    }
    fetchTasks();
  }, []);

  function handleTaksCompletation(id) {
    const taskComplete = tasks.map((task) => {
      if (task._id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    taskComplete.find(
      (item) =>
        item.isComplete === true &&
        toast.success(
          "😎 Você foi muito bem, concluiu sua tarefa, continue assim 😎 !!!"
        )
    );

    //console.log(taskComplete);
    setTasks(taskComplete);
  }

  async function handleTaksDelete(id) {
    //alert("apagar task");
    if (task.id === "") {
      toast.error("🤔 Você precisa digitar pelo menos uma tarefa 🤔.");
    } else {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      const taskDelete = tasks.filter((task) => task.id !== id);
      setTasks(taskDelete);
      toast.success("😁 Sua tarefa foi excluida 😁.");
    }
    const { data: newTask } = await axios.get("http://localhost:3001/tasks");
    setTasks(newTask);
  }

  function progressBar() {
    const tasksTrue = tasks.filter((task) => {
      if (task.isComplete === true) {
        return task;
      }
    });

    const percentageComplete = (tasksTrue.length / tasks.length) * 100;
    return percentageComplete.toFixed(0);
  }

  let barStatus = progressBar();

  function valueBarStatus() {
    if (isNaN(barStatus)) {
      barStatus = 0;
    }
    return barStatus;
  }

  const barStatusValue = valueBarStatus();

  const navigate = useNavigate();

  function GoToHome() {
    navigate("/Home");
  }

  function colorProgress() {
    let colorBar = "";
    if (barStatus <= 25) {
      colorBar = "#ff0000";
    }
    if (barStatus > 25 && barStatus <= 50) {
      colorBar = "#ea4d2a";
    }
    if (barStatus > 50 && barStatus <= 75) {
      colorBar = "#ffff00";
    }
    if (barStatus > 75) {
      colorBar = "#00ff00";
    }
    return colorBar;
  }
  const colorBar = colorProgress();

  /*----------------------MODAL-------------------------- */

  /* MOODAL1 */
  Modal.setAppElement("#root");
  const [modalIsOpen1, SetModalIsOpen1] = useState(false);

  function openModal1() {
    SetModalIsOpen1(true);
  }

  function closeModal1() {
    SetModalIsOpen1(false);
  }

  /* MOODAL2 */
  const [modalIsOpen2, SetModalIsOpen2] = useState(false);

  function openModal2() {
    SetModalIsOpen2(true);
  }

  function closeModal2() {
    SetModalIsOpen2(false);
  }

  /* MOODAL3 */
  const [modalIsOpen3, SetModalIsOpen3] = useState(false);

  function openModal3() {
    SetModalIsOpen3(true);
  }

  function closeModal3() {
    SetModalIsOpen3(false);
  }

  /* MOODAL4 */
  const [modalIsOpen4, SetModalIsOpen4] = useState(false);

  function openModal4() {
    SetModalIsOpen4(true);
  }

  function closeModal4() {
    SetModalIsOpen4(false);
  }
  return (
    <ContainerPrincipal>
      <ToastContainer />
      <Logo alt="Logo" src={LogoImg} />
      <Nav>
        <Title>Saúde</Title>
        <ButtonBack onClick={GoToHome}>Página inicial</ButtonBack>
      </Nav>
      <ContainerItensPrincipal>
        <ContainerItens>
          <TitleCard>Algumas dicas para cuidar da sua saúde:</TitleCard>
          <ListaCard>
            <Button onClick={openModal1}>Tenha uma rotina!</Button>
            <Button onClick={openModal2}>Cuide do seu sono!</Button>
            <Button onClick={openModal3}>Cuide do seu corpo!</Button>
            <Button onClick={openModal4}>Cuide da sua Alimentação!</Button>
          </ListaCard>
        </ContainerItens>

        <ContainerItensToDoList>
          <ContainerTitleToDoList>
            <TitleCard>Minhas Tarefas</TitleCard>
            <ProgressExt>
              <ProgressInt
                style={{ width: barStatus + "%", background: colorBar }}
              ></ProgressInt>
              <ProgressValue>{barStatusValue}%</ProgressValue>
            </ProgressExt>
          </ContainerTitleToDoList>
          <LabelTodo>Criar tarefa</LabelTodo>
          <ContainerTodoListItens>
            <Input
              placeholder="digite a tarefa"
              value={task}
              onChange={(ev) => setTask(ev.target.value)}
            />
            <ButtonTodo onClick={handleCreateTask}>Nova Tarefa</ButtonTodo>
          </ContainerTodoListItens>
          <ContainerTasks>
          {tasks.map((task) => (
            <TaskContainer key={task.id}>
              <CheckTitle>
                <CheckBoxContainer>
                  <InputCheck
                    type="checkbox"
                    onClick={() => handleTaksCompletation(task._id)}
                  />
                  <Paragraph isTaskCompleted={task.isComplete}>
                    {task.title}
                  </Paragraph>
                </CheckBoxContainer>
                <TrashStyle>
                  <Trash2
                    onClick={() => handleTaksDelete(task._id)}
                    style={{ color: " #ff0000" }}
                  />
                </TrashStyle>
              </CheckTitle>
            </TaskContainer>
          ))}
          </ContainerTasks>
        </ContainerItensToDoList>
      </ContainerItensPrincipal>

      <ContainerCitation>
        <Citation>
          "Amanhã vou ter orgulho da minha versão de hoje: uma pessoa guerreira
          que não deixa o cansaço ganhar da força de vontade"
        </Citation>
        <ImgSaude alt="imagem-ginastica" src={ImgSaudeExerc} />
      </ContainerCitation>

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ContainerModal>
          <ContainerModalText>
            <TitleModal>Tenha uma Rotina!</TitleModal>
            <ParagraphModal>
              Uma rotina se refere a regularidade e a consistência de alguém na
              execução das suas atividades diárias e ao longo do tempo. Está
              relacionada a uma previsibilidade nos horários de acordar, dormir,
              se alimentar, estudar, trabalhar e descansar.
              <br />
              <br />
              Ter uma rotina é um componente importante para a saúde mental e
              desenvolvimento pessoal. Os ritmos sociais (a rotina) favorecem a
              sincronização dos ritmos biológicos (sono, hormônios, temperatura,
              entre outros). E esse ritmo biológico está associado ao nível de
              alerta, desempenho cognitivo e humor.
            </ParagraphModal>
          </ContainerModalText>
          <VideoModal src={VideoModal1} controls></VideoModal>
        </ContainerModal>
        <ButtonModal onClick={closeModal1}>Fechar</ButtonModal>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ContainerModal>
          <ContainerModalText>
            <TitleModal>Cuide do seu Sono!</TitleModal>
            <ParagraphModal>
              A qualidade do sono é essencial para a plasticidade cerebral. Isso
              influencia diretamente na nossa capacidade de aprendizagem;
              <br />
              <br />
              Segue uma rotina de higiene do sono:
            </ParagraphModal>
            <ListModal>
              <li>
                1 - É importante criar uma rotina de sono. Busque se levantar e
                deitar todos os dias no mesmo horário, incluindo finais de
                semana e feriados. Isso favorece o ajuste do ciclo circadiano.
                Durma entre 7 a 9 horas.
              </li>
              <li>
                2 - Evite o consumo de bebidas estimulantes e a base de cafeína
                após as 15:00 e evite consumo de bebidas alcoólicas;
              </li>
              <li>3 - Não vá para cama a não ser que esteja com sono;</li>
              <li>
                4 - Crie um ambiente que induza o sono: próximo do horário de
                dormir mantenha o ambiente mais escuro, com temperatura
                agradável e mais silencioso;
              </li>
              <li>5 - Evite tirar sonecas durante o dia;</li>
              <li>
                6 - Reduza o consumo de alimentos pesados durante a noite e
                controle a ingestão de líquidos;
              </li>
              <li>
                7 - Crie uma ritual antes de dormir: se envolva em atividades
                tranquilas e relaxantes antes de dormir, evite eletrônicos pelo
                menos 30 minutos antes de se deitar;
              </li>
              <li>8 - Evite praticar atividades intensas antes de dormir;</li>
              <li>
                9 - Se exponha a luz natural: pela manhã se exponha a luz
                natural.
              </li>
            </ListModal>
          </ContainerModalText>
          <VideoModal src={VideoModal1} controls></VideoModal>
        </ContainerModal>
        <ButtonModal onClick={closeModal2}>Fechar</ButtonModal>
      </Modal>

      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ContainerModal>
          <ContainerModalText>
            <TitleModal>Cuide do seu corpo!</TitleModal>
            <ParagraphModal>
              De acordo com a Organização Mundial da Saúde a atividade física é
              boa para o coração, corpo e mente. A atividade física pode
              melhorar o pensamento, a aprendizagem e favorecer o bem estar
              geral.
              <br />
              <br />
              Sendo assim, pensar sobre a atividade física será parte importante
              da sua jornada. De acordo com a OMS, qualquer atividade física é
              melhor que nenhuma e toda atividade física conta. Então, procure
              encontrar uma atividade física que seja adequada para o seu
              momento de vida e busque praticar.
            </ParagraphModal>
          </ContainerModalText>
          <VideoModal src={VideoModal1} controls></VideoModal>
        </ContainerModal>
        <ButtonModal onClick={closeModal3}>Fechar</ButtonModal>
      </Modal>

      <Modal
        isOpen={modalIsOpen4}
        onRequestClose={closeModal4}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ContainerModal>
          <ContainerModalText>
            <TitleModal>Cuide da sua alimentação!</TitleModal>
            <ParagraphModal>
              Uma alimentação saudável e equilibrada é um pilar para a saúde,
              disposição, sono e atividades cognitivas.
              <br />
              <br />
              Não se esqueça de cuidar da alimentação. 
            </ParagraphModal>
          </ContainerModalText>
          <VideoModal src={VideoModal1} controls></VideoModal>
        </ContainerModal>
        <ButtonModal onClick={closeModal4}>Fechar</ButtonModal>
      </Modal>
    </ContainerPrincipal>
  );
}

export default Health;
