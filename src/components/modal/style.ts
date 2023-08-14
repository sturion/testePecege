import styled from "styled-components";


export const ModalBackgroundStyled = styled.div`
  background: #00000011;
  backdrop-filter: blur(2px);
  position: absolute;
  display:flex;
  align-items:center;
  justify-content:center;
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

export const ModalButton = styled.button`
  display: ${(props)=>props.disabled? 'none' : 'flex'};
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
  filter: drop-shadow(5px 5px 2px #29298a);
  border-radius: 20px;
  width: 50vw;
  height: fit-content;
  padding: 20px;
  position: sticky;
  display:flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  z-index: 1;
`;

export const DataInput = styled.input`
  background: ${(props)=>props.disabled? 'none' : 'grey'};
  color: ${(props)=>props.disabled? 'white' : 'white'};
  height:20px;
  border: none;
  border-radius: 20px;
  margin: 5px;
  max-width:300px;
  width: 90%;
  padding-left:5px;
`;

export const UserInfo = styled.div`
  border: 1px grey solid;
  margin-top: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
  flex-wrap: wrap;
`;

export const CompanyInfo = styled.div`
   border: 1px grey solid;
  margin-top: 15px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 30px;
  justify-content:space-around;
  flex-wrap: wrap;
  height: calc(100% * (1/3) - 10px - 1px);
`;

export const DataLabel = styled.div`
  color:white;
  width: 100px;
`;

export const DataContainer = styled.div`
  width:100%;
  margin-left: 10px;
  display:flex;
  overflow:hidden;
`;


export const AddressInfo = styled.div`
  border: 1px grey solid;
  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content:space-around;
  flex-wrap: wrap;
  height: calc(100% * (1/3) - 10px - 1px);
`;

export const CloseButton = styled.button`
  width: 50px;
  align-self:right;
  height: 50px;
`;