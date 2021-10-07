import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import LessonsView from "./Lessons";
import Members from "./Members";
import Snackbar from "../../components/Snackbar";
import { useLessonSeries } from "../../firebase/LessonSeriesContext";

function Management(props) {
  const { path } = useRouteMatch();
  const { snackbar } = useLessonSeries();

  return (
    <div className='content p-3 d-flex'>
      <Switch>
        <Route path={`${path}/lesson`}>
          <LessonsView />
        </Route>
        <Route path={`${path}/members`}>
          <Members />
        </Route>
      </Switch>

      <Snackbar show={snackbar.show} message={snackbar.message} />
    </div>
  );
}

export default Management;
