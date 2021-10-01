import React from "react";
import Logo from "../images/logo.svg";

function AppLogo({ className, onClick }) {
  const classes = `logo ${className}`;
  return (
    <img
      className={classes}
      onClick={onClick}
      src={Logo}
      alt='CG.Tracker logo'
    />
  );
}

export default AppLogo;
