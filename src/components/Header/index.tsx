import type { FC } from 'react'

import styles from './index.module.css'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>人力やるぞ</h1>
    </header>
  )
}
