import styles from './ContentBlock.module.css'

interface Props {
  children: React.ReactNode
}

export function ContentBlock(props: Props) {
  const { children } = props

  return (
    <div className={styles.container}>
      <div className={styles.shadow} />
      <div className={styles.background} />

      <div className={styles.content}>{children}</div>
    </div>
  )
}
