import React, { useCallback, useState } from "react";
import Box from "../../../components/Box";
import FileInput from "../../../components/FileInput";
import FormInput from "../../../components/FormInput";
import FormCheckbox from "../../../components/FormCheckbox";
import Modal from "../../../components/Modal";
import ProgressBar from "../../../components/ProgressBar";
import useStorage from "../../../firebase/useStorage";
import { useLessonSeries } from "../../../firebase/LessonSeriesContext";

function AddLessonModal({
  currentSeries,
  show,
  onClose,
  onSave,
  type = "add",
}) {
  const [lessonName, setLessonName] = useState("");
  const [tempFile, setTempFile] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [hasFile, setHasFile] = useState(false);
  const [error, setError] = useState(null);

  const { series } = useLessonSeries();

  const handleClose = () => {
    reset();
    if (onClose) onClose();
  };

  const handleSave = (url) => {
    onSave(currentSeries?.id, {
      title: lessonName,
      type: "lesson",
      fileURL: url || "",
    });

    handleClose();
  };

  const onDoneCb = useCallback(handleSave, [handleSave]);

  const path = `series/${currentSeries?.title}`;
  const { progress } = useStorage(file, path, onDoneCb);

  function reset() {
    setFile(null);
    setTempFile(null);
    setLessonName("");
    setFileName("");
    setHasFile(false);
    setError(null);
  }

  function handleSubmit() {
    if (!tempFile) return onDoneCb();
    setFile(tempFile);
  }

  function handleChange(e) {
    const value = e.target.value;
    setLessonName(value);

    const cs = series.find((s) => s.id === currentSeries.id);

    if (!cs.lessons) return;

    const existing = cs.lessons.some(
      (l) => l.title.toLowerCase() === value.toLowerCase().trim()
    );

    if (existing) {
      setError(
        `This lesson title is already in use in ${currentSeries.title}.`
      );
    } else {
      setError(null);
    }
  }

  function handleFileChange(file) {
    setTempFile(file);
    setFileName(file.name);
  }

  return (
    <Modal
      title={`Add Lesson to ${currentSeries?.title}`}
      show={show}
      actionText='Save'
      onClose={handleClose}
      onOk={handleSubmit}
      closeOnOk={false}
      disableActionBtn={!lessonName || error}
    >
      <Modal.Content>
        <FormInput
          label='Lesson Name'
          placeholder='Enter the lesson name here'
          name='name'
          value={lessonName}
          onChange={handleChange}
          error={error}
        />
        <Box className='mb-2'>
          <FormCheckbox
            name='hasFile'
            label='I have a file.'
            value={hasFile}
            onChange={(e) => setHasFile(e.currentTarget.checked)}
          />
        </Box>
        {hasFile && (
          <Box>
            <Box className='d-flex with-gap align-items-center'>
              <FileInput onChange={handleFileChange} accept='document' />
              <Box className='ml-auto'>
                <p className='text-size-14'>{fileName}</p>
                {file && (
                  <ProgressBar
                    progress={progress}
                    className='w-100'
                    onDone={() => reset()}
                  />
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Modal.Content>
    </Modal>
  );
}

export default AddLessonModal;
