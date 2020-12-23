import React, { useRef } from 'react'

import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'

import { Lighting } from './lighting/Lighting'
import Player from './player/Player'
import { Stats } from './player/hud/Stats'
import Terrain from './terrain/Terrain'

export default function App() {
  console.warn = () => {} //remove warnings
  const day = useRef(false)

  return (
    <Canvas shadowMap gl={{ alpha: false }} camera={{ fov: 60 }}>
      <Lighting day={day} />
      {day.current ? null : <fog attach="fog" args={['black', 10, 100]} />}
      <Stats />
      <Physics gravity={[0, -10, 0]}>
        <Player />
        <Terrain />
      </Physics>
    </Canvas>
  )
}
