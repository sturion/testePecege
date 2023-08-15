import styled from "styled-components";


export const ModalBackgroundStyled = styled.div`
  background: #00000011;
  backdrop-filter: blur(2px);
  width:100vw;
  height:100vh;
  position: absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 8;
`;

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ModalButton = styled.button`
  display: ${(props)=>props.disabled? 'none' : 'flex'};
  height: 40px;
  color:white;
  margin: 5px;
  background: #61619f;
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
  background: #2c2c2c;
  min-width: 270px;
  filter: drop-shadow(8px 8px 2px #61619f);
  border-radius: 20px;
  width: 50vw;
  height: 70vh;
  padding: 30px 20px;
  position: sticky;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow:auto;
  align-items: flex-end;
  z-index: 1;
`;

export const DataInput = styled.input`
  background: none;
  color: ${(props)=>props.disabled? 'white' : 'white'};
  height:20px;
  border: ${(props)=>props.disabled? 'none' : '1px solid grey'};
  border-radius: 20px;
  margin: 5px;
  max-width:300px;
  width: 90%;
  padding-left:5px;
  align-self: flex-start;
`;

export const UserInfo = styled.div`
  border: 1px grey solid;
  margin-top: 15px;
  width:100%;
  display: flex;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
  flex-wrap: wrap;
  height: 40%;
`;

export const CompanyInfo = styled.div`
   border: 1px grey solid;
  margin-top: 15px;
  display: flex;
  width:100%;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 40px;
  justify-content:space-around;
  flex-wrap: wrap;
  height: 30%;
`;

export const DataLabel = styled.div`
  color:white;
  width: 100px;
`;

export const DataContainer = styled.div`
  width:40%;
  display:flex;
  flex-direction:column;
`;


export const AddressInfo = styled.div`
  border: 1px grey solid;
  border-radius: 5px;
  margin-top: 15px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content:space-around;
  flex-wrap: wrap;
  height: 50%;
`;

export const CloseButton = styled.div`
  width: 25px;
  align-self:right;
  height: 25px;
  margin-top: 10px;
  background: #ff6961;
  cursor: pointer;
  border-radius:100%;
  display:flex;
  align-items:center;
  justify-content: center;
  color: #121212;
`;

export const ModalActions = styled.div`
  display:flex;
  width:25%;
  justify-content: space-around;
  padding-bottom: 30px;
`;

export const ReactForm = styled.form`
 height:100%;
 display:flex;
 flex-direction: column;
 align-items: center;
`;