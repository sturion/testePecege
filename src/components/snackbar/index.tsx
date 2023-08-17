import { SnackbarDiv, SnackbarContainer } from "./style.tsx";

interface ISnackbarProps {
  info: string;
}

export const Snackbar: React.FC<ISnackbarProps> = ({ info }) => {
  let status: string = "";
  let message: string = "";

  switch (info) {
    case "createSuccess":
      status = "success";
      message = "Usuário criado com sucesso!";
      break;
    case "updateSuccess":
      status = "success";
      message = "Usuário atualizado com sucesso!";
      break;
    case "deleteSuccess":
      status = "success";
      message = "Usuário deletado com sucesso!";
      break;
    case "updateError":
      status = "error";
      message = "Não foi possível atualizar o usuário";
      break;
    case "createError":
      status = "error";
      message = "Não foi possível criar o usuário";
      break;
    case "deleteError":
      status = "error";
      message = "Não foi possível deletar o usuário";
      break;
    case "formError":
        status = "error";
        message = "Campos com * são obrigatórios";
        break;
    default:
      status = "default";
      message = "Ocorreu um erro";
      break;
  }
  return (
    <SnackbarContainer>
      <SnackbarDiv status={status}>{message}</SnackbarDiv>
    </SnackbarContainer>
  );
};
