import type { FC } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import styles from './index.module.css'

import { checkedState } from '../../recoil/checked'

export const KanaToggle: FC = () => {
  const setChecked = useSetRecoilState(checkedState)

  return (
    <div className={styles.toggle} onClick={() => setChecked((prev) => !prev)}>
      <Toggle />
      <div style={{ userSelect: 'none' }}>あぁ</div>
    </div>
  )
}

const Toggle: FC = () => {
  const checked = useRecoilValue(checkedState)

  return <input type="checkbox" checked={checked} />
}
