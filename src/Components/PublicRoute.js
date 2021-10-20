import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getLoggedIn } from "../Redux/auth/authSelectors";

export default function PublicRoute({ children, ...publicProps }) {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <Route {...publicProps}>
      {isLoggedIn ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
