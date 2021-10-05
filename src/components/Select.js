import React from "react";

function Select() {
  return (
    <div className='ml-auto d-flex align-items-center'>
      <p className='text-size-14 fw-600 mr-2'>Select Series: </p>
      <select className='form-control__select'>
        <option>Soul Winning</option>
      </select>
    </div>
  );
}

export default Select;
