import React, { useState } from "react";
import { Fragment } from "react";
import { useMenuToggler } from "../hooks/menuToggler";

import AppLogo from "./AppLogo";
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
      { route: "/profile", label: "profile", icon: "user" },
      { route: "/account", label: "account", icon: "account" },
    ],
  },
  {
    label: "Management",
    items: [
      { route: "/lessons", label: "lessons", icon: "lesson" },
      { route: "/groups", label: "groups", icon: "groups" },
    ],
  },
];

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
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
            <div key={menu.label}>
              <div className='sidebar-menu-label'>
                <p>{menu.label}</p>
              </div>
              {menu.items.map((item) => (
                <ListItem
                  key={item.label}
                  primarytext={item.label}
                  isSelected={item.label === selectedMenu}
                  icon={item.icon}
                  onClick={() => setSelectedMenu(item.label)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
