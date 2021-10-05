import React from "react";

import Button from "./Button";
import IconButton from "./IconButton";

function ModalMessage({ children }) {
  return <p className='text-size-14 mb-3'>{children}</p>;
}

function ModalContent({ children }) {
  const style = { maxHeight: "400px", overflow: "auto" };
  return (
    <p className='p-3' style={style}>
      {children}
    </p>
  );
}

function Modal({
  children,
  title,
  show,
  onClose,
  withCancel = true,
  cancelText = "Cancel",
  onCancel,
  actionText = "Ok",
  onOk,
  closeOnOk = true,
  disableActionBtn = false,
  type = "primary",
}) {
  if (!show) return null;

  function handleCancel() {
    if (onCancel) onCancel();
    onClose();
  }

  function handleOk() {
    if (onOk) onOk();
    if (closeOnOk) onClose();
  }

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <div className='modal-header'>
          <p className='text-size-16 fw-bold'>{title}</p>
          <IconButton
            className='ml-auto'
            iconName='times'
            onClick={handleCancel}
          />
        </div>
        {children}
        <div className='modal-footer'>
          <div className='modal-footer__buttons'>
            <Button
              color={type}
              size='sm'
              onClick={handleOk}
              disabled={disableActionBtn}
              text={actionText}
            />
            {withCancel && (
              <Button
                color='secondary'
                size='sm'
                onClick={handleCancel}
                text={cancelText}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.Message = ModalMessage;
Modal.Content = ModalContent;

export default Modal;
