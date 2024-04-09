import React from "react";
import { useNavigate } from "react-router";

import { PercProgress } from "../../components/PercProgress";

import {
  Container,
  Title,
  Logo,
  Roof,
  ContainerItens,
  CornerstoneContainer,
  Cornerstone,
  CornestoneTitle,
} from "./styles";
import Logo1 from "../../assets/logo-dev-performance.png";

//import { PercProgress } from "../../components/PercProgress";

function App() {
  const navigate = useNavigate();

  function GoToHealth() {
    navigate("/Saude");
  }

  function GoToStudies() {
    navigate("/Estudos");
  }

  function GoToLeisure() {
    navigate("/Lazer");
  }

  function teste() {
    alert("sera que foi");
    //console.log(progressBar());
  }

  return (
    <Container>
      <Logo alt="Logo" src={Logo1} />
      <Title>Os pilares da Produtividade:</Title>
      <Roof>
        <p>SUCESSO</p>
      </Roof>

      <ContainerItens>
        <CornerstoneContainer>
          <Cornerstone onClick={GoToHealth}></Cornerstone>
          <CornestoneTitle>Saúde</CornestoneTitle>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone onClick={GoToStudies}></Cornerstone>
          <CornestoneTitle>Estudos</CornestoneTitle>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone onClick={GoToLeisure}></Cornerstone>
          <CornestoneTitle>Pessoal</CornestoneTitle>
        </CornerstoneContainer>
      </ContainerItens>
    </Container>
  );
}

export default App;
