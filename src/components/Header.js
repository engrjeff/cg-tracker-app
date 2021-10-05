import React from "react";
import { useHistory } from "react-router";

import { useMenuToggler } from "../hooks/menuToggler";
import useToggle from "../hooks/useToggle";
import { useAuth } from "../firebase/AuthContext";

import AppLogo from "./AppLogo";
import Avatar from "./Avatar";
import SvgIcon from "./SvgIcon";
import Menu from "./Menu";
import Modal from "./Modal";

const userMenuItems = [
  { label: "Profile", path: "/u/user/profile" },
  { label: "Account", path: "/u/user/account" },
  { label: "Log out" },
];

function Header() {
  const { toggle: toggleMenu } = useMenuToggler();
  const { state: showUserMenu, toggleByValue: toggleUserMenu } = useToggle();
  const { state: showLogoutModal, toggleByValue: toggleLogoutModal } =
    useToggle();
  const history = useHistory();
  const { logout, user } = useAuth();

  function handleUserMenuItemClick(item) {
    if (!item.path) return toggleLogoutModal(true);
    toggleUserMenu(false);
    history.push(item.path);
  }

  function doLogout() {
    // const callback = history.push("/auth");
    logout();
    toggleLogoutModal(false);
  }

  return (
    <>
      <Modal
        title='Log Out'
        show={showLogoutModal}
        onClose={toggleLogoutModal}
        onOk={doLogout}
      >
        <Modal.Message>Are you sure you want to logout?</Modal.Message>
      </Modal>
      <header className='header'>
        <div className='header-logo-box'>
          <AppLogo />
        </div>
        <div className='header-menu-icon ' onClick={toggleMenu}>
          <SvgIcon name='menu' />
        </div>
        <div className='header-user-box'>
          <Avatar
            onClick={() => toggleUserMenu(true)}
            text={user.displayName}
            image={user.photoURL}
            alt='me'
            className='no-margin-sm'
          />
          {/* <p className='text-lead hide-sm'>{user.displayName}</p> */}
          <Menu
            show={showUserMenu}
            onClose={() => toggleUserMenu(false)}
            menuItems={userMenuItems}
            onItemClick={handleUserMenuItemClick}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
