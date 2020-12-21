import * as THREE from 'three'
import React from 'react'

import { useLoader } from 'react-three-fiber'
import { usePlane } from 'use-cannon'
import Grass from './textures/grass.jpg'

// import Height from './heightMaps/height.png'
// import Normal from './heightMaps/normal.png'
// import Color from './heightMaps/color.png'

export default props => {
  const mapWidth = 100,
    mapLength = 100
  const vX = 16

  // const H = useLoader(THREE.TextureLoader, Height)
  // const N = useLoader(THREE.TextureLoader, Normal)
  // const C = useLoader(THREE.TextureLoader, Color)

  const [ref] = usePlane(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    args: [mapWidth, mapLength, vX, vX],
  }))

  // geometry={H}
  /* <planeBufferGeometry args={[mapWidth, mapLength, vX, vX]} />
      <meshStandardMaterial
        attach="material"
        normalMap={N}
        displacementMap={H}
        map={C}
        color="white"
      /> */
  // color="#42523d"

  const texture = useLoader(THREE.TextureLoader, Grass)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(mapWidth, mapLength)

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[mapWidth, mapLength]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  )
}
