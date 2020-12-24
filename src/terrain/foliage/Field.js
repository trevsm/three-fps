import * as THREE from 'three'
import React from 'react'

import { useLoader } from 'react-three-fiber'
import Grass_Blades from './textures/dead_grass.png'

function Grass(props) {
  const texture = useLoader(THREE.TextureLoader, Grass_Blades)
  return (
    <group {...props}>
      <mesh position={[0, 1, 0]} rotation={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[3, 3, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          map={texture}
          transparent
          opacity={0.9}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeBufferGeometry attach="geometry" args={[3, 3, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          map={texture}
          transparent
          opacity={0.9}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function GrassClumpSmall(props) {
  let grassArr = []
  const pX = props.position
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const dX = Math.random() * 20 + 30
      const sX = Math.random() * 1.5 + 0.5
      const rX = Math.random() * Math.PI
      grassArr.push(
        <Grass
          position={[pX[0] + i * dX, pX[1], pX[2] + j * dX]}
          scale={[sX, sX, sX]}
          rotation={[0, rX, 0]}
        />
      )
    }
  }
  return grassArr
}

function GrassClumpMedium(props) {
  let grassArr = []
  const pX = props.position
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const dX = Math.random() * 5
      grassArr.push(
        <group  rotation={props.rotation}>
          <GrassClumpSmall position={[i * dX + pX[0], pX[1], j * dX + pX[2]]} />
        </group>
      )
    }
  }
  return grassArr
}

export function Field(props) {
  return (
    <group {...props}>
      <GrassClumpMedium position={[-50, 0, -50]} rotation={[0, 1.1, 0]} />
      <GrassClumpMedium position={[-50, 0, -50]} rotation={[0, 2.5, 0]} />
      <GrassClumpMedium position={[-50, 0, -50]} rotation={[0, 0, 0]} />
    </group>
  )
}
