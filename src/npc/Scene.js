/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: 61600546 (https://sketchfab.com/61600546)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/13369f93708942df928497361c3765cf
title: Team Fortress 2 - Pyro
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Pyro(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/npc/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <primitive object={nodes._rootJoint} />
            <mesh material={materials.models_player_pyro_pyro_red} geometry={nodes.mesh_0.geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/npc/scene.gltf')
