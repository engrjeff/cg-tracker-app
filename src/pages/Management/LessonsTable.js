import React from "react";

import Box from "../../components/Box";
import Button from "../../components/Button";
import DataTable from "../../components/DataTable";
import TextLead from "../../components/TextLead";

import { columnLessons, data } from "../../data";

function LessonsTable(props) {
  return (
    <Box rounded className='flex-1 d-flex flex-column'>
      <Box borderedBottom className='d-flex align-items-center'>
        <TextLead>Cell group Lessons</TextLead>
        <Button
          text='+ Add Series'
          size='sm'
          color='success'
          className='ml-3'
        />

        <Box className='ml-auto d-flex align-items-center'>
          <p className='text-size-14 fw-600 mr-2'>Select Series: </p>
          <select className='form-control__select'>
            <option>Soul Winning</option>
          </select>
        </Box>
      </Box>
      <Box className='p-2 d-flex align-items-center'>
        <TextLead className='text-primary ml-5'>Soul Winning</TextLead>
        <Button
          text='+ Add Lesson'
          size='sm'
          color='success'
          className='ml-auto mr-4'
        />
      </Box>
      <DataTable columns={columnLessons} data={data} />
    </Box>
  );
}

export default LessonsTable;
