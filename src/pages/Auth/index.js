import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

import * as ROUTES from "../../constants/routes";

function Auth(props) {
  return (
    <div>
      <Switch>
        <Route path={ROUTES.SIGN_IN} exact>
          <Login />
        </Route>
        <Route path={ROUTES.REGISTER} exact>
          <Register />
        </Route>
        <Redirect from={ROUTES.AUTH} to={ROUTES.SIGN_IN} />
      </Switch>
    </div>
  );
}

export default Auth;
