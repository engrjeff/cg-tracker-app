import React from "react";
import SvgIcon from "./SvgIcon";

function ListItem({
  isSelected,
  icon,
  primarytext,
  subtext,
  onClick,
  className = "",
}) {
  return (
    <div
      className={`list-item cursor-pointer ${
        isSelected ? "selected" : ""
      } ${className}`}
      onClick={onClick}
    >
      {icon && (
        <div className='list-item__icon'>
          <SvgIcon name={icon} />
        </div>
      )}
      <div className='list-item__text-box'>
        <p className='list-item__primary-text'>{primarytext}</p>
        {subtext && <p className='list-item__sub-text'>{subtext}</p>}
      </div>
    </div>
  );
}

export default ListItem;
