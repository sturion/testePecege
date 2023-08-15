import styled,{keyframes} from "styled-components";

const spinner = keyframes`
0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}
`;


export const Loading = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    border-radius: 50%;
    animation-name: ${spinner};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`;

export const LoadingContainer = styled.div`
    width:100vw;
    height:100vh;
    background: green;
`;


