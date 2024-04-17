import styled from "styled-components";
import BackgroundFundo from "../../assets/background-3.png";

export const ContainerPrincipal = styled.div`
  background: url("${BackgroundFundo}");
  background-size: cover;
  height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

