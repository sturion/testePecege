import React from "react";
import {
    CloseButtonStyled
}from "./style.ts";

import { PersonData } from './../../interfaces/personData.tsx';

interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
  data: PersonData;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest,data}) => {
  
  // if isOpen is false, dont render anything
  if (!isOpen) {
    return null;
  }

  // if isOpen is true, render the modal
  return (
    <CloseButtonStyled>
      <button type="button" onClick={onCloseRequest}>Close</button>
      <h1>{data.name}</h1>
      <p>{data.phone}</p>
      <p>{data.email}</p>
      <p>{data.username}</p>
    </CloseButtonStyled>
)};

export default Modal