import styled from "styled-components";


export const PageContainer = styled.div`
  background: #121212;
  height: 100vh;
  width:100vw;
  overflow:hidden;
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
  flex-grow: 3;
  
`;

export const InformationCell = styled.td`
  display:flex;
  min-width: 200px;
`;



export const Table = styled.table`
  width: fit-content;
  min-width: 50vw;
  border: 1px grey solid;
  tr:nth-child(even){
    background: pink;
  }
`;