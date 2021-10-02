import React from "react";

function Avatar({ image, alt, text, className = "" }) {
  const classes = `avatar avatar-${image ? "img" : "text"} ${className}`;

  if (image) {
    return <img src={image} alt={alt} className={classes} />;
  }

  return <div className={classes}>{text.substring(0, 2)}</div>;
}

export default Avatar;
