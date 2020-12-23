/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: grimren13 (https://sketchfab.com/grimren13)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/models/ed72511b36c14446a1b596b7e3686d73
title: Pine Tree Single 01
*/

import React, { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useBox } from 'use-cannon'


export function Tree03(props) {
  const visibleHitBox = useRef(false)

  const [ref] = useBox(() => ({
    mass: 0,
    args: [1.5, 20, 1.5],
    ...props,
  }))

  const { nodes, materials } = useGLTF('/models/trees/tree03/scene.gltf')
  return (
    <mesh ref={ref} scale={props.scale} dispose={null}>
      {visibleHitBox.current ? (
        <>
          <boxBufferGeometry
            attach="geometry"
            args={[
              1.5 / props.scale[0],
              20 / props.scale[1],
              1.5 / props.scale[2],
            ]}
          />
          <meshLambertMaterial color="red" opacity={0.7} transparent />
        </>
      ) : null}

      <Suspense fallback={null}>
        <group dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh castShadow receiveShadow
                material={materials.Mat_pine_tree_bark_lambert3}
                geometry={nodes.tree_Mat_pine_tree_bark_lambert3_0.geometry}
              />
              <mesh castShadow receiveShadow
                material={materials.Mat_pine_tree_branch_lambert2}
                geometry={
                  nodes.group47_Mat_pine_tree_branch_lambert2_0.geometry
                }
              />
            </group>
          </group>
        </group>
      </Suspense>
    </mesh>
  )
}

useGLTF.preload('/models/trees/tree03/scene.gltf')
