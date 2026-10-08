import styles from './CubeList.module.css'

import * as Typography from '@/components/general/Typography'
import * as Components from '@/components/general'

import { cubes } from './cubes'
import { groupBy } from 'lodash'

export function CubeList() {
  const groupedCubes = groupBy(cubes, (cube) => cube.category)

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <Typography.SecondaryHeading>
          Individual Event Cubes
        </Typography.SecondaryHeading>

        <div className={styles.cubes}>
          {groupedCubes['individual'].map((cube, index) => (
            <Cube key={index} cube={cube} index={index} />
          ))}
        </div>
      </div>

      <div className={styles.category}>
        <Typography.SecondaryHeading>
          Team Draft Cubes
        </Typography.SecondaryHeading>
        <div className={styles.cubes}>
          {groupedCubes['team'].map((cube, index) => (
            <Cube key={index} cube={cube} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Cube(props: { index: number; cube: (typeof cubes)[number] }) {
  const { index, cube } = props

  return (
    <a href={cube.url} key={cube.url} className={styles.cube}>
      <div className={styles.name}>
        <div>{cube.name}</div>
        <Components.Rule />
        <span className={styles.number}>#{index}</span>
      </div>
      <div className={styles.designer}>Chef {cube.designer}</div>
      <p className={styles.description}>{cube.description}</p>
    </a>
  )
}
