import React, { useContext, createContext } from "react";
import useToggle from "./useToggle";

const MenuTogglerContext = createContext();

export function useMenuToggler() {
  const { state, toggleByValue, toggle } = useContext(MenuTogglerContext);
  return { state, toggleByValue, toggle };
}

export default function MenuTogglerProvider({ children }) {
  const { state, toggleByValue, toggle } = useToggle();

  const value = { state, toggleByValue, toggle };

  return (
    <MenuTogglerContext.Provider value={value}>
      {children}
    </MenuTogglerContext.Provider>
  );
}
