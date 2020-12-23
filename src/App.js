import React from 'react'

import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'

import { Lighting } from './lighting/Lighting'
import Player from './player/Player'
import { Stats } from './player/hud/Stats'
import Terrain from './terrain/Terrain'

export default function App() {
  console.warn = () => {} //remove warnings

  return (
    <Canvas shadowMap gl={{ alpha: false }} camera={{ fov: 50 }}>
      <Lighting />
      <fog attach="fog" args={["#0e0e0e", 10, 100]} />
      <Stats />
      <Physics gravity={[0, -10, 0]}>
        <Player />
        <Terrain />
      </Physics>
    </Canvas>
  )
}
