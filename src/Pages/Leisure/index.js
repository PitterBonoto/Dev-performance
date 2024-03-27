import React from "react";
import { ContainerPrincipal, Logo, ContainerItensPrincipal, ContainerItens, TitleCard, ListaCard, Button, Citation, ContainerCitation, ImgLazer } from "./styles";

import LogoImg from "../../assets/logo-dev-performance.png";
import ImgLazerFam from "../../assets/Lazer.png";

function Leisure() {
  return (
    <ContainerPrincipal>
      <Logo alt="Logo" src={LogoImg}/>
      <ContainerItensPrincipal>
      
      <ContainerItens>
        <TitleCard>Descanse o corpo e a mente</TitleCard>
        <ListaCard>
          <li>Estabeleça uma rotina para ter disciplina para estudar sozinho</li>
		      <li>Mantenha-se focado durante as aulas online</li>
		      <li>Tenha disciplina para estudar sozinho</li>
          <li>Faça um planejamento diário ou semanal</li>
          <li>Crie um planejamento que seja possível de ser cumprido</li>
          <li>Faça pausas, o ócio também é criativo</li>
          <li>Faça pausas de 10 minutos a cada 1 hora de estudo ou trabalho</li>
          <li>Use uma ferramenta para te ajudar : aplicativos, planilhas ou agenda</li>
          <li>Registre seu desempenho, tenha um tempo bpara você</li>
        </ListaCard>
        <Button>Descansar é importante</Button>
      </ContainerItens>

      <ContainerItens>
        <TitleCard>Tire um tempo para familia</TitleCard>
        <ListaCard>
          <li>Planejamento: Faça uma lista com todas as tarefas que você precisa executar naquele dia</li>
		      <li>Foco: Qualquer distração, por menor que seja, pode prejudicar sua produtividade</li>
		      <li>Trabalho: Escolha sua primeira tarefa, ajuste o seu cronômetro para 25 minutos, aperte o play e foco total</li>
          <li>Pausa longa: Ao término das quatro sessões de 25 minutos, você poderá fazer uma pausa maior, de 20 a 30 minutos</li>
        </ListaCard>
        <Button>Curta a familia e a você mesmo</Button>
      </ContainerItens>
      
      </ContainerItensPrincipal>
      <ContainerCitation>
        <Citation>Relaxe a mente, diminua a intensidade dos seus pensamentos. Equilibre a sua saúde mental. Viva e curta o seu momento de tranquilidade e alegria.</Citation>
        <ImgLazer alt="imagem-lazer" src={ImgLazerFam}/>
      </ContainerCitation>
    </ContainerPrincipal>
  );
}

export default Leisure;
