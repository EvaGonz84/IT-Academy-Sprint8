import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../ShipDetails/ShipDetails.styles";
import {
  ContainerSignUp,
  InputEmail,
  Title,
  Button,
  Span,
} from "./SignUpScreen.styles";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
const SignUp = () => {
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
      Swal.fire({
        title: "Oops",
        text: "You are already registered, please enter your email on the login page",
        icon: "warning",
        color: '#f1f1f1',
        background: '#434242',
        confirmButtonColor: '#2D31FA',
      });
      navigate("/login");
    } else {
      localStorage.setItem("userEmail", JSON.stringify(event));
      Swal.fire({
        title: "Welcome user",
        text: `${JSON.stringify(event)}`,
        icon: "success",
        color: '#f1f1f1',
        background: '#434242',
        confirmButtonColor: '#2D31FA',
      });
      navigate("/");
      setUser(true);
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
                  message: "An email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "The email is not correct, please check it",
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

export default SignUp;
