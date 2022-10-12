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
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #191919;
  margin: 10px 20%;
  padding: 15px;
  color: grey;
 
`;