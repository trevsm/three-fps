import React from 'react'

import { forwardRef } from 'react'
import { useFrame } from 'react-three-fiber'

export const PlayerModel = forwardRef((props, ref) => {
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshLambertMaterial attach="material" color='white' />
    </mesh>
  )
})
