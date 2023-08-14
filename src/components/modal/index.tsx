import React from "react";
import {
    CloseButtonStyled,
    DataInput,
    UserInfo,
    AddressInfo,
    CompanyInfo,
    ModalBackgroundStyled,
    CloseButton,
    DataLabel,
    DataContainer
}from "./style.ts";
import { useMutation } from "react-query";
import { delUsers,createUser,updateUser } from "../../services/api/endpoints/user.tsx";

import { PersonData } from './../../interfaces/personData.tsx';



interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
  data: PersonData;
  edit: boolean;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest, data, edit}) => {

  const mutationUpdate = useMutation((newTodo:PersonData) => {
    return updateUser(newTodo)
  })
  const mutationCreate = useMutation((newTodo:PersonData) => {
    return createUser(newTodo)
  })
  const mutationDelete = useMutation((id?:number) => {
    return delUsers(id)
  })

  function update(data:PersonData){
    mutationUpdate.mutate(data)
  }

  function create(data:PersonData){
    mutationCreate.mutate(data)
  }

  function deleteUser(id?:number){
    mutationDelete.mutate(id)
  }
  
  if (!isOpen) {
    return null;
  }
  

  return (
    <ModalBackgroundStyled>
    <CloseButtonStyled>
      <CloseButton type="button" onClick={onCloseRequest}>X</CloseButton>
      <form>
      <DataInput type="text" defaultValue={`#${data.id}`} disabled={true}></DataInput>
        <UserInfo>
        <DataContainer><DataLabel>Nome:</DataLabel><DataInput type="text" defaultValue={data.name} disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>Username:</DataLabel><DataInput type="text" defaultValue={data.username} disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>E-Mail:</DataLabel><DataInput type="text" defaultValue={data.email} disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>Phone:</DataLabel><DataInput type="text" defaultValue={data.phone} disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>Website:</DataLabel><DataInput type="text" defaultValue={data.website} disabled={edit}></DataInput></DataContainer>
      </UserInfo>
      <AddressInfo>
      <DataContainer><DataLabel>Rua:</DataLabel><DataInput type="text" defaultValue={data.address?.street} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Complemento:</DataLabel><DataInput type="text" defaultValue={data.address?.suite} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Cidade:</DataLabel><DataInput type="text" defaultValue={data.address?.city} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>CEP:</DataLabel><DataInput type="text" defaultValue={data.address?.zipcode} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Latitude:</DataLabel><DataInput type="text" defaultValue={data.address?.geo?.lat} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Longitude:</DataLabel><DataInput type="text" defaultValue={data.address?.geo?.lng} disabled={edit}></DataInput></DataContainer>
      </AddressInfo>
      <CompanyInfo>
      <DataContainer><DataLabel>Nome da empresa:</DataLabel><DataInput type="text" defaultValue={data.company?.name} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Slogan:</DataLabel><DataInput type="text" defaultValue={data.company?.catchPhrase} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Ramo:</DataLabel><DataInput type="text" defaultValue={data.company?.bs} disabled={edit}></DataInput></DataContainer>
      </CompanyInfo>
      <button onClick={() => deleteUser(data.id)}>Delete</button>
      <button onClick={() => create(data)}>Create</button>
      <button disabled={edit} onClick={() => update(data)}>Send Update</button>
      </form>
    </CloseButtonStyled>
    </ModalBackgroundStyled>
)};

export default Modal