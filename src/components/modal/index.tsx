import React, { useEffect } from "react";
import {
    CloseButtonStyled,
    DataInput,
    UserInfo,
    AddressInfo,
    CompanyInfo,
    ModalBackgroundStyled,
    CloseButton,
    DataLabel,
    DataContainer,
    ModalButton,
    ModalActions,
    ReactForm
}from "./style.tsx";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { delUsers,updateUser,createUser } from "../../services/api/endpoints/user.tsx";

import { PersonData } from './../../interfaces/personData.tsx';



interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
  data: PersonData;
  edit: boolean;
  create: boolean;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest, data, edit,create}) => {


  const { register, handleSubmit,reset,setValue } = useForm<PersonData>();
  const onSubmit: SubmitHandler<PersonData> = data => {create ? createForm(data) : update(data)};
  useEffect(() => {
    
    formValue();
    create ? reset() : null;
  // eslint acusando formValue de entrar no array de dependencia, porém iria se tornar um loop.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen,reset,create]);

  function formValue(){
    setValue("id",data.id)
    setValue("name", data.name);
    setValue("username", data.username);
    setValue("email", data.email);
    setValue("phone", data.phone);
    setValue("website", data.website);
    setValue("address.street", data.address?.street);
    setValue("address.suite", data.address?.suite);
    setValue("address.city", data.address?.city);
    setValue("address.zipcode", data.address?.zipcode);
    setValue("address.geo.lat", data.address?.geo?.lat);
    setValue("address.geo.lng", data.address?.geo?.lng);
    setValue("company.name", data.company?.name);
    setValue("company.catchPhrase", data.company?.catchPhrase);
    setValue("company.bs", data.company?.bs);
  }

  const mutationUpdate = useMutation((newTodo:PersonData) => {
    return updateUser(newTodo)
  })
  const mutationDelete = useMutation((id?:number) => {
    return delUsers(id)
  })

  const mutationCreate = useMutation((newTodo:PersonData) => {
    return createUser(newTodo)
  })


  function update(data:PersonData){
    mutationUpdate.mutate(data)
  }

  function createForm(data:PersonData){
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
      <CloseButton onClick={onCloseRequest}>X</CloseButton>
      <ReactForm onSubmit={handleSubmit(onSubmit)}>
      {data.id ? <DataInput type="text" defaultValue={`#${data.id}`} disabled={true}></DataInput> : null}
        <UserInfo>
        <DataContainer><DataLabel>Nome:</DataLabel><DataInput {...register("name")} disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>Username:</DataLabel><DataInput {...register("username")} disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>E-Mail:</DataLabel><DataInput {...register("email")} disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>Phone:</DataLabel><DataInput {...register("phone")}  disabled={edit}></DataInput></DataContainer>
        <DataContainer><DataLabel>Website:</DataLabel><DataInput {...register("website")} disabled={edit}></DataInput></DataContainer>
      </UserInfo>
      <AddressInfo>
      <DataContainer><DataLabel>Rua:</DataLabel><DataInput {...register("address.street")} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Complemento:</DataLabel><DataInput {...register("address.suite")} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Cidade:</DataLabel><DataInput {...register("address.city")} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>CEP:</DataLabel><DataInput {...register("address.zipcode")} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Latitude:</DataLabel><DataInput {...register("address.geo.lat")} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Longitude:</DataLabel><DataInput {...register("address.geo.lng")} disabled={edit}></DataInput></DataContainer>
      </AddressInfo>
      <CompanyInfo>
      <DataContainer><DataLabel>Empresa:</DataLabel><DataInput {...register("company.name")} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Slogan:</DataLabel><DataInput {...register("company.catchPhrase")} disabled={edit}></DataInput></DataContainer>
      <DataContainer><DataLabel>Ramo:</DataLabel><DataInput {...register("company.bs")} disabled={edit}></DataInput></DataContainer>
      </CompanyInfo>
      <ModalActions>
      <ModalButton disabled={edit} onClick={() => deleteUser(data.id)}>Delete</ModalButton>
      <ModalButton disabled={edit} onClick={() => handleSubmit(onSubmit)}>{create ? "Criar" : "Update"}</ModalButton>
      </ModalActions>
      </ReactForm>
    </CloseButtonStyled>
    </ModalBackgroundStyled>
)};

export default Modal