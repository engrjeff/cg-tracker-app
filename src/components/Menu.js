import React from "react";
import ClickOutside from "../hooks/useClickOutside";

function Menu({ menuItems, show, onClose, onItemClick }) {
  function handleItemClick(item) {
    onItemClick(item);
    onClose();
  }
  return (
    <ClickOutside callback={onClose}>
      {show ? (
        <div className='menu-popup' onClick={onClose}>
          {menuItems &&
            menuItems.map((item) => (
              <div
                className='menu-popup__item'
                key={item.label || item}
                onClick={() => handleItemClick(item)}
              >
                <p>{item.label || item}</p>
              </div>
            ))}
        </div>
      ) : null}
    </ClickOutside>
  );
}

export default Menu;
