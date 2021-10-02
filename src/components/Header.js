import React from "react";
import AppLogo from "./AppLogo";
import Me from "../images/me.jpg";
import Avatar from "./Avatar";
import SvgIcon from "./SvgIcon";
import { useMenuToggler } from "../hooks/menuToggler";

function Header() {
  const { toggle: toggleMenu } = useMenuToggler();

  return (
    <header className='header'>
      <div className='header-logo-box'>
        <AppLogo />
      </div>
      <div className='header-menu-icon ' onClick={toggleMenu}>
        <SvgIcon name='menu' />
      </div>
      <div className='header-user-box'>
        <Avatar image={Me} alt='me' className='mr-3 no-margin-sm' />
        <p className='text-lead hide-sm'>Jeff Segovia</p>
      </div>
    </header>
  );
}

export default Header;
