import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../ShipDetails/ShipDetails.styles";
import {
  Button,
  ContainerSignUp,
  InputEmail,
  Title,
} from "../SignUpScreen/SignUpScreen.styles";

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState("");
  const localEmail = localStorage.getItem("userEmail");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (!userEmail.trim()) {
      alert("Error!!");
    } else if (!userEmail.includes("@")) {
      alert("error,debe contener @");
    } else if (userEmail === localEmail) {
      alert("bienvenido");
      navigate("/");
    } else {
      alert("crea una cuenta");
      navigate("/signup");
    }
  };

  return (
    <>
      <GlobalStyle />
      <ContainerSignUp>
        <img
          src={require("../Images/logo2.jpg")}
          alt="logo star-wars"
          width={"150px"}
        ></img>
        <Title>ENTER YOUR EMAIL ADDRESS</Title>
        <form style={{ width: "500px" }} onSubmit={handleLogin}>
          <div>
            <InputEmail
              type="text"
              value={userEmail}
              placeholder="Email Address"
              onChange={(e) => setUserEmail(e.target.value)}
            ></InputEmail>
          </div>
          <div>
            <Button>Continue</Button>
          </div>
        </form>
      </ContainerSignUp>
    </>
  );
};

export default LoginScreen;
