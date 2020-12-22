import React from 'react'

import { forwardRef } from 'react'
import { useFrame } from 'react-three-fiber'

export const PlayerModel = forwardRef((props, ref) => {
  return <mesh ref={ref}></mesh>
})
