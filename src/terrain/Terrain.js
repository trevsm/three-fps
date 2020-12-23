import React from 'react'
import Ground from './ground/Ground'
import { Forest } from './foliage/Forest'
import { Tree03 } from './foliage/Tree03'
import { BoundaryFence } from './objects/BoundaryFence'

export default function Terrain() {
  return (
    <group>
      <Forest />
      <BoundaryFence />
      <Ground />
    </group>
  )
}
