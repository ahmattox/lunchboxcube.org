import styles from './CubeList.module.css'

import * as Components from '@/components/general'

import { cubes } from './cubes'

export function CubeList() {
  return (
    <div className={styles.container}>
      {cubes.map((cube, index) => (
        <a href={cube.url} key={cube.url} className={styles.cube}>
          <div className={styles.name}>
            <div>{cube.name}</div>
            <Components.Rule />
            <span className={styles.number}>#{index}</span>
          </div>
          <div className={styles.designer}>{cube.designer}</div>
          <p className={styles.description}>{cube.description}</p>
        </a>
      ))}
    </div>
  )
}
