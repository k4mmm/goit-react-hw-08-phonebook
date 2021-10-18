import { StyledLink, StyledDiv } from "./HomePage.styled";
import React from "react";
const HomePage = () => {
  return (
    <StyledDiv>
      <StyledLink to="/login">Authorization</StyledLink>
      <StyledLink to="/register">Registration</StyledLink>
    </StyledDiv>
  );
};

export default HomePage;
