import React, { forwardRef } from 'react'
import { useThree } from 'react-three-fiber'

import { useSphere } from 'use-cannon'

import { PlayerMovement } from './PlayerMovement'
import { PlayerCamera } from './PlayerCamera'
import { PlayerModel } from './PlayerModel'
import { usePlayerControls } from './PlayerControls'

import { FlashLight } from './tools/FlashLight'

export default function Player(props) {
  const STATS = {
    speed: 5,
    player_height: 2.5,
    run_speed: () => STATS.speed * 2,
    pan_speed: () => STATS.speed * 0.6,
    jump_height: () => STATS.player_height * 3,
    inertia: 5,
  }

  // Player hitbox
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, STATS.player_height, 0],
    size: [1, 32, 32],
    ...props,
  }))

  const { camera } = useThree()
  const {
    forward,
    backward,
    left,
    right,
    jump,
    run,
    crouch,
    toggle_light,
  } = usePlayerControls()

  return (
    <group>
      <PlayerCamera ref={ref} STATS={STATS} camera={camera} c={{ crouch }} />
      <FlashLight
        ref={ref}
        STATS={STATS}
        camera={camera}
        C={{ toggle_light }}
      />
      <PlayerMovement
        ref={ref}
        api={api}
        STATS={STATS}
        camera={camera}
        C={{ forward, backward, left, right, jump, run, crouch }}
      />
      {/* <PlayerModel ref={ref} /> */}
    </group>
  )
}
