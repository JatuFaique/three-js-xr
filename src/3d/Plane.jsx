import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { DoubleSide } from "three";

export default function Box(props) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 5]} />
      <meshStandardMaterial color="royalBlue" side={DoubleSide} />
    </mesh>
  );
}
