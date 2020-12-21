import React from 'react'
import { useThree } from 'react-three-fiber'

import { useSphere } from 'use-cannon'

import { PlayerMovement } from './PlayerMovement'
import { PlayerCamera } from './PlayerCamera'

export default function Player(props) {
  const STATS = {
    speed: 7,
    player_height: 2.5,
    run_speed: () => STATS.speed * 2,
    pan_speed: () => STATS.speed * 0.6,
    jump_height: () => STATS.player_height * 3,
    inertia: 5,
  }

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, STATS.player_height, 0],
    ...props,
  }))

  const { camera } = useThree()

  return (
    <group>
      <PlayerCamera ref={ref} STATS={STATS} camera={camera} />
      <PlayerMovement ref={ref} api={api} STATS={STATS} camera={camera} />
      <mesh ref={ref}></mesh>
    </group>
  )
}
