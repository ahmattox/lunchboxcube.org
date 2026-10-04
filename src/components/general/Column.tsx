import styles from './Column.module.css'

import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  secondary?: boolean
}

export const Column: React.FC<Props> = (props) => {
  const { children, secondary = false } = props

  return (
    <div
      className={classNames(styles.container, {
        [styles.secondary]: secondary,
      })}
    >
      {children}
    </div>
  )
}
