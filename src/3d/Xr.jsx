import React, { Suspense, useState } from 'react'
import { Interactive, XR, ARButton,XRButton, Controllers } from '@react-three/xr'
import { Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'



//Basic Geometries provided by three js ex. boxGeometry

function Box({ color, size, scale, children, ...rest } ) {
    return (
      <mesh scale={scale} {...rest}>
        <boxGeometry args={size} />
        <meshPhongMaterial color={color} />
        {children}
      </mesh>
    )
  }
  
  //Make the basic geometry work as a button

  function Button(props) {
    const [hover, setHover] = useState(false)
    const [color, setColor] = useState('blue')
  
    const onSelect = () => {
      setColor((Math.random() * 0xffffff) | 0)
    }
  
    return (
      <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
        <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props}>
          {/* Suspense component lets you “wait” for some code to load and declaratively specify a loading state (like a spinner) while we’re waiting: */}
          <Suspense fallback={null}>
            {/* Drie Provides some add on abstractions over the plain three js implementations */}
            <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
              Hello react-xr!
            </Text>
          </Suspense>
        </Box>
      </Interactive>
    )
  }

export default function XrComponent(){
    return (
        <>
        {/* Ar Button on App to View application in AR mode */}
          <ARButton />
          {/* Canvas as a scene in a 3d world */}
          <Canvas>
            <XR referenceSpace="local">
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Button position={[0, 0.1, -0.2]} />
              <Controllers />
            </XR>
          </Canvas>
        </>
      )
}
  