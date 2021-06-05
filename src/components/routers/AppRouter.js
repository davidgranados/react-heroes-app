import React, {useContext} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import {PrivateRoute} from "../../routers/PrivateRoute";
import {AuthContext} from "../../auth/AuthContext";

const AppRouter = () => {
  const {authState: {logged}} = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
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
