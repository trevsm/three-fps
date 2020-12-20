import * as THREE from 'three'
import React from 'react'
import { useLoader } from 'react-three-fiber'
import { usePlane } from 'use-cannon'

import Height from './height.png'
import Normal from './normal.png'
import Color from './color.png'

export const Ground = props => {
  const mapWidth = 100, mapLength = 100
  const vX = 1024

  const [ref] = usePlane(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    args: [mapWidth, mapLength, vX, vX],
  }))

  const H = useLoader(THREE.TextureLoader, Height)
  const N = useLoader(THREE.TextureLoader, Normal)
  const C= useLoader(THREE.TextureLoader, Color)

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[mapWidth, mapLength, vX, vX]} />
      <meshStandardMaterial
        attach="material"
        normalMap={N}
        displacementMap={H}
        map={C}
        color="white"
      />
    </mesh>
  )
}
