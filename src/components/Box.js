import React from "react";

function Box({ className = "", rounded = false, children }) {
  return (
    <div className={`${rounded ? "box-rounded" : null} ${className}`}>
      {children}
    </div>
  );
}

export default Box;
