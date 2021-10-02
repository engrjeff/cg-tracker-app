import React from "react";
import SvgIcon from "./SvgIcon";

function IconButton({ iconName, color = "primary", onClick, className }) {
  return (
    <div
      className={`icon-btn icon-btn-${color} ${className}`}
      onClick={onClick}
    >
      <SvgIcon name={iconName} />
    </div>
  );
}

export default IconButton;
