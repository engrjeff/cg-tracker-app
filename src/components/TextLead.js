import React from "react";

function TextLead({ children, className }) {
  return <p className={`text-lead ${className}`}>{children}</p>;
}

export default TextLead;
