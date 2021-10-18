import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Redux/auth/authOperations";
import { getUserEmail } from "../../Redux/auth/authSelectors";
import defaultAvatar from "./default-avatar.png";
const Menu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  return (
    <header>
      <div>
        <Link to="/contacts">Contacts</Link>
        <img src={defaultAvatar} alt="avatar" width="40" height="40" />
        <p>Hello, {userEmail}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          LogOut
        </button>
      </div>
    </header>
  );
};
export default Menu;
