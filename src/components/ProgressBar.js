import React from "react";

function ProgressBar({ progress, className }) {
  const style = {
    transform: `scaleX(${progress / 100})`,
  };

  return (
    <div className={`progress-bar ${className}`}>
      <div className='progress-bar__inner' style={style}></div>
    </div>
  );
}

export default ProgressBar;
