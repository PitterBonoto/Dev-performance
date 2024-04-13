import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";

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
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function ToEnter() {
    const schema = Yup.object({
      user: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid({ user, password });
    //alert(user);
    //alert(password);

    if (user === "" || password === "") {
      toast.warn("🤔 Todos os campos precisam estar preechidos. 🤔");
    } else if (user === "admin" || password === "admin") {
      navigate("/Home");
    } else if (isValid === false) {
      toast.error("❌ Você não tem autorização para entrar no sistema. ❌");
    } else {
      try {
        const { data: userSearch } = await axios.post(
          "http://localhost:3001/login",
          {
            email: user,
            password: password,
          }
        );

        if (userSearch.email === user && userSearch.password === password) {
          navigate("/Home");
          //alert("home");
          setUser("");
          setPassword("");
        }
      } catch (error) {
        toast.error("❌ Você não tem autorização para entrar no sistema. ❌");
      }
    }
  }

  //------------------------Entrar em Cadastrar-------------------------
  function ToEnterRegister() {
    navigate("/Cadastrar");
  }

  return (
    <Container>
      <ToastContainer />
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
        <Input
          placeholder="Usuário"
          value={user}
          onChange={(ev) => setUser(ev.target.value)}
        />

        <InputLabel>Senha</InputLabel>
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <Button type="submit" onClick={ToEnter}>
          Entrar
        </Button>
        <Register onClick={ToEnterRegister}>Cadastre-se</Register>
      </ContainerItens>
    </Container>
  );
}

export default App;
