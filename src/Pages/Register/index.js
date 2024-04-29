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
} from "../../components/Login-pages/styles";
import Logo1 from "../../assets/logo-dev-performance.png";
//import styled from "styled-components";

function App() {
  const navigate = useNavigate();

  //-----------------------------Cadastrar----------------------------------
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [users, setUsers] = useState([]);

  async function ToRegister() {
    const schema = Yup.object({
      user: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid({ user, password });
    if (isValid === false) {
      toast.error("❌ Email ou senha invalidos, verifique por favor. ❌");
    } else if (password !== passwordConfirm) {
      toast.warning("🤔 Suas senhas estão diferentes, verifique. 🤔");
    } else if (password !== passwordConfirm) {
      toast.warning("🤔 Suas senhas estão diferentes, verifique. 🤔");
    } else {
      //alert(password);
      const { data: newUser } = await axios.post(
        // "http://localhost:3001/users",
        "https://project-hackton-react-api.vercel.app/users",
        {
          email: user,
          password: password,
        }
      );
      setUsers([...users, newUser]);
      toast.success("😀 Você foi cadastrado com sucesso !!! 😀");

      setUser("");
      setPassword("");
      setPasswordConfirm("");
    }
  }

  function ToBackHome() {
    navigate("/");
  }

  return (
    <Container>
      <ToastContainer />
      <Logo alt="Logo" src={Logo1} />
      <Welcome>
        <WelcomeTitle>Uma Escalada Rumo à Alta Performance!</WelcomeTitle>
        <WelcomeTitle1>Desperte sua Produtividade!</WelcomeTitle1>
        <Quote>
          "A subida é árdua, mas a vista do topo vale a pena"<br></br>
          <span> Eslen Delanogare</span>
        </Quote>
      </Welcome>

      <ContainerItens>
        <Title>Cadastre-se</Title>

        <InputLabel>E-mail</InputLabel>
        <Input
          placeholder="E-mail"
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

        <InputLabel type="password">Confirmar Senha</InputLabel>
        <Input
          placeholder="Confirmar Senha"
          type="password"
          value={passwordConfirm}
          onChange={(ev) => setPasswordConfirm(ev.target.value)}
        />
        <Button
          onClick={ToRegister}
          disabled={user && password && passwordConfirm !== "" ? false : true}
        >
          Cadastrar
        </Button>
        <Register onClick={ToBackHome}>Voltar Login</Register>
      </ContainerItens>
    </Container>
  );
}

export default App;
