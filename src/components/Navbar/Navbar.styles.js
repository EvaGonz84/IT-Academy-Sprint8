import styled from "styled-components";
import { NavLink } from "react-router-dom";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 10px 0 0;
`;

export const HeaderDiv = styled.div`
  transform: rotate(90deg);

  margin-right: 140px;
  font-size: 30px;
  opacity: 0;

  ${mobile} {
    width: 100%;
    opacity: 1;
    cursor: pointer;
  }
`;

export const NavContainer = styled.nav`
  background-color: black;
  display: flex;
  justify-content: center;
  font-weight: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: grey transparent;
`;

export const NavbarLinkHeader = styled(NavLink)`
  color: grey;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: white;
  }
`;

export const NavbarLink = styled(NavLink)`
  margin: 20px;
  color: grey;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;
