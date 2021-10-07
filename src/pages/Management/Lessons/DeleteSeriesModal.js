import React from "react";
import Modal from "../../../components/Modal";

function DeleteSeriesModal({ onClose, onDelete, title }) {
  function handleClose() {
    onClose();
  }

  function handleSubmit() {
    onDelete();
  }

  return (
    <Modal
      title='Delete Series'
      show={true}
      actionText='Delete'
      onClose={handleClose}
      onOk={handleSubmit}
      closeOnOk={false}
      type='danger'
    >
      <Modal.Message>
        Are you sure you want to delete <strong>{title}</strong>?
      </Modal.Message>
    </Modal>
  );
}

export default DeleteSeriesModal;
