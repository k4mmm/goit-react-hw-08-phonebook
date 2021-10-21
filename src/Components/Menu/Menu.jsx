import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/auth/authOperations";
import { getUserEmail } from "../../Redux/auth/authSelectors";
import defaultAvatar from "./default-avatar.png";
import { StyledDiv, StyledBotton, StyledP } from "./Menu.styled";

const Menu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <header>
      <StyledDiv>
        <img src={defaultAvatar} alt="avatar" width="40" height="40" />
        <StyledP>Hello, {userEmail}</StyledP>
        <StyledBotton
          variant="contained"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          LogOut
        </StyledBotton>
      </StyledDiv>
    </header>
  );
};

export default Menu;
