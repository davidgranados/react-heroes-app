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
      <section className={"container mt-2"}>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/heroes/:id" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </section>
    </>
  );
};

export default DashboardRoutes;
