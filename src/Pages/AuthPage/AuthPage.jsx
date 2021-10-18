import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../Redux/auth/authOperations";
import {
  StyledDiv,
  StyledH1,
  StyledForm,
  StyledLable,
  StyledButton,
  StyledInput,
  StyledLink,
} from "./AuthPage.styled";
export default function AuthPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <StyledDiv>
      <StyledH1>Authorization</StyledH1>
      <StyledForm autoComplete="off" onSubmit={submit}>
        <StyledLable>
          Email
          <StyledInput
            placeholder="Enter password"
            name="email"
            value={email}
            onChange={hendleChange}
          />
        </StyledLable>
        <StyledLable>
          Password
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={hendleChange}
            placeholder="Enter password"
          />
        </StyledLable>
        <StyledButton type="submit">Login</StyledButton>
        <StyledLink to="/register">Click for Register</StyledLink>
      </StyledForm>
    </StyledDiv>
  );
}
