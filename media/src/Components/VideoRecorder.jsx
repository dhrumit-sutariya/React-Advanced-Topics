import { useState, useRef } from "react";

const mimeType = "video/webm";

const VideoRecorder = () => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const MediaRecorderRef = useRef(null);
  const liveVideoFeed = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);

  const getCameraPermission = async () => {
    setRecordedVideo(null);
    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = {
          audio: false,
          video: true,
        };

        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        const videoStream = await navigator.mediaDevices.getUserMedia({
          video: videoConstraints,
        });

        const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);
        setPermission(true);
        setStream(combinedStream);

        if (liveVideoFeed.current) {
          liveVideoFeed.current.srcObject = combinedStream;
        }
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = () => {
    if (stream) {
      setRecordingStatus("recording");
      const media = new MediaRecorder(stream, { mimeType });
      MediaRecorderRef.current = media;
      let localVideoChunks = [];

      MediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          localVideoChunks.push(event.data);
          setVideoChunks([...localVideoChunks]);
        }
      };

      MediaRecorderRef.current.onstop = () => {
        const videoBlob = new Blob(localVideoChunks, { type: mimeType });
        const videoUrl = URL.createObjectURL(videoBlob);
        setRecordedVideo(videoUrl);
        setVideoChunks([]);
      };

      MediaRecorderRef.current.start();
    }
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    if (MediaRecorderRef.current) {
      MediaRecorderRef.current.stop();
    }
  };
  return (
    <div>
      <h2>Video Recorder</h2>
      <main>
        <div className="video-controls">
          {!permission ? (
            <button onClick={getCameraPermission} type="button">
              Get Camera
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <button onClick={startRecording} type="button">
              Start Recording
            </button>
          ) : null}
          {recordingStatus === "recording" ? (
            <button onClick={stopRecording} type="button">
              Stop Recording
            </button>
          ) : null}
        </div>
        {recordedVideo ? (
          <div className="audio-player">
            <video src={recordedVideo} controls></video>
            <a download href={recordedVideo}>
              Download Recording
            </a>
          </div>
        ) : null}
      </main>
    </div>
  );
};
export default VideoRecorder;
