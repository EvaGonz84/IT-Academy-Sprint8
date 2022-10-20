import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import img from "../Images/stars.jpg";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 10px 20px 0;
  background-image: url(${img});

  ${mobile} {
    display: flex;
    justify-content: space-between;
  }
`;

export const BurgerIcon = styled(FaBars)`
  width: 50px;
  color: grey;
  &:hover {
    color: #dddddd;
    transition: 0.3s ease-in-out;
  }
`;

export const HeaderDiv = styled.div`
  margin-right: 100px;
  margin-left: 20px;
  font-size: 30px;
  opacity: 0;

  ${mobile} {
    display: block;
    margin-right: -1px;
    opacity: 1;
  }
`;

export const LinksContainer = styled.div`
  ${mobile} {
    font-size: 12px;
  }
`;

export const NavContainer = styled.nav`
  background-color: black;
  display: flex;
  justify-content: center;
  font-weight: bold;
  border-width: 1px;
  border-style: solid;
  border-color: grey transparent;

  ${mobile} {
    position: absolute;
    top: 140px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 70%;
    margin-right: 100px;
    flex-direction: column;
    align-items: center;
    transition: 0.6s all ease;
  }
`;

export const NavbarLinkHeader = styled(NavLink)`
  color: grey;
  text-decoration: none;
  margin: 10px;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #dddddd;
  }
  ${mobile} {
    display: block;
  }
`;

export const NavbarLink = styled(NavLink)`
  margin: 20px;
  color: grey;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  &:hover {
    color: white;
  }
  ${mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
  }
`;

export const Button = styled.button`
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  color: grey;
  font-weight: bolder;
  transition: 0.3s ease-in-out;
  margin-left: 100px;

  &:hover {
    color: white;
    background-color: #3c4048;
    border-color: white;
  }

  ${mobile} {
    margin-left: auto;
    font-size: 10px;
  }
`;
