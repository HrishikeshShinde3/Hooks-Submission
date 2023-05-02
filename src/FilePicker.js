import React, { useRef } from 'react';

function FilePicker() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a file</button>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
    </div>
  );
}

export default FilePicker;