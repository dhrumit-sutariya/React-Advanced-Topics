import React, { useEffect, useState } from "react";

function FileReaderDemo() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(file);
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Image Reader</h1>
      <form>
        <label htmlFor="fileInput">Upload Image:</label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />
      </form>
      {selectedFile && (
        <div>
          <h2>Preview:</h2>
          <img
            src={previewUrl}
            alt="Uploaded preview"
            style={{ maxWidth: "100%" }}
          />
          <p>Filename: {selectedFile.name}</p>
          <p>File type: {selectedFile.type}</p>
          <p>File size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  );
}

export default FileReaderDemo;
