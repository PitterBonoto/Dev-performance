import React, { useState } from "react";
import { useNavigate } from "react-router";

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
  ImgEstudo,
  ContainerItensToDoList,
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
import ImgEstudoMot from "../../assets/Estudos.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2 } from "lucide-react";

import { Paragraph } from "../../components/P";

function Studies() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleCreateTask() {
    if (task === "") {
      toast.error("🤔 Você precisa digitar pelo menos uma tarefa 🤔.");
    } else {
      const n1 = 987654321;
      const idRandon = (num) => Math.floor(Math.random() * num);
      const newTask = { id: idRandon(n1), title: task, isComplete: false };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  }

  function handleTaksCompletation(id) {
    const taskComplete = tasks.map((task) => {
      if (task.id === id) {
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

    setTasks(taskComplete);
  }

  function handleTaksDelete(id) {
    if (task.id === "") {
      toast.error("🤔 Você precisa digitar pelo menos uma tarefa 🤔.");
    } else {
      const taskDelete = tasks.filter((task) => task.id !== id);
      setTasks(taskDelete);
      toast.success("😁 Sua tarefa foi excluida 😁.");
    }
  }

  const navigate = useNavigate();

  function GoToHome() {
    navigate("/Home");
  }

  return (
    <ContainerPrincipal>
      <ToastContainer />
      <Logo alt="Logo" src={LogoImg} onClick={GoToHome} />
      <ContainerItensPrincipal>
        <ContainerItens>
          <TitleCard>Deixe de lado a procrastinação</TitleCard>
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
              Crie mapas mentais, é uma forma de anotar o que se estudou e poder
              relembrar com palavras chave.
            </li>
            <li>
              Faça pausas de 10 minutos a cada 1 hora de estudo ou trabalho.
            </li>
            <li>
              Use uma ferramenta para te ajudar : aplicativos, planilhas ou
              agenda.
            </li>
            <li>Registre seu desempenho, tenha um tempo bpara você.</li>
          </ListaCard>
          <Button>Como Estudar</Button>
        </ContainerItens>

        <ContainerItens>
          <TitleCard>Metodo Pomodoro</TitleCard>
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
              Pausa curta: Quando o seu cronômetro apitar avisando que os 25
              minutos programados já terminaram, você deverá parar tudo o que
              está fazendo e se afastar da sua mesa por 5 minutos.
            </li>
            <li>
              De volta aos trabalhos: Após essa primeira pausa, você retornará
              às suas tarefas e repetirá esse ciclo por mais três sessões de 25
              minutos.
            </li>
            <li>
              Pausa longa: Ao término das quatro sessões de 25 minutos, você
              poderá fazer uma pausa maior, de 20 a 30 minutos.
            </li>
          </ListaCard>
          <Button>Aplique o metodo pomodoro</Button>
        </ContainerItens>

        <ContainerItensToDoList>
          <TitleCard>Minhas Tarefas</TitleCard>
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
                    onClick={() => handleTaksCompletation(task.id)}
                  />
                  <Paragraph isTaskCompleted={task.isComplete}>
                    {task.title}
                  </Paragraph>
                </CheckBoxContainer>
                <TrashStyle>
                  <Trash2
                    onClick={() => handleTaksDelete(task.id)}
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
          "Por maior que seja o seu cansaço, nunca deixe de estudar! Estudar é
          um privilégio e só o seu esforço pessoal te levará a conhecer pessoas
          e mundos que os acomodados jamais conhecerão!"
        </Citation>
        <ImgEstudo alt="imagem-estudos" src={ImgEstudoMot} />
      </ContainerCitation>
    </ContainerPrincipal>
  );
}

export default Studies;
