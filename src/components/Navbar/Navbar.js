import React from "react";
import {
  HeaderContainer,
  NavbarLink,
  NavContainer,
  NavbarLinkHeader,
  HeaderDiv,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderDiv class="toggle">|||</HeaderDiv>
        <img
          src={require("../Images/star-wars-logo.jpg")}
          alt="star wars logo"
          width={"200px"}
        ></img>
        <div>
          <NavbarLinkHeader>LOG IN</NavbarLinkHeader>

          <NavbarLinkHeader>SIGN UP</NavbarLinkHeader>
        </div>
      </HeaderContainer>
      <NavContainer>
        <NavbarLink to="/">HOME</NavbarLink>
        <NavbarLink to="/starships">STARSHIPS</NavbarLink>
      </NavContainer>
    </div>
  );
};

export default Navbar;
