import styled from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContainerSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5px;

  ${mobile} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: yellow;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 25px;
`;

export const InputEmail = styled.input`
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  letter-spacing: 1px;
  color: yellow;

  &:focus {
    border-color: white;
    background-color: #3c4048;
    caret-color: yellow;
  }
  ${mobile} {
    width: 60%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #3c4048;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: lighter;

  &:hover {
    color: white;
    background-color: #1363df;
  }
  ${mobile} {
    width: 65%;
  }
`;

export const Span = styled.span`
  color: red;
  display: block;
  margin-top: 5px;
`;
