import React from 'react'
import { Fence01 } from './Fence01'

const wall = (rotation, pX, fenceWidth, fenceCount) => {
  const wallArr = []
  for (let index = 0; index < fenceCount; index++) {
    let x = rotation ? fenceWidth / 2 : fenceWidth
    let y = rotation ? fenceWidth / 2 + fenceWidth * index : fenceWidth * index
    let temp

    if (rotation) {
      temp = x
      x = y
      y = temp
    }

    wallArr.push(
      <Fence01
        scale={[0.5, 0.5, 0.5]}
        position={[pX[0] + x, pX[1], pX[2] + y]}
        rotation={[0, !rotation ? Math.PI / 2 : 0, 0]}
      />
    )
  }
  return wallArr
}

export function BoundaryFence() {
  let sX = 10

  let X = -(sX/2) * 12
  let Y = X - 12
  let nX = Y + 12 * sX
  
  return (
    <group>
      <group>{wall(true, [X, 0, Y], 12, sX)}</group>
      <group>{wall(false, [Y, 0, X], 12, sX)}</group>
      <group>{wall(true, [X, 0, nX], 12, sX)}</group>
      <group>{wall(false, [nX, 0, X], 12, sX)}</group>
    </group>
  )
}
