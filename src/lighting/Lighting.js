import React from 'react'
import { Sky } from '@react-three/drei'

export const Lighting = () => {
  const d = 8.25
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[1, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <hemisphereLight
        skyColor={'black'}
        groundColor={0xffffff}
        intensity={0.5}
        position={[0, 50, 0]}
      />
      <directionalLight
        position={[-8, 20, 8]}
        shadow-camera-left={d * -1}
        shadow-camera-bottom={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        castShadow
      />
    </>
  )
}
