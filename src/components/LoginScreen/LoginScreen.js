import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../ShipDetails/ShipDetails.styles";
import {
  Button,
  ContainerSignUp,
  InputEmail,
  Span,
  Title,
} from "../SignUpScreen/SignUpScreen.styles";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const localEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onSubmit = (event) => {
    if (JSON.stringify(event) === localEmail) {
      console.log(`Bienvenido usuario con email:${JSON.stringify(event)}`);
      setUser(true);
      navigate("/");
    } else {
      console.log("Aún no estás registrado,crea una cuenta");
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
        <form style={{ width: "500px" }} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <InputEmail
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Email Address"
              {...register("email", {
                required: {
                  value: true,
                  message: "Se requiere un email",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato email no es correcto",
                },
              })}
            ></InputEmail>
            {errors.email && <Span>{errors.email.message}</Span>}
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
