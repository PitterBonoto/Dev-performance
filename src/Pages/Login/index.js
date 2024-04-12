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

  //------------------------Entrar na Home------------------------------
  function ToEnter() {
    navigate("/Home");
  }

  //------------------------Entrar em Cadastrar-------------------------
  function ToEnterRegister() {
    navigate("/Cadastrar");
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
        <Title>Login</Title>

        <InputLabel>Usuário</InputLabel>
        <Input placeholder="Usuário" />

        <InputLabel>Senha</InputLabel>
        <Input placeholder="Senha" type="password" />

        <Button onClick={ToEnter}>Entrar</Button>
        <Register onClick={ToEnterRegister}>Cadastre-se</Register>
      </ContainerItens>
    </Container>
  );
}

export default App;
