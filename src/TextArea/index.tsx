import type { FC } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import styles from './index.module.css'

import { pastedState } from '../recoil/pasted'
import { yaruzoInputState } from '../recoil/yaruzoInput'

export const Textarea: FC = () => {
  const [yaruzoInput, setYaruzoInput] = useRecoilState<string>(yaruzoInputState)
  const setPasted = useSetRecoilState<boolean>(pastedState)

  return (
    <textarea
      className={styles.textarea}
      value={yaruzoInput}
      onChange={(e) => {
        e.preventDefault()
        setYaruzoInput(e.currentTarget.value)
      }}
      onPaste={(e) => {
        e.preventDefault()
        setPasted(true)
      }}
    />
  )
}
