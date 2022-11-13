import { selector } from 'recoil'

import { checkedState } from './checked'

import { YARUZO } from '../constants/yaruzo'
import { kanaToHira } from '../utils/kana2Hira'

export const yaruzoState = selector<string>({
  key: 'yaruzo',
  get: ({ get }) => {
    const checked = get(checkedState)
    const result = checked ? kanaToHira(YARUZO) : YARUZO

    return result
  },
})
