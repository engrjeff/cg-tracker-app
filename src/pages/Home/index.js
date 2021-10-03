import React, { Fragment } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MenuTogglerProvider from "../../hooks/menuToggler";
import Dashboard from "../Dashboard";
import User from "../User";
import Management from "../Management";
import Admin from "../Admin";

function Home(props) {
  const { path } = useRouteMatch();

  return (
    <Fragment>
      <MenuTogglerProvider>
        <Header />
        <Sidebar />
      </MenuTogglerProvider>

      <Switch>
        <Route path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
        <Route path={`${path}/user`}>
          <User />
        </Route>
        <Route path={`${path}/manage`}>
          <Management />
        </Route>
        <Route path={`${path}/admin`}>
          <Admin />
        </Route>
        <Redirect from={path} to={`${path}/dashboard`} />
      </Switch>
    </Fragment>
  );
}

export default Home;
