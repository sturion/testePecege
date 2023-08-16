import styled, { keyframes } from "styled-components";

const isMobile = () => window.innerWidth <= 768;
const smallPulse = isMobile() ? '5x' : '10px';
const bigPulse = isMobile() ? '10px' : '30px';

const pulse = keyframes`
  0% {filter: drop-shadow(0px 0px ${smallPulse} #29298a);};
  100% {filter: drop-shadow(0px 0px ${bigPulse} #29298a);}
`;

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
  animation-name: ${pulse};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  color: white;
  min-width: 200px;
  overflow:auto;
  width:70vw;
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
  background:#2c2c2c;
  display:flex;
  border: 1px solid #29298a;
  justify-content: space-between;
  align-items:center;
  width:80%;
  animation-name: ${pulse};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius:10px;
  margin:5px;
`;

export const CardContainer = styled.div`
  height: 70vh;
  padding:10px;
  color: white;
  width: 90%;
  overflow-y: auto;
  display:flex;
  flex-direction: column;
  align-items:center;
`;
export const CardInfoCont = styled.div`
height: 100%;
width:100%;
`;

export const CardInformation = styled.div`
  margin-left:10px;
`;

export const EditDiv = styled.div`
  background: #121212;
  height:100%;
  width: 10%;
  display:flex;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  justify-content:center;

`;