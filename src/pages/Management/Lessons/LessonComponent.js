import React from "react";
import { getDateTime } from "../helpers";

function LessonComponent({ item: lesson }) {
  return (
    <div className='d-flex align-items-center flex-1'>
      <p className='text-size-14 flex-1'>{lesson?.title}</p>
      <p className='text-size-12 mr-3 hide-sm'>
        Added on: {getDateTime(lesson?.createdAt)}
      </p>
    </div>
  );
}

export default LessonComponent;
