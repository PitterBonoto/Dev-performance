import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

//import { apiDevPerformance as api } from "../../services/api.js";
//import { v4 } from "uuid";

import {
  ContainerPrincipal,
  Logo,
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
  TaskContainer,
  CheckTitle,
  CheckBoxContainer,
  InputCheck,
  TrashStyle,
} from "./styles";

import LogoImg from "../../assets/logo-dev-performance.png";
import ImgSaudeExerc from "../../assets/ginastica.png";

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

  return (
    <ContainerPrincipal>
      <ToastContainer />

      <Logo alt="Logo" src={LogoImg} onClick={GoToHome} />
      <ContainerItensPrincipal>
        <ContainerItens>
          <TitleCard>Melhore Seu Sono</TitleCard>
          <ListaCard>
            <li>Trate o sono como prioridade na sua rotina.</li>
            <li>Estabeleça um cronograma do sono.</li>
            <li>Exponha-se à luz solar, ao acordar.</li>
            <li>Pratique exercícios físicos.</li>
            <li>Considere tirar um cochilo diário.</li>
            <li>Liste suas pendências ao encerrar o expediente.</li>
            <li>Abandone as telas duas horas antes de dormir.</li>
            <li>Faça uma refeição leve no início da noite.</li>
            <li>Estabeleça um ritual do sono, com preparação do ambiente.</li>
            <li>Busque a melhor posição para dormir.</li>
          </ListaCard>
          <Button>Melhore seu sono</Button>
        </ContainerItens>

        <ContainerItens>
          <TitleCard>Cuide da sua saúde</TitleCard>
          <ListaCard>
            <li>Comece a praticar atividade física aos poucos.</li>
            <li>Não espere a motivação, seja proativo.</li>
            <li>Registre as suas conquistas do dia a dia.</li>
            <li>Faça atividade física com consistência.</li>
            <li>Saiba por que você está fazendo exercícios.</li>
            <li>Leve seu pet no início.</li>
            <li>Procure algo que você goste muito ou admira.</li>
            <li>Ouça músicas que gosta durante o exercício.</li>
            <li>Tenha uma companhia.</li>
            <li>Participe de eventos.</li>
          </ListaCard>
          <Button>Motive-se</Button>
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
        </ContainerItensToDoList>
      </ContainerItensPrincipal>

      <ContainerCitation>
        <Citation>
          "Amanhã vou ter orgulho da minha versão de hoje: uma pessoa guerreira
          que não deixa o cansaço ganhar da força de vontade"
        </Citation>
        <ImgSaude alt="imagem-ginastica" src={ImgSaudeExerc} />
      </ContainerCitation>
    </ContainerPrincipal>
  );
}

export default Health;
