import styled from "styled-components";


export const ModalBackgroundStyled = styled.div`
  background: #000;
  backdrop-filter: blur(2px);
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
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

export const CloseButtonStyled = styled.div`
  background: red;
  border: none;
  position: sticky;
  top: 5;
  left: 6px;
  z-index: 1;
`;

export const DataInput = styled.input`
  background: ${(props)=>props.disabled? 'none' : 'none'};;
  border: none;
  :disabled{
    color: red;
  }
`;

export const UserInfo = styled.div`

`;

export const CompanyInfo = styled.div`
  
`;

export const AddressInfo = styled.div`
  
`;