import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Profile from "./Profile";
import Account from "./Account";

function User(props) {
  const { path } = useRouteMatch();

  return (
    <div className='content p-3 d-flex'>
      <h1>User page (profile & account)</h1>
      <Switch>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
        <Route path={`${path}/account`}>
          <Account />
        </Route>
      </Switch>
    </div>
  );
}

export default User;
