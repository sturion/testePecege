import React from "react";
import {
    CloseButtonStyled,
    DataInput
}from "./style.ts";

import { PersonData } from './../../interfaces/personData.tsx';

interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
  data: PersonData;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest, data}) => {
  
  if (!isOpen) {
    return null;
  }
  

  return (
    <CloseButtonStyled>
      <button type="button" onClick={onCloseRequest}>Close</button>
      <form>
      <DataInput type="text" defaultValue={data.name} disabled={false}></DataInput>
      <p>{data.phone}</p>
      <p>{data.email}</p>
      <p>{data.username}</p>
      </form>
    </CloseButtonStyled>
)};

export default Modal