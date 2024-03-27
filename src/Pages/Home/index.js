import React from "react";
import { useNavigate } from "react-router";

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
          <ProgressExt>
            <ProgressInt></ProgressInt>
          </ProgressExt>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone></Cornerstone>
          <CornestoneTitle>Estudos</CornestoneTitle>
          <ProgressExt>
            <ProgressInt></ProgressInt>
          </ProgressExt>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone></Cornerstone>
          <CornestoneTitle>Pessoal</CornestoneTitle>
          <ProgressExt>
            <ProgressInt></ProgressInt>
          </ProgressExt>
        </CornerstoneContainer>
      </ContainerItens>
    </Container>
  );
}

export default App;
