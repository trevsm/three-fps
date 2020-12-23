import React, { useRef } from 'react'
import { Sky, Stars } from '@react-three/drei'

export const Lighting = (props) => {
  const d = 20
  return (
    <>
      {props.day.current ? (
        <>
          <Sky
            distance={450000}
            sunPosition={[1, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <directionalLight
            position={[0, 10, 20]}
            intensity={1}
            shadow-camera-left={d * -1}
            shadow-camera-bottom={d * -1}
            shadow-camera-right={d}
            shadow-camera-top={d}
            shadow-camera-near={0.1}
            shadow-camera-far={1500}
            color="white"
            castShadow
          />
          <hemisphereLight
            skyColor={'black'}
            groundColor={0xffffff}
            intensity={1}
            position={[0, 50, 0]}
          />
        </>
      ) : (
        <>
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
            intensity={.09}
            position={[0, 50, 0]}
          />
        </>
      )}
    </>
  )
}
