import { useEffect, useRef } from 'react'

import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

import { forwardRef } from 'react'

export const PlayerMovement = forwardRef((props, ref) => {
  const STATS = props.STATS
  const api = props.api
  const {forward, backward, left, right, jump, run, crouch} = props.C

  const velocity = useRef([0, 0, 0])
  const position = useRef([0, 0, 0])

  //no continuous jumping
  const jumpCoolDown = useRef()

  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()

  const camEuler = new THREE.Euler()

  const playerOnGround = () => {
    return position.current[1] < 1
  }

  const applyFriction = () => {
    velocity.current[0] -= velocity.current[0] / STATS.inertia
    velocity.current[2] -= velocity.current[2] / STATS.inertia
  }

  const calculateVelocity = () => {
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    camEuler.set(0, 0, 0)

    let FinalSpeed = STATS.speed

    if (left || right) {
      FinalSpeed = STATS.pan_speed()
    } else if (run) {
      FinalSpeed = STATS.run_speed()
    }

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(FinalSpeed)
      .applyEuler(props.camera.rotation)

    applyFriction()

    const v = [
      velocity.current[0] + direction.x / STATS.inertia,
      velocity.current[1],
      velocity.current[2] + direction.z / STATS.inertia,
    ]

    if (playerOnGround()) {
      api.velocity.set(v[0], v[1], v[2])

      if (!jump) jumpCoolDown.current = false
      if (jump && !jumpCoolDown.current) {
        jumpCoolDown.current = true
        api.velocity.set(v[0], STATS.jump_height(), v[2])
      }
    }
  }

  useEffect(() => {
    api.velocity.subscribe(v => (velocity.current = v))
    api.position.subscribe(v => (position.current = v))
  }, [])

  useFrame(() => {
    calculateVelocity()
  })

  return null
})
