import React, { useEffect, useState } from "react";

function ProgressBar({ progress, className, onDone }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    console.log("PROGRESS RUNNING:", progress + "%");
    let timer;

    if (progress === 100) {
      timer = setTimeout(() => {
        setIsDone(true);
        if (onDone) onDone();
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [onDone, progress]);

  const style = {
    transform: `scaleX(${progress / 100})`,
  };

  return (
    <>
      {isDone && <p className='text-size-13'>Uploaded!</p>}
      <div className={`progress-bar ${className}`}>
        <div className='progress-bar__inner' style={style}></div>
      </div>
    </>
  );
}

export default ProgressBar;
