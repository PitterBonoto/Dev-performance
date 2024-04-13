import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "react-modal";
import "./modalstyles.css";

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
  ContainerModal,
  TitleModal,
  CaptionModal,
  ParagraphModal,
  ListModal,
  ButtonModal
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
        <ContainerModal>
        <TitleModal>Comece por aqui...</TitleModal>
        <CaptionModal>
          Esse aplicativo tem como objetivo te direcionar na sua jornada rumo ao
          sucesso.
        </CaptionModal>
        <ParagraphModal>Antes de dar início, gostaria de fazermos algumas observações: </ParagraphModal>
        <ListModal>
          <li>
            Tenha em mente o PORQUÊ e POR QUEM você está trilhando essa
            jornada. Saber o seu porquê e o seu por quem irá te ajudar a se
            manter firme nessa caminhada que terá altos e baixos.
          </li>
          <li>
            Tenha uma META clara em relação aos seus objetivos. O que você
            quer? O que você precisa fazer para chegar lá? Como você irá chegar
            lá? Mas lembre-se metas razoáveis são mais fáceis de gerenciar. Crie
            uma meta razoável e à medida que alcançar seus objetivos, trace
            outros objetivos para você.
          </li>
          <li>
            Gerencie suas frustrações: VOCÊ VAI SE FRUSTRAR! Sua jornada será
            longa e pelo caminho haverá dificuldades e frustrações. Fique atento
            as suas emoções envolvidas nesse processo e gerencie as suas
            frustrações. Você poderá ficar frustrado porque teve dificuldades,
            porque o conteúdo atual é mais difícil, por que está passando por
            problemas pessoais ou porque teve menos tempo essa semana.
            Lembre-se- se que feito é melhor que perfeito. Se manter em
            movimento é melhor que ficar parado. Volte o mais breve possível.
          </li>
          <li>
            AJUSTE SUAS EXPECTATIVAS: fique atento as expectativas que você
            tem nesse processo. Sucesso não é sobre execução perfeita, tempo
            perfeito e disponibilidade perfeita. Então sim, você irá falhar, mas
            isso não precisa ser determinante para você desistir.
          </li>
        </ListModal>
        <CaptionModal>Mãos à obra!</CaptionModal>
        </ContainerModal>
        <ButtonModal onClick={closeModal}>Fechar</ButtonModal>
      </Modal>
    </Container>
  );
}

export default App;
