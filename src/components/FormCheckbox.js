import React from "react";

function CheckBox({ name, value, label, onChange, labelVisible = true }) {
  return (
    <div className='checkbox-container'>
      <input
        className='checkbox-input'
        type='checkbox'
        id={name}
        name={name}
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={name} className='checkbox-label'>
        <span className='checkbox-btn'></span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='15'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-check'
        >
          <polyline points='20 6 9 17 4 12'></polyline>
        </svg>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
