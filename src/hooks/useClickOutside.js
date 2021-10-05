import React, { useEffect, useRef } from "react";

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

function ClickOutside({ callback, children }) {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, callback);
  return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutside;
