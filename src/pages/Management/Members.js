import React from "react";

import DiscipleLessonStatus from "../Management/DiscipleLessonStatus";
import DiscipleList from "../Management/DiscipleList";

function Members(props) {
  return (
    <div className='d-flex with-gap flex-1'>
      <DiscipleList />
      <DiscipleLessonStatus />
    </div>
  );
}

export default Members;
