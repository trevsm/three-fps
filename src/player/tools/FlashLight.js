import React, { forwardRef, useMemo } from 'react'
import { useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'

export const FlashLight = forwardRef((props, ref) => {
  const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
  light.angle = .2

  function moveLight() {
    const pos = ref.current.position

    light.position.y = pos.y + props.STATS.player_height

    light.position.x = pos.x

    light.position.z = pos.z
  }

  function moveTarget() {
    const pos = ref.current.position

    light.target.position.y = pos.y + props.STATS.player_height - .1

    light.target.position.x = pos.x + Math.cos(props.camera.rotation.x)

    light.target.position.z = pos.z + Math.sin(props.camera.rotation.z)
  }


  useFrame(()=>{
    moveLight()
    moveTarget()
  })
  return (
    <>
      <primitive object={light} penumbra/>
      <primitive object={light.target} position={[0, 2, 0]} />
    </>
  )
})
