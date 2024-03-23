import React from "react";
import {
  Container,
  Welcome,
  Logo,
  WelcomeTitle,
  WelcomeTitle1,
  Citation,
  ContainerItens,
  Title,
  InputLabel,
  Input,
  Button,
  Register,
} from "./styles";
import Logo1 from "../../assets/logo-dev-performance.png"

function App() {
  return (
    <Container>
      <Welcome>
        <Logo alt="Logo" src={Logo1}/>
        <WelcomeTitle>
          Uma Escalada Rumo à Alta Performance:
        </WelcomeTitle>
        <WelcomeTitle1>
        Desperte sua Produtividade!
        </WelcomeTitle1>
        <Citation>
          "A subida é árdua, mas a vista do topo vale a pena"
        </Citation>

       
      </Welcome>

      <ContainerItens>
        <Title>LOGIN</Title>

        <InputLabel>Usuário</InputLabel>
        <Input placeholder="Usuário" />

        <InputLabel>Senha</InputLabel>
        <Input placeholder="Senha" />

        <Button>Entrar</Button>
        <Register>Cadastre-se</Register>
      </ContainerItens>
    </Container>
  );
}

export default App;
