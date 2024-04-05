import React, { Children, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2 } from "lucide-react";

import { Paragraph } from "../../components/P";

function Health() {
  const [complete, setComplete] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  //const [percentageComplete, setPercentageComplete] = useState();

  function handleCreateTask() {
    if (task === "") {
      toast.error("Você precisa digitar pelo menos uma tarefa");
    } else {
      const n1 = 987654321;

      const idRandon = (num) => Math.floor(Math.random() * num);

      const newTask = { id: idRandon(n1), title: task, isComplete: false };

      //console.log(newTask);
      setTasks([...tasks, newTask]);

      //console.log(newTask);

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

    setTasks(taskComplete);
  }

  function handleCompleteTask() {
    alert("apagar task");
  }

  
  function progressBar() {
    const tasksTrue = tasks.filter((task) => {
      if (task.isComplete === true) {
        return task;
      }
    })

    const percentageComplete = (tasksTrue.length / tasks.length) * 100;
    return percentageComplete
  }

  progressBar();

  


  return (
    <ContainerPrincipal>
      <ToastContainer />

      <Logo alt="Logo" src={LogoImg} />
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
          <TitleCard>Minhas Tarefas</TitleCard>
          <p>{}</p>
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
                    onClick={handleCompleteTask}
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
