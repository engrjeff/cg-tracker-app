import React from "react";

function Button({
  color = "primary",
  variant = "contained",
  text,
  onClick,
  className = "",
  ...rest
}) {
  const classes = `btn btn-${color} btn-${variant} ${className}`;
  return (
    <button className={classes} onClick={onClick} {...rest}>
      {text}
    </button>
  );
}

export default Button;
