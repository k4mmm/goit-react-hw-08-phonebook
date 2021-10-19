import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d5bdd8;
  height: 100vh;
`;

export const StyledH1 = styled.h1`
  color: saddlebrown;
  font-size: 50px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLable = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  border-radius: 10px;
  border: solid saddlebrown;
  padding: 5px 10px;
  &:active,
  &:hover {
    border: solid black;
  }
`;

export const StyledButton = styled.button`
  width: max-content;
  border-radius: 10px;
  border: none;
  padding: 5px;
  align-self: center;
  background-color: #fff;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fff;
    background-color: saddlebrown;
    border: solid black;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: saddlebrown;
  transition: color 250ms linear;
  align-self: center;
  cursor: pointer;

  &:active,
  &:hover {
    color: #696869;
    font-weight: 700;
    text-decoration: underline;
  }
`;
