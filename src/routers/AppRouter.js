import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { AuthScreen } from "../components/auth/AuthScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.auth.logged === false || state.auth.logged === undefined) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [state.auth.logged, setIsLoggedIn]);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/auth"
            component={AuthScreen}
            isLoggedIn={isLoggedIn} //{user.isLoggedIn}
          />
          <PrivateRoute
            exact
            path="/"
            component={ProfileScreen}
            isLoggedIn={isLoggedIn} //{user.isLoggedIn}
          />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  );
};
