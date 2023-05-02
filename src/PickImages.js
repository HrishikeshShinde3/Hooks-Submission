import React, { useState, useRef, useEffect } from "react";

function App1() {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const handleChangeImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <img src={imageUrl} alt="selected" />
      <div id="buttonPlace">
      <button >Prev...</button>
      <button onClick={handleChangeImageClick}>Pick a File...</button>
      <button >Next...</button>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
    </div>
  );
}

export default App1;
