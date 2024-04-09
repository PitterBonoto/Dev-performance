import React, { useContext, createContext } from "react";
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
  ProgressExt,
  ProgressInt,
} from "./styles";
import Logo1 from "../../assets/logo-dev-performance.png";

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
  }

  return (
    <Container>
      <Logo alt="Logo" src={Logo1} />
      <Title>Os pilares da Produtividade:</Title>
      <PercProgress>valor: </PercProgress>
      <Roof>
        <p>SUCESSO</p>
      </Roof>

      <ContainerItens>
        <CornerstoneContainer>
          <Cornerstone onClick={GoToHealth}></Cornerstone>
          <CornestoneTitle>Saúde</CornestoneTitle>
          <ProgressExt>
            <ProgressInt></ProgressInt>
          </ProgressExt>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone onClick={GoToStudies}></Cornerstone>
          <CornestoneTitle>Estudos</CornestoneTitle>
          <ProgressExt>
            <ProgressInt></ProgressInt>
          </ProgressExt>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone onClick={GoToLeisure}></Cornerstone>
          <CornestoneTitle>Pessoal</CornestoneTitle>
          <ProgressExt onClick={teste}>
            <ProgressInt />
          </ProgressExt>
        </CornerstoneContainer>
      </ContainerItens>
    </Container>
  );
}

export default App;
