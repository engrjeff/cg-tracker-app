import React from "react";

const types = {
  images: ["image/png", "image/jpeg"],
  document: [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //word
    "application/vnd.openxmlformats-officedocument.presentationml.presentation", // ppt
    "application/pdf", //pdf
  ],
};

function FileInput({ onChange, accept, text = "Upload a file" }) {
  function handleChange(e) {
    let selected = e.target.files[0];

    if (selected && types[accept].includes(selected.type)) {
      onChange(selected);
    } else {
      onChange(null);
    }
  }

  return (
    <label className='file'>
      <input
        type='file'
        className='file-input'
        onChange={handleChange}
        accept={types[accept].join()}
        label={text}
      />
    </label>
  );
}

export default FileInput;
