import { useState } from "react";

export default function useToggle() {
  const [state, setState] = useState(false);

  function toggle() {
    setState((s) => !s);
  }

  function toggleByValue(value) {
    setState(value);
  }

  function setToTrue() {
    setState(true);
  }

  function setToFalse() {
    setState(false);
  }

  return {
    state,
    toggle,
    toggleByValue,
    setToTrue,
    setToFalse,
  };
}
