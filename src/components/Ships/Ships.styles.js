import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: #040303;
        margin:20px 15%;
        color: grey;
        
        
	}
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #191919;
  margin-top: 20px;
  padding: 15px;
  color: grey;
`;
