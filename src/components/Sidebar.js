import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useMenuToggler } from "../hooks/menuToggler";

import ListItem from "./ListItem";
import Overlay from "./Overlay";

const MenuItems = [
  {
    label: "Home",
    items: [{ route: "/dashboard", label: "dashboard", icon: "dashboard" }],
  },
  {
    label: "Personal",
    items: [
      { route: "/user/profile", label: "profile", icon: "user" },
      { route: "/user/account", label: "account", icon: "account" },
    ],
  },
  {
    label: "Management",
    items: [
      { route: "/manage/lesson", label: "lessons", icon: "lesson" },
      { route: "/manage/groups", label: "groups", icon: "groups" },
    ],
  },
];

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const { state: open, toggleByValue: toggleMenu } = useMenuToggler();

  function handleMenuClick(menuItem) {
    setSelectedMenu(menuItem.label);
  }

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
            <div key={menu.label}>
              <div className='sidebar-menu-label'>
                <p>{menu.label}</p>
              </div>
              {menu.items.map((item) => (
                <Link key={item.label} to={item.route}>
                  {item.label}
                </Link>
                // <ListItem
                //   key={item.label}
                //   primarytext={item.label}
                //   isSelected={item.label === selectedMenu}
                //   icon={item.icon}
                //   onClick={() => handleMenuClick(item)}
                // />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
