import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Modal from "react-modal";
import "../../components/Cornestone-pages/modalstyles.css";
import { ContainerPrincipal } from "./styles";

import {
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
  ParagraphModal,
  VideoModal,
  ButtonModal,
} from "../../components/Cornestone-pages/styles";

import LogoImg from "../../assets/logo-dev-performance.png";
import ImgSaudeExerc from "../../assets/Lazer.png";
import VideoModalDescanso from "../../assets/video-descanso-pausa.mp4";

/* trefas daqui até o return */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2 } from "lucide-react";

import { Paragraph } from "../../components/P";

function Leisure() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  async function handleCreateTask() {
    const { data: newTask } = await axios.post("http://localhost:3001/tasks", {
      /*id: v4(),*/
      title: task,
      isComplete: false,
      category: "lazer",
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
      const newTaskSearch = newTask.filter((task) => {
        if (task.category === "lazer") {
          return task;
        }
        return 0;
      });
      setTasks(newTaskSearch);
    }
    fetchTasks();
  }, []);

  async function handleUpdateTask(id) {
    //const taskComplete = tasks.map((taskItem) => {
    const taskUpdate = tasks.filter((taskItem) => taskItem._id === id);
    //console.log(taskUpdate[0]._id);
    if (taskUpdate[0]._id === id && taskUpdate[0].status === false) {
      let taskIsTrue = !taskUpdate[0].status;
      /*const data: newTask =*/ await axios.put(
        `http://localhost:3001/tasks/${id}`,
        {
          status: taskIsTrue,
        }
      );
      //console.log(newTask);

      const { data: newTaskGet } = await axios.get(
        "http://localhost:3001/tasks"
      );
      const newTaskSearch = newTaskGet.filter((task) => {
        if (task.category === "lazer") {
          return task;
        }
        return 0;
      });

      return setTasks(newTaskSearch);
      //return "ok";
    } else {
      let taskIsTrue = !taskUpdate[0].status;
      /*const { data: newTask } =*/ await axios.put(
        `http://localhost:3001/tasks/${id}`,
        {
          status: taskIsTrue,
        }
      );
      //console.log(newTask);

      const { data: newTaskGet } = await axios.get(
        "http://localhost:3001/tasks"
      );
      const newTaskSearch = newTaskGet.filter((task) => {
        if (task.category === "lazer") {
          return task;
        }
        return 0;
      });
      return setTasks(newTaskSearch);
    }
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
    const newTaskSearch = newTask.filter((task) => {
      if (task.category === "lazer") {
        return task;
      }
      return 0;
    });
    setTasks(newTaskSearch);
  }

  function progressBar() {
    const tasksTrue = tasks.filter((task) => {
      if (task.status === true) {
        return task;
      }
      return 0;
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

  return (
    <ContainerPrincipal>
      <ToastContainer />
      <Logo alt="Logo" src={LogoImg} />
      <Nav>
        <Title>Lazer</Title>
        <ButtonBack onClick={GoToHome}>Página inicial</ButtonBack>
      </Nav>
      <ContainerItensPrincipal>
        <ContainerItens>
          <TitleCard>Tire um tempo para você e sua família!</TitleCard>
          <ListaCard>
            <Button onClick={openModal1}>Se Recompense!</Button>
            <Button onClick={openModal2}>Tempo de qualidade</Button>
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
                      checked={task.status === true ? true : false}
                      onClick={() => handleUpdateTask(task._id)}
                    />
                    <Paragraph isTaskCompleted={task.status}>
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
          "Relaxe a mente, diminua a intensidade dos seus pensamentos. Equilibre
          a sua saúde mental. Viva e curta o seu momento de tranquilidade e
          alegria."
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
            <TitleModal>Se recompense!</TitleModal>
            <ParagraphModal>
              É importante reconhecer e comemorar os progressos obtidos. A
              medida que você atingir suas metas programe recompensas e
              contemple seus resultados. Valorizar e reconhecer o progresso faz
              parte da jornada. Programe recompensas variadas e com diferentes
              graus de magnitude para as metas alcançadas.
            </ParagraphModal>
          </ContainerModalText>
          <VideoModal src={VideoModalDescanso} controls></VideoModal>
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
            <TitleModal>Tempo de qualidade</TitleModal>
            <ParagraphModal>
              Ter pausas e descanso é fundamental para um bom funcionamento do
              cérebro e do corpo humano. Descanso também é produtividade. Então
              planeje o descanso na sua rotina e seja gentil quando seu corpo
              pedir uma pausa. Gerencia com sabedoria o seu tempo e descanso.
              <br />
              <br />
              Além disso, o descanso favorece a recuperação da memoria e
              melhoria das funções executivas, atenção e concentração.
              <br />
              <br />
              Cuidar da gente e dos nossos também é importante. Nessa jornada,
              não negligencie você e os seus. Passe tempo de qualidade com você
              mesmo e com a sua família.
            </ParagraphModal>
          </ContainerModalText>
        </ContainerModal>
        <ButtonModal onClick={closeModal2}>Fechar</ButtonModal>
      </Modal>
    </ContainerPrincipal>
  );
}

export default Leisure;
