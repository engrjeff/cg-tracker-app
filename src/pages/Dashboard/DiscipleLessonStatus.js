import React, { useState } from "react";

import Box from "../../components/Box";
import Button from "../../components/Button";
import TextLead from "../../components/TextLead";
import SvgIcon from "../../components/SvgIcon";
import Tab from "../../components/Tab";
import DataTable from "../../components/DataTable";

import { columns, data } from "../../data";

// Test Tabs
const tabs = [
  // { id: 1, page: "church status", label: "church status" },
  { id: 2, page: "soul winning", label: "soul winning" },
  { id: 3, page: "discipleship", label: "discipleship" },
  { id: 5, page: "custom lessons", label: "custom lessons" },
  { id: 6, page: "Lord our Holiness", label: "Lord our holiness" },
];

function DiscipleLessonStatus(props) {
  const [currentPage, setCurrentPage] = useState("soul winning");

  return (
    <Box rounded className='flex-1 d-flex flex-column'>
      <Box borderedBottom className='d-flex align-items-center'>
        <TextLead>Tony Stark</TextLead>
        <Button
          text='Filter'
          className='ml-auto'
          size='sm'
          Icon={() => <SvgIcon name='filter' />}
        />
      </Box>
      <Box className='flex-1'>
        <Tab
          tabItems={tabs}
          currentTab={currentPage}
          onTabClick={setCurrentPage}
        />
      </Box>
      <DataTable columns={columns} data={data} />
    </Box>
  );
}

export default DiscipleLessonStatus;
