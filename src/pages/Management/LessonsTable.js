import React, { useState } from "react";

import Box from "../../components/Box";
import Button from "../../components/Button";
import DataTable from "../../components/DataTable";
import Folder from "../../components/Folder";
import TextLead from "../../components/TextLead";

import { columnLessons, data, series } from "../../data";

function LessonsTable(props) {
  const [currentSeries, setCurrentSeries] = useState(null);

  return (
    <Box rounded className='flex-1 d-flex flex-column'>
      <Box borderedBottom className='d-flex align-items-center'>
        <TextLead>{currentSeries?.title || "Select a series"}</TextLead>
        <Box className='ml-auto d-flex align-items-center'>
          {currentSeries && (
            <Button
              text='+ Add Lesson'
              size='sm'
              color='info'
              className='mr-2'
            />
          )}
          <Button text='+ Add Series' size='sm' color='info' />
        </Box>
      </Box>
      {/* <DataTable columns={columnLessons} data={data} /> */}
      <Folder
        data={series}
        nodeKey='series'
        childKey='lessons'
        onNodeClick={setCurrentSeries}
      />
    </Box>
  );
}

export default LessonsTable;
