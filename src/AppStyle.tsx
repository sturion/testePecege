import styled from "styled-components";


export const PageContainer = styled.div`
  background: #121212;
  height: 100vh;
  width:100vw;
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PersonContainer = styled.div`
  background:grey;
  display:flex;
  flex-direction: row;
  justify-content: left;
  width:fit-content;
  height: fit-content;
`;

export const Table = styled.div`
  width: fit-content;
  min-width: 50vw;
`;