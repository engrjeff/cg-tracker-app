import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Profile from "./Profile";
import Account from "./Account";
import Snackbar from "../../components/Snackbar";
import { useAuth } from "../../firebase/AuthContext";

function User(props) {
  const { path } = useRouteMatch();
  const { snackbar } = useAuth();

  return (
    <div className='content p-3 d-flex'>
      <Switch>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
        <Route path={`${path}/account`}>
          <Account />
        </Route>
      </Switch>

      <Snackbar show={snackbar.show} message={snackbar.message} />
    </div>
  );
}

export default User;
