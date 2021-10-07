import React, { useState } from "react";

import Box from "../../../components/Box";
import Button from "../../../components/Button";
import Folder from "../../../components/Folder";
import TextLead from "../../../components/TextLead";
import AddLessonModal from "./AddLessonModal";
import AddSeriesModal from "./AddSeriesModal";

import { useLessonSeries } from "../../../firebase/LessonSeriesContext";
import SeriesComponent from "./SeriesComponent";
import LessonComponent from "./LessonComponent";

function LessonsView(props) {
  const [currentSeries, setCurrentSeries] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCreateLessonModal, setShowCreateLessonModal] = useState(false);

  const { series, addSeries, addLesson } = useLessonSeries();

  function doAddSeries(seriesData) {
    addSeries(seriesData);
  }

  return (
    <>
      <AddSeriesModal
        currentSeries={currentSeries?.title}
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={doAddSeries}
      />
      <AddLessonModal
        currentSeries={currentSeries}
        show={showCreateLessonModal}
        onClose={() => setShowCreateLessonModal(false)}
        onSave={addLesson}
      />
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
                onClick={() => setShowCreateLessonModal(true)}
              />
            )}
            <Button
              text='+ Add Series'
              size='sm'
              color='info'
              onClick={() => setShowCreateModal(true)}
            />
          </Box>
        </Box>
        <Folder
          data={series}
          nodeKey='series'
          childKey='lessons'
          onNodeClick={setCurrentSeries}
          HeadFolderComponent={SeriesComponent}
          ChildComponent={LessonComponent}
        />
      </Box>
    </>
  );
}

export default LessonsView;
