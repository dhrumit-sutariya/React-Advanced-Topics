import React, { useEffect, useRef, useState } from "react";
import SimpleWebRTC from "simplewebrtc";

function WebRtcDemo() {
  const localVideoRef = useRef(null);
  const RemoteVideoRef = useRef(null);
  const webrtc = useRef(null);

  useEffect(() => {
    webrtc.current = new SimpleWebRTC({
      localVideoEl: localVideoRef.current,
      remoteVideosEl: RemoteVideoRef.current,
      autoRequestMedia: true,
    });
    console.log("ready for call");

    webrtc.current.on("readyToCall", () => {
      webrtc.current.joinRoom("dhrumit");
      console.log("joined call");
    });
    console.log("pow you are about to leave");

    return () => {
      console.log("left");

      webrtc.current.leaveRoom();
      webrtc.current.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Web-RTC</h1>
      <video ref={localVideoRef} autoPlay />
      <div ref={RemoteVideoRef}></div>
    </div>
  );
}

export default WebRtcDemo;
