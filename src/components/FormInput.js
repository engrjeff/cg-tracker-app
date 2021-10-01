import React from "react";

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className='form-control'>
      <label className='form-control__label' htmlFor={name}>
        {label}
      </label>
      <input
        className='form-control__input'
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
