import React from "react";
import {
    CloseButtonStyled,
    DataInput,
    UserInfo,
    AddressInfo,
    CompanyInfo
}from "./style.ts";
import { useMutation } from "react-query";
import { delUsers,createUser,updateUser } from "../../services/api/endpoints/user.tsx";

import { PersonData } from './../../interfaces/personData.tsx';



interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
  data: PersonData;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest, data}) => {

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
    <CloseButtonStyled>
      <button type="button" onClick={onCloseRequest}>Close</button>
      <form>
        <UserInfo>
      <DataInput type="text" defaultValue={data.id} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.name} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.username} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.email} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.phone} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.website} disabled={false}></DataInput>
      </UserInfo>
      <AddressInfo>
      <DataInput type="text" defaultValue={data.address?.street} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.address?.suite} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.address?.city} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.address?.zipcode} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.address?.geo?.lat} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.address?.geo?.lng} disabled={false}></DataInput>
      </AddressInfo>
      <CompanyInfo>
      <DataInput type="text" defaultValue={data.company?.name} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.company?.catchPhrase} disabled={false}></DataInput>
      <DataInput type="text" defaultValue={data.company?.bs} disabled={false}></DataInput>
      </CompanyInfo>
      <button onClick={() => deleteUser(data.id)}>Delete</button>
      <button onClick={() => create(data)}>Create</button>
      <button onClick={() => update(data)}>Update</button>
      </form>
    </CloseButtonStyled>
)};

export default Modal