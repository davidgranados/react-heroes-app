import React from "react";
import { Navbar } from "../ui/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import MarvelScreen from "../marvel/MarvelScreen";
import DcScreen from "../dc/DcScreen";
import HeroScreen from "../heroes/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className={"container mt-2"}>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/:id" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
