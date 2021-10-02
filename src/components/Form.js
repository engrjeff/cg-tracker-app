import React from "react";

function Form({ className = "", children, onSubmit }) {
  const classes = `form ${className}`;

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit();
  }
  return (
    <form className={classes} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;
