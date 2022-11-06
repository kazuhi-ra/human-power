import { selector } from 'recoil'
import { match, P } from 'ts-pattern'

import { yaruzoInputState } from './yaruzoInput'

import { YARUZO } from '../constants/yaruzo'

type StatefulChar = {
  char: string
  status: 'ok' | 'ng' | 'pending'
}

export const statefulCharState = selector<StatefulChar[]>({
  key: 'statefulChar',
  get: ({ get }) => {
    const yaruzoInput = get(yaruzoInputState)
    const target = yaruzoInput.split('')

    const result: StatefulChar[] = YARUZO.split('').map((char, index) => {
      const status = match<string, StatefulChar['status']>(target[index])
        .with(P.nullish, () => 'pending')
        .with(char, () => 'ok')
        .with(P.string, () => 'ng')
        .exhaustive()

      return { char, status }
    })

    return result
  },
})
