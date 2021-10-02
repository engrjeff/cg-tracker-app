import React from "react";

function Box({ className, borderedBottom = false, rounded = false, children }) {
  return (
    <div
      className={`box ${rounded ? "box-rounded" : ""} ${
        borderedBottom ? "box-bordered-bottom" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
