import "./styles/main.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth } from "./firebase/AuthContext";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";
import { useLessonSeries } from "./firebase/LessonSeriesContext";

function App() {
  const { isLoading } = useAuth();
  const { isLoading: seriesLoading } = useLessonSeries();

  return (
    <div className='bg-light-100 w-vw h-vh'>
      <Loading show={isLoading || seriesLoading} />
      <Router>
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <ProtectedRoute path='/u' component={Home} />
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
