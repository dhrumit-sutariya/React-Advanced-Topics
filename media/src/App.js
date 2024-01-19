import MediaRecorder from "./Pages/MediaRecorder";
import ScreenCaptureDemo from "./Pages/ScreenCapture";
import "./App.css";
function App() {
  return (
    <div className="main">
      <div>
        <MediaRecorder />
      </div>
      <hr />
      <div>
        <ScreenCaptureDemo />
      </div>
    </div>
  );
}

export default App;
