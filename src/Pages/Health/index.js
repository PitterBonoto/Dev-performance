import React from "react";
import { ContainerPrincipal, Logo, ContainerItensPrincipal, ContainerItens, TitleCard, ListaCard, Button, Citation, ContainerCitation, ImgSaude } from "./styles";

import LogoImg from "../../assets/logo-dev-performance.png";
import ImgSaudeExerc from "../../assets/ginastica.png";

function Health() {
  return (
    <ContainerPrincipal>
      <Logo alt="Logo" src={LogoImg}/>
      <ContainerItensPrincipal>
      
      <ContainerItens>
        <TitleCard>Melhore Seu Sono</TitleCard>
        <ListaCard>
          <li>Trate o sono como prioridade na sua rotina</li>
		      <li>Estabeleça um cronograma do sono</li>
		      <li>Exponha-se à luz solar, ao acordar</li>
          <li>Pratique exercícios físicos</li>
          <li>Considere tirar um cochilo diário</li>
          <li>Liste suas pendências ao encerrar o expediente</li>
          <li>Abandone as telas duas horas antes de dormir</li>
          <li>Faça uma refeição leve no início da noite</li>
          <li>Estabeleça um ritual do sono, com preparação do ambiente</li>
          <li>Busque a melhor posição para dormir</li>
        </ListaCard>
        <Button>Melhore seu sono</Button>
      </ContainerItens>

      <ContainerItens>
        <TitleCard>Cuide da sua saúde</TitleCard>
        <ListaCard>
          <li>Comece a praticar atividade física aos poucos</li>
		      <li>Não espere a motivação, seja proativo</li>
		      <li>Registre as suas conquistas do dia a dia</li>
          <li>Faça atividade física com consistência</li>
          <li>Saiba por que você está fazendo exercícios</li>
          <li>Leve seu pet no início</li>
          <li>Procure algo que você goste muito ou admira</li>
          <li>Ouça músicas que gosta durante o exercício</li>
          <li>Tenha uma companhia</li>
          <li>Participe de eventos</li>
        </ListaCard>
        <Button>Motive-se</Button>
      </ContainerItens>
      
      </ContainerItensPrincipal>
      <ContainerCitation>
        <Citation>Amanhã vou ter orgulho da minha versão de hoje: uma pessoa guerreira que não deixa o cansaço ganhar da força de vontade</Citation>
        <ImgSaude alt="imagem-ginastica" src={ImgSaudeExerc}/>
      </ContainerCitation>
    </ContainerPrincipal>
  );
}

export default Health;
