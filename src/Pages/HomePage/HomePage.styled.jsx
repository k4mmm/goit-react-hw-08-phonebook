import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  font-size: 50px;
  text-decoration: none;
  color: #1976d2;
  transition: color 300ms linear;
  font-weight: 200;
  &:first-of-type {
    margin-right: 100px;
  }
  &:active,
  &:hover {
    color: #0057bb;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100vh;
`;
