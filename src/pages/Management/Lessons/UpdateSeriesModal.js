import React, { useState } from "react";
import FormInput from "../../../components/FormInput";
import Modal from "../../../components/Modal";
import { useLessonSeries } from "../../../firebase/LessonSeriesContext";

function UpdateSeriesModal({ onClose, onUpdate, currentSeries }) {
  const [seriesName, setSeriesName] = useState(currentSeries?.title);

  const [error, setError] = useState(null);
  const { series } = useLessonSeries();

  function handleClose() {
    setSeriesName("");
    onClose();
  }

  function handleChange(e) {
    const value = e.target.value;
    setSeriesName(value);

    const existing = series.some(
      (s) =>
        s.title.toLowerCase() === value.toLowerCase() &&
        s.title.toLowerCase() !== currentSeries.title.toLowerCase()
    );

    if (existing) {
      setError("This series title is already in use.");
    } else {
      setError(null);
    }
  }

  function handleSubmit() {
    onUpdate(seriesName);

    if (!error) {
      setSeriesName("");
      onClose();
    }
  }

  return (
    <Modal
      title='Update Series'
      show={true}
      actionText='Update'
      onClose={handleClose}
      onOk={handleSubmit}
      closeOnOk={false}
      disableActionBtn={!seriesName || error}
      type='info'
    >
      <Modal.Content>
        <FormInput
          label='Series Name'
          placeholder='Enter the series name here'
          name='name'
          value={seriesName}
          onChange={handleChange}
          error={error}
        />
      </Modal.Content>
    </Modal>
  );
}

export default UpdateSeriesModal;
