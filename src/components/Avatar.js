import React from "react";

function Avatar({ image, alt, text, className = "", onClick }) {
  const classes = `avatar avatar-${image ? "img" : "text"} ${className}`;

  if (image) {
    return <img onClick={onClick} src={image} alt={alt} className={classes} />;
  }

  return (
    <div onClick={onClick} className={classes}>
      {text.substring(0, 2)}
    </div>
  );
}

export default Avatar;
