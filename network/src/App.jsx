import React, { useEffect, useState } from "react";
import WebSocketDemo from "./components/WebSocketDemo";
import WebRtcDemo from "./components/WebRtcDemo";

function App() {
  return (
    <>
      <WebSocketDemo />
      <hr />
      <WebRtcDemo />
    </>
  );
}

export default App;
