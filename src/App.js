import "./styles/main.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";

import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";

function App(props) {
  return (
    <div className='bg-light-100 w-vw h-vh'>
      <Loading />
      <Router>
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/u'>
            <Home />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
