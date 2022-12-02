import styled, { createGlobalStyle } from "styled-components";
import img from "../Images/background.jpg";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`
	body {
		    background-color: #040303;
        color: white;   
	}
`;

export const HomeContainer = styled.div`
  font-size: 20px;
  padding-top: 5px;
`;

export const ContainerImage = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 650px;
  background-size: cover;
  position: absolute;
  left: 0px;
  z-index: -1;
  ${mobile} {
    position: relative;
    height: 200px;
  }
`;

export const ContainerText = styled.div`
  width: 50%;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${mobile} {
    width: 90%;
    margin: 10px auto;
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin-top: 120px;
  letter-spacing: 1px;
  ${mobile} {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const Subtitle = styled.h3`
  margin-top: -20px;
 

  ${mobile} {
    font-size: 20px;
    margin-top: 1px;
    width: 100%;
   
  }
`;

export const SpanStarWars = styled.span`
  font-style: italic;
`;

export const Button = styled.button`
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  padding: 10px 30px;
  background-color: black;
  border-color: white;
  border-radius: 5px;

  &:hover {
    background-color: rgb(80, 80, 80, 0.4);
  }

  ${mobile} {
    font-size: 12px;
  }
`;
