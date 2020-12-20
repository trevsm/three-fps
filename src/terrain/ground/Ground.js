import * as THREE from 'three'
import React from 'react'
import { useLoader } from 'react-three-fiber'
import { usePlane } from 'use-cannon'
import grass from '../assets/grass.png'

export const Ground = props => {
  const [ref] = usePlane(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    args: [1000, 1000],
  }))

  const texture = useLoader(THREE.TextureLoader, grass)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(64, 64)
  
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <meshStandardMaterial map = { texture } color="green" />
    </mesh>
  )
}
