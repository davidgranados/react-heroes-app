import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { PublicRoute } from "../../routers/PublicRoute";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
