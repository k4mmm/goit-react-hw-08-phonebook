import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  font-size: 50px;
  text-decoration: none;
  color: saddlebrown;
  transition: color 250ms linear;
  &:first-of-type {
    margin-right: 50px;
  }
  &:active,
  &:hover {
    color: #696869;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d5bdd8;
  height: 100vh;
`;
