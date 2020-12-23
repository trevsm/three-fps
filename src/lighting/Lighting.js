import React from 'react'
import { Sky, Stars } from '@react-three/drei'

export const Lighting = () => {
  const d = 200
  return (
    <>
      {/* <Sky
        distance={450000}
        sunPosition={[1, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> */}
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
      <hemisphereLight
        skyColor={'black'}
        groundColor={0xffffff}
        intensity={0.03}
        position={[0, 50, 0]}
      />
      <directionalLight
        position={[-8, 20, 8]}
        intensity={0.1}
        shadow-camera-left={d * -1}
        shadow-camera-bottom={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        color="white"
        castShadow
      />
    </>
  )
}
