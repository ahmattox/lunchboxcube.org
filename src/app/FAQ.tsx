import styles from './FAQ.module.css'

import * as Typography from '@/components/general/Typography'
import * as Components from '@/components/general'

export function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.question}></div>
        <div className={styles.answer}></div>
      </div>
    </div>
  )
}
