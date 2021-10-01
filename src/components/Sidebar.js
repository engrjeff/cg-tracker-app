import React, { useState } from "react";
import AppLogo from "./AppLogo";
import ListItem from "./ListItem";

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

function Sidebar({ open }) {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <div className={`bg-white sidebar sidebar-${open ? "open" : "close"}`}>
      <div className='sidebar-logo-box'>
        <AppLogo />
      </div>
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
  );
}

export default Sidebar;
