import * as THREE from 'three'
import React from 'react'

import { useLoader } from 'react-three-fiber'
import { usePlane } from 'use-cannon'
import Dirt from './textures/dirt.png'

export default props => {
  const mapWidth = 10000,
    mapLength = 10000
  const vX = 32

  const [ref] = usePlane(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    args: [mapWidth, mapLength, vX, vX],
  }))

  const texture = useLoader(THREE.TextureLoader, Dirt)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(mapWidth/4, mapLength/4)

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry
        attach="geometry"
        args={[mapWidth, mapLength, vX, vX]}
      />
      <meshStandardMaterial
        attach="material"
        map={texture}
      />
    </mesh>
  )
}
