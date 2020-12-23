import React from 'react'
import Tree02 from './Tree02'
import { Grass02 } from './Grass02'

export function randomTreeGrid(
    clumpDiameter,
    midDiameter,
    minDist,
    maxDist,
    minScale,
    maxScale
  ) {
    const midPos = Math.floor(clumpDiameter / 2)
  
    let map = []
    for (let i = 1; i < clumpDiameter - 1; i++) {
      map[i] = []
      for (let j = 1; j < clumpDiameter - 1; j++) {
        const active = Math.round(Math.random()) * 1
        let x = i - midPos,
          y = j - midPos
        if (
          active &&
          (x > midDiameter / 2 || x < midDiameter / -2) ||
          (y > midDiameter / 2 || y < midDiameter / -2)
        ) {
          const dX = Math.random() * maxDist + minDist
          const sX = Math.random() * maxScale + minScale
  
          map[i][j] = {
            active: 1,
            scale: [sX, sX, sX],
            position: [x * dX, 0, y * dX],
          }
        } else {
          map[i][j] = {}
        }
      }
    }
  
    let treeList = []
  
    for (let i = 1; i < clumpDiameter - 1; i++) {
      for (let j = 1; j < clumpDiameter - 1; j++) {
        if (map[i][j]['active']) {
          treeList.push(<>
          <Grass02 position={map[i][j]['position']} scale={[.05,.05,.05]}/>
            <Tree02
              key={`${i}${j}`}
              position={map[i][j]['position']}
              scale={map[i][j]['scale']}
            />
            </>
          )
        }
      }
    }
    return treeList
  }

  export function Forest(){
      return randomTreeGrid(20, 3, 7, 10, 0.01, 0.03)
  }