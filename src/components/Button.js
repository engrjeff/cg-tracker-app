import React from "react";

function Button({
  size = "reg",
  color = "primary",
  variant = "contained",
  text,
  onClick,
  className = "",
  Icon,
  ...rest
}) {
  const classes = `btn btn-${size} btn-${color} btn-${variant} ${className}`;
  return (
    <button className={classes} onClick={onClick} {...rest}>
      {Icon && <Icon />} {text}
    </button>
  );
}

export default Button;
