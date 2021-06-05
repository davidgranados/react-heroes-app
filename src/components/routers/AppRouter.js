import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { AuthContext } from "../../auth/AuthContext";
import { PublicRoute } from "../../routers/PublicRoute";

const AppRouter = () => {
  const {
    authState: { logged },
  } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={logged}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={logged}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
