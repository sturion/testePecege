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
  ReactForm,
} from "../modal/style.tsx";
import { useMutation } from "react-query";
import { useForm, SubmitHandler,FieldErrors } from "react-hook-form";
import {
  delUsers,
  updateUser,
  createUser,
} from "../../services/api/endpoints/user.tsx";

import { PersonData } from "./../../interfaces/personData.tsx";

interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
  snackbarBool(snackbarType: string): void;
  data: PersonData;
  edit: boolean;
  create: boolean;
  id: string;
}

const Modal: React.FC<IModalProps> = ({
  isOpen = false,
  onCloseRequest,
  snackbarBool,
  data,
  edit,
  create,
}) => {
  const { register, handleSubmit, reset, setValue} = useForm<PersonData>();
  const onSubmit: SubmitHandler<PersonData> = (data) => {
    console.log("entrou");
    create ? createForm(data) : update(data);
  };

  const onError = (errors:FieldErrors) => {
    console.log(errors)
    snackbarBool("formError");
  }

  useEffect(() => {
    formValue();
    create ? reset() : null;
    // eslint acusando formValue de entrar no array de dependencia, porém iria se tornar um loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, reset, create]);

  function formValue() {
    setValue("id", data.id);
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

  const mutationUpdate = useMutation((newTodo: PersonData) => {
    return updateUser(newTodo);
  });

  const mutationDelete = useMutation((id?: number) => {
    return delUsers(id);
  });

  const mutationCreate = useMutation((newTodo: PersonData) => {
    return createUser(newTodo);
  });

  function update(data: PersonData) {
    console.log("entrou");
    mutationUpdate.mutate(data);
    mutationUpdate.isSuccess ? snackbarBool("updateSuccess") : null;
    mutationUpdate.isError ? snackbarBool("updateError") : null;
  }

  function createForm(data: PersonData) {
    mutationCreate.mutate(data);
    mutationCreate.isSuccess ? snackbarBool("createSuccess") : null;
    mutationCreate.isError ? snackbarBool("createError") : null;
  }

  function deleteUser(id?: number) {
    mutationDelete.mutate(id);
    mutationDelete.isSuccess ? snackbarBool("deleteSuccess") : null;
    mutationDelete.isError ? snackbarBool("deleteError") : null;
  }

  if (!isOpen) {
    return null;
  }

  return (
    <ModalBackgroundStyled>
      <CloseButtonStyled>
        <CloseButton onClick={onCloseRequest}>X</CloseButton>
        <ReactForm onSubmit={handleSubmit(onSubmit,onError)}>
          {data.id ? (
            <DataInput
              type="text"
              defaultValue={`#${data.id}`}
              disabled={true}
            ></DataInput>
          ) : null}
          <UserInfo>
            <DataContainer>
              <DataLabel>*Nome:</DataLabel>
              <DataInput
                {...register("name",{required: "insira um nome",validate: {}},)}
                disabled={edit}
                placeholder="Nome"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Username:</DataLabel>
              <DataInput
                {...register("username")}
                disabled={edit}
                placeholder="Usuário"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>E-Mail:</DataLabel>
              <DataInput
                {...register("email")}
                disabled={edit}
                placeholder="E-Mail"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Telefone:</DataLabel>
              <DataInput
                {...register("phone")}
                disabled={edit}
                placeholder="Telefone"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Website:</DataLabel>
              <DataInput
                {...register("website")}
                disabled={edit}
                placeholder="Website"
              ></DataInput>
            </DataContainer>
          </UserInfo>
          <AddressInfo>
            <DataContainer>
              <DataLabel>Rua:</DataLabel>
              <DataInput
                {...register("address.street")}
                disabled={edit}
                placeholder="Rua"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Complemento:</DataLabel>
              <DataInput
                {...register("address.suite")}
                disabled={edit}
                placeholder="Complemento"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Cidade:</DataLabel>
              <DataInput
                {...register("address.city")}
                disabled={edit}
                placeholder="Cidade"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>CEP:</DataLabel>
              <DataInput
                {...register("address.zipcode")}
                disabled={edit}
                placeholder="CEP"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Latitude:</DataLabel>
              <DataInput
                {...register("address.geo.lat")}
                disabled={edit}
                placeholder="Latitude"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Longitude:</DataLabel>
              <DataInput
                {...register("address.geo.lng")}
                disabled={edit}
                placeholder="Longitude"
              ></DataInput>
            </DataContainer>
          </AddressInfo>
          <CompanyInfo>
            <DataContainer>
              <DataLabel>Empresa:</DataLabel>
              <DataInput
                {...register("company.name")}
                disabled={edit}
                placeholder="Nome da empresa"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Slogan:</DataLabel>
              <DataInput
                {...register("company.catchPhrase")}
                disabled={edit}
                placeholder="slogan"
              ></DataInput>
            </DataContainer>
            <DataContainer>
              <DataLabel>Ramo:</DataLabel>
              <DataInput
                {...register("company.bs")}
                disabled={edit}
                placeholder="Ramo"
              ></DataInput>
            </DataContainer>
          </CompanyInfo>
          <ModalActions>
            {create ? null : (
              <ModalButton
                type="button"
                disabled={edit}
                onClick={() => deleteUser(data.id)}
              >
                Delete
              </ModalButton>
            )}

            <ModalButton
              type="submit"
              disabled={edit}
              onClick={() => handleSubmit(onSubmit)}
            >
              {create ? "Criar" : "Update"}
            </ModalButton>
          </ModalActions>
        </ReactForm>
      </CloseButtonStyled>
    </ModalBackgroundStyled>
  );
};

export default Modal;
