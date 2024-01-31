import React, { useEffect, useRef } from "react";

const CanvasDemo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(90, 90, 200, 90);

    context.beginPath();
    context.arc(400, 140, 50, 0, 2 * Math.PI, false);
    context.fillStyle = "skyblue";
    context.fill();
  }, [canvasRef]);
  return (
    <div>
      <h1>Canvas </h1>
      <canvas ref={canvasRef} width={500} height={300} />
    </div>
  );
};

export default CanvasDemo;
