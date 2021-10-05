import React from "react";

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  onChange,
  value,
  error,
  ...rest
}) {
  return (
    <div className='form-control'>
      {label && (
        <label className='form-control__label' htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className='form-control__input'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && <p className='text-size-12 text-danger p-2'>{error}</p>}
    </div>
  );
}

export default FormInput;
