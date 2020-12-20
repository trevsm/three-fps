import React, { useEffect, useRef, Suspense } from 'react'
import { PointerLockControls } from '@react-three/drei'

import * as THREE from 'three'
import { useSphere } from 'use-cannon'
import { useThree, useFrame } from 'react-three-fiber'

import { usePlayerControls } from './PlayerControls'

export const Player = props => {
  const SPEED = 7
  const PLAYER_HEIGHT = 2.5
  const RUN_SPEED = SPEED * 1.5
  const PAN_SPEED = SPEED * 0.5
  const JUMP_HEIGHT = PLAYER_HEIGHT*3
  const INERTIA = 5

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 10, 0],
    ...props,
  }))

  const velocity = useRef([0, 0, 0])
  const position = useRef([0, 0, 0])

  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()

  const camEuler = new THREE.Euler()

  const { forward, backward, left, right, jump, run } = usePlayerControls()
  const { camera } = useThree()

  const playerOnGround = () => {
    return position.current[1] < 1
  }

  const applyFriction = () => {
    velocity.current[0] -= velocity.current[0] / INERTIA
    velocity.current[2] -= velocity.current[2] / INERTIA
  }

  const calculateVelocity = () => {
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    camEuler.set(0, 0, 0)

    let FinalSpeed = SPEED

    if (left || right) {
      FinalSpeed = PAN_SPEED
    } else if (run) {
      FinalSpeed = RUN_SPEED
    }

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(FinalSpeed)
      .applyEuler(camera.rotation)

    applyFriction()

    const v = [
      velocity.current[0] + direction.x / INERTIA,
      velocity.current[1],
      velocity.current[2] + direction.z / INERTIA,
    ]

    if (playerOnGround()) {
      api.velocity.set(v[0], v[1], v[2])

      if (jump) api.velocity.set(v[0], JUMP_HEIGHT, v[2])
    }
  }

  function moveCamera() {
    const pos = ref.current.position

    camera.position.y = pos.y + PLAYER_HEIGHT

    camera.position.x = pos.x

    camera.position.z = pos.z
  }

  useEffect(() => {
    api.velocity.subscribe(v => (velocity.current = v))
    api.position.subscribe(v => (position.current = v))
  }, [])

  useFrame(() => {
    moveCamera()
    calculateVelocity()
  })

  return (
    <>
      <PointerLockControls />
      <mesh ref={ref}></mesh>
    </>
  )
}
