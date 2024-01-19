import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

function WebSocketDemo() {
  const [inputValue, setInputValue] = useState("");
  const [serverReply, setServerReply] = useState("");

  useEffect(() => {
    client.onopen = () => {
      console.log("User Connected");
    };

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("Got Reply :- ", dataFromServer);

      setServerReply(dataFromServer.msg);
    };
  }, []);

  const handleClick = () => {
    console.log("clicked ");
    client.send(
      JSON.stringify({
        type: "message",
        msg: inputValue,
      })
    );
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>websocket</h1>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="please enter text here"
          />
          <button onClick={handleClick}>Send Message</button>
        </div>
        <div>{serverReply && <p>Server Reply: {serverReply}</p>}</div>
      </div>
    </>
  );
}

export default WebSocketDemo;
