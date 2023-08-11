import styled from "styled-components";


export const ModalBackgroundStyled = styled.div`
  background: #000;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const ModalStyled = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  min-width: 30rem;
  z-index: 2;
`;

export const CloseButtonStyled = styled.button`
  background: none;
  border: none;
  position: absolute;
  z-index: 1;
  svg {
    font-size: 1.5em;
  }
  &:hover {
    cursor: pointer;
  }
`;