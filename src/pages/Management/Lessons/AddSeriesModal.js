import React, { useState } from "react";
import { useLessonSeries } from "../../../firebase/LessonSeriesContext";

import FormInput from "../../../components/FormInput";
import Modal from "../../../components/Modal";

function AddSeriesModal({ show, onClose, onSave }) {
  const [seriesName, setSeriesName] = useState("");
  const [error, setError] = useState(null);
  const { series } = useLessonSeries();

  function handleChange(e) {
    const value = e.target.value;
    setSeriesName(value);

    const existing = series.some(
      (s) => s.title.toLowerCase() === value.toLowerCase()
    );

    if (existing) {
      setError("This series title is already in use.");
    } else {
      setError(null);
    }
  }

  function handleSubmit() {
    onSave({ title: seriesName, type: "series" });

    if (!error) {
      setSeriesName("");
      onClose();
    }
  }

  return (
    <Modal
      title='Add Series'
      show={show}
      actionText='Save'
      onClose={onClose}
      onOk={handleSubmit}
      closeOnOk={false}
      disableActionBtn={!seriesName || error}
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

export default AddSeriesModal;
