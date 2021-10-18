import { Switch, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Menu from "./Components/Menu/Menu";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import HomePage from "./Pages/HomePage/HomePage";
import RegPage from "./Pages/RegPage/RegPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { useSelector, useDispatch } from "react-redux";
import { getLoggedIn } from "./Redux/auth/authSelectors";
import { currentUser } from "./Redux/auth/authOperations";

// const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
// const RegPage = lazy(() => import("./Pages/RegPage/RegPage"));
// const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"));
// const ContactsPage = lazy(() => import("./Pages/ContactsPage/ContactsPage"));

export default function App() {
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn && <Menu />}
      {/* <Menu /> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          <RegPage />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
      </Switch>
    </div>
  );
}
