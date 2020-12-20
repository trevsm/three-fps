import React from 'react'
import { Canvas } from 'react-three-fiber'
import { PointerLockControls } from '@react-three/drei'
import { Physics } from 'use-cannon'

import { Lighting } from './lighting/Lighting'
import { Ground } from './terrain/ground/Ground'
import { Player } from './player/Player'

export default function App() {
  return (
    <Canvas shadowMap gl={{ alpha: false }} camera={{ fov: 35 }}>
      <Lighting />
      <Physics gravity={[0, -10, 0]}>
        <Player />
        <Ground />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
