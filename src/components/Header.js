import React from "react";
import AppLogo from "./AppLogo";
import Me from "../images/me.jpg";
import Avatar from "./Avatar";
import SvgIcon from "./SvgIcon";

function Header({ onMenuIconClick }) {
  return (
    <header className='header'>
      <div className='header-logo-box'>
        <AppLogo />
      </div>
      <div className='header-menu-icon ' onClick={onMenuIconClick}>
        <SvgIcon name='menu' />
      </div>
      <div className='header-user-box'>
        <Avatar image={Me} alt='me' className='mr-3' />
        <p className='text-lead'>Jeff Segovia</p>
      </div>
    </header>
  );
}

export default Header;
