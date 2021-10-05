import React, { Fragment } from "react";
import { useMenuToggler } from "../hooks/menuToggler";

import CustomNavLink from "./CustomNavLink";
import Overlay from "./Overlay";

import { MenuItems } from "../constants/appConstants";

function SidebarMenu({ menu }) {
  return (
    <div key={menu.label}>
      <div className='sidebar-menu-label'>
        <p>{menu.label}</p>
      </div>
      {menu.items.map((item) => (
        <CustomNavLink
          key={item.route}
          to={item.route}
          text={item.label}
          icon={item.icon}
          activeClassName='sidebar-selected'
        />
      ))}
    </div>
  );
}

function Sidebar() {
  const { state: open, toggleByValue: toggleMenu } = useMenuToggler();

  return (
    <Fragment>
      <Overlay
        shown={open}
        className='overlay-menu'
        onClick={() => toggleMenu(false)}
      />
      <div
        className={`bg-white sidebar ${
          open ? "sidebar-open" : "sidebar-close"
        }`}
      >
        <div className='sidebar-menu'>
          {MenuItems.map((menu) => (
            <SidebarMenu key={menu.label} menu={menu} />
          ))}
        </div>
        <p className='mt-auto pb-2 text-center text-dark-100 text-size-11 fw-600'>
          Soli Deo Gloria! ❤️
        </p>
      </div>
    </Fragment>
  );
}

export default Sidebar;
