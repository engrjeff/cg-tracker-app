import React from "react";
import ClickOutside from "../hooks/useClickOutside";

function Menu({ menuItems, show, onClose, onItemClick }) {
  return (
    <ClickOutside callback={onClose}>
      {show ? (
        <div className='menu-popup' onClick={onClose}>
          {menuItems &&
            menuItems.map((item) => (
              <div
                className='menu-popup__item'
                key={item.label}
                onClick={() => onItemClick(item)}
              >
                <p>{item.label}</p>
              </div>
            ))}
        </div>
      ) : null}
    </ClickOutside>
  );
}

export default Menu;
