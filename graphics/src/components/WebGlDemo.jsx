import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Cube = () => {
  const cubeRef = useRef();

  // This function will be called on every frame
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const WebGlDemo = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
};

export default WebGlDemo;
