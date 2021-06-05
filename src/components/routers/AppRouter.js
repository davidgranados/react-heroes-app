import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import LoginScreen from "../login/LoginScreen";
import MarvelScreen from "../marvel/MarvelScreen";
import DcScreen from "../dc/DcScreen";

const AppRouter = (props) => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route path="/marvel" component={MarvelScreen} />
          <Route path="/dc" component={DcScreen} />
          <Route path="/" component={MarvelScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
