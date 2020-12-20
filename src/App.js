import React, {Suspense} from 'react'
import { Canvas } from 'react-three-fiber'
import { PointerLockControls } from '@react-three/drei'
import { Physics } from 'use-cannon'

import { Lighting } from './lighting/Lighting'
import { Ground } from './terrain/ground/Ground'
import { Player } from './player/Player'
import { Stats } from './player/hud/Stats'

export default function App() {
  return (
    <Canvas shadowMap gl={{ alpha: false }} camera={{ fov: 50 }}>
      <Lighting />
      <Stats />
      <Physics gravity={[0, -10, 0]}>
        <Player />
        <Ground />
      </Physics>
      <PointerLockControls />
      <Suspense
        fallback={<div>loading...</div>}
      ></Suspense>
    </Canvas>
  )
}
