import styled from "styled-components";

export const PageContainer = styled.div`
  background: #121212;
  height: 100vh;
  width:100vw;
  overflow:hidden;
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;

export const PersonContainer = styled.div`
  background:#121212;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;
  height: fit-content;
  
`;

export const InformationsContainer = styled.tr`
  display:flex;
  flex-direction: row;
  min-width:700px;
  justify-content: space-between;
  height:32px;
  align-items: center;
  flex-grow: 3;
`;

export const InformationCell = styled.td`
  display:flex;
  width: 32%;
  min-width:180px;
  margin-left:5px;
  text-wrap: wrap;
  overflow:auto;
`;
export const ButtonCell = styled.td`
  width: 4%;
  min-width:30px;
`;



export const Table = styled.table`
  display:inline-block;
  background: #121212;
  filter: drop-shadow(0px 0px 10px #29298a);
  color: white;
  min-width: 200px;
  overflow:auto;
  width:100%;
  border-radius:20px;
  border: 1px #2c2c2c solid;
  tr:nth-child(even){
    background: #2c2c2c;
  }
  tr:last-child{
    border-radius: 0px 0px 19px 19px;
  }
`;

export const ToolsContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  width:calc(70vw - 20px);
  margin-bottom: 10px;
  z-index: 6;
  @media (max-width:700px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid #61619f;
  background: none;
  color: white;
  height:20px;
  width: 20%;
  min-width: 220px;
  border-radius: 10px;
`;

export const Icons = styled.img`
  color: green;
  fill: green;
`;

export const TableButton = styled.div`
  background:none;
  width:30px;
  height:30px;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  background: #61619f;
  display:flex;
  justify-content: center;
  color: white;
  margin-top:5px;
  width: 20%;
  height: 40px;
  min-width: 90px;
  max-width: 150px;
`;
export const OrderUsers = styled.div`
  color: white;
  display:flex;
  align-items: center;
  height: 100%;
`;

export const Checkbox = styled.input`
  background: green;
`;

export const Card = styled.div`
  width: 70vw;
`;