import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "react-modal";
import "./modalstyles.css"

import {
  Container,
  Title,
  Logo,
  Roof,
  ContainerItens,
  CornerstoneContainer,
  Cornerstone,
  CornestoneTitle,
  Base,
  BaseTitle,
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

  Modal.setAppElement("#root");
  const [modalIsOpen, SetModalIsOpen] = useState(false);

   function openModal() {
     SetModalIsOpen(true);
   }

  function closeModal() {
    SetModalIsOpen(false);
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
          <Cornerstone onClick={GoToHealth}>
            <CornestoneTitle>SAÚDE</CornestoneTitle>
          </Cornerstone>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone onClick={GoToStudies}>
            <CornestoneTitle>ESTUDOS</CornestoneTitle>
          </Cornerstone>
        </CornerstoneContainer>

        <CornerstoneContainer>
          <Cornerstone onClick={GoToLeisure}>
            <CornestoneTitle>LAZER</CornestoneTitle>
          </Cornerstone>
        </CornerstoneContainer>
      </ContainerItens>

    <Base onClick={openModal}>
    <BaseTitle>COMECE POR AQUI</BaseTitle>
    </Base>
   <Modal
   isOpen={modalIsOpen}
   onRequestClose={closeModal}
   contentLabel="Example Modal"
   overlayClassName="modal-overlay"
   className="modal-content"
   >
    <h1>Eu sou o modal</h1>
    <button onClick={closeModal}>Close</button>
   </Modal>
    </Container>
  );
}

export default App;
