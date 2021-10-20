import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getLoggedIn } from "../Redux/auth/authSelectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
