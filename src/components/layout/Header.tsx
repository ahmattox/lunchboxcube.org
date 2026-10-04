import styles from './Header.module.css'

import Link from 'next/link'

import logo from './lunch-box-logo.png'
import Image from 'next/image'

export function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image src={logo} width={200} alt="Lunch Box" />
      </Link>

      <div className={styles.headerDetails}>
        <p>
          A cube event supporting community and charitable giving in Baltimore
          MD.
        </p>
        <p> November 7-8, 2026</p>
      </div>
    </div>
  )
}
