import type { FC } from 'react'
import { useRecoilState } from 'recoil'

import styles from './index.module.css'

import { checkedState } from '../../recoil/checked'

export const KanaToggle: FC = () => {
  return (
    <div className={styles.toggle}>
      <Toggle />
      <div>あぁ</div>
    </div>
  )
}

const Toggle: FC = () => {
  const [checked, setChecked] = useRecoilState(checkedState)

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked((prev) => !prev)}
    />
  )
}
