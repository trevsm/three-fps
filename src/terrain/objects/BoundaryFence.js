import React from 'react'
import { Fence01 } from './Fence01'

export function BoundaryFence() {
  return (
    <>
      <Fence01
        scale={[0.5, 0.5, 0.5]}
        position={[5, 0, 5]}
        rotation={[0, 0, 0]}
      />
      <Fence01
        scale={[0.5, 0.5, 0.5]}
        position={[5 + 12, 0, 5]}
        rotation={[0, 0, 0]}
      />
      <Fence01
        scale={[0.5, 0.5, 0.5]}
        position={[5 + 12 * 2, 0, 5]}
        rotation={[0, 0, 0]}
      />
      <Fence01
        scale={[0.5, 0.5, 0.5]}
        position={[5 + 12 * 3, 0, 5]}
        rotation={[0, 0, 0]}
      />
    </>
  )
}
