import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: #040303;
        display: flex;
        justify-content: center;
        
        color: grey;
        
	}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

`;
