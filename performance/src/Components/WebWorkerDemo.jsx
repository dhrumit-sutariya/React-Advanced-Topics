import React, { useEffect, useState } from "react";
import Worker from "./worker";

function WebWorkerDemo() {
  const [result, setResult] = useState(null);
  const [show, setShow] = useState(false);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const myWorker = new Worker("worker.js");

    setWorker(myWorker);

    myWorker.onmessage = (message) => {
      console.log("Result Received", message);
      setResult(message.data);
    };

    return () => {
      worker.terminate();
    };
  }, []);

  const handleData = () => {
    worker.postMessage(1);
  };

  return (
    <div>
      <h1>Web Worker</h1>
      <button onClick={handleData}>Load Data</button>
      {result && <p>Result From Worker {result}</p>}
      <button onClick={() => setShow(true)}>Print</button>
      {show && <p>Hello</p>}
    </div>
  );
}

export default WebWorkerDemo;
