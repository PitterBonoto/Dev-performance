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
import ImgSaudeExerc from "../../assets/Estudos.png";
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

  return (
    <ContainerPrincipal>
      <ToastContainer />
      <Logo alt="Logo" src={LogoImg} />
      <Nav>
        <Title>Estudos</Title>
        <ButtonBack onClick={GoToHome}>Página inicial</ButtonBack>
      </Nav>
      <ContainerItensPrincipal>
        <ContainerItens>
          <TitleCard>Algumas dicas para te ajudar com os estudos:</TitleCard>
          <ListaCard>
            <Button onClick={openModal1}>Como estudar?</Button>
            <Button onClick={openModal2}>Lidando com a Procrastinação</Button>
            <Button onClick={openModal3}>Método Pomodoro</Button>
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
          "Por maior que seja o seu cansaço, nunca deixe de estudar! Estudar é
          um privilégio e só o seu esforço pessoal te levará a conhecer pessoas
          e mundos que os acomodados jamais conhecerão!"
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
            <TitleModal>Como estudar?</TitleModal>
            <ParagraphModal>
              DEFINA UMA META: Descreva aqui, de forma clara e objetivo qual seu
              objetivo atual relacionado a área de estudos (ex.: terminar modulo
              I, aprender linguagem X, curso de Inglês, etc.)
              <br />
              <br />
              TORNANDO A META POSSÍVEL: Metas pequenas são mais fáceis de serem
              atingidas. Agora desmembre a sua meta principal em pequenas metas
              que podem ser executadas em até 25 minutos.
              <br />
              <br />
              AÇÃO: Agora que a sua meta está desmembrada ela se torna mais
              fácil de ser executada, planeje sua semana e preencha seu TO-DO
              list com os seus objetivos a serem cumpridos.
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
            <TitleModal>Lidando com a procrastinação.</TitleModal>
            <ParagraphModal>
              A procrastinação consiste no atraso voluntario de algo que precisa
              ser feito.
              <br />
              <br />É importante se perguntar qual o motivo de estar adiando
              aquela tarefa.
              <br />
              <br />
              Você sente que não consegue? Você está achando que será difícil?
              Você não ve o porque de se envolver naquela tarefa?
              <br />
              <br />
              Questione os motivos que te fazem procrastinar e lembre-se de
              diminuir o tamanho das tarefas para favorecer a execução delas.
            </ParagraphModal>
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
            <TitleModal>Metodo Pomodoro.</TitleModal>
            <ParagraphModal>
              Para ajudar a lidar com a falta de foco e a dificuldade de se
              engajar nas tarefas sugerimos o método pomodoro.
              <br />
              <br />O método pomodoro é técnica de gerenciamento de tempo para
              favorecer o estudo e/ou trabalho focado. Planeje seus estudos e/ou
              trabalho em blocos de 25 minutos de dedicação completa a tarefa
              seguidos de 5 minutos de intervalo livres. Após 4 intervalos
              consecutivos faça um intervalo mais longo para retornar os
              estudos. Dessa forma, você terá previsibilidade de descanso e
              poderá gerenciar seu tempo melhor.
            </ParagraphModal>
          </ContainerModalText>
          <VideoModal src={VideoModal1} controls></VideoModal>
        </ContainerModal>
        <ButtonModal onClick={closeModal3}>Fechar</ButtonModal>
      </Modal>
    </ContainerPrincipal>
  );
}

export default Health;
