import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MenuTogglerProvider from "../../hooks/menuToggler";
import Dashboard from "../Dashboard";
import User from "../User";
import Management from "../Management";
import NotFound from "../NotFound";

import * as ROUTES from "../../constants/routes";

function Home(props) {
  return (
    <Fragment>
      <MenuTogglerProvider>
        <Header />
        <Sidebar />
      </MenuTogglerProvider>

      <Switch>
        <Route path={ROUTES.DASHBOARD} exact>
          <Dashboard />
        </Route>
        <Route path={ROUTES.USER} exact>
          <User />
        </Route>
        <Route path={ROUTES.MANAGEMENT} exact>
          <Management />
        </Route>
        <Redirect from={ROUTES.HOME} to={ROUTES.DASHBOARD} />
      </Switch>
    </Fragment>
  );
}

export default Home;
