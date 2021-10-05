import React from "react";

function Snackbar({ show, message }) {
  return (
    <>
      {show ? (
        <div className='snackbar'>
          <p className='snackbar__message'>{message}</p>
          <span className='snackbar__close'>&times;</span>
        </div>
      ) : null}
    </>
  );
}

export default Snackbar;
