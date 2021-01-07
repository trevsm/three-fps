import * as THREE from 'three'
import React, {Suspense} from 'react'

import { useLoader } from 'react-three-fiber'
import { usePlane } from 'use-cannon'
import dirt from './textures/dirt.png'
import grass from './textures/grass_blades.png'
import { Plants } from './Grass'

function Foliage(props) {
  return (
    <Suspense fallback={null}>
      <group position={props.position}>
        <Plants
          rotation={props.rotation}
          texture={props.texture}
          count={props.count}
          spread={props.spread}
          amp={props.amp}
          width={props.width}
        />
      </group>
    </Suspense>
  )
}

export default props => {
  const mapWidth = 1000,
    mapLength = 1000
  const vX = 500

  const [ref] = usePlane(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    args: [mapWidth, mapLength, vX, vX],
  }))

  const texture = useLoader(THREE.TextureLoader, dirt)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(mapWidth / 4, mapLength / 4)

  return (
    <group>
      <Foliage
        texture={grass}
        count={300}
        spread={1}
        amp={.5}
        position={[0, 1, 0]}
      />
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry
          attach="geometry"
          args={[mapWidth, mapLength, vX, vX]}
        />
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
    </group>
  )
}
