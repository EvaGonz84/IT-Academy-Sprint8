import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
    background-color: #040303;
        margin:5px;
        padding:5px;
        color: grey;  
        
	}
`;

export const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  color: grey;
  margin: 0 15%;
`;

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const DivDetails = styled.div`
  padding: 5px;
`;

export const Line = styled.hr`
  margin-top: 0px;
  border: 1px solid #D75281;
  width: 100%;
`;
