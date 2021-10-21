import { StyledLink, StyledDiv } from "./HomePage.styled";

const HomePage = () => {
  return (
    <StyledDiv>
      <StyledLink to="/login">Authorization</StyledLink>
      <StyledLink to="/register">Registration</StyledLink>
    </StyledDiv>
  );
};

export default HomePage;
