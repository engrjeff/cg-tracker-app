import React from "react";
import Icons from "../images/icons.svg";

function SvgIcon({ className, name }) {
  return (
    <svg className={`list-item__icon-svg ${className}`}>
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
}

export default SvgIcon;
