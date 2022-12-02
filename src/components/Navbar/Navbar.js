import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import {
  HeaderContainer,
  NavbarLink,
  NavContainer,
  NavbarLinkHeader,
  HeaderDiv,
  LinksContainer,
  BurgerIcon,
  Button,
} from "./Navbar.styles";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const login = () => {
 
    
  };

  const logout = () => {
    setUser(false);
    sessionStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div>
      <HeaderContainer>
        <HeaderDiv onClick={() => setShowMenu(!showMenu)}>
          <BurgerIcon />
        </HeaderDiv>
        <Link to={"/"}>
          <img
            src={require("../Images/star-wars-logo.jpg")}
            alt="star wars logo"
            width={"200px"}
          ></img>
        </Link>
        <LinksContainer>
          {!user ? (
            <>
              <NavbarLinkHeader onClick={login} to={"/login"}>
                LOG IN
              </NavbarLinkHeader>
              <NavbarLinkHeader to={"/signup"}>SIGN UP</NavbarLinkHeader>
            </>
          ) : (
            <Button onClick={logout}>LOG OUT</Button>
          )}
        </LinksContainer>
      </HeaderContainer>
      <NavContainer open={showMenu}>
        <NavbarLink onClick={() => setShowMenu(!showMenu)} to="/">
          HOME
        </NavbarLink>
        <NavbarLink onClick={() => setShowMenu(!showMenu)} to="/starships">
          STARSHIPS
        </NavbarLink>
      </NavContainer>
    </div>
  );
};

export default Navbar;
