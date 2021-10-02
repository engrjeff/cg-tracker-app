import React from "react";

import DiscipleLessonStatus from "./DiscipleLessonStatus";
import DiscipleList from "./DiscipleList";

function Dashboard(props) {
  return (
    <div className='content p-3 d-flex with-gap'>
      <DiscipleList />
      <DiscipleLessonStatus />
    </div>
  );
}

export default Dashboard;
