import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import LessonsTable from "./LessonsTable";
import Members from "./Members";

function Management(props) {
  const { path } = useRouteMatch();
  return (
    <div className='content p-3 d-flex'>
      <Switch>
        <Route path={`${path}/lesson`}>
          <LessonsTable />
        </Route>
        <Route path={`${path}/members`}>
          <Members />
        </Route>
      </Switch>
    </div>
  );
}

export default Management;
