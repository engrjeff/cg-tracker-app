import "./styles/main.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";

import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";

import * as ROUTES from "./constants/routes";

function App(props) {
  return (
    <div className='bg-light-100 w-vw h-vh'>
      <Loading />
      <Router>
        <Switch>
          <Route path={ROUTES.AUTH}>
            <Auth />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route path={ROUTES.NOT_FOUND}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
