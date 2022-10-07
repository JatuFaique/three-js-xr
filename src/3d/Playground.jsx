import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Plane from "./Plane";
import Box from "./Box";

// Play around with basics of three js
// ex. Mesh, geometries, Positions and rotations

export default function Playground() {
  return (
    <Canvas>
      <Box position={[0, 0, 2]} />
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[1, 0, 1]} />
    </Canvas>
  );
}
