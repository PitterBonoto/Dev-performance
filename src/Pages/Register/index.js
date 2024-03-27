import React from "react";
import { useNavigate } from "react-router"; 

import {
  Container,
  Welcome,
  Logo,
  WelcomeTitle,
  WelcomeTitle1,
  Quote,
  ContainerItens,
  Title,
  InputLabel,
  Input,
  Button,
  Register,
} from "./styles";
import Logo1 from "../../assets/logo-dev-performance.png";

function App() {
  const navigate = useNavigate();

  //-----------------------------Cadastrar----------------------------------
  function ToRegister() {
    navigate("/");
  }

  return (
    <Container>
      <Logo alt="Logo" src={Logo1} />
      <Welcome>
        <WelcomeTitle>Uma Escalada Rumo à Alta Performance:</WelcomeTitle>
        <WelcomeTitle1>Desperte sua Produtividade!</WelcomeTitle1>
        <Quote>
          "A subida é árdua, mas a vista do topo vale a pena"<br></br>
          <span> Eslen Delanogare</span>
        </Quote>
      </Welcome>

      <ContainerItens>
        <Title>Cadastre-se</Title>

        <InputLabel>E-mail</InputLabel>
        <Input placeholder="E-mail" />

        <InputLabel>Senha</InputLabel>
        <Input placeholder="Senha" />

        <InputLabel>Confirmar Senha</InputLabel>
        <Input placeholder="Confirmar Senha" />

        <Button onClick={ToRegister}>Cadastrar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
