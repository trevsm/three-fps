import React, { forwardRef, useMemo } from 'react'
import { useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'

export const FlashLight = forwardRef((props, ref) => {
  const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
  light.angle = 0.2
  light.intensity = 2

  function moveLight() {
    const pos = ref.current.position

    light.position.y = pos.y + props.STATS.player_height

    light.position.x = pos.x

    light.position.z = pos.z
  }

  function moveTarget() {
    var dist = 10
    var cwd = new THREE.Vector3()

    props.camera.getWorldDirection(cwd)

    cwd.multiplyScalar(dist)
    cwd.add(props.camera.position)

    light.target.position.set(cwd.x, cwd.y, cwd.z)
    light.target.setRotationFromQuaternion(props.camera.quaternion)
  }
  useFrame(() => {
    moveLight()
    moveTarget()
  })
  return (
    <>
      <primitive object={light} penumbra />
      <primitive object={light.target} position={[0, 2, 0]} />
    </>
  )
})
