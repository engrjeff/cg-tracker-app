import React from "react";

function Overlay({ onClick, shown, className, ...rest }) {
  if (!shown) return null;
  return (
    <div className={`overlay ${className}`} onClick={onClick} {...rest}></div>
  );
}

export default Overlay;
