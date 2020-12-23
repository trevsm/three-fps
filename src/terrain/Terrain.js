import React from 'react'
import Ground from './ground/Ground'
import {Forest} from './foliage/Forest'

export default function Terrain() {
  return (
    <group>
      <Forest />
      <Ground />
    </group>
  )
}
