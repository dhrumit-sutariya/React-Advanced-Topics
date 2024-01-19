import React, { useState } from "react";
import { ScreenCapture } from "react-screen-capture";

function ScreenCaptureDemo() {
  const [screenCapture, setScreenCapture] = useState(null);

  const handleCapturedImage = (capturedImage) => {
    setScreenCapture(capturedImage);
  };

  const handleSave = () => {
    const downloadlink = document.createElement("a");
    const filename = "Screenshot.png";

    downloadlink.href = screenCapture;
    downloadlink.download = filename;
    downloadlink.click();
  };
  return (
    <ScreenCapture onEndCapture={handleCapturedImage}>
      {({ onStartCapture }) => (
        <div>
          <h1>Screen Capture</h1>
          <button onClick={onStartCapture}>Capture</button>
          <center>
            {screenCapture && <h3>Captured Image</h3>}
            {screenCapture && <img src={screenCapture} alt="Screenshot" />}
            <p>
              {screenCapture && <button onClick={handleSave}>Download</button>}
            </p>
          </center>
        </div>
      )}
    </ScreenCapture>
  );
}

export default ScreenCaptureDemo;
