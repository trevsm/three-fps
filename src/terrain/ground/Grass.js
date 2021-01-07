import React, { useRef, useLayoutEffect, useMemo, Suspense } from 'react'
import { perlin } from '../functions/Math'
import * as THREE from 'three'
import { useFrame, useLoader } from 'react-three-fiber'
// import { useFrame } from 'react-three-fiber'

export function Plants(props) {
  const ref = useRef()
  const ref2 = useRef()
  const S = 2

  const count = Math.pow(props.count, 2)
  const cX = Math.pow(count, 1 / 2) / 2
  const sX = props.spread // spacing

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
        y = props.amp * perlin.get(0.1 * x, 0.1 * z)
        positions[index].set(
          x * sX + Math.random() * sX,
          y,
          z * sX + Math.random() * sX
        )
        transform.setPosition(positions[index])

        ref.current.setMatrixAt(index, transform)
        ref2.current.setMatrixAt(index, transform)

        index++
      }
    }
  }, [])

  const grassBaseGeometry = new THREE.PlaneBufferGeometry(S, S)
  const grassBaseGeometry2 = new THREE.PlaneBufferGeometry(S, S)

  const positionAttribute = grassBaseGeometry.attributes.position
  const positionAttribute2 = grassBaseGeometry2.attributes.position

  for (let i = 0; i < positionAttribute.count; i++) {
    let x = positionAttribute.getX(i)
    let y = positionAttribute.getY(i)
    let z = positionAttribute.getZ(i)

    positionAttribute.setXYZ(i, x, y, z)
    positionAttribute2.setXYZ(i, z, y, x)
  }

  const texture = useLoader(THREE.TextureLoader, props.texture)

  return (
    <group rotation={props.rotation}>
      <group>
        <instancedMesh args={[grassBaseGeometry, null, count]} ref={ref}>
          <meshStandardMaterial
            side={THREE.DoubleSide}
            alphaTest={0.5}
            transparent
            map={texture}
          />
        </instancedMesh>
      </group>
      <group>
        <instancedMesh args={[grassBaseGeometry2, null, count]} ref={ref2}>
          <meshStandardMaterial
            side={THREE.DoubleSide}
            alphaTest={0.5}
            transparent
            map={texture}
          />
        </instancedMesh>
      </group>
    </group>
  )
}
