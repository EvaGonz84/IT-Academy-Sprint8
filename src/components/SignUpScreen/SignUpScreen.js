import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GlobalStyle } from "../ShipDetails/ShipDetails.styles";
import {
  ContainerSignUp,
  InputEmail,
  Title,
  Button,
} from "./SignUpScreen.styles";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const localEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (!userEmail.trim()) {
      alert("Error!!No deje espacios en blanco");
    } else if (!userEmail.includes("@")) {
      alert("error,debe contener @");
    } else if (userEmail === localEmail) {
      alert("logeate");
      navigate("/login");
    } else {
      localStorage.setItem("userEmail", userEmail);
      navigate("/");
    }
  };

  const handleClick = () => {
    if (userEmail === localEmail) {
      alert("Estás registrado");
      navigate("/login");
    } else {
      localStorage.setItem("userEmail", userEmail);
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
        <Title>CREATE YOUR ACCOUNT</Title>
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
            <Button onClick={handleClick}>Continue</Button>
          </div>
        </form>
      </ContainerSignUp>
    </>
  );
};

export default SignUp;
