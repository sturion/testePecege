import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0};
  25% { opacity: 1};
  50% {opacity: 1};
  100% {opacity: 0};
`;


interface Props {
  status: string;
}
const screenWhidth = window.innerWidth;

export const SnackbarDiv = styled.div<Props>`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: ${({ status }) =>
    status == "success"
      ? "#28a745"
      : status == "error"
      ? "#dc3545"
      : "#ffc107"};
  border-radius: 5px;
`;

export const SnackbarContainer = styled.div`
  width: 15vw;
  min-width: 250px;
  height: 10vh;
  background: none;
  position: absolute;
  padding-top: 30px;
  top: 0;
  left: ${screenWhidth / 2};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 5s alternate;
`;
