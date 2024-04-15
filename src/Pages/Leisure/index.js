import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import {
  ContainerPrincipal,
  Logo,
  Title,
  ContainerItensPrincipal,
  ContainerItens,
  TitleCard,
  ListaCard,
  Button,
  Citation,
  ContainerCitation,
  ImgLazer,
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
import ImgLazerFam from "../../assets/Lazer.png";

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
      <Title>Lazer</Title>
      <ContainerItensPrincipal>
        <ContainerItens>
          <TitleCard>Descanse o corpo e a mente</TitleCard>
          <ListaCard>
            <li>
              Estabeleça uma rotina para ter disciplina para estudar sozinho.
            </li>
            <li>Mantenha-se focado durante as aulas online.</li>
            <li>Tenha disciplina para estudar sozinho.</li>
            <li>Faça um planejamento diário ou semanal.</li>
            <li>Crie um planejamento que seja possível de ser cumprido.</li>
            <li>Faça pausas, o ócio também é criativo.</li>
            <li>
              Faça pausas de 10 minutos a cada 1 hora de estudo ou trabalho.
            </li>
            <li>
              Use uma ferramenta para te ajudar : aplicativos, planilhas ou
              agenda.
            </li>
            <li>Registre seu desempenho, tenha um tempo bpara você.</li>
          </ListaCard>
          <Button>Descansar é importante</Button>
        </ContainerItens>

        <ContainerItens>
          <TitleCard>Tire um tempo para familia</TitleCard>
          <ListaCard>
            <li>
              Planejamento: Faça uma lista com todas as tarefas que você precisa
              executar naquele dia.
            </li>
            <li>
              Foco: Qualquer distração, por menor que seja, pode prejudicar sua
              produtividade.
            </li>
            <li>
              Trabalho: Escolha sua primeira tarefa, ajuste o seu cronômetro
              para 25 minutos, aperte o play e foco total.
            </li>
            <li>
              Pausa longa: Ao término das quatro sessões de 25 minutos, você
              poderá fazer uma pausa maior, de 20 a 30 minutos.
            </li>
          </ListaCard>
          <Button>Curta a familia e a você mesmo</Button>
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
          "Relaxe a mente, diminua a intensidade dos seus pensamentos. Equilibre
          a sua saúde mental. Viva e curta o seu momento de tranquilidade e
          alegria."
        </Citation>
        <ImgLazer alt="imagem-lazer" src={ImgLazerFam} />
      </ContainerCitation>
    </ContainerPrincipal>
  );
}

export default Leisure;
