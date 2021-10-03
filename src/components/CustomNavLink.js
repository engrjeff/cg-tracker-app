import React from "react";
import { NavLink } from "react-router-dom";

import SvgIcon from "./SvgIcon";

function CustomNavLink({
  icon,
  text,
  to,
  className = "",
  activeClassName,
  ...rest
}) {
  return (
    <NavLink
      {...rest}
      to={to}
      activeClassName={activeClassName}
      className={`list-item cursor-pointer ${className}`}
    >
      {icon && (
        <div className='list-item__icon'>
          <SvgIcon name={icon} />
        </div>
      )}

      <div className='list-item__text-box'>
        <p className='list-item__primary-text'>{text}</p>
      </div>
    </NavLink>
  );
}

export default CustomNavLink;
