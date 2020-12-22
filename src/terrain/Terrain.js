import React from 'react'
import Ground from './ground/Ground'

import Tree01 from './foliage/Tree01'
import Tree02 from './foliage/Tree02'
import Village01 from './examples/Village01'

export default function Terrain() {
  return (
    <group>
      <Tree02
        position={[5,0,5]}
        scale={[.015, .015, .015]}
      />
      <Tree02
        position={[5,0,-5]}
        scale={[.015, .015, .015]}
      />
      <Tree02
        position={[-5,0,-5]}
        scale={[.015, .015, .015]}
      />
      <Tree02
        position={[-5,0,5]}
        scale={[.015, .015, .015]}
      />
      <Ground />
    </group>
  )
}
