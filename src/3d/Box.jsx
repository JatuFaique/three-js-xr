import React from "react";
import { DoubleSide } from "three";

export default function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[10, 5]} />
      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  );
}
