import React from "react";
import { ContainerPrincipal, Logo, ContainerItensPrincipal, ContainerItens, TitleCard, ListaCard, Button, Citation, ContainerCitation, ImgSaude } from "./styles";

import LogoImg from "../../assets/logo-dev-performance.png";
import ImgSaudeExerc from "../../assets/Estudos.png";

function Studies() {
  return (
    <ContainerPrincipal>
      <Logo alt="Logo" src={LogoImg}/>
      <ContainerItensPrincipal>
      
      <ContainerItens>
        <TitleCard>Deixe de lado a procrastinação</TitleCard>
        <ListaCard>
          <li>Estabeleça uma rotina para ter disciplina para estudar sozinho</li>
		      <li>Mantenha-se focado durante as aulas online</li>
		      <li>Tenha disciplina para estudar sozinho</li>
          <li>Faça um planejamento diário ou semanal</li>
          <li>Crie um planejamento que seja possível de ser cumprido</li>
          <li>Faça pausas, o ócio também é criativo</li>
          <li>Crie mapas mentais, é uma forma de anotar o que se estudou e poder relembrar com palavras chave</li>
          <li>Faça pausas de 10 minutos a cada 1 hora de estudo ou trabalho</li>
          <li>Use uma ferramenta para te ajudar : aplicativos, planilhas ou agenda</li>
          <li>Registre seu desempenho, tenha um tempo bpara você</li>
        </ListaCard>
        <Button>Como Estudar</Button>
      </ContainerItens>

      <ContainerItens>
        <TitleCard>Metodo Pomodoro</TitleCard>
        <ListaCard>
          <li>Planejamento: Faça uma lista com todas as tarefas que você precisa executar naquele dia</li>
		      <li>Foco: Qualquer distração, por menor que seja, pode prejudicar sua produtividade</li>
		      <li>Trabalho: Escolha sua primeira tarefa, ajuste o seu cronômetro para 25 minutos, aperte o play e foco total</li>
          <li>Pausa curta: Quando o seu cronômetro apitar avisando que os 25 minutos programados já terminaram, você deverá parar tudo o que está fazendo e se afastar da sua mesa por 5 minutos</li>
          <li>De volta aos trabalhos: Após essa primeira pausa, você retornará às suas tarefas e repetirá esse ciclo por mais três sessões de 25 minutos</li>
          <li>Pausa longa: Ao término das quatro sessões de 25 minutos, você poderá fazer uma pausa maior, de 20 a 30 minutos</li>
        </ListaCard>
        <Button>Aplique o metodo pomodoro</Button>
      </ContainerItens>
      
      </ContainerItensPrincipal>
      <ContainerCitation>
        <Citation>Por maior que seja o seu cansaço, nunca deixe de estudar! Estudar é um privilégio e só o seu esforço pessoal te levará a conhecer pessoas e mundos que os acomodados jamais conhecerão!</Citation>
        <ImgSaude alt="imagem-ginastica" src={ImgSaudeExerc}/>
      </ContainerCitation>
    </ContainerPrincipal>
  );
}

export default Studies;
