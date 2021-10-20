import { Switch } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Menu from "./Components/Menu/Menu";
import { useSelector, useDispatch } from "react-redux";
import { StyledCircularProgress, Container } from "./App.styled";
import { getLoggedIn, getRefreshing } from "./Redux/auth/authSelectors";
import { currentUser } from "./Redux/auth/authOperations";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const RegPage = lazy(() => import("./Pages/RegPage/RegPage"));
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"));
const ContactsPage = lazy(() => import("./Pages/ContactsPage/ContactsPage"));

export default function App() {
  const isLoggedIn = useSelector(getLoggedIn);
  const isRefresh = useSelector(getRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    !isRefresh && (
      <Container>
        {isLoggedIn && <Menu />}
        <Switch>
          <Suspense
            fallback={<StyledCircularProgress disableShrink size={50} />}
          >
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register">
              <RegPage />
            </PublicRoute>
            <PublicRoute path="/login">
              <AuthPage />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
