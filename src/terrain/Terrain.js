import React from 'react'
import Ground from './ground/Ground'
import { Forest } from './foliage/Forest'
import { BoundaryFence } from './objects/BoundaryFence'
import { Field } from './foliage/Field'

export default function Terrain() {
  return (
    <group>
      <Forest />
      <BoundaryFence />
      {/* <Field /> */}
      <Ground />
    </group>
  )
}
