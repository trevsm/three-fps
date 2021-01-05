import React, { useRef, useLayoutEffect, useMemo, Suspense } from 'react'
import { perlin } from '../functions/Math'
import * as THREE from 'three'
import grass from './textures/grass_blades.png'
import { useLoader } from 'react-three-fiber'
// import { useFrame } from 'react-three-fiber'

export function Grass(props) {
  const ref = useRef()

  const count = Math.pow(300, 2)
  const cX = Math.pow(count, 1 / 2) / 2
  const sX = 1 // spacing

  const { positions, transform } = useMemo(() => {
    const positions = [...Array(count)].map(() => new THREE.Vector3())
    const transform = new THREE.Matrix4()
    return { positions, transform }
  }, [])

  useLayoutEffect(() => {
    let index = 0
    let y = 0
    for (let x = -cX; x < cX; x++) {
      for (let z = -cX; z < cX; z++) {
        y = 1 * perlin.get(0.2 * x, 0.2 * z)
        positions[index].set(
          x * sX + Math.random() * sX,
          y,
          z * sX + Math.random() * sX
        )
        transform.setPosition(positions[index])
        ref.current.setMatrixAt(index, transform)
        index++
      }
    }
  }, [])

  const grassBaseGeometry = new THREE.PlaneBufferGeometry(2, 2)
  const positionAttribute = grassBaseGeometry.attributes.position

  for (let i = 0; i < positionAttribute.count; i++) {
    let x = positionAttribute.getX(i)
    let y = positionAttribute.getY(i)
    let z = positionAttribute.getZ(i)

    // z += Math.random() * 0.1

    positionAttribute.setXYZ(i, x, y, z)
  }

  const texture = useLoader(THREE.TextureLoader, grass)

  return (
    <group {...props}>
      <instancedMesh args={[grassBaseGeometry, null, count]} ref={ref}>
        <meshLambertMaterial
          side={THREE.DoubleSide}
          alphaTest={0.5}
          transparent
          opacity={1}
          map={texture}
        />
      </instancedMesh>
    </group>
  )
}

export function GrassPatch(props) {
  return (
    <Suspense fallback={null}>
      <group {...props}>
        <Grass rotation={[0, (Math.PI * 1) / 4, 0]} />
        <Grass rotation={[0, (Math.PI * 2) / 4, 0]} />
        <Grass rotation={[0, (Math.PI * 3) / 4, 0]} />
        <Grass rotation={[0, (Math.PI * 4) / 4, 0]} />
      </group>
    </Suspense>
  )
}
